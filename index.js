import{i as a,S as m}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="47428851-5b047435bdffa798507e52955",g="https://pixabay.com/api/";async function h(n,t=1,o=12){const s=`${g}?key=${p}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`,e=await fetch(s);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}function y(n){return n.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:i,downloads:d})=>`
    <div class="gallery-item">
      <a href="${o}">
        <img src="${t}" alt="${s}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${e}</p>
        <p>Views: ${r}</p>
        <p>Comments: ${i}</p>
        <p>Downloads: ${d}</p>
      </div>
    </div>`).join("")}const f=document.querySelector("#search-form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");let c;async function L(n){n.preventDefault();const t=f.elements.searchQuery.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query!"});return}l.innerHTML="",u.classList.add("visible");try{const o=await h(t);if(u.classList.remove("visible"),o.hits.length===0){a.info({title:"Info",message:"No results found."});return}l.innerHTML=y(o.hits),c?c.refresh():c=new m(".gallery a")}catch{a.error({title:"Error",message:"Something went wrong!"})}}f.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
