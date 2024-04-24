import Splide from '@splidejs/splide'

new Splide('#splide1').mount();
new Splide('#splide2').mount();
new Splide('#splide3').mount();

export function splide() {
    const carouselElementsLtl = document.querySelectorAll(".ltl");
    // const carouselElementsrtl = document.querySelectorAll(".rtl");

    carouselElementsLtl.forEach((carouselElement) => {
        const splide = new Splide(carouselElement, {

            type: "loop",
            drag: true,
            autoWidth: true,
            gap: 30,
            pagination: false,
            arrows: false,
            autoScroll: {
                speed: 1.5,
                pauseOnHover: false,
            },
        });

        splide.mount(window.splide.Extensions);
    });
    carouselElementsrtl.forEach((carouselElement) => {
        const splide = new Splide(carouselElement, {
            direction: 'rtl',
            type: "loop",
            drag: true,
            autoWidth: true,
            gap: 30,
            pagination: false,
            arrows: false,
            autoScroll: {
                speed: 1.5,
                pauseOnHover: false,
            },
        });

        splide.mount(window.splide.Extensions);
    });
}


