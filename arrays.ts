// String array
const activeUsers: string[] = [];
activeUsers.push("Tony");
// can't push or reassign array values of different types

// Array of numbers
const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

// Alternate Syntax:
// const bools: Array<boolean> = []
    // capital A, use <type of value> -- Array<string>, etc

const bools: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });

// Multi-dimensional string array
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
