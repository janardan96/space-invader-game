  function Allien(x,y){
      this.alienImage=alienImage;
      this.x=x;
      this.y=y;
     // this.speed=2;
      this.width=30;
      this.height=30;
     
        this.hits=function(drops){
        if(drops.y>this.y && drops.y<this.y+20 ){
            if (drops.x>this.x && drops.x<this.x+20){
                return true;
            }
        }
            return false;
    }
      this.show=function(){
        image(this.alienImage,this.x,this.y,this.width,this.height);  
      }
   /*   this.moveDown=function(){
         alienSpeedY=1;
      }*/
      
      this.move2=function(){
          
          this.y=this.y+alienSpeedY;
          this.x = this.x +alienSpeedX;
      }
      this.touchBottom=function(){
          if(this.y>=height-100){
              return true;
          }
          return false;
      }
  /*    this.moveLeft=function(){
        alienSpeedX=-1;
      }
      this.moveRight=function(){
         alienSpeedX=1;
      }*/
      }

      
