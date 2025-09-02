import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-10 font-itim">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3">CamHotels</h3>
          <p className="text-gray-400">
           
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <p className="text-gray-400">Email: abongui381@gmail.com</p>
          <p className="text-gray-400">Phone: +237 653 146 158</p>
          <p className="text-gray-400">Location: Douala, Cameroon</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61558746466777" className="hover:text-blue-400"></a>
            <a href="#" className="hover:text-sky-400"></a>
            <a href="nstagram.com/draco.135/" className="hover:text-pink-500"></a>
            <a href="https://www.linkedin.com/in/mc-elmer/" className="hover:text-blue-500"></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} CamHotels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
