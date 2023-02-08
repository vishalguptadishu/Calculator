
let display=document.querySelector(".display");
var button= document.querySelectorAll(".btn>div");

button.forEach(function(div){
    div.addEventListener("click",function(e){
        let value=e.target.innerText;
        if(value=="C"){
            display.innerText="";
        }else if(value=="="){
            display.innerText=eval(display.innerText);
        }else {
            display.innerText+=value;
        }
        
    } )
})

