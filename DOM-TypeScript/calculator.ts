//面向对象
class Calculator {
    public container: HTMLDivElement
    public span: HTMLSpanElement
    public output: HTMLSpanElement
    public button: HTMLButtonElement
    public n1: string = null
    public n2: string = null
    public operator: string = null
    public result: string = null
    public keys: Array<Array<string>> = [
        ["Clear", "÷"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="]
    ]

    constructor() {
        this.createContainer()
        this.createOutput()
        this.createButtons()
        this.bindEvents()
    }

    createButtons() {
        this.keys.forEach((textList: Array<string>): void => {
            let div: HTMLDivElement = document.createElement('div')
            div.classList.add('row')
            textList.forEach((text: string): void => {
                this.createButton(text, div, `button text-${text}`)
            })
            this.container.appendChild(div)
        })
    }

    createButton(text: string, container: HTMLElement, className: string) {
        let button: HTMLButtonElement = document.createElement('button')
        button.textContent = text
        button.className = className
        container.appendChild(button)
        this.button = button
    }

    createContainer() {
        let container: HTMLDivElement = document.createElement('div')
        container.classList.add('calculator')
        document.body.appendChild(container)
        this.container = container
    }

    createOutput() {
        let output: HTMLDivElement = document.createElement('div')
        output.classList.add('output')
        let span: HTMLSpanElement = document.createElement('span')
        span.textContent = '0'
        output.appendChild(span)
        this.container.appendChild(output)
        this.output = output
        this.span = span
    }

    bindEvents() {
        this.container.addEventListener('click', event => {
            if (event.target instanceof HTMLButtonElement) {
                let button: HTMLButtonElement = event.target
                let text: string = button.textContent
                this.updateNumbersOrOperator(text)
            }
        })
    }

    updateNumber(name: string, text: string): void {
        if (this[name]) {
            this[name] += text
        } else {
            this[name] = text
        }
        this.span.textContent = this[name].toString()
    }

    updateNumbers(text: string): void {
        if (this.operator) {
            this.updateNumber('n2', text)
        } else {
            this.updateNumber('n1', text)
        }
    }

    updateResult(): void {
        let result
        let n1: number = parseFloat(this.n1)
        let n2: number = parseFloat(this.n2)
        switch (this.operator) {
            case '+':
                result = n1 + n2
                break
            case '-':
                result = n1 - n2
                break
            case '*':
                result = n1 * n2
                break
            case '÷':
                result = n1 / n2
                break
        }
        result = result.toPrecision(6)
            .replace(/0+$/g, '')
            .replace(/0+e/g, 'e')
        if(n2 === 0){
            result = '不是数字'
        }
        this.span.textContent = result
        this.n1 = null
        this.n2 = null
        this.operator = null
        this.result = result
    }

    updateOperator(text: string): void {
        if (this.n1 === null) {
            this.n1 = this.result
        }
        this.operator = text
    }

    updateNumbersOrOperator(text) {
        if ('0123456789.'.indexOf(text) > -1) {
            this.updateNumbers(text)
        } else if ('+-*÷'.indexOf(text) > -1) {
            this.updateOperator(text)
        } else if ('='.indexOf(text) > -1) {
            this.updateResult()
        } else if (text === 'Clear') {
            this.n1 = null
            this.n2 = null
            this.operator = null
            this.result = null
            this.span.textContent = '0'
        }
    }
}

new Calculator()


//非面向对象
//声明创建按钮函数
// function createButton(text: string, container: HTMLElement, className: string) {
//     let button: HTMLButtonElement = document.createElement('button')
//     button.textContent = text
//     button.className = className
//     container.appendChild(button)
//     return button
// }

//创建container
// let container: HTMLDivElement = document.createElement('div')
// container.classList.add('calculator')
// document.body.appendChild(container)

//创建output
// let output: HTMLDivElement = document.createElement('div')
// output.classList.add('output')

//创建output里的span
// let span: HTMLSpanElement = document.createElement('span')
// span.textContent = '0'
// output.appendChild(span)
// container.appendChild(output)

//声明n1,n2,operator
// let n1: number
// let n2: number
// let operator: string

//监听container
// container.addEventListener('click', event => {
//     if (event.target instanceof HTMLButtonElement) {
//         let button: HTMLButtonElement = event.target
//         let text: string = button.textContent
//         //判断字符类型
//         if ('0123456789'.indexOf(text) > -1) {
//             if (operator) {
//                 //更新n2
//                 if (n2) {
//                     n2 = parseInt(n2.toString() + text)
//                 } else {
//                     n2 = parseInt(text)
//                 }
//                 span.textContent = n2.toString()
//             } else {
//                 //更新n1
//                 if (n1) {
//                     n1 = parseInt(n1.toString() + text)
//                 } else {
//                     n1 = parseInt(text)
//                 }
//                 span.textContent = n1.toString()
//             }
//         } else if ('+-*÷'.indexOf(text) > -1) {
//             //更新operator
//             operator = text
//         } else if ('='.indexOf(text) > -1) {
//             //更新结果
//             let result: number
//             switch (operator) {
//                 case '+':
//                     result = (n1 + n2);
//                     break
//                 case '-':
//                     result = (n1 - n2);
//                     break
//                 case '*':
//                     result = (n1 * n2);
//                     break
//                 case '÷':
//                     result = (n1 / n2);
//                     break
//             }
//             span.textContent = result.toString()
//         }
//     }
// })

//声明所有按钮
// let keys: Array<Array<string>> = [
//     ["Clear", "÷"],
//     ["7", "8", "9", "*"],
//     ["4", "5", "6", "-"],
//     ["1", "2", "3", "+"],
//     ["0", ".", "="]
// ]

//按钮放到container里
// keys.forEach((textList: Array<string>) => {
//     let div: HTMLDivElement = document.createElement('div')
//     div.classList.add('row')
//     textList.forEach((text: string) => {
//         createButton(text, div, `button text-${text}`)
//     })
//     container.appendChild(div)
// })