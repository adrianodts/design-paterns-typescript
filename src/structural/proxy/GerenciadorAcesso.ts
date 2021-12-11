import Usuario from "./Usuario";

export default class GerenciadorAcesso {
    private usuario: Usuario;

    constructor(usuario: Usuario) {
        this.usuario = usuario;    
    }

    public hasAccess(): boolean {
        if (this.usuario.isAdmin()) {
            return true;
        }
        return false;
    }
}