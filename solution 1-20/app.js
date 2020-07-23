// // Assignment #1*****************************************************

// alert("Welcome to javascript");

// alert("Error! please enter a valid password.");

// alert("Welcome to JS land... Happy coding"); 

// alert("Welcome to JS land");

// a = "Hello i can run js through my web browser's console";
// console.log(a);

// // ASSIGNMENT #2***************************************************************

// username = "HASSAN";
// myname =  "CHOHAN";
// A = "My full name is=" + username + myname;
// document.write(A);

// message= "Hello World";
// alert(message);

// name= "jhone doe";
// alert(name);
// age= "20";
// alert(age+ "years old");
// skill= "Certified Mobile Application Development";
// alert(skill);

// task #5

// var x = prompt("Enter a word");
// alert( x + "<br/>" + x );

// task #6

// var email = "hassanchohan820@example.com";
// alert("My email address="+email);

// task #7

//  var book = "A smarter way to learn javascript";
//  alert("I am trying to learn the javascript from the Book"+" "+ book);

// task #8

// document.write("Yah! I can write HTML content through javascript");
// var x = prompt("enter obtained marks","out of 500");
// var y = x/500*100;
// if (y >= 60){
//     alert("congaratulation you are passed and your percentage="+y);
// }
// else{
//        alert("you are lower than 60% marks while your percentage="+y);
// }


// ASSIGNMENT #3******************************************************************************

// TASK #1

// var age = prompt("Enter your age");
// alert("I am"+ age + "years old");

// TASK #3

// var birthyear = 1999;
// document.write("My birth year is"+" "+ birthyear + "<br>" + "Data type of my decalred variable is number");

// TASK #4

// var name = prompt("your name");
// var Ptile = prompt("product title","jeans");
// var Quantity = prompt("Enter Quantity","1");
// document.write(name +" "+ "ordered" + " " + Quantity + Ptile + " " + "on XYZ clothing store");


// ASSIGNMENT #4************************************************************************************

// TASK #1

// var a,b,c;
// a = 3;
// b = 2;
// c = 1;
// alert(a+b+c);

// TASK #2

// Legal variables
// var x;
// var xyz;
// var XYZ;
// var 1x;
// var $x;
// Illegal variables
// var $;
// var #;
// var 2;


// ASSIGNMENT #5************************************************************

// TASK #1(Sum of two numbers)

// var x,y,z;
// x = +prompt("Enter 1st number");
// y = +prompt("Entere 2nd number");
// z = x+y;
// document.write("The sum of "+" "+ x +"and"+ y +" "+"is"+" "+ z);

// TASK #2(Calculator)

// var x,y,sum,product,subtraction,division,modulus;
// x = +prompt("Enter 1st number");
// y = +prompt("Entere 2nd number");
// sum = x+y;
// product = x*y;
// subtraction = x-y;
// division = x/y;
// modulus = x%y;
// document.write("The sum of "+" "+ x +"and"+ y +" "+"is"+" "+ sum+"<br>");
// document.write("The product of "+" "+ x +"and"+ y +" "+"is"+" "+ product +"<br>");
// document.write("The subtraction of "+" "+ x +"and"+ y +" "+"is"+" "+ subtraction +"<br>");
// document.write("The division of "+" "+ x +"and"+ y +" "+"is"+" "+ division +"<br>");
// document.write("The modulus of "+" "+ x +"and"+ y +" "+"is"+" "+ modulus +"<br>");

// TASK #3

// var x = 5;
// document.write("value after variable declaration is = " + x +"<br>");
// document.write("Initial value = " + x +"<br>");
// document.write("Value after increment = " + (++x) +"<br>");
// document.write("Value after adding 7 = " + (x+7) +"<br>");
// document.write("Value after decrement = " + (x+7-1) +"<br>");
// document.write("Remainder after dividing variable value by 3  = " + (x%3) +"<br>");


// TASK #4(Buying Movies ticket)

// var a=600;
// var b = prompt("how many ticket you want to buy","one ticket=600");
// document.write("Total cost to buy " + b +" "+"Tickets of movie = "+a*b+"PKR");


// TASK #5(Table of any number)

