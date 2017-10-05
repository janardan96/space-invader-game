function Ship(shipImage){
    this.x=width-78;
    this.y=height-100;
    this.width=70;
    this.height= 80;
    this.velocity=0;
    this.shipImage=shipImage;
    this.printShip=function(){
        image(this.shipImage,this.x,this.y,this.width,this.height);
    }
    this.Rmove=function(){
     this.x=this.x+10;   
    }
    this.Lmove=function(){ 
        this.x=this.x-10;
    }
}