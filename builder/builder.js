class Tag{
    constructor(tagName, text){
        this.tagName = tagName;
        this.text = text;
        this.childern = [];
    }

    toString(){
        let html = [];
        let indent = 1;        
        html.push( `<${this.tagName}> \n`);
        if( this.text ){
            html.push( `  ${this.text} \n`);
        }
        this.childern.forEach(c => {
            html.push( c.toString());
        })
        html.push(`</${this.tagName}>\n`);
        return html.join('');
    }
}

class HtmlBuilder{
    constructor( tagName ){
        this.rootName = tagName;
        this.root = new Tag( tagName );
    }

    addChild(tag){
        this.root.childern.push( tag );
    }

    addChildFly(tag){
        this.root.childern.push( tag );
        return this;
    }

    clear(){
        this.root = new Tag(this.rootName);
    }

    build(){
        return this.root;
    }
}

let builder = new HtmlBuilder('ul');
builder.addChild( new Tag('li', 'Vivek'));
builder.addChild( new Tag('li', 'Negi'));
let build = builder.build();
console.log(build.toString());
builder.clear();
builder.addChildFly( new Tag('li', 'Vivek')).addChildFly( new Tag('li', 'Negi'))
console.log(builder.build().toString());

let html = [];
let words = ['Vivek', 'Negi'];
html.push('<ul>\n');
words.forEach(w => {
    html.push(` <li>${w}</li>\n`);
})
html.push('</ul>');

console.log(html.join(''));


