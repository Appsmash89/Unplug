import './style.css';
import { renderRoadmap } from './roadmap.js';

document.addEventListener('DOMContentLoaded', () => {
  // Screen Router Logic
  const screens = {
    onboarding: document.getElementById('screen-onboarding'),
    timer: document.getElementById('screen-timer'),
    active: document.getElementById('screen-active'),
    summary: document.getElementById('screen-summary'),
    roadmap: document.getElementById('screen-roadmap'),
  };

  function navigateTo(screenId) {
    Object.values(screens).forEach(screen => {
      if (screen) screen.classList.remove('active');
    });
    if (screens[screenId]) {
      screens[screenId].classList.add('active');
      
      // Initialize roadmap content if navigating there
      if(screenId === 'roadmap') {
        renderRoadmap(document.getElementById('roadmap-container'), () => navigateTo('summary'));
      }
    }
  }

  // Hook up navigation buttons
  document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget.dataset.goto;
      navigateTo(target);
    });
  });

  // SVG Circular Dial Logic (Simplified Click-Drag)
  const dialContainer = document.getElementById('dial-container');
  const dialProgress = document.getElementById('dial-progress');
  const dialHitArea = document.getElementById('dial-hit-area');
  const dialTimeDisplay = document.getElementById('dial-time');
  const activeTimeDisplay = document.getElementById('active-time');
  const summaryTimeDisplay = document.getElementById('summary-time');
  
  let currentMinutes = 30;
  const maxMinutes = 60;
  // Circumference of circle with r=45 is 2 * PI * 45 = 282.74
  const circumference = 2 * Math.PI * 45;

  function updateDial(minutes) {
    currentMinutes = Math.max(1, Math.min(minutes, maxMinutes));
    const formatted = `${currentMinutes.toString().padStart(2, '0')}:00`;
    
    // Update text
    dialTimeDisplay.textContent = formatted;
    activeTimeDisplay.textContent = formatted;
    summaryTimeDisplay.textContent = `${currentMinutes}m`;

    // Update SVG stroke-dashoffset
    // progress fraction 0 to 1
    const fraction = currentMinutes / maxMinutes;
    const offset = circumference - (fraction * circumference);
    dialProgress.style.strokeDashoffset = offset;
  }

  // Initialize
  dialProgress.style.strokeDasharray = circumference;
  updateDial(currentMinutes);

  let isDragging = false;
  
  function handlePointerInteraction(e) {
    if (!dialContainer) return;
    const rect = dialContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    let clientX = e.clientX;
    let clientY = e.clientY;
    
    if(e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    }

    const x = clientX - centerX;
    const y = clientY - centerY;
    
    // Calculate angle from 12 o'clock (top)
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    // Transform so 0 offset is top
    angle = angle + 90;
    if (angle < 0) angle += 360;

    // Map angle (0-360) to minutes (0-60)
    let selectedMinutes = Math.round((angle / 360) * maxMinutes);
    if(selectedMinutes === 0) selectedMinutes = maxMinutes; // At top, allow 60
    
    updateDial(selectedMinutes);
  }

  // Event Listeners for Dial
  dialHitArea.addEventListener('pointerdown', (e) => {
    isDragging = true;
    handlePointerInteraction(e);
    dialHitArea.setPointerCapture(e.pointerId);
  });

  dialHitArea.addEventListener('pointermove', (e) => {
    if (isDragging) {
      handlePointerInteraction(e);
    }
  });

  dialHitArea.addEventListener('pointerup', (e) => {
    isDragging = false;
    dialHitArea.releasePointerCapture(e.pointerId);
  });

  dialHitArea.addEventListener('pointercancel', (e) => {
    isDragging = false;
  });
});
