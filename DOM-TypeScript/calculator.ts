class Calculator{
    public container:HTMLDivElement
    public span: HTMLSpanElement
    public output: HTMLSpanElement
    public button: HTMLButtonElement
    public n1: number
    public n2: number
    public operator: string
    public keys: Array<Array<string>> = [
        ["Clear", "÷"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="]
    ]
    constructor(){
        this.createContainer()
        this.createOutput()
        this.createButtons()
        this.bindEvents()
    }
    createButtons(){
        this.keys.forEach((textList: Array<string>) => {
            let div: HTMLDivElement = document.createElement('div')
            div.classList.add('row')
            textList.forEach((text: string) => {
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
    createContainer(){
        let container: HTMLDivElement = document.createElement('div')
        container.classList.add('calculator')
        document.body.appendChild(container)
        this.container = container
    }
    createOutput(){
        let output: HTMLDivElement = document.createElement('div')
        output.classList.add('output')
        let span: HTMLSpanElement = document.createElement('span')
        span.textContent = '0'
        output.appendChild(span)
        this.container.appendChild(output)
        this.output = output
        this.span = span
    }
    bindEvents(){
        this.container.addEventListener('click', event => {
            if (event.target instanceof HTMLButtonElement) {
                let button: HTMLButtonElement = event.target
                let text: string = button.textContent
                //判断字符类型
                if ('0123456789'.indexOf(text) > -1) {
                    if (this.operator) {
                        //更新n2
                        if (this.n2) {
                            this.n2 = parseInt(this.n2.toString() + text)
                        } else {
                            this.n2 = parseInt(text)
                        }
                        this.span.textContent = this.n2.toString()
                    } else {
                        //更新n1
                        if (this.n1) {
                            this.n1 = parseInt(this.n1.toString() + text)
                        } else {
                            this.n1 = parseInt(text)
                        }
                        this.span.textContent = this.n1.toString()
                    }
                } else if ('+-*÷'.indexOf(text) > -1) {
                    //更新operator
                    this.operator = text
                } else if ('='.indexOf(text) > -1) {
                    //更新结果
                    let result: number
                    switch (this.operator) {
                        case '+':
                            result = (this.n1 + this.n2);
                            break
                        case '-':
                            result = (this.n1 - this.n2);
                            break
                        case '*':
                            result = (this.n1 * this.n2);
                            break
                        case '÷':
                            result = (this.n1 / this.n2);
                            break
                    }
                    this.span.textContent = result.toString()
                }
            }
        })
    }
}
new Calculator()


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



