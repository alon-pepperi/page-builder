(self.webpackChunksub_addon_5=self.webpackChunksub_addon_5||[]).push([[901],{9075:(e,t,n)=>{"use strict";n.d(t,{b2:()=>U,H7:()=>L,q6:()=>k,se:()=>C});var r=n(4918),s=n(4963);class o extends r["\u0275DomAdapter"]{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class i extends o{static makeCurrent(){(0,r["\u0275setRootDomAdapter"])(new i)}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=(l=l||document.querySelector("base"),l?l.getAttribute("href"):null);return null==t?null:function(e){a=a||document.createElement("a"),a.setAttribute("href",e);const t=a.pathname;return"/"===t.charAt(0)?t:`/${t}`}(t)}resetBaseElement(){l=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return(0,r["\u0275parseCookieValue"])(document.cookie,e)}}let a,l=null;const u=new s.InjectionToken("TRANSITION_ID"),c=[{provide:s.APP_INITIALIZER,useFactory:function(e,t,n){return()=>{n.get(s.ApplicationInitStatus).donePromise.then(()=>{const n=(0,r["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[u,r.DOCUMENT,s.Injector],multi:!0}];class d{static init(){(0,s.setTestabilityGetter)(new d)}addToWindow(e){s["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},s["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),s["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),s["\u0275global"].frameworkStabilizers||(s["\u0275global"].frameworkStabilizers=[]),s["\u0275global"].frameworkStabilizers.push(e=>{const t=s["\u0275global"].getAllAngularTestabilities();let n=t.length,r=!1;const o=function(t){r=r||t,n--,0==n&&e(r)};t.forEach(function(e){e.whenStable(o)})})}findTestabilityInTree(e,t,n){if(null==t)return null;const s=e.getTestability(t);return null!=s?s:n?(0,r["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}let p=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const h=new s.InjectionToken("EventManagerPlugins");let f=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](h),s["\u0275\u0275inject"](s.NgZone))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class m{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const s=(0,r["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!s)throw new Error(`Unsupported event target ${s} for event ${t}`);return this.addEventListener(s,t,n)}}let y=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),g=(()=>{class e extends y{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,t,n){e.forEach(e=>{const r=this._doc.createElement("style");r.textContent=e,n.push(t.appendChild(r))})}addHost(e){const t=[];this._addStylesToHost(this._stylesSet,e,t),this._hostNodes.set(e,t)}removeHost(e){const t=this._hostNodes.get(e);t&&t.forEach(w),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((t,n)=>{this._addStylesToHost(e,n,t)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(w))}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function w(e){(0,r["\u0275getDOM"])().remove(e)}const v={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},S=/%COMP%/g;function E(e,t,n){for(let r=0;r<t.length;r++){let s=t[r];Array.isArray(s)?E(e,s,n):(s=s.replace(S,e),n.push(s))}return n}function b(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let C=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new T(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case s.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new A(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case 1:case s.ViewEncapsulation.ShadowDom:return new I(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=E(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](f),s["\u0275\u0275inject"](g),s["\u0275\u0275inject"](s.APP_ID))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class T{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(v[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const s=v[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=v[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(s.RendererStyleFlags2.DashCase|s.RendererStyleFlags2.Important)?e.style.setProperty(t,n,r&s.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&s.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,b(n)):this.eventManager.addEventListener(e,t,b(n))}}class A extends T{constructor(e,t,n,r){super(e),this.component=n;const s=E(r+"-"+n.id,n.styles,[]);t.addStyles(s),this.contentAttr="_ngcontent-%COMP%".replace(S,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(S,r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class I extends T{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const s=E(r.id,r.styles,[]);for(let o=0;o<s.length;o++){const e=document.createElement("style");e.textContent=s[o],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let N=(()=>{class e extends m{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const _=["alt","control","meta","shift"],M={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},R={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},x={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let D=(()=>{class e extends m{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,s){const o=e.parseEventName(n),i=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,r["\u0275getDOM"])().onAndCancel(t,o.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const s=e._normalizeKey(n.pop());let o="";if(_.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),o+=e+".")}),o+=s,0!=n.length||0===s.length)return null;const i={};return i.domEventName=r,i.fullKey=o,i}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&R.hasOwnProperty(t)&&(t=R[t]))}return M[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),_.forEach(r=>{r!=n&&(0,x[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return s=>{e.getEventFullKey(s)===t&&r.runGuarded(()=>n(s))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=(0,s["\u0275\u0275defineInjectable"])({factory:function(){return(0,s["\u0275\u0275inject"])(j)},token:e,providedIn:"root"}),e})();function O(e){return new j(e.get(r.DOCUMENT))}let j=(()=>{class e extends L{constructor(e){super(),this._doc=e}sanitize(e,t){if(null==t)return null;switch(e){case s.SecurityContext.NONE:return t;case s.SecurityContext.HTML:return(0,s["\u0275allowSanitizationBypassAndThrow"])(t,"HTML")?(0,s["\u0275unwrapSafeValue"])(t):(0,s["\u0275_sanitizeHtml"])(this._doc,String(t)).toString();case s.SecurityContext.STYLE:return(0,s["\u0275allowSanitizationBypassAndThrow"])(t,"Style")?(0,s["\u0275unwrapSafeValue"])(t):t;case s.SecurityContext.SCRIPT:if((0,s["\u0275allowSanitizationBypassAndThrow"])(t,"Script"))return(0,s["\u0275unwrapSafeValue"])(t);throw new Error("unsafe value used in a script context");case s.SecurityContext.URL:return(0,s["\u0275getSanitizationBypassType"])(t),(0,s["\u0275allowSanitizationBypassAndThrow"])(t,"URL")?(0,s["\u0275unwrapSafeValue"])(t):(0,s["\u0275_sanitizeUrl"])(String(t));case s.SecurityContext.RESOURCE_URL:if((0,s["\u0275allowSanitizationBypassAndThrow"])(t,"ResourceURL"))return(0,s["\u0275unwrapSafeValue"])(t);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${e} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(e){return(0,s["\u0275bypassSanitizationTrustHtml"])(e)}bypassSecurityTrustStyle(e){return(0,s["\u0275bypassSanitizationTrustStyle"])(e)}bypassSecurityTrustScript(e){return(0,s["\u0275bypassSanitizationTrustScript"])(e)}bypassSecurityTrustUrl(e){return(0,s["\u0275bypassSanitizationTrustUrl"])(e)}bypassSecurityTrustResourceUrl(e){return(0,s["\u0275bypassSanitizationTrustResourceUrl"])(e)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=(0,s["\u0275\u0275defineInjectable"])({factory:function(){return O((0,s["\u0275\u0275inject"])(s.INJECTOR))},token:e,providedIn:"root"}),e})();const k=(0,s.createPlatformFactory)(s.platformCore,"browser",[{provide:s.PLATFORM_ID,useValue:r["\u0275PLATFORM_BROWSER_ID"]},{provide:s.PLATFORM_INITIALIZER,useValue:function(){i.makeCurrent(),d.init()},multi:!0},{provide:r.DOCUMENT,useFactory:function(){return(0,s["\u0275setDocument"])(document),document},deps:[]}]),P=[[],{provide:s["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:s.ErrorHandler,useFactory:function(){return new s.ErrorHandler},deps:[]},{provide:h,useClass:N,multi:!0,deps:[r.DOCUMENT,s.NgZone,s.PLATFORM_ID]},{provide:h,useClass:D,multi:!0,deps:[r.DOCUMENT]},[],{provide:C,useClass:C,deps:[f,g,s.APP_ID]},{provide:s.RendererFactory2,useExisting:C},{provide:y,useExisting:g},{provide:g,useClass:g,deps:[r.DOCUMENT]},{provide:s.Testability,useClass:s.Testability,deps:[s.NgZone]},{provide:f,useClass:f,deps:[h,s.NgZone]},{provide:r.XhrFactory,useClass:p,deps:[]},[]];let U=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:s.APP_ID,useValue:t.appId},{provide:u,useExisting:s.APP_ID},c]}}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](e,12))},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({providers:P,imports:[r.CommonModule,s.ApplicationModule]}),e})();"undefined"!=typeof window&&window},9901:(e,t,n)=>{"use strict";n.r(t);var r=n(9075),s=n(122);let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["addon-root"]],decls:2,vars:0,template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"h1"),s["\u0275\u0275text"](1,"Sub - Addon "),s["\u0275\u0275elementEnd"]())},encapsulation:2}),e})();var i=n(9790),a=n(8426),l=n(1841),u=n(8235),c=n(6850),d=n(8341),p=n(876),h=n(1839),f=n(5289),m=n(2826),y=n(3679),g=n(2458),w=n(1095),v=n(8295),S=n(9983),E=n(3935),b=n(6627),C=n(2238),T=n(6342),A=n(3513),I=n(7402),N=n(2062);n(946);let _=(()=>{class e{constructor(e){this.pepIconRegistry=e,this.pepIconRegistry.registerIcons([T.eZ,T.QQ])}}return e.\u0275fac=function(t){return new(t||e)(f["\u0275\u0275inject"](T.dU))},e.\u0275mod=f["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=f["\u0275\u0275defineInjector"]({imports:[[m.CommonModule,y.UX,y.u5,g.BQ,w.ot,v.lN,S.c,E.Tx,b.Ps,C.Is,N.fi.forRoot(),u.ZF,T.sO,I.a,A.k,c.xC]]}),e})();function M(e,t,n){const r=n.getAddonStaticFolder(),s=t.getAssetsTranslationsPath(),o=t.getAssetsTranslationsSuffix();return new p.z(e,[{prefix:r.length>0?r:s,suffix:o},{prefix:r.length>0?r:"/assets/i18n/",suffix:".json"}])}let R=(()=>{class e{constructor(e){let t="en";e.setDefaultLang(t),t=e.getBrowserLang().split("-")[0],location.href.indexOf("userLang=en")>-1&&(t="en"),e.use(t).subscribe(e=>{})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275inject"](i.sK))},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[l.eN,i.gM,u.Td,u.xD,u.iM,u.qH,c.iu,u.cd],imports:[[a.CommonModule,l.JF,i.aw.forChild({loader:{provide:i.Zw,useFactory:M,deps:[l.eN,u.iM,u.xD]},isolate:!1}),u.ZF,d.A,h.$L,_]]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e,bootstrap:[o]}),e.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[],imports:[[r.b2,R]]}),e})();(0,s.enableProdMode)(),r.q6().bootstrapModule(x).catch(e=>console.error(e))}}]);