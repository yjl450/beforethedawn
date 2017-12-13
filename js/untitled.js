//    绘制图片坐标
    var X=0;
    var Y=0;
//    js部分
    var divObj=document.getElementById("image01");
    var moveFlag=false;
//区别moueseup与click的标志
    var clickFlag=false;
//    拖拽函数
    divObj.onmousedown=function(e){
        moveFlag=true;
        clickFlag=true;
        var clickEvent=window.event||e;
        var mwidth=clickEvent.clientX-divObj.offsetLeft;
        var mheight=clickEvent.clientY-divObj.offsetTop;
        document.onmousemove=function(e){
            clickFlag=false;
            var moveEvent=window.event||e;
            if(moveFlag){
                divObj.style.left=moveEvent.clientX-mwidth+"px";
                divObj.style.top=moveEvent.clientY-mheight+"px";
////              将鼠标坐标传给Canvas中的图像
                X=moveEvent.clientX-mwidth;
                Y=moveEvent.clientY-mheight;
////              下面四个条件为限制div以及图像的活动边界
                if(moveEvent.clientX<=mwidth){
                    divObj.style.left=0+"px";
                    X=0;
                }
                if(parseInt(divObj.style.left)+divObj.offsetWidth >=1000){
                    divObj.style.left=1000 - divObj.offsetWidth+"px";
                    X=1000 - divObj.offsetWidth;
                }
                if(moveEvent.clientY<=mheight){
                    divObj.style.top=0+"px";
                    Y=0;
                }
                if(parseInt(divObj.style.top)+divObj.offsetHeight>=500){
                    divObj.style.top=500-divObj.offsetHeight+"px";
                    Y=500-divObj.offsetHeight;
                }
                divObj.onmouseup=function(){
                    moveFlag=false;
                    if(clickFlag){
                        alert("点击生效");
                    }
                }
            }
        }
    };