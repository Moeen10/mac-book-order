// extra memory section code
let firstFlag = false;
let secondFlag = true;
document.getElementById("16GbMemory").addEventListener("click", function() {
    if (secondFlag == true) {
        secondFlag = calculate('memory', 180, 0, firstFlag);
        firstFlag = true;
    }

});
document.getElementById("8GbMemory").addEventListener("click", function() {
    if (firstFlag == true) {
        firstFlag = calculate('memory', 0, 180, secondFlag);
        secondFlag = true;
    }

});



//Delivery section code
let Flag1 = false;
let Flag2 = true;
document.getElementById("notFree").addEventListener("click", function() {
    if (Flag2 == true) {
        Flag2 = calculate('delivery', 20, 0, Flag1);
        Flag1 = true;
    }

});
document.getElementById("free").addEventListener("click", function() {
    if (Flag1 == true) {
        Flag1 = calculate('delivery', 0, 20, Flag2);
        Flag2 = true;
    }

});



//(memory  + Delivery) calculation and print function

function calculate(name, extravalue, otherButtonValue, flag) {
    const memory = document.getElementById(name + 'Cost');
    var amount = extravalue;
    memory.innerText = amount;
    const total = document.getElementById('totalCost');
    const totalAmmount = parseInt(total.innerText);

    const totalCostBottom = document.getElementById('TotalCostBottom');



    if (extravalue == 0) {
        if (flag != true) {
            const finalAmmount = totalAmmount - otherButtonValue;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        }
    } else {

        if (flag != true) {
            const finalAmmount = totalAmmount + amount;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        }

    }

}


//SSD section code 

let check256SSD = false;
let check512SSD = true;
let check1SSD = true;

document.getElementById("256SSD").addEventListener("click", function() {
    if (check256SSD == true) {
        check256SSD = calculateSSD('storage', 0, check512SSD, check1SSD);
        check512SSD = true;
        check1SSD = true;
    }
});
document.getElementById("512SSD").addEventListener("click", function() {
    if (check512SSD == true) {
        check512SSD = calculateSSD('storage', 100, check256SSD, check1SSD);
        check256SSD = true;
        check1SSD = true;
    }
});
document.getElementById("1SSD").addEventListener("click", function() {
    if (check1SSD == true) {
        check1SSD = calculateSSD('storage', 180, check256SSD, check512SSD);
        check256SSD = true;
        check512SSD = true;
    }
});



// function 



function calculateSSD(name, extravalue, flag1, flag2) {
    const memory = document.getElementById(name + 'Cost');

    var amount = extravalue;
    memory.innerText = amount;
    const total = document.getElementById('totalCost');
    const totalAmmount = parseInt(total.innerText);

    const totalCostBottom = document.getElementById('TotalCostBottom');



    if (extravalue == 0) {
        if (flag1 == true && flag2 == false) {
            const finalAmmount = totalAmmount - 180;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        } else if (flag2 == true && flag1 == false) {
            const finalAmmount = totalAmmount - 100;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        } else {
            const finalAmmount = totalAmmount - 0;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        }
    } else if (extravalue == 100) {
        if (flag1 == true && flag2 == false) {
            const finalAmmount = totalAmmount - 80;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        } else if (flag1 == false) {
            const finalAmmount = totalAmmount + 100;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        }
    } else if (extravalue == 180) {

        if (flag1 == true && flag2 == false) {
            const finalAmmount = totalAmmount + 80;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;

            return false;
        } else if (flag2 == true && flag1 == false) {
            const finalAmmount = totalAmmount + 180;
            total.innerText = finalAmmount;
            totalCostBottom.innerText = finalAmmount;
            return false;
        }

    }

}

// coupon section
var flag = false;
document.getElementById("apply").addEventListener("click", function() {
    var code = document.getElementById("promo");
    var inbox = code.value;
    if (inbox == 'stevekaku' && flag == false) {
        flag = true;
        const totalCostBottom = document.getElementById('TotalCostBottom');
        var discount = parseInt(totalCostBottom.innerText);
        discount -= (discount * 20) / 100;
        totalCostBottom.innerText = discount;
    }
    code.value = '';
});