var express = require('express');
var router = express.Router();

//require the controller that exports skill crud functions.
var skillsController = require("../controllers/skills");

//all actual paths start with "/skills"

//get /skills
router.get('/', skillsController.index);

//get skills/new
router.get("/new", skillsController.new);

//post skills/create


router.get("/:id", skillsController.show);
router.post("/", skillsController.create);
router.delete("/:id", skillsController.delete);
module.exports = router;

