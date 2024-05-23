const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answerData = [];
let score = 0;

function test() {
  readLine.question("포켓몬스터 이름 작성해주세요 ('종료' 입력 시 프로그램 종료): ", function(answer) {
    if (answer === "종료") {
      console.log("종료되었습니다.");
      readLine.close();
      return;
    }
    let found = false;
    pokemonData.forEach(element => {
      if (answer === element) {
        answerData.push(element);
        score++;
        found = true;
      }
    });
    if (found) {
      console.log("현재 총 " + score + "개 작성했습니다.");
      console.log(found)
      test();
    } else if(found===false) {
      console.log("입력한 이름이 목록에 없습니다.");
      test();
    }
  });
}
test();
