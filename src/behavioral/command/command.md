# ***Definição***

> O Padrão ***Command*** tem como definição encapsular uma solicitação como um objeto, o que lhe permite parametrizar outros objetos com diferentes solicitações, enfileirar ou registrar solicitações e implementar recursos de cancelamento de operações. Isso inclui informações como o nome do método, o objeto que o método pertence e os valores dos parâmetros do método.

## ***Estrutura***

> A classe aplicação cria um comando concreto e configura o receiver para que este possa executá-lo. A classe Receiver, que pode ser qualquer classe na aplicação, sabe como executar o trabalho necessário. ConcreteCommand é responsável por manter um vínculo entre uma ação (método action()) e um objeto da classe Receiver. Assim, um objeto Invoker invoca o método execute() e ConcreteCommand realiza uma ou mais ações no objeto Receiver. O papel do Command, que pode ser uma interface ou classe abstrata, é o de disponibilizar uma interface comum a todas as classes concretas que a implementam.

## ***Implementação***

> Considere um "simples" interruptor. Nesse exemplo vamos configurar o interruptor (Switch) com duas funções: ligar e desligar a luz. Um benefício em particular da implementação do command pattern é que o interruptor pode ser usado em qualquer dispositivo, não somente uma luz - no próximo exemplo, o Switch liga e desliga a luz, mas o construtor do Switch aceita qualquer subclasse de Command para seus dois parametros. Por exemplo, você pode configurar o Switch (interruptor) para ligar um motor.

## ***Exemplo***

```java:
import java.util.List;
import java.util.ArrayList;

/** Interface do Command */
public interface Command {
   void execute();
}

/** Classe invocadora */
public class Switch {
   private List<Command> history = new ArrayList<Command>();

   public void storeAndExecute(Command cmd) {
      this.history.add(cmd); // optional 
      cmd.execute();
   }
}

/** Classe recebedora */
public class Light {

   public void turnOn() {
      System.out.println("A luz está ligada");
   }

   public void turnOff() {
      System.out.println("A luz está desligada");
   }
}

/** O Command para ligar a luz - ConcreteCommand #1 */
public class FlipUpCommand implements Command {
   private Light theLight;

   public FlipUpCommand(Light light) {
      this.theLight = light;
   }

   @Override    // Command
   public void execute() {
      theLight.turnOn();
   }
}

/** O Command para desligar a luz - ConcreteCommand #2 */
public class FlipDownCommand implements Command {
   private Light theLight;

   public FlipDownCommand(Light light) {
      this.theLight = light;
   }

   @Override    // Command
   public void execute() {
      theLight.turnOff();
   }
}

/* Classe teste */
public class PressSwitch {
   public static void main(String[] args){
      // Checa o número de argumentos
      if (args.length != 1) {
         System.err.println("Argumento \"ON\" or \"OFF\" é necessário.");
         System.exit(-1);
      }

      Light lamp = new Light();
      Command switchUp = new FlipUpCommand(lamp);
      Command switchDown = new FlipDownCommand(lamp);

      Switch mySwitch = new Switch();

      switch(args[0]) {
         case "ON":
            mySwitch.storeAndExecute(switchUp);
            break;
         case "OFF":
            mySwitch.storeAndExecute(switchDown);
            break;
         default:
            System.err.println("Argumento \"ON\" or \"OFF\" é necessário.");
            System.exit(-1);
      }
   }
}
```

*fonte*

https://pt.wikipedia.org/wiki/Command