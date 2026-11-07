const fistInput = document.getElementById("firstInput")
const Input2 = document.getElementById("Input2")
const Input3 = document.getElementById("Input3")

const button = document.getElementById("button")
const result = document.querySelector(".result")
const firstError = document.getElementById("firstError")
const Input2Error = document.getElementById("Input2Error")
const Input3Error = document.getElementById("Input3Error")

button.addEventListener('click', () => {
    const first = Number(fistInput.value)
    const Inp2 = Input2.value
    const Inp3 = Number(Input3.value)

    if (Number.isNaN(first)) {
        firstError.innerHTML = "Введите число"
        result.innerHTML = null
        return
    }
    else {
        firstError.innerHTML = null
    }

    if (Inp2 === "+") {
        result.innerHTML = Number(first) + Number(Inp3)
    }
    else if (Inp2 === "-") {
        result.innerHTML = Number(first) - Number(Inp3)
    }
    else if (Inp2 === "*") {
        result.innerHTML = Number(first) * Number(Inp3)
    }
    else if (Inp2 === "/") {
        result.innerHTML = Number(first) / Number(Inp3)
    }
    else {
        Input2Error.innerHTML = "Введен не правильный знак"
    }

    if (Number.isNaN(Inp3)) {
        Input3Error.innerHTML = "Введите число"
        result.innerHTML = null
        return
    }
    else {
        Inp3.innerHTML = null
    }
})

const IMTBtn = document.getElementById("IMTBtn")
const Rost = document.getElementById("Rost")
const Massa = document.getElementById("Massa")
const MassaError = document.getElementById("MassaError")
const RostError = document.getElementById("RostError")
const resultt = document.querySelector(".resultI")
const resultCategory = document.querySelector(".resultCategory")

IMTBtn.addEventListener('click', () => {
    const RostV = Number(Rost.value)
    const MassaV = Number(Massa.value)
    let resultIMT = 0

    if (Number.isNaN(RostV) || Number.isNaN(MassaV)) {
        RostError.innerHTML = "Введите число"
        resultt.innerHTML = ""
        return
    }
    else {
        RostError.innerHTML = ""
    }
    if (Number.isNaN(MassaV)) {
        MassaError.innerHTML = "Введите число"
        resultt.innerHTML = null
        return
    }
    else {
        MassaError.innerHTML = null
    }

    resultIMT = MassaV / ((RostV / 100) * (RostV / 100))
    resultt.innerHTML = resultIMT

    if (resultIMT < 16.0) {
        resultCategory.innerHTML = "выраженный дефицит массы тела"
        resultCategory.style.color = "red"
    }
    else if (resultIMT < 18.4) {
        resultCategory.innerHTML = "недостаточная масса тела"
        resultCategory.style.color = "yellow"
    }
    else if (resultCategory < 24.9) {
        resultCategory.innerHTML = "нормальная масса тела"
        resultCategory.style.color = "green"
    }
    else if (resultCategory < 29.9) {
        resultCategory.innerHTML = "избыточная масса тела (предожирение)"
        resultCategory.style.color = "yellow"
    }
    else if (resultCategory < 34.9) {
        resultCategory.innerHTML = "ожирение I степени"
        resultCategory.style.color = "orange"
    }
    else if (resultCategory < 39.9) {
        resultCategory.innerHTML = "ожирение II степени"
        resultCategory.style.color = "red"
    }
    else if (resultCategory > 40) {
        resultCategory.innerHTML = "ожирение III степени"
        resultCategory.style.color = "red"
    }
    else {
        resultCategory.innerHTML = "ожирение III степени"
        resultCategory.style.color = "red"
    }

})