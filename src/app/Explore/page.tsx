import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image'; 

const ExplorePage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="mb-6 text-2xl font-semibold text-center">Explore Our Hidden Treasure</h2>
      
      <div className="flex gap-6">
        
        <div className="flex-1 p-4 border rounded-lg bg-gray-100">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/web.jpeg" 
              alt="Web Building"
              width={200}
              height={100}
              className="object-cover rounded-t-lg"
            />
          </div>
          <h3 className="mb-4 text-xl font-semibold text-center">Web Building</h3>
          <p className="mb-4 text-center">
            Web building is the process of creating and designing websites, encompassing various aspects such as layout, content, and functionality...
          </p>
          <div className="text-center">
            <Link className="text-blue-500 underline font-bold" href="">Read More</Link>
          </div>
        </div>

        <div className="flex-1 p-4 border  rounded-lg bg-gray-100">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/mobile.jpeg" 
              alt="Mobile App"
              width={250}
              height={150}
              className="object-cover rounded-t-lg"
            />
          </div>
          <h3 className="mb-4 text-xl font-semibold text-center">Mobile App</h3>
          <p className="mb-4 text-center">
            Designing a mobile app involves creating an intuitive and engaging experience tailored for mobile devices...
          </p>
          <div className="text-center">
            <Link className="text-blue-500 underline font-bold" href="">Read More</Link>
          </div>
        </div>

        <div className="flex-1 p-4 border  rounded-lg bg-gray-100">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/ui.jpg" //path
              alt="UI/UX"
              width={250}
              height={150}
              className="object-cover rounded-t-lg"
            />
          </div>
          <h3 className="mb-4 text-xl font-semibold text-center">UI/UX</h3>
          <p className="mb-4 text-center">
            Exploring UI/UX design involves understanding how users interact with and experience digital interfaces...
          </p>
          <div className="text-center">
            <Link className="text-blue-500 underline font-bold" href="">Read More</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExplorePage;
