"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = new Number(percent);
    contribution = new Number(contribution);
    amount = new Number(amount);
    let creditBody = amount - contribution; //тело кредита
    let numOfMonths = (date.getFullYear() - new Date().getFullYear()) * 12; //количество месяцев
    let pcnt = (percent / 12) / 100; //процентики
    let q = Math.pow(1 + pcnt, numOfMonths); //кусок формулы
    let mounthlyPayment = creditBody * pcnt * q / (q - 1); //расчет платежа
    let totalAmount = mounthlyPayment * numOfMonths; 
    totalAmount = new Number(totalAmount.toFixed(2)); //оставляем 2 знака после запятой, приводим строку к числу

    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    if (name == "" || name == null || name == undefined){
        name = "Аноним";
    } 
    let greeting = `Привет, мир! Меня зовут ${name}`;

    console.log(greeting);
    return greeting;
}