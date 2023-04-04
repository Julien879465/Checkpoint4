const express = require("express");

const router = express.Router();

const workoutControllers = require("./controllers/workoutControllers");
const exerciceControllers = require("./controllers/exerciceControllers");
const userControllers = require("./controllers/userControllers");
const auth = require("./middlewares/auth");

router.get("/users", auth, userControllers.browse);
router.get("/users/:id", userControllers.read);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/exercices", exerciceControllers.browse);
router.get("/exercices/:id", exerciceControllers.read);

router.post("/workouts", workoutControllers.add);
router.get("/workouts", workoutControllers.browseWorkout);
router.get("/workouts/:id", workoutControllers.read);
router.delete("/workouts/:id", workoutControllers.destroyWorkout);
router.put("/workouts/:id", workoutControllers.editWorkout);

router.post("/login", userControllers.login);
router.get("/logout", userControllers.logout);

module.exports = router;
