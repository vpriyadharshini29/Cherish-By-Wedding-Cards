import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const handleClick = (item) => {
    navigate(`/description/${item.id}`, { state: { product: item } });
  };

  return (
    <div className="px-6 md:px-24 py-10 min-h-screen bg-[#fff8f0] font-[Poppins]">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        My Wishlist
      </h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => handleClick(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 bg-[#FFF1DC]">
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-[#FFAB0D] font-semibold text-sm">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
