"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[551],{9551:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(6252),l=n(3577);const r=e=>((0,a.dD)("data-v-c4b7b1b0"),e=e(),(0,a.Cn)(),e),s=r((()=>(0,a._)("h1",null,"Reactions",-1))),o={class:"page"},c={class:"table-hover"},i=["href"],d={class:"data"},u=["src"],h=r((()=>(0,a._)("br",null,null,-1)));function p(e,t,n,r,p,_){return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("div",o,[(0,a._)("table",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.list,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("td",null,[(0,a._)("a",{href:"/reactions/"+e.id},[(0,a._)("div",d,[(0,a._)("img",{src:e.URL,alt:"image"},null,8,u),h,(0,a._)("p",null,"Nom : "+(0,l.zw)(e.name),1),(0,a._)("p",null,"Description : "+(0,l.zw)(e.description),1)])],8,i)])])))),128))])])],64)}var _={name:"listingActions",components:{},created(){var e=new Headers;e.append("token",localStorage.token);var t={method:"GET",headers:e,redirect:"follow"};fetch(localStorage.server+"/area/listAR/reaction",t).then((e=>{e.json().then((e=>{console.log(),this.list=e["list"]}))})).catch((e=>console.log("error",e)))},data(){return{list:[]}}},b=n(3744);const g=(0,b.Z)(_,[["render",p],["__scopeId","data-v-c4b7b1b0"]]);var v=g}}]);
//# sourceMappingURL=551.734cefa9.js.map