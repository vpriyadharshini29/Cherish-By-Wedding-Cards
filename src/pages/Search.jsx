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
      <h1 className="text-center text-xl font-semibold text-gray-800 mb-1">
        Everything You Need, to Plan your Dream Wedding
      </h1>
      <p className="text-center text-sm text-gray-600 mb-6">
        Search for vendors, cards, ideas and real wedding stories and more!
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <button className="bg-yellow-400 text-sm font-semibold text-white px-4 py-1 rounded">
          All
        </button>
        {filters.map((tag, idx) => (
          <span
            key={idx}
            className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm border"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search wedding cards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Ideas for you</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ideas.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-2 text-center text-sm font-medium text-gray-700">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

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
