const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/config/mongoose.config");

const AllMyJokeRoutes = require("./server/routes/pets.routes");
AllMyJokeRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));