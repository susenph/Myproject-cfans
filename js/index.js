//header背景图
/*function bgclac(){
    var n = Math.floor(Math.random() * 10);
    header_bg.style.backgroundImage = "";
    if(n === 0){
        header_bg.style.backgroundImage = "url(img/headBg/bg1.jpg)";
    }else if(n === 1){
        header_bg.style.backgroundImage = "url(img/headBg/bg2.jpg)";
    }else if(n === 2){
        header_bg.style.backgroundImage = "url(img/headBg/bg3.jpg)";
    }else if(n === 3){
        header_bg.style.backgroundImage = "url(img/headBg/bg4.jpg)";
    }else if(n === 4){
        header_bg.style.backgroundImage = "url(img/headBg/bg5.jpg)";
    }else if(n === 5){
        header_bg.style.backgroundImage = "url(img/headBg/bg6.jpg)";
    }else if(n === 6){
        header_bg.style.backgroundImage = "url(img/headBg/bg7.jpg)";
    }else if(n === 7){
        header_bg.style.backgroundImage = "url(img/headBg/bg8.jpg)";
    }else if(n === 8){
        header_bg.style.backgroundImage = "url(img/headBg/bg9.jpg)";
    }else if(n === 9){
        header_bg.style.backgroundImage = "url(img/headBg/bg10.jpg)";
    }
}
bgclac();
setInterval(bgclac, 3000);*/
//body_three 的左右按钮
var aLeft = document.querySelectorAll("div.body_three>a.up_btn")[0];
var aRight = document.querySelectorAll("div.body_three>a.up_btn")[1];
aLeft.onclick = function(e){
    e.preventDefault();
    var lisHidden = document.querySelector("div.body_three>ul").getElementsByClassName("hidden");
    var lis = document.querySelectorAll("div.body_three>ul>li");
    //console.log(lisHidden);
    var list = [];
    for(li of lisHidden){
        var n = parseInt(li.getAttribute("move_nub"));
        n ++;
        if(n > 9){
            n = 0;
        }
        //lis[n].className = "hidden";
        list = list.concat(n);
    }
    for(var i = 0;i < lis.length;i ++){
        lis[i].className = "";
    }
    //console.log(lis);
    for(n of list){
        lis[n].className = "hidden";
    }
    //console.log(list);
}
aRight.onclick = function(e){
    e.preventDefault();
    var lisHidden = document.querySelector("div.body_three>ul").getElementsByClassName("hidden");
    var lis = document.querySelectorAll("div.body_three>ul>li");
    var list = [];
    for(li of lisHidden){
        var n = parseInt(li.getAttribute("move_nub"));
        n --;
        if(n < 0){
            n = 9;
        }
        list = list.concat(n);
    }
    for(var i = 0;i < lis.length;i ++){
        lis[i].className = "";
    }
    for(n of list){
        lis[n].className = "hidden";
    }
}














