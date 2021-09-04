var tipAmt; 

var btn = document.querySelectorAll('.btn');
var custom = document.getElementById('custom');
var reset = document.getElementById('reset');
var tipPerPerson = document.getElementById('perPerson');

function tipUpdate(){
    var total = document.getElementById('bill').value;
    var people = document.getElementById('people').value;
    var tipPer = this.innerHTML;
    var totalTip = total * (parseInt(tipPer)/100);
    var perPerson = totalTip / (parseInt(people));
    if(people != 0){
        document.getElementById('perPerson').innerHTML = perPerson.toFixed(2);
    }
    // console.log(totalTip);
    document.getElementById('finalTip').innerHTML = totalTip.toFixed(2);
}

function tipUpdate2(){
    var totalB = document.getElementById('bill').value;
    var tipPerB = this.value;
    var totalTipB = totalB * (parseInt(tipPerB)/100);
    // console.log(totalTipB);
    document.getElementById('finalTip').innerHTML = totalTipB.toFixed(2);
}

function resetFunc(){
    var totalC = document.getElementById('bill');
    var peopleC = document.getElementById('people');
    document.getElementById('finalTip').innerHTML = 0.00;
    totalC.value = "0.00";
    peopleC.value = "0";
    custom.value = "custom";
    tipPerPerson.innerHTML = 0.00;
}

custom.addEventListener('change',tipUpdate2);
// document.getElementById('person').addEventListener('change', );

reset.addEventListener('click',resetFunc);

btn.forEach(num => num.addEventListener('click',tipUpdate));