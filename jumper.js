class Jumper {

    constructor(pos, size, velocity)
    {
        this.x = pos.x
        this.y = pos.y 
        this.size = size; 
        this.velocity = velocity; 
    }

    show()
    {
        fill(255, 0, 0); 
        circle(this.x, this.y, this.size)
    }

    addVelocity(velocity)
    {
        this.velocity.x += velocity.x * -0.1;
        this.velocity.y += velocity.y * -0.1;  
    }

    update()
    {
        this.x += this.velocity.x;
        this.velocity.y += g; 
        this.y += this.velocity.y;    
        //console.log("Updating Velocity" + this.velocity); 
        //console.log(this.y)
        if (this.y >= 600)
            {
                this.y = 600
                this.velocity.y = 0; 
                this.velocity.x = 0; 
            }
        if (this.x >= 400)
        {
            this.x = 400; 
            this.velocity.x = 0; 
        }
        if (this.x <=0)
        {
            this.x = 0; 
            this.velocity.x = 0; 
        }
    }
}