# Factory method
## Intent
* Definir uma interface para a criação de um objeto, mas deixar as subclasses definirem qual classe vão instanciar. O `Factory Method` permite a classe delegar a instanciação para as subclasses.
* Definir um "construtor virtual".
* O operador `new` deve ser considerado prejudicial.
## Problema que esse padrão soluciona
Um framework precisa padronizar o modelo de arquitetura para uma gama de aplicações, mas deseja permitir que aplicações individuais definam seus próprios objetos de domínio e prover suas instanciações.
## Estrutura
Teremos uma abstração (por herança ou polimorfismo) das classes a serem instanciadas e uma abstração da fábrica que irá instanciá-las.

Uma implementação do padrão que tem se popularizado é a fabrica ficar dentro da prórpia classe, sendo um método estático (`static`)

![estrutura do padrão](https://sourcemaking.com/files/v2/content/patterns/Factory_Method.png)
## Exemplo implementado no código FactoryMethod.ts
![exemplo implementado](https://sourcemaking.com/files/v2/content/patterns/Factory_Method_example1.png)