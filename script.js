const terminalTextElement = document.getElementById('terminal-text');
const initialMessage = "Bom dia Thales A Matrix achou você...";
const phrases = [
    "Acorde, Thales...",
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
    "Humanos são um vírus. Vocês são a praga deste planeta. E nós... somos a cura.",
    "Sr. Anderson...",
    "Você ouve isso, Sr. Anderson? Isso é o som da inevitabilidade.",
    "Você está dizendo que eu posso desviar de balas?",
    "Eu sei kung fu.",
    "Por que meus olhos doem?",
    "Porque você nunca os usou antes."
];

let phraseIndex = 0;
const typingSpeed = 50; // Velocidade de digitação em milissegundos
const delayBetweenPhrases = 1500; // Tempo em milissegundos entre as frases

function typeWriter(text, element, speed, callback) {
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
    }, speed);
}

function displayPhrases() {
    if (phraseIndex < phrases.length) {
        typeWriter(phrases[phraseIndex], terminalTextElement, typingSpeed, () => {
            phraseIndex++;
            setTimeout(displayPhrases, delayBetweenPhrases);
        });
    }
}

function startTerminal() {
    typeWriter(initialMessage, terminalTextElement, typingSpeed, () => {
        setTimeout(displayPhrases, delayBetweenPhrases);
    });
}

startTerminal();
