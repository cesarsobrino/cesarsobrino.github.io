
function showmenu() {
    document.getElementById("id_items").classList.toggle("show");
  }

  $(window).scroll(function(){

        
         var wheight= $(window).height();

         var top  = window.pageYOffset || document.documentElement.scrollTop;
         if (top >0){
          $(".menu").css("transition","0.5s");
           $(".menu").css("height","70px");
          $(".menu").css("background-color","black");
          $(".logo").attr("src","../images/cesar-tr-maxlarge-white.png");
         }else{
          $(".menu").css("transition","0.5s");
          $(".menu").css("height","130px");
          $(".menu").css("background-color","transparent");
          $(".logo").attr("src","../images/cesar-tr-maxlarge-black.png");
         }
         console.log(top);  
     

 });