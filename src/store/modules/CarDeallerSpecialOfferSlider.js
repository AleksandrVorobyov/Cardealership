export default {
    state: {
        specialOffer: {
            nav: {
                title: "Спецпредложения"
            },
            slides: [
                {
                    img: "specialOfferSlider/01.jpg",
                    alt: "specialOfferSlider-01",
                    title: "Первый автомобиль",
                    subtitle: "1,9% по льготной ставке",
                    linkText: "Узнать больше",
                    linkHref: "/"
                },
                {
                    img: "specialOfferSlider/02.jpg",
                    alt: "specialOfferSlider-02",
                    title: "Семейный автомобиль",
                    subtitle: "1,9% по льготной ставке",
                    linkText: "Узнать больше",
                    linkHref: "/"
                },
                {
                    img: "specialOfferSlider/03.jpg",
                    alt: "specialOfferSlider-03",
                    title: "Экспресс-кредит",
                    subtitle: "1,9% по льготной ставке",
                    linkText: "Узнать больше",
                    linkHref: "/"
                },
            ],
            sliderOptions: {
                rewind: false,
                type: "loop",
                gap: 30,
                perPage: 1,
                pagination: false,
                arrows: true,
                speed: 1400,
                easing: "ease",
                autoplay: true,
                interval: 7000,
                pauseOnHover: true,
                lazyLoad: 'nearby',
                preloadPages: 2,
                wheel: true,
                fixedWidth: 447,
                fixedHeight: 196,
                padding: 0,
                breakpoints: {
                    1430: {
                        padding: 20,
                    },
                    768: {
                        fixedWidth: 346,
                        fixedHeight: 200,
                        gap: 10,
                        arrows: false,
                        wheel: false,
                        padding: 10,
                    },
                    540: {
                        fixedWidth: 290,
                        fixedHeight: 200,
                        gap: 10,
                        arrows: false,
                        wheel: false,
                        padding: 10,
                        autoplay: false,
                        speed: 1200,
                    },
                },
                classes: {
                    arrows: "splide__arrows specialOfferSlider-class-arrows",
                    arrow: "splide__arrow specialOfferSlider-class-arrow",
                    prev: "splide__arrow--prev specialOfferSlider-class-prev",
                    next: "splide__arrow--next specialOfferSlider-class-next",
                },
                arrowPath:
                    "M22.1725 22.5297L4.82338 40.1585C3.71977 41.2805 1.93045 41.2805 0.827368 40.1585C-0.275798 39.0375 -0.275798 37.2194 0.827369 36.0985L16.1787 20.4997L0.82782 4.90145C-0.275346 3.78001 -0.275346 1.96207 0.827821 0.84108C1.93099 -0.28036 3.72022 -0.280359 4.82383 0.84108L22.1729 18.4702C22.7245 19.0309 23 19.7651 23 20.4996C23 21.2345 22.724 21.9692 22.1725 22.5297Z",
            }
        },
    },
    getters: {
        specialOffer(state) {
            return state.specialOffer;
        },
    },
    mutations: {
        specialOffer(state, payload) {
            console.log(state.specialOffer);
        },
    },
    actions: {
        specialOffer({ commit, state }, products) {
            console.log(commit.specialOffer);
        }
    }
}