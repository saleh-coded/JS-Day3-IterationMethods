//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

// TAsk 1
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const result = numbers.filter( (num)=>{
    return num >= 25;
});
console.log(result);

const resultD5 = numbers.filter( (num)=>{
    return num % 5 === 0;
});
console.log(resultD5);


// Task 2
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
// Q3) 
const resultSquared= numbers.map( (num)=>{
    return num * num;   
});

console.log(resultSquared); 

// Q4) 
const resultMultiplied= numbers.map( (num)=>{
    return num * 2;   
});

console.log(resultMultiplied); 


// Task 3
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

// Q5
const result5 = numbers.filter( (num)=>{
    return num >= 20;
}).map( (num)=>{
    return num * num;
});
console.log(result5);

// Q6
const result6 = numbers.filter( (num)=>{
    return num % 5 === 0;
}).map( (num)=>{
    return num * 3;
});
console.log(result6);
