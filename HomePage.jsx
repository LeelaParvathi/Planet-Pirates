// HomePage.jsx
import React from 'react';
import { Link } from "react-router-dom";

const HomePage = () => {
  return(
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="bg-gray-800 text-white w-64 p-6 space-y-4">
          <h1 className="text-2xl font-bold">Car Pooling App</h1>
          <nav className="space-y-2">
            <Link to='/search-ride'>
            <button className="w-full text-left py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600">Search Rides</button>
            </Link>
            <Link to="/offer-ride">
            <button className="w-full text-left py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600">Offer a Ride</button>
            </Link>
            
            <button className="w-full text-left py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600">Booking History</button>
           
            <button className="w-full text-left py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600">Chat with Riders</button>
            <button className="w-full text-left py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600">Settings</button>
            <button className="w-full text-left py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600">Feedback</button>
          </nav>
        </aside>
  
        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6">
          <header className="bg-white shadow p-4 rounded-lg mb-6">
            <h2 className="text-3xl font-bold">Welcome to Car Pooling App!</h2>
            <p className="text-gray-600">Your eco-friendly way to travel and share journeys.</p>
          </header>
  
          <section className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2">Start Exploring</h3>
            <p className="text-gray-700">Use the sidebar to navigate through the app and access features like finding rides, offering a ride, viewing booking history, chatting with riders, and managing settings. We aim to make your carpooling experience seamless and enjoyable!</p>
          </section>
        </div>
      </div>
    );
  }
  
  export default HomePage;
  
