# ***Definição***

> ***Strategy***  é um padrão de projeto de software (do inglês design pattern), pode ser chamado de policy. Este padrão foi documentado no Catálogo GOF (Gang of Four), sendo categorizado como um padrão comportamental de desenvolvimento de software. De modo que delega as responsabilidades adquiridas pelas entidades, atribuindo, portanto, o comportamento. Assim a comunicação entre os objetos é aprimorada, pois há a distribuição das responsabilidades. O objetivo é representar uma operação a ser realizada sobre os elementos de uma estrutura de objetos.[1] O padrão Strategy permite definir novas operações sem alterar as classes dos elementos sobre os quais opera. Segundo o catálogo GOF o padrão tem como meta: "Definir uma família de algoritmos, encapsular cada uma delas e torná-las intercambiáveis. Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam."[2]

## ***Descrição de um problema***

*O padrão tem como habilidade:*

* Definir uma família de algoritmos;
* Encapsular cada algoritmo como uma classe;
* Permitir que eles possam ser trocados entre si.
* Permitir que o algoritmo possa variar independentemente dos clientes que o utilizam.

## ***Motivação***

> O maior incentivo para uso do padrão é a melhoria da manutenção do código o qual é frequentemente usado durante o desenvolvimento de uma aplicação. Para tanto, há a necessidade de definir um conjunto de classes para que possam ser alteradas em tempo de execução. Assim os objetos trabalham de forma independente para os possíveis clientes realizarem operações diferentes, sem a dependência de implementação do comportamento de outra classe.


## ***Aplicabilidade***

> O padrão é aplicado em situações em que muitas classes se relacionam e diferem apenas no modo de atuação, com isso o Strategy irá configurar a classe que tenha um dentre muitos comportamentos fornecidos. Também pode ser usado quando há a necessidade da variação de um algoritmo, ou seja, pode-se implementar diferentes códigos que chegam no mesmo objetivo, mas que possuem em determinadas situações mais vantagens do que os demais.

> Outra situação oportuna para o uso do padrão é em uma aplicação na qual se tem um cliente e este não pode ficar exposto a estrutura de dados do algoritmo. Além disso, quando uma classe tem muitos comportamentos e usam vários comandos condicionais, o desempenho do algoritmo poderá ficar insatisfatório, pois há a possibilidade de existir uma quantidade grande de condições, podendo deixar o código mais lento. Com o padrão pode-se retirar as condições, criando novas classes com estas estratégias, portanto melhorando desempenho. 



## ***Participantes***

* Context: É responsável pela criação e manutenção de uma referência a uma classe Strategy específica.
* Strategy: É a interface comum a todos os algoritmos suportados. Através desta interface, o Context pode chamar o * algoritmo criado pela ConcreteStrategy.
* ConcreteStrategy: Implementa o algoritmo usando a interface Strategy.[3] 


## ***Consequências***

> Família de Algoritmo: Permite a criação de uma hierarquia de classes do tipo Strategy em um mesmo contexto.
Subclasses Alternativas: Acontece o encapsulamento dos algoritmos nas classes Strategy o que permite variar o algoritmo independentemente do seu contexto, tornando mais fácil de efetuar possíveis alterações no código.
Classes Estratégicas: Com as classes Strategy pode-se excluir comandos condicionais para a seleção do comportamento desejado. No momento em que diferentes comportamentos são agrupados em uma classe é trabalhoso evitar o uso destes comandos para selecionar o comportamento correto.
Escolha de implementações: As classes Strategy podem fornecer diferentes implementações do mesmo comportamento.  O cliente pode escolher entre as estratégias aquela que mais lhe favorece.
Clientes devem conhecer as classes Strategy: Pois se o cliente não compreender como essas classes funcionam, não poderá escolher o melhor comportamento.
Custo entre a comunicação Strategy e Context: as classes que implementam a interface Strategy podem não utilizar as informações passadas por ela, ou seja, pode acontecer da classe Context criar e iniciar parâmetros que não serão utilizados.
Maior número de objetos: Strategies aumentam o número de classes na aplicação, em alguns casos pode-se diminuir o custo, ao utilizar objetos sem estados que os contextos podem usar em conjunto. Mas se tiver qualquer mudança no estado este será mantido pela classe Context que passará cada estado ao objeto Strategy.

## ***Implementação***

*Utilizar o padrão Strategy quando:*

* *um objeto deve ser parametrizado com um de vários algoritmos, os quais podem ser encapsulados e representados por uma única interface.

Segue um exemplo em Java onde o valor de comissão difere de acordo com o cargo do funcionário.


```java:

    /**
     * Interface pattern Strategy.
     */
    public interface Strategy {

        // Calcula comissão.
        double calcularComissao(double valorVenda);
    }

    /**
     * Enumeration de cargos.
     * Cada classe da enumeração define uma das estratégias possíveis de comissão
     */
    public enum Cargo implements Strategy{
        ATENDENTE {
            @Override
            public double calcularComissao(double valorVenda) {
                return (valorVenda * 0.01);
            }
        },
        VENDEDOR {
            @Override
            public double calcularComissao(double valorVenda) {
                return (valorVenda * 0.02);
            }
        },
        GERENTE {
            @Override
            public double calcularComissao(double valorVenda) {
                return (100 + valorVenda * 0.03);
            }
        };
    }

    /**
     * Dados do funcionario.
     */
    public class Funcionario {
        private long id;
        /**
         * Definimos no corpo qual o tipo de implementação nossa
         * variável cargo deverá receber (novos tipos podem surgir
         * sem que haja muitos impactos), ex: cargo = Cargo.VENDEDOR;.
         */
        private Strategy cargo;
        // Construtor, getters e setters
        . . .
    }

    /**
     * Classe que calcula comissão de venda.
     */
    public class Venda {

        private double valorVenda;
        private Funcionario funcionario;

        //Gets e setters

        public void save() {
            /*
             * Calcula o valor da comissão de venda sem que haja a necessidade de
             * usar um switch para o tipo de cargo toda vez que o método <b>save</b> for executado.
             */
            final double valorComissao = this.funcionario.getCargo().calcularComissao(this.valorVenda);
            // . . .
        }
    }
```


*fonte*

https://pt.wikipedia.org/wiki/Strategy