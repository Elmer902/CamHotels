import React from "react";
import { FaStar } from "react-icons/fa";
import user1 from '../public/user1.jpg'
import user2 from '../public/user2.jpg'
import user3 from '../public/user3.jpg'


const reviews = [
  {
    name: "John Doe",
    text: "Camhotels lists K Hotel Douala with key amenities and location info but offers limited images and reviews.",
    rating: 5,
    image: user1
  },
  {
    name: "Jane Smith",
    text: "Nice location, good service, but rooms are a bit small.",
    rating: 4,
    image: user2
  },
  {
    name: "Alice Johnson",
    text: "Excellent hotel with friendly staff and great breakfast.",
    rating: 5,
   image: user3
  },
];

const Reviews = () => {
  return (
    <div className="my-20 px-4 sm:px-6 md:px-10 font-itim">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition duration-300 w-full"
          >
            {/* Top row: Image + Name + Stars */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full bg-gray-200 object-cover shadow-sm"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium text-gray-700">{review.name}</p>
                <div className="flex text-yellow-400 text-sm mt-1">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="mr-1" />
                    ))}
                </div>
              </div>
            </div>

            {/* Review text below */}
            <p className="text-gray-700 text-sm">{review.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Reviews;
