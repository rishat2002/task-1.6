!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t){var n,o=document.querySelectorAll(".show-more");function c(e,t){t.addEventListener("click",(function(){e.section.classList.contains("container--all")&&e.section.classList.contains("article__text-container")?(e.section.classList.remove("container--all"),t.textContent="Читать далее",t.classList.remove("show-more--rotate")):e.section.classList.contains("container--all")?(e.section.classList.remove("container--all"),t.textContent="Показать все",t.classList.remove("show-more--rotate")):(e.section.classList.add("container--all"),t.textContent="Скрыть",t.classList.add("show-more--rotate"))}))}n=[{section:document.querySelector(".article__text-container")},{section:document.querySelector(".brands")},{section:document.querySelector(".devices")}];for(var r=0;r<n.length;r++)c(n[r],o[r])},function(e,t){var n=window.matchMedia("(max-width: 767px)");function o(e){e.matches&&new Swiper(".swiper-container",{slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}})}n.addListener(o),o(n)},function(e,t){var n=document.querySelector(".menu"),o=document.querySelector(".menu .ui-button--close"),c=document.querySelector(".header__button-burger"),r=document.querySelector(".overlay--menu"),i=[];function a(){n.classList.remove("menu--active"),r.classList.remove("overlay--active"),c.addEventListener("click",l),r.removeEventListener("click",d),o.removeEventListener("click",s),document.removeEventListener("keydown",v)}function l(){n.classList.add("menu--active"),r.classList.add("overlay--active"),r.addEventListener("click",d),o.addEventListener("click",s),document.addEventListener("keydown",v),c.removeEventListener("click",l)}function s(){a()}function d(){a()}function u(e){return e.classList.contains("modal--active")}function v(e){i.some(u)||27===e.keyCode&&a()}i=[document.querySelector(".modal--feedback"),document.querySelector(".modal--call")],console.log("hello"),c.addEventListener("click",l)},function(e,t){var n=document.querySelector(".overlay--modal"),o=document.querySelectorAll(".ui-button--call"),c=document.querySelector(".modal--call .modal__close"),r=document.querySelector(".modal--feedback .modal__close"),i=document.querySelectorAll(".ui-button--chat"),a=document.querySelector(".modal--feedback"),l=document.querySelector(".modal--call");function s(){n.classList.remove("overlay--active"),l.classList.remove("modal--active"),n.removeEventListener("click",m),c.removeEventListener("click",v),document.removeEventListener("keydown",y)}function d(){a.classList.remove("modal--active"),n.classList.remove("overlay--active"),n.removeEventListener("click",k),r.removeEventListener("click",L),document.removeEventListener("keydown",y)}function u(){n.classList.add("overlay--active"),l.classList.add("modal--active"),n.addEventListener("click",m),c.addEventListener("click",v),document.addEventListener("keydown",y)}function v(){s()}function m(){s()}function f(){n.classList.add("overlay--active"),a.classList.add("modal--active"),n.addEventListener("click",k),r.addEventListener("click",L),document.addEventListener("keydown",y)}function L(){d()}function y(e){27===e.keyCode&&(a.classList.contains("modal--active")?d():l.classList.contains("modal--active")&&s())}function k(){d()}for(var E=0;E<o.length;E++)o[E].addEventListener("click",u);for(var b=0;b<i.length;b++)i[b].addEventListener("click",f)}]);
//# sourceMappingURL=bundle.js.map