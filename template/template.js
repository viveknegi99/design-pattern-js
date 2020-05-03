class Game {
    constructor(players){
        this.players = players;
        this.hasWinner = false;
        this.winningPlayer ;
    }
    run() {
        while(!this.hasWinner) {
            this.play();
        }
        console.log(`Winner is ${this.winningPlayer.name}`);        
    }    
    play(){}
}
class Chess extends Game {
    constructor(players) {
        super(players);
        this.numberOfTurns = 5;
    }
    play(){
        if( !this.numberOfTurns) {
            this.winningPlayer = this.players[0];
            this.hasWinner = true;
        } else {
            console.log(`Game between ${this.players[0].name} and ${this.players[1].name} is still in progress..`);
            this.numberOfTurns--;
        }
    }
}
class Player {
    constructor(name) { this.name = name;}
}

let p1 = new Player('Raj');
let p2 = new Player('Ram');
let c = new Chess([p1, p2]);
c.run();