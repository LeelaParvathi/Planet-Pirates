import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSignUp(false);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Carpool Buddy</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Carpool Match</h2>
          <p className="text-lg text-gray-700 mb-6">
            Save money, reduce your carbon footprint, and make commuting fun by sharing rides with others.
          </p>
          <Button
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 mt-6">
        <div className="container mx-auto text-center text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} Carpool Buddy. All rights reserved.
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4">
              {isSignUp ? "Sign Up" : "Log In"}
            </h3>
            <Input
              placeholder="Email"
              className="w-full mb-4 border border-gray-300 px-3 py-2 rounded-md"
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full mb-4 border border-gray-300 px-3 py-2 rounded-md"
            />
            <Button className="bg-black text-white w-full py-2 rounded-md font-medium mb-2">
              {isSignUp ? "Sign Up" : "Log In"}
            </Button>
            <p className="text-center text-sm text-gray-500">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <span
                className="text-black font-medium cursor-pointer"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? "Log In" : "Sign Up"}
              </span>
            </p>
            <Button
              className="bg-gray-200 text-black w-full py-2 rounded-md font-medium mt-4"
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;