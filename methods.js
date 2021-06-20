const location = {
	city: 'Rajshahi',
	zipCode: '8363',
	country: 'Bangladesh',
	getFormattedAddress(){
		console.log(this);
		return `${this.city} - ${this.zipCode} - ${this.country}`
	},
	
}

location.getFormattedAddress();

const someFunciton = location.getFormattedAddress.bind(location);

console.log(typeof location.getFormattedAddress);

someFunciton();

console.log(someFunciton);

