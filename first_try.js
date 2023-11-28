// Javascript return statement practice.

function product(a,b){
    return a*b;
};

console.log(product(5,5))
// ..........................................................

function language(){
    let first='HTML', second='CSS', third='Javascript';

    return{
        first, second, third
    };
};

let {first, second, third} = language();
console.log(first);
console.log(second);
console.log(third);

