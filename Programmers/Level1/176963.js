// 추억점수

let name = ["may", "kein", "kain", "radi"];
let yearning = [5, 10, 1, 3];
let photo = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];
let answer = [];

for(let i=0; i<photo.length; i++) {
    let sum = 0;
    
    for(let j=0; j<photo[i].length; j++) {
        let findName = name.indexOf(photo[i][j]);
        
        if(findName != -1) {
            sum += yearning[findName];        
        }
    }
    answer.push(sum);
}

console.log(answer);