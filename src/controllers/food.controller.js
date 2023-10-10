const { foodService,emailService} = require("../services");
// const ejs = require("ejs");
// const path = require("path");

/** create food */
const createFood = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.food_image = req.file.filename;
    } else {
      throw new Error("Food image is required!");
    }

 const food = await foodService.createFood(reqBody)
    if (!food) {
      throw new Error("Food already created ");
    }

    res.status(200).json({
      success: true,
      message: "Food create successfully!",
      data: { food },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get food list */
const getFoodList = async (req, res) => {
  try {

    const getList = await foodService.getFoodList(req, res);

    res.status(200).json({
      success: true,
      message: "Get food list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get food details by id */
const getFoodDetails = async (req, res) => {
  try {
    const getDetails = await foodService.getFoodById(req.params.foodId);
    if (!getDetails) {
      throw new Error("Food not found!");
    }

    res.status(200).json({
      success: true,
      message: "Food details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** food details update by id */
const updateDetails = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("Food not found!");
    }

    await foodService.updateDetails(foodId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Food details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete food */
const deleteFood = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const foodExists = await foodService.getFoodById(foodId);
    if (!foodExists) {
      throw new Error("Food not found!");
    }

    await foodService.deleteFood(foodId);

    res.status(200).json({
      success: true,
      message: "Food delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createFood,
  getFoodList,
  getFoodDetails,
  updateDetails,
  deleteFood,
};