// var a = prompt("Enter a number of which table you want to display");
// document.write("Table of "+a+"<br>")
// for( i=1; i<=10; i++){
//    document.write(a +" x "+i+ " = "+a*i + "<br>")
// }


// TASK #6(The temperature convertor)

// var c = +prompt("Enter celsius temperature");
//  f = (c*9/5)+32;
// document.write(c + " Celsius = "+ f +" Fahrenheit"+"<br>");
// var x = +prompt("Enter Fahrenheit temperature");
//  y = (x-32)*5/9;
// document.write(x + " Fahrenheit = "+ y +" Celsius");


// TASK #7(SHOPPING CART)

// var item1 = 650;
// var a = +prompt("enter quantity of item 1");
// var item2 = 100;
// var b = +prompt("enter quantity of item 2");
// var charges = 100;
// document.write("Price of item 1 = " + item1 + "<br>");
// document.write("Quantity of item 1 = " + a +"<br>");
// document.write("Price of item 2 = " + item2 + "<br>");
// document.write("Quantity of item 2 = " + b +"<br>");
// document.write("Shipping charges = " + charges +"<br>");
// z = (item1*a)+(item2*b)+charges;
// document.write("Total cost of your order = " + z +"<br>");

// TASK #8(PERCENTAGE MARKS SHEET)

// var a = +prompt("Enter total marks");
// var b = +prompt("Enter obtained marks");
// c = b/a*100;
// document.write("Total marks = "+ a + "<br>");
// document.write("Obtained marks = "+ b + "<br>");
// document.write("Percentage = "+ c +"%"+ "<br>");


// TASK #9

// document.write("Currency in PKR"+"<br>");
// var a = +prompt("Enter US dollors");
// var b = +prompt("Enter Saudi Riyals");
// x = (a*104.80) + (b*28);
// document.write("Total Currency in PKR = "+x);

// TASK #10

// var a = 4;
// var b = (a + 5)*10/2;
// document.write(b);

// TASK #11

// document.write("Age calculator"+"<br>");
// var a = +prompt("Current year");
// var b = +prompt("Birth year");
// x = a-b;
// document.write("Current year = "+a+"<br>");
// document.write("Birth year = "+b+"<br>");
// document.write("Your age is = "+x);


// TASK #12(The geometrizer)

// document.write("The geometrizer"+"<br>");
// var r = +prompt("Enter the value of radius");
// var pie = 3.142;
// var c = 2*pie*r;
// var a = pie*(r*r);
// document.write("The radius of cirlce is = "+r+"<br>");
// document.write("The circummference of circle is = "+c+"<br>");
// document.write("The Area of cirlce is = "+a+"<br>");



// TASK #13(The life time supply calculator)

// document.write("The life time supply calculator"+"<br>");
// var a = prompt("Enter Your favourite snack");
// var b = +prompt("Current age");
// var c = +prompt("Estimated maximum age");
// var d = +prompt("Amount of snack per day");
// var e = (c-b)*d;
// document.write("Your favourite snack = "+a+"<br>");
// document.write("Current age = "+b+"<br>");
// document.write("Estimated maximum age = "+c+"<br>");
// document.write("Amount of snack per day = "+d+"<br>");
// document.write("You will need: "+ e + a +" to last you until the ripe of old age of "+ c +"<br>");


// ASSIGNMENT #(6-9)******************************************************************

// TASK #1

// document.write("Result:"+"<br>");
// var a = 10;
// document.write("The value of a = "+a+"<br>");
// document.write("....................................... "+"<br>");
// document.write("<br>");
// document.write("The value of ++a = "+ ++a +"<br>");
// document.write("Now the value of a = "+a+"<br>");
// document.write("<br>");
// document.write("The value of a++ = "+ a++ +"<br>");
// document.write("Now the value of a = "+a+"<br>");
// document.write("<br>");
// document.write("The value of --a = "+ --a +"<br>");
// document.write("Now the value of a = "+a+"<br>");
// document.write("<br>");
// document.write("The value of a-- = "+ a-- +"<br>");
// document.write("Now the value of a = "+a+"<br>");


// TASK #2

