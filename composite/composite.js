class GraphicObject {
  constructor(name = "Group") {
    this.children = [];
    this.name = name;
  }

  print(buffer, depth) {
    buffer.push("\t".repeat(depth));
   // if (depth > 0) buffer.push(" ");
    if (this.color) buffer.push(this.color + " ");
    buffer.push(this.name);
    buffer.push("\n");

    for (let child of this.children) child.print(buffer, depth + 1);
  }

  toString() {
    let buffer = [];
    this.print(buffer, 0);
    return buffer.join("");
  }
}

class Circle extends GraphicObject {
  constructor(color) {
    super("Circle");
    this.color = color;
  }
}

class Square extends GraphicObject {
  constructor(color) {
    super("Square");
    this.color = color;
  }
}

let go = new GraphicObject();
go.children.push(new Circle("red"));
go.children.push(new Square("blue"));

let go1 = new GraphicObject();
go1.name = "Sub Group";

let go2 = new GraphicObject();
go2.name = "Sub Group Two";
go2.children.push(new Circle("Pink"));
go2.children.push(new Square("Yellow"));
go1.children.push(go2);

go1.children.push(new Circle("Orange"));
go1.children.push(new Square("black"));

go.children.push(go1);
console.log(go.toString());
