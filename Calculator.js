javascript:

var pr;
var p2;
var p1;
var p;
var sum;
var num2;
var num1;
document.onkeydown = calc;

function calc(e) {
    if (e.keyCode === 50) {
        num1 = prompt('Enter Num 1');
        num2 = prompt('Enter Num 2');
        sum;
        p = '/';
        p1 = '-';
        p2 = '*';
        pr = prompt('Calc With');
        if (p === pr) {
            sum = num1 / num2;
        } else if (p1 === pr) {
            sum = num1 - num2;
        } else if (p2 === pr) {
            sum = num1 * num2;
        }
    } else if (e.keyCode === 49) {
        var sum1 = alert(num1 + ' ' + pr + ' ' + num2 + ' = ' + sum);
    }
}