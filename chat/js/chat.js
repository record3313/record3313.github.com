$(document).ready(function(){

    $(".msg_view").mCustomScrollbar({
        theme:"dark-thick"
    });

    $(".side_menu").css("right","-270px");

    $(".btn_menu").on("click",menuToggle);
    $(".btn_close").on("click",close);

        function menuToggle(e){

            e.preventDefault();

            var target = $(this).next(".popup").children(".side_menu");

            if ( target.css("right") === "-270px") { 
                target.css("right","0"), 
                $(this).next(".popup").css({
                    "bottom":"0",
                    "left":"0",
                    "background-color":"rgba(0,0,0,0.75)",
                    "z-index":"300"
                });
            } else { 
                target.css("right","-270px"), 
                $(this).next(".popup").css({
                    "bottom":"auto",
                    "left":"auto",
                    "background-color":"rgba(0,0,0,0)",
                    "z-index":"-1"
                });
            };
        };

        function close(){

            $(this).parents(".side_menu").css({
                "right":"-270px"                
            });
            $(this).parents(".popup").css({
                "bottom":"auto",
                "left":"auto",
                "background-color":"rgba(0,0,0,0)",
                "z-index":"-1"
            });
        };
  
});
