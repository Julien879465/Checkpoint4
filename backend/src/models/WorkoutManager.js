const AbstractManager = require("./AbstractManager");

class WorkoutManager extends AbstractManager {
  constructor() {
    super({ table: "workout" });
  }

  insert(exercice) {
    return this.database.query(`update into ${this.table} (title) values (?)`, [
      exercice.name,
    ]);
  }

  findWorkout(id) {
    return this.database.query(
      `select * from  ${this.table} where idworkout = ?`,
      [id]
    );
  }
}

module.exports = WorkoutManager;
