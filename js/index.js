$(function(){
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    });
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    });
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;
        $("#fullpage").css("margin-top",-num*clientH);
    });

    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
          num=0;
            return;
        }
        flag=false;
        $("#fullpage").css("margin-top",-num*clientH);
    });
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    });

    /*处理菜单*/
    var flag2=true;
    $(".menu-option").css("display","none");
    $(".line").click(function(){
        if(flag2){
            $(".menu-option").css("display","block");
            $(".box-tline").css({
                "transition":"transform 0.5s ease",
                "transform":"translate(0,5px) rotate(45deg)",
            });
            $(".box-bline").css({
                "transition":"transform 0.5s ease",
                "transform":"translate(0,-5px) rotate(-45deg)",
            });
            $(".menu-option .menubg").each(function(index,obj){
                $(obj).css({
                    "opacity":0,
                    "animation":"menu 0.5s "+0.2*index+"s forwards"
                })
            });
            flag2=false;
        }else{
            $(".box-tline").css({
                "transition":"transform 0.5s ease",
                "transform":"translate(0,0) rotate(0deg)",
            });
            $(".box-bline").css({
                "transition":"transform 0.5s ease",
                "transform":"translate(0,0) rotate(0deg)",
            });
            $(".menu-option .menubg").each(function(index,obj){
                $(obj).css({
                    "opacity":1,
                    "animation":"menu1 0.5s  "+(1.2-0.2*index)+"s forwards",
                })
            });
            setTimeout(function(){
                $(".menu-option").css("display","none");
            },1200);
            flag2=true;
        }
    })
    /*处理窗口改变后引发的问题*/
    $(window).resize(function(){
        var clientW=$(window).width();
        clientH=$(window).height();
        $(".menu-option").css("display","none");
        $("#fullpage").css({
            "margin-top":-num*clientH,
        })
        if(clientW>1000){
            $(".menu-option .menubg").css({
                animation:"none",
                opacity:0,
            });

            $(".box-tline ").css({
                "transition":"transform 0.5s ease",
                "transform":"translate(0,0) rotate(0deg)",
            });
            $(".box-bline").css({
                "transition":"transform 0.5s ease",
                "transform":"translate(0,0) rotate(0deg)",
            });
            flag2=true;
        }
    })



})