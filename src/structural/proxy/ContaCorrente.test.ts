import ContaFactory from "./ContaFactory";
import Usuario from "./Usuario";

test("Should reduce 100 from checking account", () => {
    const conta = ContaFactory.create(new Usuario('Maria', 'admin'));
    conta.depositar(200);
    conta.sacar(100);
    expect(conta.getSaldo()).toBe(100);
});

test("Shouldn't withdraw money from checking account", () => {
    const usuario = new Usuario('José', 'programmer');
    const conta = ContaFactory.create(usuario);
    expect(() => conta.sacar(100)).toThrow(new Error(`User ${usuario.getName()} doesn't has access to this feature.`));
});