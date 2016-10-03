window.addEventListener('load', function(e){
    //Table
    var table = document.createElement('table');
    table.id = 'calculator';
    table.class = 'calculator';
    //Table Head
    var thead = document.createElement('thead');
    thead.id = 'header';
    //Table Body
    var tbody = document.createElement('tbody');
    tbody.id = 'body';
    //Header Row
    var trHead = document.createElement('tr');
    trHead.id = 'hearerRow';
    //Display Results in Header
    var th = document.createElement('th');
    th.id = 'resultDisplay';
    th.colSpan = '4';
    th.textContent = '';

    trHead.appendChild(th);
    thead.appendChild(trHead);
    table.appendChild(thead);

    //Body Row 1
    var tr1 = document.createElement('tr');
    tr1.id = 'row1';
    var td1 = document.createElement('td');
    td1.id = 'data1';
    td1.textContent = 'C';
    var td2 = document.createElement('td');
    td2.id = 'data2';
    td2.textContent = '+/';
    var td3 = document.createElement('td');
    td3.id = 'data3';
    td3.textContent = '%';
    var td4 = document.createElement('td');
    td4.id = 'data4';
    td4.textContent = '/';

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);

    tbody.appendChild(tr1);

    //Row 2
    var tr2 = document.createElement('tr');
    tr2.id = 'row2';
    var td5 = document.createElement('td');
    td5.id = 'data5';
    td5.textContent = '7';
    var td6 = document.createElement('td');
    td6.id = 'data6';
    td6.textContent = '8';
    var td7 = document.createElement('td');
    td7.id = 'data7';
    td7.textContent = '9';
    var td8 = document.createElement('td');
    td8.id = 'data8';
    td8.textContent = 'x';

    tr2.appendChild(td5);
    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);

    tbody.appendChild(tr2);

    //Row 3
    var tr3 = document.createElement('tr');
    tr3.id = 'row3';
    var td9 = document.createElement('td');
    td9.id = 'data9';
    td9.textContent = '4';
    var td10 = document.createElement('td');
    td10.id = 'data10';
    td10.textContent = '5';
    var td11 = document.createElement('td');
    td11.id = 'data11';
    td11.textContent = '6';
    var td12 = document.createElement('td');
    td12.id = 'data12';
    td12.textContent = '-';

    tr3.appendChild(td9);
    tr3.appendChild(td10);
    tr3.appendChild(td11);
    tr3.appendChild(td12);

    tbody.appendChild(tr3);

    //Row 4
    var tr4 = document.createElement('tr');
    tr4.id = 'row4';
    var td13 = document.createElement('td');
    td13.id = 'data13';
    td13.textContent = '1';
    var td14 = document.createElement('td');
    td14.id = 'data14';
    td14.textContent = '2';
    var td15 = document.createElement('td');
    td15.id = 'data15';
    td15.textContent = '3';
    var td16 = document.createElement('td');
    td16.id = 'data16';
    td16.textContent = '+';

    tr4.appendChild(td13);
    tr4.appendChild(td14);
    tr4.appendChild(td15);
    tr4.appendChild(td16);

    tbody.appendChild(tr4);

    //Row 5
    var tr5 = document.createElement('tr');
    tr5.id = 'row5';
    var td17 = document.createElement('td');
    td17.id = 'data17';
    td17.textContent = '0';
    td17.colSpan = '2';
    var td18 = document.createElement('td');
    td18.id = 'data18';
    td18.textContent = '.';
    var td19 = document.createElement('td');
    td19.id = 'data19';
    td19.textContent = '=';

    tr5.appendChild(td17);
    tr5.appendChild(td18);
    tr5.appendChild(td19);

    tbody.appendChild(tr5);

    table.appendChild(tbody);
    document.body.appendChild(table);

    //Store Operand Into A Variable
    var operand = null;
    //Create an Array of Operands to Track How Many
    //Mathematical Operations have Taken Place
    var operandArr = [];
    //Create an Array of Numbers
    var numbers = [];
    //Create a Result Variable
    var result = null;
    //Create a Variable to Store Input
    var inputs = [];
    //Create an Array to Track Mathematical Progress
    var log = [];

    var add = function(numbersArr) {
      var num1 = numbersArr.shift();
      var num2 = numbersArr.shift();
      return num1 + num2;
    };

    var subtract = function(numbersArr) {
      var num1 = numbersArr.shift();
      var num2 = numbersArr.shift();
      return num1 - num2;
    };

    var divide = function(numbersArr) {
      var num1 = numbersArr.shift();
      var num2 = numbersArr.shift();
      return num1 / num2;
    };

    var multiply = function(numbersArr) {
      var num1 = numbersArr.shift();
      var num2 = numbersArr.shift();
      return num1 * num2;
    };

    var calculate = function(numbersArr, operand) {
      var num1 = numbersArr.shift();
      var num2 = numbersArr.shift();
      if (operand === '+') {
        return num1 + num2;
      }
      else if (operand === '-') {
        return num1 - num2;
      }
      else if (operand === 'x') {
        return num1 * num2;
      }
      else if (operand === '/') {
        return num1 / num2;
      }
    }
    //Clear
    td1.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td1.textContent);
      inputs.push(td1.textContent);
      th.textContent = '';
      numbers = [];
    });
    //Divide
    td4.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td4.textContent);
      inputs.push(td4.textContent);
      operand = td4.textContent;
      operandArr.push(operand);
      if (!(log[log.length - 1] === 'resultTrue')) {
      numbers.push(parseFloat(th.textContent));
      }
      console.log(numbers);
      th.textContent = null;
      if (numbers.length > 1) {
        result = calculate(numbers, operand);
        th.textContent = result;
        numbers.push(result);
        log.push('resultTrue');
      }
      return operand;
      console.log(numbers);
    });
    //7
    td5.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td5.textContent);
      inputs.push(td5.textContent);
      log.push(td5.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td5.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td5.textContent;
      }
      else {
        th.textContent = td5.textContent;
      }
    });
    //8
    td6.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td6.textContent);
      inputs.push(td6.textContent);
      log.push(td6.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td6.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td6.textContent;
      }
      else {
        th.textContent = td6.textContent;
      }
    });
    //9
    td7.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td7.textContent);
      inputs.push(td7.textContent);
      log.push(td7.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td7.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td7.textContent;
      }
      else {
        th.textContent = td7.textContent;
      }
    });
    //Multiply
    td8.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td8.textContent);
      inputs.push(td8.textContent);
      operand = td8.textContent;
      operandArr.push(operand);
      if (!(log[log.length - 1] === 'resultTrue')) {
      numbers.push(parseFloat(th.textContent));
      }
      console.log(numbers);
      th.textContent = null;
      if (numbers.length > 1) {
        result = calculate(numbers, operand);
        th.textContent = result;
        numbers.push(result);
        log.push('resultTrue');
      }
      console.log(numbers);
      return operand;
    });
    //4
    td9.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td9.textContent);
      inputs.push(td9.textContent);
      log.push(td9.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td9.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td9.textContent;
      }
      else {
        th.textContent = td9.textContent;
      }
    });
    //5
    td10.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td10.textContent);
      inputs.push(td10.textContent);
      log.push(td10.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td10.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td10.textContent;
      }
      else {
        th.textContent = td10.textContent;
      }
    });
    //6
    td11.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td11.textContent);
      inputs.push(td11.textContent);
      log.push(td11.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td11.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td11.textContent;
      }
      else {
        th.textContent = td11.textContent;
      }
    });
    //Subtract
    td12.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td12.textContent);
      inputs.push(td12.textContent);
      operand = td12.textContent;
      operandArr.push(operand);
      if (!(log[log.length - 1] === 'resultTrue')) {
      numbers.push(parseFloat(th.textContent));
      }
      console.log(numbers);
      th.textContent = null;
      if (numbers.length > 1) {
        result = calculate(numbers, operand);
        th.textContent = result;
        numbers.push(result);
        log.push('resultTrue');
      }
      console.log(numbers);
      return operand;
    });
    //1
    td13.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td13.textContent);
      inputs.push(td13.textContent);
      log.push(td5.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td13.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td13.textContent;
      }
      else {
        th.textContent = td13.textContent;
      }
    });
    //2
    td14.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td14.textContent);
      inputs.push(td14.textContent);
      log.push(td14.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td14.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td14.textContent;
      }
      else {
        th.textContent = td14.textContent;
      }
    });
    //3
    td15.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td15.textContent);
      inputs.push(td15.textContent);
      log.push(td15.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td15.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td15.textContent;
      }
      else {
        th.textContent = td15.textContent;
      }
    });
    //Addition
    td16.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td16.textContent);
      inputs.push(td16.textContent);
      operand = td16.textContent;
      operandArr.push(operand);
      if (!(log[log.length - 1] === 'resultTrue')) {
      numbers.push(parseFloat(th.textContent));
      }
      console.log(numbers);
      th.textContent = null;
      if (numbers.length > 1) {
        result = calculate(numbers, operand);
        th.textContent = result;
        numbers.push(result);
        log.push('resultTrue');
      }
      console.log(numbers);

      return operand;
    });
    //0
    td17.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td17.textContent);
      inputs.push(td17.textContent);
      log.push(td17.textContent);
      if (operandArr.length <= 1) {
        th.textContent += td17.textContent;
      }
      else if (operandArr.length > 1 && ((inputs[inputs.length - 2] === '0') ||
      (inputs[inputs.length - 2] === '1') || (inputs[inputs.length - 2] === '2') ||
      (inputs[inputs.length - 2] === '3') || (inputs[inputs.length - 2] === '4') ||
      (inputs[inputs.length - 2] === '5') || (inputs[inputs.length - 2] === '6') ||
      (inputs[inputs.length - 2] === '7') || (inputs[inputs.length - 2] === '8') ||
      (inputs[inputs.length - 2] === '9') || (inputs[inputs.length - 2] === '.'))) {
        th.textContent += td17.textContent;
      }
      else {
        th.textContent = td17.textContent;
      }
    });
    //Decimal
    td18.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td18.textContent);
      inputs.push(td18.textContent);
      if (!th.textContent.includes('.')) {
        th.textContent += td18.textContent;
      }
    });
    //Equals
    td19.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(td19.textContent);
      console.log(operand);
      inputs.push(td19.textContent);
      numbers.push(parseFloat(th.textContent));
      if (operand === '+') {
        result = add(numbers);
        th.textContent = result;
      }
      else if (operand === '-') {
        result = subtract(numbers);
        th.textContent = result;
      }
      else if (operand === '/') {
        result = divide(numbers);
        th.textContent = result;
      }
      else if (operand === 'x') {
        result = multiply(numbers);
        th.textContent = result;
      }
      numbers = [];
    });
});
