const sqlite3 = require("sqlite3").verbose();

/*

});
*/

var db = new sqlite3.Database("escola.sqlite");

db.each("select matricula, nome from alunos",(err, row)=>{
    if(err){
      console.error(err.message);
    }
    console.log("%j", row);
  })