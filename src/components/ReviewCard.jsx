import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalProvider';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { theme } = useContext(GlobalContext);
  const { reviewerName, reviewerEmail, comment, date, rating } = review;

  const formattedDate = new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


  return (
    <div className={`max-w-sm mx-auto border rounded-lg p-4 shadow-sm transition-colors duration-300 
      ${theme==='dark' ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-800 border-gray-300'}`}>
      
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{reviewerName}</h3>
        <div className="flex justify-center mt-1 text-yellow-500 space-x-1">
          {[...Array(5)].map((_, index) =>
            rating >= index + 1 ? (
              <FaStar key={index} />
            ) : rating > index ? (
              <FaStarHalfAlt key={index} />
            ) : (
              <FaRegStar key={index} />
            )
          )}
        </div>
      </div>

      <p className={`italic mb-3 ${theme==='dark' ? 'text-gray-300' : 'text-gray-600'}`}>"{comment}"</p>
      <div className="text-sm text-gray-500 space-y-1">
        <div>📅 {formattedDate}</div>
        <div>✉️ {reviewerEmail}</div>
      </div>
    </div>
  );
};

export default ReviewCard;