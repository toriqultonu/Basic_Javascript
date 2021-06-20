const location = {
	city: 'Rajshahi',
	zipCode: '8363',
	country: 'Bangladesh',
	getFormattedAddress(){
		return `${this.city} - ${this.zipCode} - ${this.country}`;
	}
	
}
const{city,...rest} = location;

console.log(city);
console.log(rest);

console.log(location.getFormattedAddress());

