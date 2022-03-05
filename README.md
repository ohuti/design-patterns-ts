# Design Patterns em Typescript
Esse repositório servirá para estudo e posteriormente para consulta da implementação de design patterns em Typescript.

Este estudo foi baseado numa série de artigos do Source Making, na seção de [Design Patterns](https://sourcemaking.com/design_patterns).

## Creational patterns
Estes design patterns tratam da instanciação de classes. Estes padrões podem ser    divididos em `class-creation` e `object-creational`. Enquanto um `class-creation` usa a herangça no seu processo de instanciação, o `object-creational` usa da delegação para fazer o trabalho.

Alguns padrões são:
* [Abstract Factory](https://sourcemaking.com/design_patterns/abstract_factory)
    * Cria uma instância de classes de diversas familias
* [Builder](https://sourcemaking.com/design_patterns/builder)
    * Separa a construção de um onjeto de sua representação
* [Factory Method](https://sourcemaking.com/design_patterns/factory_method)
    * Cria uma instancia de diversas classes derivadas
* [Object Pool](https://sourcemaking.com/design_patterns/object_pool)
    * Evita a aquisição e liberação custosa de recursos ao reciclar objetos que não estão mais em uso 
* [Prototype](https://sourcemaking.com/design_patterns/prototype)
    * Uma instancia totalmente inicializada para ser copiada ou clonada
* [Singleton](https://sourcemaking.com/design_patterns/singleton)
    * Uma classe que apenas uma instância pode existir

As implementações em typescript desses padrões se encontram na pasta `src/creational`

## Structural patterns
## Behavioral patterns