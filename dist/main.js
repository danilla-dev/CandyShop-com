(()=>{var e={369:()=>{const e=document.querySelectorAll("img"),t=()=>{window.innerWidth>=768?e.forEach((e=>{const t=e.getAttribute("src");if(t.includes("-sm")){const n=t.replaceAll("-sm.jpg","-lg.jpg");e.setAttribute("src",n)}})):e.forEach((e=>{const t=e.getAttribute("src");if(t.includes("-lg")){const n=t.replaceAll("-lg.jpg","-sm.jpg");e.setAttribute("src",n)}}))};document.addEventListener("DOMContentLoaded",t),window.addEventListener("resize",t)},971:()=>{const e=document.querySelector(".slider"),t=document.querySelector(".slider__prev-btn"),n=document.querySelector(".slider__next-btn");let r=0;const o=e.children.length;let c;const l=e=>{r<o-1?r+=e:r=0},s=()=>{console.log("dziala"),e.style.transform=`translateX(-${100*r}%)`},d=()=>{clearInterval(c),c=setInterval((()=>{l(1),s()}),4e3)};n.addEventListener("click",(()=>{d(),r<o-1?r++:r=0,s()})),t.addEventListener("click",(()=>{d(),r>0?r--:r=o-1,s()})),document.addEventListener("DOMContentLoaded",(()=>{c=setInterval((()=>{l(1),s()}),4e3)}))},609:()=>{const e=document.querySelector(".nav-btn"),t=document.querySelector(".nav-menu"),n=document.querySelector(".nav-menu__btn"),r=document.querySelector(".blur"),o=document.querySelectorAll(".dropdown"),c=document.querySelector(".nav-menu__categories"),l=(document.querySelectorAll(".arrow"),document.querySelector(".nav-search")),s=e=>{const t=e.target.closest(".nav-menu__category").querySelector(".dropdown");null==t&&"arrow"!=e.target.parentElement.className||t.classList.toggle("dropdown--active")},d=()=>{t.classList.remove("nav-menu--active"),r.style.display="none",e.style.display="block",document.body.classList.remove("remove-scrolling"),o.forEach((e=>e.classList.remove("dropdown--active")))};e.addEventListener("click",(()=>{t.classList.add("nav-menu--active"),r.style.display="block",e.style.display="none",document.body.classList.add("remove-scrolling"),(()=>{const e=document.documentElement.scrollTop||document.body.scrollTop;r.style.top=e+"px"})()})),n.addEventListener("click",d),window.addEventListener("click",(n=>{!t.contains(n.target)&&!e.contains(n.target)&&window.innerWidth<996&&d()})),document.addEventListener("DOMContentLoaded",(()=>{window.innerWidth<996?c.addEventListener("click",s):c.removeEventListener("click",s)})),window.addEventListener("scroll",(()=>{window.scrollY>20?l.style.opacity="0.1":l.style.opacity="1.0",l.addEventListener("click",(()=>l.style.opacity="1"))}))},309:()=>{const e=document.querySelector(".news-slider-container"),t=e.querySelector(".slider"),n=e.querySelector(".slider__prev-btn"),r=e.querySelector(".slider__next-btn");let o=0;const c=2*t.children.length-1,l=()=>{window.innerWidth>=768?t.style.transform=`translateX(-${30*o}%)`:t.style.transform=`translateX(-${50*o}%)`};n.addEventListener("click",(()=>{o>0?o--:o=c-1,l()})),r.addEventListener("click",(()=>{let e;e=window.innerWidth>=768?2:1,o<c-e?o++:o=0,l()}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(609),n(971),n(309),n(369)})()})();