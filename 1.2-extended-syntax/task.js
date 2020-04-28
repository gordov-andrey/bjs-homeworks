function getResult(a,b,c){
    "use strict";
    let x = [];
    let diskrim = Math.pow(b,2) - 4 * a * c;

    if (diskrim == 0) {
        x.push(-b / (2  * a));
    }else if (diskrim > 0){
        x.push((-b + Math.sqrt(diskrim)) / (2 * a));
        x.push((-b - Math.sqrt(diskrim)) / (2 * a));
    }

    return x;
}

function getAverageMark(marks) {
    let averageMark;
    if (marks.length == 0) {
        averageMark = 0;
    }else {
        if (marks.length > 5) {
        console.log("Внимание, содержится более 500 оценок. К зачету идут первые 5");
        marks.splice(5);
        }
      let sum = 0;
      for (let i = 0; i < marks.length; i++){
        sum += marks[i];
      }
        averageMark = sum / marks.length;
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let age;
    age = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (age >= 18){
      result = `Не желаете ли олд-фэшн, ${name}?`;
    }else {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    return result;
}