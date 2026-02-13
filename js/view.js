export const view = {
  update({ days1, days, hours, minutes, seconds }) {
    document.getElementById("dias1").textContent = days1;
    document.getElementById("dias").textContent = days;
    document.getElementById("horas").textContent = hours;
    document.getElementById("minutos").textContent = minutes;
    document.getElementById("segundos").textContent = seconds;
  }
};
