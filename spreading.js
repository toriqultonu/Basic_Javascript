
const defaultLocation={
	city: 'Rajshahi',
	zipCode: '8363',
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