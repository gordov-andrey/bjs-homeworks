"use strict";
//Ex.1
function getSolutions( a, b, c ) {
  let D = Math.pow(b,2) - 4 * a * c;
          
  if (D == 0) {
    let x1 = -b / (2 * a);
    return { D: D, roots: [ x1 ] };
  };
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { D: D, roots: [ x1, x2 ] };
  };

  return { D: D, roots: [] };
}

function showSolutionsMessage( a, b, c ) {
  let result = getSolutions( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots.length == 0){
    console.log(`Уравнение не имеет вещественных корней`);
  };
  if (result.roots.length == 1){
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  };
  if (result.roots.length == 2){
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  };
  
}

showSolutionsMessage( 2, 4, 2 );

//Ex.2
function getAverageScore(data) {
    let averageMarks = {};
    let sumAverageMarks = 0;
    let count = 0;
    
    for(let subj in data) {
      averageMarks[subj] = getAverageMark(data[subj]); 
      sumAverageMarks += averageMarks[subj];
      count++;       
    }

    if (sumAverageMarks != 0) { 
      averageMarks.average = sumAverageMarks / count; 
    }else {
      averageMarks.average = 0; 
    }

    return averageMarks;
  
}

function getAverageMark(marks) {
    if (marks.length == 0) {
      return 0;
      }
    let sum = 0;
    for (let i = 0; i < marks.length; i++){
      sum += marks[i];
    }
    let average = sum / marks.length;

    return average;

}

console.log(getAverageScore({algebra: [2,4,5], geometriya: [3,5]}));

//Ex.3
function getPersonData(secretData) {
    let pirat = {};

    for(let prop in secretData) {
      pirat[prop] = getDecodedValue(secretData[prop]);
    }

    return {firstName : pirat.aaa, lastName: pirat.bbb};
}

function getDecodedValue(secret) {
    let code = "Родриго";
    if (secret == 1) {
      code = "Эмильо"
    }
    
    return code;
}
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 0}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 1}));