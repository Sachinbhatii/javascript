let a, b, rest;
[a, b] = [10, 20];

console.log(a);


[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,, suv] = vehicles;
console.log(suv);
