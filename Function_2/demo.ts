//this参数
{
    interface Human {
        name: string
        age: number
    }

    function fn(this: Human) {
        console.log(this);
    }

// fn() //报错，传不了this参数
    fn.call({name: 'hby', age: 18})


// function fn1(){
//     console.log(this); //{name: 'hby'}
//     function fn2(){
//         console.log(this); //Window
//     }
//     fn2()
// }

//上面的例子在typescript中相当于这么传this
    function fn1(this: any) {
        console.log(this); //{name: 'hby'}
        function fn2(this: any) {
            console.log(this); //Window
        }

        fn2() //没有传参，默认是window
    }

    fn1.call({name: 'hby'}) //this参数为{name: 'hby'}

}


//函数重载
{
    function add(a, b) {
        return a + b
    }

    add(1, 2) //3
    add('han', 'baoyi') //'hanbaoyi'
    add(1, '2') //'12'


    function add1(a: number, b: number): number;
    function add1(a: string, b: string): string;
    function add1(a, b) {
        return a + b
    }

    add1(1, 2) //3
    add1('a', 'b') //'ab'
    // add1(1, '2')//报错
}