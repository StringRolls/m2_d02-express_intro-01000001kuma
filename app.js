const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.static("public"));

app.get("/", (request, res) =>
    res.sendFile("__dirname + views/baseball.html")
);

app.get("/", (request, res) =>
    res.sendFile("__dirname + views/hockey.html")
);

app.get("/", (request, res) =>
    res.sendFile("__dirname + views/basketball.html")
);



// // Build the server here
// app.get("/", (request, response) =>
//   response.sendFile(__dirname + "/views/index.html")
// );

// app.get("/homepage", (req, res) => 
//     res.sendFile(__dirname + "/views/home.html")
// );

// app.get("/about", (req, res) => 
//     res.sendFile(__dirname + "/views/about.html")
// );

const PORT = 3050;
app.listen(PORT, () => console.log('running on port 3000'));