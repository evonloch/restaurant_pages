!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const d=()=>{document.getElementById("tab1").style.textDecoration="underline";let e=document.createElement("div");e.id="textContainer";let t=document.createElement("div");t.id="text";let n=document.createTextNode("Come along to the ");t.appendChild(n);let d="World's Best Restaurant";d=d.italics(),t.innerHTML=t.innerHTML+d;let o=document.createTextNode("™! A feast for the senses awaits! Meat, cheese and fried foods of every variety.");t.appendChild(o),e.appendChild(t),document.getElementById("content").appendChild(e);let l=document.createElement("div");l.id="center";let r=document.createElement("img");r.id="logo",r.src="https://raw.githubusercontent.com/Kevin-Satti-Projects/Projects/master/Restaurant/Images/logo.png",l.appendChild(r),document.getElementById("content").appendChild(l)};d(),document.getElementById("tab1").addEventListener("click",(function(){if("underline"!=document.getElementById("tab1").style.textDecoration){if(null!=document.getElementById("textContainer")){let e=document.getElementById("textContainer");e.parentNode.removeChild(e)}if(null!=document.getElementById("textContainerMenu")){let e=document.getElementById("textContainerMenu");e.parentNode.removeChild(e)}document.getElementById("tab1").style.textDecoration="underline",document.getElementById("tab2").style.textDecoration="none",document.getElementById("tab3").style.textDecoration="none",d()}})),document.getElementById("tab2").addEventListener("click",(function(){if("underline"!=document.getElementById("tab2").style.textDecoration){if(null!=document.getElementById("textContainer")){let e=document.getElementById("textContainer");e.parentNode.removeChild(e)}if(null!=document.getElementById("textContainerMenu")){let e=document.getElementById("textContainerMenu");e.parentNode.removeChild(e)}if(null!=document.getElementById("center")){let e=document.getElementById("center");e.parentNode.removeChild(e)}document.getElementById("tab1").style.textDecoration="none",document.getElementById("tab2").style.textDecoration="underline",document.getElementById("tab3").style.textDecoration="none",(()=>{let e=document.createElement("div");e.id="textContainerMenu";let t=document.createElement("figure"),n=document.createElement("img");n.classList.add("food"),n.src="https://raw.githubusercontent.com/Kevin-Satti-Projects/Projects/master/Restaurant/Images/chicken.jpg",t.appendChild(n);let d=document.createElement("figcaption"),o=document.createTextNode("Popcorn Chicken");d.appendChild(o),t.appendChild(d),e.appendChild(t);let l=document.createElement("figure"),r=document.createElement("img");r.classList.add("food"),r.src="https://raw.githubusercontent.com/Kevin-Satti-Projects/Projects/master/Restaurant/Images/burger.jpg",l.appendChild(r);let c=document.createElement("figcaption"),a=document.createTextNode("Bacon Cheeseburger");c.appendChild(a),l.appendChild(c),e.appendChild(l);let i=document.createElement("figure"),m=document.createElement("img");m.classList.add("food"),m.src="https://raw.githubusercontent.com/Kevin-Satti-Projects/Projects/master/Restaurant/Images/fullEnglish.jpg",i.appendChild(m);let u=document.createElement("figcaption"),s=document.createTextNode("Full English");u.appendChild(s),i.appendChild(u),e.appendChild(i),document.getElementById("content").appendChild(e)})()}})),document.getElementById("tab3").addEventListener("click",(function(){if("underline"!=document.getElementById("tab3").style.textDecoration){if(null!=document.getElementById("textContainer")){let e=document.getElementById("textContainer");e.parentNode.removeChild(e)}if(null!=document.getElementById("textContainerMenu")){let e=document.getElementById("textContainerMenu");e.parentNode.removeChild(e)}if(null!=document.getElementById("center")){let e=document.getElementById("center");e.parentNode.removeChild(e)}document.getElementById("tab1").style.textDecoration="none",document.getElementById("tab2").style.textDecoration="none",document.getElementById("tab3").style.textDecoration="underline",(()=>{let e=document.createElement("div");e.id="textContainer";let t=document.createElement("div"),n=document.createTextNode("Address: 123 Restaurant Road");t.appendChild(n),e.appendChild(t);let d=document.createElement("div"),o=document.createTextNode("Email: WorldsBestRestaurant@food.com");d.appendChild(o),e.appendChild(d);let l=document.createElement("div"),r=document.createTextNode("Phone: 123456789");l.appendChild(r),e.appendChild(l),document.getElementById("content").appendChild(e)})()}}))}]);