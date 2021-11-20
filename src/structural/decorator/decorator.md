# ***Definição***

> O ***Decorator, wrapper*** (ou em português Decorador), é um padrão de projeto de software que permite adicionar um comportamento a um objeto já existente em tempo de execução, ou seja, agrega dinamicamente responsabilidades adicionais a um objeto.[1] Decorators oferecem uma alternativa flexível ao uso de herança para estender uma funcionalidade, com isso adiciona-se uma responsabilidade ao objeto e não à classe.


## ***Motivação***

> O Decorator surgiu da necessidade de adicionar um comportamento, funcionalidade ou estado extra a um objeto em tempo de execução, por exemplo quando Herança não é concebível por ser um caso que geraria um número muito alto de sub-classes.

> Suponha que existe um objeto Arma, ela pode ter comportamentos diferentes dependendo da munição, dependendo do tipo de mira que tiver, se tiver algum tipo de silenciador ou outro acessório. Imagine criar agora uma sub classe para cada combinação possível de armas, o número de classes aumenta exponencialmente para cada opção a mais que você tiver. É ai que entra o Decorator.

> Outro exemplo de utilização desse padrão seria, por exemplo, um sistema de reserva de passagens no qual o passageiro possa adicionar itens e serviços à sua passagem área ou viária. Como bagagens extras, cabine com espaço maior e opções de refeição. Uma árvore de natal que recebe a adição de objetos e luzes que a decoram também é um outro exemplo do mundo real no qual aplicar-se-ia o padrão Decorator.

> São diversos os exemplos nos sistemas que usamos no dia-a-dia, cuja função é adicionar responsabilidades e comportamentos à um objeto dinamicamente e que sem esse padrão, a capacidade de personalizar e editar classes tornaria-se inviável.

## ***Aplicabilidade***

* Acrescentar ou remover responsabilidades a objetos individuais dinamicamente, de forma transparente
* Evitar a explosão de subclasses para prover todas as combinações de responsabilidades
* Acrescentar responsabilidades a um objeto dinamicamente
* Prover alternativa flexível ao uso de subclasses para se estender a funcionalidade de uma classe
* Pode-se utilizar Decorator quando a herança seria uma boa alternativa mas a definição da classe está escondida ou não * disponível para herança
* pode usar um ou mais decoradores para englobar um objeto
* Os padrões Decorador e Composite podem ser visto como similares, uma vez que ambos usam o princípio de recursividade. O * decorator pode ser visto como uma versão simplificada do padrão Composite, porém o Decorator apenas adiciona responsabilidades adicionais e não é usado para agregar objetos


## ***Consequências***

* O Decorator resolve problemas que a herança gera em determinados momentos, em que classes precisam ser muitos especificadas e detalhas de diferentes formas gerando excessivas subclasses. Nestes momentos o decorator é aplicado. Diminuindo drasticamente as classes geradas e permitindo flexibilidade aos atributos e métodos.

* Isto acontece, pois, a solução por de trás deste padrão é encapsular o objeto original dentro de uma interface. Ambos os objetos decorator e o objeto principal herdam essa interface. A interface utiliza composição recursiva para permitir que os ilimitados números de “decorações” possam ser adicionados ao objeto principal.

* Esta solução traz ao projeto uma flexibilidade maior, em que pode se adicionar ou remover responsabilidades sem que seja necessário editar o código-fonte, alta coesão e fraco acoplamento.


## ***Exemplo***

> Um exemplo simples e prático da aplicação do Decorator seria colocar acessórios em uma arma, como miras e silenciadores. Um modo de se contornar esse problema seria criar uma interface e criar armas que implementam essa interface (Figura 2), porém isso faria com que tivéssemos muitas classes que implementam essa interface, para apenas dois acessórios teríamos que criar 4 classes (Arma sem acessórios, arma com silenciador, arma com mira, arma com mira e silenciador) tornando essa uma alternativa ruim. Além disso, essa alternativa viola os princípios de baixa acoplação e alta coesão.

> Outra solução seria utilizar o Design Pattern Decorator, com esse Design Pattern será possível contornar esse problema de uma forma simples e que não viole nenhum princípio de design. Além disso, ele possibilita que sejam adicionados acessórios durante o tempo de execução. A aplicação do padrão Decorator seria a seguinte (Figura 3).

*Abaixo esse exemplo pode ser visto implementado em Java.*


```java:
public interface Arma{

  public void montar();

}

public class ArmaBase implements Arma{

  @Override
  public void montar(){
    System.out.println("Essa é uma arma base");
  }

}

public class ArmaDecorator implements Arma{

  public Arma arma;

  public ArmaDecorator(Arma arma){
    this.arma = arma;
  }

  @Override
  public void montar(){
    this.arma.montar();
  }

}

public class Mira extends ArmaDecorator{

  public Mira(Arma arma){
    super(arma);
  }

  @Override
  public void montar(){
    super.montar();
    System.out.println("Adicionando mira a arma");
  }

}

public class Silenciador extends ArmaDecorator{

  public Silenciador(Arma arma){
    super(arma);
  }

  @Override
  public void montar(){
    super.montar();
    System.out.println("Adicionando silenciador a arma");
  }

}

/* Monta uma arma com mira e silenciador */
Arma armaCompleta = new Silenciador( new Mira( new ArmaBase() ) );
armaCompleta.montar();

/* Monta uma arma sem acessórios */
Arma armaB = new ArmaBase();
armaB.montar();

/* Monta uma arma com silenciador */
Arma armaComSilenciador = new Silenciador( armaB );
armaComSilenciador.montar();

/* Monta uma arma com mira */
Arma armaComMira = new Mira( armaB );
armaComMira.montar();
```

*fonte*

https://pt.wikipedia.org/wiki/Decorator