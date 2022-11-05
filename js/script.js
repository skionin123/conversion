function convert(){
  let input = document.querySelector("#input").value;
  let selectVal = document.querySelector("#ucfrom").value;
  let selectVal2 = document.querySelector("#ucto").value;
  let value = "";


  switch(true){
      case (input == false):
          alert("Please Input A Number");
          break;
      case (selectVal == false):
          alert("Invalid Input");
          break;
          case (selectVal2 == false):
              alert("Invalid Input");
              break;
              default:
  if(selectVal === "mm"){
      if(selectVal2 === "mm"){
      value += input * 1;
      }
     else if(selectVal2 === "cm"){
      value += input * 0.1;
          }
     else if(selectVal2 === "m"){
      value += input * 0.001;
          }    
     else if(selectVal2 === "km"){
      value += input * 0.000001
          }    
     else if(selectVal2 === "in"){
      value += input * 0.0393700787;
          }    
     else if(selectVal2 === "ft"){
      value += input * 0.0032808399;
          }    
     else if(selectVal2 === "yd"){
      value += input * 0.0010936133;
          }    
      else {
        value += input * 6.213688756E-7;
          }     
 
  }
  else if(selectVal === "cm"){
      if(selectVal2 === "mm"){
        value += input * 10;
          }
        else if(selectVal2 === "cm"){
          value += input * 1;
              } 
        else if(selectVal2 === "m"){
          value += input * 0.01;
              }     
        else if(selectVal2 === "km"){
          value += input * 0.00001;
              }     
        else if(selectVal2 === "in"){
          value += input * 0.3937007874;
              }     
        else if(selectVal2 === "ft"){
          value += input * 0.032808399;
              }     
        else if(selectVal2 === "yd"){
          value += input * 0.010936133;
              }     
        else {
          value += input * 0.0000062137;
              }     
              
  }
  else if(selectVal === "m"){
      if(selectVal2 === "mm"){
        value += input * 1000;
          }
         else if(selectVal2 === "cm"){
          value += input * 100;
              }
         else if(selectVal2 === "m"){
          value += input * 1;
              }     
         else if(selectVal2 === "km"){
          value += input * 0.001;
              }     
         else if(selectVal2 === "in"){
          value += input * 39.37007874;
              }     
          else if(selectVal2 === "ft"){
          value += input * 3.280839895;
              }     
        else if(selectVal2 === "yd"){
          value += input * 1.0936132983;
              }     
         else {
          value += input * 0.0006213689;
              }
  }
  else if(selectVal === "km"){
      if(selectVal2 === "mm"){
        value += input * 1000000;
          }
         else if(selectVal2 === "cm"){
          value += input * 	100000;
              }
         else if(selectVal2 === "m"){
          value += input * 1000;
              }     
         else if(selectVal2 === "km"){
          value += input * 1;
              }     
         else if(selectVal2 === "in"){
          value += input * 39370.07874;
              }     
         else if(selectVal2 === "ft"){
          value += input * 3280.839895;
              }     
         else if(selectVal2 === "yd"){
          value += input * 1093.6132983;
              }     
         else {
          value += input * 0.6213688756;
              }
  }
  else if(selectVal === "in"){
      if(selectVal2 === "mm"){
        value += input * 25.4;
          }
         else if(selectVal2 === "cm"){
          value += input * 	2.54;
              }
         else if(selectVal2 === "m"){
          value += input * 0.0254;
              }     
         else if(selectVal2 === "km"){
          value += input * 0.0000254;
              }     
         else if(selectVal2 === "in"){
          value += input * 1;
              }     
         else if(selectVal2 === "ft"){
          value += input * 0.0833333333;
              }     
         else if(selectVal2 === "yd"){
          value += input * 0.0277777778;
              }     
         else {
          value += input * 0.0000157828;
              }
  }
  else if(selectVal === "ft"){
      if(selectVal2 === "mm"){
        value += input * 304.8;
          }
         else if(selectVal2 === "cm"){
          value += input *30.48;
              }
         else if(selectVal2 === "m"){
          value += input * 0.3048;
              }     
         else if(selectVal2 === "km"){
          value += input * 0.0003048;
              }     
         else if(selectVal2 === "in"){
          value += input * 12;
              }     
         else if(selectVal2 === "ft"){
          value += input * 1;
              }     
         else if(selectVal2 === "yd"){
          value += input * 0.3333333333;
              }     
         else {
          value += input * 0.0001893932;
              }
  }
  else if(selectVal === "yd"){
      if(selectVal2 === "mm"){
        value += input * 914.4;
          }
         else if(selectVal2 === "cm"){
          value += input *91.44;
              }
         else if(selectVal2 === "m"){
          value += input * 0.9144;
              }     
         else if(selectVal2 === "km"){
          value += input * 0.0009144;
              }     
         else if(selectVal2 === "in"){
          value += input * 36;
              }     
         else if(selectVal2 === "ft"){
          value += input * 3;
              }     
         else if(selectVal2 === "yd"){
          value += input * 1;
              }     
         else {
          value += input * 0.0005681797;
              }
  }
  else if(selectVal === "mi"){
      if(selectVal2 === "mm"){
        value += input * 1609350;
          }
         else if(selectVal2 === "cm"){
          value += input *	160935;
              }
         else if(selectVal2 === "m"){
          value += input * 1609.35;
              }     
         else if(selectVal2 === "km"){
          value += input * 1.60935;
              }     
         else if(selectVal2 === "in"){
          value += input * 63360.23622;
              }     
         else if(selectVal2 === "ft"){
          value += input * 5280.019685;
              }     
         else if(selectVal2 === "yd"){
          value += input * 1760.0065617;
              }     
         else {
          value += input * 1;
              }
  }


 document.querySelector("#display").innerHTML = "Result: "  + value;

  };


}