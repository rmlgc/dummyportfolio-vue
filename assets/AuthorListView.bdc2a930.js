import{W as f,a2 as n,a3 as k,ay as u,r as y,P as e,S as t,ao as B,ap as o,Z as c,$ as i,au as a,a1 as l,av as g,X as v,Y as w,az as x,U as L,aw as S}from"./index.10afdc98.js";const V={key:1,class:"container q-px-sm ."},b=L("h1",null,"Author List",-1),E=f({__name:"AuthorListView",setup(A){const{webTitle:_,settingsWebsite:N,webLoading:W}=n(k()),{authors:s}=n(u()),{fetchAuthors:d}=u(),r=y(!1);return _.value="Blog",d(),(C,T)=>(e(),t(l,null,[r.value?(e(),B(S,{key:0,title:"Employee Site",load:"",loadBottom:""})):o("",!0),c(" "+i(a(s)[0])+" ",1),r.value?o("",!0):(e(),t("div",V,[b,a(s)?(e(!0),t(l,{key:0},g(a(s),(m,h,p)=>(e(),t("p",{key:p},[v(a(x),{to:`/author/${m}`},{default:w(()=>[c(i(h),1)]),_:2},1032,["to"])]))),128)):o("",!0)]))],64))}});export{E as default};
