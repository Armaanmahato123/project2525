class Ball{
    constructor(x,y,radius){
        var options ={
            isStatic: false,
            restitution: 0.2,
            friction: 0,
            density: 1.3
    
        }
        this.x = x;
        this.y = y;
        this.radius = radius
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
        World.add(world,this.body);
    }

    display(){
      var position = this.body.position;
      push();
      translate(position.x, position.y);
      imageMode(CENTER);
      image(this.image, 0 ,  0, this.radius, this.radius);
      pop();  
    }
}