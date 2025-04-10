"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const languages = ["English", "Spanish", "French"];

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative text-sm mx-auto" >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center space-x-1 text-white"
      >
        <span>{selectedLanguage}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md z-50"
          >
            {languages.map((language) => (
              <div
                key={language}
                onClick={() => handleLanguageChange(language)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {language}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
