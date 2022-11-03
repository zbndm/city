import{j as i,F as r}from"./q-2d9c1479.js";const c=[{text:"Docs Site Overview",id:"docs-site-overview",level:1},{text:"Left Menu",id:"left-menu",level:2},{text:"More info:",id:"more-info",level:2}],l={title:"Overview",meta:[],styles:[],links:[],frontmatter:{}},d={title:"Overview"};function n(t){const e=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",h2:"h2",a:"a"},t.components);return i(r,{children:[i(e.h1,{id:"docs-site-overview",children:"Docs Site Overview"}),`
`,i(e.p,{children:["This page is wrapped by two layouts because this source file ",i(e.code,{children:"src/routes/docs/index.md"})," is nested. The applied layouts are:"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:i(e.code,{children:"src/routes/docs/layout.tsx"})}),`
`,i(e.li,{children:i(e.code,{children:"src/routes/layout.tsx"})}),`
`]}),`
`,i(e.h2,{id:"left-menu",children:"Left Menu"}),`
`,i(e.p,{children:["The left menu ordering is created with the ",i(e.code,{children:"src/routes/docs/menu.md"})," markdown file."]}),`
`,i(e.h2,{id:"more-info",children:"More info:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:i(e.a,{href:"https://qwik.builder.io/qwikcity/layout/overview/",children:"Layouts"})}),`
`,i(e.li,{children:i(e.a,{href:"https://qwik.builder.io/qwikcity/routing/overview/",children:"Routing"})}),`
`,i(e.li,{children:i(e.a,{href:"https://qwik.builder.io/qwikcity/content/component/",children:"Authoring Content"})}),`
`,i(e.li,{children:i(e.a,{href:"https://qwik.builder.io/qwikcity/adaptors/overview/",children:"Server Adaptors and Middleware"})}),`
`,i(e.li,{children:i(e.a,{href:"https://qwik.builder.io/qwikcity/static-site-generation/overview/",children:"Static Site Generation (SSG)"})}),`
`]})]})}function s(t={}){const{wrapper:e}=t.components||{};return e?i(e,Object.assign({},t,{children:i(n,t)})):n(t)}export{s as default,d as frontmatter,l as head,c as headings};
