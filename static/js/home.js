 $(document).ready(function () {
     var $bodyWidth = $(document.body).width(),
         isPhone = $bodyWidth < 768;
     
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


 });




