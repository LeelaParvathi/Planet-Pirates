import React from 'react';
import { Star, User, Clock, Users, DollarSign } from 'lucide-react';

interface RideCardProps {
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
  onClick: () => void;
}

export function RideCard({ driver, onClick }: RideCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-gray-100 p-3 rounded-full">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-lg">{driver.name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">{driver.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end mb-1">
            <DollarSign className="w-4 h-4 text-gray-600" />
            <span className="font-semibold">${driver.cost}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{driver.availableSeats} seats</span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <Clock className="w-4 h-4 mr-1" />
        <span>{driver.departureTime}</span>
      </div>
    </div>
  );
}