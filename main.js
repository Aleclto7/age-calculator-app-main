// Obtainin Current Date
const date = new Date;
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const iDay = document.querySelector('#day')
const iMonth = document.querySelector('#month')
const iYear = document.querySelector('#year')
const button = document.querySelector('.calculator__img').addEventListener('click', () => { // Age formula
    if (iDay.value != 0 & iMonth.value != 0 & iYear.value != 0) {
        if (iDay.checkValidity() & iMonth.checkValidity() & iYear.checkValidity()) {
            rDay = day - iDay.value
            rMonth = month - iMonth.value + 12
            rYear = year - iYear.value -1
            result(rDay, rMonth, rYear)
        } else {
            console.log('Error, Los valores ingresados son invalidos');
        }
    } else {
        console.log('Error, Los valores estan vacios');
    }
})

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

