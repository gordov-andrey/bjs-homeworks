function getAnimalSound(animal) {
    if (animal == undefined) {
        animalSound = null;
    }else if (animal != undefined) {
        const sound = animal.sound;
        animalSound = sound;
    }

    return animalSound;
}

function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
        }
      let sum = 0;
      for (let i = 0; i < marks.length; i++){
        sum += Number(marks[i]);
      }
      let average = sum / marks.length;
      let roundedAverage = Math.round(average);
    

    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = new Date();
    now = Date.parse(now);
    birthday = Date.parse(birthday);
    let diff = now - birthday;
    let age = Math.floor(diff / 31556926 /1000);
    
    if (age >= 18){
        verdict = true;
      }else {
        verdict = false;
    }
    return verdict;
}