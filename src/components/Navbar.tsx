import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Search } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">LuxuryCars</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Cars
            </Link>
            <Link
              to="/contact"
              className={`text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/contact' ? 'text-blue-600' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}