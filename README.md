### typescript-practice
 A practice project with Typescript

# JavaScript vs TypeScript

## Introduction
JavaScript and TypeScript are both popular languages in modern web development. While they share a lot of similarities, there are important differences that you should be aware of. Below we explore these differences in depth.

---

## Loosely Typed vs Strongly Typed

### JavaScript (Loosely Typed Language)

- **What it means**: Variables are not bound to a specific data type, allowing you to freely assign different types of values to the same variable. JavaScript is a dynamically-typed language, which means type checking is done at runtime. This means you can declare a variable and later change its type:


    ```javascript
    let variable = 42;
    variable = "Now I'm a string";
    variable = true;
    ```

- **Advantages**
    1. **Rapid Prototyping**: Easier and faster to prototype software.
    2. **Less Verbose**: No need to specify types makes the code less verbose.
    3. **Dynamic Behavior**: Enables dynamic behaviors like duck typing. Duck typing is a programming concept where the type or class of an object is determined by its behavior (methods and properties) rather than its explicit inheritance or class definition. In other words, if it looks like a duck, swims like a duck, and quacks like a duck, then it's a duck.This concept is often used in dynamically typed languages like Python, Ruby, and JavaScript, where the type of a variable is not explicitly declared. Instead, the system checks whether the object behaves in the expected way, not what type it is.

### TypeScript (Strongly Typed Language)

- **What it means**: Variables are bound to a specific data type. You cannot assign a different type of value to the variable unless it's explicitly converted. TypeScript, on the other hand, is a statically-typed superset of JavaScript, which means type checking is done at compile time. If you try to change the type of a variable in TypeScript, you'll get a compile-time error:

    ```typescript
    let variable: number = 42;
    variable = "Now I'm a string"; // Error
    ```

- **Advantages**
    1. **Compile-time Error Checking**: Type errors are caught before runtime.
    2. **IntelliSense and Tooling**: Better support from text editors for IntelliSense.
    3. **Code Quality**: Strong typing often leads to more robust and maintainable codebases.

---

## Type Inference

- **JavaScript**: No type inference. You rely on manual testing or third-party type-checking solutions.
  
- **TypeScript**: Has type inference. The compiler automatically determines the data types when not explicitly stated.

    ```typescript
    let a = 42; // TypeScript knows `a` is a number
    ```

---

## Interfaces and Decorators

- **JavaScript**: Lacks native support for interfaces and decorators.
  
- **TypeScript**: Supports interfaces and decorators, offering more features for object-oriented programming.

    ```typescript
    interface Person {
        name: string;
        age: number;
    }
    ```

---

## Community and Ecosystem

- **JavaScript**: Larger community and more libraries available.
  
- **TypeScript**: Growing community. Many popular JavaScript libraries offer TypeScript type definitions.

---

## Conclusion

Both JavaScript and TypeScript have their pros and cons. TypeScript is often better for larger projects where type safety, readability, and maintainability are important. JavaScript is still very useful for smaller projects or for quick prototyping.
