import DbAdapter from './DbAdapter';

export default class OracleCommands implements DbAdapter {

  insert(): void {
    console.log("insert from oracle");
  }

  update(): void {
    console.log("update from oracle");
  }

  delete(): void {
    console.log("delete from oracle");
  }

}