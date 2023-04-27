var buttonPlus=Array.from(document.getElementsByClassName("add"))
var price=Array.from(document.getElementsByClassName("price"))
var total=document.getElementById("total")
var totalValue=0


for(let i=0;i<buttonPlus.length;i++){
  buttonPlus[i].addEventListener("click",function(){
    buttonPlus[i].nextElementSibling.innerHTML++
    let priceValue = parseInt(price[i].innerHTML)
    console.log(priceValue,"vjbo")
    totalValue += priceValue;
    total.innerHTML = totalValue;
  })
}

var buttonMinus=Array.from(document.getElementsByClassName("minus"))

for(let i=0;i<buttonMinus.length;i++){
  buttonMinus[i].addEventListener("click",function(){
    if(buttonMinus[i].previousElementSibling.innerHTML >0){
    buttonMinus[i].previousElementSibling.innerHTML--
    let priceValue = parseInt(price[i].innerHTML)
    totalValue -= priceValue;
    total.innerHTML = totalValue;
    }
  })
}

var trash=Array.from(document.getElementsByClassName("fa-trash-alt"))
for(let i=0;i<trash.length;i++){
  trash[i].addEventListener("click",function(){
    trash[i].parentNode.remove()
  })
}

var heart=Array.from(document.getElementsByClassName("fa-heart"))
for(let i=0;i<heart.length;i++){
    heart[i].addEventListener("click", () => {
        heart[i].classList.toggle("red");
      });
}

