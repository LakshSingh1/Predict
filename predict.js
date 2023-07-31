const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output: I think that at first it will print out Tesla and then it will print out Mercedes
console.log(randomCar)
console.log(otherRandomCar)

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output: It shows an error, the error is that name is not defined 
console.log(name);
console.log(otherName);


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output: The first console log will actually just show the password and the second one wil show undefined
console.log(password);
console.log(hashedPassword);


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output: The first console log will show a false statement and then the second console log will show a true statement
console.log(first == second);
console.log(first == third);




const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output: This will print the whole erray first and then it will print just 1 and 5 
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
