"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[588],{6588:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t=r(6252),l=r(9963);const a=e=>((0,t.dD)("data-v-846ec810"),e=e(),(0,t.Cn)(),e),o=a((()=>(0,t._)("h1",null,"Discord",-1))),c=a((()=>(0,t._)("br",null,null,-1))),s=a((()=>(0,t._)("br",null,null,-1))),d=a((()=>(0,t._)("br",null,null,-1))),i=a((()=>(0,t._)("br",null,null,-1)));function h(e,n,r,a,h,u){return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Channel:","onUpdate:modelValue":n[0]||(n[0]=e=>h.ChannelId=e),required:""},null,512),[[l.nr,h.ChannelId]]),c,s,d,i,(0,t._)("button",{onClick:n[1]||(n[1]=(...e)=>u.getDiscord&&u.getDiscord(...e))},"Confirm")],64)}r(7658);var u={name:"DiscordA",data(){return{ChannelId:null}},methods:{getDiscord(){if(this.ChannelId.length>=17&&this.ChannelId.length<=19){let r={channelId:this.ChannelId},t={content:JSON.stringify(r),id:"6360ec0fedf314cd1be57068"},l={name:"Discord",description:"Send a message on a Discord server"};localStorage.action=JSON.stringify(t),localStorage.nameact=JSON.stringify(l);var e=new Headers;e.append("token",localStorage.token);var n={method:"GET",headers:e,redirect:"follow"};fetch(localStorage.server+"/user/discord/verify",n).then((n=>{n.json().then((n=>{if("ok"==n["status"])this.$router.push({name:"Recap"});else{localStorage.path="Recap";var r={method:"GET",headers:e,redirect:"follow"};fetch(localStorage.server+"/user/discord/getLink",r).then((e=>{200===e.status&&e.text().then((e=>{window.location.href=e}))})).catch((e=>console.log("error",e)))}}))})).catch((e=>console.log("error",e)))}else alert("Discord IDs are between 17 and 19 numbers long.")}}},f=r(3744);const g=(0,f.Z)(u,[["render",h],["__scopeId","data-v-846ec810"]]);var p=g}}]);
//# sourceMappingURL=588.92db9c57.js.map