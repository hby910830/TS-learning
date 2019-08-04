//接口就是用代码描述一个对象必须有什么属性（包括方法），但是有没有其他属性就不管了。

{
    interface Shape {
        head: string
        body: string
    }

    interface Human {
        readonly name: string  //readonly 只读属性
        age: number
        shape: Shape
        likedGames?: Array<string> //？可选属性
        say(word: string): void
    }

    let hby: Human = {
        name: 'hanbaoyi',
        age: 28,
        shape: {head: '圆', body: '方'},
        likedGames: ['王者荣耀', 'LOL'], //可声明也可不声明，因为interface Human的likedGames是一个可选属性
        say(word: string) {
            console.log(`${this.name}: ${word}`);
        }
    }
//hby.name = 'jack' 报错，name是只读属性
    console.log(hby);
    console.log(hby.say('hi'))  //jack: hi
}


{
    interface rectConfig {
        height?: number;
        width?: number;

        [propName: string]: number  //[propName: string]: number ,表示所有的属性必须是string,值必须是number
    }

    let config = {
        width: 100,
        height: 100
    }

    function createRect(config: rectConfig) {
    }


    let myRect = createRect(config)
}

//函数
{
    interface 二则运算 {
        (a: number, b: number): number

        逆运算(a: number, b: number): number
    }

    // let fn = function (): 二则运算 {
    //     let x: any = function (a: number, b: number): number {
    //         return a + b
    //     }
    //     x.逆运算 = function (a: number, b: number): number {
    //         return a - b
    //     }
    //     return x
    // }
    // let add: 二则运算 = fn()

    // 代码改进
    let add: 二则运算 = ((): 二则运算 => {
        let x: any = function (a: number, b: number): number {
            return a + b
        }
        x.逆运算 = function (a: number, b: number): number {
            return a - b
        }
        return x
    })()

    console.log(add(1, 2))
}

//继承
{
    interface 有机物 {
        c: boolean;
        h: boolean;
        o: boolean;
    }

    interface Animal {
        move(): void
    }

    interface Human extends Animal,有机物 { //一个接口可以继承多个接口
        name: string,
        age: number
    }

    let hby: Human = {
        c:true,
        h:true,
        o:true,
        name: 'hanbaoyi',
        age: 28,
        move() {
            console.log('i am moving')
        }
    }
    hby.move()
}