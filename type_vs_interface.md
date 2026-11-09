## Understanding Type Aliases VS Interfaces in TypeScript

**Introduction: **
In TypeScript there are two primary methods of defining custom data structures. These are "Type aliases" and "Interfaces". Although both of these two kinda serve similar purposes in day to day development tasks, there are some core differences which are important to undersand for writing better and scalable code as choosing the right one can directly impacts maintainability of the software.

**Detailed Body: **
Interfaces are created specifically to specify an object's shape and to create class contracts. One of the interesting things about interfaces is that we can have the same interface declared several times, and TypeScript will merge them without any error. This feature is very useful for creating public APIs or for augmenting types of third-party libraries. 

On the other hand, type aliases are very flexible. They may be used to render shapes of objects, but they are the only way to define primitives, union types, intersection types, and tuples. In contrast to interfaces, type aliases are not allowed to be merged after their first declaration.

```typescript
// Interface declaration merging
interface Client { name: string; }
interface Client { age: number; } 

// Type alias handling unions (impossible with interfaces)
type Status = "success" | "error" | "pending";