import Link from "next/link";

import React from "react";
import { CircleUser, ShoppingBag } from "lucide-react";

function Header() {
  return (
    <>
    <header className="flex items-center justify-center space-x-12 px-16 py-4  bg-[#f9f8f6] text-[#1d1b24]">
      {/* Left nav */}
      <div className="flex space-x-8 text-sm font-medium">
        <Link href="/">Weddings</Link>
        <Link href="/">Floral catalog</Link>
        <Link href="/">Blogs</Link>
      </div>

      {/* Center logo */}
      <div className=" text-4xl font-extrabold tracking-tight pl-10 ">
        <Link  href="/">Glift</Link>
      </div>

      {/* Right nav */}
      <div className="flex items-center space-x-8 ">
        <div className="flex items-center space-x-4 ">
        <Link href="/">Floral Bouquets</Link>
        <Link href="/">Membership</Link>

        </div>
        <div className="flex space-x-4 text-xl">
          <Link href="/">
            <ShoppingBag />
          </Link>
          <Link href="/">
            <CircleUser />
          </Link>
        </div>
      </div>
    
    </header>
    <hr className="text-black"/>

    </>
  );
}

export default Header;
