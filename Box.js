class Box
{
    constructor(x,y,w,h)
    {
        var Options=
     {  
        restitution:1.0
     }
      this.body=Bodies.rectangle(x,y,w,h,Options);
      this.width=w;
      this.height=h;
      World.add(myworld, this.body);
    }
     display()
     {
       var angle=this.body.angle
     
       angleMode(RADIANS);
       
       push();
        
         translate(this.body.position.x, this.body.position.y)
         rotate(angle);
         rectMode(CENTER);
         rect(0, 0, this.width, this.height);

        pop();

     }
}