import React from "react";
import { Button } from "@/components/ui/button";

const Notifications = () => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">Notifications</h3>
      <p className="text-gray-700 mb-4">Stay updated with important alerts and updates.</p>
      <ul className="text-left text-gray-600">
        <li>✔️ Ride confirmed with John Doe</li>
        <li>❌ Ride cancellation by Alex Smith</li>
        <li>🔔 New ride request received</li>
      </ul>
    </div>
  );
};

const RatingsReviews = () => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">Ratings & Reviews</h3>
      <p className="text-gray-700 mb-4">View or leave ratings for a ride or user.</p>
      <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
        Leave a Review
      </Button>
    </div>
  );
};

const HelpFAQ = () => {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">Help / FAQ</h3>
      <p className="text-gray-700 mb-4">Answers to common questions about the app.</p>
      <ul className="text-left text-gray-600">
        <li>📌 How to book a ride?</li>
        <li>📌 How to cancel a booking?</li>
        <li>📌 Contact customer support</li>
      </ul>
      <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 mt-4">
        Contact Support
      </Button>
    </div>
  );
};

const NotificationsRatingsFAQ = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <header className="bg-black text-white py-4 shadow-md text-center text-3xl font-bold">
        Carpool Buddy
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Notifications />
        <RatingsReviews />
        <HelpFAQ />
      </main>
      <footer className="bg-gray-100 py-4 mt-6 text-center text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Carpool Buddy. All rights reserved.
      </footer>
    </div>
  );
};

export default NotificationsRatingsFAQ;
