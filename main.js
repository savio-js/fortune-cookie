const fortuneCookie = document.querySelector('#fortune-cookie');
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnAgain = document.querySelector('#btn-again')
const cardFortune = document.querySelector('.card-fortune p')


fortuneCookie.addEventListener('click', randomFortunes)
btnAgain.addEventListener('click', toogleFortunes)

function randomFortunes() {
  let cookie = [
    "A vida é curta, sorria enquanto você ainda tem dentes.",
    "A felicidade não é algo pronto. Ela vem das suas próprias ações.",
    "Seja a mudança que você deseja ver no mundo.",
    "Acredite em você mesmo e tudo será possível.",
    "A gratidão transforma o que temos em suficiente.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A vida é como uma bicicleta: para manter o equilíbrio, você precisa continuar pedalando.",
    "A gentileza é a linguagem que os surdos podem ouvir e os cegos podem ver.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A persistência é o caminho do êxito.",
    "A imaginação é mais importante que o conhecimento.",
    "A vida é feita de escolhas. Escolha ser feliz.",
    "O otimismo é a fé em ação.",
    "A verdadeira riqueza é aquela que o dinheiro não pode comprar.",
    "A vida é uma aventura ousada ou nada.",
    "Aprenda com ontem, viva para hoje, tenha esperança para amanhã.",
    "A simplicidade é a chave da verdadeira elegância.",
    "A vida é uma jornada, não um destino.",
    "A coragem não é a ausência do medo, mas a capacidade de seguir em frente apesar dele.",
    "A amizade é como uma estrela: você não precisa vê-la para saber que está lá."
  ]
  
  let randomPhrases = Math.floor(Math.random() * cookie.length)
  cardFortune.innerText = cookie[randomPhrases]

  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function toogleFortunes() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
