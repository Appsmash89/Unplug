/**
 * StealthOverlay Component
 * Handles the "Breathe in..." countdown and the transition to black.
 */
export function createStealthOverlay(container, onBlackout) {
  const overlay = document.createElement('div');
  overlay.id = 'stealth-overlay';
  overlay.className = 'fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 bg-surface';
  
  overlay.innerHTML = `
    <div class="text-center">
      <h2 id="stealth-msg" class="font-heading text-4xl font-bold text-primary mb-4 animate-pulse">Breathe in...</h2>
      <div id="stealth-countdown" class="text-6xl font-bold text-primary/40 tabular-nums">5</div>
    </div>
  `;
  
  container.appendChild(overlay);
  
  let count = 5;
  const timer = setInterval(() => {
    count--;
    const countdownEl = document.getElementById('stealth-countdown');
    if (countdownEl) countdownEl.textContent = count;
    
    if (count <= 0) {
      clearInterval(timer);
      
      // Transition to blackout
      overlay.classList.remove('bg-surface');
      overlay.style.backgroundColor = '#000000';
      overlay.innerHTML = ''; // Clear text for pure black
      
      if (onBlackout) onBlackout();
    }
  }, 1000);
  
  return {
    destroy: () => {
      clearInterval(timer);
      overlay.remove();
    }
  };
}
