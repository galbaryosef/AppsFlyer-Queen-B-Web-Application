const { Router } = require("express");
const mentorController = require('./mentorController')

const router = Router();

router.get("/", mentorController.getMentors);
router.post("/",mentorController.addMentor);
router.get("/:id", mentorController.getMentorById);

module.exports = router;