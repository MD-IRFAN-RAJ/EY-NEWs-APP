const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use' });

    // No need to hash the password here because it's handled by the UserSchema middleware
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    console.log(user); // Log the user object

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the plaintext password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", isPasswordValid);  // Log comparison result

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Password is valid, generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("Generated JWT token:", token);  // Log the generated token

    // Respond with the token and user data
    return res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

  } catch (error) {
    console.error("Login error:", error);  // Log any errors
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


//Verify Token
router.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    res.json({ message: 'Access granted', verified });
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
});

module.exports = router;
