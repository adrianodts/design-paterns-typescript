import { Conta } from "./Conta";
import ContaSegura from "./ContaSegura";
import Usuario from "./Usuario";

export default class ContaFactory {

    static create(usuario: Usuario): Conta {
        return new ContaSegura(usuario)
    }
}