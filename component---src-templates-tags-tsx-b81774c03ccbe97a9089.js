(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{NFQ0:function(e,t,a){"use strict";var n=a("Wbzz"),i=a("q1tI"),o=a.n(i),r=a("vOnD"),l=a("ild/"),m=a("ExVU"),s=a("rB5o"),c=r.b.article.withConfig({displayName:"PostListItem__Frame",componentId:"sc-1gvbxbv-0"})(["position:relative;margin-top:",";padding-bottom:",";border-bottom:1px solid ",";.frame-title{margin-bottom:8px;}.title{font-size:1.4rem;line-height:1.2em;}.date{font-size:.8rem;color:",";text-align:right;}.category{margin-left:10px;font-size:1rem;color:",";&:before{content:'/';margin-right:8px;}}.ul-tags{margin-top:10px;color:",";.li-tag{display:inline;&:before{content:'#';}}.li-tag:not(:first-child){margin-left:6px;}}.frame-description{line-height:1.2em;margin-bottom:8px;}"],Object(s.b)(.2).fontSize,Object(s.b)(.2).fontSize,l.a.gray,l.a.c666,l.a.c666,l.a.c666);t.a=function(e){var t,a,i=e.post,r=i.excerpt,l=i.fields.slug,s=i.frontmatter,d=s.title,f=s.categories,g=s.tags,p=s.date,y=s.description;return o.a.createElement(c,null,o.a.createElement("div",{className:"frame-title"},o.a.createElement(n.Link,{to:l},o.a.createElement("span",{className:"title"},d)),o.a.createElement("span",{className:"category"},(f||[]).map((function(e){return o.a.createElement(n.Link,{key:"link-category-"+e,to:"/category/"+e},e)})))),o.a.createElement(n.Link,{to:l},o.a.createElement("div",{className:"frame-description"},y||r)),o.a.createElement("ul",{className:"ul-tags"},(g||[]).map((function(e){return o.a.createElement("li",{key:"link-tag-"+e,className:"li-tag"},o.a.createElement(n.Link,{to:"/tag/"+e},e))}))),o.a.createElement("div",{className:"date"},(t=p,(a=m.DateTime.fromFormat(t,"yyyy-MM-dd hh:mm:ss").isValid?m.DateTime.fromFormat(t,"yyyy-MM-dd hh:mm:ss"):m.DateTime.fromISO(t))&&a.isValid?a.diffNow("days").days>-1?a.diffNow().hours+"시간 전":a.diffNow("days").days>-7?Math.floor(Math.abs(a.diffNow("days").days))+"일 전":a.toFormat("yyyy.MM.dd hh:mm:ss"):t)))}},NnCg:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("9Dj+"),r=a("NFQ0");t.default=function(e){var t=e.pageContext.tag,a=e.data.allMarkdownRemark,n=a.nodes,l=a.totalCount,m=void 0===l?0:l;return i.a.createElement(o.a,null,i.a.createElement("div",null,"태그 ",t,"에 대한 포스트 ",m," 건",n.map((function(e){return i.a.createElement(r.a,{key:"post-"+e.id,post:e})}))))}}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-b81774c03ccbe97a9089.js.map