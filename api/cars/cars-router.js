// DO YOUR MAGIC
const express = require("express");
//const Car = require("./cars-model");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json("getting all cars");
});
router.get("/", async (req, res, next) => {
  res.json(`getting car id with ${req.params.id}`);
});
router.post("/", async (req, res, next) => {
  res.json("posting new car");
});

module.exports = router;
