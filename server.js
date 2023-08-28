const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log("And we are Live!");
    
    res.send("Welcome to the Pokemon App!")
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on localhost:${PORT}`);
})