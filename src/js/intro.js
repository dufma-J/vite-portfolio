import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function intro() {
    gsap.registerPlugin(ScrollTrigger)
    const frameConunt = 6
    let offsetValue = 466

    gsap.to('.img', {
        backgroundPosition: (-offsetValue * frameConunt) + 'px',
        ease: 'steps(' + frameConunt + ')',
        scrollTrigger: {
            trigger: '#intro',
            start: 'top top',
            end: '+=' + (frameConunt * offsetValue),
            pin: true,
            scrub: true
        }
    })
}