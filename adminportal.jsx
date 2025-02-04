import React, { useState } from 'react';
import { 
  Users, Car, MapPin, AlertTriangle, BarChart3, Settings, 
  LogOut, Menu, X, DollarSign, Star, Clock, Mail, Phone
} from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Users', value: '2,847', icon: Users, color: 'bg-blue-600' },
    { label: 'Active Rides', value: '156', icon: Car, color: 'bg-violet-600' },
    { label: 'Popular Routes', value: '24', icon: MapPin, color: 'bg-indigo-600' },
    { label: 'Reports', value: '12', icon: AlertTriangle, color: 'bg-purple-600' },
  ];

  const allUsers = [
    { name: 'Sarah Johnson', email: 'sarah.j@example.com', phone: '+1 234-567-8901', rides: 15, rating: 4.8 },
    { name: 'Mike Peters', email: 'mike.p@example.com', phone: '+1 234-567-8902', rides: 23, rating: 4.9 },
    { name: 'Emma Wilson', email: 'emma.w@example.com', phone: '+1 234-567-8903', rides: 8, rating: 4.7 },
    { name: 'James Brown', email: 'james.b@example.com', phone: '+1 234-567-8904', rides: 31, rating: 4.6 },
    { name: 'Linda Chen', email: 'linda.c@example.com', phone: '+1 234-567-8905', rides: 19, rating: 5.0 },
  ];

  const allRides = [
    { 
      driver: 'John Smith',
      from: 'San Francisco, CA',
      to: 'Los Angeles, CA',
      date: '2024-03-15',
      seats: '3/4',
      price: '$45',
      status: 'Active'
    },
    {
      driver: 'Lisa Brown',
      from: 'Seattle, WA',
      to: 'Portland, OR',
      date: '2024-03-15',
      seats: '2/3',
      price: '$30',
      status: 'Active'
    },
    {
      driver: 'David Lee',
      from: 'New York, NY',
      to: 'Boston, MA',
      date: '2024-03-16',
      seats: '4/4',
      price: '$55',
      status: 'Scheduled'
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">User Management</h2>
            <div className="space-y-4">
              {allUsers.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-blue-50 rounded-lg border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white font-semibold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium">{user.name}</h3>
                      <div className="flex space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Mail size={14} className="mr-1" />
                          {user.email}
                        </span>
                        <span className="flex items-center">
                          <Phone size={14} className="mr-1" />
                          {user.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-sm">
                      <Car className="inline mr-1" size={16} />
                      {user.rides} rides
                    </div>
                    <div className="text-sm text-yellow-500">
                      <Star className="inline mr-1" size={16} />
                      {user.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'rides':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Ride Management</h2>
            <div className="space-y-4">
              {allRides.map((ride, index) => (
                <div key={index} className="p-4 hover:bg-blue-50 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{ride.driver}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        ride.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {ride.status}
                      </span>
                    </div>
                    <span className="text-violet-600 font-medium">{ride.price}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      {ride.from} → {ride.to}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {ride.date}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {ride.seats}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-gray-100">
                <h3 className="font-medium mb-2">System Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Dark Mode</span>
                    <button className="w-12 h-6 rounded-full bg-gray-200"></button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <button className="w-12 h-6 rounded-full bg-blue-600"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-gray-500 text-sm">{stat.label}</h3>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
                <div className="space-y-4">
                  {allUsers.slice(0, 3).map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-blue-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-gray-500">
                          <Car className="inline mr-1" size={16} />
                          {user.rides} rides
                        </div>
                        <div className="text-sm text-yellow-500">
                          <Star className="inline mr-1" size={16} />
                          {user.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Active Rides</h2>
                <div className="space-y-4">
                  {allRides.slice(0, 2).map((ride, index) => (
                    <div key={index} className="p-4 hover:bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{ride.driver}</h3>
                        <span className="text-violet-600 font-medium">{ride.price}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={16} className="mr-2" />
                          {ride.from} → {ride.to}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock size={16} className="mr-2" />
                            {ride.date}
                          </div>
                          <div className="flex items-center">
                            <Users size={16} className="mr-2" />
                            {ride.seats}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white h-screen fixed transition-all duration-300 shadow-lg`}>
        <div className="p-4 flex items-center justify-between">
          <h1 className={`text-blue-600 font-bold ${!isSidebarOpen && 'hidden'}`}>CarpoolConnect</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        <nav className="mt-8">
          {[
            { name: 'Dashboard', icon: BarChart3, id: 'dashboard' },
            { name: 'Users', icon: Users, id: 'users' },
            { name: 'Rides', icon: Car, id: 'rides' },
            { name: 'Settings', icon: Settings, id: 'settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center p-4 hover:bg-blue-50 ${
                activeTab === item.id ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' : ''
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="ml-4">{item.name}</span>}
            </button>
          ))}
        </nav>

        <button className="absolute bottom-4 w-full flex items-center p-4 hover:bg-red-50 text-red-600">
          <LogOut size={20} />
          {isSidebarOpen && <span className="ml-4">Logout</span>}
        </button>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 p-8`}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
