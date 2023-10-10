const { restaurantService,emailService} = require("../services");
// const ejs = require("ejs");
// const path = require("path");

/** create restaurant */
const createRestaurant = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.Restaurant_image = req.file.filename;
    } else {
      throw new Error("Restaurant image is required!");
    }

 const restaurant = await restaurantService.createRestaurant(reqBody)
    // if (!restaurant) {
    //   throw new Error("Restaurant already created ");
    // }

    res.status(200).json({
      success: true,
      message: "Restaurant create successfully!",
      data: { restaurant },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurant list */
const getRestaurantList = async (req, res) => {
  try {

    const getList = await restaurantService.getRestaurantList(req, res);

    res.status(200).json({
      success: true,
      message: "Get restaurant list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restaurant details by id */
const getRestaurantDetails = async (req, res) => {
  try {
    const getDetails = await restaurantService.getRestaurantById(req.params.restaurantId);
    if (!getDetails) {
      throw new Error("Restaurant not found!");
    }

    res.status(200).json({
      success: true,
      message: "Restaurant details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** restaurant details update by id */
const updateDetails = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {
      throw new Error("Restaurant not found!");
    }

    await restaurantService.updateDetails(restaurantId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Restaurant details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete restaurant */
const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurantExists = await restaurantService.getRestaurantById(restaurantId);
    if (!restaurantExists) {
      throw new Error("Restaurant not found!");
    }

    await restaurantService.deleteRestaurant(restaurantId);

    res.status(200).json({
      success: true,
      message: "Restaurant delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  getRestaurantDetails,
  updateDetails,
  deleteRestaurant,
};
