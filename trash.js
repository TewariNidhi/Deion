class Trash {
    constructor(x, y, width, height, vy){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("trashby.jpg");
        this.vy = vy
    }
    display(){
        image(this.image, this.x,this.y,this.width,this.height);
    }
    moveDown(){
        this.y = this.y + this.vy;
    }
}