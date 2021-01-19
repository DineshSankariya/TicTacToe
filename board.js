var letter=0;
var count=1;
var b=null;

function play(a){
    // var b=null; 
    if(count<=9){
        
        if(count%2!=0){
            document.getElementById(a.id).innerHTML="X";
        }else{
            document.getElementById(a.id).innerHTML="O";
        }
        
        
      
        document.getElementById(a.id).style.transition = "0.8s";
        document.getElementById(a.id).style.transitionProperty = "color";        
        document.getElementById(a.id).style.color = "white";
           
       
        
        b=check_winner(); 
        console.log("b = "+b+" count = "+count);
            
                
           
            if(b!=null){        
                if(b=="X"){
                    setTimeout(() => {
                        alert("Player-1 won the game");
                        setTimeout(() => {
                            reset();
                        }, 700);
                    }, 1000);
                   
                    
                }else{
                    setTimeout(() => {
                        alert("Player-2 won the game");
                        setTimeout(() => {
                            reset();
                        }, 700);
                        
                    }, 1000);                                       
                }                                                                                                                                 
                
            }
            else if(count>=9 && b == null){
                setTimeout(() => {
                    alert("Match Draw\n Play Again");
                    setTimeout(() => {
                        reset();
                    }, 700);
                }, 1000);
                
                
            }
            count=count+1;
        
}
}







function check_winner(){

    var h = check_hor();
    var v = check_ver();
    var d = check_diag();
    if (h != null){
        return h;
    }
    else if(v!=null){
        return v;
    }else if(d!=null){
        return d;
    }

    return null;

}

function check_hor() {
    
    var r1_o=document.getElementById("main_pos-1").innerHTML;
    var r1_t=document.getElementById("main_pos-2").innerHTML;
   var r1_th=document.getElementById("main_pos-3").innerHTML;
    
    var r2_o=document.getElementById("main_pos-4").innerHTML;
    var r2_t=document.getElementById("main_pos-5").innerHTML;
   var r2_th=document.getElementById("main_pos-6").innerHTML;
    
    var r3_o=document.getElementById("main_pos-7").innerHTML;
    var r3_t=document.getElementById("main_pos-8").innerHTML;
    var r3_th=document.getElementById("main_pos-9").innerHTML;
    
    if((r1_o!=""&& r1_t!="" && r1_th!="")&& (r1_o==r1_t && r1_t==r1_th && r1_o==r1_th)) {
     
        for(var i=1;i<=3;i++){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
            // document.getElementById("main_pos-"+i).style.borderColor="black";
        }
        return r1_o;
    }   
    if((r2_o!=""&& r2_t!="" && r2_th!="")&& (r2_o==r2_t && r2_t==r2_th && r2_o==r2_th)) {
        for(var i=4;i<=6;i++){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
            // document.getElementById("main_pos-"+i).style.borderColor="black";
        }
        return r2_o;
    }   
    if((r3_o!=""&& r3_t!="" && r3_th!="")&& (r3_o==r3_t && r3_t==r3_th && r3_o==r3_th)) {
        for(var i=7;i<=9;i++){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
            // document.getElementById("main_pos-"+i).style.borderColor="black";
        }
        return r3_o;
    }   

}

function check_ver() {
    
    var r1_o=document.getElementById("main_pos-1").innerHTML;
    var r1_t=document.getElementById("main_pos-4").innerHTML;
   var r1_th=document.getElementById("main_pos-7").innerHTML;
    
    var r2_o=document.getElementById("main_pos-2").innerHTML;
    var r2_t=document.getElementById("main_pos-5").innerHTML;
   var r2_th=document.getElementById("main_pos-8").innerHTML;
    
    var r3_o=document.getElementById("main_pos-3").innerHTML;
    var r3_t=document.getElementById("main_pos-6").innerHTML;
    var r3_th=document.getElementById("main_pos-9").innerHTML;
    
    if((r1_o!=""&& r1_t!="" && r1_th!="")&& (r1_o==r1_t && r1_t==r1_th && r1_o==r1_th)) {
     
        for(var i=1;i<=7;i=i+3){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
            // document.getElementById("main_pos-"+i).style.borderColor="black";
        }
        return r1_o;
    }   
    if((r2_o!=""&& r2_t!="" && r2_th!="")&& (r2_o==r2_t && r2_t==r2_th && r2_o==r2_th)) {
        for(var i=2;i<=8;i=i+3){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
            // document.getElementById("main_pos-"+i).style.borderColor="black";
        }
        return r2_o;
    }   
    if((r3_o!=""&& r3_t!="" && r3_th!="")&& (r3_o==r3_t && r3_t==r3_th && r3_o==r3_th)) {
        for(var i=3;i<=9;i=i+3){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
            // document.getElementById("main_pos-"+i).style.borderColor="black";
        }
        return r3_o;
    }   

}


function check_diag(){

    var r1_o=document.getElementById("main_pos-1").innerHTML;
    var r1_t=document.getElementById("main_pos-5").innerHTML;
   var r1_th=document.getElementById("main_pos-9").innerHTML;
    
    var r2_o=document.getElementById("main_pos-3").innerHTML;
    var r2_t=document.getElementById("main_pos-5").innerHTML;
   var r2_th=document.getElementById("main_pos-7").innerHTML;
    
   if((r1_o!=""&& r1_t!="" && r1_th!="")&& (r1_o==r1_t && r1_t==r1_th && r1_o==r1_th)) {
  
    for(var i=1;i<=9;i=i+4){
        document.getElementById("main_pos-"+i).style.backgroundColor="black";
        document.getElementById("main_pos-"+i).style.color="white";
        // document.getElementById("main_pos-"+i).style.borderColor="black";
    }
    return r1_o;
}   
    if((r2_o!=""&& r2_t!="" && r2_th!="")&& (r2_o==r2_t && r2_t==r2_th && r2_o==r2_th)) {
        for(var i=3;i<=7;i=i+2){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
            // document.getElementById("main_pos-"+i).style.borderColor="black";
        }
        return r2_o;
    }   

}

function reset(){
    
    for(var i=1;i<=9;i++){
        document.getElementById("main_pos-"+i).innerHTML="";
        document.getElementById("main_pos-"+i).style.backgroundColor="transparent";
        document.getElementById("main_pos-"+i).style.color="black";
        // document.getElementById("main_pos-"+i).style.borderColor="rgb(250, 250, 250)";
    }
    count=1;

}