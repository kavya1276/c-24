class Bird{
    constructor(x,y){
    var options={
        restitution:1,
        friction:0.3,
        density :1.5
    }
    
    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world,this.body)
    }
    display(){
    var pos = this.body.position;
    pos.x=mouseX
    pos.y=mouseY
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y)
    //angleMode(RADIANS)
    rotate(angle)
    rectMode(CENTER);
    strokeWeight(3)
    stroke("black")
    fill("green");
    
    rect(0,0,this.width,this.height)
    pop();
    }
    }