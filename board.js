var bg;
var shipImage;
var ship;
var alliens=[];
var drops=[];
var song;
//var slider;

function preload(){
    bg=loadImage("picture/space.jpg");
    shipImage=loadImage("picture/ship3.png");
    alienImage=loadImage("picture/skullship.png");
    song=loadSound("123.wav");
    
}
function prepareAlien(){
    var x = 0;
    //var w = 0;
    var y = 100;
     for(var i=0;i<24;i++){
        // for (var j=0;j<=6;j++){
         x = x + 70;
         
         if(i>1 && i%6==0){
             y = y +70;
             x=70;
         }
         alliens[i] =new Allien(x,y);
         //alliens[i].show();
       //alliens[i].move2();
            // console.log("ohfousyfgy9");
        // }
     }
console.log("Alien Array is ",alliens.length);
}
var yCounter = 1;
function printAlien(){
    
     for(var i=0;i<alliens.length;i++){
         if(alliens[0].x<=10){
             alienSpeedX = 1.5;
             alienSpeedY=0;
            yCounter = 1;
         }
         if(alliens[5].x>=580){
             
             if(yCounter<=50){
                 yCounter++;
                 alienSpeedY=5;
             }
             if(yCounter>=50){
             alienSpeedX=-1.5;
                 alienSpeedY = 0;
             }
         }
         
             alliens[i].show();
             alliens[i].move2();
         }
     
}
 function strike(){
for(j=0;j<alliens.length;j++){
      for(i=0;i<drops.length;i++)  {
            if(alliens[j].hits(drops[i])){
                console.log("hit");
                drops.splice(i,1);
                alliens.splice(j,1);
               // drops[i].removing();
            }
       }
    }
}
function setup(){
    createCanvas(600,600);
  //song.loop();
    ship=new Ship(shipImage);
    prepareAlien();
} 

function draw()  {
    background(bg);
    ship.printShip();
    printAlien();
    strike();
      
//        for(var i=0;i<alliens.length;i++){  
//     for(var j=0;j<alliens.length;j++){  
//             alliens[i].move2();  
//         }
//         }
    /*for(var i=0;i<=drops.length;i++){
        if(drops[i].toDelete){
            drops.splice(i,1);
        }
    }*/       

     for(var i=0;i<drops.length;i++){
   drops[i].show();    
    drops[i].move();  
         }
}
function keyPressed(){
    if(key===' '){
       var drop=new Drop(ship.x+36,ship.y+8);
        drops.push(drop);
    }
    if(keyCode===RIGHT_ARROW){
        ship.Rmove();
       //alliens.move2();
    }
    else if(keyCode===LEFT_ARROW){
        ship.Lmove();
    }
}




