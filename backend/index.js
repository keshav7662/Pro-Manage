const express = require('express')

const app = express();


app.get('/',(req,res) => {
    res.status(200).json({
        message:'Welcome to Pro-Manage!'
    })
}) 

app.get('/health',(req,res) => {
    res.json({
        serverName: 'Pro-Manage Server',
        currentTime: new Date(),
        state: 'active',
    })
}) 

app.listen(3000,() => {
    console.log('Server running successfully on 3000!')
})