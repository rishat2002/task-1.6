!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t){var n,c=document.querySelectorAll(".show-more");function o(e,t){t.addEventListener("click",(function(){e.section.classList.contains("container--all")&&e.section.classList.contains("article__text-container")?(e.section.classList.remove("container--all"),t.textContent="Читать далее",t.classList.remove("show-more--rotate")):e.section.classList.contains("container--all")?(e.section.classList.remove("container--all"),t.textContent="Показать все",t.classList.remove("show-more--rotate")):(e.section.classList.add("container--all"),t.textContent="Скрыть",t.classList.add("show-more--rotate"))}))}n=[{section:document.querySelector(".article__text-container")},{section:document.querySelector(".brands")},{section:document.querySelector(".devices")}];for(var i=0;i<n.length;i++)o(n[i],c[i])},function(e,t){var n=window.matchMedia("(max-width: 767px)");function c(e){e.matches&&new Swiper(".swiper-container",{slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}})}n.addListener(c),c(n)},function(e,t){var n=document.querySelector(".menu"),c=document.querySelector(".container"),o=document.querySelector(".menu__close-btn"),i=document.querySelector(".header__button-burger"),r=document.querySelector(".overlay--menu"),a=document.querySelector(".modal--feedback"),s=document.querySelector(".modal--call");function l(){n.classList.remove("menu--active"),r.classList.remove("overlay--active"),c.classList.remove("container--opacity"),r.removeEventListener("click",u),o.removeEventListener("click",d),document.removeEventListener("keydown",v)}function d(){l()}function u(){l()}function v(e){a.classList.contains("modal--active")||s.classList.contains("modal--active")||27===e.keyCode&&l()}i.addEventListener("click",(function(){n.classList.add("menu--active"),c.classList.add("container--opacity"),r.addEventListener("click",u),r.classList.add("overlay--active"),o.addEventListener("click",d),document.addEventListener("keydown",v)}))},function(e,t){var n=document.querySelector(".overlay--modal"),c=document.querySelectorAll(".ui-button--call"),o=document.querySelector(".callback-form__back--call"),i=document.querySelector(".callback-form__back--feedback"),r=document.querySelectorAll(".ui-button--chat"),a=document.querySelector(".modal--feedback"),s=document.querySelector(".modal--call"),l=document.querySelector(".container");function d(){n.classList.remove("overlay--active"),s.classList.remove("modal--active"),l.classList.remove("container--opacity"),n.removeEventListener("click",f),o.removeEventListener("click",m),document.removeEventListener("keydown",k)}function u(){a.classList.remove("modal--active"),n.classList.remove("overlay--active"),l.classList.remove("container--opacity"),n.removeEventListener("click",p),i.removeEventListener("click",y),document.removeEventListener("keydown",k)}function v(){n.classList.add("overlay--active"),s.classList.add("modal--active"),l.classList.add("container--opacity"),n.addEventListener("click",f),o.addEventListener("click",m),document.addEventListener("keydown",k)}function m(){d()}function f(){d()}function L(){n.classList.add("overlay--active"),a.classList.add("modal--active"),l.classList.add("container--opacity"),n.addEventListener("click",p),i.addEventListener("click",y),document.addEventListener("keydown",k)}function y(){u()}function k(e){27===e.keyCode&&(a.classList.contains("modal--active")?u():s.classList.contains("modal--active")&&d())}function p(){u()}for(var b=0;b<c.length;b++)c[b].addEventListener("click",v);for(var S=0;S<r.length;S++)r[S].addEventListener("click",L)}]);
//# sourceMappingURL=bundle.js.map