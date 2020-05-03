let RELATION = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2
})

class Person{
    constructor(name){ this.name = name}
}

class RelationshipBrowser{
    constructor(relations){
        this.relations = relations;
    }

    findAllChildOf( parent ){
        let rel =  this.relations.filter( rel => {
          //  console.log(rel);
            if( parent.name === rel.from.name && rel.relation === RELATION.parent){
             //   console.log(rel);
                
                return true;
            }
        })
        return rel.map(v => v.to.name);
    }
}

class Relationship {
    constructor(){
        this.relationArr = [];
    }
    addRealtion(per1, per2, rel ){
        this.relationArr.push({
            from: per1,
            to: per2,
            relation: rel
        })
    }
}

let p1 = new Person('vivek');
let p2 = new Person('ram');
let p3 = new Person('jhon');

let r = new Relationship();
r.addRealtion(p1, p2, RELATION.parent );
r.addRealtion(p1, p3, RELATION.parent );

let rb = new RelationshipBrowser( r.relationArr );
let childs = rb.findAllChildOf(p1);
console.log(childs);
