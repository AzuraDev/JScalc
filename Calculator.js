javascript:

var pr;
var p3;
var p2;
var p1;
var p;
var sum;
var num2;
var num1;
var x1;
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
        x = parseFloat(num1);
        y = parseFloat(num2);
        if (p === pr) {
            sum = x / y;
        } else if (p1 === pr) {
            sum = x - y;
        } else if (p2 === pr) {
            sum = x * y;
        } else if (p3 === pr) {
            sum = x + y;
        }
        var sum1 = alert(num1 + ' ' + pr + ' ' + num2 + ' = ' + sum);
    } else if (e.keyCode === 49) {
        sum1 = alert(num1 + ' ' + pr + ' ' + num2 + ' = ' + sum);
    }
}
