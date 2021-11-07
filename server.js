const express = require('express');
const connectDB = require('./config/db');
const patientRouter = require('./routes/patient-router');

const app = express();

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API running'));

// app.get('/', (req, res, next) => {
//     connectDB()
//         .listCollections()
//         .toArray()
//         .then((collection) => {
//             const dataArr = [];
//             collection.forEach((el) => dataArr.push(el.name));
//             console.log({ status: 'success', data: { dataArr } });
//         });
// });

// Define Routes
// app.use('/patient', patientRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
