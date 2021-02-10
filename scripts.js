function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);


    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function minus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);


    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}

function multiply() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);


    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}

function razdel() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);


    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2; 

    document.getElementById('out').innerHTML = result;
}

let example1 = document.querySelector("#example1");
example1.style.backgroundColor = 'aqua';
example1.style.width = '50px';
example1.style.height = '50px';
example1.style.borderRadius = '50px';

let example2 = document.querySelector("#example2");
example2.style.backgroundColor = 'aqua';
example2.style.width = '50px';
example2.style.height = '50px';
example2.style.borderRadius = '50px';

let example3 = document.querySelector("#example3");
example3.style.backgroundColor = 'aqua';
example3.style.width = '50px';
example3.style.height = '50px';
example3.style.borderRadius = '50px';

let example4 = document.querySelector("#example4");
example4.style.backgroundColor = 'aqua';
example4.style.width = '50px';
example4.style.height = '50px';
example4.style.borderRadius = '50px';

let p1 = document.querySelector("#p1");
p1.style.backgroundColor = 'aqua';


let p2 = document.querySelector("#p2");
p2.style.backgroundColor = 'aqua';

let n1 = document.querySelector("#n1");
n1.style.backgroundColor = 'white';
n1.style.height = '25px';
n1.style.width = '1340px';
n1.style.fontSize = '20px';

let n2 = document.querySelector("#n2");
n2.style.backgroundColor = 'white';
n2.style.height = '25px';
n2.style.width = '1340px';
n2.style.fontSize = '20px';

let out = document.querySelector("#out");
// out.style.
out.style.width = '1350px';
out.style.height = '30px';
out.style.backgroundColor = 'aqua';
out.style.fontSize = '20px';

