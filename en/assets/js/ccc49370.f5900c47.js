"use strict";(self.webpackChunkblacklee_123_github_io=self.webpackChunkblacklee_123_github_io||[]).push([[6103],{9157:(e,n,t)=>{t.d(n,{Z:()=>I});t(5271);var a=t(4814),r=t(9210),i=t(2676);function s(e){var n=e.children,t=e.className;return(0,i.jsx)("article",{className:t,children:n})}var l=t(4669);const o={title:"title_Mvb4"};function c(e){var n=e.className,t=(0,r.nO)(),s=t.metadata,c=t.isBlogPostPage,d=s.permalink,u=s.title,m=c?"h1":"h2";return(0,i.jsx)(m,{className:(0,a.Z)(o.title,n),children:c?u:(0,i.jsx)(l.Z,{to:d,children:u})})}var d=t(5785),u=t(3407),m=t(5527);const g={container:"container_BLrk"};function h(e){var n,t=e.readingTime,a=(n=(0,u.c)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))});return(0,i.jsx)(i.Fragment,{children:a(t)})}function v(e){var n=e.date,t=e.formattedDate;return(0,i.jsx)("time",{dateTime:n,children:t})}function f(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function x(e){var n,t=e.className,s=(0,r.nO)().metadata,l=s.date,o=s.readingTime,c=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,a.Z)(g.container,"margin-vert--md",t),children:[(0,i.jsx)(v,{date:l,formattedDate:(n=l,c.format(new Date(n)))}),void 0!==o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(h,{readingTime:o})]})]})}var p=t(6588);const j={authorCol:"authorCol_fvAE",imageOnlyAuthorRow:"imageOnlyAuthorRow_ahR5",imageOnlyAuthorCol:"imageOnlyAuthorCol_skjp"};function b(e){var n=e.className,t=(0,r.nO)(),s=t.metadata.authors,l=t.assets;if(0===s.length)return null;var o=s.every((function(e){return!e.name})),c=1===s.length;return(0,i.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?j.imageOnlyAuthorRow:"row",n),children:s.map((function(e,n){var t;return(0,i.jsx)("div",{className:(0,a.Z)(!o&&(c?"col col--12":"col col--6"),o?j.imageOnlyAuthorCol:j.authorCol),children:(0,i.jsx)(p.Z,{author:Object.assign({},e,{imageURL:null!=(t=l.authorsImageUrls[n])?t:e.imageURL})})},n)}))})}function Z(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(x,{}),(0,i.jsx)(b,{})]})}var N=t(8983),_=t(7579);function k(e){var n=e.children,t=e.className,s=(0,r.nO)().isBlogPostPage;return(0,i.jsx)("div",{id:s?N.uR:void 0,className:(0,a.Z)("markdown",t),children:(0,i.jsx)(_.Z,{children:n})})}var L=t(9701),y=t(1637),O=t(9937),C=t(4860),T=["blogPostTitle"];function H(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function w(e){var n=e.blogPostTitle,t=(0,C.Z)(e,T);return(0,i.jsx)(l.Z,Object.assign({"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:n})},t,{children:(0,i.jsx)(H,{})}))}function A(){var e=(0,r.nO)(),n=e.metadata,t=e.isBlogPostPage,s=n.tags,l=n.title,o=n.editUrl,c=n.hasTruncateMarker,d=n.lastUpdatedBy,u=n.lastUpdatedAt,m=!t&&c,g=s.length>0;if(!(g||m||o))return null;if(t){var h=!!(o||u||d);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,i.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",L.k.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(O.Z,{tags:s})})}),h&&(0,i.jsx)(y.Z,{className:(0,a.Z)("margin-top--sm",L.k.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:u,lastUpdatedBy:d})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,i.jsx)("div",{className:(0,a.Z)("col",{"col--9":m}),children:(0,i.jsx)(O.Z,{tags:s})}),m&&(0,i.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":g}),children:(0,i.jsx)(w,{blogPostTitle:l,to:n.permalink})})]})}function I(e){var n=e.children,t=e.className,l=(0,r.nO)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,i.jsxs)(s,{className:(0,a.Z)(l,t),children:[(0,i.jsx)(Z,{}),(0,i.jsx)(k,{children:n}),(0,i.jsx)(A,{})]})}},661:(e,n,t)=>{t.r(n),t.d(n,{default:()=>j});t(5271);var a=t(4814),r=t(7733),i=t(9701),s=t(9210),l=t(1789),o=t(9157),c=t(5785),d=t(1140),u=t(2676);function m(e){var n=e.nextItem,t=e.prevItem;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,Object.assign({},t,{subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})})),n&&(0,u.jsx)(d.Z,Object.assign({},n,{subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0}))]})}function g(){var e,n=(0,s.nO)(),t=n.assets,a=n.metadata,i=a.title,l=a.description,o=a.date,c=a.tags,d=a.authors,m=a.frontMatter,g=m.keywords,h=null!=(e=t.image)?e:m.image;return(0,u.jsxs)(r.d,{title:i,description:l,keywords:g,image:h,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),d.some((function(e){return e.url}))&&(0,u.jsx)("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var h=t(7597);function v(){var e=(0,s.iZ)();return(0,u.jsx)(h.Z,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=t(2561),x=t(4700);function p(e){var n=e.sidebar,t=e.children,a=(0,s.nO)(),r=a.metadata,i=a.toc,c=r.nextItem,d=r.prevItem,g=r.frontMatter,h=g.hide_table_of_contents,v=g.toc_min_heading_level,p=g.toc_max_heading_level;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!h&&i.length>0?(0,u.jsx)(f.Z,{toc:i,minHeadingLevel:v,maxHeadingLevel:p}):void 0,children:[(0,u.jsx)(x.Z,{metadata:r}),(0,u.jsx)(o.Z,{children:t}),(c||d)&&(0,u.jsx)(m,{nextItem:c,prevItem:d})]})}function j(e){var n=e.content;return(0,u.jsx)(s.n4,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(r.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{}),(0,u.jsx)(p,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},2669:(e,n,t)=>{t.d(n,{Z:()=>c});t(5271);var a=t(4814),r=t(7299),i=t(9701),s=t(5461),l=t(2676);function o(e){var n=e.className;return(0,l.jsx)(s.Z,{type:"caution",title:(0,l.jsx)(r.cI,{}),className:(0,a.Z)(n,i.k.common.unlistedBanner),children:(0,l.jsx)(r.eU,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.T$,{}),(0,l.jsx)(o,Object.assign({},e))]})}},4700:(e,n,t)=>{t.d(n,{Z:()=>d});t(5271);var a=t(4814),r=t(7299),i=t(9701),s=t(5461),l=t(2676);function o(e){var n=e.className;return(0,l.jsx)(s.Z,{type:"caution",title:(0,l.jsx)(r.ht,{}),className:(0,a.Z)(n,i.k.common.draftBanner),children:(0,l.jsx)(r.xo,{})})}var c=t(2669);function d(e){var n=e.metadata,t=n.unlisted,a=n.frontMatter;return(0,l.jsxs)(l.Fragment,{children:[(t||a.unlisted)&&(0,l.jsx)(c.Z,{}),a.draft&&(0,l.jsx)(o,{})]})}},1140:(e,n,t)=>{t.d(n,{Z:()=>s});t(5271);var a=t(4814),r=t(4669),i=t(2676);function s(e){var n=e.permalink,t=e.title,s=e.subLabel,l=e.isNext;return(0,i.jsxs)(r.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[s&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},2561:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(4860),r=(t(5271),t(4814)),i=t(4377);const s={tableOfContents:"tableOfContents_O06B",docItemContainer:"docItemContainer_q6fg"};var l=t(2676),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.Z)(e,o);return(0,l.jsx)("div",{className:(0,r.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(i.Z,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},4377:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(4860),r=t(5271),i=t(4195),s=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,s);t>=0?n[t].children.push(i):r.push(i)})),r}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,r=n.anchorTopOffset,i=e.find((function(e){return c(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,r.useRef)(0),n=(0,i.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,r.useRef)(void 0),t=u();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,s=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),o=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var g=t(4669),h=t(2676);function v(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?(0,h.jsx)("ul",{className:r?void 0:t,children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)(g.Z,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const f=r.memo(v);var x=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,s=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,v=e.minHeadingLevel,p=e.maxHeadingLevel,j=(0,a.Z)(e,x),b=(0,i.L)(),Z=null!=v?v:b.tableOfContents.minHeadingLevel,N=null!=p?p:b.tableOfContents.maxHeadingLevel,_=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:Z,maxHeadingLevel:N});return m((0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:Z,maxHeadingLevel:N}}),[d,g,Z,N])),(0,h.jsx)(f,Object.assign({toc:_,className:s,linkClassName:d},j))}},2631:(e,n,t)=>{t.d(n,{Z:()=>l});t(5271);var a=t(4814),r=t(4669);const i={tag:"tag_HhnG",tagRegular:"tagRegular_Pck9",tagWithCount:"tagWithCount_lfAm"};var s=t(2676);function l(e){var n=e.permalink,t=e.label,l=e.count,o=e.description;return(0,s.jsxs)(r.Z,{href:n,title:o,className:(0,a.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[t,l&&(0,s.jsx)("span",{children:l})]})}},9937:(e,n,t)=>{t.d(n,{Z:()=>o});t(5271);var a=t(4814),r=t(5785),i=t(2631);const s={tags:"tags_yJrr",tag:"tag_dexj"};var l=t(2676);function o(e){var n=e.tags;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.Z)(s.tags,"padding--none","margin-left--sm"),children:n.map((function(e){return(0,l.jsx)("li",{className:s.tag,children:(0,l.jsx)(i.Z,Object.assign({},e))},e.permalink)}))})]})}},7299:(e,n,t)=>{t.d(n,{T$:()=>o,cI:()=>s,eU:()=>l,ht:()=>c,xo:()=>d});t(5271);var a=t(5785),r=t(7597),i=t(2676);function s(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(r.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);