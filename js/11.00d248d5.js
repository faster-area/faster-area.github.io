"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[11],{4011:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var l=n(6252),a=n(3577);const r=e=>((0,l.dD)("data-v-6968071b"),e=e(),(0,l.Cn)(),e),s=r((()=>(0,l._)("h1",null,"Reactions",-1))),o={class:"page"},c={class:"table-hover"},i=["href"],d={class:"data"},u=["src"],h=r((()=>(0,l._)("br",null,null,-1)));function p(e,t,n,r,p,_){return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,(0,l._)("div",o,[(0,l._)("table",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(p.list,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("td",null,[(0,l._)("a",{href:"/reactions/"+e.id},[(0,l._)("div",d,[(0,l._)("img",{src:e.URL,alt:"image"},null,8,u),h,(0,l._)("p",null,"Nom : "+(0,a.zw)(e.name),1),(0,l._)("p",null,"Description : "+(0,a.zw)(e.description),1)])],8,i)])])))),128))])])],64)}var _={name:"listingActions",components:{},created(){var e=new Headers;e.append("token",localStorage.token);var t={method:"GET",headers:e,redirect:"follow"};fetch("http://localhost:8080/area/listAR/reaction",t).then((e=>{e.json().then((e=>{console.log(),this.list=e["list"]}))})).catch((e=>console.log("error",e)))},data(){return{list:[]}}},f=n(3744);const g=(0,f.Z)(_,[["render",p],["__scopeId","data-v-6968071b"]]);var v=g}}]);
//# sourceMappingURL=11.00d248d5.js.map