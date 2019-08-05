//接口就是用代码描述一个对象必须有什么属性（包括方法），但是有没有其他属性就不管了。
{
    var hby = {
        name: 'hanbaoyi',
        age: 28,
        shape: { head: '圆', body: '方' },
        likedGames: ['王者荣耀', 'LOL'],
        say: function (word) {
            console.log(this.name + ": " + word);
        }
    };
    //hby.name = 'jack' 报错，name是只读属性
    console.log(hby);
    console.log(hby.say('hi')); //jack: hi
}
{
    var config = {
        width: 100,
        height: 100
    };
    function createRect(config) {
    }
    var myRect = createRect(config);
}
//函数
{
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
    var add_1 = (function () {
        var x = function (a, b) {
            return a + b;
        };
        x.逆运算 = function (a, b) {
            return a - b;
        };
        return x;
    })();
    console.log(add_1(1, 2));
}
//继承
{
    var hby = {
        c: true,
        h: true,
        o: true,
        name: 'hanbaoyi',
        age: 28,
        move: function () {
            console.log('i am moving');
        }
    };
    hby.move();
}
