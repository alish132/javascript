let customer = {
    name: 'Elon musk',
    purchase: ['potato','apple','banana'],
    address: 'Las vages',
    email: 'elon@tesla.com',
    'Phone No': 9867252526
}

customer.greet = function(){
    console.log(`Welcome back ${this.name} thank you for purchasing ${this.purchase}`);
}
console.log(customer["Phone No"]);