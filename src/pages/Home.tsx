import React, { useState } from 'react';
import { cars } from '../data/cars';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map(car => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.name}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{car.brand} {car.name}</h3>
                <p className="mt-2 text-2xl font-bold text-blue-600">${car.price.toLocaleString()}</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600"><span className="font-semibold">Year:</span> {car.year}</p>
                  <p className="text-gray-600"><span className="font-semibold">Transmission:</span> {car.transmission}</p>
                  <p className="text-gray-600"><span className="font-semibold">Fuel Type:</span> {car.fuelType}</p>
                  <p className="text-gray-600"><span className="font-semibold">Engine:</span> {car.engine}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}