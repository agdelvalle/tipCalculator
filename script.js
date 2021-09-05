var tipAmt; 

var btn = document.querySelectorAll('.btn');
var custom = document.getElementById('custom');
var reset = document.getElementById('reset');
// var person = document.getElementById('person');

function tipUpdate(){
    var total = document.getElementById('bill').value;
    var people = document.getElementById('people').value;
    var tipPer = this.innerHTML;
    var tipPerB = this.value;
    var totalTip = total * (parseInt(tipPer)/100);
    // var totalTipB = total * (parseInt(tipPerB)/100);
    var perPerson = totalTip / (parseInt(people));
    var totalPerPerson = (total/parseInt(people))+perPerson;
    // var perPersonB = totalTipB / (parseInt(people));

    if(people === "0"){
        alert("Number of people cannot be zero!");
    } else {
        console.log("tip:"+tipPer)
        console.log("perPerson:"+perPerson)
        console.log("total per person: "+totalPerPerson);
        document.getElementById('finalTip').innerHTML = "$"+perPerson.toFixed(2);
        document.getElementById('finalAmt').innerHTML = "$"+totalPerPerson.toFixed(2);
    }
}

function resetFunc(){
    var totalC = document.getElementById('bill');
    var peopleC = document.getElementById('people');
    document.getElementById('finalTip').innerHTML = "$" + 0.00;
    document.getElementById('finalAmt').innerHTML = "$" + 0.00
    totalC.value = "0.00";
    peopleC.value = "0";
    custom.value = "custom";
    tipPerPerson.innerHTML = 0.00;
}

custom.addEventListener('change',tipUpdate);
// people.addEventListener('change',tipUpdate);
// document.getElementById('person').addEventListener('change', );

reset.addEventListener('click',resetFunc);

btn.forEach(num => num.addEventListener('click',tipUpdate));