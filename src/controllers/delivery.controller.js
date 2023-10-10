const { deliveryService} = require("../services");

/** create delivery */
const createDelivery = async (req, res) => {
  try {
    const reqBody = req.body;

    const delivery = await deliveryService.createDelivery(reqBody);
    if (!delivery) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'delivery Create Successfully',
      data: { delivery },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get delivery list */
const getDeliveryList = async (req, res) => {
  try {
    const getList = await deliveryService.getDeliveryList(req, res);

    res.status(200).json({
      success: true,
      message: "Get delivery list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get delivery details by id
  const getDeliveryDetails = async (req, res) => {
    try {
      const getDetails = await deliveryService.getDeliveryById(req.params.deliveryId);
      if (!getDetails) {
        throw new Error("Delivery not found!");
      }

      res.status(200).json({
        success: true,
        message: "Delivery details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** delivery details update by id */
  const updateDetails = async (req, res) => {
    try {
      const deliveryId = req.params.deliveryId;
      const deliveryExists = await deliveryService.getDeliveryById(deliveryId);
      if (!deliveryExists) {
        throw new Error("Delivery not found!");
      }

      await deliveryService.updateDetails(deliveryId, req.body);
      res
        .status(200)
        .json({ success: true, message: "Delivery details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete delivery */
const deletedelivery = async (req, res) => {
  try {
    const deliveryId = req.params.deliveryId;
    // const deliveryExists = await deliveryService.getDeliveryById(deliveryId);
    if (!deliveryId) {
      throw new Error("Delivery not found!");
    }

    await deliveryService.deletedelivery(deliveryId);

    res.status(200).json({
      success: true,
      message: "Delivery delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createDelivery,
  getDeliveryList,
  getDeliveryDetails,
  updateDetails,
  deletedelivery,
};