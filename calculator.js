var d = document.getElementById("display");

function Numclick(x){
    d.value = d.value + "" +x;
}
var op = "";
var firstValue = "";
var SecondValue = "";

function Sum(){
    op = "Sum"
    firstValue =  d.value;
    Crl();
}
function Sub(){
    op = "Sub"
    firstValue =  d.value;
    Crl();
}
function Mul(){
    op = "Mul"
    firstValue =  d.value;
    Crl();
}
function Div(){
    op = "Div"
    firstValue =  d.value;
    Crl();
}


function Equal(){
    SecondValue = parseInt(d.value);
    firstValue = parseInt(firstValue)
    if(op=="Sum"){ d.value = firstValue + SecondValue;}
    if(op=="Sub"){ d.value = firstValue - SecondValue;}
    if(op=="Mul"){ d.value = firstValue * SecondValue;}
    if(op=="Div"){ d.value = firstValue / SecondValue;}
}
function Crl(){
    d.value = "";
}