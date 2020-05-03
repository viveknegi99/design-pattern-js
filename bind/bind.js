function VBind( cb, scope, ...arg ){
    return function(...ar){
        cb.apply( scope, [ ...arg, ...ar] );
    }
}

let fn = function(...args){
    console.log( this.name);    
    console.log( args);    
}

let scope = { name: 'Vivek'};

let cp = VBind( fn, scope, 1, 2);

cp(3, 4, 5);
