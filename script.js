// get input values
const custom = document.getElementById('custom');
const btns = document.querySelectorAll('.btn');
const total = document.getElementById('bill')
const people = document.getElementById('people')
// reset button
const reset = document.getElementById('reset');
// select elements to show output
const finalTip = document.getElementById('finalTip')
const finalAmt = document.getElementById('finalAmt')



let tipPercent = 0; 

// set percentage on click or on change of custom
function setPercent(){
    if(this.value){
        var numValue = parseInt(this.value)/100;
    } else {
        var numValue = parseInt(this.innerHTML)/100;
    }
    tipPercent = numValue;
    console.log(tipPercent)
}

btns.forEach((btn) => {
    btn.addEventListener('click', setPercent);
    btn.addEventListener('click', getTotals);
});

custom.addEventListener('change', setPercent);

// reset all values on click of reset button
function resetFunc(){
    document.getElementById('finalTip').innerHTML = "$" + 0.00.toFixed(2);
    document.getElementById('finalAmt').innerHTML = "$" + 0.00.toFixed(2)
    total.value = "0.00";
    people.value = "0";
    custom.value = "custom";
    tipPercent = 0;
}

reset.addEventListener('click',resetFunc);

function getTotals(){
    let totalBillAmt = total.value;
    let totalPax = people.value
    console.log(tipPercent, totalBillAmt, totalPax)

    if (totalBillAmt > 0 && totalPax > 0 && tipPercent > 0){
        let tipPerPerson = (parseInt(totalBillAmt)*tipPercent)/parseInt(totalPax);
        let totalPerPerson = (parseInt(totalBillAmt)/parseInt(totalPax))+parseInt(tipPerPerson);
        console.log("tip per pax: " + tipPerPerson);
        console.log("total per pax: " + totalPerPerson);

        finalTip.innerHTML = "$"+tipPerPerson.toFixed(2);
        finalAmt.innerHTML = "$"+totalPerPerson.toFixed(2);

    } else {
        console.log("Please input the correct figures.");
    }
    
}

total.addEventListener('change', getTotals)
people.addEventListener('change', getTotals)
custom.addEventListener('change', getTotals)

function printCheck(){
    console.log("persons after " + people.value)
}

