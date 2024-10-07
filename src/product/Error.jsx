import React from 'react'

const Error = ({error}) => {
    if ({ error })
        return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
            <p className="text-4xl font-bold text-red-600 animate-bounce">
                Oops! Something went wrong.
            </p>
            <p className="text-xl text-gray-600 mt-2">Please try again later.</p>
            </div>
        </div>
        );
}

export default Error
