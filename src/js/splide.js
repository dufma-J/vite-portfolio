import Splide from '@splidejs/splide'

new Splide('#splide1').mount();
new Splide('#splide2').mount();
new Splide('#splide3').mount();

export function splide() {
    const ltlElems = document.querySelectorAll('.ltl')
    const rtlElems = document.querySelectorAll('.rtl')

    ltlElems.forEach(ltlElem => {
        const splide = new Splide(ltlElem, {
            type: "loop",
            drag: true,
            autoWidth: true,
            gap: 30,
            pagination: false,
            arrows: false,
            autoScroll: {
                speed: 1.5,
                pauseOnHover: true
            }
        })
        splide.mount(window.splide.Extensions)
    })
}