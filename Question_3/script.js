// Write a “person” class to hold all the details.


class person
{
    constructor(firstName,Lastname,age,gender,occupation,country)
    {
        this.firstName = firstName;
        this.Lastname = Lastname;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.country = country;
    }
}

let P1 = new person('harish','mahesh',23,'male','Software tester','India');
let P2 = new person('Shyam','Sundar',25,'male','Data Analyst','Dubai');
let P3 = new person('Kamalapriya','Ponnusamy',22,'female','Junior Engineer','India');


console.log(P1);
console.log(P2);
console.log(P3);