import { Conta } from "./Conta";
import ContaCorrente from "./ContaCorrente";
import GerenciadorAcesso from "./GerenciadorAcesso";
import Usuario from "./Usuario";

export default class ContaSegura extends Conta {
    private contaCorrente = new ContaCorrente();
    private gerenciadorAcesso: GerenciadorAcesso;
    private usuario: Usuario;

    constructor(usuario: Usuario) {
        super();
        this.usuario = usuario;
        this.gerenciadorAcesso = new GerenciadorAcesso(usuario);
    }

    public depositar(valor: number): void {
        if (this.gerenciadorAcesso.hasAccess()) {
            this.contaCorrente.depositar(valor);
        } else {
            throw new Error(`User ${this.usuario.getName()} doesn't has access to this feature.`);
        }
    }

    public sacar(valor: number): void {
        if (this.gerenciadorAcesso.hasAccess()) {
            this.contaCorrente.sacar(valor);
        } else {
            throw new Error(`User ${this.usuario.getName()} doesn't has access to this feature.`);
        }
    }

    public getSaldo(): number {
        return this.contaCorrente.getSaldo();   
    }
}