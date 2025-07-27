import React from "react";
import hindu from "../assets/images/hindu.png";
import christian from "../assets/images/christian.jpg";
import muslim from "../assets/images/muslim.png";
import interfaith from "../assets/images/interfaith.png";

const cards = [
  {
    title: "Hindu Invitation Collections",
    image: hindu,
  },
  {
    title: "Christian Invitation Collections",
    image: christian,
  },
  {
    title: "Muslim Invitation Collections",
    image: muslim,
  },
  {
    title: "Interfaith Invitation Collections",
    image: interfaith,
  },
];

const Gallery = () => {
  return (
    <section className="bg-[#E6E6FA] py-12 px-6 md:px-24 font-poppins">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-80 w-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <button className="bg-[#FFAB0D] text-black font-bold py-2 px-6 rounded hover:bg-amber-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
