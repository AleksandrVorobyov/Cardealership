export default {
  state: {
    header: {
      panel: {
        list: [
          {
            icon: "",
            text: "Россия, Москва, 38КМ МКАД, 6Бс1",
            typeLink: true,
            link: "#",
            img: "icons/marker.svg"
          },
          {
            icon: "",
            text: "Время работы: c 08:00 до 21:00 ",
            typeLink: false,
            img: "icons/clock.svg"
          },
          {
            icon: "",
            text: "Whatsapp",
            typeLink: true,
            link: "#",
            img: "icons/whatsapp.svg"
          },
        ],
      },
    },
  },
  getters: {
    header(state) {
      return state.header;
    },
  },
  mutations: {},
  actions: {},
};
