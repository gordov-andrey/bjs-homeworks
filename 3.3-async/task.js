'use strict';

class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Ошибка! Отсутсвует id будильника');  
        }

		if (this.alarmCollection.find(item => item.id == id)) {
            return console.error('Ошибка! Будильник с таким id уже существует');
        }

		this.alarmCollection.push({id, time, callback});
	}

    removeClock(id) {
        if (this.alarmCollection.some(item => item.id == id)) {
            this.alarmCollection = this.alarmCollection.filter(item => item.id != id);
            console.log( `Будильник ${id} удален!`);
            return true;
        }

		console.log(`Будильника ${id} несуществует!`);
        return false;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().substr(0,5);
    }

    start() {
        function checkClock(item) {
            if (item.time == newDate()) {
                return item.callback();
            }
        }

        let newDate = this.getCurrentFormattedTime;
        let interval = setInterval(() => {
            this.alarmCollection.forEach(item => checkClock(item))
        }, 1000);
        return this.timerId = interval;
    }

    stop() {
        if (this.timerId != null) {
            clearInterval(this.timerId);
        }
        return this.timerId = null;
    }

    printAlarms () {
		if (this.alarmCollection.length) console.log(`Печать всех будульников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} установлен на ${element.time}`));
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock('21:00', () => console.log('Скоро спать'), 1);

    phoneAlarm.addClock('21:01', () => {
        console.log('Пора готовиться ко сну!');
        phoneAlarm.removeClock(2)
    }, 2);

    phoneAlarm.addClock('21:02', () => console.log('Иди умывайся!')); // без id

    phoneAlarm.addClock('21:02', () => {
        console.log('Иди спать, завтра рано на работу!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);

    phoneAlarm.addClock('21:05', () => { // повтор id
        console.log('Иди спать, завтра рано на работу!')
    }, 1); 

    phoneAlarm.printAlarms();

    phoneAlarm.start();
}

testCase();
