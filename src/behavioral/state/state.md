# ***Definição***

> O ***State*** é um padrão de projeto de software usado quando o comportamento de um objeto muda, dependendo do seu estado.

## ***Introdução***

> Em certas ocasiões, quando o contexto em que está a desenvolver requer um objeto que possua comportamentos diferentes dependendo de qual estado se encontra, é difícil manejar a mudança de comportamento e os estados desse objeto, tudo dentro do mesmo bloco de código. O padrão State propõe uma solução para esta complicação, criando basicamente, um objeto para cada estado possível do objeto que o chama.

## ***Objetivo***

> Permite que um objeto altere seu comportamento de acordo com o estado interno que se encontra em um momento dado.

## ***Motivação***

> O padrão State é motivado por aqueles objetos que, em seu estado atual, varia o seu comportamento devido as diferentes mensagens que possa receber. Como exemplo, tomamos uma classe Livro, um objeto desta classe terá respostas diferentes, dependendo do seu estado(Disponível ou Emprestado). Por exemplo invocando o método reservar de um objeto da classe Livro seu comportamento será diferente, se o Livro está no estado Disponível ou no estado Emprestado.

## ***Problema***

> Há uma extrema complexidade no código quando tentamos gerênciar comportamentos diferentes, dependendo de um número de estados diferentes. Também manter o código torna-se difícil, e mesmo em alguns casos, podem apontar a uma inconsistência de estados atuais na forma de implementação dos diferentes estados no código (por exemplo, com variáveis ​​para cada estado).

# ***Considerações***

> Devemos analisar a complexidade em comparação com outras soluções.

# ***Solução***

> Se implementa uma classe para cada estado diferente do objeto e o desenvolvimento de cada método para cada estado em particular. O objeto da classe a que pertencem esses estados resolvem os diferentes comportamentos, dependendo de sua condição, com as instâncias das classes de estado. Assim, sempre está presente em um objeto o seu estado atual e se comunica com ele a resolvendo suas responsabilidades.

> A idéia principal do padrão State é a introdução de um classe abstrata EstadoLivro que representa os estados e uma interface para todas as classes que representam os próprios estados. Por exemplo, as classes Disponível e Emprestado implementam responsabilidades especiais para os estados Disponível e Emprestado respectivamente do objeto Livro. A classe Livro mantém uma instância de alguma subclasse de EstadoLivro com o atributo estado que representa o estado actual do Livro. Na implementação dos métodos de Livro haverá chamadas a esses objetos que serão representados pelo atributo estado para a execução das responsabilidades, dependendo de qual estado se encontre em esse momento, enviará essas chamadas para um objeto ou outro das subclasses de EstadoLivro.

## ***Participantes***

* Contexto: Este integrante define a interface com o cliente. Mantém uma instância de Estado Concreto que define seu estado atual.
* Estado: Define uma interface para encapsular as responsabilidades associadas a um estado particular de contexto.
* Subclasse EstadoConcreto: Cada uma dessas subclasses implementa o comportamento ou responsabilidade de Contexto.

> O Contexto delega o estado específico para o objeto EstadoConcreto atual. Um objeto de Contexto pode passar-se como parâmetro a um objeto Estado. Assim, a classe Estado pode acessar o contexto, se fosse necessário. Contexto é a interface principal para o cliente. O cliente pode configurar um contexto com objetos Estado. Uma vez feito isso, os clientes não têm de lidar com objetos de tipo Estado diretamente. Tanto o objeto de Contexto como os objetos de EstadoConcreto podem decidir a mudança de estado.

## Colaborações

> O padrão de State pode usar o padrão Singleton quando necessita a existência de apenas uma instância de cada estado. Se pode utilizar quando se compartem os objetos como Flyweight existindo uma única instância de cada Estado e esta é compartilhada com mais de um objeto.

## Como Funciona

> A classe Contexto envia mensagens para os objetos de EstadoConcreto dentro de seu código para dar a estes a responsabilidade que deve ser cumprida pelo objeto Contexto. Então, o objeto Contexto vai mudando as responsabilidades de acordo com o estado em que se encontra, devido a que também muda de objeto EstadoConcreto ao fazer a mudança de esta

## Quando usá-lo?

> É recomendado quando um determinado objeto tem estados e responsabilidades diferentes, dependendo de qual estado você está em determinado momento. Também pode ser usada para simplificar os casos em que há código complicado e extenso de decisão que depende do estado do objeto

## Vantagens e desvantagens

### São as seguintes vantagens:

* É fácil de localizar as responsabilidades de estados específicos, devido a que os encontram nas classes que correspondem a cada estado. Isto proporciona uma maior clareza no desenvolvimento e na manutenção subsequente. Esta facilidade é fornecida pelo fato de que diferentes estados são representados por um único atributo (estado) e não envolvidos em diferentes variáveis ​​e grandes condicionais.

* Faz as mudanças de estado explícitas, posto que em outro tipo de implantação os estados são alterados, modificando os valores em variáveis, enquanto aqui fazer-se representar cada estado.

* Os objetos Estado podem ser compartilhados se eles não contêm variáveis ​​de instância, isto pode ser alcançado se o estado está totalmente codificado representando seu tipo. Quando isso é feito, os estados são flyweights sem estado intrínseco.

* Facilita a expansão de estados.

* Permite a um objeto alterar de classe em tempo de execução dado que ao modificar suas responsabilidades pela de outro objeto de outra classe, a herança e responsabilidades do primeiro mudaram pelas do segundo.

### Desvantagem:

