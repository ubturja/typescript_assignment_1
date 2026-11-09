# Assignment-1 Overview

This repository contains the solutions of my Next Level Software Development with AI Engineering assignment - 1. The tasks cover type narrowing, generic functions, immutable tuples, object-oriented programming with access modifiers and asynchronous Promise handling.

## 2 Blog Posts
* [Type Aliases Versus Interfaces in TypeScript](type_vs_interface.md)
* [Type Hierarchy: Any, Unknown, and Never in Typescript](any_vs_unknown_vs_never.md)

## Problem Solutions steps I took 

* **Problem-1:** 
I solved this problem by defining `multiplyValue` with an optional parameter that defaults to `2` (`multiplier : number = 2`) which ensures that if `0` is passed, the program still performs multiplication without falling back to the default.

* **Problem-2:** 
I solved this problem by typing the input as `string | number | boolean` and utilizing the `typeof` operator to - 
  1. Safely branch logic
  2. Manipulate strings 
  3. Multiply numbers 
  4. Evaluate booleans based on the runtime type.

* **Problem 3:** 
I solved this problem by usinga strictly ordered `readonly [number, number, string]` tuple parameter to prevent mutation and destructuring the values.

* **Problem 4:** 
I solved this problem by applying a generic type `<T>` with the rest parameter syntax `(...arrays: T[][])` to safely capture an arbitrary number of arrays. Those are then flattened into a single `T[]` by using a loop and the spread operator.

* **Problem 5:**
I solved this by defining a `Course` interface to enforce object shapes and utilizing the non-mutating `Array.prototype.filter()` method to evaluate the `isPublished` and `minStudents` conditions.

* **Problem 6:** 
I solved this problem by pairing generic type `<T>` with `<K extends keyof T>` constraint. This binds the key requested to the properties of the objects of the array by using `.map()` and safely extracts the specific values.

* **Problem 7:** 
I solved this problem by constructing an `Employee` class with `protected` and `private` properties. The `Manager` subclass then `extends` to the  `Employee` class (which is the base class here) by using `super()` method in its constructor and then accessing inherited protected fields.

* **Problem 8:** 
I solved this problem by creating `async` function that returns a `Promise<string>`. It evaluates the condition given for age to either trigger a `setTimeout` that calls `resolve` after 1000ms or to immediately call `reject` with a new `Error` instance.