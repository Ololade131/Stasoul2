function showMenu(){
  
var hamburger = document.querySelector('#menu')
var navMenu = document.querySelector('.nav-list')
navMenu.style.opacity = '1'
}
function hideMenu(){
  var hamburger = document.querySelector('#menu')
var navMenu = document.querySelector('.nav-list')
navMenu.style.opacity = '0'
}

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('ready');
// })

var project = setInterval(projectDone, 30)
var customers = setInterval(happyCustomers, 30)
var trainees = setInterval(students, 30)
var awards = setInterval(awardsReceived, 30)
let count1  = 1;
let count2  = 1;
let count3 = 1;
let count4 = 1;
function projectDone(){
  count1++;
  document.querySelector(".num").innerHTML =
  count1
  if(count1 == 100){
    clearInterval(project)
  }
}

function happyCustomers(){
  count2++;
  document.querySelector("#num2").innerHTML =
  count1
  if(count2 == 30){
    clearInterval(customers)
  }
}
function students(){
  count3++;
  document.querySelector("#num4").innerHTML =
  count1
  if(count3 == 20 ){
    clearInterval(trainees)
  }
}
function awardsReceived(){
  count4++;
  document.querySelector("#num3").innerHTML =
  count1
  if(count4 == 50){
    clearInterval(awards)  
  }
}



const toggleItem = (element) => {
    const headers = document.querySelectorAll("article header");
    for (let header of headers) {
      header.classList.remove("active");
      header.nextElementSibling.style.height = "0px";
    }
  
    element.classList.add("active");
  
    const content = element.nextElementSibling;
  
    const text = content.querySelector("p");
  
    content.style.height = `${text.clientHeight}px`;
  };


  function myFunction1(){
    var content = document.querySelector(".item-paragraph");
    var button = document.querySelector(".btn");

    content.innerHTML = 'Our Mission is to pursue and deliver unique and unequalled course of solutions to our national challenges, as our quota to putting Nigeria in her well deserved status in the comity of nations, by employin better and globally acclaimed technology'
  }
  function myFunction2(){
    var content = document.querySelector(".item-paragraph");
    var container = document.querySelector(".btn");
    var button = document.querySelector(".btn2");
    content.innerHTML = 'To be a pacesetter in modern, unique, innovative Concepts and Solutions for a safre society'
    button.style.backgroundColor = "#138bce";
    button.style.borderRadius = "5px"
    button.style.color = "white"
    button.style.borderTop = "none"
    }
  function myFunction3(){
    var content = document.querySelector(".item-paragraph");
    var button = document.querySelector(".btn3");
    content.innerHTML = 'Stasoul operates on the premise of providing high quality services and products that exceeds customers and clients expectations'
    button.style.backgroundColor = "#138bce";
    button.style.borderRadius = "5px"
    button.style.color = "white"
    button.style.borderTop = "none"
  }