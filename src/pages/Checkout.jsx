import React from 'react';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaBox } from 'react-icons/fa';
import logo from '../assets/images/order-confirmed.png';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };
  

  return (
    <div className="min-h-screen bg-[#e8e6f5] p-6 md:p-10 font-[Poppins]">
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex-1  p-6 rounded-xl shadow-md">
         <img src={logo} alt="Logo" className="w-40 mx-auto mb-6" />

          <h2 className="text-xl font-semibold mb-2">Your Order</h2>
          <p className="text-sm text-gray-700 mb-4">
            Order ID: <span className="font-medium">566957680</span><br />
            Thank You! Your Order has been confirmed.
          </p>

          {/* Product Row */}
          <div className="flex items-center gap-4 mb-4">
            {/* <img
              src="https://via.placeholder.com/80x100.png?text=Product"
              alt="product"
              className="w-20 h-24 rounded-md object-cover border"
            /> */}
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">SKU: QSN0054</div>
              <div className="text-sm text-gray-600">SN (SN 54)</div>
            </div>
            <div className="font-semibold text-gray-800">Rs. 53.00</div>
          </div>

          {/* Summary */}
          <div className="border-t pt-4 text-sm text-gray-700">
            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>Rs. 153.40</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Shipping Charge</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Taxes</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between mb-1 text-green-600 font-medium">
              <span>Discount</span>
              <span>-5.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>Rs. 148.00</span>
            </div>
          </div>

          <button
  onClick={handleContinueShopping}
  className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded"
>
  Continue Shopping
</button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[320px]  p-6 rounded-xl shadow-md space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Customer</h3>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaUser /> John
            </div>
            <div className="text-xs text-gray-500 ml-6">1 order</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Customer Information</h3>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaEnvelope /> john057@gmail.com
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
              <FaBox /> 1 order
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p>John</p>
              <p>123 Elm street</p>
              <p>Anytown, ABC 12345</p>
              <p>Anywhere.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Billing Address</h3>
            <p className="text-sm text-gray-700">Same as Shipping address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
