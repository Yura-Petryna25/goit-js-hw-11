import{i as a,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="47428851-5b047435bdffa798507e52955",g="https://pixabay.com/api/";async function h(s,r=1,o=12){const i=`${g}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`,e=await fetch(i);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function y(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:d})=>`
    <div class="gallery-item">
      <a href="${o}">
        <img src="${r}" alt="${i}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${e}</p>
        <p>Views: ${t}</p>
        <p>Comments: ${n}</p>
        <p>Downloads: ${d}</p>
      </div>
    </div>`).join("")}const u=document.querySelector("#search-form"),c=document.querySelector(".gallery"),f=document.querySelector(".loader");let l;async function L(s){s.preventDefault();const r=u.elements.searchQuery.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!"});return}c.innerHTML="",f.classList.add("visible");try{const o=await h(r);if(f.classList.remove("visible"),o.hits.length===0){a.info({title:"Info",message:"No results found."});return}c.innerHTML=y(o.hits),l?l.refresh():l=new m(".gallery a")}catch{toggleLoader(!1),a.error({title:"Error",message:"Failed to fetch images. Please try again later."})}}u.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
