const express = require("express");
const { paymentController } = require("../../controllers");

const router = express.Router();

/** create payment */
router.post(
  "/create-payment",
  paymentController.createPayment
);

/** Get payment list */
router.get(
  "/list",
  paymentController.getPaymentList
);

/** Get payment details by id */
router.get(
  "/get-details/:paymentId",
  paymentController.getPaymentDetails
);

/** upadate payment */
router.put(
  "/update-details/:paymentId",
  paymentController.updateDetails
);

/**  Delete payment */
router.delete(
  "/delete-payment/:paymentId",
  paymentController.deletepayment
);

module.exports = router;