// Obtainin Current Date
const date = new Date;
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const iDay = document.querySelector('#day')
const iMonth = document.querySelector('#month')
const iYear = document.querySelector('#year')

// Age formula
const button = document.querySelector('.calculator__img').addEventListener('click', () => { 
    if (iDay.value != 0 & iMonth.value != 0 & iYear.value != 0) {
        if (iDay.checkValidity() & iMonth.checkValidity() & iYear.checkValidity()) {
            var rDay = day - iDay.value
            var rMonth = month - iMonth.value + 12
            var rYear = year - iYear.value -1
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
    } if (iMonth.value == 2) {
        iDay.max = 28
    }else {
        iDay.max = 31
    }
    validvalues(); 
    invalidValues(); 
    emptyvalues()
})
iYear.addEventListener('input', () => {
    if (iYear.value >= year) {
        iYear.max = year
    }
    validvalues(); 
    invalidValues(); 
    emptyvalues()
})
iDay.addEventListener('input', () => {validvalues(); invalidValues(); emptyvalues() })

// Print result on screen
function result(vDay, vMonth, vYear) {
    const htmlDay = document.querySelector('.result__day')
    const htmlMonth = document.querySelector('.result__month')
    const htmlYear = document.querySelector('.result__year')
    htmlDay.innerHTML = `${vDay}`
    htmlMonth.innerHTML = `${vMonth}`
    htmlYear.innerHTML = `${vYear}`

    htmlDay.classList.toggle('result-animated');
    htmlMonth.classList.toggle('result-animated');
    htmlYear.classList.toggle('result-animated');

}
// Error messages
function invalidValues() {
    if (!iDay.checkValidity()) {
        iDay.nextElementSibling.classList.remove('inactive');
    } if (!iMonth.checkValidity()) {
        iMonth.nextElementSibling.classList.remove ('inactive')
    } if (!iYear.checkValidity()) {
        iYear.nextElementSibling.classList.remove ('inactive')
    }
}
function validvalues() {
    if (iDay.checkValidity()) {
        iDay.nextElementSibling.classList.add('inactive');
    } if (iMonth.checkValidity()) {
        iMonth.nextElementSibling.classList.add ('inactive')
    } if (iYear.checkValidity()) {
        iYear.nextElementSibling.classList.add ('inactive')
    }
}
function emptyvalues() {
    if (iDay.value <= 0) {
        iDay.nextElementSibling.classList.remove('inactive')
    } if (iMonth.value <= 0) {
        iMonth.nextElementSibling.classList.remove ('inactive')
    } if (iYear.value <= 0) {
        iYear.nextElementSibling.classList.remove ('inactive')
    }
}