"use strict";(self.webpackChunkvie_gatsby=self.webpackChunkvie_gatsby||[]).push([[8948],{2818:function(e,t){t.Z=function(e){window.addEventListener("scroll",(function(){var t=window.pageYOffset;e&&e.forEach((function(e){e.style.transform="translate3d(0, "+-.2*t+"px, 0)",e.style.opacity=1-t/600}))}))}},5389:function(e,t){t.Z=function(e){var t=[];if(!e.parentNode)return t;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t}},9836:function(e,t){t.Z=function(){var e,t=document.querySelectorAll(".gallery");t.length>=1&&t.forEach((function(t){e=new Isotope(t,{itemSelector:".items"})}));var a=document.querySelectorAll(".gallery-mons");a.length>=1&&a.forEach((function(t){e=new Isotope(t,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var r=document.querySelector(".filtering");if(r){var l=function(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"span")&&(e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"))}))};r.addEventListener("click",(function(t){if(matchesSelector(t.target,"span")){var a=t.target.getAttribute("data-filter");e.arrange({filter:a})}}));for(var n=document.querySelectorAll(".filtering"),o=0,s=n.length;o<s;o++){l(n[o])}}}},5090:function(e,t,a){a.d(t,{_:function(){return n},z:function(){return l}});var r=a(5389),l=function(e){(0,r.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).forEach((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},n=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},2057:function(e,t,a){var r=a(7294),l=a(1082),n=a(2806);t.Z=function(e){var t=e.hideBGCOLOR;return r.createElement("footer",{className:t?"":"sub-bg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-4"},r.createElement("div",{className:"item md-mb50"},r.createElement("div",{className:"title"},r.createElement("h5",null,"Contact Us")),r.createElement("ul",null,r.createElement("li",null,r.createElement("span",{className:"icon pe-7s-map-marker"}),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Officeal Address"),r.createElement("p",null,"504 White St . Dawsonville, GA 30534 , New York"))),r.createElement("li",null,r.createElement("span",{className:"icon pe-7s-mail"}),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Email Us"),r.createElement("p",null,"support@gmail.com"))),r.createElement("li",null,r.createElement("span",{className:"icon pe-7s-call"}),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Call Us"),r.createElement("p",null,"+87986451666")))))),r.createElement("div",{className:"col-lg-4"},r.createElement("div",{className:"item md-mb50"},r.createElement("div",{className:"title"},r.createElement("h5",null,"Recent News")),r.createElement("ul",null,r.createElement("li",null,r.createElement("div",{className:"img"},r.createElement(l.rU,{to:"/blog-details/blog-details-dark"},r.createElement("img",{src:"/img/blog/1.jpg",alt:""}))),r.createElement("div",{className:"sm-post"},r.createElement(l.rU,{to:"/blog-details/blog-details-dark"},r.createElement("p",null,"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),r.createElement(l.rU,{to:"/blog/blog-dark"},r.createElement("span",{className:"date"},"14 sep 2022")))),r.createElement("li",null,r.createElement("div",{className:"img"},r.createElement(l.rU,{to:"/blog-details/blog-details-dark"},r.createElement("img",{src:"/img/blog/2.jpg",alt:""}))),r.createElement("div",{className:"sm-post"},r.createElement(l.rU,{to:"/blog-details/blog-details-dark"},r.createElement("p",null,"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),r.createElement(l.rU,{to:"/blog/blog-dark"},r.createElement("span",{className:"date"},"14 sep 2022")))),r.createElement("li",null,r.createElement("div",{className:"subscribe"},r.createElement("input",{type:"text",placeholder:"Type Your Email"}),r.createElement("span",{className:"subs pe-7s-paper-plane"})))))),r.createElement("div",{className:"col-lg-4"},r.createElement("div",{className:"item"},r.createElement("div",{className:"logo"},r.createElement("img",{src:n.E8,alt:""})),r.createElement("div",{className:"social"},r.createElement("a",{href:"#0"},r.createElement("i",{className:"fab fa-facebook-f"})),r.createElement("a",{href:"#0"},r.createElement("i",{className:"fab fa-twitter"})),r.createElement("a",{href:"#0"},r.createElement("i",{className:"fab fa-instagram"})),r.createElement("a",{href:"#0"},r.createElement("i",{className:"fab fa-youtube"}))),r.createElement("div",{className:"copy-right"},r.createElement("p",null,"© 2022, Vie Template. Made with passion by",r.createElement(l.rU,{to:"https://themeforest.net/user/themescamp/portfolio",target:"_blank"},"ThemesCamp"),".")))))))}},5233:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),l=function(){Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone"),document.querySelector(".loading").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&(document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")),window.addEventListener("load",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone"),document.querySelector(".pace-running.pace-running")&&document.querySelector(".pace-running.pace-running").classList.remove("pace-running")}))},n=a(2806),o=function(){return r.useEffect((function(){var e=document.querySelector("body");n.QP?(l(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:!0===n.QP?"showX":"hideX"},r.createElement("div",{className:"loading"},r.createElement("span",null,"L"),r.createElement("span",null,"o"),r.createElement("span",null,"a"),r.createElement("span",null,"d"),r.createElement("span",null,"i"),r.createElement("span",null,"n"),r.createElement("span",null,"g")),r.createElement("div",{id:"preloader"})))}},2699:function(e,t,a){var r=a(7294),l=a(1082),n=a(2806),o=a(5090);t.Z=function(e){var t=e.lr,a=e.nr,s=e.theme;return r.createElement("nav",{ref:a,className:"navbar navbar-expand-lg change "+("themeL"===s?"light":"")},r.createElement("div",{className:"container"},r.createElement(l.rU,{to:"/",className:"logo"},s&&"themeL"===s?r.createElement("img",{ref:t,src:n.Q1,alt:"logo"}):r.createElement("img",{ref:t,src:n.E8,alt:"logo"})),r.createElement("button",{className:"navbar-toggler",type:"button",onClick:o._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"icon-bar"},r.createElement("i",{className:"fas fa-bars"}))),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.createElement("ul",{className:"navbar-nav ml-auto"},r.createElement("li",{className:"nav-item dropdown",onClick:o.z},r.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Home"),r.createElement("div",{className:"dropdown-menu"},r.createElement(l.rU,{to:"/homepage/home1-dark",className:"dropdown-item"},"Main Home"),r.createElement(l.rU,{to:"/homepage/home2-dark",className:"dropdown-item"},"Creative Agency"),r.createElement(l.rU,{to:"/homepage/home5-dark",className:"dropdown-item"},"Digital Agency"),r.createElement(l.rU,{to:"/homepage/home4-dark",className:"dropdown-item"},"Business One Page"),r.createElement(l.rU,{to:"/homepage/home3-dark",className:"dropdown-item"},"Corporate Business"),r.createElement(l.rU,{to:"/homepage/home6-dark",className:"dropdown-item"},"Modern Agency"),r.createElement(l.rU,{to:"/homepage/home7-dark",className:"dropdown-item"},"Freelancer"),r.createElement(l.rU,{to:"/homepage/home8-dark",className:"dropdown-item"},"Architecture"))),r.createElement("li",{className:"nav-item"},r.createElement(l.rU,{to:"/about/about-dark",className:"nav-link"},"About")),r.createElement("li",{className:"nav-item dropdown",onClick:o.z},r.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Works"),r.createElement("div",{className:"dropdown-menu"},r.createElement(l.rU,{to:"/showcase/showcase-dark",className:"dropdown-item"},"Showcase Parallax"),r.createElement(l.rU,{to:"/showcase4/showcase4-dark",className:"dropdown-item"},"Showcase Carousel"),r.createElement(l.rU,{to:"/showcase3/showcase3-dark",className:"dropdown-item"},"Showcase Circle"),r.createElement(l.rU,{to:"/works/works-dark",className:"dropdown-item"},"Portfolio Masonry"),r.createElement(l.rU,{to:"/works2/works2-dark",className:"dropdown-item"},"Portfolio Filtering"),r.createElement(l.rU,{to:"/works3/works3-dark",className:"dropdown-item"},"Portfolio Gallery"))),r.createElement("li",{className:"nav-item dropdown",onClick:o.z},r.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Blog"),r.createElement("div",{className:"dropdown-menu"},r.createElement(l.rU,{to:"/blog/blog-dark",className:"dropdown-item"},"Blog Standerd"),r.createElement(l.rU,{to:"/blog-list/blog-list-dark",className:"dropdown-item"},"Blog List"),r.createElement(l.rU,{to:"/blog-grid/blog-grid-dark",className:"dropdown-item"},"Blog Grid"),r.createElement(l.rU,{to:"/blog-details/blog-details-dark",className:"dropdown-item"},"Blog Details"))),r.createElement("li",{className:"nav-item"},r.createElement(l.rU,{to:"/contact/contact-dark",className:"nav-link"},"Contact"))))))}},741:function(e,t,a){var r=a(7294),l=a(2818);t.Z=function(e){var t=e.sliderRef;return r.useEffect((function(){(0,l.Z)(document.querySelectorAll(".fixed-slider .capt .parlx"))}),[]),r.createElement("header",{ref:t,className:"works-header fixed-slider hfixd valign sub-bg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-lg-7 col-md-9 static"},r.createElement("div",{className:"capt mt-50"},r.createElement("div",{className:"parlx text-center"},r.createElement("h1",{className:"color-font"},"amazing works"),r.createElement("p",null,"Creativity involves breaking out of expected & repeatable patterns in order to look at things in different way than ever before.")),r.createElement("div",{className:"bactxt custom-font valign"},r.createElement("span",{className:"full-width"},"Works")))))))}},8596:function(e,t,a){var r=a(7294),l=a(1082),n=a(9836);t.Z=function(e){var t=e.grid,a=e.hideFilter,o=e.filterPosition;return r.useEffect((function(){setTimeout((function(){(0,n.Z)()}),1e3)}),[]),r.createElement("section",{className:(t&&3===t?"three-column":null)+" portfolio section-padding pb-70"},!a&&r.createElement("div",{className:"container"},r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:"col-lg-8 col-md-10"},r.createElement("div",{className:"sec-head text-center"},r.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Portfolio"),r.createElement("h3",{className:"wow color-font"},"Our Recent Web Design & ",r.createElement("br",null)," Some Past Projects."))))),r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},!a&&r.createElement("div",{className:"filtering "+("center"===o?"text-center":"left"===o?"text-left":"text-right")+" col-12"},r.createElement("div",{className:"filter"},r.createElement("span",{"data-filter":"*",className:"active"},"All"),r.createElement("span",{"data-filter":".brand"},"Branding"),r.createElement("span",{"data-filter":".web"},"Mobile App"),r.createElement("span",{"data-filter":".graphic"},"Creative"))),r.createElement("div",{className:"gallery full-width"},r.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items graphic wow fadeInUp","data-wow-delay":".4s"},r.createElement("div",{className:"item-img"},r.createElement(l.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},r.createElement("img",{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}),r.createElement("div",{className:"item-img-overlay"}))),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Creativity Demand"),r.createElement("span",null,r.createElement(l.rU,{to:"/works3/works3-dark"},"Design"),",",r.createElement(l.rU,{to:"/works3/works3-dark"},"WordPress")))),r.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items web wow fadeInUp","data-wow-delay":".4s"},r.createElement("div",{className:"item-img"},r.createElement(l.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},r.createElement("img",{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}),r.createElement("div",{className:"item-img-overlay"}))),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Through The Breaking"),r.createElement("span",null,r.createElement(l.rU,{to:"/works3/works3-dark"},"Design"),",",r.createElement(l.rU,{to:"/works3/works3-dark"},"WordPress")))),r.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items brand wow fadeInUp","data-wow-delay":".4s"},r.createElement("div",{className:"item-img"},r.createElement(l.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},r.createElement("img",{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}),r.createElement("div",{className:"item-img-overlay"}))),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Create With Creatives"),r.createElement("span",null,r.createElement(l.rU,{to:"/works3/works3-dark"},"Design"),",",r.createElement(l.rU,{to:"/works3/works3-dark"},"WordPress")))),r.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items graphic wow fadeInUp","data-wow-delay":".4s"},r.createElement("div",{className:"item-img"},r.createElement(l.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},r.createElement("img",{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}),r.createElement("div",{className:"item-img-overlay"}))),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Energies of Love"),r.createElement("span",null,r.createElement(l.rU,{to:"/works3/works3-dark"},"Design"),",",r.createElement(l.rU,{to:"/works3/works3-dark"},"WordPress")))),r.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items web wow fadeInUp","data-wow-delay":".4s"},r.createElement("div",{className:"item-img"},r.createElement(l.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},r.createElement("img",{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}),r.createElement("div",{className:"item-img-overlay"}))),r.createElement("div",{className:"cont"},r.createElement("h6",null,"See It Yourself"),r.createElement("span",null,r.createElement(l.rU,{to:"/works3/works3-dark"},"Design"),",",r.createElement(l.rU,{to:"/works3/works3-dark"},"WordPress")))),r.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items brand wow fadeInUp","data-wow-delay":".4s"},r.createElement("div",{className:"item-img"},r.createElement(l.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},r.createElement("img",{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}),r.createElement("div",{className:"item-img-overlay"}))),r.createElement("div",{className:"cont"},r.createElement("h6",null,"Blast From The Past"),r.createElement("span",null,r.createElement(l.rU,{to:"/works3/works3-dark"},"Design"),",",r.createElement(l.rU,{to:"/works3/works3-dark"},"WordPress"))))))))}},3422:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),l=function(){var e,t;e=document.querySelector(".cursor-inner"),t=document.querySelector(".cursor-outer"),window.onmousemove=function(a){t.style.transform="translate("+a.clientX+"px, "+a.clientY+"px)",e.style.transform="translate("+a.clientX+"px, "+a.clientY+"px)",a.clientY,a.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")})),e.style.visibility="visible",t.style.visibility="visible"),document.querySelectorAll("a").forEach((function(a){a.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(a){a.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")}))})),e.style.visibility="visible",t.style.visibility="visible"},n=function(){return r.useEffect((function(){l()}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"mouse-cursor cursor-outer"}),r.createElement("div",{className:"mouse-cursor cursor-inner"}))}},5354:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),l=function(){var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var a=function(){var a=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight,l=t-a*t/r;e.style.strokeDashoffset=l};a(),window.addEventListener("scroll",a);var r=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?r.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),r.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},n=function(){return r.useEffect((function(){l()}),[]),r.createElement("div",{className:"progress-wrap cursor-pointer"},r.createElement("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102"},r.createElement("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})))}},2806:function(e){e.exports=JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png","QP":true}')}}]);
//# sourceMappingURL=3d41c5b0f360945a4ffbefe02b18c350e0f4be15-e0659f52f0c481ec4689.js.map