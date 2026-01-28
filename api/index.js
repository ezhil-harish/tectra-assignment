let express = require('express');
let app = express();
let cors = require('cors');
let mongoose = require('mongoose');
let Doctor = require('./schema/schema');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/doctors')
  .then(() => console.log('DB Connected'))
  .catch((error) => console.log(error));

app.listen(3000, () => console.log('Server Running Successfully'));


app.get('/doctors', async (req, res) => {
  try {
    let doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post('/doctor', async (req, res) => {
  try {
    let doctor = new Doctor(req.body);
    let savedDoctor = await doctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.delete('/doctor/:id', async (req, res) => {
  try {
    let deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.put('/doctor/:id', async (req, res) => {
  try {
    let updatedDoctor = await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
