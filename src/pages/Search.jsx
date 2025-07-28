import React, { useState } from 'react';

// Import images
import hindu2 from '../assets/images/hindu2.png';
import simple1 from '../assets/images/simple1.png';
import muslim1 from '../assets/images/muslim1.png';
import scroll1 from '../assets/images/scroll1.png';
import luxury1 from '../assets/images/luxury1.png';
import post1 from '../assets/images/post1.png';
import scroll2 from '../assets/images/scroll2.png';
import ganesha from '../assets/images/ganesha.png';
import custom1 from '../assets/images/custom1.png';
import laser1 from '../assets/images/laser1.png';
import hindu3 from '../assets/images/hindu3.png';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters] = useState([
    'Wedding Cards',
    'Scroll Cards',
    'Theme Cards',
    'Birthday Cards',
    'Engagement Cards',
  ]);

  const ideas = [
    { title: 'Hindu Wedding Card', image: hindu2 },
    { title: 'Simple Wedding Card', image: simple1 },
    { title: 'Muslim Wedding Card', image: muslim1 },
    { title: 'Scroll Wedding Card', image: scroll1 },
    { title: 'Luxury Wedding Card', image: luxury1 },
  ];

  const popular = [
    { title: 'Post Theme Wedding Card', image: post1 },
    { title: 'Scroll Wedding Card', image: scroll2 },
    { title: 'Theme Wedding Card', image: ganesha },
    { title: 'Customize Wedding Card', image: custom1 },
    { title: 'Laser Wedding Card', image: laser1 },
    { title: 'Hindu Wedding Card', image: hindu3 },
  ];

  return (
    <div className="bg-[#EAE6FA] min-h-screen px-4 py-6">
    <section className="bg-[#ecebfb] py-10 px-4 md:px-10 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Everything You Need, to Plan your Dream Wedding
      </h2>
      <p className="text-gray-600 text-sm md:text-base mb-6">
        Search for vendors, cards, ideas and real wedding stories and more!
      </p>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
        <button className="px-6 py-2 rounded-md text-white font-semibold bg-amber-400 border border-amber-500 hover:bg-amber-500 transition">
          All
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-[60%] px-4 py-2 rounded-md border border-gray-400 focus:outline-none text-center font-semibold placeholder-gray-500"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center mt-6 gap-4">
        {[
          "Wedding Cards",
          "Scroll Cards",
          "Theme Cards",
          "Birthday Cards",
          "Engagement Cards",
        ].map((tag) => (
          <div
            key={tag}
            className="flex items-center bg-white px-4 py-2 rounded-full shadow text-sm font-semibold text-gray-800"
          >
            <span className="mr-2">{tag}</span>
            <button className="text-gray-500 hover:text-red-500 font-bold text-lg">
              ×
            </button>
          </div>
        ))}
      </div>
    </section>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Popular on this</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popular.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-2 text-center text-sm font-medium text-gray-700">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
