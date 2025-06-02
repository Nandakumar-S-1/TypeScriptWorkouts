//type keyword is used to create custom types
function data(st1) {
    return "".concat(st1.name, ",").concat(st1.age);
}
data({ id: 1, name: "Ashika", age: 22 });
console.log(data({ id: 1, name: "Ashika", age: 22 }));
