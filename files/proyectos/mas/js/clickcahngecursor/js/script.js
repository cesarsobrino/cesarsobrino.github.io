$("body").on("click", function() {



});
$(document).on('click', 'body *', function() {
    $("body").css("cursor", " url('../images/cb.png'), auto");
    setTimeout(function() {
        $("body").css("cursor", " url('../images/cw.png'), auto");
    }, 50);
});