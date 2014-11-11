javascript:

var pr;
var p6 = 'sqr';
var p5 = 'sin';
var p4 = 'cos';
var p3 = '+';
var p2 = '*';
var p1 = '-';
var p = '/';
var sum;
var num2;
var num1;
var x1 = 0;
var z = 0;
/*Were The Variables Are Stored
And Kept In The Script*/
document.onkeydown = calc;

function calc(e) {
    if (e.keyCode === 50) {
        num1 = prompt('Enter Num 1');
        pr = prompt('Calc With');
        num2 = prompt('Enter Num 2 ');
        /*The Input Sequence, Logs What
        Numbers And Signs You Entered*/
        x1 = 0;
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
        /*The Checking System And The Actual Calculator 
        Checks And Calculates The Things That Were
        Loged First Into The Calculator*/
        if (x1 === 0) {
            var sum1 = alert(num1 + ' ' + pr + ' ' + num2 + ' = ' + sum);
        } else if (x1 === 1) {
            sum1 = alert(pr + ' (' + num1 + ') ' + ' = ' + sum);
        } else if (x1 === 2) {
            sum1 = alert(pr + ' of ' + num1 + ' = ' + sum);
        }
        /*Output System, Outputs The Things That Were Inputed
        And The Things That Were Checked, This Is What
        You See When You Get Your Answer*/
    }
}
