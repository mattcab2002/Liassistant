const express = require('express');

const PatientController = require('../controllers/patient-controller');

const router = express.Router();

router.post('/', PatientController.createPatient);

module.exports = router;
