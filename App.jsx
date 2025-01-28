import { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OfferRide from "./components/OfferRide";
import SearchRide from "./components/SearchRide";
import HomePage from "./components/HomePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offer-ride" element={<OfferRide />} />
          <Route path="/search-ride" element={<SearchRide />} />
          
        </Routes>
      ) : (
        <div>
          {showLogin ? (
            <Login onLogin={() => setIsAuthenticated(true)} />
          ) : (
            <SignUp />
          )}
          <button onClick={() => setShowLogin(!showLogin)}>
            Switch to {showLogin ? "SignUp" : "Login"}
          </button>
        </div>
      )}
    </Router>
  );
}

export default App;