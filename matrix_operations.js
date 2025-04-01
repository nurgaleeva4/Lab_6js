// 1h. Обработка матрицы
function processMatrix() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Введите порядок матрицы n: ', nStr => {
        const n = parseInt(nStr);
        const matrix = Array.from({length: n}, () =>
            Array.from({length: n}, () => Math.floor(Math.random() * 100)));

        console.log('Исходная матрица:');
        console.log(matrix.map(row => row.join(' ')).join('\n'));

        // Находим min и max на диагоналях
        let min = Infinity, max = -Infinity;
        for (let i = 0; i < n; i++) {
            // Главная диагональ
            const mainVal = matrix[i][i];
            if (mainVal < min) min = mainVal;
            if (mainVal > max) max = mainVal;

            // Побочная диагональ
            if (i !== n - 1 - i) {
                const secondaryVal = matrix[i][n - 1 - i];
                if (secondaryVal < min) min = secondaryVal;
                if (secondaryVal > max) max = secondaryVal;
            }
        }

        // Заменяем элементы на диагоналях (кроме min и max) на 0
        for (let i = 0; i < n; i++) {
            // Главная диагональ
            if (matrix[i][i] !== min && matrix[i][i] !== max) {
                matrix[i][i] = 0;
            }

            // Побочная диагональ
            if (i !== n - 1 - i && matrix[i][n - 1 - i] !== min && matrix[i][n - 1 - i] !== max) {
                matrix[i][n - 1 - i] = 0;
            }
        }

        console.log('\nРезультат:');
        console.log(matrix.map(row => row.join(' ')).join('\n'));
        readline.close();
    });
}

// Запуск функции
processMatrix();
