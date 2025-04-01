// 1a. Вычисление sin(x)
function calculateSin() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Введите значение x: ', x => {
        console.log(`sin(${x}) = ${Math.sin(parseFloat(x))}`);
        readline.close();
    });
}

// 1b. Проверка принадлежности точки квадрату
function checkPointInSquare() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Введите координаты квадрата (x1 y1 x2 y2): ', coords => {
        const [x1, y1, x2, y2] = coords.split(' ').map(Number);
        readline.question('Введите координаты точки (x y): ', point => {
            const [x, y] = point.split(' ').map(Number);

            const minX = Math.min(x1, x2);
            const maxX = Math.max(x1, x2);
            const minY = Math.min(y1, y2);
            const maxY = Math.max(y1, y2);

            const isInside = x >= minX && x <= maxX && y >= minY && y <= maxY;
            console.log(`Точка ${isInside ? 'принадлежит' : 'не принадлежит'} квадрату`);
            readline.close();
        });
    });
}

// 1c. Проверка суммы двух квадратов
function checkSumOfSquares() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Введите натуральное число: ', numStr => {
        const num = parseInt(numStr);
        let result = false;

        for (let a = 1; a * a <= num; a++) {
            const b = Math.sqrt(num - a * a);
            if (b === Math.floor(b) && b > 0) {
                result = true;
                break;
            }
        }

        console.log(`Число ${num} ${result ? 'можно' : 'нельзя'} представить как сумму двух квадратов`);
        readline.close();
    });
}

// Запуск функций
//calculateSin();
//checkPointInSquare();
//checkSumOfSquares();
