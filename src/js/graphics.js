import gsap from 'gsap';

export function graphics() {
    gsap.utils.toArray('.img_box').forEach(function (imgBox) {
        gsap.timeline({
            scrollTrigger: {
                trigger: imgBox,
                start: '50% 100%',
                toggleClass: { 'targets': imgBox, className: 'active' },
                scrub: 1
            }
        })
    })
    gsap.utils.toArray('.img_text').forEach(function (imgText) {
        gsap.timeline({
            scrollTrigger: {
                trigger: imgText,
                start: '50% 90%',
                end: '100% 0%',
                toggleClass: { 'targets': imgText, className: 'active' },
                scrub: 1
            }
        })
    })
}