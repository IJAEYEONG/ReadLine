const rl = require('readline');
const fs = require('fs')
// console.dir(rl);
let inOut = {
  input: global.process.stdin,
  output: global.process.stdout,
};
const pokemonData =JSON.parse(fs.readFileSync('./pokemon.json'));
console.log(pokemonData)
console.log(typeof(pokemonData))
console.log(Array.isArray(pokemonData))
const readLine = rl.createInterface({
  input : process.stdin,
  output : process.stdout
});

readLine.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  let data = [];
  pokemonData.forEach((element) => {
    if(answer === element) {
      data.push(element);
      readLine.close();
    }
  });
  console.log(data);
  if(data.length === 0) {
    console.log("포켓몬스터가 존재하지 않습니다.");
  } else {
    console.log("포켓몬스터가 존재합니다.");
    fs.writeFileSync('./searchData.json',JSON.stringify(data),'utf8',(err)=>{
      if(err) {
        console.log(err);
      }
    });
  }
  readLine.close();
});
  // for(let i = 0; i< pokemonData.length; i++) {
  //   console.log(i + "포켓몬스터 번호");
  //   if(answer === pokemonData[i]) {
  //     console.log("포켓몬스터 이름이 존재합니다.");
  //     readLine.close();
  //     break;
  //   } else {
  //     console.log("포켓몬스터 이름이 존재하지 않습니다.");
  //     readLine.close();
  //   }
    
  // }
// });
// readLine.question("포켓몬스터 이름 작성해주세요.",function(answer){
//   for(let i =0; i<pokemonData.length;i++){
//     console.log(i+"번째")
//   }if(answer === pokemonData[i]){
//     console.log("포켓몬스터 이름이 존재합니다.")
//     readLine.close();
//     return;
//   }else{
//     console.log("없어")
//     readLine.close();
//     return;
//   }
// });