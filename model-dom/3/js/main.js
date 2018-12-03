'use strict';

let wszystkieZgody = document.getElementById('wszystkie-zgody');
let zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
let zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');
let formularz = document.getElementById('formularz');
let imieInput = document.getElementById('name');
let emailInput = document.getElementById('email');

wszystkieZgody.addEventListener('change', () => {

    let checked = wszystkieZgody.checked

    zgodaMarketingowa1.checked = checked;
    zgodaMarketingowa2.checked = checked;
    zgodaMarketingowa1.disabled = checked;
    zgodaMarketingowa2.disabled = checked;

});

const waliduj = (e) => {
    let saBledy = false;

    if (imieInput.value.trim() == '') {
        console.log('Uzupelnij pole: Imie i Nazwisko');
        saBledy = true;
    }
    if (emailInput.value.trim() == '') {
        console.log('Uzupelnij pole: Email');
        saBledy = true;
    }
    if (!zgodaMarketingowa1.checked) {
        console.log('Zaznacz zgodę marketingową 1');
        saBledy = true;
    }

    if (saBledy) {
        e.preventDefault();
    }
}

formularz.addEventListener('submit', waliduj);


// console.log(emailInput);