function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(args) {
    sleep(1000); 
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
}

function compareArrays( arr1, arr2 ){
    return ((arr1.length == arr2.length) && arr1.every((value, i) => value === arr2[i]));
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit){
    const memory = [];
    return (...args) => {
		let checkMemory = memory.find(item => compareArrays(item.args, Array.from(args)));

		if (checkMemory) {
			return memory.result;
		} else {
			let result = fn(...args);
			memory.push({args: Array.from(args), result: result});

			if (memory.length > limit) {
				memory.shift();
			}

			return result;
		}
	}
}

function testCase (testFunction, timer) {
	const testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
	console.time(timer);
	for (let i = 0; i < 10; i++){
		testArray.forEach(testArray => testFunction(...testArray));
	}
	console.timeEnd(timer);
}

const mSum = memorize(sum, 15);

testCase(sum,'Проверка sum');

testCase(mSum,'Проверка mSum');