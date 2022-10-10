(function(){"use strict";var e={2742:function(e,t,n){var o=n(9963),a=n(6252);function r(e,t,n,o,r,i){const u=(0,a.up)("app-header"),l=(0,a.up)("router-view"),s=(0,a.up)("app-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a.Wm)(l),(0,a.Wm)(s)],64)}var i=n(3577),u=n.p+"img/logo.186e15cb.png";const l=e=>((0,a.dD)("data-v-b634455e"),e=e(),(0,a.Cn)(),e),s=l((()=>(0,a._)("img",{alt:"Vue logo",src:u,height:"120"},null,-1))),c={class:"buttons"},d={class:"ulbuttons"},b={key:0,class:"libuttons"},p=l((()=>(0,a._)("button",{class:"button-log",role:"button"},"Dashboard",-1))),v={key:1,class:"libuttons"},f=l((()=>(0,a._)("button",{class:"button-log",role:"button"},"Login",-1))),h={key:2,class:"libuttons"},g=l((()=>(0,a._)("button",{class:"button-log",role:"button"},"Register",-1)));function m(e,t,n,o,r,u){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",null,[s,(0,a._)("nav",null,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(l,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About us")])),_:1})])])]),(0,a._)("nav",c,[(0,a._)("ul",d,[r.userLoggedIn?((0,a.wg)(),(0,a.iD)("li",b,[(0,a.Wm)(l,{to:"/dashboard"},{default:(0,a.w5)((()=>[p])),_:1})])):(0,a.kq)("",!0),r.userLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",v,[(0,a.Wm)(l,{to:"/login"},{default:(0,a.w5)((()=>[f])),_:1})])),r.userLoggedIn?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("li",h,[(0,a.Wm)(l,{to:"/register"},{default:(0,a.w5)((()=>[g])),_:1})])),r.userLoggedIn?((0,a.wg)(),(0,a.iD)("li",{key:3,onClick:t[0]||(t[0]=(...e)=>u.disconect&&u.disconect(...e)),class:"liuser"},[(0,a._)("button",null,(0,i.zw)(r.username),1)])):(0,a.kq)("",!0)])])])}n(7658);var k={data(){return{userLoggedIn:localStorage.token,username:localStorage.username}},methods:{disconect(){localStorage.removeItem("token"),this.userLoggedIn=!1,this.$router.push("/")}}},_=n(3744);const w=(0,_.Z)(k,[["render",m],["__scopeId","data-v-b634455e"]]);var y=w,j={components:{AppHeader:y}};const A=(0,_.Z)(j,[["render",r]]);var C=A,O=n(2201);const D={class:"home"},L=(0,a._)("img",{alt:"Vue logo",src:u},null,-1);function E(e,t,n,o,r,i){const u=(0,a.up)("HelloWorld");return(0,a.wg)(),(0,a.iD)("div",D,[L,(0,a.Wm)(u,{msg:"Welcome to Your Vue.js App"})])}const S={class:"hello"},T=(0,a.uE)('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function W(e,t,n,o,r,u){return(0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("h1",null,(0,i.zw)(n.msg),1),T])}var I={name:"HelloWorld",props:{msg:String}};const H=(0,_.Z)(I,[["render",W],["__scopeId","data-v-b9167eee"]]);var P=H;console.log(localStorage.token);var N={name:"HomeView",components:{HelloWorld:P}};const x=(0,_.Z)(N,[["render",E]]);var q=x;const F=[{path:"/",name:"Home",component:q,meta:{title:"Area - Home Page",metaTags:[{name:"description",content:"The home page of Area."},{property:"og:description",content:"The home page of Area."}]}},{path:"/about",name:"About",component:()=>n.e(723).then(n.bind(n,7723))},{path:"/login",name:"Login",component:()=>n.e(480).then(n.bind(n,4801))},{path:"/register",name:"Register",component:()=>n.e(43).then(n.bind(n,8306))},{path:"/dashboard",name:"Dashboard",component:()=>n.e(268).then(n.bind(n,2252))},{path:"/actions/time",name:"Time",component:()=>n.e(160).then(n.bind(n,5160))},{path:"/discord",name:"Discord",component:()=>n.e(300).then(n.bind(n,6300))},{path:"/reaction",name:"Reaction",component:()=>n.e(424).then(n.bind(n,6887))},{path:"/actions/gmail",name:"Gmail",component:()=>n.e(218).then(n.bind(n,6218))}],V=(0,O.p7)({history:(0,O.PO)("/"),routes:F});var Z=V;(0,o.ri)(C).use(Z).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var u=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(u=!1,r<i&&(i=r));if(u){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{43:"d062487b",160:"bf0abd81",218:"df21072a",268:"47d63b93",300:"c4dda24e",424:"3a1ba05e",480:"01fc613d",723:"ab206c8c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{43:"60a33414",160:"42bf12ff",218:"38b30cdb",268:"5a956958",424:"278d9dd1",480:"a22e19dd",723:"037ea431"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Area:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var u,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=o),e[o]=[a];var b=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(b.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=b.bind(null,u.onerror),u.onload=b.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,a.parentNode.removeChild(a),o(l)}};return a.onerror=a.onload=r,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return a();e(o,u,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={43:1,160:1,218:1,268:1,424:1,480:1,723:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),u=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],u=o[1],l=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var c=l(n)}for(t&&t(o);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkArea"]=self["webpackChunkArea"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2742)}));o=n.O(o)})();
//# sourceMappingURL=app.f24394fd.js.map