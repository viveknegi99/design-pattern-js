class Iterator {
    constructor(items){
        this.items = items;
        this.idx = 0;
    }
    previous() {
        if( this.idx > 0 ) {
            return this.items[--this.idx]; 
        }
    }
    next() {
        return this.items[this.idx++];
    }
    first(){
        this.reset();
        return this.next();
    }
    hasNext() {
        return this.idx < this.items.length;  
    }
    reset(){ this.idx = 0}
    every(cb){
        this.reset();
        for(; this.hasNext(); ) {
            cb(this.next());
        }
    }
}

let arr = ['vivek', 22, {a:1}];
let itr = new Iterator(arr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.previous());
console.log(itr.next());
console.log(itr.hasNext());
console.log(itr.next());
console.log(itr.hasNext());
console.log(itr.next());
// itr.reset();
itr.every((val)=>{console.log(val);
})