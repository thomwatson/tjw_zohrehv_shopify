!function(){"use strict";customElements.get("parallax-hero")||customElements.define("parallax-hero",class extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.querySelector("[data-parallax-img]");e&&(this.rellax=new window.theme.LoadRellax(this,e),window.addEventListener("load",(()=>{"function"==typeof this.rellax.refresh&&this.rellax.refresh()})))}disconnectedCallback(){"function"==typeof this.rellax.refresh&&this.rellax.refresh()}})}();
