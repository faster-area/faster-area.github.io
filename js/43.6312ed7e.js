"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[43],{43:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(6252),l=n(9963);const a=e=>((0,r.dD)("data-v-442f5a92"),e=e(),(0,r.Cn)(),e),i=a((()=>(0,r._)("h1",null,"Twitter",-1))),s=a((()=>(0,r._)("br",null,null,-1))),u=a((()=>(0,r._)("br",null,null,-1))),o=a((()=>(0,r._)("br",null,null,-1))),c=a((()=>(0,r._)("br",null,null,-1)));function d(e,t,n,a,d,p){return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r.wy)((0,r._)("input",{type:"text",placeholder:"Message:","onUpdate:modelValue":t[0]||(t[0]=e=>d.mes=e),required:""},null,512),[[l.nr,d.mes]]),s,u,o,c,(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>p.getTwitter&&p.getTwitter(...e))},"Confirm")],64)}n(7658);var p={name:"TwitterREA",data(){return{mes:null,tmpREA:[]}},methods:{getTwitter(){if(null!=this.mes){let e={message:this.mes},t={content:JSON.stringify(e),id:"6366dc1caf9ba318ee9d8118",name:"Twitter",description:"Send a tweet"};localStorage.reaction&&(this.tmpREA=JSON.parse(localStorage.reaction)),this.tmpREA.push(t),localStorage.reaction=JSON.stringify(this.tmpREA),this.$router.push({name:"Recap"})}else alert("Message required")}}},m=n(3744);const h=(0,m.Z)(p,[["render",d],["__scopeId","data-v-442f5a92"]]);var f=h}}]);
//# sourceMappingURL=43.6312ed7e.js.map