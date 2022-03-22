
const $cuenta = document.getElementById("cuenta");
const $propina = document.getElementById("propina");
const $btn_calcular = document.getElementById("btn-calcular");

const $total_cuenta = document.getElementById("total-cuenta");
const $total_propina = document.getElementById("total-propina");
const $total = document.getElementById("total");

function calcularVenta(cuenta,propina,){
    
   let total_propina = cuenta / propina
   let total_pagar = parseFloat(cuenta) + parseFloat(total_propina)


    $total_cuenta.innerHTML  = `$ ${cuenta.toString()}`;
    $total_propina.innerHTML = `$ ${total_propina.toString()}`;
    $total.innerHTML =`$ ${total_pagar.toString()}`;
}

document.addEventListener("click", e => {
    e.preventDefault()
    if (e.target === $btn_calcular) {
        calcularVenta($cuenta.value,$propina.value)
    }
})
