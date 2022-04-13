export default {
    state: {
        mainFilter: {
            list: ["Kia", "Brilliance", "Citroen", "Ford", "Haima", "Lifan", "Peugeot", "UAZ",
                "Hyundai", "Changan", "Datsun", "Foton", "Haval", "Mazda", "Ravon", "Zotye",
                "Skoda", "Chery", "Dongfeng", "GAC", "Honda", "Mitsubishi", "Renault",
                "Volkswagen", "CheryExeed", "DW Hower", "Geely", "JAC", "Nissan", "SsangYong",
                "Toyota", "Chevrolet", "FAW", "Great Wall", "Lada", "Opel", "Suzuki",
            ],
            listLink: "/techCenter",
            form: {
                title: "Быстрый подбор авто",
                range: {
                    minGap: 0,
                    min: 0,
                    minRu: "",
                    max: 0,
                    maxRu: "",
                    title: "Цена",
                },
                line: [
                    "0", "500т", "1м", "1,5м", "2м", "2,5м", "3м",
                ],
                drop: [
                    {
                        title: "Тип кузова",
                        icon: "arrow-down",
                    },
                    {
                        title: "Коробка",
                        icon: "arrow-down",
                    },
                ]
            }
        },
    },
    getters: {
        mainFilter(state) {
            return state.mainFilter;
        },
    },
    mutations: {
        mainFilter(state, payload) {
            console.log(state.mainFilter);
        },
        fillColor(state) {
            let percent1, percent2;
            let sliderOne = document.getElementById("slider-1");
            let sliderTwo = document.getElementById("slider-2");
            let sliderTrack = document.querySelector(".slider-track");
            let sliderMaxValue = document.getElementById("slider-1").max;

            percent1 = (sliderOne.value / sliderMaxValue) * 100;
            percent2 = (sliderTwo.value / sliderMaxValue) * 100;
            sliderTrack.style.background = `linear-gradient(to right, #E1E1E1 ${percent1}% , #CA0100 ${percent1}% , #CA0100 ${percent2}%, #E1E1E1 ${percent2}%)`;
        },
        rangeOneMin(state) {
            if (state.mainFilter.form.range.min == 0) {
                return state.mainFilter.form.range.minRu = ""
            } else if (state.mainFilter.form.range.min > 0 && state.mainFilter.form.range.min < 1000) {
                return state.mainFilter.form.range.minRu = "т"
            } else {
                return state.mainFilter.form.range.minRu = "м"
            }
        },
        rangeOneMax(state) {
            if (state.mainFilter.form.range.max == 0) {
                return state.mainFilter.form.range.maxRu = ""
            } else if (state.mainFilter.form.range.max > 0 && state.mainFilter.form.range.max < 1000) {
                return state.mainFilter.form.range.maxRu = "т"
            } else {
                return state.mainFilter.form.range.maxRu = "м"
            }
        },
        mainFilterDrop(state, event) {
            let btn = event.target;
            btn.classList.toggle("main-filter__form-drop-btn--active")
        }
    },
    actions: {
        mainFilter({ commit, state }, products) {
            console.log(commit.mainFilter);
        },
        slideOne({ commit, state }, products) {
            let sliderOne = document.getElementById("slider-1");
            let sliderTwo = document.getElementById("slider-2");
            let minGap = 0;

            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderOne.value = parseInt(sliderTwo.value) - minGap;
            }

            state.mainFilter.form.range.min = sliderOne.value;

            commit('rangeOneMin')
            commit('fillColor')
        },
        slideTwo({ commit, state }, products) {
            let sliderOne = document.getElementById("slider-1");
            let sliderTwo = document.getElementById("slider-2");
            let minGap = 0;

            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }

            state.mainFilter.form.range.max = sliderTwo.value;

            commit('rangeOneMax')
            commit('fillColor')
        },
    }
}