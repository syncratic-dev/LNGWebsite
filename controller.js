class Controller {
    constructor(x, y, sizeInner, sizeOuter)
    {
        this.x = x;
        this.origX = x;
        this.y = y;
        this.origY = y; 

        this.sizeInner = sizeInner;
        this.sizeOuter = sizeOuter;
        this.isGrabbed = false; 
    }

    show()
    {
        fill(0,0,255); 
        // Inner circle
        if (c.isGrabbed == true)
        {
            circle(mouseX, mouseY, this.sizeInner); 
        } else {
            circle(this.x, this.y, this.sizeInner); 
        }


        // Outer Circle
        noFill(); 
        stroke(100, 200, 100); 
        circle(this.origX, this.origY, this.sizeOuter); 

    }
}