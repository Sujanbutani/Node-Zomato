const { countryService} = require("../services");

/** create country */
const createCountry = async (req, res) => {
  try {
    const reqBody = req.body;

    const country = await countryService.createCountry(reqBody);
    if (!country) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'country Create Successfully',
      data: { country },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get country list */
const getCountryList = async (req, res) => {
  try {
    const getList = await countryService.getCountryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get country list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get country details by id
  const getCountryDetails = async (req, res) => {
    try {
      const getDetails = await countryService.getCountryById(req.params.countryId);
      if (!getDetails) {
        throw new Error("Country not found!");
      }

      res.status(200).json({
        success: true,
        message: "Country details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** country details update by id */
  const updateDetails = async (req, res) => {
    try {
      const countryId = req.params.countryId;
      const countryExists = await countryService.getCountryById(countryId);
      if (!countryExists) {
        throw new Error("Country not found!");
      }

      await countryService.updateDetails(countryId, req.body);
      res
        .status(200)
        .json({ success: true, message: "Country details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete country */
const deletecountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    // const countryExists = await countryService.getCountryById(countryId);
    if (!countryId) {
      throw new Error("Country not found!");
    }

    await countryService.deletecountry(countryId);

    res.status(200).json({
      success: true,
      message: "Country delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createCountry,
  getCountryList,
  getCountryDetails,
  updateDetails,
  deletecountry,
};