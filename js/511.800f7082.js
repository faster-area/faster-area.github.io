"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[511],{3999:function(e,l){var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;l.validate=function(e){if(!e)return!1;if(e.length>254)return!1;var l=n.test(e);if(!l)return!1;var t=e.split("@");if(t[0].length>64)return!1;var a=t[1].split(".");return!a.some((function(e){return e.length>63}))}},511:function(e,l,n){n.r(l),n.d(l,{default:function(){return v}});var t=n(6252),a=n(9963);const r=e=>((0,t.dD)("data-v-488f53ca"),e=e(),(0,t.Cn)(),e),i=r((()=>(0,t._)("h1",null,"Get an Email",-1))),u=r((()=>(0,t._)("br",null,null,-1))),o=r((()=>(0,t._)("br",null,null,-1))),c=r((()=>(0,t._)("br",null,null,-1))),s=r((()=>(0,t._)("br",null,null,-1)));function f(e,l,n,r,f,d){return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t.wy)((0,t._)("input",{type:"email",placeholder:"From:","onUpdate:modelValue":l[0]||(l[0]=e=>f.email=e),required:""},null,512),[[a.nr,f.email]]),u,o,c,s,(0,t._)("button",{onClick:l[1]||(l[1]=(...e)=>d.getMail&&d.getMail(...e))},"Confirm")],64)}n(7658);var d=n(3999),m={name:"MailA",data(){return{email:null}},methods:{getMail(){if(d.validate(this.email)){let e={object:this.email},l={content:JSON.stringify(e),id:"633856703a79d71704729438"};localStorage.action=JSON.stringify(l),this.$router.push({name:"Recap"})}else alert("Email is not valid")}}},h=n(3744);const p=(0,h.Z)(m,[["render",f],["__scopeId","data-v-488f53ca"]]);var v=p}}]);
//# sourceMappingURL=511.800f7082.js.map