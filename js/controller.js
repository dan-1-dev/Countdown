import { model } from "./model.js";
import { view } from "./view.js";

function updateCountdown() {
  const time1 = model.getTimeRemaining1();
  const time = model.getTimeRemaining();

  if (time1.total <= 0) {
    clearInterval(interval);
    return;
  }
  if (time.total <= 0) {
    clearInterval(interval);
    return;
  }

  view.update(time1);
  view.update(time);
  
}
// Atualiza ao carregar
updateCountdown(); // Atualiza ao carregar
const interval1 = setInterval(updateCountdown1, 1000); // Atualiza a cada segundo
const interval = setInterval(updateCountdown, 1000); // Atualiza a cada segundo
