/**
 * let a = 5
 * a has the value 5
 * semicolon is non mandatory
 */

let 
a 
= 
5

console.log(a); 

/**
 * This leads to error because when JS reads let y = 5 + 6(50+60).toString()
 * accepts 6() as a function , here semicolon is mandatory
 */

let y = 5 + 6
(50 + 60).toString()

console.log(y);

/* The famous error we generally encounter */

function afn(){
    return
    20; // this is unreachable , JS reads this as return; 20;
}