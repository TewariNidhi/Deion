gameState = "play";

function preload(){
runner = loadAnimation("runner1 (1).png", "runner1 (2).png","runner1 (3).png", "runner1 (4).png",
"runner1 (5).png","runner1 (6).png", "runner1 (7).png", "runner1 (8).png"  )
brickwall = loadImage("brickwall.png");
}

function setup() {
 createCanvas(600,500);

 brickwall1 = createSprite(300,100,600,500);
 brickwall1.addImage(brickwall);
// brickwall1.velocityY = 5;
 brickwall1.scale = 5;


 runner1 = createSprite(300,440, 50,50);
 runner1.addAnimation("runner", runner);
 runner1.scale = 0.3;

 trash = new Trash(300,50,50,50, 2);

}

function draw() {
    background("white")
    if(gameState = "play"){
        if(brickwall1.y > 400){
            brickwall1.y = brickwall1.height/10 ;
        }
    }
   trash.moveDown();
    
    drawSprites();
    trash.display();
}
