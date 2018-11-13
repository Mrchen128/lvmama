var mySwiper = new Swiper('#swiper-container1', {
    autoplay:true,//等同于以下设置
      pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    loop:true,
    
  });
 
  var scrollSwiper = new Swiper('#swiper-container2', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    freeMode:true,
  });
  scrollSwiper.scrollbar.updateSize();
