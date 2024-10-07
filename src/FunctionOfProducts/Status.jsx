import React from 'react';

const Status = ({ loading, error }) => {
    if (loading) {
        return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
            {/* Spinner Animation */}
            <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-teal-500"></div>
            <p className="mt-4 text-xl font-bold text-teal-600 animate-pulse">
                Loading...
            </p>
            </div>
        </div>
        );
    }

    if (error) {
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

    return null; // Return null if no loading or error
};

export default Status;
