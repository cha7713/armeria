(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,s){"use strict";s("tU7J");var a=s("wFql"),n=s("q1tI"),r=s.n(n),i=s("2+3N"),l=s("1lec"),c=s("+ejy"),o=s("+9zj"),b=a.a.Title;t.a=function(e){var t={},s={},a={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":s};Object.entries(i).forEach((function(e){var s=e[0],a=e[1];t[a]=s})),Object.entries(l).forEach((function(e){var t=e[0],a=e[1];s[a]=t}));var n=Object(o.a)(e.location),h=e.version||n.substring(n.lastIndexOf("/")+1);return h.match(/^[0-9]/)||(h=void 0),r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:a,prefix:"release-notes",pageTitle:h?h+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),h?r.a.createElement(b,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),h," release notes"):"",e.children)}},"npN/":function(e,t,s){"use strict";s.r(t),s.d(t,"_frontmatter",(function(){return i})),s.d(t,"default",(function(){return o}));var a=s("8o2o"),n=(s("q1tI"),s("7ljp")),r=s("JkCF"),i={},l={_frontmatter:i},c=r.a;function o(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(n.b)(c,Object.assign({},l,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",{className:"date"},"14th August 2019"),Object(n.b)("h2",{id:"security",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#security","aria-label":"security permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Security"),Object(n.b)("p",null,"This release updates Netty from 4.1.38 to 4.1.39 to address the HTTP/2 security issues found in its previous versions. Please upgrade as soon as possible if your application serves the traffic from untrusted environment such as the Internet. See ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://netty.io/news/2019/08/13/4-1-39-Final.html"}),"Netty 4.1.39 release news")," and ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/Netflix/security-bulletins/blob/master/advisories/third-party/2019-002.md"}),"Netflix security bulletins")," for more information."),Object(n.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Brave 5.6.9 -> 5.6.10"),Object(n.b)("li",{parentName:"ul"},"gRPC 1.22.1 -> 1.22.2"),Object(n.b)("li",{parentName:"ul"},"Netty 4.1.38 -> 4.1.39"),Object(n.b)("li",{parentName:"ul"},"SLF4J 1.7.27 -> 1.7.28")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-90-2-mdx-a296cfdca160b4db440b.js.map