import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedSection, setSelectedSection] = useState("overview");

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSignUp(false);
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "overview":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
            <p className="text-lg text-gray-700 mb-4">Overview of app statistics</p>
            <div>
              <p>Rides Posted: 120</p>
              <p>Bookings Made: 85</p>
              <p>User Activity: 500</p>
            </div>
          </div>
        );
      case "manage-users":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4">Manage Users</h2>
            <p className="text-lg text-gray-700 mb-4">View, edit, or ban users for misconduct.</p>
            {/* Add table or list of users */}
            <Button className="bg-black text-white w-full py-2 rounded-md">
              Edit User
            </Button>
            <Button className="bg-red-500 text-white w-full py-2 rounded-md font-medium mt-2">
              Ban User
            </Button>
          </div>
        );
      case "manage-rides":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4">Manage Rides</h2>
            <p className="text-lg text-gray-700 mb-4">Monitor all posted rides and resolve disputes.</p>
            {/* Add table or list of rides */}
            <Button className="bg-black text-white w-full py-2 rounded-md">
              Delete Suspicious Ride
            </Button>
          </div>
        );
      case "reports-feedback":
        return (
          <div>
            <h2 className="text-3xl font-bold mb-4">Reports and Feedback</h2>
            <p className="text-lg text-gray-700 mb-4">Review complaints or feedback submitted by users.</p>
            {/* Add list of complaints/feedback */}
            <Button className="bg-black text-white w-full py-2 rounded-md">
              Resolve Feedback
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <div className="bg-gray-200 w-64 p-6 space-y-6">
          <Button
            className="bg-black text-white w-full py-2 rounded-md"
            onClick={() => setSelectedSection("overview")}
          >
            Overview
          </Button>
          <Button
            className="bg-black text-white w-full py-2 rounded-md"
            onClick={() => setSelectedSection("manage-users")}
          >
            Manage Users
          </Button>
          <Button
            className="bg-black text-white w-full py-2 rounded-md"
            onClick={() => setSelectedSection("manage-rides")}
          >
            Manage Rides
          </Button>
          <Button
            className="bg-black text-white w-full py-2 rounded-md"
            onClick={() => setSelectedSection("reports-feedback")}
          >
            Reports & Feedback
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6">{renderSectionContent()}</div>
      </div>

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

export default AdminDashboard;