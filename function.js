function showMessage() {                        //normal function 
    console.log('Hello everyone!');
  }
  showMessage();

/*  --------------------------------------------------------------------------*/
//parametrized function
  function sum(num1,num2){                       //parametrized
    let add = num1 + num2;
    console.log(add);
}
sum(10,20);                                   //arguments are passed

/* --------------------------------------------------------------------------------------*/
// parameters in the form of text 
function message(from, text) {            // parameters in the form of text 
console.log(from + ': ' + text);
}

message('Ann', 'Hello!'); // Ann: Hello! (*)
message('Ann', "What's up?"); // Ann: What's up? (**)

/*-----------------------------------------------------------------------------------------*/

function getaddition(num1,num2){                       //return function
    add = num1 + num2;
    return add;
}
let number = getaddition(10,20);
console.log(number);

/* -----------------------------------------------------------------------------------------*/
//function statement or function declaration
function b(){
    console.log("function statement");
}
b();

/* --------------------------------------------------------------------------------------------*/

//function Expression                    //function expression acts as a variable , hosting comes in to play 
var a = function(){
    console.log("function expression");
};
a();
/* -----------------------------------------------------------------------------------------*/
// Anonymous function
/*function(){                            //A function with out name is called Anonymous function ,

}*/
/* -------------------------------------------------------------------------------------------*/
// named function expression
var z = function xyz (){                      // xyz function creats a local function in var z
    console.log(" named function expression");
}
z();
/* ---------------------------------------------------------------------------------------------*/
