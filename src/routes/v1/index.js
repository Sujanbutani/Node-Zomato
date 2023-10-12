const express=require("express")
const userRoute=require("./user.route");
const restaurantRoute=require("./Restaurants.route");
const countryRoute=require("./country.route");
const stateRoute=require("./state.route");
const cityRoute=require("./city.route");
const foodRoute=require("./food.route");
const bannerRoute=require("./banner.route");
const restaurant_typeRoute=require("./restaurant_type.route");
const cartRoute=require("./cart.route");
const orderRoute=require("./order.route");
const deliveryRoute=require("./delivery.route");
const paymentRoute=require("./payment.route");
const adminRoute=require("./admin.route");
const blogRoute=require("./blog.route");
const reviewRoute=require("./review.route");
const searchRoute=require("./search.route");
const tokenRoute=require("./token.route");

const router =express.Router();

router.use("/user",userRoute);
router.use("/restaurant",restaurantRoute);
router.use("/country",countryRoute)
router.use("/state",stateRoute)
router.use("/city",cityRoute)
router.use("/food",foodRoute)
router.use("/banner",bannerRoute)
router.use("/restaurant_type",restaurant_typeRoute)
router.use("/cart",cartRoute)
router.use("/order",orderRoute)
router.use("/delivery",deliveryRoute)
router.use("/payment",paymentRoute)
router.use("/admin",adminRoute)
router.use("/blog",blogRoute)
router.use("/review",reviewRoute)
router.use("/search",searchRoute)
router.use("/token",tokenRoute)

module.exports=router;