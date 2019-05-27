data = {
    1: [
        "Ja chcę powiedzieć jedną rzecz:",
        "Trzeba powiedzieć jasno:",
        "Jakby powiedział wybitny krakowianin Stanisław Lem",
        "Proszę mnie dobrze zrozumieć:",
        "Ja chciałem Państwu przypomnieć, że",
        "Niech państwo nie mają złudzeń:",
        "Powiedzmy to wyraźnie:"
    ],
    2: [
        "przedstawiciele czerwonej hołoty",
        "ci wszyscy (tfu!) geje",
        "funkcjonariusze reżymowej telewizji",
        "tak zwani ekolodzy",
        "ci wszyscy (tfu!) demokraci",
        "agenci bezpieki",
        "feminazistki"
    ],
    3: [
        "zupełnie bezkarnie",
        "całkowicie bezczelnie",
        "o poglądach na lewo od komunizmu",
        "celowo i świadomie",
        "z premedytacją",
        "od czasów Okrągłego Stołu",
        "w ramach postępu"
    ],
    4: [
        "nawołują do podniesienia podatków",
        "próbują wyrzucić kierowców z miast",
        "próbują skłócić Polskę z Rosją",
        "głoszą brednie o globalnym ociepleniu",
        "zakazują posiadania broni",
        "nie dopuszczają prawicy do władzy",
        "uczą dzieci hmoseksualizmu"
    ],
    5: [
        "bo dzięki temu mogą kraść",
        "bo dostają za to pieniądze",
        "bo tak się uczy w państwowej szkole",
        "bo bez tego (tfu!) demokracja nie może istnieć",
        "bo głupich jest więcej niż mądrych",
        "bo chcą tworzyć raj na ziemi",
        "bo chcą niszczyć cywilizację białego człowieka"
    ],
    6: [
        "przez kolejne kadencje.",
        "o czym się nie mówi.",
        "i właśnie dlatego Europa umiera",
        "ale przyjdą muzułmanie i zrobią porządek",
        "- tak samo zresztą jak za Hitlera",
        "- proszę zobaczyć co się dzieje na Zachodzie, jeśli mi państwo nie wierzą",
        "co lat temu sto nikomu nie przyszłoby nawet do głowy"
    ]
}

document.krulout = document.getElementById("krulout")



function getRndInteger(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
}

function genKrul() {
    textout = ""

    for (var key in data) {
        rnd = getRndInteger(data[key].length)
        line = data[key][rnd]
        textout += line + " "
    }
    document.krulout.innerText = textout
}

genKrul()