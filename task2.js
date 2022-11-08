let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(function filterByB(animal) {
  return animal.startsWith("b")
})

// function filterByB(animal) {
//    return animal.startsWith("b")
// }