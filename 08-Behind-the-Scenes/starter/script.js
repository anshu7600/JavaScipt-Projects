"use strict";

// Some info about JavaScript

// JavaScript is a High-Level, Prototype-Based Object-Oriented, Multi-Paradigm, Interpreted or Just-In-Time Compiled, Dynamic, Single-Threaded, Garbage-Collected Programming Language With First-Class Function and a Non-Blocking Event Loop Concurrency Model

// High Level:
// Is a programing lanaguage that manages resources automatically, some example of high level languages are JavaScript and Python, and an example of a low level language is C, where developer have to manage resources manually.

// Garbage Collecting:
// Removes old, unused objects from the computer memory automatically

// Interpreted or Just-In-Time Compiled
// The computer only understandes 0's and 1, so all the code is converted to 0, and 1 when it is executed

// Multi-Paradigm
// Paradigm: An approach and mindset of structuring code, which direct your coding style and technique
// 3 popular Paradigms are
// Procedural Progarmming, is just organizing the code in a linear way and using some function
// OOP or Object-Oriented Programming
// Function programming (FP)

// Prototype-Based Object-Oriented:
// Almost everything in JavaScipt is an object execpt primitive values, such as numbers, strings, and etc
// Array on the other hand is a object and we can use methods on it like push, pop, because of prototypal inheritance.
// Basically, we create arrays from an array blueprint, which is a like template and this is called the prototype
// This prototype contains all the array methods, and then the arrays we create inherit the methods from the blueprint, and that is how we can use the methods

// First-class Functions
// If a language has First-class Functions it meaths that functions are treated as variables. We can pass them into other function, and return them from functions
// This allows Function programming

// Dynamic
// Means Dynamically-Typed
// We don't need to assign data types to variables, they only became known when the code is executed
// Also the type of variables can be changed when we reassign variables

// Single-threaded

// Concurrency model: Is how JavaScript engine handles multiple tasks happening at the same time
// JavaScipt runs in one single thread, which means it can only do one thing at a time
// So a way to handle the situation when multiple things happeneing at the same time
// Thread is a set of instructions that is executed in the computers's CPU

// So for long running task, it sounds like it would block the single thread. But we want non-blocking behavior
// And Event loop is used for that, it takes long runninf takes, executes them in the background, and puts them back in the main thread once they are finished

// JavaScript Engine, and runtime

// Machine Code is 0's and 1's

// JS Engine is a program that executes JS Code
// Every browser has its own engine the most known is the v8 Engine, which runs chrome

// JS Engine contains call stack and a heap
// Call Stack is where the code is executed, using something called execution contexts
// The Heap is an unstructured memory pool which stores all the object our application needs

// How the code is compiled to machine code

// Compilation:
// The whole code in converted into machine code at once and written to a binary file that can be executed by a computer
// Steps: Source code to machine code, then it can be executed way after the compilation

// Interpretation:
// Interpreter runs through the source code and executes it line by line
// Steps: It runs the code when the source code is coverted to machine code
// Slower than Compilation

// Just-in-time (JIT) Compilation: Entire code is converted into machine code at once, then executed immediately, is what JS uses
// Is like a mix in both Compilation and Interpretation
// but JS was Interpretation in the past

// How all this works

// First when the code enters the engine the first step is to parse the code, means to read the code, it is parsed into a data Structure called abstract Syntax tree or AST.
// Works by splitting the code into meaningful pieces, like const or function keywords, then saving all these pieces to the tree in a structured way, this step also check if there are any syntax errors
// AST is just a representation ofour code inside the engine

// Next Step is Compilation:
// Which takes the generated AST and compiles it into machine code
// Then The machine code is executed right away

// JS engines have optimization strategies. What they do is to create a very unoptimized version of machine code in the beginning, just so that it can start executing as fast as possible, then in the background this code s being optimized and recompiled during the already running program execution.
// This makes the engines so fast

// JS Runtime. the most common one is a browser
// Runtime in browser:
// JS Engine is like the heart of the runtimes, but we also need web APIs which are functionalities provided to the engine, accessible on the window object
// A runtime also includes a callback queue, this is a data structure that contains all the callback functions that are ready to be executed
// Example: Callback function from Dom event listener
// So when an event happens, the callback function is put into the callback queue. Then when the stack is empty the callback function is passed to the stack so that it can be executed and this happenes by something called event loop
// So basically the event loop takes callback functions from the callback queue and puts them in the call stack, so they can be executed

// JS Runtime in Node.JS is pretty simmilar but there are no Web API's, so we have C++ binding and thread pool instead

// Execution context

// After being compilailed the code will be ready for execution, then a global execution context is created for the top-level code, which is the code that is not inside any function
// Because function should only be executed when they are called

// Execution context is a Environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed
// So basically the code is executed in the Execution context
// In any JS project there will only be one global execution context
// Exactly one global execution context (EC): Default context, created for code that is not inside any function (top-level)
// So the top level code is executed and the CPU processes the machine code, and then the excution of function will be executed, how it workd is one execution context per function: for each function call, a new execution context is created, which contains all the necessary information to run exactly that function.
// Same for Methods, because they are also function attached to objects
// When function are done executing, the engine will wait for callback function which can be click event, and the event loop provides these new callback functions

// Inside Execution Context

// Variable Env:
// let, const and var declarations
// Functions
// Aruguments object, this contains all the arguments that were passed into the function that the current execution context belongs to.
// So all variables declared inside a function will end up in the variable env
// A function can also access variables outside the function, because of scope chain, it contains references to variables that are located outside of the current function and this scope chain is stored in each execution context, and also each context also gets a special variable called "this" keyword
// These variable env, scope chain, and this keyword is generated in a so-called creation phase, which happens right before execution phase
