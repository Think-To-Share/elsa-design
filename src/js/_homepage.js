import { tns } from "tiny-slider/src/tiny-slider"

if(document.querySelector('.homepage .testimonial-section')) {
    tns({
        container: '.homepage .testimonial-section .testimonial-slider',
        items: 3,
        autoplay: true,
    })
}
