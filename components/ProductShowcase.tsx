import React from "react";
import { Info, Sun, Clock } from "lucide-react"; // icons can be replaced

export default function ProductShowcase() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 max-w-6xl mx-auto bg-[#fdfaf9]">
      {/* Image */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
        <img
          src="/basket-flowers.png" // Replace with your actual image path
          alt="Purple statice flowers in a basket"
          className="rounded-xl w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/50 to-transparent rounded-xl"></div>
      </div>

      {/* Text */}
      <div className="lg:w-1/2 lg:pl-12 text-[#1d1b24]">
        <h2 className="text-4xl font-extrabold leading-tight">
          Basket bouquet of <br />
          <span className="text-[#1d1b24]">special purple statice</span>
        </h2>
        <p className="text-sm text-[#1d1b24] mt-4">
          If there were one word that could describe this arrangement & selection
          of fauna, it would be sensational. Purple Statice carefully placed in a
          wooden basket with Ribbon tied for display.
        </p>

        {/* Features */}
        <div className="flex gap-8 mt-6 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>6 Stems of purple statice</span>
          </div>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4" />
            <span>5 Days of proven shelf life</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-6 flex items-center gap-2 text-[#1d1b24] hover:underline cursor-pointer">
          <div className="w-8 h-8 border border-[#1d1b24] rounded-full flex items-center justify-center">
            <Info className="w-4 h-4" />
          </div>
          <span className="font-medium">Get more details</span>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center gap-2 text-sm">
          <button className="text-[#1d1b24]">&lt;</button>
          <span className="font-bold text-[#1d1b24]">01</span>
          <span>02</span>
          <span>03</span>
          <button className="text-[#1d1b24]">&gt;</button>
        </div>
      </div>
    </div>
  );
}
