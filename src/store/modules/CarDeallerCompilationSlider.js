export default {
    state: {
        compilationSlider: {
            nav: {
                title: "Наши подборки",
                link: "Все подборки"
            },
            sliderOptions: {
                rewind: true,
                gap: "1rem",
            },
            slides: [
                {
                    src: "@/assets/img/compilationSlider/slide-01.jpg",
                    alt: "slide-01.jpg",
                    title: "Семейные автомобили",
                    link: "Посмотреть",
                    href: "/",
                },
                {
                    src: "@/assets/img/compilationSlider/slide-02.jpg",
                    alt: "slide-02.jpg",
                    title: "Автомобили для путешествий",
                    link: "Посмотреть",
                    href: "/",
                },
                {
                    src: "@/assets/img/compilationSlider/slide-03.jpg",
                    alt: "slide-03.jpg",
                    title: "Городские автомобили",
                    link: "Посмотреть",
                    href: "/",
                },
                {
                    src: "@/assets/img/compilationSlider/slide-01.jpg",
                    alt: "slide-01.jpg",
                    title: "Семейные автомобили",
                    link: "Посмотреть",
                    href: "/",
                },
                {
                    src: "@/assets/img/compilationSlider/slide-02.jpg",
                    alt: "slide-02.jpg",
                    title: "Автомобили для путешествий",
                    link: "Посмотреть",
                    href: "/",
                },
                {
                    src: "@/assets/img/compilationSlider/slide-03.jpg",
                    alt: "slide-03.jpg",
                    title: "Городские автомобили",
                    link: "Посмотреть",
                    href: "/",
                },
            ]
        },
    },
    getters: {
        compilationSlider(state) {
            return state.compilationSlider;
        },
    },
    mutations: {
        compilationSlider(state, payload) {
            console.log(state.compilationSlider);
        },
    },
    actions: {
        compilationSlider({ commit, state }, products) {
            console.log(commit.compilationSlider);
        }
    }
}