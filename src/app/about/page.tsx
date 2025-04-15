import Link from "next/link";
import Image from "next/image";
import {StatsSection} from "../../components/UI/StatsSection";

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="flex mb-10 text-sm">
        <Link href="/home" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-gray-800">About</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl inter-text font-bold mb-8">Our Story</h1>

          <div className="space-y-6 text-gray-800">
            <p>
              Launched in 2015, Exclusive is South Asia&#39;s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.
            </p>

            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square">
            <Image
              src="/Side image.png"
              alt="About Image"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
      <StatsSection/>
    </section>
  );
}
