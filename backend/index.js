const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const taskRoutes = require('./routes/taskRoutes')
const cors = require('cors')
require('dotenv').config()

const app = express();

app.use(express.json())
app.use(cors());
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Pro-Manage!'
    })
})

app.get('/health', (req, res) => {
    res.json({
        serverName: 'Pro-Manage Server',
        currentTime: new Date(),
        state: 'active',
    })
})

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`server running on ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
}

app.listen(process.env.PORT, startServer)