const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/allusers", userController.getAllUser);

/** create user */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  userController.getUserList
);

/** Get user details by id */
router.get(
  "/get-details/:userId",
  userController.getUserDetails
);

/** user details update by id */
router.put(
  "/update-details/:userId",
  userController.updateDetails
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  userController.deleteUser
);

/** Send mail */
router.post(
  "/send-mail",
  validate(userValidation.sendMail),
  userController.sendMail
);

/**User register */
router.post(
  "/register",
  userController.register
);

/**User login */
router.post(
  "/login",
  userController.login
);

/**Get all user */
router.get(
  "/allUsers",
  userController.getAllUser
);

module.exports = router;