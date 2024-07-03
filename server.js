const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*', // or specify the origin of your Electron app
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept']
}));

app.post('/api/add_task', (req, res) => {
  // Handle the request
  res.json({ message: 'Task added successfully' });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
