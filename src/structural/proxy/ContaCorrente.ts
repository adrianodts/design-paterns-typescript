import { Conta } from "./Conta";

export default class ContaCorrente extends Conta {
    sacar(valor: number): void {
        console.log(`Saldo: ${this.getSaldo()}`);
        this.saldo -= valor;
        console.log(`Saldo: ${this.getSaldo()}`);
    }
    depositar(valor: number): void {
        console.log(`Saldo: ${this.getSaldo()}`);
        this.saldo += valor;
        console.log(`Saldo: ${this.getSaldo()}`);
    }
}