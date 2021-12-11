# ***Definição***

> O ***Proxy***  é um padrão de projeto de software. Um proxy (em português, "procurador"), em sua forma mais geral, é uma classe que funciona como uma interface para outra coisa. O proxy pode fazer interface com qualquer coisa: uma conexão de rede, um grande objeto na memória, um arquivo ou algum outro recurso caro ou impossível de duplicar. Resumindo, um proxy é um objeto wrapper (empacotador) ou agente que está sendo chamado pelo cliente para acessar o objeto de serviço real, nos bastidores. O uso do proxy pode simplesmente ser encaminhado para o objeto real ou pode fornecer lógica adicional. No proxy, funcionalidade extra pode ser fornecida, por exemplo, armazenamento em cache quando as operações no objeto real exigem muitos recursos ou verificação das pré-condições antes que as operações no objeto real sejam chamadas. Para o cliente, o uso de um objeto proxy é semelhante ao uso do objeto real, porque ambos implementam a mesma interface.

> Resumidamente, o padrão proxy possui três principais finalidades, sendo elas:

* Prover um substituto (ou placeholder) para um outro objeto controlar seu acesso;
* Usar um nível extra de indireção para fornecer acesso distribuído, controlado ou inteligente;
* Adicionar um agregador e delegador para proteger o componente real de complexidade indevida.


## ***Problema***

> Você precisa implementar objetos que precisam de muitos recursos, mas você não quer instanciar tais objetos a menos/até que eles sejam requisitados pelo cliente.

## ***Discussão***

> Desenvolver um substituto, ou proxy, objeto que: instancia o objeto real na primeira vez que o cliente faz uma solicitação de proxy, lembra a identidade desse objeto real, e então redireciona a requisição para o objeto real. Então todas as requisições subsequentes são simplesmente redirecionadas diretamente para o objeto real encapsulado.

> Essas são as quatro situações mais comuns em que o padrão Proxy é aplicável.

* Um proxy virtual é um placeholder para objetos "caros de se criar". O objeto real é criado apenas quando um cliente requerer ou acessar o objeto.
Um proxy remoto provê um acesso para um objeto que reside em um espaço de endereço diferente. Isso é o que o código "stub" em RPC e CORBA provê.

* Um proxy protetor controla o acesso a um objeto alvo. O objeto "substituto" verifica se o cliente tem as permissões requisitadas para o redirecionamento da requisição. Se sim, a mensagem será repassada para o objeto alvo, senão, o proxy bloqueará o acesso e retornará um resultado de erro.

* Um proxy inteligente interpõe ações adicionais quando um objeto é acessado. Usos típicos incluem:

1. Contar o número de referências ao objeto real para que seja libertado automaticamente assim que não houver mais referências.

2. Carregar um objeto persistente na memória quando for referenciado pela primeira vez.

3. Verificar se o objeto real está travado antes de ser acessado para assegurar que nenhum outro objeto possa mudá-lo.


## ***Exemplo***

*Abaixo esse exemplo pode ser visto implementado em Java.*


```java:
 //Image
 public interface Image{
  void display(); 
 }
 //Real Image
 public class RealImage implements Image {  
   private String fileName;
   public RealImage(String fileName){
      this.fileName = fileName;
      loadFromDisk(fileName);
   }
   @Override
   public void display() {
      System.out.println("Displaying " + fileName);
   }
   private void loadFromDisk(String fileName){
      System.out.println("Loading " + fileName);
   }
 }
 //Proxy Image
 public class ProxyImage implements Image{
   private RealImage realImage;
   private String fileName;
   public ProxyImage(String fileName){
      this.fileName = fileName;
   }
   @Override
   public void display() {
      if(realImage == null){
         realImage = new RealImage(fileName);
      }
      realImage.display();
   }
 }
 //Proxy Pattern
 public class ProxyPatternDemo {
   public static void main(String args) {
      Image image = new ProxyImage("test_10mb.jpg");
      //image will be loaded from disk
      image.display();
      System.out.println("");
      //image will not be loaded from disk
      image.display();
   }
 }
```

*fonte*

https://pt.wikipedia.org/wiki/Proxy_(padr%C3%B5es_de_projeto)