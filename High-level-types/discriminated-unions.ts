type Props = { //联合
  action: 'create';
  name: string
} | {
  action: 'update';
  name: string;
  id: number
}

// function fn(a:Props){
//   console.log(a.id) // Property 'id' does not exist on type '{ action: "create"; name: string; }'.
// }

function fn(a: Props) {
  if (a.action === 'create') {
    console.log(a.name);
  } else {
    console.log(a.id);
  }
}

fn({action: 'update', id: 1, name: 'jack'})
fn({action: 'create', name: 'hby'})


type Action = {
  type: string;
  payload: any
}

interface User {
  id: number;
  name: string
}

type Action2 = {
  type: 'ADD';
  payload: number
} | {
  type: 'ADD_STRING';
  payload: string
} | {
  type: 'ADD_DATE';
  payload: Date
} | {
  type: 'ADD_USER';
  payload: User
}

function reducer(state:any,action: Action2){
  switch (action.type) {
    case 'ADD':
      action.payload    //number
      break;
    case 'ADD_STRING':
      action.payload    //string
      break;
    case 'ADD_DATE':
      action.payload    //Date
      break;
    case 'ADD_USER':
      action.payload    //User
      break;
  }
}


