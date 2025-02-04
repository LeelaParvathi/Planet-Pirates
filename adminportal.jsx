import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { FaUsers, FaCar, FaExclamationTriangle, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-64 min-h-screen bg-white shadow-lg p-4 border-2 border-gradient-to-r from-blue-500 to-purple-500">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Admin Panel</h2>
      <ul>
        <li>
          <Link to="/" className={`block py-2 px-4 flex items-center ${location.pathname === "/" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "hover:bg-gray-200"}`}>
            <FaUsers className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className={`block py-2 px-4 flex items-center ${location.pathname === "/users" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "hover:bg-gray-200"}`}>
            <FaUsers className="mr-2" /> Users
          </Link>
        </li>
        <li>
          <Link to="/rides" className={`block py-2 px-4 flex items-center ${location.pathname === "/rides" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "hover:bg-gray-200"}`}>
            <FaCar className="mr-2" /> Rides
          </Link>
        </li>
        <li>
          <Link to="/reports" className={`block py-2 px-4 flex items-center ${location.pathname === "/reports" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "hover:bg-gray-200"}`}>
            <FaExclamationTriangle className="mr-2" /> Reports
          </Link>
        </li>
        <li>
          <Link to="/settings" className={`block py-2 px-4 flex items-center ${location.pathname === "/settings" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "hover:bg-gray-200"}`}>
            <FaCog className="mr-2" /> Settings
          </Link>
        </li>
        <li>
          <Link to="/logout" className="block py-2 px-4 text-red-600 hover:bg-gray-200 flex items-center">
            <FaSignOutAlt className="mr-2" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Dashboard = () => (
  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen text-white border-2 border-gradient-to-r from-blue-500 to-purple-500">
    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div className="p-4 bg-white shadow rounded-lg text-black border-2 border-gradient-to-r from-blue-500 to-purple-500"><FaUsers className="text-blue-600 text-2xl" /> <p>Total Users: 2,847</p></div>
      <div className="p-4 bg-white shadow rounded-lg text-black border-2 border-gradient-to-r from-blue-500 to-purple-500"><FaCar className="text-green-600 text-2xl" /> <p>Active Rides: 156</p></div>
      <div className="p-4 bg-white shadow rounded-lg text-black border-2 border-gradient-to-r from-blue-500 to-purple-500"><FaExclamationTriangle className="text-red-600 text-2xl" /> <p>Pending Reports: 12</p></div>
    </div>
  </div>
);

const Users = () => (
  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen text-white">
    <h1 className="text-2xl font-bold">Users</h1>
    <ul className="mt-4">
      <li>John Doe - johndoe@gmail.com</li>
      <li>Jane Smith - janesmith@yahoo.com</li>
      <li>Mike Johnson - mikejohnson@outlook.com</li>
    </ul>
  </div>
);

const Rides = () => (
  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen text-white">
    <h1 className="text-2xl font-bold">Rides</h1>
    <ul className="mt-4">
      <li>John traveled from NYC to LA on 01/28/2025</li>
      <li>Jane traveled from SF to Vegas on 01/29/2025</li>
      <li>Mike traveled from Miami to Orlando on 01/30/2025</li>
    </ul>
  </div>
);

const Reports = () => (
  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen text-white">
    <h1 className="text-2xl font-bold">Reports</h1>
    <ul className="mt-4">
      <li>Report #123: Driver delayed</li>
      <li>Report #124: Passenger didn't show</li>
      <li>Report #125: Payment issue</li>
    </ul>
  </div>
);

const Settings = () => (
  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen text-white">
    <h1 className="text-2xl font-bold">Settings</h1>
    <p>Manage account settings here.</p>
  </div>
);

const AdminPortal = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default AdminPortal;
