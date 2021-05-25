

var addtocart = document.getElementById("btn1");
var input = "Rakk Kimat Xt.2";

addtocart.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input));
    myDropdown.appendChild(a);
    alert("Rakk Kimat Xt.2 has been added to your cart")
 
})

var addtocart1 = document.getElementById("btn2");
var input1 = "Rakk Ilis";

addtocart1.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input1));
    myDropdown.appendChild(a);
    alert("Rakk Ilis has been added to your cart")
})

var addtocart2 = document.getElementById("btn3");
var input2 = "Rakk Lam-Ang Pro";

addtocart2.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input2));
    myDropdown.appendChild(a);
    alert("Rakk Lam-Ang Pro has been added to your cart")
})

var addtocart3 = document.getElementById("btn4");
var input3 = "Razer Huntsman Tournament Edition";

addtocart3.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input3));
    myDropdown.appendChild(a);
    alert("Razer Huntsman Tournament Edition has been added to your cart")
})

var addtocart4 = document.getElementById("btn5");
var input4 = "Razer BlackWidow";

addtocart4.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input4));
    myDropdown.appendChild(a);
    alert("Razer BlackWidow has been added to your cart")
})

var addtocart5 = document.getElementById("btn6");
var input5 = "Razer Pro Type";

addtocart5.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input5));
    myDropdown.appendChild(a);
    alert("Razer Pro Type has been added to your cart")
})

var addtocart6 = document.getElementById("btn7");
var input6 = "ROG CLaymore";

addtocart6.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input6));
    myDropdown.appendChild(a);
    alert("ROG CLaymore has been added to your cart")
})

var addtocart7 = document.getElementById("btn8");
var input7 = "ROG Strix Scope TKL Gundam Edition";

addtocart7.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input7));
    myDropdown.appendChild(a);
    alert("ROG Strix Scope TKL Gundam Edition has been added to your cart")
})

var addtocart8 = document.getElementById("btn9");
var input8 = "ROG Strix Flare Call of Duty Black Ops 4";

addtocart8.addEventListener("click", function(){
    var a = document.createElement("a");
    a.appendChild(document.createTextNode(input8));
    myDropdown.appendChild(a);
    alert("ROG Strix Flare Call of Duty Black Ops 4 has been added to your cart")
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.cart')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }