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
      dragSize: 100,
    },
    freeMode:true,
    slidesPerView : 2.45,
    spaceBetween : 10,
  });
  var scrollSwiper1 = new Swiper('#swiper-container3', {
    scrollbar: {
      el: '#swiper-scrollbar1',
      hide: true,
      dragSize: 200,
    },
    freeMode:true,
    slidesPerView : 4.5,
    // spaceBetween : 10,
  
  });
  var scrollSwiper1 = new Swiper('#swiper-container4', {
    scrollbar: {
      el: '#swiper-scrollbar2',
      hide: true,
      // dragSize: 150,
    },
    freeMode:true,
    slidesPerView : 5.3,
    spaceBetween : 10,
  
  });