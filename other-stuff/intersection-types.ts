type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

// intersection happens with the ampersand

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 5,
    color: "Pink"
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog
    & {
        age: number;
    }

const clyde: CatDog = {
    numLives: 200,
    breed: "Chihauahahahaha",
    age: 12
}