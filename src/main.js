import { renderRoadmap } from './roadmap.js';
import { createStealthOverlay } from './components/StealthOverlay.js';
import { SessionTracker } from './logic/SessionTracker.js';

document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/Unplug/sw.js')
      .then(reg => console.log('SW registered: ', reg.scope))
      .catch(err => console.log('SW registration failed: ', err));
  }

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

  // --- Mission 7.0: Lumina Stealth & Wake Detection ---
  
  const stealthMount = document.getElementById('stealth-mount');
  const summaryEssenceDisplay = document.getElementById('summary-essence');
  let activeTracker = null;

  // Initialize Essence display from localStorage
  function refreshEssenceDisplay() {
    const tempTracker = new SessionTracker(0);
    if (summaryEssenceDisplay) summaryEssenceDisplay.textContent = tempTracker.getEssence();
  }
  refreshEssenceDisplay();

  // Hook "Begin" button (already has data-goto="active", but we intercepted its behavior)
  const beginBtn = document.querySelector('[data-goto="active"]');
  if (beginBtn) {
    beginBtn.addEventListener('click', (e) => {
      // Don't navigate to "active" immediately. Start Stealth first.
      e.stopImmediatePropagation(); // Prevent default navigation
      
      activeTracker = new SessionTracker(currentMinutes);
      
      const overlay = createStealthOverlay(stealthMount, () => {
        // Callback: When blackout starts
        activeTracker.start();
        navigateTo('active'); // Switch screen to "Active" (which is behind the blackout)
      });

      activeTracker.onComplete = (success, durationMs) => {
        overlay.destroy();
        refreshEssenceDisplay();
        navigateTo('summary');
        
        if (success) {
          console.log("FOCUS MISSION SUCCESSFUL");
        } else {
          console.log("FOCUS MISSION FAILED - Woke up too early");
        }
      };
    });
  }

  // Developer Trigger (5 taps on title to see Roadmap)
  const devTrigger = document.getElementById('dev-trigger');
  let tapCount = 0;
  let lastTap = 0;

  if (devTrigger) {
    devTrigger.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastTap < 500) {
        tapCount++;
      } else {
        tapCount = 1;
      }
      lastTap = now;

      if (tapCount >= 5) {
        tapCount = 0;
        navigateTo('roadmap');
      }
    });
  }
});
