"use strict";

const express = require("express");
const cors = require("cors");

require("dotenv").config();
const { getData } = require("./controller/controller.flower");
const {
	createFavFlower,
	getFavFlower,
	deleteFavFlower,
	updateavFlower,
} = require("./controller/controller.crud");
const app = express();
const mongoose = require("mongoose");
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT;
// mongoose.connect("mongodb://localhost:27017/flowers", {
// 	useNewUrlParser: true,

// 	useUnifiedTopology: true,
// });

mongoose.connect(
	"mongodb+srv://Aa1791994:Aa1791994@cluster0.eubmp.mongodb.net/Flowers?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,

		useUnifiedTopology: true,
	}
);
app.listen(PORT, () => {
	console.log(`server worked PORT ${PORT}`);
});

app.get("/flower", getData);
app.post("/flower/favourite", createFavFlower);
app.get("/flower/favourite", getFavFlower);
app.delete("/flower/favourite/:slug", deleteFavFlower);
app.put("/flower/favourite/:slug", updateavFlower);
