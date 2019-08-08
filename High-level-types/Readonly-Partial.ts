interface Person {
  name: string;
  age: number
}

interface ReadOnlyPerson {
  readonly name: string;
  readonly age: number
}

const person: Person = {
  name: 'hby',
  age: 18
}

person.name = 'jack'

const person1: ReadOnlyPerson = {
  name: 'hby',
  age: 18
}

//person1.name = 'jack'  //报错，Cannot assign to 'name' because it is a constant or a read-only property


type ReadonlyPerson2 = Readonly<Person>
const personReadonly: ReadonlyPerson2 = {
  name: 'hby',
  age: 18
}
//personReadonly.name = 'tom' //报错,Cannot assign to 'name' because it is a constant or a read-only property.


//可以简写：
const personReadonly1: Readonly<Person> = {
  name: 'hby',
  age: 18
}
//personReadonly1.age = 12  //报错， Cannot assign to 'age' because it is a constant or a read-only property.


