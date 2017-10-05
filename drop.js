function Drop(x,y){
    this.x=x;
    this.y=y;
  /*  this.toDelete=false;
   
    this.removing=function(){
        this.toDelete=true;
    }*/
  
    this.show=function(){
        noStroke();
        fill(150,223  ,255);
        ellipse(this.x,this.y,6,6);
    }

    this.move=function(){
        this.y=this.y-8;
    }
 /*   this.hits=function(allien){
        if(this.width>allien.width){
            if(this.height<allien.height){
            return true;
            }
        }
        else {
            return false;
        }
           
    }*/
    }
