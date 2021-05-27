
var input = document.getElementById('Answer');
var msg = '';
var opstatus = false,
    numstatus = true;
function EnterNumber(num) {
    if (numstatus == false) {
        input.value = '';
        numstatus = true
        msg = '';
    }
    else {
        msg += num;
        input.value += num;
        opstatus = false;
    }
}
function EnterOperator(operator) {
    if (opstatus == false) {
        msg += operator;
        input.value += operator;
        opstatus = true;
        numstatus = true;

    }
    else {
        input.value += '';
    }
}
function EnterEqual() {
    input.value = eval(msg);
    numstatus = false;
}
function EnterClear() {

    input.value = '';
    msg = '';
}
function EnterDote(dote) {
    if (dotStatus == false) {
        msg += dote;
        input.value += dote;
        dotStatus = true;
    }
    else {
        input.value += '';

    }

}

/*
var input = document.getElementById('Answer');
var result = '',
    numStatus = false,
    opStatus = false,
    dotStatus = false;
function EnterNumber(num) {

    if (numStatus == false) {

        result += num;
        input.value += num;



    } else {


        result = num;
        input.value = num;
        numStatus = false;




    }
    opStatus = false;





}

function EnterOperator(op) {

    if (opStatus == false) {
        result += op;
        input.value += op;
        opStatus = true;
        numStatus = false;

    } else {
        input.value += '';

    }
}

function EnterDote(dote) {
    if (dotStatus == false) {
        result += dote;
        input.value += dote;
        dotStatus = true;
        numStatus = false;


    }
    else {
        input.value += '';

    }

}
function EnterEqual() {
    input.value = eval(result);
    numStatus = true;
    opStatus = false;



}

function EnterClear() {
    input.value = '';
    result = '';


}
*/