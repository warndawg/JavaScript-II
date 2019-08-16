// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const Hello = 'World';
function returnHello () {
  return Hello;
}
returnHello();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  count = 0;
  return () => {
    return ++count; 
  }
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  countFactory = 0;
  return {
    increment: () => {
        return ++countFactory;
      },
    decrement: () => {
        return --countFactory;
    }
    }  
  };

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());


