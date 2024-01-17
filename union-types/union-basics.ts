let age: string | number = 21;

type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long: number
}

let coordinates: Point | Loc = { x: 1, y: 34 };

// type narrowing

function printAge(age: number | string) {
    console.log(`You are ${age} years old`)
}

function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace('$', ''));
    }
    return price * tax;
}

const stuff: (number | string)[] = [1, 2, 3, "yo"];

const coords: (Point | Loc)[] = [];

coords.push({ lat: 1, long: 34 })

// literal types

let mood: "Happy" | "Sad" = "Happy";

mood = "Sad";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"


let today: DayOfWeek = "Tuesday";






