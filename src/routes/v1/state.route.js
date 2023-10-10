const express = require("express");
const { stateController } = require("../../controllers");

const router = express.Router();

/** create state */
router.post(
  "/create-state",
  stateController.createState
);

/** Get state list */
router.get(
  "/list",
  stateController.getStateList
);

/** Get state details by id */
router.get(
  "/get-details/:stateId",
  stateController.getStateDetails
);

/** upadate state */
router.put(
  "/update-details/:stateId",
  stateController.updateDetails
);

/**  Delete state */
router.delete(
  "/delete-state/:stateId",
  stateController.deletestate
);

module.exports = router;