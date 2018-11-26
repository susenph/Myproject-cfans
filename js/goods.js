var hts = document.querySelectorAll(".heart");
for(var ht of hts){
    ht.onmouseenter = function(){
        var ht = this;
        ht.className = "fa fa-heart text-dark";
    }
    ht.onmouseout = function(){
        var ht = this;
        ht.className = "fa fa-heart-o"
    }
}




