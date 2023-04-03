const AbstractManager = require("./AbstractManager");

class ExerciceManager extends AbstractManager {
  constructor() {
    super({ table: "exercice" });
  }

  findExercice(id) {
    return this.database.query(
      `select * from  ${this.table} where idexercice = ?`,
      [id]
    );
  }
}

module.exports = ExerciceManager;
