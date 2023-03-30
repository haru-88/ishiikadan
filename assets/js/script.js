/* AOS.js */
AOS.init({
  offset: 100,
  duration: 1300,
  easing: 'ease-out',
  once:false
});

$( function() {
  /* header スクロール後出現 */
  let height = $('header').offset().top;
  $(window).on('scroll', function() {
    if( $(this).scrollTop() > height ) {
      $('.header').addClass('_fixed');
    }else {
      $('.header').removeClass('_fixed');
    }
  });

  /* ハンバーガーメニュー */
  $('#js-btnHamburger').on('click', function(e) {
    e.preventDefault();
    $('.header').toggleClass('_open');
    return false;
  });

  $( '#js-overlay' ).on( 'click', function(e) {
    e.preventDefault();
    $('.header').removeClass('_open');
    return false;
  });


  /* スクロールトップ */
  $('a[href^="#"]').click(function() {     
    let header = $(".header").innerHeight();  
    let speed = 800;  
    let id = $(this).attr("href");  
    let target = $("#" == id ? "html" : id);  
    let position = $(target).offset().top - header; 
    if ("fixed" !== $(".header").css("position")) {
            position = $(target).offset().top;
          }
    if (0 > position) {
            position = 0;
    }
    $("html, body").animate( {
        scrollTop: position
    },
      speed
    );
  });

  /* modal-book */
  //modal 開く
  $('#js-open-btn').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('target');
    $(target).show();
    $('.header').removeClass('_open');
    $('body').addClass('no_scroll');

    return false;
  });
  //modal 閉じる
  $('#js-close-btn').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('target');
    $(target).hide();
    $('body').removeClass('no_scroll');

    return false;
  });

  /* modal 日付選択 flatpickr */
  flatpickr ('#book-date', {
    locale : 'ja', // 日本語用モジュールを適用
    dateFormat : 'Y.m.d（D）', // 2021.05.24（月）の形式で表示
    defaultDate : new Date("日時を選択してください"), // 入力エリアの初期値
    minDate: 'today',
    mode: 'range',
    disableMobile: true,
  });

  /* fv */
  var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './assets/img/mainbg01@2x.jpg'},
				{ src: './assets/img/mainbg02@2x.jpg'},
				{ src: './assets/img/mainbg03@2x.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './assets/img/mainbg01.jpg' },
				{ src: './assets/img/mainbg02.jpg' },
				{ src: './assets/img/mainbg03.jpg' }
			];
		};

//Vegas全体の設定
  $('#js-slider').vegas({
      overlay: false,//画像の上に網線やドットのオーバーレイパターン画像を指定。
      transition: 'blur',//切り替わりのアニメーション。
      transitionDuration: 1000,//切り替わりのアニメーション時間をミリ秒単位で設定
      delay: 8000,//スライド間の遅延をミリ秒単位で。
      animationDuration: 9000,//スライドアニメーション時間をミリ秒単位で設定
      animation: 'kenburnsUp',//スライドアニメーションの種類
      slides: responsiveImage,//画像設定を読む
      timer:false,// プログレスバーを非表示
    });


  /* news tab切り替え */
  $('.js-news-tab').on('click', function(e) {
    e.preventDefault();
  
    let target = $(this).data("target");
  
    $('.js-news-tab').removeClass('_active');
    $(this).addClass('_active');
  
    $('.news__list').removeClass('_active');
    $(target).addClass('_active');
  
    return false;
  });
})