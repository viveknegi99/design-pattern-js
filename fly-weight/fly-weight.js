class User{
    constructor(name){
        this.name = name;
    }
}

class User2{
    constructor(name){
        let getOrAdd = function(val) {
            let idx = User2.strings.indexOf( val );
            if( idx != -1){
                return idx;
            } else {
                User2.strings.push( val );
                return User2.strings.length -1;
            }
        }
        this.name = name.split(' ').map(getOrAdd);
    }
}
User2.strings = [];

let user1arr = [];
let user2arr = [];
user1arr.push(new User('abc def'));
user1arr.push(new User('abc def'));
user2arr.push(new User2('viv negi'));
user2arr.push(new User2('viv negi'))

console.log(user1arr);
console.log(user2arr, User2.strings);

