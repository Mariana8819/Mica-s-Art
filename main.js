function toggleMenu() {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}

function changeVideo(name){
    const bgVideoList =document.querySelectorAll('.bg-video')
    const videoContainer =document.querySelectorAll('.video-container')

    bgVideoList.forEach(video =>{
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    })

    videoContainer.forEach(video =>{
        video.classList.remove('active');
        if (video.classList.contains(name)) {
            video.classList.add('active');
        }
    })
}

// for feature section

var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay:9500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});