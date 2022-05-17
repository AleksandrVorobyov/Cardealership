export default {
    state: {
        contactMain: {
            desc: [
                {
                    icon: "phone-white",
                    text: [
                        "+7 (800) 551-94-31",
                        "+7 (495) 292-18-67",
                    ],
                },
                {
                    icon: "clock-white",
                    text: ["Ежедневно с 08:00 до 21:00"],
                },
                {
                    icon: "marker-white",
                    text: ["Россия, Москва, 38КМ МКАД, 6Бс1"],
                }
            ],
            descBtn: {
                btnText: "Как до нас добраться",
                btnExit: "Закрыть"
            },
            mapHidden: true
        },
    },
    getters: {
        contactMain(state) {
            return state.contactMain;
        },
    },
    mutations: {
        contactMainMapHidden(state, payload) {
        },
    },
    actions: {
        contactMainMapPopup({ commit, state }, products) {
            const contactMainMap = document.getElementById("contact-main-map")
            contactMainMap.classList.toggle("contact-main__map--hidden")
            contactMainMap.classList.toggle("contact-main__map--popup")
            document.querySelector("body").classList.toggle("hidden")
            state.contactMain.mapHidden = !state.contactMain.mapHidden
            if (!contactMainMap.className === 'contact-main__map--hidden') {
                contactMainMap.style.padding = `${document.getElementById("headerNav").clientHeight}px 0 50px`;
            } else {
                contactMainMap.style.padding = `0px`;
            }
        }
    }
}