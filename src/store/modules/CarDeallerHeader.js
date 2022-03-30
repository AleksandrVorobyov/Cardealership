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
            img: "marker"
          },
          {
            icon: "",
            text: "Время работы: c 08:00 до 21:00 ",
            typeLink: false,
            img: "clock"
          },
          {
            icon: "",
            text: "Whatsapp",
            typeLink: true,
            link: "#",
            img: "whatsapp",
            plusClass: "header__panel-list-item-link--decor"
          },
        ],
        phone: {
          number: "+7 (800) 551-94-31",
          numberLink: "+78005519431",
          text: "Обратный звонок",
          icon: "phone"
        }
      },
      nav: {
        up: {
          logo: "logo/logo.png",
          slogan: `<span>10 лет</span> превосходим ваши ожидания`,
          menuUp: [
            {
              text: 'Подбор авто',
              link: '/'
            },
            {
              text: 'О компании',
              link: '/about'
            },
            {
              text: 'Техцентр',
              link: '/techCenter'
            },
            {
              text: 'Отзывы',
              link: '/reviews'
            },
            {
              text: 'Контакты',
              link: '/contact'
            },
          ],
          numbers: {
            main: "+7 (800) 551-94-31",
            mainLink: "+78005519431",
            additional: "+7 (495) 292-18-67",
            additionalLink: "+74952921867",
            icon: "phone-ring"
          },
          btn: {
            text: "Обратный звонок"
          },
        },
        down: {
          dropdownList: [
            {
              link: "#",
              text: "Каталог авто",
              icon: true,
            },
            {
              link: "#",
              text: "Авто с пробегом",
              icon: true,
            },
            {
              link: "#",
              text: "Кредит и рассрочка",
              icon: true,
            },
            {
              link: "#",
              text: "Спецпредложения",
              icon: true,
            },
            {
              link: "#",
              text: "Такси в кредит",
              icon: false
            },
          ],
          btnsList: [
            {
              icon: "heart",
              link: "#",
              type: "a"
            },
            {
              icon: "history",
              link: "#",
              type: "a"
            },
            {
              icon: "search",
              type: "button"
            },
          ],
          dropdownIcon: 'arrow-down'
        }
      }
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
