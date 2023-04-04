const models = require("../models");

const add = (req, res) => {
  const { name, serie1, serie2, serie3, weight, id } = req.body;

  models.workout
    .insert(name, serie1, serie2, serie3, weight, id)
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseWorkout = (req, res) => {
  models.workout
    .findAllWorkout()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyWorkout = (req, res) => {
  const idworkout = req.params.id;
  models.workout
    .deleteWorkout(idworkout)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.workout
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const editWorkout = (req, res) => {
  const { name, serie1, serie2, serie3, weight, idworkout } = req.body;
  return models.workout
    .updateWorkout(name, serie1, serie2, serie3, weight, idworkout)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  add,
  browseWorkout,
  destroyWorkout,
  read,
  editWorkout,
};
