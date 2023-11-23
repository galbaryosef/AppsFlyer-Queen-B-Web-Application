const { Router } = require('express');
const controller = require('./mentorController');

const router = Router();

router.get('/', controller.getMentor);
router.get('/:id', controller.getMentorById);
router.post('/', controller.addMentor); 

module.exports = router;
