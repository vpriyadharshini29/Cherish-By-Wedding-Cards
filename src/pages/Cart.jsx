import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const calculateSubTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const calculateTax = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity * 0.18, 0);

  const subTotal = calculateSubTotal();
  const totalTax = calculateTax();
  const total = subTotal + totalTax;

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-[Poppins]">
      <h2 className="text-2xl font-bold mb-6 text-black text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* Table Headers */}
          <div className="grid grid-cols-6 font-semibold text-black border-b pb-3 mb-4 text-center">
            <div>Image</div>
            <div>Product</div>
            <div>Qty</div>
            <div>Unit Price</div>
            <div>Tax</div>
            <div>Total</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center text-center border-b py-4 text-base"
            >
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-cover rounded"
                />
              </div>
              <div className="text-left">{item.title}</div>
              <div className="flex items-center justify-center space-x-2">
                <button
                  className="px-2 bg-gray-200 rounded"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 bg-gray-200 rounded"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <div>Rs.{Number(item.price).toFixed(2)}</div>
              <div>18%</div>
              <div>Rs.{(item.price * item.quantity * 1.18).toFixed(2)}</div>
            </div>
          ))}

          {/* Totals */}
          <div className="flex flex-col items-end text-black text-base mt-6 space-y-2">
            <p>
              <span className="font-semibold">Sub Total:</span>{" "}
              <span className="ml-4">Rs.{subTotal.toFixed(2)}</span>
            </p>
            <p>
              <span className="font-semibold">Total Tax:</span>{" "}
              <span className="ml-4">Rs.{totalTax.toFixed(2)}</span>
            </p>
            <p className="text-lg font-bold">
              <span>Total:</span> <span className="ml-4">Rs.{total.toFixed(2)}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center mt-10 space-x-6">
            <button
              className="bg-[#FFB31A] text-black px-6 py-3 rounded-md font-semibold shadow-md hover:brightness-110"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="bg-gray-400 text-black px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-500"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
