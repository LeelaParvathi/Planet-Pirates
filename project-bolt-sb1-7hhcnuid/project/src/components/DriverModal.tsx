import React from 'react';
import { X, Star, Phone, Car, Award } from 'lucide-react';

interface DriverModalProps {
  driver: {
    id: string;
    name: string;
    rating: number;
    cost: number;
    availableSeats: number;
    departureTime: string;
    carModel: string;
    phoneNumber: string;
    carNumber: string;
    totalRides: number;
    experience: string;
  };
  onClose: () => void;
}

export function DriverModal({ driver, onClose }: DriverModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{driver.name}</h2>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-2 font-semibold">{driver.rating.toFixed(1)}</span>
            <span className="ml-2 text-gray-600">({driver.totalRides} rides)</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <Car className="w-5 h-5 text-gray-600 mr-3" />
            <div>
              <p className="font-semibold">{driver.carModel}</p>
              <p className="text-sm text-gray-600">{driver.carNumber}</p>
            </div>
          </div>

          <div className="flex items-center">
            <Phone className="w-5 h-5 text-gray-600 mr-3" />
            <p>{driver.phoneNumber}</p>
          </div>

          <div className="flex items-center">
            <Award className="w-5 h-5 text-gray-600 mr-3" />
            <p>{driver.experience}</p>
          </div>
        </div>

        <button
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => {
            // Handle booking logic here
            alert('Booking confirmed!');
            onClose();
          }}
        >
          Book Ride
        </button>
      </div>
    </div>
  );
}