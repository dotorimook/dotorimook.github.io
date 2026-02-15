import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{c as t,b as a,s as f,L as i,a as n}from"./slugify.36lSuPOx.js";import{R as g}from"./index.C4lZkr4h.js";import{f as b}from"./date.4f3l5Fzk.js";const j=f.article`
  position: relative;
  margin-top: ${a(.5).fontSize};
  padding-bottom: ${a(.5).fontSize};
  border-bottom: 1px solid ${t.gray}40; /* 25% opacity */
  
  &:last-child {
    border-bottom: none;
  }

  .title-row {
    margin-bottom: 8px;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 10px;
  }

  .title {
    font-size: 1.4rem;
    line-height: 1.3em;
    font-weight: 700;
    color: ${t.c333};
    text-decoration: none;
    
    &:hover {
      color: ${t.primary};
    }
  }

  .category {
    font-size: 0.9rem;
    color: ${t.c666};
    font-weight: 500;
    
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: ${t.primary};
        text-decoration: underline;
      }
    }
  }

  .description {
    font-size: 1rem;
    line-height: 1.6em;
    color: ${t.c666};
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: ${t.c999};
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    a {
      color: ${t.c666};
      text-decoration: none;
      &:hover {
        color: ${t.primary};
      }
      &:before {
        content: '#';
        margin-right: 1px;
        color: ${t.c999};
      }
    }
  }
`,u=({post:l})=>{const{excerpt:c,fields:{slug:s},frontmatter:{title:m,categories:r,tags:d,date:p,description:x}}=l;return e.jsxs(j,{children:[e.jsxs("div",{className:"title-row",children:[e.jsx(i,{to:s,className:"title",children:m}),r&&r.length>0&&e.jsx("span",{className:"category",children:r.map((o,h)=>e.jsxs(g.Fragment,{children:[h>0&&e.jsx("span",{style:{margin:"0 4px",color:t.c999},children:"/"}),e.jsx(i,{to:`/category/${n(o)}`,children:o})]},o))})]}),e.jsx(i,{to:s,style:{textDecoration:"none"},children:e.jsx("div",{className:"description",children:x||c})}),e.jsxs("div",{className:"meta-row",children:[e.jsx("div",{className:"tags",children:(d||[]).map(o=>e.jsx(i,{to:`/tag/${n(o)}`,children:o},o))}),e.jsx("div",{className:"date",children:b(p||"")})]})]})};export{u as default};
