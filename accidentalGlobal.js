function foo(){
    let x=y=10; // b = 10 , when no identifier then global
    console.log(x);
    console.log(y);
}
foo(); 
console.log(y);
console.log(x); // let a local to foo

/**
 * let x=y=10;
 * BACKGROUND:
 * let x;
 * window.y=0;
 * x=window.y;
 */
