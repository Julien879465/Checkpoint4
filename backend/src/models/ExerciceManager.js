const AbstractManager = require("./AbstractManager");

class ExerciceManager extends AbstractManager {
  constructor() {
    super({ table: "exercice" });
  }

  insert(exercice) {
    return this.database.query(
      `insert into workout_exercices (name, serie1, serie2, serie3, weight ) values (?, ?, ?, ?, ?)`,
      [
        exercice.name,
        exercice.serie1,
        exercice.serie2,
        exercice.serie3,
        exercice.weight,
      ]
    );
  }

  findExercice(id) {
    return this.database.query(
      `select * from  ${this.table} where idexercice = ?`,
      [id]
    );
  }
}

module.exports = ExerciceManager;
