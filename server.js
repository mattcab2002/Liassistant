const express = require('express');
const connectDB = require('./Website/config/db');

const app = express();

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define Routes
// app.use('/admin', adminRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
