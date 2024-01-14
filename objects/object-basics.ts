// function printName(person: { first: string, last: string }) {
//     console.log(`${person.first} ${person.last}`)
// }

// printName({ first: "Gabe", last: "Thurau" })


// object shape + type alias "Point"


type Point = {
    x: number,
    readonly y: number,
    z?: number
}

// ? in front of z makes it an optional property

const myPoint: Point = { x: 34, y: 100 };

type Person = {
    first: string,
    last: string,
    age: number
}

function printName(person: Person): Person {
    return { first: person.first, last: person.last, age: person.age }
}

printName({ first: "Hank", last: "Hill", age: 100 })

let coordinate: Point = { x: 34, y: 42 }

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 }
}

// nested object types

type Song = {
    title: string,
    artist: string,
    numStreams: number,
    albumInfo: { recordLabel: string, yearReleased: number, albumName: string }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} by ${song.artist} 
has ${song.numStreams} total streams. The album this song is from is ${song.albumInfo.albumName} 
and it was released in ${song.albumInfo.yearReleased} `)
}

const theSong: Song = {
    title: "What a Horrible Night to Have a Curse",
    artist: "The Black Dahlia Murder",
    numStreams: 1000000000,
    albumInfo: {
        recordLabel: "Sumerian Records",
        yearReleased: 2007,
        albumName: "Nocturnal"
    }

}

printSong(theSong)

