import{c as w,y as E,R as N,z as P,S as W,m as a,t as c,U as z,o as D,F,B as r,C as u,V as y,W as s,D as f,J as g,X as V,N as q,O as L,r as I,I as R,Y as T,M}from"./index.79326c29.js";const Q={xs:2,sm:4,md:6,lg:10,xl:14};function B(e,t,o){return{transform:t===!0?`translateX(${o.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const S=w({name:"QLinearProgress",props:{...E,...N,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:t}){const{proxy:o}=D(),d=P(e,o.$q),l=W(e,Q),n=a(()=>e.indeterminate===!0||e.query===!0),m=a(()=>e.reverse!==e.query),k=a(()=>({...l.value!==null?l.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=a(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),i=a(()=>B(e.buffer!==void 0?e.buffer:1,m.value,o.$q)),_=a(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),h=a(()=>B(n.value===!0?1:e.value,m.value,o.$q)),x=a(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${n.value===!0?"in":""}determinate`),p=a(()=>({width:`${e.value*100}%`})),C=a(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const b=[c("div",{class:_.value,style:i.value}),c("div",{class:x.value,style:h.value})];return e.stripe===!0&&n.value===!1&&b.push(c("div",{class:C.value,style:p.value})),c("div",{class:v.value,style:k.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},z(t.default,b))}}}),X={class:"container text-center"},j={key:0,class:"text-h3 text-bold"},H={class:"text-h2 text-bold"},J=F({__name:"WorkinProgress",props:{title:null,description:{default:"Work in progress"},load:{type:Boolean,default:!1},loadBottom:{type:Boolean,default:!1},color:{default:"secondary"},colorBottom:{default:"secondary"}},setup(e){const t=e;return(o,d)=>(r(),u("div",null,[t.load?(r(),y(S,{key:0,dark:"",rounded:"",indeterminate:"",color:e.color,"track-color":e.color,class:"q-mb-sm"},null,8,["color","track-color"])):s("",!0),f("div",X,[t.title?(r(),u("p",j,g(t.title),1)):s("",!0),f("h1",H,g(t.description),1)]),t.loadBottom?(r(),y(S,{key:1,dark:"",rounded:"",query:"",indeterminate:"",color:e.colorBottom,"track-color":e.colorBottom,class:"q-mt-xl"},null,8,["color","track-color"])):s("",!0)]))}}),$=V({id:"Employee",state:()=>({employees:[],employee:null,loading:!1,error:null}),getters:{},actions:{async fetchEmployees(){this.employees=await fetch("https://dummy.restapiexample.com/api/v1/employees").then(e=>e.json())}}}),O={key:1,class:"container"},U=f("h1",{class:"text-h2"},"List",-1),A={__name:"HomeView",setup(e){const{webTitle:t,settingsWebsite:o,webLoading:d}=q(L()),{employees:l,employee:n,loading:m,error:k}=q($()),{fetchEmployees:v}=$(),i=I(!1);return t.value="Employee",v(),(_,h)=>(r(),u(M,null,[i.value?(r(),y(J,{key:0,title:"Employee Site",load:"",loadBottom:""})):s("",!0),i.value?s("",!0):(r(),u("div",O,[U,R(" "+g(T(l)),1)]))],64))}};export{A as default};
