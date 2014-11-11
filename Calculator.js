javascript:

var pr;
var p6;
var p5;
var p4;
var p3;
var p2;
var p1;
var p;
var sum;
var num2;
var num1;
var x1 = 0;
document.onkeydown = calc;

function calc(e) {
    if (e.keyCode === 50) {
        num1 = prompt('Enter Num 1');
        p = '/';
        p1 = '-';
        p2 = '*';
        p3 = '+';
        p4 = 'cos';
        p5 = 'sin';
        p6 = 'sqr';
        pr = prompt('Calc With');
        if (x1 === 0) {
            num2 = prompt('Enter Num 2');
        }
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
        } else if (p4 === pr) {
            sum = Math.cos(x);
            x1 = 1;
        } else if (p5 === pr) {
            sum = Math.sin(x);
            x1 = 1;
        } else if (p6 === pr) {
            sum = Math.sqrt(num1);
            x1 = 2;
        }
        if (x1 === 0) {
            var sum1 = alert(num1 + ' ' + pr + ' ' + num2 + ' = ' + sum);
        } else if (x1 === 1) {
            sum1 = alert(pr + '(' + num1 + ')' + ' = ' + sum);
        } else if (x1 === 2) {
            sum1 = alert(pr + ' of ' + num1 + ' = ' + sum);
        }
    }
}
