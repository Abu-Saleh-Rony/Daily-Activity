import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='main'>
            <div className="div-1">
                <div className='desc-cart'>
                    <h2 className='titles'>Question-01:</h2>
                    <h3 className='titles'>How does react work?</h3>
                </div>
                <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.</p>
            </div>
            <br />
            <br />
            <div className="div-2">
                <div className='desc-cart'>
                    <h2 className='titles'>Question-02:</h2>
                    <h3 className='titles'>Difference between props and state in react?</h3>
                </div>
                <p>Props are used to pass data from one component to another on the other hand the state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <br />
            <br />
            <div className="div-3">
                <div className='desc-cart'>
                    <h2 className='titles'>Question-03:</h2>
                    <h3 className='titles'>
                        useeffect api without data load how many works in react?
                    </h3>
                </div>
                <p>When it comes time to load external data from a server, we need a way to fit that into our component flow in a way that won't block rendering, or impact the user experience in a negative way. In React, we'll handle this with the useEffect hook. In this lesson, we'll use the useEffect hook to encapsulate a fetch call to a REST endpoint and talk about when it runs and how to prevent it from running on every render.</p>
            </div>

        </div >
    );
};

export default Question;