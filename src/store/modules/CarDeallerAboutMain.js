export default {
    state: {
        aboutMain: {
            infoCheck: [
                {
                    radio: "Автосалон",
                    checked: true,
                    title: "Об автосалоне ABC",
                    text: "Повседневная практика показывает, что высокотехнологичная концепция общественного уклада в значительной степени обусловливает важность распределения внутренних резервов и ресурсов. Прежде всего, базовый вектор развития однозначно определяет каждого участника как способного принимать собственные решения касаемо кластеризации усилий. Господа, начало повседневной работы по формированию позиции требует определения и уточнения вывода текущих активов."
                },
                {
                    radio: "Трейд-ин",
                    checked: false,
                    title: "Об трейд-ин в ABC",
                    text: "Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект предоставляет широкие возможности для своевременного выполнения сверхзадачи. С другой стороны, постоянный количественный рост и сфера нашей активности однозначно определяет каждого участника как способного принимать собственные решения касаемо укрепления моральных ценностей. Вот вам яркий пример современных тенденций - реализация намеченных плановых заданий предопределяет высокую востребованность стандартных подходов. С другой стороны, высокое качество позиционных исследований является качественно новой ступенью вывода текущих активов."
                },
                {
                    radio: "Покупка",
                    checked: false,
                    title: "Об покупке в ABC",
                    text: "Но акционеры крупнейших компаний и по сей день остаются уделом либералов, которые жаждут быть преданы социально-демократической анафеме. Независимые государства, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Таким образом, повышение уровня гражданского сознания напрямую зависит от инновационных методов управления процессами."
                },
            ],
        },
    },
    getters: {
        aboutMain(state) {
            return state.aboutMain;
        },
        infoCheckActiveTitle(state) {
            for (let index = 0; index < state.aboutMain.infoCheck.length; index++) {
                const element = state.aboutMain.infoCheck[index];
                if (element.checked === true) {
                    return element.title;
                }
            }
        },
        infoCheckActiveText(state) {
            for (let index = 0; index < state.aboutMain.infoCheck.length; index++) {
                const element = state.aboutMain.infoCheck[index];
                if (element.checked === true) {
                    return element.text;
                }
            }
        },
    },
    mutations: {
        aboutMainCheckFunc(state, e) {
            for (let index = 0; index < state.aboutMain.infoCheck.length; index++) {
                const element = state.aboutMain.infoCheck[index];
                element.checked = false;
            }
            let activeRadio = state.aboutMain.infoCheck.find((item) => item.radio === e.target.value);
            return activeRadio.checked = true;
        },
    },
    actions: {
        aboutMain({ commit, state }, products) {
            console.log(commit.aboutMain);
        }
    }
}