$(document).ready(function(){

/* ======================================
    image slider - splash
    ===================================== */

    var x = 0;
    var imagesSL = ['splash-background.png','splash-background-2.jpg','splash-background-3.jpg'];


// forward click

    $('#sl-right').click(function(){
        if(x < imagesSL.length - 1 ){
            x++;
        }else{
            x=0;
        }

        $('#splash').css({"background-image":"url(/assets/images/"+imagesSL[x]+")"});


        /* ======================================
            navigation colour change hopefully
            ===================================== */
            // if imagesSL=[1]{
            //     $('.navbar-light').css({'color':'white'});
            // }

    });

    $('#sl-left').click(function(){
        if(x > 0){
            x--;
        }else{
            x=imagesSL.length-1;
        }

        $('#splash').css({"background-image":"url(/assets/images/"+imagesSL[x]+")"});

    });





    /* ======================================
    Tab navigation - styling buttons so that they toggle back and forth
    ===================================== */

    $('#diy-btn').click(function(){

        $('#diy-btn, #realwed-btn, #vendors-btn').removeClass('btn-tab-active');
        $(this).addClass("btn-tab-active");

        $('#diy-pane, #realwed-pane, #vendors-pane').hide();
        $('#diy-pane').show();

    });

    $('#realwed-btn').click(function(){

        $('#diy-btn, #realwed-btn, #vendors-btn').removeClass('btn-tab-active');
        $(this).addClass("btn-tab-active");

        $('#diy-pane, #realwed-pane, #vendors-pane').hide();
        $('#realwed-pane').show();

    });

    $('#vendors-btn').click(function(){

        $('#diy-btn, #realwed-btn, #vendors-btn').removeClass('btn-tab-active');
        $(this).addClass("btn-tab-active");

        $('#diy-pane, #realwed-pane, #vendors-pane').hide();
        $('#vendors-pane').show();

    });



    /* ======================================
        Filter Gallery - navigation
    ===================================== */


    // styled hover + active in css

    $('#all-btn').click(function(){
        // $('#all-btn, #jemma-btn, #kaela-btn, #sarah-btn').removeClass('active');
        // $(this).addClass("active");

        $('.all').hide();
        $('.all').show();

    });

    $('#jemma-btn').click(function(){
        // $('#all-btn, #jemma-btn, #kaela-btn, #sarah-btn').removeClass('active');
        // $(this).addClass("active");

        $('.all').hide();
        $('.jemma').show();

    });

    $('#kaela-btn').click(function(){
        // $('#all-btn, #jemma-btn, #kaela-btn, #sarah-btn').removeClass('active');
        // $(this).addClass("active");

        $('.all').hide();
        $('.kaela').show();

    });

    $('#sarah-btn').click(function(){
        // $('#all-btn, #jemma-btn, #kaela-btn, #sarah-btn').removeClass('active');
        // $(this).addClass("active");

        $('.all').hide();
        $('.sarah').show();

    });


/* ======================================
    shadow box
    ===================================== */


    var images = [];
    var imgIndex = 0;

    // Push all imgs into global images array
    $('.all img').each(function(){
        var imgSrc = $(this).attr('src').replace('/thumbs/','/large/');
        images.push(imgSrc);

    });

    // console.log(images);

    $('.all img').click(function(){

        var imgSrc = $(this).attr('src').replace('/thumbs/','/large/');
        $('#shadow-img').attr('src',imgSrc );

        imgIndex = $.inArray(imgSrc,images);

        // console.log(imgIndex);

        var marginTop = $(window).scrollTop();
        $('#shadow-box').css({"margin-top":marginTop});
        $(".shadow-box-all").show();

    });

    // arrows - next button
    $('#shadow-right').click(function(){

        if(imgIndex < 11){
            imgIndex++;
        }else{
            imgIndex=0;
        }

        $('#shadow-img').attr('src',images[imgIndex]);

    });

    $('#shadow-left').click(function(){

        if(imgIndex > 0){
            imgIndex--;
        }else{
            imgIndex = images.length - 1;
        }

        $('#shadow-img').attr('src',images[imgIndex]);

    });


    // close shadowboxx
    $('#shadow-close').click(function(){
        $('.shadow-box-all').hide();

    });

    $('#close-icon-shadow').click(function(){
        $('.shadow-box-all').hide();

    });



}); // END DOCUMENT READY
