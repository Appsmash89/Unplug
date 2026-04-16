/**
 * Lumina Guardian Component
 * Minimalist, ethereal cloud-like creature with 5 levels of glow intensity.
 */
export class Lumina {
  constructor() {
    this.element = this.create();
    this.currentLevel = 0;
    this.updateGlow(0);
  }

  create() {
    const el = document.createElement('div');
    el.id = 'lumina-guardian';
    el.className = 'lumina lumina-glow-0';
    return el;
  }

  mount(container) {
    container.appendChild(this.element);
  }

  updateGlow(level) {
    this.currentLevel = Math.max(0, Math.min(level, 4));
    
    // Remove all glow classes
    for (let i = 0; i <= 4; i++) {
      this.element.classList.remove(`lumina-glow-${i}`);
    }
    
    // Add current glow class
    this.element.classList.add(`lumina-glow-${this.currentLevel}`);
    
    console.log(`Lumina adjusted to Glow Level ${this.currentLevel}`);
  }

  reset() {
    this.updateGlow(0);
  }
}
