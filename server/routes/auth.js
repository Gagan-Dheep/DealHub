/ routes/auth.js
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const UserProfile = require("../models/UserProfile"); // 👈 Import UserProfile

const router = express.Router();

// Sign up
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Received data:", { username, email, password }); // Log incoming data

  try {
    // Step 1: Create and save user
    const user = new User({ username, email, password });
    await user.save();
    console.log("User saved successfully:", user);

    // Step 2: Create and save user profile
    const userProfile = new UserProfile({ username, email });
    console.log("Profile to be saved:", userProfile);
    await userProfile.save();
    console.log("Profile saved successfully:", userProfile);

    // Response
    res.status(201).json({ message: "User and profile created successfully!" });
  } catch (err) {
    console.error("❌ Detailed Error:", err); // Log the full error object
    res.status(400).json({
      message: "Error creating user or profile",
      error: err.message,
      stack: err.stack, // Include stack trace for debugging
    });
  }
});

// // Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "secretKey", {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});
