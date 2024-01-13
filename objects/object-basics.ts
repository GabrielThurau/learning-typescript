function printName(person: { first: string, last: string }) {
    console.log(`${person.first} ${person.last}`)
}

printName({ first: "Gabe", last: "Thurau" })


// object shape

let coordinate: { x: number; y: number } = { x: 34, y: 42 }

function randomCoordinate(): { x: number; y: number } {
    return { x: Math.random(), y: Math.random() };
}