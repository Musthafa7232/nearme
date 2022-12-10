var r=require("readline-sync")
var num1=r.question("enter the first value")
var num2=r.question("enter the second value")

if(num1<num2){
    console.log(num2+" is greater")
}else console.log(num1 +" is greater")