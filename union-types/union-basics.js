var age = 21;
var coordinates = { x: 1, y: 34 };
// type narrowing
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace('$', ''));
    }
    return price * tax;
}
var stuff = [1, 2, 3, "yo"];
var coords = [];
coords.push({ lat: 1, long: 34 });
