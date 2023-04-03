const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (idUser, username, email, password) values (?, ?, ?, ?)`,
      [user.idUser, user.username, user.email, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, set email = ?, set password = ? where id = ?`,
      [user.username, user.email, user.password, user.id]
    );
  }

  findByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
