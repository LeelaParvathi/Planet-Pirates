import { useEffect, useState } from "react";
import { database, auth } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";

const History = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const user = auth.currentUser; // Get logged-in user

  useEffect(() => {
    if (user) {
      // Reference to user's bookings
      const bookingsRef = ref(database, `users/${user.uid}/bookings`);

      // Listen for changes in bookings data
      onValue(bookingsRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const bookingsArray = Object.entries(data).map(([id, details]: any) => ({
            id,
            ...details,
          }));
          setBookings(bookingsArray);
        } else {
          setBookings([]); // No bookings found
        }
      });
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Booking History</h2>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-500 p-4">No bookings found.</p>
        ) : (
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rider</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.rider}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.start} → {booking.destination}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      booking.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{booking.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default History;
