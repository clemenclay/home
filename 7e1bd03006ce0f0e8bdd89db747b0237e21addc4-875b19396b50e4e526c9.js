"use strict";(self.webpackChunkvie_gatsby=self.webpackChunkvie_gatsby||[]).push([[455],{528:function(e,t,a){a.d(t,{Z:function(){return s}});var l=0,n=function(e,t){setInterval(function(e){(l=Number(window.getComputedStyle(e).getPropertyValue("opacity")))<1?(l+=1,e.style.opacity=l):clearInterval(0)}(e),t)};var r=function(e,t){setInterval(function(e){(l=Number(window.getComputedStyle(e).getPropertyValue("opacity")))>0?(l=0,e.style.opacity=l):clearInterval(0)}(e),t)};var s=function(){var e=document.createElement("div");e.classList.add("div-tooltip-tit"),document.body.appendChild(e);var t=document.createElement("div");t.classList.add("div-tooltip-sub"),document.body.appendChild(t),document.querySelectorAll("[data-tooltip-tit]").forEach((function(t){e=document.querySelector(".div-tooltip-tit"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-tit")})),t.addEventListener("mousemove",(function(t){n(e,800),e.style.top=t.pageY+10+"px",e.style.left=t.pageX+20+"px",e.style.padding="0px 10px"})),t.addEventListener("mouseleave",(function(){r(e,800),e.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(e){t=document.querySelector(".div-tooltip-sub"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-sub")})),e.addEventListener("mousemove",(function(e){n(t,800),t.style.top=e.pageY-15+"px",t.style.left=e.pageX+30+"px",t.style.padding="5px 10px"})),e.addEventListener("mouseleave",(function(){r(t,800),t.style.padding=0}))}))}},4085:function(e,t,a){var l=a(4578),n=a(7294),r=a(8538),s=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).renderArrows=function(){return n.createElement("div",{className:"arrows"},n.createElement("div",{className:"container"},n.createElement("div",{onClick:function(){return t.slider.slickNext()},className:"next cursor-pointer"},n.createElement("span",{className:"pe-7s-angle-right"})),n.createElement("div",{onClick:function(){return t.slider.slickPrev()},className:"prev cursor-pointer"},n.createElement("span",{className:"pe-7s-angle-left"}))))},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this;return n.createElement("section",{className:"testimonials "+(this.props.withIMG?"section-padding bg-img":this.props.withCOLOR?"section-padding back-color":this.props.noPadding?"":"section-padding")+" "+(this.props.classText?this.props.classText:""),style:{backgroundImage:this.props.withIMG?"url(/img/testim-img.jpg)":"none"}},this.props.showHead&&n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-lg-8 col-md-10"},n.createElement("div",{className:"sec-head  text-center"},n.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Testimonials"),n.createElement("h3",{className:"wow color-font"},"We love our clients from all over the world."))))),n.createElement("div",{className:"container-fluid position-re"},n.createElement("div",{className:"row wow fadeInUp","data-wow-delay":".5s"},n.createElement("div",{className:"col-lg-12"},n.createElement(r.Z,{className:"slic-item",ref:function(t){return e.slider=t},dots:!1,infinite:!0,arrows:!0,centerMode:!0,autoplay:!0,rows:1,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:767,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,centerMode:!1}}]},n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.")),n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.")),n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.")),n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service."))))),this.renderArrows()))},t}(n.Component);t.Z=s},5983:function(e,t,a){var l=a(7294);t.Z=function(){return l.createElement("header",{className:"slider-stwo valign position-re"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-5"},l.createElement("div",{className:"img"},l.createElement("img",{src:"/img/slid/002.jpg",alt:""}))),l.createElement("div",{className:"col-lg-7 valign"},l.createElement("div",{className:"cont"},l.createElement("div",{className:"sub-title mb-5"},l.createElement("h6",null,"Digital Consulting Agency")),l.createElement("h1",{className:"mb-10 fw-600"},"Unique Business Consulting."),l.createElement("p",null,"We help our clients succeed by creating brand identities,",l.createElement("br",null)," digital experiences, and print materials."),l.createElement("ul",null,l.createElement("li",null,l.createElement("div",null,l.createElement("span",{className:"icon pe-7s-arc"},l.createElement("span",{className:"bord"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Branding"),l.createElement("p",null,"It is a long established fact that a reader will be distracted."))),l.createElement("li",null,l.createElement("div",null,l.createElement("span",{className:"icon pe-7s-help2"},l.createElement("span",{className:"bord"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Marketing"),l.createElement("p",null,"It is a long established fact that a reader will be distracted.")))))))))}},8933:function(e,t,a){var l=a(7294),n=a(2497),r=a(2158),s=a(8692),c=a.n(s);t.Z=function(){return l.useEffect((function(){console.clear()})),l.createElement("section",{className:"block-sec section-padding"},l.createElement("div",{className:"container"},l.createElement("div",{className:"number-sec"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item md-mb50"},l.createElement("span",{className:"icon pe-7s-smile"}),l.createElement("h3",{className:"custom-font"}," ",l.createElement(r.ZP,{redraw:!0,end:2400,duration:"3"},(function(e){var t=e.countUpRef,a=e.start;return l.createElement(c(),{onChange:a,delayedCall:!0},l.createElement("span",{className:"count",ref:t}))}))),l.createElement(n.Z,null,l.createElement("p",{className:"wow words chars splitting txt","data-splitting":!0},"Happy Clients")))),l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item md-mb50"},l.createElement("span",{className:"icon pe-7s-portfolio"}),l.createElement("h3",{className:"custom-font"}," ",l.createElement(r.ZP,{redraw:!0,end:133,duration:"3"},(function(e){var t=e.countUpRef,a=e.start;return l.createElement(c(),{onChange:a,delayedCall:!0},l.createElement("span",{className:"count",ref:t}))}))),l.createElement(n.Z,null,l.createElement("p",{className:"wow txt words chars splitting ","data-splitting":!0},"Compleate Projects")))),l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item sm-mb50"},l.createElement("span",{className:"icon pe-7s-cloud-download"}),l.createElement("h3",{className:"custom-font"}," ",l.createElement(r.ZP,{redraw:!0,end:254,duration:"3"},(function(e){var t=e.countUpRef,a=e.start;return l.createElement(c(),{onChange:a,delayedCall:!0},l.createElement("span",{className:"count",ref:t}))})),"k"),l.createElement(n.Z,null,l.createElement("p",{className:"wow txt words chars splitting","data-splitting":!0},"Files Downloaded")))),l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item"},l.createElement("span",{className:"icon pe-7s-medal"}),l.createElement("h3",{className:"custom-font"}," ",l.createElement(r.ZP,{redraw:!0,end:46,duration:"3"},(function(e){var t=e.countUpRef,a=e.start;return l.createElement(c(),{onChange:a,delayedCall:!0},l.createElement("span",{className:"count",ref:t}))}))),l.createElement(n.Z,null,l.createElement("p",{className:"wow txt words chars splitting","data-splitting":!0},"Award Win"))))))))}},5538:function(e,t,a){var l=a(7294),n=a(1082);t.Z=function(){return l.createElement("section",{className:"services section-padding position-re"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-8 col-md-10"},l.createElement("div",{className:"sec-head  text-center"},l.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Best Features"),l.createElement("h3",{className:"wow color-font"},"We are a new digital product development agency")))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-4 wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"step-item xtop"},l.createElement("span",{className:"icon pe-7s-gleam"}),l.createElement("h6",null,"Digital Marketing"),l.createElement("p",null,"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."))),l.createElement("div",{className:"col-lg-4 wow fadeInUp","data-wow-delay":".6s"},l.createElement("div",{className:"step-item xcolor"},l.createElement("span",{className:"icon pe-7s-phone"}),l.createElement("h6",null,"Web & App Development"),l.createElement("p",null,"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."))),l.createElement("div",{className:"col-lg-4 wow fadeInUp","data-wow-delay":".9s"},l.createElement("div",{className:"step-item xbottom"},l.createElement("span",{className:"icon pe-7s-magic-wand"}),l.createElement("h6",null,"Graphic Design"),l.createElement("p",null,"Tempore corrupti temporibus fuga earum asperiores fugit laudantium.")))),l.createElement("div",{className:"smore"},l.createElement(n.rU,{to:"/about/about-dark"},"Discover More"),l.createElement("i",{className:"fas fa-long-arrow-alt-right"}))),l.createElement("div",{className:"line top left"}),l.createElement("div",{className:"line bottom right"}))}},1541:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=function(){var e=document.querySelector(".team-crv");e&&window.addEventListener("scroll",(function(){document.querySelectorAll(".skill-progress .progres").forEach((function(t){var a=t.getAttribute("data-value");window.pageYOffset>e.offsetTop-200&&(t.style.width=a)}))}))},r=a(528),s=JSON.parse('{"f":[{"id":1,"image":"/img/team/1.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"},{"id":2,"image":"/img/team/2.jpg","title":"Alex Regelman","sub":"CEO, Colabrio Media"},{"id":3,"image":"/img/team/3.jpg","title":"Stacey Stamper","sub":"CEO, Colabrio Media"},{"id":4,"image":"/img/team/4.jpg","title":"Stephanie Lawrence","sub":"CEO, Colabrio Media"}],"n":[{"id":1,"text":"UI / UX Design","value":"90%"},{"id":2,"text":"Apps Development","value":"80%"}]}'),c=function(){return(0,l.useEffect)((function(){n(),window.addEventListener("load",(function(){setTimeout((function(){(0,r.Z)()}),0)}))}),[]),l.createElement("div",{className:"team-crv section-padding"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-5 valign"},l.createElement("div",{className:"content wow fadeInUp md-mb30","data-wow-delay":".5s"},l.createElement("div",{className:"sub-title"},l.createElement("h6",null,"Our Staff"),l.createElement("span",null),l.createElement("span",null),l.createElement("span",null)),l.createElement("h3",{className:"co-tit mb-15"},"We help to create visual strategies."),l.createElement("p",null,"We are Vie. We create award-winning websites, remarkable brands and cutting-edge apps.Nullam imperdie."),l.createElement("div",{className:"skills-box mt-40"},s.n.map((function(e){return l.createElement("div",{className:"skill-item",key:e.id},l.createElement("h6",{className:"custom-font"},e.text),l.createElement("div",{className:"skill-progress"},l.createElement("div",{className:"progres","data-value":e.value})))}))))),l.createElement("div",{className:"col-lg-6 offset-lg-1"},l.createElement("div",{className:"img-box"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-sm-6 toright"},l.createElement("div",{className:"full-width"},s.f.slice(0,2).map((function(e,t){return l.createElement("div",{key:e.id},l.createElement("div",{className:"img sizxl "+(t+1!=s.f.slice(0,2).length?"mb-30":null),"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub},l.createElement("img",{src:e.image,alt:"",className:"imago wow"})))})))),l.createElement("div",{className:"col-sm-6 toleft valign"},l.createElement("div",{className:"full-width text-left"},s.f.slice(2,4).map((function(e,t){return l.createElement("div",{key:e.id},l.createElement("div",{className:"img sizxl "+(t+1!=s.f.slice(2,4).length?"mb-30":null),"data-tooltip-tit":e.title,"data-tooltip-sub":e.sub},l.createElement("img",{src:e.image,alt:"",className:"imago wow"})))}))))))))))}},8196:function(e,t,a){var l=a(7294),n=a(1082),r=a(3152),s=a(4321);s.ZP.use([s.W_]);t.Z=function(e){e.sliderRef;var t=l.useState(!0),a=t[0],s=t[1];l.useEffect((function(){setTimeout((function(){s(!1)}))}),[]);var c=l.useRef(null),i=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("section",{className:"work-carousel section-padding caroul position-re pb-0"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-8 col-md-10"},l.createElement("div",{className:"sec-head  text-center"},l.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Latest Work"),l.createElement("h3",{className:"wow color-font"},"Our Recent Web Design & ",l.createElement("br",null)," Some Past Projects.")))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12 no-padding"},l.createElement("div",{className:"swiper-container"},l.createElement("div",{className:"swiper-container "},a?null:l.createElement(r.tq,{speed:1e3,loop:!0,spaceBetween:0,breakpoints:{320:{slidesPerView:1,spaceBetween:0},767:{slidesPerView:2,spaceBetween:0},991:{slidesPerView:3,spaceBetween:0},1024:{slidesPerView:4,spaceBetween:0}},navigation:{prevEl:c.current,nextEl:i.current},onBeforeInit:function(e){e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=i.current},onSwiper:function(e){setTimeout((function(){e.params.navigation.prevEl=c.current,e.params.navigation.nextEl=i.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},className:"swiper-wrapper",slidesPerView:1},l.createElement(r.o5,{className:"swiper-slide"},l.createElement("div",{className:"content wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/portfolio/curs/1.jpg)"}}),l.createElement("div",{className:"cont bgbox"},l.createElement("h6",null,l.createElement(n.rU,{to:"/works2/works2-dark"},"art & illustration")),l.createElement("h4",null,l.createElement(n.rU,{to:"/project-details2/project-details2-dark"},"Innovation and Crafts."))))),l.createElement(r.o5,{className:"swiper-slide"},l.createElement("div",{className:"content wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/portfolio/curs/2.jpg)"}}),l.createElement("div",{className:"cont bgbox"},l.createElement("h6",null,l.createElement(n.rU,{to:"/works2/works2-dark"},"art & illustration")),l.createElement("h4",null,l.createElement(n.rU,{to:"/project-details2/project-details2-dark"},"Inspiring new space."))))),l.createElement(r.o5,{className:"swiper-slide"},l.createElement("div",{className:"content wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/portfolio/curs/3.jpg)"}}),l.createElement("div",{className:"cont bgbox"},l.createElement("h6",null,l.createElement(n.rU,{to:"/works2/works2-dark"},"art & illustration")),l.createElement("h4",null,l.createElement(n.rU,{to:"/project-details2/project-details2-dark"},"Natural plus modern."))))),l.createElement(r.o5,{className:"swiper-slide"},l.createElement("div",{className:"content wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/portfolio/curs/4.jpg)"}}),l.createElement("div",{className:"cont bgbox"},l.createElement("h6",null,l.createElement(n.rU,{to:"/works2/works2-dark"},"art & illustration")),l.createElement("h4",null,l.createElement(n.rU,{to:"/project-details2/project-details2-dark"},"Innovation and Crafts."))))),l.createElement(r.o5,{className:"swiper-slide"},l.createElement("div",{className:"content wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"item-img bg-img wow imago",style:{backgroundImage:"url(/img/portfolio/curs/5.jpg)"}}),l.createElement("div",{className:"cont bgbox"},l.createElement("h6",null,l.createElement(n.rU,{to:"/works2/works2-dark"},"art & illustration")),l.createElement("h4",null,l.createElement(n.rU,{to:"/project-details2/project-details2-dark"},"Inspiring new space.")))))),l.createElement("div",{ref:i,className:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},l.createElement("i",{className:"ion-ios-arrow-right"})),l.createElement("div",{ref:c,className:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},l.createElement("i",{className:"ion-ios-arrow-left"})))))))))}},2736:function(e,t,a){var l=a(7294),n=a(1082);t.Z=function(){return l.createElement("section",{className:"blog-grid section-padding position-re"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-8 col-md-10"},l.createElement("div",{className:"sec-head text-center"},l.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"RECENT ARTICLES"),l.createElement("h3",{className:"wow color-font"},"From our blogs.")))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-4 wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"item bg-img",style:{backgroundImage:"url(/img/blog/1.jpg)"}},l.createElement("div",{className:"cont"},l.createElement(n.rU,{to:"/blog/blog-dark",className:"date"},l.createElement("span",null,l.createElement("i",null,"06")," Aug 2022")),l.createElement("div",{className:"info"},l.createElement("a",{href:"#0",className:"author"},l.createElement("span",null,"by / Admin")),l.createElement(n.rU,{to:"/blog/blog-dark",className:"tag"},l.createElement("span",null,"WordPress"))),l.createElement("h6",null,l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),l.createElement("div",{className:"btn-more"},l.createElement(n.rU,{to:"/blog-details/blog-details-dark",className:"simple-btn"},"Read More"))))),l.createElement("div",{className:"col-lg-4 wow fadeInUp","data-wow-delay":".6s"},l.createElement("div",{className:"item active bg-img",style:{backgroundImage:"url(/img/blog/2.jpg)"}},l.createElement("div",{className:"cont"},l.createElement(n.rU,{to:"/blog/blog-dark",className:"date"},l.createElement("span",null,l.createElement("i",null,"06")," Aug 2022")),l.createElement("div",{className:"info"},l.createElement("a",{href:"#0",className:"author"},l.createElement("span",null,"by / Admin")),l.createElement(n.rU,{to:"/blog/blog-dark",className:"tag"},l.createElement("span",null,"WordPress"))),l.createElement("h6",null,l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),l.createElement("div",{className:"btn-more"},l.createElement(n.rU,{to:"/blog-details/blog-details-dark",className:"simple-btn"},"Read More"))))),l.createElement("div",{className:"col-lg-4 wow fadeInUp","data-wow-delay":".9s"},l.createElement("div",{className:"item bg-img",style:{backgroundImage:"url(/img/blog/3.jpg)"}},l.createElement("div",{className:"cont"},l.createElement(n.rU,{to:"/blog/blog-dark",className:"date"},l.createElement("span",null,l.createElement("i",null,"06")," Aug 2022")),l.createElement("div",{className:"info"},l.createElement("a",{href:"#0",className:"author"},l.createElement("span",null,"by / Admin")),l.createElement(n.rU,{to:"/blog/blog-dark",className:"tag"},l.createElement("span",null,"WordPress"))),l.createElement("h6",null,l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),l.createElement("div",{className:"btn-more"},l.createElement(n.rU,{to:"/blog-details/blog-details-dark",className:"simple-btn"},"Read More"))))))),l.createElement("div",{className:"line top right"}),l.createElement("div",{className:"line bottom left"}))}}}]);
//# sourceMappingURL=7e1bd03006ce0f0e8bdd89db747b0237e21addc4-875b19396b50e4e526c9.js.map