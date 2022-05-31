//Employee(user) Router
const express=require('express');
const router = express.Router();

const usersController = require('../controllers/user');

router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);
router.get("/sign-out", usersController.destroySession);

router.post("/create-user", usersController.createUser);
router.post("/create-session", usersController.createSession);

//export router
module.exports = router;