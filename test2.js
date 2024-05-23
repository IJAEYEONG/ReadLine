const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));
// console.log(pokemonData)
// for(const a in pokemonData){
//   console.log(`${a}:${pokemonData[a]}`)
// }
for(const a of pokemonData){
  console.log(a)
}