import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom"; // For navigation

function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Use navigate for redirecting

  const handleLogout = () => {
    logout(); // Clear authentication state
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <div>
      <h2>You have logged out!</h2>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

export default Logout;
