export default {
    state: {
        mainSlider: {
            options: {
                type: "loop",
                gap: "1rem",
                speed: 1600,
                easing: "cubic-bezier( 0.51, 0.27, 0.22, 0.65 )",
                classes: {
                    arrows: 'splide__arrows main-slider-class-arrows',
                    arrow: 'splide__arrow main-slider-class-arrow',
                    prev: 'splide__arrow--prev main-slider-class-prev',
                    next: 'splide__arrow--next main-slider-class-next',
                    pagination: 'splide__pagination main-slider-class-pagination', // container
                    page: 'splide__pagination__page main-slider-class-page', // each button
                },
            },
            slides: [
                {
                    notification: "Осталось всего 10 авто!",
                    title: "Грандиозная распродажа тестового парка!",
                    subtitle: "Узнай свою цену!",
                    img: "mainSlider/slide-01.png",
                },
                {
                    notification: "Осталось всего 10 авто!",
                    title: "Грандиозная распродажа тестового парка!",
                    subtitle: "Узнай свою цену!",
                    img: "mainSlider/slide-01.png",
                },
                {
                    notification: "Осталось всего 10 авто!",
                    title: "Грандиозная распродажа тестового парка!",
                    subtitle: "Узнай свою цену!",
                    img: "mainSlider/slide-01.png",
                },
                {
                    notification: "Осталось всего 10 авто!",
                    title: "Грандиозная распродажа тестового парка!",
                    subtitle: "Узнай свою цену!",
                    img: "mainSlider/slide-01.png",
                },
                {
                    notification: "Осталось всего 10 авто!",
                    title: "Грандиозная распродажа тестового парка!",
                    subtitle: "Узнай свою цену!",
                    img: "mainSlider/slide-01.png",
                },
                {
                    notification: "Осталось всего 10 авто!",
                    title: "Грандиозная распродажа тестового парка!",
                    subtitle: "Узнай свою цену!",
                    img: "mainSlider/slide-01.png",
                },
            ]
        },
    },
    getters: {
        mainSlider(state) {
            return state.mainSlider;
        },
    },
    mutations: {
        mainSlider(state, payload) {
            console.log(state.mainSlider);
        },
    },
    actions: {
        mainSlider({ commit, state }, products) {
            console.log(commit.mainSlider);
        }
    }
}