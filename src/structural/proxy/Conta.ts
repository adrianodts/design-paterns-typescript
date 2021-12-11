export abstract class Conta {
    protected saldo: number = 0;

    public getSaldo() {
        return this.saldo;
    }

    abstract sacar(valor: number): void;
    abstract depositar(valor: number): void;
}