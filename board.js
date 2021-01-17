count=1
function play(a){
    if(count<=9){
        if(count%2==0){
            document.getElementById(a.id).innerHTML="O";
        }else{
            document.getElementById(a.id).innerHTML="X";
        }
        
        // document.getElementById(a.id).style.color = "blueviolet";
        // document.getElementById(a.id).style.transform = "1s all";
        document.getElementById(a.id).style.transition = "0.8s";
        document.getElementById(a.id).style.transitionProperty = "color";
        setTimeout(() => {
            document.getElementById(a.id).style.color = "white";
        }, 10);
        
        b=check_winner();
        setTimeout(() => {
            
            if(b!=null){
                alert(b+" won the game");
                setTimeout(() => {
                    // alert("Should You want to reset the game")
                    reset();    
                }, 2000);
                
            }
        }, 210);
        count++;

    }
    else{
        alert("Match Draw");
        reset();
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
        }
        return r1_o;
    }   
    if((r2_o!=""&& r2_t!="" && r2_th!="")&& (r2_o==r2_t && r2_t==r2_th && r2_o==r2_th)) {
        for(var i=4;i<=6;i++){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
        }
        return r2_o;
    }   
    if((r3_o!=""&& r3_t!="" && r3_th!="")&& (r3_o==r3_t && r3_t==r3_th && r3_o==r3_th)) {
        for(var i=7;i<=9;i++){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
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
        }
        return r1_o;
    }   
    if((r2_o!=""&& r2_t!="" && r2_th!="")&& (r2_o==r2_t && r2_t==r2_th && r2_o==r2_th)) {
        for(var i=2;i<=8;i=i+3){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
        }
        return r2_o;
    }   
    if((r3_o!=""&& r3_t!="" && r3_th!="")&& (r3_o==r3_t && r3_t==r3_th && r3_o==r3_th)) {
        for(var i=3;i<=9;i=i+3){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
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
    }
    return r1_o;
}   
    if((r2_o!=""&& r2_t!="" && r2_th!="")&& (r2_o==r2_t && r2_t==r2_th && r2_o==r2_th)) {
        for(var i=3;i<=7;i=i+2){
            document.getElementById("main_pos-"+i).style.backgroundColor="black";
            document.getElementById("main_pos-"+i).style.color="white";
        }
        return r2_o;
    }   

}

function reset(){
    
    for(var i=1;i<=9;i++){
        document.getElementById("main_pos-"+i).innerHTML="";
        document.getElementById("main_pos-"+i).style.backgroundColor="transparent";
        document.getElementById("main_pos-"+i).style.color="black";
    }
    count=1;

}