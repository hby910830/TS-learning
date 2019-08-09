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
