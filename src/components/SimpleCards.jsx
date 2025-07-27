import React from 'react';

const cards = [
  {
    id: 1,
    title: "Traditional Open-fold Style Hindu Wedding Card",
    image: "/src/assets/images/card1.png",
    price: "₹5.00",
  },
  {
    id: 2,
    title: "Vibrant Hindu Invitation Open Fold - Matte Finish",
    image: "/src/assets/images/card2.png",
    price: "₹6.00",
  },
  {
    id: 3,
    title: "Dual Vertical Panel Hindu Wedding Invite",
    image: "/src/assets/images/card3.png",
    price: "₹6.00",
  },
  {
    id: 4,
    title: "Ornamental Hindu Invitation with Floral Artwork",
    image: "/src/assets/images/card4.png",
    price: "₹7.00",
  },
  {
    id: 5,
    title: "Simple Elegant Hindu Invite – Minimal Design",
    image: "/src/assets/images/card5.jpg",
    price: "₹6.50",
  },
  {
    id: 6,
    title: "Traditional Red Hindu Marriage Invite – Gold Foil",
    image: "/src/assets/images/card6.png",
    price: "₹8.00",
  },
];

const SimpleCards = () => {
  return (
    <div className="bg-[#e9e6fb] min-h-screen py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Simple and Affordable Wedding Cards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-contain p-4"
            />
            <div className="px-4 pb-4">
              <h2 className="text-sm font-medium mt-2 mb-1">{card.title}</h2>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm font-semibold">{card.price}</p>
                <div className="flex gap-2 text-gray-500">
                  <button title="Add to Wishlist">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <button title="View Details">
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCards;
