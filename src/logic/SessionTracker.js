/**
 * SessionTracker Logic
 * Manages timestamps and invisibility-based focus validation.
 */
export class SessionTracker {
  constructor(targetMinutes) {
    this.targetMs = targetMinutes * 60 * 1000;
    this.startTime = null;
    this.isSessionActive = false;
    this.essenceKey = 'unplug_ethereal_essence';
  }

  start() {
    this.isSessionActive = true;
    console.log('Session Tracker armed. Waiting for screen to hide...');
    
    // Listen for visibility change
    this.handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (!this.startTime) {
          this.startTime = Date.now();
          console.log(`Stealth Lock Detected at: ${new Date(this.startTime).toLocaleTimeString()}`);
        }
      } else if (document.visibilityState === 'visible') {
        if (this.startTime && this.isSessionActive) {
          const wakeTime = Date.now();
          const actualDurationMs = wakeTime - this.startTime;
          this.isSessionActive = false;
          
          console.log(`Wake Detected at: ${new Date(wakeTime).toLocaleTimeString()}`);
          console.log(`Total Stealth Duration: ${Math.round(actualDurationMs / 1000)}s`);
          
          this.validateSession(actualDurationMs);
          document.removeEventListener('visibilitychange', this.handleVisibility);
        }
      }
    };

    document.addEventListener('visibilitychange', this.handleVisibility);
  }

  validateSession(actualMs) {
    if (actualMs >= this.targetMs) {
      this.awardEssence();
      this.onComplete(true, actualMs);
    } else {
      this.onComplete(false, actualMs);
    }
  }

  awardEssence() {
    let current = parseInt(localStorage.getItem(this.essenceKey) || '0');
    current += 1;
    localStorage.setItem(this.essenceKey, current.toString());
    console.log(`Ethereal Essence awarded! Total: ${current}`);
  }

  getEssence() {
    return parseInt(localStorage.getItem(this.essenceKey) || '0');
  }

  onComplete(success, durationMs) {
    // To be overridden by main.js
  }
}
