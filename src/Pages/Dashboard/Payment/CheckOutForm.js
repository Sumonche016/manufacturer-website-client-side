import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckOutForm = ({ data }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [moneyId, setMoneyId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { price, _id } = data

    console.log(data.price)

    useEffect(() => {
        fetch('https://fast-forest-54973.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(result => {
                if (result?.clientSecret) {
                    setClientSecret(result?.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {

        event.preventDefault()

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)
        // confirm card 

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: data?.userName,
                        email: data?.email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setProcessing(false)
        } else {
            setCardError('')
            setMoneyId(paymentIntent.id)
            setSuccess('payment complete')
            //
            //store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://fast-forest-54973.herokuapp.com/payment/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(payResult => {
                    setProcessing(false);
                    console.log(payResult);
                })

        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary text-white mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>


            {
                cardError && <p className='text-red-300'>{cardError}</p>
            }

            {
                success && <div className=''>

                    <p className='text-green-500'>{success}</p>
                    <p className='text-red-500'>Your Transsection id :{moneyId}</p>

                </div>
            }
        </div>
    );
};


export default CheckOutForm;