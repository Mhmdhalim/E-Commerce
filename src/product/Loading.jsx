import React from 'react'

const Loading = ({loading}) => {
    if ({loading})
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
        ); // 
}

export default Loading
