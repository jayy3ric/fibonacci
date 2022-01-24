function fibonacciGenerator(n) {

    var n = document.getElementsByClassName('form-control')[0].value;;

    var output = [];

    if (n == 1) {
        output = [0];
    } else if (n == 2) {
        output = [0, 1]
    }
    else {
        output = [0, 1]
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }

    document.getElementById('results-1').innerHTML= "The number at position '" + n + "' of the Fibonacci sequence is:";
    document.getElementById('results-2').innerHTML= output[n-1];
    document.getElementById('results-3').innerHTML= "The Sequence up until that point is:";
    document.getElementById('results-4').innerHTML=  output.join(' , ');
    document.getElementsByClassName('results-box')[0].style.display='inline';

    // alert("The number at position '" + n + "' of the Fibonacci sequence is " + output[n - 1] + ".\nThe Sequence up until that point is:\n " + output);
}
