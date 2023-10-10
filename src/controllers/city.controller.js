const { cityService} = require("../services");

/** create city */
const createCity = async (req, res) => {
  try {
    const reqBody = req.body;

    const city = await cityService.createCity(reqBody);
    if (!city) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'city Create Successfully',
      data: { city },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get city list */
const getCityList = async (req, res) => {
  try {
    const getList = await cityService.getCityList(req, res);

    res.status(200).json({
      success: true,
      message: "Get city list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get city details by id
  const getCityDetails = async (req, res) => {
    try {
      const getDetails = await cityService.getCityById(req.params.cityId);
      if (!getDetails) {
        throw new Error("City not found!");
      }

      res.status(200).json({
        success: true,
        message: "City details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** city details update by id */
  const updateDetails = async (req, res) => {
    try {
      const cityId = req.params.cityId;
      const cityExists = await cityService.getCityById(cityId);
      if (!cityExists) {
        throw new Error("City not found!");
      }

      await cityService.updateDetails(cityId, req.body);
      res
        .status(200)
        .json({ success: true, message: "City details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete city */
const deletecity = async (req, res) => {
  try {
    const cityId = req.params.cityId;
    // const cityExists = await cityService.getCityById(cityId);
    if (!cityId) {
      throw new Error("City not found!");
    }

    await cityService.deletecity(cityId);

    res.status(200).json({
      success: true,
      message: "City delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createCity,
  getCityList,
  getCityDetails,
  updateDetails,
  deletecity,
};