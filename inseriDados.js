const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("escola.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Conectado ao banco de dados da escola com sucesso!");

  db.run("INSERT INTO alunos(matricula, nome, email,cidade) values (1, 'maria', 'qualq@.com', 'minas')",);
  db.run("INSERT INTO alunos(matricula, nome, email,cidade) values (2, 'Rita', 'qual222q@.com', 'Vitoria')",);
  db.run("INSERT INTO alunos(matricula, nome, email,cidade) values (3, 'Sandra', 'qual33q@.com', 'Limeira')",);
  

});
