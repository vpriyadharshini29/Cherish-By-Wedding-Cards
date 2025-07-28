import React from 'react';
import { X } from 'lucide-react';

const WeddingDetailsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Edit Wedding Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Date</label>
            <input
              type="text"
              placeholder="Enter date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Time</label>
            <input
              type="text"
              placeholder="Enter time"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default WeddingDetailsModal;