// var a,b;
// a = 2, b = 1;
// document.write("The value of --a = 1" +"<br>");
// document.write("The value of --a - --b = 1" +"<br>");
// document.write("The value of --a - --b + ++b = 2" +"<br>");
// document.write("The value of --a - --b + ++b + b-- = 3" +"<br>");
// var result = --a - --b + ++b + b--;
// document.write("result = "+result);


// TASK #3

// var a = prompt("Enter your name");
// alert("Welcome "+a+" ! ");

// TASK #4 is missing

// TASK #5(Table)

// var a = prompt("Enter The number of which table you want to display");
// if( a <=0 ){
//     for(var i=1; i<=10; i++){
//         document.write(5 + " x "+ i +" = "+5*i + "<br>");
//     }
// }
// else{
//     for(var i=1; i<=10; i++){
//         document.write(a + " x "+ i +" = "+a*i + "<br>");
//     }
// }


// TASK #6

// var x = prompt("Enter name of a subject");
// var y = prompt("Enter name of second subject");
// var z = prompt("Enter name of third subject");


// var a = +prompt("Enter obtained marks of first subject","out of 100");
// var b = +prompt("Enter obtained marks of second subject","out of 100");
// var c = +prompt("Enter obtained marks of third subject","out of 100");
// var marks = 100;
// var p1 = (a/100)*100;
// var p2 = (b/100)*100;
// var p3 = (c/100)*100;
// var tm = 300;
// var om = a+b+c;
// var p = om/tm*100;
// document.write("<table border=1; cellpadding= 10>" + "<tr>" + "<td>" + "SUBJECTS" + "</td>" +
// "<td>" + "TOTAL MARKS" + "</td>" + "<td>" + "OBTAINED MARKS" + "</td>" +
// "<td>" + "PERCENTAGE%" + "</td>" + "</tr>" +
// "<tr>" + "<td>" + x + "</td>" +
// "<td>" + marks + "</td>" + "<td>" + a + "</td>" +
// "<td>" + p1 + "</td>" + "</tr>" +

// "<tr>" + "<td>" + y + "</td>" +
// "<td>" + marks + "</td>" + "<td>" + b + "</td>" +
// "<td>" + p2 + "</td>" + "</tr>" +

// "<tr>" + "<td>" + z + "</td>" +
// "<td>" + marks + "</td>" + "<td>" + c + "</td>" +
// "<td>" + p3 + "</td>" + "</tr>" +

// "<tr>" + "<td>" + "</td>" +
// "<th>" + tm + "</th>" + "<th>" + om + "</th>" +
// "<th>" + p +"%"+ "</th>" + "</tr>" +
// "</table>" 
// )



// ASSIGNMENT #(9-11)**********************************************************************

// TASK #1

// var city = prompt("Enter city name");
// if (city == "karachi"){
//     document.write("Welcome to the city of lights!");
// }
// else{
//     document.write("Welcome to "+city);
// }


// Task #2

// var gender = prompt("Your gender","male or female");
// if(gender == "male"){
//     document.write("Welcome sir!");
// }
// else{
//     document.write("Welcome ma'am!");
// }

// TASK #3

// var a = prompt("Enter color of road traffic ","red.yellow,green");
// if(a == "red"){
//     document.write("Must stop");
// }
// else if(a == "yellow"){
//     document.write("Ready to move");
// }
// else if(a == "green"){
//     document.write("Move on");
// }


// TASK #4

// var x =  prompt("Current fuel in the car","in litres");
// if ( x < 0.25){
//       document.write("Please refill the fuel in your car!");
// }
// else{
//     document.write("You have enough fuel in your car to travel.");
// }


// TASK #5

// (a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// condition is true the alert msg will be displayed.

// (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// condition is false alert will not run.

// (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// condition 2 and condition 4 will be true.


// (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// condition is true so the message will be displayed.

// (e)
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// I didn't understand this statement.
// (f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
// the simply condtion will run because there is no input.


// TASK #6(MARKS SHEET)

