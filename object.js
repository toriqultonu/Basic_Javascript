
const obj = {
	firstname: 'Toriqul',
	lastname: 'islam',

	getFullname(){
		return `${this.firstname} ${this.lastname}`;
	}
}

obj.firstname = function() {
	return this.firstname;
}

console.log(obj.firstname;

console.log(obj.getFullname());