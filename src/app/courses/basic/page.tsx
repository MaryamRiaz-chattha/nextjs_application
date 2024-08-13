import React from 'react';
import Link from "next/link"
function BasicCoursesPage() 
 {
  return (
    <div className="container mx-auto p-6">
      
      <h1 className="text-2xl font-bold mb-6 text-center">Welcome to Basic Courses</h1>

      
      <p className="border-2 border-teal-900 p-4 text-gray-800 bg-gray-100 rounded-md text-base leading-relaxed mb-8">
        Explore our collection of basic courses designed to help you get started in the world of coding. Each course is carefully crafted to provide you with the foundational skills needed to excel in various programming languages and technologies.
      </p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">HTML & CSS</h2>
          <p className="text-gray-700 mb-4">
            Learn the basics of web development with HTML and CSS. This course covers everything from structuring web pages to styling them beautifully.
          </p>
          <Link href="#" className="text-blue-600 hover:underline">Learn More</Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">JavaScript Basics</h2>
          <p className="text-gray-700 mb-4">
            Get started with JavaScript, the language that powers the web. This course introduces you to basic concepts and programming logic.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Python for Beginners</h2>
          <p className="text-gray-700 mb-4">
            Dive into Python, a versatile and beginner-friendly programming language. Learn how to write simple programs and explore data structures.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>

        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Responsive Web Design</h2>
          <p className="text-gray-700 mb-4">
            Learn how to make your websites look great on all devices. This course covers the principles of responsive design and media queries.
          </p>
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default BasicCoursesPage;
