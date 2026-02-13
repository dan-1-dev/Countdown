import { model } from "./model.js";
import { view } from "./view.js";

function updateCountdown1() {
  const time1 = model.getTimeRemaining1();

  if (time1.total <= 0) {
    clearInterval(interval);
    return;
  }

  view.update(time1);
  
}
function updateCountdown() {
  const time = model.getTimeRemaining();

  if (time.total <= 0) {
    clearInterval(interval);
    return;
  }
 
  view.update(time);
  
}
// updateCountdown1();// Atualiza ao carregar
updateCountdown(); // Atualiza ao carregar
// const interval1 = setInterval(updateCountdown1, 1000); // Atualiza a cada segundo
const interval = setInterval(updateCountdown, 1000); // Atualiza a cada segundo
