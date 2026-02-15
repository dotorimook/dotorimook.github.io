import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.C4lZkr4h.js";import{r as t,s as i,c as o,L as r,a as l}from"./slugify.36lSuPOx.js";const c=i.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${t(1.5)} ${t(3/4)};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,d=i.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${t(2)};
  padding-bottom: ${t(1)};
  border-bottom: 1px solid ${o.gray}40;

  h1 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: 800;
    
    a {
      color: ${o.c333};
      text-decoration: none;
      &:hover {
        color: ${o.primary};
      }
    }
  }

  nav {
    display: flex;
    gap: 1rem;
    
    a {
      font-size: 0.9rem;
      font-weight: 600;
      color: ${o.c666};
      text-decoration: none;
      &:hover {
        color: ${o.primary};
      }
    }
  }
`,m=i.main`
  flex: 1;
`,x=i.footer`
  margin-top: ${t(3)};
  padding-top: ${t(1)};
  border-top: 1px solid ${o.gray}40;
  font-size: 0.85rem;
  color: ${o.c999};
  text-align: center;
  
  .tags-list {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    
    a {
      color: ${o.c666};
      text-decoration: none;
      &:hover {
        color: ${o.primary};
        text-decoration: underline;
      }
    }
  }
`,$=({title:h,children:a,tags:n=[],categories:p=[]})=>e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsx("h1",{children:e.jsx(r,{to:"/",children:"Dotorimook's blog"})}),e.jsx("nav",{children:e.jsx(r,{to:"/",children:"Home"})})]}),e.jsx(m,{children:a}),e.jsxs(x,{children:[n.length>0&&e.jsxs("div",{className:"tags-list",children:[n.slice(0,10).map(s=>e.jsxs(r,{to:`/tag/${l(s)}`,children:["#",s]},s)),n.length>10&&e.jsx(r,{to:"/tags",children:"More..."})]}),e.jsxs("p",{children:["© ",new Date().getFullYear()," Dotorimook. All rights reserved."]})]})]});export{$ as default};
