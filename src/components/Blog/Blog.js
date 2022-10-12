import React from 'react';

const Blog = () => {
    return (
        <div className='bg-blue-50'>
            <h2 className='text-2xl font-bold text-blue-700 mb-5'>Frequently Asked Questions</h2>
            <div className='w-4/5 m-auto'>
            <div className='border-2 border-blue-900 rounded mb-5'>
               <h3 className='text-xl font-bold text-blue-700'>What is the purpose of react?</h3> <hr />
               <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
               </p> 
               <ol className='font-medium'>
                    <li>Makes JavaScript coding easier.</li>
                    <li>Extremely competent.</li>
                    <li>Excellent cross-platform support.</li>
                    <li>Handles dependencies.</li>
                    <li>Template designing made easy.</li>
                    <li>Provides amazing developer tools.</li>
                    <li>UI focused designs.</li>
                    <li>Easy to adopt.</li>
                </ol>
            </div>
            <div className='border-2 border-blue-900 rounded mb-5'>
               <h3 className='text-xl font-bold text-blue-700'>How does context API work?</h3> <hr />
                    <p>Despite React's popularity, one of the biggest obstacles developers face when working with the library is components re-rendering excessively, slowing down performance and harming readability. Component re-rendering is especially damaging when developers need components to communicate with each other in a process known as prop drilling. The new React Context API, introduced with React v.16.3, allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. In this tutorial, we'll explore how we can use React Context to avoid prop drilling.</p>
            </div>
            <div className='border-2 border-blue-900 rounded mb-5'>
               <h3 className='text-xl font-bold text-blue-700'>What is useHref hook?</h3> <hr />
               <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;