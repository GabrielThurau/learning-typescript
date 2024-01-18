var pt = { x: 12, y: 15 };
// demonstrating methods on interface types
var Gabe = {
    first: "Gabe",
    last: "Thurau",
    sayHi: function () {
        return 'hello';
    }
};
var shoes = {
    name: "Air Jordans",
    price: 100000,
    applyDiscount: function (discount) {
        var newPrice = this.price * discount;
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
