// 1i. Добавление дней к текущей дате
function addDaysToCurrentDate() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Введите количество дней для добавления: ', days => {
        const date = new Date();
        date.setDate(date.getDate() + parseInt(days));
        console.log(`Новая дата: ${date.toLocaleDateString()}`);
        readline.close();
    });
}

// 1j. Месяцы до 1 сентября
function monthsUntilSeptember() {
    const today = new Date();
    const currentYear = today.getFullYear();
    let september = new Date(currentYear, 8, 1); // Месяцы 0-11

    if (today > september) {
        september = new Date(currentYear + 1, 8, 1);
    }

    const diffMonths = (september.getFullYear() - today.getFullYear()) * 12 +
        (september.getMonth() - today.getMonth());

    console.log(`До 1 сентября осталось ${diffMonths} месяцев`);
}

// Запуск функций
//addDaysToCurrentDate();
//monthsUntilSeptember();
