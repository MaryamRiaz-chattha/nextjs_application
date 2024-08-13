import React from 'react';
import Image from 'next/image'; // Import Image for optimized image handling

const HomePage: React.FC = () => {
  return (
    
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/main.jpg" // Path to your image file
                alt="Hero Background"
                layout="fill"
                objectFit="cover" // Ensures the image covers the entire container
                className="absolute inset-0"
              />
            </div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Mcoder</h1>
          <p className="text-lg mb-6">Your partner in innovative coding solutions and web development.</p>
          <a href="#features" className="bg-white text-zinc-950 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Discover More
          </a>
        </div>
      </section>
      

      </div>
            

      
    
  );
};

export default HomePage;
