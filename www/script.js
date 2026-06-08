function Submit()
{
    let upFront = Number(document.getElementById("upfront").value);
    let monthly = Number(document.getElementById("monthly").value);
    let monthly1 = Number(document.getElementById("monthly1").value);
    let monthly2 = Number(document.getElementById("monthly2").value);
    let cash = Number(document.getElementById("cashPrice").value);
    let sim = Number(document.getElementById("simOnly").value);
    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2");

    const d = new Date();
    let setMonth = d.getMonth() + 1;
    let contractLength = 24;
    let firstSet = ((12-setMonth + 3)%12)+1;
    let secondSet = 12;
    let thirdSet = contractLength - firstSet - secondSet;

    let calc1 = (firstSet*monthly) + (secondSet*monthly1) + (thirdSet*monthly2) + upFront;
    result1.innerHTML = "£" + calc1.toFixed(2);

    let calc2 = cash + (sim*24);
    result2.innerHTML = "£" + calc2.toFixed(2);
}

function Clear()
{
    let upFront = Number(document.getElementById("upfront").value = 0);
    let monthly = Number(document.getElementById("monthly").value = 0);
    let monthly1 = Number(document.getElementById("monthly1").value = 0);
    let monthly2 = Number(document.getElementById("monthly2").value = 0);
    let cash = Number(document.getElementById("cashPrice").value = 0);
    let sim = Number(document.getElementById("simOnly").value = 0);
    let result1 = document.getElementById("result1").innerHTML = "";
    let result2 = document.getElementById("result2").innerHTML = "";
}
