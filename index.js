const check = document.getElementById('check')
const people = document.getElementById('people')
const totalPerPerson = document.querySelector('.tip-total')
const totalWithTips = document.querySelector('.check-total')
const buttons = document.querySelectorAll('.tip-percentage')
const customTip = document.querySelector('.custom')
const resetBtn = document.querySelector('.reset-btn')

let checkValue = 0
let buttonValue = 0
let numberPeople = 1
let tiplPerClient = 0
let totalWithTipsPerPerson = 0
let custom = 0


// listens to check number
check.addEventListener('input', (e) => {
    checkValue = parseFloat(e.target.value)
    calculateTip()
})



// custom Tip event listener
customTip.addEventListener('input', (e) =>{
    let number = parseFloat(e.target.value)
    if(number > 1){
        buttonValue =  (number / 100)
    } else
        {buttonValue = parseFloat(e.target.value)}

    calculateTip()
})
    
    

// listens to tip percentage   
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttonValue = parseFloat(e.target.value)
        calculateTip()
    })
    
})



// listens to number of people
people.addEventListener('input', (e) => {
    numberPeople = parseFloat(e.target.value)
    calculateTip()
  

})


function calculateTip(){
    // console.log(`checkValue ${checkValue},buttonValue ${buttonValue},numberPeople ${numberPeople}`)
    tipPerClient = (checkValue * buttonValue) / numberPeople
    totalWithTipsPerPerson = (checkValue + (checkValue * buttonValue)) / numberPeople
    if(Number.isNaN(tipPerClient) || Number.isNaN(totalWithTipsPerPerson)){
        tipPerClient = 0.0
        totalWithTipsPerPerson = 0.0
    }

    totalPerPerson.innerHTML = `$ ${tipPerClient.toFixed(2)}`
    totalWithTips.innerHTML = `$ ${totalWithTipsPerPerson.toFixed(2)}`
    if(totalWithTipsPerPerson.toFixed(2) > 1000000 && tipPerClient.toFixed(2) > 1000000){
        totalWithTips.style.fontSize = "1.2rem"
        totalPerPerson.style.fontSize = "1.2rem"
    }else{
        totalWithTips.style.fontSize = "1.75rem"
        totalPerPerson.style.fontSize = "1.75rem"
    }


} 

resetBtn.addEventListener('click', (e) => {
    totalPerPerson.innerHTML = ""
    totalWithTips.innerHTML = ""
    customTip.value = ""
    people.value = ""
    check.value = ""
})

// calculateTip()
// calculate tip

// function calculateTipPerPerson(){
//     total = parseFloat((checkTotal * tipPercentage) /numberPeople)
    
    
// }


// calculateTipPerPerson(checkTotal,tipPercentage,numberPeople)