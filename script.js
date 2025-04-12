const terminalTextElement = document.getElementById('terminal-text');


const phrases = [
    "Acorde, Neo...",
    "A Matrix achou você...",
    "Siga o coelho branco.",
    "O que é real? Como você define o real?",
    "Você já teve um sonho, Neo, do qual tinha tanta certeza que era real?",
    "Infelizmente, ninguém pode ser informado sobre o que é a Matrix. Você tem que ver por si mesmo.",
    "Estou oferecendo a verdade. Nada mais.",
    "Bem-vindo ao deserto do real.",
    "Esta é a sua última chance. Depois disso, não há volta.",
    "Se tomar a pílula azul, a história acaba. Você acorda na sua cama e acredita no que quiser.",
    "Se tomar a pílula vermelha, fica no País das Maravilhas, e eu te mostrarei até onde vai a toca do coelho.",
    "Acorde, Neo...",
    "A Matrix achou você...",
    "Siga o coelho branco.",
    "Humanos são um vírus. Vocês são a praga deste planeta. E nós... somos a cura.",
    "Sr. Anderson...",
    "Você ouve isso, Sr. Anderson? Isso é o som da inevitabilidade.",
    "Você está dizendo que eu posso desviar de balas?",
    "Eu sei kung fu.",
    "Por que meus olhos doem?",
    "Porque você nunca os usou antes."
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function typeWriter(text, element, delay, callback) {
    let i = 0;
    element.textContent = '';
    const intervalId = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(intervalId);
            if (callback) {
                callback();
            }
        }
    }, delay);
}

function clearText(element, delay, callback) {
    let currentText = element.textContent;
    let i = currentText.length;
    const intervalId = setInterval(() => {
        if (i > 0) {
            currentText = currentText.slice(0, -1);
            element.textContent = currentText;
            i--;
        } else {
            clearInterval(intervalId);
            if (callback) {
                callback();
            }
        }
    }, delay);
}

function startTerminalEffect() {
    typeWriter("A Matrix achou você...", terminalTextElement, 50, () => {
        setTimeout(() => {
            shuffleArray(phrases);
            let phraseIndex = 0;

            function displayNextPhrase() {
                if (phraseIndex < phrases.length) {
                    const currentPhrase = phrases[phraseIndex];
                    clearText(terminalTextElement, 30, () => {
                        setTimeout(() => {
                            typeWriter(currentPhrase, terminalTextElement, 50, () => {
                                setTimeout(() => {
                                    phraseIndex++;
                                    displayNextPhrase();
                                }, 1500); // Tempo que a frase fica visível
                            });
                        }, 500); // Pequeno delay antes de digitar a próxima frase
                    });
                }
            }

            setTimeout(displayNextPhrase, 2000); // Delay antes de começar a exibir as frases
        }, 1500); // Tempo que a mensagem inicial fica visível
    });
}

startTerminalEffect();
