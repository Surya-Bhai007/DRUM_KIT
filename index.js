//here function called by using name{passing th as input so it can called later time } only not normal method as m() due to when we call using m() it will call function instantly without listening the event means "click"
// document.querySelector("button").addEventListener("click",m)
// function m()
//  {
//   alert("got ckc");
// }

//using anonymous function
//document.querySelector("button").addEventListener("click",function(){alert("Hello")})

//using arrow function
//document.querySelector("button").addEventListener("click",hello=()=>{alert("Surya")})

//calling all the buttons

// let total_buttons=document.querySelectorAll(".drum").length;
// for (let index = 0; index <total_buttons ; index++) {
//   document.querySelectorAll("button")[index].addEventListener("click",hello=()=>{alert("Surya")})

// }

//Higher order function (passing function as argument)
// function add(num1,num2) {
//   return num1+num2;
// }
// function multiply(num1,num2) {
//   return num1*num2;
// }
// function calculator(num1,num2,operator)  {
//   return operator(num1,num2);

// }
// console.log(calculator(2,3,add));

// var audio1=new Audio('/sounds/crash.mp3');
// ;
// var audio2=new Audio('/sounds/kick-bass.mp3');
// ;
// var audio3=new Audio('/sounds/snare.mp3');
// ;
// var audio4=new Audio('/sounds/tom-1.mp3');
// ;
// var audio5=new Audio('/sounds/tom-2.mp3');
// ;
// var audio6=new Audio('/sounds/tom-3.mp3');
// ;
// var audio7=new Audio('/sounds/tom-4.mp3');
// ;

// function music() {
//   for(let i=1;i<document.querySelectorAll('.drum').length;i++)
//   {
//     return `audio${i}.play()`
//   }

// }
//document.querySelector("button").addEventListener("click",music) ;
/*

let total_buttons=document.querySelectorAll(".drum").length;
for (let index = 0; index <total_buttons ; index++)
 {
document.querySelectorAll("button")[index].addEventListener("click",function(){
this.style.color="white";
})};
*/
//objects
//(here we to create another set for every new person separately means we have to specify property every time such as name for every new object)
/*
let housekeeper1={
  yearsOfExperience:12,
  name:'jane',
};
console.log(housekeeper1.name);
*/
//constructor function
//(do same work as above but fast and in efficient way)
//it requires only two changes {function name,new keyword}
/*
function Housekeeper(yearsOfExperience,name) {
  this.yearsOfExperience=yearsOfExperience;
  this.name=name;
  
}
*/
//its like a factory (which creates objects very fast )
/*
var Housekeeper2=new Housekeeper(12,'nancy2');
console.log(Housekeeper2.name);
var Housekeeper3=new Housekeeper(12,'nancy3');
console.log(Housekeeper3.name);
var Housekeeper4=new Housekeeper(12,'nancy4');
console.log(Housekeeper3.name);
*/

//method in object/constructor function
/*function Housekeeper(yearsOfExperience,name) {
  this.yearsOfExperience=yearsOfExperience;
  this.name=name;
  this.clean=function () {
    alert("cleaning in progress");
  }
  
}
var Housekeeper0=new Housekeeper(12,'sid');
Housekeeper0.clean();
*/
//Drum code
var audio1 = new Audio("sounds/crash.mp3");
var audio2 = new Audio("sounds/kick-bass.mp3");
var audio3 = new Audio("sounds/snare.mp3");
var audio4 = new Audio("sounds/tom-1.mp3");
var audio5 = new Audio("sounds/tom-2.mp3");
var audio6 = new Audio("sounds/tom-3.mp3");
var audio7 = new Audio("sounds/tom-4.mp3");
//Section1 : Detecting Button press
let total_buttons = document.querySelectorAll(".drum").length;
for (let index = 0; index < total_buttons; index++) {
  document
    .querySelectorAll("button")
    [index].addEventListener("click", function () {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
      /*switch (buttonInnerHTML) {
      case "w":
                audio4.play();
        break;
      case "a":
                audio5.play();
        break;
      case "s":
                audio6.play();
        break;
      case "d":
                audio7.play();
        break;
      case "j":
                audio3.play();
        break;
      case "k":
                audio1.play();
        break;
      case "l":
                audio2.play();
        break;
     
      default:
        break;
     }*/
    });
}

//Section2:Detecting Keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      audio4.play();
      break;
    case "a":
      audio5.play();
      break;
    case "s":
      audio6.play();
      break;
    case "d":
      audio7.play();
      break;
    case "j":
      audio3.play();
      break;
    case "k":
      audio1.play();
      break;
    case "l":
      audio2.play();
      break;

    default:
      break;
  }
}
function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);
}
