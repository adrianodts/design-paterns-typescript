# ***Definição***

> O ***Facade ou fachada*** é um padrão de design de software usado comumente com programação orientada a objetos. Este nome é uma analogia para uma fachada arquitetural. Um Facade é um objeto que provê uma interface simplificada para um corpo de código maior, como por exemplo, uma biblioteca de classes.

> O Padrão Facade é do tipo estrutural. É usado quando um sistema é muito complexo ou difícil de entender, já que possui um grande número de classes independentes ou se trechos de código fonte estão indisponíveis. Este padrão esconde as complexidades de um sistema maior e provê uma interface simplificada ao cliente. Tipicamente envolve uma única classe responsável por englobar uma série de membros requeridos pelo cliente. Estes membros acessam o sistema em nome do Facade e escondem os detalhes de implementação.


## ***Motivação***

> Estruturar um sistema em subsistemas ajuda a reduzir sua complexidade. A dependência existente entre os subsistemas pode ser minimizada através do uso de um objeto Facade, que fornece uma interface única e uniforme para as diversas funcionalidades de um subsistema.

> Quando existir um sistema complexo, na qual o cliente não precisa entender todo o sistema, o Facade possibilita um uso simplificado do sistema, apenas um subconjunto dele, ou utilizá-lo de uma maneira particular. Dispomos então de um sistema complicado, do qual precisamos utilizar somente uma parte, para um sistema simplificado, customizado para nossas necessidades.

## ***Finalidade***

> Tem como propósito promover uma interface unificada para um conjunto de interfaces de um subsistema. Dessa forma, é definida uma interface de alto nível que torna um subsistema mais fácil de ser utilizado.

> Seu objetivo é implementar uma forma de interagir com um sistema que seja mais fácil do que a atual, com a intenção de usar um subconjunto do sistema em questão. Ou seja, busca simplificar o uso de um sistema existente a partir de uma interface própria definida.


## ***Participantes***

* Classe Facade (Agrupadora)
Conhece quais classes dos subsistemas são responsáveis pela chamada.

Delega chamadas do cliente aos objetos de subsistemas corretos.

* Classes dos subsistemas
Implementa funcionalidades dos subsistemas.

Lida com o trabalho atribuído pelo objeto Facade.

Não tem conhecimento de Facade, isso o mantém sem referências com o cliente diretamente.

Conhece quais classes dos subsistemas são responsáveis pela chamada.

## ***Aplicação***

> O Padrão Facade pode ser usado quando :

* Se deseja uma interface simplificada para um subsistema muito complexo. Subsistemas comumente ficam mais complexos a medida que evoluem e a maioria dos padrões, quando aplicados, resultam em muitas classes de pequeno tamanho. Isso torna o subsistema mais reutilizável e simples de se customizar.

* São muitas as dependências entre clientes e classes de implementação.

* Há o interesse em dividir seus subsistemas em camadas. Use um facade para definir um ponto de entrada para cada nível de subsistema. Se seus subsistemas são dependentes, essas dependências podem ser simplificadas entre sí ao se comunicarem unica e exclusivamente pelo facade.

> Por exemplo um empréstimo em um sistema bancário:
Em um sistema bancário, o cliente precisa realizar diversas consultas a diversas entidades a fim de obter retorno sobre suas condições de realizar um empréstimo junto ao banco. Sem um padrão facade, o cliente deveria ter acesso, e consequentemente conhecer toda a complexidade por trás das regras de concessão de empréstimo.
Com a aplicação do padrão de projeto, o Facade irá tomar para sí a responsabilidade de colher dados das diferentes classes responsáveis pela decisão sobre a possibilidade de concessão de empréstimo para o cliente, e ao final, entregar a ele apenas a informação pronta.

## ***Consequências***

* Torna o sistema mais fácil de se usar, protegendo os clientes dos componentes do sistema, reduzindo o número de objetos que terão que lidar.

* Promove fraco acoplamento entre os subsistemas e seus clientes.

* Não evita que as aplicações possam acessar as subclasses diretamente, pode-se escolher entre a facilidade de uso ou a generalidade.


## ***Padrões Relacionados***

> O padrão Abstract Factory pode ser usado com o Facade para fornecer uma interface responsavel por criar objetos em um subsistema de forma independente. Pode também ser usado como uma alternativa ao Facade para esconder classes de alguma plataforma especifica.

> O Mediator é muito semelhante ao Facade, pois abstrai a funcionalidade de classes pré-existentes. No entanto, a proposta do Mediator é abstrair comunicação arbitraria entre objetos relacionados, comumente centralizando funcionalidades que não correspondem a nenhum deles. Classes relacionadas ao Mediator não só são cientes deste, como também se comunicam com ele diretamente ao invés de se comunicarem uma à outra.

> Em contrapartida, o Facade meramente abstrai a interface para os objetos do subsistema para torna-los mais simples de serem usados. Nenhuma nova funcionalidade é definida e classes do subsistema não são cientes de sua presença.

> Normalmente, apenas um objeto Facade é necessário. Portanto, Facades são constantemente associados ao padrão Singleton.

> Enquanto o flyweight nos mostra como instanciar muitos objetos de pequeno tamanho, o Facade nos mostra como fazer apenas um objeto representar um subsistema inteiro.

## ***Exemplo***

> Esse é um exemplo abstrato de como um cliente ("você") interage com um Facade (o "computador") para um sistema complexo (as partes internas do computador como o processador e o disco rígido):


*Abaixo esse exemplo pode ser visto implementado em Java.*


```java:
class CPU {
  public void freeze() { ... }
  public void jump(long position) { ... }
  public void execute() { ... }
}

class Memory {
  public void load(long position, byte[] data) { ... }
}

class HardDrive {
  public byte[] read(long lba, int size) { ... }
}

class Computer {
  private CPU cpu;
  private Memory memory;
  private HardDrive hardDrive;

  public Computer() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  public void startComputer() {
    cpu.freeze();
    memory.load(BOOT_ADDRESS, hardDrive.read(BOOT_SECTOR, SECTOR_SIZE));
    cpu.jump(BOOT_ADDRESS);
    cpu.execute();
  }
}

class You {
  public static void main(String[] args) {
    Computer facade = new Computer();
    facade.startComputer();
  }
}
```

*fonte*

https://pt.wikipedia.org/wiki/Fa%C3%A7ade