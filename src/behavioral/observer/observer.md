# ***Definição***

> O ***Observer***  é um padrão de projeto de software que define uma dependência um-para-muitos entre objetos de modo que quando um objeto muda o estado, todos seus dependentes são notificados e atualizados automaticamente. Permite que objetos interessados sejam avisados da mudança de estado ou outros eventos ocorrendo num outro objeto.
> O padrão ***Observer***  é também chamado de Publisher-Subscriber, Event Generator e Dependents.

## ***Descrição de um problema***

> Suponha que temos um programa que representa vários gráficos de uma pesquisa científica e utiliza vários dados para representar esse gráfico, e se um dado for atualizado o programa deve atualizar os gráficos. Para esse problema, uma solução poderia ser manter uma lista com as possíveis representações e ficar verificando por mudanças nos conjuntos de dados, assim que fosse feita mudança, as representações que está na lista seriam avisadas.

> Essa solução não é a melhor pois precisamos sempre verificar se houve essas mudanças no conjunto, e dessa forma o processamento seria muito caro, ou então a atualização seria demorada. Portanto, o padrão Observer resolve esse problema.[1]

## ***Motivação***

> Um objeto que possua agregações deve permitir que seus elementos sejam acessados sem que a sua estrutura interna seja exposta. De uma maneira geral pode-se desejar que estes elementos sejam percorridos em várias ordens.

> Como garantir que objetos que dependem de outro objeto percebam as mudanças naquele objeto?

> Os observadores (observer) devem conhecer o objeto de interesse.
O objeto de interesse (subject) deve notificar os observadores quando for atualizado.
Os objetos devem interligar-se entre si de forma a que não se conheçam em tempo de compilação de forma a criar o acoplamento e desfazê-lo a qualquer momento em tempo de execução. Solucionar isso fornece uma implementação muito flexível de acoplamento de abstrações.

## ***Aplicabilidade***

> O padrão Observer pode ser usado quando uma abstração tem dois aspectos, um dependente do outro. Encapsular tais aspectos em objetos separados permite que variem e sejam reusados separadamente. Quando uma mudança a um objeto requer mudanças a outros e você não sabe quantos outros objetos devem mudar ou quando um objeto deve ser capaz de avisar outros sem fazer suposições sobre quem são os objetos. Em outras palavras, sem criar um acoplamento forte entre os objetos.

## ***Consequências***

> Possibilita baixo acoplamento entre os objetos dependentes (os observers) e o assunto.

> Acoplamento abstrato.

> Suporte para broadcast.

> Dificuldade em saber o que foi mudado.

## ***Exemplo***

```java:
public interface Observer{
    void update(Observable o);
}

public class ConcreteObserverA implements Observer{

    public void update(Observable o){
        ObservableData data = (ObservableData) o;
        data.getData();
    }
}

public class ConcreteObserverB implements Observer{

    public void update(Observable o){
        ObservableData data = (ObservableData) o;
        data.getData();
    }
}

public abstract Subject{
    List observers = new ArrayList<>();

    public void add(Observer o){
        observers.add(o);
    }

    public void remove(Observer o){
        observers.remove(o);
    }

    public void notify(){
        Iterator it = observers.iterator();
        while(it.hasNext()){
            Observer o = (Observer)it.next();
            o.update(this);
        }
    }
}

public class SubjectData extends Subject{
    private Object myData;

    public void setData(Object myData){
        this.myData = myData;
        notify();
    }

    public Object getData(){
        return myData;
    }
}
```