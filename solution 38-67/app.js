

//ASSIGNMENT (38-43)*********************************************************

//TASK(1)

// function power(a = 2, b = 3 ){
//   var x =  Math.pow(a,b);
//   alert(x)
// }
// power()


//TASK(2)

// function LeapYear(year){
//     if(year % 4 == 0){
//         alert(year + " is leap year");
//     }
//     else{
//         alert( year + " is not a leap year");
//     }
// }
// LeapYear(prompt());


//TASK(3)

// function  calculateS(a,b,c){
//     var s = (a+b+c)/2;
//     var result = s*(s-a)*(s-b)*(s-c);
//     alert(result);
// }
// calculateS(+prompt("enter a"),+prompt("enter b"),+prompt("enter c"));


//TASK(4)
// function main(){
//     var a = +prompt("enter marks of first subject");
//     var b = +prompt("enter marks of second subject");
//     var c = +prompt("enter marks of third subject");
//     var total = 300; 
//     function avg(){
//        return  a+b+c/3;
//     }
//     function percentage(){
//         return   (a+b+c)/total*100;
//     }
//     document.write("average of students marks = "+ avg() + "<br>" +  "percentage of students marks = "+percentage());
// } 
// main();



//TASK(5)
// function indexes() {
//     var str = prompt('Enter string');
//     for (var i = 0; i < str.length; i++)
//     {
//        document.write(str[i] + " is at index of " + i + "<br>")
//     }
// }
// indexes()


//TASK(6)
// function deletVowel(){
//     var str = prompt("enter the sentence");
//     for(i = 0; i<str.length; i++) {  
//       if ( str[i] == a || str[i] == e || str[i] == i || str[i] == o || str[i] == u )
//       {
//           str[i] = "";
//           document.write(str[i]);
//       }
//     }
// }
// deletVowel();


//TASK(8)

// function distance () {
//     var x = prompt("enter distance in km");
//     var meters = x*1000;
//     var feet = x*3280.84;
//     var inches = x*39370.1;
//     document.write("Distance in km = " + x + "<br>" + " in meters = " + meters + " <br> " + " in feet  = " + feet + " <br> " + " in inches = " + inches )
// }
// distance()


//TASK(9)
// function PayOverTime(){
//     var x = prompt("enter no of hours you worked");
//     if ( x > 40 ){
//      var y =  (x-40)*12;
//        document.write("your overtime working hours = " + (x-40) + " overtimePay = "+ y);
//     }
//     else {
//         document.write("You don't have overtime working hours");
//     }
// }
// PayOverTime()


//TASK(10)

// function note(){

//     var amount = +prompt('Enter Amount');
//     var hundred = parseInt(( amount / 100 )) ;
//     var fifty = parseInt((amount % 100) / 50);
//     var ten = parseInt(((amount % 100) % 50) / 10);
//     var other = ((amount % 100) % 50) % 10;
//     document.write( "hundred notes: " + hundred + "<br>" + " fifty: "+ fifty + " ten: " + ten + "<br>" + " Other amount: " + other);
// }
// note()

//ASSIGNMENT(43-48)***************************************************


//TASK(1)

// function popup(msg){
//     alert(msg);
// }


//TASK(2)

// function popUp(){
//    alert("Thanks for purchasing mobile phone!")
// }


//TASK(4)
// written on html file


//TASK(5)

// var counter = 0;
// var x =  document.getElementById('output');
// x.innerHTML = "0";

// function increment(){
//     counter++;
//     x.innerHTML = counter;   
// }

// function decrement(){
//     counter--;
//     x.innerHTML = counter;
// }
// function reset(){
//     counter = 0
//     x.innerHTML = 0;
// }


//ASSIGNMENT(49-52)*******************************************************

//TASK(1)

// function OnSubmit(){
    
//     var name = document.getElementById('name').value;
//     var mail = document.getElementById('mail').value;
//     var phone = document.getElementById('phone').value;
//     // phone = parseInt(phone, 10);
//     var z = `<table border="1"; cellspacing="0"; cellpadding="5">
//     <tr>
//         <th>Full name</th>
//         <th>Email</th>
//         <th>Phone</th>
//     </tr>
//     <tr>
//         <td>${name}</td>
//         <td>${mail}</td>
//         <td>${phone}</td>
//     </tr>
// </table>`
//     document.write(z);
// }


//TASK(2)

// function ReadMore(){
//     var para = document.getElementById('para');
//     var x = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Incidunt ratione maiores sit accusamus asperiores praesentiumiure sunt autem harum quidem, cum,nostrum molestiae ea iste et rem possimus enim laudantium";
//     para.innerHTML = x;
// }


// ASSIGNMENT(58-67)*****************************************************************************


// TASK(1) (a)
// var x = document.getElementById('main-content');
// console.log(x.nodeName)


// TASK(1) (b)
// var x = document.getElementById('main-content');
// console.log(x.childNodes )

// TASK(1) (c)
// var x = document.getElementsByClassName('render');
// console.log(x[0].innerHTML);
// console.log(x[1].innerHTML);
// console.log(x[3].innerHTML);
// console.log(x[4].innerHTML);


// TASK(1) (d)
// var x = document.getElementById("first-name");
// x.value = "saylani";


// TASK(1) (e)
// var x = document.getElementById("last-name");
// var y = document.getElementById("email");
// x.value = "welfare";
// y.value = "saylani@gmail.com";


// TASK(2) (a)
// var x = document.getElementById("form-content");
// console.log(x.nodeType);

// TASK(2) (b)
// var x = document.getElementById("lastName");
// console.log(x.nodeType);
// var y = x.childNodes[0];
// console.log(y);
// console.log(y.nodeType);


// TASK(2) (d)
// var x = document.getElementById('main-content');
// console.log(x.firstChild);
// console.log(x.lastChild);


// TASK(2) (e)
// var x = document.getElementById('lastName');
// console.log(x.nextSibling);
// console.log(x.previousSibling);


// TASK(2) (f)
// var x = document.getElementById('email');
// console.log(x.parentNode);
// console.log(x.nodeType);


//Chat module
// function Txt(){

//     var msg = document.getElementById('msg');
//     var para = document.createElement('p');
//     var txt = document.createTextNode(msg.value);
//     para.appendChild(txt);
//     var txtarea = document.getElementById('txtarea');
//     txtarea.appendChild(para);
//     msg.value = "";

// }
