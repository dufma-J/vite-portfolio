import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function work() {
    gsap.registerPlugin(ScrollTrigger)
    const horSection = gsap.utils.toArray('.work_item')
    gsap.to(horSection, {
        xPercent: -100 * (horSection.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: '#work',
            start: 'top 56px',
            end: '+=4000',
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    })
}