// 1g. Массив случайных чисел
function printReversedArray() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Введите количество элементов массива: ', nStr => {
        const n = parseInt(nStr);
        const arr = Array.from({length: n}, () => Math.floor(Math.random() * 100));

        console.log('Массив в обратном порядке по 5 элементов в строке:');
        for (let i = arr.length - 1; i >= 0; i -= 5) {
            const line = arr.slice(Math.max(i - 4, 0), i + 1).reverse();
            console.log(line.join(' '));
        }

        readline.close();
    });
}

// 1e. Доля латинских букв в строке
function latinLettersPercentage() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Введите строку: ', str => {
        let latinCount = 0;

        for (const char of str) {
            if (/[a-zA-Z]/.test(char)) {
                latinCount++;
            }
        }

        const percentage = (latinCount / str.length) * 100 || 0;
        console.log(`Доля латинских букв: ${percentage.toFixed(2)}%`);
        readline.close();
    });
}

// Запуск функций
//printReversedArray();
//latinLettersPercentage();
