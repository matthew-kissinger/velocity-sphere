(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const ah="modulepreload",lh=function(r){return"/"+r},Yo={},Bt=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(l=>{if(l=lh(l),l in Yo)return;Yo[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ah,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},bo=(r,t,e)=>{const n=r[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="158",li={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ch=0,Ko=1,hh=2,sc=1,rc=2,Mn=3,bn=0,Ce=1,tn=2,On=0,ti=1,$o=2,Zo=3,Jo=4,uh=5,$n=100,dh=101,fh=102,Qo=103,ta=104,ph=200,mh=201,gh=202,vh=203,ho=204,uo=205,_h=206,xh=207,yh=208,Sh=209,Mh=210,Eh=211,wh=212,bh=213,Th=214,Ah=0,Ch=1,Rh=2,rr=3,Ph=4,Lh=5,Ih=6,Dh=7,oc=0,Nh=1,Uh=2,Bn=0,Fh=1,Oh=2,Bh=3,ac=4,zh=5,lc=300,Di=301,Ni=302,fo=303,po=304,dr=306,Qn=1e3,en=1001,mo=1002,De=1003,ea=1004,Sr=1005,qe=1006,kh=1007,ls=1008,zn=1009,Hh=1010,Gh=1011,Ao=1012,cc=1013,Un=1014,Fn=1015,cs=1016,hc=1017,uc=1018,ei=1020,Vh=1021,nn=1023,Wh=1024,qh=1025,ni=1026,Ui=1027,Xh=1028,dc=1029,jh=1030,fc=1031,pc=1033,Mr=33776,Er=33777,wr=33778,br=33779,na=35840,ia=35841,sa=35842,ra=35843,Yh=36196,oa=37492,aa=37496,la=37808,ca=37809,ha=37810,ua=37811,da=37812,fa=37813,pa=37814,ma=37815,ga=37816,va=37817,_a=37818,xa=37819,ya=37820,Sa=37821,Tr=36492,Ma=36494,Ea=36495,Kh=36283,wa=36284,ba=36285,Ta=36286,mc=3e3,ii=3001,$h=3200,Zh=3201,gc=0,Jh=1,Xe="",Me="srgb",Tn="srgb-linear",Co="display-p3",fr="display-p3-linear",or="linear",se="srgb",ar="rec709",lr="p3",hi=7680,Aa=519,Qh=512,tu=513,eu=514,nu=515,iu=516,su=517,ru=518,ou=519,Ca=35044,Ra="300 es",go=1035,wn=2e3,cr=2001;class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,vo=180/Math.PI;function zi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[r&255]+be[r>>8&255]+be[r>>16&255]+be[r>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Ee(r,t,e){return Math.max(t,Math.min(e,r))}function au(r,t){return(r%t+t)%t}function Ar(r,t,e){return(1-e)*r+e*t}function Pa(r){return(r&r-1)===0&&r!==0}function _o(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const lu={DEG2RAD:ir};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,s,o,a,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],_=i[4],y=i[7],E=i[2],b=i[5],A=i[8];return s[0]=o*v+a*x+l*E,s[3]=o*m+a*_+l*b,s[6]=o*p+a*y+l*A,s[1]=c*v+h*x+d*E,s[4]=c*m+h*_+d*b,s[7]=c*p+h*y+d*A,s[2]=u*v+f*x+g*E,s[5]=u*m+f*_+g*b,s[8]=u*p+f*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cr.makeScale(t,e)),this}rotate(t){return this.premultiply(Cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new Xt;function vc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cu(){const r=hr("canvas");return r.style.display="block",r}const La={};function is(r){r in La||(La[r]=!0,console.warn(r))}const Ia=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Da=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ys={[Tn]:{transfer:or,primaries:ar,toReference:r=>r,fromReference:r=>r},[Me]:{transfer:se,primaries:ar,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fr]:{transfer:or,primaries:lr,toReference:r=>r.applyMatrix3(Da),fromReference:r=>r.applyMatrix3(Ia)},[Co]:{transfer:se,primaries:lr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Da),fromReference:r=>r.applyMatrix3(Ia).convertLinearToSRGB()}},hu=new Set([Tn,fr]),te={enabled:!0,_workingColorSpace:Tn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!hu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ys[t].toReference,i=ys[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ys[r].primaries},getTransfer:function(r){return r===Xe?or:ys[r].transfer}};function Li(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ui;class _c{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=hr("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Li(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uu=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=zi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Pr(i[o].image)):s.push(Pr(i[o]))}else s=Pr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Pr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let du=0;class Be extends oi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=en,i=en,s=qe,o=ls,a=nn,l=zn,c=Be.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=zi(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ii?Me:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Me?ii:mc}set encoding(t){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ii?Me:Xe}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=lc;Be.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(f+1)/2,E=(p+1)/2,b=(h+u)/4,A=(d+v)/4,I=(g+m)/4;return _>y&&_>E?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=b/n,s=A/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=I/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=I/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ii?Me:Xe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yc extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pu extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let An=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),b=Math.atan2(E,p*x);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const y=a*x;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+v*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new L,Na=new An;class ai{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(s,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),Ms.subVectors(this.max,qi),di.subVectors(t.a,qi),fi.subVectors(t.b,qi),pi.subVectors(t.c,qi),Cn.subVectors(fi,di),Rn.subVectors(pi,fi),Gn.subVectors(di,pi);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Gn.z,Gn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Gn.z,0,-Gn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Gn.y,Gn.x,0];return!Ir(e,di,fi,pi,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Ir(e,di,fi,pi,Ms))?!1:(Es.crossVectors(Cn,Rn),e=[Es.x,Es.y,Es.z],Ir(e,di,fi,pi,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new L,new L,new L,new L,new L,new L,new L,new L],Ye=new L,Ss=new ai,di=new L,fi=new L,pi=new L,Cn=new L,Rn=new L,Gn=new L,qi=new L,Ms=new L,Es=new L,Vn=new L;function Ir(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Vn.fromArray(r,s);const a=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const mu=new ai,Xi=new L,Dr=new L;let ki=class{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xi.subVectors(t,this.center);const e=Xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xi.copy(t.center).add(Dr)),this.expandByPoint(Xi.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const pn=new L,Nr=new L,ws=new L,Pn=new L,Ur=new L,bs=new L,Fr=new L;let Ro=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Nr.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(Nr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Pn.dot(this.direction),l=-Pn.dot(ws),c=Pn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Nr).addScaledVector(ws,u),f}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,s){Ur.subVectors(e,t),bs.subVectors(n,t),Fr.crossVectors(Ur,bs);let o=this.direction.dot(Fr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const l=a*this.direction.dot(bs.crossVectors(Pn,bs));if(l<0)return null;const c=a*this.direction.dot(Ur.cross(Pn));if(c<0||l+c>o)return null;const h=-a*Pn.dot(Fr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ee{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/mi.setFromMatrixColumn(t,0).length(),s=1/mi.setFromMatrixColumn(t,1).length(),o=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gu,t,vu)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Ln.crossVectors(n,He),Ln.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Ln.crossVectors(n,He)),Ln.normalize(),Ts.crossVectors(He,Ln),i[0]=Ln.x,i[4]=Ts.x,i[8]=He.x,i[1]=Ln.y,i[5]=Ts.y,i[9]=He.y,i[2]=Ln.z,i[6]=Ts.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],_=n[7],y=n[11],E=n[15],b=i[0],A=i[4],I=i[8],S=i[12],w=i[1],B=i[5],H=i[9],O=i[13],R=i[2],D=i[6],U=i[10],q=i[14],Y=i[3],W=i[7],J=i[11],z=i[15];return s[0]=o*b+a*w+l*R+c*Y,s[4]=o*A+a*B+l*D+c*W,s[8]=o*I+a*H+l*U+c*J,s[12]=o*S+a*O+l*q+c*z,s[1]=h*b+d*w+u*R+f*Y,s[5]=h*A+d*B+u*D+f*W,s[9]=h*I+d*H+u*U+f*J,s[13]=h*S+d*O+u*q+f*z,s[2]=g*b+v*w+m*R+p*Y,s[6]=g*A+v*B+m*D+p*W,s[10]=g*I+v*H+m*U+p*J,s[14]=g*S+v*O+m*q+p*z,s[3]=x*b+_*w+y*R+E*Y,s[7]=x*A+_*B+y*D+E*W,s[11]=x*I+_*H+y*U+E*J,s[15]=x*S+_*O+y*q+E*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+v*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+m*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=d*m*c-v*u*c+v*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*v*c-g*d*c+g*a*f-o*v*f-h*a*p+o*d*p,E=g*d*l-h*v*l-g*a*u+o*v*u+h*a*m-o*d*m,b=e*x+n*_+i*y+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=x*A,t[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*A,t[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*p+n*l*p)*A,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*A,t[4]=_*A,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*A,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*A,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*A,t[8]=y*A,t[9]=(g*d*s-h*v*s-g*n*f+e*v*f+h*n*p-e*d*p)*A,t[10]=(o*v*s-g*a*s+g*n*c-e*v*c-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*A,t[12]=E*A,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*A,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*A,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,v=o*h,m=o*d,p=a*d,x=l*c,_=l*h,y=l*d,E=n.x,b=n.y,A=n.z;return i[0]=(1-(v+p))*E,i[1]=(f+y)*E,i[2]=(g-_)*E,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+_)*A,i[9]=(m-x)*A,i[10]=(1-(u+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=mi.set(i[0],i[1],i[2]).length();const o=mi.set(i[4],i[5],i[6]).length(),a=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ke.copy(this);const c=1/s,h=1/o,d=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=wn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===wn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=wn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,f=(n+i)*h;let g,v;if(a===wn)g=(o+s)*d,v=-2*d;else if(a===cr)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new L,Ke=new ee,gu=new L(0,0,0),vu=new L(1,1,1),Ln=new L,Ts=new L,He=new L,Ua=new ee,Fa=new An;class ps{constructor(t=0,e=0,n=0,i=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fa.setFromEuler(this),this.setFromQuaternion(Fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _u=0;const Oa=new L,gi=new An,mn=new ee,As=new L,ji=new L,xu=new L,yu=new An,Ba=new L(1,0,0),za=new L(0,1,0),ka=new L(0,0,1),Su={type:"added"},Mu={type:"removed"};class we extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new L,e=new ps,n=new An,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Xt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Ba,t)}rotateY(t){return this.rotateOnAxis(za,t)}rotateZ(t){return this.rotateOnAxis(ka,t)}translateOnAxis(t,e){return Oa.copy(t).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ba,t)}translateY(t){return this.translateOnAxis(za,t)}translateZ(t){return this.translateOnAxis(ka,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ji,As,this.up):mn.lookAt(As,ji,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(mn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new L(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new L,gn=new L,Or=new L,vn=new L,vi=new L,_i=new L,Ha=new L,Br=new L,zr=new L,kr=new L;let Cs=!1;class Qe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){$e.subVectors(i,e),gn.subVectors(n,e),Or.subVectors(t,e);const o=$e.dot($e),a=$e.dot(gn),l=$e.dot(Or),c=gn.dot(gn),h=gn.dot(Or),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(t,e,n,i,s,o,a,l){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,vn),l.setScalar(0),l.addScaledVector(s,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),gn.subVectors(t,e),$e.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),$e.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;vi.subVectors(i,n),_i.subVectors(s,n),Br.subVectors(t,n);const l=vi.dot(Br),c=_i.dot(Br);if(l<=0&&c<=0)return e.copy(n);zr.subVectors(t,i);const h=vi.dot(zr),d=_i.dot(zr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(vi,o);kr.subVectors(t,s);const f=vi.dot(kr),g=_i.dot(kr);if(g>=0&&f<=g)return e.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_i,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Ha.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Ha,a);const p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(vi,o).addScaledVector(_i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Hr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=au(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Hr(o,s,t+1/3),this.g=Hr(o,s,t),this.b=Hr(o,s,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return te.fromWorkingColorSpace(Te.copy(this),t),Math.round(Ee(Te.r*255,0,255))*65536+Math.round(Ee(Te.g*255,0,255))*256+Math.round(Ee(Te.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,s=Te.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Me){te.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Rs);const n=Ar(In.h,Rs.h,e),i=Ar(In.s,Rs.s,e),s=Ar(In.l,Rs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new jt;jt.NAMES=Mc;let Eu=0,Hi=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=ti,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Aa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Aa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ii extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new L,Ps=new rt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ca,this.updateRange={offset:0,count:-1},this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ca&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Ec extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wc extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wu=0;const We=new ee,Gr=new we,xi=new L,Ge=new ai,Yi=new ai,Se=new L;class Ne extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vc(t)?wc:Ec)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Gr.lookAt(t),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Yi.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ge.min,Yi.min),Ge.expandByPoint(Se),Se.addVectors(Ge.max,Yi.max),Ge.expandByPoint(Se)):(Ge.expandByPoint(Yi.min),Ge.expandByPoint(Yi.max))}Ge.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(xi.fromBufferAttribute(t,c),Se.add(xi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new L,h[w]=new L;const d=new L,u=new L,f=new L,g=new rt,v=new rt,m=new rt,p=new L,x=new L;function _(w,B,H){d.fromArray(i,w*3),u.fromArray(i,B*3),f.fromArray(i,H*3),g.fromArray(o,w*2),v.fromArray(o,B*2),m.fromArray(o,H*2),u.sub(d),f.sub(d),v.sub(g),m.sub(g);const O=1/(v.x*m.y-m.x*v.y);isFinite(O)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(O),x.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(O),c[w].add(p),c[B].add(p),c[H].add(p),h[w].add(x),h[B].add(x),h[H].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,B=y.length;w<B;++w){const H=y[w],O=H.start,R=H.count;for(let D=O,U=O+R;D<U;D+=3)_(n[D+0],n[D+1],n[D+2])}const E=new L,b=new L,A=new L,I=new L;function S(w){A.fromArray(s,w*3),I.copy(A);const B=c[w];E.copy(B),E.sub(A.multiplyScalar(A.dot(B))).normalize(),b.crossVectors(I,B);const O=b.dot(h[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=O}for(let w=0,B=y.length;w<B;++w){const H=y[w],O=H.start,R=H.count;for(let D=O,U=O+R;D<U;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Re(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new ee,Wn=new Ro,Ls=new ki,Va=new L,yi=new L,Si=new L,Mi=new L,Vr=new L,Is=new L,Ds=new rt,Ns=new rt,Us=new rt,Wa=new L,qa=new L,Xa=new L,Fs=new L,Os=new L;class Qt extends we{constructor(t=new Ne,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Vr.fromBufferAttribute(d,t),o?Is.addScaledVector(Vr,h):Is.addScaledVector(Vr.sub(e),h))}e.add(Is)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Wn.copy(t.ray).recast(t.near),!(Ls.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ls,Va)===null||Wn.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(Ga.copy(s).invert(),Wn.copy(t.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){const b=a.getX(y),A=a.getX(y+1),I=a.getX(y+2);i=Bs(this,p,t,n,c,h,d,b,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=Bs(this,o,t,n,c,h,d,x,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){const b=y,A=y+1,I=y+2;i=Bs(this,p,t,n,c,h,d,b,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,y=m+2;i=Bs(this,o,t,n,c,h,d,x,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function bu(r,t,e,n,i,s,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===bn,a),l===null)return null;Os.copy(a),Os.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:r}}function Bs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,yi),r.getVertexPosition(l,Si),r.getVertexPosition(c,Mi);const h=bu(r,t,e,n,yi,Si,Mi,Fs);if(h){i&&(Ds.fromBufferAttribute(i,a),Ns.fromBufferAttribute(i,l),Us.fromBufferAttribute(i,c),h.uv=Qe.getInterpolation(Fs,yi,Si,Mi,Ds,Ns,Us,new rt)),s&&(Ds.fromBufferAttribute(s,a),Ns.fromBufferAttribute(s,l),Us.fromBufferAttribute(s,c),h.uv1=Qe.getInterpolation(Fs,yi,Si,Mi,Ds,Ns,Us,new rt),h.uv2=h.uv1),o&&(Wa.fromBufferAttribute(o,a),qa.fromBufferAttribute(o,l),Xa.fromBufferAttribute(o,c),h.normal=Qe.getInterpolation(Fs,yi,Si,Mi,Wa,qa,Xa,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Qe.getNormal(yi,Si,Mi,d.normal),h.face=d}return h}class Ae extends Ne{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function g(v,m,p,x,_,y,E,b,A,I,S){const w=y/A,B=E/I,H=y/2,O=E/2,R=b/2,D=A+1,U=I+1;let q=0,Y=0;const W=new L;for(let J=0;J<U;J++){const z=J*B-O;for(let G=0;G<D;G++){const dt=G*w-H;W[v]=dt*x,W[m]=z*_,W[p]=R,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(G/A),d.push(1-J/I),q+=1}}for(let J=0;J<I;J++)for(let z=0;z<A;z++){const G=u+z+D*J,dt=u+z+D*(J+1),mt=u+(z+1)+D*(J+1),xt=u+(z+1)+D*J;l.push(G,dt,xt),l.push(dt,mt,xt),Y+=6}a.addGroup(f,Y,S),f+=Y,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(r){const t={};for(let e=0;e<r.length;e++){const n=Fi(r[e]);for(const i in n)t[i]=n[i]}return t}function Tu(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function bc(r){return r.getRenderTarget()===null?r.outputColorSpace:te.workingColorSpace}const Au={clone:Fi,merge:Ie};var Cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class je extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let Tc=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Oe extends Tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,wi=1;class Pu extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(Ei,wi,t,e);i.layers=this.layers,this.add(i);const s=new Oe(Ei,wi,t,e);s.layers=this.layers,this.add(s);const o=new Oe(Ei,wi,t,e);o.layers=this.layers,this.add(o);const a=new Oe(Ei,wi,t,e);a.layers=this.layers,this.add(a);const l=new Oe(Ei,wi,t,e);l.layers=this.layers,this.add(l);const c=new Oe(Ei,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ac extends Be{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lu extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ii?Me:Xe),this.texture=new Ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ae(5,5,5),s=new je({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:On});s.uniforms.tEquirect.value=e;const o=new Qt(i,s),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=qe),new Pu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Wr=new L,Iu=new L,Du=new Xt;class Nn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Wr.subVectors(n,e).cross(Iu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Du.getNormalMatrix(t),i=this.coplanarPoint(Wr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ki,zs=new L;class Po{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,s=new Nn,o=new Nn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,m-f,y-p).normalize(),n[1].setComponents(l+s,u+c,m+f,y+p).normalize(),n[2].setComponents(l+o,u+h,m+g,y+x).normalize(),n[3].setComponents(l-o,u-h,m-g,y-x).normalize(),n[4].setComponents(l-a,u-d,m-v,y-_).normalize(),e===wn)n[5].setComponents(l+a,u+d,m+v,y+_).normalize();else if(e===cr)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zs.x=i.normal.x>0?t.max.x:t.min.x,zs.y=i.normal.y>0?t.max.y:t.min.y,zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Nu(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,u):(e?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class hs extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*u-o;for(let _=0;_<c;_++){const y=_*d-s;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,y=x+c*(p+1),E=x+1+c*(p+1),b=x+1+c*p;f.push(_,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ku=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",hd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ep=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Uu,alphahash_pars_fragment:Fu,alphamap_fragment:Ou,alphamap_pars_fragment:Bu,alphatest_fragment:zu,alphatest_pars_fragment:ku,aomap_fragment:Hu,aomap_pars_fragment:Gu,begin_vertex:Vu,beginnormal_vertex:Wu,bsdfs:qu,iridescence_fragment:Xu,bumpmap_pars_fragment:ju,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Zu,color_fragment:Ju,color_pars_fragment:Qu,color_pars_vertex:td,color_vertex:ed,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:sd,displacementmap_pars_vertex:rd,displacementmap_vertex:od,emissivemap_fragment:ad,emissivemap_pars_fragment:ld,colorspace_fragment:cd,colorspace_pars_fragment:hd,envmap_fragment:ud,envmap_common_pars_fragment:dd,envmap_pars_fragment:fd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Td,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:vd,fog_fragment:_d,fog_pars_fragment:xd,gradientmap_pars_fragment:yd,lightmap_fragment:Sd,lightmap_pars_fragment:Md,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:wd,lights_pars_begin:bd,lights_toon_fragment:Ad,lights_toon_pars_fragment:Cd,lights_phong_fragment:Rd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Id,lights_fragment_begin:Dd,lights_fragment_maps:Nd,lights_fragment_end:Ud,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:zd,map_fragment:kd,map_pars_fragment:Hd,map_particle_fragment:Gd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:qd,morphcolor_vertex:Xd,morphnormal_vertex:jd,morphtarget_pars_vertex:Yd,morphtarget_vertex:Kd,normal_fragment_begin:$d,normal_fragment_maps:Zd,normal_pars_fragment:Jd,normal_pars_vertex:Qd,normal_vertex:tf,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:of,opaque_fragment:af,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:vf,shadowmask_pars_fragment:_f,skinbase_vertex:xf,skinning_pars_vertex:yf,skinning_vertex:Sf,skinnormal_vertex:Mf,specularmap_fragment:Ef,specularmap_pars_fragment:wf,tonemapping_fragment:bf,tonemapping_pars_fragment:Tf,transmission_fragment:Af,transmission_pars_fragment:Cf,uv_pars_fragment:Rf,uv_pars_vertex:Pf,uv_vertex:Lf,worldpos_vertex:If,background_vert:Df,background_frag:Nf,backgroundCube_vert:Uf,backgroundCube_frag:Ff,cube_vert:Of,cube_frag:Bf,depth_vert:zf,depth_frag:kf,distanceRGBA_vert:Hf,distanceRGBA_frag:Gf,equirect_vert:Vf,equirect_frag:Wf,linedashed_vert:qf,linedashed_frag:Xf,meshbasic_vert:jf,meshbasic_frag:Yf,meshlambert_vert:Kf,meshlambert_frag:$f,meshmatcap_vert:Zf,meshmatcap_frag:Jf,meshnormal_vert:Qf,meshnormal_frag:tp,meshphong_vert:ep,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:op,points_vert:ap,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:dp},pt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},hn={basic:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ie([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ie([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ie([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ie([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ie([pt.points,pt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ie([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ie([pt.common,pt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ie([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ie([pt.sprite,pt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ie([pt.common,pt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ie([pt.lights,pt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};hn.physical={uniforms:Ie([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ks={r:0,b:0,g:0};function fp(r,t,e,n,i,s,o){const a=new jt(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===dr)?(h===void 0&&(h=new Qt(new Ae(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Fi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=te.getTransfer(_.colorSpace)!==se,(d!==_||u!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Qt(new hs(2,2),new je({name:"BackgroundMaterial",uniforms:Fi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(ks,bc(r)),n.buffers.color.setClear(ks.r,ks.g,ks.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function pp(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function d(R,D,U,q,Y){let W=!1;if(o){const J=v(q,U,D);c!==J&&(c=J,f(c.object)),W=p(R,q,U,Y),W&&x(R,q,U,Y)}else{const J=D.wireframe===!0;(c.geometry!==q.id||c.program!==U.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=U.id,c.wireframe=J,W=!0)}Y!==null&&e.update(Y,r.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(R,D,U,q),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,D,U){const q=U.wireframe===!0;let Y=a[R.id];Y===void 0&&(Y={},a[R.id]=Y);let W=Y[D.id];W===void 0&&(W={},Y[D.id]=W);let J=W[q];return J===void 0&&(J=m(u()),W[q]=J),J}function m(R){const D=[],U=[],q=[];for(let Y=0;Y<i;Y++)D[Y]=0,U[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:q,object:R,attributes:{},index:null}}function p(R,D,U,q){const Y=c.attributes,W=D.attributes;let J=0;const z=U.getAttributes();for(const G in z)if(z[G].location>=0){const mt=Y[G];let xt=W[G];if(xt===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),mt===void 0||mt.attribute!==xt||xt&&mt.data!==xt.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function x(R,D,U,q){const Y={},W=D.attributes;let J=0;const z=U.getAttributes();for(const G in z)if(z[G].location>=0){let mt=W[G];mt===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor));const xt={};xt.attribute=mt,mt&&mt.data&&(xt.data=mt.data),Y[G]=xt,J++}c.attributes=Y,c.attributesNum=J,c.index=q}function _(){const R=c.newAttributes;for(let D=0,U=R.length;D<U;D++)R[D]=0}function y(R){E(R,0)}function E(R,D){const U=c.newAttributes,q=c.enabledAttributes,Y=c.attributeDivisors;U[R]=1,q[R]===0&&(r.enableVertexAttribArray(R),q[R]=1),Y[R]!==D&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,D),Y[R]=D)}function b(){const R=c.newAttributes,D=c.enabledAttributes;for(let U=0,q=D.length;U<q;U++)D[U]!==R[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function A(R,D,U,q,Y,W,J){J===!0?r.vertexAttribIPointer(R,D,U,Y,W):r.vertexAttribPointer(R,D,U,q,Y,W)}function I(R,D,U,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const Y=q.attributes,W=U.getAttributes(),J=D.defaultAttributeValues;for(const z in W){const G=W[z];if(G.location>=0){let dt=Y[z];if(dt===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),dt!==void 0){const mt=dt.normalized,xt=dt.itemSize,Rt=e.get(dt);if(Rt===void 0)continue;const Dt=Rt.buffer,It=Rt.type,zt=Rt.bytesPerElement,Zt=n.isWebGL2===!0&&(It===r.INT||It===r.UNSIGNED_INT||dt.gpuType===cc);if(dt.isInterleavedBufferAttribute){const Nt=dt.data,N=Nt.stride,ut=dt.offset;if(Nt.isInstancedInterleavedBuffer){for(let Q=0;Q<G.locationSize;Q++)E(G.location+Q,Nt.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Q=0;Q<G.locationSize;Q++)y(G.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let Q=0;Q<G.locationSize;Q++)A(G.location+Q,xt/G.locationSize,It,mt,N*zt,(ut+xt/G.locationSize*Q)*zt,Zt)}else{if(dt.isInstancedBufferAttribute){for(let Nt=0;Nt<G.locationSize;Nt++)E(G.location+Nt,dt.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Nt=0;Nt<G.locationSize;Nt++)y(G.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,Dt);for(let Nt=0;Nt<G.locationSize;Nt++)A(G.location+Nt,xt/G.locationSize,It,mt,xt*zt,xt/G.locationSize*Nt*zt,Zt)}}else if(J!==void 0){const mt=J[z];if(mt!==void 0)switch(mt.length){case 2:r.vertexAttrib2fv(G.location,mt);break;case 3:r.vertexAttrib3fv(G.location,mt);break;case 4:r.vertexAttrib4fv(G.location,mt);break;default:r.vertexAttrib1fv(G.location,mt)}}}}b()}function S(){H();for(const R in a){const D=a[R];for(const U in D){const q=D[U];for(const Y in q)g(q[Y].object),delete q[Y];delete D[U]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;const D=a[R.id];for(const U in D){const q=D[U];for(const Y in q)g(q[Y].object),delete q[Y];delete D[U]}delete a[R.id]}function B(R){for(const D in a){const U=a[D];if(U[R.id]===void 0)continue;const q=U[R.id];for(const Y in q)g(q[Y].object),delete q[Y];delete U[R.id]}}function H(){O(),h=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:H,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:y,disableUnusedAttributes:b}}function mp(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=r,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),e.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function gp(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,y=o||t.has("OES_texture_float"),E=_&&y,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:b}}function vp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Nn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,_=x*4;let y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let E=0;E!==_;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function _p(r){let t=new WeakMap;function e(o,a){return a===fo?o.mapping=Di:a===po&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===fo||a===po)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lu(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Rc extends Tc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ri=4,ja=[.125,.215,.35,.446,.526,.582],Zn=20,qr=new Rc,Ya=new jt;let Xr=null,jr=0,Yr=0;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,Ka=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Kn,bi),new L(0,Kn,-bi),new L(bi,0,Kn),new L(-bi,0,Kn),new L(Kn,bi,0),new L(-Kn,bi,0)];class $a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Xr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,jr,Yr),t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:cs,format:nn,colorSpace:Tn,depthBuffer:!1},i=Za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xp(s)),this._blurMaterial=yp(s,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,i){const a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ya),h.toneMapping=Bn,h.autoClear=!1;const f=new Ii({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new Qt(new Ae,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ya),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Hs(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Di||t.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ja());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ka[(i-1)%Ka.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Zn;m>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const p=[];let x=0;for(let A=0;A<Zn;++A){const I=A/v,S=Math.exp(-I*I/2);p.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const y=this._sizeLods[i],E=3*y*(i>_-Ri?i-_+Ri:0),b=4*(this._cubeSize-y);Hs(e,E,b,3*y,2*y),l.setRenderTarget(e),l.render(d,qr)}}function xp(r){const t=[],e=[],n=[];let i=r;const s=r-Ri+1+ja.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ri?l=ja[o-r+Ri-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,I=b>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(S,v*g*b),_.set(u,m*g*b);const w=[b,b,b,b,b,b];y.set(w,p*g*b)}const E=new Ne;E.setAttribute("position",new Re(x,v)),E.setAttribute("uv",new Re(_,m)),E.setAttribute("faceIndex",new Re(y,p)),t.push(E),i>Ri&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Za(r,t,e){const n=new si(r,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function yp(r,t,e){const n=new Float32Array(Zn),i=new L(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ja(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Qa(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sp(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fo||l===po,h=l===Di||l===Ni;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new $a(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new $a(r));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Mp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ep(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){const E=x[_+0],b=x[_+1],A=x[_+2];u.push(E,b,b,A,A,E)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const E=_+0,b=_+1,A=_+2;u.push(E,b,b,A,A,E)}}else return;const m=new(vc(u)?wc:Ec)(u,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function wp(r,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){r.drawElements(s,f,a,u*l),e.update(f,s,1)}function d(u,f,g){if(g===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,f,a,u*l,g),e.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function bp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Tp(r,t){return r[0]-t[0]}function Ap(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Cp(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let R=function(){H.dispose(),s.delete(h),h.removeEventListener("dispose",R)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let I=0;x===!0&&(I=1),_===!0&&(I=2),y===!0&&(I=3);let S=h.attributes.position.count*I,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const B=new Float32Array(S*w*4*g),H=new yc(B,S,w,g);H.type=Fn,H.needsUpdate=!0;const O=I*4;for(let D=0;D<g;D++){const U=E[D],q=b[D],Y=A[D],W=S*w*4*D;for(let J=0;J<U.count;J++){const z=J*O;x===!0&&(o.fromBufferAttribute(U,J),B[W+z+0]=o.x,B[W+z+1]=o.y,B[W+z+2]=o.z,B[W+z+3]=0),_===!0&&(o.fromBufferAttribute(q,J),B[W+z+4]=o.x,B[W+z+5]=o.y,B[W+z+6]=o.z,B[W+z+7]=0),y===!0&&(o.fromBufferAttribute(Y,J),B[W+z+8]=o.x,B[W+z+9]=o.y,B[W+z+10]=o.z,B[W+z+11]=Y.itemSize===4?o.w:1)}}v={count:g,texture:H,size:new rt(S,w)},s.set(h,v),h.addEventListener("dispose",R)}let m=0;for(let x=0;x<u.length;x++)m+=u[x];const p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const f=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){const y=g[_];y[0]=_,y[1]=u[_]}g.sort(Ap);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Tp);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const y=a[_],E=y[0],b=y[1];E!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+_)!==v[E]&&h.setAttribute("morphTarget"+_,v[E]),m&&h.getAttribute("morphNormal"+_)!==m[E]&&h.setAttribute("morphNormal"+_,m[E]),i[_]=b,p+=b):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const x=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Rp(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Pc=new Be,Lc=new yc,Ic=new pu,Dc=new Ac,tl=[],el=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function Gi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=tl[i];if(s===void 0&&(s=new Float32Array(i),tl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function _e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function pr(r,t){let e=el[t];e===void 0&&(e=new Int32Array(t),el[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Pp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Lp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2fv(this.addr,t),xe(e,t)}}function Ip(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;r.uniform3fv(this.addr,t),xe(e,t)}}function Dp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4fv(this.addr,t),xe(e,t)}}function Np(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;sl.set(n),r.uniformMatrix2fv(this.addr,!1,sl),xe(e,n)}}function Up(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;il.set(n),r.uniformMatrix3fv(this.addr,!1,il),xe(e,n)}}function Fp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;nl.set(n),r.uniformMatrix4fv(this.addr,!1,nl),xe(e,n)}}function Op(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Bp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2iv(this.addr,t),xe(e,t)}}function zp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3iv(this.addr,t),xe(e,t)}}function kp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4iv(this.addr,t),xe(e,t)}}function Hp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2uiv(this.addr,t),xe(e,t)}}function Vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3uiv(this.addr,t),xe(e,t)}}function Wp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4uiv(this.addr,t),xe(e,t)}}function qp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Pc,i)}function Xp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ic,i)}function jp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Dc,i)}function Yp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lc,i)}function Kp(r){switch(r){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Np;case 35675:return Up;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return kp;case 5125:return Hp;case 36294:return Gp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return jp;case 36289:case 36303:case 36311:case 36292:return Yp}}function $p(r,t){r.uniform1fv(this.addr,t)}function Zp(r,t){const e=Gi(t,this.size,2);r.uniform2fv(this.addr,e)}function Jp(r,t){const e=Gi(t,this.size,3);r.uniform3fv(this.addr,e)}function Qp(r,t){const e=Gi(t,this.size,4);r.uniform4fv(this.addr,e)}function tm(r,t){const e=Gi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function em(r,t){const e=Gi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function nm(r,t){const e=Gi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function im(r,t){r.uniform1iv(this.addr,t)}function sm(r,t){r.uniform2iv(this.addr,t)}function rm(r,t){r.uniform3iv(this.addr,t)}function om(r,t){r.uniform4iv(this.addr,t)}function am(r,t){r.uniform1uiv(this.addr,t)}function lm(r,t){r.uniform2uiv(this.addr,t)}function cm(r,t){r.uniform3uiv(this.addr,t)}function hm(r,t){r.uniform4uiv(this.addr,t)}function um(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Pc,s[o])}function dm(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ic,s[o])}function fm(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Dc,s[o])}function pm(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);_e(n,s)||(r.uniform1iv(this.addr,s),xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Lc,s[o])}function mm(r){switch(r){case 5126:return $p;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}class gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Kp(e.type)}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=mm(e.type)}}class _m{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function rl(r,t){r.seq.push(t),r.map[t.id]=t}function xm(r,t,e){const n=r.name,i=n.length;for(Kr.lastIndex=0;;){const s=Kr.exec(n),o=Kr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rl(e,c===void 0?new gm(a,r,t):new vm(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new _m(a),rl(e,d)),e=d}}}class sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);xm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ol(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const ym=37297;let Sm=0;function Mm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Em(r){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(r);let n;switch(t===e?n="":t===lr&&e===ar?n="LinearDisplayP3ToLinearSRGB":t===ar&&e===lr&&(n="LinearSRGBToLinearDisplayP3"),r){case Tn:case fr:return[n,"LinearTransferOETF"];case Me:case Co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function al(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Mm(r.getShaderSource(t),o)}else return i}function wm(r,t){const e=Em(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function bm(r,t){let e;switch(t){case Fh:e="Linear";break;case Oh:e="Reinhard";break;case Bh:e="OptimizedCineon";break;case ac:e="ACESFilmic";break;case zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Tm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function Am(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ns(r){return r!==""}function ll(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(r){return r.replace(Rm,Lm)}const Pm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lm(r,t){let e=Vt[t];if(e===void 0){const n=Pm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xo(e)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(r){return r.replace(Im,Dm)}function Dm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ul(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function Um(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Di:case Ni:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function Om(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Nh:t="ENVMAP_BLENDING_MIX";break;case Uh:t="ENVMAP_BLENDING_ADD";break}return t}function Bm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Nm(e),c=Um(e),h=Fm(e),d=Om(e),u=Bm(e),f=e.isWebGL2?"":Tm(e),g=Am(s),v=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),p.length>0&&(p+=`
`)):(m=[ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),p=[f,ul(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?bm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=xo(o),o=ll(o,e),o=cl(o,e),a=xo(a),a=ll(a,e),a=cl(a,e),o=hl(o),a=hl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+o,y=x+p+a,E=ol(i,i.VERTEX_SHADER,_),b=ol(i,i.FRAGMENT_SHADER,y);i.attachShader(v,E),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(B){if(r.debug.checkShaderErrors){const H=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(E).trim(),R=i.getShaderInfoLog(b).trim();let D=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,E,b);else{const q=al(i,E,"vertex"),Y=al(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+q+`
`+Y)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||R==="")&&(U=!1);U&&(B.diagnostics={runnable:D,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:R,prefix:p}})}i.deleteShader(E),i.deleteShader(b),I=new sr(i,v),S=Cm(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,ym)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}let km=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gm(t),e.set(t,n)),n}}class Gm{constructor(t){this.id=km++,this.code=t,this.usedTimes=0}}function Vm(r,t,e,n,i,s,o){const a=new Sc,l=new Hm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,w,B,H,O){const R=H.fog,D=O.geometry,U=S.isMeshStandardMaterial?H.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),Y=q&&q.mapping===dr?q.image.height:null,W=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=J!==void 0?J.length:0;let G=0;D.morphAttributes.position!==void 0&&(G=1),D.morphAttributes.normal!==void 0&&(G=2),D.morphAttributes.color!==void 0&&(G=3);let dt,mt,xt,Rt;if(W){const ue=hn[W];dt=ue.vertexShader,mt=ue.fragmentShader}else dt=S.vertexShader,mt=S.fragmentShader,l.update(S),xt=l.getVertexShaderID(S),Rt=l.getFragmentShaderID(S);const Dt=r.getRenderTarget(),It=O.isInstancedMesh===!0,zt=!!S.map,Zt=!!S.matcap,Nt=!!q,N=!!S.aoMap,ut=!!S.lightMap,Q=!!S.bumpMap,st=!!S.normalMap,et=!!S.displacementMap,At=!!S.emissiveMap,vt=!!S.metalnessMap,Et=!!S.roughnessMap,Ut=S.anisotropy>0,qt=S.clearcoat>0,re=S.iridescence>0,P=S.sheen>0,T=S.transmission>0,X=Ut&&!!S.anisotropyMap,ot=qt&&!!S.clearcoatMap,nt=qt&&!!S.clearcoatNormalMap,at=qt&&!!S.clearcoatRoughnessMap,wt=re&&!!S.iridescenceMap,ct=re&&!!S.iridescenceThicknessMap,gt=P&&!!S.sheenColorMap,F=P&&!!S.sheenRoughnessMap,ht=!!S.specularMap,tt=!!S.specularColorMap,Ft=!!S.specularIntensityMap,Tt=T&&!!S.transmissionMap,Lt=T&&!!S.thicknessMap,bt=!!S.gradientMap,St=!!S.alphaMap,Yt=S.alphaTest>0,k=!!S.alphaHash,ft=!!S.extensions,it=!!D.attributes.uv1,Z=!!D.attributes.uv2,lt=!!D.attributes.uv3;let Pt=Bn;return S.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(Pt=r.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:dt,fragmentShader:mt,defines:S.defines,customVertexShaderID:xt,customFragmentShaderID:Rt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:It,instancingColor:It&&O.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Dt===null?r.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:Tn,map:zt,matcap:Zt,envMap:Nt,envMapMode:Nt&&q.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:ut,bumpMap:Q,normalMap:st,displacementMap:u&&et,emissiveMap:At,normalMapObjectSpace:st&&S.normalMapType===Jh,normalMapTangentSpace:st&&S.normalMapType===gc,metalnessMap:vt,roughnessMap:Et,anisotropy:Ut,anisotropyMap:X,clearcoat:qt,clearcoatMap:ot,clearcoatNormalMap:nt,clearcoatRoughnessMap:at,iridescence:re,iridescenceMap:wt,iridescenceThicknessMap:ct,sheen:P,sheenColorMap:gt,sheenRoughnessMap:F,specularMap:ht,specularColorMap:tt,specularIntensityMap:Ft,transmission:T,transmissionMap:Tt,thicknessMap:Lt,gradientMap:bt,opaque:S.transparent===!1&&S.blending===ti,alphaMap:St,alphaTest:Yt,alphaHash:k,combine:S.combine,mapUv:zt&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:ut&&v(S.lightMap.channel),bumpMapUv:Q&&v(S.bumpMap.channel),normalMapUv:st&&v(S.normalMap.channel),displacementMapUv:et&&v(S.displacementMap.channel),emissiveMapUv:At&&v(S.emissiveMap.channel),metalnessMapUv:vt&&v(S.metalnessMap.channel),roughnessMapUv:Et&&v(S.roughnessMap.channel),anisotropyMapUv:X&&v(S.anisotropyMap.channel),clearcoatMapUv:ot&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:F&&v(S.sheenRoughnessMap.channel),specularMapUv:ht&&v(S.specularMap.channel),specularColorMapUv:tt&&v(S.specularColorMap.channel),specularIntensityMapUv:Ft&&v(S.specularIntensityMap.channel),transmissionMapUv:Tt&&v(S.transmissionMap.channel),thicknessMapUv:Lt&&v(S.thicknessMap.channel),alphaMapUv:St&&v(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(st||Ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:it,vertexUv2s:Z,vertexUv3s:lt,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(zt||St),fog:!!R,useFog:S.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:G,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Ce,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ft&&S.extensions.derivatives===!0,extensionFragDepth:ft&&S.extensions.fragDepth===!0,extensionDrawBuffers:ft&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(x(w,S),_(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const w=g[S.type];let B;if(w){const H=hn[w];B=Au.clone(H.uniforms)}else B=S.uniforms;return B}function E(S,w){let B;for(let H=0,O=c.length;H<O;H++){const R=c[H];if(R.cacheKey===w){B=R,++B.usedTimes;break}}return B===void 0&&(B=new zm(r,w,S,s),c.push(B)),B}function b(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:I}}function Wm(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function qm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function dl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||qm),n.length>1&&n.sort(u||dl),i.length>1&&i.sort(u||dl)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Xm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new fl,r.set(n,[o])):i>=s.length?(o=new fl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function jm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new jt};break;case"SpotLight":e={position:new L,direction:new L,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function Ym(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Km=0;function $m(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Zm(r,t){const e=new jm,n=Ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,o=new ee,a=new ee;function l(h,d){let u=0,f=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let v=0,m=0,p=0,x=0,_=0,y=0,E=0,b=0,A=0,I=0,S=0;h.sort($m);const w=d===!0?Math.PI:1;for(let H=0,O=h.length;H<O;H++){const R=h[H],D=R.color,U=R.intensity,q=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*U*w,f+=D.g*U*w,g+=D.b*U*w;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],U);S++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){const J=R.shadow,z=n.get(R);z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[v]=z,i.directionalShadowMap[v]=Y,i.directionalShadowMatrix[v]=R.shadow.matrix,y++}i.directional[v]=W,v++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(D).multiplyScalar(U*w),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[p]=W;const J=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,J.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[p]=J.matrix,R.castShadow){const z=n.get(R);z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[p]=z,i.spotShadowMap[p]=Y,b++}p++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(D).multiplyScalar(U),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=W,x++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*w),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,z=n.get(R);z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=R.shadow.matrix,E++}i.point[m]=W,m++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(U*w),W.groundColor.copy(R.groundColor).multiplyScalar(U*w),i.hemi[_]=W,_++}}x>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==y||B.numPointShadows!==E||B.numSpotShadows!==b||B.numSpotMaps!==A||B.numLightProbes!==S)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=S,B.directionalLength=v,B.pointLength=m,B.spotLength=p,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=y,B.numPointShadows=E,B.numSpotShadows=b,B.numSpotMaps=A,B.numLightProbes=S,i.version=Km++)}function c(h,d){let u=0,f=0,g=0,v=0,m=0;const p=d.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const y=h[x];if(y.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function pl(r,t){const e=new Zm(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jm(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new pl(r,t),e.set(s,[l])):o>=a.length?(l=new pl(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Qm extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ig(r,t,e){let n=new Po;const i=new rt,s=new rt,o=new ae,a=new Qm({depthPacking:Zh}),l=new tg,c={},h=e.maxTextureSize,d={[bn]:Ce,[Ce]:bn,[tn]:tn},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let p=this.type;this.render=function(E,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=r.getRenderTarget(),S=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),B=r.state;B.setBlending(On),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==Mn&&this.type===Mn,O=p===Mn&&this.type!==Mn;for(let R=0,D=E.length;R<D;R++){const U=E[R],q=U.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Y=q.getFrameExtents();if(i.multiply(Y),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,q.mapSize.y=s.y)),q.map===null||H===!0||O===!0){const J=this.type!==Mn?{minFilter:De,magFilter:De}:{};q.map!==null&&q.map.dispose(),q.map=new si(i.x,i.y,J),q.map.texture.name=U.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const W=q.getViewportCount();for(let J=0;J<W;J++){const z=q.getViewport(J);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),B.viewport(o),q.updateMatrices(U,J),n=q.getFrustum(),y(b,A,q.camera,U,this.type)}q.isPointLightShadow!==!0&&this.type===Mn&&x(q,A),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(I,S,w)};function x(E,b){const A=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,A,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,A,f,v,null)}function _(E,b,A,I){let S=null;const w=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=A.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=S.uuid,H=b.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let R=O[H];R===void 0&&(R=S.clone(),O[H]=R),S=R}if(S.visible=b.visible,S.wireframe=b.wireframe,I===Mn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=r.properties.get(S);B.light=A}return S}function y(E,b,A,I,S){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Mn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const H=t.update(E),O=E.material;if(Array.isArray(O)){const R=H.groups;for(let D=0,U=R.length;D<U;D++){const q=R[D],Y=O[q.materialIndex];if(Y&&Y.visible){const W=_(E,Y,I,S);r.renderBufferDirect(A,null,H,W,E,q)}}}else if(O.visible){const R=_(E,O,I,S);r.renderBufferDirect(A,null,H,R,E,null)}}const B=E.children;for(let H=0,O=B.length;H<O;H++)y(B[H],b,A,I,S)}}function sg(r,t,e){const n=e.isWebGL2;function i(){let k=!1;const ft=new ae;let it=null;const Z=new ae(0,0,0,0);return{setMask:function(lt){it!==lt&&!k&&(r.colorMask(lt,lt,lt,lt),it=lt)},setLocked:function(lt){k=lt},setClear:function(lt,Pt,Kt,ue,Ve){Ve===!0&&(lt*=ue,Pt*=ue,Kt*=ue),ft.set(lt,Pt,Kt,ue),Z.equals(ft)===!1&&(r.clearColor(lt,Pt,Kt,ue),Z.copy(ft))},reset:function(){k=!1,it=null,Z.set(-1,0,0,0)}}}function s(){let k=!1,ft=null,it=null,Z=null;return{setTest:function(lt){lt?zt(r.DEPTH_TEST):Zt(r.DEPTH_TEST)},setMask:function(lt){ft!==lt&&!k&&(r.depthMask(lt),ft=lt)},setFunc:function(lt){if(it!==lt){switch(lt){case Ah:r.depthFunc(r.NEVER);break;case Ch:r.depthFunc(r.ALWAYS);break;case Rh:r.depthFunc(r.LESS);break;case rr:r.depthFunc(r.LEQUAL);break;case Ph:r.depthFunc(r.EQUAL);break;case Lh:r.depthFunc(r.GEQUAL);break;case Ih:r.depthFunc(r.GREATER);break;case Dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}it=lt}},setLocked:function(lt){k=lt},setClear:function(lt){Z!==lt&&(r.clearDepth(lt),Z=lt)},reset:function(){k=!1,ft=null,it=null,Z=null}}}function o(){let k=!1,ft=null,it=null,Z=null,lt=null,Pt=null,Kt=null,ue=null,Ve=null;return{setTest:function(ne){k||(ne?zt(r.STENCIL_TEST):Zt(r.STENCIL_TEST))},setMask:function(ne){ft!==ne&&!k&&(r.stencilMask(ne),ft=ne)},setFunc:function(ne,Pe,rn){(it!==ne||Z!==Pe||lt!==rn)&&(r.stencilFunc(ne,Pe,rn),it=ne,Z=Pe,lt=rn)},setOp:function(ne,Pe,rn){(Pt!==ne||Kt!==Pe||ue!==rn)&&(r.stencilOp(ne,Pe,rn),Pt=ne,Kt=Pe,ue=rn)},setLocked:function(ne){k=ne},setClear:function(ne){Ve!==ne&&(r.clearStencil(ne),Ve=ne)},reset:function(){k=!1,ft=null,it=null,Z=null,lt=null,Pt=null,Kt=null,ue=null,Ve=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,y=null,E=null,b=null,A=null,I=null,S=new jt(0,0,0),w=0,B=!1,H=null,O=null,R=null,D=null,U=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=W>=2);let z=null,G={};const dt=r.getParameter(r.SCISSOR_BOX),mt=r.getParameter(r.VIEWPORT),xt=new ae().fromArray(dt),Rt=new ae().fromArray(mt);function Dt(k,ft,it,Z){const lt=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(k,Pt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<it;Kt++)n&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ft+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return Pt}const It={};It[r.TEXTURE_2D]=Dt(r.TEXTURE_2D,r.TEXTURE_2D,1),It[r.TEXTURE_CUBE_MAP]=Dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[r.TEXTURE_2D_ARRAY]=Dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),It[r.TEXTURE_3D]=Dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(r.DEPTH_TEST),l.setFunc(rr),vt(!1),Et(Ko),zt(r.CULL_FACE),et(On);function zt(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function Zt(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function Nt(k,ft){return f[k]!==ft?(r.bindFramebuffer(k,ft),f[k]=ft,n&&(k===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ft),k===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function N(k,ft){let it=v,Z=!1;if(k)if(it=g.get(ft),it===void 0&&(it=[],g.set(ft,it)),k.isWebGLMultipleRenderTargets){const lt=k.texture;if(it.length!==lt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,Kt=lt.length;Pt<Kt;Pt++)it[Pt]=r.COLOR_ATTACHMENT0+Pt;it.length=lt.length,Z=!0}}else it[0]!==r.COLOR_ATTACHMENT0&&(it[0]=r.COLOR_ATTACHMENT0,Z=!0);else it[0]!==r.BACK&&(it[0]=r.BACK,Z=!0);Z&&(e.isWebGL2?r.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function ut(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const Q={[$n]:r.FUNC_ADD,[dh]:r.FUNC_SUBTRACT,[fh]:r.FUNC_REVERSE_SUBTRACT};if(n)Q[Qo]=r.MIN,Q[ta]=r.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(Q[Qo]=k.MIN_EXT,Q[ta]=k.MAX_EXT)}const st={[ph]:r.ZERO,[mh]:r.ONE,[gh]:r.SRC_COLOR,[ho]:r.SRC_ALPHA,[Mh]:r.SRC_ALPHA_SATURATE,[yh]:r.DST_COLOR,[_h]:r.DST_ALPHA,[vh]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[Sh]:r.ONE_MINUS_DST_COLOR,[xh]:r.ONE_MINUS_DST_ALPHA,[Eh]:r.CONSTANT_COLOR,[wh]:r.ONE_MINUS_CONSTANT_COLOR,[bh]:r.CONSTANT_ALPHA,[Th]:r.ONE_MINUS_CONSTANT_ALPHA};function et(k,ft,it,Z,lt,Pt,Kt,ue,Ve,ne){if(k===On){p===!0&&(Zt(r.BLEND),p=!1);return}if(p===!1&&(zt(r.BLEND),p=!0),k!==uh){if(k!==x||ne!==B){if((_!==$n||b!==$n)&&(r.blendEquation(r.FUNC_ADD),_=$n,b=$n),ne)switch(k){case ti:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $o:r.blendFunc(r.ONE,r.ONE);break;case Zo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ti:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $o:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,E=null,A=null,I=null,S.set(0,0,0),w=0,x=k,B=ne}return}lt=lt||ft,Pt=Pt||it,Kt=Kt||Z,(ft!==_||lt!==b)&&(r.blendEquationSeparate(Q[ft],Q[lt]),_=ft,b=lt),(it!==y||Z!==E||Pt!==A||Kt!==I)&&(r.blendFuncSeparate(st[it],st[Z],st[Pt],st[Kt]),y=it,E=Z,A=Pt,I=Kt),(ue.equals(S)===!1||Ve!==w)&&(r.blendColor(ue.r,ue.g,ue.b,Ve),S.copy(ue),w=Ve),x=k,B=!1}function At(k,ft){k.side===tn?Zt(r.CULL_FACE):zt(r.CULL_FACE);let it=k.side===Ce;ft&&(it=!it),vt(it),k.blending===ti&&k.transparent===!1?et(On):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const Z=k.stencilWrite;c.setTest(Z),Z&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?zt(r.SAMPLE_ALPHA_TO_COVERAGE):Zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){H!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),H=k)}function Et(k){k!==ch?(zt(r.CULL_FACE),k!==O&&(k===Ko?r.cullFace(r.BACK):k===hh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Zt(r.CULL_FACE),O=k}function Ut(k){k!==R&&(Y&&r.lineWidth(k),R=k)}function qt(k,ft,it){k?(zt(r.POLYGON_OFFSET_FILL),(D!==ft||U!==it)&&(r.polygonOffset(ft,it),D=ft,U=it)):Zt(r.POLYGON_OFFSET_FILL)}function re(k){k?zt(r.SCISSOR_TEST):Zt(r.SCISSOR_TEST)}function P(k){k===void 0&&(k=r.TEXTURE0+q-1),z!==k&&(r.activeTexture(k),z=k)}function T(k,ft,it){it===void 0&&(z===null?it=r.TEXTURE0+q-1:it=z);let Z=G[it];Z===void 0&&(Z={type:void 0,texture:void 0},G[it]=Z),(Z.type!==k||Z.texture!==ft)&&(z!==it&&(r.activeTexture(it),z=it),r.bindTexture(k,ft||It[k]),Z.type=k,Z.texture=ft)}function X(){const k=G[z];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ot(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ft(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(k){xt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function Lt(k){Rt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Rt.copy(k))}function bt(k,ft){let it=d.get(ft);it===void 0&&(it=new WeakMap,d.set(ft,it));let Z=it.get(k);Z===void 0&&(Z=r.getUniformBlockIndex(ft,k.name),it.set(k,Z))}function St(k,ft){const Z=d.get(ft).get(k);h.get(ft)!==Z&&(r.uniformBlockBinding(ft,Z,k.__bindingPointIndex),h.set(ft,Z))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},z=null,G={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,y=null,E=null,b=null,A=null,I=null,S=new jt(0,0,0),w=0,B=!1,H=null,O=null,R=null,D=null,U=null,xt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:zt,disable:Zt,bindFramebuffer:Nt,drawBuffers:N,useProgram:ut,setBlending:et,setMaterial:At,setFlipSided:vt,setCullFace:Et,setLineWidth:Ut,setPolygonOffset:qt,setScissorTest:re,activeTexture:P,bindTexture:T,unbindTexture:X,compressedTexImage2D:ot,compressedTexImage3D:nt,texImage2D:tt,texImage3D:Ft,updateUBOMapping:bt,uniformBlockBinding:St,texStorage2D:F,texStorage3D:ht,texSubImage2D:at,texSubImage3D:wt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Tt,viewport:Lt,reset:Yt}}function rg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,T){return p?new OffscreenCanvas(P,T):hr("canvas")}function _(P,T,X,ot){let nt=1;if((P.width>ot||P.height>ot)&&(nt=ot/Math.max(P.width,P.height)),nt<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const at=T?_o:Math.floor,wt=at(nt*P.width),ct=at(nt*P.height);v===void 0&&(v=x(wt,ct));const gt=X?x(wt,ct):v;return gt.width=wt,gt.height=ct,gt.getContext("2d").drawImage(P,0,0,wt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+wt+"x"+ct+")."),gt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return Pa(P.width)&&Pa(P.height)}function E(P){return a?!1:P.wrapS!==en||P.wrapT!==en||P.minFilter!==De&&P.minFilter!==qe}function b(P,T){return P.generateMipmaps&&T&&P.minFilter!==De&&P.minFilter!==qe}function A(P){r.generateMipmap(P)}function I(P,T,X,ot,nt=!1){if(a===!1)return T;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let at=T;if(T===r.RED&&(X===r.FLOAT&&(at=r.R32F),X===r.HALF_FLOAT&&(at=r.R16F),X===r.UNSIGNED_BYTE&&(at=r.R8)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(at=r.R8UI),X===r.UNSIGNED_SHORT&&(at=r.R16UI),X===r.UNSIGNED_INT&&(at=r.R32UI),X===r.BYTE&&(at=r.R8I),X===r.SHORT&&(at=r.R16I),X===r.INT&&(at=r.R32I)),T===r.RG&&(X===r.FLOAT&&(at=r.RG32F),X===r.HALF_FLOAT&&(at=r.RG16F),X===r.UNSIGNED_BYTE&&(at=r.RG8)),T===r.RGBA){const wt=nt?or:te.getTransfer(ot);X===r.FLOAT&&(at=r.RGBA32F),X===r.HALF_FLOAT&&(at=r.RGBA16F),X===r.UNSIGNED_BYTE&&(at=wt===se?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(at=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(at=r.RGB5_A1)}return(at===r.R16F||at===r.R32F||at===r.RG16F||at===r.RG32F||at===r.RGBA16F||at===r.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function S(P,T,X){return b(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==De&&P.minFilter!==qe?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function w(P){return P===De||P===ea||P===Sr?r.NEAREST:r.LINEAR}function B(P){const T=P.target;T.removeEventListener("dispose",B),O(T),T.isVideoTexture&&g.delete(T)}function H(P){const T=P.target;T.removeEventListener("dispose",H),D(T)}function O(P){const T=n.get(P);if(T.__webglInit===void 0)return;const X=P.source,ot=m.get(X);if(ot){const nt=ot[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(P),Object.keys(ot).length===0&&m.delete(X)}n.remove(P)}function R(P){const T=n.get(P);r.deleteTexture(T.__webglTexture);const X=P.source,ot=m.get(X);delete ot[T.__cacheKey],o.memory.textures--}function D(P){const T=P.texture,X=n.get(P),ot=n.get(T);if(ot.__webglTexture!==void 0&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(X.__webglFramebuffer[nt]))for(let at=0;at<X.__webglFramebuffer[nt].length;at++)r.deleteFramebuffer(X.__webglFramebuffer[nt][at]);else r.deleteFramebuffer(X.__webglFramebuffer[nt]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[nt])}else{if(Array.isArray(X.__webglFramebuffer))for(let nt=0;nt<X.__webglFramebuffer.length;nt++)r.deleteFramebuffer(X.__webglFramebuffer[nt]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let nt=0;nt<X.__webglColorRenderbuffer.length;nt++)X.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[nt]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let nt=0,at=T.length;nt<at;nt++){const wt=n.get(T[nt]);wt.__webglTexture&&(r.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(T[nt])}n.remove(T),n.remove(P)}let U=0;function q(){U=0}function Y(){const P=U;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),U+=1,P}function W(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){const X=n.get(P);if(P.isVideoTexture&&qt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const ot=P.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(X,P,T);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function z(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){zt(X,P,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function G(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){zt(X,P,T);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function dt(P,T){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Zt(X,P,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}const mt={[Qn]:r.REPEAT,[en]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},xt={[De]:r.NEAREST,[ea]:r.NEAREST_MIPMAP_NEAREST,[Sr]:r.NEAREST_MIPMAP_LINEAR,[qe]:r.LINEAR,[kh]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},Rt={[Qh]:r.NEVER,[ou]:r.ALWAYS,[tu]:r.LESS,[nu]:r.LEQUAL,[eu]:r.EQUAL,[ru]:r.GEQUAL,[iu]:r.GREATER,[su]:r.NOTEQUAL};function Dt(P,T,X){if(X?(r.texParameteri(P,r.TEXTURE_WRAP_S,mt[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,mt[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,mt[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,xt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,xt[T.minFilter])):(r.texParameteri(P,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(P,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==en||T.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,r.TEXTURE_MAG_FILTER,w(T.magFilter)),r.texParameteri(P,r.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==De&&T.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Rt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===De||T.minFilter!==Sr&&T.minFilter!==ls||T.type===Fn&&t.has("OES_texture_float_linear")===!1||a===!1&&T.type===cs&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(P,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function It(P,T){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const ot=T.source;let nt=m.get(ot);nt===void 0&&(nt={},m.set(ot,nt));const at=W(T);if(at!==P.__cacheKey){nt[at]===void 0&&(nt[at]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),nt[at].usedTimes++;const wt=nt[P.__cacheKey];wt!==void 0&&(nt[P.__cacheKey].usedTimes--,wt.usedTimes===0&&R(T)),P.__cacheKey=at,P.__webglTexture=nt[at].texture}return X}function zt(P,T,X){let ot=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=r.TEXTURE_3D);const nt=It(P,T),at=T.source;e.bindTexture(ot,P.__webglTexture,r.TEXTURE0+X);const wt=n.get(at);if(at.version!==wt.__version||nt===!0){e.activeTexture(r.TEXTURE0+X);const ct=te.getPrimaries(te.workingColorSpace),gt=T.colorSpace===Xe?null:te.getPrimaries(T.colorSpace),F=T.colorSpace===Xe||ct===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);const ht=E(T)&&y(T.image)===!1;let tt=_(T.image,ht,!1,h);tt=re(T,tt);const Ft=y(tt)||a,Tt=s.convert(T.format,T.colorSpace);let Lt=s.convert(T.type),bt=I(T.internalFormat,Tt,Lt,T.colorSpace,T.isVideoTexture);Dt(ot,T,Ft);let St;const Yt=T.mipmaps,k=a&&T.isVideoTexture!==!0,ft=wt.__version===void 0||nt===!0,it=S(T,tt,Ft);if(T.isDepthTexture)bt=r.DEPTH_COMPONENT,a?T.type===Fn?bt=r.DEPTH_COMPONENT32F:T.type===Un?bt=r.DEPTH_COMPONENT24:T.type===ei?bt=r.DEPTH24_STENCIL8:bt=r.DEPTH_COMPONENT16:T.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ni&&bt===r.DEPTH_COMPONENT&&T.type!==Ao&&T.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Un,Lt=s.convert(T.type)),T.format===Ui&&bt===r.DEPTH_COMPONENT&&(bt=r.DEPTH_STENCIL,T.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ei,Lt=s.convert(T.type))),ft&&(k?e.texStorage2D(r.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,Tt,Lt,null));else if(T.isDataTexture)if(Yt.length>0&&Ft){k&&ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,Yt[0].width,Yt[0].height);for(let Z=0,lt=Yt.length;Z<lt;Z++)St=Yt[Z],k?e.texSubImage2D(r.TEXTURE_2D,Z,0,0,St.width,St.height,Tt,Lt,St.data):e.texImage2D(r.TEXTURE_2D,Z,bt,St.width,St.height,0,Tt,Lt,St.data);T.generateMipmaps=!1}else k?(ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,tt.width,tt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,Tt,Lt,tt.data)):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,Tt,Lt,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,Yt[0].width,Yt[0].height,tt.depth);for(let Z=0,lt=Yt.length;Z<lt;Z++)St=Yt[Z],T.format!==nn?Tt!==null?k?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,tt.depth,Tt,St.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,bt,St.width,St.height,tt.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,tt.depth,Tt,Lt,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,bt,St.width,St.height,tt.depth,0,Tt,Lt,St.data)}else{k&&ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,Yt[0].width,Yt[0].height);for(let Z=0,lt=Yt.length;Z<lt;Z++)St=Yt[Z],T.format!==nn?Tt!==null?k?e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?e.texSubImage2D(r.TEXTURE_2D,Z,0,0,St.width,St.height,Tt,Lt,St.data):e.texImage2D(r.TEXTURE_2D,Z,bt,St.width,St.height,0,Tt,Lt,St.data)}else if(T.isDataArrayTexture)k?(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Tt,Lt,tt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,Tt,Lt,tt.data);else if(T.isData3DTexture)k?(ft&&e.texStorage3D(r.TEXTURE_3D,it,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Tt,Lt,tt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,Tt,Lt,tt.data);else if(T.isFramebufferTexture){if(ft)if(k)e.texStorage2D(r.TEXTURE_2D,it,bt,tt.width,tt.height);else{let Z=tt.width,lt=tt.height;for(let Pt=0;Pt<it;Pt++)e.texImage2D(r.TEXTURE_2D,Pt,bt,Z,lt,0,Tt,Lt,null),Z>>=1,lt>>=1}}else if(Yt.length>0&&Ft){k&&ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,Yt[0].width,Yt[0].height);for(let Z=0,lt=Yt.length;Z<lt;Z++)St=Yt[Z],k?e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Tt,Lt,St):e.texImage2D(r.TEXTURE_2D,Z,bt,Tt,Lt,St);T.generateMipmaps=!1}else k?(ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,tt.width,tt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Lt,tt)):e.texImage2D(r.TEXTURE_2D,0,bt,Tt,Lt,tt);b(T,Ft)&&A(ot),wt.__version=at.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Zt(P,T,X){if(T.image.length!==6)return;const ot=It(P,T),nt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+X);const at=n.get(nt);if(nt.version!==at.__version||ot===!0){e.activeTexture(r.TEXTURE0+X);const wt=te.getPrimaries(te.workingColorSpace),ct=T.colorSpace===Xe?null:te.getPrimaries(T.colorSpace),gt=T.colorSpace===Xe||wt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const F=T.isCompressedTexture||T.image[0].isCompressedTexture,ht=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let Z=0;Z<6;Z++)!F&&!ht?tt[Z]=_(T.image[Z],!1,!0,c):tt[Z]=ht?T.image[Z].image:T.image[Z],tt[Z]=re(T,tt[Z]);const Ft=tt[0],Tt=y(Ft)||a,Lt=s.convert(T.format,T.colorSpace),bt=s.convert(T.type),St=I(T.internalFormat,Lt,bt,T.colorSpace),Yt=a&&T.isVideoTexture!==!0,k=at.__version===void 0||ot===!0;let ft=S(T,Ft,Tt);Dt(r.TEXTURE_CUBE_MAP,T,Tt);let it;if(F){Yt&&k&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,St,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){it=tt[Z].mipmaps;for(let lt=0;lt<it.length;lt++){const Pt=it[lt];T.format!==nn?Lt!==null?Yt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Pt.width,Pt.height,Lt,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,St,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Pt.width,Pt.height,Lt,bt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,St,Pt.width,Pt.height,0,Lt,bt,Pt.data)}}}else{it=T.mipmaps,Yt&&k&&(it.length>0&&ft++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,St,tt[0].width,tt[0].height));for(let Z=0;Z<6;Z++)if(ht){Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,tt[Z].width,tt[Z].height,Lt,bt,tt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,St,tt[Z].width,tt[Z].height,0,Lt,bt,tt[Z].data);for(let lt=0;lt<it.length;lt++){const Kt=it[lt].image[Z].image;Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Kt.width,Kt.height,Lt,bt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,St,Kt.width,Kt.height,0,Lt,bt,Kt.data)}}else{Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,bt,tt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,St,Lt,bt,tt[Z]);for(let lt=0;lt<it.length;lt++){const Pt=it[lt];Yt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Lt,bt,Pt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,St,Lt,bt,Pt.image[Z])}}}b(T,Tt)&&A(r.TEXTURE_CUBE_MAP),at.__version=nt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Nt(P,T,X,ot,nt,at){const wt=s.convert(X.format,X.colorSpace),ct=s.convert(X.type),gt=I(X.internalFormat,wt,ct,X.colorSpace);if(!n.get(T).__hasExternalTextures){const ht=Math.max(1,T.width>>at),tt=Math.max(1,T.height>>at);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,gt,ht,tt,T.depth,0,wt,ct,null):e.texImage2D(nt,at,gt,ht,tt,0,wt,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),Ut(T)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,nt,n.get(X).__webglTexture,0,Et(T)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,nt,n.get(X).__webglTexture,at),e.bindFramebuffer(r.FRAMEBUFFER,null)}function N(P,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let ot=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||Ut(T)){const nt=T.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Fn?ot=r.DEPTH_COMPONENT32F:nt.type===Un&&(ot=r.DEPTH_COMPONENT24));const at=Et(T);Ut(T)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,ot,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,at,ot,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ot,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const ot=Et(T);X&&Ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,T.width,T.height):Ut(T)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const ot=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let nt=0;nt<ot.length;nt++){const at=ot[nt],wt=s.convert(at.format,at.colorSpace),ct=s.convert(at.type),gt=I(at.internalFormat,wt,ct,at.colorSpace),F=Et(T);X&&Ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,F,gt,T.width,T.height):Ut(T)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,gt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,gt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);const ot=n.get(T.depthTexture).__webglTexture,nt=Et(T);if(T.depthTexture.format===ni)Ut(T)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(T.depthTexture.format===Ui)Ut(T)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Q(P){const T=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ut(T.__webglFramebuffer,P)}else if(X){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]=r.createRenderbuffer(),N(T.__webglDepthbuffer[ot],P,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),N(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(P,T,X){const ot=n.get(P);T!==void 0&&Nt(ot.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Q(P)}function et(P){const T=P.texture,X=n.get(P),ot=n.get(T);P.addEventListener("dispose",H),P.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=T.version,o.memory.textures++);const nt=P.isWebGLCubeRenderTarget===!0,at=P.isWebGLMultipleRenderTargets===!0,wt=y(P)||a;if(nt){X.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ct]=[];for(let gt=0;gt<T.mipmaps.length;gt++)X.__webglFramebuffer[ct][gt]=r.createFramebuffer()}else X.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ct=0;ct<T.mipmaps.length;ct++)X.__webglFramebuffer[ct]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(at)if(i.drawBuffers){const ct=P.texture;for(let gt=0,F=ct.length;gt<F;gt++){const ht=n.get(ct[gt]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ut(P)===!1){const ct=at?T:[T];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let gt=0;gt<ct.length;gt++){const F=ct[gt];X.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[gt]);const ht=s.convert(F.format,F.colorSpace),tt=s.convert(F.type),Ft=I(F.internalFormat,ht,tt,F.colorSpace,P.isXRRenderTarget===!0),Tt=Et(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,Ft,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,X.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),N(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,T,wt);for(let ct=0;ct<6;ct++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Nt(X.__webglFramebuffer[ct][gt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else Nt(X.__webglFramebuffer[ct],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);b(T,wt)&&A(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const ct=P.texture;for(let gt=0,F=ct.length;gt<F;gt++){const ht=ct[gt],tt=n.get(ht);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),Dt(r.TEXTURE_2D,ht,wt),Nt(X.__webglFramebuffer,P,ht,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),b(ht,wt)&&A(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ct=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,ot.__webglTexture),Dt(ct,T,wt),a&&T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)Nt(X.__webglFramebuffer[gt],P,T,r.COLOR_ATTACHMENT0,ct,gt);else Nt(X.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,ct,0);b(T,wt)&&A(ct),e.unbindTexture()}P.depthBuffer&&Q(P)}function At(P){const T=y(P)||a,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ot=0,nt=X.length;ot<nt;ot++){const at=X[ot];if(b(at,T)){const wt=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ct=n.get(at).__webglTexture;e.bindTexture(wt,ct),A(wt),e.unbindTexture()}}}function vt(P){if(a&&P.samples>0&&Ut(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,ot=P.height;let nt=r.COLOR_BUFFER_BIT;const at=[],wt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=n.get(P),gt=P.isWebGLMultipleRenderTargets===!0;if(gt)for(let F=0;F<T.length;F++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let F=0;F<T.length;F++){at.push(r.COLOR_ATTACHMENT0+F),P.depthBuffer&&at.push(wt);const ht=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(ht===!1&&(P.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),gt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[F]),ht===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[wt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[wt])),gt){const tt=n.get(T[F]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,X,ot,0,0,X,ot,nt,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let F=0;F<T.length;F++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,ct.__webglColorRenderbuffer[F]);const ht=n.get(T[F]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Et(P){return Math.min(d,P.samples)}function Ut(P){const T=n.get(P);return a&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qt(P){const T=o.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function re(P,T){const X=P.colorSpace,ot=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===go||X!==Tn&&X!==Xe&&(te.getTransfer(X)===se?a===!1?t.has("EXT_sRGB")===!0&&ot===nn?(P.format=go,P.minFilter=qe,P.generateMipmaps=!1):T=_c.sRGBToLinear(T):(ot!==nn||nt!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=dt,this.rebindTextures=st,this.setupRenderTarget=et,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Ut}function og(r,t,e){const n=e.isWebGL2;function i(s,o=Xe){let a;const l=te.getTransfer(o);if(s===zn)return r.UNSIGNED_BYTE;if(s===hc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===uc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hh)return r.BYTE;if(s===Gh)return r.SHORT;if(s===Ao)return r.UNSIGNED_SHORT;if(s===cc)return r.INT;if(s===Un)return r.UNSIGNED_INT;if(s===Fn)return r.FLOAT;if(s===cs)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vh)return r.ALPHA;if(s===nn)return r.RGBA;if(s===Wh)return r.LUMINANCE;if(s===qh)return r.LUMINANCE_ALPHA;if(s===ni)return r.DEPTH_COMPONENT;if(s===Ui)return r.DEPTH_STENCIL;if(s===go)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xh)return r.RED;if(s===dc)return r.RED_INTEGER;if(s===jh)return r.RG;if(s===fc)return r.RG_INTEGER;if(s===pc)return r.RGBA_INTEGER;if(s===Mr||s===Er||s===wr||s===br)if(l===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Er)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===br)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===na||s===ia||s===sa||s===ra)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===na)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ra)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===oa||s===aa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===oa)return l===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===aa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===va||s===_a||s===xa||s===ya||s===Sa)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===la)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ca)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ha)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ua)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===da)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ma)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ga)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===va)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_a)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ya)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tr||s===Ma||s===Ea)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Tr)return l===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ma)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ea)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kh||s===wa||s===ba||s===Ta)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Tr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ba)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ta)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ei?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ag extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Gs extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class cg extends Be{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:ni,h!==ni&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ni&&(n=Un),n===void 0&&h===Ui&&(n=ei),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hg extends oi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=e.getContextAttributes();let m=null,p=null;const x=[],_=[],y=new Oe;y.layers.enable(1),y.viewport=new ae;const E=new Oe;E.layers.enable(2),E.viewport=new ae;const b=[y,E],A=new ag;A.layers.enable(1),A.layers.enable(2);let I=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let G=x[z];return G===void 0&&(G=new $r,x[z]=G),G.getTargetRaySpace()},this.getControllerGrip=function(z){let G=x[z];return G===void 0&&(G=new $r,x[z]=G),G.getGripSpace()},this.getHand=function(z){let G=x[z];return G===void 0&&(G=new $r,x[z]=G),G.getHandSpace()};function w(z){const G=_.indexOf(z.inputSource);if(G===-1)return;const dt=x[G];dt!==void 0&&(dt.update(z.inputSource,z.frame,c||o),dt.dispatchEvent({type:z.type,data:z.inputSource}))}function B(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",H);for(let z=0;z<x.length;z++){const G=_[z];G!==null&&(_[z]=null,x[z].disconnect(G))}I=null,S=null,t.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",B),i.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:f}),p=new si(f.framebufferWidth,f.framebufferHeight,{format:nn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let G=null,dt=null,mt=null;v.depth&&(mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=v.stencil?Ui:ni,dt=v.stencil?ei:Un);const xt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(xt),i.updateRenderState({layers:[u]}),p=new si(u.textureWidth,u.textureHeight,{format:nn,type:zn,depthTexture:new cg(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Rt=t.properties.get(p);Rt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function H(z){for(let G=0;G<z.removed.length;G++){const dt=z.removed[G],mt=_.indexOf(dt);mt>=0&&(_[mt]=null,x[mt].disconnect(dt))}for(let G=0;G<z.added.length;G++){const dt=z.added[G];let mt=_.indexOf(dt);if(mt===-1){for(let Rt=0;Rt<x.length;Rt++)if(Rt>=_.length){_.push(dt),mt=Rt;break}else if(_[Rt]===null){_[Rt]=dt,mt=Rt;break}if(mt===-1)break}const xt=x[mt];xt&&xt.connect(dt)}}const O=new L,R=new L;function D(z,G,dt){O.setFromMatrixPosition(G.matrixWorld),R.setFromMatrixPosition(dt.matrixWorld);const mt=O.distanceTo(R),xt=G.projectionMatrix.elements,Rt=dt.projectionMatrix.elements,Dt=xt[14]/(xt[10]-1),It=xt[14]/(xt[10]+1),zt=(xt[9]+1)/xt[5],Zt=(xt[9]-1)/xt[5],Nt=(xt[8]-1)/xt[0],N=(Rt[8]+1)/Rt[0],ut=Dt*Nt,Q=Dt*N,st=mt/(-Nt+N),et=st*-Nt;G.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(et),z.translateZ(st),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const At=Dt+st,vt=It+st,Et=ut-et,Ut=Q+(mt-et),qt=zt*It/vt*At,re=Zt*It/vt*At;z.projectionMatrix.makePerspective(Et,Ut,qt,re,At,vt),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function U(z,G){G===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(G.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;A.near=E.near=y.near=z.near,A.far=E.far=y.far=z.far,(I!==A.near||S!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,S=A.far);const G=z.parent,dt=A.cameras;U(A,G);for(let mt=0;mt<dt.length;mt++)U(dt[mt],G);dt.length===2?D(A,y,E):A.projectionMatrix.copy(y.projectionMatrix),q(z,A,G)};function q(z,G,dt){dt===null?z.matrix.copy(G.matrixWorld):(z.matrix.copy(dt.matrixWorld),z.matrix.invert(),z.matrix.multiply(G.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(G.projectionMatrix),z.projectionMatrixInverse.copy(G.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=vo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let Y=null;function W(z,G){if(h=G.getViewerPose(c||o),g=G,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let mt=!1;dt.length!==A.cameras.length&&(A.cameras.length=0,mt=!0);for(let xt=0;xt<dt.length;xt++){const Rt=dt[xt];let Dt=null;if(f!==null)Dt=f.getViewport(Rt);else{const zt=d.getViewSubImage(u,Rt);Dt=zt.viewport,xt===0&&(t.setRenderTargetTextures(p,zt.colorTexture,u.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(p))}let It=b[xt];It===void 0&&(It=new Oe,It.layers.enable(xt),It.viewport=new ae,b[xt]=It),It.matrix.fromArray(Rt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Rt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),xt===0&&(A.matrix.copy(It.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),mt===!0&&A.cameras.push(It)}}for(let dt=0;dt<x.length;dt++){const mt=_[dt],xt=x[dt];mt!==null&&xt!==void 0&&xt.update(mt,G,c||o)}Y&&Y(z,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const J=new Cc;J.setAnimationLoop(W),this.setAnimationLoop=function(z){Y=z},this.dispose=function(){}}}function ug(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ce&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ce&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ce&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dg(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(x,E);const b=t.render.frame;s[x.id]!==b&&(u(x),s[x.id]=b)}function h(x){const _=d();x.__bindingPointIndex=_;const y=r.createBuffer(),E=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=i[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let b=0,A=y.length;b<A;b++){const I=y[b];if(f(I,b,E)===!0){const S=I.__offset,w=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let H=0;H<w.length;H++){const O=w[H],R=v(O);typeof O=="number"?(I.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,S+B,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=O.elements[0],I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=O.elements[0],I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=O.elements[0]):(O.toArray(I.__data,B),B+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,y){const E=x.value;if(y[_]===void 0){if(typeof E=="number")y[_]=E;else{const b=Array.isArray(E)?E:[E],A=[];for(let I=0;I<b.length;I++)A.push(b[I].clone());y[_]=A}return!0}else if(typeof E=="number"){if(y[_]!==E)return y[_]=E,!0}else{const b=Array.isArray(y[_])?y[_]:[y[_]],A=Array.isArray(E)?E:[E];for(let I=0;I<b.length;I++){const S=b[I];if(S.equals(A[I])===!1)return S.copy(A[I]),!0}}return!1}function g(x){const _=x.uniforms;let y=0;const E=16;let b=0;for(let A=0,I=_.length;A<I;A++){const S=_[A],w={boundary:0,storage:0},B=Array.isArray(S.value)?S.value:[S.value];for(let H=0,O=B.length;H<O;H++){const R=B[H],D=v(R);w.boundary+=D.boundary,w.storage+=D.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,A>0){b=y%E;const H=E-b;b!==0&&H-w.boundary<0&&(y+=E-b,S.__offset=y)}y+=w.storage}return b=y%E,b>0&&(y+=E-b),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Io{constructor(t={}){const{canvas:e=cu(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const _=this;let y=!1,E=0,b=0,A=null,I=-1,S=null;const w=new ae,B=new ae;let H=null;const O=new jt(0);let R=0,D=e.width,U=e.height,q=1,Y=null,W=null;const J=new ae(0,0,D,U),z=new ae(0,0,D,U);let G=!1;const dt=new Po;let mt=!1,xt=!1,Rt=null;const Dt=new ee,It=new rt,zt=new L,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?q:1}let N=n;function ut(C,V){for(let j=0;j<C.length;j++){const K=C[j],$=e.getContext(K,V);if($!==null)return $}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),N=ut(V,C),N===null)throw ut(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,st,et,At,vt,Et,Ut,qt,re,P,T,X,ot,nt,at,wt,ct,gt,F,ht,tt,Ft,Tt,Lt;function bt(){Q=new Mp(N),st=new gp(N,Q,t),Q.init(st),Ft=new og(N,Q,st),et=new sg(N,Q,st),At=new bp(N),vt=new Wm,Et=new rg(N,Q,et,vt,st,Ft,At),Ut=new _p(_),qt=new Sp(_),re=new Nu(N,st),Tt=new pp(N,Q,re,st),P=new Ep(N,re,At,Tt),T=new Rp(N,P,re,At),F=new Cp(N,st,Et),wt=new vp(vt),X=new Vm(_,Ut,qt,Q,st,Tt,wt),ot=new ug(_,vt),nt=new Xm,at=new Jm(Q,st),gt=new fp(_,Ut,qt,et,T,u,l),ct=new ig(_,T,st),Lt=new dg(N,At,st,et),ht=new mp(N,Q,At,st),tt=new wp(N,Q,At,st),At.programs=X.programs,_.capabilities=st,_.extensions=Q,_.properties=vt,_.renderLists=nt,_.shadowMap=ct,_.state=et,_.info=At}bt();const St=new hg(_,N);this.xr=St,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(D,U,!1))},this.getSize=function(C){return C.set(D,U)},this.setSize=function(C,V,j=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,U=V,e.width=Math.floor(C*q),e.height=Math.floor(V*q),j===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(D*q,U*q).floor()},this.setDrawingBufferSize=function(C,V,j){D=C,U=V,q=j,e.width=Math.floor(C*j),e.height=Math.floor(V*j),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,V,j,K){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,V,j,K),et.viewport(w.copy(J).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,V,j,K){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,V,j,K),et.scissor(B.copy(z).multiplyScalar(q).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(C){et.setScissorTest(G=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor.apply(gt,arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha.apply(gt,arguments)},this.clear=function(C=!0,V=!0,j=!0){let K=0;if(C){let $=!1;if(A!==null){const yt=A.texture.format;$=yt===pc||yt===fc||yt===dc}if($){const yt=A.texture.type,Ct=yt===zn||yt===Un||yt===Ao||yt===ei||yt===hc||yt===uc,Ot=gt.getClearColor(),kt=gt.getClearAlpha(),Wt=Ot.r,Ht=Ot.g,Gt=Ot.b;Ct?(f[0]=Wt,f[1]=Ht,f[2]=Gt,f[3]=kt,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Wt,g[1]=Ht,g[2]=Gt,g[3]=kt,N.clearBufferiv(N.COLOR,0,g))}else K|=N.COLOR_BUFFER_BIT}V&&(K|=N.DEPTH_BUFFER_BIT),j&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),nt.dispose(),at.dispose(),vt.dispose(),Ut.dispose(),qt.dispose(),T.dispose(),Tt.dispose(),Lt.dispose(),X.dispose(),St.dispose(),St.removeEventListener("sessionstart",Ve),St.removeEventListener("sessionend",ne),Rt&&(Rt.dispose(),Rt=null),Pe.stop()};function Yt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=At.autoReset,V=ct.enabled,j=ct.autoUpdate,K=ct.needsUpdate,$=ct.type;bt(),At.autoReset=C,ct.enabled=V,ct.autoUpdate=j,ct.needsUpdate=K,ct.type=$}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function it(C){const V=C.target;V.removeEventListener("dispose",it),Z(V)}function Z(C){lt(C),vt.remove(C)}function lt(C){const V=vt.get(C).programs;V!==void 0&&(V.forEach(function(j){X.releaseProgram(j)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,j,K,$,yt){V===null&&(V=Zt);const Ct=$.isMesh&&$.matrixWorld.determinant()<0,Ot=ih(C,V,j,K,$);et.setMaterial(K,Ct);let kt=j.index,Wt=1;if(K.wireframe===!0){if(kt=P.getWireframeAttribute(j),kt===void 0)return;Wt=2}const Ht=j.drawRange,Gt=j.attributes.position;let he=Ht.start*Wt,ze=(Ht.start+Ht.count)*Wt;yt!==null&&(he=Math.max(he,yt.start*Wt),ze=Math.min(ze,(yt.start+yt.count)*Wt)),kt!==null?(he=Math.max(he,0),ze=Math.min(ze,kt.count)):Gt!=null&&(he=Math.max(he,0),ze=Math.min(ze,Gt.count));const ye=ze-he;if(ye<0||ye===1/0)return;Tt.setup($,K,Ot,j,kt);let dn,ce=ht;if(kt!==null&&(dn=re.get(kt),ce=tt,ce.setIndex(dn)),$.isMesh)K.wireframe===!0?(et.setLineWidth(K.wireframeLinewidth*Nt()),ce.setMode(N.LINES)):ce.setMode(N.TRIANGLES);else if($.isLine){let $t=K.linewidth;$t===void 0&&($t=1),et.setLineWidth($t*Nt()),$.isLineSegments?ce.setMode(N.LINES):$.isLineLoop?ce.setMode(N.LINE_LOOP):ce.setMode(N.LINE_STRIP)}else $.isPoints?ce.setMode(N.POINTS):$.isSprite&&ce.setMode(N.TRIANGLES);if($.isInstancedMesh)ce.renderInstances(he,ye,$.count);else if(j.isInstancedBufferGeometry){const $t=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,vr=Math.min(j.instanceCount,$t);ce.renderInstances(he,ye,vr)}else ce.render(he,ye)};function Pt(C,V,j){C.transparent===!0&&C.side===tn&&C.forceSinglePass===!1?(C.side=Ce,C.needsUpdate=!0,xs(C,V,j),C.side=bn,C.needsUpdate=!0,xs(C,V,j),C.side=tn):xs(C,V,j)}this.compile=function(C,V,j=null){j===null&&(j=C),m=at.get(j),m.init(),x.push(m),j.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),C!==j&&C.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(_._useLegacyLights);const K=new Set;return C.traverse(function($){const yt=$.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const Ot=yt[Ct];Pt(Ot,j,$),K.add(Ot)}else Pt(yt,j,$),K.add(yt)}),x.pop(),m=null,K},this.compileAsync=function(C,V,j=null){const K=this.compile(C,V,j);return new Promise($=>{function yt(){if(K.forEach(function(Ct){vt.get(Ct).currentProgram.isReady()&&K.delete(Ct)}),K.size===0){$(C);return}setTimeout(yt,10)}Q.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Kt=null;function ue(C){Kt&&Kt(C)}function Ve(){Pe.stop()}function ne(){Pe.start()}const Pe=new Cc;Pe.setAnimationLoop(ue),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(C){Kt=C,St.setAnimationLoop(C),C===null?Pe.stop():Pe.start()},St.addEventListener("sessionstart",Ve),St.addEventListener("sessionend",ne),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(V),V=St.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,V,A),m=at.get(C,x.length),m.init(),x.push(m),Dt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),dt.setFromProjectionMatrix(Dt),xt=this.localClippingEnabled,mt=wt.init(this.clippingPlanes,xt),v=nt.get(C,p.length),v.init(),p.push(v),rn(C,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,W),this.info.render.frame++,mt===!0&&wt.beginShadows();const j=m.state.shadowsArray;if(ct.render(j,C,V),mt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),gt.render(v,C),m.setupLights(_._useLegacyLights),V.isArrayCamera){const K=V.cameras;for(let $=0,yt=K.length;$<yt;$++){const Ct=K[$];Go(v,C,Ct,Ct.viewport)}}else Go(v,C,V);A!==null&&(Et.updateMultisampleRenderTarget(A),Et.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,V),Tt.resetDefaultState(),I=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function rn(C,V,j,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||dt.intersectsSprite(C)){K&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Dt);const Ct=T.update(C),Ot=C.material;Ot.visible&&v.push(C,Ct,Ot,j,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||dt.intersectsObject(C))){const Ct=T.update(C),Ot=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),zt.copy(Ct.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ot)){const kt=Ct.groups;for(let Wt=0,Ht=kt.length;Wt<Ht;Wt++){const Gt=kt[Wt],he=Ot[Gt.materialIndex];he&&he.visible&&v.push(C,Ct,he,j,zt.z,Gt)}}else Ot.visible&&v.push(C,Ct,Ot,j,zt.z,null)}}const yt=C.children;for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++)rn(yt[Ct],V,j,K)}function Go(C,V,j,K){const $=C.opaque,yt=C.transmissive,Ct=C.transparent;m.setupLightsView(j),mt===!0&&wt.setGlobalState(_.clippingPlanes,j),yt.length>0&&nh($,yt,V,j),K&&et.viewport(w.copy(K)),$.length>0&&_s($,V,j),yt.length>0&&_s(yt,V,j),Ct.length>0&&_s(Ct,V,j),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function nh(C,V,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const yt=st.isWebGL2;Rt===null&&(Rt=new si(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?cs:zn,minFilter:ls,samples:yt?4:0})),_.getDrawingBufferSize(It),yt?Rt.setSize(It.x,It.y):Rt.setSize(_o(It.x),_o(It.y));const Ct=_.getRenderTarget();_.setRenderTarget(Rt),_.getClearColor(O),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();const Ot=_.toneMapping;_.toneMapping=Bn,_s(C,j,K),Et.updateMultisampleRenderTarget(Rt),Et.updateRenderTargetMipmap(Rt);let kt=!1;for(let Wt=0,Ht=V.length;Wt<Ht;Wt++){const Gt=V[Wt],he=Gt.object,ze=Gt.geometry,ye=Gt.material,dn=Gt.group;if(ye.side===tn&&he.layers.test(K.layers)){const ce=ye.side;ye.side=Ce,ye.needsUpdate=!0,Vo(he,j,K,ze,ye,dn),ye.side=ce,ye.needsUpdate=!0,kt=!0}}kt===!0&&(Et.updateMultisampleRenderTarget(Rt),Et.updateRenderTargetMipmap(Rt)),_.setRenderTarget(Ct),_.setClearColor(O,R),_.toneMapping=Ot}function _s(C,V,j){const K=V.isScene===!0?V.overrideMaterial:null;for(let $=0,yt=C.length;$<yt;$++){const Ct=C[$],Ot=Ct.object,kt=Ct.geometry,Wt=K===null?Ct.material:K,Ht=Ct.group;Ot.layers.test(j.layers)&&Vo(Ot,V,j,kt,Wt,Ht)}}function Vo(C,V,j,K,$,yt){C.onBeforeRender(_,V,j,K,$,yt),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(_,V,j,K,C,yt),$.transparent===!0&&$.side===tn&&$.forceSinglePass===!1?($.side=Ce,$.needsUpdate=!0,_.renderBufferDirect(j,V,K,$,C,yt),$.side=bn,$.needsUpdate=!0,_.renderBufferDirect(j,V,K,$,C,yt),$.side=tn):_.renderBufferDirect(j,V,K,$,C,yt),C.onAfterRender(_,V,j,K,$,yt)}function xs(C,V,j){V.isScene!==!0&&(V=Zt);const K=vt.get(C),$=m.state.lights,yt=m.state.shadowsArray,Ct=$.state.version,Ot=X.getParameters(C,$.state,yt,V,j),kt=X.getProgramCacheKey(Ot);let Wt=K.programs;K.environment=C.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(C.isMeshStandardMaterial?qt:Ut).get(C.envMap||K.environment),Wt===void 0&&(C.addEventListener("dispose",it),Wt=new Map,K.programs=Wt);let Ht=Wt.get(kt);if(Ht!==void 0){if(K.currentProgram===Ht&&K.lightsStateVersion===Ct)return qo(C,Ot),Ht}else Ot.uniforms=X.getUniforms(C),C.onBuild(j,Ot,_),C.onBeforeCompile(Ot,_),Ht=X.acquireProgram(Ot,kt),Wt.set(kt,Ht),K.uniforms=Ot.uniforms;const Gt=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=wt.uniform),qo(C,Ot),K.needsLights=rh(C),K.lightsStateVersion=Ct,K.needsLights&&(Gt.ambientLightColor.value=$.state.ambient,Gt.lightProbe.value=$.state.probe,Gt.directionalLights.value=$.state.directional,Gt.directionalLightShadows.value=$.state.directionalShadow,Gt.spotLights.value=$.state.spot,Gt.spotLightShadows.value=$.state.spotShadow,Gt.rectAreaLights.value=$.state.rectArea,Gt.ltc_1.value=$.state.rectAreaLTC1,Gt.ltc_2.value=$.state.rectAreaLTC2,Gt.pointLights.value=$.state.point,Gt.pointLightShadows.value=$.state.pointShadow,Gt.hemisphereLights.value=$.state.hemi,Gt.directionalShadowMap.value=$.state.directionalShadowMap,Gt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Gt.spotShadowMap.value=$.state.spotShadowMap,Gt.spotLightMatrix.value=$.state.spotLightMatrix,Gt.spotLightMap.value=$.state.spotLightMap,Gt.pointShadowMap.value=$.state.pointShadowMap,Gt.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=Ht,K.uniformsList=null,Ht}function Wo(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=sr.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function qo(C,V){const j=vt.get(C);j.outputColorSpace=V.outputColorSpace,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function ih(C,V,j,K,$){V.isScene!==!0&&(V=Zt),Et.resetTextureUnits();const yt=V.fog,Ct=K.isMeshStandardMaterial?V.environment:null,Ot=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tn,kt=(K.isMeshStandardMaterial?qt:Ut).get(K.envMap||Ct),Wt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ht=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Gt=!!j.morphAttributes.position,he=!!j.morphAttributes.normal,ze=!!j.morphAttributes.color;let ye=Bn;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ye=_.toneMapping);const dn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ce=dn!==void 0?dn.length:0,$t=vt.get(K),vr=m.state.lights;if(mt===!0&&(xt===!0||C!==S)){const ke=C===S&&K.id===I;wt.setState(K,C,ke)}let de=!1;K.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==vr.state.version||$t.outputColorSpace!==Ot||$.isInstancedMesh&&$t.instancing===!1||!$.isInstancedMesh&&$t.instancing===!0||$.isSkinnedMesh&&$t.skinning===!1||!$.isSkinnedMesh&&$t.skinning===!0||$.isInstancedMesh&&$t.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$t.instancingColor===!1&&$.instanceColor!==null||$t.envMap!==kt||K.fog===!0&&$t.fog!==yt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==wt.numPlanes||$t.numIntersection!==wt.numIntersection)||$t.vertexAlphas!==Wt||$t.vertexTangents!==Ht||$t.morphTargets!==Gt||$t.morphNormals!==he||$t.morphColors!==ze||$t.toneMapping!==ye||st.isWebGL2===!0&&$t.morphTargetsCount!==ce)&&(de=!0):(de=!0,$t.__version=K.version);let kn=$t.currentProgram;de===!0&&(kn=xs(K,V,$));let Xo=!1,Vi=!1,_r=!1;const Le=kn.getUniforms(),Hn=$t.uniforms;if(et.useProgram(kn.program)&&(Xo=!0,Vi=!0,_r=!0),K.id!==I&&(I=K.id,Vi=!0),Xo||S!==C){Le.setValue(N,"projectionMatrix",C.projectionMatrix),Le.setValue(N,"viewMatrix",C.matrixWorldInverse);const ke=Le.map.cameraPosition;ke!==void 0&&ke.setValue(N,zt.setFromMatrixPosition(C.matrixWorld)),st.logarithmicDepthBuffer&&Le.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Le.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Vi=!0,_r=!0)}if($.isSkinnedMesh){Le.setOptional(N,$,"bindMatrix"),Le.setOptional(N,$,"bindMatrixInverse");const ke=$.skeleton;ke&&(st.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),Le.setValue(N,"boneTexture",ke.boneTexture,Et),Le.setValue(N,"boneTextureSize",ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xr=j.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0&&st.isWebGL2===!0)&&F.update($,j,kn),(Vi||$t.receiveShadow!==$.receiveShadow)&&($t.receiveShadow=$.receiveShadow,Le.setValue(N,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Hn.envMap.value=kt,Hn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Vi&&(Le.setValue(N,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&sh(Hn,_r),yt&&K.fog===!0&&ot.refreshFogUniforms(Hn,yt),ot.refreshMaterialUniforms(Hn,K,q,U,Rt),sr.upload(N,Wo($t),Hn,Et)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(sr.upload(N,Wo($t),Hn,Et),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Le.setValue(N,"center",$.center),Le.setValue(N,"modelViewMatrix",$.modelViewMatrix),Le.setValue(N,"normalMatrix",$.normalMatrix),Le.setValue(N,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ke=K.uniformsGroups;for(let yr=0,oh=ke.length;yr<oh;yr++)if(st.isWebGL2){const jo=ke[yr];Lt.update(jo,kn),Lt.bind(jo,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function sh(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function rh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,V,j){vt.get(C.texture).__webglTexture=V,vt.get(C.depthTexture).__webglTexture=j;const K=vt.get(C);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const j=vt.get(C);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,j=0){A=C,E=V,b=j;let K=!0,$=null,yt=!1,Ct=!1;if(C){const kt=vt.get(C);kt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(N.FRAMEBUFFER,null),K=!1):kt.__webglFramebuffer===void 0?Et.setupRenderTarget(C):kt.__hasExternalTextures&&Et.rebindTextures(C,vt.get(C.texture).__webglTexture,vt.get(C.depthTexture).__webglTexture);const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Ct=!0);const Ht=vt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?$=Ht[V][j]:$=Ht[V],yt=!0):st.isWebGL2&&C.samples>0&&Et.useMultisampledRTT(C)===!1?$=vt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ht)?$=Ht[j]:$=Ht,w.copy(C.viewport),B.copy(C.scissor),H=C.scissorTest}else w.copy(J).multiplyScalar(q).floor(),B.copy(z).multiplyScalar(q).floor(),H=G;if(et.bindFramebuffer(N.FRAMEBUFFER,$)&&st.drawBuffers&&K&&et.drawBuffers(C,$),et.viewport(w),et.scissor(B),et.setScissorTest(H),yt){const kt=vt.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,kt.__webglTexture,j)}else if(Ct){const kt=vt.get(C.texture),Wt=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,kt.__webglTexture,j||0,Wt)}I=-1},this.readRenderTargetPixels=function(C,V,j,K,$,yt,Ct){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ot=Ot[Ct]),Ot){et.bindFramebuffer(N.FRAMEBUFFER,Ot);try{const kt=C.texture,Wt=kt.format,Ht=kt.type;if(Wt!==nn&&Ft.convert(Wt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ht===cs&&(Q.has("EXT_color_buffer_half_float")||st.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ht!==zn&&Ft.convert(Ht)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Fn&&(st.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&j>=0&&j<=C.height-$&&N.readPixels(V,j,K,$,Ft.convert(Wt),Ft.convert(Ht),yt)}finally{const kt=A!==null?vt.get(A).__webglFramebuffer:null;et.bindFramebuffer(N.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(C,V,j=0){const K=Math.pow(2,-j),$=Math.floor(V.image.width*K),yt=Math.floor(V.image.height*K);Et.setTexture2D(V,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,C.x,C.y,$,yt),et.unbindTexture()},this.copyTextureToTexture=function(C,V,j,K=0){const $=V.image.width,yt=V.image.height,Ct=Ft.convert(j.format),Ot=Ft.convert(j.type);Et.setTexture2D(j,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment),V.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,C.x,C.y,$,yt,Ct,Ot,V.image.data):V.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ct,V.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,K,C.x,C.y,Ct,Ot,V.image),K===0&&j.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,V,j,K,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=C.max.x-C.min.x+1,Ct=C.max.y-C.min.y+1,Ot=C.max.z-C.min.z+1,kt=Ft.convert(K.format),Wt=Ft.convert(K.type);let Ht;if(K.isData3DTexture)Et.setTexture3D(K,0),Ht=N.TEXTURE_3D;else if(K.isDataArrayTexture)Et.setTexture2DArray(K,0),Ht=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);const Gt=N.getParameter(N.UNPACK_ROW_LENGTH),he=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ze=N.getParameter(N.UNPACK_SKIP_PIXELS),ye=N.getParameter(N.UNPACK_SKIP_ROWS),dn=N.getParameter(N.UNPACK_SKIP_IMAGES),ce=j.isCompressedTexture?j.mipmaps[0]:j.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?N.texSubImage3D(Ht,$,V.x,V.y,V.z,yt,Ct,Ot,kt,Wt,ce.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ht,$,V.x,V.y,V.z,yt,Ct,Ot,kt,ce.data)):N.texSubImage3D(Ht,$,V.x,V.y,V.z,yt,Ct,Ot,kt,Wt,ce),N.pixelStorei(N.UNPACK_ROW_LENGTH,Gt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,dn),$===0&&K.generateMipmaps&&N.generateMipmap(Ht),et.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Et.setTextureCube(C,0):C.isData3DTexture?Et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Et.setTexture2DArray(C,0):Et.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,et.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Co?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===fr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Me?ii:mc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ii?Me:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class fg extends Io{}fg.prototype.isWebGL1Renderer=!0;class Nc extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class ml extends Re{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ti=new ee,gl=new ee,Vs=[],vl=new ai,pg=new ee,Ki=new Qt,$i=new ki;class mg extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ml(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,pg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),vl.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(vl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),$i.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union($i)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),t.ray.intersectsSphere($i)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ti),gl.multiplyMatrices(n,Ti),Ki.matrixWorld=gl,Ki.raycast(t,Vs);for(let o=0,a=Vs.length;o<a;o++){const l=Vs[o];l.instanceId=s,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ml(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Uc extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _l=new ee,yo=new Ro,Ws=new ki,qs=new L;class gg extends we{constructor(t=new Ne,e=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=s,t.ray.intersectsSphere(Ws)===!1)return;_l.copy(i).invert(),yo.copy(t.ray).applyMatrix4(_l);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,v=f;g<v;g++){const m=c.getX(g);qs.fromBufferAttribute(d,m),xl(qs,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,v=f;g<v;g++)qs.fromBufferAttribute(d,g),xl(qs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xl(r,t,e,n,i,s,o){const a=yo.distanceSqToPoint(r);if(a<e){const l=new L;yo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class yl extends Be{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new rt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],s=[],o=[],a=new L,l=new ee;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ee(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ee(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Do extends un{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new rt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vg extends Do{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function No(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Xs=new L,Zr=new No,Jr=new No,Qr=new No;class _g extends un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Xs.subVectors(i[0],i[1]).add(i[0]),c=Xs);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Xs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Zr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Jr.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Qr.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Zr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Jr.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qr.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Zr.calc(l),Jr.calc(l),Qr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sl(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function xg(r,t){const e=1-r;return e*e*t}function yg(r,t){return 2*(1-r)*r*t}function Sg(r,t){return r*r*t}function ss(r,t,e,n){return xg(r,t)+yg(r,e)+Sg(r,n)}function Mg(r,t){const e=1-r;return e*e*e*t}function Eg(r,t){const e=1-r;return 3*e*e*r*t}function wg(r,t){return 3*(1-r)*r*r*t}function bg(r,t){return r*r*r*t}function rs(r,t,e,n,i){return Mg(r,t)+Eg(r,e)+wg(r,n)+bg(r,i)}class Fc extends un{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,i.x,s.x,o.x,a.x),rs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tg extends un{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,i.x,s.x,o.x,a.x),rs(t,i.y,s.y,o.y,a.y),rs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oc extends un{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ag extends un{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bc extends un{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ss(t,i.x,s.x,o.x),ss(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cg extends un{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ss(t,i.x,s.x,o.x),ss(t,i.y,s.y,o.y),ss(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zc extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Sl(a,l.x,c.x,h.x,d.x),Sl(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var So=Object.freeze({__proto__:null,ArcCurve:vg,CatmullRomCurve3:_g,CubicBezierCurve:Fc,CubicBezierCurve3:Tg,EllipseCurve:Do,LineCurve:Oc,LineCurve3:Ag,QuadraticBezierCurve:Bc,QuadraticBezierCurve3:Cg,SplineCurve:zc});class Rg extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new So[i.type]().fromJSON(i))}return this}}class Ml extends Rg{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Oc(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Bc(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Fc(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Do(t,e,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mr extends Ne{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function x(){const y=new L,E=new L;let b=0;const A=(e-t)/n;for(let I=0;I<=s;I++){const S=[],w=I/s,B=w*(e-t)+t;for(let H=0;H<=i;H++){const O=H/i,R=O*l+a,D=Math.sin(R),U=Math.cos(R);E.x=B*D,E.y=-w*n+m,E.z=B*U,d.push(E.x,E.y,E.z),y.set(D,A,U).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-w),S.push(g++)}v.push(S)}for(let I=0;I<i;I++)for(let S=0;S<s;S++){const w=v[S][I],B=v[S+1][I],H=v[S+1][I+1],O=v[S][I+1];h.push(w,B,O),h.push(B,H,O),b+=6}c.addGroup(p,b,0),p+=b}function _(y){const E=g,b=new rt,A=new L;let I=0;const S=y===!0?t:e,w=y===!0?1:-1;for(let H=1;H<=i;H++)d.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),g++;const B=g;for(let H=0;H<=i;H++){const R=H/i*l+a,D=Math.cos(R),U=Math.sin(R);A.x=S*U,A.y=m*w,A.z=S*D,d.push(A.x,A.y,A.z),u.push(0,w,0),b.x=D*.5+.5,b.y=U*.5*w+.5,f.push(b.x,b.y),g++}for(let H=0;H<i;H++){const O=E+H,R=B+H;y===!0?h.push(R,R+1,O):h.push(R+1,R,O),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Uo extends mr{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Uo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends Ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(s.slice(),3)),this.setAttribute("uv",new ge(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new L,y=new L,E=new L;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],y),f(e[b+2],E),l(_,y,E,x)}function l(x,_,y,E){const b=E+1,A=[];for(let I=0;I<=b;I++){A[I]=[];const S=x.clone().lerp(y,I/b),w=_.clone().lerp(y,I/b),B=b-I;for(let H=0;H<=B;H++)H===0&&I===b?A[I][H]=S:A[I][H]=S.clone().lerp(w,H/B)}for(let I=0;I<b;I++)for(let S=0;S<2*(b-I)-1;S++){const w=Math.floor(S/2);S%2===0?(u(A[I][w+1]),u(A[I+1][w]),u(A[I][w])):(u(A[I][w+1]),u(A[I+1][w+1]),u(A[I+1][w]))}}function c(x){const _=new L;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(x),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){const x=new L;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const y=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;o.push(y,1-E)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const _=o[x+0],y=o[x+2],E=o[x+4],b=Math.max(_,y,E),A=Math.min(_,y,E);b>.9&&A<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,_){const y=x*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const x=new L,_=new L,y=new L,E=new L,b=new rt,A=new rt,I=new rt;for(let S=0,w=0;S<s.length;S+=9,w+=6){x.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),b.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),E.copy(x).add(_).add(y).divideScalar(3);const B=m(E);v(b,w+0,x,B),v(A,w+2,_,B),v(I,w+4,y,B)}}function v(x,_,y,E){E<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.vertices,t.indices,t.radius,t.details)}}let Pg=class extends Ml{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ml().fromJSON(i))}return this}};const Lg={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=kc(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,d,u,f;if(n&&(s=Fg(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)d=r[g],u=r[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return us(s,o,e,a,l,f,0),o}};function kc(r,t,e,n,i){let s,o;if(i===jg(r,t,e,n)>0)for(s=t;s<e;s+=n)o=El(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=El(s,r[s],r[s+1],o);return o&&gr(o,o.next)&&(fs(o),o=o.next),o}function ri(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(gr(e,e.next)||le(e.prev,e,e.next)===0)){if(fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function us(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Hg(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Dg(r,n,i,s):Ig(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),fs(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Ng(ri(r),t,e),us(r,t,e,n,i,s,2)):o===2&&Ug(r,t,e,n,i,s):us(ri(r),t,e,n,i,s,1);break}}}function Ig(r){const t=r.prev,e=r,n=r.next;if(le(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,u=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Pi(i,a,s,l,o,c,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dg(r,t,e,n){const i=r.prev,s=r,o=r.next;if(le(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Mo(f,g,t,e,n),x=Mo(v,m,t,e,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=p&&y&&y.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Pi(a,h,l,d,c,u,_.x,_.y)&&le(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Pi(a,h,l,d,c,u,y.x,y.y)&&le(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Pi(a,h,l,d,c,u,_.x,_.y)&&le(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Pi(a,h,l,d,c,u,y.x,y.y)&&le(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ng(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!gr(i,s)&&Hc(i,n,n.next,s)&&ds(i,s)&&ds(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),fs(n),fs(n.next),n=r=s),n=n.next}while(n!==r);return ri(n)}function Ug(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wg(o,a)){let l=Gc(o,a);o=ri(o,o.next),l=ri(l,l.next),us(o,t,e,n,i,s,0),us(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Fg(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=kc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Vg(c));for(i.sort(Og),s=0;s<i.length;s++)e=Bg(i[s],e);return e}function Og(r,t){return r.x-t.x}function Bg(r,t){const e=zg(r,t);if(!e)return t;const n=Gc(e,r);return ri(n,n.next),ri(e,e.next)}function zg(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Pi(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),ds(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&kg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function kg(r,t){return le(r.prev,r,t.prev)<0&&le(t.next,r,r.next)<0}function Hg(r,t,e,n){let i=r;do i.z===0&&(i.z=Mo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Gg(i)}function Gg(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Mo(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Vg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Pi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Wg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!qg(r,t)&&(ds(r,t)&&ds(t,r)&&Xg(r,t)&&(le(r.prev,r,t.prev)||le(r,t.prev,t))||gr(r,t)&&le(r.prev,r,r.next)>0&&le(t.prev,t,t.next)>0)}function le(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function gr(r,t){return r.x===t.x&&r.y===t.y}function Hc(r,t,e,n){const i=Ys(le(r,t,e)),s=Ys(le(r,t,n)),o=Ys(le(e,n,r)),a=Ys(le(e,n,t));return!!(i!==s&&o!==a||i===0&&js(r,e,t)||s===0&&js(r,n,t)||o===0&&js(e,r,n)||a===0&&js(e,t,n))}function js(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ys(r){return r>0?1:r<0?-1:0}function qg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Hc(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ds(r,t){return le(r.prev,r,r.next)<0?le(r,t,r.next)>=0&&le(r,r.prev,t)>=0:le(r,t,r.prev)<0||le(r,r.next,t)<0}function Xg(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Gc(r,t){const e=new Eo(r.i,r.x,r.y),n=new Eo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function El(r,t,e,n){const i=new Eo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Eo(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jg(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class os{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];wl(t),bl(n,t);let o=t.length;e.forEach(wl);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,bl(n,e[l]);const a=Lg.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function wl(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function bl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Vc extends Ne{constructor(t=new Pg([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ge(i,3)),this.setAttribute("uv",new ge(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Yg;let _,y=!1,E,b,A,I;p&&(_=p.getSpacedPoints(h),y=!0,u=!1,E=p.computeFrenetFrames(h,!1),b=new L,A=new L,I=new L),u||(m=0,f=0,g=0,v=0);const S=a.extractPoints(c);let w=S.shape;const B=S.holes;if(!os.isClockWise(w)){w=w.reverse();for(let N=0,ut=B.length;N<ut;N++){const Q=B[N];os.isClockWise(Q)&&(B[N]=Q.reverse())}}const O=os.triangulateShape(w,B),R=w;for(let N=0,ut=B.length;N<ut;N++){const Q=B[N];w=w.concat(Q)}function D(N,ut,Q){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ut,Q)}const U=w.length,q=O.length;function Y(N,ut,Q){let st,et,At;const vt=N.x-ut.x,Et=N.y-ut.y,Ut=Q.x-N.x,qt=Q.y-N.y,re=vt*vt+Et*Et,P=vt*qt-Et*Ut;if(Math.abs(P)>Number.EPSILON){const T=Math.sqrt(re),X=Math.sqrt(Ut*Ut+qt*qt),ot=ut.x-Et/T,nt=ut.y+vt/T,at=Q.x-qt/X,wt=Q.y+Ut/X,ct=((at-ot)*qt-(wt-nt)*Ut)/(vt*qt-Et*Ut);st=ot+vt*ct-N.x,et=nt+Et*ct-N.y;const gt=st*st+et*et;if(gt<=2)return new rt(st,et);At=Math.sqrt(gt/2)}else{let T=!1;vt>Number.EPSILON?Ut>Number.EPSILON&&(T=!0):vt<-Number.EPSILON?Ut<-Number.EPSILON&&(T=!0):Math.sign(Et)===Math.sign(qt)&&(T=!0),T?(st=-Et,et=vt,At=Math.sqrt(re)):(st=vt,et=Et,At=Math.sqrt(re/2))}return new rt(st/At,et/At)}const W=[];for(let N=0,ut=R.length,Q=ut-1,st=N+1;N<ut;N++,Q++,st++)Q===ut&&(Q=0),st===ut&&(st=0),W[N]=Y(R[N],R[Q],R[st]);const J=[];let z,G=W.concat();for(let N=0,ut=B.length;N<ut;N++){const Q=B[N];z=[];for(let st=0,et=Q.length,At=et-1,vt=st+1;st<et;st++,At++,vt++)At===et&&(At=0),vt===et&&(vt=0),z[st]=Y(Q[st],Q[At],Q[vt]);J.push(z),G=G.concat(z)}for(let N=0;N<m;N++){const ut=N/m,Q=f*Math.cos(ut*Math.PI/2),st=g*Math.sin(ut*Math.PI/2)+v;for(let et=0,At=R.length;et<At;et++){const vt=D(R[et],W[et],st);Dt(vt.x,vt.y,-Q)}for(let et=0,At=B.length;et<At;et++){const vt=B[et];z=J[et];for(let Et=0,Ut=vt.length;Et<Ut;Et++){const qt=D(vt[Et],z[Et],st);Dt(qt.x,qt.y,-Q)}}}const dt=g+v;for(let N=0;N<U;N++){const ut=u?D(w[N],G[N],dt):w[N];y?(A.copy(E.normals[0]).multiplyScalar(ut.x),b.copy(E.binormals[0]).multiplyScalar(ut.y),I.copy(_[0]).add(A).add(b),Dt(I.x,I.y,I.z)):Dt(ut.x,ut.y,0)}for(let N=1;N<=h;N++)for(let ut=0;ut<U;ut++){const Q=u?D(w[ut],G[ut],dt):w[ut];y?(A.copy(E.normals[N]).multiplyScalar(Q.x),b.copy(E.binormals[N]).multiplyScalar(Q.y),I.copy(_[N]).add(A).add(b),Dt(I.x,I.y,I.z)):Dt(Q.x,Q.y,d/h*N)}for(let N=m-1;N>=0;N--){const ut=N/m,Q=f*Math.cos(ut*Math.PI/2),st=g*Math.sin(ut*Math.PI/2)+v;for(let et=0,At=R.length;et<At;et++){const vt=D(R[et],W[et],st);Dt(vt.x,vt.y,d+Q)}for(let et=0,At=B.length;et<At;et++){const vt=B[et];z=J[et];for(let Et=0,Ut=vt.length;Et<Ut;Et++){const qt=D(vt[Et],z[Et],st);y?Dt(qt.x,qt.y+_[h-1].y,_[h-1].x+Q):Dt(qt.x,qt.y,d+Q)}}}mt(),xt();function mt(){const N=i.length/3;if(u){let ut=0,Q=U*ut;for(let st=0;st<q;st++){const et=O[st];It(et[2]+Q,et[1]+Q,et[0]+Q)}ut=h+m*2,Q=U*ut;for(let st=0;st<q;st++){const et=O[st];It(et[0]+Q,et[1]+Q,et[2]+Q)}}else{for(let ut=0;ut<q;ut++){const Q=O[ut];It(Q[2],Q[1],Q[0])}for(let ut=0;ut<q;ut++){const Q=O[ut];It(Q[0]+U*h,Q[1]+U*h,Q[2]+U*h)}}n.addGroup(N,i.length/3-N,0)}function xt(){const N=i.length/3;let ut=0;Rt(R,ut),ut+=R.length;for(let Q=0,st=B.length;Q<st;Q++){const et=B[Q];Rt(et,ut),ut+=et.length}n.addGroup(N,i.length/3-N,1)}function Rt(N,ut){let Q=N.length;for(;--Q>=0;){const st=Q;let et=Q-1;et<0&&(et=N.length-1);for(let At=0,vt=h+m*2;At<vt;At++){const Et=U*At,Ut=U*(At+1),qt=ut+st+Et,re=ut+et+Et,P=ut+et+Ut,T=ut+st+Ut;zt(qt,re,P,T)}}}function Dt(N,ut,Q){l.push(N),l.push(ut),l.push(Q)}function It(N,ut,Q){Zt(N),Zt(ut),Zt(Q);const st=i.length/3,et=x.generateTopUV(n,i,st-3,st-2,st-1);Nt(et[0]),Nt(et[1]),Nt(et[2])}function zt(N,ut,Q,st){Zt(N),Zt(ut),Zt(st),Zt(ut),Zt(Q),Zt(st);const et=i.length/3,At=x.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);Nt(At[0]),Nt(At[1]),Nt(At[3]),Nt(At[1]),Nt(At[2]),Nt(At[3])}function Zt(N){i.push(l[N*3+0]),i.push(l[N*3+1]),i.push(l[N*3+2])}function Nt(N){s.push(N.x),s.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new So[i.type]().fromJSON(i)),new Vc(n,t.options)}}const Yg={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new rt(s,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-d),new rt(u,1-g),new rt(v,1-p)]:[new rt(a,1-l),new rt(h,1-d),new rt(f,1-g),new rt(m,1-p)]}};function Kg(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Oo extends Fo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oo(t.radius,t.detail)}}class ms extends Ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const b=E/e;d.x=-t*Math.cos(i+b*s)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+b*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(b+y,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=h[p][x+1],y=h[p][x],E=h[p+1][x],b=h[p+1][x+1];(p!==0||o>0)&&f.push(_,y,b),(p!==n-1||l<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Je extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bo extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const to=new ee,Tl=new L,Al=new L;class Wc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tl),Al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Al),e.updateMatrixWorld(),to.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Cl=new ee,Zi=new L,eo=new L;class $g extends Wc{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zi),eo.copy(n.position),eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(eo),n.updateMatrixWorld(),i.makeTranslation(-Zi.x,-Zi.y,-Zi.z),Cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}class Rl extends Bo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $g}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zg extends Wc{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class no extends Bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Zg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jg extends Bo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class wo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);class sn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new sn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],x=i[3],_=i[4],y=i[5],E=i[6],b=i[7],A=i[8];return s[0]=o*v+a*x+l*E,s[1]=o*m+a*_+l*b,s[2]=o*p+a*y+l*A,s[3]=c*v+h*x+d*E,s[4]=c*m+h*_+d*b,s[5]=c*p+h*y+d*A,s[6]=u*v+f*x+g*E,s[7]=u*m+f*_+g*b,s[8]=u*p+f*y+g*A,e}scale(t,e){e===void 0&&(e=new sn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new sn);const e=3,n=6,i=Qg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=i*l,v=s*o,m=s*a,p=s*l,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-p,x[3*0+2]=d+m,x[3*1+0]=h+p,x[3*1+1]=1-(c+g),x[3*1+2]=f-v,x[3*2+0]=d-m,x[3*2+1]=f+v,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new sn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Qg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new sn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=tv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=ev;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Pl),Pl.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const tv=new M,ev=new M,Pl=new M;class oe{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Ll),c=Ll),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new oe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Il,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Il,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const Ll=new M,Il=[new M,new M,new M,new M,new M,new M,new M,new M];class Dl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class qc{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class me{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=nv,i=iv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new me);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new me);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new me),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new me(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new me);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,v,m;return f=i*l+s*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new me);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const nv=new M,iv=new M,sv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Mt{constructor(t){t===void 0&&(t={}),this.id=Mt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Mt.idCounter=0;Mt.types=sv;class Jt{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new me,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Jt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Jt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Nl),Nl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Nl=new me;class as extends Mt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];as.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new M;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new M,h=new M,d=new M,u=new M,f=new M,g=new M;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let x=0;x<p;x++){const _=a?a[x]:x;c.copy(m.faceNormals[_]),n.vmult(c,c);const y=m.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const x=m.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let x=0;x<p;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);const y=m.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();const _=m.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;as.project(a,t,n,i,io),as.project(e,t,s,o,so);const l=io[0],c=io[1],h=so[0],d=so[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new M,c=new M,h=new M,d=new M,u=new M,f=new M,g=new M,v=new M,m=this,p=[],x=i,_=p;let y=-1,E=Number.MAX_VALUE;for(let w=0;w<m.faces.length;w++){l.copy(m.faceNormals[w]),n.vmult(l,l);const B=l.dot(t);B<E&&(E=B,y=w)}if(y<0)return;const b=m.faces[y];b.connectedFaces=[];for(let w=0;w<m.faces.length;w++)for(let B=0;B<m.faces[w].length;B++)b.indexOf(m.faces[w][B])!==-1&&w!==y&&b.connectedFaces.indexOf(w)===-1&&b.connectedFaces.push(w);const A=b.length;for(let w=0;w<A;w++){const B=m.vertices[b[w]],H=m.vertices[b[(w+1)%A]];B.vsub(H,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(B),n.vmult(f,f),e.vadd(f,f);const O=b.connectedFaces[w];g.copy(this.faceNormals[O]);const R=this.getPlaneConstantOfFace(O);v.copy(g),n.vmult(v,v);const D=R-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,D);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);v.copy(g),n.vmult(v,v);const S=I-v.dot(e);for(let w=0;w<x.length;w++){let B=v.dot(x[w])+S;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=o){const H=x[w];if(B<=1e-6){const O={point:H,normal:v,depth:B};a.push(O)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new M;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new M;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new M;t.vsub(l,c);const h=a.dot(c),d=new M;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=rv;let l=0,c=0;const h=ov,d=t.vertices;h.setZero(),Jt.vectorToLocalFrame(n,i,e,a),Jt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const io=[],so=[];new M;const rv=new M,ov=new M;class En extends Mt{constructor(t){super({type:Mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new as({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),En.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Dn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Dn,Dn),t.vadd(Dn,Dn),n(Dn.x,Dn.y,Dn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;on[0].set(s.x,s.y,s.z),on[1].set(-s.x,s.y,s.z),on[2].set(-s.x,-s.y,s.z),on[3].set(-s.x,-s.y,-s.z),on[4].set(s.x,-s.y,-s.z),on[5].set(s.x,s.y,-s.z),on[6].set(-s.x,s.y,-s.z),on[7].set(s.x,-s.y,s.z);const o=on[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=on[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Dn=new M,on=[new M,new M,new M,new M,new M,new M,new M,new M],zo={DYNAMIC:1,STATIC:2,KINEMATIC:4},ko={AWAKE:0,SLEEPY:1,SLEEPING:2};class _t extends qc{constructor(t){t===void 0&&(t={}),super(),this.id=_t.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?_t.STATIC:_t.DYNAMIC,typeof t.type==typeof _t.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=_t.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new me,this.initQuaternion=new me,this.previousQuaternion=new me,this.interpolatedQuaternion=new me,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new sn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new sn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new oe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=_t.AWAKE,this.wakeUpAfterNarrowphase=!1,t===_t.SLEEPING&&this.dispatchEvent(_t.wakeupEvent)}sleep(){this.sleepState=_t.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===_t.AWAKE&&n<i?(this.sleepState=_t.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(_t.sleepyEvent)):e===_t.SLEEPY&&n>i?this.wakeUp():e===_t.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(_t.sleepEvent))}}updateSolveMassProperties(){this.sleepState===_t.SLEEPING||this.type===_t.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new me;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=av,o=lv,a=this.quaternion,l=this.aabb,c=cv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=hv,i=uv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==_t.DYNAMIC)return;this.sleepState===_t.SLEEPING&&this.wakeUp();const n=dv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==_t.DYNAMIC)return;const n=fv,i=pv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===_t.DYNAMIC&&(this.sleepState===_t.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==_t.DYNAMIC)return;this.sleepState===_t.SLEEPING&&this.wakeUp();const n=e,i=mv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=gv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==_t.DYNAMIC)return;const n=vv,i=_v;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=xv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),En.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===_t.DYNAMIC||this.type===_t.KINEMATIC)||this.sleepState===_t.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,x=l.z*v.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*x),s.y+=t*(g[3]*m+g[4]*p+g[5]*x),s.z+=t*(g[6]*m+g[7]*p+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}_t.idCounter=0;_t.COLLIDE_EVENT_NAME="collide";_t.DYNAMIC=zo.DYNAMIC;_t.STATIC=zo.STATIC;_t.KINEMATIC=zo.KINEMATIC;_t.AWAKE=ko.AWAKE;_t.SLEEPY=ko.SLEEPY;_t.SLEEPING=ko.SLEEPING;_t.wakeupEvent={type:"wakeup"};_t.sleepyEvent={type:"sleepy"};_t.sleepEvent={type:"sleep"};const av=new M,lv=new me,cv=new oe,hv=new sn,uv=new sn;new sn;const dv=new M,fv=new M,pv=new M,mv=new M,gv=new M,vv=new M,_v=new M,xv=new M;class yv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&_t.STATIC||t.sleepState===_t.SLEEPING)&&(e.type&_t.STATIC||e.sleepState===_t.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Sv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Mv,i=Ev,s=wv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Sv=new M;new M;new me;new M;const Mv={keys:[]},Ev=[],wv=[];new M;new M;new M;class Xc extends yv{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Oi{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let jc,Yc,Kc,$c,Zc,Jc,Qc;const Ho={CLOSEST:1,ANY:2,ALL:4};jc=Mt.types.SPHERE;Yc=Mt.types.PLANE;Kc=Mt.types.BOX;$c=Mt.types.CYLINDER;Zc=Mt.types.CONVEXPOLYHEDRON;Jc=Mt.types.HEIGHTFIELD;Qc=Mt.types.TRIMESH;class pe{get[jc](){return this._intersectSphere}get[Yc](){return this._intersectPlane}get[Kc](){return this._intersectBox}get[$c](){return this._intersectConvex}get[Zc](){return this._intersectConvex}get[Jc](){return this._intersectHeightfield}get[Qc](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=pe.ANY,this.result=new Oi,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||pe.ANY,this.result=e.result||new Oi,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ul),ro.length=0,t.broadphase.aabbQuery(t,Ul,ro),this.intersectBodies(ro),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=bv,s=Tv;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(kv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new M,v=new M,m=new M;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Av;o.from.copy(this.from),o.to.copy(this.to),Jt.pointToLocalFrame(n,e,o.from,o.from),Jt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Cv;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new oe;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),Jt.pointToWorldFrame(n,e,t.pillarOffset,Ks),this._intersectConvex(t.pillarConvex,e,Ks,i,s,Fl),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),Jt.pointToWorldFrame(n,e,t.pillarOffset,Ks),this._intersectConvex(t.pillarConvex,e,Ks,i,s,Fl)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=Rv,g=Pv;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Lv,l=Ol,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<p;_++){const y=c?c[_]:_,E=h[y],b=u[y],A=e,I=n;l.copy(d[E[0]]),A.vmult(l,l),l.vadd(I,l),l.vsub(g,l),A.vmult(b,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const w=a.dot(l)/S;if(!(w<0)){f.scale(w,Fe),Fe.vadd(g,Fe),Ze.copy(d[E[0]]),A.vmult(Ze,Ze),I.vadd(Ze,Ze);for(let B=1;!x.shouldStop&&B<E.length-1;B++){an.copy(d[E[B]]),ln.copy(d[E[B+1]]),A.vmult(an,an),A.vmult(ln,ln),I.vadd(an,an),I.vadd(ln,ln);const H=Fe.distanceTo(g);!(pe.pointInTriangle(Fe,Ze,an,ln)||pe.pointInTriangle(Fe,an,Ze,ln))||H>m||this.reportIntersection(a,Fe,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Iv,l=Bv,c=zv,h=Ol,d=Dv,u=Nv,f=Uv,g=Ov,v=Fv,m=t.indices;t.vertices;const p=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),Jt.vectorToLocalFrame(n,e,_,d),Jt.pointToLocalFrame(n,e,p,u),Jt.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let E=0,b=l.length;!this.result.shouldStop&&E!==b;E++){const A=l[E];t.getNormal(A,a),t.getVertex(m[A*3],Ze),Ze.vsub(u,h);const I=d.dot(a),S=a.dot(h)/I;if(S<0)continue;d.scale(S,Fe),Fe.vadd(u,Fe),t.getVertex(m[A*3+1],an),t.getVertex(m[A*3+2],ln);const w=Fe.distanceSquared(u);!(pe.pointInTriangle(Fe,an,Ze,ln)||pe.pointInTriangle(Fe,Ze,an,ln))||w>y||(Jt.vectorToWorldFrame(e,a,v),Jt.pointToWorldFrame(n,e,Fe,g),this.reportIntersection(v,g,s,i,A))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case pe.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case pe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case pe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Jn),n.vsub(e,Ji),t.vsub(e,oo);const s=Jn.dot(Jn),o=Jn.dot(Ji),a=Jn.dot(oo),l=Ji.dot(Ji),c=Ji.dot(oo);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}pe.CLOSEST=Ho.CLOSEST;pe.ANY=Ho.ANY;pe.ALL=Ho.ALL;const Ul=new oe,ro=[],Ji=new M,oo=new M,bv=new M,Tv=new me,Fe=new M,Ze=new M,an=new M,ln=new M;new M;new Oi;const Fl={faceList:[0]},Ks=new M,Av=new pe,Cv=[],Rv=new M,Pv=new M,Lv=new M;new M;new M;const Ol=new M,Iv=new M,Dv=new M,Nv=new M,Uv=new M,Fv=new M,Ov=new M;new oe;const Bv=[],zv=new Jt,Jn=new M,$s=new M;function kv(r,t,e){e.vsub(r,Jn);const n=Jn.dot(t);return t.scale(n,$s),$s.vadd(r,$s),e.distanceTo($s)}class Hv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Bl{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class gs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=gs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Bl,this.jacobianElementB=new Bl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,zl),a.scale(h,kl),n.invInertiaWorldSolve.vmult(o,Hl),i.invInertiaWorldSolve.vmult(l,Gl),t.multiplyVectors(zl,Hl)+e.multiplyVectors(kl,Gl)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,Zs),c+=Zs.dot(t.rotational),l.vmult(e.rotational,Zs),c+=Zs.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Gv;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}gs.idCounter=0;const zl=new M,kl=new M,Hl=new M,Gl=new M,Zs=new M,Gv=new M;class Vv extends gs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Wv,c=qv,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=Xv,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const x=p.dot(g),_=this.restitution+1,y=_*u.dot(p)-_*h.dot(p)+f.dot(c)-d.dot(l),E=this.computeGiMf();return-x*e-y*n-t*E}getImpactVelocityAlongNormal(){const t=jv,e=Yv,n=Kv,i=$v,s=Zv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Wv=new M,qv=new M,Xv=new M,jv=new M,Yv=new M,Kv=new M,$v=new M,Zv=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Vl extends gs{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Jv,o=Qv,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const Jv=new M,Qv=new M;class vs{constructor(t,e,n){n=Hv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=vs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}vs.idCounter=0;class Bi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Bi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Bi.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new pe;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class t0 extends Mt{constructor(t){if(super({type:Mt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class cn{constructor(t){t===void 0&&(t={}),this.root=t.root||null,this.aabb=t.aabb?t.aabb.clone():new oe,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(t,e,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(t))return!1;const s=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(t,e,n+1))return!0;a&&(s.length=0)}return i.push(e),!0}subdivide(){const t=this.aabb,e=t.lowerBound,n=t.upperBound,i=this.children;i.push(new cn({aabb:new oe({lowerBound:new M(0,0,0)})}),new cn({aabb:new oe({lowerBound:new M(1,0,0)})}),new cn({aabb:new oe({lowerBound:new M(1,1,0)})}),new cn({aabb:new oe({lowerBound:new M(1,1,1)})}),new cn({aabb:new oe({lowerBound:new M(0,1,1)})}),new cn({aabb:new oe({lowerBound:new M(0,0,1)})}),new cn({aabb:new oe({lowerBound:new M(1,0,1)})}),new cn({aabb:new oe({lowerBound:new M(0,1,0)})})),n.vsub(e,Xn),Xn.scale(.5,Xn);const s=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=s;const l=a.aabb.lowerBound;l.x*=Xn.x,l.y*=Xn.y,l.z*=Xn.z,l.vadd(e,l),l.vadd(Xn,a.aabb.upperBound)}}aabbQuery(t,e){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(t)&&Array.prototype.push.apply(e,i.data),Array.prototype.push.apply(n,i.children)}return e}rayQuery(t,e,n){return t.getAABB(Js),Js.toLocalFrame(e,Js),this.aabbQuery(Js,n),n}removeEmptyNodes(){for(let t=this.children.length-1;t>=0;t--)this.children[t].removeEmptyNodes(),!this.children[t].children.length&&!this.children[t].data.length&&this.children.splice(t,1)}}class e0 extends cn{constructor(t,e){e===void 0&&(e={}),super({root:null,aabb:t}),this.maxDepth=typeof e.maxDepth<"u"?e.maxDepth:8}}const Xn=new M,Js=new oe;class ur extends Mt{constructor(t,e){super({type:Mt.types.TRIMESH}),this.vertices=new Float32Array(t),this.indices=new Int16Array(e),this.normals=new Float32Array(e.length),this.aabb=new oe,this.edges=null,this.scale=new M(1,1,1),this.tree=new e0,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const t=this.tree;t.reset(),t.aabb.copy(this.aabb);const e=this.scale;t.aabb.lowerBound.x*=1/e.x,t.aabb.lowerBound.y*=1/e.y,t.aabb.lowerBound.z*=1/e.z,t.aabb.upperBound.x*=1/e.x,t.aabb.upperBound.y*=1/e.y,t.aabb.upperBound.z*=1/e.z;const n=new oe,i=new M,s=new M,o=new M,a=[i,s,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),t.insert(n,l)}t.removeEmptyNodes()}getTrianglesInAABB(t,e){Qs.copy(t);const n=this.scale,i=n.x,s=n.y,o=n.z,a=Qs.lowerBound,l=Qs.upperBound;return a.x/=i,a.y/=s,a.z/=o,l.x/=i,l.y/=s,l.z/=o,this.tree.aabbQuery(Qs,e)}setScale(t){const e=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=t.x===t.y&&t.y===t.z;e&&n||this.updateNormals(),this.scale.copy(t),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const t=n0,e=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,Xl),this.getVertex(o,jl),this.getVertex(a,Yl),ur.computeNormal(jl,Xl,Yl,t),e[i]=t.x,e[i+1]=t.y,e[i+2]=t.z}}updateEdges(){const t={},e=(i,s)=>{const o=i<s?`${i}_${s}`:`${s}_${i}`;t[o]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,o=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];e(o,a),e(a,l),e(l,o)}const n=Object.keys(t);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(t,e,n){const i=this.edges[t*2+(e?1:0)];this.getVertex(i,n)}getEdgeVector(t,e){const n=i0,i=s0;this.getEdgeVertex(t,0,n),this.getEdgeVertex(t,1,i),i.vsub(n,e)}static computeNormal(t,e,n,i){e.vsub(t,ql),n.vsub(e,Wl),Wl.cross(ql,i),i.isZero()||i.normalize()}getVertex(t,e){const n=this.scale;return this._getUnscaledVertex(t,e),e.x*=n.x,e.y*=n.y,e.z*=n.z,e}_getUnscaledVertex(t,e){const n=t*3,i=this.vertices;return e.set(i[n],i[n+1],i[n+2])}getWorldVertex(t,e,n,i){return this.getVertex(t,i),Jt.pointToWorldFrame(e,n,i,i),i}getTriangleVertices(t,e,n,i){const s=t*3;this.getVertex(this.indices[s],e),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(t,e){const n=t*3;return e.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(t,e){this.computeLocalAABB(jn);const n=jn.upperBound.x-jn.lowerBound.x,i=jn.upperBound.y-jn.lowerBound.y,s=jn.upperBound.z-jn.lowerBound.z;return e.set(1/12*t*(2*i*2*i+2*s*2*s),1/12*t*(2*n*2*n+2*s*2*s),1/12*t*(2*i*2*i+2*n*2*n))}computeLocalAABB(t){const e=t.lowerBound,n=t.upperBound,i=this.vertices.length;this.vertices;const s=r0;this.getVertex(0,s),e.copy(s),n.copy(s);for(let o=0;o!==i;o++)this.getVertex(o,s),s.x<e.x?e.x=s.x:s.x>n.x&&(n.x=s.x),s.y<e.y?e.y=s.y:s.y>n.y&&(n.y=s.y),s.z<e.z?e.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let t=0;const e=this.vertices,n=new M;for(let i=0,s=e.length/3;i!==s;i++){this.getVertex(i,n);const o=n.lengthSquared();o>t&&(t=o)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=o0,o=a0;s.position=t,s.quaternion=e,this.aabb.toWorldFrame(s,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(t,e,n,i,s){t===void 0&&(t=1),e===void 0&&(e=.5),n===void 0&&(n=8),i===void 0&&(i=6),s===void 0&&(s=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const h=c/i*s,d=l/n*Math.PI*2,u=(t+e*Math.cos(d))*Math.cos(h),f=(t+e*Math.cos(d))*Math.sin(h),g=e*Math.sin(d);o.push(u,f,g)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const h=(i+1)*l+c-1,d=(i+1)*(l-1)+c-1,u=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(h,d,f),a.push(d,u,f)}return new ur(o,a)}}const n0=new M,Qs=new oe,i0=new M,s0=new M,Wl=new M,ql=new M,Xl=new M,jl=new M,Yl=new M,jn=new oe,r0=new M,o0=new Jt,a0=new oe;class l0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class c0 extends l0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,g,v,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const p=u0,x=d0,_=h0;p.length=a,x.length=a,_.length=a;for(let y=0;y!==a;y++){const E=o[y];_[y]=0,x[y]=E.computeB(h),p[y]=1/E.computeC()}if(a!==0){for(let b=0;b!==c;b++){const A=l[b],I=A.vlambda,S=A.wlambda;I.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const A=o[b];d=x[b],u=p[b],m=_[b],v=A.computeGWlambda(),f=u*(d-v-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),_[b]+=f,g+=f>0?f:-f,A.addToWlambda(f)}if(g*g<s)break}for(let b=0;b!==c;b++){const A=l[b],I=A.velocity,S=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),I.vadd(A.vlambda,I),A.wlambda.vmul(A.angularFactor,A.wlambda),S.vadd(A.wlambda,S)}let y=o.length;const E=1/h;for(;y--;)o[y].multiplier=_[y]*E}return n}}const h0=[],u0=[],d0=[];class f0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class p0 extends f0{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const ie={sphereSphere:Mt.types.SPHERE,spherePlane:Mt.types.SPHERE|Mt.types.PLANE,boxBox:Mt.types.BOX|Mt.types.BOX,sphereBox:Mt.types.SPHERE|Mt.types.BOX,planeBox:Mt.types.PLANE|Mt.types.BOX,convexConvex:Mt.types.CONVEXPOLYHEDRON,sphereConvex:Mt.types.SPHERE|Mt.types.CONVEXPOLYHEDRON,planeConvex:Mt.types.PLANE|Mt.types.CONVEXPOLYHEDRON,boxConvex:Mt.types.BOX|Mt.types.CONVEXPOLYHEDRON,sphereHeightfield:Mt.types.SPHERE|Mt.types.HEIGHTFIELD,boxHeightfield:Mt.types.BOX|Mt.types.HEIGHTFIELD,convexHeightfield:Mt.types.CONVEXPOLYHEDRON|Mt.types.HEIGHTFIELD,sphereParticle:Mt.types.PARTICLE|Mt.types.SPHERE,planeParticle:Mt.types.PLANE|Mt.types.PARTICLE,boxParticle:Mt.types.BOX|Mt.types.PARTICLE,convexParticle:Mt.types.PARTICLE|Mt.types.CONVEXPOLYHEDRON,cylinderCylinder:Mt.types.CYLINDER,sphereCylinder:Mt.types.SPHERE|Mt.types.CYLINDER,planeCylinder:Mt.types.PLANE|Mt.types.CYLINDER,boxCylinder:Mt.types.BOX|Mt.types.CYLINDER,convexCylinder:Mt.types.CONVEXPOLYHEDRON|Mt.types.CYLINDER,heightfieldCylinder:Mt.types.HEIGHTFIELD|Mt.types.CYLINDER,particleCylinder:Mt.types.PARTICLE|Mt.types.CYLINDER,sphereTrimesh:Mt.types.SPHERE|Mt.types.TRIMESH,planeTrimesh:Mt.types.PLANE|Mt.types.TRIMESH};class m0{get[ie.sphereSphere](){return this.sphereSphere}get[ie.spherePlane](){return this.spherePlane}get[ie.boxBox](){return this.boxBox}get[ie.sphereBox](){return this.sphereBox}get[ie.planeBox](){return this.planeBox}get[ie.convexConvex](){return this.convexConvex}get[ie.sphereConvex](){return this.sphereConvex}get[ie.planeConvex](){return this.planeConvex}get[ie.boxConvex](){return this.boxConvex}get[ie.sphereHeightfield](){return this.sphereHeightfield}get[ie.boxHeightfield](){return this.boxHeightfield}get[ie.convexHeightfield](){return this.convexHeightfield}get[ie.sphereParticle](){return this.sphereParticle}get[ie.planeParticle](){return this.planeParticle}get[ie.boxParticle](){return this.boxParticle}get[ie.convexParticle](){return this.convexParticle}get[ie.cylinderCylinder](){return this.convexConvex}get[ie.sphereCylinder](){return this.sphereConvex}get[ie.planeCylinder](){return this.planeConvex}get[ie.boxCylinder](){return this.boxConvex}get[ie.convexCylinder](){return this.convexConvex}get[ie.heightfieldCylinder](){return this.heightfieldCylinder}get[ie.particleCylinder](){return this.particleCylinder}get[ie.sphereTrimesh](){return this.sphereTrimesh}get[ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new p0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Vv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new Vl(n,i,u*f),m=g.length?g.pop():new Vl(n,i,u*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Yn.setZero(),Ai.setZero(),Ci.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Yn.vadd(e.ni,Yn),Ai.vadd(e.ri,Ai),Ci.vadd(e.rj,Ci)):(Yn.vsub(e.ni,Yn),Ai.vadd(e.rj,Ai),Ci.vadd(e.ri,Ci));const o=1/t;Ai.scale(o,n.ri),Ci.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Yn.normalize(),Yn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=_0,c=x0,h=g0,d=v0;for(let u=0,f=t.length;u!==f;u++){const g=t[u],v=e[u];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&_t.KINEMATIC&&v.type&_t.STATIC||g.type&_t.STATIC&&v.type&_t.KINEMATIC||g.type&_t.KINEMATIC&&v.type&_t.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const _=g.shapes[x];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);const E=v.shapes[y];if(!(_.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+E.boundingSphereRadius)continue;let b=null;_.material&&E.material&&(b=n.getContactMaterial(_.material,E.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const A=_.type|E.type,I=this[A];if(I){let S=!1;_.type<E.type?S=I.call(this,_,E,h,d,l,c,g,v,_,E,p):S=I.call(this,E,_,d,h,c,l,v,g,_,E,p),S&&p&&(n.shapeOverlapKeeper.set(_.id,E.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,tr),u.ni.scale(u.ni.dot(tr),Kl),tr.vsub(Kl,u.rj),-tr.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool,f=q0;n.vsub(i,er),e.getSideNormals(f,o);const g=t.radius;let v=!1;const m=j0,p=Y0,x=K0;let _=null,y=0,E=0,b=0,A=null;for(let U=0,q=f.length;U!==q&&v===!1;U++){const Y=G0;Y.copy(f[U]);const W=Y.length();Y.normalize();const J=er.dot(Y);if(J<W+g&&J>0){const z=V0,G=W0;z.copy(f[(U+1)%3]),G.copy(f[(U+2)%3]);const dt=z.length(),mt=G.length();z.normalize(),G.normalize();const xt=er.dot(z),Rt=er.dot(G);if(xt<dt&&xt>-dt&&Rt<mt&&Rt>-mt){const Dt=Math.abs(J-W-g);if((A===null||Dt<A)&&(A=Dt,E=xt,b=Rt,_=W,m.copy(Y),p.copy(z),x.copy(G),y++,d))return!0}}}if(y){v=!0;const U=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(_,m),p.scale(E,p),m.vadd(p,m),x.scale(b,x),m.vadd(x,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let I=u.get();const S=X0;for(let U=0;U!==2&&!v;U++)for(let q=0;q!==2&&!v;q++)for(let Y=0;Y!==2&&!v;Y++)if(I.set(0,0,0),U?I.vadd(f[0],I):I.vsub(f[0],I),q?I.vadd(f[1],I):I.vsub(f[1],I),Y?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;v=!0;const W=this.createContactEquation(a,l,t,e,c,h);W.ri.copy(S),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(I),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}u.release(I),I=null;const w=u.get(),B=u.get(),H=u.get(),O=u.get(),R=u.get(),D=f.length;for(let U=0;U!==D&&!v;U++)for(let q=0;q!==D&&!v;q++)if(U%3!==q%3){f[q].cross(f[U],w),w.normalize(),f[U].vadd(f[q],B),H.copy(n),H.vsub(B,H),H.vsub(i,H);const Y=H.dot(w);w.scale(Y,O);let W=0;for(;W===U%3||W===q%3;)W++;R.copy(n),R.vsub(O,R),R.vsub(B,R),R.vsub(i,R);const J=Math.abs(Y),z=R.length();if(J<f[W].length()&&z<g){if(d)return!0;v=!0;const G=this.createContactEquation(a,l,t,e,c,h);B.vadd(O,G.rj),G.rj.copy(G.rj),R.negate(G.ni),G.ni.normalize(),G.ri.copy(G.rj),G.ri.vadd(i,G.ri),G.ri.vsub(n,G.ri),G.ri.normalize(),G.ri.scale(g,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(l.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}u.release(w,B,H,O,R)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,f){const g=h_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,f)){const v=[],m=u_;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let p=0;for(let x=0;x!==v.length;x++){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=_.ri,E=_.rj;g.negate(_.ni),v[x].normal.negate(m),m.scale(v[x].depth,m),v[x].point.vadd(m,y),E.copy(v[x].point),y.vsub(n,y),E.vsub(i,E),y.vadd(n,y),y.vsub(a.position,y),E.vadd(i,E),E.vsub(l.position,E),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,$0);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let x=0;x!==v.length;x++){const _=v[x],y=t_;o.vmult(_,y),i.vadd(y,y);const E=Q0;if(y.vsub(n,E),E.lengthSquared()<m*m){if(d)return!0;p=!0;const b=this.createContactEquation(a,l,t,e,c,h);b.ri.copy(E),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),y.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&p===!1;x++){const y=f[x],E=g[x],b=e_;o.vmult(y,b);const A=n_;o.vmult(v[E[0]],A),A.vadd(i,A);const I=i_;b.scale(-m,I),n.vadd(I,I);const S=s_;I.vsub(A,S);const w=S.dot(b),B=r_;if(n.vsub(A,B),w<0&&B.dot(b)>0){const H=[];for(let O=0,R=E.length;O!==R;O++){const D=u.get();o.vmult(v[E[O]],D),i.vadd(D,D),H.push(D)}if(H0(H,b,n)){if(d)return!0;p=!0;const O=this.createContactEquation(a,l,t,e,c,h);b.scale(-m,O.ri),b.negate(O.ni);const R=u.get();b.scale(-w,R);const D=u.get();b.scale(-m,D),n.vsub(i,O.rj),O.rj.vadd(D,O.rj),O.rj.vadd(R,O.rj),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),u.release(R),u.release(D),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let U=0,q=H.length;U!==q;U++)u.release(H[U]);return}else for(let O=0;O!==E.length;O++){const R=u.get(),D=u.get();o.vmult(v[E[(O+1)%E.length]],R),o.vmult(v[E[(O+2)%E.length]],D),i.vadd(R,R),i.vadd(D,D);const U=Z0;D.vsub(R,U);const q=J0;U.unit(q);const Y=u.get(),W=u.get();n.vsub(R,W);const J=W.dot(q);q.scale(J,Y),Y.vadd(R,Y);const z=u.get();if(Y.vsub(n,z),J>0&&J*J<U.lengthSquared()&&z.lengthSquared()<m*m){if(d)return!0;const G=this.createContactEquation(a,l,t,e,c,h);Y.vsub(i,G.rj),Y.vsub(n,G.ni),G.ni.normalize(),G.ni.scale(m,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(l.position,G.rj),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult);for(let dt=0,mt=H.length;dt!==mt;dt++)u.release(H[dt]);u.release(R),u.release(D),u.release(Y),u.release(z),u.release(W);return}u.release(R),u.release(D),u.release(Y),u.release(z),u.release(W)}for(let O=0,R=H.length;O!==R;O++)u.release(H[O])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){const u=o_,f=a_;f.set(0,0,1),s.vmult(f,f);let g=0;const v=l_;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=c_;f.scale(f.dot(v),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=t.radius,g=e.elementSize,v=E_,m=M_;Jt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,y=Math.ceil((m.y+f)/g)+1;if(x<0||y<0||p>u.length||_>u[0].length)return;p<0&&(p=0),x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),y>=u[0].length&&(y=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const E=[];e.getRectMinMax(p,_,x,y,E);const b=E[0],A=E[1];if(m.z-f>A||m.z+f<b)return;const I=this.result;for(let S=p;S<x;S++)for(let w=_;w<y;w++){const B=I.length;let H=!1;if(e.getConvexTrianglePillar(S,w,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&H||(e.getConvexTrianglePillar(S,w,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&H))return!0;if(I.length-B>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=y_,m=S_,p=x_;Jt.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,y=Math.floor((p.y-g)/f)-1,E=Math.ceil((p.y+g)/f)+1;if(_<0||E<0||x>u.length||y>u[0].length)return;x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),E<0&&(E=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),E>=u[0].length&&(E=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const b=[];e.getRectMinMax(x,y,_,E,b);const A=b[0],I=b[1];if(!(p.z-g>I||p.z+g<A))for(let S=x;S<_;S++)for(let w=y;w<E;w++){let B=!1;if(e.getConvexTrianglePillar(S,w,!1),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&B||(e.getConvexTrianglePillar(S,w,!0),Jt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&B))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){const u=m_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){const u=d_;u.set(0,0,1),a.quaternion.vmult(u,u);const f=f_;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=p_;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1;const f=v_,g=__;let v=null;const m=g_;if(m.copy(i),m.vsub(n,m),s.conjugate($l),$l.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,x=t.faces.length;p!==x;p++){const _=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];i.vsub(_[0],Zl);const E=-y.dot(Zl);if(v===null||Math.abs(E)<Math.abs(v)){if(d)return!0;v=E,u=p,f.copy(y)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,_=p.rj;x.vadd(i,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=A0,f=C0,g=R0,v=P0,m=L0,p=I0,x=F0,_=T0,y=w0,E=O0;Jt.pointToLocalFrame(i,o,n,m);const b=t.radius;x.lowerBound.set(m.x-b,m.y-b,m.z-b),x.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(x,E);const A=b0,I=t.radius*t.radius;for(let O=0;O<E.length;O++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[E[O]*3+R],A),A.vsub(m,y),y.lengthSquared()<=I){if(_.copy(A),Jt.pointToWorldFrame(i,o,_,A),A.vsub(n,y),d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(A),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let O=0;O<E.length;O++)for(let R=0;R<3;R++){e.getVertex(e.indices[E[O]*3+R],u),e.getVertex(e.indices[E[O]*3+(R+1)%3],f),f.vsub(u,g),m.vsub(f,p);const D=p.dot(g);m.vsub(u,p);let U=p.dot(g);if(U>0&&D<0&&(m.vsub(u,p),v.copy(g),v.normalize(),U=p.dot(v),v.scale(U,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const Y=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,Y.ni),Y.ni.normalize(),Y.ni.scale(t.radius,Y.ri),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Jt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,Y.rj),Jt.vectorToWorldFrame(o,Y.ni,Y.ni),Jt.vectorToWorldFrame(o,Y.ri,Y.ri),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}}const S=D0,w=N0,B=U0,H=E0;for(let O=0,R=E.length;O!==R;O++){e.getTriangleVertices(E[O],S,w,B),e.getNormal(E[O],H),m.vsub(S,p);let D=p.dot(H);if(H.scale(D,p),m.vsub(p,p),D=p.distanceTo(m),pe.pointInTriangle(p,S,w,B)&&D<t.radius){if(d)return!0;let U=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),Jt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,U.rj),Jt.vectorToWorldFrame(o,U.ni,U.ni),Jt.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}E.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=new M,f=y0;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const v=new M;v.copy(u),Jt.pointToWorldFrame(i,o,v,u);const m=S0;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);const _=M0;f.scale(m.dot(f),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Yn=new M,Ai=new M,Ci=new M,g0=new M,v0=new M,_0=new me,x0=new me,y0=new M,S0=new M,M0=new M,E0=new M,w0=new M;new M;const b0=new M,T0=new M,A0=new M,C0=new M,R0=new M,P0=new M,L0=new M,I0=new M,D0=new M,N0=new M,U0=new M,F0=new oe,O0=[],tr=new M,Kl=new M,B0=new M,z0=new M,k0=new M;function H0(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=B0;r[(s+1)%i].vsub(o,a);const l=z0;a.cross(t,l);const c=k0;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const er=new M,G0=new M,V0=new M,W0=new M,q0=[new M,new M,new M,new M,new M,new M],X0=new M,j0=new M,Y0=new M,K0=new M,$0=new M,Z0=new M,J0=new M,Q0=new M,t_=new M,e_=new M,n_=new M,i_=new M,s_=new M,r_=new M;new M;new M;const o_=new M,a_=new M,l_=new M,c_=new M,h_=new M,u_=new M,d_=new M,f_=new M,p_=new M,m_=new M,$l=new me,g_=new M;new M;const v_=new M,Zl=new M,__=new M,x_=new M,y_=new M,S_=[0],M_=new M,E_=new M;class Jl{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Ql(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Ql(e,h)}}}function Ql(r,t){r.push((t&4294901760)>>16,t&65535)}const ao=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class w_{constructor(){this.data={keys:[]}}get(t,e){const n=ao(t,e);return this.data[n]}set(t,e,n){const i=ao(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=ao(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class b_ extends qc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Xc,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new c0,this.constraints=[],this.narrowphase=new m0(this),this.collisionMatrix=new Dl,this.collisionMatrixPrevious=new Dl,this.bodyOverlapKeeper=new Jl,this.shapeOverlapKeeper=new Jl,this.contactmaterials=[],this.contactMaterialTable=new w_,this.defaultMaterial=new Bi("default"),this.defaultContactMaterial=new vs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Oi?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.ALL,n.from=t,n.to=e,n.callback=i,lo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.ANY,n.from=t,n.to=e,n.result=i,lo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.CLOSEST,n.from=t,n.to=e,n.result=i,lo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof _t&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ve.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ve.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ve.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=P_,i=L_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=_t.DYNAMIC;let u=-1/0;const f=this.constraints,g=R_;l.length();const v=l.x,m=l.y,p=l.z;let x=0;for(c&&(u=ve.now()),x=0;x!==s;x++){const O=o[x];if(O.type===d){const R=O.force,D=O.mass;R.x+=D*v,R.y+=D*m,R.z+=D*p}}for(let O=0,R=this.subsystems.length;O!==R;O++)this.subsystems[O].update();c&&(u=ve.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ve.now()-u);let _=f.length;for(x=0;x!==_;x++){const O=f[x];if(!O.collideConnected)for(let R=n.length-1;R>=0;R-=1)(O.bodyA===n[R]&&O.bodyB===i[R]||O.bodyB===n[R]&&O.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(u=ve.now());const y=C_,E=e.length;for(x=0;x!==E;x++)y.push(e[x]);e.length=0;const b=this.frictionEquations.length;for(x=0;x!==b;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=ve.now()-u),c&&(u=ve.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const A=e.length;for(let O=0;O!==A;O++){const R=e[O],D=R.bi,U=R.bj,q=R.si,Y=R.sj;let W;if(D.material&&U.material?W=this.getContactMaterial(D.material,U.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,D.material&&U.material&&(D.material.friction>=0&&U.material.friction>=0&&D.material.friction*U.material.friction,D.material.restitution>=0&&U.material.restitution>=0&&(R.restitution=D.material.restitution*U.material.restitution)),a.addEquation(R),D.allowSleep&&D.type===_t.DYNAMIC&&D.sleepState===_t.SLEEPING&&U.sleepState===_t.AWAKE&&U.type!==_t.STATIC){const J=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),z=U.sleepSpeedLimit**2;J>=z*2&&(D.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===_t.DYNAMIC&&U.sleepState===_t.SLEEPING&&D.sleepState===_t.AWAKE&&D.type!==_t.STATIC){const J=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),z=D.sleepSpeedLimit**2;J>=z*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,U,!0),this.collisionMatrixPrevious.get(D,U)||(Qi.body=U,Qi.contact=R,D.dispatchEvent(Qi),Qi.body=D,U.dispatchEvent(Qi)),this.bodyOverlapKeeper.set(D.id,U.id),this.shapeOverlapKeeper.set(q.id,Y.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ve.now()-u,u=ve.now()),x=0;x!==s;x++){const O=o[x];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(_=f.length,x=0;x!==_;x++){const O=f[x];O.update();for(let R=0,D=O.equations.length;R!==D;R++){const U=O.equations[R];a.addEquation(U)}}a.solve(t,this),c&&(h.solve=ve.now()-u),a.removeAllEquations();const I=Math.pow;for(x=0;x!==s;x++){const O=o[x];if(O.type&d){const R=I(1-O.linearDamping,t),D=O.velocity;D.scale(R,D);const U=O.angularVelocity;if(U){const q=I(1-O.angularDamping,t);U.scale(q,U)}}}this.dispatchEvent(A_),c&&(u=ve.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,w,B);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ve.now()-u),this.stepnumber+=1,this.dispatchEvent(T_);let H=!0;if(this.allowSleep)for(H=!1,x=0;x!==s;x++){const O=o[x];O.sleepTick(this.time),O.sleepState!==_t.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(_n,xn),t){for(let s=0,o=_n.length;s<o;s+=2)ts.bodyA=this.getBodyById(_n[s]),ts.bodyB=this.getBodyById(_n[s+1]),this.dispatchEvent(ts);ts.bodyA=ts.bodyB=null}if(e){for(let s=0,o=xn.length;s<o;s+=2)es.bodyA=this.getBodyById(xn[s]),es.bodyB=this.getBodyById(xn[s+1]),this.dispatchEvent(es);es.bodyA=es.bodyB=null}_n.length=xn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(_n,xn),n){for(let s=0,o=_n.length;s<o;s+=2){const a=this.getShapeById(_n[s]),l=this.getShapeById(_n[s+1]);yn.shapeA=a,yn.shapeB=l,a&&(yn.bodyA=a.body),l&&(yn.bodyB=l.body),this.dispatchEvent(yn)}yn.bodyA=yn.bodyB=yn.shapeA=yn.shapeB=null}if(i){for(let s=0,o=xn.length;s<o;s+=2){const a=this.getShapeById(xn[s]),l=this.getShapeById(xn[s+1]);Sn.shapeA=a,Sn.shapeB=l,a&&(Sn.bodyA=a.body),l&&(Sn.bodyB=l.body),this.dispatchEvent(Sn)}Sn.bodyA=Sn.bodyB=Sn.shapeA=Sn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new oe;const lo=new pe,ve=globalThis.performance||{};if(!ve.now){let r=Date.now();ve.timing&&ve.timing.navigationStart&&(r=ve.timing.navigationStart),ve.now=()=>Date.now()-r}new M;const T_={type:"postStep"},A_={type:"preStep"},Qi={type:_t.COLLIDE_EVENT_NAME,body:null,contact:null},C_=[],R_=[],P_=[],L_=[],_n=[],xn=[],ts={type:"beginContact",bodyA:null,bodyB:null},es={type:"endContact",bodyA:null,bodyB:null},yn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Sn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class I_{constructor(){this.renderer=null,this.domElement=null,this.init()}init(){this.renderer=new Io({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rc,this.renderer.outputColorSpace=Me,this.renderer.toneMapping=ac,this.renderer.toneMappingExposure=1,this.domElement=this.renderer.domElement,document.body.appendChild(this.domElement)}render(t,e){this.renderer.render(t,e)}handleResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}dispose(){this.renderer.dispose(),this.domElement&&this.domElement.parentNode&&this.domElement.parentNode.removeChild(this.domElement)}}const tc={type:"change"},co={type:"start"},ec={type:"end"},nr=new Ro,nc=new Nn,D_=Math.cos(70*lu.DEG2RAD);class N_ extends oi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",T),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tc),n.update(),s=i.NONE},this.update=function(){const F=new L,ht=new An().setFromUnitVectors(t.up,new L(0,1,0)),tt=ht.clone().invert(),Ft=new L,Tt=new An,Lt=new L,bt=2*Math.PI;return function(Yt=null){const k=n.object.position;F.copy(k).sub(n.target),F.applyQuaternion(ht),a.setFromVector3(F),n.autoRotate&&s===i.NONE&&B(S(Yt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ft=n.minAzimuthAngle,it=n.maxAzimuthAngle;isFinite(ft)&&isFinite(it)&&(ft<-Math.PI?ft+=bt:ft>Math.PI&&(ft-=bt),it<-Math.PI?it+=bt:it>Math.PI&&(it-=bt),ft<=it?a.theta=Math.max(ft,Math.min(it,a.theta)):a.theta=a.theta>(ft+it)/2?Math.max(ft,a.theta):Math.min(it,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),F.setFromSpherical(a),F.applyQuaternion(tt),k.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Z=!1;if(n.zoomToCursor&&b){let lt=null;if(n.object.isPerspectiveCamera){const Pt=F.length();lt=W(Pt*c);const Kt=Pt-lt;n.object.position.addScaledVector(y,Kt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Pt=new L(E.x,E.y,0);Pt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Z=!0;const Kt=new L(E.x,E.y,0);Kt.unproject(n.object),n.object.position.sub(Kt).add(Pt),n.object.updateMatrixWorld(),lt=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(nr.origin.copy(n.object.position),nr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(nr.direction))<D_?t.lookAt(n.target):(nc.setFromNormalAndCoplanarPoint(n.object.up,n.target),nr.intersectPlane(nc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Z=!0);return c=1,b=!1,Z||Ft.distanceToSquared(n.object.position)>o||8*(1-Tt.dot(n.object.quaternion))>o||Lt.distanceToSquared(n.target)>0?(n.dispatchEvent(tc),Ft.copy(n.object.position),Tt.copy(n.object.quaternion),Lt.copy(n.target),Z=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",vt),n.domElement.removeEventListener("pointercancel",Ut),n.domElement.removeEventListener("wheel",P),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",Ut),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new wo,l=new wo;let c=1;const h=new L,d=new rt,u=new rt,f=new rt,g=new rt,v=new rt,m=new rt,p=new rt,x=new rt,_=new rt,y=new L,E=new rt;let b=!1;const A=[],I={};function S(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function B(F){l.theta-=F}function H(F){l.phi-=F}const O=function(){const F=new L;return function(tt,Ft){F.setFromMatrixColumn(Ft,0),F.multiplyScalar(-tt),h.add(F)}}(),R=function(){const F=new L;return function(tt,Ft){n.screenSpacePanning===!0?F.setFromMatrixColumn(Ft,1):(F.setFromMatrixColumn(Ft,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(tt),h.add(F)}}(),D=function(){const F=new L;return function(tt,Ft){const Tt=n.domElement;if(n.object.isPerspectiveCamera){const Lt=n.object.position;F.copy(Lt).sub(n.target);let bt=F.length();bt*=Math.tan(n.object.fov/2*Math.PI/180),O(2*tt*bt/Tt.clientHeight,n.object.matrix),R(2*Ft*bt/Tt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(tt*(n.object.right-n.object.left)/n.object.zoom/Tt.clientWidth,n.object.matrix),R(Ft*(n.object.top-n.object.bottom)/n.object.zoom/Tt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(F){if(!n.zoomToCursor)return;b=!0;const ht=n.domElement.getBoundingClientRect(),tt=F.clientX-ht.left,Ft=F.clientY-ht.top,Tt=ht.width,Lt=ht.height;E.x=tt/Tt*2-1,E.y=-(Ft/Lt)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function J(F){d.set(F.clientX,F.clientY)}function z(F){Y(F),p.set(F.clientX,F.clientY)}function G(F){g.set(F.clientX,F.clientY)}function dt(F){u.set(F.clientX,F.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ht=n.domElement;B(2*Math.PI*f.x/ht.clientHeight),H(2*Math.PI*f.y/ht.clientHeight),d.copy(u),n.update()}function mt(F){x.set(F.clientX,F.clientY),_.subVectors(x,p),_.y>0?U(w()):_.y<0&&q(w()),p.copy(x),n.update()}function xt(F){v.set(F.clientX,F.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(v),n.update()}function Rt(F){Y(F),F.deltaY<0?q(w()):F.deltaY>0&&U(w()),n.update()}function Dt(F){let ht=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?H(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),ht=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?H(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),ht=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),ht=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),ht=!0;break}ht&&(F.preventDefault(),n.update())}function It(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const F=.5*(A[0].pageX+A[1].pageX),ht=.5*(A[0].pageY+A[1].pageY);d.set(F,ht)}}function zt(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const F=.5*(A[0].pageX+A[1].pageX),ht=.5*(A[0].pageY+A[1].pageY);g.set(F,ht)}}function Zt(){const F=A[0].pageX-A[1].pageX,ht=A[0].pageY-A[1].pageY,tt=Math.sqrt(F*F+ht*ht);p.set(0,tt)}function Nt(){n.enableZoom&&Zt(),n.enablePan&&zt()}function N(){n.enableZoom&&Zt(),n.enableRotate&&It()}function ut(F){if(A.length==1)u.set(F.pageX,F.pageY);else{const tt=gt(F),Ft=.5*(F.pageX+tt.x),Tt=.5*(F.pageY+tt.y);u.set(Ft,Tt)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ht=n.domElement;B(2*Math.PI*f.x/ht.clientHeight),H(2*Math.PI*f.y/ht.clientHeight),d.copy(u)}function Q(F){if(A.length===1)v.set(F.pageX,F.pageY);else{const ht=gt(F),tt=.5*(F.pageX+ht.x),Ft=.5*(F.pageY+ht.y);v.set(tt,Ft)}m.subVectors(v,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(v)}function st(F){const ht=gt(F),tt=F.pageX-ht.x,Ft=F.pageY-ht.y,Tt=Math.sqrt(tt*tt+Ft*Ft);x.set(0,Tt),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),U(_.y),p.copy(x)}function et(F){n.enableZoom&&st(F),n.enablePan&&Q(F)}function At(F){n.enableZoom&&st(F),n.enableRotate&&ut(F)}function vt(F){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",Et),n.domElement.addEventListener("pointerup",Ut)),at(F),F.pointerType==="touch"?X(F):qt(F))}function Et(F){n.enabled!==!1&&(F.pointerType==="touch"?ot(F):re(F))}function Ut(F){wt(F),A.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",Ut)),n.dispatchEvent(ec),s=i.NONE}function qt(F){let ht;switch(F.button){case 0:ht=n.mouseButtons.LEFT;break;case 1:ht=n.mouseButtons.MIDDLE;break;case 2:ht=n.mouseButtons.RIGHT;break;default:ht=-1}switch(ht){case li.DOLLY:if(n.enableZoom===!1)return;z(F),s=i.DOLLY;break;case li.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;G(F),s=i.PAN}else{if(n.enableRotate===!1)return;J(F),s=i.ROTATE}break;case li.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;J(F),s=i.ROTATE}else{if(n.enablePan===!1)return;G(F),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(co)}function re(F){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;dt(F);break;case i.DOLLY:if(n.enableZoom===!1)return;mt(F);break;case i.PAN:if(n.enablePan===!1)return;xt(F);break}}function P(F){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(F.preventDefault(),n.dispatchEvent(co),Rt(F),n.dispatchEvent(ec))}function T(F){n.enabled===!1||n.enablePan===!1||Dt(F)}function X(F){switch(ct(F),A.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;It(),s=i.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;zt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Nt(),s=i.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(co)}function ot(F){switch(ct(F),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ut(F),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Q(F),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;et(F),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(F),n.update();break;default:s=i.NONE}}function nt(F){n.enabled!==!1&&F.preventDefault()}function at(F){A.push(F)}function wt(F){delete I[F.pointerId];for(let ht=0;ht<A.length;ht++)if(A[ht].pointerId==F.pointerId){A.splice(ht,1);return}}function ct(F){let ht=I[F.pointerId];ht===void 0&&(ht=new rt,I[F.pointerId]=ht),ht.set(F.pageX,F.pageY)}function gt(F){const ht=F.pointerId===A[0].pointerId?A[1]:A[0];return I[ht.pointerId]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",vt),n.domElement.addEventListener("pointercancel",Ut),n.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}class U_{constructor(t){this.camera=null,this.controls=null,this.target=null,this.domElement=t,this.followDistance=25,this.followHeight=12,this.followSmoothing=.1,this.lookAhead=5,this.isPointerLocked=!1,this.init(),this.setupPointerLock()}init(){this.camera=new Oe(75,window.innerWidth/window.innerHeight,.1,3e3),this.camera.position.set(0,20,-30),this.controls=new N_(this.camera,this.domElement),this.controls.enableDamping=!1,this.controls.enablePan=!1,this.controls.minDistance=15,this.controls.maxDistance=50,this.controls.maxPolarAngle=Math.PI*.9,this.controls.minPolarAngle=.1,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=0}setTarget(t){this.target=t,this.controls&&this.controls.target.copy(t.position)}update(){if(this.target){const t=this.camera.position.clone().sub(this.controls.target);this.controls.target.copy(this.target.position),this.camera.position.copy(this.target.position).add(t)}this.controls.update()}handleResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}getWorldDirection(){const t=new L;return this.camera.getWorldDirection(t),t}getWorldPosition(){return this.camera.position.clone()}setupPointerLock(){this.domElement.addEventListener("click",()=>{this.isPointerLocked||this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement,document.body.style.cursor=this.isPointerLocked?"none":"auto",this.controls&&(this.controls.enabled=!this.isPointerLocked)}),document.addEventListener("mousemove",t=>{if(this.isPointerLocked&&this.controls){const e=t.movementX||0,n=t.movementY||0,i=new wo;i.setFromVector3(this.camera.position.clone().sub(this.controls.target)),i.theta-=e*.002,i.phi+=n*.002,i.phi=Math.max(.1,Math.min(Math.PI*.45,i.phi));const s=new L;s.setFromSpherical(i),this.camera.position.copy(this.controls.target).add(s),this.camera.lookAt(this.controls.target)}}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.isPointerLocked&&document.exitPointerLock()})}}class F_{constructor(){this.lights=[]}addToScene(t){const e=new Jg(4210752,.6);t.add(e),this.lights.push(e);const n=new no(16777215,1.2);n.position.set(50,100,-50),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.1,n.shadow.camera.far=500,n.shadow.camera.left=-100,n.shadow.camera.right=100,n.shadow.camera.top=100,n.shadow.camera.bottom=-100,n.shadow.bias=-1e-4,t.add(n),this.lights.push(n);const i=new no(8900331,.8);i.position.set(-30,40,30),t.add(i),this.lights.push(i);const s=new no(16739229,.4);s.position.set(0,10,-50),t.add(s),this.lights.push(s);const o=new Rl(65535,.5,50);o.position.set(0,15,0),t.add(o),this.lights.push(o);const a=new Rl(16711935,.5,50);a.position.set(30,15,30),t.add(a),this.lights.push(a)}updateLights(t){this.lights.length>=3&&(this.lights[3].position.copy(t),this.lights[3].position.y+=10,this.lights[3].position.z-=15)}dispose(){this.lights.forEach(t=>{t.parent&&t.parent.remove(t),t.dispose&&t.dispose()}),this.lights=[]}}class O_{constructor(){this.skyboxCache=new Map,this.currentSkybox=null,this.loadedSkyboxes=new Set,this.skyboxMesh=null,this.globalUniforms={time:{value:0},resolution:{value:new rt},cameraPosition:{value:new L}}}async loadSkybox(t){if(this.skyboxCache.has(t))return this.skyboxCache.get(t);try{const n=(await bo(Object.assign({"../skyboxes/arctic-wind.js":()=>Bt(()=>import("./arctic-wind-BKL7AoUX.js"),[]),"../skyboxes/aurora-dance.js":()=>Bt(()=>import("./aurora-dance-BShtDSbr.js"),[]),"../skyboxes/cave-depths.js":()=>Bt(()=>import("./cave-depths-CUAqEvi2.js"),[]),"../skyboxes/crystal-cavern.js":()=>Bt(()=>import("./crystal-cavern-60-0M-38.js"),[]),"../skyboxes/crystal-sky.js":()=>Bt(()=>import("./crystal-sky-BohUyiyo.js"),[]),"../skyboxes/desert-heat.js":()=>Bt(()=>import("./desert-heat-Bi9MF77R.js"),[]),"../skyboxes/factory-smoke.js":()=>Bt(()=>import("./factory-smoke-DpwltrVz.js"),[]),"../skyboxes/forest-canopy.js":()=>Bt(()=>import("./forest-canopy-CcWtpqwW.js"),[]),"../skyboxes/lava-storm.js":()=>Bt(()=>import("./lava-storm-CnNtWjSg.js"),[]),"../skyboxes/neon-city.js":()=>Bt(()=>import("./neon-city-DlOqjutH.js"),[]),"../skyboxes/ocean-depths.js":()=>Bt(()=>import("./ocean-depths-D0NArKKO.js"),[]),"../skyboxes/space-deep.js":()=>Bt(()=>import("./space-deep-C8JAn4NA.js"),[]),"../skyboxes/storm-clouds.js":()=>Bt(()=>import("./storm-clouds-6l7kfk3L.js"),[]),"../skyboxes/sunset-vibes.js":()=>Bt(()=>import("./sunset-vibes-Cft_xR0s.js"),[])}),`../skyboxes/${t}.js`,3)).default,i=new je({uniforms:{...this.globalUniforms,...n.uniforms||{}},vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,depthWrite:!1,depthTest:!1});return i.userData={name:t,description:n.description||"",author:n.author||"Unknown",version:n.version||"1.0.0",tags:n.tags||[],mood:n.mood||"neutral"},this.skyboxCache.set(t,i),this.loadedSkyboxes.add(t),console.log(`Skybox loaded: ${t}`,i.userData),i}catch(e){return console.error(`Failed to load skybox: ${t}`,e),this.getFallbackSkybox()}}getFallbackSkybox(){return this.fallbackSkybox||(this.fallbackSkybox=new je({uniforms:{topColor:{value:new jt(4403)},bottomColor:{value:new jt(17)}},vertexShader:`
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition).y;
            gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
          }
        `,side:Ce,depthWrite:!1})),this.fallbackSkybox}async applySkybox(t,e){this.skyboxMesh&&(e.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose(),this.skyboxMesh.material.dispose());const n=await this.loadSkybox(t),i=new ms(2e3,64,32);return this.skyboxMesh=new Qt(i,n),this.skyboxMesh.renderOrder=-1,e.add(this.skyboxMesh),this.currentSkybox=t,console.log(`Applied skybox: ${t}`),this.skyboxMesh}updateUniforms(t,e,n){this.globalUniforms.time.value+=t,this.globalUniforms.cameraPosition.value.copy(e.position),this.globalUniforms.resolution.value.copy(n);for(const i of this.skyboxCache.values())i.uniforms&&Object.keys(this.globalUniforms).forEach(s=>{i.uniforms[s]&&(i.uniforms[s].value=this.globalUniforms[s].value)})}getSkyboxInfo(t){const e=this.skyboxCache.get(t);return e?e.userData:null}getAvailableSkyboxes(){return Array.from(this.loadedSkyboxes)}async preloadSkyboxes(t){const e=t.map(n=>this.loadSkybox(n));await Promise.all(e),console.log(`Preloaded ${t.length} skyboxes`)}cleanup(){for(const[t,e]of this.skyboxCache)e.dispose();this.skyboxCache.clear(),this.loadedSkyboxes.clear(),this.skyboxMesh&&(this.skyboxMesh.geometry.dispose(),this.skyboxMesh.material.dispose())}getAvailableSkyboxList(){return[{name:"sunset-vibes",description:"Bright sunset colors",mood:"energetic"},{name:"space-deep",description:"Deep space starfield",mood:"mysterious"},{name:"neon-city",description:"Cyberpunk city lights",mood:"futuristic"},{name:"aurora-dance",description:"Dancing aurora borealis",mood:"magical"},{name:"crystal-sky",description:"Crystalline ice atmosphere",mood:"cold"},{name:"lava-storm",description:"Volcanic atmosphere",mood:"intense"}]}}class B_{constructor(){this.skyboxManager=new O_,this.currentSkybox="sunset-vibes"}async init(t,e="sunset-vibes"){await this.setSkybox(e,t)}async setSkybox(t,e){this.currentSkybox=t,await this.skyboxManager.applySkybox(t,e)}update(t,e=null,n=null){e&&n?this.skyboxManager.updateUniforms(.016666666666666666,e,n):this.skyboxManager.globalUniforms.time.value=t*.001}getAvailableSkyboxes(){return this.skyboxManager.getAvailableSkyboxList()}addToScene(t){}dispose(){this.skyboxManager&&this.skyboxManager.cleanup()}}class z_{constructor(){this.world=null,this.materials=new Map,this.init()}init(){this.world=new b_,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new Xc,this.world.solver.iterations=5,this.world.defaultContactMaterial.friction=.3,this.world.solver.tolerance=.1,this.world.quatNormalizeSkip=0,this.world.quatNormalizeFast=!1,this.setupMaterials()}setupMaterials(){const t=new Bi("trackMaterial");this.materials.set("track",t);const e=new Bi("ballMaterial");this.materials.set("ball",e);const n=new vs(t,e,{friction:.3,restitution:0});this.world.addContactMaterial(n)}getMaterial(t){return this.materials.get(t)||this.materials.get("track")}step(t=1/60){this.world.step(.016666666666666666,t,3)}addBody(t){this.world.addBody(t)}removeBody(t){this.world.removeBody(t)}raycast(t,e,n={}){const i=new Oi;return this.world.raycastClosest(t,e,n,i),i}dispose(){for(;this.world.bodies.length>0;)this.world.removeBody(this.world.bodies[0]);this.materials.clear(),this.world=null}}class k_{constructor(t,e){this.physicsWorld=t,this.scene=e,this.body=null,this.radius=1,this.mass=5,this.mesh=null,this.material=null,this.spawnPosition=new M(0,5,0),this.isGroundedFlag=!1,this.lastJumpTime=0,this.currentLevel=1,this.trackMinY=-200,this.lastBoostTime=0,this.isBoostActive=!1,this.boostDuration=3,this.boostStartTime=0,this.onFallOff=null,this.JUMP_VELOCITY=8,this.JUMP_COOLDOWN=.3,this.ACCELERATION=30,this.MAX_SPEED=999,this.BOOST_COOLDOWN=8,this.BOOST_MULTIPLIER=4,this.BOOST_ACCELERATION=80}init(){this.createPhysicsBody(),this.createVisualMesh(),this.setupContactListeners()}createPhysicsBody(){const t=new t0(this.radius);this.body=new _t({mass:this.mass,material:this.physicsWorld.getMaterial("ball")}),this.body.addShape(t),this.body.position.copy(this.spawnPosition),this.body.linearDamping=.1,this.physicsWorld.addBody(this.body)}createVisualMesh(){const t=new ms(this.radius,64,64),e=`
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,n=`
      uniform float time;
      uniform vec3 color;
      uniform float speed;
      uniform bool isBoost;
      
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec2 vUv;
      varying vec3 vWorldPosition;
      
      void main() {
        // Fresnel effect
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = 1.0 - dot(viewDir, vNormal);
        fresnel = pow(fresnel, 2.0);
        
        // Animated energy lines
        float lines = sin(vWorldPosition.y * 20.0 + time * 3.0) * 0.5 + 0.5;
        lines *= sin(vWorldPosition.x * 15.0 - time * 2.0) * 0.5 + 0.5;
        lines = pow(lines, 3.0);
        
        // Speed-based color shift
        vec3 baseColor = color;
        if (isBoost) {
          baseColor = vec3(0.0, 1.0, 1.0); // Cyan for boost
        } else {
          baseColor = mix(vec3(0.4, 0.6, 1.0), vec3(1.0, 0.3, 0.3), clamp(speed / 100.0, 0.0, 1.0));
        }
        
        // Holographic effect
        vec3 holoColor = baseColor * (0.5 + 0.5 * sin(time * 2.0));
        
        // Combine effects
        vec3 finalColor = mix(baseColor * 0.3, holoColor, fresnel);
        finalColor += lines * baseColor * 0.5;
        finalColor += pow(fresnel, 3.0) * vec3(1.0, 1.0, 1.0) * 0.5;
        
        // Add rim lighting
        float rim = pow(fresnel, 4.0);
        finalColor += rim * baseColor * 2.0;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;this.material=new je({vertexShader:e,fragmentShader:n,uniforms:{time:{value:0},color:{value:new jt(4491519)},speed:{value:0},isBoost:{value:!1}}}),this.mesh=new Qt(t,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.userData.velocity=new L,this.scene.add(this.mesh)}setupContactListeners(){this.body.addEventListener("collide",t=>{const e=t.body;e.userData&&e.userData.isBouncePad&&(this.body.velocity.y=Math.max(this.body.velocity.y,25),console.log("Hit bounce pad! Applying upward force:",25))})}isGrounded(){const t=new M(this.body.position.x,this.body.position.y,this.body.position.z),e=new M(this.body.position.x,this.body.position.y-(this.radius+1.2),this.body.position.z),n=new Oi;this.physicsWorld.world.raycastClosest(t,e,{},n);const i=n.hasHit&&n.body&&n.body.mass===0&&n.distance<=this.radius+1,s=Math.abs(this.body.velocity.y)<2;return this.isGroundedFlag=i||s&&n.hasHit&&n.distance<=this.radius+.8,this.isGroundedFlag}update(){this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.mesh.userData.velocity.set(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z),this.material.uniforms&&(this.material.uniforms.time.value=performance.now()*.001,this.material.uniforms.speed.value=this.getSpeed(),this.material.uniforms.isBoost.value=this.isBoostActive);const t=performance.now()/1e3;this.isBoostActive&&t-this.boostStartTime>this.boostDuration&&this.endBoost();const e=this.trackMinY-50;this.body.position.y<e&&(console.log(`Ball fell off track at y: ${this.body.position.y}, threshold: ${e}`),this.reset(),this.onFallOff&&this.onFallOff())}setPosition(t){this.spawnPosition.copy(t),this.body.position.copy(t),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.mesh.position.copy(t)}setLevel(t){this.currentLevel=t}setTrackBounds(t){this.trackMinY=t,console.log(`Track bounds set - minimum Y: ${t}, fall threshold: ${t-50}`)}reset(){console.log("Ball reset to spawn position:",this.spawnPosition),this.setPosition(this.spawnPosition),this.lastBoostTime=0,this.isBoostActive=!1,this.endBoost()}getPosition(){return this.body.position.clone()}getSpeed(){return this.body.velocity.length()}startBoost(){const t=performance.now()/1e3;if(!this.isBoostActive&&t-this.lastBoostTime>this.BOOST_COOLDOWN){this.isBoostActive=!0,this.boostStartTime=t,this.lastBoostTime=t;const e=new M(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z),n=e.length();return n>.1?(e.normalize(),e.scale(n*this.BOOST_MULTIPLIER,e),this.body.velocity.set(e.x,e.y,e.z)):this.body.velocity.set(0,0,50),console.log("Boost activated! Speed multiplied by",this.BOOST_MULTIPLIER),!0}return!1}endBoost(){this.isBoostActive=!1,console.log("Boost ended")}getBoostCooldownRemaining(){const e=performance.now()/1e3-this.lastBoostTime;return Math.max(0,this.BOOST_COOLDOWN-e)}dispose(){this.body&&this.physicsWorld.removeBody(this.body),this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.material.dispose())}}function H_(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ne;let c=0;for(let h=0;h<r.length;++h){const d=r[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<r.length;++u){const f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(const h in s){const d=ic(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=ic(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ic(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}const o=new t(s);let a=0;for(let c=0;c<r.length;++c)o.set(r[c].array,a),a+=r[c].array.length;const l=new Re(o,e,n);return i!==void 0&&(l.gpuType=i),l}class G_{constructor(){this.shaderCache=new Map,this.currentShader=null,this.loadedShaders=new Set,this.globalUniforms={time:{value:0},resolution:{value:new rt},cameraPosition:{value:new L},lightDirection:{value:new L(1,1,1).normalize()}}}async loadShader(t){if(this.shaderCache.has(t))return this.shaderCache.get(t);try{const n=(await bo(Object.assign({"../shaders/cloud-surface.js":()=>Bt(()=>import("./cloud-surface-BCyGE64s.js"),[]),"../shaders/crystal-surface.js":()=>Bt(()=>import("./crystal-surface-AOQgzgez.js"),[]),"../shaders/energy-pulse.js":()=>Bt(()=>import("./energy-pulse-oGS_hbvc.js"),[]),"../shaders/forest-floor.js":()=>Bt(()=>import("./forest-floor-BgxuxzMf.js"),[]),"../shaders/ice-surface.js":()=>Bt(()=>import("./ice-surface-DawdKAdB.js"),[]),"../shaders/lava-flow.js":()=>Bt(()=>import("./lava-flow-BfVxcRGD.js"),[]),"../shaders/matrix-rain.js":()=>Bt(()=>import("./matrix-rain-B_OSKS50.js"),[]),"../shaders/metal-chrome.js":()=>Bt(()=>import("./metal-chrome-BptcPCgR.js"),[]),"../shaders/ocean-waves.js":()=>Bt(()=>import("./ocean-waves-BcclDU6K.js"),[]),"../shaders/rainbow-flow.js":()=>Bt(()=>import("./rainbow-flow-CsUtk9Bs.js"),[]),"../shaders/sand-dunes.js":()=>Bt(()=>import("./sand-dunes-CY8N-QzC.js"),[]),"../shaders/storm-electric.js":()=>Bt(()=>import("./storm-electric-D6Qd2KAe.js"),[]),"../shaders/tech-grid.js":()=>Bt(()=>import("./tech-grid-DsO6q0wh.js"),[])}),`../shaders/${t}.js`,3)).default,i=new je({uniforms:{...this.globalUniforms,...n.uniforms||{}},vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,transparent:n.transparent!==!1,side:n.side||bn,blending:n.blending||ti});return i.userData={name:t,description:n.description||"",author:n.author||"Unknown",version:n.version||"1.0.0",tags:n.tags||[],performance:n.performance||"medium"},this.shaderCache.set(t,i),this.loadedShaders.add(t),console.log(`Shader loaded: ${t}`,i.userData),i}catch(e){return console.error(`Failed to load shader: ${t}`,e),this.getFallbackMaterial()}}getFallbackMaterial(){return this.fallbackMaterial||(this.fallbackMaterial=new Je({color:65535,metalness:.3,roughness:.7})),this.fallbackMaterial}async applyShader(t,e){const n=await this.loadShader(t);return new Qt(e,n)}updateUniforms(t,e,n){this.globalUniforms.time.value+=t,this.globalUniforms.cameraPosition.value.copy(e.position),this.globalUniforms.resolution.value.copy(n);for(const i of this.shaderCache.values())i.uniforms&&Object.keys(this.globalUniforms).forEach(s=>{i.uniforms[s]&&(i.uniforms[s].value=this.globalUniforms[s].value)})}getShaderInfo(t){const e=this.shaderCache.get(t);return e?e.userData:null}getAvailableShaders(){return Array.from(this.loadedShaders)}async preloadShaders(t){const e=t.map(n=>this.loadShader(n));await Promise.all(e),console.log(`Preloaded ${t.length} shaders`)}cleanup(){for(const[t,e]of this.shaderCache)e.dispose();this.shaderCache.clear(),this.loadedShaders.clear()}async cloneShader(t){return(await this.loadShader(t)).clone()}}class V_{constructor(t,e){this.physicsWorld=t,this.scene=e,this.trackMeshes=[],this.trackBodies=[],this.segments=[],this.SEGMENT_LENGTH=6,this.TRACK_THICKNESS=.6,this.DEFAULT_WIDTH=10,this.WALL_HEIGHT=2,this.WALL_THICKNESS=.4,this.shaderManager=new G_,this.currentShader="rainbow-flow",this.geometryCache=new Map,this.sharedMaterial=new Je({vertexColors:!0,roughness:.8,metalness:.1}),this.wallMaterial=new Je({color:3355443,roughness:.9,metalness:.1}),this.performanceStats={drawCallsBefore:0,drawCallsAfter:0,meshCountBefore:0,meshCountAfter:0,trianglesBefore:0,trianglesAfter:0,geometryCacheHits:0,materialCacheHits:0,memoryBefore:0,memoryAfter:0},this.geometryCache=new Map,this.materialCache=new Map,this.maxCacheSize=100,this.cacheStats={hits:0,misses:0},this.instancedWalls=null,this.wallInstanceCount=0,this.materials={track:this.physicsWorld.getMaterial("track")},this.createTextures(),this.createSharedMaterials()}createTextures(){this.checkeredTexture=this.createCheckeredTexture(),this.trackTexture=this.createTrackTexture()}getCachedGeometry(t,e=this.DEFAULT_WIDTH){const n=`${t}_${e}`;if(!this.geometryCache.has(n)){let i;switch(t){case"track":i=new Ae(e,this.TRACK_THICKNESS,this.SEGMENT_LENGTH);break;case"wall":i=new Ae(this.WALL_THICKNESS,this.WALL_HEIGHT,this.SEGMENT_LENGTH);break;case"platform":i=new Ae(e+6,this.TRACK_THICKNESS*2,this.SEGMENT_LENGTH*2);break;default:i=new Ae(e,this.TRACK_THICKNESS,this.SEGMENT_LENGTH)}this.geometryCache.set(n,i)}return this.geometryCache.get(n)}createSharedMaterials(){this.sharedTrackMaterial=new Je({map:this.trackTexture,vertexColors:!0,roughness:.8,metalness:.1}),this.sharedWallMaterial=new Je({color:3355443}),console.log("📦 Created shared materials for optimization")}createCheckeredTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");for(let s=0;s<8;s++)for(let o=0;o<8;o++)n.fillStyle=(o+s)%2===0?"#ffffff":"#000000",n.fillRect(o*64/8,s*64/8,64/8,64/8);const i=new yl(e);return i.wrapS=Qn,i.wrapT=Qn,i.repeat.set(1,1),i}createTrackTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#2a2a2a",n.fillRect(0,0,256,256);const i=n.getImageData(0,0,256,256),s=i.data;for(let a=0;a<s.length;a+=4){const l=(Math.random()-.5)*30;s[a]+=l,s[a+1]+=l,s[a+2]+=l}n.putImageData(i,0,0);const o=new yl(e);return o.wrapS=Qn,o.wrapT=Qn,o.repeat.set(4,4),o}async buildTrack(t,e="segment"){console.log("🏁 Building optimized track from level data..."),this.capturePerformanceStatsBefore(),this.clearTrack(),t.shader&&await this.setShader(t.shader),t.skybox&&this.scene&&(this.scene.children.find(s=>s.userData&&s.userData.type==="skybox"),console.log(`Track requesting skybox: ${t.skybox}`));const n=t.generationStrategy||e;let i;if(n==="segment"||t.generateTrack)this.segments=this.generateSegments(t),i=await this.buildOptimizedTrackMeshes();else{const{TrackGenerationFactory:s}=await Bt(async()=>{const{TrackGenerationFactory:l}=await import("./TrackGenerationStrategies-CatE167G.js");return{TrackGenerationFactory:l}},[]),a=s.createStrategy(n,this).generate(t);this.trackMeshes=a.meshes||[],this.trackBodies=a.bodies||[],i={startPlane:a.startPlane||null,finishPlane:a.finishPlane||null,startPosition:a.startPosition||new L(0,5,0),checkpoints:a.checkpoints||[],bounds:a.bounds||{minY:-200,maxY:50}}}return this.capturePerformanceStatsAfter(),console.log(`🏁 Optimized track built${this.segments.length?` with ${this.segments.length} segments`:""}`),this.logPerformanceImprovement(),i}capturePerformanceStatsBefore(){this.performanceStats.meshCountBefore=this.scene.children.filter(t=>t instanceof Qt).length,performance.memory&&(this.performanceStats.memoryBefore=performance.memory.usedJSHeapSize),this.cacheStats={hits:0,misses:0}}capturePerformanceStatsAfter(){this.performanceStats.meshCountAfter=this.scene.children.filter(t=>t instanceof Qt).length,performance.memory&&(this.performanceStats.memoryAfter=performance.memory.usedJSHeapSize),this.performanceStats.geometryCacheHits=this.cacheStats.hits,this.performanceStats.materialCacheHits=this.materialCache.size}generateSegments(t){const e=[];let n=new L(0,5,0),i=0,s=0,o=0;const a=(c={})=>{if(c.lateralShift){const v=this.getOrientation(i,s,o),m=new L(1,0,0).applyQuaternion(v);n.add(m.multiplyScalar(c.lateralShift));return}if(c.customPosition){const v=c.customOrientation||this.getOrientation(i,s,o),m=c.customPosition.clone();let p;c.lanes?p=c.lanes.map(x=>Object.assign({},x)):p=[{offset:0,width:this.DEFAULT_WIDTH,isBoost:!1}],e.push({center:m,orientation:v.clone(),lanes:p,type:c.type||"box",curve:c.curve||null,tubularSegments:c.tubularSegments||32,isGap:c.isGap||!1,isStartLine:c.isStartLine||!1,isFinishLine:c.isFinishLine||!1,isBouncePad:c.isBouncePad||!1,isBoost:c.isBoost||!1}),c.nextPosition&&n.copy(c.nextPosition),c.setYaw!==void 0&&(i=c.setYaw),c.setPitch!==void 0&&(s=c.setPitch),c.setRoll!==void 0&&(o=c.setRoll);return}const h=this.getOrientation(i,s,o),d=new L(0,0,1).applyQuaternion(h).clone(),u=n.clone().add(d.clone().multiplyScalar(this.SEGMENT_LENGTH)),f=n.clone().add(u).multiplyScalar(.5);let g;c.lanes?g=c.lanes.map(v=>Object.assign({},v)):g=[{offset:0,width:this.DEFAULT_WIDTH,isBoost:!1}],e.push({center:f,orientation:h.clone(),lanes:g,type:c.type||"box",curve:c.curve||null,tubularSegments:c.tubularSegments||32,isGap:c.isGap||!1,isStartLine:c.isStartLine||!1,isFinishLine:c.isFinishLine||!1,isBouncePad:c.isBouncePad||!1,isBoost:c.isBoost||!1}),i+=c.yawDelta||0,s+=c.pitchDelta||0,o+=c.rollDelta||0,n.copy(u)},l=(c,h=15)=>{console.log("Building Hot Wheels loop with separate entry/exit lanes");const d=n.clone(),u=i,f=s,g=o,v=this.DEFAULT_WIDTH*.6,m=d.z+c*1.5,p=d.y+c,x=new L(d.x,p,m),_=5,y=Math.PI*.15;for(let H=0;H<_;H++){const O=(H+1)/_,R=O*O*(3-2*O),D=v*Math.sin(y*R),U=h*O,q=c*.3*R,Y=Math.PI*.25*R,W=new L(d.x+D,d.y+q,d.z+U),J=u+y*R,z=f+Y;a({customPosition:W,customOrientation:this.getOrientation(J,z,g),setYaw:J,setPitch:z})}const E=Math.PI*1.25,b=Math.PI*1.75,A=20;for(let H=0;H<=A;H++){const O=H/A,R=E-Math.PI*1.5*O,D=x.x+v*(1-O*2),U=x.y-c*Math.cos(R),q=x.z-c*Math.sin(R),Y=f+R-Math.PI/2;a({customPosition:new L(D,U,q),customOrientation:this.getOrientation(u,Y,g),setPitch:Y})}const I=b,S=x.x-v,w=x.y-c*Math.cos(I),B=x.z-c*Math.sin(I);n.set(S,w,B),s=f+I-Math.PI/2;for(let H=0;H<_;H++){const O=(H+1)/_,R=O*O*(3-2*O),D=v*(1-R),U=h*O,q=w-(w-d.y)*R,Y=s-(s-f)*R,W=new L(d.x-D,q,B+U);a({customPosition:W,customOrientation:this.getOrientation(u,Y,g),setPitch:Y})}s=f,i=u,n.y=d.y};return t.generateTrack(a,l),e}async buildOptimizedTrackMeshes(){const t=this.generateRainbowColors();let e=null,n=null,i=new L(0,5,0),s=1/0,o=-1/0;const a=[],l=[],c=[];return this.segments.forEach((h,d)=>{h.center&&(s=Math.min(s,h.center.y),o=Math.max(o,h.center.y));const u=t[d%t.length];h.lanes.forEach(f=>{if(!h.isGap){if(h.type==="curve"&&h.curve)l.push({segment:h,lane:f,baseColor:u,index:d});else if(a.push({segment:h,lane:f,baseColor:u,index:d}),h.lanes.length===1){const g=new L(1,0,0).applyQuaternion(h.orientation),v=h.center.clone().add(g.clone().multiplyScalar(f.offset)),m=v.clone().add(g.clone().multiplyScalar(-(f.width/2+this.WALL_THICKNESS/2)));m.y+=this.WALL_HEIGHT/2+this.TRACK_THICKNESS/2;const p=v.clone().add(g.clone().multiplyScalar(f.width/2+this.WALL_THICKNESS/2));p.y+=this.WALL_HEIGHT/2+this.TRACK_THICKNESS/2,c.push({position:m,orientation:h.orientation},{position:p,orientation:h.orientation})}}}),h.isStartLine&&(e=this.buildStartFinishLine(h,!0),i=this.calculateSpawnPosition(h)),h.isFinishLine&&(n=this.buildStartFinishLine(h,!1),console.log("Built finish plane:",n)),h.isBouncePad&&this.buildBouncePad(h),h.isBoost&&this.buildBoostSection(h)}),await this.buildMergedBoxSegments(a),l.forEach(({segment:h,lane:d,baseColor:u})=>{this.buildCurvedTrackLane(h,d,u)}),this.buildInstancedWalls(c),console.log(`📊 Track Y bounds - Min: ${s}, Max: ${o}, Total drop: ${o-s}`),console.log(`🎯 Built ${a.length} box segments, ${l.length} curve segments, ${c.length} walls`),{startPlane:e,finishPlane:n,startPosition:i,checkpoints:[],bounds:{minY:s===1/0?-200:s,maxY:o===-1/0?50:o}}}buildCurvedTrackLane(t,e,n){const i=t.curve,s=t.tubularSegments||32,o=e.width||this.DEFAULT_WIDTH,a=i.computeFrenetFrames(s,!1),l=new Ne,c=[],h=[],d=[];for(let y=0;y<=s;y++){const E=y/s,b=i.getPoint(E),A=a.normals[y],I=a.binormals[y],S=o/2,w=this.TRACK_THICKNESS/2;c.push(b.x-I.x*S-A.x*w,b.y-I.y*S-A.y*w,b.z-I.z*S-A.z*w),c.push(b.x+I.x*S-A.x*w,b.y+I.y*S-A.y*w,b.z+I.z*S-A.z*w),c.push(b.x+I.x*S+A.x*w,b.y+I.y*S+A.y*w,b.z+I.z*S+A.z*w),c.push(b.x-I.x*S+A.x*w,b.y-I.y*S+A.y*w,b.z-I.z*S+A.z*w);const B=E;d.push(0,B,1,B,1,B,0,B)}for(let y=0;y<s;y++){const E=y*4,b=(y+1)*4;h.push(E+3,E+2,b+3),h.push(b+3,E+2,b+2),h.push(E,b,E+1),h.push(E+1,b,b+1),h.push(E,E+3,b),h.push(b,E+3,b+3),h.push(E+1,b+1,E+2),h.push(E+2,b+1,b+2)}l.setAttribute("position",new ge(c,3)),l.setAttribute("uv",new ge(d,2)),l.setIndex(h),l.computeVertexNormals();const u=n.getHex(),f=new Je({color:u,map:this.trackTexture,roughness:.8,metalness:.1}),g=new Qt(l,f);g.castShadow=!0,g.receiveShadow=!0,this.scene.add(g),this.trackMeshes.push(g);const v=[],m=[],p=l.attributes.position.array;for(let y=0;y<p.length;y+=3)v.push(p[y],p[y+1],p[y+2]);if(l.index){const y=l.index.array;for(let E=0;E<y.length;E++)m.push(y[E])}else for(let y=0;y<p.length/3;y++)m.push(y);const x=new ur(new Float32Array(v),new Uint16Array(m)),_=new _t({mass:0,material:this.materials.track,shape:x});this.physicsWorld.addBody(_),this.trackBodies.push(_)}async buildMergedBoxSegments(t){if(t.length===0)return;console.log(`🔧 Building ${t.length} box segments with geometry merging...`);const e=20,n=[];for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e));for(let i=0;i<n.length;i++){const s=n[i],o=[];if(s.forEach(({segment:a,lane:l,baseColor:c})=>{const h=new L(1,0,0).applyQuaternion(a.orientation),d=a.center.clone().add(h.clone().multiplyScalar(l.offset)),u=`box_${l.width}_${this.TRACK_THICKNESS}_${this.SEGMENT_LENGTH}`,g=this.getOrCreateGeometry(u,()=>new Ae(l.width,this.TRACK_THICKNESS,this.SEGMENT_LENGTH)).clone(),v=new ee;v.compose(d,a.orientation,new L(1,1,1)),g.applyMatrix4(v);const m=g.attributes.position.count,p=new Float32Array(m*3);for(let y=0;y<m;y++){const E=y*3;p[E]=c.r,p[E+1]=c.g,p[E+2]=c.b}g.setAttribute("color",new Re(p,3)),o.push(g);const x=new En(new M(l.width/2,this.TRACK_THICKNESS/2,this.SEGMENT_LENGTH/2)),_=new _t({mass:0,material:this.materials.track});_.addShape(x),_.position.copy(d),_.quaternion.copy(a.orientation),this.physicsWorld.addBody(_),this.trackBodies.push(_)}),o.length>0){const a=H_(o),l=await this.applyTrackShader(a);l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.trackMeshes.push(l),o.forEach(c=>c.dispose()),console.log(`✅ Merged chunk ${i+1}/${n.length} with ${s.length} segments`)}}}buildInstancedWalls(t){if(t.length===0)return;console.log(`🧱 Building ${t.length} walls with InstancedMesh...`);const e=this.getOrCreateGeometry(`wall_${this.WALL_THICKNESS}_${this.WALL_HEIGHT}_${this.SEGMENT_LENGTH}`,()=>new Ae(this.WALL_THICKNESS,this.WALL_HEIGHT,this.SEGMENT_LENGTH));this.instancedWalls=new mg(e,this.sharedWallMaterial,t.length),this.instancedWalls.castShadow=!0,this.instancedWalls.receiveShadow=!0,t.forEach((n,i)=>{const s=new ee;s.compose(n.position,n.orientation,new L(1,1,1)),this.instancedWalls.setMatrixAt(i,s);const o=new En(new M(this.WALL_THICKNESS/2,this.WALL_HEIGHT/2,this.SEGMENT_LENGTH/2)),a=new _t({mass:0,material:this.materials.track});a.addShape(o),a.position.copy(n.position),a.quaternion.copy(n.orientation),this.physicsWorld.addBody(a),this.trackBodies.push(a)}),this.instancedWalls.instanceMatrix.needsUpdate=!0,this.instancedWalls.count=t.length,this.wallInstanceCount=t.length,this.scene.add(this.instancedWalls),this.trackMeshes.push(this.instancedWalls),console.log(`✅ Created instanced walls: ${t.length} instances in 1 draw call`)}buildBouncePad(t){t.lanes.forEach(e=>{const n=new L(1,0,0).applyQuaternion(t.orientation),i=t.center.clone().add(n.clone().multiplyScalar(e.offset)),s=new Ae(e.width,.3,this.SEGMENT_LENGTH),o=new Je({color:65535,emissive:52428,emissiveIntensity:.5,metalness:.8,roughness:.2}),a=new Qt(s,o);a.position.copy(i),a.position.y+=this.TRACK_THICKNESS/2+.15,a.quaternion.copy(t.orientation),this.scene.add(a),this.trackMeshes.push(a);const l=new En(new M(e.width/2,.15,this.SEGMENT_LENGTH/2)),c=new _t({mass:0,type:_t.STATIC,shape:l});c.position.copy(a.position),c.quaternion.copy(t.orientation),c.userData={isBouncePad:!0},this.physicsWorld.addBody(c),this.trackBodies.push(c);const h=new mr(.5,.8,.1,8),d=new Ii({color:65535,emissive:65535});[{x:e.width/2-1,z:this.SEGMENT_LENGTH/2-1},{x:-(e.width/2-1),z:this.SEGMENT_LENGTH/2-1},{x:e.width/2-1,z:-(this.SEGMENT_LENGTH/2-1)},{x:-(e.width/2-1),z:-(this.SEGMENT_LENGTH/2-1)}].forEach(f=>{const g=new Qt(h,d);g.position.copy(i),g.position.y+=this.TRACK_THICKNESS/2+.35;const v=new L(f.x,0,f.z);v.applyQuaternion(t.orientation),g.position.add(v),g.quaternion.copy(t.orientation),this.scene.add(g),this.trackMeshes.push(g)})})}buildBoostSection(t){t.lanes.forEach(e=>{const n=new L(1,0,0).applyQuaternion(t.orientation),i=t.center.clone().add(n.clone().multiplyScalar(e.offset)),s=new Uo(.5,2,4),o=new Je({color:16711935,emissive:16711935,emissiveIntensity:.3});for(let h=-1;h<=1;h++){const d=new Qt(s,o);d.position.copy(i),d.position.y+=this.TRACK_THICKNESS/2+1;const u=new L(0,0,1).applyQuaternion(t.orientation);d.position.add(u.clone().multiplyScalar(h*2)),d.quaternion.copy(t.orientation),d.rotateX(-Math.PI/2),this.scene.add(d),this.trackMeshes.push(d)}const a=new Ae(e.width*.8,.1,this.SEGMENT_LENGTH),l=new Je({color:16711935,emissive:16711935,emissiveIntensity:.5,transparent:!0,opacity:.8}),c=new Qt(a,l);c.position.copy(i),c.position.y+=this.TRACK_THICKNESS/2+.05,c.quaternion.copy(t.orientation),this.scene.add(c),this.trackMeshes.push(c)})}buildStartFinishLine(t,e){const n=new hs(this.DEFAULT_WIDTH,2),i=new Ii({map:this.checkeredTexture,side:tn,opacity:.8,transparent:!0}),s=new Qt(n,i),o=e?-this.SEGMENT_LENGTH/2-.01:this.SEGMENT_LENGTH/2+.01,a=new L(0,0,o).applyQuaternion(t.orientation);if(s.position.copy(t.center).add(a),s.quaternion.copy(t.orientation),s.rotateX(Math.PI/2),this.scene.add(s),this.trackMeshes.push(s),e){const c=new Ae(this.DEFAULT_WIDTH+6,this.TRACK_THICKNESS*2,this.SEGMENT_LENGTH*2),h=new Je({color:5592405,metalness:.3,roughness:.7}),d=new Qt(c,h);d.position.copy(t.center),d.position.y-=this.TRACK_THICKNESS,d.quaternion.copy(t.orientation),d.castShadow=!0,d.receiveShadow=!0,this.scene.add(d),this.trackMeshes.push(d);const u=new En(new M((this.DEFAULT_WIDTH+6)/2,this.TRACK_THICKNESS,this.SEGMENT_LENGTH)),f=new _t({mass:0,material:this.materials.track});f.addShape(u),f.position.copy(d.position),f.quaternion.copy(t.orientation),this.physicsWorld.addBody(f),this.trackBodies.push(f);const g=1.5,v=.3,m=new Ae(v,g,this.SEGMENT_LENGTH*2),p=new Je({color:6710886}),x=new Qt(m,p),_=new L(1,0,0).applyQuaternion(t.orientation);x.position.copy(t.center).add(_.clone().multiplyScalar(-(this.DEFAULT_WIDTH+6)/2-v/2)),x.position.y+=g/2,x.quaternion.copy(t.orientation),x.castShadow=!0,this.scene.add(x),this.trackMeshes.push(x);const y=new Qt(m,p);y.position.copy(t.center).add(_.clone().multiplyScalar((this.DEFAULT_WIDTH+6)/2+v/2)),y.position.y+=g/2,y.quaternion.copy(t.orientation),y.castShadow=!0,this.scene.add(y),this.trackMeshes.push(y);const E=new Ae(this.DEFAULT_WIDTH+6,g,v),b=new Qt(E,p),A=new L(0,0,-1).applyQuaternion(t.orientation);b.position.copy(t.center).add(A.clone().multiplyScalar(this.SEGMENT_LENGTH-v/2)),b.position.y+=g/2,b.quaternion.copy(t.orientation),b.castShadow=!0,this.scene.add(b),this.trackMeshes.push(b);const I=new En(new M(v/2,g/2,this.SEGMENT_LENGTH)),S=new En(new M((this.DEFAULT_WIDTH+6)/2,g/2,v/2));[x,y].forEach(B=>{const H=new _t({mass:0,material:this.materials.track});H.addShape(I),H.position.copy(B.position),H.quaternion.copy(t.orientation),this.physicsWorld.addBody(H),this.trackBodies.push(H)});const w=new _t({mass:0,material:this.materials.track});w.addShape(S),w.position.copy(b.position),w.quaternion.copy(t.orientation),this.physicsWorld.addBody(w),this.trackBodies.push(w)}const l=new L(0,0,1).applyQuaternion(t.orientation);if(!e){const c=new hs(this.DEFAULT_WIDTH*1.5,10),h=new Ii({color:65280,side:tn,opacity:.2,transparent:!0}),d=new Qt(c,h);d.position.copy(s.position),d.quaternion.copy(t.orientation),this.scene.add(d),this.trackMeshes.push(d)}return{position:s.position.clone(),normal:l}}calculateSpawnPosition(t){const e=t.center.clone();return e.y+=this.TRACK_THICKNESS+1.1,e}generateRainbowColors(){const t=[];for(let e=0;e<this.segments.length;e++){const n=e/this.segments.length*.65,i=new jt;i.setHSL(n,1,.5),t.push(i)}return t}getOrientation(t,e,n){const i=new An().setFromEuler(new ps(e,t,0,"YXZ")),s=new L(0,0,1).applyQuaternion(i).normalize(),o=new An().setFromAxisAngle(s,n);return i.multiply(o)}getOrCreateGeometry(t,e){return this.geometryCache.has(t)?this.cacheStats&&this.cacheStats.hits++:(this.geometryCache.set(t,e()),console.log(`📦 Cached geometry: ${t}`),this.cacheStats&&this.cacheStats.misses++),this.geometryCache.get(t)}getOrCreateMaterial(t,e){return this.materialCache.has(t)||(this.materialCache.set(t,e()),console.log(`🎨 Cached material: ${t}`)),this.materialCache.get(t)}logPerformanceImprovement(){const t=this.performanceStats.meshCountBefore-this.performanceStats.meshCountAfter,e=this.performanceStats.meshCountBefore>0?(t/this.performanceStats.meshCountBefore*100).toFixed(1):"0";if(console.log(`
🚀 PERFORMANCE OPTIMIZATION RESULTS:`),console.log(`📊 Mesh count: ${this.performanceStats.meshCountBefore} → ${this.performanceStats.meshCountAfter} (${e}% reduction)`),console.log(`🧱 Wall instances: ${this.wallInstanceCount} walls in 1 draw call`),console.log(`📦 Geometry cache: ${this.geometryCache.size} cached geometries (${this.cacheStats.hits} hits, ${this.cacheStats.misses} misses)`),console.log(`🎨 Material cache: ${this.materialCache.size} cached materials`),this.performanceStats.memoryBefore&&this.performanceStats.memoryAfter){const i=((this.performanceStats.memoryAfter-this.performanceStats.memoryBefore)/1024/1024).toFixed(2);console.log(`💾 Memory usage: +${i} MB`)}console.log("✨ Using vertex colors for rainbow effect (single material)"),console.log(`🏗️ Merged box segments in chunks of 20 for better performance
`)}clearTrack(){this.trackMeshes.forEach(t=>{this.scene.remove(t),t.geometry&&!this.geometryCache.has(t.geometry)&&t.geometry.dispose(),t.material&&t.material!==this.sharedTrackMaterial&&t.material!==this.sharedWallMaterial&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.trackMeshes=[],this.trackBodies.forEach(t=>{this.physicsWorld.removeBody(t)}),this.trackBodies=[],this.segments=[],this.instancedWalls=null,this.wallInstanceCount=0}dispose(){this.clearTrack(),this.checkeredTexture&&this.checkeredTexture.dispose(),this.trackTexture&&this.trackTexture.dispose(),this.sharedTrackMaterial&&this.sharedTrackMaterial.dispose(),this.sharedWallMaterial&&this.sharedWallMaterial.dispose(),this.geometryCache.forEach(t=>t.dispose()),this.geometryCache.clear(),this.materialCache.forEach(t=>t.dispose()),this.materialCache.clear(),this.shaderManager&&this.shaderManager.cleanup(),console.log("🧹 Disposed TrackBuilder resources")}async setShader(t){this.currentShader=t,console.log(`Track shader set to: ${t}`)}updateShaderUniforms(t,e,n){this.shaderManager&&this.shaderManager.updateUniforms(t,e,n)}async applyTrackShader(t){try{return this.currentShader&&this.currentShader!=="rainbow-flow"?(console.log(`Applying custom shader: ${this.currentShader}`),await this.shaderManager.applyShader(this.currentShader,t)):(console.log("Using default rainbow-flow material"),new Qt(t,this.sharedMaterial))}catch(e){return console.error("Failed to apply shader, using fallback:",e),new Qt(t,this.sharedMaterial)}}getAvailableShaders(){return[{name:"rainbow-flow",description:"Classic rainbow track",performance:"good"},{name:"tech-grid",description:"Futuristic grid pattern",performance:"good"},{name:"energy-pulse",description:"Pulsating energy effects",performance:"medium"},{name:"crystal-surface",description:"Crystalline ice surface",performance:"medium"},{name:"lava-flow",description:"Molten lava surface",performance:"medium"},{name:"matrix-rain",description:"Digital rain effect",performance:"good"}]}async preloadShaders(t){this.shaderManager&&await this.shaderManager.preloadShaders(t)}}class W_{constructor(){this.state={left:!1,right:!1,up:!1,down:!1,jumpRequested:!1,boostRequested:!1},this.listeners=new Map,this.init()}init(){window.addEventListener("keydown",t=>{this.handleKeyDown(t),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.handleKeyUp(t)})}handleKeyDown(t){switch(t.code){case"ArrowLeft":case"KeyA":this.state.left=!0;break;case"ArrowRight":case"KeyD":this.state.right=!0;break;case"ArrowUp":case"KeyW":this.state.up=!0;break;case"ArrowDown":case"KeyS":this.state.down=!0;break;case"Space":this.state.jumpRequested=!0;break;case"ShiftLeft":case"ShiftRight":this.state.boostRequested=!0;break;case"KeyR":this.emit("restart");break;case"Digit1":this.emit("level",1);break;case"Digit2":this.emit("level",2);break;case"Digit3":this.emit("level",3);break}}handleKeyUp(t){switch(t.code){case"ArrowLeft":case"KeyA":this.state.left=!1;break;case"ArrowRight":case"KeyD":this.state.right=!1;break;case"ArrowUp":case"KeyW":this.state.up=!1;break;case"ArrowDown":case"KeyS":this.state.down=!1;break}}on(t,e){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e)}emit(t,...e){this.listeners.has(t)&&this.listeners.get(t).forEach(n=>n(...e))}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),this.listeners.clear()}}var q_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function X_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var th={exports:{}};(function(r,t){(function(e,n){r.exports=n()})(q_,function(){var e=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===f?"block":"none";s=f}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=n(new e.Panel("FPS","#0ff","#002")),d=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(d.update(f-a,200),f>l+1e3&&(h.update(1e3*c/(f-l),100),l=f,c=0,u)){var g=performance.memory;u.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return e.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,u=3*c,f=2*c,g=3*c,v=15*c,m=74*c,p=30*c,x=document.createElement("canvas");x.width=h,x.height=d,x.style.cssText="width:80px;height:48px";var _=x.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=s,_.fillRect(0,0,h,d),_.fillStyle=i,_.fillText(n,u,f),_.fillRect(g,v,m,p),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(g,v,m,p),{dom:x,update:function(y,E){o=Math.min(o,y),a=Math.max(a,y),_.fillStyle=s,_.globalAlpha=1,_.fillRect(0,0,h,v),_.fillStyle=i,_.fillText(l(y)+" "+n+" ("+l(o)+"-"+l(a)+")",u,f),_.drawImage(x,g+c,v,m-c,p,g,v,m-c,p),_.fillRect(g+m-c,v,c,p),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(g+m-c,v,c,l((1-y/E)*p))}}},e})})(th);var j_=th.exports;const Y_=X_(j_);class K_{constructor(){this.elements={levelDisplay:document.getElementById("levelDisplay"),timer:document.getElementById("timer"),speedometer:document.getElementById("speedometer"),bestTime:document.getElementById("bestTime"),boostStatus:document.getElementById("boostStatus")},this.currentLevel=1,this.showFPS=!1,this.stats=new Y_,this.stats.showPanel(0),this.stats.dom.style.display="none",this.stats.dom.style.position="absolute",this.stats.dom.style.top="80px",this.stats.dom.style.left="10px",this.stats.dom.style.zIndex="1000",document.body.appendChild(this.stats.dom),this.init(),this.setupFPSToggle()}init(){this.reset()}updateLevel(t){this.currentLevel=t,this.elements.levelDisplay&&(this.elements.levelDisplay.textContent=`Level: ${t}`)}updateTimer(t){this.elements.timer&&(this.elements.timer.textContent=`Time: ${t.toFixed(2)} s`)}updateBestTime(t){this.elements.bestTime&&(t!==null?this.elements.bestTime.textContent=`Best: ${t.toFixed(2)} s`:this.elements.bestTime.textContent="Best: --:--")}update(t){if(this.elements.speedometer){const e=t.speed||0;this.elements.speedometer.textContent=`Speed: ${e.toFixed(1)}`,e>50?this.elements.speedometer.classList.add("high-speed"):this.elements.speedometer.classList.remove("high-speed")}Math.random()<.01&&t.position&&console.log(`Ball position - Y: ${t.position.y.toFixed(1)}`),this.elements.boostStatus&&(t.isBoostActive?(this.elements.boostStatus.textContent="Boost: ACTIVE!",this.elements.boostStatus.classList.add("boost-active")):t.boostCooldown>0?(this.elements.boostStatus.textContent=`Boost: ${t.boostCooldown.toFixed(1)}s`,this.elements.boostStatus.classList.remove("boost-active")):(this.elements.boostStatus.textContent="Boost: Ready",this.elements.boostStatus.classList.remove("boost-active")))}showRaceStart(){this.showNotification("GO!","success")}showRaceFinish(t,e=!1){const n=e?`NEW BEST! ${t.toFixed(2)}s`:`Finished! ${t.toFixed(2)}s`;this.showNotification(n,e?"best":"success"),this.elements.timer&&(this.elements.timer.classList.add("finish"),setTimeout(()=>{this.elements.timer.classList.remove("finish")},1e3))}showCheckpointPassed(t,e){this.showNotification(`Checkpoint ${t}/${e}`,"info")}showBoostActivated(){this.elements.speedometer&&(this.elements.speedometer.classList.add("boost"),setTimeout(()=>{this.elements.speedometer.classList.remove("boost")},500))}showNotification(t,e="info"){const n=document.createElement("div");n.className=`notification notification-${e}`,n.textContent=t,Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:this.getNotificationColor(e),color:"#ffffff",padding:"15px 30px",borderRadius:"10px",fontSize:"1.2rem",fontWeight:"bold",zIndex:"1000",textAlign:"center",boxShadow:"0 0 20px rgba(0, 255, 255, 0.5)",animation:"notificationSlide 2s ease-out forwards"}),document.body.appendChild(n),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},2e3)}getNotificationColor(t){switch(t){case"success":return"rgba(0, 255, 0, 0.9)";case"best":return"rgba(255, 215, 0, 0.9)";case"info":return"rgba(0, 255, 255, 0.9)";case"warning":return"rgba(255, 165, 0, 0.9)";case"error":return"rgba(255, 0, 0, 0.9)";default:return"rgba(0, 255, 255, 0.9)"}}reset(){this.updateTimer(0),Object.values(this.elements).forEach(t=>{t&&t.classList.remove("boost","finish","high-speed")})}hide(){const t=document.getElementById("hud");t&&(t.style.display="none")}show(){const t=document.getElementById("hud");t&&(t.style.display="block")}setupFPSToggle(){document.addEventListener("keydown",t=>{t.key.toLowerCase()==="f"&&!t.repeat&&this.toggleFPS()})}toggleFPS(){this.showFPS=!this.showFPS,this.stats.dom.style.display=this.showFPS?"block":"none",console.log(`FPS display ${this.showFPS?"enabled":"disabled"}. Press F to toggle.`)}updateFPS(){this.stats.begin()}endFPS(){this.stats.end()}}class $_{constructor(t,e){this.hud=t,this.completionScreen=e,this.raceStarted=!1,this.startTime=0,this.currentTime=0,this.finishPlane=null,this.currentLevel=1,this.hasMovedYet=!1,this.initialPosition=null,this.lastFinishSide=null,this.DETECTION_DISTANCE=5,this.MOVEMENT_THRESHOLD=.5}setTrack(t,e){this.finishPlane=t.finishPlane,this.currentLevel=e,this.reset(),this.initialPosition=t.startPosition?t.startPosition.clone():new L(0,5,0);const n=this.getBestTime();this.hud&&this.hud.updateBestTime(n),console.log("Timer initialized for level",e,"finish plane:",this.finishPlane)}reset(){this.raceStarted=!1,this.startTime=0,this.currentTime=0,this.hasMovedYet=!1,this.lastFinishSide=null,this.hud&&this.hud.updateTimer(0),console.log("Timer reset")}update(t){if(!this.finishPlane){console.warn("No finish plane set!");return}const e=new L(t.x,t.y,t.z);!this.raceStarted&&!this.hasMovedYet&&this.initialPosition&&e.distanceTo(this.initialPosition)>this.MOVEMENT_THRESHOLD&&(this.startRace(),this.hasMovedYet=!0),this.checkFinishLine(e),this.raceStarted&&(this.currentTime=(performance.now()-this.startTime)/1e3,this.hud&&this.hud.updateTimer(this.currentTime))}checkFinishLine(t){const e=this.getDistanceToPlane(t,this.finishPlane),n=Math.sign(e);Math.abs(e)<this.DETECTION_DISTANCE*2&&console.log(`Near finish line: distance=${e.toFixed(2)}, side=${n}, lastSide=${this.lastFinishSide}, raceStarted=${this.raceStarted}`),this.lastFinishSide!==null&&this.lastFinishSide!==n&&Math.abs(e)<this.DETECTION_DISTANCE&&this.raceStarted&&(console.log("Finish line crossed!"),this.finishRace()),Math.abs(e)<this.DETECTION_DISTANCE*3&&(this.lastFinishSide=n)}getDistanceToPlane(t,e){return new L(t.x,t.y,t.z).clone().sub(e.position).dot(e.normal)}startRace(){this.raceStarted||(this.raceStarted=!0,this.startTime=performance.now(),console.log("Race started at time:",this.startTime),this.hud&&this.hud.showRaceStart())}finishRace(){if(!this.raceStarted)return;this.raceStarted=!1;const t=this.currentTime,e=this.getBestTime();let n=!1;(e===null||t<e)&&(this.saveBestTime(t),n=!0),console.log(`Race finished! Time: ${t.toFixed(2)}s${n?" (NEW BEST!)":""}`),this.hud&&(this.hud.showRaceFinish(t,n),this.hud.updateBestTime(this.getBestTime())),this.completionScreen&&setTimeout(()=>{this.completionScreen.show(t,this.getBestTime(),n)},1500)}getBestTime(){const t=localStorage.getItem(`bestTime_level_${this.currentLevel}`);return t?parseFloat(t):null}saveBestTime(t){localStorage.setItem(`bestTime_level_${this.currentLevel}`,t.toString())}initializeDetection(t){const e=new L(t.x,t.y,t.z);if(this.initialPosition=e.clone(),this.finishPlane){const n=this.getDistanceToPlane(e,this.finishPlane);this.lastFinishSide=Math.sign(n),console.log(`Initialized finish detection: distance=${n.toFixed(2)}, side=${this.lastFinishSide}`)}else console.error("No finish plane when initializing detection!")}}class Z_{constructor(){this.scene=new Nc,this.renderer=null,this.camera=null,this.lighting=null,this.skybox=null,this.physicsWorld=null,this.ball=null,this.trackBuilder=null,this.inputManager=null,this.hud=null,this.timer=null,this.completionScreen=null,this.currentLevel=2,this.isRunning=!1,this.gameLoop=null}setCompletionScreen(t){this.completionScreen=t}async init(){console.log("Initializing game systems..."),this.renderer=new I_,this.scene.background=new jt(0),this.camera=new U_(this.renderer.domElement),this.lighting=new F_,this.lighting.addToScene(this.scene),this.skybox=new B_,await this.skybox.init(this.scene),this.skybox.addToScene(this.scene),this.physicsWorld=new z_,this.ball=new k_(this.physicsWorld,this.scene),this.ball.init(),this.ball.onFallOff=()=>{console.log("Ball fell off - resetting timer"),this.timer.reset()},this.trackBuilder=new V_(this.physicsWorld,this.scene),this.inputManager=new W_,this.setupInputHandlers(),this.hud=new K_,this.timer=new $_(this.hud,this.completionScreen),this.camera.setTarget(this.ball.mesh),console.log("Game systems initialized successfully")}setupInputHandlers(){this.inputManager.on("restart",()=>this.restart()),this.inputManager.on("level",t=>this.loadLevel(t)),window.addEventListener("keydown",t=>{t.key==="t"&&(console.log("Debug: Manually starting timer"),this.timer.startRace()),t.key==="f"&&(console.log("Debug: Manually finishing race"),this.timer.finishRace())})}async loadLevel(t){console.log(`Loading level ${t}...`),this.currentLevel=t,this.hud.updateLevel(t),this.trackBuilder.clearTrack();const e=await bo(Object.assign({"../tracks/levels/Level1.js":()=>Bt(()=>import("./Level1-CHXIdbSK.js"),[]),"../tracks/levels/Level10.js":()=>Bt(()=>import("./Level10-QSn9EfFO.js"),[]),"../tracks/levels/Level11.js":()=>Bt(()=>import("./Level11-7NxkxBUf.js"),[]),"../tracks/levels/Level12.js":()=>Bt(()=>import("./Level12-PqdxSOMx.js"),[]),"../tracks/levels/Level13.js":()=>Bt(()=>import("./Level13-DGml87M9.js"),[]),"../tracks/levels/Level14.js":()=>Bt(()=>import("./Level14-9N4gxIo8.js"),[]),"../tracks/levels/Level15.js":()=>Bt(()=>import("./Level15-DOQyK9g5.js"),[]),"../tracks/levels/Level16.js":()=>Bt(()=>import("./Level16-BZZJssIu.js"),[]),"../tracks/levels/Level17.js":()=>Bt(()=>import("./Level17-B4a6bqd5.js"),[]),"../tracks/levels/Level18.js":()=>Bt(()=>import("./Level18-e29sns7Q.js"),[]),"../tracks/levels/Level19.js":()=>Bt(()=>import("./Level19-C29MWX-2.js"),[]),"../tracks/levels/Level2.js":()=>Bt(()=>import("./Level2-QknHOG0Y.js"),[]),"../tracks/levels/Level20.js":()=>Bt(()=>import("./Level20-CvmF3EjG.js"),[]),"../tracks/levels/Level3.js":()=>Bt(()=>import("./Level3-BsMdy-tj.js"),[]),"../tracks/levels/Level4.js":()=>Bt(()=>import("./Level4-1q7LOp4Q.js"),[]),"../tracks/levels/Level5.js":()=>Bt(()=>import("./Level5-C9SH8ZZQ.js"),[]),"../tracks/levels/Level6.js":()=>Bt(()=>import("./Level6-DX5kPide.js"),[]),"../tracks/levels/Level7.js":()=>Bt(()=>import("./Level7-BGSyASAZ.js"),[]),"../tracks/levels/Level8.js":()=>Bt(()=>import("./Level8-CsnC7sk-.js"),[]),"../tracks/levels/Level9.js":()=>Bt(()=>import("./Level9-Bsj-2uCR.js"),[])}),`../tracks/levels/Level${t}.js`,4);e.default.skybox&&this.skybox&&await this.skybox.setSkybox(e.default.skybox,this.scene);const n=await this.trackBuilder.buildTrack(e.default);if(this.ball.setPosition(n.startPosition),this.ball.setLevel(t),n.bounds&&this.ball.setTrackBounds(n.bounds.minY),this.ball.lastBoostTime=0,n.startPlane){const s=n.startPlane.normal.clone().clone().multiplyScalar(-25);s.y=15;const o=n.startPosition.clone().add(s);this.camera.camera.position.copy(o),this.camera.controls.target.copy(n.startPosition)}console.log("Setting up timer with track data:",n),this.timer.setTrack(n,this.currentLevel),this.timer.initializeDetection(this.ball.getPosition()),console.log(`Level ${t} loaded successfully`)}start(){this.isRunning||(this.isRunning=!0,document.body.classList.add("playing"),this.animate(),console.log("Game started"))}stop(){this.isRunning=!1,document.body.classList.remove("playing"),this.gameLoop&&(cancelAnimationFrame(this.gameLoop),this.gameLoop=null),console.log("Game stopped")}restart(){this.ball.reset(),this.timer.reset(),this.hud.reset()}animate(){if(!this.isRunning)return;this.gameLoop=requestAnimationFrame(()=>this.animate()),this.hud.updateFPS(),this.handlePlayerInput(),this.physicsWorld.step(1/60),this.ball.update(),this.camera.update(),this.timer.update(this.ball.getPosition()),this.hud.update({speed:this.ball.getSpeed(),position:this.ball.getPosition(),isGrounded:this.ball.isGrounded(),boostCooldown:this.ball.getBoostCooldownRemaining(),isBoostActive:this.ball.isBoostActive});const t=1/60,e=new rt(window.innerWidth,window.innerHeight);this.skybox&&this.skybox.update(performance.now(),this.camera.camera,e),this.trackBuilder&&this.trackBuilder.updateShaderUniforms(t,this.camera.camera,e),this.renderer.render(this.scene,this.camera.camera),this.hud.endFPS()}handlePlayerInput(){const t=this.inputManager.state,e=this.ball.body,n=this.ball.isBoostActive?this.ball.BOOST_ACCELERATION:this.ball.ACCELERATION,i=new L;this.camera.camera.getWorldDirection(i),i.y=0,i.normalize();const s=new L().crossVectors(i,new L(0,1,0)).normalize().negate(),o=new M(0,0,0);t.up&&(o.x+=i.x*n,o.z+=i.z*n),t.down&&(o.x-=i.x*n,o.z-=i.z*n),t.left&&(o.x+=s.x*n,o.z+=s.z*n),t.right&&(o.x-=s.x*n,o.z-=s.z*n),e.applyForce(o);const a=performance.now()/1e3;t.jumpRequested&&this.ball.isGrounded()&&a-this.ball.lastJumpTime>this.ball.JUMP_COOLDOWN&&(e.velocity.y+=this.ball.JUMP_VELOCITY,this.ball.lastJumpTime=a,t.jumpRequested=!1),t.boostRequested&&(this.ball.startBoost()&&this.hud.showBoostActivated(),t.boostRequested=!1)}handleResize(){this.camera.handleResize(),this.renderer.handleResize()}destroy(){for(this.stop(),this.inputManager&&this.inputManager.dispose(),this.renderer&&this.renderer.dispose();this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.ball=null,this.trackBuilder=null,this.physicsWorld=null,this.camera=null,this.lighting=null,this.skybox=null}getScene(){return this.scene}getPhysicsWorld(){return this.physicsWorld.world}}class J_{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.sphere=null,this.canvas=null,this.animationId=null}init(){this.canvas=document.getElementById("start-background-canvas"),this.canvas&&(this.scene=new Nc,this.camera=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Io({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.createBackground(),this.setupCamera(),this.startAnimation(),window.addEventListener("resize",()=>this.handleResize()))}createBackground(){const t=new ms(15,64,32),e=new je({transparent:!0,uniforms:{time:{value:0},opacity:{value:.3}},vertexShader:`
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vPosition = position;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform float opacity;
        varying vec3 vPosition;
        varying vec3 vNormal;
        
        void main() {
          vec3 pos = vPosition * 0.1;
          
          // Flowing energy patterns
          float pattern1 = sin(pos.y * 2.0 + time * 0.5) * 0.5 + 0.5;
          float pattern2 = sin(pos.x * 1.5 + pos.z * 1.2 + time * 0.3) * 0.5 + 0.5;
          float spiral = sin(pos.x * 0.8 + pos.y * 0.6 + pos.z * 1.0 + time * 0.4) * 0.5 + 0.5;
          
          // Color mixing
          vec3 color1 = vec3(0.0, 0.7, 1.0);  // Cyan
          vec3 color2 = vec3(0.5, 0.0, 1.0);  // Purple
          vec3 color3 = vec3(0.0, 1.0, 0.7);  // Teal
          
          vec3 finalColor = mix(
            mix(color1, color2, pattern1),
            color3,
            pattern2 * spiral
          );
          
          // Fade based on normal (edge glow effect)
          float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
          finalColor *= fresnel * 0.8 + 0.2;
          
          gl_FragColor = vec4(finalColor, opacity * (pattern1 * pattern2 * 0.6 + 0.4));
        }
      `});this.sphere=new Qt(t,e),this.scene.add(this.sphere),this.createParticles(),this.createWireframe()}createParticles(){const e=new Float32Array(600),n=new Float32Array(200*3),i=new Float32Array(200);for(let a=0;a<200;a++){const l=a*3,c=Math.random()*25+10,h=Math.random()*Math.PI*2,d=Math.random()*Math.PI;e[l]=c*Math.sin(d)*Math.cos(h),e[l+1]=c*Math.sin(d)*Math.sin(h),e[l+2]=c*Math.cos(d);const u=Math.random(),f=new jt().setHSL(u*.2+.5,.7,.6);n[l]=f.r,n[l+1]=f.g,n[l+2]=f.b,i[a]=Math.random()*3+1}const s=new Ne;s.setAttribute("position",new Re(e,3)),s.setAttribute("color",new Re(n,3)),s.setAttribute("size",new Re(i,1));const o=new Uc({size:2,vertexColors:!0,transparent:!0,opacity:.4,sizeAttenuation:!0});this.particles=new gg(s,o),this.scene.add(this.particles)}createWireframe(){const t=new Oo(20,2),e=new Ii({color:3355494,wireframe:!0,transparent:!0,opacity:.1});this.wireframe=new Qt(t,e),this.scene.add(this.wireframe)}setupCamera(){this.camera.position.set(0,0,25),this.camera.lookAt(0,0,0)}startAnimation(){const t=()=>{this.animationId=requestAnimationFrame(t);const e=performance.now()*.001;this.sphere&&this.sphere.material.uniforms&&(this.sphere.material.uniforms.time.value=e),this.sphere&&(this.sphere.rotation.y+=.002,this.sphere.rotation.x+=.001),this.particles&&(this.particles.rotation.y-=.001,this.particles.rotation.x+=5e-4),this.wireframe&&(this.wireframe.rotation.y+=8e-4,this.wireframe.rotation.z-=3e-4),this.renderer.render(this.scene,this.camera)};t()}handleResize(){!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",this.handleResize)}}class Q_{constructor(){this.element=document.getElementById("startScreen"),this.onLevelSelect=null,this.keyHandler=null,this.background=null,this.init()}init(){if(!this.element)return;this.element.querySelectorAll(".track-btn").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.level);this.onLevelSelect&&this.onLevelSelect(n)}),e.addEventListener("mouseenter",()=>{this.playHoverSound()})}),this.keyHandler=e=>{if(this.isVisible()){if(e.code.startsWith("Digit")){const n=parseInt(e.code.replace("Digit",""));n>=1&&n<=9?this.selectLevel(n):n===0&&this.selectLevel(10)}else if(e.shiftKey&&e.code.startsWith("Digit")){const n=parseInt(e.code.replace("Digit",""));n>=1&&n<=9?this.selectLevel(10+n):n===0&&this.selectLevel(20)}}},document.addEventListener("keydown",this.keyHandler),this.addAnimations()}addAnimations(){this.element.querySelectorAll(".track-btn").forEach((e,n)=>{e.style.animationDelay=`${n*.1}s`,e.classList.add("track-btn-animate")})}selectLevel(t){this.onLevelSelect&&(this.playSelectSound(),this.onLevelSelect(t))}show(){this.element&&(this.element.style.display="flex",this.element.classList.add("fade-in"),this.background||(this.background=new J_,requestAnimationFrame(()=>{this.background.init()})))}hide(){this.element&&(this.keyHandler&&document.removeEventListener("keydown",this.keyHandler),this.background&&(this.background.destroy(),this.background=null),this.element.classList.add("fade-out"),setTimeout(()=>{this.element.style.display="none",this.element.classList.remove("fade-in","fade-out")},500))}isVisible(){return this.element&&this.element.style.display!=="none"}playHoverSound(){}playSelectSound(){}}const eh=document.createElement("style");eh.textContent=`
  .track-btn-animate {
    animation: trackButtonSlide 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  @keyframes trackButtonSlide {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .start-screen.fade-in {
    animation: fadeIn 0.5s ease-out;
  }

  .start-screen.fade-out {
    animation: fadeOut 0.5s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;document.head.appendChild(eh);class tx{constructor(){this.element=document.getElementById("loadingScreen"),this.textElement=null,this.spinnerElement=null,this.init()}init(){this.element&&(this.textElement=this.element.querySelector(".loading-text"),this.spinnerElement=this.element.querySelector(".loading-spinner"))}show(t="Loading Track..."){this.element&&(this.updateText(t),this.element.classList.remove("hidden"),this.element.style.display="flex")}hide(){this.element&&(this.element.classList.add("hidden"),setTimeout(()=>{this.element.style.display="none"},300))}updateText(t){this.textElement&&(this.textElement.textContent=t)}setProgress(t){t>=100&&this.updateText("Complete!")}isVisible(){return this.element&&!this.element.classList.contains("hidden")}}class ex{constructor(){this.element=document.getElementById("completionScreen"),this.timeElement=document.getElementById("completionTime"),this.bestElement=document.getElementById("completionBest"),this.retryButton=document.getElementById("retryButton"),this.menuButton=document.getElementById("menuButton"),this.onRetry=null,this.onMenu=null,this.keyHandler=null,this.init()}init(){this.element&&(this.retryButton&&this.retryButton.addEventListener("click",()=>{this.onRetry&&this.onRetry(),this.hide()}),this.menuButton&&this.menuButton.addEventListener("click",()=>{this.onMenu&&this.onMenu(),this.hide()}),this.keyHandler=t=>{this.isVisible()&&(t.code==="KeyR"?(this.onRetry&&this.onRetry(),this.hide()):t.code==="Escape"&&(this.onMenu&&this.onMenu(),this.hide()))},document.addEventListener("keydown",this.keyHandler))}show(t,e,n=!1){this.element&&(this.element.classList.remove("hidden"),this.timeElement&&(this.timeElement.textContent=`Time: ${t.toFixed(2)}s`),this.bestElement&&(this.bestElement.textContent=`Best: ${e?e.toFixed(2)+"s":"--"}`,n?(this.bestElement.classList.add("new-record"),this.bestElement.textContent=`NEW BEST: ${t.toFixed(2)}s`):this.bestElement.classList.remove("new-record")),this.retryButton&&setTimeout(()=>this.retryButton.focus(),100))}hide(){this.element&&this.element.classList.add("hidden")}isVisible(){return this.element&&!this.element.classList.contains("hidden")}destroy(){this.keyHandler&&document.removeEventListener("keydown",this.keyHandler)}}class nx{constructor(){this.game=null,this.startScreen=new Q_,this.loadingScreen=new tx,this.completionScreen=new ex,this.currentLevel=1,this.init()}async init(){this.startScreen.show(),this.startScreen.onLevelSelect=t=>this.startGame(t),this.completionScreen.onRetry=()=>this.retryLevel(),this.completionScreen.onMenu=()=>this.returnToMenu(),window.addEventListener("resize",()=>{this.game&&this.game.handleResize()}),window.addEventListener("keydown",t=>{t.code==="Escape"&&this.game&&this.game.isRunning&&!this.completionScreen.isVisible()&&this.returnToMenu()}),await this.preloadAssets()}async preloadAssets(){console.log("Preloading game assets...")}async startGame(t){try{this.currentLevel=t,this.startScreen.hide(),this.loadingScreen.show(),this.game=new Z_,await this.game.init(),this.game.setCompletionScreen(this.completionScreen),await this.game.loadLevel(t),this.loadingScreen.hide(),this.game.start()}catch(e){console.error("Failed to start game:",e),this.loadingScreen.hide(),this.startScreen.show()}}async retryLevel(){this.game&&(this.game.stop(),await this.game.loadLevel(this.currentLevel),this.game.start())}returnToMenu(){this.game&&(this.game.stop(),this.game.destroy(),this.game=null),this.completionScreen.hide(),this.startScreen.show()}}window.addEventListener("DOMContentLoaded",()=>{new nx});export{Ne as B,_g as C,Vc as E,ge as F,mg as I,Je as M,Ml as P,An as Q,Pg as S,L as V,Bt as _,jt as a,Qt as b,Ae as c,ee as d,En as e,M as f,me as g,_t as h,Re as i,ms as j,Ii as k,H_ as m};
//# sourceMappingURL=main-CwcjnyxM.js.map
