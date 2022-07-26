console.log("Welcome to quiz")//title xD

let a1 = (7);//answer-1
let a2 = (12);//answer-2

let q1 = ("Q1.How many days are there in a week?");//question-1
let q2 = ("Q2.How many month there are in a year?");//question-3

console.log(q1)

let ans1 = prompt("Answer");//asks the question
ans1 = Number.parseInt(ans1)//convert string to number

switch(ans1){//check answer is correct or wrong
case(a1):console.log("Correct!")
    break;
  default:console.log("Incorrect!")
    break;
}
console.log(q2)

let ans2 = prompt("Answer")

ans2 = Number.parseInt(ans2)
switch(ans2){
case(a2):console.log("Correct!")
    break;
  default:console.log("Incorrect!")
break;  
}

