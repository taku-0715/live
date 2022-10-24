$( function() {
   // results
   new Swiper( '.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 400,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      768: {
				spaceBetween: 24,
				width: 274,
      }
    }
  });

    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
      // スムーススクロールの処理を書く
      //  移動速度を指定(ミリ秒)。varとletは後から再代入できる。letは再宣言が不可能。constは定数。
      let speed = 300;
      // dhrefで指定されたidを取得
      let id = $(this).attr("href");
      //  idの値が#のみだったらターゲットをhtmlタグにしてトップへ
      let target = $("#" == id ? "html" : id);
      //  頁のトップを基準にターゲットの位置を取得
      let position = $(target).offset().top;
      //  ターゲットの位置までspeedの速度で移動
      $("html, body").animate(
        {
          scrollTop: position - $( '#js-header' ).outerHeight()
        },
        speed
      );
      return false;
    });

    // faq
    $( '.js-faq' ).on( 'click', function() {
      $( this ).find( '.js-faqA' ).stop().slideToggle( 300 );
      $( this ).toggleClass( 'add-active' );
    });

    //drawer
    $('.drawer').drawer();

    //aタグ無効	
    $('.link-none').click(function() { return false; });


});