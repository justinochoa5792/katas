// Genetic Algorithm Series - #3 Crossover
// In this kata you have to implement a function that receives two chromosomes chromosome1, chromosome2 and a zero-based index and it has to return an array with the crossover result on both chromosomes [chromosome1, chromosome2].

function crossover(chromosome1, chromosome2, index) {
  return [
    chromosome1.substring(0, index).concat(chromosome2.slice(index)),
    chromosome2.substring(0, index).concat(chromosome1.slice(index)),
  ];
}
