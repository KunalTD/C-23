class Ground
{
  constructor(x, y, w, h)
  {
    var groundOptions=
    {
      isStatic:true
    }
    this.body=Bodies.rectangle(x ,y, w, h, groundOptions);
    this.width=w;
    this.height=h;
    World.add(myworld, this.body);
  }

 display()
 {
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
 }
}