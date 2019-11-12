{
    class Animal {
        kind: string;
        protected birth: string; //protected受保护的属性，只能在自己和子类访问

        constructor(kind: string) {
            this.kind = kind
            if (this.kind === '哺乳动物') {
                this.birth = '胎生'
            } else {
                this.birth = '卵生'
            }
        }

        move(): void {
            console.log('moving')
        }
    }

    class Human extends Animal {
        static xxx = 1;  // name/age/say不是Human这个类的属性，而是实例的属性； static表示Human的属性，可以使用Human.xxx
        public name: string;
        private _age: number;  //规范私有属性用下划线_
        //getter--setter 设计模式
        get age() {
            return this._age
        }

        set age(value: number) {
            if (value < 0) {
                this._age = 0
            } else {
                this._age = value
            }
        }

        private secret: string;  //private是私有属性，只能在这个class里面能访问，不写修饰符默认是public

        constructor(name: string, age: number) {
            super('哺乳动物') //类的继承必须要写super(),里面的参数是传给父类的constructor的参数
            console.log('调用了 constructor')
            console.log(`你传的参数是${name} ${age}`)
            this.name = name
            this.age = age
            this.secret = '这是我的㊙️㊙️'
        }

        say(): string {
            this.move()
            return `hi,我是${this.birth}`  //Human是Animal的子类，可以访问protected的属性
        }
    }

    let hby = new Human('hanbaoyi', 28)
    hby.say()
    console.log(hby); //Human {kind: "哺乳动物", birth: "胎生", name: "hanbaoyi", age: 28,secret: "这是我的㊙️㊙️"}
    console.log(Human.xxx); // 1
    console.log(hby.age) //28
    hby.age = -1
    console.log(hby.age)//0
    hby.age = 18
    console.log(hby.age)//18
// console.log(Human.secret); //private属性，外部不能访问
// console.log(Human.age); //private属性，外部不能访问
}


//抽象类:
// 也可以叫做「爸爸类」：专门当别的类的爸爸的类。
// 也可以叫做「没有写完的类」：只描述有什么方法，并没有完全实现这些方法。
// 由于这个类没有写完，所以不能创建出对象。（会报错）
{
    abstract class Animal { //只要有一个抽象方法，就必须声明抽象类
        abstract makeSound(): void;  //相当于interface,如 interface Animal{makeSound(): void;}

        move(): void {
            console.log('roaming the earch...');
        }
    }

    class Human extends Animal {
        makeSound() {
            console.log('说中文')
        }
    }

    let hby = new Human()
    console.log(hby.move()); //roaming the earch...
    hby.makeSound()  //说中文
}


// 把类当做接口使用:
    // 接口是低配版的类。
    // 类是高配版的接口。
{
    class Point {
        x: number;
        y: number;
    }

    interface Point3d extends Point {
        z: number;
    }

    let point3d: Point3d = {x: 1, y: 2, z: 3};
    console.log(point3d);
}