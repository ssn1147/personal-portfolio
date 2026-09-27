const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

// POST: Handle contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(201).json({ success: true, message: 'Message saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// GET: Retrieve all messages
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({ date: -1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));