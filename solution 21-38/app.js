//Assignment ( 21-25)*************************************************************************

//TASK(1)

// var a = prompt("enter first name");
// var b = prompt("enter last name");
// var fullName = a+b;
// document.write("Welcome here " + fullName);


//TASK(2)

// var x = prompt("Enter your favourite mobile phone");
// document.write("My avourite mobile phone is :" + x  + "<br>");
// document.write("Length of string: " + x.length);


//TASK(3)

// var string = "Pakistani";
// var z = string.lastIndexOf("n");
// document.write("String = " + string + "<br>");
// document.write("index of n = "+ z );


//TASK(4)

// var string = "hello world";
// var z = string.lastIndexOf("l");
// document.write("String = " + string + "<br>");
// document.write("Last index of l = "+ z );


//TASK(5)

// var string = "pakistani";
// var z = string.charAt("3");
// document.write("String = " + string + "<br>");
// document.write("character at index 3 = "+ z );


//TASK(6)

// var city = "Hyderabad";
// document.write("City = " + city + "<br>");
// var x = city.slice(0, 5);
// x = "Islam";
// var y = city.slice(5, 9);
// document.write("After replacement: " + x + y)


//TASK(7)

//  var text = "Pakistan and america and india";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i,i+30) === "Pakistan and america and india") {       
//         document.write(text);
//     }
// }


//TASK(8)

// var text = "Pakistan and america and india Ali and Sami are best friends They play cricket and football together";
// x = text.split(' ');
// for (var i=0; i<x.length; i++){
//     if(x[i] == 'and'){
//         x[i] = '&';
//    }
// }
// document.write(x);




//TASK(10)

// var x = prompt("Enter a text");
// document.write("User input: "+ x +"<br>");
// var y = x.toUpperCase();
// document.write("Upper case: "+ y +"<br>");


//TASK(11)

// var x = prompt("Enter a text");
// document.write("User input: "+ x +"<br>");
// var y = x.slice(0,1);
// var z = y.toUpperCase() + x.slice(1);
// document.write("Title case: "+ z +"<br>");


//TASK(12)

// var x = prompt("Enter username");
// if(x == ""){
//     alert("Please enter username");
// }
// if(x == "@"){
//     alert("you can't use any special character");
// }



// ASSIGNMENT (26-30)************************************************************************

//TASK (1)

// var x = prompt("Enter a positive number");
// document.write("Number:  "+ x+"<br>")
// var a = Math.round(x);
// document.write("Round off value:  "+ a +"<br>");
// var b = Math.floor(x);
// document.write("Floor value:  "+ b +"<br>");
// var c = Math.ceil(x);
// document.write("Ceil value:  "+ c +"<br>");


//TASK (2)

// var x = prompt("Enter a negative number");
// document.write("Number:  "+ x+"<br>")
// var a = Math.round(x);
// document.write("Round off value:  "+ a +"<br>");
// var b = Math.floor(x);
// document.write("Floor value:  "+ b +"<br>");
// var c = Math.ceil(x);
// document.write("Ceil value:  "+ c +"<br>");



//TASK (3)Absolute value


// var x = prompt("Enter a number");
// document.write("Number:  "+ x+"<br>");
// var y = Math.abs(x);
// document.write("Absolute value:  "+ y +"<br>");


//TASK (4)Dice


// for( var i=0; i<=6; i++){
//     var y = Math.floor(Math.random()*6 + 1 );
//     document.write("Dice values:  "+ y +"<br>");

// }



//TASK (5)TOSS

// var y = Math.floor(Math.random()*2  );
// if ( y == 1){
//     document.write("Head" + "<br>")
// }
// else{
//     document.write("Tail" + "<br>")
// }



//TASK (6)

// for( var i=0; i<=100; i++){
//     var x = Math.floor(Math.random()*100 +1);
//     document.write("Random value between 1 and 100: " + x + "<br>");   
// }


//TASK(8)

// var x = Math.floor(Math.random()*10 +1);
// var y = prompt("Guess a number between 1 to 10");
// if( x == y ){
//     alert("Hurrah! You Win");
// }
// else if( y = " "){
//     alert("Please enter number! and play the game");
// }
// else{
//     alert("Try again! ");
// }



// ASSIGNMENT (31-34)*******************************************************************

//TASK(1)

// document.write(Date());


//TASK(2)

// var month= ["January","February","March","April","May","June","July",
//             "August","September","October","November","December"];
//  var now = new Date();
//  var theMonth = now.getMonth();
//  var nameOfMonth = month[theMonth];
//  alert(nameOfMonth);



//TASK(3)

// var x = Date();
//  var y = x.slice(0,3);
//  alert(y);



//TASK(4)

