import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f9f8f6] text-[#1d1b24] py-6 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-extrabold tracking-tight">
          Floral studio
        </div>

        {/* Center: Navigation */}
        <div className="flex space-x-8 text-sm font-medium">
          <Link href="/">Weddings</Link>
          <Link href="/">Floral catalog</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Floral Bouquets</Link>
          <Link href="/">Membership</Link>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm font-semibold">
          © 2022
        </div>
      </div>
    </footer>
  );
}

export default Footer;
