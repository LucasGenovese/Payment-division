const myInput = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const endBtn = document.getElementById("end");
let instruction = document.getElementById("instructions");
let finalResult = document.getElementById("result");

let totalPrice = null;
let people = null;

let whoPayed = [];

myInput.addEventListener("keypress", event => {
    if (event.key === "Enter"){
        event.preventDefault();
        btn.click();
    }
});

btn.addEventListener("click", ()=> {
    if (totalPrice == null){
        totalPrice = myInput.value;
        myInput.value = '';
        instruction.innerHTML = 'Ingrese cantidad de gente';
        console.log(totalPrice);
    } else if (people == null){
        people = myInput.value;
        myInput.value = '';
        instruction.innerHTML = 'Inserte que monto pagaron aquellos que lo hicieron';
        endBtn.classList.remove("hide");
        console.log(people);
    } else {
        whoPayed.push(myInput.value);
        myInput.value = '';
        console.log(whoPayed)
    }
});

endBtn.addEventListener("click", ()=> {
    whoPayed.push(myInput.value);
    myInput.value = '';
    console.log(whoPayed)

    let dividedPrice = totalPrice / people;
    whoPayed.forEach((element) => {
        let result = element-dividedPrice
        if ( result > 0){
            finalResult.innerHTML += "Al que pago "+ element + " le deben " + result + "<br>";
            console.log(result); 
        } else {
            finalResult.innerHTML += "El que pago "+ element + " debe " + (dividedPrice-element) + "<br>"; 
            console.log(dividedPrice-element);
        }
    });
})