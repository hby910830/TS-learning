{
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
}
{
    var person = {
        name: 'hby'
    };
    // 报错，Type '{ name: string; }' is not assignable to type 'Person'.Property 'age' is missing in type '{ name: string; }'.
    // const person1: Person = {
    //   name: 'hby'
    // }
    var person2 = {
        name: 'hby'
    };
    //Required和Partials是两个相反的操作
    // 报错，Type '{ name: string; }' is not assignable to type 'Required<Person>'. Property 'age' is missing in type '{ name: string; }'.
    // const person3: Required<Person> = {
    //   name: 'hby'
    // }
}
