// Reviews.tsx
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Review {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Gary How",
    image: "https://i.pinimg.com/564x/ca/cb/83/cacb834f44bca11f22e756a077b92e59.jpg",
    rating: 5,
    text: "This vacation site provided an incredible experience! The destinations were stunning, and the accommodations were luxurious yet affordable.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 4,
    text: "A memorable trip with exceptional service. The tours were well organized, and the staff was very friendly and accommodating.",
  },
  {
    id: 3,
    name: "Samuel Lee",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "Absolutely amazing! The cultural experiences and breathtaking scenery made this trip unforgettable. Highly recommended!",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 4,
    text: "Beautiful locations and great accommodations. There were a few hiccups along the way, but overall, it was a wonderful experience.",
  },
  {
    id: 5,
    name: "Michael Brown",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "From start to finish, this was a seamless experience. The itinerary was perfect, and the sights were breathtaking. Would book again!",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    image: "https://i.pravatar.cc/150?img=6",
    rating: 4,
    text: "The guides were knowledgeable, and the activities were well thought out. A great trip that offered both adventure and relaxation.",
  },
];

const Reviews: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < rating ? (
          <AiFillStar key={i} className="text-yellow-500" />
        ) : (
          <AiOutlineStar key={i} className="text-yellow-500" />
        )
      );
    }
    return stars;
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Guests Are Saying
        </h2>
        <p className="text-lg text-gray-600">
          Hear from our happy travelers who have experienced the adventure of a lifetime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                className="w-16 h-16 rounded-full object-cover mr-4"
                src={review.image}
                alt={review.name}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
            </div>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
