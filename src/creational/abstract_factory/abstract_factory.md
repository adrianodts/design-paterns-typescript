# ***Definição***

> O ***Abstract Factory*** é um padrão de projeto de software (também conhecido como design pattern em inglês). Este padrão permite a criação de famílias de objetos relacionados ou dependentes por meio de uma única interface e sem que a classe concreta seja especificada. Uma fábrica é a localização de uma classe concreta no código em que objetos são construídos . O objetivo em empregar o padrão é isolar a criação de objetos de seu uso e criar famílias de objetos relacionados sem ter que depender de suas classes concretas. Isto permite novos tipos derivados de ser introduzidas sem qualquer alteração ao código que usa a classe base . O uso deste padrão torna possível trocar implementações concretas sem alterar o código que estas usam, mesmo em tempo de execução. No entanto, o emprego deste padrão, como acontece com outros padrões semelhantes, pode resultar em uma complexidade desnecessária e trabalho extra no início do código. Além disso, os níveis mais elevados de abstração podem resultar em sistemas que são mais difíceis de manter. A essência do padrão Abstract Factory é fornecer uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.


## ***Motivação***

> Fábrica Abstrata
Pode ser uma classe abstrata ou uma interface, mas a classe abstrata é utilizada com maior frequência. Seu objetivo é declarar métodos de criação de objetos do tipo ProdutoAbstrato, que são implementados por uma classe do tipo FabricaConcreta, que estende ou implementa a FabricaAbstrata.

> Produto Abstrato
Pode ser uma classe abstrata ou uma interface, mas a classe abstrata é utilizada com maior frequência. Produto abstrato declara os métodos que são implementados por classes do tipo ProdutoConcreto. FabricaConcreta cria internamente um objeto do tipo ProdutoConcreto, mas esse objeto é retornado como um ProdutoAbstrato. O Abstract Factory não sabe qual ProdutoConcreto está sendo criado, mas sabe quais métodos do produto ele pode utilizar.

> Fábrica Concreta
Estende ou implementa a FabricaAbstrata. O objetivo dessa classe é implementar os métodos declarados em FabricaAbstrata, criando um objeto do tipo ProdutoConcreto e retornando-o como um ProdutoAbstrato. Isso é polimorfismo. É comum existir mais de uma classe do tipo ProdutoConcreto assim como ocorre com FabricaConcreta. A quantidade de classes do tipo FabricaConcreta está diretamente ligada com a quantidade de classes do tipo ProdutoConcreto.

> Produto Concreto(ProdutoA1, ProdutoA2, etc..)
Estende ou implementa a classe ProdutoAbstrato. Nessa classe são implementados os métodos declarados em ProdutoAbstrato. Essa é a classe que faz uma instância concreta ser criada. Para cada FabricaConcreta, há pelo menos um ProdutoConcreto.

## ***Utilização***

> A fábrica determina o tipo concreto do objeto a ser criado, e é nela que o objeto é realmente criado. No entanto, a fábrica só retorna um ponteiro abstrato para o objeto concreto criado.

> O código do cliente não tem conhecimento algum do tipo concreto. Objetos concretos são, de fato criados pela fábrica, mas o código do cliente acessa tais objetos só através da sua interface abstrata.

> A adição de novos tipos concretos é feita modificando o código do cliente para usar uma fábrica diferente, uma modificação que é tipicamente uma linha em um arquivo. A nova fábrica, em seguida, cria objetos de um tipo de concreto diferente, mas ainda retorna um ponteiro do mesmo tipo abstrato como antes. Isto é significativamente mais fácil do que modificar o código de cliente para instanciar um novo tipo. Se todos os objetos de fábrica são armazenados globalmente em um objeto Singleton, e todo o código do cliente passa pelo Singleton para acessar a fábrica adequada para a criação do objeto, então alterar as fábricas se torna tão fácil como mudar o objeto Singleton.



## ***Exemplo***

> Este código, escrito na linguagem Java, mostra a implementação do diagrama mostrado acima. Por uma questão de simplicidade, o código relacionado às janelas é omitido.

*Abaixo esse exemplo pode ser visto implementado em Java.*


```java:
abstract class WidgetFactory
 {
     public static WidgetFactory obterFactory()
     {
         
         if( Configuracao.obterInterfaceGraficaAtual() == Configuracao.MotifWidget )
         {
             return new MotifWidgetFactory();
         }
         else
         {
             return new QtWidgetFactory();
         }
    }
 
    public abstract Botao criarBotao();
 }
 
 class MotifWidgetFactory extends WidgetFactory
 {
     public Botao criarBotao()  {
         return new BotaoMotif();
     }
 }
 
 class QtWidgetFactory extends WidgetFactory
 {
     public Botao criarBotao()  {
         return new BotaoQt();
     }
  }
 
 abstract class Botao
 {
     public abstract void desenhar();
 }
 
 class BotaoMotif extends Botao
 {
     public void desenhar()  {
        System.out.println("Eu sou um botao Motif!");
     }
 }
 
 class BotaoQt extends Botao
 {
     public void desenhar()  {
        System.out.println("Eu sou um botao Qt!");
     }
 }
 
 public class Cliente
 {
     public static void main(String[] args)
     {
         WidgetFactory factory = WidgetFactory.obterFactory();
 
         Botao botao = factory.criarBotao();
         botao.desenhar();
     }
 }
```

*fonte*

https://pt.wikipedia.org/wiki/Abstract_Factory