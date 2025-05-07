import React from "react";
import { Phone } from "lucide-react"; // optional icon, use any SVG or import your own

function SupportCard() {
  return (
    <div className="bg-[#f5f2f3] flex items-center justify-between rounded-full px-6 py-4 max-w-5xl mx-auto shadow-sm">
      {/* Left Content */}
      <div className="flex-1 pr-6">
        <h3 className="text-xl font-extrabold text-[#1d1b24]">
          24 hours customer support
        </h3>
        <p className="text-sm text-[#1d1b24] mt-1">
          We offer top-notch customer support to ensure that your experience with our bouquets is nothing short of exceptional.
        </p>
      </div>

      {/* Divider with curved notch */}
      <div className="w-[1px] h-20 bg-[#e5e3e4] mx-6 rounded-full hidden sm:block"></div>

      {/* Right Content */}
      <div className="flex items-center gap-4">
        <div className="text-sm text-[#1d1b24]">
          <p className="mb-1">Call us at</p>
          <p className="text-xl font-extrabold text-[#1d1b24]">+33 846 236 223</p>
        </div>
        <div className="bg-white rounded-full p-3 shadow-sm">
          <Phone className="text-[#1d1b24] w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default SupportCard;
