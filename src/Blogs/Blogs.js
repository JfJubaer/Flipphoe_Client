import React from 'react';

const Blogs = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-10 lg:container my-20 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">.1 What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">.2 How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">.3 What is a unit test? Why should we write unit tests?</h2>
                    <p>বাংলায়
                        In English
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">.4 React vs. Angular vs. Vue?</h2>
                    <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue. js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they're not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;