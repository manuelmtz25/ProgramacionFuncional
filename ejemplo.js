//Normal function
function double(x) {
  return x * 2;
}

//Arrow function
const double = (x) => {
  return x * 2;
};

//Short arrow function
const double = x => x * 2

console.log(double(3))

//funcion pura: siempre entrega el mismo resultado a partir del mismo argumente que reciba
const isGreaterThan = (value, comparison) => value > comparison
console.log(isGreaterThan(5,6))
console.log(isGreaterThan(7,3))

//funcion NO pura: nos entregará diferentes resultados cada vez que la mandemos llamar
const time = () => new Date().toLocaleTimeString()
console.log(time())