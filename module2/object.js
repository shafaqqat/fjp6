// empty object

let obj = {};
console.log(obj);

let objAman ={
    Name : "moh aman",Age:23 ,PhoneNo:7222953333 , LastName:"aman"
};
console.log(objAman);

let capAmerica = {
    Name:'Steve' ,
    Age: 9999,
    Frinds : ['tony','hulk','Bruce'],
    Address: {
        city: 'Queen',
        State: 'Haryana'
    },

    sayHi:function(){
        console.log("cap america say hiii");
    }
}

console.log(capAmerica);
console.log(capAmerica.Name);


capAmerica.sayHi();