import React from "react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center px-4">
          <h1 className="text-3xl font-bold">Carpool Buddy Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Welcome, [User]!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create Ride Section */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Create a Ride</h3>
            <p className="text-gray-700 mb-4">
              Plan your journey and share your ride with others.
            </p>
            <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              Create Ride
            </Button>
          </div>

          {/* View Bookings Section */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">View Bookings</h3>
            <p className="text-gray-700 mb-4">
              Manage and review your carpool bookings.
            </p>
            <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              View Bookings
            </Button>
          </div>

          {/* Notifications Section */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            <p className="text-gray-700 mb-4">
              Stay updated with important alerts and updates.
            </p>
            <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
              View Notifications
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-6">
        <div className="container mx-auto text-center text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} Carpool Buddy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
