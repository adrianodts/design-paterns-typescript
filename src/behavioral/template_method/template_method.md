# ***Definição***

> Um ***Template Method*** auxilia na definição de um algoritmo com partes do mesmo definidos por métodos abstratos. As subclasses devem se responsabilizar por estas partes abstratas, deste algoritmo, que serão implementadas, possivelmente de várias formas, ou seja, cada subclasse irá implementar à sua necessidade e oferecer um comportamento concreto construindo todo o algoritmo.

> O Template Method fornece uma estrutura fixa, de um algoritmo, esta parte fixa deve estar presente na superclasse, sendo obrigatório uma classeAbstrata que possa conter um método concreto, pois em uma interface só é possível conter métodos abstratos que definem um comportamento, esta é a vantagem de ser uma Classe Abstrata porque também irá fornecer métodos abstratos às suas subclasses, que por sua vez herdam este método, por Herança (programação), e devem implementar os métodos abstratos fornecendo um comportamento concreto aos métodos que foram definidos como abstratos. Com isso certas partes do algoritmo serão preenchidos por implementações que irão variar, ou seja, implementar um algoritmo em um método, postergando a definição de alguns passos do algoritmo, para que outras classes possam redefiní-los.[1]

## ***Estrutura***

> A representação do diagrama de classe no modelo da UML mostra como acontece físicamente a herança e quem fica responsável pela implementação. A importância de um diagrama de classes é porque descreve os tipos de objetos presentes no sistema e os vários tipos de relacionamentos estáticos existentes entre eles.


## ***Exemplo***

```java:
package br.com.nc.architect.templatemethod;

public abstract class AbstractClass {

	public final void templateMethod() {
		System.out.println("AbstractClass.templateMethod() called");
		primitiveOperation1();
		primitiveOperation2();

	}

	public abstract void primitiveOperation1();
	public abstract void primitiveOperation2();
}

package br.com.nc.architect.templatemethod;

public class Concrete1 extends AbstractClass {

	public void primitiveOperation1() {
		System.out.println("Concrete1.primitiveOperation1() called");
	}

	public void primitiveOperation2() {
		System.out.println("Concrete1.primitiveOperation2() called");
	}
}

package br.com.nc.architect.templatemethod;

public class Concrete2 extends AbstractClass {

	public void primitiveOperation1() {
		System.out.println("Concrete2.primitiveOperation1() called");
	}

	public void primitiveOperation2() {
		System.out.println("Concrete2.primitiveOperation2() called");
	}
}

package br.com.nc.architect.templatemethod;

public class TestTemplateMethod {

	public static void main(String[] args) {
		System.out.println("Test TemplateMethod");
		System.out.println("-------------------------");

		AbstractClass class1 = new Concrete1();
		AbstractClass class2 = new Concrete2();

		class1.templateMethod();
		class2.templateMethod();
	}
}
```

*fonte*

https://pt.wikipedia.org/wiki/Template_Method