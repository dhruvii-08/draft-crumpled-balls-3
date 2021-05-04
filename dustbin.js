class Dustbin {
    constructor(x, y, width, height) {
      
      var options = {
          isStatic: true
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.x=x;
      this.y=y;
      this.height = height;
      this.image = loadImage('Images/dustbingreen.png');	    
      World.add(world, this.body);

    }
    display(){
      
     // fill("white");
     // imageMode(CENTER);
      image(this.image,this.x,this.y,this.width, this.height);
    }
  };