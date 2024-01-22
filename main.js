/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitShowOne = document.getElementById("unit-showOne")
const unitShowTwo = document.getElementById("unit-showTwo")
const unitShowThree = document.getElementById("unit-showThree")
const inputEl = document.getElementById("input-el")

function conversion(){
    render()
    
}

function render(){
    const num = Number(inputEl.value)
    const metersToFeet = (num * 3.281).toFixed(2);
    const feetValue = ((1 / 3.281) * num).toFixed(2);
    const literToGallon = (num*0.264).toFixed(2);
    const gallonValue = ((1/0.264)*num).toFixed(2);
    const killogramToPound = (num*2.204).toFixed(2);
    const poundValue = ((1/2.204)*num).toFixed(2);
    
    const totalNumOne = `${num} meters = ${metersToFeet} feet | ${num} feet = ${feetValue} meters`;
    unitShowOne.innerText =totalNumOne
    
    const totalNumTwo = `${num} liters = ${literToGallon} gallons | ${num} gallons = ${gallonValue} liters`;
    unitShowTwo.innerText =totalNumTwo
    
    const totalNumThree = `${num} killograms = ${killogramToPound} pounds | ${num} pounds = ${poundValue} killograms`;
    unitShowThree.innerText =totalNumThree
}