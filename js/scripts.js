const a = prompt('Podaj a'),
	b = prompt('Podaj b'),
	value = ((a*a)-(2*a*b)-(b*b));

if (value>0) {
	console.log('wynik dodatni');
} else if (value<0) {
	console.log('wynik ujemny');
} else {
	console.log('wynik równy 0');
}

document.write(value)
