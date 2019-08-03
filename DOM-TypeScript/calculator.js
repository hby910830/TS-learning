var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    //声明创建按钮函数
    Calculator.prototype.createButton = function (text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        container.appendChild(button);
        return button;
    };
    return Calculator;
}());
//声明创建按钮函数
function createButton(text, container, className) {
    var button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    container.appendChild(button);
    return button;
}
//创建container
var container = document.createElement('div');
container.classList.add('calculator');
document.body.appendChild(container);
//创建output
var output = document.createElement('div');
output.classList.add('output');
//创建output里的span
var span = document.createElement('span');
span.textContent = '0';
output.appendChild(span);
container.appendChild(output);
//声明n1,n2,operator
var n1;
var n2;
var operator;
//监听container
container.addEventListener('click', function (event) {
    if (event.target instanceof HTMLButtonElement) {
        var button = event.target;
        var text = button.textContent;
        //判断字符类型
        if ('0123456789'.indexOf(text) > -1) {
            if (operator) {
                //更新n2
                if (n2) {
                    n2 = parseInt(n2.toString() + text);
                }
                else {
                    n2 = parseInt(text);
                }
                span.textContent = n2.toString();
            }
            else {
                //更新n1
                if (n1) {
                    n1 = parseInt(n1.toString() + text);
                }
                else {
                    n1 = parseInt(text);
                }
                span.textContent = n1.toString();
            }
        }
        else if ('+-*÷'.indexOf(text) > -1) {
            //更新operator
            operator = text;
        }
        else if ('='.indexOf(text) > -1) {
            //更新结果
            var result = void 0;
            switch (operator) {
                case '+':
                    result = (n1 + n2);
                    break;
                case '-':
                    result = (n1 - n2);
                    break;
                case '*':
                    result = (n1 * n2);
                    break;
                case '÷':
                    result = (n1 / n2);
                    break;
            }
            span.textContent = result.toString();
        }
    }
});
//声明所有按钮
var keys = [
    ["Clear", "÷"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
];
//按钮放到container里
keys.forEach(function (textList) {
    var div = document.createElement('div');
    div.classList.add('row');
    textList.forEach(function (text) {
        createButton(text, div, "button text-" + text);
    });
    container.appendChild(div);
});