// var x = +prompt("Marks btained");
// var y = +prompt("Total marks");
// var p = x/y*100;
// var grade,remarks;
// if(p >= 80){
//      grade = "A-one";
//      remarks = "Excellent!";
// }
// else if(p >= 70){
//      grade = "A";
//      remarks = "Good!";
// }
// else if(p >= 60){
//      grade = "B";
//      remarks = "You need improvement!";
// }
// else if(p < 60){
//      grade = "Fail";
//      remarks = "Sorry!";
// }
// document.write("Mrks sheet "+"<br>");
// document.write("Total marks = "+ y +"<br>");
// document.write("Obtained marks = "+ x +"<br>");
// document.write("Percentage = "+ p +"<br>");
// document.write("Grade = "+ grade +"<br>");
// document.write("Remarks = "+ remarks +"<br>");


// TASK #7(GUESS GAME)

// var x = +prompt("Guess the number");
// if (x == 7){
//     document.write("Bingo! Correct number");
// }
// if (x == 6 || x == 8){
//     document.write("Close enough to the correct number!");
// }

//TASK #8(DIVISIBLE BY 3)

// var x = prompt("entere a number to check weather it is divisible by three or not");
// if(x%3==0){
//     document.write(x + " is divisible by 3");
// }
// else{
//     document.write(x + " is not divisible by 3")
// }
 

//TASK #9( even number and odd number)
 
// var x = prompt("Entere a number to check weather it is even or odd");
// if (x%2 == 0){
//     document.write(x + " is EVEN");
// }
// else{
//     document.write(x + " is ODD");
// }

// TASK #10

// var t = prompt("What is temperature value right now! ");
// if ( t > 40){
//     document.write("It is too hot outside!");
// }
// else if ( t > 30){
//     document.write("Today is normal!");
// }
// else if ( t > 20){
//     document.write("Today’s Weather is cool!");
// }
// else if ( t > 10){
//     document.write("OMG! Today’s weather is so Cool!");
// }
// else if ( t <= 10){
//     document.write("Much cool today, chances of snow falling!");
// }


// TASK #11(Calculator)

// var x,y,sum,product,subtraction,division,modulus;
// x = +prompt("Enter 1st number");
// y = +prompt("Entere 2nd number");
// sum = x+y;
// product = x*y;
// subtraction = x-y;
// division = x/y;
// modulus = x%y;
// document.write("The sum of "+" "+ x +" and "+ y +" "+" is = "+" "+ sum+"<br>");
// document.write("The product of "+" "+ x +" and "+ y +" "+" is = "+" "+ product +"<br>");
// document.write("The subtraction of "+" "+ x +" and "+ y +" "+" is = "+" "+ subtraction +"<br>");
// document.write("The division of "+" "+ x +" and "+ y +" "+" is = "+" "+ division +"<br>");
// document.write("The modulus of "+" "+ x +" and "+ y +" "+" is = "+" "+ modulus +"<br>");



//ASSIGNMENT (12-13)************************************************************************


//TASK #1 (checking character upper or lowercase or a number)

// var a = prompt("Enter a number or character","Only one number or character");
// var b =a.charCodeAt();
// if ( b >= 65 && b <= 90 ){
//     document.write("You enter an uppercase character, whose Ascii code = "+ b +"<br>");
// }
// else if ( b >= 97 && b <=122 ){
//     document.write("You enter a lowecase character, whose Ascii code = "+ b +"<br>");
// }
// else if ( b >= 48 && b <=57 ){
//     document.write("You enter a number, whose Ascii code = "+ b +"<br>");
// }


//TASK #2(checking a number greater or less than other)

// var a = +prompt("Enter a number");
// var b = +prompt("Enter second number");
// if ( a == b ){
//     document.write("Both number are equal = "+a + " = "+b);
// }
// else if ( a > b){
//     document.write("1st number is greater than second = "+ a + " > "+b)
// }
// else if ( a < b){
//     document.write("1st number is less than second = "+ a + " < "+b)
// }


//TASK #3(checking a number is positive or negative)

// var x = + prompt("Enter a number");
// if ( x == 0 ){
//     document.write("Number is zero");
// }
// else if ( x > 0 ){
//     document.write("Number is positive");
// }
// else if ( a < 0 ){
//     document.write("Number is negative");
// }


//TASK #4(CHECK LETTER IS VOWEL OR CONSONANTS)

