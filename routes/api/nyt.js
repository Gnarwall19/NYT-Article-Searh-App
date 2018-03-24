const router = require("express").Router();

// MIGHT WANT TO CHANGE CONST TO NYTCONTROLLER???
const articleController = require("../../controllers/nytController");

// Matches "/api/nyt"
router.route("/")
    .get(articleController.findAll);

module.exports = router;