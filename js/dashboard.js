/**
 * CRM Atendimento & Vendas - Dashboard Logic
 * Cronômetro em tempo real, atualização dinâmica e microinterações
 */

let timerInterval = null;
let timerRunning = true;
let seconds = 42;
let minutes = 18;
let hours = 0;

function updateTimerDisplay() {
  const timerElem = document.getElementById('operatorTimer');
  if (!timerElem) return;

  const hStr = String(hours).padStart(2, '0');
  const mStr = String(minutes).padStart(2, '0');
  const sStr = String(seconds).padStart(2, '0');
  timerElem.textContent = `${hStr}:${mStr}:${sStr}`;
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!timerRunning) return;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
    updateTimerDisplay();
  }, 1000);
}

function toggleTimerPause() {
  timerRunning = !timerRunning;
  const btn = document.getElementById('btnPauseTimer');
  if (btn) {
    if (timerRunning) {
      btn.innerHTML = '<span class="material-symbols-outlined fs-sm">pause</span><span>Pausar</span>';
      btn.classList.remove('btn-success');
      btn.classList.add('btn-warning');
    } else {
      btn.innerHTML = '<span class="material-symbols-outlined fs-sm">play_arrow</span><span>Retomar</span>';
      btn.classList.remove('btn-warning');
      btn.classList.add('btn-success');
    }
  }
}

function completeActiveAttendance() {
  clearInterval(timerInterval);
  timerRunning = false;
  alert('Atendimento #NX-8821 finalizado com sucesso! Tempo total registrado na sessão.');
  const timerElem = document.getElementById('operatorTimer');
  if (timerElem) timerElem.textContent = '00:00:00';
  seconds = 0;
  minutes = 0;
  hours = 0;
}

function refreshDashboardData() {
  const refreshIcon = document.getElementById('refreshIcon');
  if (refreshIcon) {
    refreshIcon.classList.add('spin-animation');
    setTimeout(() => {
      refreshIcon.classList.remove('spin-animation');
    }, 800);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  startTimer();

  const btnPause = document.getElementById('btnPauseTimer');
  const btnComplete = document.getElementById('btnCompleteTimer');
  const btnRefresh = document.getElementById('refreshDataBtn');

  if (btnPause) btnPause.addEventListener('click', toggleTimerPause);
  if (btnComplete) btnComplete.addEventListener('click', completeActiveAttendance);
  if (btnRefresh) btnRefresh.addEventListener('click', refreshDashboardData);
});
