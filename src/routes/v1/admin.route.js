const express = require("express");
const { adminController } = require("../../controllers");

const router = express.Router();

/** create admin */
router.post(
  "/create-admin",
  adminController.createAdmin
);

/** Get admin list */
router.get(
  "/list",
  adminController.getAdminList
);

/** Get admin details by id */
router.get(
  "/get-details/:adminId",
  adminController.getAdminDetails
);

/** upadate admin */
router.put(
  "/update-details/:adminId",
  adminController.updateDetails
);

/**  Delete admin */
router.delete(
  "/delete-admin/:adminId",
  adminController.deleteadmin
);

module.exports = router;