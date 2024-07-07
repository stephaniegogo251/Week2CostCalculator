const express = require("express");
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.post("/result", function(req, res) {
    const { departure, destination, count } = req.body;

    if (destination.toLowerCase() === "mumbai") {
        const totalCost = 1750 * parseInt(count); 
        const message = `You have successfully booked ${count} tickets to Mumbai at a total cost of ${totalCost}`;
        res.send(message);
    }

    else if (destination.toLowerCase() === "sydney") {
        const totalCost = 8200 * parseInt(count); 
        const message = `You have successfully booked ${count} tickets to Sydney at a total cost of ${totalCost}`;
        res.send(message);
    }

    else {
        const totalCost = 3030 * parseInt(count); 
        const message = `You have successfully booked ${count} tickets to Paris at a total cost of ${totalCost}`;
        res.send(message);
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
