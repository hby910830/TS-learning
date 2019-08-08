var person = {
    name: 'hby',
    age: 18
};
person.name = 'jack';
var person1 = {
    name: 'hby',
    age: 18
};
var personReadonly = {
    name: 'hby',
    age: 18
};
//personReadonly.name = 'tom' //报错,Cannot assign to 'name' because it is a constant or a read-only property.
//可以简写：
var personReadonly1 = {
    name: 'hby',
    age: 18
};
//personReadonly1.age = 12  //报错， Cannot assign to 'age' because it is a constant or a read-only property.
