import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-center items-center px-4">
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <div className="max-w-lg mx-auto bg-gray-100 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
            {isEditing ? (
              <Input
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            ) : (
              <p className="text-lg font-medium">{user.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <p className="text-lg font-medium">{user.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Phone</label>
            {isEditing ? (
              <Input
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            ) : (
              <p className="text-lg font-medium">{user.phone}</p>
            )}
          </div>
          <Button
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800"
            onClick={handleEditToggle}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
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

export default ProfilePage;
