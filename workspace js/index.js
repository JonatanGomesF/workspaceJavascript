let varA = 'A'; 
let varB = 'B';
let varC = 'C';

const varAtemp = varA;
varA = varB; //B
varB = varC; //C
varC = varA;//B

console.log (varA, varB, varC);