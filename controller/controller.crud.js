"use strict";

const { flowerModel } = require("../model/modelSchema");

const createFavFlower = async (req, res) => {
	const { instructions, photo, name } = req.body;
	const slug = name.toLowerCase().split(" ").join("-");
	flowerModel.find({ slug: slug }, (error, data) => {
		if (data.length > 0) {
			res.send("sorry");
		} else {
			const newFlowerModel = new flowerModel({
				instructions: instructions,
				photo: photo,
				name: name,
				slug: slug,
			});

			newFlowerModel.save();
			res.send(newFlowerModel);
		}
	});
};

const getFavFlower = async (req, res) => {
	const data = await flowerModel.find({});
	res.send(data);
};

const deleteFavFlower = (req, res) => {
	const slug = req.params.slug;
	flowerModel.deleteOne({ slug: slug }, (error, data) => {
		if (error) {
			res.send(error);
		} else {
			const data = flowerModel.find({});
			res.send(data);
		}
	});
};

const updateavFlower = (req, res) => {
	const slug = req.params.slug;
	const updateData = req.body;
	flowerModel.findOne({ slug: slug }, (error, data) => {
		data.instructions = updateData.instructions;
		data.name = updateData.name;
		data.save();
	});

	const data = flowerModel.find({});
	res.send(data);
};

module.exports = {
	createFavFlower,
	getFavFlower,
	deleteFavFlower,
	updateavFlower,
};
