import{i as a,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="47428851-5b047435bdffa798507e52955",g="https://pixabay.com/api/";async function h(n,r=1,o=12){const s=`${g}?key=${p}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`,e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function y(n){return n.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:i,downloads:d})=>`
    <div class="gallery-item">
      <a href="${o}">
        <img src="${r}" alt="${s}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${i}</p>
        <p>Downloads: ${d}</p>
      </div>
    </div>`).join("")}const u=document.querySelector("#search-form"),f=document.querySelector(".gallery"),L=document.querySelector(".loader");let l;function c(n){L.classList.toggle("visible",n)}async function $(n){n.preventDefault();const r=u.elements.searchQuery.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!"});return}f.innerHTML="",c(!0);try{const o=await h(r);if(c(!1),o.hits.length===0){a.info({title:"Info",message:"No results found."});return}f.innerHTML=y(o.hits),l?l.refresh():l=new m(".gallery a")}catch{c(!1),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}u.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
