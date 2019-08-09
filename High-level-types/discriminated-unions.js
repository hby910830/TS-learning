// function fn(a:Props){
//   console.log(a.id) // Property 'id' does not exist on type '{ action: "create"; name: string; }'.
// }
function fn(a) {
    if (a.action === 'create') {
        console.log(a.name);
    }
    else {
        console.log(a.id);
    }
}
fn({ action: 'update', id: 1, name: 'jack' });
fn({ action: 'create', name: 'hby' });
function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            action.payload; //number
            break;
        case 'ADD_STRING':
            action.payload; //string
            break;
        case 'ADD_DATE':
            action.payload; //Date
            break;
        case 'ADD_USER':
            action.payload; //User
            break;
    }
}
