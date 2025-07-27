import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaCcMastercard, FaCcVisa, FaPaypal, FaMoneyBillAlt, FaRegCreditCard } from 'react-icons/fa';
import { SiPaytm, SiGooglepay, SiPhonepe } from 'react-icons/si';

const Payment = () => {
  const location = useLocation();
  const product = location.state?.product;
  const quantity = location.state?.quantity || 1;

  const totalPrice = product ? (product.price * quantity).toFixed(2) : '0.00';

  return (
    <div className="min-h-screen bg-[#e8e6f5] p-4 md:p-10 flex flex-col md:flex-row gap-6 justify-center items-start">
      {/* Payment Section */}
      <div className="bg-white rounded-xl p-6 w-full md:w-[480px] shadow">
        <div className="flex justify-around items-center mb-6">
          <FaCcMastercard size={32} />
          <FaCcVisa size={32} />
          <FaPaypal size={32} className="text-blue-500" />
          <div className="bg-black text-white text-xs px-2 py-1 rounded">UPI</div>
        </div>

        <div className="border rounded-md p-4 space-y-4">
          <p className="font-medium">Pay by UPI</p>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" name="upi" className="w-4 h-4" defaultChecked />
                <span className="text-lg font-medium">Paytm</span>
              </div>
              <SiPaytm size={24} />
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" name="upi" className="w-4 h-4" />
                <span className="text-lg font-medium">Gpay</span>
              </div>
              <SiGooglepay size={24} />
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" name="upi" className="w-4 h-4" />
                <span className="text-lg font-medium">Phonepe</span>
              </div>
              <SiPhonepe size={24} />
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="radio" name="upi" className="w-4 h-4" />
                <span className="text-lg font-medium">Cred</span>
              </div>
              <FaRegCreditCard size={24} />
            </label>
          </div>

          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-500 text-white font-semibold py-2 rounded shadow">
            <FaMoneyBillAlt size={18} /> Cash on Delivery
          </button>
        </div>

        <div className="mt-4 text-sm text-gray-700 flex items-start gap-2">
          <span className="text-blue-500 text-xl">i</span>
          Credit card payments may take up to 24 hours to be processed!
        </div>

        <label className="mt-4 flex items-center gap-2 text-sm">
          <input type="checkbox" defaultChecked className="accent-blue-600" />
          Save my payments details for future purchase
        </label>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-xl p-6 w-full md:w-[380px] shadow">
        <h2 className="text-xl font-bold underline mb-6">Order Summary</h2>

        <div className="flex justify-between mb-2 text-sm">
          <span>Date:</span>
          <span className="font-medium">16th Apr</span>
        </div>
        <div className="flex justify-between mb-4 text-sm">
          <span>Time:</span>
          <span className="font-medium">5.35pm</span>
        </div>

        <hr className="my-2" />

        <div className="mb-4">
          <p className="font-bold text-lg mb-2">Products</p>
          <div className="flex justify-between text-sm mb-1">
            <span>{product?.title || 'The Blue Wedding Card'}</span>
            <span>{quantity}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Added Compliment</span>
            <span>Hold Bag</span>
          </div>
        </div>

        <div className="bg-gray-100 text-sm rounded px-2 py-1 flex justify-between items-center mb-4">
          <span className="font-bold">MAR0057</span>
          <span className="text-green-600 font-medium">Coupon Applied</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span className="text-orange-500 font-medium">Subtotal</span>
          <span className="text-orange-500 font-medium">Rs. {totalPrice}</span>
        </div>

        <div className="flex justify-between text-sm mb-6">
          <span className="text-orange-500 font-medium">Shipping</span>
          <span className="text-orange-500 font-medium">0.00 <span className="text-xs text-gray-500 ml-1">Free</span></span>
        </div>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded">
          Pay Rs.{totalPrice}
        </button>
      </div>
    </div>
  );
};

export default Payment;
