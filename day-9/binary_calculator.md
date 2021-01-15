# JavaScript

```js
let elem = document.getElementById("res");
  
  function checkOperator(){
    if(elem.innerHTML.endsWith('+') || elem.innerHTML.endsWith('-') || elem.innerHTML.endsWith('*') || elem.innerHTML.endsWith('/')){
      return true;
    }
  }
  
  function clickZero() {
    elem.innerHTML +='0';
  }
  
  function clickOne() {
    elem.innerHTML +='1';
  }
  
  function clickSum() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +='+';
       }
  }  
  
  function clickSub() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +='-';
       }
  }

  function clickMul() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +="*";
       }
  }

  function clickDiv() {
    if(elem.innerHTML.length!=0 && !checkOperator()){
        elem.innerHTML +="/";
      }
  }

  function clickClr() {
    elem.innerHTML = '';
  }

  function clickEql() {
    if(!checkOperator()) {
      let re = /\d+/g
      let re2 = /[\+\-\*\/]+/g
      let numbers = elem.innerHTML.match(re);
      let operations = elem.innerHTML.match(re2);
      while(operations.length>0) {
        if(operations.includes('*')) {
          let indexOfMul = operations.indexOf('*');
          let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
          numbers.splice(indexOfMul,2);
          numbers.splice(indexOfMul,0,mul.toString(2));
          operations.splice(indexOfMul,1);
        } else if (operations.includes('/')) {
          let indexOfDiv = operations.indexOf('/');
          let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
          numbers.splice(indexOfDiv,2);
          numbers.splice(indexOfDiv,0,division.toString(2));
          operations.splice(indexOfDiv,1);
        } else if (operations.includes('+')) {
          let indexOfSum = operations.indexOf('+');
          let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
          numbers.splice(indexOfSum,2);
          numbers.splice(indexOfSum,0,sum.toString(2));
          operations.splice(indexOfSum,1);
        } else {
          let indexOfSub = operations.indexOf('-');
          let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
          numbers.splice(indexOfSub,2);
          numbers.splice(indexOfSub,0,sub.toString(2));
          operations.splice(indexOfSub,1);
        }  
      }
      elem.innerHTML = numbers[0].toString(2);
    } else {
      alert("Line must ends with number.")
    }
  }
```

# HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Binary Calculator</title>
        <link rel="stylesheet" href="css/binaryCalculator.css" type="text/css">
    </head>
    <body>
      <div id="container">
        <div id="res"></div>
        <div id="btns">
          <button id="btn0" onclick="clickZero()">0</button>
          <button id="btn1" onclick="clickOne()">1</button>
          <button id="btnClr" onclick="clickClr()">C</button>
          <button id="btnEql" onclick="clickEql()">=</button>
          <button id="btnSum" onclick="clickSum()">+</button>
          <button id="btnSub" onclick="clickSub()">-</button>
          <button id="btnMul" onclick="clickMul()">*</button>
          <button id="btnDiv" onclick="clickDiv()">/</button>
        </div>        
      </div> 
      <script src="js/binaryCalculator.js" type="text/javascript"></script>
    </body>
</html>
```

# CSS

```css
body {
  width: 33%;
}

#res {
  background-color: lightgray;
  border: solid;
  height: 48px;
  font-size: 20px;
}

#btns button {
  width: 25%;
  height: 36px;
  font-size: 18px;
  margin:0;
  float: left;
}

#btn0, #btn1 {
  background-color: lightgreen;
  color: brown;
}

#btnClr, #btnEql {
  background-color: darkgreen;
  color: white;
}

#btnSum, #btnSub, #btnMul, #btnDiv {
  background-color: black;
  color: red;
}
```
