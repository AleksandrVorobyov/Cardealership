export default {
  state: {
    notFound: {
      nav: [
        {
          text: "Каталог авто ",
          link: "/",
        },
        {
          text: "Trade-in",
          link: "/",
        },
        {
          text: "Экспресс кредит",
          link: "/",
        },
        {
          text: "Контакты",
          link: "/Contact",
        },
      ],
      error: "notFound/error.png",
      errorTitle: "Страница не найдена!",
      errorText: [
        "«Мы запустили новый сайт, сделав его удобным и информативным.",
        "Возможно, запрашиваемая Вами страница была перенесена или удалена.",
        "Вы можете позвонить нам и получить квалифицированную помощь наших специалистов»",
      ],
      btn: {
        text: "на главную",
        link: "/",
      },
    },
  },
  getters: {
    notFound(state) {
      return state.notFound;
    },
  },
  mutations: {
    notFound(state, payload) {
      console.log(state.notFound);
    },
  },
  actions: {
    notFound({ commit, state }, products) {
      console.log(commit.notFound);
    },
  },
};
