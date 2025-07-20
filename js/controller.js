import { model } from "./model.js";
import { view } from "./view.js";

function updateCountdown() {
  const time = model.getTimeRemaining();

  if (time.total <= 0) {
    clearInterval(interval);
    return;
  }

  view.update(time);
}

updateCountdown(); // Atualiza ao carregar
const interval = setInterval(updateCountdown, 1000); // Atualiza a cada segundo