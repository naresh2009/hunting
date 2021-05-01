var form, player, game;
var image;
//var score=0;
     
function preload(){
image=loadImage("  Ramayana1.jpg");
}




function setup() {
  createCanvas(displayWidth,displayHeight);
  form=new Form();
  
}

function draw() {
  background(image); 
 // Text("points" + score,displayWidth/2,dislayHeight/2);

 form.display();
  
  
} 
  

