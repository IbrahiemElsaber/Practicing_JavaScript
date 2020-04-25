// // //Using setInterval() and clearInterval on functions
// // // function setTimeIntervalFunc(){
// // //     alert("This is a setInterval function");
// // // }
// // // var setTimeIntervalVar = setInterval(setTimeIntervalFunc, 2000);
// // // document.getElementById("stopSetInterval").addEventListener("click",()=>{
// // //     clearInterval(setTimeIntervalVar);
// // // });
// // //Using setTimeout() and clearTimeout() By functions
// // // function setTimeOutFunc(){
// // //     alert("This is a setTimeout inside function");
// // // }
// // // var setTimeOutVar = setTimeout(setTimeOutFunc, 2000);
// // // document.getElementById("stopsetTimeOut").addEventListener("click",()=>{
// // //     clearTimeout(setTimeOutVar);
// // // });
// // // class Timer{
// // //     constructor(){
// // //Using setInterval() and clearInterval() using class
// // // this.setTimeIntervalVar = setInterval(() => {
// // //     alert("This is a setInterval inside class ");
// // // }, 3000);

// // // document.getElementById("stopSetIntervalinsideclass").addEventListener("click",()=>{
// // //     clearInterval(this.setTimeIntervalVar);
// // // });
// // //UsingsetTimeout() and clearTimeout() inside class
// // //     this.setTimeOutVar = setTimeout(() => {
// // //         alert("this is a setTimeout() inside class ");
// // //     }, 2000);
// // //     document.getElementById("stopSetTimeOutinsideclass").addEventListener("click",()=>{
// // //         clearTimeout(this.setTimeOutVar);
// // //     });

// // // }


// // // }
// // // onload = new Timer();

// // //Taking input age from user and show it at div 
// // //Using try and catch to exception handling
// // document.getElementById("showAgebtn").addEventListener("click", () => {
// //     var age, ageMessage;
// //     ageMessage = document.getElementById("showAgeMsg");
// //     ageMessage.innerHTML = "";
// //     age = document.getElementById("inputAgetxt").value;
// //     try {   //using try to see if there is errors 
// //         if (age == "") throw "Please Enter Your age "
// //         if (isNaN(age)) throw "Age is not a number";
// //         if (age < 0) throw "Your Age should be greater than 0";
// //         document.getElementById("showAgeMsg").innerHTML = `Your age is ${age}`;
// //     }
// //     catch (err) {
// //         ageMessage.innerHTML = err; 
// //     }
// // });
// //Getting the full date of this day
// // var date = new Date();
// // document.getElementById("showDateBtn").addEventListener("click",() =>{
// //     document.getElementById("dateDv").innerHTML = `${parseInt(date.getDay())}/${date.getMonth()+1}/${date.getFullYear()}`;
// // });

// // funtion to practice appendchild
// function handle(e) {
//     if (e.keyCode === 13) {
//         e.preventDefault();
//         var myBody = document.getElementsByTagName("BODY")[0],
//             value = document.getElementById('txtbox').value,
//             myList = document.createElement('ul'),
//             myLi = document.createElement('li');
//         myLi.id = 'liId';
//         myBody.appendChild(myList);
//         myList.appendChild(myLi);
//         myLi.innerHTML = value;
//         document.getElementById('txtbox').value = "";
//     }
// }
// //end of function