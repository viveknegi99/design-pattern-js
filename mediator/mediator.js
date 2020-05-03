class Person {
    constructor(name) {
        this.name = name;
        this.chatRoom;
    }
    broadcast(msg) {
        this.chatRoom.broadcast(this, msg);
    }
    speakTo(person, msg) {
        this.chatRoom.speakTo(this, person, msg)
    }
    haveMsgFrom(person, msg) {
        console.log(`${this.name}: have msg from  ${person.name} says => ${msg}`);
        
    }
}
class ChatRoom {
    constructor() {
        this.persons = [];
    }
    add(person) {
        person.chatRoom = this;
        console.log(`${person.name} has joined to chat room.`);        
        this.persons.push(person);
        return this;
    }
    broadcast(sender, msg) {
        for(let receiver of this.persons) {
            if(sender !== receiver) {
                receiver.haveMsgFrom(sender, msg);
            }
        }
    }
    speakTo(sender, receiver, msg){
        let rec = this.persons.find( p => p === receiver );
        rec.haveMsgFrom(sender, msg);
    }

}

let cr = new ChatRoom();
let p1 = new Person('Vivek');
let p2 = new Person('Raj');
let p3 = new Person('Anu');

cr.add(p1).add(p2).add(p3);

p1.broadcast('Hello everyone how are you doing');
p3.speakTo(p2, 'Looking Good!');