"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[706],{5706:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var l=r(6252),n=r(9963);const a=e=>((0,l.dD)("data-v-2fb7609d"),e=e(),(0,l.Cn)(),e),o=a((()=>(0,l._)("h1",null,"Twitter",-1))),i=a((()=>(0,l._)("br",null,null,-1))),c=a((()=>(0,l._)("br",null,null,-1))),u=a((()=>(0,l._)("br",null,null,-1))),s=a((()=>(0,l._)("br",null,null,-1)));function d(e,t,r,a,d,f){return(0,l.wg)(),(0,l.iD)(l.HY,null,[o,(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Profile Name:","onUpdate:modelValue":t[0]||(t[0]=e=>d.PN=e),required:""},null,512),[[n.nr,d.PN]]),i,c,u,s,(0,l._)("button",{onClick:t[1]||(t[1]=(...e)=>f.getTwitter&&f.getTwitter(...e))},"Confirm")],64)}r(7658);var f={name:"TwitterREA",data(){return{PN:null}},methods:{getTwitter(){let e={profilName:this.PN},t={content:JSON.stringify(e),id:"63680c91dbc5e2139cbfadff"},r={name:"Twitter",description:"Get the last tweet of a profile"};localStorage.action=JSON.stringify(t),localStorage.nameact=JSON.stringify(r);var l=new Headers;l.append("token",localStorage.token);var n={method:"GET",headers:l,redirect:"follow"};fetch(localStorage.server+"/user/twitter/verify",n).then((e=>{e.json().then((e=>{if("ok"==e["status"])this.$router.push({name:"Recap"});else{localStorage.path="Recap";var t={method:"GET",headers:l,redirect:"follow"};fetch(localStorage.server+"/user/twitter/getLink",t).then((e=>{200===e.status&&e.text().then((e=>{window.location.href=e}))})).catch((e=>console.log("error",e)))}}))})).catch((e=>console.log("error",e)))}}},h=r(3744);const w=(0,h.Z)(f,[["render",d],["__scopeId","data-v-2fb7609d"]]);var p=w}}]);
//# sourceMappingURL=706.eb5bbb35.js.map