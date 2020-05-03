class VPromise { 
  constructor(cb) {
    this.approveHandlers = [];
    this.rejectHandlers = [];
    this._catchHandler;
    this.approve = this.approve.bind(this);
    this.reject = this.reject.bind(this);
    this.then = this.then.bind(this);
    this.catch = this.catch.bind(this);           
    cb(this.approve, this.reject);   
    
  }

  approve(val) {
    this.approveHandlers.forEach((cb) => {
      cb(val);
    });
  }

  reject(val) {
    if( val instanceof Error){       
        this._catchHandler( val );
    } else 
    this.rejectHandlers.forEach((cb) => {
      cb(val);
    });
  }

  then(cbA, cbR) {
    if (cbA) this.approveHandlers.push(cbA);
    if (cbR) this.rejectHandlers.push(cbR);
    return this;
  }

  catch( cb ) {
    this._catchHandler = cb;
  }
}

function x() {
  return new VPromise((res, rej) => {
    setTimeout(() => {
      console.log("doing some task asynchronously...");
      res("I am resolved");
    }, 0);
  });
}

x().then(
  (val) => console.log(`value received in resolve of then block ${val}`),
  (val) => console.log(`value received in reject of then block ${val}`)
);

x()
  .then(
    (val) =>
      console.log(`value received in resolve of first then block ${val}`),
    (val) => console.log(`value received in reject of first then block ${val}`)
  )
  .then(
    (val) =>
      console.log(`value received in resolve of second then block ${val}`),
    (val) => console.log(`value received in reject of second then block ${val}`)
  );

function y() {
  return new VPromise((res, rej) => {
    setTimeout(() => {
      console.log("doing some task asynchronously...");
      rej("I am rejected");
    }, 0);
  });
}

y().then(
  (val) => console.log(`value received in resolve of then block ${val}`),
  (val) => console.log(`value received in reject of then block ${val}`)
);

y()
  .then(
    (val) =>
      console.log(`value received in resolve of first then block ${val}`),
    (val) => console.log(`value received in reject of first then block ${val}`)
  )
  .then(
    (val) =>
      console.log(`value received in resolve of second then block ${val}`),
    (val) => console.log(`value received in reject of second then block ${val}`)
  );


function z() {
return new VPromise((res, rej) => {
    setTimeout(() => {
        try{
            console.log("doing some task asynchronously...");
            throw new Error('some error')
            rej("I am rejected");
        } catch( err ){
            rej( err)            
        }        
        }, 0);
   
    
});
}

z().then(
    (val) => console.log(`value received in resolve of then block ${val}`),
    (val) => console.log(`value received in reject of then block ${val}`)
  ).catch( val => console.log(`value received in catch ${ val }`) )