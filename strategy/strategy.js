const FORMAT = Object.freeze({
    markup: 0,
    html: 1
})
class TextProcessor {
    constructor(text, format = FORMAT.markup) {
        this.format = format;
        this.text = text;
    }
    setText(text) { this.text = text;}
    setFromat(format) { this.format = format;}
    process(){
        // process text as per current format and return
        let result;
        switch(this.format) {
            case FORMAT.markup: 
                result = markupProcessor(this.text);
                break;
            case FORMAT.html: 
                result = htmlProcessor(this.text);
                break;
        }
        return result;
    }
}
function markupProcessor(text) { 
    let temp = [];
    text.forEach( val => {
        temp.push(`* ${val} \n`);
    })
    return temp.join('');
}
function htmlProcessor(text) {
    let temp = [];
    temp.push('<ul>\n');
    text.forEach( val => {
        temp.push(`  <li>${val}</li>\n`)
    })
    temp.push('</ul>');
    return temp.join('');
}

let text = ['hello', 'bye', 'good night'];

let tp = new TextProcessor(text);
console.log(tp.process());
tp.setFromat(FORMAT.html);
console.log(tp.process());