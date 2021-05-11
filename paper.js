 class paper
{
  constructor (x,y,r)
{
  var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
  }
             
this.x=x;
this.y=y;
this.r=r;
this.image = loadImage ("paper.png");
this.body=Bodies.circle(this.x,this.y,thisr/2,options)
World.add(world,this.body);
}
}


display()
{
  var paperpo=this.body.position;

  Push()
  translate(paperpos.x,paperpos.y);
  rectMode(CENTER)
strokeWeight(3);
fill(255,0,255)
ellipse(0,0,this.r,this.r);
pop()
}