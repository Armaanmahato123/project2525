class Dustbin{
    constructor(x,y){
        var options ={
            isStatic: true,
            
        }
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 130;
        this.thickness = 10;
        this.angle = 0;
        this.image = loadImage("dustbingreen.png");
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
        this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options);
        Matter.Body.setAngle(this.leftBody,this.angle);
        this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options);
        Matter.Body.setAngle(this.rightBody,-1*this.angle);
        
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.bottomBody);
    }

    display(){
      var pos1 = this.leftBody.position;
      var pos2 = this.rightBody.position;
      var pos3 = this.bottomBody.position;
      /*push();
      translate(pos1.x, pos1.y);
      fill("blue");
      rectMode(CENTER);
      angleMode(RADIANS);
      rotate(this.angle);
      rect(0,0,this.thickness,this.height)
      pop();  
      
      push();
      translate(pos2.x, pos2.y);
      fill("blue");
      rectMode(CENTER);
      angleMode(RADIANS);
      rotate(-1*this.angle);
      rect(0,0,this.thickness,this.height)
      pop(); */
      
      push();
      translate(pos3.x, pos3.y);
      fill("blue");
      rectMode(CENTER);
      angleMode(RADIANS);
      image(this.image, 0 , - this.height, this.width, this.height);
     // rect(0,0,this.width,this.thickness)
      pop();  
    }
}