"use client";

import { LuSendHorizontal } from "react-icons/lu";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
            <div>
              <p className="mb-4 text-lg ">Subscribe</p>
              <p className="mb-4">Get 10% off your first order</p>
              <div className="flex border-white border-2 rounded">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent py-2 px-3 w-full focus:outline"
                />
                <button className="px-3 flex items-center justify-center">
                  <LuSendHorizontal className="text-white" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space y-2">
              <p>111 Bijoy soroni, Dhaka,</p>
              <p className="mb-2">DH 1515, Bangladesh.</p>
              <p className="mb-2">exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                {" "}
                <Link
                  href="/account"
                  className="hover:opacity-75 transition-opacity"
                >
                  My Account
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/signup"
                  className="hover:opacity-75 transition-opacity"
                >
                  Login / Register
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  href="/cart"
                  className="hover:opacity-75 transition-opacity"
                >
                  Cart
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/wishlist"
                  className="hover:opacity-75 transition-opacity"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/shop"
                  className="hover:opacity-75 transition-opacity"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:opacity-75 transition-opacity"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:opacity-75 transition-opacity"
                >
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:opacity-75 transition-opacity"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:opacity-75 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Download App</h3>
            <p className="mb-3">Save $3 with App New Use Only</p>
            <div className="mb-4">
              <div className="mb-3">
                <Image
                  src="/Qrcode.png"
                  alt="QR Code"
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div className="flex space-x-2">
                <Link href="#" className="block">
                  <Image
                    src="/google-playstore.png"
                    alt="Google Play"
                    width={120}
                    height={40}
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/appstore.png"
                    alt="App Store"
                    width={120}
                    height={20}
                  />
                </Link>
              </div>
              <div className="flex space-x-4 mt-6">
            <Link
              href="#"
              className="w-8 h-8  flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <FaFacebook />
            </Link>
            <Link
              href="#"
              className="w-8 h-8  flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="w-8 h-8  flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="w-8 h-8  flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <FaLinkedin />
            </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
      <div />
    </footer>
  );
}