// var x = Date();
//  var y = x.slice(0,3);
//  y = y.toLocaleLowerCase();
//  if (y == "sat" || y == "sun" || y == "mon")
//  alert("Its fun day!");


//TASK(5)

// var x = new Date();
// x = x.getDate();
// if(x < 16 ){
//     alert("First fifteen days of the month. And the date is = " + x)
// }
// else{
//     alert("Last days of the month. And the date is = " + x)
// }


//TASK(6)

// var x = new Date();
// var msec = x.getTime()
// var sec =  msec/1000;
// var min = sec/60;
// document.write( " Current date: "+ Date() + "<br>");
// document.write( " Milliseconds since january 1, 1970 = "+ msec + "<br>");
// document.write( " Seconds since january 1, 1970  = "+ sec + "<br>");
// document.write( " Minutes since january 1, 1970  = "+ min + "<br>");


//TASK(7)

// var x = new Date();
// x  = x.getHours();
// if( x >= 12 ){
//     alert("it's AM")
// }
// else{
//     alert("it's PM")
// }


//TASK(14) K-ELECTRIC BILL

// var name = prompt("Customer name");
// var month = prompt("Current month");
// var units = prompt("Number of units");

// var chargesPerUnit = 16;
// var netAmount = units*chargesPerUnit;
// var latePayRecharge = 350;
// var grossAmount = netAmount + latePayRecharge;

// var table =
// `
// <table  border="1">
// <tr>
//     <th>Customer Name</th>
//     <th>Month</th>
//     <th>Number of units</th>
//     <th>Charges per unites</th>
//     <th>Net amount payable, within due date</th>
//     <th>Late payment surcharges</th>
//     <th>Gross amount payable, after due date</th>
// </tr>
// <tr>
//     <td>${name}</td>
//     <td>${month}</td>
//     <td>${units}</td>
//     <td>${chargesPerUnit}</td>
//     <td>${netAmount}</td>
//     <td>${latePayRecharge}</td>
//     <td>${grossAmount}</td>
// </tr>
// </table>
// `
// document.write(table);



// ASSIGNMENT (35-38)************************************************************************


//TASK(1)

// function currentDate(){
//     var x = new Date();
//     document.write(x);
// }
// currentDate();


//TASK(2)

// function greeting(){
//     var x = prompt("first name");
//     var y = prompt("last name");
//     var z = x + y;
//     alert("welcome " + z);
// }
// greeting();


//TASK(3)

// function sum(){
//     var x = +prompt("enter first number");
//     var y = +prompt("enter second number");
//     var z = x + y;
//     document.write("Sum = " + z);
// }
// sum();


//TASK(4)  not completed

// function calculator(num1, num2, num3){
//     var x = prompt("enter operator");
//     var y = num1 x + num2 x num3;
//     document.write(y);
// }
// argument[0] = prompt("enter first number");
// argument[1] = prompt("enter second number");
// argument[2] = prompt("enter third number");
// calculator();


//TASK(5) square

// function square(num){
//    document.write("Square of " + num + " = " + (num * num));
// }
// square(+prompt("enter a number"))
  

//TASK(6)

//FACTORIAL
// var x = prompt("enter a number");
// var answer = 1;
//  for(var i=x; i>=1; i-- ){
//    answer = answer*i;
// }
// document.write("Factorial of " + x + " = " + answer);


//TASK(7)

// function series(){

//     var x = prompt("enter starting number");
//     var y = prompt("enter ending number");
//     for(var i = x; i<=y; i++){
//         document.write(i + "<br>")
//     }
// }
// series();


//TASK(8)

// function hypoTenuse(){
//     var base= +prompt("enter base value");
//     var per= +prompt("enter perpendicular value");
//     var x = base*base;
//     var y = per*per;
//     var z = x+y;
//     document.write("hypotenuse = " + z)
// }
// hypoTenuse();



//TASK(9)

        //passing variable
// function Area(height, width ){  
//     var A = (height*width);
//     document.write("Area = " + A);
// }
// Area(prompt("enter height"),prompt("enter width"));


//passing values
// function Area(){  
//     var A =  arguments[0] * arguments[1];
//     document.write("Area = " + A);
// }
// Area(4,6)


//TASK(11) tried but no worked 


// function capital( str ){
//         var z = str.slice(0,1);
//         var remain = str.slice(1);
//         var y = z.toLocaleUpperCase() + remain;
//         document.write(y);
//         }
// capital (prompt("Enter a string"));

// var str = prompt("enter string");
// for (var i = 0; i<str.length; i++){
//         if ( str.length == " "){
//                 var z = str.slice(0,1);
//                 var remain = str.slice(1);
//                 var y = z.toUpperCase() + remain;  
//         }
// }
// document.write(y);

        
