class Event {
    constructor(){
        this.handlers = new Map();
        this.ids = 0;
    }
    subscribe(cb){
        this.handlers.set(this.ids, cb);
        return this.ids++;
    }
    unsubscribe(id){
        this.handlers.delete(id);
    }
    emit(val){
        this.handlers.forEach((fn, id) => fn(val));
    }
}

let evt = new Event();
let id = evt.subscribe( val => console.log(`value reveived from event : ${val}`));
evt.emit(1000);
evt.emit(500);
evt.unsubscribe(id);
evt.emit(100);
