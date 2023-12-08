// components/Footer.js atau components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-2">Stay Connected</p>
        <p className="text-sm mb-4">Follow us on social media for updates and more.</p>

        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Twitter
          </a>
          <a href="#" className="text-indigo-400 hover:text-indigo-300">
            Facebook
          </a>
          <a href="#" className="text-red-400 hover:text-red-300">
            Instagram
          </a>
        </div>

        <p className="text-sm mb-2">Contact us: contact@yourcompany.com</p>
        <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
