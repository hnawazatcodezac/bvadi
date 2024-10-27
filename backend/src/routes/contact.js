const { Router } = require("express");
const router = Router();

const { contactUs } = require("../controllers/contact");
const validateBody = require("../middlewares/bodyJoi");

router.post("/", validateBody("contactUs"), contactUs);

module.exports = router;
