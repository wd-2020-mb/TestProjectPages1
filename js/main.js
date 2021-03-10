let user = {
    firstName: "Mustafa",
    lastName: "Beyatli",

    getFullName: function () {
        return `Full Name : ${ this.firstName } ${ this.lastName }`;
    }
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.getFullName());