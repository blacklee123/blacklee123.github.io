"use strict";(self.webpackChunkblacklee_123_github_io=self.webpackChunkblacklee_123_github_io||[]).push([[2474],{9261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(2676),o=n(1984),i=n(6853);const s={},c="\u5bb9\u5668",a={id:"notes/container/index",title:"\u5bb9\u5668",description:"",source:"@site/docs/notes/container/index.md",sourceDirName:"notes/container",slug:"/notes/container/",permalink:"/docs/notes/container/",draft:!1,unlisted:!1,editUrl:"https://github.com/blacklee123/blacklee123.github.io/tree/main/docs/notes/container/index.md",tags:[],version:"current",frontMatter:{},sidebar:"notes",previous:{title:"Markdown Features",permalink:"/docs/notes/tutorial-basics/markdown-features"},next:{title:"docker\u5bb9\u5668\u5b89\u88c5jupyter notebook",permalink:"/docs/notes/container/jupyter"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u5bb9\u5668",children:"\u5bb9\u5668"})}),"\n",(0,r.jsx)(i.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6853:(e,t,n)=>{n.d(t,{Z:()=>v});n(5271);var r=n(4814),o=n(9860),i=n(4669),s=n(3407),c=n(5083),a=n(5785),l=n(7482);const u={cardContainer:"cardContainer_pgAI",cardTitle:"cardTitle_nkiZ",cardDescription:"cardDescription_YEmp"};var d=n(2676);function m(e){var t=e.href,n=e.children;return(0,d.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function h(e){var t=e.href,n=e.icon,o=e.title,i=e.description;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),i&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){var t,n,r=e.item,i=(0,o.LM)(r),c=(n=(0,s.c)().selectMessage,function(e){return n(e,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return i?(0,d.jsx)(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:c(r.items.length)}):null}function p(e){var t,n,r=e.item,i=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,o.xz)(null!=(t=r.docId)?t:void 0);return(0,d.jsx)(h,{href:r.href,icon:i,title:r.label,description:null!=(n=r.description)?n:null==s?void 0:s.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function x(e){var t=e.className,n=(0,o.jA)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){var t=e.items,n=e.className;if(!t)return(0,d.jsx)(x,Object.assign({},e));var i=(0,o.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:i.map((function(e,t){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)}))})}},3407:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(5271),o=n(860),i=["zero","one","two","few","many","other"];function s(e){return i.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:s(["one","other"]),select:function(e){return 1===e?"one":"other"}};function a(){var e=(0,o.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:s(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),c}var t,n}),[e])}function l(){var e=a();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}}},1984:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(5271);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);