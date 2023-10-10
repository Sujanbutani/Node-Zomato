const express = require("express");
const { countryController } = require("../../controllers");

const router = express.Router();

/** create country */
router.post(
  "/create-country",
  countryController.createCountry
);

/** Get country list */
router.get(
  "/list",
  countryController.getCountryList
);

/** Get country details by id */
router.get(
  "/get-details/:countryId",
  countryController.getCountryDetails
);

/** upadate country */
router.put(
  "/update-details/:countryId",
  countryController.updateDetails
);

/**  Delete country */
router.delete(
  "/delete-country/:countryId",
  countryController.deletecountry
);

module.exports = router;