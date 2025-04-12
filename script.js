const terminalTextElement = document.getElementById('terminal-text');


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
