// https://github.com/MatthijsReyers/SyntaxHighlightingTests
// Contributors: Matthijs Reyers

// Possilbe import statements.
import * as config from './config';
import {foo, bar} from "module";
import "math";

// Constants & global variables.
const MAX_COUNTER = 9999;
var activeMonths = ['April','August','December'];

/**
 * Doctype signature for sayHello() function.
 * @param {string} Name of person to greet.
 * @return {number} The number 55, always.
 */
export function sayHello(name) {
    console.log(`hello ${name}!`);
    return 40 + 15;
}

async function logData() {
    var promise = await fetch('127.0.0.1/things.html');
    data = await promise.json();
    console.log(data);
}

// Class that extends another class.
class Demo extends Object {

    // Constructor for classes.
    constructor() {
        super();
        this.name = "Demo class";
    };
    
    static fizzBuzz() {

        checkLamba = (number) => {
            let output = ""
            if (number % 3)
                output += "FIZZ";
            if (number % 5)
                output = output + "BUZZ";
            console.log(output ? output : number);
        }

        for (let i = 0; i < MAX_COUNTER; i++)
            checkLamba(i);
    }
}

var typeCheckerLamba = obj => {
    if (obj === undefined)
        throw TypeError()
    else if (typeof obj == "boolean") {
        console.log("The type is boolean")
        return "bool"
    }
    else return typeof obj;
}

document.onload = () => {

    let options = {
        name: "application",
        year: 2012,
        score: 55.434
    }

    for (const key in options) {
        const value = object[key];
        console.log(`key:${key}, value:${value}`);
    }

    let numbers = [
        1005,
        223,
        98.3,
        1.1
    ]

    for (let i = 0; i < numbers.length; i++)
        console.log(numbers[i]);

    for (const num of numbers)
        console.log(num * 324);
}



class Shape {
    constructor() {
        // does nothing...
    }
}

class Square extends Shape {
    constructor(w, h) {
        super();
        this.width = w
        this.height = h
    }

    static getArea() {
        return this.width * this.height;
    }
}

let sq = new Square(10,6);
