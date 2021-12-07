import DbAdapter from './DbAdapter';
import MySqlCommands from './MySqlCommands';

export default class MySqlAdapter implements DbAdapter {

  private mySqlCommands: MySqlCommands;

  constructor(mySqlCommands: MySqlCommands) {
    this.mySqlCommands = mySqlCommands;
  }

  insert(): void {
    this.mySqlCommands.insertMySql();    
  }

  update(): void {
    this.mySqlCommands.updateMySql();    
  }

  delete(): void {
    this.mySqlCommands.deleteMySql();    
  }

}