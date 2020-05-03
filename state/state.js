class Switch {
    constructor(){
        this.state = new OffState();
    }
    on() {
        this.state.on(this);
    }
    off() {
        this.state.off(this);
    }
}
class State {
    constructor(){
        if( this.constructor == State) { throw new Error('this is abstract class')}
    }
    on(){console.log('switch is already on');
    }
    off(){console.log('switch is already off');
    }
}
class OnState extends State {
    constructor(){
        super();
    }
    off(sw) {
        console.log('switching off!!!');        
        sw.state = new OffState();
    }
}
class OffState extends State {
    constructor(){
        super();
    }
    on(sw) {
        console.log('switching on!!!');
        
        sw.state = new OnState();
    }    
}

let sw = new Switch();
sw.on();
sw.on();
sw.off();
sw.on();