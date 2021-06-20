const location = {
	city: 'Rajshahi',
	zipCode: '8363',
	country: 'Bangladesh'
	getFormattedAddress(){
		return `${this.city} - ${this.zipCode} - ${this.country}`;
	}
}

console.log(location.getFormattedAddress());