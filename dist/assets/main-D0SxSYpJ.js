(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const hh="modulepreload",uh=function(r){return"/velocity-sphere/dist/"+r},Ko={},Tt=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(l=>{if(l=uh(l),l in Ko)return;Ko[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":hh,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Ao=(r,t,e)=>{const n=r[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==e?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="158",ui={ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dh=0,Zo=1,fh=2,ac=1,lc=2,En=3,An=0,Re=1,Ve=2,zn=0,ii=1,Jo=2,Qo=3,ta=4,ph=5,Jn=100,mh=101,gh=102,ea=103,na=104,vh=200,_h=201,xh=202,yh=203,fo=204,po=205,Sh=206,Mh=207,Eh=208,wh=209,bh=210,Th=211,Ah=212,Ch=213,Rh=214,Ph=0,Lh=1,Ih=2,rr=3,Dh=4,Nh=5,Uh=6,Fh=7,cc=0,Oh=1,Bh=2,kn=0,zh=1,kh=2,Gh=3,hc=4,Hh=5,uc=300,Ui=301,Fi=302,mo=303,go=304,dr=306,ei=1e3,en=1001,vo=1002,Ne=1003,ia=1004,Mr=1005,je=1006,Vh=1007,us=1008,Gn=1009,Wh=1010,qh=1011,Ro=1012,dc=1013,On=1014,Bn=1015,ds=1016,fc=1017,pc=1018,si=1020,Xh=1021,nn=1023,Yh=1024,jh=1025,ri=1026,Oi=1027,$h=1028,mc=1029,Kh=1030,gc=1031,vc=1033,Er=33776,wr=33777,br=33778,Tr=33779,sa=35840,ra=35841,oa=35842,aa=35843,Zh=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,va=37815,_a=37816,xa=37817,ya=37818,Sa=37819,Ma=37820,Ea=37821,Ar=36492,wa=36494,ba=36495,Jh=36283,Ta=36284,Aa=36285,Ca=36286,_c=3e3,oi=3001,Qh=3200,tu=3201,xc=0,eu=1,$e="",Ee="srgb",Cn="srgb-linear",Po="display-p3",fr="display-p3-linear",or="linear",se="srgb",ar="rec709",lr="p3",fi=7680,Ra=519,nu=512,iu=513,su=514,ru=515,ou=516,au=517,lu=518,cu=519,Pa=35044,La="300 es",_o=1035,bn=2e3,cr=2001;class ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nr=Math.PI/180,xo=180/Math.PI;function Gi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[r&255]+Ae[r>>8&255]+Ae[r>>16&255]+Ae[r>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function be(r,t,e){return Math.max(t,Math.min(e,r))}function hu(r,t){return(r%t+t)%t}function Cr(r,t,e){return(1-e)*r+e*t}function Ia(r){return(r&r-1)===0&&r!==0}function yo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ue(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uu={DEG2RAD:nr};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,i,s,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],x=i[1],_=i[4],y=i[7],E=i[2],b=i[5],A=i[8];return s[0]=o*v+a*x+l*E,s[3]=o*m+a*_+l*b,s[6]=o*p+a*y+l*A,s[1]=c*v+h*x+d*E,s[4]=c*m+h*_+d*b,s[7]=c*p+h*y+d*A,s[2]=u*v+f*x+g*E,s[5]=u*m+f*_+g*b,s[8]=u*p+f*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Rr.makeScale(t,e)),this}rotate(t){return this.premultiply(Rr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new jt;function yc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function du(){const r=hr("canvas");return r.style.display="block",r}const Da={};function os(r){r in Da||(Da[r]=!0,console.warn(r))}const Na=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ua=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[Cn]:{transfer:or,primaries:ar,toReference:r=>r,fromReference:r=>r},[Ee]:{transfer:se,primaries:ar,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[fr]:{transfer:or,primaries:lr,toReference:r=>r.applyMatrix3(Ua),fromReference:r=>r.applyMatrix3(Na)},[Po]:{transfer:se,primaries:lr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ua),fromReference:r=>r.applyMatrix3(Na).convertLinearToSRGB()}},fu=new Set([Cn,fr]),te={enabled:!0,_workingColorSpace:Cn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!fu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Ss[t].toReference,i=Ss[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Ss[r].primaries},getTransfer:function(r){return r===$e?or:Ss[r].transfer}};function Ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let pi;class Sc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=hr("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pu=0;class Mc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Gi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Lr(i[o].image)):s.push(Lr(i[o]))}else s=Lr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Lr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Sc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class Be extends ci{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=en,i=en,s=je,o=us,a=nn,l=Gn,c=Be.DEFAULT_ANISOTROPY,h=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Gi(),this.name="",this.source=new Mc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===oi?Ee:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ei:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ei:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?oi:_c}set encoding(t){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===oi?Ee:$e}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=uc;Be.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,y=(f+1)/2,E=(p+1)/2,b=(h+u)/4,A=(d+v)/4,I=(g+m)/4;return _>y&&_>E?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=b/n,s=A/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=I/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=A/s,i=I/s),this.set(n,i,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gu extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===oi?Ee:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends gu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ec extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vu extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*v,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),b=Math.atan2(E,p*x);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const y=a*x;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+v*y,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ir.copy(this).projectOnVector(t),this.sub(Ir)}reflect(t){return this.sub(Ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new P,Fa=new Rn;class hi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(s,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Es.subVectors(this.max,ji),mi.subVectors(t.a,ji),gi.subVectors(t.b,ji),vi.subVectors(t.c,ji),Pn.subVectors(gi,mi),Ln.subVectors(vi,gi),Wn.subVectors(mi,vi);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Wn.z,Wn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Wn.z,0,-Wn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Wn.y,Wn.x,0];return!Dr(e,mi,gi,vi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Dr(e,mi,gi,vi,Es))?!1:(ws.crossVectors(Pn,Ln),e=[ws.x,ws.y,ws.z],Dr(e,mi,gi,vi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new P,new P,new P,new P,new P,new P,new P,new P],Ke=new P,Ms=new hi,mi=new P,gi=new P,vi=new P,Pn=new P,Ln=new P,Wn=new P,ji=new P,Es=new P,ws=new P,qn=new P;function Dr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){qn.fromArray(r,s);const a=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),l=t.dot(qn),c=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _u=new hi,$i=new P,Nr=new P;let Hi=class{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_u.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$i.subVectors(t,this.center);const e=$i.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($i.copy(t.center).add(Nr)),this.expandByPoint($i.copy(t.center).sub(Nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const mn=new P,Ur=new P,bs=new P,In=new P,Fr=new P,Ts=new P,Or=new P;let Lo=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ur.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Ur);const s=t.distanceTo(e)*.5,o=-this.direction.dot(bs),a=In.dot(this.direction),l=-In.dot(bs),c=In.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ur).addScaledVector(bs,u),f}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,s){Fr.subVectors(e,t),Ts.subVectors(n,t),Or.crossVectors(Fr,Ts);let o=this.direction.dot(Or),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);const l=a*this.direction.dot(Ts.crossVectors(In,Ts));if(l<0)return null;const c=a*this.direction.dot(Fr.cross(In));if(c<0||l+c>o)return null;const h=-a*In.dot(Or);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ee{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_i.setFromMatrixColumn(t,0).length(),s=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,v=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,yu)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Dn.crossVectors(n,Ge),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Dn.crossVectors(n,Ge)),Dn.normalize(),As.crossVectors(Ge,Dn),i[0]=Dn.x,i[4]=As.x,i[8]=Ge.x,i[1]=Dn.y,i[5]=As.y,i[9]=Ge.y,i[2]=Dn.z,i[6]=As.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],x=n[3],_=n[7],y=n[11],E=n[15],b=i[0],A=i[4],I=i[8],S=i[12],w=i[1],B=i[5],G=i[9],O=i[13],R=i[2],D=i[6],U=i[10],q=i[14],j=i[3],W=i[7],J=i[11],z=i[15];return s[0]=o*b+a*w+l*R+c*j,s[4]=o*A+a*B+l*D+c*W,s[8]=o*I+a*G+l*U+c*J,s[12]=o*S+a*O+l*q+c*z,s[1]=h*b+d*w+u*R+f*j,s[5]=h*A+d*B+u*D+f*W,s[9]=h*I+d*G+u*U+f*J,s[13]=h*S+d*O+u*q+f*z,s[2]=g*b+v*w+m*R+p*j,s[6]=g*A+v*B+m*D+p*W,s[10]=g*I+v*G+m*U+p*J,s[14]=g*S+v*O+m*q+p*z,s[3]=x*b+_*w+y*R+E*j,s[7]=x*A+_*B+y*D+E*W,s[11]=x*I+_*G+y*U+E*J,s[15]=x*S+_*O+y*q+E*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+v*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+m*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],x=d*m*c-v*u*c+v*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*v*c-g*d*c+g*a*f-o*v*f-h*a*p+o*d*p,E=g*d*l-h*v*l-g*a*u+o*v*u+h*a*m-o*d*m,b=e*x+n*_+i*y+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=x*A,t[1]=(v*u*s-d*m*s-v*i*f+n*m*f+d*i*p-n*u*p)*A,t[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*p+n*l*p)*A,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*A,t[4]=_*A,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*A,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*A,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*A,t[8]=y*A,t[9]=(g*d*s-h*v*s-g*n*f+e*v*f+h*n*p-e*d*p)*A,t[10]=(o*v*s-g*a*s+g*n*c-e*v*c-o*n*p+e*a*p)*A,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*A,t[12]=E*A,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*A,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*A,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,v=o*h,m=o*d,p=a*d,x=l*c,_=l*h,y=l*d,E=n.x,b=n.y,A=n.z;return i[0]=(1-(v+p))*E,i[1]=(f+y)*E,i[2]=(g-_)*E,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+_)*A,i[9]=(m-x)*A,i[10]=(1-(u+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=_i.set(i[0],i[1],i[2]).length();const o=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const c=1/s,h=1/o,d=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=bn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===bn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===cr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=bn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,f=(n+i)*h;let g,v;if(a===bn)g=(o+s)*d,v=-2*d;else if(a===cr)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new P,Ze=new ee,xu=new P(0,0,0),yu=new P(1,1,1),Dn=new P,As=new P,Ge=new P,Oa=new ee,Ba=new Rn;class gs{constructor(t=0,e=0,n=0,i=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gs.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Su=0;const za=new P,xi=new Rn,gn=new ee,Cs=new P,Ki=new P,Mu=new P,Eu=new Rn,ka=new P(1,0,0),Ga=new P(0,1,0),Ha=new P(0,0,1),wu={type:"added"},bu={type:"removed"};class Te extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new P,e=new gs,n=new Rn,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new jt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(ka,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Ha,t)}translateOnAxis(t,e){return za.copy(t).applyQuaternion(this.quaternion),this.position.add(za.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ka,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Ha,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Ki,Cs,this.up):gn.lookAt(Cs,Ki,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(gn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,Mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Eu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Te.DEFAULT_UP=new P(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new P,vn=new P,Br=new P,_n=new P,yi=new P,Si=new P,Va=new P,zr=new P,kr=new P,Gr=new P;let Rs=!1;class tn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Je.subVectors(t,e),i.cross(Je);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Je.subVectors(i,e),vn.subVectors(n,e),Br.subVectors(t,e);const o=Je.dot(Je),a=Je.dot(vn),l=Je.dot(Br),c=vn.dot(vn),h=vn.dot(Br),d=o*c-a*a;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,n,i,s,o,a,l){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),this.getInterpolation(t,e,n,i,s,o,a,l)}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,_n),l.setScalar(0),l.addScaledVector(s,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l}static isFrontFacing(t,e,n,i){return Je.subVectors(n,e),vn.subVectors(t,e),Je.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Je.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rs=!0),tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;yi.subVectors(i,n),Si.subVectors(s,n),zr.subVectors(t,n);const l=yi.dot(zr),c=Si.dot(zr);if(l<=0&&c<=0)return e.copy(n);kr.subVectors(t,i);const h=yi.dot(kr),d=Si.dot(kr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yi,o);Gr.subVectors(t,s);const f=yi.dot(Gr),g=Si.dot(Gr);if(g>=0&&f<=g)return e.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Si,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Va.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Va,a);const p=1/(m+v+u);return o=v*p,a=u*p,e.copy(n).addScaledVector(yi,o).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Hr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=hu(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Hr(o,s,t+1/3),this.g=Hr(o,s,t),this.b=Hr(o,s,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return te.fromWorkingColorSpace(Ce.copy(this),t),Math.round(be(Ce.r*255,0,255))*65536+Math.round(be(Ce.g*255,0,255))*256+Math.round(be(Ce.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,s=Ce.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ee){te.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Ps);const n=Cr(Nn.h,Ps.h,e),i=Cr(Nn.s,Ps.s,e),s=Cr(Nn.l,Ps.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Gt;Gt.NAMES=bc;let Tu=0,Vi=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=ii,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ra,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ra&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Ie extends Vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new P,Ls=new rt;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this.updateRange={offset:0,count:-1},this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Tc extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ac extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Au=0;const Ye=new ee,Vr=new Te,Mi=new P,He=new hi,Zi=new hi,Me=new P;class we extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yc(t)?Ac:Tc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];He.setFromBufferAttribute(s),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(He.min,Zi.min),He.expandByPoint(Me),Me.addVectors(He.max,Zi.max),He.expandByPoint(Me)):(He.expandByPoint(Zi.min),He.expandByPoint(Zi.max))}He.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Me.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Me.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(t,c),Me.add(Mi)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new P,h[w]=new P;const d=new P,u=new P,f=new P,g=new rt,v=new rt,m=new rt,p=new P,x=new P;function _(w,B,G){d.fromArray(i,w*3),u.fromArray(i,B*3),f.fromArray(i,G*3),g.fromArray(o,w*2),v.fromArray(o,B*2),m.fromArray(o,G*2),u.sub(d),f.sub(d),v.sub(g),m.sub(g);const O=1/(v.x*m.y-m.x*v.y);isFinite(O)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(O),x.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(O),c[w].add(p),c[B].add(p),c[G].add(p),h[w].add(x),h[B].add(x),h[G].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,B=y.length;w<B;++w){const G=y[w],O=G.start,R=G.count;for(let D=O,U=O+R;D<U;D+=3)_(n[D+0],n[D+1],n[D+2])}const E=new P,b=new P,A=new P,I=new P;function S(w){A.fromArray(s,w*3),I.copy(A);const B=c[w];E.copy(B),E.sub(A.multiplyScalar(A.dot(B))).normalize(),b.crossVectors(I,B);const O=b.dot(h[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=O}for(let w=0,B=y.length;w<B;++w){const G=y[w],O=G.start,R=G.count;for(let D=O,U=O+R;D<U;D+=3)S(n[D+0]),S(n[D+1]),S(n[D+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new We(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new ee,Xn=new Lo,Is=new Hi,qa=new P,Ei=new P,wi=new P,bi=new P,Wr=new P,Ds=new P,Ns=new rt,Us=new rt,Fs=new rt,Xa=new P,Ya=new P,ja=new P,Os=new P,Bs=new P;class qt extends Te{constructor(t=new we,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Ds.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Wr.fromBufferAttribute(d,t),o?Ds.addScaledVector(Wr,h):Ds.addScaledVector(Wr.sub(e),h))}e.add(Ds)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Xn.copy(t.ray).recast(t.near),!(Is.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Is,qa)===null||Xn.origin.distanceToSquared(qa)>(t.far-t.near)**2))&&(Wa.copy(s).invert(),Xn.copy(t.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){const b=a.getX(y),A=a.getX(y+1),I=a.getX(y+2);i=zs(this,p,t,n,c,h,d,b,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=zs(this,o,t,n,c,h,d,x,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,E=_;y<E;y+=3){const b=y,A=y+1,I=y+2;i=zs(this,p,t,n,c,h,d,b,A,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const x=m,_=m+1,y=m+2;i=zs(this,o,t,n,c,h,d,x,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Cu(r,t,e,n,i,s,o,a){let l;if(t.side===Re?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===An,a),l===null)return null;Bs.copy(a),Bs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Bs);return c<e.near||c>e.far?null:{distance:c,point:Bs.clone(),object:r}}function zs(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ei),r.getVertexPosition(l,wi),r.getVertexPosition(c,bi);const h=Cu(r,t,e,n,Ei,wi,bi,Os);if(h){i&&(Ns.fromBufferAttribute(i,a),Us.fromBufferAttribute(i,l),Fs.fromBufferAttribute(i,c),h.uv=tn.getInterpolation(Os,Ei,wi,bi,Ns,Us,Fs,new rt)),s&&(Ns.fromBufferAttribute(s,a),Us.fromBufferAttribute(s,l),Fs.fromBufferAttribute(s,c),h.uv1=tn.getInterpolation(Os,Ei,wi,bi,Ns,Us,Fs,new rt),h.uv2=h.uv1),o&&(Xa.fromBufferAttribute(o,a),Ya.fromBufferAttribute(o,l),ja.fromBufferAttribute(o,c),h.normal=tn.getInterpolation(Os,Ei,wi,bi,Xa,Ya,ja,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};tn.getNormal(Ei,wi,bi,d.normal),h.face=d}return h}class me extends we{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(v,m,p,x,_,y,E,b,A,I,S){const w=y/A,B=E/I,G=y/2,O=E/2,R=b/2,D=A+1,U=I+1;let q=0,j=0;const W=new P;for(let J=0;J<U;J++){const z=J*B-O;for(let H=0;H<D;H++){const dt=H*w-G;W[v]=dt*x,W[m]=z*_,W[p]=R,c.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[p]=b>0?1:-1,h.push(W.x,W.y,W.z),d.push(H/A),d.push(1-J/I),q+=1}}for(let J=0;J<I;J++)for(let z=0;z<A;z++){const H=u+z+D*J,dt=u+z+D*(J+1),gt=u+(z+1)+D*(J+1),xt=u+(z+1)+D*J;l.push(H,dt,xt),l.push(dt,gt,xt),j+=6}a.addGroup(f,j,S),f+=j,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(r){const t={};for(let e=0;e<r.length;e++){const n=Bi(r[e]);for(const i in n)t[i]=n[i]}return t}function Ru(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Cc(r){return r.getRenderTarget()===null?r.outputColorSpace:te.workingColorSpace}const Pu={clone:Bi,merge:De};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends Vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=Ru(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}let Rc=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Oe extends Rc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Ai=1;class Du extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(Ti,Ai,t,e);i.layers=this.layers,this.add(i);const s=new Oe(Ti,Ai,t,e);s.layers=this.layers,this.add(s);const o=new Oe(Ti,Ai,t,e);o.layers=this.layers,this.add(o);const a=new Oe(Ti,Ai,t,e);a.layers=this.layers,this.add(a);const l=new Oe(Ti,Ai,t,e);l.layers=this.layers,this.add(l);const c=new Oe(Ti,Ai,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pc extends Be{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nu extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===oi?Ee:$e),this.texture=new Pc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new me(5,5,5),s=new qe({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:zn});s.uniforms.tEquirect.value=e;const o=new qt(i,s),a=e.minFilter;return e.minFilter===us&&(e.minFilter=je),new Du(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const qr=new P,Uu=new P,Fu=new jt;class Fn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qr.subVectors(n,e).cross(Uu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Fu.getNormalMatrix(t),i=this.coplanarPoint(qr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Hi,ks=new P;class Io{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,s=new Fn,o=new Fn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],x=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,u-c,m-f,y-p).normalize(),n[1].setComponents(l+s,u+c,m+f,y+p).normalize(),n[2].setComponents(l+o,u+h,m+g,y+x).normalize(),n[3].setComponents(l-o,u-h,m-g,y-x).normalize(),n[4].setComponents(l-a,u-d,m-v,y-_).normalize(),e===bn)n[5].setComponents(l+a,u+d,m+v,y+_).normalize();else if(e===cr)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ks.x=i.normal.x>0?t.max.x:t.min.x,ks.y=i.normal.y>0?t.max.y:t.min.y,ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ou(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=r.SHORT;else if(d instanceof Uint32Array)g=r.UNSIGNED_INT;else if(d instanceof Int32Array)g=r.INT;else if(d instanceof Int8Array)g=r.BYTE;else if(d instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;r.bindBuffer(d,c),f.count===-1?r.bufferSubData(d,0,u):(e?r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):r.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:a,update:l}}class ni extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const x=p*u-o;for(let _=0;_<c;_++){const y=_*d-s;g.push(y,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,y=x+c*(p+1),E=x+1+c*(p+1),b=x+1+c*p;f.push(_,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
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
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
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
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$u=`#ifdef USE_IRIDESCENCE
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
#endif`,Ku=`#ifdef USE_BUMPMAP
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
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
} // validated`,od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ad=`vec3 transformedNormal = objectNormal;
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
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",fd=`
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
}`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ed=`#ifdef USE_GRADIENTMAP
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
}`,wd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
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
#endif`,Ud=`struct PhysicalMaterial {
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
}`,Fd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xd=`#if defined( USE_POINTS_UV )
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
#endif`,Yd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rf=`#ifdef USE_NORMALMAP
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
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sf=`float getShadowMask() {
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
}`,Mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ef=`#ifdef USE_SKINNING
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
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,Wf=`#define DISTANCE
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
}`,qf=`#define DISTANCE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,$f=`uniform vec3 diffuse;
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
}`,Kf=`#include <common>
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Jf=`#define LAMBERT
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
}`,Qf=`#define LAMBERT
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
}`,tp=`#define MATCAP
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
}`,ep=`#define MATCAP
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
}`,np=`#define NORMAL
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
}`,ip=`#define NORMAL
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
}`,sp=`#define PHONG
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
}`,rp=`#define PHONG
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
}`,op=`#define STANDARD
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
}`,ap=`#define STANDARD
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
}`,lp=`#define TOON
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
}`,cp=`#define TOON
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
}`,hp=`uniform float size;
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,fp=`uniform vec3 color;
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
}`,pp=`uniform float rotation;
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
}`,mp=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Bu,alphahash_pars_fragment:zu,alphamap_fragment:ku,alphamap_pars_fragment:Gu,alphatest_fragment:Hu,alphatest_pars_fragment:Vu,aomap_fragment:Wu,aomap_pars_fragment:qu,begin_vertex:Xu,beginnormal_vertex:Yu,bsdfs:ju,iridescence_fragment:$u,bumpmap_pars_fragment:Ku,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:Qu,clipping_planes_vertex:td,color_fragment:ed,color_pars_fragment:nd,color_pars_vertex:id,color_vertex:sd,common:rd,cube_uv_reflection_fragment:od,defaultnormal_vertex:ad,displacementmap_pars_vertex:ld,displacementmap_vertex:cd,emissivemap_fragment:hd,emissivemap_pars_fragment:ud,colorspace_fragment:dd,colorspace_pars_fragment:fd,envmap_fragment:pd,envmap_common_pars_fragment:md,envmap_pars_fragment:gd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Rd,envmap_vertex:_d,fog_vertex:xd,fog_pars_vertex:yd,fog_fragment:Sd,fog_pars_fragment:Md,gradientmap_pars_fragment:Ed,lightmap_fragment:wd,lightmap_pars_fragment:bd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Id,lights_phong_pars_fragment:Dd,lights_physical_fragment:Nd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Fd,lights_fragment_maps:Od,lights_fragment_end:Bd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Hd,map_fragment:Vd,map_pars_fragment:Wd,map_particle_fragment:qd,map_particle_pars_fragment:Xd,metalnessmap_fragment:Yd,metalnessmap_pars_fragment:jd,morphcolor_vertex:$d,morphnormal_vertex:Kd,morphtarget_pars_vertex:Zd,morphtarget_vertex:Jd,normal_fragment_begin:Qd,normal_fragment_maps:tf,normal_pars_fragment:ef,normal_pars_vertex:nf,normal_vertex:sf,normalmap_pars_fragment:rf,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:af,clearcoat_pars_fragment:lf,iridescence_pars_fragment:cf,opaque_fragment:hf,packing:uf,premultiplied_alpha_fragment:df,project_vertex:ff,dithering_fragment:pf,dithering_pars_fragment:mf,roughnessmap_fragment:gf,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:xf,shadowmap_vertex:yf,shadowmask_pars_fragment:Sf,skinbase_vertex:Mf,skinning_pars_vertex:Ef,skinning_vertex:wf,skinnormal_vertex:bf,specularmap_fragment:Tf,specularmap_pars_fragment:Af,tonemapping_fragment:Cf,tonemapping_pars_fragment:Rf,transmission_fragment:Pf,transmission_pars_fragment:Lf,uv_pars_fragment:If,uv_pars_vertex:Df,uv_vertex:Nf,worldpos_vertex:Uf,background_vert:Ff,background_frag:Of,backgroundCube_vert:Bf,backgroundCube_frag:zf,cube_vert:kf,cube_frag:Gf,depth_vert:Hf,depth_frag:Vf,distanceRGBA_vert:Wf,distanceRGBA_frag:qf,equirect_vert:Xf,equirect_frag:Yf,linedashed_vert:jf,linedashed_frag:$f,meshbasic_vert:Kf,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Qf,meshmatcap_vert:tp,meshmatcap_frag:ep,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:sp,meshphong_frag:rp,meshphysical_vert:op,meshphysical_frag:ap,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:hp,points_frag:up,shadow_vert:dp,shadow_frag:fp,sprite_vert:pp,sprite_frag:mp},pt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},un={basic:{uniforms:De([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:De([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:De([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:De([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:De([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:De([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:De([pt.points,pt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:De([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:De([pt.common,pt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:De([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:De([pt.sprite,pt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:De([pt.common,pt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:De([pt.lights,pt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};un.physical={uniforms:De([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Gs={r:0,b:0,g:0};function gp(r,t,e,n,i,s,o){const a=new Gt(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===dr)?(h===void 0&&(h=new qt(new me(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Bi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=te.getTransfer(_.colorSpace)!==se,(d!==_||u!==_.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new qt(new ni(2,2),new qe({name:"BackgroundMaterial",uniforms:Bi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(Gs,Cc(r)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function vp(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function d(R,D,U,q,j){let W=!1;if(o){const J=v(q,U,D);c!==J&&(c=J,f(c.object)),W=p(R,q,U,j),W&&x(R,q,U,j)}else{const J=D.wireframe===!0;(c.geometry!==q.id||c.program!==U.id||c.wireframe!==J)&&(c.geometry=q.id,c.program=U.id,c.wireframe=J,W=!0)}j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,I(R,D,U,q),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function v(R,D,U){const q=U.wireframe===!0;let j=a[R.id];j===void 0&&(j={},a[R.id]=j);let W=j[D.id];W===void 0&&(W={},j[D.id]=W);let J=W[q];return J===void 0&&(J=m(u()),W[q]=J),J}function m(R){const D=[],U=[],q=[];for(let j=0;j<i;j++)D[j]=0,U[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:q,object:R,attributes:{},index:null}}function p(R,D,U,q){const j=c.attributes,W=D.attributes;let J=0;const z=U.getAttributes();for(const H in z)if(z[H].location>=0){const gt=j[H];let xt=W[H];if(xt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),gt===void 0||gt.attribute!==xt||xt&&gt.data!==xt.data)return!0;J++}return c.attributesNum!==J||c.index!==q}function x(R,D,U,q){const j={},W=D.attributes;let J=0;const z=U.getAttributes();for(const H in z)if(z[H].location>=0){let gt=W[H];gt===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor));const xt={};xt.attribute=gt,gt&&gt.data&&(xt.data=gt.data),j[H]=xt,J++}c.attributes=j,c.attributesNum=J,c.index=q}function _(){const R=c.newAttributes;for(let D=0,U=R.length;D<U;D++)R[D]=0}function y(R){E(R,0)}function E(R,D){const U=c.newAttributes,q=c.enabledAttributes,j=c.attributeDivisors;U[R]=1,q[R]===0&&(r.enableVertexAttribArray(R),q[R]=1),j[R]!==D&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,D),j[R]=D)}function b(){const R=c.newAttributes,D=c.enabledAttributes;for(let U=0,q=D.length;U<q;U++)D[U]!==R[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function A(R,D,U,q,j,W,J){J===!0?r.vertexAttribIPointer(R,D,U,j,W):r.vertexAttribPointer(R,D,U,q,j,W)}function I(R,D,U,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const j=q.attributes,W=U.getAttributes(),J=D.defaultAttributeValues;for(const z in W){const H=W[z];if(H.location>=0){let dt=j[z];if(dt===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor)),dt!==void 0){const gt=dt.normalized,xt=dt.itemSize,Pt=e.get(dt);if(Pt===void 0)continue;const Nt=Pt.buffer,Dt=Pt.type,zt=Pt.bytesPerElement,Jt=n.isWebGL2===!0&&(Dt===r.INT||Dt===r.UNSIGNED_INT||dt.gpuType===dc);if(dt.isInterleavedBufferAttribute){const Ut=dt.data,N=Ut.stride,ut=dt.offset;if(Ut.isInstancedInterleavedBuffer){for(let Q=0;Q<H.locationSize;Q++)E(H.location+Q,Ut.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Q=0;Q<H.locationSize;Q++)y(H.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let Q=0;Q<H.locationSize;Q++)A(H.location+Q,xt/H.locationSize,Dt,gt,N*zt,(ut+xt/H.locationSize*Q)*zt,Jt)}else{if(dt.isInstancedBufferAttribute){for(let Ut=0;Ut<H.locationSize;Ut++)E(H.location+Ut,dt.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)y(H.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let Ut=0;Ut<H.locationSize;Ut++)A(H.location+Ut,xt/H.locationSize,Dt,gt,xt*zt,xt/H.locationSize*Ut*zt,Jt)}}else if(J!==void 0){const gt=J[z];if(gt!==void 0)switch(gt.length){case 2:r.vertexAttrib2fv(H.location,gt);break;case 3:r.vertexAttrib3fv(H.location,gt);break;case 4:r.vertexAttrib4fv(H.location,gt);break;default:r.vertexAttrib1fv(H.location,gt)}}}}b()}function S(){G();for(const R in a){const D=a[R];for(const U in D){const q=D[U];for(const j in q)g(q[j].object),delete q[j];delete D[U]}delete a[R]}}function w(R){if(a[R.id]===void 0)return;const D=a[R.id];for(const U in D){const q=D[U];for(const j in q)g(q[j].object),delete q[j];delete D[U]}delete a[R.id]}function B(R){for(const D in a){const U=a[D];if(U[R.id]===void 0)continue;const q=U[R.id];for(const j in q)g(q[j].object),delete q[j];delete U[R.id]}}function G(){O(),h=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:_,enableAttribute:y,disableUnusedAttributes:b}}function _p(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=r,f="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),e.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function xp(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,y=o||t.has("OES_texture_float"),E=_&&y,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:b}}function yp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Fn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const x=s?0:n,_=x*4;let y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let E=0;E!==_;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Sp(r){let t=new WeakMap;function e(o,a){return a===mo?o.mapping=Ui:a===go&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===mo||a===go)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nu(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ic extends Rc{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,$a=[.125,.215,.35,.446,.526,.582],Qn=20,Xr=new Ic,Ka=new Gt;let Yr=null,jr=0,$r=0;const Zn=(1+Math.sqrt(5))/2,Ci=1/Zn,Za=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Zn,Ci),new P(0,Zn,-Ci),new P(Ci,0,Zn),new P(-Ci,0,Zn),new P(Zn,Ci,0),new P(-Zn,Ci,0)];class Ja{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yr,jr,$r),t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),$r=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:ds,format:nn,colorSpace:Cn,depthBuffer:!1},i=Qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(s)),this._blurMaterial=Ep(s,t,e)}return i}_compileMaterial(t){const e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,Xr)}_sceneToCubeUV(t,e,n,i){const a=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ka),h.toneMapping=kn,h.autoClear=!1;const f=new Ie({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new qt(new me,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Ka),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Hs(i,x*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ui||t.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Za[(i-1)%Za.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new qt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Qn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Qn;m>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const p=[];let x=0;for(let A=0;A<Qn;++A){const I=A/v,S=Math.exp(-I*I/2);p.push(S),A===0?x+=S:A<m&&(x+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const y=this._sizeLods[i],E=3*y*(i>_-Ii?i-_+Ii:0),b=4*(this._cubeSize-y);Hs(e,E,b,3*y,2*y),l.setRenderTarget(e),l.render(d,Xr)}}function Mp(r){const t=[],e=[],n=[];let i=r;const s=r-Ii+1+$a.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ii?l=$a[o-r+Ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,I=b>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(S,v*g*b),_.set(u,m*g*b);const w=[b,b,b,b,b,b];y.set(w,p*g*b)}const E=new we;E.setAttribute("position",new We(x,v)),E.setAttribute("uv",new We(_,m)),E.setAttribute("faceIndex",new We(y,p)),t.push(E),i>Ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qa(r,t,e){const n=new ai(r,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ep(r,t,e){const n=new Float32Array(Qn),i=new P(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Do(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tl(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function el(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}function wp(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===mo||l===go,h=l===Ui||l===Fi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Ja(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ja(r));const u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tp(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,y=x.length;_<y;_+=3){const E=x[_+0],b=x[_+1],A=x[_+2];u.push(E,b,b,A,A,E)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const E=_+0,b=_+1,A=_+2;u.push(E,b,b,A,A,E)}}else return;const m=new(yc(u)?Ac:Tc)(u,1);m.version=v;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ap(r,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}let a,l;function c(u){a=u.type,l=u.bytesPerElement}function h(u,f){r.drawElements(s,f,a,u*l),e.update(f,s,1)}function d(u,f,g){if(g===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,f,a,u*l,g),e.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Cp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rp(r,t){return r[0]-t[0]}function Pp(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Lp(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let R=function(){G.dispose(),s.delete(h),h.removeEventListener("dispose",R)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let I=0;x===!0&&(I=1),_===!0&&(I=2),y===!0&&(I=3);let S=h.attributes.position.count*I,w=1;S>t.maxTextureSize&&(w=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const B=new Float32Array(S*w*4*g),G=new Ec(B,S,w,g);G.type=Bn,G.needsUpdate=!0;const O=I*4;for(let D=0;D<g;D++){const U=E[D],q=b[D],j=A[D],W=S*w*4*D;for(let J=0;J<U.count;J++){const z=J*O;x===!0&&(o.fromBufferAttribute(U,J),B[W+z+0]=o.x,B[W+z+1]=o.y,B[W+z+2]=o.z,B[W+z+3]=0),_===!0&&(o.fromBufferAttribute(q,J),B[W+z+4]=o.x,B[W+z+5]=o.y,B[W+z+6]=o.z,B[W+z+7]=0),y===!0&&(o.fromBufferAttribute(j,J),B[W+z+8]=o.x,B[W+z+9]=o.y,B[W+z+10]=o.z,B[W+z+11]=j.itemSize===4?o.w:1)}}v={count:g,texture:G,size:new rt(S,w)},s.set(h,v),h.addEventListener("dispose",R)}let m=0;for(let x=0;x<u.length;x++)m+=u[x];const p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",p),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const f=u===void 0?0:u.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){const y=g[_];y[0]=_,y[1]=u[_]}g.sort(Pp);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Rp);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const y=a[_],E=y[0],b=y[1];E!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+_)!==v[E]&&h.setAttribute("morphTarget"+_,v[E]),m&&h.getAttribute("morphNormal"+_)!==m[E]&&h.setAttribute("morphNormal"+_,m[E]),i[_]=b,p+=b):(v&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const x=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Ip(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Dc=new Be,Nc=new Ec,Uc=new vu,Fc=new Pc,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),ol=new Float32Array(4);function Wi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=nl[i];if(s===void 0&&(s=new Float32Array(i),nl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ye(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function pr(r,t){let e=il[t];e===void 0&&(e=new Int32Array(t),il[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Dp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Np(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2fv(this.addr,t),ye(e,t)}}function Up(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;r.uniform3fv(this.addr,t),ye(e,t)}}function Fp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4fv(this.addr,t),ye(e,t)}}function Op(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;ol.set(n),r.uniformMatrix2fv(this.addr,!1,ol),ye(e,n)}}function Bp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;rl.set(n),r.uniformMatrix3fv(this.addr,!1,rl),ye(e,n)}}function zp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;sl.set(n),r.uniformMatrix4fv(this.addr,!1,sl),ye(e,n)}}function kp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Gp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2iv(this.addr,t),ye(e,t)}}function Hp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3iv(this.addr,t),ye(e,t)}}function Vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4iv(this.addr,t),ye(e,t)}}function Wp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;r.uniform2uiv(this.addr,t),ye(e,t)}}function Xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;r.uniform3uiv(this.addr,t),ye(e,t)}}function Yp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;r.uniform4uiv(this.addr,t),ye(e,t)}}function jp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Dc,i)}function $p(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Uc,i)}function Kp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fc,i)}function Zp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nc,i)}function Jp(r){switch(r){case 5126:return Dp;case 35664:return Np;case 35665:return Up;case 35666:return Fp;case 35674:return Op;case 35675:return Bp;case 35676:return zp;case 5124:case 35670:return kp;case 35667:case 35671:return Gp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return qp;case 36295:return Xp;case 36296:return Yp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(r,t){r.uniform1fv(this.addr,t)}function tm(r,t){const e=Wi(t,this.size,2);r.uniform2fv(this.addr,e)}function em(r,t){const e=Wi(t,this.size,3);r.uniform3fv(this.addr,e)}function nm(r,t){const e=Wi(t,this.size,4);r.uniform4fv(this.addr,e)}function im(r,t){const e=Wi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function sm(r,t){const e=Wi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function rm(r,t){const e=Wi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function om(r,t){r.uniform1iv(this.addr,t)}function am(r,t){r.uniform2iv(this.addr,t)}function lm(r,t){r.uniform3iv(this.addr,t)}function cm(r,t){r.uniform4iv(this.addr,t)}function hm(r,t){r.uniform1uiv(this.addr,t)}function um(r,t){r.uniform2uiv(this.addr,t)}function dm(r,t){r.uniform3uiv(this.addr,t)}function fm(r,t){r.uniform4uiv(this.addr,t)}function pm(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Dc,s[o])}function mm(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Uc,s[o])}function gm(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Fc,s[o])}function vm(r,t,e){const n=this.cache,i=t.length,s=pr(e,i);xe(n,s)||(r.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Nc,s[o])}function _m(r){switch(r){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return om;case 35667:case 35671:return am;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return um;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Jp(e.type)}}class ym{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=_m(e.type)}}class Sm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function al(r,t){r.seq.push(t),r.map[t.id]=t}function Mm(r,t,e){const n=r.name,i=n.length;for(Kr.lastIndex=0;;){const s=Kr.exec(n),o=Kr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){al(e,c===void 0?new xm(a,r,t):new ym(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Sm(a),al(e,d)),e=d}}}class ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Mm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ll(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Em=37297;let wm=0;function bm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Tm(r){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(r);let n;switch(t===e?n="":t===lr&&e===ar?n="LinearDisplayP3ToLinearSRGB":t===ar&&e===lr&&(n="LinearSRGBToLinearDisplayP3"),r){case Cn:case fr:return[n,"LinearTransferOETF"];case Ee:case Po:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function cl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+bm(r.getShaderSource(t),o)}else return i}function Am(r,t){const e=Tm(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Cm(r,t){let e;switch(t){case zh:e="Linear";break;case kh:e="Reinhard";break;case Gh:e="OptimizedCineon";break;case hc:e="ACESFilmic";break;case Hh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Rm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Pm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function rs(r){return r!==""}function hl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Im=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(r){return r.replace(Im,Nm)}const Dm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nm(r,t){let e=Wt[t];if(e===void 0){const n=Dm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}const Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(r){return r.replace(Um,Fm)}function Fm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Om(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Bm(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ui:case Fi:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function km(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case Oh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Hm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Om(e),c=Bm(e),h=zm(e),d=km(e),u=Gm(e),f=e.isWebGL2?"":Rm(e),g=Pm(s),v=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),m.length>0&&(m+=`
`),p=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rs).join(`
`),p.length>0&&(p+=`
`)):(m=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),p=[f,fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==kn?Cm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Am("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=So(o),o=hl(o,e),o=ul(o,e),a=So(a),a=hl(a,e),a=ul(a,e),o=dl(o),a=dl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+m+o,y=x+p+a,E=ll(i,i.VERTEX_SHADER,_),b=ll(i,i.FRAGMENT_SHADER,y);i.attachShader(v,E),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(B){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(E).trim(),R=i.getShaderInfoLog(b).trim();let D=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(D=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,E,b);else{const q=cl(i,E,"vertex"),j=cl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+q+`
`+j)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||R==="")&&(U=!1);U&&(B.diagnostics={runnable:D,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:R,prefix:p}})}i.deleteShader(E),i.deleteShader(b),I=new ir(i,v),S=Lm(i,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,Em)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}let Vm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qm(t),e.set(t,n)),n}}class qm{constructor(t){this.id=Vm++,this.code=t,this.usedTimes=0}}function Xm(r,t,e,n,i,s,o){const a=new wc,l=new Wm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,w,B,G,O){const R=G.fog,D=O.geometry,U=S.isMeshStandardMaterial?G.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||U),j=q&&q.mapping===dr?q.image.height:null,W=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,z=J!==void 0?J.length:0;let H=0;D.morphAttributes.position!==void 0&&(H=1),D.morphAttributes.normal!==void 0&&(H=2),D.morphAttributes.color!==void 0&&(H=3);let dt,gt,xt,Pt;if(W){const de=un[W];dt=de.vertexShader,gt=de.fragmentShader}else dt=S.vertexShader,gt=S.fragmentShader,l.update(S),xt=l.getVertexShaderID(S),Pt=l.getFragmentShaderID(S);const Nt=r.getRenderTarget(),Dt=O.isInstancedMesh===!0,zt=!!S.map,Jt=!!S.matcap,Ut=!!q,N=!!S.aoMap,ut=!!S.lightMap,Q=!!S.bumpMap,st=!!S.normalMap,et=!!S.displacementMap,Ct=!!S.emissiveMap,_t=!!S.metalnessMap,Et=!!S.roughnessMap,Ft=S.anisotropy>0,Yt=S.clearcoat>0,re=S.iridescence>0,L=S.sheen>0,T=S.transmission>0,X=Ft&&!!S.anisotropyMap,ot=Yt&&!!S.clearcoatMap,nt=Yt&&!!S.clearcoatNormalMap,at=Yt&&!!S.clearcoatRoughnessMap,wt=re&&!!S.iridescenceMap,ct=re&&!!S.iridescenceThicknessMap,vt=L&&!!S.sheenColorMap,F=L&&!!S.sheenRoughnessMap,ht=!!S.specularMap,tt=!!S.specularColorMap,Ot=!!S.specularIntensityMap,At=T&&!!S.transmissionMap,It=T&&!!S.thicknessMap,bt=!!S.gradientMap,St=!!S.alphaMap,$t=S.alphaTest>0,k=!!S.alphaHash,ft=!!S.extensions,it=!!D.attributes.uv1,Z=!!D.attributes.uv2,lt=!!D.attributes.uv3;let Lt=kn;return S.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(Lt=r.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:dt,fragmentShader:gt,defines:S.defines,customVertexShaderID:xt,customFragmentShaderID:Pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Nt===null?r.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:Cn,map:zt,matcap:Jt,envMap:Ut,envMapMode:Ut&&q.mapping,envMapCubeUVHeight:j,aoMap:N,lightMap:ut,bumpMap:Q,normalMap:st,displacementMap:u&&et,emissiveMap:Ct,normalMapObjectSpace:st&&S.normalMapType===eu,normalMapTangentSpace:st&&S.normalMapType===xc,metalnessMap:_t,roughnessMap:Et,anisotropy:Ft,anisotropyMap:X,clearcoat:Yt,clearcoatMap:ot,clearcoatNormalMap:nt,clearcoatRoughnessMap:at,iridescence:re,iridescenceMap:wt,iridescenceThicknessMap:ct,sheen:L,sheenColorMap:vt,sheenRoughnessMap:F,specularMap:ht,specularColorMap:tt,specularIntensityMap:Ot,transmission:T,transmissionMap:At,thicknessMap:It,gradientMap:bt,opaque:S.transparent===!1&&S.blending===ii,alphaMap:St,alphaTest:$t,alphaHash:k,combine:S.combine,mapUv:zt&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:ut&&v(S.lightMap.channel),bumpMapUv:Q&&v(S.bumpMap.channel),normalMapUv:st&&v(S.normalMap.channel),displacementMapUv:et&&v(S.displacementMap.channel),emissiveMapUv:Ct&&v(S.emissiveMap.channel),metalnessMapUv:_t&&v(S.metalnessMap.channel),roughnessMapUv:Et&&v(S.roughnessMap.channel),anisotropyMapUv:X&&v(S.anisotropyMap.channel),clearcoatMapUv:ot&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:F&&v(S.sheenRoughnessMap.channel),specularMapUv:ht&&v(S.specularMap.channel),specularColorMapUv:tt&&v(S.specularColorMap.channel),specularIntensityMapUv:Ot&&v(S.specularIntensityMap.channel),transmissionMapUv:At&&v(S.transmissionMap.channel),thicknessMapUv:It&&v(S.thicknessMap.channel),alphaMapUv:St&&v(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(st||Ft),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:it,vertexUv2s:Z,vertexUv3s:lt,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(zt||St),fog:!!R,useFog:S.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:H,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Lt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ve,flipSided:S.side===Re,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ft&&S.extensions.derivatives===!0,extensionFragDepth:ft&&S.extensions.fragDepth===!0,extensionDrawBuffers:ft&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)w.push(B),w.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(x(w,S),_(w,S),w.push(r.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const w=g[S.type];let B;if(w){const G=un[w];B=Pu.clone(G.uniforms)}else B=S.uniforms;return B}function E(S,w){let B;for(let G=0,O=c.length;G<O;G++){const R=c[G];if(R.cacheKey===w){B=R,++B.usedTimes;break}}return B===void 0&&(B=new Hm(r,w,S,s),c.push(B)),B}function b(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:I}}function Ym(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function jm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function pl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ml(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,v,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,v,m){const p=o(d,u,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||jm),n.length>1&&n.sort(u||pl),i.length>1&&i.sort(u||pl)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function $m(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ml,r.set(n,[o])):i>=s.length?(o=new ml,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Km(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Gt};break;case"SpotLight":e={position:new P,direction:new P,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new P,halfWidth:new P,halfHeight:new P};break}return r[t.id]=e,e}}}function Zm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Jm=0;function Qm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function tg(r,t){const e=new Km,n=Zm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,o=new ee,a=new ee;function l(h,d){let u=0,f=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,m=0,p=0,x=0,_=0,y=0,E=0,b=0,A=0,I=0,S=0;h.sort(Qm);const w=d===!0?Math.PI:1;for(let G=0,O=h.length;G<O;G++){const R=h[G],D=R.color,U=R.intensity,q=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*U*w,f+=D.g*U*w,g+=D.b*U*w;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],U);S++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){const J=R.shadow,z=n.get(R);z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.directionalShadow[v]=z,i.directionalShadowMap[v]=j,i.directionalShadowMatrix[v]=R.shadow.matrix,y++}i.directional[v]=W,v++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(D).multiplyScalar(U*w),W.distance=q,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[p]=W;const J=R.shadow;if(R.map&&(i.spotLightMap[A]=R.map,A++,J.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[p]=J.matrix,R.castShadow){const z=n.get(R);z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,i.spotShadow[p]=z,i.spotShadowMap[p]=j,b++}p++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(D).multiplyScalar(U),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=W,x++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*w),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,z=n.get(R);z.shadowBias=J.bias,z.shadowNormalBias=J.normalBias,z.shadowRadius=J.radius,z.shadowMapSize=J.mapSize,z.shadowCameraNear=J.camera.near,z.shadowCameraFar=J.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=j,i.pointShadowMatrix[m]=R.shadow.matrix,E++}i.point[m]=W,m++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(U*w),W.groundColor.copy(R.groundColor).multiplyScalar(U*w),i.hemi[_]=W,_++}}x>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==v||B.pointLength!==m||B.spotLength!==p||B.rectAreaLength!==x||B.hemiLength!==_||B.numDirectionalShadows!==y||B.numPointShadows!==E||B.numSpotShadows!==b||B.numSpotMaps!==A||B.numLightProbes!==S)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=S,B.directionalLength=v,B.pointLength=m,B.spotLength=p,B.rectAreaLength=x,B.hemiLength=_,B.numDirectionalShadows=y,B.numPointShadows=E,B.numSpotShadows=b,B.numSpotMaps=A,B.numLightProbes=S,i.version=Jm++)}function c(h,d){let u=0,f=0,g=0,v=0,m=0;const p=d.matrixWorldInverse;for(let x=0,_=h.length;x<_;x++){const y=h[x];if(y.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function gl(r,t){const e=new tg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function eg(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new gl(r,t),e.set(s,[l])):o>=a.length?(l=new gl(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class ng extends Vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ig extends Vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`;function og(r,t,e){let n=new Io;const i=new rt,s=new rt,o=new ae,a=new ng({depthPacking:tu}),l=new ig,c={},h=e.maxTextureSize,d={[An]:Re,[Re]:An,[Ve]:Ve},u=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new qt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let p=this.type;this.render=function(E,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=r.getRenderTarget(),S=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),B=r.state;B.setBlending(zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==En&&this.type===En,O=p===En&&this.type!==En;for(let R=0,D=E.length;R<D;R++){const U=E[R],q=U.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const j=q.getFrameExtents();if(i.multiply(j),s.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,q.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||G===!0||O===!0){const J=this.type!==En?{minFilter:Ne,magFilter:Ne}:{};q.map!==null&&q.map.dispose(),q.map=new ai(i.x,i.y,J),q.map.texture.name=U.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const W=q.getViewportCount();for(let J=0;J<W;J++){const z=q.getViewport(J);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),B.viewport(o),q.updateMatrices(U,J),n=q.getFrustum(),y(b,A,q.camera,U,this.type)}q.isPointLightShadow!==!0&&this.type===En&&x(q,A),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(I,S,w)};function x(E,b){const A=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ai(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,A,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,A,f,v,null)}function _(E,b,A,I){let S=null;const w=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=A.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=S.uuid,G=b.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let R=O[G];R===void 0&&(R=S.clone(),O[G]=R),S=R}if(S.visible=b.visible,S.wireframe=b.wireframe,I===En?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=r.properties.get(S);B.light=A}return S}function y(E,b,A,I,S){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===En)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const G=t.update(E),O=E.material;if(Array.isArray(O)){const R=G.groups;for(let D=0,U=R.length;D<U;D++){const q=R[D],j=O[q.materialIndex];if(j&&j.visible){const W=_(E,j,I,S);r.renderBufferDirect(A,null,G,W,E,q)}}}else if(O.visible){const R=_(E,O,I,S);r.renderBufferDirect(A,null,G,R,E,null)}}const B=E.children;for(let G=0,O=B.length;G<O;G++)y(B[G],b,A,I,S)}}function ag(r,t,e){const n=e.isWebGL2;function i(){let k=!1;const ft=new ae;let it=null;const Z=new ae(0,0,0,0);return{setMask:function(lt){it!==lt&&!k&&(r.colorMask(lt,lt,lt,lt),it=lt)},setLocked:function(lt){k=lt},setClear:function(lt,Lt,Kt,de,Xe){Xe===!0&&(lt*=de,Lt*=de,Kt*=de),ft.set(lt,Lt,Kt,de),Z.equals(ft)===!1&&(r.clearColor(lt,Lt,Kt,de),Z.copy(ft))},reset:function(){k=!1,it=null,Z.set(-1,0,0,0)}}}function s(){let k=!1,ft=null,it=null,Z=null;return{setTest:function(lt){lt?zt(r.DEPTH_TEST):Jt(r.DEPTH_TEST)},setMask:function(lt){ft!==lt&&!k&&(r.depthMask(lt),ft=lt)},setFunc:function(lt){if(it!==lt){switch(lt){case Ph:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Ih:r.depthFunc(r.LESS);break;case rr:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Nh:r.depthFunc(r.GEQUAL);break;case Uh:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}it=lt}},setLocked:function(lt){k=lt},setClear:function(lt){Z!==lt&&(r.clearDepth(lt),Z=lt)},reset:function(){k=!1,ft=null,it=null,Z=null}}}function o(){let k=!1,ft=null,it=null,Z=null,lt=null,Lt=null,Kt=null,de=null,Xe=null;return{setTest:function(ne){k||(ne?zt(r.STENCIL_TEST):Jt(r.STENCIL_TEST))},setMask:function(ne){ft!==ne&&!k&&(r.stencilMask(ne),ft=ne)},setFunc:function(ne,Pe,rn){(it!==ne||Z!==Pe||lt!==rn)&&(r.stencilFunc(ne,Pe,rn),it=ne,Z=Pe,lt=rn)},setOp:function(ne,Pe,rn){(Lt!==ne||Kt!==Pe||de!==rn)&&(r.stencilOp(ne,Pe,rn),Lt=ne,Kt=Pe,de=rn)},setLocked:function(ne){k=ne},setClear:function(ne){Xe!==ne&&(r.clearStencil(ne),Xe=ne)},reset:function(){k=!1,ft=null,it=null,Z=null,lt=null,Lt=null,Kt=null,de=null,Xe=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,y=null,E=null,b=null,A=null,I=null,S=new Gt(0,0,0),w=0,B=!1,G=null,O=null,R=null,D=null,U=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=W>=2);let z=null,H={};const dt=r.getParameter(r.SCISSOR_BOX),gt=r.getParameter(r.VIEWPORT),xt=new ae().fromArray(dt),Pt=new ae().fromArray(gt);function Nt(k,ft,it,Z){const lt=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(k,Lt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<it;Kt++)n&&(k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ft+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return Lt}const Dt={};Dt[r.TEXTURE_2D]=Nt(r.TEXTURE_2D,r.TEXTURE_2D,1),Dt[r.TEXTURE_CUBE_MAP]=Nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[r.TEXTURE_2D_ARRAY]=Nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Dt[r.TEXTURE_3D]=Nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),zt(r.DEPTH_TEST),l.setFunc(rr),_t(!1),Et(Zo),zt(r.CULL_FACE),et(zn);function zt(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function Jt(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function Ut(k,ft){return f[k]!==ft?(r.bindFramebuffer(k,ft),f[k]=ft,n&&(k===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ft),k===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function N(k,ft){let it=v,Z=!1;if(k)if(it=g.get(ft),it===void 0&&(it=[],g.set(ft,it)),k.isWebGLMultipleRenderTargets){const lt=k.texture;if(it.length!==lt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let Lt=0,Kt=lt.length;Lt<Kt;Lt++)it[Lt]=r.COLOR_ATTACHMENT0+Lt;it.length=lt.length,Z=!0}}else it[0]!==r.COLOR_ATTACHMENT0&&(it[0]=r.COLOR_ATTACHMENT0,Z=!0);else it[0]!==r.BACK&&(it[0]=r.BACK,Z=!0);Z&&(e.isWebGL2?r.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function ut(k){return m!==k?(r.useProgram(k),m=k,!0):!1}const Q={[Jn]:r.FUNC_ADD,[mh]:r.FUNC_SUBTRACT,[gh]:r.FUNC_REVERSE_SUBTRACT};if(n)Q[ea]=r.MIN,Q[na]=r.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(Q[ea]=k.MIN_EXT,Q[na]=k.MAX_EXT)}const st={[vh]:r.ZERO,[_h]:r.ONE,[xh]:r.SRC_COLOR,[fo]:r.SRC_ALPHA,[bh]:r.SRC_ALPHA_SATURATE,[Eh]:r.DST_COLOR,[Sh]:r.DST_ALPHA,[yh]:r.ONE_MINUS_SRC_COLOR,[po]:r.ONE_MINUS_SRC_ALPHA,[wh]:r.ONE_MINUS_DST_COLOR,[Mh]:r.ONE_MINUS_DST_ALPHA,[Th]:r.CONSTANT_COLOR,[Ah]:r.ONE_MINUS_CONSTANT_COLOR,[Ch]:r.CONSTANT_ALPHA,[Rh]:r.ONE_MINUS_CONSTANT_ALPHA};function et(k,ft,it,Z,lt,Lt,Kt,de,Xe,ne){if(k===zn){p===!0&&(Jt(r.BLEND),p=!1);return}if(p===!1&&(zt(r.BLEND),p=!0),k!==ph){if(k!==x||ne!==B){if((_!==Jn||b!==Jn)&&(r.blendEquation(r.FUNC_ADD),_=Jn,b=Jn),ne)switch(k){case ii:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jo:r.blendFunc(r.ONE,r.ONE);break;case Qo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ta:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ii:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ta:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,E=null,A=null,I=null,S.set(0,0,0),w=0,x=k,B=ne}return}lt=lt||ft,Lt=Lt||it,Kt=Kt||Z,(ft!==_||lt!==b)&&(r.blendEquationSeparate(Q[ft],Q[lt]),_=ft,b=lt),(it!==y||Z!==E||Lt!==A||Kt!==I)&&(r.blendFuncSeparate(st[it],st[Z],st[Lt],st[Kt]),y=it,E=Z,A=Lt,I=Kt),(de.equals(S)===!1||Xe!==w)&&(r.blendColor(de.r,de.g,de.b,Xe),S.copy(de),w=Xe),x=k,B=!1}function Ct(k,ft){k.side===Ve?Jt(r.CULL_FACE):zt(r.CULL_FACE);let it=k.side===Re;ft&&(it=!it),_t(it),k.blending===ii&&k.transparent===!1?et(zn):et(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const Z=k.stencilWrite;c.setTest(Z),Z&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?zt(r.SAMPLE_ALPHA_TO_COVERAGE):Jt(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(k){G!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),G=k)}function Et(k){k!==dh?(zt(r.CULL_FACE),k!==O&&(k===Zo?r.cullFace(r.BACK):k===fh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Jt(r.CULL_FACE),O=k}function Ft(k){k!==R&&(j&&r.lineWidth(k),R=k)}function Yt(k,ft,it){k?(zt(r.POLYGON_OFFSET_FILL),(D!==ft||U!==it)&&(r.polygonOffset(ft,it),D=ft,U=it)):Jt(r.POLYGON_OFFSET_FILL)}function re(k){k?zt(r.SCISSOR_TEST):Jt(r.SCISSOR_TEST)}function L(k){k===void 0&&(k=r.TEXTURE0+q-1),z!==k&&(r.activeTexture(k),z=k)}function T(k,ft,it){it===void 0&&(z===null?it=r.TEXTURE0+q-1:it=z);let Z=H[it];Z===void 0&&(Z={type:void 0,texture:void 0},H[it]=Z),(Z.type!==k||Z.texture!==ft)&&(z!==it&&(r.activeTexture(it),z=it),r.bindTexture(k,ft||Dt[k]),Z.type=k,Z.texture=ft)}function X(){const k=H[z];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ot(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(k){xt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),xt.copy(k))}function It(k){Pt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Pt.copy(k))}function bt(k,ft){let it=d.get(ft);it===void 0&&(it=new WeakMap,d.set(ft,it));let Z=it.get(k);Z===void 0&&(Z=r.getUniformBlockIndex(ft,k.name),it.set(k,Z))}function St(k,ft){const Z=d.get(ft).get(k);h.get(ft)!==Z&&(r.uniformBlockBinding(ft,Z,k.__bindingPointIndex),h.set(ft,Z))}function $t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},z=null,H={},f={},g=new WeakMap,v=[],m=null,p=!1,x=null,_=null,y=null,E=null,b=null,A=null,I=null,S=new Gt(0,0,0),w=0,B=!1,G=null,O=null,R=null,D=null,U=null,xt.set(0,0,r.canvas.width,r.canvas.height),Pt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:zt,disable:Jt,bindFramebuffer:Ut,drawBuffers:N,useProgram:ut,setBlending:et,setMaterial:Ct,setFlipSided:_t,setCullFace:Et,setLineWidth:Ft,setPolygonOffset:Yt,setScissorTest:re,activeTexture:L,bindTexture:T,unbindTexture:X,compressedTexImage2D:ot,compressedTexImage3D:nt,texImage2D:tt,texImage3D:Ot,updateUBOMapping:bt,uniformBlockBinding:St,texStorage2D:F,texStorage3D:ht,texSubImage2D:at,texSubImage3D:wt,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:At,viewport:It,reset:$t}}function lg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return p?new OffscreenCanvas(L,T):hr("canvas")}function _(L,T,X,ot){let nt=1;if((L.width>ot||L.height>ot)&&(nt=ot/Math.max(L.width,L.height)),nt<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const at=T?yo:Math.floor,wt=at(nt*L.width),ct=at(nt*L.height);v===void 0&&(v=x(wt,ct));const vt=X?x(wt,ct):v;return vt.width=wt,vt.height=ct,vt.getContext("2d").drawImage(L,0,0,wt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+wt+"x"+ct+")."),vt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return Ia(L.width)&&Ia(L.height)}function E(L){return a?!1:L.wrapS!==en||L.wrapT!==en||L.minFilter!==Ne&&L.minFilter!==je}function b(L,T){return L.generateMipmaps&&T&&L.minFilter!==Ne&&L.minFilter!==je}function A(L){r.generateMipmap(L)}function I(L,T,X,ot,nt=!1){if(a===!1)return T;if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let at=T;if(T===r.RED&&(X===r.FLOAT&&(at=r.R32F),X===r.HALF_FLOAT&&(at=r.R16F),X===r.UNSIGNED_BYTE&&(at=r.R8)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(at=r.R8UI),X===r.UNSIGNED_SHORT&&(at=r.R16UI),X===r.UNSIGNED_INT&&(at=r.R32UI),X===r.BYTE&&(at=r.R8I),X===r.SHORT&&(at=r.R16I),X===r.INT&&(at=r.R32I)),T===r.RG&&(X===r.FLOAT&&(at=r.RG32F),X===r.HALF_FLOAT&&(at=r.RG16F),X===r.UNSIGNED_BYTE&&(at=r.RG8)),T===r.RGBA){const wt=nt?or:te.getTransfer(ot);X===r.FLOAT&&(at=r.RGBA32F),X===r.HALF_FLOAT&&(at=r.RGBA16F),X===r.UNSIGNED_BYTE&&(at=wt===se?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(at=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(at=r.RGB5_A1)}return(at===r.R16F||at===r.R32F||at===r.RG16F||at===r.RG32F||at===r.RGBA16F||at===r.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function S(L,T,X){return b(L,X)===!0||L.isFramebufferTexture&&L.minFilter!==Ne&&L.minFilter!==je?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function w(L){return L===Ne||L===ia||L===Mr?r.NEAREST:r.LINEAR}function B(L){const T=L.target;T.removeEventListener("dispose",B),O(T),T.isVideoTexture&&g.delete(T)}function G(L){const T=L.target;T.removeEventListener("dispose",G),D(T)}function O(L){const T=n.get(L);if(T.__webglInit===void 0)return;const X=L.source,ot=m.get(X);if(ot){const nt=ot[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(L),Object.keys(ot).length===0&&m.delete(X)}n.remove(L)}function R(L){const T=n.get(L);r.deleteTexture(T.__webglTexture);const X=L.source,ot=m.get(X);delete ot[T.__cacheKey],o.memory.textures--}function D(L){const T=L.texture,X=n.get(L),ot=n.get(T);if(ot.__webglTexture!==void 0&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(X.__webglFramebuffer[nt]))for(let at=0;at<X.__webglFramebuffer[nt].length;at++)r.deleteFramebuffer(X.__webglFramebuffer[nt][at]);else r.deleteFramebuffer(X.__webglFramebuffer[nt]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[nt])}else{if(Array.isArray(X.__webglFramebuffer))for(let nt=0;nt<X.__webglFramebuffer.length;nt++)r.deleteFramebuffer(X.__webglFramebuffer[nt]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let nt=0;nt<X.__webglColorRenderbuffer.length;nt++)X.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[nt]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let nt=0,at=T.length;nt<at;nt++){const wt=n.get(T[nt]);wt.__webglTexture&&(r.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(T[nt])}n.remove(T),n.remove(L)}let U=0;function q(){U=0}function j(){const L=U;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),U+=1,L}function W(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function J(L,T){const X=n.get(L);if(L.isVideoTexture&&Yt(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const ot=L.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(X,L,T);return}}e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function z(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){zt(X,L,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function H(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){zt(X,L,T);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function dt(L,T){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Jt(X,L,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}const gt={[ei]:r.REPEAT,[en]:r.CLAMP_TO_EDGE,[vo]:r.MIRRORED_REPEAT},xt={[Ne]:r.NEAREST,[ia]:r.NEAREST_MIPMAP_NEAREST,[Mr]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[Vh]:r.LINEAR_MIPMAP_NEAREST,[us]:r.LINEAR_MIPMAP_LINEAR},Pt={[nu]:r.NEVER,[cu]:r.ALWAYS,[iu]:r.LESS,[ru]:r.LEQUAL,[su]:r.EQUAL,[lu]:r.GEQUAL,[ou]:r.GREATER,[au]:r.NOTEQUAL};function Nt(L,T,X){if(X?(r.texParameteri(L,r.TEXTURE_WRAP_S,gt[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,gt[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,gt[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,xt[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,xt[T.minFilter])):(r.texParameteri(L,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(L,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(T.wrapS!==en||T.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(L,r.TEXTURE_MAG_FILTER,w(T.magFilter)),r.texParameteri(L,r.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==Ne&&T.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ot=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ne||T.minFilter!==Mr&&T.minFilter!==us||T.type===Bn&&t.has("OES_texture_float_linear")===!1||a===!1&&T.type===ds&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(r.texParameterf(L,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Dt(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const ot=T.source;let nt=m.get(ot);nt===void 0&&(nt={},m.set(ot,nt));const at=W(T);if(at!==L.__cacheKey){nt[at]===void 0&&(nt[at]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),nt[at].usedTimes++;const wt=nt[L.__cacheKey];wt!==void 0&&(nt[L.__cacheKey].usedTimes--,wt.usedTimes===0&&R(T)),L.__cacheKey=at,L.__webglTexture=nt[at].texture}return X}function zt(L,T,X){let ot=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=r.TEXTURE_3D);const nt=Dt(L,T),at=T.source;e.bindTexture(ot,L.__webglTexture,r.TEXTURE0+X);const wt=n.get(at);if(at.version!==wt.__version||nt===!0){e.activeTexture(r.TEXTURE0+X);const ct=te.getPrimaries(te.workingColorSpace),vt=T.colorSpace===$e?null:te.getPrimaries(T.colorSpace),F=T.colorSpace===$e||ct===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);const ht=E(T)&&y(T.image)===!1;let tt=_(T.image,ht,!1,h);tt=re(T,tt);const Ot=y(tt)||a,At=s.convert(T.format,T.colorSpace);let It=s.convert(T.type),bt=I(T.internalFormat,At,It,T.colorSpace,T.isVideoTexture);Nt(ot,T,Ot);let St;const $t=T.mipmaps,k=a&&T.isVideoTexture!==!0,ft=wt.__version===void 0||nt===!0,it=S(T,tt,Ot);if(T.isDepthTexture)bt=r.DEPTH_COMPONENT,a?T.type===Bn?bt=r.DEPTH_COMPONENT32F:T.type===On?bt=r.DEPTH_COMPONENT24:T.type===si?bt=r.DEPTH24_STENCIL8:bt=r.DEPTH_COMPONENT16:T.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ri&&bt===r.DEPTH_COMPONENT&&T.type!==Ro&&T.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=On,It=s.convert(T.type)),T.format===Oi&&bt===r.DEPTH_COMPONENT&&(bt=r.DEPTH_STENCIL,T.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=si,It=s.convert(T.type))),ft&&(k?e.texStorage2D(r.TEXTURE_2D,1,bt,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,At,It,null));else if(T.isDataTexture)if($t.length>0&&Ot){k&&ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,$t[0].width,$t[0].height);for(let Z=0,lt=$t.length;Z<lt;Z++)St=$t[Z],k?e.texSubImage2D(r.TEXTURE_2D,Z,0,0,St.width,St.height,At,It,St.data):e.texImage2D(r.TEXTURE_2D,Z,bt,St.width,St.height,0,At,It,St.data);T.generateMipmaps=!1}else k?(ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,tt.width,tt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,tt.width,tt.height,At,It,tt.data)):e.texImage2D(r.TEXTURE_2D,0,bt,tt.width,tt.height,0,At,It,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,$t[0].width,$t[0].height,tt.depth);for(let Z=0,lt=$t.length;Z<lt;Z++)St=$t[Z],T.format!==nn?At!==null?k?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,tt.depth,At,St.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,bt,St.width,St.height,tt.depth,0,St.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,St.width,St.height,tt.depth,At,It,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,bt,St.width,St.height,tt.depth,0,At,It,St.data)}else{k&&ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,$t[0].width,$t[0].height);for(let Z=0,lt=$t.length;Z<lt;Z++)St=$t[Z],T.format!==nn?At!==null?k?e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,St.width,St.height,At,St.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?e.texSubImage2D(r.TEXTURE_2D,Z,0,0,St.width,St.height,At,It,St.data):e.texImage2D(r.TEXTURE_2D,Z,bt,St.width,St.height,0,At,It,St.data)}else if(T.isDataArrayTexture)k?(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,it,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,At,It,tt.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,tt.width,tt.height,tt.depth,0,At,It,tt.data);else if(T.isData3DTexture)k?(ft&&e.texStorage3D(r.TEXTURE_3D,it,bt,tt.width,tt.height,tt.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,At,It,tt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,tt.width,tt.height,tt.depth,0,At,It,tt.data);else if(T.isFramebufferTexture){if(ft)if(k)e.texStorage2D(r.TEXTURE_2D,it,bt,tt.width,tt.height);else{let Z=tt.width,lt=tt.height;for(let Lt=0;Lt<it;Lt++)e.texImage2D(r.TEXTURE_2D,Lt,bt,Z,lt,0,At,It,null),Z>>=1,lt>>=1}}else if($t.length>0&&Ot){k&&ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,$t[0].width,$t[0].height);for(let Z=0,lt=$t.length;Z<lt;Z++)St=$t[Z],k?e.texSubImage2D(r.TEXTURE_2D,Z,0,0,At,It,St):e.texImage2D(r.TEXTURE_2D,Z,bt,At,It,St);T.generateMipmaps=!1}else k?(ft&&e.texStorage2D(r.TEXTURE_2D,it,bt,tt.width,tt.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,It,tt)):e.texImage2D(r.TEXTURE_2D,0,bt,At,It,tt);b(T,Ot)&&A(ot),wt.__version=at.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Jt(L,T,X){if(T.image.length!==6)return;const ot=Dt(L,T),nt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);const at=n.get(nt);if(nt.version!==at.__version||ot===!0){e.activeTexture(r.TEXTURE0+X);const wt=te.getPrimaries(te.workingColorSpace),ct=T.colorSpace===$e?null:te.getPrimaries(T.colorSpace),vt=T.colorSpace===$e||wt===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const F=T.isCompressedTexture||T.image[0].isCompressedTexture,ht=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let Z=0;Z<6;Z++)!F&&!ht?tt[Z]=_(T.image[Z],!1,!0,c):tt[Z]=ht?T.image[Z].image:T.image[Z],tt[Z]=re(T,tt[Z]);const Ot=tt[0],At=y(Ot)||a,It=s.convert(T.format,T.colorSpace),bt=s.convert(T.type),St=I(T.internalFormat,It,bt,T.colorSpace),$t=a&&T.isVideoTexture!==!0,k=at.__version===void 0||ot===!0;let ft=S(T,Ot,At);Nt(r.TEXTURE_CUBE_MAP,T,At);let it;if(F){$t&&k&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,St,Ot.width,Ot.height);for(let Z=0;Z<6;Z++){it=tt[Z].mipmaps;for(let lt=0;lt<it.length;lt++){const Lt=it[lt];T.format!==nn?It!==null?$t?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Lt.width,Lt.height,It,Lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,St,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,Lt.width,Lt.height,It,bt,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,St,Lt.width,Lt.height,0,It,bt,Lt.data)}}}else{it=T.mipmaps,$t&&k&&(it.length>0&&ft++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,St,tt[0].width,tt[0].height));for(let Z=0;Z<6;Z++)if(ht){$t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,tt[Z].width,tt[Z].height,It,bt,tt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,St,tt[Z].width,tt[Z].height,0,It,bt,tt[Z].data);for(let lt=0;lt<it.length;lt++){const Kt=it[lt].image[Z].image;$t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Kt.width,Kt.height,It,bt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,St,Kt.width,Kt.height,0,It,bt,Kt.data)}}else{$t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,It,bt,tt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,St,It,bt,tt[Z]);for(let lt=0;lt<it.length;lt++){const Lt=it[lt];$t?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,It,bt,Lt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,St,It,bt,Lt.image[Z])}}}b(T,At)&&A(r.TEXTURE_CUBE_MAP),at.__version=nt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Ut(L,T,X,ot,nt,at){const wt=s.convert(X.format,X.colorSpace),ct=s.convert(X.type),vt=I(X.internalFormat,wt,ct,X.colorSpace);if(!n.get(T).__hasExternalTextures){const ht=Math.max(1,T.width>>at),tt=Math.max(1,T.height>>at);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,at,vt,ht,tt,T.depth,0,wt,ct,null):e.texImage2D(nt,at,vt,ht,tt,0,wt,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),Ft(T)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,nt,n.get(X).__webglTexture,0,Et(T)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,nt,n.get(X).__webglTexture,at),e.bindFramebuffer(r.FRAMEBUFFER,null)}function N(L,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer&&!T.stencilBuffer){let ot=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||Ft(T)){const nt=T.depthTexture;nt&&nt.isDepthTexture&&(nt.type===Bn?ot=r.DEPTH_COMPONENT32F:nt.type===On&&(ot=r.DEPTH_COMPONENT24));const at=Et(T);Ft(T)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,ot,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,at,ot,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,ot,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,L)}else if(T.depthBuffer&&T.stencilBuffer){const ot=Et(T);X&&Ft(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,T.width,T.height):Ft(T)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,L)}else{const ot=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let nt=0;nt<ot.length;nt++){const at=ot[nt],wt=s.convert(at.format,at.colorSpace),ct=s.convert(at.type),vt=I(at.internalFormat,wt,ct,at.colorSpace),F=Et(T);X&&Ft(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,F,vt,T.width,T.height):Ft(T)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,vt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,vt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);const ot=n.get(T.depthTexture).__webglTexture,nt=Et(T);if(T.depthTexture.format===ri)Ft(T)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ot,0);else if(T.depthTexture.format===Oi)Ft(T)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Q(L){const T=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ut(T.__webglFramebuffer,L)}else if(X){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]=r.createRenderbuffer(),N(T.__webglDepthbuffer[ot],L,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),N(T.__webglDepthbuffer,L,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,T,X){const ot=n.get(L);T!==void 0&&Ut(ot.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Q(L)}function et(L){const T=L.texture,X=n.get(L),ot=n.get(T);L.addEventListener("dispose",G),L.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=T.version,o.memory.textures++);const nt=L.isWebGLCubeRenderTarget===!0,at=L.isWebGLMultipleRenderTargets===!0,wt=y(L)||a;if(nt){X.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[ct]=[];for(let vt=0;vt<T.mipmaps.length;vt++)X.__webglFramebuffer[ct][vt]=r.createFramebuffer()}else X.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let ct=0;ct<T.mipmaps.length;ct++)X.__webglFramebuffer[ct]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(at)if(i.drawBuffers){const ct=L.texture;for(let vt=0,F=ct.length;vt<F;vt++){const ht=n.get(ct[vt]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ft(L)===!1){const ct=at?T:[T];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<ct.length;vt++){const F=ct[vt];X.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const ht=s.convert(F.format,F.colorSpace),tt=s.convert(F.type),Ot=I(F.internalFormat,ht,tt,F.colorSpace,L.isXRRenderTarget===!0),At=Et(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Ot,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),N(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,T,wt);for(let ct=0;ct<6;ct++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)Ut(X.__webglFramebuffer[ct][vt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,vt);else Ut(X.__webglFramebuffer[ct],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);b(T,wt)&&A(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const ct=L.texture;for(let vt=0,F=ct.length;vt<F;vt++){const ht=ct[vt],tt=n.get(ht);e.bindTexture(r.TEXTURE_2D,tt.__webglTexture),Nt(r.TEXTURE_2D,ht,wt),Ut(X.__webglFramebuffer,L,ht,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),b(ht,wt)&&A(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?ct=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,ot.__webglTexture),Nt(ct,T,wt),a&&T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)Ut(X.__webglFramebuffer[vt],L,T,r.COLOR_ATTACHMENT0,ct,vt);else Ut(X.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,ct,0);b(T,wt)&&A(ct),e.unbindTexture()}L.depthBuffer&&Q(L)}function Ct(L){const T=y(L)||a,X=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ot=0,nt=X.length;ot<nt;ot++){const at=X[ot];if(b(at,T)){const wt=L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ct=n.get(at).__webglTexture;e.bindTexture(wt,ct),A(wt),e.unbindTexture()}}}function _t(L){if(a&&L.samples>0&&Ft(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],X=L.width,ot=L.height;let nt=r.COLOR_BUFFER_BIT;const at=[],wt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=n.get(L),vt=L.isWebGLMultipleRenderTargets===!0;if(vt)for(let F=0;F<T.length;F++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let F=0;F<T.length;F++){at.push(r.COLOR_ATTACHMENT0+F),L.depthBuffer&&at.push(wt);const ht=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(ht===!1&&(L.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),vt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[F]),ht===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[wt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[wt])),vt){const tt=n.get(T[F]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,tt,0)}r.blitFramebuffer(0,0,X,ot,0,0,X,ot,nt,r.NEAREST),f&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let F=0;F<T.length;F++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,ct.__webglColorRenderbuffer[F]);const ht=n.get(T[F]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Et(L){return Math.min(d,L.samples)}function Ft(L){const T=n.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Yt(L){const T=o.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function re(L,T){const X=L.colorSpace,ot=L.format,nt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===_o||X!==Cn&&X!==$e&&(te.getTransfer(X)===se?a===!1?t.has("EXT_sRGB")===!0&&ot===nn?(L.format=_o,L.minFilter=je,L.generateMipmaps=!1):T=Sc.sRGBToLinear(T):(ot!==nn||nt!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=dt,this.rebindTextures=st,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ft}function cg(r,t,e){const n=e.isWebGL2;function i(s,o=$e){let a;const l=te.getTransfer(o);if(s===Gn)return r.UNSIGNED_BYTE;if(s===fc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===pc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Wh)return r.BYTE;if(s===qh)return r.SHORT;if(s===Ro)return r.UNSIGNED_SHORT;if(s===dc)return r.INT;if(s===On)return r.UNSIGNED_INT;if(s===Bn)return r.FLOAT;if(s===ds)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Xh)return r.ALPHA;if(s===nn)return r.RGBA;if(s===Yh)return r.LUMINANCE;if(s===jh)return r.LUMINANCE_ALPHA;if(s===ri)return r.DEPTH_COMPONENT;if(s===Oi)return r.DEPTH_STENCIL;if(s===_o)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$h)return r.RED;if(s===mc)return r.RED_INTEGER;if(s===Kh)return r.RG;if(s===gc)return r.RG_INTEGER;if(s===vc)return r.RGBA_INTEGER;if(s===Er||s===wr||s===br||s===Tr)if(l===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Er)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Er)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===br)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sa||s===ra||s===oa||s===aa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===oa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===aa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===la||s===ca)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===la)return l===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ca)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===va||s===_a||s===xa||s===ya||s===Sa||s===Ma||s===Ea)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ha)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ua)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===da)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ma)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ga)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===va)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_a)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ya)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sa)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ma)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ea)return l===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ar||s===wa||s===ba)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ar)return l===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ba)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jh||s===Ta||s===Aa||s===Ca)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ar)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ta)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Aa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ca)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===si?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class hg extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tn extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ug={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class dg extends Be{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:ri,h!==ri&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ri&&(n=On),n===void 0&&h===Oi&&(n=si),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class fg extends ci{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=e.getContextAttributes();let m=null,p=null;const x=[],_=[],y=new Oe;y.layers.enable(1),y.viewport=new ae;const E=new Oe;E.layers.enable(2),E.viewport=new ae;const b=[y,E],A=new hg;A.layers.enable(1),A.layers.enable(2);let I=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let H=x[z];return H===void 0&&(H=new Zr,x[z]=H),H.getTargetRaySpace()},this.getControllerGrip=function(z){let H=x[z];return H===void 0&&(H=new Zr,x[z]=H),H.getGripSpace()},this.getHand=function(z){let H=x[z];return H===void 0&&(H=new Zr,x[z]=H),H.getHandSpace()};function w(z){const H=_.indexOf(z.inputSource);if(H===-1)return;const dt=x[H];dt!==void 0&&(dt.update(z.inputSource,z.frame,c||o),dt.dispatchEvent({type:z.type,data:z.inputSource}))}function B(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let z=0;z<x.length;z++){const H=_[z];H!==null&&(_[z]=null,x[z].disconnect(H))}I=null,S=null,t.setRenderTarget(m),f=null,u=null,d=null,i=null,p=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,H),i.updateRenderState({baseLayer:f}),p=new ai(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let H=null,dt=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=v.stencil?Oi:ri,dt=v.stencil?si:On);const xt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(xt),i.updateRenderState({layers:[u]}),p=new ai(u.textureWidth,u.textureHeight,{format:nn,type:Gn,depthTexture:new dg(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Pt=t.properties.get(p);Pt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(z){for(let H=0;H<z.removed.length;H++){const dt=z.removed[H],gt=_.indexOf(dt);gt>=0&&(_[gt]=null,x[gt].disconnect(dt))}for(let H=0;H<z.added.length;H++){const dt=z.added[H];let gt=_.indexOf(dt);if(gt===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=_.length){_.push(dt),gt=Pt;break}else if(_[Pt]===null){_[Pt]=dt,gt=Pt;break}if(gt===-1)break}const xt=x[gt];xt&&xt.connect(dt)}}const O=new P,R=new P;function D(z,H,dt){O.setFromMatrixPosition(H.matrixWorld),R.setFromMatrixPosition(dt.matrixWorld);const gt=O.distanceTo(R),xt=H.projectionMatrix.elements,Pt=dt.projectionMatrix.elements,Nt=xt[14]/(xt[10]-1),Dt=xt[14]/(xt[10]+1),zt=(xt[9]+1)/xt[5],Jt=(xt[9]-1)/xt[5],Ut=(xt[8]-1)/xt[0],N=(Pt[8]+1)/Pt[0],ut=Nt*Ut,Q=Nt*N,st=gt/(-Ut+N),et=st*-Ut;H.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(et),z.translateZ(st),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ct=Nt+st,_t=Dt+st,Et=ut-et,Ft=Q+(gt-et),Yt=zt*Dt/_t*Ct,re=Jt*Dt/_t*Ct;z.projectionMatrix.makePerspective(Et,Ft,Yt,re,Ct,_t),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function U(z,H){H===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(H.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;A.near=E.near=y.near=z.near,A.far=E.far=y.far=z.far,(I!==A.near||S!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,S=A.far);const H=z.parent,dt=A.cameras;U(A,H);for(let gt=0;gt<dt.length;gt++)U(dt[gt],H);dt.length===2?D(A,y,E):A.projectionMatrix.copy(y.projectionMatrix),q(z,A,H)};function q(z,H,dt){dt===null?z.matrix.copy(H.matrixWorld):(z.matrix.copy(dt.matrixWorld),z.matrix.invert(),z.matrix.multiply(H.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(H.projectionMatrix),z.projectionMatrixInverse.copy(H.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=xo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)};let j=null;function W(z,H){if(h=H.getViewerPose(c||o),g=H,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let gt=!1;dt.length!==A.cameras.length&&(A.cameras.length=0,gt=!0);for(let xt=0;xt<dt.length;xt++){const Pt=dt[xt];let Nt=null;if(f!==null)Nt=f.getViewport(Pt);else{const zt=d.getViewSubImage(u,Pt);Nt=zt.viewport,xt===0&&(t.setRenderTargetTextures(p,zt.colorTexture,u.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(p))}let Dt=b[xt];Dt===void 0&&(Dt=new Oe,Dt.layers.enable(xt),Dt.viewport=new ae,b[xt]=Dt),Dt.matrix.fromArray(Pt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Pt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),xt===0&&(A.matrix.copy(Dt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),gt===!0&&A.cameras.push(Dt)}}for(let dt=0;dt<x.length;dt++){const gt=_[dt],xt=x[dt];gt!==null&&xt!==void 0&&xt.update(gt,H,c||o)}j&&j(z,H),H.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:H}),g=null}const J=new Lc;J.setAnimationLoop(W),this.setAnimationLoop=function(z){j=z},this.dispose=function(){}}}function pg(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Cc(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mg(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function c(x,_){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",m));const E=_.program;n.updateUBOMapping(x,E);const b=t.render.frame;s[x.id]!==b&&(u(x),s[x.id]=b)}function h(x){const _=d();x.__bindingPointIndex=_;const y=r.createBuffer(),E=x.__size,b=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,E,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=i[x.id],y=x.uniforms,E=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let b=0,A=y.length;b<A;b++){const I=y[b];if(f(I,b,E)===!0){const S=I.__offset,w=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let G=0;G<w.length;G++){const O=w[G],R=v(O);typeof O=="number"?(I.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,S+B,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=O.elements[0],I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=O.elements[0],I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=O.elements[0]):(O.toArray(I.__data,B),B+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,I.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,_,y){const E=x.value;if(y[_]===void 0){if(typeof E=="number")y[_]=E;else{const b=Array.isArray(E)?E:[E],A=[];for(let I=0;I<b.length;I++)A.push(b[I].clone());y[_]=A}return!0}else if(typeof E=="number"){if(y[_]!==E)return y[_]=E,!0}else{const b=Array.isArray(y[_])?y[_]:[y[_]],A=Array.isArray(E)?E:[E];for(let I=0;I<b.length;I++){const S=b[I];if(S.equals(A[I])===!1)return S.copy(A[I]),!0}}return!1}function g(x){const _=x.uniforms;let y=0;const E=16;let b=0;for(let A=0,I=_.length;A<I;A++){const S=_[A],w={boundary:0,storage:0},B=Array.isArray(S.value)?S.value:[S.value];for(let G=0,O=B.length;G<O;G++){const R=B[G],D=v(R);w.boundary+=D.boundary,w.storage+=D.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,A>0){b=y%E;const G=E-b;b!==0&&G-w.boundary<0&&(y+=E-b,S.__offset=y)}y+=w.storage}return b=y%E,b>0&&(y+=E-b),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class No{constructor(t={}){const{canvas:e=du(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const _=this;let y=!1,E=0,b=0,A=null,I=-1,S=null;const w=new ae,B=new ae;let G=null;const O=new Gt(0);let R=0,D=e.width,U=e.height,q=1,j=null,W=null;const J=new ae(0,0,D,U),z=new ae(0,0,D,U);let H=!1;const dt=new Io;let gt=!1,xt=!1,Pt=null;const Nt=new ee,Dt=new rt,zt=new P,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return A===null?q:1}let N=n;function ut(C,V){for(let Y=0;Y<C.length;Y++){const $=C[Y],K=e.getContext($,V);if(K!==null)return K}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Co}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const V=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&V.shift(),N=ut(V,C),N===null)throw ut(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Q,st,et,Ct,_t,Et,Ft,Yt,re,L,T,X,ot,nt,at,wt,ct,vt,F,ht,tt,Ot,At,It;function bt(){Q=new bp(N),st=new xp(N,Q,t),Q.init(st),Ot=new cg(N,Q,st),et=new ag(N,Q,st),Ct=new Cp(N),_t=new Ym,Et=new lg(N,Q,et,_t,st,Ot,Ct),Ft=new Sp(_),Yt=new wp(_),re=new Ou(N,st),At=new vp(N,Q,re,st),L=new Tp(N,re,Ct,At),T=new Ip(N,L,re,Ct),F=new Lp(N,st,Et),wt=new yp(_t),X=new Xm(_,Ft,Yt,Q,st,At,wt),ot=new pg(_,_t),nt=new $m,at=new eg(Q,st),vt=new gp(_,Ft,Yt,et,T,u,l),ct=new og(_,T,st),It=new mg(N,Ct,st,et),ht=new _p(N,Q,Ct,st),tt=new Ap(N,Q,Ct,st),Ct.programs=X.programs,_.capabilities=st,_.extensions=Q,_.properties=_t,_.renderLists=nt,_.shadowMap=ct,_.state=et,_.info=Ct}bt();const St=new fg(_,N);this.xr=St,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Q.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Q.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(D,U,!1))},this.getSize=function(C){return C.set(D,U)},this.setSize=function(C,V,Y=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,U=V,e.width=Math.floor(C*q),e.height=Math.floor(V*q),Y===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(D*q,U*q).floor()},this.setDrawingBufferSize=function(C,V,Y){D=C,U=V,q=Y,e.width=Math.floor(C*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,V,Y,$){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,V,Y,$),et.viewport(w.copy(J).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(z)},this.setScissor=function(C,V,Y,$){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,V,Y,$),et.scissor(B.copy(z).multiplyScalar(q).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(C){et.setScissorTest(H=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(C=!0,V=!0,Y=!0){let $=0;if(C){let K=!1;if(A!==null){const yt=A.texture.format;K=yt===vc||yt===gc||yt===mc}if(K){const yt=A.texture.type,Rt=yt===Gn||yt===On||yt===Ro||yt===si||yt===fc||yt===pc,Bt=vt.getClearColor(),kt=vt.getClearAlpha(),Xt=Bt.r,Ht=Bt.g,Vt=Bt.b;Rt?(f[0]=Xt,f[1]=Ht,f[2]=Vt,f[3]=kt,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Xt,g[1]=Ht,g[2]=Vt,g[3]=kt,N.clearBufferiv(N.COLOR,0,g))}else $|=N.COLOR_BUFFER_BIT}V&&($|=N.DEPTH_BUFFER_BIT),Y&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),nt.dispose(),at.dispose(),_t.dispose(),Ft.dispose(),Yt.dispose(),T.dispose(),At.dispose(),It.dispose(),X.dispose(),St.dispose(),St.removeEventListener("sessionstart",Xe),St.removeEventListener("sessionend",ne),Pt&&(Pt.dispose(),Pt=null),Pe.stop()};function $t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=Ct.autoReset,V=ct.enabled,Y=ct.autoUpdate,$=ct.needsUpdate,K=ct.type;bt(),Ct.autoReset=C,ct.enabled=V,ct.autoUpdate=Y,ct.needsUpdate=$,ct.type=K}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function it(C){const V=C.target;V.removeEventListener("dispose",it),Z(V)}function Z(C){lt(C),_t.remove(C)}function lt(C){const V=_t.get(C).programs;V!==void 0&&(V.forEach(function(Y){X.releaseProgram(Y)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Y,$,K,yt){V===null&&(V=Jt);const Rt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=oh(C,V,Y,$,K);et.setMaterial($,Rt);let kt=Y.index,Xt=1;if($.wireframe===!0){if(kt=L.getWireframeAttribute(Y),kt===void 0)return;Xt=2}const Ht=Y.drawRange,Vt=Y.attributes.position;let ue=Ht.start*Xt,ze=(Ht.start+Ht.count)*Xt;yt!==null&&(ue=Math.max(ue,yt.start*Xt),ze=Math.min(ze,(yt.start+yt.count)*Xt)),kt!==null?(ue=Math.max(ue,0),ze=Math.min(ze,kt.count)):Vt!=null&&(ue=Math.max(ue,0),ze=Math.min(ze,Vt.count));const Se=ze-ue;if(Se<0||Se===1/0)return;At.setup(K,$,Bt,Y,kt);let fn,he=ht;if(kt!==null&&(fn=re.get(kt),he=tt,he.setIndex(fn)),K.isMesh)$.wireframe===!0?(et.setLineWidth($.wireframeLinewidth*Ut()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(K.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),et.setLineWidth(Zt*Ut()),K.isLineSegments?he.setMode(N.LINES):K.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else K.isPoints?he.setMode(N.POINTS):K.isSprite&&he.setMode(N.TRIANGLES);if(K.isInstancedMesh)he.renderInstances(ue,Se,K.count);else if(Y.isInstancedBufferGeometry){const Zt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_r=Math.min(Y.instanceCount,Zt);he.renderInstances(ue,Se,_r)}else he.render(ue,Se)};function Lt(C,V,Y){C.transparent===!0&&C.side===Ve&&C.forceSinglePass===!1?(C.side=Re,C.needsUpdate=!0,ys(C,V,Y),C.side=An,C.needsUpdate=!0,ys(C,V,Y),C.side=Ve):ys(C,V,Y)}this.compile=function(C,V,Y=null){Y===null&&(Y=C),m=at.get(Y),m.init(),x.push(m),Y.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),C!==Y&&C.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(_._useLegacyLights);const $=new Set;return C.traverse(function(K){const yt=K.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){const Bt=yt[Rt];Lt(Bt,Y,K),$.add(Bt)}else Lt(yt,Y,K),$.add(yt)}),x.pop(),m=null,$},this.compileAsync=function(C,V,Y=null){const $=this.compile(C,V,Y);return new Promise(K=>{function yt(){if($.forEach(function(Rt){_t.get(Rt).currentProgram.isReady()&&$.delete(Rt)}),$.size===0){K(C);return}setTimeout(yt,10)}Q.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Kt=null;function de(C){Kt&&Kt(C)}function Xe(){Pe.stop()}function ne(){Pe.start()}const Pe=new Lc;Pe.setAnimationLoop(de),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(C){Kt=C,St.setAnimationLoop(C),C===null?Pe.stop():Pe.start()},St.addEventListener("sessionstart",Xe),St.addEventListener("sessionend",ne),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(V),V=St.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,V,A),m=at.get(C,x.length),m.init(),x.push(m),Nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),dt.setFromProjectionMatrix(Nt),xt=this.localClippingEnabled,gt=wt.init(this.clippingPlanes,xt),v=nt.get(C,p.length),v.init(),p.push(v),rn(C,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(j,W),this.info.render.frame++,gt===!0&&wt.beginShadows();const Y=m.state.shadowsArray;if(ct.render(Y,C,V),gt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),vt.render(v,C),m.setupLights(_._useLegacyLights),V.isArrayCamera){const $=V.cameras;for(let K=0,yt=$.length;K<yt;K++){const Rt=$[K];Wo(v,C,Rt,Rt.viewport)}}else Wo(v,C,V);A!==null&&(Et.updateMultisampleRenderTarget(A),Et.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,V),At.resetDefaultState(),I=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function rn(C,V,Y,$){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||dt.intersectsSprite(C)){$&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Nt);const Rt=T.update(C),Bt=C.material;Bt.visible&&v.push(C,Rt,Bt,Y,zt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||dt.intersectsObject(C))){const Rt=T.update(C),Bt=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),zt.copy(Rt.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(Nt)),Array.isArray(Bt)){const kt=Rt.groups;for(let Xt=0,Ht=kt.length;Xt<Ht;Xt++){const Vt=kt[Xt],ue=Bt[Vt.materialIndex];ue&&ue.visible&&v.push(C,Rt,ue,Y,zt.z,Vt)}}else Bt.visible&&v.push(C,Rt,Bt,Y,zt.z,null)}}const yt=C.children;for(let Rt=0,Bt=yt.length;Rt<Bt;Rt++)rn(yt[Rt],V,Y,$)}function Wo(C,V,Y,$){const K=C.opaque,yt=C.transmissive,Rt=C.transparent;m.setupLightsView(Y),gt===!0&&wt.setGlobalState(_.clippingPlanes,Y),yt.length>0&&rh(K,yt,V,Y),$&&et.viewport(w.copy($)),K.length>0&&xs(K,V,Y),yt.length>0&&xs(yt,V,Y),Rt.length>0&&xs(Rt,V,Y),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function rh(C,V,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const yt=st.isWebGL2;Pt===null&&(Pt=new ai(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?ds:Gn,minFilter:us,samples:yt?4:0})),_.getDrawingBufferSize(Dt),yt?Pt.setSize(Dt.x,Dt.y):Pt.setSize(yo(Dt.x),yo(Dt.y));const Rt=_.getRenderTarget();_.setRenderTarget(Pt),_.getClearColor(O),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();const Bt=_.toneMapping;_.toneMapping=kn,xs(C,Y,$),Et.updateMultisampleRenderTarget(Pt),Et.updateRenderTargetMipmap(Pt);let kt=!1;for(let Xt=0,Ht=V.length;Xt<Ht;Xt++){const Vt=V[Xt],ue=Vt.object,ze=Vt.geometry,Se=Vt.material,fn=Vt.group;if(Se.side===Ve&&ue.layers.test($.layers)){const he=Se.side;Se.side=Re,Se.needsUpdate=!0,qo(ue,Y,$,ze,Se,fn),Se.side=he,Se.needsUpdate=!0,kt=!0}}kt===!0&&(Et.updateMultisampleRenderTarget(Pt),Et.updateRenderTargetMipmap(Pt)),_.setRenderTarget(Rt),_.setClearColor(O,R),_.toneMapping=Bt}function xs(C,V,Y){const $=V.isScene===!0?V.overrideMaterial:null;for(let K=0,yt=C.length;K<yt;K++){const Rt=C[K],Bt=Rt.object,kt=Rt.geometry,Xt=$===null?Rt.material:$,Ht=Rt.group;Bt.layers.test(Y.layers)&&qo(Bt,V,Y,kt,Xt,Ht)}}function qo(C,V,Y,$,K,yt){C.onBeforeRender(_,V,Y,$,K,yt),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(_,V,Y,$,C,yt),K.transparent===!0&&K.side===Ve&&K.forceSinglePass===!1?(K.side=Re,K.needsUpdate=!0,_.renderBufferDirect(Y,V,$,K,C,yt),K.side=An,K.needsUpdate=!0,_.renderBufferDirect(Y,V,$,K,C,yt),K.side=Ve):_.renderBufferDirect(Y,V,$,K,C,yt),C.onAfterRender(_,V,Y,$,K,yt)}function ys(C,V,Y){V.isScene!==!0&&(V=Jt);const $=_t.get(C),K=m.state.lights,yt=m.state.shadowsArray,Rt=K.state.version,Bt=X.getParameters(C,K.state,yt,V,Y),kt=X.getProgramCacheKey(Bt);let Xt=$.programs;$.environment=C.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(C.isMeshStandardMaterial?Yt:Ft).get(C.envMap||$.environment),Xt===void 0&&(C.addEventListener("dispose",it),Xt=new Map,$.programs=Xt);let Ht=Xt.get(kt);if(Ht!==void 0){if($.currentProgram===Ht&&$.lightsStateVersion===Rt)return Yo(C,Bt),Ht}else Bt.uniforms=X.getUniforms(C),C.onBuild(Y,Bt,_),C.onBeforeCompile(Bt,_),Ht=X.acquireProgram(Bt,kt),Xt.set(kt,Ht),$.uniforms=Bt.uniforms;const Vt=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=wt.uniform),Yo(C,Bt),$.needsLights=lh(C),$.lightsStateVersion=Rt,$.needsLights&&(Vt.ambientLightColor.value=K.state.ambient,Vt.lightProbe.value=K.state.probe,Vt.directionalLights.value=K.state.directional,Vt.directionalLightShadows.value=K.state.directionalShadow,Vt.spotLights.value=K.state.spot,Vt.spotLightShadows.value=K.state.spotShadow,Vt.rectAreaLights.value=K.state.rectArea,Vt.ltc_1.value=K.state.rectAreaLTC1,Vt.ltc_2.value=K.state.rectAreaLTC2,Vt.pointLights.value=K.state.point,Vt.pointLightShadows.value=K.state.pointShadow,Vt.hemisphereLights.value=K.state.hemi,Vt.directionalShadowMap.value=K.state.directionalShadowMap,Vt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Vt.spotShadowMap.value=K.state.spotShadowMap,Vt.spotLightMatrix.value=K.state.spotLightMatrix,Vt.spotLightMap.value=K.state.spotLightMap,Vt.pointShadowMap.value=K.state.pointShadowMap,Vt.pointShadowMatrix.value=K.state.pointShadowMatrix),$.currentProgram=Ht,$.uniformsList=null,Ht}function Xo(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=ir.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Yo(C,V){const Y=_t.get(C);Y.outputColorSpace=V.outputColorSpace,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function oh(C,V,Y,$,K){V.isScene!==!0&&(V=Jt),Et.resetTextureUnits();const yt=V.fog,Rt=$.isMeshStandardMaterial?V.environment:null,Bt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Cn,kt=($.isMeshStandardMaterial?Yt:Ft).get($.envMap||Rt),Xt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Vt=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,ze=!!Y.morphAttributes.color;let Se=kn;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=_.toneMapping);const fn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,he=fn!==void 0?fn.length:0,Zt=_t.get($),_r=m.state.lights;if(gt===!0&&(xt===!0||C!==S)){const ke=C===S&&$.id===I;wt.setState($,C,ke)}let fe=!1;$.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==_r.state.version||Zt.outputColorSpace!==Bt||K.isInstancedMesh&&Zt.instancing===!1||!K.isInstancedMesh&&Zt.instancing===!0||K.isSkinnedMesh&&Zt.skinning===!1||!K.isSkinnedMesh&&Zt.skinning===!0||K.isInstancedMesh&&Zt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Zt.instancingColor===!1&&K.instanceColor!==null||Zt.envMap!==kt||$.fog===!0&&Zt.fog!==yt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==wt.numPlanes||Zt.numIntersection!==wt.numIntersection)||Zt.vertexAlphas!==Xt||Zt.vertexTangents!==Ht||Zt.morphTargets!==Vt||Zt.morphNormals!==ue||Zt.morphColors!==ze||Zt.toneMapping!==Se||st.isWebGL2===!0&&Zt.morphTargetsCount!==he)&&(fe=!0):(fe=!0,Zt.__version=$.version);let Hn=Zt.currentProgram;fe===!0&&(Hn=ys($,V,K));let jo=!1,Xi=!1,xr=!1;const Le=Hn.getUniforms(),Vn=Zt.uniforms;if(et.useProgram(Hn.program)&&(jo=!0,Xi=!0,xr=!0),$.id!==I&&(I=$.id,Xi=!0),jo||S!==C){Le.setValue(N,"projectionMatrix",C.projectionMatrix),Le.setValue(N,"viewMatrix",C.matrixWorldInverse);const ke=Le.map.cameraPosition;ke!==void 0&&ke.setValue(N,zt.setFromMatrixPosition(C.matrixWorld)),st.logarithmicDepthBuffer&&Le.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Le.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Xi=!0,xr=!0)}if(K.isSkinnedMesh){Le.setOptional(N,K,"bindMatrix"),Le.setOptional(N,K,"bindMatrixInverse");const ke=K.skeleton;ke&&(st.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),Le.setValue(N,"boneTexture",ke.boneTexture,Et),Le.setValue(N,"boneTextureSize",ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yr=Y.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&st.isWebGL2===!0)&&F.update(K,Y,Hn),(Xi||Zt.receiveShadow!==K.receiveShadow)&&(Zt.receiveShadow=K.receiveShadow,Le.setValue(N,"receiveShadow",K.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Vn.envMap.value=kt,Vn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Xi&&(Le.setValue(N,"toneMappingExposure",_.toneMappingExposure),Zt.needsLights&&ah(Vn,xr),yt&&$.fog===!0&&ot.refreshFogUniforms(Vn,yt),ot.refreshMaterialUniforms(Vn,$,q,U,Pt),ir.upload(N,Xo(Zt),Vn,Et)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ir.upload(N,Xo(Zt),Vn,Et),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Le.setValue(N,"center",K.center),Le.setValue(N,"modelViewMatrix",K.modelViewMatrix),Le.setValue(N,"normalMatrix",K.normalMatrix),Le.setValue(N,"modelMatrix",K.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ke=$.uniformsGroups;for(let Sr=0,ch=ke.length;Sr<ch;Sr++)if(st.isWebGL2){const $o=ke[Sr];It.update($o,Hn),It.bind($o,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function ah(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function lh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,V,Y){_t.get(C.texture).__webglTexture=V,_t.get(C.depthTexture).__webglTexture=Y;const $=_t.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const Y=_t.get(C);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Y=0){A=C,E=V,b=Y;let $=!0,K=null,yt=!1,Rt=!1;if(C){const kt=_t.get(C);kt.__useDefaultFramebuffer!==void 0?(et.bindFramebuffer(N.FRAMEBUFFER,null),$=!1):kt.__webglFramebuffer===void 0?Et.setupRenderTarget(C):kt.__hasExternalTextures&&Et.rebindTextures(C,_t.get(C.texture).__webglTexture,_t.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Rt=!0);const Ht=_t.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ht[V])?K=Ht[V][Y]:K=Ht[V],yt=!0):st.isWebGL2&&C.samples>0&&Et.useMultisampledRTT(C)===!1?K=_t.get(C).__webglMultisampledFramebuffer:Array.isArray(Ht)?K=Ht[Y]:K=Ht,w.copy(C.viewport),B.copy(C.scissor),G=C.scissorTest}else w.copy(J).multiplyScalar(q).floor(),B.copy(z).multiplyScalar(q).floor(),G=H;if(et.bindFramebuffer(N.FRAMEBUFFER,K)&&st.drawBuffers&&$&&et.drawBuffers(C,K),et.viewport(w),et.scissor(B),et.setScissorTest(G),yt){const kt=_t.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,kt.__webglTexture,Y)}else if(Rt){const kt=_t.get(C.texture),Xt=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,kt.__webglTexture,Y||0,Xt)}I=-1},this.readRenderTargetPixels=function(C,V,Y,$,K,yt,Rt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=_t.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Rt!==void 0&&(Bt=Bt[Rt]),Bt){et.bindFramebuffer(N.FRAMEBUFFER,Bt);try{const kt=C.texture,Xt=kt.format,Ht=kt.type;if(Xt!==nn&&Ot.convert(Xt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Ht===ds&&(Q.has("EXT_color_buffer_half_float")||st.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ht!==Gn&&Ot.convert(Ht)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Bn&&(st.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-$&&Y>=0&&Y<=C.height-K&&N.readPixels(V,Y,$,K,Ot.convert(Xt),Ot.convert(Ht),yt)}finally{const kt=A!==null?_t.get(A).__webglFramebuffer:null;et.bindFramebuffer(N.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(C,V,Y=0){const $=Math.pow(2,-Y),K=Math.floor(V.image.width*$),yt=Math.floor(V.image.height*$);Et.setTexture2D(V,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,C.x,C.y,K,yt),et.unbindTexture()},this.copyTextureToTexture=function(C,V,Y,$=0){const K=V.image.width,yt=V.image.height,Rt=Ot.convert(Y.format),Bt=Ot.convert(Y.type);Et.setTexture2D(Y,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Y.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Y.unpackAlignment),V.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,C.x,C.y,K,yt,Rt,Bt,V.image.data):V.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Rt,V.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,$,C.x,C.y,Rt,Bt,V.image),$===0&&Y.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Y,$,K=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=C.max.x-C.min.x+1,Rt=C.max.y-C.min.y+1,Bt=C.max.z-C.min.z+1,kt=Ot.convert($.format),Xt=Ot.convert($.type);let Ht;if($.isData3DTexture)Et.setTexture3D($,0),Ht=N.TEXTURE_3D;else if($.isDataArrayTexture)Et.setTexture2DArray($,0),Ht=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);const Vt=N.getParameter(N.UNPACK_ROW_LENGTH),ue=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ze=N.getParameter(N.UNPACK_SKIP_PIXELS),Se=N.getParameter(N.UNPACK_SKIP_ROWS),fn=N.getParameter(N.UNPACK_SKIP_IMAGES),he=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,he.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?N.texSubImage3D(Ht,K,V.x,V.y,V.z,yt,Rt,Bt,kt,Xt,he.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ht,K,V.x,V.y,V.z,yt,Rt,Bt,kt,he.data)):N.texSubImage3D(Ht,K,V.x,V.y,V.z,yt,Rt,Bt,kt,Xt,he),N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ue),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Se),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fn),K===0&&$.generateMipmaps&&N.generateMipmap(Ht),et.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Et.setTextureCube(C,0):C.isData3DTexture?Et.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Et.setTexture2DArray(C,0):Et.setTexture2D(C,0),et.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,et.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Po?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===fr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?oi:_c}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===oi?Ee:Cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class gg extends No{}gg.prototype.isWebGL1Renderer=!0;class Oc extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class vl extends We{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ri=new ee,_l=new ee,Vs=[],xl=new hi,vg=new ee,Ji=new qt,Qi=new Hi;class _g extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),xl.copy(t.boundingBox).applyMatrix4(Ri),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ri),Qi.copy(t.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(Qi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),t.ray.intersectsSphere(Qi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ri),_l.multiplyMatrices(n,Ri),Ji.matrixWorld=_l,Ji.raycast(t,Vs);for(let o=0,a=Vs.length;o<a;o++){const l=Vs[o];l.instanceId=s,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends Vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yl=new P,Sl=new P,Ml=new ee,Jr=new Lo,Ws=new Hi;class Mo extends Te{constructor(t=new we,e=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)yl.fromBufferAttribute(e,i-1),Sl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yl.distanceTo(Sl);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=s,t.ray.intersectsSphere(Ws)===!1)return;Ml.copy(i).invert(),Jr.copy(t.ray).applyMatrix4(Ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,d=new P,u=new P,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let _=p,y=x-1;_<y;_+=f){const E=g.getX(_),b=g.getX(_+1);if(c.fromBufferAttribute(m,E),h.fromBufferAttribute(m,b),Jr.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const I=t.ray.origin.distanceTo(u);I<t.near||I>t.far||e.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,y=x-1;_<y;_+=f){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Jr.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(u);b<t.near||b>t.far||e.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class xg extends Mo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class El extends Be{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new rt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],s=[],o=[],a=new P,l=new ee;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(be(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class mr extends dn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new rt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends mr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Uo(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const qs=new P,Qr=new Uo,to=new Uo,eo=new Uo;class Sg extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(qs.subVectors(i[0],i[1]).add(i[0]),c=qs);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(qs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Qr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),to.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),eo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Qr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),to.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),eo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Qr.calc(l),to.calc(l),eo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wl(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Mg(r,t){const e=1-r;return e*e*t}function Eg(r,t){return 2*(1-r)*r*t}function wg(r,t){return r*r*t}function as(r,t,e,n){return Mg(r,t)+Eg(r,e)+wg(r,n)}function bg(r,t){const e=1-r;return e*e*e*t}function Tg(r,t){const e=1-r;return 3*e*e*r*t}function Ag(r,t){return 3*(1-r)*r*r*t}function Cg(r,t){return r*r*r*t}function ls(r,t,e,n,i){return bg(r,t)+Tg(r,e)+Ag(r,n)+Cg(r,i)}class Bc extends dn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ls(t,i.x,s.x,o.x,a.x),ls(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rg extends dn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ls(t,i.x,s.x,o.x,a.x),ls(t,i.y,s.y,o.y,a.y),ls(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zc extends dn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pg extends dn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kc extends dn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(as(t,i.x,s.x,o.x),as(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends dn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(as(t,i.x,s.x,o.x),as(t,i.y,s.y,o.y),as(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(wl(a,l.x,c.x,h.x,d.x),wl(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var Eo=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:Sg,CubicBezierCurve:Bc,CubicBezierCurve3:Rg,EllipseCurve:mr,LineCurve:zc,LineCurve3:Pg,QuadraticBezierCurve:kc,QuadraticBezierCurve3:Lg,SplineCurve:Gc});class Ig extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Eo[i.type]().fromJSON(i))}return this}}class bl extends Ig{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zc(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new kc(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new Bc(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new mr(t,e,n,i,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gr extends we{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=n/2;let p=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(f,2));function x(){const y=new P,E=new P;let b=0;const A=(e-t)/n;for(let I=0;I<=s;I++){const S=[],w=I/s,B=w*(e-t)+t;for(let G=0;G<=i;G++){const O=G/i,R=O*l+a,D=Math.sin(R),U=Math.cos(R);E.x=B*D,E.y=-w*n+m,E.z=B*U,d.push(E.x,E.y,E.z),y.set(D,A,U).normalize(),u.push(y.x,y.y,y.z),f.push(O,1-w),S.push(g++)}v.push(S)}for(let I=0;I<i;I++)for(let S=0;S<s;S++){const w=v[S][I],B=v[S+1][I],G=v[S+1][I+1],O=v[S][I+1];h.push(w,B,O),h.push(B,G,O),b+=6}c.addGroup(p,b,0),p+=b}function _(y){const E=g,b=new rt,A=new P;let I=0;const S=y===!0?t:e,w=y===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*w,0),u.push(0,w,0),f.push(.5,.5),g++;const B=g;for(let G=0;G<=i;G++){const R=G/i*l+a,D=Math.cos(R),U=Math.sin(R);A.x=S*U,A.y=m*w,A.z=S*D,d.push(A.x,A.y,A.z),u.push(0,w,0),b.x=D*.5+.5,b.y=U*.5*w+.5,f.push(b.x,b.y),g++}for(let G=0;G<i;G++){const O=E+G,R=B+G;y===!0?h.push(R,R+1,O):h.push(R+1,R,O),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends gr{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Fo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends we{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new P,y=new P,E=new P;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],y),f(e[b+2],E),l(_,y,E,x)}function l(x,_,y,E){const b=E+1,A=[];for(let I=0;I<=b;I++){A[I]=[];const S=x.clone().lerp(y,I/b),w=_.clone().lerp(y,I/b),B=b-I;for(let G=0;G<=B;G++)G===0&&I===b?A[I][G]=S:A[I][G]=S.clone().lerp(w,G/B)}for(let I=0;I<b;I++)for(let S=0;S<2*(b-I)-1;S++){const w=Math.floor(S/2);S%2===0?(u(A[I][w+1]),u(A[I+1][w]),u(A[I][w])):(u(A[I][w+1]),u(A[I+1][w+1]),u(A[I+1][w]))}}function c(x){const _=new P;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(x),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){const x=new P;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const y=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;o.push(y,1-E)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const _=o[x+0],y=o[x+2],E=o[x+4],b=Math.max(_,y,E),A=Math.min(_,y,E);b>.9&&A<.1&&(_<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),E<.2&&(o[x+4]+=1))}}function u(x){s.push(x.x,x.y,x.z)}function f(x,_){const y=x*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const x=new P,_=new P,y=new P,E=new P,b=new rt,A=new rt,I=new rt;for(let S=0,w=0;S<s.length;S+=9,w+=6){x.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),b.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),I.set(o[w+4],o[w+5]),E.copy(x).add(_).add(y).divideScalar(3);const B=m(E);v(b,w+0,x,B),v(A,w+2,_,B),v(I,w+4,y,B)}}function v(x,_,y,E){E<0&&x.x===1&&(o[_]=x.x-1),y.x===0&&y.z===0&&(o[_]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.vertices,t.indices,t.radius,t.details)}}let Dg=class extends bl{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new bl().fromJSON(i))}return this}};const Ng={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Hc(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,d,u,f;if(n&&(s=zg(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)d=r[g],u=r[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return fs(s,o,e,a,l,f,0),o}};function Hc(r,t,e,n,i){let s,o;if(i===Kg(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Tl(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Tl(s,r[s],r[s+1],o);return o&&vr(o,o.next)&&(ms(o),o=o.next),o}function li(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(vr(e,e.next)||ce(e.prev,e,e.next)===0)){if(ms(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Wg(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Fg(r,n,i,s):Ug(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),ms(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Og(li(r),t,e),fs(r,t,e,n,i,s,2)):o===2&&Bg(r,t,e,n,i,s):fs(li(r),t,e,n,i,s,1);break}}}function Ug(r){const t=r.prev,e=r,n=r.next;if(ce(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,u=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Di(i,a,s,l,o,c,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fg(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ce(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,d=s.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=wo(f,g,t,e,n),x=wo(v,m,t,e,n);let _=r.prevZ,y=r.nextZ;for(;_&&_.z>=p&&y&&y.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Di(a,h,l,d,c,u,_.x,_.y)&&ce(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Di(a,h,l,d,c,u,y.x,y.y)&&ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Di(a,h,l,d,c,u,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Di(a,h,l,d,c,u,y.x,y.y)&&ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Og(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!vr(i,s)&&Vc(i,n,n.next,s)&&ps(i,s)&&ps(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ms(n),ms(n.next),n=r=s),n=n.next}while(n!==r);return li(n)}function Bg(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yg(o,a)){let l=Wc(o,a);o=li(o,o.next),l=li(l,l.next),fs(o,t,e,n,i,s,0),fs(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function zg(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Hc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Xg(c));for(i.sort(kg),s=0;s<i.length;s++)e=Gg(i[s],e);return e}function kg(r,t){return r.x-t.x}function Gg(r,t){const e=Hg(r,t);if(!e)return t;const n=Wc(e,r);return li(n,n.next),li(e,e.next)}function Hg(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Di(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),ps(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Vg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function Vg(r,t){return ce(r.prev,r,t.prev)<0&&ce(t.next,r,r.next)<0}function Wg(r,t,e,n){let i=r;do i.z===0&&(i.z=wo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,qg(i)}function qg(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function wo(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Xg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Di(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Yg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!jg(r,t)&&(ps(r,t)&&ps(t,r)&&$g(r,t)&&(ce(r.prev,r,t.prev)||ce(r,t.prev,t))||vr(r,t)&&ce(r.prev,r,r.next)>0&&ce(t.prev,t,t.next)>0)}function ce(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function vr(r,t){return r.x===t.x&&r.y===t.y}function Vc(r,t,e,n){const i=Ys(ce(r,t,e)),s=Ys(ce(r,t,n)),o=Ys(ce(e,n,r)),a=Ys(ce(e,n,t));return!!(i!==s&&o!==a||i===0&&Xs(r,e,t)||s===0&&Xs(r,n,t)||o===0&&Xs(e,r,n)||a===0&&Xs(e,t,n))}function Xs(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ys(r){return r>0?1:r<0?-1:0}function jg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Vc(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ps(r,t){return ce(r.prev,r,r.next)<0?ce(r,t,r.next)>=0&&ce(r,r.prev,t)>=0:ce(r,t,r.prev)<0||ce(r,r.next,t)<0}function $g(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Wc(r,t){const e=new bo(r.i,r.x,r.y),n=new bo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Tl(r,t,e,n){const i=new bo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ms(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bo(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class cs{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return cs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Al(t),Cl(n,t);let o=t.length;e.forEach(Al);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Cl(n,e[l]);const a=Ng.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Al(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Cl(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class qc extends we{constructor(t=new Dg([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Zg;let _,y=!1,E,b,A,I;p&&(_=p.getSpacedPoints(h),y=!0,u=!1,E=p.computeFrenetFrames(h,!1),b=new P,A=new P,I=new P),u||(m=0,f=0,g=0,v=0);const S=a.extractPoints(c);let w=S.shape;const B=S.holes;if(!cs.isClockWise(w)){w=w.reverse();for(let N=0,ut=B.length;N<ut;N++){const Q=B[N];cs.isClockWise(Q)&&(B[N]=Q.reverse())}}const O=cs.triangulateShape(w,B),R=w;for(let N=0,ut=B.length;N<ut;N++){const Q=B[N];w=w.concat(Q)}function D(N,ut,Q){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ut,Q)}const U=w.length,q=O.length;function j(N,ut,Q){let st,et,Ct;const _t=N.x-ut.x,Et=N.y-ut.y,Ft=Q.x-N.x,Yt=Q.y-N.y,re=_t*_t+Et*Et,L=_t*Yt-Et*Ft;if(Math.abs(L)>Number.EPSILON){const T=Math.sqrt(re),X=Math.sqrt(Ft*Ft+Yt*Yt),ot=ut.x-Et/T,nt=ut.y+_t/T,at=Q.x-Yt/X,wt=Q.y+Ft/X,ct=((at-ot)*Yt-(wt-nt)*Ft)/(_t*Yt-Et*Ft);st=ot+_t*ct-N.x,et=nt+Et*ct-N.y;const vt=st*st+et*et;if(vt<=2)return new rt(st,et);Ct=Math.sqrt(vt/2)}else{let T=!1;_t>Number.EPSILON?Ft>Number.EPSILON&&(T=!0):_t<-Number.EPSILON?Ft<-Number.EPSILON&&(T=!0):Math.sign(Et)===Math.sign(Yt)&&(T=!0),T?(st=-Et,et=_t,Ct=Math.sqrt(re)):(st=_t,et=Et,Ct=Math.sqrt(re/2))}return new rt(st/Ct,et/Ct)}const W=[];for(let N=0,ut=R.length,Q=ut-1,st=N+1;N<ut;N++,Q++,st++)Q===ut&&(Q=0),st===ut&&(st=0),W[N]=j(R[N],R[Q],R[st]);const J=[];let z,H=W.concat();for(let N=0,ut=B.length;N<ut;N++){const Q=B[N];z=[];for(let st=0,et=Q.length,Ct=et-1,_t=st+1;st<et;st++,Ct++,_t++)Ct===et&&(Ct=0),_t===et&&(_t=0),z[st]=j(Q[st],Q[Ct],Q[_t]);J.push(z),H=H.concat(z)}for(let N=0;N<m;N++){const ut=N/m,Q=f*Math.cos(ut*Math.PI/2),st=g*Math.sin(ut*Math.PI/2)+v;for(let et=0,Ct=R.length;et<Ct;et++){const _t=D(R[et],W[et],st);Nt(_t.x,_t.y,-Q)}for(let et=0,Ct=B.length;et<Ct;et++){const _t=B[et];z=J[et];for(let Et=0,Ft=_t.length;Et<Ft;Et++){const Yt=D(_t[Et],z[Et],st);Nt(Yt.x,Yt.y,-Q)}}}const dt=g+v;for(let N=0;N<U;N++){const ut=u?D(w[N],H[N],dt):w[N];y?(A.copy(E.normals[0]).multiplyScalar(ut.x),b.copy(E.binormals[0]).multiplyScalar(ut.y),I.copy(_[0]).add(A).add(b),Nt(I.x,I.y,I.z)):Nt(ut.x,ut.y,0)}for(let N=1;N<=h;N++)for(let ut=0;ut<U;ut++){const Q=u?D(w[ut],H[ut],dt):w[ut];y?(A.copy(E.normals[N]).multiplyScalar(Q.x),b.copy(E.binormals[N]).multiplyScalar(Q.y),I.copy(_[N]).add(A).add(b),Nt(I.x,I.y,I.z)):Nt(Q.x,Q.y,d/h*N)}for(let N=m-1;N>=0;N--){const ut=N/m,Q=f*Math.cos(ut*Math.PI/2),st=g*Math.sin(ut*Math.PI/2)+v;for(let et=0,Ct=R.length;et<Ct;et++){const _t=D(R[et],W[et],st);Nt(_t.x,_t.y,d+Q)}for(let et=0,Ct=B.length;et<Ct;et++){const _t=B[et];z=J[et];for(let Et=0,Ft=_t.length;Et<Ft;Et++){const Yt=D(_t[Et],z[Et],st);y?Nt(Yt.x,Yt.y+_[h-1].y,_[h-1].x+Q):Nt(Yt.x,Yt.y,d+Q)}}}gt(),xt();function gt(){const N=i.length/3;if(u){let ut=0,Q=U*ut;for(let st=0;st<q;st++){const et=O[st];Dt(et[2]+Q,et[1]+Q,et[0]+Q)}ut=h+m*2,Q=U*ut;for(let st=0;st<q;st++){const et=O[st];Dt(et[0]+Q,et[1]+Q,et[2]+Q)}}else{for(let ut=0;ut<q;ut++){const Q=O[ut];Dt(Q[2],Q[1],Q[0])}for(let ut=0;ut<q;ut++){const Q=O[ut];Dt(Q[0]+U*h,Q[1]+U*h,Q[2]+U*h)}}n.addGroup(N,i.length/3-N,0)}function xt(){const N=i.length/3;let ut=0;Pt(R,ut),ut+=R.length;for(let Q=0,st=B.length;Q<st;Q++){const et=B[Q];Pt(et,ut),ut+=et.length}n.addGroup(N,i.length/3-N,1)}function Pt(N,ut){let Q=N.length;for(;--Q>=0;){const st=Q;let et=Q-1;et<0&&(et=N.length-1);for(let Ct=0,_t=h+m*2;Ct<_t;Ct++){const Et=U*Ct,Ft=U*(Ct+1),Yt=ut+st+Et,re=ut+et+Et,L=ut+et+Ft,T=ut+st+Ft;zt(Yt,re,L,T)}}}function Nt(N,ut,Q){l.push(N),l.push(ut),l.push(Q)}function Dt(N,ut,Q){Jt(N),Jt(ut),Jt(Q);const st=i.length/3,et=x.generateTopUV(n,i,st-3,st-2,st-1);Ut(et[0]),Ut(et[1]),Ut(et[2])}function zt(N,ut,Q,st){Jt(N),Jt(ut),Jt(st),Jt(ut),Jt(Q),Jt(st);const et=i.length/3,Ct=x.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);Ut(Ct[0]),Ut(Ct[1]),Ut(Ct[3]),Ut(Ct[1]),Ut(Ct[2]),Ut(Ct[3])}function Jt(N){i.push(l[N*3+0]),i.push(l[N*3+1]),i.push(l[N*3+2])}function Ut(N){s.push(N.x),s.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Eo[i.type]().fromJSON(i)),new qc(n,t.options)}}const Zg={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new rt(s,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-d),new rt(u,1-g),new rt(v,1-p)]:[new rt(a,1-l),new rt(h,1-d),new rt(f,1-g),new rt(m,1-p)]}};function Jg(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Bo extends Oo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bo(t.radius,t.detail)}}class zo extends we{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new P,g=new rt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let p=0;p<n;p++){const x=p+m,_=x,y=x+n+1,E=x+n+2,b=x+1;a.push(_,y,b),a.push(y,E,b)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qi extends we{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const b=E/e;d.x=-t*Math.cos(i+b*s)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+b*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(b+y,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const _=h[p][x+1],y=h[p][x],E=h[p+1][x],b=h[p+1][x+1];(p!==0||o>0)&&f.push(_,y,b),(p!==n-1||l<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wn extends Vi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ko extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const no=new ee,Rl=new P,Pl=new P;class Xc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rl),Pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pl),e.updateMatrixWorld(),no.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(no),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(no)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ll=new ee,ts=new P,io=new P;class Qg extends Xc{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(ts),io.copy(n.position),io.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(io),n.updateMatrixWorld(),i.makeTranslation(-ts.x,-ts.y,-ts.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}class Il extends ko{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class t0 extends Xc{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class so extends ko{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class e0 extends ko{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class To{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);class sn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new sn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],x=i[3],_=i[4],y=i[5],E=i[6],b=i[7],A=i[8];return s[0]=o*v+a*x+l*E,s[1]=o*m+a*_+l*b,s[2]=o*p+a*y+l*A,s[3]=c*v+h*x+d*E,s[4]=c*m+h*_+d*b,s[5]=c*p+h*y+d*A,s[6]=u*v+f*x+g*E,s[7]=u*m+f*_+g*b,s[8]=u*p+f*y+g*A,e}scale(t,e){e===void 0&&(e=new sn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new sn);const e=3,n=6,i=n0;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=i*l,v=s*o,m=s*a,p=s*l,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-p,x[3*0+2]=d+m,x[3*1+0]=h+p,x[3*1+1]=1-(c+g),x[3*1+2]=f-v,x[3*2+0]=d-m,x[3*2+1]=f+v,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new sn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const n0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new sn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=i0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=s0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Dl),Dl.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const i0=new M,s0=new M,Dl=new M;class oe{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Nl),c=Nl),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new oe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Ul,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ul,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const Nl=new M,Ul=[new M,new M,new M,new M,new M,new M,new M,new M];class Fl{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Yc{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class ve{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=r0,i=o0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new ve);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new ve);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new ve),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new ve(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new ve);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,v,m;return f=i*l+s*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new ve);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const r0=new M,o0=new M,a0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Mt{constructor(t){t===void 0&&(t={}),this.id=Mt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Mt.idCounter=0;Mt.types=a0;class Qt{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new ve,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Qt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Qt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(Ol),Ol.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ol=new ve;class hs extends Mt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];hs.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new M;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new M,h=new M,d=new M,u=new M,f=new M,g=new M;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let x=0;x<p;x++){const _=a?a[x]:x;c.copy(m.faceNormals[_]),n.vmult(c,c);const y=m.testSepAxis(c,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const x=m.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let x=0;x<p;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),s.vmult(h,h);const y=m.testSepAxis(h,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],f),u.cross(f,g),!g.almostZero()){g.normalize();const _=m.testSepAxis(g,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;hs.project(a,t,n,i,ro),hs.project(e,t,s,o,oo);const l=ro[0],c=ro[1],h=oo[0],d=oo[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new M,c=new M,h=new M,d=new M,u=new M,f=new M,g=new M,v=new M,m=this,p=[],x=i,_=p;let y=-1,E=Number.MAX_VALUE;for(let w=0;w<m.faces.length;w++){l.copy(m.faceNormals[w]),n.vmult(l,l);const B=l.dot(t);B<E&&(E=B,y=w)}if(y<0)return;const b=m.faces[y];b.connectedFaces=[];for(let w=0;w<m.faces.length;w++)for(let B=0;B<m.faces[w].length;B++)b.indexOf(m.faces[w][B])!==-1&&w!==y&&b.connectedFaces.indexOf(w)===-1&&b.connectedFaces.push(w);const A=b.length;for(let w=0;w<A;w++){const B=m.vertices[b[w]],G=m.vertices[b[(w+1)%A]];B.vsub(G,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(B),n.vmult(f,f),e.vadd(f,f);const O=b.connectedFaces[w];g.copy(this.faceNormals[O]);const R=this.getPlaneConstantOfFace(O);v.copy(g),n.vmult(v,v);const D=R-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,D);x.length;)x.shift();for(;_.length;)x.push(_.shift())}g.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);v.copy(g),n.vmult(v,v);const S=I-v.dot(e);for(let w=0;w<x.length;w++){let B=v.dot(x[w])+S;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=o){const G=x[w];if(B<=1e-6){const O={point:G,normal:v,depth:B};a.push(O)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new M;d.copy(c),e.push(d)}else{const d=new M;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new M;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new M;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new M;t.vsub(l,c);const h=a.dot(c),d=new M;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=l0;let l=0,c=0;const h=c0,d=t.vertices;h.setZero(),Qt.vectorToLocalFrame(n,i,e,a),Qt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const ro=[],oo=[];new M;const l0=new M,c0=new M;class hn extends Mt{constructor(t){super({type:Mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new hs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),hn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Un.set(s[o][0],s[o][1],s[o][2]),e.vmult(Un,Un),t.vadd(Un,Un),n(Un.x,Un.y,Un.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;on[0].set(s.x,s.y,s.z),on[1].set(-s.x,s.y,s.z),on[2].set(-s.x,-s.y,s.z),on[3].set(-s.x,-s.y,-s.z),on[4].set(s.x,-s.y,-s.z),on[5].set(s.x,s.y,-s.z),on[6].set(-s.x,s.y,-s.z),on[7].set(s.x,-s.y,s.z);const o=on[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=on[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Un=new M,on=[new M,new M,new M,new M,new M,new M,new M,new M],Go={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ho={AWAKE:0,SLEEPY:1,SLEEPING:2};class mt extends Yc{constructor(t){t===void 0&&(t={}),super(),this.id=mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?mt.STATIC:mt.DYNAMIC,typeof t.type==typeof mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new ve,this.initQuaternion=new ve,this.previousQuaternion=new ve,this.interpolatedQuaternion=new ve,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new sn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new sn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new oe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===mt.SLEEPING&&this.dispatchEvent(mt.wakeupEvent)}sleep(){this.sleepState=mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===mt.AWAKE&&n<i?(this.sleepState=mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(mt.sleepyEvent)):e===mt.SLEEPY&&n>i?this.wakeUp():e===mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===mt.SLEEPING||this.type===mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new ve;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=h0,o=u0,a=this.quaternion,l=this.aabb,c=d0;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=f0,i=p0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=m0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==mt.DYNAMIC)return;const n=g0,i=v0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===mt.DYNAMIC&&(this.sleepState===mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=e,i=_0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=x0;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==mt.DYNAMIC)return;const n=y0,i=S0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=M0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),hn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===mt.DYNAMIC||this.type===mt.KINEMATIC)||this.sleepState===mt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,x=l.z*v.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*x),s.y+=t*(g[3]*m+g[4]*p+g[5]*x),s.z+=t*(g[6]*m+g[7]*p+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}mt.idCounter=0;mt.COLLIDE_EVENT_NAME="collide";mt.DYNAMIC=Go.DYNAMIC;mt.STATIC=Go.STATIC;mt.KINEMATIC=Go.KINEMATIC;mt.AWAKE=Ho.AWAKE;mt.SLEEPY=Ho.SLEEPY;mt.SLEEPING=Ho.SLEEPING;mt.wakeupEvent={type:"wakeup"};mt.sleepyEvent={type:"sleepy"};mt.sleepEvent={type:"sleep"};const h0=new M,u0=new ve,d0=new oe,f0=new sn,p0=new sn;new sn;const m0=new M,g0=new M,v0=new M,_0=new M,x0=new M,y0=new M,S0=new M,M0=new M;class E0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&mt.STATIC||t.sleepState===mt.SLEEPING)&&(e.type&mt.STATIC||e.sleepState===mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=w0;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=b0,i=T0,s=A0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const w0=new M;new M;new ve;new M;const b0={keys:[]},T0=[],A0=[];new M;new M;new M;class jc extends E0{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class zi{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let $c,Kc,Zc,Jc,Qc,th,eh;const Vo={CLOSEST:1,ANY:2,ALL:4};$c=Mt.types.SPHERE;Kc=Mt.types.PLANE;Zc=Mt.types.BOX;Jc=Mt.types.CYLINDER;Qc=Mt.types.CONVEXPOLYHEDRON;th=Mt.types.HEIGHTFIELD;eh=Mt.types.TRIMESH;class ge{get[$c](){return this._intersectSphere}get[Kc](){return this._intersectPlane}get[Zc](){return this._intersectBox}get[Jc](){return this._intersectConvex}get[Qc](){return this._intersectConvex}get[th](){return this._intersectHeightfield}get[eh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ge.ANY,this.result=new zi,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ge.ANY,this.result=e.result||new zi,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Bl),ao.length=0,t.broadphase.aabbQuery(t,Bl,ao),this.intersectBodies(ao),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=C0,s=R0;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(V0(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);e.vmult(c,c);const h=new M;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new M,v=new M,m=new M;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=P0;o.from.copy(this.from),o.to.copy(this.to),Qt.pointToLocalFrame(n,e,o.from,o.from),Qt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=L0;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new oe;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),Qt.pointToWorldFrame(n,e,t.pillarOffset,js),this._intersectConvex(t.pillarConvex,e,js,i,s,zl),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),Qt.pointToWorldFrame(n,e,t.pillarOffset,js),this._intersectConvex(t.pillarConvex,e,js,i,s,zl)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=I0,g=D0;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=N0,l=kl,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<p;_++){const y=c?c[_]:_,E=h[y],b=u[y],A=e,I=n;l.copy(d[E[0]]),A.vmult(l,l),l.vadd(I,l),l.vsub(g,l),A.vmult(b,a);const S=f.dot(a);if(Math.abs(S)<this.precision)continue;const w=a.dot(l)/S;if(!(w<0)){f.scale(w,Fe),Fe.vadd(g,Fe),Qe.copy(d[E[0]]),A.vmult(Qe,Qe),I.vadd(Qe,Qe);for(let B=1;!x.shouldStop&&B<E.length-1;B++){an.copy(d[E[B]]),ln.copy(d[E[B+1]]),A.vmult(an,an),A.vmult(ln,ln),I.vadd(an,an),I.vadd(ln,ln);const G=Fe.distanceTo(g);!(ge.pointInTriangle(Fe,Qe,an,ln)||ge.pointInTriangle(Fe,an,Qe,ln))||G>m||this.reportIntersection(a,Fe,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=U0,l=G0,c=H0,h=kl,d=F0,u=O0,f=B0,g=k0,v=z0,m=t.indices;t.vertices;const p=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),Qt.vectorToLocalFrame(n,e,_,d),Qt.pointToLocalFrame(n,e,p,u),Qt.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const y=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let E=0,b=l.length;!this.result.shouldStop&&E!==b;E++){const A=l[E];t.getNormal(A,a),t.getVertex(m[A*3],Qe),Qe.vsub(u,h);const I=d.dot(a),S=a.dot(h)/I;if(S<0)continue;d.scale(S,Fe),Fe.vadd(u,Fe),t.getVertex(m[A*3+1],an),t.getVertex(m[A*3+2],ln);const w=Fe.distanceSquared(u);!(ge.pointInTriangle(Fe,an,Qe,ln)||ge.pointInTriangle(Fe,Qe,an,ln))||w>y||(Qt.vectorToWorldFrame(e,a,v),Qt.pointToWorldFrame(n,e,Fe,g),this.reportIntersection(v,g,s,i,A))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ge.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ge.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case ge.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ti),n.vsub(e,es),t.vsub(e,lo);const s=ti.dot(ti),o=ti.dot(es),a=ti.dot(lo),l=es.dot(es),c=es.dot(lo);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}ge.CLOSEST=Vo.CLOSEST;ge.ANY=Vo.ANY;ge.ALL=Vo.ALL;const Bl=new oe,ao=[],es=new M,lo=new M,C0=new M,R0=new ve,Fe=new M,Qe=new M,an=new M,ln=new M;new M;new zi;const zl={faceList:[0]},js=new M,P0=new ge,L0=[],I0=new M,D0=new M,N0=new M;new M;new M;const kl=new M,U0=new M,F0=new M,O0=new M,B0=new M,z0=new M,k0=new M;new oe;const G0=[],H0=new Qt,ti=new M,$s=new M;function V0(r,t,e){e.vsub(r,ti);const n=ti.dot(t);return t.scale(n,$s),$s.vadd(r,$s),e.distanceTo($s)}class W0{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Gl{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class vs{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=vs.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Gl,this.jacobianElementB=new Gl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Hl),a.scale(h,Vl),n.invInertiaWorldSolve.vmult(o,Wl),i.invInertiaWorldSolve.vmult(l,ql),t.multiplyVectors(Hl,Wl)+e.multiplyVectors(Vl,ql)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,Ks),c+=Ks.dot(t.rotational),l.vmult(e.rotational,Ks),c+=Ks.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=q0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}vs.idCounter=0;const Hl=new M,Vl=new M,Wl=new M,ql=new M,Ks=new M,q0=new M;class X0 extends vs{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Y0,c=j0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=$0,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const x=p.dot(g),_=this.restitution+1,y=_*u.dot(p)-_*h.dot(p)+f.dot(c)-d.dot(l),E=this.computeGiMf();return-x*e-y*n-t*E}getImpactVelocityAlongNormal(){const t=K0,e=Z0,n=J0,i=Q0,s=tv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Y0=new M,j0=new M,$0=new M,K0=new M,Z0=new M,J0=new M,Q0=new M,tv=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Xl extends vs{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=ev,o=nv,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const ev=new M,nv=new M;class _s{constructor(t,e,n){n=W0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=_s.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}_s.idCounter=0;class ki{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ki.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ki.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new ge;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class nh extends Mt{constructor(t){if(super({type:Mt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class cn{constructor(t){t===void 0&&(t={}),this.root=t.root||null,this.aabb=t.aabb?t.aabb.clone():new oe,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(t,e,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(t))return!1;const s=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(t,e,n+1))return!0;a&&(s.length=0)}return i.push(e),!0}subdivide(){const t=this.aabb,e=t.lowerBound,n=t.upperBound,i=this.children;i.push(new cn({aabb:new oe({lowerBound:new M(0,0,0)})}),new cn({aabb:new oe({lowerBound:new M(1,0,0)})}),new cn({aabb:new oe({lowerBound:new M(1,1,0)})}),new cn({aabb:new oe({lowerBound:new M(1,1,1)})}),new cn({aabb:new oe({lowerBound:new M(0,1,1)})}),new cn({aabb:new oe({lowerBound:new M(0,0,1)})}),new cn({aabb:new oe({lowerBound:new M(1,0,1)})}),new cn({aabb:new oe({lowerBound:new M(0,1,0)})})),n.vsub(e,jn),jn.scale(.5,jn);const s=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=s;const l=a.aabb.lowerBound;l.x*=jn.x,l.y*=jn.y,l.z*=jn.z,l.vadd(e,l),l.vadd(jn,a.aabb.upperBound)}}aabbQuery(t,e){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(t)&&Array.prototype.push.apply(e,i.data),Array.prototype.push.apply(n,i.children)}return e}rayQuery(t,e,n){return t.getAABB(Zs),Zs.toLocalFrame(e,Zs),this.aabbQuery(Zs,n),n}removeEmptyNodes(){for(let t=this.children.length-1;t>=0;t--)this.children[t].removeEmptyNodes(),!this.children[t].children.length&&!this.children[t].data.length&&this.children.splice(t,1)}}class iv extends cn{constructor(t,e){e===void 0&&(e={}),super({root:null,aabb:t}),this.maxDepth=typeof e.maxDepth<"u"?e.maxDepth:8}}const jn=new M,Zs=new oe;class ur extends Mt{constructor(t,e){super({type:Mt.types.TRIMESH}),this.vertices=new Float32Array(t),this.indices=new Int16Array(e),this.normals=new Float32Array(e.length),this.aabb=new oe,this.edges=null,this.scale=new M(1,1,1),this.tree=new iv,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const t=this.tree;t.reset(),t.aabb.copy(this.aabb);const e=this.scale;t.aabb.lowerBound.x*=1/e.x,t.aabb.lowerBound.y*=1/e.y,t.aabb.lowerBound.z*=1/e.z,t.aabb.upperBound.x*=1/e.x,t.aabb.upperBound.y*=1/e.y,t.aabb.upperBound.z*=1/e.z;const n=new oe,i=new M,s=new M,o=new M,a=[i,s,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),t.insert(n,l)}t.removeEmptyNodes()}getTrianglesInAABB(t,e){Js.copy(t);const n=this.scale,i=n.x,s=n.y,o=n.z,a=Js.lowerBound,l=Js.upperBound;return a.x/=i,a.y/=s,a.z/=o,l.x/=i,l.y/=s,l.z/=o,this.tree.aabbQuery(Js,e)}setScale(t){const e=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=t.x===t.y&&t.y===t.z;e&&n||this.updateNormals(),this.scale.copy(t),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const t=sv,e=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,$l),this.getVertex(o,Kl),this.getVertex(a,Zl),ur.computeNormal(Kl,$l,Zl,t),e[i]=t.x,e[i+1]=t.y,e[i+2]=t.z}}updateEdges(){const t={},e=(i,s)=>{const o=i<s?`${i}_${s}`:`${s}_${i}`;t[o]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,o=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];e(o,a),e(a,l),e(l,o)}const n=Object.keys(t);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(t,e,n){const i=this.edges[t*2+(e?1:0)];this.getVertex(i,n)}getEdgeVector(t,e){const n=rv,i=ov;this.getEdgeVertex(t,0,n),this.getEdgeVertex(t,1,i),i.vsub(n,e)}static computeNormal(t,e,n,i){e.vsub(t,jl),n.vsub(e,Yl),Yl.cross(jl,i),i.isZero()||i.normalize()}getVertex(t,e){const n=this.scale;return this._getUnscaledVertex(t,e),e.x*=n.x,e.y*=n.y,e.z*=n.z,e}_getUnscaledVertex(t,e){const n=t*3,i=this.vertices;return e.set(i[n],i[n+1],i[n+2])}getWorldVertex(t,e,n,i){return this.getVertex(t,i),Qt.pointToWorldFrame(e,n,i,i),i}getTriangleVertices(t,e,n,i){const s=t*3;this.getVertex(this.indices[s],e),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(t,e){const n=t*3;return e.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(t,e){this.computeLocalAABB($n);const n=$n.upperBound.x-$n.lowerBound.x,i=$n.upperBound.y-$n.lowerBound.y,s=$n.upperBound.z-$n.lowerBound.z;return e.set(1/12*t*(2*i*2*i+2*s*2*s),1/12*t*(2*n*2*n+2*s*2*s),1/12*t*(2*i*2*i+2*n*2*n))}computeLocalAABB(t){const e=t.lowerBound,n=t.upperBound,i=this.vertices.length;this.vertices;const s=av;this.getVertex(0,s),e.copy(s),n.copy(s);for(let o=0;o!==i;o++)this.getVertex(o,s),s.x<e.x?e.x=s.x:s.x>n.x&&(n.x=s.x),s.y<e.y?e.y=s.y:s.y>n.y&&(n.y=s.y),s.z<e.z?e.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let t=0;const e=this.vertices,n=new M;for(let i=0,s=e.length/3;i!==s;i++){this.getVertex(i,n);const o=n.lengthSquared();o>t&&(t=o)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=lv,o=cv;s.position=t,s.quaternion=e,this.aabb.toWorldFrame(s,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(t,e,n,i,s){t===void 0&&(t=1),e===void 0&&(e=.5),n===void 0&&(n=8),i===void 0&&(i=6),s===void 0&&(s=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const h=c/i*s,d=l/n*Math.PI*2,u=(t+e*Math.cos(d))*Math.cos(h),f=(t+e*Math.cos(d))*Math.sin(h),g=e*Math.sin(d);o.push(u,f,g)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const h=(i+1)*l+c-1,d=(i+1)*(l-1)+c-1,u=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(h,d,f),a.push(d,u,f)}return new ur(o,a)}}const sv=new M,Js=new oe,rv=new M,ov=new M,Yl=new M,jl=new M,$l=new M,Kl=new M,Zl=new M,$n=new oe,av=new M,lv=new Qt,cv=new oe;class hv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class uv extends hv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,g,v,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const p=fv,x=pv,_=dv;p.length=a,x.length=a,_.length=a;for(let y=0;y!==a;y++){const E=o[y];_[y]=0,x[y]=E.computeB(h),p[y]=1/E.computeC()}if(a!==0){for(let b=0;b!==c;b++){const A=l[b],I=A.vlambda,S=A.wlambda;I.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const A=o[b];d=x[b],u=p[b],m=_[b],v=A.computeGWlambda(),f=u*(d-v-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),_[b]+=f,g+=f>0?f:-f,A.addToWlambda(f)}if(g*g<s)break}for(let b=0;b!==c;b++){const A=l[b],I=A.velocity,S=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),I.vadd(A.vlambda,I),A.wlambda.vmul(A.angularFactor,A.wlambda),S.vadd(A.wlambda,S)}let y=o.length;const E=1/h;for(;y--;)o[y].multiplier=_[y]*E}return n}}const dv=[],fv=[],pv=[];class mv{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class gv extends mv{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const ie={sphereSphere:Mt.types.SPHERE,spherePlane:Mt.types.SPHERE|Mt.types.PLANE,boxBox:Mt.types.BOX|Mt.types.BOX,sphereBox:Mt.types.SPHERE|Mt.types.BOX,planeBox:Mt.types.PLANE|Mt.types.BOX,convexConvex:Mt.types.CONVEXPOLYHEDRON,sphereConvex:Mt.types.SPHERE|Mt.types.CONVEXPOLYHEDRON,planeConvex:Mt.types.PLANE|Mt.types.CONVEXPOLYHEDRON,boxConvex:Mt.types.BOX|Mt.types.CONVEXPOLYHEDRON,sphereHeightfield:Mt.types.SPHERE|Mt.types.HEIGHTFIELD,boxHeightfield:Mt.types.BOX|Mt.types.HEIGHTFIELD,convexHeightfield:Mt.types.CONVEXPOLYHEDRON|Mt.types.HEIGHTFIELD,sphereParticle:Mt.types.PARTICLE|Mt.types.SPHERE,planeParticle:Mt.types.PLANE|Mt.types.PARTICLE,boxParticle:Mt.types.BOX|Mt.types.PARTICLE,convexParticle:Mt.types.PARTICLE|Mt.types.CONVEXPOLYHEDRON,cylinderCylinder:Mt.types.CYLINDER,sphereCylinder:Mt.types.SPHERE|Mt.types.CYLINDER,planeCylinder:Mt.types.PLANE|Mt.types.CYLINDER,boxCylinder:Mt.types.BOX|Mt.types.CYLINDER,convexCylinder:Mt.types.CONVEXPOLYHEDRON|Mt.types.CYLINDER,heightfieldCylinder:Mt.types.HEIGHTFIELD|Mt.types.CYLINDER,particleCylinder:Mt.types.PARTICLE|Mt.types.CYLINDER,sphereTrimesh:Mt.types.SPHERE|Mt.types.TRIMESH,planeTrimesh:Mt.types.PLANE|Mt.types.TRIMESH};class vv{get[ie.sphereSphere](){return this.sphereSphere}get[ie.spherePlane](){return this.spherePlane}get[ie.boxBox](){return this.boxBox}get[ie.sphereBox](){return this.sphereBox}get[ie.planeBox](){return this.planeBox}get[ie.convexConvex](){return this.convexConvex}get[ie.sphereConvex](){return this.sphereConvex}get[ie.planeConvex](){return this.planeConvex}get[ie.boxConvex](){return this.boxConvex}get[ie.sphereHeightfield](){return this.sphereHeightfield}get[ie.boxHeightfield](){return this.boxHeightfield}get[ie.convexHeightfield](){return this.convexHeightfield}get[ie.sphereParticle](){return this.sphereParticle}get[ie.planeParticle](){return this.planeParticle}get[ie.boxParticle](){return this.boxParticle}get[ie.convexParticle](){return this.convexParticle}get[ie.cylinderCylinder](){return this.convexConvex}get[ie.sphereCylinder](){return this.sphereConvex}get[ie.planeCylinder](){return this.planeConvex}get[ie.boxCylinder](){return this.boxConvex}get[ie.convexCylinder](){return this.convexConvex}get[ie.heightfieldCylinder](){return this.heightfieldCylinder}get[ie.particleCylinder](){return this.particleCylinder}get[ie.sphereTrimesh](){return this.sphereTrimesh}get[ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new gv,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new X0(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new Xl(n,i,u*f),m=g.length?g.pop():new Xl(n,i,u*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Kn.setZero(),Pi.setZero(),Li.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(Kn.vadd(e.ni,Kn),Pi.vadd(e.ri,Pi),Li.vadd(e.rj,Li)):(Kn.vsub(e.ni,Kn),Pi.vadd(e.rj,Pi),Li.vadd(e.ri,Li));const o=1/t;Pi.scale(o,n.ri),Li.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Kn.normalize(),Kn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=yv,c=Sv,h=_v,d=xv;for(let u=0,f=t.length;u!==f;u++){const g=t[u],v=e[u];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&mt.KINEMATIC&&v.type&mt.STATIC||g.type&mt.STATIC&&v.type&mt.KINEMATIC||g.type&mt.KINEMATIC&&v.type&mt.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],l),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const _=g.shapes[x];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);const E=v.shapes[y];if(!(_.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+E.boundingSphereRadius)continue;let b=null;_.material&&E.material&&(b=n.getContactMaterial(_.material,E.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const A=_.type|E.type,I=this[A];if(I){let S=!1;_.type<E.type?S=I.call(this,_,E,h,d,l,c,g,v,_,E,p):S=I.call(this,E,_,d,h,c,l,v,g,_,E,p),S&&p&&(n.shapeOverlapKeeper.set(_.id,E.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Qs),u.ni.scale(u.ni.dot(Qs),Jl),Qs.vsub(Jl,u.rj),-Qs.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool,f=Yv;n.vsub(i,tr),e.getSideNormals(f,o);const g=t.radius;let v=!1;const m=$v,p=Kv,x=Zv;let _=null,y=0,E=0,b=0,A=null;for(let U=0,q=f.length;U!==q&&v===!1;U++){const j=Wv;j.copy(f[U]);const W=j.length();j.normalize();const J=tr.dot(j);if(J<W+g&&J>0){const z=qv,H=Xv;z.copy(f[(U+1)%3]),H.copy(f[(U+2)%3]);const dt=z.length(),gt=H.length();z.normalize(),H.normalize();const xt=tr.dot(z),Pt=tr.dot(H);if(xt<dt&&xt>-dt&&Pt<gt&&Pt>-gt){const Nt=Math.abs(J-W-g);if((A===null||Nt<A)&&(A=Nt,E=xt,b=Pt,_=W,m.copy(j),p.copy(z),x.copy(H),y++,d))return!0}}}if(y){v=!0;const U=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(_,m),p.scale(E,p),m.vadd(p,m),x.scale(b,x),m.vadd(x,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let I=u.get();const S=jv;for(let U=0;U!==2&&!v;U++)for(let q=0;q!==2&&!v;q++)for(let j=0;j!==2&&!v;j++)if(I.set(0,0,0),U?I.vadd(f[0],I):I.vsub(f[0],I),q?I.vadd(f[1],I):I.vsub(f[1],I),j?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;v=!0;const W=this.createContactEquation(a,l,t,e,c,h);W.ri.copy(S),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(I),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}u.release(I),I=null;const w=u.get(),B=u.get(),G=u.get(),O=u.get(),R=u.get(),D=f.length;for(let U=0;U!==D&&!v;U++)for(let q=0;q!==D&&!v;q++)if(U%3!==q%3){f[q].cross(f[U],w),w.normalize(),f[U].vadd(f[q],B),G.copy(n),G.vsub(B,G),G.vsub(i,G);const j=G.dot(w);w.scale(j,O);let W=0;for(;W===U%3||W===q%3;)W++;R.copy(n),R.vsub(O,R),R.vsub(B,R),R.vsub(i,R);const J=Math.abs(j),z=R.length();if(J<f[W].length()&&z<g){if(d)return!0;v=!0;const H=this.createContactEquation(a,l,t,e,c,h);B.vadd(O,H.rj),H.rj.copy(H.rj),R.negate(H.ni),H.ni.normalize(),H.ri.copy(H.rj),H.ri.vadd(i,H.ri),H.ri.vsub(n,H.ri),H.ri.normalize(),H.ri.scale(g,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}u.release(w,B,G,O,R)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,f){const g=d_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,f)){const v=[],m=f_;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let p=0;for(let x=0;x!==v.length;x++){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=_.ri,E=_.rj;g.negate(_.ni),v[x].normal.negate(m),m.scale(v[x].depth,m),v[x].point.vadd(m,y),E.copy(v[x].point),y.vsub(n,y),E.vsub(i,E),y.vadd(n,y),y.vsub(a.position,y),E.vadd(i,E),E.vsub(l.position,E),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,Jv);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let x=0;x!==v.length;x++){const _=v[x],y=n_;o.vmult(_,y),i.vadd(y,y);const E=e_;if(y.vsub(n,E),E.lengthSquared()<m*m){if(d)return!0;p=!0;const b=this.createContactEquation(a,l,t,e,c,h);b.ri.copy(E),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),y.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let x=0,_=g.length;x!==_&&p===!1;x++){const y=f[x],E=g[x],b=i_;o.vmult(y,b);const A=s_;o.vmult(v[E[0]],A),A.vadd(i,A);const I=r_;b.scale(-m,I),n.vadd(I,I);const S=o_;I.vsub(A,S);const w=S.dot(b),B=a_;if(n.vsub(A,B),w<0&&B.dot(b)>0){const G=[];for(let O=0,R=E.length;O!==R;O++){const D=u.get();o.vmult(v[E[O]],D),i.vadd(D,D),G.push(D)}if(Vv(G,b,n)){if(d)return!0;p=!0;const O=this.createContactEquation(a,l,t,e,c,h);b.scale(-m,O.ri),b.negate(O.ni);const R=u.get();b.scale(-w,R);const D=u.get();b.scale(-m,D),n.vsub(i,O.rj),O.rj.vadd(D,O.rj),O.rj.vadd(R,O.rj),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),u.release(R),u.release(D),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let U=0,q=G.length;U!==q;U++)u.release(G[U]);return}else for(let O=0;O!==E.length;O++){const R=u.get(),D=u.get();o.vmult(v[E[(O+1)%E.length]],R),o.vmult(v[E[(O+2)%E.length]],D),i.vadd(R,R),i.vadd(D,D);const U=Qv;D.vsub(R,U);const q=t_;U.unit(q);const j=u.get(),W=u.get();n.vsub(R,W);const J=W.dot(q);q.scale(J,j),j.vadd(R,j);const z=u.get();if(j.vsub(n,z),J>0&&J*J<U.lengthSquared()&&z.lengthSquared()<m*m){if(d)return!0;const H=this.createContactEquation(a,l,t,e,c,h);j.vsub(i,H.rj),j.vsub(n,H.ni),H.ni.normalize(),H.ni.scale(m,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(l.position,H.rj),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(let dt=0,gt=G.length;dt!==gt;dt++)u.release(G[dt]);u.release(R),u.release(D),u.release(j),u.release(z),u.release(W);return}u.release(R),u.release(D),u.release(j),u.release(z),u.release(W)}for(let O=0,R=G.length;O!==R;O++)u.release(G[O])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){const u=l_,f=c_;f.set(0,0,1),s.vmult(f,f);let g=0;const v=h_;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=u_;f.scale(f.dot(v),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=t.radius,g=e.elementSize,v=b_,m=w_;Qt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,x=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,y=Math.ceil((m.y+f)/g)+1;if(x<0||y<0||p>u.length||_>u[0].length)return;p<0&&(p=0),x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),p>=u.length&&(p=u.length-1),x>=u.length&&(x=u.length-1),y>=u[0].length&&(y=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const E=[];e.getRectMinMax(p,_,x,y,E);const b=E[0],A=E[1];if(m.z-f>A||m.z+f<b)return;const I=this.result;for(let S=p;S<x;S++)for(let w=_;w<y;w++){const B=I.length;let G=!1;if(e.getConvexTrianglePillar(S,w,!1),Qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&G||(e.getConvexTrianglePillar(S,w,!0),Qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,d)),d&&G))return!0;if(I.length-B>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=M_,m=E_,p=S_;Qt.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,y=Math.floor((p.y-g)/f)-1,E=Math.ceil((p.y+g)/f)+1;if(_<0||E<0||x>u.length||y>u[0].length)return;x<0&&(x=0),_<0&&(_=0),y<0&&(y=0),E<0&&(E=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),E>=u[0].length&&(E=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const b=[];e.getRectMinMax(x,y,_,E,b);const A=b[0],I=b[1];if(!(p.z-g>I||p.z+g<A))for(let S=x;S<_;S++)for(let w=y;w<E;w++){let B=!1;if(e.getConvexTrianglePillar(S,w,!1),Qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&B||(e.getConvexTrianglePillar(S,w,!0),Qt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,d,m,null)),d&&B))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){const u=v_;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){const u=p_;u.set(0,0,1),a.quaternion.vmult(u,u);const f=m_;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=g_;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1;const f=x_,g=y_;let v=null;const m=__;if(m.copy(i),m.vsub(n,m),s.conjugate(Ql),Ql.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,x=t.faces.length;p!==x;p++){const _=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];i.vsub(_[0],tc);const E=-y.dot(tc);if(v===null||Math.abs(E)<Math.abs(v)){if(d)return!0;v=E,u=p,f.copy(y)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,_=p.rj;x.vadd(i,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=Rv,f=Pv,g=Lv,v=Iv,m=Dv,p=Nv,x=Bv,_=Cv,y=Tv,E=zv;Qt.pointToLocalFrame(i,o,n,m);const b=t.radius;x.lowerBound.set(m.x-b,m.y-b,m.z-b),x.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(x,E);const A=Av,I=t.radius*t.radius;for(let O=0;O<E.length;O++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[E[O]*3+R],A),A.vsub(m,y),y.lengthSquared()<=I){if(_.copy(A),Qt.pointToWorldFrame(i,o,_,A),A.vsub(n,y),d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(A),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let O=0;O<E.length;O++)for(let R=0;R<3;R++){e.getVertex(e.indices[E[O]*3+R],u),e.getVertex(e.indices[E[O]*3+(R+1)%3],f),f.vsub(u,g),m.vsub(f,p);const D=p.dot(g);m.vsub(u,p);let U=p.dot(g);if(U>0&&D<0&&(m.vsub(u,p),v.copy(g),v.normalize(),U=p.dot(v),v.scale(U,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const j=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,j.ni),j.ni.normalize(),j.ni.scale(t.radius,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),Qt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,j.rj),Qt.vectorToWorldFrame(o,j.ni,j.ni),Qt.vectorToWorldFrame(o,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}const S=Uv,w=Fv,B=Ov,G=bv;for(let O=0,R=E.length;O!==R;O++){e.getTriangleVertices(E[O],S,w,B),e.getNormal(E[O],G),m.vsub(S,p);let D=p.dot(G);if(G.scale(D,p),m.vsub(p,p),D=p.distanceTo(m),ge.pointInTriangle(p,S,w,B)&&D<t.radius){if(d)return!0;let U=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),Qt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,U.rj),Qt.vectorToWorldFrame(o,U.ni,U.ni),Qt.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}E.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=new M,f=Mv;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const v=new M;v.copy(u),Qt.pointToWorldFrame(i,o,v,u);const m=Ev;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);const _=wv;f.scale(m.dot(f),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Kn=new M,Pi=new M,Li=new M,_v=new M,xv=new M,yv=new ve,Sv=new ve,Mv=new M,Ev=new M,wv=new M,bv=new M,Tv=new M;new M;const Av=new M,Cv=new M,Rv=new M,Pv=new M,Lv=new M,Iv=new M,Dv=new M,Nv=new M,Uv=new M,Fv=new M,Ov=new M,Bv=new oe,zv=[],Qs=new M,Jl=new M,kv=new M,Gv=new M,Hv=new M;function Vv(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=kv;r[(s+1)%i].vsub(o,a);const l=Gv;a.cross(t,l);const c=Hv;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const tr=new M,Wv=new M,qv=new M,Xv=new M,Yv=[new M,new M,new M,new M,new M,new M],jv=new M,$v=new M,Kv=new M,Zv=new M,Jv=new M,Qv=new M,t_=new M,e_=new M,n_=new M,i_=new M,s_=new M,r_=new M,o_=new M,a_=new M;new M;new M;const l_=new M,c_=new M,h_=new M,u_=new M,d_=new M,f_=new M,p_=new M,m_=new M,g_=new M,v_=new M,Ql=new ve,__=new M;new M;const x_=new M,tc=new M,y_=new M,S_=new M,M_=new M,E_=[0],w_=new M,b_=new M;class ec{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||nc(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||nc(e,h)}}}function nc(r,t){r.push((t&4294901760)>>16,t&65535)}const co=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class T_{constructor(){this.data={keys:[]}}get(t,e){const n=co(t,e);return this.data[n]}set(t,e,n){const i=co(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=co(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class A_ extends Yc{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new jc,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new uv,this.constraints=[],this.narrowphase=new vv(this),this.collisionMatrix=new Fl,this.collisionMatrixPrevious=new Fl,this.bodyOverlapKeeper=new ec,this.shapeOverlapKeeper=new ec,this.contactmaterials=[],this.contactMaterialTable=new T_,this.defaultMaterial=new ki("default"),this.defaultContactMaterial=new _s(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof zi?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ge.ALL,n.from=t,n.to=e,n.callback=i,ho.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ge.ANY,n.from=t,n.to=e,n.result=i,ho.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ge.CLOSEST,n.from=t,n.to=e,n.result=i,ho.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=_e.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=_e.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(_e.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=I_,i=D_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=mt.DYNAMIC;let u=-1/0;const f=this.constraints,g=L_;l.length();const v=l.x,m=l.y,p=l.z;let x=0;for(c&&(u=_e.now()),x=0;x!==s;x++){const O=o[x];if(O.type===d){const R=O.force,D=O.mass;R.x+=D*v,R.y+=D*m,R.z+=D*p}}for(let O=0,R=this.subsystems.length;O!==R;O++)this.subsystems[O].update();c&&(u=_e.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=_e.now()-u);let _=f.length;for(x=0;x!==_;x++){const O=f[x];if(!O.collideConnected)for(let R=n.length-1;R>=0;R-=1)(O.bodyA===n[R]&&O.bodyB===i[R]||O.bodyB===n[R]&&O.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(u=_e.now());const y=P_,E=e.length;for(x=0;x!==E;x++)y.push(e[x]);e.length=0;const b=this.frictionEquations.length;for(x=0;x!==b;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=_e.now()-u),c&&(u=_e.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const A=e.length;for(let O=0;O!==A;O++){const R=e[O],D=R.bi,U=R.bj,q=R.si,j=R.sj;let W;if(D.material&&U.material?W=this.getContactMaterial(D.material,U.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,D.material&&U.material&&(D.material.friction>=0&&U.material.friction>=0&&D.material.friction*U.material.friction,D.material.restitution>=0&&U.material.restitution>=0&&(R.restitution=D.material.restitution*U.material.restitution)),a.addEquation(R),D.allowSleep&&D.type===mt.DYNAMIC&&D.sleepState===mt.SLEEPING&&U.sleepState===mt.AWAKE&&U.type!==mt.STATIC){const J=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),z=U.sleepSpeedLimit**2;J>=z*2&&(D.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===mt.DYNAMIC&&U.sleepState===mt.SLEEPING&&D.sleepState===mt.AWAKE&&D.type!==mt.STATIC){const J=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),z=D.sleepSpeedLimit**2;J>=z*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,U,!0),this.collisionMatrixPrevious.get(D,U)||(ns.body=U,ns.contact=R,D.dispatchEvent(ns),ns.body=D,U.dispatchEvent(ns)),this.bodyOverlapKeeper.set(D.id,U.id),this.shapeOverlapKeeper.set(q.id,j.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=_e.now()-u,u=_e.now()),x=0;x!==s;x++){const O=o[x];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(_=f.length,x=0;x!==_;x++){const O=f[x];O.update();for(let R=0,D=O.equations.length;R!==D;R++){const U=O.equations[R];a.addEquation(U)}}a.solve(t,this),c&&(h.solve=_e.now()-u),a.removeAllEquations();const I=Math.pow;for(x=0;x!==s;x++){const O=o[x];if(O.type&d){const R=I(1-O.linearDamping,t),D=O.velocity;D.scale(R,D);const U=O.angularVelocity;if(U){const q=I(1-O.angularDamping,t);U.scale(q,U)}}}this.dispatchEvent(R_),c&&(u=_e.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,w,B);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=_e.now()-u),this.stepnumber+=1,this.dispatchEvent(C_);let G=!0;if(this.allowSleep)for(G=!1,x=0;x!==s;x++){const O=o[x];O.sleepTick(this.time),O.sleepState!==mt.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(xn,yn),t){for(let s=0,o=xn.length;s<o;s+=2)is.bodyA=this.getBodyById(xn[s]),is.bodyB=this.getBodyById(xn[s+1]),this.dispatchEvent(is);is.bodyA=is.bodyB=null}if(e){for(let s=0,o=yn.length;s<o;s+=2)ss.bodyA=this.getBodyById(yn[s]),ss.bodyB=this.getBodyById(yn[s+1]),this.dispatchEvent(ss);ss.bodyA=ss.bodyB=null}xn.length=yn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(xn,yn),n){for(let s=0,o=xn.length;s<o;s+=2){const a=this.getShapeById(xn[s]),l=this.getShapeById(xn[s+1]);Sn.shapeA=a,Sn.shapeB=l,a&&(Sn.bodyA=a.body),l&&(Sn.bodyB=l.body),this.dispatchEvent(Sn)}Sn.bodyA=Sn.bodyB=Sn.shapeA=Sn.shapeB=null}if(i){for(let s=0,o=yn.length;s<o;s+=2){const a=this.getShapeById(yn[s]),l=this.getShapeById(yn[s+1]);Mn.shapeA=a,Mn.shapeB=l,a&&(Mn.bodyA=a.body),l&&(Mn.bodyB=l.body),this.dispatchEvent(Mn)}Mn.bodyA=Mn.bodyB=Mn.shapeA=Mn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new oe;const ho=new ge,_e=globalThis.performance||{};if(!_e.now){let r=Date.now();_e.timing&&_e.timing.navigationStart&&(r=_e.timing.navigationStart),_e.now=()=>Date.now()-r}new M;const C_={type:"postStep"},R_={type:"preStep"},ns={type:mt.COLLIDE_EVENT_NAME,body:null,contact:null},P_=[],L_=[],I_=[],D_=[],xn=[],yn=[],is={type:"beginContact",bodyA:null,bodyB:null},ss={type:"endContact",bodyA:null,bodyB:null},Sn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Mn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class N_{constructor(){this.renderer=null,this.domElement=null,this.init()}init(){this.renderer=new No({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lc,this.renderer.outputColorSpace=Ee,this.renderer.toneMapping=hc,this.renderer.toneMappingExposure=1,this.domElement=this.renderer.domElement,document.body.appendChild(this.domElement)}render(t,e){this.renderer.render(t,e)}handleResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}dispose(){this.renderer.dispose(),this.domElement&&this.domElement.parentNode&&this.domElement.parentNode.removeChild(this.domElement)}}const ic={type:"change"},uo={type:"start"},sc={type:"end"},er=new Lo,rc=new Fn,U_=Math.cos(70*uu.DEG2RAD);class F_ extends ci{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",T),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ic),n.update(),s=i.NONE},this.update=function(){const F=new P,ht=new Rn().setFromUnitVectors(t.up,new P(0,1,0)),tt=ht.clone().invert(),Ot=new P,At=new Rn,It=new P,bt=2*Math.PI;return function($t=null){const k=n.object.position;F.copy(k).sub(n.target),F.applyQuaternion(ht),a.setFromVector3(F),n.autoRotate&&s===i.NONE&&B(S($t)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ft=n.minAzimuthAngle,it=n.maxAzimuthAngle;isFinite(ft)&&isFinite(it)&&(ft<-Math.PI?ft+=bt:ft>Math.PI&&(ft-=bt),it<-Math.PI?it+=bt:it>Math.PI&&(it-=bt),ft<=it?a.theta=Math.max(ft,Math.min(it,a.theta)):a.theta=a.theta>(ft+it)/2?Math.max(ft,a.theta):Math.min(it,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),F.setFromSpherical(a),F.applyQuaternion(tt),k.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Z=!1;if(n.zoomToCursor&&b){let lt=null;if(n.object.isPerspectiveCamera){const Lt=F.length();lt=W(Lt*c);const Kt=Lt-lt;n.object.position.addScaledVector(y,Kt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Lt=new P(E.x,E.y,0);Lt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Z=!0;const Kt=new P(E.x,E.y,0);Kt.unproject(n.object),n.object.position.sub(Kt).add(Lt),n.object.updateMatrixWorld(),lt=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(er.origin.copy(n.object.position),er.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(er.direction))<U_?t.lookAt(n.target):(rc.setFromNormalAndCoplanarPoint(n.object.up,n.target),er.intersectPlane(rc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Z=!0);return c=1,b=!1,Z||Ot.distanceToSquared(n.object.position)>o||8*(1-At.dot(n.object.quaternion))>o||It.distanceToSquared(n.target)>0?(n.dispatchEvent(ic),Ot.copy(n.object.position),At.copy(n.object.quaternion),It.copy(n.target),Z=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",nt),n.domElement.removeEventListener("pointerdown",_t),n.domElement.removeEventListener("pointercancel",Ft),n.domElement.removeEventListener("wheel",L),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",Ft),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",T),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new To,l=new To;let c=1;const h=new P,d=new rt,u=new rt,f=new rt,g=new rt,v=new rt,m=new rt,p=new rt,x=new rt,_=new rt,y=new P,E=new rt;let b=!1;const A=[],I={};function S(F){return F!==null?2*Math.PI/60*n.autoRotateSpeed*F:2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.zoomSpeed)}function B(F){l.theta-=F}function G(F){l.phi-=F}const O=function(){const F=new P;return function(tt,Ot){F.setFromMatrixColumn(Ot,0),F.multiplyScalar(-tt),h.add(F)}}(),R=function(){const F=new P;return function(tt,Ot){n.screenSpacePanning===!0?F.setFromMatrixColumn(Ot,1):(F.setFromMatrixColumn(Ot,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(tt),h.add(F)}}(),D=function(){const F=new P;return function(tt,Ot){const At=n.domElement;if(n.object.isPerspectiveCamera){const It=n.object.position;F.copy(It).sub(n.target);let bt=F.length();bt*=Math.tan(n.object.fov/2*Math.PI/180),O(2*tt*bt/At.clientHeight,n.object.matrix),R(2*Ot*bt/At.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(tt*(n.object.right-n.object.left)/n.object.zoom/At.clientWidth,n.object.matrix),R(Ot*(n.object.top-n.object.bottom)/n.object.zoom/At.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(F){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(F){if(!n.zoomToCursor)return;b=!0;const ht=n.domElement.getBoundingClientRect(),tt=F.clientX-ht.left,Ot=F.clientY-ht.top,At=ht.width,It=ht.height;E.x=tt/At*2-1,E.y=-(Ot/It)*2+1,y.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(F){return Math.max(n.minDistance,Math.min(n.maxDistance,F))}function J(F){d.set(F.clientX,F.clientY)}function z(F){j(F),p.set(F.clientX,F.clientY)}function H(F){g.set(F.clientX,F.clientY)}function dt(F){u.set(F.clientX,F.clientY),f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ht=n.domElement;B(2*Math.PI*f.x/ht.clientHeight),G(2*Math.PI*f.y/ht.clientHeight),d.copy(u),n.update()}function gt(F){x.set(F.clientX,F.clientY),_.subVectors(x,p),_.y>0?U(w()):_.y<0&&q(w()),p.copy(x),n.update()}function xt(F){v.set(F.clientX,F.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(v),n.update()}function Pt(F){j(F),F.deltaY<0?q(w()):F.deltaY>0&&U(w()),n.update()}function Nt(F){let ht=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),ht=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),ht=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),ht=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),ht=!0;break}ht&&(F.preventDefault(),n.update())}function Dt(){if(A.length===1)d.set(A[0].pageX,A[0].pageY);else{const F=.5*(A[0].pageX+A[1].pageX),ht=.5*(A[0].pageY+A[1].pageY);d.set(F,ht)}}function zt(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const F=.5*(A[0].pageX+A[1].pageX),ht=.5*(A[0].pageY+A[1].pageY);g.set(F,ht)}}function Jt(){const F=A[0].pageX-A[1].pageX,ht=A[0].pageY-A[1].pageY,tt=Math.sqrt(F*F+ht*ht);p.set(0,tt)}function Ut(){n.enableZoom&&Jt(),n.enablePan&&zt()}function N(){n.enableZoom&&Jt(),n.enableRotate&&Dt()}function ut(F){if(A.length==1)u.set(F.pageX,F.pageY);else{const tt=vt(F),Ot=.5*(F.pageX+tt.x),At=.5*(F.pageY+tt.y);u.set(Ot,At)}f.subVectors(u,d).multiplyScalar(n.rotateSpeed);const ht=n.domElement;B(2*Math.PI*f.x/ht.clientHeight),G(2*Math.PI*f.y/ht.clientHeight),d.copy(u)}function Q(F){if(A.length===1)v.set(F.pageX,F.pageY);else{const ht=vt(F),tt=.5*(F.pageX+ht.x),Ot=.5*(F.pageY+ht.y);v.set(tt,Ot)}m.subVectors(v,g).multiplyScalar(n.panSpeed),D(m.x,m.y),g.copy(v)}function st(F){const ht=vt(F),tt=F.pageX-ht.x,Ot=F.pageY-ht.y,At=Math.sqrt(tt*tt+Ot*Ot);x.set(0,At),_.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),U(_.y),p.copy(x)}function et(F){n.enableZoom&&st(F),n.enablePan&&Q(F)}function Ct(F){n.enableZoom&&st(F),n.enableRotate&&ut(F)}function _t(F){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",Et),n.domElement.addEventListener("pointerup",Ft)),at(F),F.pointerType==="touch"?X(F):Yt(F))}function Et(F){n.enabled!==!1&&(F.pointerType==="touch"?ot(F):re(F))}function Ft(F){wt(F),A.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",Et),n.domElement.removeEventListener("pointerup",Ft)),n.dispatchEvent(sc),s=i.NONE}function Yt(F){let ht;switch(F.button){case 0:ht=n.mouseButtons.LEFT;break;case 1:ht=n.mouseButtons.MIDDLE;break;case 2:ht=n.mouseButtons.RIGHT;break;default:ht=-1}switch(ht){case ui.DOLLY:if(n.enableZoom===!1)return;z(F),s=i.DOLLY;break;case ui.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;H(F),s=i.PAN}else{if(n.enableRotate===!1)return;J(F),s=i.ROTATE}break;case ui.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;J(F),s=i.ROTATE}else{if(n.enablePan===!1)return;H(F),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(uo)}function re(F){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;dt(F);break;case i.DOLLY:if(n.enableZoom===!1)return;gt(F);break;case i.PAN:if(n.enablePan===!1)return;xt(F);break}}function L(F){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(F.preventDefault(),n.dispatchEvent(uo),Pt(F),n.dispatchEvent(sc))}function T(F){n.enabled===!1||n.enablePan===!1||Nt(F)}function X(F){switch(ct(F),A.length){case 1:switch(n.touches.ONE){case di.ROTATE:if(n.enableRotate===!1)return;Dt(),s=i.TOUCH_ROTATE;break;case di.PAN:if(n.enablePan===!1)return;zt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ut(),s=i.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(uo)}function ot(F){switch(ct(F),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ut(F),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Q(F),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;et(F),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ct(F),n.update();break;default:s=i.NONE}}function nt(F){n.enabled!==!1&&F.preventDefault()}function at(F){A.push(F)}function wt(F){delete I[F.pointerId];for(let ht=0;ht<A.length;ht++)if(A[ht].pointerId==F.pointerId){A.splice(ht,1);return}}function ct(F){let ht=I[F.pointerId];ht===void 0&&(ht=new rt,I[F.pointerId]=ht),ht.set(F.pageX,F.pageY)}function vt(F){const ht=F.pointerId===A[0].pointerId?A[1]:A[0];return I[ht.pointerId]}n.domElement.addEventListener("contextmenu",nt),n.domElement.addEventListener("pointerdown",_t),n.domElement.addEventListener("pointercancel",Ft),n.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}class O_{constructor(t){this.camera=null,this.controls=null,this.target=null,this.domElement=t,this.followDistance=25,this.followHeight=12,this.followSmoothing=.1,this.lookAhead=5,this.isPointerLocked=!1,this.init(),this.setupPointerLock()}init(){this.camera=new Oe(75,window.innerWidth/window.innerHeight,.1,3e3),this.camera.position.set(0,20,-30),this.controls=new F_(this.camera,this.domElement),this.controls.enableDamping=!1,this.controls.enablePan=!1,this.controls.minDistance=15,this.controls.maxDistance=50,this.controls.maxPolarAngle=Math.PI*.99,this.controls.minPolarAngle=Math.PI*.01,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=0}setTarget(t){this.target=t,this.controls&&this.controls.target.copy(t.position)}update(){if(this.target){const t=this.camera.position.clone().sub(this.controls.target);this.controls.target.copy(this.target.position),this.camera.position.copy(this.target.position).add(t)}this.controls.update()}handleResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}getWorldDirection(){const t=new P;return this.camera.getWorldDirection(t),t}getWorldPosition(){return this.camera.position.clone()}setupPointerLock(){this.domElement.addEventListener("click",()=>{this.isPointerLocked||this.domElement.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement,document.body.style.cursor=this.isPointerLocked?"none":"auto",this.controls&&(this.controls.enabled=!this.isPointerLocked)}),document.addEventListener("mousemove",t=>{if(this.isPointerLocked&&this.controls){const e=t.movementX||0,n=t.movementY||0,i=new To;i.setFromVector3(this.camera.position.clone().sub(this.controls.target)),i.theta-=e*.002,i.phi+=n*.002,i.phi=Math.max(.1,Math.min(Math.PI*.45,i.phi));const s=new P;s.setFromSpherical(i),this.camera.position.copy(this.controls.target).add(s),this.camera.lookAt(this.controls.target)}}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.isPointerLocked&&document.exitPointerLock()})}}class B_{constructor(){this.lights=[]}addToScene(t){const e=new e0(4210752,.6);t.add(e),this.lights.push(e);const n=new so(16777215,1.2);n.position.set(50,100,-50),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.1,n.shadow.camera.far=500,n.shadow.camera.left=-100,n.shadow.camera.right=100,n.shadow.camera.top=100,n.shadow.camera.bottom=-100,n.shadow.bias=-1e-4,t.add(n),this.lights.push(n);const i=new so(8900331,.8);i.position.set(-30,40,30),t.add(i),this.lights.push(i);const s=new so(16739229,.4);s.position.set(0,10,-50),t.add(s),this.lights.push(s);const o=new Il(65535,.5,50);o.position.set(0,15,0),t.add(o),this.lights.push(o);const a=new Il(16711935,.5,50);a.position.set(30,15,30),t.add(a),this.lights.push(a)}updateLights(t){this.lights.length>=3&&(this.lights[3].position.copy(t),this.lights[3].position.y+=10,this.lights[3].position.z-=15)}dispose(){this.lights.forEach(t=>{t.parent&&t.parent.remove(t),t.dispose&&t.dispose()}),this.lights=[]}}class z_{constructor(){this.skyboxCache=new Map,this.currentSkybox=null,this.loadedSkyboxes=new Set,this.skyboxMesh=null,this.globalUniforms={time:{value:0},resolution:{value:new rt},cameraPosition:{value:new P}}}async loadSkybox(t){if(this.skyboxCache.has(t))return this.skyboxCache.get(t);try{const n=(await Ao(Object.assign({"../skyboxes/arctic-wind.js":()=>Tt(()=>import("./arctic-wind-BKL7AoUX.js"),[]),"../skyboxes/aurora-dance.js":()=>Tt(()=>import("./aurora-dance-CGpiBj9q.js"),[]),"../skyboxes/cave-depths.js":()=>Tt(()=>import("./cave-depths-CUAqEvi2.js"),[]),"../skyboxes/crystal-cavern.js":()=>Tt(()=>import("./crystal-cavern-60-0M-38.js"),[]),"../skyboxes/crystal-sky.js":()=>Tt(()=>import("./crystal-sky-D8AySi7w.js"),[]),"../skyboxes/desert-heat.js":()=>Tt(()=>import("./desert-heat-Bi9MF77R.js"),[]),"../skyboxes/factory-smoke.js":()=>Tt(()=>import("./factory-smoke-DpwltrVz.js"),[]),"../skyboxes/forest-canopy.js":()=>Tt(()=>import("./forest-canopy-CcWtpqwW.js"),[]),"../skyboxes/lava-storm.js":()=>Tt(()=>import("./lava-storm-J1YXxsQv.js"),[]),"../skyboxes/neon-city.js":()=>Tt(()=>import("./neon-city-1bDDQy1C.js"),[]),"../skyboxes/ocean-depths.js":()=>Tt(()=>import("./ocean-depths-D0NArKKO.js"),[]),"../skyboxes/space-deep.js":()=>Tt(()=>import("./space-deep-hvt47zW3.js"),[]),"../skyboxes/storm-clouds.js":()=>Tt(()=>import("./storm-clouds-6l7kfk3L.js"),[]),"../skyboxes/sunset-vibes.js":()=>Tt(()=>import("./sunset-vibes-Cft_xR0s.js"),[])}),`../skyboxes/${t}.js`,3)).default,i=new qe({uniforms:{...this.globalUniforms,...n.uniforms||{}},vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,depthWrite:!1,depthTest:!1});return i.userData={name:t,description:n.description||"",author:n.author||"Unknown",version:n.version||"1.0.0",tags:n.tags||[],mood:n.mood||"neutral"},this.skyboxCache.set(t,i),this.loadedSkyboxes.add(t),console.log(`Skybox loaded: ${t}`,i.userData),i}catch(e){return console.error(`Failed to load skybox: ${t}`,e),this.getFallbackSkybox()}}getFallbackSkybox(){return this.fallbackSkybox||(this.fallbackSkybox=new qe({uniforms:{topColor:{value:new Gt(4403)},bottomColor:{value:new Gt(17)}},vertexShader:`
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
        `,side:Re,depthWrite:!1})),this.fallbackSkybox}async applySkybox(t,e){this.skyboxMesh&&(e.remove(this.skyboxMesh),this.skyboxMesh.geometry.dispose(),this.skyboxMesh.material.dispose());const n=await this.loadSkybox(t),i=new qi(2e3,64,32);return this.skyboxMesh=new qt(i,n),this.skyboxMesh.renderOrder=-1,e.add(this.skyboxMesh),this.currentSkybox=t,console.log(`Applied skybox: ${t}`),this.skyboxMesh}updateUniforms(t,e,n){this.globalUniforms.time.value+=t,this.globalUniforms.cameraPosition.value.copy(e.position),this.globalUniforms.resolution.value.copy(n);for(const i of this.skyboxCache.values())i.uniforms&&Object.keys(this.globalUniforms).forEach(s=>{i.uniforms[s]&&(i.uniforms[s].value=this.globalUniforms[s].value)})}getSkyboxInfo(t){const e=this.skyboxCache.get(t);return e?e.userData:null}getAvailableSkyboxes(){return Array.from(this.loadedSkyboxes)}async preloadSkyboxes(t){const e=t.map(n=>this.loadSkybox(n));await Promise.all(e),console.log(`Preloaded ${t.length} skyboxes`)}cleanup(){for(const[t,e]of this.skyboxCache)e.dispose();this.skyboxCache.clear(),this.loadedSkyboxes.clear(),this.skyboxMesh&&(this.skyboxMesh.geometry.dispose(),this.skyboxMesh.material.dispose())}getAvailableSkyboxList(){return[{name:"sunset-vibes",description:"Bright sunset colors",mood:"energetic"},{name:"space-deep",description:"Deep space starfield",mood:"mysterious"},{name:"neon-city",description:"Cyberpunk city lights",mood:"futuristic"},{name:"aurora-dance",description:"Dancing aurora borealis",mood:"magical"},{name:"crystal-sky",description:"Crystalline ice atmosphere",mood:"cold"},{name:"lava-storm",description:"Volcanic atmosphere",mood:"intense"}]}}class k_{constructor(){this.skyboxManager=new z_,this.currentSkybox="sunset-vibes"}async init(t,e="sunset-vibes"){await this.setSkybox(e,t)}async setSkybox(t,e){this.currentSkybox=t,await this.skyboxManager.applySkybox(t,e)}update(t,e=null,n=null){e&&n?this.skyboxManager.updateUniforms(.016666666666666666,e,n):this.skyboxManager.globalUniforms.time.value=t*.001}getAvailableSkyboxes(){return this.skyboxManager.getAvailableSkyboxList()}addToScene(t){}dispose(){this.skyboxManager&&this.skyboxManager.cleanup()}}class G_{constructor(){this.world=null,this.materials=new Map,this.init()}init(){this.world=new A_,this.world.gravity.set(0,-9.82,0),this.world.broadphase=new jc,this.world.solver.iterations=5,this.world.defaultContactMaterial.friction=.3,this.world.solver.tolerance=.1,this.world.quatNormalizeSkip=0,this.world.quatNormalizeFast=!1,this.setupMaterials()}setupMaterials(){const t=new ki("trackMaterial");this.materials.set("track",t);const e=new ki("ballMaterial");this.materials.set("ball",e);const n=new _s(t,e,{friction:.3,restitution:0});this.world.addContactMaterial(n)}getMaterial(t){return this.materials.get(t)||this.materials.get("track")}step(t=1/60){this.world.step(.016666666666666666,t,3)}addBody(t){this.world.addBody(t)}removeBody(t){this.world.removeBody(t)}raycast(t,e,n={}){const i=new zi;return this.world.raycastClosest(t,e,n,i),i}dispose(){for(;this.world.bodies.length>0;)this.world.removeBody(this.world.bodies[0]);this.materials.clear(),this.world=null}}class H_{constructor(t,e){this.physicsWorld=t,this.scene=e,this.body=null,this.radius=1,this.mass=5,this.mesh=null,this.material=null,this.spawnPosition=new M(0,5,0),this.isGroundedFlag=!1,this.lastJumpTime=0,this.currentLevel=1,this.trackMinY=-200,this.lastBoostTime=0,this.isBoostActive=!1,this.boostDuration=3,this.boostStartTime=0,this.onFallOff=null,this.JUMP_VELOCITY=8,this.JUMP_COOLDOWN=.3,this.ACCELERATION=30,this.MAX_SPEED=999,this.BOOST_COOLDOWN=8,this.BOOST_MULTIPLIER=4,this.BOOST_ACCELERATION=80}init(){this.createPhysicsBody(),this.createVisualMesh(),this.setupContactListeners()}createPhysicsBody(){const t=new nh(this.radius);this.body=new mt({mass:this.mass,material:this.physicsWorld.getMaterial("ball")}),this.body.addShape(t),this.body.position.copy(this.spawnPosition),this.body.linearDamping=.1,this.physicsWorld.addBody(this.body)}createVisualMesh(){const t=new qi(this.radius,64,64),e=`
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
    `;this.material=new qe({vertexShader:e,fragmentShader:n,uniforms:{time:{value:0},color:{value:new Gt(4491519)},speed:{value:0},isBoost:{value:!1}}}),this.mesh=new qt(t,this.material),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.userData.velocity=new P,this.scene.add(this.mesh)}setupContactListeners(){this.body.addEventListener("collide",t=>{const e=t.body;if(e.userData)if(e.userData.isBouncePad)this.body.velocity.y=Math.max(this.body.velocity.y,25),console.log("Hit bounce pad! Applying upward force:",25);else if(e.userData.isSpeedPad){const n=new M(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z),i=n.length();if(i>.1){n.normalize();const s=Math.max(i*1.5,40);n.scale(s,n),this.body.velocity.set(n.x,n.y,n.z)}else this.body.velocity.z+=40;console.log("Hit speed pad! Speed boost applied")}else e.userData.isBoostPowerup&&!e.userData.collected&&(e.userData.collected=!0,e.userData.meshes&&e.userData.meshes.forEach(n=>{n.visible=!1}),this.lastBoostTime=0,this.isBoostActive||this.startBoost(),console.log("Collected boost powerup! Cooldown reset"))})}isGrounded(){const t=new M(this.body.position.x,this.body.position.y,this.body.position.z),e=new M(this.body.position.x,this.body.position.y-(this.radius+1.2),this.body.position.z),n=new zi;this.physicsWorld.world.raycastClosest(t,e,{},n);const i=n.hasHit&&n.body&&n.body.mass===0&&n.distance<=this.radius+1,s=Math.abs(this.body.velocity.y)<2;return this.isGroundedFlag=i||s&&n.hasHit&&n.distance<=this.radius+.8,this.isGroundedFlag}update(){this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.mesh.userData.velocity.set(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z),this.material.uniforms&&(this.material.uniforms.time.value=performance.now()*.001,this.material.uniforms.speed.value=this.getSpeed(),this.material.uniforms.isBoost.value=this.isBoostActive);const t=performance.now()/1e3;this.isBoostActive&&t-this.boostStartTime>this.boostDuration&&this.endBoost();const e=this.trackMinY-50;this.body.position.y<e&&(console.log(`Ball fell off track at y: ${this.body.position.y}, threshold: ${e}`),this.reset(),this.onFallOff&&this.onFallOff())}setPosition(t){this.spawnPosition.copy(t),this.body.position.copy(t),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.mesh.position.copy(t)}setLevel(t){this.currentLevel=t}setTrackBounds(t){this.trackMinY=t,console.log(`Track bounds set - minimum Y: ${t}, fall threshold: ${t-50}`)}reset(){console.log("Ball reset to spawn position:",this.spawnPosition),this.setPosition(this.spawnPosition),this.lastBoostTime=0,this.isBoostActive=!1,this.endBoost()}getPosition(){return this.body.position.clone()}getSpeed(){return this.body.velocity.length()}startBoost(){const t=performance.now()/1e3;if(!this.isBoostActive&&t-this.lastBoostTime>this.BOOST_COOLDOWN){this.isBoostActive=!0,this.boostStartTime=t,this.lastBoostTime=t;const e=new M(this.body.velocity.x,this.body.velocity.y,this.body.velocity.z),n=e.length();return n>.1?(e.normalize(),e.scale(n*this.BOOST_MULTIPLIER,e),this.body.velocity.set(e.x,e.y,e.z)):this.body.velocity.set(0,0,50),console.log("Boost activated! Speed multiplied by",this.BOOST_MULTIPLIER),!0}return!1}endBoost(){this.isBoostActive=!1,console.log("Boost ended")}getBoostCooldownRemaining(){const e=performance.now()/1e3-this.lastBoostTime;return Math.max(0,this.BOOST_COOLDOWN-e)}dispose(){this.body&&this.physicsWorld.removeBody(this.body),this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.material.dispose())}}function V_(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<r.length;++h){const d=r[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<r.length;++u){const f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(const h in s){const d=oc(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const g=oc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function oc(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.array.length}const o=new t(s);let a=0;for(let c=0;c<r.length;++c)o.set(r[c].array,a),a+=r[c].array.length;const l=new We(o,e,n);return i!==void 0&&(l.gpuType=i),l}class W_{constructor(){this.shaderCache=new Map,this.currentShader=null,this.loadedShaders=new Set,this.globalUniforms={time:{value:0},resolution:{value:new rt},cameraPosition:{value:new P},lightDirection:{value:new P(1,1,1).normalize()}}}async loadShader(t){if(this.shaderCache.has(t))return this.shaderCache.get(t);try{const n=(await Ao(Object.assign({"../shaders/cloud-surface.js":()=>Tt(()=>import("./cloud-surface-Ca2hRkrU.js"),[]),"../shaders/crystal-surface.js":()=>Tt(()=>import("./crystal-surface-Ck_7mlnR.js"),[]),"../shaders/energy-pulse.js":()=>Tt(()=>import("./energy-pulse-hsBxgfsw.js"),[]),"../shaders/forest-floor.js":()=>Tt(()=>import("./forest-floor-DKEgo-aK.js"),[]),"../shaders/ice-surface.js":()=>Tt(()=>import("./ice-surface-Bt7-dsI0.js"),[]),"../shaders/lava-flow.js":()=>Tt(()=>import("./lava-flow-HZC8D6Pp.js"),[]),"../shaders/matrix-rain.js":()=>Tt(()=>import("./matrix-rain-DBm2K5EH.js"),[]),"../shaders/metal-chrome.js":()=>Tt(()=>import("./metal-chrome-BLRnX3qU.js"),[]),"../shaders/ocean-waves.js":()=>Tt(()=>import("./ocean-waves-Bp9nJbTC.js"),[]),"../shaders/rainbow-flow.js":()=>Tt(()=>import("./rainbow-flow-CsUtk9Bs.js"),[]),"../shaders/sand-dunes.js":()=>Tt(()=>import("./sand-dunes-DaYzKOG6.js"),[]),"../shaders/storm-electric.js":()=>Tt(()=>import("./storm-electric-P4EseZJZ.js"),[]),"../shaders/tech-grid.js":()=>Tt(()=>import("./tech-grid-CDIcPIdI.js"),[])}),`../shaders/${t}.js`,3)).default,i=new qe({uniforms:{...this.globalUniforms,...n.uniforms||{}},vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,transparent:n.transparent!==!1,side:n.side||An,blending:n.blending||ii});return i.userData={name:t,description:n.description||"",author:n.author||"Unknown",version:n.version||"1.0.0",tags:n.tags||[],performance:n.performance||"medium"},this.shaderCache.set(t,i),this.loadedShaders.add(t),console.log(`Shader loaded: ${t}`,i.userData),i}catch(e){return console.error(`Failed to load shader: ${t}`,e),this.getFallbackMaterial()}}getFallbackMaterial(){return this.fallbackMaterial||(this.fallbackMaterial=new wn({color:65535,metalness:.3,roughness:.7})),this.fallbackMaterial}async applyShader(t,e){const n=await this.loadShader(t);return new qt(e,n)}updateUniforms(t,e,n){this.globalUniforms.time.value+=t,this.globalUniforms.cameraPosition.value.copy(e.position),this.globalUniforms.resolution.value.copy(n);for(const i of this.shaderCache.values())i.uniforms&&Object.keys(this.globalUniforms).forEach(s=>{i.uniforms[s]&&(i.uniforms[s].value=this.globalUniforms[s].value)})}getShaderInfo(t){const e=this.shaderCache.get(t);return e?e.userData:null}getAvailableShaders(){return Array.from(this.loadedShaders)}async preloadShaders(t){const e=t.map(n=>this.loadShader(n));await Promise.all(e),console.log(`Preloaded ${t.length} shaders`)}cleanup(){for(const[t,e]of this.shaderCache)e.dispose();this.shaderCache.clear(),this.loadedShaders.clear()}async cloneShader(t){return(await this.loadShader(t)).clone()}}class q_{constructor(t,e){this.physicsWorld=t,this.scene=e,this.trackMeshes=[],this.trackBodies=[],this.segments=[],this.SEGMENT_LENGTH=6,this.TRACK_THICKNESS=.6,this.DEFAULT_WIDTH=10,this.WALL_HEIGHT=2,this.WALL_THICKNESS=.4,this.shaderManager=new W_,this.currentShader="rainbow-flow",this.geometryCache=new Map,this.sharedMaterial=new wn({vertexColors:!0,roughness:.8,metalness:.1}),this.wallMaterial=new wn({color:3355443,roughness:.9,metalness:.1}),this.performanceStats={drawCallsBefore:0,drawCallsAfter:0,meshCountBefore:0,meshCountAfter:0,trianglesBefore:0,trianglesAfter:0,geometryCacheHits:0,materialCacheHits:0,memoryBefore:0,memoryAfter:0},this.geometryCache=new Map,this.materialCache=new Map,this.maxCacheSize=100,this.cacheStats={hits:0,misses:0},this.instancedWalls=null,this.wallInstanceCount=0,this.materials={track:this.physicsWorld.getMaterial("track")},this.createTextures(),this.createSharedMaterials()}createTextures(){this.checkeredTexture=this.createCheckeredTexture(),this.trackTexture=this.createTrackTexture()}getCachedGeometry(t,e=this.DEFAULT_WIDTH){const n=`${t}_${e}`;if(!this.geometryCache.has(n)){let i;switch(t){case"track":i=new me(e,this.TRACK_THICKNESS,this.SEGMENT_LENGTH);break;case"wall":i=new me(this.WALL_THICKNESS,this.WALL_HEIGHT,this.SEGMENT_LENGTH);break;case"platform":i=new me(e+6,this.TRACK_THICKNESS*2,this.SEGMENT_LENGTH*2);break;default:i=new me(e,this.TRACK_THICKNESS,this.SEGMENT_LENGTH)}this.geometryCache.set(n,i)}return this.geometryCache.get(n)}createSharedMaterials(){this.sharedTrackMaterial=new wn({map:this.trackTexture,vertexColors:!0,roughness:.8,metalness:.1}),this.sharedWallMaterial=new wn({color:3355443}),console.log("📦 Created shared materials for optimization")}createCheckeredTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");for(let s=0;s<8;s++)for(let o=0;o<8;o++)n.fillStyle=(o+s)%2===0?"#ffffff":"#000000",n.fillRect(o*64/8,s*64/8,64/8,64/8);const i=new El(e);return i.wrapS=ei,i.wrapT=ei,i.repeat.set(1,1),i}createTrackTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#2a2a2a",n.fillRect(0,0,256,256);const i=n.getImageData(0,0,256,256),s=i.data;for(let a=0;a<s.length;a+=4){const l=(Math.random()-.5)*30;s[a]+=l,s[a+1]+=l,s[a+2]+=l}n.putImageData(i,0,0);const o=new El(e);return o.wrapS=ei,o.wrapT=ei,o.repeat.set(4,4),o}async buildTrack(t,e="segment"){console.log("🏁 Building optimized track from level data..."),this.capturePerformanceStatsBefore(),this.clearTrack(),t.shader&&await this.setShader(t.shader),t.skybox&&this.scene&&(this.scene.children.find(s=>s.userData&&s.userData.type==="skybox"),console.log(`Track requesting skybox: ${t.skybox}`));const n=t.generationStrategy||e;let i;if(n==="segment"||t.generateTrack)this.segments=this.generateSegments(t),i=await this.buildOptimizedTrackMeshes();else{const{TrackGenerationFactory:s}=await Tt(async()=>{const{TrackGenerationFactory:l}=await import("./TrackGenerationStrategies-dI2q0pIh.js");return{TrackGenerationFactory:l}},[]),a=s.createStrategy(n,this).generate(t);this.trackMeshes=a.meshes||[],this.trackBodies=a.bodies||[],i={startPlane:a.startPlane||null,finishPlane:a.finishPlane||null,startPosition:a.startPosition||new P(0,5,0),checkpoints:a.checkpoints||[],bounds:a.bounds||{minY:-200,maxY:50}}}return this.capturePerformanceStatsAfter(),console.log(`🏁 Optimized track built${this.segments.length?` with ${this.segments.length} segments`:""}`),this.logPerformanceImprovement(),i}capturePerformanceStatsBefore(){this.performanceStats.meshCountBefore=this.scene.children.filter(t=>t instanceof qt).length,performance.memory&&(this.performanceStats.memoryBefore=performance.memory.usedJSHeapSize),this.cacheStats={hits:0,misses:0}}capturePerformanceStatsAfter(){this.performanceStats.meshCountAfter=this.scene.children.filter(t=>t instanceof qt).length,performance.memory&&(this.performanceStats.memoryAfter=performance.memory.usedJSHeapSize),this.performanceStats.geometryCacheHits=this.cacheStats.hits,this.performanceStats.materialCacheHits=this.materialCache.size}generateSegments(t){const e=[];let n=new P(0,5,0),i=0,s=0,o=0;const a=(c={})=>{if(c.lateralShift){const v=this.getOrientation(i,s,o),m=new P(1,0,0).applyQuaternion(v);n.add(m.multiplyScalar(c.lateralShift));return}if(c.customPosition){const v=c.customOrientation||this.getOrientation(i,s,o),m=c.customPosition.clone();let p;c.lanes?p=c.lanes.map(x=>Object.assign({},x)):p=[{offset:0,width:this.DEFAULT_WIDTH,isBoost:!1}],e.push({center:m,orientation:v.clone(),lanes:p,type:c.type||"box",curve:c.curve||null,tubularSegments:c.tubularSegments||32,isGap:c.isGap||!1,isStartLine:c.isStartLine||!1,isFinishLine:c.isFinishLine||!1,isBouncePad:c.isBouncePad||!1,isBoost:c.isBoost||!1,isBoostPowerup:c.isBoostPowerup||!1}),c.nextPosition&&n.copy(c.nextPosition),c.setYaw!==void 0&&(i=c.setYaw),c.setPitch!==void 0&&(s=c.setPitch),c.setRoll!==void 0&&(o=c.setRoll);return}const h=this.getOrientation(i,s,o),d=new P(0,0,1).applyQuaternion(h).clone(),u=n.clone().add(d.clone().multiplyScalar(this.SEGMENT_LENGTH)),f=n.clone().add(u).multiplyScalar(.5);let g;c.lanes?g=c.lanes.map(v=>Object.assign({},v)):g=[{offset:0,width:this.DEFAULT_WIDTH,isBoost:!1}],e.push({center:f,orientation:h.clone(),lanes:g,type:c.type||"box",curve:c.curve||null,tubularSegments:c.tubularSegments||32,isGap:c.isGap||!1,isStartLine:c.isStartLine||!1,isFinishLine:c.isFinishLine||!1,isBouncePad:c.isBouncePad||!1,isBoost:c.isBoost||!1,isBoostPowerup:c.isBoostPowerup||!1}),i+=c.yawDelta||0,s+=c.pitchDelta||0,o+=c.rollDelta||0,n.copy(u)},l=(c,h=15)=>{console.log("Building Hot Wheels loop with separate entry/exit lanes");const d=n.clone(),u=i,f=s,g=o,v=this.DEFAULT_WIDTH*.6,m=d.z+c*1.5,p=d.y+c,x=new P(d.x,p,m),_=5,y=Math.PI*.15;for(let G=0;G<_;G++){const O=(G+1)/_,R=O*O*(3-2*O),D=v*Math.sin(y*R),U=h*O,q=c*.3*R,j=Math.PI*.25*R,W=new P(d.x+D,d.y+q,d.z+U),J=u+y*R,z=f+j;a({customPosition:W,customOrientation:this.getOrientation(J,z,g),setYaw:J,setPitch:z})}const E=Math.PI*1.25,b=Math.PI*1.75,A=20;for(let G=0;G<=A;G++){const O=G/A,R=E-Math.PI*1.5*O,D=x.x+v*(1-O*2),U=x.y-c*Math.cos(R),q=x.z-c*Math.sin(R),j=f+R-Math.PI/2;a({customPosition:new P(D,U,q),customOrientation:this.getOrientation(u,j,g),setPitch:j})}const I=b,S=x.x-v,w=x.y-c*Math.cos(I),B=x.z-c*Math.sin(I);n.set(S,w,B),s=f+I-Math.PI/2;for(let G=0;G<_;G++){const O=(G+1)/_,R=O*O*(3-2*O),D=v*(1-R),U=h*O,q=w-(w-d.y)*R,j=s-(s-f)*R,W=new P(d.x-D,q,B+U);a({customPosition:W,customOrientation:this.getOrientation(u,j,g),setPitch:j})}s=f,i=u,n.y=d.y};return t.generateTrack(a,l),e}async buildOptimizedTrackMeshes(){const t=this.generateRainbowColors();let e=null,n=null,i=new P(0,5,0),s=1/0,o=-1/0;const a=[],l=[],c=[];return this.segments.forEach((h,d)=>{h.center&&(s=Math.min(s,h.center.y),o=Math.max(o,h.center.y));const u=t[d%t.length];h.lanes.forEach(f=>{if(!h.isGap){if(h.type==="curve"&&h.curve)l.push({segment:h,lane:f,baseColor:u,index:d});else if(a.push({segment:h,lane:f,baseColor:u,index:d}),h.lanes.length===1){const g=new P(1,0,0).applyQuaternion(h.orientation),v=h.center.clone().add(g.clone().multiplyScalar(f.offset)),m=v.clone().add(g.clone().multiplyScalar(-(f.width/2+this.WALL_THICKNESS/2)));m.y+=this.WALL_HEIGHT/2+this.TRACK_THICKNESS/2;const p=v.clone().add(g.clone().multiplyScalar(f.width/2+this.WALL_THICKNESS/2));p.y+=this.WALL_HEIGHT/2+this.TRACK_THICKNESS/2,c.push({position:m,orientation:h.orientation},{position:p,orientation:h.orientation})}}}),h.isStartLine&&(e=this.buildStartFinishLine(h,!0),i=this.calculateSpawnPosition(h)),h.isFinishLine&&(n=this.buildStartFinishLine(h,!1),console.log("Built finish plane:",n)),h.isBouncePad&&this.buildBouncePad(h),h.isBoost&&this.buildBoostSection(h),h.isBoostPowerup&&this.buildBoostPowerup(h)}),await this.buildMergedBoxSegments(a),l.forEach(({segment:h,lane:d,baseColor:u})=>{this.buildCurvedTrackLane(h,d,u)}),this.buildInstancedWalls(c),console.log(`📊 Track Y bounds - Min: ${s}, Max: ${o}, Total drop: ${o-s}`),console.log(`🎯 Built ${a.length} box segments, ${l.length} curve segments, ${c.length} walls`),{startPlane:e,finishPlane:n,startPosition:i,checkpoints:[],bounds:{minY:s===1/0?-200:s,maxY:o===-1/0?50:o}}}buildCurvedTrackLane(t,e,n){const i=t.curve,s=t.tubularSegments||32,o=e.width||this.DEFAULT_WIDTH,a=i.computeFrenetFrames(s,!1),l=new we,c=[],h=[],d=[];for(let y=0;y<=s;y++){const E=y/s,b=i.getPoint(E),A=a.normals[y],I=a.binormals[y],S=o/2,w=this.TRACK_THICKNESS/2;c.push(b.x-I.x*S-A.x*w,b.y-I.y*S-A.y*w,b.z-I.z*S-A.z*w),c.push(b.x+I.x*S-A.x*w,b.y+I.y*S-A.y*w,b.z+I.z*S-A.z*w),c.push(b.x+I.x*S+A.x*w,b.y+I.y*S+A.y*w,b.z+I.z*S+A.z*w),c.push(b.x-I.x*S+A.x*w,b.y-I.y*S+A.y*w,b.z-I.z*S+A.z*w);const B=E;d.push(0,B,1,B,1,B,0,B)}for(let y=0;y<s;y++){const E=y*4,b=(y+1)*4;h.push(E+3,E+2,b+3),h.push(b+3,E+2,b+2),h.push(E,b,E+1),h.push(E+1,b,b+1),h.push(E,E+3,b),h.push(b,E+3,b+3),h.push(E+1,b+1,E+2),h.push(E+2,b+1,b+2)}l.setAttribute("position",new le(c,3)),l.setAttribute("uv",new le(d,2)),l.setIndex(h),l.computeVertexNormals();const u=n.getHex(),f=new wn({color:u,map:this.trackTexture,roughness:.8,metalness:.1}),g=new qt(l,f);g.castShadow=!0,g.receiveShadow=!0,this.scene.add(g),this.trackMeshes.push(g);const v=[],m=[],p=l.attributes.position.array;for(let y=0;y<p.length;y+=3)v.push(p[y],p[y+1],p[y+2]);if(l.index){const y=l.index.array;for(let E=0;E<y.length;E++)m.push(y[E])}else for(let y=0;y<p.length/3;y++)m.push(y);const x=new ur(new Float32Array(v),new Uint16Array(m)),_=new mt({mass:0,material:this.materials.track,shape:x});this.physicsWorld.addBody(_),this.trackBodies.push(_)}async buildMergedBoxSegments(t){if(t.length===0)return;console.log(`🔧 Building ${t.length} box segments with geometry merging...`);const e=20,n=[];for(let i=0;i<t.length;i+=e)n.push(t.slice(i,i+e));for(let i=0;i<n.length;i++){const s=n[i],o=[];if(s.forEach(({segment:a,lane:l,baseColor:c})=>{const h=new P(1,0,0).applyQuaternion(a.orientation),d=a.center.clone().add(h.clone().multiplyScalar(l.offset)),u=`box_${l.width}_${this.TRACK_THICKNESS}_${this.SEGMENT_LENGTH}`,g=this.getOrCreateGeometry(u,()=>new me(l.width,this.TRACK_THICKNESS,this.SEGMENT_LENGTH)).clone(),v=new ee;v.compose(d,a.orientation,new P(1,1,1)),g.applyMatrix4(v);const m=g.attributes.position.count,p=new Float32Array(m*3);for(let y=0;y<m;y++){const E=y*3;p[E]=c.r,p[E+1]=c.g,p[E+2]=c.b}g.setAttribute("color",new We(p,3)),o.push(g);const x=new hn(new M(l.width/2,this.TRACK_THICKNESS/2,this.SEGMENT_LENGTH/2)),_=new mt({mass:0,material:this.materials.track});_.addShape(x),_.position.copy(d),_.quaternion.copy(a.orientation),this.physicsWorld.addBody(_),this.trackBodies.push(_)}),o.length>0){const a=V_(o),l=await this.applyTrackShader(a);l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.trackMeshes.push(l),o.forEach(c=>c.dispose()),console.log(`✅ Merged chunk ${i+1}/${n.length} with ${s.length} segments`)}}}buildInstancedWalls(t){if(t.length===0)return;console.log(`🧱 Building ${t.length} walls with InstancedMesh...`);const e=this.getOrCreateGeometry(`wall_${this.WALL_THICKNESS}_${this.WALL_HEIGHT}_${this.SEGMENT_LENGTH}`,()=>new me(this.WALL_THICKNESS,this.WALL_HEIGHT,this.SEGMENT_LENGTH));this.instancedWalls=new _g(e,this.sharedWallMaterial,t.length),this.instancedWalls.castShadow=!0,this.instancedWalls.receiveShadow=!0,t.forEach((n,i)=>{const s=new ee;s.compose(n.position,n.orientation,new P(1,1,1)),this.instancedWalls.setMatrixAt(i,s);const o=new hn(new M(this.WALL_THICKNESS/2,this.WALL_HEIGHT/2,this.SEGMENT_LENGTH/2)),a=new mt({mass:0,material:this.materials.track});a.addShape(o),a.position.copy(n.position),a.quaternion.copy(n.orientation),this.physicsWorld.addBody(a),this.trackBodies.push(a)}),this.instancedWalls.instanceMatrix.needsUpdate=!0,this.instancedWalls.count=t.length,this.wallInstanceCount=t.length,this.scene.add(this.instancedWalls),this.trackMeshes.push(this.instancedWalls),console.log(`✅ Created instanced walls: ${t.length} instances in 1 draw call`)}buildBouncePad(t){t.lanes.forEach(e=>{const n=new P(1,0,0).applyQuaternion(t.orientation),i=t.center.clone().add(n.clone().multiplyScalar(e.offset)),s=new me(e.width,.3,this.SEGMENT_LENGTH),o=new wn({color:65535,emissive:52428,emissiveIntensity:.5,metalness:.8,roughness:.2}),a=new qt(s,o);a.position.copy(i),a.position.y+=this.TRACK_THICKNESS/2+.15,a.quaternion.copy(t.orientation),this.scene.add(a),this.trackMeshes.push(a);const l=new hn(new M(e.width/2,.15,this.SEGMENT_LENGTH/2)),c=new mt({mass:0,type:mt.STATIC,shape:l});c.position.copy(a.position),c.quaternion.copy(t.orientation),c.userData={isBouncePad:!0},this.physicsWorld.addBody(c),this.trackBodies.push(c);const h=new gr(.5,.8,.1,8),d=new Ie({color:65535,emissive:65535});[{x:e.width/2-1,z:this.SEGMENT_LENGTH/2-1},{x:-(e.width/2-1),z:this.SEGMENT_LENGTH/2-1},{x:e.width/2-1,z:-(this.SEGMENT_LENGTH/2-1)},{x:-(e.width/2-1),z:-(this.SEGMENT_LENGTH/2-1)}].forEach(f=>{const g=new qt(h,d);g.position.copy(i),g.position.y+=this.TRACK_THICKNESS/2+.35;const v=new P(f.x,0,f.z);v.applyQuaternion(t.orientation),g.position.add(v),g.quaternion.copy(t.orientation),this.scene.add(g),this.trackMeshes.push(g)})})}buildBoostSection(t){t.lanes.forEach(e=>{const n=new P(1,0,0).applyQuaternion(t.orientation),i=t.center.clone().add(n.clone().multiplyScalar(e.offset)),s=new Tn,o=new me(e.width*.9,.3,this.SEGMENT_LENGTH*.8),a=new Ie({color:3355443}),l=new qt(o,a);l.position.y=.15,s.add(l);const c=new ni(e.width*.8,this.SEGMENT_LENGTH*.7),h=new Ie({color:65535,transparent:!0,opacity:.8}),d=new qt(c,h);d.position.y=.31,d.rotateX(-Math.PI/2),s.add(d);for(let g=0;g<3;g++){const v=new Fo(.4,1.2,3),m=new Ie({color:16777215}),p=new qt(v,m);p.position.set(0,.4,(g-1)*1.5),p.rotateX(-Math.PI/2),s.add(p)}for(let g=-1;g<=1;g+=2){const v=new me(.2,.8,this.SEGMENT_LENGTH*.6),m=new Ie({color:43775,transparent:!0,opacity:.7}),p=new qt(v,m);p.position.set(g*(e.width*.4),.4,0),s.add(p)}s.position.copy(i),s.position.y+=this.TRACK_THICKNESS/2+.1,s.quaternion.copy(t.orientation),s.userData.isBoostPad=!0,this.scene.add(s),this.trackMeshes.push(s);const u=new hn(new M(e.width/2,.5,this.SEGMENT_LENGTH/2)),f=new mt({mass:0,type:mt.STATIC,shape:u,isTrigger:!0});f.position.copy(i),f.position.y=i.y+this.TRACK_THICKNESS/2+.5,f.quaternion.copy(t.orientation),f.userData={isSpeedPad:!0},this.physicsWorld.addBody(f),this.trackBodies.push(f)})}buildBoostPowerup(t){t.lanes.forEach(e=>{const n=new P(1,0,0).applyQuaternion(t.orientation),i=t.center.clone().add(n.clone().multiplyScalar(e.offset)),s=new qi(1.8,8,6),o=new Ie({color:16776960,transparent:!1}),a=new Tn,l=new qt(s,o);a.add(l);const c=new zo(2.2,2.8,8),h=new Ie({color:65280,transparent:!0,opacity:.6,side:Ve}),d=new qt(c,h);d.rotateX(-Math.PI/2),a.add(d),a.userData.isAnimatedPowerup=!0,a.position.copy(i),a.position.y+=this.TRACK_THICKNESS/2+3,this.scene.add(a),this.trackMeshes.push(a);const u=new nh(2),f=new mt({mass:0,type:mt.STATIC,shape:u,isTrigger:!0});f.position.copy(a.position),f.userData={isBoostPowerup:!0,collected:!1},this.physicsWorld.addBody(f),this.trackBodies.push(f),f.userData.meshes=[a]})}buildStartFinishLine(t,e){const n=new ni(this.DEFAULT_WIDTH,2),i=new Ie({map:this.checkeredTexture,side:Ve,opacity:.8,transparent:!0}),s=new qt(n,i),o=e?-this.SEGMENT_LENGTH/2-.01:this.SEGMENT_LENGTH/2+.01,a=new P(0,0,o).applyQuaternion(t.orientation);if(s.position.copy(t.center).add(a),s.quaternion.copy(t.orientation),s.rotateX(Math.PI/2),this.scene.add(s),this.trackMeshes.push(s),e){const c=new me(this.DEFAULT_WIDTH+6,this.TRACK_THICKNESS*2,this.SEGMENT_LENGTH*2),h=new wn({color:5592405,metalness:.3,roughness:.7}),d=new qt(c,h);d.position.copy(t.center),d.position.y-=this.TRACK_THICKNESS,d.quaternion.copy(t.orientation),d.castShadow=!0,d.receiveShadow=!0,this.scene.add(d),this.trackMeshes.push(d);const u=new hn(new M((this.DEFAULT_WIDTH+6)/2,this.TRACK_THICKNESS,this.SEGMENT_LENGTH)),f=new mt({mass:0,material:this.materials.track});f.addShape(u),f.position.copy(d.position),f.quaternion.copy(t.orientation),this.physicsWorld.addBody(f),this.trackBodies.push(f);const g=1.5,v=.3,m=new me(v,g,this.SEGMENT_LENGTH*2),p=new wn({color:6710886}),x=new qt(m,p),_=new P(1,0,0).applyQuaternion(t.orientation);x.position.copy(t.center).add(_.clone().multiplyScalar(-(this.DEFAULT_WIDTH+6)/2-v/2)),x.position.y+=g/2,x.quaternion.copy(t.orientation),x.castShadow=!0,this.scene.add(x),this.trackMeshes.push(x);const y=new qt(m,p);y.position.copy(t.center).add(_.clone().multiplyScalar((this.DEFAULT_WIDTH+6)/2+v/2)),y.position.y+=g/2,y.quaternion.copy(t.orientation),y.castShadow=!0,this.scene.add(y),this.trackMeshes.push(y);const E=new me(this.DEFAULT_WIDTH+6,g,v),b=new qt(E,p),A=new P(0,0,-1).applyQuaternion(t.orientation);b.position.copy(t.center).add(A.clone().multiplyScalar(this.SEGMENT_LENGTH-v/2)),b.position.y+=g/2,b.quaternion.copy(t.orientation),b.castShadow=!0,this.scene.add(b),this.trackMeshes.push(b);const I=new hn(new M(v/2,g/2,this.SEGMENT_LENGTH)),S=new hn(new M((this.DEFAULT_WIDTH+6)/2,g/2,v/2));[x,y].forEach(B=>{const G=new mt({mass:0,material:this.materials.track});G.addShape(I),G.position.copy(B.position),G.quaternion.copy(t.orientation),this.physicsWorld.addBody(G),this.trackBodies.push(G)});const w=new mt({mass:0,material:this.materials.track});w.addShape(S),w.position.copy(b.position),w.quaternion.copy(t.orientation),this.physicsWorld.addBody(w),this.trackBodies.push(w)}const l=new P(0,0,1).applyQuaternion(t.orientation);if(!e){const d=this.DEFAULT_WIDTH+4,u=new me(1.5,15,1.5),f=new Ie({color:16777215}),g=new qt(u,f),v=new P(1,0,0).applyQuaternion(t.orientation);g.position.copy(s.position).add(v.clone().multiplyScalar(-d/2)),g.position.y+=15/2,g.quaternion.copy(t.orientation),this.scene.add(g),this.trackMeshes.push(g);const m=new qt(u,f);m.position.copy(s.position).add(v.clone().multiplyScalar(d/2)),m.position.y+=15/2,m.quaternion.copy(t.orientation),this.scene.add(m),this.trackMeshes.push(m);const p=new me(d+1.5,2,.5),x=new Ie({color:65280}),_=new qt(p,x);_.position.copy(s.position),_.position.y+=15,_.quaternion.copy(t.orientation),this.scene.add(_),this.trackMeshes.push(_);const y=new ni(d*.8,1.5),E=new Ie({color:0,side:Ve,transparent:!0,opacity:.8}),b=new qt(y,E);b.position.copy(_.position),b.position.y-=.1;const A=new P(0,0,1).applyQuaternion(t.orientation);b.position.add(A.clone().multiplyScalar(.3)),b.quaternion.copy(t.orientation),this.scene.add(b),this.trackMeshes.push(b);const I=new ni(d,4),S=new Ie({map:this.checkeredTexture,side:Ve,opacity:.95}),w=new qt(I,S);w.position.copy(s.position),w.position.y+=.02,w.quaternion.copy(t.orientation),w.rotateX(Math.PI/2),this.scene.add(w),this.trackMeshes.push(w);for(let B=0;B<3;B++){const G=new me(1.7999999999999998,1,1.7999999999999998),O=new Ie({color:16776960,transparent:!0,opacity:.8}),R=new qt(G,O);R.position.copy(g.position),R.position.y=3+B*4,this.scene.add(R),this.trackMeshes.push(R);const D=new qt(G,O);D.position.copy(m.position),D.position.y=3+B*4,this.scene.add(D),this.trackMeshes.push(D)}}return{position:s.position.clone(),normal:l}}calculateSpawnPosition(t){const e=t.center.clone();return e.y+=this.TRACK_THICKNESS+1.1,e}generateRainbowColors(){const t=[];for(let e=0;e<this.segments.length;e++){const n=e/this.segments.length*.65,i=new Gt;i.setHSL(n,1,.5),t.push(i)}return t}getOrientation(t,e,n){const i=new Rn().setFromEuler(new gs(e,t,0,"YXZ")),s=new P(0,0,1).applyQuaternion(i).normalize(),o=new Rn().setFromAxisAngle(s,n);return i.multiply(o)}getOrCreateGeometry(t,e){return this.geometryCache.has(t)?this.cacheStats&&this.cacheStats.hits++:(this.geometryCache.set(t,e()),console.log(`📦 Cached geometry: ${t}`),this.cacheStats&&this.cacheStats.misses++),this.geometryCache.get(t)}getOrCreateMaterial(t,e){return this.materialCache.has(t)||(this.materialCache.set(t,e()),console.log(`🎨 Cached material: ${t}`)),this.materialCache.get(t)}logPerformanceImprovement(){const t=this.performanceStats.meshCountBefore-this.performanceStats.meshCountAfter,e=this.performanceStats.meshCountBefore>0?(t/this.performanceStats.meshCountBefore*100).toFixed(1):"0";if(console.log(`
🚀 PERFORMANCE OPTIMIZATION RESULTS:`),console.log(`📊 Mesh count: ${this.performanceStats.meshCountBefore} → ${this.performanceStats.meshCountAfter} (${e}% reduction)`),console.log(`🧱 Wall instances: ${this.wallInstanceCount} walls in 1 draw call`),console.log(`📦 Geometry cache: ${this.geometryCache.size} cached geometries (${this.cacheStats.hits} hits, ${this.cacheStats.misses} misses)`),console.log(`🎨 Material cache: ${this.materialCache.size} cached materials`),this.performanceStats.memoryBefore&&this.performanceStats.memoryAfter){const i=((this.performanceStats.memoryAfter-this.performanceStats.memoryBefore)/1024/1024).toFixed(2);console.log(`💾 Memory usage: +${i} MB`)}console.log("✨ Using vertex colors for rainbow effect (single material)"),console.log(`🏗️ Merged box segments in chunks of 20 for better performance
`)}clearTrack(){this.trackMeshes.forEach(t=>{this.scene.remove(t),t.geometry&&!this.geometryCache.has(t.geometry)&&t.geometry.dispose(),t.material&&t.material!==this.sharedTrackMaterial&&t.material!==this.sharedWallMaterial&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())}),this.trackMeshes=[],this.trackBodies.forEach(t=>{this.physicsWorld.removeBody(t)}),this.trackBodies=[],this.segments=[],this.instancedWalls=null,this.wallInstanceCount=0}dispose(){this.clearTrack(),this.checkeredTexture&&this.checkeredTexture.dispose(),this.trackTexture&&this.trackTexture.dispose(),this.sharedTrackMaterial&&this.sharedTrackMaterial.dispose(),this.sharedWallMaterial&&this.sharedWallMaterial.dispose(),this.geometryCache.forEach(t=>t.dispose()),this.geometryCache.clear(),this.materialCache.forEach(t=>t.dispose()),this.materialCache.clear(),this.shaderManager&&this.shaderManager.cleanup(),console.log("🧹 Disposed TrackBuilder resources")}async setShader(t){this.currentShader=t,console.log(`Track shader set to: ${t}`)}updateShaderUniforms(t,e,n){this.shaderManager&&this.shaderManager.updateUniforms(t,e,n);const i=performance.now()*.001;this.trackMeshes.forEach(s=>{if(s.userData.isAnimatedPowerup&&(s.userData.originalY||(s.userData.originalY=s.position.y),s.position.y=s.userData.originalY+Math.sin(i*3)*.3,s.rotation.y=i*2),s.userData.isBoostPad){const o=Math.sin(i*4)*.3+.7,a=Math.sin(i*8)*.2+.8;s.children[1]&&(s.children[1].material.opacity=o*.9),s.children[5]&&(s.children[5].material.opacity=a*.7),s.children[6]&&(s.children[6].material.opacity=a*.7);for(let l=2;l<=4;l++)if(s.children[l]){const c=o+.3;s.children[l].material.color.setRGB(c,c,c)}}})}async applyTrackShader(t){try{return this.currentShader&&this.currentShader!=="rainbow-flow"?(console.log(`Applying custom shader: ${this.currentShader}`),await this.shaderManager.applyShader(this.currentShader,t)):(console.log("Using default rainbow-flow material"),new qt(t,this.sharedMaterial))}catch(e){return console.error("Failed to apply shader, using fallback:",e),new qt(t,this.sharedMaterial)}}getAvailableShaders(){return[{name:"rainbow-flow",description:"Classic rainbow track",performance:"good"},{name:"tech-grid",description:"Futuristic grid pattern",performance:"good"},{name:"energy-pulse",description:"Pulsating energy effects",performance:"medium"},{name:"crystal-surface",description:"Crystalline ice surface",performance:"medium"},{name:"lava-flow",description:"Molten lava surface",performance:"medium"},{name:"matrix-rain",description:"Digital rain effect",performance:"good"}]}async preloadShaders(t){this.shaderManager&&await this.shaderManager.preloadShaders(t)}}class X_{constructor(){this.state={left:!1,right:!1,up:!1,down:!1,jumpRequested:!1,boostRequested:!1},this.listeners=new Map,this.init()}init(){window.addEventListener("keydown",t=>{this.handleKeyDown(t),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>{this.handleKeyUp(t)})}handleKeyDown(t){switch(t.code){case"ArrowLeft":case"KeyA":this.state.left=!0;break;case"ArrowRight":case"KeyD":this.state.right=!0;break;case"ArrowUp":case"KeyW":this.state.up=!0;break;case"ArrowDown":case"KeyS":this.state.down=!0;break;case"Space":this.state.jumpRequested=!0;break;case"ShiftLeft":case"ShiftRight":this.state.boostRequested=!0;break;case"KeyR":this.emit("restart");break;case"Digit1":this.emit("level",1);break;case"Digit2":this.emit("level",2);break;case"Digit3":this.emit("level",3);break}}handleKeyUp(t){switch(t.code){case"ArrowLeft":case"KeyA":this.state.left=!1;break;case"ArrowRight":case"KeyD":this.state.right=!1;break;case"ArrowUp":case"KeyW":this.state.up=!1;break;case"ArrowDown":case"KeyS":this.state.down=!1;break}}on(t,e){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(e)}emit(t,...e){this.listeners.has(t)&&this.listeners.get(t).forEach(n=>n(...e))}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),this.listeners.clear()}}var Y_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function j_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ih={exports:{}};(function(r,t){(function(e,n){r.exports=n()})(Y_,function(){var e=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===f?"block":"none";s=f}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=n(new e.Panel("FPS","#0ff","#002")),d=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(d.update(f-a,200),f>l+1e3&&(h.update(1e3*c/(f-l),100),l=f,c=0,u)){var g=performance.memory;u.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return e.Panel=function(n,i,s){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,d=48*c,u=3*c,f=2*c,g=3*c,v=15*c,m=74*c,p=30*c,x=document.createElement("canvas");x.width=h,x.height=d,x.style.cssText="width:80px;height:48px";var _=x.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=s,_.fillRect(0,0,h,d),_.fillStyle=i,_.fillText(n,u,f),_.fillRect(g,v,m,p),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(g,v,m,p),{dom:x,update:function(y,E){o=Math.min(o,y),a=Math.max(a,y),_.fillStyle=s,_.globalAlpha=1,_.fillRect(0,0,h,v),_.fillStyle=i,_.fillText(l(y)+" "+n+" ("+l(o)+"-"+l(a)+")",u,f),_.drawImage(x,g+c,v,m-c,p,g,v,m-c,p),_.fillRect(g+m-c,v,c,p),_.fillStyle=s,_.globalAlpha=.9,_.fillRect(g+m-c,v,c,l((1-y/E)*p))}}},e})})(ih);var $_=ih.exports;const K_=j_($_);class Z_{constructor(){this.elements={levelDisplay:document.getElementById("levelDisplay"),timer:document.getElementById("timer"),speedometer:document.getElementById("speedometer"),bestTime:document.getElementById("bestTime"),boostStatus:document.getElementById("boostStatus")},this.currentLevel=1,this.showFPS=!1,this.stats=new K_,this.stats.showPanel(0),this.stats.dom.style.display="none",this.stats.dom.style.position="absolute",this.stats.dom.style.top="80px",this.stats.dom.style.left="10px",this.stats.dom.style.zIndex="1000",document.body.appendChild(this.stats.dom),this.init(),this.setupFPSToggle()}init(){this.reset()}updateLevel(t){this.currentLevel=t,this.elements.levelDisplay&&(this.elements.levelDisplay.textContent=`LVL ${t}`)}updateTimer(t){this.elements.timer&&(this.elements.timer.textContent=`${t.toFixed(2)}s`,this.elements.timer.classList.add("primary"))}updateBestTime(t){this.elements.bestTime&&(t!==null?this.elements.bestTime.textContent=`BEST ${t.toFixed(2)}s`:this.elements.bestTime.textContent="BEST --")}update(t){if(this.elements.speedometer){const e=t.speed||0;this.elements.speedometer.textContent=`${e.toFixed(0)} m/s`,e>50?this.elements.speedometer.classList.add("high-speed"):this.elements.speedometer.classList.remove("high-speed")}Math.random()<.01&&t.position&&console.log(`Ball position - Y: ${t.position.y.toFixed(1)}`),this.elements.boostStatus&&(t.isBoostActive?(this.elements.boostStatus.textContent="BOOST!",this.elements.boostStatus.classList.add("boost-active")):t.boostCooldown>0?(this.elements.boostStatus.textContent=`${t.boostCooldown.toFixed(1)}s`,this.elements.boostStatus.classList.remove("boost-active")):(this.elements.boostStatus.textContent="SHIFT",this.elements.boostStatus.classList.remove("boost-active")))}showRaceStart(){this.showNotification("GO!","success")}showRaceFinish(t,e=!1){const n=e?`NEW BEST! ${t.toFixed(2)}s`:`Finished! ${t.toFixed(2)}s`;this.showNotification(n,e?"best":"success"),this.elements.timer&&(this.elements.timer.classList.add("finish"),setTimeout(()=>{this.elements.timer.classList.remove("finish")},1e3))}showCheckpointPassed(t,e){this.showNotification(`Checkpoint ${t}/${e}`,"info")}showBoostActivated(){this.elements.speedometer&&(this.elements.speedometer.classList.add("boost"),setTimeout(()=>{this.elements.speedometer.classList.remove("boost")},500))}showNotification(t,e="info"){const n=document.createElement("div");n.className=`notification notification-${e}`,n.textContent=t,Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:this.getNotificationColor(e),color:"#ffffff",padding:"15px 30px",borderRadius:"10px",fontSize:"1.2rem",fontWeight:"bold",zIndex:"1000",textAlign:"center",boxShadow:"0 0 20px rgba(0, 255, 255, 0.5)",animation:"notificationSlide 2s ease-out forwards"}),document.body.appendChild(n),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},2e3)}getNotificationColor(t){switch(t){case"success":return"rgba(0, 255, 0, 0.9)";case"best":return"rgba(255, 215, 0, 0.9)";case"info":return"rgba(0, 255, 255, 0.9)";case"warning":return"rgba(255, 165, 0, 0.9)";case"error":return"rgba(255, 0, 0, 0.9)";default:return"rgba(0, 255, 255, 0.9)"}}reset(){this.updateTimer(0),Object.values(this.elements).forEach(t=>{t&&t.classList.remove("boost","finish","high-speed")})}hide(){const t=document.getElementById("hud");t&&(t.style.display="none")}show(){const t=document.getElementById("hud");t&&(t.style.display="block")}setupFPSToggle(){document.addEventListener("keydown",t=>{t.key.toLowerCase()==="f"&&!t.repeat&&this.toggleFPS()})}toggleFPS(){this.showFPS=!this.showFPS,this.stats.dom.style.display=this.showFPS?"block":"none",console.log(`FPS display ${this.showFPS?"enabled":"disabled"}. Press F to toggle.`)}updateFPS(){this.stats.begin()}endFPS(){this.stats.end()}}class J_{constructor(t,e,n=null){this.hud=t,this.completionScreen=e,this.game=n,this.raceStarted=!1,this.startTime=0,this.currentTime=0,this.finishPlane=null,this.currentLevel=1,this.hasMovedYet=!1,this.initialPosition=null,this.lastFinishSide=null,this.hasBeenNearFinish=!1,this.DETECTION_DISTANCE=2,this.DETECTION_HEIGHT=10,this.DETECTION_WIDTH=15,this.DETECTION_BOTTOM=2,this.MOVEMENT_THRESHOLD=.5}setTrack(t,e){this.finishPlane=t.finishPlane,this.currentLevel=e,this.reset(),this.initialPosition=t.startPosition?t.startPosition.clone():new P(0,5,0);const n=this.getBestTime();this.hud&&this.hud.updateBestTime(n),console.log("Timer initialized for level",e,"finish plane:",this.finishPlane)}reset(){this.raceStarted=!1,this.startTime=0,this.currentTime=0,this.hasMovedYet=!1,this.lastFinishSide=null,this.hasBeenNearFinish=!1,this.hud&&this.hud.updateTimer(0),console.log("Timer reset")}update(t){if(!this.finishPlane){console.warn("No finish plane set!");return}const e=new P(t.x,t.y,t.z);!this.raceStarted&&!this.hasMovedYet&&this.initialPosition&&e.distanceTo(this.initialPosition)>this.MOVEMENT_THRESHOLD&&(this.startRace(),this.hasMovedYet=!0),this.checkFinishLine(e),this.raceStarted&&(this.currentTime=(performance.now()-this.startTime)/1e3,this.hud&&this.hud.updateTimer(this.currentTime))}checkFinishLine(t){const e=this.getDistanceToPlane(t,this.finishPlane),n=Math.sign(e),i=t.clone().sub(this.finishPlane.position),s=this.finishPlane.normal.clone().normalize(),o=new P(0,1,0),a=new P,l=new P;a.crossVectors(o,s).normalize(),l.crossVectors(s,a).normalize();const c=Math.abs(i.dot(a)),h=i.dot(l),d=c<this.DETECTION_WIDTH&&h>-this.DETECTION_HEIGHT&&h<this.DETECTION_HEIGHT*3;Math.abs(e)<this.DETECTION_DISTANCE*2&&console.log(`Near finish: dist=${e.toFixed(2)}, width=${c.toFixed(1)}, height=${h.toFixed(1)}, inGate=${d}, side=${n}`),Math.abs(e)<this.DETECTION_DISTANCE*4&&!this.hasBeenNearFinish&&this.raceStarted&&(this.hasBeenNearFinish=!0,console.log("Now tracking finish line crossing")),this.hasBeenNearFinish&&this.lastFinishSide!==null&&this.lastFinishSide!==n&&Math.abs(e)<this.DETECTION_DISTANCE&&d&&this.raceStarted&&(console.log("Finish line crossed through gate!"),this.finishRace()),Math.abs(e)<this.DETECTION_DISTANCE*2&&d&&(this.lastFinishSide=n)}getDistanceToPlane(t,e){return new P(t.x,t.y,t.z).clone().sub(e.position).dot(e.normal)}startRace(){this.raceStarted||(this.raceStarted=!0,this.startTime=performance.now(),console.log("Race started at time:",this.startTime),this.hud&&this.hud.showRaceStart())}finishRace(){if(!this.raceStarted)return;this.raceStarted=!1;const t=this.currentTime,e=this.getBestTime();let n=!1;(e===null||t<e)&&(this.saveBestTime(t),n=!0),console.log(`Race finished! Time: ${t.toFixed(2)}s${n?" (NEW BEST!)":""}`),this.game&&this.game.pause(),this.hud&&(this.hud.showRaceFinish(t,n),this.hud.updateBestTime(this.getBestTime())),this.completionScreen?(console.log("Showing completion screen with time:",t),this.completionScreen.show(t,this.getBestTime(),n)):console.error("No completion screen available in Timer!")}getBestTime(){const t=localStorage.getItem(`bestTime_level_${this.currentLevel}`);return t?parseFloat(t):null}saveBestTime(t){localStorage.setItem(`bestTime_level_${this.currentLevel}`,t.toString())}initializeDetection(t){const e=new P(t.x,t.y,t.z);if(this.initialPosition=e.clone(),this.finishPlane){const n=this.getDistanceToPlane(e,this.finishPlane);this.lastFinishSide=Math.sign(n),console.log(`Initialized finish detection: distance=${n.toFixed(2)}, side=${this.lastFinishSide}`)}else console.error("No finish plane when initializing detection!")}}class Q_{constructor(){this.scene=new Oc,this.renderer=null,this.camera=null,this.lighting=null,this.skybox=null,this.physicsWorld=null,this.ball=null,this.trackBuilder=null,this.inputManager=null,this.hud=null,this.timer=null,this.completionScreen=null,this.currentLevel=2,this.isRunning=!1,this.gameLoop=null}setCompletionScreen(t){this.completionScreen=t,this.timer=new J_(this.hud,this.completionScreen,this),console.log("Timer initialized with completion screen")}async init(){console.log("Initializing game systems..."),this.renderer=new N_,this.scene.background=new Gt(0),this.camera=new O_(this.renderer.domElement),this.lighting=new B_,this.lighting.addToScene(this.scene),this.skybox=new k_,await this.skybox.init(this.scene),this.skybox.addToScene(this.scene),this.physicsWorld=new G_,this.ball=new H_(this.physicsWorld,this.scene),this.ball.init(),this.ball.onFallOff=()=>{console.log("Ball fell off - resetting timer"),this.timer&&this.timer.reset()},this.trackBuilder=new q_(this.physicsWorld,this.scene),this.inputManager=new X_,this.setupInputHandlers(),this.hud=new Z_,this.camera.setTarget(this.ball.mesh),console.log("Game systems initialized successfully")}setupInputHandlers(){this.inputManager.on("restart",()=>this.restart()),this.inputManager.on("level",t=>this.loadLevel(t)),window.addEventListener("keydown",t=>{t.key==="t"&&this.timer&&(console.log("Debug: Manually starting timer"),this.timer.startRace()),t.key==="f"&&this.timer&&(console.log("Debug: Manually finishing race"),this.timer.finishRace())})}async loadLevel(t){console.log(`Loading level ${t}...`),this.currentLevel=t,this.hud.updateLevel(t),this.trackBuilder.clearTrack();const e=await Ao(Object.assign({"../tracks/levels/Level1.js":()=>Tt(()=>import("./Level1-CHXIdbSK.js"),[]),"../tracks/levels/Level10.js":()=>Tt(()=>import("./Level10-DDsGQpjH.js"),[]),"../tracks/levels/Level11.js":()=>Tt(()=>import("./Level11-CsdETBdT.js"),[]),"../tracks/levels/Level12.js":()=>Tt(()=>import("./Level12-B2mocMlJ.js"),[]),"../tracks/levels/Level13.js":()=>Tt(()=>import("./Level13-DGml87M9.js"),[]),"../tracks/levels/Level14.js":()=>Tt(()=>import("./Level14-DgpoOj9I.js"),[]),"../tracks/levels/Level15.js":()=>Tt(()=>import("./Level15-DC_duHBl.js"),[]),"../tracks/levels/Level16.js":()=>Tt(()=>import("./Level16-BZZJssIu.js"),[]),"../tracks/levels/Level17.js":()=>Tt(()=>import("./Level17-BFYWlT3p.js"),[]),"../tracks/levels/Level18.js":()=>Tt(()=>import("./Level18-D8oYaBso.js"),[]),"../tracks/levels/Level19.js":()=>Tt(()=>import("./Level19-CFBOjvv6.js"),[]),"../tracks/levels/Level2.js":()=>Tt(()=>import("./Level2-BAxd4vEF.js"),[]),"../tracks/levels/Level20.js":()=>Tt(()=>import("./Level20-CHhWv1WW.js"),[]),"../tracks/levels/Level21.js":()=>Tt(()=>import("./Level21-Bb5p0Ng5.js"),[]),"../tracks/levels/Level22.js":()=>Tt(()=>import("./Level22-BB8WXNHn.js"),[]),"../tracks/levels/Level23.js":()=>Tt(()=>import("./Level23-CjPHOsDL.js"),[]),"../tracks/levels/Level24.js":()=>Tt(()=>import("./Level24-Y1qIpYW4.js"),[]),"../tracks/levels/Level25.js":()=>Tt(()=>import("./Level25-DHDB-mWz.js"),[]),"../tracks/levels/Level26.js":()=>Tt(()=>import("./Level26-CdlH9u7Y.js"),[]),"../tracks/levels/Level27.js":()=>Tt(()=>import("./Level27-CgUhuai4.js"),[]),"../tracks/levels/Level28.js":()=>Tt(()=>import("./Level28-BgI0q8Vm.js"),[]),"../tracks/levels/Level29.js":()=>Tt(()=>import("./Level29-8-3ZdkvK.js"),[]),"../tracks/levels/Level3.js":()=>Tt(()=>import("./Level3-BsMdy-tj.js"),[]),"../tracks/levels/Level30.js":()=>Tt(()=>import("./Level30-2z9Z1OIE.js"),[]),"../tracks/levels/Level4.js":()=>Tt(()=>import("./Level4-1q7LOp4Q.js"),[]),"../tracks/levels/Level5.js":()=>Tt(()=>import("./Level5-C9SH8ZZQ.js"),[]),"../tracks/levels/Level6.js":()=>Tt(()=>import("./Level6-DX5kPide.js"),[]),"../tracks/levels/Level7.js":()=>Tt(()=>import("./Level7-BGSyASAZ.js"),[]),"../tracks/levels/Level8.js":()=>Tt(()=>import("./Level8-wG8ApU-2.js"),[]),"../tracks/levels/Level9.js":()=>Tt(()=>import("./Level9-BTz2o-fu.js"),[])}),`../tracks/levels/Level${t}.js`,4);e.default.skybox&&this.skybox&&await this.skybox.setSkybox(e.default.skybox,this.scene);const n=await this.trackBuilder.buildTrack(e.default);if(this.ball.setPosition(n.startPosition),this.ball.setLevel(t),n.bounds&&this.ball.setTrackBounds(n.bounds.minY),this.ball.lastBoostTime=0,n.startPlane){const s=n.startPlane.normal.clone().clone().multiplyScalar(-25);s.y=15;const o=n.startPosition.clone().add(s);this.camera.camera.position.copy(o),this.camera.controls.target.copy(n.startPosition)}this.timer?(console.log("Setting up timer with track data:",n),this.timer.setTrack(n,this.currentLevel),this.timer.initializeDetection(this.ball.getPosition())):console.warn("Timer not initialized yet - completion screen not set"),console.log(`Level ${t} loaded successfully`)}start(){this.isRunning||(this.isRunning=!0,document.body.classList.add("playing"),this.animate(),console.log("Game started"))}stop(){this.isRunning=!1,document.body.classList.remove("playing"),this.gameLoop&&(cancelAnimationFrame(this.gameLoop),this.gameLoop=null),console.log("Game stopped")}pause(){this.isRunning&&(this.isRunning=!1,document.body.classList.remove("playing"),this.gameLoop&&(cancelAnimationFrame(this.gameLoop),this.gameLoop=null),console.log("Game paused"))}resume(){this.isRunning||(this.isRunning=!0,document.body.classList.add("playing"),this.animate(),console.log("Game resumed"))}restart(){this.ball.reset(),this.timer&&(this.timer.reset(),this.timer.initializeDetection(this.ball.body.position)),this.hud.reset()}animate(){if(!this.isRunning)return;this.gameLoop=requestAnimationFrame(()=>this.animate()),this.hud.updateFPS(),this.handlePlayerInput(),this.physicsWorld.step(1/60),this.ball.update(),this.camera.update(),this.timer&&this.timer.update(this.ball.getPosition()),this.hud.update({speed:this.ball.getSpeed(),position:this.ball.getPosition(),isGrounded:this.ball.isGrounded(),boostCooldown:this.ball.getBoostCooldownRemaining(),isBoostActive:this.ball.isBoostActive});const t=1/60,e=new rt(window.innerWidth,window.innerHeight);this.skybox&&this.skybox.update(performance.now(),this.camera.camera,e),this.trackBuilder&&this.trackBuilder.updateShaderUniforms(t,this.camera.camera,e),this.renderer.render(this.scene,this.camera.camera),this.hud.endFPS()}handlePlayerInput(){const t=this.inputManager.state,e=this.ball.body,n=this.ball.isBoostActive?this.ball.BOOST_ACCELERATION:this.ball.ACCELERATION,i=new P;this.camera.camera.getWorldDirection(i),i.y=0,i.normalize();const s=new P().crossVectors(i,new P(0,1,0)).normalize().negate(),o=new M(0,0,0);t.up&&(o.x+=i.x*n,o.z+=i.z*n),t.down&&(o.x-=i.x*n,o.z-=i.z*n),t.left&&(o.x+=s.x*n,o.z+=s.z*n),t.right&&(o.x-=s.x*n,o.z-=s.z*n),e.applyForce(o);const a=performance.now()/1e3;t.jumpRequested&&this.ball.isGrounded()&&a-this.ball.lastJumpTime>this.ball.JUMP_COOLDOWN&&(e.velocity.y+=this.ball.JUMP_VELOCITY,this.ball.lastJumpTime=a,t.jumpRequested=!1),t.boostRequested&&(this.ball.startBoost()&&this.hud.showBoostActivated(),t.boostRequested=!1)}handleResize(){this.camera.handleResize(),this.renderer.handleResize()}destroy(){for(this.stop(),this.inputManager&&this.inputManager.dispose(),this.renderer&&this.renderer.dispose();this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.ball=null,this.trackBuilder=null,this.physicsWorld=null,this.camera=null,this.lighting=null,this.skybox=null}getScene(){return this.scene}getPhysicsWorld(){return this.physicsWorld.world}}class tx{constructor(){this.scene=null,this.camera=null,this.renderer=null,this.sphere=null,this.canvas=null,this.animationId=null}init(){this.canvas=document.getElementById("start-background-canvas"),this.canvas&&(this.scene=new Oc,this.camera=new Oe(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new No({canvas:this.canvas,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.createBackground(),this.setupCamera(),this.startAnimation(),window.addEventListener("resize",()=>this.handleResize()))}createBackground(){const t=new qi(3,32,16),e=new qe({transparent:!0,uniforms:{time:{value:0},opacity:{value:.4}},vertexShader:`
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
      `});this.sphere=new qt(t,e),this.scene.add(this.sphere),this.createGlowingWireframe();const n=.2;this.bounceVelocity={x:(Math.random()-.5)*n+(Math.random()>.5?n/2:-n/2),y:(Math.random()-.5)*n+(Math.random()>.5?n/2:-n/2),z:0},this.bounds={x:15,y:10,z:0},this.bouncingGroup=new Tn,this.scene.remove(this.sphere),this.scene.remove(this.wireframe),this.bouncingGroup.add(this.sphere),this.wireframe&&this.bouncingGroup.add(this.wireframe),this.scene.add(this.bouncingGroup),this.bouncingGroup.position.set(0,0,0),this.colors=[new Gt(55807),new Gt(65416),new Gt(16711935),new Gt(16755200),new Gt(16733525),new Gt(65535)],this.currentColorIndex=0}createEnergyRings(){const t=new Tn;for(let e=0;e<3;e++){const n=9+e*1.5,s=new mr(0,0,n,n,0,2*Math.PI,!1,0).getPoints(100),o=new we().setFromPoints(s),a=new sr({color:e===0?55807:e===1?65416:16711935,transparent:!0,opacity:.3+e*.1,linewidth:2}),l=new xg(o,a);l.rotation.x=Math.random()*Math.PI,l.rotation.y=Math.random()*Math.PI,l.userData={rotationSpeed:{x:(Math.random()-.5)*.01,y:(Math.random()-.5)*.01,z:(Math.random()-.5)*.01}},t.add(l)}this.energyRings=t,this.scene.add(this.energyRings)}createLaserGrid(){const t=new Tn;for(let e=-5;e<=5;e++){const n=new we().setFromPoints([new P(-15,e*2,-25),new P(15,e*2,-25)]),i=new sr({color:65535,transparent:!0,opacity:.1+Math.abs(e)*.02}),s=new Mo(n,i);t.add(s)}for(let e=-5;e<=5;e++){const n=new we().setFromPoints([new P(e*3,-10,-25),new P(e*3,10,-25)]),i=new sr({color:16711935,transparent:!0,opacity:.1+Math.abs(e)*.02}),s=new Mo(n,i);t.add(s)}this.laserGrid=t,this.scene.add(this.laserGrid)}createGlowingWireframe(){this.wireframeRadius=4;const t=new Bo(this.wireframeRadius,1),e=new qe({uniforms:{time:{value:0},color:{value:new Gt(55807)}},vertexShader:`
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        uniform vec3 color;
        varying vec3 vPosition;
        
        void main() {
          float pulse = sin(time * 2.0) * 0.2 + 0.8;
          vec3 glowColor = color * pulse;
          float alpha = 0.7 * pulse;
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,wireframe:!0,transparent:!0});this.wireframe=new qt(t,e),this.scene.add(this.wireframe)}setupCamera(){this.camera.position.set(0,0,30),this.camera.lookAt(0,0,0),this.calculateBounds(),this.bouncingGroup&&this.bounds&&this.bouncingGroup.position.set((Math.random()-.5)*this.bounds.x*1.5,(Math.random()-.5)*this.bounds.y*1.5,0)}calculateBounds(){if(!this.camera)return;const t=this.camera.position.z,e=this.camera.fov*Math.PI/180,n=2*Math.tan(e/2)*t,i=n*this.camera.aspect;this.bounds={x:i/2*.9,y:n/2*.9,z:0},console.log("Calculated bounds:",{width:this.bounds.x*2,height:this.bounds.y*2,aspect:this.camera.aspect})}startAnimation(){const t=()=>{this.animationId=requestAnimationFrame(t);const e=performance.now()*.001;if(this.sphere&&this.sphere.material.uniforms&&(this.sphere.material.uniforms.time.value=e),this.bouncingGroup){this.bouncingGroup.position.x+=this.bounceVelocity.x,this.bouncingGroup.position.y+=this.bounceVelocity.y;let n=!1;const i=this.wireframeRadius||4;if(Math.abs(this.bouncingGroup.position.x)+i>this.bounds.x&&(this.bounceVelocity.x*=-1,this.bouncingGroup.position.x=Math.sign(this.bouncingGroup.position.x)*(this.bounds.x-i),n=!0),Math.abs(this.bouncingGroup.position.y)+i>this.bounds.y&&(this.bounceVelocity.y*=-1,this.bouncingGroup.position.y=Math.sign(this.bouncingGroup.position.y)*(this.bounds.y-i),n=!0),n){this.currentColorIndex=(this.currentColorIndex+1)%this.colors.length;const s=this.colors[this.currentColorIndex];this.wireframe&&this.wireframe.material.uniforms&&(this.wireframe.material.uniforms.color.value=s)}this.bouncingGroup.rotation.y+=.003,this.bouncingGroup.rotation.x+=.002}this.wireframe&&this.wireframe.material.uniforms&&(this.wireframe.material.uniforms.time.value=e),this.energyRings&&this.energyRings.children.forEach(n=>{n.rotation.x+=n.userData.rotationSpeed.x,n.rotation.y+=n.userData.rotationSpeed.y,n.rotation.z+=n.userData.rotationSpeed.z}),this.laserGrid&&(this.laserGrid.position.z=Math.sin(e*.2)*2-25,this.laserGrid.rotation.z=Math.sin(e*.1)*.02),this.renderer.render(this.scene,this.camera)};t()}handleResize(){!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.calculateBounds())}destroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",this.handleResize)}}class ex{constructor(){this.element=document.getElementById("startScreen"),this.onLevelSelect=null,this.keyHandler=null,this.background=null,this.init()}init(){if(!this.element)return;this.element.querySelectorAll(".track-btn").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.dataset.level);this.onLevelSelect&&this.onLevelSelect(n)}),e.addEventListener("mouseenter",()=>{this.playHoverSound()})}),this.keyHandler=e=>{if(this.isVisible()){if(e.code.startsWith("Digit")){const n=parseInt(e.code.replace("Digit",""));n>=1&&n<=9?this.selectLevel(n):n===0&&this.selectLevel(10)}else if(e.shiftKey&&e.code.startsWith("Digit")){const n=parseInt(e.code.replace("Digit",""));n>=1&&n<=9?this.selectLevel(10+n):n===0&&this.selectLevel(20)}}},document.addEventListener("keydown",this.keyHandler),this.addAnimations()}addAnimations(){this.element.querySelectorAll(".track-btn").forEach(e=>{e.style.opacity="1",e.style.transform="translateY(0)"})}selectLevel(t){this.onLevelSelect&&(this.playSelectSound(),this.onLevelSelect(t))}show(){this.element&&(this.element.style.display="flex",this.element.classList.add("fade-in"),this.background||(this.background=new tx,requestAnimationFrame(()=>{this.background.init()})))}hide(){this.element&&(this.keyHandler&&document.removeEventListener("keydown",this.keyHandler),this.background&&(this.background.destroy(),this.background=null),this.element.classList.add("fade-out"),setTimeout(()=>{this.element.style.display="none",this.element.classList.remove("fade-in","fade-out")},500))}isVisible(){return this.element&&this.element.style.display!=="none"}playHoverSound(){}playSelectSound(){}}const sh=document.createElement("style");sh.textContent=`
  .start-screen.fade-in {
    animation: fadeIn 0.3s ease-out;
  }

  .start-screen.fade-out {
    animation: fadeOut 0.3s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;document.head.appendChild(sh);class nx{constructor(){this.element=document.getElementById("loadingScreen"),this.textElement=null,this.spinnerElement=null,this.init()}init(){this.element&&(this.textElement=this.element.querySelector(".loading-text"),this.spinnerElement=this.element.querySelector(".loading-spinner"))}show(t="Loading Track..."){this.element&&(this.updateText(t),this.element.classList.remove("hidden"),this.element.style.display="flex")}hide(){this.element&&(this.element.classList.add("hidden"),setTimeout(()=>{this.element.style.display="none"},300))}updateText(t){this.textElement&&(this.textElement.textContent=t)}setProgress(t){t>=100&&this.updateText("Complete!")}isVisible(){return this.element&&!this.element.classList.contains("hidden")}}class ix{constructor(){this.element=document.getElementById("completionScreen"),this.timeElement=document.getElementById("completionTime"),this.bestElement=document.getElementById("completionBest"),this.retryButton=document.getElementById("retryButton"),this.menuButton=document.getElementById("menuButton"),this.onRetry=null,this.onMenu=null,this.keyHandler=null,this.init()}init(){if(!this.element){console.error("CompletionScreen: No element found!");return}console.log("CompletionScreen init - elements found:",{element:!!this.element,timeElement:!!this.timeElement,bestElement:!!this.bestElement,retryButton:!!this.retryButton,menuButton:!!this.menuButton}),this.retryButton?this.retryButton.addEventListener("click",()=>{console.log("Retry button clicked"),this.onRetry&&this.onRetry(),this.hide()}):console.error("CompletionScreen: Retry button not found!"),this.menuButton?this.menuButton.addEventListener("click",()=>{console.log("Menu button clicked"),this.onMenu&&this.onMenu(),this.hide()}):console.error("CompletionScreen: Menu button not found!"),this.keyHandler=t=>{this.isVisible()&&(t.code==="KeyR"?(this.onRetry&&this.onRetry(),this.hide()):t.code==="Escape"&&(this.onMenu&&this.onMenu(),this.hide()))},document.addEventListener("keydown",this.keyHandler)}show(t,e,n=!1){if(console.log("CompletionScreen.show called with:",{raceTime:t,bestTime:e,isNewBest:n}),!this.element){console.error("CompletionScreen element not found!");return}this.element.style.display="flex",requestAnimationFrame(()=>{this.element.classList.remove("hidden"),console.log("CompletionScreen is now visible")});const i=o=>{const a=Math.floor(o/60),l=(o%60).toFixed(2);return a>0?`${a}:${l.padStart(5,"0")}`:`${l}s`};if(this.timeElement&&(this.timeElement.innerHTML=`
        <div class="time-label">YOUR TIME</div>
        <div class="time-value ${n?"new-best-animation":""}">${i(t)}</div>
      `),this.bestElement)if(n)this.bestElement.innerHTML=`
          <div class="best-label">🏆 NEW RECORD! 🏆</div>
          <div class="best-value new-record">${i(t)}</div>
        `;else if(e){const o=t-e,a=o>0?`+${o.toFixed(2)}s`:"";this.bestElement.innerHTML=`
          <div class="best-label">BEST TIME</div>
          <div class="best-value">${i(e)}</div>
          ${a?`<div class="time-difference">Difference: ${a}</div>`:""}
        `}else this.bestElement.innerHTML=`
          <div class="best-label">FIRST COMPLETION!</div>
          <div class="best-value">${i(t)}</div>
        `;this.addPerformanceRating(t,e);const s=document.querySelector(".completion-buttons");s&&(s.style.display="flex",s.style.opacity="1"),setTimeout(()=>{this.retryButton&&this.retryButton.focus()},100)}addPerformanceRating(t,e){let n=document.getElementById("performanceRating");n||(n=document.createElement("div"),n.id="performanceRating",n.className="performance-rating",this.bestElement.parentNode.insertBefore(n,this.bestElement.nextSibling));let i="",s=0;if(e){const a=t/e;a<=1?(i="PERFECT!",s=3):a<=1.1?(i="EXCELLENT!",s=3):a<=1.25?(i="GOOD!",s=2):a<=1.5?(i="NICE TRY!",s=1):(i="COMPLETED!",s=1)}else i="FIRST CLEAR!",s=2;const o="⭐".repeat(s)+"☆".repeat(3-s);n.innerHTML=`
      <div class="rating-stars">${o}</div>
      <div class="rating-text">${i}</div>
    `}hide(){this.element&&(this.element.classList.add("hidden"),setTimeout(()=>{this.element.classList.contains("hidden")&&(this.element.style.display="none")},300))}isVisible(){return this.element&&!this.element.classList.contains("hidden")}destroy(){this.keyHandler&&document.removeEventListener("keydown",this.keyHandler)}}class sx{constructor(){this.game=null,this.startScreen=new ex,this.loadingScreen=new nx,this.completionScreen=new ix,this.currentLevel=1,this.init()}async init(){this.startScreen.show(),this.startScreen.onLevelSelect=t=>this.startGame(t),this.completionScreen.onRetry=()=>this.retryLevel(),this.completionScreen.onMenu=()=>this.returnToMenu(),window.addEventListener("resize",()=>{this.game&&this.game.handleResize()}),window.addEventListener("keydown",t=>{t.code==="Escape"&&this.game&&this.game.isRunning&&!this.completionScreen.isVisible()&&this.returnToMenu()}),await this.preloadAssets()}async preloadAssets(){console.log("Preloading game assets...")}async startGame(t){try{this.currentLevel=t,this.startScreen.hide(),this.loadingScreen.show(),this.game=new Q_,await this.game.init(),this.game.setCompletionScreen(this.completionScreen),await this.game.loadLevel(t),this.loadingScreen.hide(),this.game.start()}catch(e){console.error("Failed to start game:",e),this.loadingScreen.hide(),this.startScreen.show()}}async retryLevel(){this.game&&(console.log("Retrying level..."),this.completionScreen.hide(),this.game.restart(),this.game.resume(),console.log("Level retry initiated"))}returnToMenu(){this.game&&(this.game.stop(),this.game.destroy(),this.game=null),this.completionScreen.hide(),this.startScreen.show()}}window.addEventListener("DOMContentLoaded",()=>{new sx});export{we as B,Sg as C,qc as E,le as F,_g as I,wn as M,bl as P,Rn as Q,Dg as S,P as V,Tt as _,Gt as a,qt as b,me as c,ee as d,hn as e,M as f,ve as g,mt as h,We as i,qi as j,Ie as k,V_ as m};
//# sourceMappingURL=main-D0SxSYpJ.js.map
