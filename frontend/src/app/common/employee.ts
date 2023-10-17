export class Employee {
    updateEmployee(employee: Employee) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public firstName: string,
        public lastName: string ,
        public email: string ,
        public mobileNumber: number,
        public dob: Date,
        public gender: string,
        public country: string,
        public city: string
    ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.mobileNumber = mobileNumber;
    this.dob = dob;
    this.gender = gender;
    this.country = country;
    this.city = city;
    }
}

