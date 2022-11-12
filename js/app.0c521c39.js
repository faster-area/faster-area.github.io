(function(){"use strict";var e={545:function(e,t,n){var o=n(9963),a=n(6252);function r(e,t,n,o,r,i){const c=(0,a.up)("app-header"),u=(0,a.up)("router-view"),s=(0,a.up)("app-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[((0,a.wg)(),(0,a.j4)(c,{key:e.$route.fullPath})),(0,a.Wm)(u,{class:"test"}),(0,a.Wm)(s)],64)}var i=n(6949);const c=e=>((0,a.dD)("data-v-718e2f94"),e=e(),(0,a.Cn)(),e),u=c((()=>(0,a._)("img",{alt:"Vue logo",src:i,height:"120"},null,-1))),s={class:"buttons"},l={class:"ulbuttons"},d={key:0,class:"libuttons"},f=c((()=>(0,a._)("button",{class:"button-log",role:"button"},"Dashboard",-1))),h={key:1,class:"libuttons"},m=c((()=>(0,a._)("button",{class:"button-log",role:"button"},"Login",-1))),p={key:2,class:"libuttons"},b=c((()=>(0,a._)("button",{class:"button-log",role:"button"},"Register",-1))),g=c((()=>(0,a._)("button",{class:"button-log",role:"button"},"Disconnect",-1))),v=[g];function A(e,t,n,o,r,i){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a._)("nav",null,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(c,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About us")])),_:1})])])]),(0,a._)("nav",s,[(0,a._)("ul",l,[r.userLoggedIn?((0,a.wg)(),(0,a.iD)("li",d,[(0,a.Wm)(c,{to:"/dashboard"},{default:(0,a.w5)((()=>[f])),_:1})])):(0,a.kq)("",!0),r.userLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",h,[(0,a.Wm)(c,{to:"/login"},{default:(0,a.w5)((()=>[m])),_:1})])),r.userLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",p,[(0,a.Wm)(c,{to:"/register"},{default:(0,a.w5)((()=>[b])),_:1})])),r.userLoggedIn?((0,a.wg)(),(0,a.iD)("li",{key:3,onClick:t[0]||(t[0]=(...e)=>i.disconect&&i.disconect(...e)),class:"liuser"},v)):(0,a.kq)("",!0)])])])}n(7658);var w={name:"app-header",data(){return{userLoggedIn:!1}},created(){localStorage.token&&(this.userLoggedIn=!0),fetch("http://localhost:8080/ping").then((e=>{200===e.status?localStorage.server="http://localhost:8080":localStorage.server="http://faster-area-api-prod.westeurope.azurecontainer.io:8080"}))},computed(){localStorage.token&&(this.userLoggedIn=!0)},methods:{disconect(){localStorage.removeItem("token"),localStorage.removeItem("action"),localStorage.removeItem("reaction"),localStorage.removeItem("nameact"),localStorage.removeItem("namerea"),localStorage.removeItem("path"),this.userLoggedIn=!1,this.$router.push({name:"Home"})}}},y=n(3744);const k=(0,y.Z)(w,[["render",A],["__scopeId","data-v-718e2f94"]]);var _=k;const q=e=>((0,a.dD)("data-v-403ec0f1"),e=e(),(0,a.Cn)(),e),E=q((()=>(0,a._)("nav",null,[(0,a._)("ul",null,[(0,a.Uk)(" Rejoignez nos réseaux sociaux : "),(0,a._)("li",null,[(0,a._)("a",{href:"https://www.facebook.com/epitech.technology/"},"Facebook")]),(0,a._)("li",null,[(0,a._)("a",{href:"https://twitter.com/Epitech?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"},"Twitter")]),(0,a._)("li",null,[(0,a._)("a",{href:"https://www.instagram.com/epitech.national/?hl=fr"},"Instagram")])])],-1))),S=[E];function C(e,t){return(0,a.wg)(),(0,a.iD)("footer",null,S)}const I={},D=(0,y.Z)(I,[["render",C],["__scopeId","data-v-403ec0f1"]]);var O=D,L={components:{AppHeader:_,AppFooter:O}};const j=(0,y.Z)(L,[["render",r]]);var R=j,T=n(2201);const P=[{path:"/",name:"Home",component:()=>n.e(668).then(n.bind(n,1151))},{path:"/about",name:"About",component:()=>n.e(206).then(n.bind(n,2206))},{path:"/login",name:"Login",component:()=>n.e(787).then(n.bind(n,3309)),meta:{guest:!0}},{path:"/register",name:"Register",component:()=>n.e(165).then(n.bind(n,6659)),meta:{guest:!0}},{path:"/connect",name:"Connect",component:()=>n.e(41).then(n.bind(n,1041))},{path:"/dashboard",name:"Dashboard",component:()=>n.e(170).then(n.bind(n,4170)),meta:{requiresAuth:!0}},{path:"/actions",name:"Actions",component:()=>n.e(333).then(n.bind(n,3333)),meta:{requiresAuth:!0}},{path:"/actions/6341eed87b1999471f015cb7",name:"Time",component:()=>n.e(856).then(n.bind(n,4856)),meta:{requiresAuth:!0}},{path:"/actions/6360ec0fedf314cd1be57068",name:"DiscordA",component:()=>n.e(588).then(n.bind(n,6588)),meta:{requiresAuth:!0}},{path:"/actions/633856703a79d71704729438",name:"GMailA",component:()=>n.e(212).then(n.bind(n,1212)),meta:{requiresAuth:!0}},{path:"/actions/63555cb456586d005905995f",name:"WeatherA",component:()=>n.e(521).then(n.bind(n,521)),meta:{requiresAuth:!0}},{path:"/actions/63615dd6b44ce8272da128b5",name:"GithubA",component:()=>n.e(190).then(n.bind(n,9190)),meta:{requiresAuth:!0}},{path:"/actions/63680c91dbc5e2139cbfadff",name:"TwitterA",component:()=>n.e(706).then(n.bind(n,5706)),meta:{requiresAuth:!0}},{path:"/actions/6368ce6025d74ad122ffcac0",name:"RedditA",component:()=>n.e(860).then(n.bind(n,1860)),meta:{requiresAuth:!0}},{path:"/actions/63690b28b62a25d3e026316d",name:"SteamA",component:()=>n.e(965).then(n.bind(n,9965)),meta:{requiresAuth:!0}},{path:"/actions/636a181760cf1b55b0a66be3",name:"CovidA",component:()=>n.e(274).then(n.bind(n,4274)),meta:{requiresAuth:!0}},{path:"/Recap",name:"Recap",component:()=>n.e(694).then(n.bind(n,1694)),meta:{requiresAuth:!0}},{path:"/reactions",name:"Reactions",component:()=>n.e(551).then(n.bind(n,9551)),meta:{requiresAuth:!0}},{path:"/reactions/6343d4cd453ec1ce28ef2b65",name:"GmailREA",component:()=>n.e(283).then(n.bind(n,5283)),meta:{requiresAuth:!0}},{path:"/reactions/6337f6365955b62e4776c445",name:"DiscordREA",component:()=>n.e(961).then(n.bind(n,8961)),meta:{requiresAuth:!0}},{path:"/reactions/636277770bf8e24d4f8155ee",name:"GithubREA",component:()=>n.e(384).then(n.bind(n,5384)),meta:{requiresAuth:!0}},{path:"/reactions/6366dc1caf9ba318ee9d8118",name:"TwitterREA",component:()=>n.e(940).then(n.bind(n,7940)),meta:{requiresAuth:!0}},{path:"/reactions/636ba84632920bcb6e2beeb3",name:"RedditREA",component:()=>n.e(589).then(n.bind(n,7589)),meta:{requiresAuth:!0}}],W=(0,T.p7)({history:(0,T.PO)("/"),routes:P});W.beforeEach(((e,t,n)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if(localStorage.getItem("token"))return void n();n("/login")}else n()})),W.beforeEach(((e,t,n)=>{if(e.matched.some((e=>e.meta.guest))){if(localStorage.getItem("token"))return void n("/dashboard");n()}else n()}));var x=W;(0,o.ri)(R).use(x).mount("#app")},6949:function(e,t,n){e.exports=n.p+"img/logo.186e15cb.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],a=e[l][1],r=e[l][2];for(var c=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(c=!1,r<i&&(i=r));if(c){e.splice(l--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,a,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{41:"b7948fe7",165:"3e7ee43d",170:"26501d6b",190:"2c255c6e",206:"56fe9bdd",212:"2baa7b95",274:"bb9f76e3",283:"2d8ff1ad",333:"63f98fe7",384:"b7ee5b45",521:"914eca2e",551:"71005abc",588:"92db9c57",589:"a45601d2",668:"31e1ba4b",694:"c9cec9a9",706:"6601568e",787:"17da4d38",856:"90f8faca",860:"69ee1990",940:"31e39e6b",961:"17a6ac4c",965:"f47ae7af"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{165:"6ab5f7a8",170:"1802d59d",190:"fe9ebfc1",206:"3e2fc7ef",212:"c3f1825e",274:"d4ed21b0",283:"3584a689",333:"e6731e87",384:"3720aed6",521:"13ce2b05",551:"b18fe7f7",588:"bcb003a9",589:"8b78731c",668:"750f7e6e",694:"203414af",706:"875f0595",787:"edf0a1c4",856:"73d3972e",860:"8d954d1f",940:"1445c565",961:"b2ba124e",965:"dcf3b0cd"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Area:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var c,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){c=d;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+r),c.src=o),e[o]=[a];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(h);var a=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return a();e(o,c,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={165:1,170:1,190:1,206:1,212:1,274:1,283:1,333:1,384:1,521:1,551:1,588:1,589:1,668:1,694:1,706:1,787:1,856:1,860:1,940:1,961:1,965:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),c=new Error,u=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,a[1](c)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(u)var l=u(n)}for(t&&t(o);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},o=self["webpackChunkArea"]=self["webpackChunkArea"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(545)}));o=n.O(o)})();
//# sourceMappingURL=app.0c521c39.js.map