export function renderRoadmap(container, goBack) {
  container.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-12">
        <h2 class="font-heading text-4xl font-bold text-primary tracking-tight">Development Roadmap</h2>
        <button id="close-roadmap" class="text-gray-500 hover:text-gray-900 bg-surfaceContainer px-6 py-2 rounded-full font-medium transition-colors">Close</button>
      </div>

      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-surfaceContainer">
        
        <!-- Mission 1 & 2 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary ring-4 ring-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <svg class="w-4 h-4 fill-surface" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surfaceContainer p-6 rounded-2xl shadow-sm">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-heading font-bold text-primary text-xl">Mission 1 & 2</h3>
                <span class="text-xs font-bold uppercase tracking-wider text-surface bg-primary px-3 py-1 rounded-full">Complete</span>
            </div>
            <p class="text-sm text-gray-600 font-medium mb-1">Infrastructure & DNA</p>
            <p class="text-sm text-gray-500">Repository initialized, Vite setup, Tailwind tokens formulated, architectural implementation plan approved.</p>
          </div>
        </div>

        <!-- Mission 3 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary ring-4 ring-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <svg class="w-4 h-4 fill-surface" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surfaceContainer p-6 rounded-2xl shadow-sm">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-heading font-bold text-primary text-xl">Mission 3</h3>
                <span class="text-xs font-bold uppercase tracking-wider text-surface bg-primary px-3 py-1 rounded-full">Complete</span>
            </div>
            <p class="text-sm text-gray-600 font-medium mb-1">UI Construction</p>
            <p class="text-sm text-gray-500">Execution of 4-screen SPA, NO 1px borders rule enforcement, 500ms drift animations, logic implementation.</p>
          </div>
        </div>

        <!-- Mission 4 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-primary ring-4 ring-surface shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <svg class="w-4 h-4 fill-surface" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surfaceContainer p-6 rounded-2xl shadow-sm">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-heading font-bold text-primary text-xl">Mission 4</h3>
                <span class="text-xs font-bold uppercase tracking-wider text-surface bg-primary px-3 py-1 rounded-full">Complete</span>
            </div>
            <p class="text-sm text-gray-600 font-medium mb-1">PWA & Store Packaging</p>
            <p class="text-sm text-gray-500">Transforming SPA into an installable PWA and packaging for the Google Play Store via Bubblewrap.</p>
          </div>
        </div>

        <!-- Mission 5 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-surface ring-4 ring-surfaceContainer text-gray-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">
            <span class="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-6 rounded-2xl shadow-sm opacity-60">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-heading font-bold text-gray-500 text-xl">Mission 5</h3>
                <span class="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Pending</span>
            </div>
            <p class="text-sm text-gray-600 font-medium mb-1">Store Submission</p>
            <p class="text-sm text-gray-500">Deployment orchestration, Google Play Console setup, and final release review.</p>
          </div>
        </div>

      </div>
    </div>
  `;

  document.getElementById('close-roadmap').addEventListener('click', () => {
    goBack();
  });
}
