export const model = {
  targetDate1: new Date("2026-05-01T00:00:00"),
  targetDate: new Date("2026-05-29T00:00:00"),

  getTimeRemaining1() {
    const now = new Date();
    const total = this.targetDate1 - now;

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    let daysLeft = Math.ceil(total / days);

    // Limitar entre 0 e 365
    daysLeft = Math.max(0, Math.min(365, daysLeft));
    // Cálculo de posição (trajeto de 365px, 1px por dia)
    const totalWidth = 365;
    const currentPosition = totalWidth - daysLeft;
    const walker = document.getElementById("walker");
    //walker.style.left = `${currentPosition}px`;
    //document.getElementById("daysLeftDisplay");

    return { total, days, hours, minutes, seconds };
  }
    getTimeRemaining() {
    const now = new Date();
    const total = this.targetDate - now;

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    let daysLeft = Math.ceil(total / days);

    // Limitar entre 0 e 365
    daysLeft = Math.max(0, Math.min(365, daysLeft));
    // Cálculo de posição (trajeto de 365px, 1px por dia)
    const totalWidth = 365;
    const currentPosition = totalWidth - daysLeft;
    const walker = document.getElementById("walker");
    //walker.style.left = `${currentPosition}px`;
    //document.getElementById("daysLeftDisplay");

    return { total, days, hours, minutes, seconds };
  }
};
