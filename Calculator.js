javascript:

var pr;
var p3;
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
        p = '/';
        p1 = '-';
        p2 = '*';
        p3 = '+';
        pr = prompt('Calc With');
        if (p === pr) {
            sum = num1 / num2;
        } else if (p1 === pr) {
            sum = num1 - num2;
        } else if (p2 === pr) {
            sum = num1 * num2;
        } else if (p3 === pr) {
            x = parseInt(num1);
            y = parseInt(num2);
            sum = x + y;
        }
    } else if (e.keyCode === 49) {
        var sum1 = alert(num1 + ' ' + pr + ' ' + num2 + ' = ' + sum);
    }
}
