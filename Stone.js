class Stone{
	constructor(x,y,r)
	{
		var options ={
			restitution: 0.8,
			friction:0.9,
			density:12
		}
        this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(x,y,100,150, options)
        this.width = 100;
        this.height = 150;
		World.add(world, this.body);}
        display(){
            var pos=this.body.position;	
            var angle = this.body.angle	;
			push()
			translate(pos.x, pos.y);
            rotate(angle)
			rectMode(CENTER);
			strokeWeight(2);
			stroke("green");
			fill("red");
            rect(0,0,this.width,this.height)
			pop()
        }
    }