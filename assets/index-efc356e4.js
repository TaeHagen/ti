(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();function A(){}function Me(t){return t()}function ke(){return Object.create(null)}function U(t){t.forEach(Me)}function _e(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let oe;function Ue(t,e){return oe||(oe=document.createElement("a")),oe.href=e,t===oe.href}function qe(t){return Object.keys(t).length===0}function te(t){return t&&_e(t.destroy)?t.destroy:A}function b(t,e){t.appendChild(e)}function H(t,e,i){t.insertBefore(e,i||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function be(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}function x(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function D(){return R(" ")}function Be(){return R("")}function S(t,e,i,l){return t.addEventListener(e,i,l),()=>t.removeEventListener(e,i,l)}function g(t,e,i){i==null?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function Pe(t){return Array.from(t.childNodes)}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function p(t,e,i,l){i===null?t.style.removeProperty(e):t.style.setProperty(e,i,l?"important":"")}let ae;function Ge(){if(ae===void 0){ae=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{ae=!0}}return ae}function X(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const l=x("iframe");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),l.setAttribute("aria-hidden","true"),l.tabIndex=-1;const n=Ge();let s;return n?(l.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=S(window,"message",r=>{r.source===l.contentWindow&&e()})):(l.src="about:blank",l.onload=()=>{s=S(l.contentWindow,"resize",e)}),b(t,l),()=>{(n||s&&l.contentWindow)&&s(),W(l)}}function T(t,e,i){t.classList[i?"add":"remove"](e)}function je(t,e,{bubbles:i=!1,cancelable:l=!1}={}){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,i,l,e),n}let ne;function le(t){ne=t}function Xe(){if(!ne)throw new Error("Function called outside component initialization");return ne}function Te(){const t=Xe();return(e,i,{cancelable:l=!1}={})=>{const n=t.$$.callbacks[e];if(n){const s=je(e,i,{cancelable:l});return n.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}function $e(t,e){const i=t.$$.callbacks[e.type];i&&i.slice().forEach(l=>l.call(this,e))}const Q=[],de=[],fe=[],Ee=[],Ze=Promise.resolve();let ye=!1;function Qe(){ye||(ye=!0,Ze.then(Ie))}function M(t){fe.push(t)}const he=new Set;let Z=0;function Ie(){if(Z!==0)return;const t=ne;do{try{for(;Z<Q.length;){const e=Q[Z];Z++,le(e),Ve(e.$$)}}catch(e){throw Q.length=0,Z=0,e}for(le(null),Q.length=0,Z=0;de.length;)de.pop()();for(let e=0;e<fe.length;e+=1){const i=fe[e];he.has(i)||(he.add(i),i())}fe.length=0}while(Q.length);for(;Ee.length;)Ee.pop()();ye=!1,he.clear(),le(t)}function Ve(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const ue=new Set;let j;function J(){j={r:0,c:[],p:j}}function Y(){j.r||U(j.c),j=j.p}function $(t,e){t&&t.i&&(ue.delete(t),t.i(e))}function z(t,e,i,l){if(t&&t.o){if(ue.has(t))return;ue.add(t),j.c.push(()=>{ue.delete(t),l&&(i&&t.d(1),l())}),t.o(e)}else l&&l()}const ve=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function B(t){t&&t.c()}function F(t,e,i,l){const{fragment:n,after_update:s}=t.$$;n&&n.m(e,i),l||M(()=>{const r=t.$$.on_mount.map(Me).filter(_e);t.$$.on_destroy?t.$$.on_destroy.push(...r):U(r),t.$$.on_mount=[]}),s.forEach(M)}function C(t,e){const i=t.$$;i.fragment!==null&&(U(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Je(t,e){t.$$.dirty[0]===-1&&(Q.push(t),Qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(t,e,i,l,n,s,r,a=[-1]){const o=ne;le(t);const c=t.$$={fragment:null,ctx:[],props:s,update:A,not_equal:n,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ke(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(c.root);let f=!1;if(c.ctx=i?i(t,e.props||{},(u,k,...h)=>{const y=h.length?h[0]:k;return c.ctx&&n(c.ctx[u],c.ctx[u]=y)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](y),f&&Je(t,u)),k}):[],c.update(),f=!0,U(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const u=Pe(e.target);c.fragment&&c.fragment.l(u),u.forEach(W)}else c.fragment&&c.fragment.c();e.intro&&$(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),Ie()}le(o)}class G{$destroy(){C(this,1),this.$destroy=A}$on(e,i){if(!_e(i))return A;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(i),()=>{const n=l.indexOf(i);n!==-1&&l.splice(n,1)}}$set(e){this.$$set&&!qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ie(t){const e=i=>{t.dispatchEvent(new CustomEvent("touchev",{detail:!0})),setTimeout(()=>{t.dispatchEvent(new CustomEvent("touchev",{detail:!1}))},50)};return t.addEventListener("mouseup",e,!0),{destroy(){t.removeEventListener("mouseup",e,!0)}}}function Oe(t=()=>{}){var e=window,i=document.createElement("input");i.type="file",i.accept=".rom",i.onchange=function(l){var n=l.target.files[0],s=new FileReader;s.readAsArrayBuffer(n),s.onload=function(){var r=s.result,a=new Uint8Array(r),o=e.FS.open("/persist/r.rom","w+");e.FS.write(o,a,0,a.length),e.FS.close(o),e.FS.syncfs(!1,()=>{}),e._reset(),e._start_emu(e.allocateUTF8("/persist/r.rom"),e.allocateUTF8("/persist/i.img")),t()}},i.click()}function Ye(t){let e;return{c(){e=R("Save")},m(i,l){H(i,e,l)},d(i){i&&W(e)}}}function et(t){let e;return{c(){e=R("Saved!")},m(i,l){H(i,e,l)},d(i){i&&W(e)}}}function tt(t){let e,i,l,n,s=t[0]?"done":"save",r,a,o,c,f,u,k,h;function y(m,v){return m[0]?et:Ye}let w=y(t),d=w(t);return{c(){e=x("div"),i=R(`CEmu
    
    `),l=x("div"),n=x("span"),r=R(s),a=D(),d.c(),o=D(),c=x("div"),c.innerHTML=`<span class="material-symbols-outlined svelte-1swyuo">device_reset</span>
        Reset`,f=D(),u=x("div"),u.innerHTML=`<span class="material-symbols-outlined svelte-1swyuo">publish</span>
        Load ROM`,g(n,"class","material-symbols-outlined svelte-1swyuo"),g(l,"class","btn svelte-1swyuo"),g(c,"class","btn svelte-1swyuo"),g(u,"class","btn svelte-1swyuo"),g(e,"class","bottom svelte-1swyuo")},m(m,v){H(m,e,v),b(e,i),b(e,l),b(l,n),b(n,r),b(l,a),d.m(l,null),b(e,o),b(e,c),b(e,f),b(e,u),k||(h=[S(l,"click",t[1]),S(c,"click",t[2]),S(u,"click",t[3])],k=!0)},p(m,[v]){v&1&&s!==(s=m[0]?"done":"save")&&ce(r,s),w!==(w=y(m))&&(d.d(1),d=w(m),d&&(d.c(),d.m(l,null)))},i:A,o:A,d(m){m&&W(e),d.d(),k=!1,U(h)}}}function it(t,e,i){let l=!1,n=window;async function s(){i(0,l=!0),n._save(),await new Promise(o=>n.FS.syncfs(!1,o)),setTimeout(()=>i(0,l=!1),5e3)}function r(){n._reset()}return[l,s,r,()=>Oe()]}class Ne extends G{constructor(e){super(),P(this,e,it,tt,q,{})}}function lt(t){let e,i,l,n=t[0].physical.blue+"",s,r,a,o=t[0].physical.green+"",c,f,u,k,h=t[0].physical.text+"",y,w,d,m;return{c(){e=x("div"),i=x("div"),l=x("div"),s=R(n),r=D(),a=x("div"),c=R(o),f=D(),u=x("div"),k=x("span"),y=R(h),g(l,"class","blue svelte-dirv8g"),g(a,"class","green svelte-dirv8g"),g(i,"class","top svelte-dirv8g"),p(i,"height","1.4em"),g(k,"class","svelte-dirv8g"),g(u,"class",w=t[0].physical.type+" button svelte-dirv8g"),T(u,"external",t[2]),g(e,"class","key svelte-dirv8g"),T(e,"external",t[2])},m(v,_){H(v,e,_),b(e,i),b(i,l),b(l,s),b(i,r),b(i,a),b(a,c),b(e,f),b(e,u),b(u,k),b(k,y),d||(m=[te(ie.call(null,u)),S(u,"touchev",t[3])],d=!0)},p(v,[_]){_&1&&n!==(n=v[0].physical.blue+"")&&ce(s,n),_&1&&o!==(o=v[0].physical.green+"")&&ce(c,o),_&1&&h!==(h=v[0].physical.text+"")&&ce(y,h),_&1&&w!==(w=v[0].physical.type+" button svelte-dirv8g")&&g(u,"class",w),_&5&&T(u,"external",v[2]),_&4&&T(e,"external",v[2])},i:A,o:A,d(v){v&&W(e),d=!1,U(m)}}}function nt(t,e,i){let{key:l}=e,{keypress:n}=e,{external:s=!1}=e;const r=a=>n(l,a.detail);return t.$$set=a=>{"key"in a&&i(0,l=a.key),"keypress"in a&&i(1,n=a.keypress),"external"in a&&i(2,s=a.external)},[l,n,s,r]}class pe extends G{constructor(e){super(),P(this,e,nt,lt,q,{key:0,keypress:1,external:2})}}var we=(t=>(t.SMLWHITE="smlwhite",t.WHITE="white",t.BLUE="blue",t.GREEN="green",t.LGWHITE="lgwhite",t.BLACK="black",t.BIGWHITE="bigwhite",t))(we||{});const ee=[{code:"F5",shift:!1,tix:1,tiy:0,physical:{px:4,py:0,text:"graph",blue:"table",green:"f5",type:"smlwhite"},tag:"graph"},{code:"F4",shift:!1,tix:1,tiy:1,physical:{px:3,py:0,text:"trace",blue:"calc",green:"f4",type:"smlwhite"},tag:"trace"},{code:"F3",shift:!1,tix:1,tiy:2,physical:{px:2,py:0,text:"zoom",blue:"format",green:"f3",type:"smlwhite"},tag:"zoom"},{code:"F2",shift:!1,tix:1,tiy:3,physical:{px:1,py:0,text:"window",blue:"tblset",green:"f2",type:"smlwhite"},tag:"wind"},{code:"F1",shift:!1,tix:1,tiy:4,physical:{px:0,py:0,text:"y=",blue:"stat plot",green:"f1",type:"smlwhite"},tag:"yequ"},{code:"Semicolon",shift:!1,tix:1,tiy:5,physical:{px:0,py:1,text:"2nd",blue:"",green:"",type:"blue"},tag:"2nd"},{code:"Backspace",shift:!1,tix:1,tiy:6,physical:{px:1,py:1,text:"mode",blue:"quit",green:"",type:"black"},tag:"mode"},{code:"Delete",shift:!1,tix:1,tiy:7,physical:{px:2,py:1,text:"del",blue:"ins",green:"",type:"black"},tag:"del"},{code:"F12",shift:!1,tix:2,tiy:0,physical:{px:0,py:9,text:"on",blue:"off",green:"",type:"black"},tag:"on"},{code:"Period",shift:!0,tix:2,tiy:1,physical:{px:0,py:8,text:"sto→",blue:"rcl",green:"X",type:"black"},tag:"sto"},{code:"Backquote",shift:!1,tix:2,tiy:2,physical:{px:0,py:7,text:"ln",blue:"eˣ",green:"S",type:"black"},tag:"ln"},{code:"Digit1",shift:!0,tix:2,tiy:3,physical:{px:0,py:6,text:"log",blue:"10ˣ",green:"N",type:"black"},tag:"log"},{code:"Digit2",shift:!0,tix:2,tiy:4,physical:{px:0,py:5,text:"x²",blue:"√‾‾",green:"I",type:"black"},tag:"sq"},{code:"Backslash",shift:!1,tix:2,tiy:5,physical:{px:0,py:4,text:"x⁻¹",blue:"matrix",green:"D",type:"black"},tag:"inv"},{code:"Equals",shift:!1,tix:2,tiy:6,physical:{px:0,py:3,text:"math",blue:"test",green:"A",type:"black"},tag:"math"},{code:"Quote",shift:!1,tix:2,tiy:7,physical:{px:0,py:2,text:"alpha",blue:"A-lock",green:"",type:"green"},tag:"alpha"},{code:"Digit0",shift:!1,tix:3,tiy:0,physical:{px:1,py:9,text:"0",blue:"catalog",green:"_",type:"lgwhite"},tag:"0"},{code:"Digit1",shift:!1,tix:3,tiy:1,physical:{px:1,py:8,text:"1",blue:"L1",green:"Y",type:"lgwhite"},tag:"1"},{code:"Digit4",shift:!1,tix:3,tiy:2,physical:{px:1,py:7,text:"4",blue:"L4",green:"T",type:"lgwhite"},tag:"4"},{code:"Digit7",shift:!1,tix:3,tiy:3,physical:{px:1,py:6,text:"7",blue:"u",green:"O",type:"lgwhite"},tag:"7"},{code:"Comma",shift:!1,tix:3,tiy:4,physical:{px:1,py:5,text:",",blue:"EE",green:"J",type:"black"},tag:"comma"},{code:"Digit4",shift:!0,tix:3,tiy:5,physical:{px:1,py:4,text:"sin",blue:"sin⁻¹",green:"E",type:"black"},tag:"sin"},{code:"PageUp",shift:!1,tix:3,tiy:6,physical:{px:1,py:3,text:"apps",blue:"angle",green:"B",type:"black"},tag:"apps"},{code:"Minus",shift:!0,tix:3,tiy:7,physical:{px:1,py:2,text:"X,T,θ,n",blue:"link",green:"frac",type:"black"},tag:"xton"},{code:"Period",shift:!1,tix:4,tiy:0,physical:{px:2,py:9,text:".",blue:"i",green:":",type:"lgwhite"},tag:"dot"},{code:"Digit2",shift:!1,tix:4,tiy:1,physical:{px:2,py:8,text:"2",blue:"L2",green:"Z",type:"lgwhite"},tag:"2"},{code:"Digit5",shift:!1,tix:4,tiy:2,physical:{px:2,py:7,text:"5",blue:"L5",green:"U",type:"lgwhite"},tag:"5"},{code:"Digit8",shift:!1,tix:4,tiy:3,physical:{px:2,py:6,text:"8",blue:"v",green:"P",type:"lgwhite"},tag:"8"},{code:"Digit9",shift:!0,tix:4,tiy:4,physical:{px:2,py:5,text:"(",blue:"{",green:"K",type:"black"},tag:"lpar"},{code:"Digit5",shift:!0,tix:4,tiy:5,physical:{px:2,py:4,text:"cos",blue:"cos⁻¹",green:"F",type:"black"},tag:"cos"},{code:"PageDown",shift:!1,tix:4,tiy:6,physical:{px:2,py:3,text:"prgm",blue:"draw",green:"C",type:"black"},tag:"prgm"},{code:"End",shift:!1,tix:4,tiy:7,physical:{px:2,py:2,text:"stat",blue:"list",green:"",type:"black"},tag:"stat"},{code:"Backquote",shift:!0,tix:5,tiy:0,physical:{px:3,py:9,text:"(-)",blue:"ans",green:"?",type:"lgwhite"},tag:"neg"},{code:"Digit3",shift:!1,tix:5,tiy:1,physical:{px:3,py:8,text:"3",blue:"L3",green:"θ",type:"lgwhite"},tag:"3"},{code:"Digit6",shift:!1,tix:5,tiy:2,physical:{px:3,py:7,text:"6",blue:"L6",green:"V",type:"lgwhite"},tag:"6"},{code:"Digit9",shift:!1,tix:5,tiy:3,physical:{px:3,py:6,text:"9",blue:"w",green:"Q",type:"lgwhite"},tag:"9"},{code:"Digit0",shift:!0,tix:5,tiy:4,physical:{px:3,py:5,text:")",blue:"}",green:"L",type:"black"},tag:"rpar"},{code:"Digit7",shift:!0,tix:5,tiy:5,physical:{px:3,py:4,text:"tan",blue:"tan⁻¹",green:"G",type:"black"},tag:"tan"},{code:"Comma",shift:!0,tix:5,tiy:6,physical:{px:3,py:3,text:"vars",blue:"distr",green:"",type:"black"},tag:"vars"},{code:"Enter",shift:!1,tix:6,tiy:0,physical:{px:4,py:9,text:"enter",blue:"entry",green:"solve",type:"white"},tag:"enter"},{code:"Equal",shift:!0,tix:6,tiy:1,physical:{px:4,py:8,text:"+",blue:"mem",green:"“",type:"bigwhite"},tag:"add"},{code:"Minus",shift:!1,tix:6,tiy:2,physical:{px:4,py:7,text:"-",blue:"]",green:"W",type:"bigwhite"},tag:"sub"},{code:"Digit8",shift:!0,tix:6,tiy:3,physical:{px:4,py:6,text:"×",blue:"[",green:"R",type:"bigwhite"},tag:"mul"},{code:"Slash",shift:!1,tix:6,tiy:4,physical:{px:4,py:5,text:"÷",blue:"e",green:"M",type:"bigwhite"},tag:"div"},{code:"Digit6",shift:!0,tix:6,tiy:5,physical:{px:4,py:4,text:"^",blue:"π",green:"H",type:"black"},tag:"pow"},{code:"Escape",shift:!1,tix:6,tiy:6,physical:{px:4,py:3,text:"clear",blue:"",green:"",type:"black"},tag:"clr"},{code:"ArrowDown",shift:!1,tix:7,tiy:0,physical:null,tag:"down"},{code:"ArrowLeft",shift:!1,tix:7,tiy:1,physical:null,tag:"left"},{code:"ArrowRight",shift:!1,tix:7,tiy:2,physical:null,tag:"right"},{code:"ArrowUp",shift:!1,tix:7,tiy:3,physical:null,tag:"up"},{code:"Space",shift:!1,tix:3,tiy:0,physical:null,tag:"0 alt"},{code:"KeyY",shift:!1,tix:3,tiy:1,physical:null,tag:"1 alt"},{code:"KeyZ",shift:!1,tix:4,tiy:1,physical:null,tag:"2 alt"},{code:"Digit3",shift:!0,tix:5,tiy:1,physical:null,tag:"3 alt"},{code:"KeyT",shift:!1,tix:3,tiy:2,physical:null,tag:"4 alt"},{code:"KeyU",shift:!1,tix:4,tiy:2,physical:null,tag:"5 alt"},{code:"KeyV",shift:!1,tix:5,tiy:2,physical:null,tag:"6 alt"},{code:"KeyO",shift:!1,tix:3,tiy:3,physical:null,tag:"7 alt"},{code:"KeyP",shift:!1,tix:4,tiy:3,physical:null,tag:"8 alt"},{code:"KeyQ",shift:!1,tix:5,tiy:3,physical:null,tag:"9 alt"},{code:"Semicolon",shift:!0,tix:4,tiy:0,physical:null,tag:"dot alt"},{code:"KeyK",shift:!1,tix:4,tiy:4,physical:null,tag:"lpar alt"},{code:"KeyL",shift:!1,tix:5,tiy:4,physical:null,tag:"rpar alt"},{code:"KeyJ",shift:!1,tix:3,tiy:4,physical:null,tag:"comma alt"},{code:"KeyE",shift:!1,tix:3,tiy:5,physical:null,tag:"sin alt"},{code:"KeyF",shift:!1,tix:4,tiy:5,physical:null,tag:"cos alt"},{code:"KeyG",shift:!1,tix:5,tiy:5,physical:null,tag:"tan alt"},{code:"KeyS",shift:!1,tix:2,tiy:2,physical:null,tag:"ln alt"},{code:"KeyN",shift:!1,tix:2,tiy:3,physical:null,tag:"log alt"},{code:"KeyD",shift:!1,tix:2,tiy:5,physical:null,tag:"inv alt"},{code:"KeyI",shift:!1,tix:2,tiy:4,physical:null,tag:"sq alt"},{code:"KeyR",shift:!1,tix:6,tiy:3,physical:null,tag:"mul alt"},{code:"KeyM",shift:!1,tix:6,tiy:4,physical:null,tag:"div alt"},{code:"KeyW",shift:!1,tix:6,tiy:2,physical:null,tag:"sub alt"},{code:"KeyB",shift:!1,tix:3,tiy:6,physical:null,tag:"apps alt"},{code:"KeyC",shift:!1,tix:4,tiy:6,physical:null,tag:"prgm alt"},{code:"KeyA",shift:!1,tix:2,tiy:6,physical:null,tag:"math alt"},{code:"Insert",shift:!1,tix:1,tiy:7,physical:null,tag:"del alt"},{code:"KeyH",shift:!1,tix:6,tiy:5,physical:null,tag:"pow alt"},{code:"KeyX",shift:!1,tix:2,tiy:1,physical:null,tag:"sto alt"}];function We(t,e,i){const l=t.slice();return l[5]=e[i],l}function ze(t){let e,i,l,n;return i=new pe({props:{key:t[5],keypress:ot,external:!0}}),{c(){e=x("div"),B(i.$$.fragment),l=D()},m(s,r){H(s,e,r),F(i,e,null),b(e,l),n=!0},p(s,r){const a={};r&1&&(a.key=s[5]),i.$set(a)},i(s){n||($(i.$$.fragment,s),n=!0)},o(s){z(i.$$.fragment,s),n=!1},d(s){s&&W(e),C(i)}}}function st(t){let e,i,l,n,s,r,a,o,c;i=new pe({props:{key:ee.find(t[3]),external:!0,keypress:rt}});let f=t[0],u=[];for(let h=0;h<f.length;h+=1)u[h]=ze(We(t,f,h));const k=h=>z(u[h],1,1,()=>{u[h]=null});return{c(){e=x("div"),B(i.$$.fragment),n=D(),s=x("div"),r=x("div"),r.textContent="History",a=D(),o=x("div");for(let h=0;h<u.length;h+=1)u[h].c();p(e,"position","absolute"),p(e,"visibility","hidden"),M(()=>t[4].call(e)),p(r,"padding-bottom","10px"),g(o,"class","history svelte-xy0zdp"),p(o,"height",t[2]+"px"),p(o,"max-width",t[1]-50+"px"),g(s,"class","card svelte-xy0zdp")},m(h,y){H(h,e,y),F(i,e,null),l=X(e,t[4].bind(e)),H(h,n,y),H(h,s,y),b(s,r),b(s,a),b(s,o);for(let w=0;w<u.length;w+=1)u[w].m(o,null);c=!0},p(h,[y]){if(y&1){f=h[0];let w;for(w=0;w<f.length;w+=1){const d=We(h,f,w);u[w]?(u[w].p(d,y),$(u[w],1)):(u[w]=ze(d),u[w].c(),$(u[w],1),u[w].m(o,null))}for(J(),w=f.length;w<u.length;w+=1)k(w);Y()}(!c||y&4)&&p(o,"height",h[2]+"px"),(!c||y&2)&&p(o,"max-width",h[1]-50+"px")},i(h){if(!c){$(i.$$.fragment,h);for(let y=0;y<f.length;y+=1)$(u[y]);c=!0}},o(h){z(i.$$.fragment,h),u=u.filter(Boolean);for(let y=0;y<u.length;y+=1)z(u[y]);c=!1},d(h){h&&W(e),C(i),l(),h&&W(n),h&&W(s),be(u,h)}}}const rt=(t,e)=>{},ot=(t,e)=>{};function at(t,e,i){let{keyHistory:l}=e,n=0,{maxWidth:s=0}=e;const r=o=>o.physical.type==we.LGWHITE;function a(){n=this.clientHeight,i(2,n)}return t.$$set=o=>{"keyHistory"in o&&i(0,l=o.keyHistory),"maxWidth"in o&&i(1,s=o.maxWidth)},[l,s,n,r,a]}class Re extends G{constructor(e){super(),P(this,e,at,st,q,{keyHistory:0,maxWidth:1})}}function ct(t){let e,i,l,n,s,r,a,o,c,f,u,k,h,y,w,d,m,v;return{c(){e=x("div"),i=L("svg"),l=L("defs"),n=L("g"),s=L("g"),r=L("path"),a=L("path"),o=L("g"),c=L("path"),f=L("path"),u=L("g"),k=L("path"),h=L("path"),y=L("g"),w=L("path"),d=L("path"),g(l,"id","defs2"),p(r,"fill","#ffffff"),p(r,"stroke-width","0.244146"),g(r,"d","m 22.564514,23.692094 a 8,8 0 0 1 -5.06429,1.808158 8,8 0 0 1 -4.899443,-1.687235 l -6.7597939,6.759794 a 17.5,17.5 0 0 0 11.9455239,4.713924 17.5,17.5 0 0 0 11.797213,-4.575431 z"),g(r,"id","path34202"),p(a,"fill","#000000"),p(a,"stroke","none"),p(a,"stroke-width","0.453001"),p(a,"stroke-dasharray","none"),p(a,"stroke-opacity","1"),g(a,"id","path34296-6-3"),g(a,"d","m 55.982434,21.448139 -6.292489,-1e-6 -6.292489,0 3.146245,-5.449455 3.146244,-5.449455 3.146245,5.449455 z"),g(a,"transform","matrix(-0.31783925,0,0,-0.18350458,33.505415,31.627832)"),g(s,"id","g34425"),g(s,"class","btn svelte-149bgcl"),p(c,"fill","#ffffff"),p(c,"stroke-width","0.244146"),g(c,"d","M 4.8643026,5.9918823 A 17.5,17.5 0 0 0 0.28628743,17.786511 17.5,17.5 0 0 0 4.466394,29.119153 l 6.72052,-6.72052 A 8,8 0 0 1 9.5001953,17.500224 8,8 0 0 1 11.315588,12.443168 Z"),g(c,"id","path34200"),p(f,"fill","#000000"),p(f,"stroke","none"),p(f,"stroke-width","0.453001"),p(f,"stroke-dasharray","none"),p(f,"stroke-opacity","1"),g(f,"id","path34296-6-7"),g(f,"d","m 55.982434,21.448139 -6.292489,-1e-6 -6.292489,0 3.146245,-5.449455 3.146244,-5.449455 3.146245,5.449455 z"),g(f,"transform","matrix(0,-0.31783925,0.18350458,0,3.3801683,33.349415)"),g(o,"id","g34359"),g(o,"class","btn svelte-149bgcl"),p(k,"fill","#ffffff"),p(k,"stroke-width","0.244146"),g(k,"d","M 30.573844,5.8399536 23.819218,12.59458 a 8,8 0 0 1 1.681034,4.905644 8,8 0 0 1 -1.558044,4.741312 l 7.038847,7.038847 A 17.5,17.5 0 0 0 35.286735,17.786511 17.5,17.5 0 0 0 30.573844,5.8399536 Z"),g(k,"id","path34198"),p(h,"fill","#000000"),p(h,"stroke","none"),p(h,"stroke-width","0.453001"),p(h,"stroke-dasharray","none"),p(h,"stroke-opacity","1"),g(h,"id","path34296-6-7-5"),g(h,"d","m 55.982434,21.448139 -6.292489,-1e-6 -6.292489,0 3.146245,-5.449455 3.146244,-5.449455 3.146245,5.449455 z"),g(h,"transform","matrix(0,0.31783925,-0.18350458,0,31.754832,1.7667534)"),g(u,"id","g34393"),g(u,"class","btn svelte-149bgcl"),p(w,"fill","#ffffff"),p(w,"stroke-width","0.244146"),g(w,"d","M 17.786511,0.28628743 A 17.5,17.5 0 0 0 6.2998739,4.5992025 l 6.4595541,6.4595545 a 8,8 0 0 1 4.740796,-1.5585617 8,8 0 0 1 4.90461,1.6805177 L 29.126388,4.4591593 A 17.5,17.5 0 0 0 17.786511,0.28628743 Z"),g(w,"id","path13443"),p(d,"fill","#000000"),p(d,"stroke","none"),p(d,"stroke-width","0.453001"),p(d,"stroke-dasharray","none"),p(d,"stroke-opacity","1"),g(d,"id","path34296-6"),g(d,"d","m 55.982434,21.448139 -6.292489,-1e-6 -6.292489,0 3.146245,-5.449455 3.146244,-5.449455 3.146245,5.449455 z"),g(d,"transform","matrix(0.31783926,0,0,0.18350458,1.9197154,3.2451683)"),g(y,"id","g34327"),g(y,"class","btn svelte-149bgcl"),g(n,"id","layer1"),g(n,"transform","translate(-0.28628743,-0.28628743)"),g(i,"width","35.000446mm"),g(i,"height","35.000446mm"),g(i,"viewBox","0 0 35.000446 35.000446"),g(i,"version","1.1"),g(i,"id","svg5"),g(i,"class","svelte-149bgcl"),g(e,"class","svelte-149bgcl")},m(_,K){H(_,e,K),b(e,i),b(i,l),b(i,n),b(n,s),b(s,r),b(s,a),b(n,o),b(o,c),b(o,f),b(n,u),b(u,k),b(u,h),b(n,y),b(y,w),b(y,d),m||(v=[te(ie.call(null,s)),S(s,"touchev",t[2]),te(ie.call(null,o)),S(o,"touchev",t[3]),te(ie.call(null,u)),S(u,"touchev",t[4]),te(ie.call(null,y)),S(y,"touchev",t[5])],m=!0)},p:A,i:A,o:A,d(_){_&&W(e),m=!1,U(v)}}}function ft(t,e,i){let{keypress:l}=e;function n(c,f){l(ee.find(u=>u.tag==c),f)}const s=c=>n("down",c.detail),r=c=>n("left",c.detail),a=c=>n("right",c.detail),o=c=>n("up",c.detail);return t.$$set=c=>{"keypress"in c&&i(1,l=c.keypress)},[n,l,s,r,a,o]}class ut extends G{constructor(e){super(),P(this,e,ft,ct,q,{keypress:1})}}const{window:ge}=ve;function He(t,e,i){const l=t.slice();return l[18]=e[i],l[20]=i,l}function Ke(t,e,i){const l=t.slice();return l[18]=e[i],l[22]=i,l}function dt(t){let e,i;return e=new pe({props:{key:t[10](t[20],t[22]),keypress:t[0]}}),{c(){B(e.$$.fragment)},m(l,n){F(e,l,n),i=!0},p(l,n){const s={};n&1&&(s.keypress=l[0]),e.$set(s)},i(l){i||($(e.$$.fragment,l),i=!0)},o(l){z(e.$$.fragment,l),i=!1},d(l){C(e,l)}}}function pt(t){let e,i,l=t[20]==3&&t[22]==1&&ht(t);return{c(){e=x("div"),l&&l.c(),p(e,"height",t[6]+"px")},m(n,s){H(n,e,s),l&&l.m(e,null),i=!0},p(n,s){n[20]==3&&n[22]==1&&l.p(n,s),(!i||s&64)&&p(e,"height",n[6]+"px")},i(n){i||($(l),i=!0)},o(n){z(l),i=!1},d(n){n&&W(e),l&&l.d()}}}function ht(t){let e,i,l;return i=new ut({props:{keypress:t[0]}}),{c(){e=x("div"),B(i.$$.fragment),p(e,"position","absolute"),p(e,"height",t[6]*2+"px"),p(e,"width",t[7]*2+"px"),p(e,"text-align","center"),p(e,"z-index","1000")},m(n,s){H(n,e,s),F(i,e,null),l=!0},p(n,s){const r={};s&1&&(r.keypress=n[0]),i.$set(r),(!l||s&64)&&p(e,"height",n[6]*2+"px"),(!l||s&128)&&p(e,"width",n[7]*2+"px")},i(n){l||($(i.$$.fragment,n),l=!0)},o(n){z(i.$$.fragment,n),l=!1},d(n){n&&W(e),C(i)}}}function De(t){let e,i,l,n;const s=[pt,dt],r=[];function a(o,c){return o[20]>2&&o[22]>0&&o[22]<3?0:1}return e=a(t),i=r[e]=s[e](t),{c(){i.c(),l=Be()},m(o,c){r[e].m(o,c),H(o,l,c),n=!0},p(o,c){i.p(o,c)},i(o){n||($(i),n=!0)},o(o){z(i),n=!1},d(o){r[e].d(o),o&&W(l)}}}function Se(t){let e,i,l,n,s=Array(10),r=[];for(let o=0;o<s.length;o+=1)r[o]=De(Ke(t,s,o));const a=o=>z(r[o],1,1,()=>{r[o]=null});return{c(){e=x("div");for(let o=0;o<r.length;o+=1)r[o].c();i=D(),p(e,"flex","1 1 0"),p(e,"width","0"),M(()=>t[15].call(e))},m(o,c){H(o,e,c);for(let f=0;f<r.length;f+=1)r[f].m(e,null);b(e,i),l=X(e,t[15].bind(e)),n=!0},p(o,c){if(c&1217){s=Array(10);let f;for(f=0;f<s.length;f+=1){const u=Ke(o,s,f);r[f]?(r[f].p(u,c),$(r[f],1)):(r[f]=De(u),r[f].c(),$(r[f],1),r[f].m(e,i))}for(J(),f=s.length;f<r.length;f+=1)a(f);Y()}},i(o){if(!n){for(let c=0;c<s.length;c+=1)$(r[c]);n=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)z(r[c]);n=!1},d(o){o&&W(e),be(r,o),l()}}}function yt(t){let e,i,l,n,s,r,a,o,c,f,u,k;M(t[12]),i=new pe({props:{key:ee.find(t[13]),keypress:t[0]}});let h=Array(5),y=[];for(let d=0;d<h.length;d+=1)y[d]=Se(He(t,h,d));const w=d=>z(y[d],1,1,()=>{y[d]=null});return{c(){e=x("div"),B(i.$$.fragment),n=D(),s=x("div"),r=x("div"),a=x("div");for(let d=0;d<y.length;d+=1)y[d].c();p(e,"position","absolute"),p(e,"visibility","hidden"),M(()=>t[14].call(e)),p(a,"display","flex"),g(r,"class","keyboard svelte-2wl49g"),p(r,"transform","scale("+t[9]*100+"%)"),p(r,"transform-origin","left top"),p(r,"width",t[8]+"px"),M(()=>t[16].call(r)),T(r,"stacked",t[5]),p(s,"margin","10px"),p(s,"margin-bottom","0px"),p(s,"height",t[2]*t[9]+"px"),M(()=>t[17].call(s))},m(d,m){H(d,e,m),F(i,e,null),l=X(e,t[14].bind(e)),H(d,n,m),H(d,s,m),b(s,r),b(r,a);for(let v=0;v<y.length;v+=1)y[v].m(a,null);o=X(r,t[16].bind(r)),c=X(s,t[17].bind(s)),f=!0,u||(k=S(ge,"resize",t[12]),u=!0)},p(d,[m]){const v={};if(m&1&&(v.keypress=d[0]),i.$set(v),m&1217){h=Array(5);let _;for(_=0;_<h.length;_+=1){const K=He(d,h,_);y[_]?(y[_].p(K,m),$(y[_],1)):(y[_]=Se(K),y[_].c(),$(y[_],1),y[_].m(a,null))}for(J(),_=h.length;_<y.length;_+=1)w(_);Y()}(!f||m&512)&&p(r,"transform","scale("+d[9]*100+"%)"),(!f||m&256)&&p(r,"width",d[8]+"px"),(!f||m&32)&&T(r,"stacked",d[5]),(!f||m&516)&&p(s,"height",d[2]*d[9]+"px")},i(d){if(!f){$(i.$$.fragment,d);for(let m=0;m<h.length;m+=1)$(y[m]);f=!0}},o(d){z(i.$$.fragment,d),y=y.filter(Boolean);for(let m=0;m<y.length;m+=1)z(y[m]);f=!1},d(d){d&&W(e),C(i),l(),d&&W(n),d&&W(s),be(y,d),o(),c(),u=!1,k()}}}const gt=.8;function mt(t,e,i){let l,n,s,r,{keypress:a}=e;function o(O,se){let re=ee.find(E=>{var I,N;return((I=E.physical)==null?void 0:I.px)==O&&((N=E.physical)==null?void 0:N.py)==se});return re==null&&console.log(O,se),re}let c=0,f=0,u=0,k=0,h=window.innerHeight,y=0;function w(){i(3,h=ge.innerHeight),i(4,y=ge.innerWidth)}const d=O=>O.physical.type==we.BLACK;function m(){c=this.clientHeight,i(6,c)}function v(){f=this.clientWidth,i(7,f)}function _(){k=this.clientHeight,i(2,k)}function K(){u=this.clientWidth,i(1,u)}return t.$$set=O=>{"keypress"in O&&i(0,a=O.keypress)},t.$$.update=()=>{t.$$.dirty&16&&i(5,l=y<700),t.$$.dirty&8&&i(11,n=h*.7-30),t.$$.dirty&2094&&i(9,s=l?n/k:Math.min(u/300,h*gt/k)),t.$$.dirty&2100&&i(8,r=l?(document.body.clientWidth+y*0-20)/n*k:300)},[a,u,k,h,y,l,c,f,r,s,o,n,w,d,m,v,_,K]}class _t extends G{constructor(e){super(),P(this,e,mt,yt,q,{keypress:0})}}const{window:me}=ve;function bt(t){let e,i,l,n,s,r,a,o,c;return M(t[8]),{c(){e=x("script"),l=D(),n=x("div"),s=x("div"),r=x("canvas"),Ue(e.src,i="cemu-sdl.js")||g(e,"src",i),g(r,"width",t[1]),g(r,"height",t[2]),p(r,"opacity",t[3]),p(r,"width","100%"),p(r,"image-rendering","pixelated"),p(s,"width",t[7]?`${Math.min(t[5],t[6]*.3*t[1]/t[2])}px`:"100%"),g(s,"class","backdrop svelte-14mrymo"),g(n,"class","screencontainer svelte-14mrymo"),M(()=>t[10].call(n))},m(f,u){b(document.head,e),H(f,l,u),H(f,n,u),b(n,s),b(s,r),t[9](r),a=X(n,t[10].bind(n)),o||(c=S(me,"resize",t[8]),o=!0)},p(f,[u]){u&2&&g(r,"width",f[1]),u&4&&g(r,"height",f[2]),u&8&&p(r,"opacity",f[3]),u&230&&p(s,"width",f[7]?`${Math.min(f[5],f[6]*.3*f[1]/f[2])}px`:"100%")},i:A,o:A,d(f){W(e),f&&W(l),f&&W(n),t[9](null),a(),o=!1,c()}}}function vt(t,e,i){let l,n=window,s,r,a,o,c=Te();n.allReady=async()=>{if(i(1,s=n._get_image_width()),i(2,r=n._get_image_height()),n.FS.mkdir("/persist"),n.FS.mount(n.IDBFS,{},"/persist"),await new Promise(m=>n.FS.syncfs(!0,m)),!n.FS.analyzePath("/persist/r.rom").exists){c("norom");return}n._start_emu(n.allocateUTF8("/persist/r.rom"),n.allocateUTF8("/persist/i.img")),c("loaded")},n.frame=(d,m)=>{let v=o.getContext("2d"),_=new Uint8ClampedArray(n.Module.HEAPU8.buffer,d,m),K=new ImageData(_,n._get_image_width(),n._get_image_height());v.putImageData(K,0,0)},n.brightness=d=>{i(3,a=d)};var f=0,u=0,k=0;function h(){i(6,u=me.innerHeight),i(0,k=me.innerWidth)}function y(d){de[d?"unshift":"push"](()=>{o=d,i(4,o)})}function w(){f=this.clientWidth,i(5,f)}return t.$$.update=()=>{t.$$.dirty&1&&i(7,l=k<700)},[k,s,r,a,o,f,u,l,h,y,w]}class wt extends G{constructor(e){super(),P(this,e,vt,bt,q,{})}}const{window:V}=ve;function Ae(t){let e,i,l,n;return e=new Re({props:{keyHistory:t[5],maxWidth:t[7]}}),l=new Ne({}),{c(){B(e.$$.fragment),i=D(),B(l.$$.fragment)},m(s,r){F(e,s,r),H(s,i,r),F(l,s,r),n=!0},p(s,r){const a={};r&32&&(a.keyHistory=s[5]),r&128&&(a.maxWidth=s[7]),e.$set(a)},i(s){n||($(e.$$.fragment,s),$(l.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),z(l.$$.fragment,s),n=!1},d(s){C(e,s),s&&W(i),C(l,s)}}}function Le(t){let e,i,l;return{c(){e=x("div"),e.innerHTML='<div class="line svelte-gr2wc1"></div>',g(e,"class","divider svelte-gr2wc1")},m(n,s){H(n,e,s),i||(l=S(e,"mousedown",t[17]),i=!0)},p:A,d(n){n&&W(e),i=!1,l()}}}function Fe(t){let e,i,l,n;return e=new Re({props:{keyHistory:t[5],maxWidth:t[8]}}),l=new Ne({}),{c(){B(e.$$.fragment),i=D(),B(l.$$.fragment)},m(s,r){F(e,s,r),H(s,i,r),F(l,s,r),n=!0},p(s,r){const a={};r&32&&(a.keyHistory=s[5]),r&256&&(a.maxWidth=s[8]),e.$set(a)},i(s){n||($(e.$$.fragment,s),$(l.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),z(l.$$.fragment,s),n=!1},d(s){C(e,s),s&&W(i),C(l,s)}}}function xt(t){let e,i,l,n,s,r,a,o,c,f,u,k,h,y,w;M(t[13]),s=new wt({}),s.$on("norom",t[14]),s.$on("loaded",t[15]);let d=t[8]>700&&Ae(t),m=t[8]>700&&Le(t);u=new _t({props:{keypress:t[9]}});let v=t[8]<=700&&Fe(t);return{c(){e=x("div"),i=x("div"),l=x("div"),n=x("div"),B(s.$$.fragment),a=D(),d&&d.c(),o=D(),m&&m.c(),c=D(),f=x("div"),B(u.$$.fragment),k=D(),v&&v.c(),M(()=>t[16].call(n)),p(l,"flex-grow","1"),p(l,"flex-basis","0"),g(l,"class","svelte-gr2wc1"),T(l,"scroll",t[8]>700),p(f,"width",t[4]==null||innerWidth<700?innerWidth<700?"100%":`${t[8]/2}px`:`${t[4]}px`),p(f,"flex-shrink","0"),g(i,"class","calc svelte-gr2wc1"),T(i,"mobile",innerWidth<700),p(e,"height","100%"),g(e,"class","svelte-gr2wc1"),T(e,"scroll",t[8]<=700)},m(_,K){H(_,e,K),b(e,i),b(i,l),b(l,n),F(s,n,null),r=X(n,t[16].bind(n)),b(l,a),d&&d.m(l,null),b(i,o),m&&m.m(i,null),b(i,c),b(i,f),F(u,f,null),t[18](f),b(e,k),v&&v.m(e,null),h=!0,y||(w=[S(V,"keydown",t[10]),S(V,"keyup",t[10]),S(V,"mousemove",t[11]),S(V,"mouseup",t[12]),S(V,"resize",t[13])],y=!0)},p(_,[K]){_[8]>700?d?(d.p(_,K),K&256&&$(d,1)):(d=Ae(_),d.c(),$(d,1),d.m(l,null)):d&&(J(),z(d,1,1,()=>{d=null}),Y()),(!h||K&256)&&T(l,"scroll",_[8]>700),_[8]>700?m?m.p(_,K):(m=Le(_),m.c(),m.m(i,c)):m&&(m.d(1),m=null),(!h||K&272)&&p(f,"width",_[4]==null||innerWidth<700?innerWidth<700?"100%":`${_[8]/2}px`:`${_[4]}px`),(!h||K&0)&&T(i,"mobile",innerWidth<700),_[8]<=700?v?(v.p(_,K),K&256&&$(v,1)):(v=Fe(_),v.c(),$(v,1),v.m(e,null)):v&&(J(),z(v,1,1,()=>{v=null}),Y()),(!h||K&256)&&T(e,"scroll",_[8]<=700)},i(_){h||($(s.$$.fragment,_),$(d),$(u.$$.fragment,_),$(v),h=!0)},o(_){z(s.$$.fragment,_),z(d),z(u.$$.fragment,_),z(v),h=!1},d(_){_&&W(e),C(s),r(),d&&d.d(),m&&m.d(),C(u),t[18](null),v&&v.d(),y=!1,U(w)}}}function kt(t,e,i){let l,n=[],s=window;function r(E){if(!E.physical){const I=ee.find(N=>N.physical!=null&&N.tix==E.tix&&N.tiy==E.tiy);if(I!=null)E=I;else return}n.unshift(E),n.length>50&&n.splice(50),i(5,n)}function a(E,I){I&&r(E),s._send_event(E.tix,E.tiy,I)}function o(E){let I=E.code.replace("Numpad","Digit");const N=ee.find(xe=>xe.code==I&&xe.shift==E.shiftKey&&!E.ctrlKey);N!=null&&(a(N,E.type=="keydown"),E.preventDefault())}let c=null,f,u=parseInt(localStorage.getItem("slider"));function k(E){c!=null&&(E.preventDefault(),i(1,f=E.clientX-c))}let h=0,y,w=0,d;const m=E=>{i(2,u=l),localStorage.setItem("slider",u.toString()),i(0,c=null)};function v(){i(8,d=V.innerWidth)}function _(E){$e.call(this,t,E)}function K(E){$e.call(this,t,E)}function O(){w=this.clientWidth,i(7,w)}const se=E=>{i(3,h=y.clientWidth),i(1,f=0),i(0,c=E.clientX)};function re(E){de[E?"unshift":"push"](()=>{y=E,i(6,y)})}return t.$$.update=()=>{t.$$.dirty&15&&i(4,l=c!=null?h-f:u),t.$$.dirty&16&&console.log(l)},[c,f,u,h,l,n,y,w,d,a,o,k,m,v,_,K,O,se,re]}class $t extends G{constructor(e){super(),P(this,e,kt,xt,q,{})}}function Et(t){let e,i,l,n,s,r,a,o,c;return{c(){e=x("div"),i=x("div"),l=x("div"),l.textContent="Welcome!",n=D(),s=x("p"),s.innerHTML="To start, you need a ROM. <br/>Google is your friend.",r=D(),a=x("button"),a.textContent="Choose ROM",p(l,"font-size","60px"),g(a,"class","svelte-1qw3z4g"),p(i,"margin","auto"),p(i,"position","relative"),p(i,"top","-10%"),p(i,"padding","30px"),p(e,"display","flex"),p(e,"height","100%"),p(e,"text-align","center")},m(f,u){H(f,e,u),b(e,i),b(i,l),b(i,n),b(i,s),b(i,r),b(i,a),o||(c=S(a,"click",t[0]),o=!0)},p:A,i:A,o:A,d(f){f&&W(e),o=!1,c()}}}function Wt(t){const e=Te();function i(){Oe(()=>{e("chosen")})}return[i]}class zt extends G{constructor(e){super(),P(this,e,Wt,Et,q,{})}}function Ce(t){let e,i;return e=new zt({}),e.$on("chosen",t[4]),{c(){B(e.$$.fragment)},m(l,n){F(e,l,n),i=!0},p:A,i(l){i||($(e.$$.fragment,l),i=!0)},o(l){z(e.$$.fragment,l),i=!1},d(l){C(e,l)}}}function Ht(t){let e,i,l,n,s;i=new $t({}),i.$on("norom",t[2]),i.$on("loaded",t[3]);let r=!t[1]&&Ce(t);return{c(){e=x("div"),B(i.$$.fragment),l=D(),r&&r.c(),n=Be(),p(e,"display",t[1]?"block":"none"),p(e,"height","100%")},m(a,o){H(a,e,o),F(i,e,null),H(a,l,o),r&&r.m(a,o),H(a,n,o),s=!0},p(a,[o]){(!s||o&2)&&p(e,"display",a[1]?"block":"none"),a[1]?r&&(J(),z(r,1,1,()=>{r=null}),Y()):r?(r.p(a,o),o&2&&$(r,1)):(r=Ce(a),r.c(),$(r,1),r.m(n.parentNode,n))},i(a){s||($(i.$$.fragment,a),$(r),s=!0)},o(a){z(i.$$.fragment,a),z(r),s=!1},d(a){a&&W(e),C(i),a&&W(l),r&&r.d(a),a&&W(n)}}}function Kt(t,e,i){let l=!0,n=!0;return[l,n,()=>i(1,n=!1),()=>l,()=>i(1,n=i(0,l=!0))]}class Dt extends G{constructor(e){super(),P(this,e,Kt,Ht,q,{})}}new Dt({target:document.getElementById("app")});
