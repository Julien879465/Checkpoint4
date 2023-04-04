const AbstractManager = require("./AbstractManager");

class WorkoutManager extends AbstractManager {
  constructor() {
    super({ table: "workout" });
  }

  insert(name, serie1, serie2, serie3, weight, id) {
    return this.database.query(
      `insert into ${this.table} (date, name, serie1, serie2, serie3, weight, user_idUser) values (NOW(), ?, ?, ?, ?, ?, ?)`,
      [name, serie1, serie2, serie3, weight, id]
    );
  }

  find(idworkout) {
    return this.database.query(
      `select * from  ${this.table} where idworkout = ?`,
      [idworkout]
    );
  }

  findAllWorkout() {
    return this.database.query(`select * from  ${this.table} `);
  }

  findWorkout(id) {
    return this.database.query(
      `select * from  ${this.table} where idworkout = ?`,
      [id]
    );
  }

  deleteWorkout(idworkout) {
    return this.database.query(
      `delete from ${this.table} where idworkout = ?`,
      [idworkout]
    );
  }

  updateWorkout(name, serie1, serie2, serie3, weight, idworkout) {
    return this.database.query(
      `update ${this.table} set name = ?, serie1 = ?, serie2 = ?, serie3 = ?, weight = ? where idworkout = ?`,
      [name, serie1, serie2, serie3, weight, idworkout]
    );
  }
}

module.exports = WorkoutManager;
