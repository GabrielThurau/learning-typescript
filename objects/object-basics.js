// function printName(person: { first: string, last: string }) {
//     console.log(`${person.first} ${person.last}`)
// }
function printName(person) {
    return { first: person.first, last: person.last, age: person.age };
}
printName({ first: "Hank", last: "Hill", age: 100 });
var coordinate = { x: 34, y: 42 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " by ").concat(song.artist, " \nhas ").concat(song.numStreams, " total streams. The album this song is from is ").concat(song.albumInfo.albumName, " \nand it was released in ").concat(song.albumInfo.yearReleased, " "));
}
var theSong = {
    title: "What a Horrible Night to Have a Curse",
    artist: "The Black Dahlia Murder",
    numStreams: 1000000000,
    albumInfo: {
        recordLabel: "Sumerian Records",
        yearReleased: 2007,
        albumName: "Nocturnal"
    }
};
printSong(theSong);
