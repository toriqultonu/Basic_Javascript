const location = {
	city: 'Rajshahi',
	zipCode: '8363',
	country: 'Bangladesh',
	get FormattedAddress(){
		return `${this.city} - ${this.zipCode} - ${this.country}`;
	},

	set address(newAddress){
		if(typeof newAddress === 'string'){
			this.city = newAddress.split('-')[0].trim();
		}
		console.log(newAddress);
	}
	
}

location.address='Malotinagor - bogura';


console.log(location.FormattedAddress);