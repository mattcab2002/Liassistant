const Patient = require('../models/patient-model');

createPatient = (req, res) => {
    const patient = new Patient();

    patient.name = req.body.name;
    patient.sex = req.body.sex;
    patient.insurance = req.body.insurance;
    patient.guardian_number = req.body.guardian_number;
    patient.phone_number = req.body.phone_number;
    patient.hobbies = req.body.hobbie;
    patient.address = req.body.address;
    patient.type = req.body.type;
    patient.doctor = req.body.doctor;

    patient
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Patient created',
                user: patient,
            });
        })
        .catch((err) => {
            return res.status(400).json({
                success: false,
                message: err,
            });
        });
};

module.exports = { createPatient };
