(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("tU7J");var n=t("wFql"),i=t("q1tI"),s=t.n(i),r=t("2+3N"),c=t("1lec"),l=t("+ejy"),b=t("+9zj"),o=n.a.Title;a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(r).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(c).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var i=Object(b.a)(e.location),m=e.version||i.substring(i.lastIndexOf("/")+1);return m.match(/^[0-9]/)||(m=void 0),s.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:m?m+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),m?s.a.createElement(o,{id:"release-notes",level:1},s.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},s.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),m," release notes"):"",e.children)}},K9gS:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return m}));var n,i=t("8o2o"),s=(t("q1tI"),t("7ljp")),r=t("JkCF"),c={},l=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),b={_frontmatter:c},o=r.a;function m(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)(o,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",{className:"date"},"26th October 2019"),Object(s.b)("h2",{id:"🥳-new-features",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#%F0%9F%A5%B3-new-features","aria-label":"🥳 new features permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🥳 New features"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You can now bind multiple paths to an annotated service easily using ",Object(s.b)("inlineCode",{parentName:"li"},"@Path"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1822"}),"#1822")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1870"}),"#1870"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'@Get\n@Post\n@Path("/a")\n@Path("/b")\npublic String myAwesomeServcie(...) {...}\n'))),Object(s.b)("li",{parentName:"ul"},"You can now make an annotated service run from ",Object(s.b)("inlineCode",{parentName:"li"},"blockingTaskExecutor")," by attaching ",Object(s.b)("inlineCode",{parentName:"li"},"@Blocking"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2078"}),"#2078"),", ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2187"}),"#2187"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'@Get("/myHeavyTask")\n@Blocking\npublic HttpResponse reallyHeavyComputation(...) {...}\n'))),Object(s.b)("li",{parentName:"ul"},"Armeria server now adds ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7231#section-7.4.2"}),Object(s.b)("inlineCode",{parentName:"a"},"Server"))," and ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://tools.ietf.org/html/rfc7231#section-7.1.1.2"}),Object(s.b)("inlineCode",{parentName:"a"},"Date"))," headers to responses by default. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2137"}),"#2137"),", ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2188"}),"#2188"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"If you do not want that behavior, you should call:",Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"Server.builder()\n      .service(...)\n      .disableServerHeader()\n      .disableDateHeader()\n      .build();\n"))))),Object(s.b)("li",{parentName:"ul"},"You can now configure a Caffeine cache spec for ",Object(s.b)("inlineCode",{parentName:"li"},"HttpFileService"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/916"}),"#916"),", ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2142"}),"#2142"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'HttpFileServiceBuilder.forClassPath("/")\n                      .entryCacheSpec("maximumSize=512")\n                      .build()\n')),"Or, using JVM option:\n",Object(s.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.fileServiceCache=maximumSize=1024,expireAfterAccess=600s")),Object(s.b)("li",{parentName:"ul"},"You can now see the Armeria version in the metric. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2179"}),"#2179"))),Object(s.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"💪 Improvements"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Armeria server startup time is reduced to 80 percent when TLS is not used. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1645"}),"#1645"),", ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2184"}),"#2184")),Object(s.b)("li",{parentName:"ul"},"The performance of getting HTTP timestamps is improved by caching the values every second. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2196"}),"#2196"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Use ",Object(s.b)("inlineCode",{parentName:"li"},"HttpTimestampSupplier.currentTime()")," to take advantage of it."))),Object(s.b)("li",{parentName:"ul"},"The performance of finding service is improved by not making an unused ",Object(s.b)("inlineCode",{parentName:"li"},"Map")," in ",Object(s.b)("inlineCode",{parentName:"li"},"RouteResult"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2153"}),"#2153")),Object(s.b)("li",{parentName:"ul"},"The performance of gRPC call is improved by using the singleton HTTP headers when a service does not create a new HTTP headers. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2152"}),"#2152")),Object(s.b)("li",{parentName:"ul"},"The performance of making metric ",Object(s.b)("inlineCode",{parentName:"li"},"Tag"),"s is improved by adding ",Object(s.b)("inlineCode",{parentName:"li"},"Tag"),"s in ascending order. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2150"}),"#2150"),", ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2163"}),"#2163")),Object(s.b)("li",{parentName:"ul"},"We now have favicon in our ",Object(s.b)("inlineCode",{parentName:"li"},"DocService"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2186"}),"#2186"))),Object(s.b)("h2",{id:"-bug-fixes",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#-bug-fixes","aria-label":" bug fixes permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"👻 Bug fixes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ServerHttpRequest.getRemoteAddress()")," now returns proper address. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2208"}),"#2208")),Object(s.b)("li",{parentName:"ul"},"You can now see descriptive error messages when ",Object(s.b)("inlineCode",{parentName:"li"},"sslContext")," is not configured properly. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1844"}),"#1844"),", ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2124"}),"#2124")),Object(s.b)("li",{parentName:"ul"},"You can now build ",Object(s.b)("inlineCode",{parentName:"li"},"(Request|Response)Headers")," multiple times using builders. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2190"}),"#2190"),", ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2193"}),"#2193"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Previously, it raised ",Object(s.b)("inlineCode",{parentName:"li"},"ClassCastException")," if ",Object(s.b)("inlineCode",{parentName:"li"},"build()")," is called twice."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"NoRequestContextException")," is not raised anymore if you configure the name of the non-request thread.",Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'RequestContextCurrentTraceContext.builder()\n                                 .nonRequestThread("RMI TCP Connection")\n                                 .build()\n'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"NullPointerException")," is not raised anymore in ",Object(s.b)("inlineCode",{parentName:"li"},"Http1ClientCodec")," when the server sends multiple responses for one request. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2210"}),"#2210")),Object(s.b)("li",{parentName:"ul"},"You can now see the access logs when the method of a request is not allowed and there are no services that match the path. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2159"}),"#2159"))),Object(s.b)("h2",{id:"-breaking-changes",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#-breaking-changes","aria-label":" breaking changes permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🚫 Breaking changes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"All annotated services are run from ",Object(s.b)("inlineCode",{parentName:"li"},"EventLoop")," by default. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2187"}),"#2187"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Previously, if the return type is neither ",Object(s.b)("inlineCode",{parentName:"li"},"HttpResponse")," nor ",Object(s.b)("inlineCode",{parentName:"li"},"CompletableFuture"),", annotated services are run from ",Object(s.b)("inlineCode",{parentName:"li"},"blockingTaskExecutor"),"."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ServerBuilder.tls()")," now throws a checked ",Object(s.b)("inlineCode",{parentName:"li"},"SSLException"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2124"}),"#2124")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ServerBuilder.sslContext()")," methods are completly removed. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2124"}),"#2124"))),Object(s.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"⛓ Dependencies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Brave 5.7.0 -> 5.8.0"),Object(s.b)("li",{parentName:"ul"},"Dropwizard 4.1.0 -> 4.1.1"),Object(s.b)("li",{parentName:"ul"},"gRPC 1.24.0 -> 1.24.1"),Object(s.b)("li",{parentName:"ul"},"Netty 4.1.42 -> 4.1.43"),Object(s.b)("li",{parentName:"ul"},"org.bouncycastle 1.63 -> 1.64"),Object(s.b)("li",{parentName:"ul"},"Prometheus 0.7.0 -> 0.8.0"),Object(s.b)("li",{parentName:"ul"},"RxJava2 2.2.12 -> 2.2.13"),Object(s.b)("li",{parentName:"ul"},"Spring Boot 2.1.8 -> 2.1.9"),Object(s.b)("li",{parentName:"ul"},"Tomcat",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"9.0.26 -> 9.0.27"),Object(s.b)("li",{parentName:"ul"},"8.5.43 -> 8.5.47"))),Object(s.b)("li",{parentName:"ul"},"ZooKeeper 3.5.5 -> 3.5.6")),Object(s.b)("h2",{id:"♂️-thank-you",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#%E2%99%82%EF%B8%8F-thank-you","aria-label":"♂️ thank you permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"🙇‍♂️ Thank you"),Object(s.b)(l,{usernames:["adriancole","anuraaga","eunchan-kim","heowc","hirakida","ikhoon","imasahiro","jyblue","kojilin","matsumana","minwoox","mumgmangmange","rcsalome","taejs","trustin"],mdxType:"ThankYou"}))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-95-0-mdx-c9eab8159c117242c368.js.map