const { restaurant_typeService} = require("../services");

/** create restaurant_type */
const createRestaurant_type = async (req, res) => {
  try {
    const reqBody = req.body;

    const restaurant_type = await restaurant_typeService.createRestaurant_type(reqBody);
    if (!restaurant_type) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'restaurant_type Create Successfully',
      data: { restaurant_type },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get restaurant_type list */
const getRestaurant_typeList = async (req, res) => {
  try {
    const getList = await restaurant_typeService.getRestaurant_typeList(req, res);

    res.status(200).json({
      success: true,
      message: "Get restaurant_type list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get restaurant_type details by id
  const getRestaurant_typeDetails = async (req, res) => {
    try {
      const getDetails = await restaurant_typeService.getRestaurant_typeById(req.params.restaurant_typeId);
      if (!getDetails) {
        throw new Error("Restaurant_type not found!");
      }

      res.status(200).json({
        success: true,
        message: "Restaurant_type details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** restaurant_type details update by id */
  const updateDetails = async (req, res) => {
    try {
      const restaurant_typeId = req.params.restaurant_typeId;
      const restaurant_typeExists = await restaurant_typeService.getRestaurant_typeById(restaurant_typeId);
      if (!restaurant_typeExists) {
        throw new Error("Restaurant_type not found!");
      }

      await restaurant_typeService.updateDetails(restaurant_typeId, req.body);
      res
        .status(200)
        .json({ success: true, message: "Restaurant_type details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete restaurant_type */
const deleterestaurant_type = async (req, res) => {
  try {
    const restaurant_typeId = req.params.restaurant_typeId;
    // const restaurant_typeExists = await restaurant_typeService.getRestaurant_typeById(restaurant_typeId);
    if (!restaurant_typeId) {
      throw new Error("Restaurant_type not found!");
    }

    await restaurant_typeService.deleterestaurant_type(restaurant_typeId);

    res.status(200).json({
      success: true,
      message: "Restaurant_type delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createRestaurant_type,
  getRestaurant_typeList,
  getRestaurant_typeDetails,
  updateDetails,
  deleterestaurant_type,
};