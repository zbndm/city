import{c as u,q as d,_ as p,j as r,u as g,n as U,a as W,b as f}from"./q-0466d812.js";const H=f("qc-c"),nt=f("qc-ic"),Q=f("qc-h"),V=f("qc-l"),z=f("qc-n"),B=u(d(()=>p(()=>import("./q-3489fc19.js"),["build/q-3489fc19.js","build/q-0466d812.js","build/q-7fc6a621.css"]),"s_nd8yk3KO22c")),k=new WeakMap,st=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const c=o[0].exec(n);if(c){const a=o[1],S=Y(o[2],c),O=o[4],v=new Array(a.length),h=[],j=N(e,n);let I;return a.forEach((l,x)=>{C(l,h,A=>v[x]=A,s)}),C(j,h,l=>I=l==null?void 0:l.default,s),h.length>0&&await Promise.all(h),[S,v,I,O]}}return null},C=(t,e,s,n)=>{if(typeof t=="function"){const o=k.get(t);if(o)s(o);else{const c=t();typeof c.then=="function"?e.push(c.then(a=>{n!==!1&&k.set(t,a),s(a)})):c&&s(c)}}},N=(t,e)=>{if(t){const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},Y=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++)s[t[n]]=e?e[n+1]:"";return s},ot=(t,e,s)=>{const n=G(),o={data:t?t.body:null,head:n,...e};for(let c=s.length-1;c>=0;c--){const a=s[c]&&s[c].head;a&&(typeof a=="function"?P(n,a(o)):typeof a=="object"&&P(n,a))}return o.head},P=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),y(t.meta,e.meta),y(t.links,e.links),y(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},y=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},G=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ct=()=>g(H),at=()=>g(Q),rt=()=>g(V),it=()=>g(z),lt=()=>U(W("qwikcity")),E=t=>t.pathname+t.search+t.hash,i=(t,e)=>new URL(t,e.href),D=(t,e)=>t.origin===e.origin,T=(t,e)=>t.pathname+t.search===e.pathname+e.search,J=(t,e)=>t.pathname===e.pathname,R=(t,e)=>D(t,e)&&!T(t,e),K=t=>t+(t.endsWith("/")?"":"/")+"q-data.json",ft=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=i(s,e),o=i("",e);if(D(n,o))return E(n)}catch(n){console.error(n)}return null},ht=(t,e,s)=>{if(t.prefetch&&e){const n=i(e,s);if(!J(n,i("",s)))return n+""}return null},ut=(t,e)=>{const s=t.location,n=i(e.path,s);R(s,n)&&(L(t,s,n),t.history.pushState("","",E(n))),t[q]||(t[q]=1,t.addEventListener("popstate",()=>{const o=t.location,c=i(e.path,o);R(o,c)&&(L(t,c,o),e.path=E(o))}))},L=async(t,e,s)=>{const n=t.document,o=s.hash;if(T(e,s))e.hash!==o&&(await m(),o?w(n,o):t.scrollTo(0,0));else if(o)for(let c=0;c<24&&(await m(),!w(n,o));c++);else await m(),t.scrollTo(0,0)},m=()=>new Promise(t=>setTimeout(t,12)),w=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},b=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},q=Symbol(),M=async t=>{const e=new URL(t).pathname,s=K(e);b({links:[e]});const n=await fetch(s),o=n.headers.get("content-type")||"";if(n.ok&&o.includes("json")){const c=await n.json();return b({bundles:c.prefetch,links:[e]}),c}},Z=u(d(()=>p(()=>import("./q-8041d0be.js"),["build/q-8041d0be.js","build/q-0466d812.js","build/q-7fc6a621.css"]),"s_z1nvHyEppoI")),dt=u(d(()=>p(()=>import("./q-98e4ff5b.js"),["build/q-98e4ff5b.js","build/q-0466d812.js","build/q-7fc6a621.css"]),"s_mYsiJcA4IBc")),pt=(t,e)=>{var n;const s=(n=t==null?void 0:t.dataset)==null?void 0:n.prefetch;s&&(_||(_=window.innerWidth),(!e||e&&_<520)&&M(s))};let _=0;const $='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',F=()=>r("script",{dangerouslySetInnerHTML:$}),X=u(d(()=>p(()=>import("./q-5fef8625.js"),["build/q-5fef8625.js","build/q-0466d812.js","build/q-7fc6a621.css"]),"s_uGIfwHgHwWQ")),tt=()=>r(Z,{children:[r("head",{children:[r("meta",{charSet:"utf-8"}),r(X,{})]}),r("body",{lang:"en",children:[r(B,{}),r(F,{})]})]}),gt=Object.freeze(Object.defineProperty({__proto__:null,s_vgNegdacmcE:tt},Symbol.toStringTag,{value:"Module"}));export{nt as C,Q as D,dt as L,V as R,M as a,G as b,ut as c,H as d,z as e,it as f,rt as g,ft as h,ht as i,at as j,ct as k,st as l,gt as m,pt as p,ot as r,E as t,lt as u};
