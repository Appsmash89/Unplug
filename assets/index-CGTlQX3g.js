(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){e.innerHTML=`
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
  `,document.getElementById(`close-roadmap`).addEventListener(`click`,()=>{t()})}function t(e,t){let n=document.createElement(`div`);n.id=`stealth-overlay`,n.className=`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 bg-surface`,n.innerHTML=`
    <div class="text-center">
      <h2 id="stealth-msg" class="font-heading text-4xl font-bold text-primary mb-4 animate-pulse">Breathe in...</h2>
      <div id="stealth-countdown" class="text-6xl font-bold text-primary/40 tabular-nums">5</div>
    </div>
  `,e.appendChild(n);let r=5,i=setInterval(()=>{r--;let e=document.getElementById(`stealth-countdown`);e&&(e.textContent=r),r<=0&&(clearInterval(i),n.classList.remove(`bg-surface`),n.style.backgroundColor=`#000000`,n.innerHTML=``,t&&t())},1e3);return{destroy:()=>{clearInterval(i),n.remove()}}}var n=class{constructor(e){this.targetMs=e*60*1e3,this.startTime=null,this.isSessionActive=!1,this.essenceKey=`unplug_ethereal_essence`}start(){this.isSessionActive=!0,console.log(`Session Tracker armed. Waiting for screen to hide...`),this.handleVisibility=()=>{if(document.visibilityState===`hidden`)this.startTime||(this.startTime=Date.now(),console.log(`Stealth Lock Detected at: ${new Date(this.startTime).toLocaleTimeString()}`));else if(document.visibilityState===`visible`&&this.startTime&&this.isSessionActive){let e=Date.now(),t=e-this.startTime;this.isSessionActive=!1,console.log(`Wake Detected at: ${new Date(e).toLocaleTimeString()}`),console.log(`Total Stealth Duration: ${Math.round(t/1e3)}s`),this.validateSession(t),document.removeEventListener(`visibilitychange`,this.handleVisibility)}},document.addEventListener(`visibilitychange`,this.handleVisibility)}validateSession(e){e>=this.targetMs?(this.awardEssence(),this.onComplete(!0,e)):this.onComplete(!1,e)}awardEssence(){let e=parseInt(localStorage.getItem(this.essenceKey)||`0`);e+=1,localStorage.setItem(this.essenceKey,e.toString()),console.log(`Ethereal Essence awarded! Total: ${e}`)}getEssence(){return parseInt(localStorage.getItem(this.essenceKey)||`0`)}onComplete(e,t){}};document.addEventListener(`DOMContentLoaded`,()=>{`serviceWorker`in navigator&&navigator.serviceWorker.register(`/Unplug/sw.js`).then(e=>console.log(`SW registered: `,e.scope)).catch(e=>console.log(`SW registration failed: `,e));let r={onboarding:document.getElementById(`screen-onboarding`),timer:document.getElementById(`screen-timer`),active:document.getElementById(`screen-active`),summary:document.getElementById(`screen-summary`),roadmap:document.getElementById(`screen-roadmap`)};function i(t){Object.values(r).forEach(e=>{e&&e.classList.remove(`active`)}),r[t]&&(r[t].classList.add(`active`),t===`roadmap`&&e(document.getElementById(`roadmap-container`),()=>i(`summary`)))}document.querySelectorAll(`[data-goto]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.goto;i(t)})});let a=document.getElementById(`dial-container`),o=document.getElementById(`dial-progress`),s=document.getElementById(`dial-hit-area`),c=document.getElementById(`dial-time`),l=document.getElementById(`active-time`),u=document.getElementById(`summary-time`),d=30,f=2*Math.PI*45;function p(e){d=Math.max(1,Math.min(e,60));let t=`${d.toString().padStart(2,`0`)}:00`;c.textContent=t,l.textContent=t,u.textContent=`${d}m`;let n=f-d/60*f;o.style.strokeDashoffset=n}o.style.strokeDasharray=f,p(d);let m=!1;function h(e){if(!a)return;let t=a.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=e.clientX,o=e.clientY;e.touches&&e.touches.length>0&&(i=e.touches[0].clientX,o=e.touches[0].clientY);let s=i-n,c=o-r,l=180/Math.PI*Math.atan2(c,s);l+=90,l<0&&(l+=360);let u=Math.round(l/360*60);u===0&&(u=60),p(u)}s.addEventListener(`pointerdown`,e=>{m=!0,h(e),s.setPointerCapture(e.pointerId)}),s.addEventListener(`pointermove`,e=>{m&&h(e)}),s.addEventListener(`pointerup`,e=>{m=!1,s.releasePointerCapture(e.pointerId)}),s.addEventListener(`pointercancel`,e=>{m=!1});let g=document.getElementById(`stealth-mount`),_=document.getElementById(`summary-essence`),v=null;function y(){let e=new n(0);_&&(_.textContent=e.getEssence())}y();let b=document.querySelector(`[data-goto="active"]`);b&&b.addEventListener(`click`,e=>{e.stopImmediatePropagation(),v=new n(d);let r=t(g,()=>{v.start(),i(`active`)});v.onComplete=(e,t)=>{r.destroy(),y(),i(`summary`),console.log(e?`FOCUS MISSION SUCCESSFUL`:`FOCUS MISSION FAILED - Woke up too early`)}});let x=document.getElementById(`dev-trigger`),S=0,C=0;x&&x.addEventListener(`click`,()=>{let e=Date.now();e-C<500?S++:S=1,C=e,S>=5&&(S=0,i(`roadmap`))})});