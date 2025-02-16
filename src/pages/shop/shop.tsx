import React from 'react';
import headphone from '../../images/shop/wireless.jpg';
import watch from '../../images/shop/samrtwatch.jpeg';
import mouse from'../../images/shop/mouse.jpeg';
import keyboard from'../../images/shop/keyboard.jpg';
import { FaShoppingCart } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Wireless Headphones', price: '$99', image: headphone },
  { id: 2, name: 'Smart Watch', price: '$149', image: watch},
  { id: 3, name: 'Gaming Mouse', price: '$49', image: mouse },
  { id: 4, name: 'Mechanical Keyboard', price: '$129', image: keyboard },
];

const Shop = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain rounded-md"
            />

            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
