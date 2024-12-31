 
         

//cart.html code  


var back_btn=document.getElementById("back_btn");
var select=document.getElementById("select");
var clickable=document.getElementById("clickable");
var weightRadios = document.querySelectorAll(".weight-radio");
var go_to_cart=document.querySelector(".go_to_cart");
var add_to_cart=document.querySelector(".add_to_cart");
var showerror=document.getElementById("showerror");
var inner_btn=document.querySelector("#inner_btn");

back_btn.addEventListener("click",function(){
   window.location.href="food.html";
})

go_to_cart.addEventListener("click",function(){
    window.location.href="all_cart.html";
 })


weightRadios.forEach(function (radio) {
   radio.addEventListener("change", function () {
       if (radio.checked) {
           // clickable.value = radio.id; // Update with the ID (e.g., "500g" or "1kg")
           clickable.value=1;
           showerror.textContent="";

          add_to_cart.addEventListener("click",function(){
            inner_btn.classList.remove("d-none");
            add_to_cart.classList.add("d-none");
          })

       }
   });
   
});

add_to_cart.addEventListener("click", function () {
    var selected = Array.from(weightRadios).some(function (radio) {
        return radio.checked;
    });

    if (!selected) {
        showerror.textContent="Select Variation/s";
    } 
});

function increment(cardId) {
    const counter = document.getElementById(`counter-${cardId}`);
    let count = parseInt(counter.innerText);
    count++;
    counter.innerText = count;
}

function decrement(cardId) {
    const counter = document.getElementById(`counter-${cardId}`);
    let count = parseInt(counter.innerText);
    if (count > 1) {
        count--;
        counter.innerText = count;
    } else {
        // Counter buttons chhupana aur "Add" button dikhana
        const card = document.getElementById(cardId);
        const addButton = card.querySelector(".btn.add");
        const buttonsDiv = card.querySelector(".buttons");

        addButton.classList.remove("d-none");
        buttonsDiv.classList.add("d-none");
    }
}


 