const { Router } = require("express");
const controller = require("./mentorController");
//const authController = require('../auth/authController');

const router = Router();

router.get("/", controller.getMentor);
router.get("/:id", controller.getMentorById);
router.post("/", controller.addMentor);
router.delete("/:id", controller.deleteMentorById);
router.get("/search/:skills", controller.getMentorsBySkill);

// router.post('/login', controller.login);
//router.post('/logout', controller.logout);

module.exports = router;
