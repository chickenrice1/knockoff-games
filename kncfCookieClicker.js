let cookies = 0;
let cursors = 0;
let grandma = 0;
let farm = 0;
let factory = 0;
let mine = 0;
let cookieBombs = 0;
let prestigeBonus = 1;
let autoClicker = 0;
//---------------Revert after testing--------------->
document.getElementById('clicker').addEventListener('click', () => {
    cookies += 1 * prestigeBonus;
    updateDisplay();
});
//----------------------------------------------------------------------------------------------
            
document.getElementById('cursor').addEventListener('click', () => {
    if (cookies >= 50) {
        cookies -= 50;
        cursors++;
        setInterval(() => {
            cookies += 0.1;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

document.getElementById('buy-all-cursors').addEventListener('click', () => {
    while (cookies >= 50) {
        cookies -= 50;
        cursors++;
        setInterval(() => {
            cookies += 0.1;
            updateDisplay();
        }, 1000);
    }
    updateDisplay();
});

document.getElementById('grandma').addEventListener('click', () => {
    if (cookies >= 100) {
        cookies -= 100;
        grandma++;
        setInterval(() => {
            cookies++;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

document.getElementById('buy-all-grandmas').addEventListener('click', () => {
    while (cookies >= 100) {
        cookies -= 100;
        grandma++;
        setInterval(() => {
            cookies++;
            updateDisplay();
        }, 1000);
    }
    updateDisplay();
});

document.getElementById('farm').addEventListener('click', () => {
    if (cookies >= 1000) {
        cookies -= 1000;
        farm++;
        setInterval(() => {
            cookies += 10;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

document.getElementById('buy-all-farms').addEventListener('click', () => {
    while (cookies >= 1000) {
        cookies -= 1000;
        farm++;
        setInterval(() => {
            cookies += 10;
            updateDisplay();
        }, 1000);
    }
    updateDisplay();
});

document.getElementById('factory').addEventListener('click', () => {
    if (cookies >= 10000) {
        cookies -= 10000;
        factory++;
        setInterval(() => {
            cookies += 100;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

document.getElementById('buy-all-factories').addEventListener('click', () => {
    while (cookies >= 10000) {
        cookies -= 10000;
        factory++;
        setInterval(() => {
            cookies += 100;
            updateDisplay();
        }, 1000);
    }
    updateDisplay();
});

document.getElementById('mine').addEventListener('click', () => {
    if (cookies >= 1000000) {
        cookies -= 1000000;
        mine++;
        setInterval(() => {
            cookies += 1000;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

document.getElementById('buy-all-mines').addEventListener('click', () => {
    while (cookies >= 1000000) {
        cookies -= 1000000;
        mine++;
        setInterval(() => {
            cookies += 1000;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
 });
//keep tweaking Element 'cookieBombs' until working properly
document.getElementById('cookieBombs').addEventListener('click', () => {
    if (cookies >= 7000) {
        cookies -= 7000;
        cookieBombs++;
        setInterval(() => {
            grandma += 115;
            updateDisplay();
        }, 1000);
        updateDisplay();
    }
});

document.getElementById('buy-all-cookieBombs').addEventListener('click', () => {
    while (cookies >= 7000) {
        cookies -= 7000;
        cookieBombs++;
        setInterval(() => {
            cookies += 7000;
            updateDisplay();
        }, 7000); // fixed this section
        updateDisplay();
    }
});


document.getElementById('prestigeBonus').addEventListener('click', () => {
    if (cookies >= 1000000000) {
        cookies -= 1000000000;
        prestigeBonus *= 5;
        resetGame();
        updateDisplay();
    }
});

document.getElementById('autoClicker').addEventListener('click', () => {
    if (cookies >= 1000000000000000) {
        cookies -= 1000000000000000;
        setInterval(() => {
            cookies += 1;
            updateDisplay();
        }, 10); //0.01 seconds = 10 milliseconds
    }
    updateDisplay();
});

function resetGame() {
    cookies = 0;
    cursors = 0;
    grandma = 0;
    farm = 0;
    factory = 0;
    mine = 0;
    cookieBombs = 0;
    autoClicker = 0;
    // Clear all intervals
    const highestIntervalId = setInterval(() => {}, 1000);
    for (let i = 0; i < highestIntervalId; i++) {
        clearInterval(i);
    }
}

function updateDisplay() {
    document.getElementById('cookie-count').textContent = cookies.toFixed(1);
    document.getElementById('cursor-count').textContent = cursors;
    document.getElementById('grandma-count').textContent = grandma;
    document.getElementById('farm-count').textContent = farm;
    document.getElementById('factory-count').textContent = factory;
    document.getElementById('mine-count').textContent = mine;
    document.getElementById('bomb-count').textContent = cookieBombs;
    document.getElementById('prestigeBonus').textContent = prestigeBonus;
    document.getElementById('autoclick-count').textContent = autoclickers;

}