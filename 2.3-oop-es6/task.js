//HT.1
class Weapon {
    constructor({name, attack, durability, range}){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.damDur = durability; // для расчета getDamage
    }
    takeDamage(damage){
        this.durability =  this.durability - damage;
        if (this.durability <= 0){
            this.durability = 0;
        }
    }
    getDamage(){
        if (this.durability >= this.damDur * 0.3){
            return this.attack;
        }else if(this.durability == 0){
            return 0;
        }else{
            return this.attack / 2;
        }

    }
    isBroken(){
        if (this.durability > 0){
            return false;
        }else{
            return true;
        }

    }

}

const arm = new Weapon({ //main
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});
  
const bow = new Weapon({ //main
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

const sword = new Weapon({ //main
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1,
});

const knife = new Weapon({ //main
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const crook = new Weapon({ //main
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const long_bow = new Weapon({ //power
    name: 'Длинный Лук',
    attack: 15,
    range: 4,
});

const axe = new Weapon({ //power
    name: 'Секира',
    attack: 27,
    durability: 800,
});

const storm_crook = new Weapon({ //power
    name: 'Посох Бури',
    attack: 10,
    range: 3,
});


sword.takeDamage(5);
console.log(sword.durability); // 5
sword.takeDamage(50);
console.log(sword.durability); // 0
arm.takeDamage(20);
console.log(arm.durability); // Infinity
bow.takeDamage(20);
console.log(bow.durability); // 180
bow.takeDamage(200);
console.log(bow.durability); // 0
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0
console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1
console.log(bow.durability); // 0
console.log(bow.isBroken()); // true
console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

//HT.2
class Arm {
    constructor(){
      this.name = "Рука";
      this.attack = 1;
      this.durability = Infinity;
      this.range = 1;
    }

}
class Bow {
    constructor(){
      this.name = "Лук";
      this.attack = 10;
      this.durability = 200;
      this.range = 3;
    }
}
class Sword {
    constructor(){
      this.name = "Меч";
      this.attack = 25;
      this.durability = 500;
      this.range = 1;
    }
}
class Knife {
    constructor(){
      this.name = "Нож";
      this.attack = 5;
      this.durability = 300;
      this.range = 1;
    }
}
class Staff {
    constructor(){
      this.name = "Посох";
      this.attack = 8;
      this.durability = 300;
      this.range = 2;
    }
}
class LongBow extends Bow {
    constructor(){
      super();
      this.name = "Длинный лук";
      this.attack = 15;
      this.range = 4;
    }
}
class Axe extends Sword{
    constructor(){
      super();
      this.name = "Секира";
      this.attack = 27;
      this.durability = 800;
    }
}
class StormStaff extends Staff{
    constructor(){
      super();
      this.name = "Посох Бури";
      this.attack = 10;
      this.range = 3;
    }
}

//HT.3
class StudentLog{
    constructor(name){
        this.name = name;
        this.subject = {};
      
    }
    getName(){
        return this.name;
    }

    searchSubject(subject) {
		for (let a in this.subject) {
			if (a == subject) {
				return false;
			}
		}
		return true;
    }
    addGrade(grade, subject) {

		if (this.searchSubject(subject)) {
			this.subject[subject] = [];	
		}
		
		if (grade <  6 && grade > 0 && typeof(grade) == "number") {
				this.subject[subject].push(grade);	
		} else {
			console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`)
		}
		
		return this.subject[subject].length;
	}

	getAverageBySubject(subject) {
		if (this.subject[subject].length == 0 || this.searchSubject(subject)) {
			return 0;
		}

		let sum = 0;

		for (let items of this.subject[subject]) {
			sum += items;
        }
        
		return sum / this.subject[subject].length;
	}

	getTotalAverage() {
		let sumAverege = 0;
		let sumSubject = 0;
		
		for (let itemSubject in this.subject) {
			let itemAverege = this.getAverageBySubject(itemSubject);
			if (itemAverege != 0) {
				sumAverege += this.getAverageBySubject(itemSubject);
				sumSubject++;
			}
		}
		
		let averegeAll = sumAverege / sumSubject;
		
		return averegeAll;
	}
}


const log = new StudentLog('Олег Никифоров');

console.log(log.getName());

console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade(4, 'algebra'));


console.log(log.addGrade('отлично!', 'math'));

console.log(log.addGrade(4, 'math'));
