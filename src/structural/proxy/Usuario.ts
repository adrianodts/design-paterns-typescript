export default class Usuario {
    private name: String;
    private profile: String;

    constructor(name: String, profile: String) {
        this.name = name;
        this.profile = profile;
    }

    public isAdmin(): boolean {
        if (this.profile === 'admin') {
            return true;
        }
        return false;
    }

    public getName() {
        return this.name;
    }
}