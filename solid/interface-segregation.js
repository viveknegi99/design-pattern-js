var aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
      constructor (...args) {
        super(...args);
        mixins.forEach((mixin) => {
          copyProps(this,(new mixin));
        });
      }
    }
    let copyProps = (target, source) => {  // this function copies all properties and symbols, filtering out some special ones
      Object.getOwnPropertyNames(source)
        .concat(Object.getOwnPropertySymbols(source))
        .forEach((prop) => {
          if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        })
    };
    mixins.forEach((mixin) => {
      // outside constructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
      copyProps(base.prototype, mixin.prototype);
      copyProps(base, mixin);
    });
    return base;
  };

class Machine{
    print(){}
    scan(){}
    fax(){}
}
class Printer{
    constructor(){
        if( this.constructor === Printer){
      //      throw new Error('Printer is abstract class and cannot be instantitaled');
        }
    }
    print(){
        throw new Error('Print method is not implemented');
    }
}

class Scanner{
    constructor(){
        if( this.constructor === Scanner){
       //     throw new Error('Scanner is abstract class and cannot be instantitaled');
        }
    }
    scan(){
        throw new Error('Sccan method is not implemented');
    }
}

class PrintMachine extends Printer{
    print(){ console.log('I am printing machine');
    }
}

class ScanMachine extends Scanner{
    scan(){ console.log('I am scan machine');
    }
}

class PrintSacnMachine extends aggregation( Printer, Scanner ){
    scan(){
        console.log('I am scannig thorugh printscanmachine');
        
    }

    print(){
        console.log('I am printing thorugh printscanmachine');
        
    }
}

let psMachine = new PrintSacnMachine();

psMachine.scan();
psMachine.print();