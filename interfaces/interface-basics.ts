interface PT {
    x: number,
    y: number
}

const pt: PT = { x: 12, y: 15 }

interface Person2 {
    first: string,
    last: string,
    sayHi: () => string;
}


// demonstrating methods on interface types

const Gabe: Person2 = {
    first: "Gabe",
    last: "Thurau",
    sayHi: () => {
        return 'hello';
    }
}

interface Product2 {
    name: string,
    price: number,
    applyDiscount(discount: number)
}

const shoes: Product2 = {
    name: "Air Jordans",
    price: 100000,
    applyDiscount: function (discount) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4))