// var x = prompt("Enter a letter","a to z");
// if ( x == "a" || x == "A" || x == "e" || x == "E" || x == "i" || x == "I" || x == "o" || x == "O" || x == "u" || x == "U" ){
//     document.write("You enter a vowel letter!");
// }
// else {
//     document.write("You enter a consonant!");
// }


//TASK #5(password validation)

// var a = "abc123";
// var b = prompt("Enter your password");
// if ( b == a ){
//     document.write("Correct! The password you entered is correct");
// }
// else{
//     document.write("Incorrect password, try again ");
// }


//TASK #6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else{
// greeting = "Good evening";
// alert(greeting);
// }


//TASK #7(greeting with different time interval)

// var time = prompt("Enter time in 24 hours format"," 1900 = 7pm");
// if ( time >= 0000 && time < 1200 ) {
//     document.write("Good morning!");
// }
// else if ( time >= 1200 && time < 1700 ) {
//     document.write("Good afternoon!");
// }
// else if ( time >= 1700 && time < 2100 ) {
//     document.write("Good evening!");
// }
// else if ( time >= 2100 && time < 2359 ) {
//     document.write("Good night!");
// }


//ASSIGNMENT (14-16)******************************************************************************

//TASK #1

// var studentsName = [ ];


//TASK #2

// var studentsName = ClassA[ ];


//TASK #3

// var cities = ["Lahore","Karachi","Islamabad","Sialkot"];


//TASK #4

// var values = [ 5, 10, 15, 20, 25 ];



//TASK #5

// var values = [ 5, 10, 15, 20, 25 ];



//TASK #6

// var mixedarray = [5, "name", true];


//TASK #7

// var array = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "Mphil", "PHD"];
// for ( i=0; i<array.length; i++){
//     document.write(i + ") "+ array[i] +"<br>");
// }



//TASK #8

// var names = ["Ali","hassan","hamza"];
// var score = [300, 450, 290];
// for ( i=0; i<score.length; i++ ){
//     var p = score[i]/500*100;
//     document.write(p+"<br>");  
// }
// document.write("Score of Ali is = 300. Precentage = "+p);


//TASK #9


//(a)
// var colors = ["red","green","blue"];
// document.write(colors + "<br>");
// var x = prompt("What color you want to add in the beginging of the list, type name");
// colors.unshift(x);
// document.write(colors);

//(b)
// var colors = ["red","green","blue"];
// document.write(colors + "<br>");
// var x = prompt("What color you want to add at the end of the list, type name");
// colors.push(x);
// document.write(colors);

//(c)
// var colors = ["red","green","blue"];
// document.write(colors + "<br>");
// colors.push("black","yellow");
// document.write(colors);

//(d)
// var colors = ["red","green","blue"];
// document.write(colors + "<br>");
// colors.shift();
// document.write(colors);

//(e)
// var colors = ["red","green","blue"];
// document.write(colors + "<br>");
// colors.pop();
// document.write(colors);

//(f)
// var colors = ["red","green","blue"];
// document.write(colors + "<br>");
// var x = prompt("What color you want to add in the list, type name");
// var y = +prompt("At which index you want to add, type number");
// colors[y] = (x)
// document.write(colors);


//(g)
// var colors = ["red","green","blue","black"];
// document.write(colors + "<br>");
// var x = prompt("At which index you want to delete the colors, type number");
// var y = +prompt("How many colors you want to delete, type number");
// colors.splice(x, y);
// document.write(colors);


//TASK(10)(ordered scores of students)

// var score = ["320", "280","480", "120"];
// document.write("Scores of students : "+ score + "<br>");
// var x = score.sort();
// document.write("Ordered Scores of students : "+ x);

//TASK(11)

// var cities = ["Karachi", "Lahore","Islamabad", "Queta", "Peshawar"];
// document.write("Cities list: "  + "<br>" + cities + "<br>");
// var selected = cities.slice(3,5);
// document.write("Selected Cities list: "  + "<br>" + selected);


//TASK(12)
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: " +"<br>");
// document.write(arr + "<br>");
// var a = arr.join();
// document.write("String: " +"<br>");
// document.write(a + "<br>");


//TASK(13)(First in first out FIFO)

