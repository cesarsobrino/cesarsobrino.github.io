
$(window).load(function() {
    var wheight=$(window).height();
    $("#contenidoprincipal").css("height",wheight+"px");
  });


  $(window).scroll(function(){
    var activardiv=document.querySelectorAll('.activard');
    var activarmenu=document.querySelectorAll('.menus');
    var distance = $(window).scrollTop();
     for (var i = 0; i < activardiv.length; i++) {
        
         var wheight= $(window).height();
         var revealtop= activardiv[i].offsetTop;
        
        //console.log("["+i+"]top:"+revealtop+",y:"+distance);
        if(revealtop<= distance+800){
          
          $('.navbar-nav a.active').removeClass('active');
          activarmenu[i].classList.add('active');
        }else{
          activarmenu[i].classList.remove('active');
        }
 
        //  
   

         
         
     }

 });
 