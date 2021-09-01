// Iterations are ntg but loops 
//for loop 
let n = 8;

let power = 0;
for (let i = 1; i <= n; i++) {
    power = 2 * i;
    console.log("2 X " + i + " = " + power);
}
/*-----------------------------------------------------------------------------*/
//for of loop                    //for of loops are majorly used for arrays
const names = ["anil","sunil","sagar","kedar"]

for (const n of names ){
    console.log(n)
}
/*-------------------------------------------------------------------------------*/

//for in loop                //for in loop are majorly used for objects
const symbols = {
    yt: "Youtube",
    ig: "Instragam",
    fb: "Facebook",
    snap: "Snapchart",
};
 for (const n in symbols){
     console.log(n);
 }
/*--------------------------------------------------------------------------------------*/
//while loop
let i = 3;
while (i < 10) {
    console.log(i);
    i++;
  }
/*---------------------------------------------------------------------------------*/
//Do while loop
let a = 2;
do {
    console.log(a);
    a++;
  }
  while (a< 10);
/* ----------------------------------------------------------------------------------*/