// var fruits = [];
// fruits[0] = "Apple";
// fruits[1] = "Mango";
// fruits[2] = "Orange";
// fruits[3] = "Banana";
// fruits[4] = "Grapes";
// document.write(fruits + "<br>");
// for(var i=0; i<fruits.length; i++){
//     document.write("<br>"+"out" + "<br>");
//     document.write(fruits[i] + "<br>");
// }


//TASK(14)(Last in first out LIFO)

// var fruits = [];
// fruits[0] = "Apple";
// fruits[1] = "Mango";
// fruits[2] = "Orange";
// fruits[3] = "Banana";
// fruits[4] = "Grapes";
// document.write(fruits + "<br>");
// for(var i=fruits.length-1; i>=0; i--){
//     document.write("<br>" + "out" + "<br>");
//     document.write(fruits[i] + "<br>");
// }



//ASSIGNMENT (#17-20)***********************************************************************

//TASK(3)

// for( var i=1; i<=10; i++){
//     document.write(i + "<br>");
// }


//TASK(4)(Multiplication table at desired length)

// var x = +prompt("Enter a number to display its multiplication table");
// var y = +prompt("Enter a length of table");
// document.write("MULTIPLICATION TAbLE OF " + x + "<br>");
// document.write("LENGTH = " + y + "<br>")
// for( var i=1; i<=y; i++){
//     document.write(x + " x " + i + " = " + x*i + "<br>");
// }


//TASK(5)

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for( var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
    
// }
// document.write("<br>");
// for( var j=0; j<fruits.length; j++){
//     document.write("Element at index of " + j + " = "+ fruits[j] + "<br>");
// }



//TASK(6)

//(a)(COUNTING)
// document.write("Counting " +"<br>");
// for( var i=1; i<=15; i++){
//     document.write(i + ",");
// }

//(b)(REVERSE COUNTING)
// document.write("<br>");
// document.write("Reverse Counting " +"<br>");
// for( var i=10; i>0; i--){
//     document.write(i + ",");
// }


//(c)(EVEN)
// document.write("<br>");
// document.write("Even counting " +"<br>");
// for( var i=0; i<=20; i=i+2){
//     document.write(i + ",");
// }

//(d)(ODD)
// document.write("<br>");
// document.write("Odd counting " +"<br>");
// for( var i=1; i<=19; i=i+2){
//     document.write(i + ",");
// }


//(e)(SERIES)
// document.write("<br>");
// document.write("Series counting " +"<br>");
// for( var i=2; i<=20; i=i+2){
//     document.write(i + "k" + ",");
// }


//TASK(7)(bakery search items)

// var a = ["cake","apple pie","cookies","chips","patties"];
// var x = prompt("Welcome to ABC bakery. What do you want to order sir/maam?");
// x = x.toLowerCase();
// var matchfound = false;
// for(var i=0; i<a.length; i++){
//     if(x === a[i]){
//         matchfound = true;
//         document.write(a[i] + " is available at index "+ i + " in our Bakery!");
//         break;
//     }   
// }
// if(matchfound === false){
//     alert("We are sorry "+ x + " is not available in our bakery!");
// }



//TASK(8)(Largest number in an array)

// var numbers = ["24","53","78","91","12"];
// document.write(Math.max(...numbers) + " is the largest number");


//TASK(9)(smallest number in an array)

// var numbers = ["24","53","78","91","12"];
// document.write(Math.min(...numbers) + " is the smallest number");



//(LARGEST NUMBER different code)

// var numbers = ["24","53","78","91","12"];
// for(var i=1; i<numbers.length; i++){
//     if(numbers[0] < numbers[i])
//        numbers[0] = numbers[i];
// }
// document.write("largest number = " + numbers[0] + "<br>");

//(SMALLEST NUMBER different code)

// var numbers = ["24","53","78","91","12"];
// for(var i=1; i<numbers.length; i++){
//     if(numbers[0] > numbers[i])
//        numbers[0] = numbers[i];
// }
// document.write("Smallest number = " + numbers[0] + "<br>");


//TASK(10)(MULTIPLES OF 5)

// for (var i=5; i<=100; i=i+5){
//     document.write(i + ",");
// }



