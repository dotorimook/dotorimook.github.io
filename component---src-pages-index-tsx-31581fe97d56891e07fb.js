(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{H8eV:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("Wbzz"),i=a("q1tI"),o=a.n(i),r=a("TJpk"),s=a.n(r),c=function(t){var e=t.lang||"en",a=t.meta||[],i=t.keywords||[],r=t.description||"",c=Object(n.useStaticQuery)("63159454").site,m=r||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:e},title:t.title,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{content:m,name:"description"},{content:t.title,property:"og:title"},{content:m,property:"og:description"},{content:"website",property:"og:type"},{content:"summary",name:"twitter:card"},{content:c.siteMetadata.author,name:"twitter:creator"},{content:t.title,name:"twitter:title"},{content:m,name:"twitter:description"}].concat(i.length>0?{content:i.join(", "),name:"keywords"}:[]).concat(a)})}},NFQ0:function(t,e,a){"use strict";var n=a("Wbzz"),i=a("q1tI"),o=a.n(i),r=a("vOnD"),s=a("ild/"),c=a("ExVU"),m=a("rB5o"),l=r.b.article.withConfig({displayName:"PostListItem__Frame",componentId:"sc-1gvbxbv-0"})(["position:relative;margin-top:",";padding-bottom:",";border-bottom:1px solid ",";.frame-title{margin-bottom:8px;}.title{font-size:1.4rem;line-height:1.2em;}.date{font-size:.8rem;color:",";text-align:right;}.category{margin-left:10px;font-size:1rem;color:",";&:before{content:'/';margin-right:8px;}}.ul-tags{margin-top:10px;color:",";.li-tag{display:inline;&:before{content:'#';}}.li-tag:not(:first-child){margin-left:6px;}}.frame-description{line-height:1.2em;margin-bottom:8px;}"],Object(m.b)(.2).fontSize,Object(m.b)(.2).fontSize,s.a.gray,s.a.c666,s.a.c666,s.a.c666);e.a=function(t){var e,a,i=t.post,r=i.excerpt,s=i.fields.slug,m=i.frontmatter,d=m.title,p=m.categories,f=m.tags,g=m.date,u=m.description;return o.a.createElement(l,null,o.a.createElement("div",{className:"frame-title"},o.a.createElement(n.Link,{to:s},o.a.createElement("span",{className:"title"},d)),o.a.createElement("span",{className:"category"},(p||[]).map((function(t){return o.a.createElement(n.Link,{key:"link-category-"+t,to:"/category/"+t},t)})))),o.a.createElement(n.Link,{to:s},o.a.createElement("div",{className:"frame-description"},u||r)),o.a.createElement("ul",{className:"ul-tags"},(f||[]).map((function(t){return o.a.createElement("li",{key:"link-tag-"+t,className:"li-tag"},o.a.createElement(n.Link,{to:"/tag/"+t},t))}))),o.a.createElement("div",{className:"date"},(e=g,(a=c.DateTime.fromFormat(e,"yyyy-MM-dd hh:mm:ss").isValid?c.DateTime.fromFormat(e,"yyyy-MM-dd hh:mm:ss"):c.DateTime.fromISO(e))&&a.isValid?a.diffNow("days").days>-1?a.diffNow().hours+"시간 전":a.diffNow("days").days>-7?Math.floor(Math.abs(a.diffNow("days").days))+"일 전":a.toFormat("yyyy.MM.dd hh:mm:ss"):e)))}},QeBL:function(t,e,a){"use strict";a.r(e);var n=a("Wbzz"),i=a("q1tI"),o=a.n(i),r=a("vOnD"),s=a("9Dj+"),c=a("gRv6"),m=a("NFQ0"),l=a("H8eV"),d=o.a.memo((function(t){var e=t.repo,a=t.theme,n=Object(i.createRef)();return Object(i.useLayoutEffect)((function(){var t=document.createElement("script"),i={src:"https://utteranc.es/client.js",repo:e,theme:a,"issue-term":"pathname",label:"✨💬 comments ✨",crossOrigin:"anonymous",async:"true"};Object.entries(i).forEach((function(e){var a=e[0],n=e[1];t.setAttribute(a,n)})),n.current.appendChild(t)}),[e]),o.a.createElement("div",{ref:n})}));d.displayName="Utterances";var p=d,f=a("rB5o");Object(r.b)(c.a).withConfig({displayName:"pages__StyledLink",componentId:"qvapnx-0"})(["box-shadow:none;"]),r.b.h3.withConfig({displayName:"pages__Title",componentId:"qvapnx-1"})(["margin-bottom:",";"],Object(f.a)(1/4)),r.b.section.withConfig({displayName:"pages__FrameBio",componentId:"qvapnx-2"})([""]),e.default=function(t){var e=Object(n.useStaticQuery)("301258280"),a=e.site.siteMetadata.title,i=e.allMarkdownRemark.nodes||[];e.allMarkdownRemark.tags,e.allMarkdownRemark.categories;return o.a.createElement(s.a,{location:t.location,title:a},o.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement("section",{className:"frame-posts"},o.a.createElement("h2",{className:"title"},"Posts"),i.map((function(t){return o.a.createElement(m.a,{key:"post-item-"+t.id,post:t})}))),o.a.createElement(p,{repo:"dotorimook/dotorimook.github.io",theme:"github-light"}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-31581fe97d56891e07fb.js.map