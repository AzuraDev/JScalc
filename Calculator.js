javascript:

var pr;
var formulas;
var p6 = 'sqr';
var p5 = 'sin';
var p4 = 'cos';
var p3 = '+';
var p2 = '*';
var p1 = '-';
var p = '/';
/*Were The Variables Are Stored
And Kept In The Script*/
document.onkeydown = calc;

function calc(e) {
    if (e.keyCode === 50) {
        var num1 = prompt('Enter Num 1');
        pr = prompt('Calc With');
        var num2 = prompt('Enter Num 2 ');
        /*The Input Sequence, Logs What
        Numbers And Signs You Entered*/
        var x1 = 0;
        x = parseFloat(num1);
        y = parseFloat(num2);
        if (p === pr) {
            var sum = x / y;
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
    } else if (e.keyCode === 49) {
        var Dist = 'Dist';
        var Slope = 'Slope';
        var py = 'Py';
        var circ = 'Circle';
        var Ellipse = 'Ellipse';
        var Sphere = 'Sphere';
        var formulas = prompt('Enter a formula');
        if (formulas === Dist) {
            var x = prompt('Enter Coord 1 x');
            var y = prompt('Enter Coord 1 y');
            var x1 = prompt('Enter Coord 2 x');
            var y1 = prompt('Enter Coord 2 y');
            var Distance = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
            alert(Distance);
            /*Calculates Distance*/
        } else if (formulas === Slope) {
            x = prompt('Enter x1');
            y = prompt('Enter y1');
            x1 = prompt('Enter x2');
            y1 = prompt('Enter y2');
            var slopeFormulaY = y1 - y;
            var slopeFormulaX = x1 - x;
            alert(slopeFormulaY + '/' + slopeFormulaX);
            /*Calculates Slope*/
        } else if (formulas === py) {
            var a2 = prompt('A2');
            var b2 = prompt('b2');
            var c = Math.sqrt(a2 * a2 + b2 * b2);
            var pytha = c;
            alert(pytha);
            /*Calculates Pythagoreans Theroum*/
        } else if (formulas === Ellipse) {
            var r1 = prompt('Radi 1');
            var r2 = prompt('Radi 2');
            var pi = Math.PI;
            var answer = pi * r1 * r2;
            alert(answer);
        } else if (formulas === circ) {
            r1 = prompt('Radi');
            var Area = Math.PI * r1 * r1;
            alert(Area);
        } else if (formulas === Sphere) {
            r1 = prompt('Radi');
            var Volume = 4 / 3 * Math.PI * r1 * r1 * r1;
            alert(Volume);
            /*Calculate Volume Of A Sphere*/
        }
    }
}
