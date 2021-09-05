var btn = document.querySelectorAll('.btn');
var custom = document.getElementById('custom');
var reset = document.getElementById('reset');

function tipUpdate(){
    var total = document.getElementById('bill').value;
    var people = document.getElementById('people').value;
    var tipPer = this.innerHTML;
    var tipPerB = this.value;
    var totalTip = total * (parseInt(tipPer)/100);
    var totalTipB = total * (parseInt(tipPerB)/100);
    var perPerson = totalTip / (parseInt(people));
    var perPersonB = totalTipB / (parseInt(people));
    var totalPerPerson = (total/parseInt(people))+perPerson;
    var totalPerPersonB = (total/parseInt(people))+perPersonB;

    if(people === "0"){
        alert("Number of people cannot be zero!");
        resetFunc();
    } else {
        if(tipPerB === undefined){
            document.getElementById('finalTip').innerHTML = "$"+perPerson.toFixed(2);
            document.getElementById('finalAmt').innerHTML = "$"+totalPerPerson.toFixed(2);
        } else {
            document.getElementById('finalTip').innerHTML = "$"+perPersonB.toFixed(2);
            document.getElementById('finalAmt').innerHTML = "$"+totalPerPersonB.toFixed(2);
        };
    };
}

function resetFunc(){
    var total = document.getElementById('bill');
    var people = document.getElementById('people');
    document.getElementById('finalTip').innerHTML = "$" + 0.00.toFixed(2);
    document.getElementById('finalAmt').innerHTML = "$" + 0.00.toFixed(2)
    total.value = "0.00";
    people.value = "0";
    custom.value = "custom";
}

custom.addEventListener('change',tipUpdate);
reset.addEventListener('click',resetFunc);
btn.forEach(num => num.addEventListener('click',tipUpdate));