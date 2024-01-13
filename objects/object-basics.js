function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Gabe", last: "Thurau" });
// object shape
var coordinate = { x: 34, y: 42 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
