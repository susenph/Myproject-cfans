/******** ¹ºÎï´ü°´Å¥ **********/
var p = document.querySelector("div.goods_details>p.bag");
p.onmouseenter = function(){
    var p = this;
    p.style.background = "#333";
}
p.onmouseout = function(){
    var p = this;
    p.style.background = "";
}
/******** ³ß´çÑ¡Ôñ¿ò **********/
var aChoose = document.querySelector("header>div.goods_details>div.size>a");
aChoose.onclick = function(){
    var a = this;
    var select = document.querySelector("select.size_chs");
    var reg = /hidden/;
    var str = select.className;
    if(reg.test(str)){
        a.children[0].className = "fa fa-chevron-up fa-2x";
        select.className = "size_chs";
    }else{
        a.children[0].className = "fa fa-chevron-down fa-2x";
        select.className = "size_chs hidden";
    }
}
/********** ÂÖ²¥Í¼ ************/


/********** ÐÅÏ¢¡ª¡ªÊÖ·çÇÙ ************/
$(".accordion").on("click",".title",e=>
    $(e.target).next(".content").toggleClass("in")
        .siblings(".content").removeClass("in")
);






