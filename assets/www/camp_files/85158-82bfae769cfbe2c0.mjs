(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[85158],{645430:(e,t,r)=>{r.d(t,{MZ:()=>I,Ai:()=>U,di:()=>T});var i=r(667294),n=r(40142),s=r(879711),o=r(551687),a=r(553431),l=r(530826),p=r(689859),c=r(883119),d=r(22463),u=r(24309),h=r(86037),y=r(903945),m=r(652382),g=r(181307),f=r(509044),x=r(708206),b=r(534435),_=r(855168),v=r(785893);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const j=(0,i.lazy)((()=>r.e(11542).then(r.bind(r,911542)))),A=(e,t=!1)=>{class r extends i.Component{constructor(...e){super(...e),w(this,"state",{upsellAppType:""}),w(this,"appUpsellAppType",(e=>{const{currentUser:t,country:r,external:i,isAuthenticated:n,isAppUpsellDisabled:s,refresh:o,locale:a,platform:l,userAgent:p}=this.props;return(0,f.Y5)({country:r,currentUser:t,external:!!i,isAppUpsellDisabled:!!s,isAuthenticated:n,refresh:!!o,locale:a,platform:l,userAgent:p,activateLiteAppExp:e})})),w(this,"handleOpenInApp",(e=>{(0,y.Nh)("deeplinkBehavior","branchfallback"),this.navigate(e)})),w(this,"handleTouch",((e,r)=>{const{activateTargetedLiteAppUpsell:i,onTouch:n,showAppUpsell:s,to:o,inIndiaDelayNuxGroup:a,nuxExperience:l}=this.props,p=this.appUpsellAppType(i);if(p)e.stopPropagation(),e.preventDefault(),this.setState({upsellAppType:p}),s();else if((0,d.f9)(null==l?void 0:l.experience_id)&&a)e.stopPropagation(),e.preventDefault();else{const t=(0,y.qn)("deeplinkBehavior");t&&"branchfallback"===t&&((0,m.qn)("fallbackAttempt")||(e.stopPropagation(),e.preventDefault(),(0,m.Nh)("fallbackAttempt",1),this.navigate(r,`${window.location.origin}${c=o,"string"==typeof c?c:`${c.pathname||""}${c.search?`?${c.search}`:""}`}`)))}var c;t&&p||!n||n(e)})),w(this,"handleContinue",(e=>{const{hideAppUpsell:r,onTouch:i}=this.props;t&&i&&i(e),r()})),w(this,"navigate",((e,t)=>{const{deeplinkUri:r,hideAppUpsell:i,viewType:n,viewParameter:s}=this.props,{upsellAppType:o}=this.state;e(r,t),(0,u.j)({event_type:1701,view_type:n,view_parameter:s}),o&&(this.setState({upsellAppType:""}),i())}))}render(){const{to:t,children:r,viewType:n,viewParameter:s,clientTrackingParams:a}=this.props,{upsellAppType:l}=this.state;return(0,v.jsx)(c.xu,{children:(0,v.jsx)(h.Z,{redirectToLite:l===f.DA.ANDROID_LITE_APP,children:c=>(0,v.jsxs)(i.Fragment,{children:[!!l&&(0,v.jsx)(o.Z,{name:"SafeSuspense_DeepLink_AppUpsell",children:(0,v.jsx)(p.Z,{children:(0,v.jsx)(j,{onContinue:this.handleContinue,onOpenInApp:()=>this.handleOpenInApp(c),to:t,viewType:n,viewParameter:s,clientTrackingParams:a})})}),(0,v.jsx)(e,{...this.props,onTouch:e=>this.handleTouch(e,c),children:r})]})})})}}return w(r,"defaultProps",{isAppUpsellDisabled:!1}),(0,x.compose)(_.EN,(0,n.connect)((({session:e,users:t,experiences:r},i)=>({browser:e.browser,country:e.country,currentUser:t[e.userId],isAuthenticated:e.isAuthenticated,platform:e.userAgentPlatform,isAppUpsellDisabled:!e.canUseNativeApp||"android-twa"===e.pwaType||i.isAppUpsellDisabled,unauthId:e.unauthId,userAgent:e.userAgent,locale:e.locale,nuxExperience:r&&r[40001]})),(e=>({hideAppUpsell:()=>e((0,b.uo)()),showAppUpsell:()=>e((0,b.s5)())}))))((function(e){const t=(0,g.tc)("mweb_india_delay_nux")({dangerouslySkipActivation:!0}).anyEnabled,i=(0,g.tc)("mweb_targeted_lite_app_upsell");return(0,v.jsx)(r,{...e,inIndiaDelayNuxGroup:t,activateTargetedLiteAppUpsell:i})}))},I=A(a.Z),U=A(l.Z),T=A(s.ZP,!0)},652896:(e,t,r)=>{r.d(t,{U:()=>c,Z:()=>u});var i=r(667294),n=r(151101),s=r(174523),o=r(645430),a=r(474444),l=r(883119),p=r(785893);const c={large:"large",medium:"medium",small:"small",extra_small:"extra_small",article:"article"},d={bubbleOverlay:{__style:{backgroundColor:"rgba(0, 0, 0, 0.4)"}}};function u({backgroundColor:e,bubbleId:t,bubbleUrl:r,coverImageUrl:u,curator:h,font:y,format:m,height:g,identifierIconType:f,onTap:x,referringSource:b,subtitle:_,title:v,width:w="100%"}){const j=(0,s.ZP)(),[A,I]=(0,i.useState)("string"==typeof g?void 0:g),U=e=>{if(e){const t=e.offsetWidth,r="string"==typeof g?Number.parseFloat(g):100;I(t*r/100)}};if(!A)return(0,p.jsx)(l.xu,{ref:U,dangerouslySetInlineStyle:{__style:{paddingBottom:"string"==typeof g?Number.parseFloat(g)+"%":"100%",width:w}}});const T=m===c.article,S=y||A>250&&"lg"||A>140&&m&&[c.medium,c.small,c.article].includes(m)&&"md"||A<120&&m&&m===c.small&&"xs"||"sm";return(0,p.jsx)(l.xu,{position:"relative","data-test-id":"search-suggestion","data-test-type":b,children:(0,p.jsx)(o.MZ,{to:r,isAppUpsellDisabled:!0,onTouch:()=>{x&&x(t)},rounding:4,children:(0,p.jsxs)(l.zd,{rounding:4,children:[(0,p.jsx)(l.xu,{width:w,height:A,children:u&&(0,p.jsx)(l.Ee,{alt:"",color:e,fit:"cover",naturalHeight:1,naturalWidth:1,role:"presentation",src:u})}),(0,p.jsx)(l.xu,{dangerouslySetInlineStyle:d.bubbleOverlay,height:A,width:w,position:"absolute",top:!0,left:!0}),h&&!T&&(0,p.jsx)(l.xu,{position:"absolute",top:!0,left:!0,padding:2,children:(0,p.jsx)(n.Z,{outline:!0,size:"xs",src:h.image_small_url,name:h.full_name})}),!!f&&f!==a.Js&&(0,p.jsx)(l.xu,{alignItems:"center",color:"white",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:(0,p.jsx)(l.JO,{icon:(0,a.H7)(f),accessibilityLabel:j._("Shopping icon","bubble.shoppingIcon.label","Accessibility label for bubble shopping Icon"),color:"darkGray",size:12})}),(0,p.jsx)(l.xu,{display:"flex",position:"absolute",top:!0,width:w,height:A,padding:T?6:A>100?3:1,alignItems:T?"end":"center",justifyContent:"center",children:(0,p.jsxs)(l.kC,{alignItems:"stretch",justifyContent:"start",direction:"column",children:[_&&(0,p.jsx)(l.xv,{align:"center",color:"white",size:"lg"===S?"lg":"sm",overflow:"normal",children:_}),["lg","md"].includes(S)?(0,p.jsx)(l.X6,{align:"center",size:"lg"===S?"lg":"sm",color:"white",overflow:"normal",children:v}):(0,p.jsx)(l.xv,{align:"center",color:"white",size:"sm"===S?"lg":"sm",overflow:"normal",weight:"bold",children:v}),h&&T&&(0,p.jsxs)(l.xu,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[(0,p.jsx)(l.xu,{marginEnd:2,children:(0,p.jsx)(n.Z,{outline:!0,size:"xs",src:h.image_small_url,name:h.full_name})}),(0,p.jsx)(l.xv,{size:"sm",color:"white",weight:"bold",children:h.full_name})]})]})})]})})})}},868194:(e,t,r)=>{r.d(t,{Z:()=>h});var i=r(667294),n=r(40142),s=r(236790),o=r(530826),a=r(128833),l=r(24309),p=r(474444),c=r(883119),d=r(652896),u=r(785893);function h(e){const{auxData:t,pattern:r,slotIndex:h,storyId:y,viewType:m,viewParameter:g}=e,f=(0,n.useSelector)((({stories:e,articles:t,users:r})=>e[y].objects.map((e=>{const i=t[e.id];return i.curator&&"string"==typeof i.curator?{...i,curator:r[i.curator]}:i})))),{story_type:x,referring_source:b,title:_,display_options:v,action:w,aux_fields:j}=(0,n.useSelector)((({stories:e})=>e[y])),{identifier_icon_name:A}=v||{},I=f.map((({type:e,id:t})=>e+":"+t)).join("|"),U={story_type:x,story_id:y,content_ids:I,...t};return(0,u.jsx)(a.qS,{loggingId:y,objectIdStr:y,viewParameter:g,viewType:m,slotIndex:h,component:200,auxData:U,children:(0,u.jsxs)(i.Fragment,{children:[_&&(0,u.jsxs)(c.xu,{display:"flex",marginBottom:2,justifyContent:"center",alignItems:"center",children:["number"==typeof A&&A!==p.Js&&(0,u.jsx)(c.xu,{marginEnd:2,dangerouslySetInlineStyle:{__style:{paddingTop:1}},children:(0,u.jsx)(c.JO,{accessibilityLabel:"",color:"darkGray",icon:(0,p.H7)(A),size:14})}),(0,u.jsx)(c.xv,{weight:"bold",children:_.format})]}),(0,u.jsx)(s.Z,{bubbles:f,pattern:"number"==typeof(null==j?void 0:j.pattern)?(T=j.pattern,0===T?[d.U.small]:1===T?[d.U.large,d.U.small,d.U.small]:2===T?[d.U.medium,d.U.small,d.U.small]:[d.U.small]):r,referringSource:b,storyId:y,storyType:x,viewParameter:g,viewType:m}),w&&w.url&&(0,u.jsx)(c.xu,{display:"flex",width:"100%",justifyContent:"center",marginTop:1,children:(0,u.jsx)(o.Z,{accessibilityLabel:w.text,color:"lightGray",onTouch:()=>{(0,l.So)({view_type:m,view_parameter:g,aux_data:U})},text:w.text,to:w.url,size:"md",shape:"pill"})})]})});var T}},236790:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(44627),n=r(883119),s=r(652896),o=r(785893);function a(e){const{pattern:t=[s.U.medium],bubbles:r,referringSource:a,storyId:l,storyType:p,viewType:c,viewParameter:d,onTouch:u}=e,h=r.map((({type:e,id:t})=>e+":"+t)).join("|");return(0,o.jsx)(n.kC,{alignItems:"stretch",justifyContent:"between",width:"100%",wrap:!0,children:r.map(((e,r)=>{const y=t[r%t.length];return(0,o.jsx)(n.xu,{paddingY:1,width:[s.U.small,s.U.extra_small].includes(y)?"calc(50% - 4px)":"100%",children:(0,o.jsx)(i.Z,{bubble:e,onTouch:u,format:y,referringSource:a,height:([s.U.medium,s.U.extra_small].includes(y)?"50%":y===s.U.article&&"73%")||"100%",storyId:l,slotIndex:r,viewType:c,viewParameter:d,auxData:{content_ids:h,story_type:p,grid_index:r}})},`bubble-${r}`)}))})}},44627:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(128833),n=r(221469),s=r(24309),o=r(652896),a=r(785893);function l({auxData:e,bubble:t,font:r,format:l,height:p,onTouch:c,referringSource:d,slotIndex:u,storyId:h,viewParameter:y,viewType:m,width:g="100%"}){var f;const{id:x,action:b,cover_images:_,dominant_colors:v,identifier_icon_type:w,title:j,story_category:A,curator:I}=t;if(!_||!j)return null;const U=null===(f=_[0]&&(_[0]["474x"]||_[0]["236x"]))||void 0===f?void 0:f.url,T=j.format,S=(null==b?void 0:b.url)||(({storyCategory:e,query:t,referringSource:r,bubbleId:i,storyId:s})=>{const o=[0,24,21,25,26].includes(e),a=(0,n.XP)({q:t,rs:r||void 0,b_id:i,source_id:s});return o?`/discover/article/${i}`:"/search/pins/"+(a?"?"+a:"")})({storyCategory:A,query:T,referringSource:d,bubbleId:x,storyId:h}),D=l===o.U.article?13865:200,C=l===o.U.article?102:6940,k=v&&v.length?v[0]:void 0;return(0,a.jsx)(i.fv,{auxData:{story_id:h,...e},impressionData:{storyCategory:A,storyIdStr:h},impressionType:"articleImpressions",loggingId:h,slotIndex:u,viewParameter:y,viewType:m,children:(0,a.jsx)(o.Z,{backgroundColor:k,bubbleId:x,bubbleUrl:S,coverImageUrl:U,curator:I,font:r,format:l,height:p,identifierIconType:w,onTap:t=>{var r;((0,s.j)({component:D,event_type:C,object_id_str:t,view_parameter:y,view_type:m,aux_data:{article_id:t,grid_index:u,...e}}),c)&&c({query:T,url:null!==(r=null==b?void 0:b.url)&&void 0!==r?r:void 0})},referringSource:d,title:T,width:g})})}},474444:(e,t,r)=>{r.d(t,{Js:()=>i,H7:()=>n});const i=-1;function n(e){switch(e){case 0:return"shopping-bag";case 1:return"tag";default:return"search"}}},22463:(e,t,r)=>{r.d(t,{HW:()=>a,Es:()=>l,mv:()=>p,DZ:()=>c,f9:()=>d});var i=r(903945),n=r(608527);const s=e=>e>=Date.now()-72e5,o=(e,t)=>{const r=[];if(e)for(const i of e)t&&!i.is_shared||s(i.ts)&&r.push(i);return r},a=()=>{const e=(0,i.qn)(n.zR),t=e?JSON.parse(e):[],r=o(t,!1),a=o(t,!0),l=r.map((e=>e.first_pin_image_signature)),p=r.map((e=>e.pin_id)),c=a.map((e=>e.first_pin_image_signature)),d=(e=>{const t={};if(e)for(const r of e)r.is_shared&&s(r.ts)&&r.pin_id&&(t[r.pin_id]={inviteCode:r.pin_invite_code});return t})(t),u=(0,i.qn)(n.dy),h=u?JSON.parse(u):[];return{extraPlpImages:l,plpImageRenderData:r,extraPlpIds:p,extraBlpImages:o(h,!0).map((e=>e.first_pin_image_signature)),extraSharedImages:c,sharedPinData:d}},l=(e,t)=>{if(e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1){if(e[r].id!==t[r].id)return!1}return!0},p=(e,t)=>(e.nuxTopics?e.nuxTopics.map((({id:e})=>t[e])):[]).filter((e=>e.is_followed)),c=(e,t)=>e.nuxTopics?e.nuxTopics.map((({id:e})=>t[e])):null,d=e=>[40002,10105].includes(e)},881794:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(667294),n=r(40142),s=r(139848),o=r(861381),a=r(855168),l=r(442975),p=r(785893);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=e=>t=>{const{key:r,options:d,name:u,schema:h}=e,y=t=>"function"==typeof e.noCache?e.noCache(t):e.noCache;class m extends i.PureComponent{constructor(...e){super(...e),c(this,"optionsKey",(0,s.e)(d(this.props))),c(this,"fetchMore",(()=>{const{bookmark:e,fetching:t}=this.props.resource;e&&!t&&this.props.dispatch((0,l.U2)(u,{bookmark:e,options:d(this.props),schema:h}))})),c(this,"refresh",(()=>{this.props.dispatch((0,l.bi)(u,{options:d(this.props),schema:h}))}))}componentDidMount(){const{dispatch:e,inCache:t}=this.props;!t||(({resource:e})=>{if(e&&e.error){const{httpStatus:t}=e.error;return!t||t>=500}return!1})(this.props)?e((0,l.U2)(u,{options:d(this.props),schema:h})):y(this.props)&&e((0,l.bi)(u,{options:d(this.props),schema:h}))}componentDidUpdate(){const e=(0,s.e)(d(this.props));if(e!==this.optionsKey){this.optionsKey=e;const{dispatch:t,inCache:r}=this.props;r?y(this.props)&&t((0,l.bi)(u,{options:d(this.props),schema:h})):t((0,l.U2)(u,{options:d(this.props),schema:h}))}}render(){const{inCache:i,resource:n,...s}=this.props,o={[r]:{fetchMore:this.fetchMore,fetching:n.fetching,refresh:this.refresh,isAtEnd:null===n.bookmark,inCache:i}};if(n.error){const{httpStatus:t,apiErrorCode:r}=n.error;if(e.onError)return e.onError(n.error,s);if(404===t||401===t&&7===r)return(0,p.jsx)(a.l_,{to:{pathname:"/",state:{showError:!0}}});if(301===t)return(0,p.jsx)(a.l_,{to:n.error.redirectUrl})}return(0,p.jsx)(t,{...s,...o})}}return c(m,"displayName",`WithResource[${u}](${t.displayName||t.name||"ComponentNameUndefined"})`),c(m,"getDependencies",((e,t)=>r=>{const i=t.getDependencies?t.getDependencies(r):[],n=e.options(r);return[...i,{resource:e.name,options:n}]})(e,t)),(0,n.connect)(((t,r)=>{const i=e.options(r),n=(0,s.e)(i),a=t.resources[e.name]&&t.resources[e.name][n],l=(0,o.TT)(e.name,i);return{...e.mapState?e.mapState(t,r):{},resource:a||{fetching:!0},inCache:!!(l?t.feeds[l]:a)}}),((t,r)=>({...e.mapDispatch?e.mapDispatch(t,r):{},dispatch:t})))(m)}},534435:(e,t,r)=>{r.d(t,{n1:()=>l,EL:()=>p,e2:()=>c,QZ:()=>d,ix:()=>u,TE:()=>h,FK:()=>y,Cp:()=>m,XV:()=>g,XG:()=>f,rm:()=>x,gG:()=>b,TK:()=>_,YV:()=>v,s5:()=>w,uo:()=>j,WF:()=>A,a5:()=>I,e6:()=>U,lW:()=>T,oo:()=>S,e0:()=>D,Ob:()=>C,$x:()=>k,pc:()=>P,o_:()=>Z,O0:()=>O,wY:()=>E,gH:()=>N,MI:()=>L,xu:()=>z,dz:()=>H,go:()=>$,lH:()=>B,eA:()=>J,W:()=>M,iW:()=>q,Mj:()=>G,iT:()=>K,wb:()=>V,H5:()=>W,Wz:()=>F});var i=r(731164),n=r(513389),s=r(561613),o=r(382745),a=r(12516);const l=()=>({type:s.iZ}),p=()=>({type:s.KA}),c=()=>({type:s.lj}),d=e=>({type:s.j_,payload:{unauthSavePinId:e}}),u=e=>({type:s.w$,payload:{unauthFollowUserId:e}}),h=()=>({type:s.Bu}),y=()=>({type:s.JG}),m=()=>({type:s.pV}),g=()=>({type:s.k7}),f=e=>({type:s.BM,payload:e}),x=e=>({type:s.a9,payload:{from:e}}),b=()=>({type:s.V9}),_=()=>({type:s.UA}),v=()=>e=>{e(f({preparingNewVersion:!0})),(0,a.Ng)().catch((()=>(i.Z.increment("mweb_service_worker.prepareNewVersion.error",1),(0,a.Dm)()))).finally((()=>{i.Z.increment("mweb.new_version.refresh",1),e(f({newVersionAvailable:!0,preparingNewVersion:!1}))})),(0,n.Qi)()},w=()=>e=>{e({type:s.kH,payload:{isAppUpsellShown:!0}})},j=()=>e=>{e({type:s.kH,payload:{isAppUpsellShown:!1}})},A=()=>({type:s.cs}),I=()=>({type:s.tg}),U=()=>({type:s.c7}),T=()=>({type:s.kh}),S=()=>({type:s.Xi}),D=e=>({type:s.$t,payload:{steps:e}}),C=()=>({type:s.ds}),k=(e,t)=>({type:s.iy,payload:{limitedActionHeader:e,limitedActionNext:t}}),P=()=>({type:s.Cy}),Z=e=>e?{type:s.nr,payload:{email:e}}:{},O=()=>({type:s.LB}),E=e=>({type:s.pl,payload:e}),N=e=>({type:s.aj,payload:e}),L=e=>({type:s.HQ,payload:e}),z=e=>({type:s.vH,payload:{viewedImageSignature:e}}),H=e=>({type:s.le,payload:{pins:e}}),$=()=>({type:s.uK}),B=()=>({type:s.m9}),J=()=>({type:s.ib}),M=()=>({type:s.L6}),q=e=>e?{type:s.Pz,payload:e}:{type:s.OO},G=(e,t,r)=>i=>i(((e,t,r)=>({type:s.AO,payload:{isShareMenuOpen:e,objectType:t,objectId:r}}))(e,t,r)),K=e=>({type:s.eP,payload:e}),V=()=>({type:s.dO}),W=e=>({type:s.UD,payload:e}),F=(e,t)=>{let r;return r=e?(0,o.bo)(e)?"today":t&&(0,o.dZ)(e,t)?"own_section":t&&(0,o.J)(e,t)?"own_board":(0,o.OJ)(e)?"section":(0,o.am)(e)?"board":(0,o.L6)(e)?"closeup":(0,o.C$)(e)?"home":(0,o.cD)(e)?"profile":(0,o.En)(e)?"search":(0,o.$V)(e)?"topic":"":"",{type:s.il,payload:r}}},620813:(e,t,r)=>{r.d(t,{Z:()=>s});var i=r(667294),n=r(785893);function s({children:e,fallback:t,dangerouslyServerRenderForGraphQL:r=!1}){const s=t||null;return(0,n.jsx)(i.Suspense,{fallback:s,children:e})}},689859:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r(620813).Z}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/85158-82bfae769cfbe2c0.mjs.map