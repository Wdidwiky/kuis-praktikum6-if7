const display = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display1 = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
var dis = document.getElementById('display1');
var dis1 = document.getElementById('display');
var dis2 = document.getElementById('display2');
var check = 0 ;

function ubah1() { 
  dis.style.fontSize = "20px";
  dis.style.marginBottom = "10px";
  dis1.style.height = "65px";
  dis2.style.fontSize = "32px";
  dis2.style.color = "white";
 }

 function ubah2() { 
  dis.style.fontSize = "30px";
  dis.style.marginBottom = "5px";
  dis1.style.height = "70px";
  dis2.style.fontSize = "23px";
  dis2.style.color = "#71838b";
 }

 function ubah3() { 
    dis1.style.color = "#71838b";  
    display1.innerText =  display.innerText + "\n"+"       " + display2.innerText ;
  }



buttons.forEach((item) => {
    item.onclick = () => {
      if (item.id == "clear") {
        ubah2();
        display.innerText = "";
        display2.innerText = "";
      } else if (item.id == "clear2" && check == 0) {
        let string = display.innerText.toString();
        display.innerText = string.substr(0, string.length - 1);
      } 
       else if (item.id == "clear2" && check == 1) {
        display.innerText = "";
        display2.innerText = "";
      } 
      else if (display.innerText != "" && item.id == "equal") {
        check = 1;
        ubah1();
      } else if (display.innerText == "" && item.id == "equal") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else if (item.id != "equal" || item.id ){ 
        if (check == 1){
          ubah2();
          ubah3();
          display.innerText = "";
          display2.innerText = "";
          
          check = 0;
        }
        display.innerText += item.id;
        
        display2.innerText = "= " + eval(display.innerText);
      }
    };
  });

  const themeToggleBtn = document.querySelector(".theme-toggler");
  const calculator = document.querySelector(".calculator");
  const toggleIcon = document.querySelector(".toggler-icon");
  let isDark = true;
  themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
  };

  