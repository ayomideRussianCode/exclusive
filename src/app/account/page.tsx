// app/my-account/profile/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimellll@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/app" className="text-gray-600 hover:text-gray-900">Home</Link>
          <span>/</span>
          <span className="font-medium">My Account</span>
        </div>
        <div className="text-sm">
          Welcome! <span className="text-red-500 font-medium">Md Rimel</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <h2 className="font-medium text-lg mb-4">Manage My Account</h2>
          <nav className="space-y-2 mb-6">
            <Link href="/my-account/profile" className="block text-red-500 hover:text-red-600">My Profile</Link>
            <Link href="/my-account/address-book" className="block text-gray-600 hover:text-gray-900">Address Book</Link>
            <Link href="/my-account/payment-options" className="block text-gray-600 hover:text-gray-900">My Payment Options</Link>
          </nav>
          
          <h2 className="font-medium text-lg mb-4">My Orders</h2>
          <nav className="space-y-2 mb-6">
            <Link href="/my-account/returns" className="block text-gray-600 hover:text-gray-900">My Returns</Link>
            <Link href="/my-account/cancellations" className="block text-gray-600 hover:text-gray-900">My Cancellations</Link>
          </nav>
          
          <h2 className="font-medium text-lg mb-4">
            <Link href="/my-account/wishlist" className="block text-gray-600 hover:text-gray-900">My Wishlist</Link>
          </h2>
        </div>

        <div className="w-full md:w-3/4 shadow-lg p-12 mb-12 bg-white">
          <h1 className="text-red-500 text-xl font-medium mb-6">Edit Your Profile</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>
            
            <h2 className="text-gray-700 font-medium mb-4">Password Changes</h2>
            <div className="space-y-4 mb-8">
              <div>
                <label htmlFor="currentPassword" className="sr-only">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Current Password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="newPassword" className="sr-only">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="sr-only">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded border-0 focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button 
                type="button" 
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-6 py-2 bg-red-400 text-white font-medium rounded hover:bg-red-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}