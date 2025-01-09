import React from 'react';
import Image from 'next/image';
import Header2 from '@/Components/Header2';



const CartItem = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Graystone vase',
      description: 'A timeless ceramic vase with a tri-color gray glaze.',
      price: 85,
      quantity: 1,
      image: '/Images/cart1.png',
    },
    {
      id: 2,
      name: 'Basic white vase',
      description: 'Beautiful and simple, this is one for the classics.',
      price: 125,
      quantity: 1,
      image: '/Images/cart2.png',
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Header2 />
      <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8">
        <div className="max-w-full mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-6">Your shopping cart</h1>

          {/* Headings */}
          <div className="grid grid-cols-4 font-semibold text-gray-600 border-b border-gray-200 pb-2 mb-4">
            <p className="col-span-2">Product</p>
            <p className="text-center">Quantity</p>
            <p className="text-right">Total</p>
          </div>

          {/* Cart Items */}
          <div className="border-b border-gray-200 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center py-4"
              >
                {/* Product Details */}
                <div className="col-span-2 flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="font-medium text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="font-semibold mt-2">£{item.price}</p>
                  </div>
                </div>

                {/* Quantity */}
                <p className="text-center">{item.quantity}</p>

                {/* Total */}
                <p className="text-right">£{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-lg font-semibold">Subtotal: £{subtotal}</p>
            <p className="text-sm text-gray-500 mt-1">
              Taxes and shipping are calculated at checkout
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
