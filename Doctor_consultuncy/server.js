const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: String,
});
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle sign-in requests
app.post('/api/signin', async (req, res) => {
  const { email, password, userType } = req.body;

  // Find the user based on email and userType
  const user = await User.findOne({ email, userType });
  if (user) {
    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // Generate a JWT token
      const token = jwt.sign(
        {
          email: user.email,
          userType: user.userType,
        },
        'your_secret_key',
        {
          expiresIn: '1h',
        }
      );

      // Set the token in the response headers
      res.setHeader('Authorization', `Bearer ${token}`);

      // Send a success response
      res.status(200).json({ message: 'Authentication successful' });
    } else {
      // Invalid password
      res.status(401).json({ message: 'Invalid password' });
    }
  } else {
    // User not found
    res.status(401).json({ message: 'Invalid email or user type' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
