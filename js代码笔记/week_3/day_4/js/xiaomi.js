var _timer;  
HTMLElement.prototype.css=function(_css){
    for(let _k in _css){
        this.style[_k]=_css[_k];
    }
} 
function move(){
    var _img=document.getElementById("p1");
    _timer=window.setInterval(function(){
        _img.style.left=_img.offsetLeft-1535+"px";
       
        if(_img.offsetLeft<=-7670){
            _img.style.left=0;
        }
      
    },2000)




    // var i=1;
    // var _img=document.getElementById("pp1");
    // _timer=setInterval(function(){
        
    //     i++;
    //         _img.src="images/0"+[i]+".jpg";
            
    //         if(i>=5){
    //             i=1;
    //         }
        
        
        
    //},2000);
    
}

function nav(){
    var _div=document.createElement("div");
    var _nav=document.getElementsByTagName("body")[0].children[1];
    var _li=document.getElementsByTagName("body")[0].children[1].children[1].children[0];
    //console.log(_nav);
    _nav.appendChild(_div);
    _div.css({
        width:"1535px",
        height:"300px",
        background:"red",
        position:"absolute",
        top:"175px",
        zIndex:6,
        display:"none"
    });
    // for(let i=0;i<_li.length;i++){
        //_navs[i].style.background="red";
        _li.onmouseover=function(){
            _div.style.display="block";
        }
        _li.onmouseout=function(){
            _div.style.display="none";
        }
    //    }
    var _ul=document.createElement("ul");
    _div.appendChild(_ul);
    _ul.css({
        width:"1535px",
        height:"300px",
        background:"green",
        position:"absolute",
        left:"-200px"
       
    });
    var _ul_li1=document.createElement("li");
    _ul.appendChild(_ul_li1);
    var _ul_li2=document.createElement("li");
    _ul.appendChild(_ul_li2);
    var _ul_li3=document.createElement("li");
    _ul.appendChild(_ul_li3);
    var _ul_li4=document.createElement("li");
    _ul.appendChild(_ul_li4);
    var _ul_li5=document.createElement("li");
    _ul.appendChild(_ul_li5);
    var _ul_li6=document.createElement("li");
    _ul.appendChild(_ul_li6);
    for(let i=0;i<_div.children[0].children.length;i++){
        _div.children[0].children[i].css({
            display:"block",
            width:"255px",
            height:"300px",
            float:"left",
            background:"pink",
            borderRight:"1px solid #000"
        });    
    }
    _ul_li6.style.borderRight="none";
    
}


// function move2(){
//     var _img=document.getElementById("p1");
//     for(var i=1;i<=5;i++){
        
//     if(_img.offsetLeft<=-1535*i){
//         window.clearInterval(_timer);
//     }
//     _img.offsetLeft-=1;
// }
//     //window.setTimeout("move()",1000);
// }
function navs(){
    var _navs=document.getElementById("navs").children[0].children;
   for(let i=0;i<_navs.length;i++){
    //_navs[i].style.background="red";
    _navs[i].onmouseover=function(){
        _navs[i].style.background="#ff6700";
    }
    _navs[i].onmouseout=function(){
        _navs[i].style.background="rgba(0,0,0,0)";
    }
   }



}
function picture(){
    
    //var _img=document.getElementById("pp1");
    var _img=document.getElementById("p1");
    _img.onmouseover=function(){
        window.clearInterval(_timer);
    }
    _img.onmouseout=function(){
        move();
    }
   
}
function main(){
picture();
nav();
   // window.setTimeout("move()",2000);
    move();
    navs();
    
}
window.onload=main;