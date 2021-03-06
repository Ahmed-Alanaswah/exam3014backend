"use strict";

const superagent = require("superagent");
const getData = async (req, res) => {
	superagent
		.get(`https://flowers-api-13.herokuapp.com/getFlowers`)
		.then((data) => {
			const responseData = data.body.flowerslist.map((flower) => {
				return flower;
			});
			res.send(responseData);
		});
};

module.exports = { getData };
