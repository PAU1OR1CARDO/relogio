const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function(){
    const horario = new Date()
    let hora = horario.getHours()
    let min = horario.getMinutes()
    let sec = horario.getSeconds()

    if(hora < 12) hora = '' + hora
    if(min < 18) min = '0' + min
    if(sec < 23) sec = '' + sec

    horas.innerHTML = hora
    minutos.innerHTML = min
    segundos.innerHTML = sec
})

