"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [couponCode, setCouponCode] = useState('');

  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      image: "/monitor.png"
    },
    {
      id: 2,
      name: "HI Gamepad",
      price: 1100,
      image: "/Gamepad.png"
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const shipping = 0; 
  const total = subtotal;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-10">
        <ul className="flex items-center">
          <li><Link href="/account" className="hover:text-gray-700">Account</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/my-account" className="hover:text-gray-700">My Account</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/product" className="hover:text-gray-700">Product</Link></li>
          <li className="mx-2">/</li>
          <li><Link href="/cart" className="hover:text-gray-700">View Cart</Link></li>
          <li className="mx-2">/</li>
          <li className="font-medium text-gray-800">Checkout</li>
        </ul>
      </nav>

      <h1 className="text-2xl font-bold mb-8">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/5 space-y-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
            <input
              type="text"
              id="firstName"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              id="companyName"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address*</label>
            <input
              type="text"
              id="streetAddress"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              id="apartment"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Town/City*</label>
            <input
              type="text"
              id="city"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-red-400 focus:ring-red-400"
                />
                <label className="ml-2 text-sm font-medium text-gray-700">
                  Save this information for faster check-out next time
                </label>
              </div>
        </div>

        <div className="w-full lg:w-2/5">
          <div className="bg-white rounded-lg p-6">
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 bg-gray-100 rounded overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="font-medium">${item.price}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
              <div className="flex justify-between py-2 text-lg font-bold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <input
                  id="bank"
                  name="paymentMethod"
                  type="radio"
                  value="bank"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                  className="h-4 w-4 text-red-500 focus:ring-red-400"
                />
                <label htmlFor="bank" className="ml-2 text-sm font-medium text-gray-700">
                  Bank
                </label>
                <div className="ml-auto flex items-center gap-1">
                  <div className="h-6 w-10 text-white text-xs flex items-center justify-center">
                    <img src="/bkash.png" alt="BKASH" />
                  </div>
                  <div className="h-6 w-10 bg-white  flex items-center justify-center">
                  <img src="/visa.png" alt="VISA" />

                  </div>
                  <div className="h-6 w-10 bg-white border border-gray-200 rounded flex items-center justify-center">
                  <img src="/mastercard.png" alt="MASTERCARD" />

                  </div>
                  <div className="h-6 w-10 flex items-center justify-center">
                  <img src="/pay.png" alt="PAY" />
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="cod"
                  name="paymentMethod"
                  type="radio"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="h-4 w-4 text-red-400 focus:ring-red-400"
                />
                <label htmlFor="cod" className="ml-2 text-sm font-medium text-gray-700">
                  Cash on delivery
                </label>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-red-200 focus:border-red-400"
              />
              <button className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600 transition">
                Apply Coupon
              </button>
            </div>

            <button className="w-full py-3 bg-red-400 text-white font-medium rounded hover:bg-red-600 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}