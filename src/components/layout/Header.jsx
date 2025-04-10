"use client";

import LanguageDropdown from "../shared/LanguageDropdown";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full">
      <div className="bg-black mx-auto text-white text-sm px-4 py-4 flex justify-between items-center">
        {" "}
        <p className=" mx-auto items-center  justify-between flex ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          {" "}
          <a href="#" className="underline ml-1">
            ShopNow
          </a>
        </p>
        <LanguageDropdown />
      </div>

      <header className=" bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
          <div className="text-4xl font-bold">Exclusive</div>
          <nav className=" text-lg font-medium space-x-6 hidden md:flex">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>
          </nav>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border-0 bg-gray-100 shadow-sm rounded-lg px-4 py-2 pr-8"
            />
            <Search className="w-4 h-4 absolute right-2 top-2.5 text-black-500"/>
          </div>
        </div>
      </header>
    </div>
  );
}
