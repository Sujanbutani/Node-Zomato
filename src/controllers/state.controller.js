const { stateService} = require("../services");

/** create state */
const createState = async (req, res) => {
  try {
    const reqBody = req.body;

    const state = await stateService.createState(reqBody);
    if (!state) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'state Create Successfully',
      data: { state },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get state list */
const getStateList = async (req, res) => {
  try {
    const getList = await stateService.getStateList(req, res);

    res.status(200).json({
      success: true,
      message: "Get state list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get state details by id
  const getStateDetails = async (req, res) => {
    try {
      const getDetails = await stateService.getStateById(req.params.stateId);
      if (!getDetails) {
        throw new Error("State not found!");
      }

      res.status(200).json({
        success: true,
        message: "State details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** state details update by id */
  const updateDetails = async (req, res) => {
    try {
      const stateId = req.params.stateId;
      const stateExists = await stateService.getStateById(stateId);
      if (!stateExists) {
        throw new Error("State not found!");
      }

      await stateService.updateDetails(stateId, req.body);
      res
        .status(200)
        .json({ success: true, message: "State details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete state */
const deletestate = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    // const stateExists = await stateService.getStateById(stateId);
    if (!stateId) {
      throw new Error("State not found!");
    }

    await stateService.deletestate(stateId);

    res.status(200).json({
      success: true,
      message: "State delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createState,
  getStateList,
  getStateDetails,
  updateDetails,
  deletestate,
};