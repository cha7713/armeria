(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var n=a("wFql"),i=a("q1tI"),s=a.n(i),r=a("2+3N"),c=a("1lec"),b=a("+ejy"),l=a("+9zj"),o=n.a.Title;t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(r).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(c).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var i=Object(l.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),s.a.createElement(b.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?s.a.createElement(o,{id:"release-notes",level:1},s.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},s.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},aXMD:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,i=a("8o2o"),s=(a("q1tI"),a("7ljp")),r=a("JkCF"),c={},b=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),l={_frontmatter:c},o=r.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)(o,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",{className:"date"},"23rd September 2019"),Object(s.b)("h2",{id:"new-features",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You can now easily get the request URI using ",Object(s.b)("inlineCode",{parentName:"li"},"RequestHeaders.uri()")," and ",Object(s.b)("inlineCode",{parentName:"li"},"HttpRequest.uri()"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2092"}),"#2092"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'RequestHeaders headers = RequestHeaders.of(HttpMethod.GET, "/foo",\n                                           HttpHeaderNames.SCHEME, "https",\n                                           HttpHeaderNames.AUTHORITY, "example.com"));\nassert headers.uri().equals(URI.create("https://example.com/foo"));\nassert HttpRequest.of(header).uri() == headers.uri();\n'))),Object(s.b)("li",{parentName:"ul"},"You can now decorate the ",Object(s.b)("inlineCode",{parentName:"li"},"Runnable")," of the ",Object(s.b)("inlineCode",{parentName:"li"},"Thread")," created using ",Object(s.b)("inlineCode",{parentName:"li"},"ThreadFactoryBuilder"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2047"}),"#2047")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2067"}),"#2067"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ThreadFactories.builder(...)\n               .eventLoop(true)\n               .daemon(true)\n               .priority(...)\n               .taskFunction(task -> {\n                   // Specify your logic here so it's executed before the Runnable.\n                   task.run();\n                   // Specify your logic here so it's executed after the Runnable.\n               })\n               .build();\n"))),Object(s.b)("li",{parentName:"ul"},"You can now configure ",Object(s.b)("inlineCode",{parentName:"li"},"Server")," using ",Object(s.b)("inlineCode",{parentName:"li"},"Consumer<ServerBuilder>")," as well as ",Object(s.b)("inlineCode",{parentName:"li"},"ArmeriaServerConfigurator")," when integrating with Spring Boot. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2070"}),"#2070"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"@Bean\npublic Consumer<ServerBuilder> customizer() {\n    return sb -> sb.port(...)\n                   ...\n                   .service(...);\n}\n"))),Object(s.b)("li",{parentName:"ul"},"You can now set example requests using ",Object(s.b)("inlineCode",{parentName:"li"},"AnnotatedServiceRegistrationBean"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1855"}),"#1855")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2026"}),"#2026"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'@Bean\npublic AnnotatedServiceRegistrationBean okService() {\n    return new AnnotatedServiceRegistrationBean()\n            .setServiceName("myAnnotatedService")\n            .setPathPrefix("/my_service")\n            .setService(new MyAnnotatedService())\n            .setExampleRequests(Lists.of(\n                    AnnotatedExampleRequest.of("myMethod", "{\\"foo\\":\\"bar\\"}")));\n}\n'))),Object(s.b)("li",{parentName:"ul"},"You can be aware of whether the response content is empty from an HTTP status code. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2058"}),"#2058"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HttpStatus status = ...\nif (!status.isContentAlwaysEmpty()) {\n    // We may have a body!\n}\n"))),Object(s.b)("li",{parentName:"ul"},"You can use ",Object(s.b)("inlineCode",{parentName:"li"},"SettableHealthIndicator")," for health check responses when using Spring boot autoconfigure. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2088"}),"#2088"))),Object(s.b)("h2",{id:"improvements",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You will see the doc service automatically scrolls down to the debug form if the URL contains a request. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1682"}),"#1682")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2045"}),"#2045")),Object(s.b)("li",{parentName:"ul"},"The performance for parsing a struct context in Thrift is improved, thanks to the ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://openjdk.java.net/jeps/259"}),"Stack-Walking API")," in Java 9. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1686"}),"#1686")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2055"}),"#2055")),Object(s.b)("li",{parentName:"ul"},"You will see the int values of Enum members if they have in doc service. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1966"}),"#1966")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2015"}),"#2015")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"RequestContext")," instead of ",Object(s.b)("inlineCode",{parentName:"li"},"RequestLog")," is used for trace parsing and sampling. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2038"}),"#2038"))),Object(s.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"You can now get the gRPC web trailers in the client. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2030"}),"#2030")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2076"}),"#2076")),Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://www.baeldung.com/spring-boot-actuators"}),"actuator")," now responds with the correct Spring boot content type. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2061"}),"#2061")),Object(s.b)("li",{parentName:"ul"},"The blocking stub in gRPC now can read messages. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2065"}),"#2065")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2066"}),"#2066")),Object(s.b)("li",{parentName:"ul"},"The listeners for ",Object(s.b)("inlineCode",{parentName:"li"},"EndpointGroup")," are notified after the first health check even when all endpoints are unhealthy. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2074"}),"#2074")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2075"}),"#2075")),Object(s.b)("li",{parentName:"ul"},"The subscriber who subscribes to the ",Object(s.b)("inlineCode",{parentName:"li"},"Response")," from a ",Object(s.b)("inlineCode",{parentName:"li"},"WebClient")," gets notified when it's complete. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2080"}),"#2080")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2087"}),"#2087")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"IllegalStateException")," that indicates the log should have at least one child is no longer raised when retrying. ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2082"}),"#2082")," ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2083"}),"#2083")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"DefaultEventLoopScheduler")," respects ",Object(s.b)("inlineCode",{parentName:"li"},"maxNumEventLoopsPerHttpHttp1Endpoint")," set from ",Object(s.b)("inlineCode",{parentName:"li"},"ClientFactoryBuilder"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2086"}),"#2086"))),Object(s.b)("h2",{id:"deprecation",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#deprecation","aria-label":"deprecation permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Deprecation"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The ",Object(s.b)("inlineCode",{parentName:"li"},"EventLoopThreadFactory")," has been deprecated in favor of ",Object(s.b)("inlineCode",{parentName:"li"},"ThreadFactories"),". ",Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/2067"}),"#2067"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ThreadFactory factory = ThreadFactories.builder("myThread")\n                                       .eventLoop(true)\n                                       .build();\n')))),Object(s.b)("h2",{id:"breaking-changes",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking changes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Specifying an ",Object(s.b)("inlineCode",{parentName:"p"},":authority")," header in a request has no effect anymore. The current ",Object(s.b)("inlineCode",{parentName:"p"},"Endpoint")," always determines the authority. ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2092"}),"#2092")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// This does NOT work anymore.\nfinal HttpClient client = HttpClient.of("https://127.0.0.1:8080/");\nclient.execute(RequestHeaders.of(HttpMethod.GET, "/",\n                                 HttpHeaderNames.AUTHORITY, "foo.com"));\n// This works.\nfinal HttpClient client =\n        HttpClient.of(SessionProtocol.HTTPS,\n                      Endpoint.of("foo.com", 8080).withIpAddr("127.0.0.1"));\nclient.get("/");\n')),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Instead, you can now use ",Object(s.b)("inlineCode",{parentName:"p"},"ClientOption.HTTP_HEADERS")," or ",Object(s.b)("inlineCode",{parentName:"p"},"{Client,Service}RequestContext.additional{Request,Response}{Headers,Trailers}()")," to override the existing headers, including ",Object(s.b)("inlineCode",{parentName:"p"},":authority"),". ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2092"}),"#2092")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// This works.\nfinal HttpHeaders customHeaders =\n        HttpHeaders.of(HttpHeaderNames.AUTHORITY, "foo.com");\nfinal HttpClient client =\n        HttpClient.of("http://127.0.0.1:8080/",\n                      ClientOption.HTTP_HEADERS.newValue(customHeaders));\nclient.get("/");\n\n// This also works.\nfinal HttpClient client = HttpClient.of("http://127.0.0.1:8080/");\ntry (SafeCloseable ignored = Clients.withHttpHeader(\n             HttpHeaderNames.AUTHORITY, "foo.com")) {\n    client.get("/");\n}\n'))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"ExceptionHandlerFunction.handleExeption()")," accepts ",Object(s.b)("inlineCode",{parentName:"p"},"ServiceRequestContext")," instead of ",Object(s.b)("inlineCode",{parentName:"p"},"RequestContext"),". ",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/2060"}),"#2060")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"You don't have to downcast anymore. :)"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"GrpcServiceRegistrationBean.ExampleRequest")," has been removed. Use ",Object(s.b)("inlineCode",{parentName:"p"},"GrpcExampleRequest"),"."))),Object(s.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Micrometer 1.2.0 -> 1.2.1"),Object(s.b)("li",{parentName:"ul"},"Netty 4.1.39.Final -> 4.1.41.Final"),Object(s.b)("li",{parentName:"ul"},"Tomcat 9.0.24 -> 9.0.26",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Tomcat8 8.5.43 -> 8.5.45")))),Object(s.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(s.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(s.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(s.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(s.b)(b,{usernames:["adriancole","andrewoma","anirudhr95","anuraaga","eugene70","heowc","hirakida","ikhoon","imasahiro","jyblue","kojilin","minwoox","moonchanyong","SooJungDev","taejs","trustin","Waynefn"],mdxType:"ThankYou"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-92-0-mdx-271b1c6c1fa938bd1444.js.map