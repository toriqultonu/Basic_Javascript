
const defaultLocation={
	city: 'Rajshahi',
	zipCode: [],
	country: 'Bangladesh',

}

const incomingLocation = {
	street: 'talaimari',
	number: 69
}

const finalLocation = {
	...defaultLocation,
	...incomingLocation
}

console.log(finalLocation);

finalLocation.zipCode.push('100');

console.log(finalLocation);
console.log(defaultLocation);