* Aumenta o número de subclasses.

## ***Exemplo***

* Abaixo esse exemplo pode ser visto implementado em Java.*


```java:
public class Main {

  public static void main(String[] args) {

    Livro l1 = new Livro("Design Patterns");
    Livro l2 = new Livro("Java Programming Language");

    l1.solicitar(l1);    // Disponível -> Emprestado
    l1.solicitar(l1);    // Ops, o livro já está emprestado
    l1.devolver(l1);     // Emprestado -> Disponível

    l2.devolver(l2);     // nada, o livro já está disponível
  }

}
 /**
  * Livro define o contexto para este exemplo simples de padrão estado.
  * Um Livro pode estar em dois estados: Disponível ou Emprestado, de modo que
  * se escolhermos por representar o estado com um atributo, os métodos da
  * classe Livro acabariam por converter-se em condicionais sobre esse estado.
  */

public class Livro {

  private EstadoLivro estado;    // implementa associação com o estado

  private String titulo;

  // O construtor da classe, além de inicializar o título do
  // livro, define o estado inicial (Disponível). Como neste caso
  // os estados de livros têm o seu próprio estado, usamos um Singleton.

  public Livro(String titulo) {
    this.titulo = titulo;
    this.estado = Disponivel.instancia();
  }

  public String toString() {
    return (this.titulo + " (" + this.estado + ")" );
  }

  // Este método modifica o estado do livro. Problema: o método deve
  // ser acessado a partir de uma classe externa (EstadoLivro), o que exclui
  // a visibilidade private e protected. public é demasiado geral pois
  // *todas* as classes podem acessar o método. Neste caso, sugere-se a
  // visibilidade de package, com Livro e os seus estados no mesmo package.

  void estabelecerEstado(EstadoLivro estado) {
    System.out.println("Transitando de " + this.estado + " a " + estado);
    this.estado = estado;
  }

  // Os métodos de dependentes do estado delegam o comportamento
  // definido para cada estado. Uma vez que vamos dar aos estados
  // a responsabilidade de realizar as transições, passamos o livro
  // ao estado para que possa, se lhe interessar, chamar estabelecerEstado.

  public void devolver() {
    this.estado.devolver(this);
  }

  public boolean solicitar() {
    return this.estado.solicitar(this);
  }
}
/**
 * Esta é a classe abstrata que define as operações específicas do Estado.
 * Os métodos podem ser declarados abstratos, de modo que as classes
 * derivadas sejam forçadas a implementá-los, ou podem ter uma
 * implementação por padrão, definida neste nível.
 */

public abstract class EstadoLivro {

  // Os métodos devolver e solicitar são abstratos (devem ser implementados
  // pelos estados concretos) e são tomados como argumento livro, se
  // desejarmos aceder posteriormente aos atributos e métodos do mesmo.

  public abstract void devolver(Livro livro);
  public abstract boolean solicitar(Livro livro);

  // Além disso, adicionamos um método com um String que identifica o estado
  // do livro -- a definição estabelece um valor por padrão que será
  // usado se as subclasses não o redefinirem.

  public String toString() {
    return "Desconhecido";
  }
}
/**
 * Um dos estados concretos do livro. A classe Disponivel faz a
 * transição Disponivel -> Emprestado ao chamar o método solicitar.
 * Ignora as devoluções (não se contemplam várias cópias do mesmo livro)
 */

public class Disponivel extends EstadoLivro {

  // Uma vez que neste exemplo os estados dos livros não vão conter
  // atributos dependentes do contexto, fazemos com que Disponivel seja um
  // Singleton

  private static Disponivel instancia; // Instância do Singleton Disponivel

  protected Disponivel() {}

  public static Disponivel instancia() {
    if (this.instancia == null)
      this.instancia = new Disponivel();

    return this.instancia;
  }

  // Métodos específicos deste estado concreto. solicitar modifica o estado
  // do livro, enquanto que devolver simplesmente o ignora.

  public boolean solicitar(Livro livro) {
    System.out.println("Atendendo pedido do livro " + livro);
    livro.estabelecerEstado(Emprestado.instancia());
    return true;
  }

  public void devolver(Livro livro) {
    System.out.println("Oba... já tenho o livro " + livro);
  }

  // Redefine o nome do estado...

  public String toString() {
    return "Disponivel";
  }
}
/**
 * Um dos estados concretos do livro. A classe Emprestado faz a
 * transição Emprestado -> Disponivel ao chamar o método devolver.
 * Ignora os pedidos (não se contemplam reservas).
 */

public class Emprestado extends EstadoLivro {

  // Dado que neste exemplo os estados dos livros não vão conter
  // atributos dependentes do contexto, fazemos com que Emprestado
  // seja um Singleton.

  private static Emprestado instancia;  // Instância do Singleton Emprestado

  protected Emprestado() {}

  public static Emprestado instancia() {
    if (this.instancia == null)
      this.instancia = new Emprestado();

    return this.instancia;
  }

  // Métodos específicos deste estado concreto. Devolver faz a transição
  // para Disponivel, enquanto que solicitar rejeita.

  public boolean solicitar(Livro livro) {
    System.out.println("O livro " + livro + " não está disponível");
    return false;
  }

  public void devolver(Livro livro) {
    System.out.println("OK, o livro " + livro + " foi devolvido");
    livro.estabelecerEstado(Disponivel.instancia());
  }

  // Redefine o nome do estado

  public String toString() {
    return "Emprestado";
  }
}

```

*fonte*

https://pt.wikipedia.org/wiki/State