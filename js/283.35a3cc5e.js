"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[283],{3999:function(e,l){var t=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;l.validate=function(e){if(!e)return!1;if(e.length>254)return!1;var l=t.test(e);if(!l)return!1;var a=e.split("@");if(a[0].length>64)return!1;var n=a[1].split(".");return!n.some((function(e){return e.length>63}))}},5283:function(e,l,t){t.r(l),t.d(l,{default:function(){return w}});var a=t(6252),n=t(9963);const r=e=>((0,a.dD)("data-v-43636a1d"),e=e(),(0,a.Cn)(),e),o=r((()=>(0,a._)("h1",null,"Send an Email",-1))),u=r((()=>(0,a._)("br",null,null,-1))),i=r((()=>(0,a._)("br",null,null,-1))),c=r((()=>(0,a._)("br",null,null,-1))),s=r((()=>(0,a._)("br",null,null,-1))),d=r((()=>(0,a._)("br",null,null,-1))),h=r((()=>(0,a._)("br",null,null,-1))),p=r((()=>(0,a._)("br",null,null,-1))),m=r((()=>(0,a._)("br",null,null,-1))),f=r((()=>(0,a._)("br",null,null,-1))),g=r((()=>(0,a._)("br",null,null,-1)));function b(e,l,t,r,b,_){return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a.wy)((0,a._)("input",{type:"email",placeholder:"To:","onUpdate:modelValue":l[0]||(l[0]=e=>b.email=e)},null,512),[[n.nr,b.email]]),u,i,c,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Subject:","onUpdate:modelValue":l[1]||(l[1]=e=>b.subject=e)},null,512),[[n.nr,b.subject]]),s,d,h,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Body:","onUpdate:modelValue":l[2]||(l[2]=e=>b.body=e)},null,512),[[n.nr,b.body]]),p,m,f,g,(0,a._)("button",{onClick:l[3]||(l[3]=e=>_.getMail())},"Confirm")],64)}t(7658);var _=t(3999),v={name:"MailREA",data(){return{email:null,subject:null,body:null}},methods:{getMail(){if(null!=this.email)if(_.validate(this.email)){let t=[],a=[],n={to:this.email,subject:this.subject,text:this.body},r={content:JSON.stringify(n),id:"6343d4cd453ec1ce28ef2b65"},o={name:"Gmail",description:"Send an email"};localStorage.reaction&&(t=JSON.parse(localStorage.reaction)),localStorage.namerea&&(a=JSON.parse(localStorage.namerea)),t.push(r),a.push(o),localStorage.reaction=JSON.stringify(t),localStorage.namerea=JSON.stringify(a);var e=new Headers;e.append("token",localStorage.token);var l={method:"GET",headers:e,redirect:"follow"};fetch(localStorage.server+"/user/gmail/verify",l).then((l=>{l.json().then((l=>{if("ok"==l["status"])this.$router.push({name:"Recap"});else{localStorage.path="Recap";var t={method:"GET",headers:e,redirect:"follow"};fetch(localStorage.server+"/user/gmail/getLink/?scope=https://www.googleapis.com/auth/gmail.send",t).then((e=>{200===e.status&&e.text().then((e=>{window.location.href=e}))})).catch((e=>console.log("error",e)))}}))})).catch((e=>console.log("error",e)))}else alert("Email is not valid");else alert("Email required")}}},S=t(3744);const y=(0,S.Z)(v,[["render",b],["__scopeId","data-v-43636a1d"]]);var w=y}}]);
//# sourceMappingURL=283.35a3cc5e.js.map