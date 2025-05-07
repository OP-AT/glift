import React from 'react';

function Hero() {
  return (
    <main className='min-h-screen flex items-center justify-center relative overflow-hidden '>
      {/* Pill Background */}
      <div className='absolute w-[15rem] h-[30rem] bg-[#e6e2df] rounded-full z-0 py-0'></div>

      {/* Product Image or Text Goes Here */}
      <div className='relative z-10 text-center'>
        <img
          src="/your-product.png" // Replace with your image path
          alt="Product"
          className="w-64 mx-auto"
        />
        <h1 className="text-4xl font-bold mt-6">Your Product Name</h1>
      </div>
    </main>
  );
}

export default Hero;
