# Node LISP Parser

A Node (JavaScript) approach to parsing a string of lisp code into an Abstract Syntax Tree (AST)

## Install and Use

To "install" you can run the following:

```git clone https://github.com/manila/node-lisp-parser && cd node-lisp-parser```

You can edit the code inside of index.js and then run the parser (if you are in the cloned directory) with:

```npm start``` 

## How does it work?

There are two main "stages" needed to parse a lisp string. 

The first is the *tokenizer* which will add whitespace around all the symbols in the string so it can be split into an array.

The second stage is a recursive function that walks through the string and builds the AST. This relies on the mutability of the array of tokens and will destroy it as it steps through. The AST is built pushing an empty array to the end of the AST parameter which is seeded as a 2D array `[[]]` when it comes across a `(`, any symbol that is NOT an `(` or `)` is pushed into the last array in the AST array. Upon reading a `)` the last list in the AST is popped off the end then added inside of the last array inside the AST. The very last step is to return the AST and since we seeded the AST with a 2D array we need *un*nest the AST a couple times

Its list inception! Here is a visual that might help

`(list 1)`

Will be transformed step by step like this

`[[]]` -> `[[],[]]` -> `[[],[list]]` -> `[[],[list, 1]]` -> `[[[list, 1]]]` -> `[list, 1]`

## TODO

- [ ] Add a REPL
- [ ] Implement '+'
- [ ] Implement 'first'
- [ ] Implement 'list'
