import { useState } from "react";
import { getDatabase, ref, push,set } from "firebase/database"; // Ensure you import getDatabase correctly
import { database } from "../firebaseConfig"; // Ensure your firebaseConfig is properly configured

const OfferRide = () => {
  const [routeDetails, setRouteDetails] = useState({
    pickup: "",
    dropOff: "",
    timing: "",
    carDetails: "",
    price: "",
    availableSeats: "",
  });

  const handleChange = (e) => {
    setRouteDetails({
      ...routeDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ridesRef = ref(getDatabase(), "rides");  // Get reference to "rides"
      const newRideRef = push(ridesRef);  // Create a unique key for each ride
      await set(newRideRef, routeDetails);  // Add data to Firebase
      alert("Ride offered successfully!");
      setRouteDetails({ // Clear form after successful submission
        pickup: "",
        dropOff: "",
        timing: "",
        carDetails: "",
        price: "",
        availableSeats: "",
      });
    } catch (error) {
      console.error("Error adding ride:", error);
      alert("Error while offering the ride. Please try again.");
    }
  };

  return (
    <div>
      <h1>Offer a Ride</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={routeDetails.pickup}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dropOff"
          placeholder="Drop-off Location"
          value={routeDetails.dropOff}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="timing"
          placeholder="Timing"
          value={routeDetails.timing}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="carDetails"
          placeholder="Car Details"
          value={routeDetails.carDetails}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price Per Passenger"
          value={routeDetails.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="availableSeats"
          placeholder="Available Seats"
          value={routeDetails.availableSeats}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OfferRide;
