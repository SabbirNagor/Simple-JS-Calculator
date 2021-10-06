function Calculator() {
    let number1 = Number(document.querySelector('#num_1').value) ;
    let number2 = Number(document.querySelector('#num_2').value);
    let select = document.querySelector('select');
    let ans = document.querySelector('#answer');
    let operator = select.options[select.selectedIndex].value;
    // console.log (operator);
    let theAnswer;

    if (operator == 'add'){
        theAnswer= number1 + number2;
    }else if (operator == 'diduct'){
        theAnswer = number1 - number2;
    }else if (operator == 'divide') {
        theAnswer = number1 / number2;
    }else if (operator == 'multiply') {
    } else{
        theAnswer = 'Please do it correctly!!';
    };

    ans.innerHTML=theAnswer;
    // let result = (document.querySelector('#answer').innerHtml= theAnswer.value);
    // console.log(number1,number2);
}