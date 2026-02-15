import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{c as o,b as n,s as f,L as r,a as s}from"./slugify.36lSuPOx.js";import{R as g}from"./index.C4lZkr4h.js";import{f as b}from"./date.4f3l5Fzk.js";const $=f.article`
  position: relative;
  margin-top: ${n(.5).fontSize};
  margin-bottom: ${n(1.5).fontSize};
  padding-bottom: ${n(.5).fontSize};
  border-bottom: 2px solid ${o.c333};
  
  .hero-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: ${o.primary};
    text-transform: uppercase;
    margin-bottom: 8px;
    display: inline-block;
    letter-spacing: 0.05em;
  }

  .title-row {
    margin-bottom: 12px;
  }

  .title {
    font-size: 2.2rem;
    line-height: 1.2em;
    font-weight: 800;
    color: ${o.c333};
    text-decoration: none;
    
    &:hover {
      color: ${o.primary};
    }
  }

  .category {
    margin-left: 10px;
    font-size: 1rem;
    color: ${o.c666};
    font-weight: 500;
    
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: ${o.primary};
        text-decoration: underline;
      }
    }
  }

  .date {
    font-size: 0.9rem;
    color: ${o.c666};
    margin-bottom: 12px;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6em;
    margin-bottom: 16px;
    color: ${o.c333};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .read-more {
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    color: ${o.primary};
    display: inline-block;
    margin-bottom: 16px;
    
    &:hover {
      text-decoration: underline;
    }
  }

  .tags {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    a {
      color: ${o.c666};
      text-decoration: none;
      &:hover {
        color: ${o.primary};
      }
      &:before {
        content: '#';
        margin-right: 1px;
        color: ${o.c999};
      }
    }
  }
`,u=({post:l})=>{const{excerpt:c,fields:{slug:i},frontmatter:{title:m,categories:a,tags:d,date:p,description:x}}=l;return e.jsxs($,{children:[e.jsx("div",{className:"hero-label",children:"Featured Post"}),e.jsxs("div",{className:"title-row",children:[e.jsx(r,{to:i,className:"title",children:m}),a&&a.length>0&&e.jsx("span",{className:"category",children:a.map((t,h)=>e.jsxs(g.Fragment,{children:[h>0&&e.jsx("span",{style:{margin:"0 4px",color:o.c999},children:"/"}),e.jsx(r,{to:`/category/${s(t)}`,children:t})]},t))})]}),e.jsx("div",{className:"date",children:b(p||"")}),e.jsx(r,{to:i,style:{textDecoration:"none"},children:e.jsx("div",{className:"description",children:x||c})}),e.jsx(r,{to:i,className:"read-more",children:"Read more →"}),e.jsx("div",{className:"tags",children:(d||[]).map(t=>e.jsx(r,{to:`/tag/${s(t)}`,children:t},t))})]})};export{u as default};
