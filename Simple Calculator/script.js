
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'x') {
            buttonText = '*';
            screenValue += buttonText;
        } else if (buttonText === 'C') {
            screenValue = '';
        } else if (buttonText === '=') {
            try {
                screen.value = eval(screenValue);
                screenValue = screen.value;
            } catch (error) {
                screen.value = 'Error';
                screenValue = '';
            }
        } else if (buttonText === '%') {
            screenValue = eval(screenValue) / 100;
            screen.value = screenValue;
        } else if (buttonText === '.') {
            if (!screenValue.includes('.')) {
                screenValue += buttonText;
            }
        } else {
            screenValue += buttonText;
        }

        screen.value = screenValue;
    });
}

