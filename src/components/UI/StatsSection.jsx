"use client";
import {
  FaDollarSign,
  FaShoppingBag,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers />,
    number: "10.5k",
    label: "Sellers active our site",
    highlight: true,
  },
  {
    icon: <FaDollarSign />,
    number: "33k",
    label: "Monthly Product Sale",
    highlight: true,
  },
  {
    icon: <FaShoppingBag />,
    number: "45.5k",
    label: "Customer active in our site",
    highlight: true,
  },
  {
    icon: <FaMoneyBillWave />,
    number: "25k",
    label: "Annual gross sale in our site",
    highlight: true,
  },
];

export const StatsSection = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6 px-8">
    {stats.map((stat, i) => (
      <div
        key={i}
        className={`flex flex-col items-center justify-center border p-6 rounded ${
          stat.highlight
            ? "bg-white hover:bg-red-400 hover:text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="text-3xl mb-2">{stat.icon}</div>
        <h2 className="text-xl font-bold">{stat.number}</h2>
        <p className="text-sm text-center">{stat.label}</p>
      </div>
    ))}
  </section>
);
