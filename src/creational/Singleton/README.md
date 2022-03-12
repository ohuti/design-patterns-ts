# Singleton Pattern
## Intent
* Ensure a class has only one instance, and provide a global point of access to it.
* Encapsulated "just-in-time initialization" or "initialization on first use".

## Structure
Make the class of the single instance responsible for access and "initialization on first use". The single instance is a private static attribute. The accessor function is a public static method.
![Singleton Diagram](singleton.png)

## Example - Database connection
As an example of this pattern, I implemented a In-memory dabatase to store *Users*. 

I can get an instance in different moments of the script or even different scopes of one project, and it will be the same instanciation.

So I persisted two users with one instanciation and retrieved then with another one. In the end I compared if the first instanciation is equal to the second one. Executing `yarn test` will evaluate it's behaviour and the rules above.