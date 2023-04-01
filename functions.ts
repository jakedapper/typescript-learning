// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

  //doSomething(must put variables in correct order - especially bc of the whole type thing)

// Return type annotation:
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}
//default parameter included above ^
//we are declaring variable type AND return type
  //typescript can infer return type - aka not necessary - this annotation isis after our parameter annotations outside the parentheses


function square(num: number): number {
  return num * num;
}

square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);

// Arrow function:
const add = (x: number, y: number): number => {
  return x + y;
};

// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

// Void
  // technically a value - i.e. undefined or null
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never
  // use when a function should not ever return anything OR run continuously

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
