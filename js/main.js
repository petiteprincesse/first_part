let num = 266219;
num = num.toString();
let multiplicationResult = 1;

for (let i=0; i<num.length; i++) {
  multiplicationResult *=num[i];
}

multiplicationResult **=3;
multiplicationResult = multiplicationResult.toString();
console.log(multiplicationResult.substr(0,2));