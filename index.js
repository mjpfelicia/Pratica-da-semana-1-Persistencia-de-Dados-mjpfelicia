const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("escola.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Conectado ao banco de dados da escola com sucesso!");

  db.run(
    "CREATE TABLE IF NOT EXISTS alunos (matricula INTEGER PRIMARY KEY, nome VARCHAR(60), email VARCHAR(60),cidade VARCHAR(30))",);

});