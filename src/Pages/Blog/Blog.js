import React from 'react';
import js from '../../image/javascript-logo.png'
import react from '../../image/react.png'
import unit from '../../image/toptal-blog-image-1434577722896-66635fe9efe5898fa701037c0da6c0f4.jpg'
const Blog = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h2 className="card-title text-[20px] md:text-[32px] py-7 block text-center font-sans traking-wide text-[#1a191d] ">WellCome To  <span className='text-primary'>Blog</span></h2>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3 py-5'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={react} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">React App Performance</h2>
                        <p>I use react fragment to avoid extra nodes to the DOM,Use Production build before deploying,Use React.Suspense and React.Lazy for lazy loading Components,Virtualize a large list using react-window</p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={js} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Prototypical inheritance</h2>
                        <p>In JavaScript, objects inherit properties from other objects — the prototypes. That's the idea of prototypal inheritance.
                            JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the chain of prototypes.`</p>

                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={unit} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Unit Testing</h2>
                        <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected .It allows software developers to actually think through the design of the software and what has to be done before they write the code.</p>

                    </div>
                </div>

                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={js} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Search System</h2>
                        <p>The find() method returns the first value in an array that matches the conditions of a function. If there is no match, the method returns undefined . I also use includes The includes() method returns either a true or a false if a value exists in an array or not`</p>

                    </div>
                </div>


                <div class="card  bg-base-100 shadow-xl">
                    <figure><img src={react} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">State Mange</h2>
                        <p> By useState or useReducer we can manage our state .There Are four way we manage our state like : Local state,
                            Global state,
                            Server state,
                            URL state</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;