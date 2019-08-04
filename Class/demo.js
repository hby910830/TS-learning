var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Animal = /** @Class */ (function () {
        function Animal(kind) {
            this.kind = kind;
            if (this.kind === '哺乳动物') {
                this.birth = '胎生';
            }
            else {
                this.birth = '卵生';
            }
        }
        Animal.prototype.move = function () {
            console.log('moving');
        };
        return Animal;
    }());
    var Human = /** @Class */ (function (_super) {
        __extends(Human, _super);
        function Human(name, age) {
            var _this = _super.call(this, '哺乳动物') //类的继承必须要写super(),里面的参数是传给父类的constructor的参数
             || this;
            console.log('调用了 constructor');
            console.log("\u4F60\u4F20\u7684\u53C2\u6570\u662F" + name + " " + age);
            _this.name = name;
            _this.age = age;
            _this.secret = '这是我的㊙️㊙️';
            return _this;
        }
        Object.defineProperty(Human.prototype, "age", {
            //getter--setter 设计莫舍
            get: function () {
                return this._age;
            },
            set: function (value) {
                if (value < 0) {
                    this._age = 0;
                }
                else {
                    this._age = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Human.prototype.say = function () {
            this.move();
            return "hi,\u6211\u662F" + this.birth; //Human是Animal的子类，可以访问protected的属性
        };
        Human.xxx = 1; // name/age/say不是Human这个类的属性，而是实例的属性； static表示Human的属性，可以使用Human.xxx
        return Human;
    }(Animal));
    var hby = new Human('hanbaoyi', 28);
    hby.say();
    console.log(hby); //Human {kind: "哺乳动物", birth: "胎生", name: "hanbaoyi", age: 28,secret: "这是我的㊙️㊙️"}
    console.log(Human.xxx); // 1
    console.log(hby.age); //28
    hby.age = -1;
    console.log(hby.age); //0
    hby.age = 18;
    console.log(hby.age); //18
    // console.log(Human.secret); //private属性，外部不能访问
    // console.log(Human.age); //private属性，外部不能访问
}
//抽象类:
// 也可以叫做「爸爸类」：专门当别的类的爸爸的类。
// 也可以叫做「没有写完的类」：只描述有什么方法，并没有完全实现这些方法。
// 由于这个类没有写完，所以不能创建出对象。（会报错）
{
    var Animal = /** @Class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log('roaming the earch...');
        };
        return Animal;
    }());
    var Human = /** @Class */ (function (_super) {
        __extends(Human, _super);
        function Human() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Human.prototype.makeSound = function () {
            console.log('说中文');
        };
        return Human;
    }(Animal));
    var hby = new Human();
    console.log(hby.move()); //roaming the earch...
    hby.makeSound(); //说中文
}
// 把类当做接口使用:
// 接口是低配版的类。
// 类是高配版的接口。
{
    var Point = /** @Class */ (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
    console.log(point3d);
}
