const express = require("express");
const { cartController } = require("../../controllers");

const router = express.Router();

/** create cart */
router.post(
  "/create-cart",
  cartController.createCart
);

/** Get cart list */
router.get(
  "/list",
  cartController.getCartList
);

/** Get cart details by id */
router.get(
  "/get-details/:cartId",
  cartController.getCartDetails
);

/** upadate cart */
router.put(
  "/update-details/:cartId",
  cartController.updateDetails
);

/**  Delete cart */
router.delete(
  "/delete-cart/:cartId",
  cartController.deletecart
);

module.exports = router;