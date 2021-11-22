var menu=true;

function mostrarmenu(params) {
    var wraper=$('.wrapper');
    if(menu){        
        wraper.css('clip-path','circle(75%)');
        $(".menuimg").attr("src","../images/xw.png");
        menu=false;
    }else{
        wraper.css('clip-path','circle(25px at calc(100% - 45px) 45px)');
        $(".menuimg").attr("src","../images/menuw.png");
        menu=true;
    }
   
}