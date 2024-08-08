(()=>{"use strict";class t{constructor({id:t,title:e,urlToImage:o,tags:i,...s}){this.id=t,this.title=e,this.urlToImage=o,this.tags=i}generateArticle(){let t="",e=document.createElement("article");return e.className="strategy block-shadowed",e.setAttribute("data-id",this.id),this.urlToImage&&(t+=`<img class="strategy__image" src="${this.urlToImage}" alt="strategy">`),(this.title||this.tags)&&(t+='<div class="strategy__content">',this.title&&(t+=`<h3 class="strategy__name">${this.title}</h3>`),this.tags&&(t+='<div class="strategy__tags">',this.tags.map((e=>{t+=`<span class="tag tag_colored">${e}</span>`})),t+="</div>"),t+="</div>"),e.innerHTML=t,e}}const e=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.png",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.png",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"02.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.png",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"03.01.2020"},{id:4,title:"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",urlToImage:"./src/img/strategies/4.png",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"04.01.2020"},{id:5,title:"Increasing Prosperity With Positive Drinking",urlToImage:"./src/img/strategies/5.png",tags:["Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"05.01.2020"},{id:6,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.png",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:7,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.png",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"02.01.2020"},{id:8,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.png",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"03.01.2020"}];window.onload=function(){console.log("Hello, worm!"),o(),e&&n()};const o=()=>{document.querySelector(".strategies__tags").addEventListener("click",(t=>{if(t.target.classList.contains("tag")){const e=t.target;i(),s(e),"All"===e.innerText?a():r(e.innerText)}}))},i=()=>{document.querySelectorAll(".strategies__tags .tag").forEach((t=>{t.classList.remove("tag_selected"),t.classList.add("tag_bordered")}))},s=t=>{t.classList.remove("tag_bordered"),t.classList.add("tag_selected")},a=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((t=>{t.classList.remove("strategy_hidden")}))},r=t=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((e=>{e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach((o=>{o.innerHTML===t&&e.classList.remove("strategy_hidden")}))}))},n=()=>{let t=g();u(e).forEach((e=>{t.append(e.generateArticle())}))},g=()=>{const t=document.querySelector(".strategy-wrapper");return t.innerHTML="",t},u=e=>{let o=[];return e.forEach((e=>{o.push(new t(e))})),o}})();