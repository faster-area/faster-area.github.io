"use strict";(self["webpackChunkArea"]=self["webpackChunkArea"]||[]).push([[170],{4170:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var l=t(6252),o=t(3577);const n=e=>((0,l.dD)("data-v-456e1de4"),e=e(),(0,l.Cn)(),e),r=n((()=>(0,l._)("h1",null,"Dashboard",-1))),s=n((()=>(0,l._)("p",null,"click on one action to remove it",-1))),c={class:"page"},i={class:"table-hover"},d=["onClick"],h={class:"data"},u=n((()=>(0,l._)("h3",null,"ID",-1))),_=n((()=>(0,l._)("h3",null,"Action type",-1))),v=n((()=>(0,l._)("h3",null,"Reactions",-1))),p=n((()=>(0,l._)("tr",null,[(0,l._)("td",null,[(0,l._)("a",{href:"/actions"},[(0,l._)("div",{class:"data"},[(0,l._)("p",{style:{"font-size":"x-large"}},"+")])])])],-1)));function g(e,a,t,n,g,w){return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,s,(0,l._)("div",c,[(0,l._)("table",i,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.list,((e,a)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("td",null,[(0,l._)("a",{onClick:a=>w.remove(e.metadata.idChaine)},[(0,l._)("div",h,[u,(0,l._)("p",null,(0,o.zw)(a),1),_,(0,l._)("p",null,(0,o.zw)(e.action.name),1),v,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.reaction,(e=>((0,l.wg)(),(0,l.iD)("p",{class:"react",key:e.id},(0,o.zw)(e.name),1)))),128))])],8,d)])])))),128)),p])])],64)}var w={name:"DashboardActions",components:{},created(){var e=new Headers;e.append("token",localStorage.token);var a={method:"GET",headers:e,redirect:"follow"};fetch(localStorage.server+"/ar-user/listMyAR/",a).then((e=>{e.json().then((e=>{this.list=e["myars"],console.log(this.list)}))})).catch((e=>console.log("error",e)))},methods:{remove(e){var a=new Headers;a.append("token",localStorage.token);var t={method:"DELETE",headers:a,redirect:"follow"};fetch(localStorage.server+"/ar-user/chain/"+e,t).then((e=>{e.text(),location.reload()})).then((e=>console.log(e))).catch((e=>console.log("error",e)))}},data(){return{list:[]}}},k=t(3744);const f=(0,k.Z)(w,[["render",g],["__scopeId","data-v-456e1de4"]]);var m=f}}]);
//# sourceMappingURL=170.8ff517a8.js.map