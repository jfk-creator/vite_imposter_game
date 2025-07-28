(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();document.querySelector("#app").innerHTML=`
  <div>
    <h1 id="newGame">New Game</h1>
    <h2>Anzahl der Spieler:</h2>
    <div class="playerCount">    
      <h2 id="playerCount3">3</h2>
      <h2 id="playerCount4">4</h2>
      <h2 id="playerCount5">5</h2>
      <h2 id="playerCount6">6</h2>
    </div>
    <h1 id="player">Player: </h1>
    <h1 id="reveal">Reveal</h1>
  </div>
`;const f=["Apfel","Baum","Haus","Buch","Tisch","Stuhl","Fenster","Tür","Straße","Auto","Fahrrad","Zug","Flugzeug","Schiff","Mensch","Frau","Mann","Kind","Familie","Freund","Lehrer","Arzt","Student","Arbeit","Schule","Universität","Krankenhaus","Bank","Geschäft","Stadt","Land","Dorf","Berg","Fluss","See","Meer","Sonne","Mond","Stern","Wolke","Regen","Schnee","Wind","Feuer","Wasser","Luft","Erde","Zeit","Geld","Glück"],p=["Player 1","Player 2","Player 3","Player 4","Player 5","Player 6"],d=document.getElementById("player"),t=document.getElementById("reveal"),M=document.getElementById("newGame"),c=document.getElementById("playerCount3"),u=document.getElementById("playerCount4"),m=document.getElementById("playerCount5"),y=document.getElementById("playerCount6");let l=4;const g=()=>{let i=Math.floor(Math.random()*f.length);return f[i]},v=()=>Math.floor(Math.random()*l),s=()=>{c&&u&&m&&y&&(c.innerHTML="3",u.innerHTML="4",m.innerHTML="5",y.innerHTML="6")},L=()=>{let i=v(),a=g(),r=0;d&&(d.innerHTML=p[r]),c?.addEventListener("click",()=>{l=3,s(),c.innerHTML="*3"}),u?.addEventListener("click",()=>{l=4,s(),u.innerHTML="*4"}),m?.addEventListener("click",()=>{l=5,s(),m.innerHTML="*5"}),y?.addEventListener("click",()=>{l=6,s(),y.innerHTML="*6"}),d?.addEventListener("click",()=>{console.log("hello"),r+=1,r=r%l,d.innerHTML=p[r],t&&(t.innerHTML="reveal")}),t?.addEventListener("click",()=>{let o=!1;if(o=!o,o)if(r==i){t.innerHTML="Imposter";return}else t.innerHTML=a;else t.innerHTML="reveal"})};L();M?.addEventListener("click",()=>{L(),t&&(t.innerHTML="reveal")});
