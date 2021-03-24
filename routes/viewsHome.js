const express = require("express");
const {
  getHomeIndex,
  getHomeJobDetails,
  getHomeAbout,
  getHomeBlog,
  getHomeJobListing,
  getHomeLogin,
  getHomeRegister,
  getHomeSingleBlog,
  getHome404
} = require("../controllers/viewsHome");
const router = express.Router();

router.get("/", getHomeIndex);
router.get("/job-details/:id", getHomeJobDetails);
router.get("/about", getHomeAbout);
router.get("/blog", getHomeBlog);
router.get("/job-listing", getHomeJobListing);
router.get("/login", getHomeLogin);
router.get("/register", getHomeRegister);
router.get("/single-blog", getHomeSingleBlog);
router.get("/error-404" , getHome404);

module.exports = router;




