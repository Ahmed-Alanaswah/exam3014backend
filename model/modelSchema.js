"use strict";

const mongoose = require("mongoose");

const flowerSchema = mongoose.Schema({
	instructions: String,
	photo: String,
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},
	name: String,
});

const flowerModel = mongoose.model("flower", flowerSchema);

module.exports = { flowerModel };
