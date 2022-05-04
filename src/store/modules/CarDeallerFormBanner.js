export default {
    state: {
        formBanner: {
            title: "Перебьем предложения от конкурентов!",
            subtitle: `Скидки <span>от 10 до 25%</span> на стоимость автомобиля`,
            assent: `Нажимая кнопку “Отправить” Вы даете согласие на обработку своих <span>персональных данных</span>`,
            formField: "",
            formFieldPlaceholder: "Ваш телефон",
            formBtnText: "Получить предложение",
            bgImgSrc: "CarDeallerFormBanner/form-img.png",
            bgImgAlt: "form-img.png",
        },
    },
    getters: {
        formBanner(state) {
            return state.formBanner;
        },
    },
    mutations: {
        formBannerTel(state, payload) {
            state.formBanner.formField = document.getElementById("form-banner-tel").value;
        },
        formBannerValid(state, e) {
            const phoneValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(state.formBanner.formField)
            if (phoneValid) {
                state.formBanner.formField = "";
            } else {
                e.preventDefault();
            }
        },
    },
    actions: {
    }
}