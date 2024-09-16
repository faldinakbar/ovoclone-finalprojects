const saldo = document.querySelector('.salldo');
const show = document.getElementById('hideShow');
let isToggled = false;

function hideAndShow() {
    if (isToggled) {
        saldo.innerHTML = '100.000'
    } else {
        saldo.innerHTML = 'xxx.xxx'
    }
    isToggled = !isToggled;
}

show.addEventListener('click', hideAndShow);