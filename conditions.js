//if else statement 
let a = 5;
if (a/2 == 0){
    console.log("even number");
} 
else{
    console.log("odd number");
}
/* --------------------------------------------------------------------------------------------*/
// switch statements
let digit = 3;

switch (parseInt(digit)) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Digit!");
        break;
}