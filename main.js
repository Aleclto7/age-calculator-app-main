// Obtainin Current Date
const date = new Date;
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const iDay = document.querySelector('#day')
const iMonth = document.querySelector('#month')
const iYear = document.querySelector('#year')
const button = document.querySelector('.calculator__img')

// Conditions for date entries
iMonth.addEventListener('input', () => {
    if (iMonth.value == 4 || 6 || 9 || 11) {
        iDay.max = 30
    } else if (iMonth.value == 2) {
        iDay.max = 28
    }else {
        iDay.max = 31
    }
})
iYear.addEventListener('input', () => {
    if (iYear.value >= year) {
        iYear.max = year
    }
})

