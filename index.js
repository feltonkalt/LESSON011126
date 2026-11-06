const fistInput = document.getElementById("firstInput")
const Input2 = document.getElementById("Input2")
const Input3 = document.getElementById("Input3")

const button = document.getElementById("button")
const result = document.querySelector(".result")

button.addEventListener('click', () => {
    const first = fistInput.value
    const Inp2 = Input2.value
    const Inp3 = Input3.value

    if(Inp2 === "+"){
        result.innerHTML = Number(first) + Number(Inp3)
    }
    else if(Inp2 === "-"){
        result.innerHTML = Number(first) - Number(Inp3)
    }
})