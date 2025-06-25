// Part 1: Try, Catch, & Finally

function divideNumbers(a, b) {
  try {
    const answer = a / b;
    if (b === 0) {
      throw "Division by zero is not allowed.";
    }
    console.log(answer);
  } catch (err) {
    console.log("OH GOD NOT A ZERO!!!!");
  } finally {
    console.log("Execution Complete.");
  }
}

// divideNumbers(10, 5);

// divideNumbers(4, 0);

// Part 2: Error Handling in Asynchronous Code

// Part 3: Debugging JavaScript Errors
// Correct the code so that it checks for properly undefined name and logs "Hello, Guest!" if no name is provided

function greet(name) {
  if (name === undefined) {
    console.log("Hello Guest!");
  } else {
    console.log("Hello " + name + "!")
  }
}

greet("Shelby")
greet()