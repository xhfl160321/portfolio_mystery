(function(){
  
    // 이미지 호버 시 컨텐츠
    $(".p2ImgCon").hide();
    
    $(".p2Img > ul > li").hover(function(){
      $(this).find(".p2ImgCon").stop().slideDown(1300);
    }, function(){
      $(this).find(".p2ImgCon").stop().slideUp(1300);
    });
  })(jQuery);