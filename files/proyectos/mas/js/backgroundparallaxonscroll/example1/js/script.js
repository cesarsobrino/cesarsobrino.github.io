window.addEventListener('scroll',function(){
    var value=window.scrollY;
    value=value*0.2;
    $("body").css("background-position-y", "-"+value+"px");
   
})