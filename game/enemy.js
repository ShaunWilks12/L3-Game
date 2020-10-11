class Enemy {
    constructor(x, y, w, h, c, xSpeed) { // all vars that it will use
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
    }

    draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
     }
    
    move(){
        this.x -= this.xSpeed;
    }
    
    outOfBounds(){
        return this.x < 0;
    }
}
