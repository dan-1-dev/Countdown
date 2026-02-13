export const view = {
  update({ days, hours, minutes, seconds, begin }) {
    document.getElementById("dias").textContent = days;
    document.getElementById("horas").textContent = hours;
    document.getElementById("minutos").textContent = minutes;
    document.getElementById("segundos").textContent = seconds;
    document.getElementById("begin").textContent = begin;
  }
};
