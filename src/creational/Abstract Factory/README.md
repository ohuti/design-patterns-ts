# Abstract Factory Method pattern
## Intent
* Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
* A hierarchy that encapsulates: many possible "platforms", and the construction of a suite of "products".
* The new operator considered harmful.

## Structure
The Abstract Factory defines a Factory Method per product. Each Factory Method encapsulates the `new` operator and the concrete, platform-specific, product classes. Each "platform" is then modeled with a Factory derived class.

![Abstract Factory Diagram](Abstract_Factory.png)

## Exemple
This is an app that monitor vehicles and warns when a revision is needed for each part. The `client code` only knows about the `VehicleFactory`, isolating the concrete classes and the complexity to instantiate them. 