const synth = new Tone.Synth().toDestination()
let play1 = document.querySelector('#play1')
let play2 = document.querySelector('#play2')
let play3 = document.querySelector('#play3')
let play4 = document.querySelector('#play4')
let play5 = document.querySelector('#play5')
let play6 = document.querySelector('#play6')
let play7 = document.querySelector('#play7')
let play8 = document.querySelector('#play8')
let play9 = document.querySelector('#play9')
let play10 = document.querySelector('#play10')
let start = document.querySelector('#start')
let resultado = document.querySelector('#resultado')
let q1_errada1 = document.querySelector('#q1_errada1')
let q1_errada2 = document.querySelector('#q1_errada2')
let q1_errada3 = document.querySelector('#q1_errada3')
let q1_certa = document.querySelector('#q1_certa')

let q2_errada1 = document.querySelector('#q2_errada1')
let q2_errada2 = document.querySelector('#q2_errada2')
let q2_errada3 = document.querySelector('#q2_errada3')
let q2_certa = document.querySelector('#q2_certa')

let q3_errada1 = document.querySelector('#q3_errada1')
let q3_errada2 = document.querySelector('#q3_errada2')
let q3_errada3 = document.querySelector('#q3_errada3')
let q3_certa = document.querySelector('#q3_certa')

let q4_errada1 = document.querySelector('#q4_errada1')
let q4_errada2 = document.querySelector('#q4_errada2')
let q4_errada3 = document.querySelector('#q4_errada3')
let q4_certa = document.querySelector('#q4_certa')

let q5_errada1 = document.querySelector('#q5_errada1')
let q5_errada2 = document.querySelector('#q5_errada2')
let q5_errada3 = document.querySelector('#q5_errada3')
let q5_certa = document.querySelector('#q5_certa')

let q6_errada1 = document.querySelector('#q6_errada1')
let q6_errada2 = document.querySelector('#q6_errada2')
let q6_errada3 = document.querySelector('#q6_errada3')
let q6_certa = document.querySelector('#q6_certa')

let q7_errada1 = document.querySelector('#q7_errada1')
let q7_errada2 = document.querySelector('#q7_errada2')
let q7_errada3 = document.querySelector('#q7_errada3')
let q7_certa = document.querySelector('#q7_certa')

let q8_errada1 = document.querySelector('#q8_errada1')
let q8_errada2 = document.querySelector('#q8_errada2')
let q8_errada3 = document.querySelector('#q8_errada3')
let q8_certa = document.querySelector('#q8_certa')

let q9_errada1 = document.querySelector('#q9_errada1')
let q9_errada2 = document.querySelector('#q9_errada2')
let q9_errada3 = document.querySelector('#q9_errada3')
let q9_certa = document.querySelector('#q9_certa')

let q10_errada1 = document.querySelector('#q10_errada1')
let q10_errada2 = document.querySelector('#q10_errada2')
let q10_errada3 = document.querySelector('#q10_errada3')
let q10_certa = document.querySelector('#q10_certa')

let audio = document.querySelector('#audio')
let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')
let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')
let q10 = document.querySelector('#q10')

let corretas = 0
let incorretas = 0

let placar_acertos = document.querySelector('#placar_acertos')
let placar_erros = document.querySelector('#placar_erros')



q1.classList.add('d-none')
q2.classList.add('d-none')
q3.classList.add('d-none')
q4.classList.add('d-none')
q5.classList.add('d-none')
q6.classList.add('d-none')
q7.classList.add('d-none')
q8.classList.add('d-none')
q9.classList.add('d-none')
q10.classList.add('d-none')


let acertou = document.querySelector('#acertou')
let acertou2 = document.querySelector('#acertou2')
let acertou3 = document.querySelector('#acertou3')
let acertou4 = document.querySelector('#acertou4')
let acertou5 = document.querySelector('#acertou5')
let acertou6 = document.querySelector('#acertou6')
let acertou7 = document.querySelector('#acertou7')
let acertou8 = document.querySelector('#acertou8')
let acertou9 = document.querySelector('#acertou9')
let acertou10 = document.querySelector('#acertou10')

