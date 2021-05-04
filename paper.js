class Paper {
    constructor(x, y,radius) {
      this.image = loadImage('Images/paper.png')
      var options = {
        isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':8
          
      }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.x=x;
      this.y=y;
      World.add(world, this.body);

    }
    display(){
      //imageMode(CENTER);
      //strokeWeight(4);
      //stroke("green");      
      image(this.image,this.x,this.y,this.radius,this.radius);
    }
   };
  