 $(document).ready(function () {
     var $bodyWidth = $(document.body).width(),
         isPhone = $bodyWidth < 768;
     $('.main img').lazyload({
        //  threshold: 100,
         placeholder: "/xinmizj/static/images/loading.svg",
         effects: "fadeIn"
     });
     var mySwiper2 = new Swiper('#swiper-container2', {
         autoplay: 3000,
         //   loop: true,
         slidesPerView: isPhone?1:4,
         resizeReInit: true,
         pagination: isPhone ?'.swiper-pagination2':null,
         
     });
     $('.swiper-button-next').click(function (e) {
         e.preventDefault();
         mySwiper2.swipeNext();
     })
     $('.swiper-button-prev').click(function (e) {
         e.preventDefault();
         mySwiper2.swipePrev();
     })

     var mySwiper3 = new Swiper('#swiper-container3', {
         //  autoplay: 3000,
         //   loop: true,
         //  loopedSlides: 1,
         //   slidesPerView: 1,
         // 如果需要分页器
         pagination: '.swiper-pagination3',
     });

     $('.swiper-button-next3').click(function (e) {
         e.preventDefault();
         mySwiper3.swipeNext();
     })
     $('.swiper-button-prev3').click(function (e) {
         e.preventDefault();
         mySwiper3.swipePrev();
     })

     var mySwiper4 = new Swiper('#swiper-container4', {

         autoplay: 3000,
         //  loop: true,
         //  loopedSlides: 1,
         //  slidesPerView: 1,
         // 如果需要分页器
         //  pagination: '.swiper-pagination4',

     });
     $('.swiper-button-next4').click(function (e) {
         e.preventDefault();
         mySwiper4.swipeNext();
     });
     $('.swiper-button-prev4').click(function (e) {
         e.preventDefault();
         mySwiper4.swipePrev();
     });

    //  $(window).resize(function () {          //当浏览器大小变化时
    //     var $width=$(document.body).width();   //浏览器时下窗口文档body的高度
    //     if($width<768){
    //         console.log(mySwiper2);
    //         // mySwiper2.params
    //     }
    // });
 });






 //  $(document).ready(function () {
 //      $('.main img').lazyload({
 //          threshold:100,
 //          placeholder: "/xinmizj/static/images/loading.svg",
 //          effects: "fadeIn"
 //      });
 //      var mySwiper2 = new Swiper('.swiper-container', {

 //          autoplay: {
 //              stopOnLastSlide: false,
 //          },
 //          //  loop: true,
 //          //  loopedSlides: 4,
 //          slidesPerView: 4,
 //          spaceBetween: 5,
 //          // 如果需要前进后退按钮
 //          navigation: {
 //              nextEl: '.swiper-button-next',
 //              prevEl: '.swiper-button-prev',
 //          },

 //          //  // 如果需要滚动条
 //          //  scrollbar: {
 //          //      el: '.swiper-scrollbar',
 //          //  },
 //      });

 //      var mySwiper3 = new Swiper('.swiper-container3', {

 //          autoplay: {
 //              stopOnLastSlide: false,
 //          },
 //          //  loop: true,
 //          //  loopedSlides: 1,
 //         //   slidesPerView: 1,
 //          // 如果需要分页器
 //          pagination: {
 //              el: '.swiper-pagination3',
 //          },
 //          // 如果需要前进后退按钮
 //          navigation: {
 //              nextEl: '.swiper-button-next3',
 //              prevEl: '.swiper-button-prev3',
 //          },

 //          //  // 如果需要滚动条
 //          //   scrollbar: {
 //          //       el: '.swiper-scrollbar',
 //          //   },
 //      });

 //      var mySwiper41 = new Swiper('.swiper-container41', {

 //          autoplay: {
 //              stopOnLastSlide: false,
 //          },
 //          //  loop: true,
 //          //  loopedSlides: 1,
 //          //  slidesPerView: 1,
 //          // 如果需要分页器
 //          pagination: {
 //              el: '.swiper-pagination41',
 //          },
 //          // 如果需要前进后退按钮
 //          navigation: {
 //              nextEl: '.swiper-button-next41',
 //              prevEl: '.swiper-button-prev41',
 //          },

 //          //  // 如果需要滚动条
 //          //   scrollbar: {
 //          //       el: '.swiper-scrollbar',
 //          //   },
 //      });
 //  });