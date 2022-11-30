import{c as j,u as ue,a as ce,b as de,d as he,e as P,g as O,n as me,s as X,l as pe,f as S,p as E,h as J,i as I,j as ve,k as B,r as Q,m as z,w as _e,o as W,q as y,T as fe,t as ge,v as D,x as ze,K as be,y as ne,z as oe,A as we,_ as x,B as _,C as f,D as o,E as N,F as R,G as c,H as h,I as r,J as ye,L as xe,M as se,Q as Ce,N as $e}from"./index.2aa69437.js";const Z=j({name:"QTab",props:ue,emits:ce,setup(e,{slots:n,emit:l}){const{renderTab:u}=de(e,n,l);return()=>u("div")}});function Ve(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,u)=>{const i=parseFloat(l);i&&(n[u]=i)}),n}const ke=he({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:u}){if(u.mouse!==!0&&P.has.touch!==!0)return;const i=u.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Ve(l),direction:O(u),noop:me,mouseStart(a){X(a,t)&&pe(a)&&(S(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(X(a,t)){const m=a.target;S(t,"temp",[[m,"touchmove","move","notPassiveCapture"],[m,"touchcancel","end","notPassiveCapture"],[m,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,m){P.is.firefox===!0&&E(e,!0);const w=J(a);t.event={x:w.left,y:w.top,time:Date.now(),mouse:m===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){I(a);return}const m=Date.now()-t.event.time;if(m===0)return;const w=J(a),C=w.left-t.event.x,v=Math.abs(C),$=w.top-t.event.y,p=Math.abs($);if(t.event.mouse!==!0){if(v<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(a);return}}else if(v<t.sensitivity[2]&&p<t.sensitivity[2])return;const b=v/m,V=p/m;t.direction.vertical===!0&&v<p&&v<100&&V>t.sensitivity[0]&&(t.event.dir=$<0?"up":"down"),t.direction.horizontal===!0&&v>p&&p<100&&b>t.sensitivity[0]&&(t.event.dir=C<0?"left":"right"),t.direction.up===!0&&v<p&&$<0&&v<100&&V>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&v<p&&$>0&&v<100&&V>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&v>p&&C<0&&p<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&v>p&&C>0&&p<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(I(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ve(),t.styleCleanup=q=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const k=()=>{document.body.classList.remove("no-pointer-events--children")};q===!0?setTimeout(k,50):k()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:m,distance:{x:v,y:p}})):t.end(a)},end(a){t.event!==void 0&&(B(t,"temp"),P.is.firefox===!0&&E(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&I(a),t.event=void 0)}};if(e.__qtouchswipe=t,u.mouse===!0){const a=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";S(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}P.has.touch===!0&&S(t,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=O(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(B(n,"main"),B(n,"temp"),P.is.firefox===!0&&E(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Me(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const Pe={name:{required:!0},disable:Boolean},ee={setup(e,{slots:n}){return()=>y("div",{class:"q-panel scroll",role:"tabpanel"},D(n.default))}},Te={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},qe=["update:modelValue","beforeTransition","transition"];function Ae(){const{props:e,emit:n,proxy:l}=W(),{getCacheWithFn:u}=Me();let i,t;const a=Q(null),m=Q(null);function w(s){const d=e.vertical===!0?"up":"left";M((l.$q.lang.rtl===!0?-1:1)*(s.direction===d?1:-1))}const C=z(()=>[[ke,w,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=z(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),$=z(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=z(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=z(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),V=z(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),q=z(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);_e(()=>e.modelValue,(s,d)=>{const g=A(s)===!0?L(s):-1;t!==!0&&U(g===-1?0:g<L(d)?-1:1),a.value!==g&&(a.value=g,n("beforeTransition",s,d),ze(()=>{n("transition",s,d)}))});function k(){M(1)}function Y(){M(-1)}function F(s){n("update:modelValue",s)}function A(s){return s!=null&&s!==""}function L(s){return i.findIndex(d=>d.props.name===s&&d.props.disable!==""&&d.props.disable!==!0)}function ae(){return i.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function U(s){const d=s!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(s===-1?v.value:$.value):null;m.value!==d&&(m.value=d)}function M(s,d=a.value){let g=d+s;for(;g>-1&&g<i.length;){const H=i[g];if(H!==void 0&&H.props.disable!==""&&H.props.disable!==!0){U(s),t=!0,n("update:modelValue",H.props.name),setTimeout(()=>{t=!1});return}g+=s}e.infinite===!0&&i.length>0&&d!==-1&&d!==i.length&&M(s,s===-1?i.length:-1)}function G(){const s=L(e.modelValue);return a.value!==s&&(a.value=s),!0}function K(){const s=A(e.modelValue)===!0&&G()&&i[a.value];return e.keepAlive===!0?[y(be,V.value,[y(q.value===!0?u(b.value,()=>({...ee,name:b.value})):ee,{key:b.value,style:p.value},()=>s)])]:[y("div",{class:"q-panel scroll",style:p.value,key:b.value,role:"tabpanel"},[s])]}function re(){if(i.length!==0)return e.animated===!0?[y(fe,{name:m.value},K)]:K()}function le(s){return i=ge(D(s.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&A(d.props.name)===!0),i.length}function ie(){return i}return Object.assign(l,{next:k,previous:Y,goTo:F}),{panelIndex:a,panelDirectives:C,updatePanelsList:le,updatePanelIndex:G,getPanelContent:re,getEnabledPanels:ae,getPanels:ie,isValidPanelName:A,keepAliveProps:V,needsUniqueKeepAliveWrapper:q,goToPanelByOffset:M,goToPanel:F,nextPanel:k,previousPanel:Y}}const te=j({name:"QTabPanel",props:Pe,setup(e,{slots:n}){return()=>y("div",{class:"q-tab-panel",role:"tabpanel"},D(n.default))}}),He=j({name:"QTabPanels",props:{...Te,...ne},emits:qe,setup(e,{slots:n}){const l=W(),u=oe(e,l.proxy.$q),{updatePanelsList:i,getPanelContent:t,panelDirectives:a}=Ae(),m=z(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(i(n),we("div",{class:m.value},t(),"pan",e.swipeable,()=>a.value))}}),Se=j({name:"QCard",props:{...ne,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:n}){const{proxy:{$q:l}}=W(),u=oe(e,l),i=z(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>y(e.tag,{class:i.value},D(n.default))}});const je={},De={class:"item"},Le={class:"details"};function Ee(e,n){return _(),f("div",De,[o("i",null,[N(e.$slots,"icon",{},void 0,!0)]),o("div",Le,[o("h3",null,[N(e.$slots,"heading",{},void 0,!0)]),N(e.$slots,"default",{},void 0,!0)])])}const T=x(je,[["render",Ee],["__scopeId","data-v-fd0742eb"]]),Ie={},Be={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Ne=o("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Qe=[Ne];function We(e,n){return _(),f("svg",Be,Qe)}const Re=x(Ie,[["render",We]]),Ye={},Fe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ue=o("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Ge=[Ue];function Ke(e,n){return _(),f("svg",Fe,Ge)}const Oe=x(Ye,[["render",Ke]]),Xe={},Je={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},Ze=o("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),et=[Ze];function tt(e,n){return _(),f("svg",Je,et)}const nt=x(Xe,[["render",tt]]),ot={},st={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},at=o("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),rt=[at];function lt(e,n){return _(),f("svg",st,rt)}const it=x(ot,[["render",lt]]),ut={},ct={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},dt=o("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),ht=[dt];function mt(e,n){return _(),f("svg",ct,ht)}const pt=x(ut,[["render",mt]]),vt={class:"container q-px-xl"},_t=o("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),ft=o("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),gt=o("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),zt=o("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),bt=o("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),wt=o("a",{href:"https://on.cypress.io/component",target:"_blank"},"Cypress Component Testing",-1),yt=o("br",null,null,-1),xt=o("code",null,"README.md",-1),Ct=o("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),$t=o("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Vt=o("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),kt=o("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),Mt=o("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),Pt=o("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),Tt=o("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),qt=o("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),At=o("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),Ht=o("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),St=R({__name:"TheWelcome",setup(e){return(n,l)=>(_(),f("section",vt,[c(T,null,{icon:h(()=>[c(Re)]),heading:h(()=>[r("Documentation")]),default:h(()=>[r(" Vue\u2019s "),_t,r(" provides you with all information you need to get started. ")]),_:1}),c(T,null,{icon:h(()=>[c(Oe)]),heading:h(()=>[r("Tooling")]),default:h(()=>[r(" This project is served and bundled with "),ft,r(". The recommended IDE setup is "),gt,r(" + "),zt,r(". If you need to test your components and web pages, check out "),bt,r(" and "),wt,r(". "),yt,r(" More instructions are available in "),xt,r(". ")]),_:1}),c(T,null,{icon:h(()=>[c(nt)]),heading:h(()=>[r("Ecosystem")]),default:h(()=>[r(" Get official tools and libraries for your project: "),Ct,r(", "),$t,r(", "),Vt,r(", and "),kt,r(". If you need more resources, we suggest paying "),Mt,r(" a visit. ")]),_:1}),c(T,null,{icon:h(()=>[c(it)]),heading:h(()=>[r("Community")]),default:h(()=>[r(" Got stuck? Ask your question on "),Pt,r(", our official Discord server, or "),Tt,r(". You should also subscribe to "),qt,r(" and follow the official "),At,r(" twitter account for latest news in the Vue world. ")]),_:1}),c(T,null,{icon:h(()=>[c(pt)]),heading:h(()=>[r("Support Vue")]),default:h(()=>[r(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Ht,r(". ")]),_:1})]))}}),jt="/dummyportfolio-vue/assets/logo.da9b9095.svg",Dt={class:"greetings flex justify-evenly container"},Lt=o("div",{class:"wrapper"},[o("img",{alt:"Vue logo",class:"logo",src:jt,width:"125",height:"125"}),o("br")],-1),Et={class:"wrapper"},It={class:"green text-h2"},Bt=xe('<h2 class="text-body1"> I\u2019ve successfully created a project with <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. + <a href="https://quasar.dev/" target="_blank" rel="noopener"> Quasar</a>. </h2><h3 class="text-h6"> stay tune to my <a href="https://github.com/rmlgc" target="_blank" rel="noopener">GitHub</a> for see what&#39;s next? </h3>',2),Nt=o("img",{alt:"Quasar logo",class:"logo",src:"https://cdn.quasar.dev/logo-v2/svg/logo.svg",width:"125",height:"125"},null,-1),Qt=R({__name:"HelloWorld",props:{msg:null},setup(e){return(n,l)=>(_(),f("section",Dt,[Lt,o("div",Et,[o("h1",It,ye(e.msg),1),Bt]),Nt]))}}),Wt=o("h2",{class:"text-h4 text-center"},"This is a default Vue about page",-1),Rt={__name:"TabVue",setup(e){return(n,l)=>(_(),f(se,null,[Wt,c(Qt,{msg:"Did it!"}),c(St)],64))}},Yt={},Ft=o("img",{alt:"Erre logo",class:"logo float-right",src:"https://avatars.githubusercontent.com/u/22599950?s=125&v=5",width:"125",height:"125"},null,-1),Ut=o("h2",{class:"text-h4"},"Hi, my name is Rommel( Erre ).",-1),Gt=o("p",null," I told my mom i am a web developer. if you are reading this... Thank you for check my commits",-1),Kt=o("p",null,[o("a",{href:"https://linktr.ee/rommelgc",target:"_blank",rel:"noopener"},"Contact with me"),r(" and let me know you was here :) ")],-1);function Ot(e,n){return _(),f(se,null,[Ft,Ut,Gt,Kt],64)}const Xt=x(Yt,[["render",Ot]]),Jt={class:"container"},Zt={class:"q-pa-md"},tn=R({__name:"AboutView",setup(e){const n=Q("vue");return(l,u)=>(_(),f("section",Jt,[o("div",Zt,[c(Se,{class:"my-card q-mx-auto"},{default:h(()=>[c(Ce,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=i=>n.value=i),class:"text-teal"},{default:h(()=>[c(Z,{label:"About Vue",name:"vue"}),c(Z,{label:"About me",name:"me"})]),_:1},8,["modelValue"]),c($e),c(He,{modelValue:n.value,"onUpdate:modelValue":u[1]||(u[1]=i=>n.value=i),animated:""},{default:h(()=>[c(te,{name:"vue"},{default:h(()=>[c(Rt)]),_:1}),c(te,{name:"me"},{default:h(()=>[c(Xt)]),_:1})]),_:1},8,["modelValue"])]),_:1})])]))}});export{tn as default};