{
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
}


{
  interface Person{
    name: string;
    age:number;
    gender: string
  }
  interface Person1{
    name?: string;
    age?:number;
    gender?: string
  }
  const person: Person1 = {
    name: 'hby'
  }
  // 报错，Type '{ name: string; }' is not assignable to type 'Person'.Property 'age' is missing in type '{ name: string; }'.
  // const person1: Person = {
  //   name: 'hby'
  // }
  const person2: Partial<Person> = {
    name: 'hby'
  }

  //Required和Partials是两个相反的操作

  // 报错，Type '{ name: string; }' is not assignable to type 'Required<Person>'. Property 'age' is missing in type '{ name: string; }'.
  const person3: Required<Person> = {
    name: 'hby'
  }
}

