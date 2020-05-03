// (12 + 3) - (2 + 1)  = 12
// class to store integers
class Integer {
  constructor(val) {
    this.value = parseInt(val);
  }
}
// class to store binary operation
class BinaryOperation {
    constructor(){
        this.left;
        this.right;
        this.operation;
    }
    get value(){        
        switch(this.operation){
            case OPERATION_TYPE.addition : {
               return this.left.value + this.right.value;               
            }
            case OPERATION_TYPE.subtraction : {
                return this.left.value - this.right.value;                
            }
        }
    }
}
// class to create tokens by process of lexing
class Token {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  }
  toString() {
      return `/ '${this.text}' /`;
  }
}
// enum for operation type
const OPERATION_TYPE = Object.freeze({
  addition: 0,
  subtraction: 1,
});
// enum for allowed characters
const CHAR_TYPE = Object.freeze({
  int: 0,
  add: 1,
  sub: 2,
  lparn: 3,
  rparn: 4,
});
// function for creating tokens
function lexing(str) {
    let buffer = [];
  for (let i = 0; i < str.length; i++) {
    switch(str[i]) {
        case '+': {
            buffer.push( new Token(CHAR_TYPE.add, str[i]))
            break;
        }
        case '-': {
            buffer.push( new Token(CHAR_TYPE.sub, str[i]))
            break;
        }
        case '(': {
            buffer.push( new Token(CHAR_TYPE.lparn, str[i]));
            break;
        }
        case ')': {
            buffer.push( new Token(CHAR_TYPE.rparn, str[i]));
            break;
        }
        default: {
            let temp = [];
            let k = i;            
            for( ; k < str.length-1; k++) {                
                if( '0123456789'.indexOf(str[k]) !== -1) {                    
                    temp.push(str[k]);
                    continue;
                } else {
                    i = k-1;
                    break;
                }
            }            
            buffer.push( new Token( CHAR_TYPE.int, temp.join('')));
        }
    }
  }
  return buffer;
}
// function for parsing tokens array
function parsing(arr) {
    let bo = new BinaryOperation();
    let isLeftFound = false;
    for(let i =0; i < arr.length ; i++) {
        switch(arr[i].type) {
            case CHAR_TYPE.lparn: {
                if( isLeftFound ) {
                    // create sub array till rparn found
                    let temp = [];
                    i++
                    for( ; i < arr.length -1 ; i++) {
                        if(arr[i].type == CHAR_TYPE.rparn) {
                            break;
                        } else {
                            temp.push(arr[i]);
                        }
                    }
                    bo.right =  parsing(temp);// assign expression
                    isLeftFound = false;
                } else {
                    // create sub array till rparn found
                    let temp = [];
                    i++;
                    for( ; i < arr.length -1 ; i++) {
                        if(arr[i].type == CHAR_TYPE.rparn) {
                            break;
                        } else {
                            temp.push(arr[i]);
                        }
                    };
                 //   i++;
                    bo.left = parsing(temp); // assign something
                    isLeftFound = true;
                }
                break;
            }
            case CHAR_TYPE.int: {
                if(isLeftFound){
                    bo.right = new Integer(arr[i].text );
                } else {
                    bo.left = new Integer(arr[i].text );
                    isLeftFound = true;
                }
                break;
            }
            case CHAR_TYPE.add:{
                bo.operation = OPERATION_TYPE.addition;
                break;
            }                
            case CHAR_TYPE.sub:{
                bo.operation = OPERATION_TYPE.subtraction;
                break;  
            }                          
        }
    }
    return bo;
}

let b = lexing('(12+3)-(1+2)');
b.forEach(v => console.log(v.toString()));
let bo = parsing(b);
console.log( bo.value);




