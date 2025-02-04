import React, { useState } from 'react';
import { Car, MapPin, Calendar, Users, DollarSign, Plus } from 'lucide-react';

interface Ride {
  id: string;
  from: string;
  to: string;
  date: string;
  price: number;
  availableSeats: number;
  bookings: Booking[];
}

interface Booking {
  id: string;
  passengerName: string;
  seats: number;
}

// Mock data for published rides
const publishedRides: Ride[] = [
  {
    id: '1',
    from: 'San Francisco, CA',
    to: 'Los Angeles, CA',
    date: '2024-03-15',
    price: 30,
    availableSeats: 3,
    bookings: []
  },
  {
    id: '2',
    from: 'New York, NY',
    to: 'Boston, MA',
    date: '2024-03-16',
    price: 50,
    availableSeats: 4,
    bookings: [
      { id: 'b1', passengerName: 'Alice Johnson', seats: 2 },
      { id: 'b2', passengerName: 'Bob Wilson', seats: 1 }
    ]
  },
  {
    id: '3',
    from: 'Seattle, WA',
    to: 'Portland, OR',
    date: '2024-03-17',
    price: 25,
    availableSeats: 2,
    bookings: []
  }
];

function PublishRideModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold mb-6">Publish a New Ride</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input type="date" className="w-full p-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price per seat</label>
              <input type="number" className="w-full p-2 border rounded-lg" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Available seats</label>
            <input type="number" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Publish Ride
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function RideCard({ ride }: { ride: Ride }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{ride.from} → {ride.to}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(ride.date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end mb-1">
            <DollarSign className="w-4 h-4 text-gray-600" />
            <span className="font-semibold">${ride.price}</span>
            <span className="text-sm text-gray-600 ml-1">per seat</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{ride.availableSeats} seats available</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Bookings</h3>
        {ride.bookings.length > 0 ? (
          <div className="space-y-2">
            {ride.bookings.map(booking => (
              <div key={booking.id} className="flex justify-between items-center text-sm">
                <span>{booking.passengerName}</span>
                <span className="text-gray-600">{booking.seats} seat(s)</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No bookings yet</p>
        )}
      </div>
    </div>
  );
}

function App() {
  const [showPublishModal, setShowPublishModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Car className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">RideShare</h1>
            </div>
            <button
              onClick={() => setShowPublishModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Publish Ride
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">My Published Rides</h2>
          <p className="text-gray-600">Manage your rides and view bookings</p>
        </div>

        <div className="space-y-4">
          {publishedRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      </main>

      {showPublishModal && (
        <PublishRideModal onClose={() => setShowPublishModal(false)} />
      )}
    </div>
  );
}

export default App;