# CSS
```css
#btns {
    width: 75%;
}

.btn {
    width: 30%;
    height: 48px;
    font-size: 24px;
}
```

# HTML
```html
<div id="btns">
    <button id="btn1" class="btn">1</button>
    <button id="btn2" class="btn">2</button>
    <button id="btn3" class="btn">3</button>
    <button id="btn4" class="btn">4</button>
    <button id="btn5" class="btn">5</button>
    <button id="btn6" class="btn">6</button>
    <button id="btn7" class="btn">7</button>
    <button id="btn8" class="btn">8</button>
    <button id="btn9" class="btn">9</button>     
</div>
```

# JavaScript

```js
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

function clockwiseRotation() {
    [btn1.innerHTML,
     btn2.innerHTML,
     btn3.innerHTML,
     btn4.innerHTML,
     btn6.innerHTML,
     btn7.innerHTML,
     btn8.innerHTML,
     btn9.innerHTML] =
        [btn4.innerHTML,
         btn1.innerHTML,
         btn2.innerHTML,
         btn7.innerHTML,
         btn3.innerHTML,
         btn8.innerHTML,
         btn9.innerHTML,
         btn6.innerHTML]
}

btn5.addEventListener("click", clockwiseRotation)
```
