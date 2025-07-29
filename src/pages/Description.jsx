import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

import thumb1 from '../assets/images/thumb1.jpg';
import thumb2 from '../assets/images/thumb2.jpg';
import variant from '../assets/images/variant.jpg';
import WeddingDetailsModal from './WeddingDetailsModal';

const Description = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(location.state?.product || null);
  const [quantity, setQuantity] = useState(1);
const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!product) {
      const fallback = {
        id,
        title: 'Sample Product',
        price: 299,
        image: 'https://via.placeholder.com/300x200.png?text=Product',
        description: 'This is a sample fallback product description.',
      };
      setProduct(fallback);
    }
  }, [id, product]);

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity,
    };
    addToCart(item);
    navigate('/cart');
  };

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-600 text-lg">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="bg-[#E6E6FA] min-h-screen px-6 md:px-24 py-10 font-[Poppins] text-[#1a1a1a]">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Images */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* <div className="flex lg:flex-col gap-3 justify-center">
            <img src={thumb1} alt="thumb1" className="w-16 h-16 object-cover border" />
            <img src={thumb2} alt="thumb2" className="w-16 h-16 object-cover border" />
          </div> */}
          <img
            src={product.image}
            alt={product.title}
            className="rounded-lg w-full lg:w-[400px] object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <p className="font-semibold text-sm text-gray-600">
            SKU Code: {product.id || 'KSND064'}
          </p>

          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>

          <p className="text-[#FF3B00] font-bold text-lg">
            ₹{product.price}{' '}
            <span className="text-sm font-normal text-gray-700">
              per unit inclusive of all taxes
            </span>
          </p>

          {/* Quantity + Buttons */}
          <div className="flex items-center gap-4">
            <span className="font-semibold">QTY:</span>
            <div className="flex items-center gap-2 border px-3 py-1 rounded-full bg-white shadow-sm">
              <button onClick={decreaseQty}>
                <Minus className="text-blue-600 w-4 h-4" />
              </button>
              <span className="w-6 text-center">{quantity}</span>
              <button onClick={increaseQty}>
                <Plus className="text-blue-600 w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => navigate('/payment', { state: { product, quantity } })}
              className="bg-[#FFAB0D] hover:bg-[#f79e05] text-white font-semibold px-4 py-2 rounded-md transition"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-white border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md"
            >
              Add to Cart
            </button>
          </div>

          {/* Variants */}
          <p className="text-sm text-gray-700">
            Variants (Same size & material but different color/Theme)
          </p>
          <img src={variant} alt="variant" className="w-24 h-24 border rounded-md" />
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold border-b pb-2">DESCRIPTION:</h3>
            <p className="text-sm text-gray-800 mt-2">
              {product.description ||
                'The blue wedding card has embossed floral design with customized Initial acrylic monogram. This Invitation card has matching insert and an envelope.'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b pb-2">ADDITIONAL COMMENTS</h3>
            <p className="text-sm text-gray-800 mt-2">
              Discounts are applied based on quantity at checkout.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold border-b pb-2">ADDITIONAL INFORMATION</h3>
            <div className="text-sm text-gray-800 mt-2 space-y-1">
              <p>📏 <strong>Height:</strong> 25 in</p>
              <p>📐 <strong>Width:</strong> 22 cm</p>
              <p>⚖️ <strong>Weight:</strong> 90 g</p>
            </div>
          </div>

         <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-extrabold text-pink-700 mb-6">You're Invited!</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-700 transition duration-200"
      >
        Wedding Details
      </button>

      {showModal && <WeddingDetailsModal onClose={() => setShowModal(false)} />}
    </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
