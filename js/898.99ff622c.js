"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[898],{1898:function(n,e,l){l.r(e),l.d(e,{default:function(){return y}});var r=l(6252),t=l(9963);const u=n=>((0,r.dD)("data-v-fea9fa12"),n=n(),(0,r.Cn)(),n),a=u((()=>(0,r._)("h1",null,"Weather",-1))),o=u((()=>(0,r._)("br",null,null,-1))),c=u((()=>(0,r._)("br",null,null,-1))),i=u((()=>(0,r._)("br",null,null,-1))),d=u((()=>(0,r._)("br",null,null,-1))),f=u((()=>(0,r._)("br",null,null,-1))),s=u((()=>(0,r._)("br",null,null,-1))),h=u((()=>(0,r._)("br",null,null,-1)));function b(n,e,l,u,b,p){return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r.wy)((0,r._)("input",{type:"number",placeholder:"Confirmed Case:","onUpdate:modelValue":e[0]||(e[0]=n=>b.confirmed=n),required:""},null,512),[[t.nr,b.confirmed]]),o,c,i,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Country:","onUpdate:modelValue":e[1]||(e[1]=n=>b.country=n),required:""},null,512),[[t.nr,b.country]]),d,f,s,h,(0,r._)("button",{onClick:e[2]||(e[2]=(...n)=>p.getWeather&&p.getWeather(...n))},"Confirm")],64)}l(7658);var p={name:"CovidA",data(){return{country:null,confirmed:null}},methods:{getWeather(){let n={country:this.country,case:this.confirmed},e={content:JSON.stringify(n),id:"636a181760cf1b55b0a66be3"};localStorage.action=JSON.stringify(e),this.$router.push({name:"Reactions"})}}},_=l(3744);const m=(0,_.Z)(p,[["render",b],["__scopeId","data-v-fea9fa12"]]);var y=m}}]);
//# sourceMappingURL=898.99ff622c.js.map