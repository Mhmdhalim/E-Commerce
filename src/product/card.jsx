import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, describtion, img, price }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate('/card-page', {
            state: {
                img,
                title,
                describtion,
                price
            }
        });
    };

    return (
        <div className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg m-3 w-1/4">
            <img className="sm:w-10 w-24" src={img} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {describtion}
                </p>
                <p className="text-gray-700 text-base">
                    Price: ${price}
                </p>
                {/* View Details Button */}
                <button 
                    onClick={handleViewDetails} 
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Card;
