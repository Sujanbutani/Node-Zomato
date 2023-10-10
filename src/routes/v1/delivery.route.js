const express = require("express");
const { deliveryController } = require("../../controllers");

const router = express.Router();

/** create delivery */
router.post(
  "/create-delivery",
  deliveryController.createDelivery
);

/** Get delivery list */
router.get(
  "/list",
  deliveryController.getDeliveryList
);

/** Get delivery details by id */
router.get(
  "/get-details/:deliveryId",
  deliveryController.getDeliveryDetails
);

/** upadate delivery */
router.put(
  "/update-details/:deliveryId",
  deliveryController.updateDetails
);

/**  Delete delivery */
router.delete(
  "/delete-delivery/:deliveryId",
  deliveryController.deletedelivery
);

module.exports = router;