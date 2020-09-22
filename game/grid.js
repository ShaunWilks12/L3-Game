class Grid{
    constructor(x, y, w, h, c, v) { // all vars that it will use
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.v = v;
    }
     draw() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
     }
}

