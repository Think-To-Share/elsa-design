import { tns } from "tiny-slider/src/tiny-slider"

if(document.querySelector('.homepage .testimonial-section')) {
    tns({
        container: '.homepage .testimonial-section .testimonial-slider',
        items: 3,
        autoplay: true,
        autoplayButtonOutput: false,
        nav: false,
        controlsPosition: 'bottom',
        controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    })
}
