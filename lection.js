// Функция для добавления метаданных к объектам
function addMetadata(book, metadataType, data) {
    if (book[metadataType]) {
        book[metadataType].push(data);
    } else {
        book[metadataType] = [data];
    }
    // book[metadataType] = [data];
}

// Функция для извлечения метаданных из объекта
function getMetadata(book, metadataType) {
    return book[metadataType];
}

// Creating object and adding metadata
const book = {
    title: "1984",
    author: "George Orwell",
};

const reviewSymbol = Symbol("review");
const ratingSymbol = Symbol("rating");
const tagsSymbol = Symbol("tags");

addMetadata(book, reviewSymbol, "Nice book");
addMetadata(book, ratingSymbol, 5);
addMetadata(book, tagsSymbol, "dystopia");

// Output metadata
console.log(getMetadata(book, reviewSymbol));
console.log(getMetadata(book, ratingSymbol));
console.log(getMetadata(book, tagsSymbol));

const books = [
    { title: "1984", author: "George Orwell" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

books[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: books[this.current++] }
                : { done: true };
        },
    };
};

for (const book of books) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}

const getAllDiv = document.getElementsByTagName("div");
console.log(getAllDiv);

const divFilter = Array.from(getAllDiv).filter((element) =>
    element.hasAttribute("data-active")
);

console.log(divFilter);

let lessons = new Map();

lessons.set("Math", "Smirnov");
lessons.set("History", "Ivanova");

const ivanLessons = new Set().add("Math").add("History").add("Math");

const students = new Map();
students.set("Ivan", ivanLessons);

console.log(`Math teacher ${lessons.get("Math")}`);
console.log(`History teacher ${lessons.get("History")}`);
console.log(`Ivan lessons ${[...students.get("Ivan")]}`);
