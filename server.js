const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory dataset
const users = [
  { phone: '1234567890', pin: '1234', userData: 'User 1 data' },
  { phone: '9876543210', pin: '5678', userData: 'User 2 data' }
  // Add more users as needed
];

app.use(express.static('public'));

app.get('/index.html', (req, res) => {
  const { phone, pin } = req.query;

  const user = users.find((u) => u.phone === phone && u.pin === pin);

  if (user) {
    res.json({ success: true, userData: user.userData });
  } else {
    res.json({ success: false, message: 'Invalid phone number or pin' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
