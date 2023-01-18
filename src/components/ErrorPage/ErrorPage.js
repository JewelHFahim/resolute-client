import React from 'react';

const ErrorPage = () => {

    
    return (
        <div>
            <div className="hero bg-base-200 flex justify-center items-center my-32 ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl text-error font-bold p-5">404</h1>
                <button className="btn bg-slate-800">BackHome Page</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;