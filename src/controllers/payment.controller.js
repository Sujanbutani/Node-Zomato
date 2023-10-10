const { paymentService} = require("../services");

/** create payment */
const createPayment = async (req, res) => {
  try {
    const reqBody = req.body;

    const payment = await paymentService.createPayment(reqBody);
    if (!payment) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message:'payment Create Successfully',
      data: { payment },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
/** get payment list */
const getPaymentList = async (req, res) => {
  try {
    const getList = await paymentService.getPaymentList(req, res);

    res.status(200).json({
      success: true,
      message: "Get payment list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get payment details by id
  const getPaymentDetails = async (req, res) => {
    try {
      const getDetails = await paymentService.getPaymentById(req.params.paymentId);
      if (!getDetails) {
        throw new Error("Payment not found!");
      }

      res.status(200).json({
        success: true,
        message: "Payment details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** payment details update by id */
  const updateDetails = async (req, res) => {
    try {
      const paymentId = req.params.paymentId;
      const paymentExists = await paymentService.getPaymentById(paymentId);
      if (!paymentExists) {
        throw new Error("Payment not found!");
      }

      await paymentService.updateDetails(paymentId, req.body);
      res
        .status(200)
        .json({ success: true, message: "Payment details update successfully!" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

/** Delete payment */
const deletepayment = async (req, res) => {
  try {
    const paymentId = req.params.paymentId;
    if (!paymentId) {
      throw new Error("Payment not found!");
    }

    await paymentService.deletepayment(paymentId);

    res.status(200).json({
      success: true,
      message: "Payment delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
  createPayment,
  getPaymentList,
  getPaymentDetails,
  updateDetails,
  deletepayment,
};