$(function() {



    /* Scroll to Block Abot Me
    ====================================*/

    $("#about__me").on("click",function (e) {
    	// body...
    	e.preventDefault();
    	var aboutMe = $(".about").offset().top;
    	$("html, body").animate({
    		scrollTop:aboutMe
    	}, 500);
    })

  /*    Scroll to Block Service */
    $("#service").on("click",function (e) {
    	// body...
    	e.preventDefault();
    	var service = $("#services").offset().top;
    	$("html, body").animate({
    		scrollTop:service
    	}, 1300);
    }) 
    	/* Scroll to Block My Work*/
    $("#my__work").on("click",function (e) {
    	// body...
    	e.preventDefault();
    	var myWork = $(".my__work").offset().top;
    	$("html, body").animate({
    		scrollTop:myWork
    	}, 1000);
    })
    	/*   Scroll to Block Contact Me   */
    $("#contact").on("click",function (e) {
    	// body...
    	e.preventDefault();
    	var contact = $(".contact").offset().top;
    	$("html, body").animate({
    		scrollTop:contact
    	}, 1500);
    })


    /* Fixed Header*/
    var headerH = 100/*$("#intro").height()*/;
    console.log(headerH);

    $(document).on("scroll", function () {
    	// body...
    	var documentScroll = $(this).scrollTop();
    	
    	
    })













});
