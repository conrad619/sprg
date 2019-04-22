$(document).ready(function(){
    $('.scroll').on('click',function(e) {
      e.preventDefault();

      var offset = 0;
      var target = this.hash;
      if ($(this).data('offset') != undefined) offset = $(this).data('offset');
      $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
      }, 500, 'swing', function() {
        // window.location.hash = target;
      });
    });
    
    $('.page-network-collapse').click(function () {
      // do something…
      var that = $('img',this);
      var thatp = $(this);
      $('.page-network .collapse').collapse('hide');
      $(".collapse").on('shown.bs.collapse', function(){


        $('.page-network-collapse img').addClass('flipped');
        that.removeClass('flipped');

        var attrid = $(thatp).attr("data-scroll-id");

        $('html, body').animate({
        scrollTop: $("#"+attrid).offset().top - 100 //scroll to net id
        },0);


      });

      $(".collapse").on('hidden.bs.collapse', function(){
        that.addClass('flipped');
      });

    });

    $('.nav-item').click(function(){
      $('.navbar-collapse').removeClass('show');
      $('.hamburger').toggleClass('is-active');
    });


    $('.hamburger').click(function () {
      // do something…
      $('.hamburger').toggleClass('is-active');
    });

    function isMobileWidth() {
      return $('#mobile-indicator').is(':visible');
    }

    if(isMobileWidth()){
      $(".nav-link").attr("data-offset",parseInt($(".nav-link").attr("data-offset"))+50)
    }

    var hash = window.location.hash;

    try{
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 150 // Means Less header height
      },400);
    }catch(err){

    }
    function resizeExtend(){

      var box = $('.page-csr .page-csr-box').height();
      $('.page-csr .extended-content-container .extended-content').css('height',(450+box)+'px');

    }

    $(window).resize(function(){
      resizeExtend();
    });

    resizeExtend();

    $("#contactForm").submit(function(e) {
      
      e.preventDefault(); // avoid to execute the actual submit of the form.

      var form = $(this);
      var url = 'mail.php';

      $.ajax({
             type: "POST",
             url: url,
             data: form.serialize(), // serializes the form's elements.
             success: function(data)
             {
                 // alert(data); // show response from the php script.
                 $("#contactForm")[0].reset();
                 window.location = 'thank.html';
             }
           });


  });


});