let errou = document.querySelector('#errou')
let errou2 = document.querySelector('#errou2')
let errou3 = document.querySelector('#errou3')
let errou4 = document.querySelector('#errou4')
let errou5 = document.querySelector('#errou5')
let errou6 = document.querySelector('#errou6')
let errou7 = document.querySelector('#errou7')
let errou8 = document.querySelector('#errou8')
let errou9 = document.querySelector('#errou9')
let errou10 = document.querySelector('#errou10')




start.onclick = () => {
    start.classList.add('d-none')


    q1.classList.remove('d-none')
    q1.classList.add('animate__backInUp')

}
//----------------------------------------------------------------------------------

q1_errada1.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'

    setTimeout(() => {

        q1.classList.add('animate__backOutDown')
        setTimeout(() => {

            q1.classList.add('d-none')
            q2.classList.remove('d-none')


        }, 500);

    }, 2000);
}

q1_errada2.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'
    setTimeout(() => {

        q1.classList.add('animate__backOutDown')
        setTimeout(() => {

            q1.classList.add('d-none')
            q2.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q1_errada3.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'
    setTimeout(() => {

        q1.classList.add('animate__backOutDown')
        setTimeout(() => {

            q1.classList.add('d-none')
            q2.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q1_certa.onclick = () => {
    corretas++

    acertou.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'
    setTimeout(() => {

        q1.classList.add('animate__backOutDown')
        setTimeout(() => {

            q1.classList.add('d-none')
            q2.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play1.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------


//----------------------------------------------------------------------------------

q2_errada1.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    errou2.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor.wav'

    setTimeout(() => {

        q2.classList.add('animate__backOutDown')
        setTimeout(() => {

            q2.classList.add('d-none')
            q3.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q2_errada2.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor.wav'
    errou2.classList.remove('d-none')
    setTimeout(() => {

        q2.classList.add('animate__backOutDown')
        setTimeout(() => {

            q2.classList.add('d-none')
            q3.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q2_errada3.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor.wav'
    errou2.classList.remove('d-none')
    setTimeout(() => {

        q2.classList.add('animate__backOutDown')
        setTimeout(() => {

            q2.classList.add('d-none')
            q3.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q2_certa.onclick = () => {
    corretas++

    acertou.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor.wav'
    acertou2.classList.remove('d-none')
    setTimeout(() => {

        q2.classList.add('animate__backOutDown')
        setTimeout(() => {

            q2.classList.add('d-none')
            q3.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play2.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

//----------------------------------------------------------------------------------

q3_errada1.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    errou3.classList.remove('d-none')
    audio.src = './assets/audio/segunda_menor.wav'


    setTimeout(() => {

        q3.classList.add('animate__backOutDown')
        setTimeout(() => {

            q3.classList.add('d-none')
            q4.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q3_errada2.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/segunda_menor.wav'

    errou3.classList.remove('d-none')
    setTimeout(() => {

        q3.classList.add('animate__backOutDown')
        setTimeout(() => {

            q3.classList.add('d-none')
            q4.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q3_errada3.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    errou3.classList.remove('d-none')
    audio.src = './assets/audio/segunda_menor.wav'

    setTimeout(() => {

        q3.classList.add('animate__backOutDown')
        setTimeout(() => {

            q3.classList.add('d-none')
            q4.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q3_certa.onclick = () => {
    corretas++

    acertou.classList.remove('d-none')
    acertou3.classList.remove('d-none')
    audio.src = './assets/audio/segunda_menor.wav'

    setTimeout(() => {

        q3.classList.add('animate__backOutDown')
        setTimeout(() => {

            q3.classList.add('d-none')
            q4.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play3.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

//----------------------------------------------------------------------------------

q4_errada1.onclick = () => {

    incorretas++
    errou.classList.remove('d-none')
    errou4.classList.remove('d-none')
    audio.src = './assets/audio/setima_menor.wav'


    setTimeout(() => {

        q4.classList.add('animate__backOutDown')
        setTimeout(() => {

            q4.classList.add('d-none')
            q5.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q4_errada2.onclick = () => {
    incorretas++
    errou.classList.remove('d-none')
    audio.src = './assets/audio/setima_menor.wav'

    errou4.classList.remove('d-none')
    setTimeout(() => {

        q4.classList.add('animate__backOutDown')
        setTimeout(() => {

            q4.classList.add('d-none')
            q5.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q4_errada3.onclick = () => {
    incorretas++
    errou.classList.remove('d-none')
    audio.src = './assets/audio/setima_menor.wav'

    errou4.classList.remove('d-none')
    setTimeout(() => {

        q4.classList.add('animate__backOutDown')
        setTimeout(() => {

            q4.classList.add('d-none')
            q5.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q4_certa.onclick = () => {

    acertou.classList.remove('d-none')
    audio.src = './assets/audio/setima_menor.wav'
    corretas++

    acertou4.classList.remove('d-none')
    setTimeout(() => {

        q4.classList.add('animate__backOutDown')
        setTimeout(() => {

            q4.classList.add('d-none')
            q5.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play4.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

//----------------------------------------------------------------------------------

q5_errada1.onclick = () => {
    incorretas++
    errou.classList.remove('d-none')
    errou5.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'



    setTimeout(() => {

        q5.classList.add('animate__backOutDown')
        setTimeout(() => {

            q5.classList.add('d-none')
            q6.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q5_errada2.onclick = () => {
    incorretas++
    errou.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'

    errou5.classList.remove('d-none')

    setTimeout(() => {

        q5.classList.add('animate__backOutDown')
        setTimeout(() => {

            q5.classList.add('d-none')
            q6.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q5_errada3.onclick = () => {
    incorretas++
    errou.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'

    errou5.classList.remove('d-none')

    setTimeout(() => {

        q5.classList.add('animate__backOutDown')
        setTimeout(() => {

            q5.classList.add('d-none')
            q6.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q5_certa.onclick = () => {
    acertou.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'
    corretas++

    acertou5.classList.remove('d-none')

    setTimeout(() => {

        q5.classList.add('animate__backOutDown')
        setTimeout(() => {

            q5.classList.add('d-none')
            q6.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play5.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

//----------------------------------------------------------------------------------

q6_errada1.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    errou6.classList.remove('d-none')
    audio.src = './assets/audio/terca_maior.wav'



    setTimeout(() => {

        q6.classList.add('animate__backOutDown')
        setTimeout(() => {

            q6.classList.add('d-none')
            q7.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q6_errada2.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/terca_maior.wav'

    errou6.classList.remove('d-none')

    setTimeout(() => {

        q6.classList.add('animate__backOutDown')
        setTimeout(() => {

            q6.classList.add('d-none')
            q7.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q6_errada3.onclick = () => {
    incorretas++

    errou.classList.remove('d-none')
    audio.src = './assets/audio/terca_maior.wav'

    errou6.classList.remove('d-none')

    setTimeout(() => {

        q6.classList.add('animate__backOutDown')
        setTimeout(() => {

            q6.classList.add('d-none')
            q7.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q6_certa.onclick = () => {
    corretas++

    acertou.classList.remove('d-none')
    audio.src = './assets/audio/terca_maior.wav'

    acertou6.classList.remove('d-none')

    setTimeout(() => {

        q6.classList.add('animate__backOutDown')
        setTimeout(() => {

            q6.classList.add('d-none')
            q7.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play6.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

//----------------------------------------------------------------------------------

q7_errada1.onclick = () => {
    incorretas++

    errou7.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor2.wav'


    setTimeout(() => {

        q7.classList.add('animate__backOutDown')
        setTimeout(() => {

            q7.classList.add('d-none')
            q8.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q7_errada2.onclick = () => {
    incorretas++

    errou7.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor2.wav'

    setTimeout(() => {

        q7.classList.add('animate__backOutDown')
        setTimeout(() => {

            q7.classList.add('d-none')
            q8.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q7_errada3.onclick = () => {
    incorretas++

    errou7.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor2.wav'

    setTimeout(() => {

        q7.classList.add('animate__backOutDown')
        setTimeout(() => {

            q7.classList.add('d-none')
            q8.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q7_certa.onclick = () => {
    corretas++

    acertou7.classList.remove('d-none')
    audio.src = './assets/audio/terca_menor2.wav'

    setTimeout(() => {

        q7.classList.add('animate__backOutDown')
        setTimeout(() => {

            q7.classList.add('d-none')
            q8.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play7.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

//----------------------------------------------------------------------------------

q8_errada1.onclick = () => {
    incorretas++

    errou8.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'


    setTimeout(() => {

        q8.classList.add('animate__backOutDown')
        setTimeout(() => {

            q8.classList.add('d-none')
            q9.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q8_errada2.onclick = () => {
    incorretas++

    errou8.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'

    setTimeout(() => {

        q8.classList.add('animate__backOutDown')
        setTimeout(() => {

            q8.classList.add('d-none')
            q9.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q8_errada3.onclick = () => {
    incorretas++

    errou8.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'

    setTimeout(() => {

        q8.classList.add('animate__backOutDown')
        setTimeout(() => {

            q8.classList.add('d-none')
            q9.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q8_certa.onclick = () => {
    corretas++

    acertou8.classList.remove('d-none')
    audio.src = './assets/audio/quinta_diminuta.wav'

    setTimeout(() => {

        q8.classList.add('animate__backOutDown')
        setTimeout(() => {

            q8.classList.add('d-none')
            q9.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play8.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

//----------------------------------------------------------------------------------

q9_errada1.onclick = () => {
    incorretas++

    errou9.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'


    setTimeout(() => {

        q9.classList.add('animate__backOutDown')
        setTimeout(() => {

            q9.classList.add('d-none')
            q10.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q9_errada2.onclick = () => {
    incorretas++

    errou9.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'

    setTimeout(() => {

        q9.classList.add('animate__backOutDown')
        setTimeout(() => {

            q9.classList.add('d-none')
            q10.classList.remove('d-none')

        }, 500);

    }, 2000);
}

q9_errada3.onclick = () => {
    incorretas++

    errou9.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'

    setTimeout(() => {

        q9.classList.add('animate__backOutDown')
        setTimeout(() => {

            q9.classList.add('d-none')
            q10.classList.remove('d-none')

        }, 500);

    }, 2000);
}


q9_certa.onclick = () => {
    corretas++

    acertou9.classList.remove('d-none')
    audio.src = './assets/audio/sexta_maior2.wav'

    setTimeout(() => {

        q9.classList.add('animate__backOutDown')
        setTimeout(() => {

            q9.classList.add('d-none')
            q10.classList.remove('d-none')

        }, 500);

    }, 2000);
}


play9.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------


//----------------------------------------------------------------------------------

q10_errada1.onclick = () => {
    incorretas++
    placar_acertos.innerHTML = corretas
    placar_erros.innerHTML = incorretas

    resultado.classList.remove('d-none')

    errou10.classList.remove('d-none')

    setTimeout(() => {

        q10.classList.add('animate__backOutDown')
        setTimeout(() => {

            q10.classList.add('d-none')


        }, 500);

    }, 2000);
}

q10_errada2.onclick = () => {
    incorretas++

    placar_acertos.innerHTML = corretas
    placar_erros.innerHTML = incorretas
    resultado.classList.remove('d-none')

    errou10.classList.remove('d-none')
    setTimeout(() => {

        q10.classList.add('animate__backOutDown')
        setTimeout(() => {

            q10.classList.add('d-none')


        }, 500);

    }, 2000);
}

q10_errada3.onclick = () => {
    incorretas++

    placar_acertos.innerHTML = corretas
    placar_erros.innerHTML = incorretas
    resultado.classList.remove('d-none')

    errou10.classList.remove('d-none')
    setTimeout(() => {

        q10.classList.add('animate__backOutDown')
        setTimeout(() => {

            q10.classList.add('d-none')


        }, 500);

    }, 2000);
}


q10_certa.onclick = () => {
    corretas++

    placar_acertos.innerHTML = corretas
    placar_erros.innerHTML = incorretas
    resultado.classList.remove('d-none')
    acertou10.classList.remove('d-none')
    setTimeout(() => {

        q10.classList.add('animate__backOutDown')
        setTimeout(() => {

            q10.classList.add('d-none')


        }, 500);

    }, 2000);
}


play10.onclick = () => {

    audio.play()
}

//-----------------------------------------------------------------

