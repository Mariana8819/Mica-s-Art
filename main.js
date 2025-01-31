function toggleMenu(forceClose = false) {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');

    if(forceClose){
    menu.classList.remove('active');
    navMobile.classList.remove('active');

}else{
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
 }
}

document.querySelectorAll('.nav-mobile li a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu(true);
    });
})


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



//for blogs section

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    
      breakpoints:{
        0:{
            slidesPerView: 1,
        },        
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
      },
    });
      
    
    function enviarWhatsApp() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var servicio = document.getElementById('servicio').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    
    // Crear el mensaje que se enviará por WhatsApp
    // var mensaje = `Nombre: ${nombre}\nMasaje: ${masaje}\nCorreo: ${correo}\nTeléfono: ${telefono}`;
    
    if(!nombre || !servicio || !correo || !telefono) {
        alert('Por favor , completa todos los campos del formulario.');
        return;
    }
    
    var mensaje = `¡Hola! Mi nombre es ${nombre} y estoy interesad@ en el siguiente servicio: *${servicio}*. 
Me encantaría recibir más información sobre el contenido, horarios y costos. 
Mi correo electrónico es ${correo} y mi número de teléfono es ${telefono}. 
¡Quedo atent@ a tu respuesta! ¡Gracias! 😊`;
    
    // Crear el enlace de WhatsApp
    var numeroWhatsApp = '5492215366351';  // Número de WhatsApp donde se enviará el mensaje
    var enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    // Redirigir al enlace de WhatsApp
    window.open(enlaceWhatsApp, '_blank');
    }