"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[856],{5856:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var n=l(6252),r=l(9963);const u=e=>((0,n.dD)("data-v-540d3770"),e=e(),(0,n.Cn)(),e),a=u((()=>(0,n._)("h1",null,"Weather",-1))),i=u((()=>(0,n._)("br",null,null,-1))),c=u((()=>(0,n._)("br",null,null,-1))),d=u((()=>(0,n._)("br",null,null,-1))),o=u((()=>(0,n._)("br",null,null,-1))),p=u((()=>(0,n._)("br",null,null,-1))),h=u((()=>(0,n._)("br",null,null,-1))),s=u((()=>(0,n._)("br",null,null,-1)));function m(e,t,l,u,m,_){return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,(0,n.wy)((0,n._)("input",{type:"number",placeholder:"Temperature:","onUpdate:modelValue":t[0]||(t[0]=e=>m.temp=e),required:""},null,512),[[r.nr,m.temp]]),i,c,d,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"City:","onUpdate:modelValue":t[1]||(t[1]=e=>m.city=e),required:""},null,512),[[r.nr,m.city]]),o,p,h,s,(0,n._)("button",{onClick:t[2]||(t[2]=(...e)=>_.getWeather&&_.getWeather(...e))},"Confirm")],64)}l(7658);var _={name:"WeatherA",data(){return{temp:null,city:null}},methods:{getWeather(){let e={temperature:this.temp,city:this.city},t={content:JSON.stringify(e),id:"63555cb456586d005905995f"};localStorage.action=JSON.stringify(t),this.$router.push({name:"Recap"})}}},b=l(3744);const y=(0,b.Z)(_,[["render",m],["__scopeId","data-v-540d3770"]]);var f=y}}]);
//# sourceMappingURL=856.c02f8c30.js.map