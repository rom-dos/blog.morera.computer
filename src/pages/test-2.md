---
title: "Testing code styles"
date: "2018-11-21"
tags: ['computers', 'macOS']
---

Some `code`. This is some code:

```javascript
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}

var me = new Developer('Nicholas', 'Morera');

console.log(me.getName());
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

A class describes an **entity** which is used as a blueprint to create an **instance** of this entity. Once an instance of the class gets created with the `new` statement, the constructor of the class is called which instantiates the instance of the class. Therefore, a class can have properties which are usually located in its constructor. In addition, class methods (e.g. `getName()`) are used to read (or write) data of the instance. The instance of the class is represented as the `this` object within the class, but outside the instance is just assigned to a JavaScript variable.
