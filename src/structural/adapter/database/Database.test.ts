import DbAdapter from './DbAdapter';
import MySqlAdapter from './MySqlAdapter';
import MySqlCommands from './MySqlCommands';
import OracleCommands from './OracleCommands';

test("Should insert data into oracle database", () => {

  const oracleCommands: DbAdapter = new OracleCommands();
  oracleCommands.insert();

})

test("Should insert data into mySql database", () => {

  const mySqlCommands = new MySqlAdapter(new MySqlCommands());
  mySqlCommands.insert();

})