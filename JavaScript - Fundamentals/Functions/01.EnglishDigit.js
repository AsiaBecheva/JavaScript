/*Write a function that returns the last 
digit of given integer as an English word.*/

function lastDigist(number){
	switch(number % 10){
		case 0: return 'zero';
		case 1: return 'one';
		case 2: return 'two';
		case 3: return 'three';
		case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'invalid number';
	}
}

console.log(lastDigist(275));
console.log(lastDigist(4859));