function Np(s,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in s)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const El="180",kp=0,vh=1,Op=2,wl=1,Md=2,ai=3,xi=0,Vt=1,Bt=2,fi=0,Vs=1,cn=2,xh=3,yh=4,Fp=5,Qi=100,Bp=101,zp=102,Hp=103,Vp=104,Gp=200,Wp=201,Xp=202,jp=203,Mc=204,bc=205,$p=206,qp=207,Kp=208,Yp=209,Zp=210,Jp=211,Qp=212,em=213,tm=214,Tc=0,Ec=1,wc=2,$s=3,Ac=4,Cc=5,Rc=6,Pc=7,Al=0,nm=1,im=2,Ni=0,bd=1,Td=2,Ed=3,Cl=4,wd=5,Ad=6,Cd=7,Sh="attached",sm="detached",Rd=300,qs=301,Ks=302,Dc=303,Lc=304,pa=306,Kn=1e3,Ii=1001,ia=1002,tn=1003,Pd=1004,Ar=1005,pn=1006,Vo=1007,li=1008,Yn=1009,Dd=1010,Ld=1011,kr=1012,Rl=1013,ns=1014,Dn=1015,pi=1016,Pl=1017,Dl=1018,Or=1020,Id=35902,Ud=35899,Nd=1021,kd=1022,En=1023,Fr=1026,Br=1027,Ll=1028,Il=1029,Od=1030,Ul=1031,Nl=1033,Go=33776,Wo=33777,Xo=33778,jo=33779,Ic=35840,Uc=35841,Nc=35842,kc=35843,Oc=36196,Fc=37492,Bc=37496,zc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,jc=37814,$c=37815,qc=37816,Kc=37817,Yc=37818,Zc=37819,Jc=37820,Qc=37821,el=36492,tl=36494,nl=36495,il=36283,sl=36284,rl=36285,ol=36286,zr=2300,Hr=2301,Ta=2302,Mh=2400,bh=2401,Th=2402,rm=2500,om=0,Fd=1,al=2,am=3200,cm=3201,kl=0,lm=1,Li="",Rt="srgb",qt="srgb-linear",sa="linear",st="srgb",ps=7680,Eh=519,hm=512,um=513,dm=514,Bd=515,fm=516,pm=517,mm=518,gm=519,cl=35044,wh="300 es",$n=2e3,ra=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const Ir=Math.PI/180,Ys=180/Math.PI;function Ln(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function Ol(s,e){return(s%e+e)%e}function _m(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function vm(s,e,t){return s!==e?(t-s)/(e-s):0}function Ur(s,e,t){return(1-t)*s+t*e}function xm(s,e,t,n){return Ur(s,e,1-Math.exp(-t*n))}function ym(s,e=1){return e-Math.abs(Ol(s,e*2)-e)}function Sm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Mm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Tm(s,e){return s+Math.random()*(e-s)}function Em(s){return s*(.5-Math.random())}function wm(s){s!==void 0&&(Ah=s);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Am(s){return s*Ir}function Cm(s){return s*Ys}function Rm(s){return(s&s-1)===0&&s!==0}function Pm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Dm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $o={DEG2RAD:Ir,RAD2DEG:Ys,generateUUID:Ln,clamp:je,euclideanModulo:Ol,mapLinear:_m,inverseLerp:vm,lerp:Ur,damp:xm,pingpong:ym,smoothstep:Sm,smootherstep:Mm,randInt:bm,randFloat:Tm,randFloatSpread:Em,seededRandom:wm,degToRad:Am,radToDeg:Cm,isPowerOfTwo:Rm,ceilPowerOfTwo:Pm,floorPowerOfTwo:Dm,setQuaternionFromProperEuler:Lm,normalize:rt,denormalize:Pn};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,b=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const w=Math.sqrt(T),C=Math.atan2(w,p*b);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const y=a*b;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new A,Ch=new zi;class Ve{constructor(e,t,n,i,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],T=i[4],y=i[7],w=i[2],C=i[5],R=i[8];return r[0]=o*_+a*b+c*w,r[3]=o*m+a*T+c*C,r[6]=o*p+a*y+c*R,r[1]=l*_+h*b+u*w,r[4]=l*m+h*T+u*C,r[7]=l*p+h*y+u*R,r[2]=d*_+f*b+g*w,r[5]=d*m+f*T+g*C,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wa.makeScale(e,t)),this}rotate(e){return this.premultiply(wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new Ve;function zd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Im(){const s=Vr("canvas");return s.style.display="block",s}const Rh={};function Gr(s){s in Rh||(Rh[s]=!0,console.warn(s))}function Um(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ph=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nm(){const s={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qt]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),s}const Ke=Nm();function mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ms;class km{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Vr("canvas")),ms.width=e.width,ms.height=e.height;const i=ms.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Om=0;class Fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Aa(i[o].image)):r.push(Aa(i[o]))}else r=Aa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?km.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fm=0;const Ca=new A;class Dt extends sr{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Ii,i=Ii,r=pn,o=li,a=En,c=Yn,l=Dt.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=Ln(),this.name="",this.source=new Fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Rd;Dt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(f+1)/2,w=(p+1)/2,C=(h+d)/4,R=(u+_)/4,L=(g+m)/4;return T>y&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=C/n,r=R/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=L/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=L/r),this.set(n,i,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bm extends sr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Dt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Fl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Bm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hd extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zm extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),ro.subVectors(this.max,hr),gs.subVectors(e.a,hr),_s.subVectors(e.b,hr),vs.subVectors(e.c,hr),Mi.subVectors(_s,gs),bi.subVectors(vs,_s),Gi.subVectors(gs,vs);let t=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Gi.z,Gi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Gi.z,0,-Gi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Gi.y,Gi.x,0];return!Ra(t,gs,_s,vs,ro)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,gs,_s,vs,ro))?!1:(oo.crossVectors(Mi,bi),t=[oo.x,oo.y,oo.z],Ra(t,gs,_s,vs,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new A,new A,new A,new A,new A,new A,new A,new A],An=new A,so=new yi,gs=new A,_s=new A,vs=new A,Mi=new A,bi=new A,Gi=new A,hr=new A,ro=new A,oo=new A,Wi=new A;function Ra(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Wi.fromArray(s,r);const a=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),c=e.dot(Wi),l=t.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Hm=new yi,ur=new A,Pa=new A;class Zn{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Pa)),this.expandByPoint(ur.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new A,Da=new A,ao=new A,Ti=new A,La=new A,co=new A,Ia=new A;class Zr{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Da.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Ti.dot(this.direction),c=-Ti.dot(ao),l=Ti.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Da).addScaledVector(ao,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,r){La.subVectors(t,e),co.subVectors(n,e),Ia.crossVectors(La,co);let o=this.direction.dot(Ia),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);const c=a*this.direction.dot(co.crossVectors(Ti,co));if(c<0)return null;const l=a*this.direction.dot(La.cross(Ti));if(l<0||c+l>o)return null;const h=-a*Ti.dot(Ia);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vm,e,Gm)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ei.crossVectors(n,dn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ei.crossVectors(n,dn)),Ei.normalize(),lo.crossVectors(dn,Ei),i[0]=Ei.x,i[4]=lo.x,i[8]=dn.x,i[1]=Ei.y,i[5]=lo.y,i[9]=dn.y,i[2]=Ei.z,i[6]=lo.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],T=n[7],y=n[11],w=n[15],C=i[0],R=i[4],L=i[8],M=i[12],S=i[1],D=i[5],k=i[9],B=i[13],F=i[2],V=i[6],j=i[10],Y=i[14],G=i[3],ae=i[7],de=i[11],Re=i[15];return r[0]=o*C+a*S+c*F+l*G,r[4]=o*R+a*D+c*V+l*ae,r[8]=o*L+a*k+c*j+l*de,r[12]=o*M+a*B+c*Y+l*Re,r[1]=h*C+u*S+d*F+f*G,r[5]=h*R+u*D+d*V+f*ae,r[9]=h*L+u*k+d*j+f*de,r[13]=h*M+u*B+d*Y+f*Re,r[2]=g*C+_*S+m*F+p*G,r[6]=g*R+_*D+m*V+p*ae,r[10]=g*L+_*k+m*j+p*de,r[14]=g*M+_*B+m*Y+p*Re,r[3]=b*C+T*S+y*F+w*G,r[7]=b*R+T*D+y*V+w*ae,r[11]=b*L+T*k+y*j+w*de,r[15]=b*M+T*B+y*Y+w*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,T=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,w=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,C=t*b+n*T+i*y+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*R,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*R,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*R,e[4]=T*R,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*R,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*R,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*R,e[8]=y*R,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=w*R,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=c*l,T=c*h,y=c*u,w=n.x,C=n.y,R=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+y)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(d+p))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(g+T)*R,i[9]=(m-b)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=xs.set(i[0],i[1],i[2]).length();const o=xs.set(i[4],i[5],i[6]).length(),a=xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Cn.copy(this);const l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=$n,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ra)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=$n,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===$n)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ra)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xs=new A,Cn=new ze,Vm=new A(0,0,0),Gm=new A(1,1,1),Ei=new A,lo=new A,dn=new A,Lh=new ze,Ih=new zi;class Nn{constructor(e=0,t=0,n=0,i=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wm=0;const Uh=new A,ys=new zi,ni=new ze,ho=new A,dr=new A,Xm=new A,jm=new zi,Nh=new A(1,0,0),kh=new A(0,1,0),Oh=new A(0,0,1),Fh={type:"added"},$m={type:"removed"},Ss={type:"childadded",child:null},Ua={type:"childremoved",child:null};class at extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new A,t=new Nn,n=new zi,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ve}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(dr,ho,this.up):ni.lookAt(ho,dr,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(ni),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($m),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new A(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new A,ii=new A,Na=new A,si=new A,Ms=new A,bs=new A,Bh=new A,ka=new A,Oa=new A,Fa=new A,Ba=new Qe,za=new Qe,Ha=new Qe;class bn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rn.subVectors(i,t),ii.subVectors(n,t),Na.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ii),c=Rn.dot(Na),l=ii.dot(ii),h=ii.dot(Na),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ba.setScalar(0),za.setScalar(0),Ha.setScalar(0),Ba.fromBufferAttribute(e,t),za.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ba,r.x),o.addScaledVector(za,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),ii.subVectors(e,t),Rn.cross(ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Rn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ms.subVectors(i,n),bs.subVectors(r,n),ka.subVectors(e,n);const c=Ms.dot(ka),l=bs.dot(ka);if(c<=0&&l<=0)return t.copy(n);Oa.subVectors(e,i);const h=Ms.dot(Oa),u=bs.dot(Oa);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ms,o);Fa.subVectors(e,r);const f=Ms.dot(Fa),g=bs.dot(Fa);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(bs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Bh.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Bh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ms,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Va(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Ol(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ke.workingToColorSpace(Xt.copy(this),e),Math.round(je(Xt.r*255,0,255))*65536+Math.round(je(Xt.g*255,0,255))*256+Math.round(je(Xt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Rt){Ke.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(uo);const n=Ur(wi.h,uo.h,t),i=Ur(wi.s,uo.s,t),r=Ur(wi.l,uo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ue;ue.NAMES=Vd;let qm=0;class wn extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Vs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=bc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ft extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new A,fo=new we;let Km=0;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}}class Gd extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wd extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ym=0;const vn=new ze,Ga=new at,Ts=new A,fn=new yi,fr=new yi,Ot=new A;class Pt extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?Wd:Gd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(fn.min,fr.min),fn.expandByPoint(Ot),Ot.addVectors(fn.max,fr.max),fn.expandByPoint(Ot)):(fn.expandByPoint(fr.min),fn.expandByPoint(fr.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ot.fromBufferAttribute(a,l),c&&(Ts.fromBufferAttribute(e,l),Ot.add(Ts)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new A,c[L]=new A;const l=new A,h=new A,u=new A,d=new we,f=new we,g=new we,_=new A,m=new A;function p(L,M,S){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[L].add(_),a[M].add(_),a[S].add(_),c[L].add(m),c[M].add(m),c[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,M=b.length;L<M;++L){const S=b[L],D=S.start,k=S.count;for(let B=D,F=D+k;B<F;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new A,y=new A,w=new A,C=new A;function R(L){w.fromBufferAttribute(i,L),C.copy(w);const M=a[L];T.copy(M),T.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(C,M);const D=y.dot(c[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,D)}for(let L=0,M=b.length;L<M;++L){const S=b[L],D=S.start,k=S.count;for(let B=D,F=D+k;B<F;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Lt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zh=new ze,Xi=new Zr,po=new Zn,Hh=new A,mo=new A,go=new A,_o=new A,Wa=new A,vo=new A,Vh=new A,xo=new A;class be extends at{constructor(e=new Pt,t=new ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Wa.fromBufferAttribute(u,e),o?vo.addScaledVector(Wa,h):vo.addScaledVector(Wa.sub(t),h))}t.add(vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),Xi.copy(e.ray).recast(e.near),!(po.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(po,Hh)===null||Xi.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(zh.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,w=T;y<w;y+=3){const C=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);i=yo(this,p,e,n,l,h,u,C,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);i=yo(this,o,e,n,l,h,u,b,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),T=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,w=T;y<w;y+=3){const C=y,R=y+1,L=y+2;i=yo(this,p,e,n,l,h,u,C,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,T=m+1,y=m+2;i=yo(this,o,e,n,l,h,u,b,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Zm(s,e,t,n,i,r,o,a){let c;if(e.side===Vt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===xi,a),c===null)return null;xo.copy(a),xo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(xo);return l<t.near||l>t.far?null:{distance:l,point:xo.clone(),object:s}}function yo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,mo),s.getVertexPosition(c,go),s.getVertexPosition(l,_o);const h=Zm(s,e,t,n,mo,go,_o,Vh);if(h){const u=new A;bn.getBarycoord(Vh,mo,go,_o,u),i&&(h.uv=bn.getInterpolatedAttribute(i,a,c,l,u,new we)),r&&(h.uv1=bn.getInterpolatedAttribute(r,a,c,l,u,new we)),o&&(h.normal=bn.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};bn.getNormal(mo,go,_o,d.normal),h.face=d,h.barycoord=u}return h}class kn extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,p,b,T,y,w,C,R,L,M){const S=y/R,D=w/L,k=y/2,B=w/2,F=C/2,V=R+1,j=L+1;let Y=0,G=0;const ae=new A;for(let de=0;de<j;de++){const Re=de*D-B;for(let Xe=0;Xe<V;Xe++){const ut=Xe*S-k;ae[_]=ut*b,ae[m]=Re*T,ae[p]=F,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=C>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Xe/R),u.push(1-de/L),Y+=1}}for(let de=0;de<L;de++)for(let Re=0;Re<R;Re++){const Xe=d+Re+V*de,ut=d+Re+V*(de+1),gt=d+(Re+1)+V*(de+1),et=d+(Re+1)+V*de;c.push(Xe,ut,et),c.push(ut,gt,et),G+=6}a.addGroup(f,G,M),f+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=Zs(s[t]);for(const i in n)e[i]=n[i]}return e}function Jm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Wr={clone:Zs,merge:Qt};var Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=e0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jd extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new A,Gh=new we,Wh=new we;class en extends jd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Wh),t.subVectors(Wh,Gh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,ws=1;class t0 extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(Es,ws,e,t);i.layers=this.layers,this.add(i);const r=new en(Es,ws,e,t);r.layers=this.layers,this.add(r);const o=new en(Es,ws,e,t);o.layers=this.layers,this.add(o);const a=new en(Es,ws,e,t);a.layers=this.layers,this.add(a);const c=new en(Es,ws,e,t);c.layers=this.layers,this.add(c);const l=new en(Es,ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $d extends Dt{constructor(e=[],t=qs,n,i,r,o,a,c,l,h){super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class n0 extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new $d(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kn(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:fi});r.uniforms.tEquirect.value=t;const o=new be(i,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=pn),new t0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Tt extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i0={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ma{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qd extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cl,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new A;class Xr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yd extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let As;const pr=new A,Cs=new A,Rs=new A,Ps=new we,mr=new we,Zd=new ze,So=new A,gr=new A,Mo=new A,Xh=new we,ja=new we,jh=new we;class s0 extends at{constructor(e=new Yd){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Kd(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Xr(n,3,0,!1)),As.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new we(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Zd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Rs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;bo(So.set(-.5,-.5,0),Rs,o,Cs,i,r),bo(gr.set(.5,-.5,0),Rs,o,Cs,i,r),bo(Mo.set(.5,.5,0),Rs,o,Cs,i,r),Xh.set(0,0),ja.set(1,0),jh.set(1,1);let a=e.ray.intersectTriangle(So,gr,Mo,!1,pr);if(a===null&&(bo(gr.set(-.5,.5,0),Rs,o,Cs,i,r),ja.set(0,1),a=e.ray.intersectTriangle(So,Mo,gr,!1,pr),a===null))return;const c=e.ray.origin.distanceTo(pr);c<e.near||c>e.far||t.push({distance:c,point:pr.clone(),uv:bn.getInterpolation(pr,So,gr,Mo,Xh,ja,jh,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function bo(s,e,t,n,i,r){Ps.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(mr.x=r*Ps.x-i*Ps.y,mr.y=i*Ps.x+r*Ps.y):mr.copy(Ps),s.copy(e),s.x+=mr.x,s.y+=mr.y,s.applyMatrix4(Zd)}const $h=new A,qh=new Qe,Kh=new Qe,r0=new A,Yh=new ze,To=new A,$a=new Zn,Zh=new ze,qa=new Zr;class o0 extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingBox.expandByPoint(To)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,To),this.boundingSphere.expandByPoint(To)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(i),e.ray.intersectsSphere($a)!==!1&&(Zh.copy(i).invert(),qa.copy(e.ray).applyMatrix4(Zh),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;qh.fromBufferAttribute(i.attributes.skinIndex,e),Kh.fromBufferAttribute(i.attributes.skinWeight,e),$h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Kh.getComponent(r);if(o!==0){const a=qh.getComponent(r);Yh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(r0.copy($h).applyMatrix4(Yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Jd extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qd extends Dt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=tn,h=tn,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new ze,a0=new ze;class zl{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:a0;Jh.multiplyMatrices(a,t[r]),Jh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qd(t,e,e,En,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Jd),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ll extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ds=new ze,Qh=new ze,Eo=[],eu=new yi,c0=new ze,_r=new be,vr=new Zn;class ef extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,c0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),eu.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(eu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),vr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ds),Qh.multiplyMatrices(n,Ds),_r.matrixWorld=Qh,_r.raycast(e,Eo);for(let o=0,a=Eo.length;o<a;o++){const c=Eo[o];c.instanceId=r,c.object=this,t.push(c)}Eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qd(new Float32Array(i*this.count),i,this.count,Ll,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ka=new A,l0=new A,h0=new Ve;class Zi{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ka.subVectors(n,t).cross(l0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||h0.getNormalMatrix(e),i=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Zn,u0=new we(.5,.5),wo=new A;class Hl{constructor(e=new Zi,t=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],T=r[13],y=r[14],w=r[15];if(i[0].setComponents(l-o,f-h,p-g,w-b).normalize(),i[1].setComponents(l+o,f+h,p+g,w+b).normalize(),i[2].setComponents(l+a,f+u,p+_,w+T).normalize(),i[3].setComponents(l-a,f-u,p-_,w-T).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(l-c,f-d,p-m,w-y).normalize();else if(i[4].setComponents(l-c,f-d,p-m,w-y).normalize(),t===$n)i[5].setComponents(l+c,f+d,p+m,w+y).normalize();else if(t===ra)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=u0.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tf extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oa=new A,aa=new A,tu=new ze,xr=new Zr,Ao=new Zn,Ya=new A,nu=new A;class Vl extends at{constructor(e=new Pt,t=new tf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)oa.fromBufferAttribute(t,i-1),aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=oa.distanceTo(aa);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;tu.copy(i).invert(),xr.copy(e.ray).applyMatrix4(tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),b=h.getX(_+1),T=Co(this,e,xr,c,p,b,_);T&&t.push(T)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Co(this,e,xr,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Co(this,e,xr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Co(this,e,xr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Co(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(oa.fromBufferAttribute(a,i),aa.fromBufferAttribute(a,r),t.distanceSqToSegment(oa,aa,Ya,nu)>n)return;Ya.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ya);if(!(l<e.near||l>e.far))return{distance:l,point:nu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const iu=new A,su=new A;class d0 extends Vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)iu.fromBufferAttribute(t,i),su.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+iu.distanceTo(su);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class f0 extends Vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gl extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ru=new ze,hl=new Zr,Ro=new Zn,Po=new A;class nf extends at{constructor(e=new Pt,t=new Gl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;ru.copy(i).invert(),hl.copy(e.ray).applyMatrix4(ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Po.fromBufferAttribute(u,m),ou(Po,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Po.fromBufferAttribute(u,g),ou(Po,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ou(s,e,t,n,i,r,o){const a=hl.distanceSqToPoint(s);if(a<t){const c=new A;hl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Jr extends Dt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sf extends Dt{constructor(e,t,n=ns,i,r,o,a=tn,c=tn,l,h=Fr,u=1){if(h!==Fr&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rf extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends Pt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,_=i+1,m=new A,p=new A;for(let b=0;b<=g;b++){let T=0,y=0,w=0,C=0;if(b<=n){const M=b/n,S=M*Math.PI/2;y=-h-e*Math.cos(S),w=e*Math.sin(S),C=-e*Math.cos(S),T=M*u}else if(b<=n+r){const M=(b-n)/r;y=-h+M*t,w=e,C=0,T=u+M*d}else{const M=(b-n-r)/n,S=M*Math.PI/2;y=h+e*Math.sin(S),w=e*Math.cos(S),C=e*Math.sin(S),T=u+d+M*u}const R=Math.max(0,Math.min(1,T/f));let L=0;b===0?L=.5/i:b===g&&(L=-.5/i);for(let M=0;M<=i;M++){const S=M/i,D=S*Math.PI*2,k=Math.sin(D),B=Math.cos(D);p.x=-w*B,p.y=y,p.z=w*k,a.push(p.x,p.y,p.z),m.set(-w*B,C,w*k),m.normalize(),c.push(m.x,m.y,m.z),l.push(S+L,R)}if(b>0){const M=(b-1)*_;for(let S=0;S<i;S++){const D=M+S,k=M+S+1,B=b*_+S,F=b*_+S+1;o.push(D,k,B),o.push(k,F,B)}}}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Qr extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new A,h=new we;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class is extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function b(){const y=new A,w=new A;let C=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const M=[],S=L/r,D=S*(t-e)+e;for(let k=0;k<=i;k++){const B=k/i,F=B*c+a,V=Math.sin(F),j=Math.cos(F);w.x=D*V,w.y=-S*n+m,w.z=D*j,u.push(w.x,w.y,w.z),y.set(V,R,j).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-S),M.push(g++)}_.push(M)}for(let L=0;L<i;L++)for(let M=0;M<r;M++){const S=_[M][L],D=_[M+1][L],k=_[M+1][L+1],B=_[M][L+1];(e>0||M!==0)&&(h.push(S,D,B),C+=3),(t>0||M!==r-1)&&(h.push(D,k,B),C+=3)}l.addGroup(p,C,0),p+=C}function T(y){const w=g,C=new we,R=new A;let L=0;const M=y===!0?e:t,S=y===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let k=0;k<=i;k++){const F=k/i*c+a,V=Math.cos(F),j=Math.sin(F);R.x=M*j,R.y=m*S,R.z=M*V,u.push(R.x,R.y,R.z),d.push(0,S,0),C.x=V*.5+.5,C.y=j*.5*S+.5,f.push(C.x,C.y),g++}for(let k=0;k<i;k++){const B=w+k,F=D+k;y===!0?h.push(F,F+1,B):h.push(F+1,F,B),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ss extends is{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ss(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ga extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-o;for(let T=0;T<l;T++){const y=T*u-r;g.push(y,-b,0),_.push(0,0,1),m.push(T/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const T=b+l*p,y=b+l*(p+1),w=b+1+l*(p+1),C=b+1+l*p;f.push(T,y,C),f.push(y,w,C)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}class $r extends Pt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new A,g=new we;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,T=b,y=b+n+1,w=b+n+2,C=b+1;a.push(T,y,C),a.push(y,w,C)}}this.setIndex(a),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class On extends Pt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],T=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const C=w/t;u.x=-e*Math.cos(i+C*r)*Math.sin(o+T*a),u.y=e*Math.cos(o+T*a),u.z=e*Math.sin(i+C*r)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+y,1-T),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const T=h[p][b+1],y=h[p][b],w=h[p+1][b],C=h[p+1][b+1];(p!==0||o>0)&&f.push(T,y,C),(p!==n-1||c<Math.PI)&&f.push(y,w,C)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class p0 extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mn extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jn extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class m0 extends wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g0 extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _0 extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Do(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function v0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function x0(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function au(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function of(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class eo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class y0 extends eo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mh,endingEnd:Mh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case bh:r=e,a=2*t-n;break;case Th:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case bh:o=e,c=2*n-t;break;case Th:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+b*o[l+w]+T*o[c+w]+y*o[u+w];return r}}class S0 extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class M0 extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Do(t,this.TimeBufferType),this.values=Do(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Do(e.times,Array),values:Do(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new M0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new S0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new y0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&v0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Hr;class rr extends Bn{constructor(e,t,n){super(e,t,n)}}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=zr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class af extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}af.prototype.ValueTypeName="color";class Js extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}Js.prototype.ValueTypeName="number";class b0 extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)zi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Qs extends Bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new b0(this.times,this.values,this.getValueSize(),e)}}Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends Bn{constructor(e,t,n){super(e,t,n)}}or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=zr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends Bn{constructor(e,t,n,i){super(e,t,n,i)}}er.prototype.ValueTypeName="vector";class T0{constructor(e="",t=-1,n=[],i=rm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(w0(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=x0(c);c=au(c,1,h),l=au(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];of(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){const T=d[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}i.push(new Js(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(er,f+".position",d,"pos",i),n(Qs,f+".quaternion",d,"rot",i),n(er,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function E0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return af;case"quaternion":return Qs;case"bool":case"boolean":return rr;case"string":return or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function w0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=E0(s.type);if(s.times===void 0){const t=[],n=[];of(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class A0{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const C0=new A0;class ls{constructor(e){this.manager=e!==void 0?e:C0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ls.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class R0 extends Error{constructor(e,t){super(e),this.response=t}}class ca extends ls{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:i});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ri[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){u.read().then(({done:T,value:y})=>{if(T)p.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,R=h.length;C<R;C++){const L=h[C];L.onProgress&&L.onProgress(w)}p.enqueue(y),b()}},T=>{p.error(T)})}}});return new Response(m)}else throw new R0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{hi.add(`file:${e}`,l);const h=ri[e];delete ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ls=new WeakMap;class P0 extends ls{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ls.get(o);u===void 0&&(u=[],Ls.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Vr("img");function c(){h(),t&&t(this);const u=Ls.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ls.delete(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),hi.remove(`image:${e}`);const d=Ls.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),hi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class D0 extends ls{constructor(e){super(e)}load(e,t,n,i){const r=new Dt,o=new P0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class _a extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class L0 extends _a{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Za=new ze,cu=new A,lu=new A;class Wl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(cu),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I0 extends Wl{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ys*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class U0 extends _a{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new I0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hu=new ze,yr=new A,Ja=new A;class N0 extends Wl{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(yr),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu,n.coordinateSystem,n.reversedDepth)}}class cf extends _a{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new N0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class va extends jd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k0 extends Wl{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cr extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new k0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qa=new WeakMap;class O0 extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Qa.has(o)===!0)i&&i(Qa.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return hi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Qa.set(c,l),hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});hi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class F0 extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class B0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Xl="\\[\\]\\.:\\/",z0=new RegExp("["+Xl+"]","g"),jl="[^"+Xl+"]",H0="[^"+Xl.replace("\\.","")+"]",V0=/((?:WC+[\/:])*)/.source.replace("WC",jl),G0=/(WCOD+)?/.source.replace("WCOD",H0),W0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jl),X0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jl),j0=new RegExp("^"+V0+G0+W0+X0+"$"),$0=["material","materials","bones","map"];class q0{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(e){const t=j0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=q0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const uu=new ze;class K0{constructor(e,t,n=0,i=1/0){this.ray=new Zr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uu),this}intersectObject(e,t=!0,n=[]){return ul(e,this,n,t),n.sort(du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ul(e[i],this,n,t);return n.sort(du),n}}function du(s,e){return s.distance-e.distance}function ul(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ul(r[o],e,t,!0)}}function fu(s,e,t,n){const i=Y0(n);switch(t){case Nd:return s*e;case Ll:return s*e/i.components*i.byteLength;case Il:return s*e/i.components*i.byteLength;case Od:return s*e*2/i.components*i.byteLength;case Ul:return s*e*2/i.components*i.byteLength;case kd:return s*e*3/i.components*i.byteLength;case En:return s*e*4/i.components*i.byteLength;case Nl:return s*e*4/i.components*i.byteLength;case Go:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xo:case jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uc:case kc:return Math.max(s,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(s,8)*Math.max(e,8)/2;case Oc:case Fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case el:case tl:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case il:case sl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rl:case ol:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y0(s){switch(s){case Yn:case Dd:return{byteLength:1,components:1};case kr:case Ld:case pi:return{byteLength:2,components:1};case Pl:case Dl:return{byteLength:2,components:4};case ns:case Rl:case Dn:return{byteLength:4,components:1};case Id:case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);function lf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Z0(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var J0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,og=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,dg=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sg=`#define PI 3.141592653589793
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
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gg=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Wg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Zg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Jg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a_=`#if defined( USE_POINTS_UV )
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
#endif`,c_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y_=`#ifdef USE_NORMALMAP
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
#endif`,S_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,U_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z_=`#ifdef USE_SKINNING
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
#endif`,H_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,sv=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ov=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uv=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pv=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gv=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_v=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,vv=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,yv=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Sv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Tv=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ev=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,wv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Cv=`uniform vec3 color;
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
}`,Rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Pv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,We={alphahash_fragment:J0,alphahash_pars_fragment:Q0,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:sg,aomap_pars_fragment:rg,batching_pars_vertex:og,batching_vertex:ag,begin_vertex:cg,beginnormal_vertex:lg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:dg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:_g,color_pars_fragment:vg,color_pars_vertex:xg,color_vertex:yg,common:Sg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:bg,displacementmap_pars_vertex:Tg,displacementmap_vertex:Eg,emissivemap_fragment:wg,emissivemap_pars_fragment:Ag,colorspace_fragment:Cg,colorspace_pars_fragment:Rg,envmap_fragment:Pg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Lg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Wg,envmap_vertex:Ug,fog_vertex:Ng,fog_pars_vertex:kg,fog_fragment:Og,fog_pars_fragment:Fg,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:zg,lights_lambert_fragment:Hg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Gg,lights_toon_fragment:Xg,lights_toon_pars_fragment:jg,lights_phong_fragment:$g,lights_phong_pars_fragment:qg,lights_physical_fragment:Kg,lights_physical_pars_fragment:Yg,lights_fragment_begin:Zg,lights_fragment_maps:Jg,lights_fragment_end:Qg,logdepthbuf_fragment:e_,logdepthbuf_pars_fragment:t_,logdepthbuf_pars_vertex:n_,logdepthbuf_vertex:i_,map_fragment:s_,map_pars_fragment:r_,map_particle_fragment:o_,map_particle_pars_fragment:a_,metalnessmap_fragment:c_,metalnessmap_pars_fragment:l_,morphinstance_vertex:h_,morphcolor_vertex:u_,morphnormal_vertex:d_,morphtarget_pars_vertex:f_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:g_,normal_pars_fragment:__,normal_pars_vertex:v_,normal_vertex:x_,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:S_,clearcoat_normal_fragment_maps:M_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:T_,opaque_fragment:E_,packing:w_,premultiplied_alpha_fragment:A_,project_vertex:C_,dithering_fragment:R_,dithering_pars_fragment:P_,roughnessmap_fragment:D_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:I_,shadowmap_pars_vertex:U_,shadowmap_vertex:N_,shadowmask_pars_fragment:k_,skinbase_vertex:O_,skinning_pars_vertex:F_,skinning_vertex:B_,skinnormal_vertex:z_,specularmap_fragment:H_,specularmap_pars_fragment:V_,tonemapping_fragment:G_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:j_,uv_pars_fragment:$_,uv_pars_vertex:q_,uv_vertex:K_,worldpos_vertex:Y_,background_vert:Z_,background_frag:J_,backgroundCube_vert:Q_,backgroundCube_frag:ev,cube_vert:tv,cube_frag:nv,depth_vert:iv,depth_frag:sv,distanceRGBA_vert:rv,distanceRGBA_frag:ov,equirect_vert:av,equirect_frag:cv,linedashed_vert:lv,linedashed_frag:hv,meshbasic_vert:uv,meshbasic_frag:dv,meshlambert_vert:fv,meshlambert_frag:pv,meshmatcap_vert:mv,meshmatcap_frag:gv,meshnormal_vert:_v,meshnormal_frag:vv,meshphong_vert:xv,meshphong_frag:yv,meshphysical_vert:Sv,meshphysical_frag:Mv,meshtoon_vert:bv,meshtoon_frag:Tv,points_vert:Ev,points_frag:wv,shadow_vert:Av,shadow_frag:Cv,sprite_vert:Rv,sprite_frag:Pv},oe={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Wn={basic:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ue(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Qt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Qt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ue(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Qt([oe.points,oe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Qt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Qt([oe.common,oe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Qt([oe.sprite,oe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Qt([oe.common,oe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Qt([oe.lights,oe.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Wn.physical={uniforms:Qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Lo={r:0,b:0,g:0},$i=new Nn,Dv=new ze;function Lv(s,e,t,n,i,r,o){const a=new ue(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const w=g(T);w===null?p(a,c):w&&w.isColor&&(p(w,1),y=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===pa)?(h===void 0&&(h=new be(new kn(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Zs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler($i)),h.material.toneMapped=Ke.getTransfer(w.colorSpace)!==st,(u!==w||d!==w.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new be(new ga(2,2),new Ht({name:"BackgroundMaterial",uniforms:Zs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=s.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,y){T.getRGB(Lo,Xd(s)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m,dispose:b}}function Iv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,D,k,B,F){let V=!1;const j=u(B,k,D);r!==j&&(r=j,l(r.object)),V=f(S,B,k,F),V&&g(S,B,k,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(S,D,k,B),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,D,k){const B=k.wireframe===!0;let F=n[S.id];F===void 0&&(F={},n[S.id]=F);let V=F[D.id];V===void 0&&(V={},F[D.id]=V);let j=V[B];return j===void 0&&(j=d(c()),V[B]=j),j}function d(S){const D=[],k=[],B=[];for(let F=0;F<t;F++)D[F]=0,k[F]=0,B[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,D,k,B){const F=r.attributes,V=D.attributes;let j=0;const Y=k.getAttributes();for(const G in Y)if(Y[G].location>=0){const de=F[G];let Re=V[G];if(Re===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),de===void 0||de.attribute!==Re||Re&&de.data!==Re.data)return!0;j++}return r.attributesNum!==j||r.index!==B}function g(S,D,k,B){const F={},V=D.attributes;let j=0;const Y=k.getAttributes();for(const G in Y)if(Y[G].location>=0){let de=V[G];de===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const Re={};Re.attribute=de,de&&de.data&&(Re.data=de.data),F[G]=Re,j++}r.attributes=F,r.attributesNum=j,r.index=B}function _(){const S=r.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const k=r.newAttributes,B=r.enabledAttributes,F=r.attributeDivisors;k[S]=1,B[S]===0&&(s.enableVertexAttribArray(S),B[S]=1),F[S]!==D&&(s.vertexAttribDivisor(S,D),F[S]=D)}function b(){const S=r.newAttributes,D=r.enabledAttributes;for(let k=0,B=D.length;k<B;k++)D[k]!==S[k]&&(s.disableVertexAttribArray(k),D[k]=0)}function T(S,D,k,B,F,V,j){j===!0?s.vertexAttribIPointer(S,D,k,F,V):s.vertexAttribPointer(S,D,k,B,F,V)}function y(S,D,k,B){_();const F=B.attributes,V=k.getAttributes(),j=D.defaultAttributeValues;for(const Y in V){const G=V[Y];if(G.location>=0){let ae=F[Y];if(ae===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),ae!==void 0){const de=ae.normalized,Re=ae.itemSize,Xe=e.get(ae);if(Xe===void 0)continue;const ut=Xe.buffer,gt=Xe.type,et=Xe.bytesPerElement,$=gt===s.INT||gt===s.UNSIGNED_INT||ae.gpuType===Rl;if(ae.isInterleavedBufferAttribute){const Z=ae.data,_e=Z.stride,Oe=ae.offset;if(Z.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)p(G.location+Ce,Z.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Ce=0;Ce<G.locationSize;Ce++)T(G.location+Ce,Re/G.locationSize,gt,de,_e*et,(Oe+Re/G.locationSize*Ce)*et,$)}else{if(ae.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z,ae.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Z=0;Z<G.locationSize;Z++)T(G.location+Z,Re/G.locationSize,gt,de,Re*et,Re/G.locationSize*Z*et,$)}}else if(j!==void 0){const de=j[Y];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(G.location,de);break;case 3:s.vertexAttrib3fv(G.location,de);break;case 4:s.vertexAttrib4fv(G.location,de);break;default:s.vertexAttrib1fv(G.location,de)}}}}b()}function w(){L();for(const S in n){const D=n[S];for(const k in D){const B=D[k];for(const F in B)h(B[F].object),delete B[F];delete D[k]}delete n[S]}}function C(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const k in D){const B=D[k];for(const F in B)h(B[F].object),delete B[F];delete D[k]}delete n[S.id]}function R(S){for(const D in n){const k=n[D];if(k[S.id]===void 0)continue;const B=k[S.id];for(const F in B)h(B[F].object),delete B[F];delete k[S.id]}}function L(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Uv(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Nv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==En&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!L)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:w,maxSamples:C}}function kv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zi,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,T=b*4;let y=p.clippingState||null;c.value=y,y=h(g,d,T,f);for(let w=0;w!==T;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=f;T!==_;++T,y+=4)o.copy(u[T]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ov(s){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=qs:a===Lc&&(o.mapping=Ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dc||a===Lc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new n0(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Bs=4,pu=[.125,.215,.35,.446,.526,.582],es=20,ec=new va,mu=new ue;let tc=null,nc=0,ic=0,sc=!1;const Ji=(1+Math.sqrt(5))/2,Is=1/Ji,gu=[new A(-Ji,Is,0),new A(Ji,Is,0),new A(-Is,0,Ji),new A(Is,0,Ji),new A(0,Ji,-Is),new A(0,Ji,Is),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Fv=new A;class dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Fv}=r;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=sc,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:pi,format:En,colorSpace:qt,depthBuffer:!1},i=_u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bv(r)),this._blurMaterial=zv(r,e,t)}return i}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,ec)}_sceneToCubeUV(e,t,n,i,r){const c=new en(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(mu),u.toneMapping=Ni,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new ft({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new be(new kn,_);let p=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(mu),p=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));const w=this._cubeSize;Io(i,y*w,T>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qs||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Io(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ec)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gu[(i-r-1)%gu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const p=[];let b=0;for(let R=0;R<es;++R){const L=R/_,M=Math.exp(-L*L/2);p.push(M),R===0?b+=M:R<m&&(b+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const y=this._sizeLods[i],w=3*y*(i>T-Bs?i-T+Bs:0),C=4*(this._cubeSize-y);Io(t,w,C,3*y,2*y),c.setRenderTarget(t),c.render(u,ec)}}function Bv(s){const e=[],t=[],n=[];let i=s;const r=s-Bs+1+pu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Bs?c=pu[o-s+Bs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),T=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const R=C%3*2/3-1,L=C>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(M,_*g*C),T.set(d,m*g*C);const S=[C,C,C,C,C,C];y.set(S,p*g*C)}const w=new Pt;w.setAttribute("position",new Lt(b,_)),w.setAttribute("uv",new Lt(T,m)),w.setAttribute("faceIndex",new Lt(y,p)),e.push(w),i>Bs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _u(s,e,t){const n=new In(s,e,t);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Io(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function zv(s,e,t){const n=new Float32Array(es),i=new A(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$l(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function vu(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function xu(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function $l(){return`

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
	`}function Hv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Dc||c===Lc,h=c===qs||c===Ks;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new dl(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new dl(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gv(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let T=0,y=b.length;T<y;T+=3){const w=b[T+0],C=b[T+1],R=b[T+2];d.push(w,C,C,R,R,w)}}else if(g!==void 0){const b=g.array;_=g.version;for(let T=0,y=b.length/3-1;T<y;T+=3){const w=T+0,C=T+1,R=T+2;d.push(w,C,C,R,R,w)}}else return;const m=new(zd(d)?Wd:Gd)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Wv(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jv(s,e,t){const n=new WeakMap,i=new Qe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*C*4*u),L=new Hd(R,w,C,u);L.type=Dn,L.needsUpdate=!0;const M=y*4;for(let D=0;D<u;D++){const k=p[D],B=b[D],F=T[D],V=w*C*4*D;for(let j=0;j<k.count;j++){const Y=j*M;g===!0&&(i.fromBufferAttribute(k,j),R[V+Y+0]=i.x,R[V+Y+1]=i.y,R[V+Y+2]=i.z,R[V+Y+3]=0),_===!0&&(i.fromBufferAttribute(B,j),R[V+Y+4]=i.x,R[V+Y+5]=i.y,R[V+Y+6]=i.z,R[V+Y+7]=0),m===!0&&(i.fromBufferAttribute(F,j),R[V+Y+8]=i.x,R[V+Y+9]=i.y,R[V+Y+10]=i.z,R[V+Y+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new we(w,C)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function $v(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const hf=new Dt,yu=new sf(1,1),uf=new Hd,df=new zm,ff=new $d,Su=[],Mu=[],bu=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function ar(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Su[i];if(r===void 0&&(r=new Float32Array(i),Su[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xa(s,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function qv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function Yv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function Jv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Eu.set(n),s.uniformMatrix2fv(this.addr,!1,Eu),Ut(t,n)}}function Qv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Tu.set(n),s.uniformMatrix3fv(this.addr,!1,Tu),Ut(t,n)}}function ex(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;bu.set(n),s.uniformMatrix4fv(this.addr,!1,bu),Ut(t,n)}}function tx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function ix(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function rx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ox(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function cx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yu.compareFunction=Bd,r=yu):r=hf,t.setTexture2D(e||r,i)}function hx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||df,i)}function ux(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ff,i)}function dx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||uf,i)}function fx(s){switch(s){case 5126:return qv;case 35664:return Kv;case 35665:return Yv;case 35666:return Zv;case 35674:return Jv;case 35675:return Qv;case 35676:return ex;case 5124:case 35670:return tx;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return rx;case 36294:return ox;case 36295:return ax;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return ux;case 36289:case 36303:case 36311:case 36292:return dx}}function px(s,e){s.uniform1fv(this.addr,e)}function mx(s,e){const t=ar(e,this.size,2);s.uniform2fv(this.addr,t)}function gx(s,e){const t=ar(e,this.size,3);s.uniform3fv(this.addr,t)}function _x(s,e){const t=ar(e,this.size,4);s.uniform4fv(this.addr,t)}function vx(s,e){const t=ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xx(s,e){const t=ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yx(s,e){const t=ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sx(s,e){s.uniform1iv(this.addr,e)}function Mx(s,e){s.uniform2iv(this.addr,e)}function bx(s,e){s.uniform3iv(this.addr,e)}function Tx(s,e){s.uniform4iv(this.addr,e)}function Ex(s,e){s.uniform1uiv(this.addr,e)}function wx(s,e){s.uniform2uiv(this.addr,e)}function Ax(s,e){s.uniform3uiv(this.addr,e)}function Cx(s,e){s.uniform4uiv(this.addr,e)}function Rx(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hf,r[o])}function Px(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||df,r[o])}function Dx(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ff,r[o])}function Lx(s,e,t){const n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||uf,r[o])}function Ix(s){switch(s){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return vx;case 35675:return xx;case 35676:return yx;case 5124:case 35670:return Sx;case 35667:case 35671:return Mx;case 35668:case 35672:return bx;case 35669:case 35673:return Tx;case 5125:return Ex;case 36294:return wx;case 36295:return Ax;case 36296:return Cx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Lx}}class Ux{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fx(t.type)}}class Nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ix(t.type)}}class kx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function wu(s,e){s.seq.push(e),s.map[e.id]=e}function Ox(s,e,t){const n=s.name,i=n.length;for(rc.lastIndex=0;;){const r=rc.exec(n),o=rc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){wu(t,l===void 0?new Ux(a,s,e):new Nx(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new kx(a),wu(t,u)),t=u}}}class qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ox(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Au(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Fx=37297;let Bx=0;function zx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Cu=new Ve;function Hx(s){Ke._getMatrix(Cu,Ke.workingColorSpace,s);const e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case sa:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ru(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+zx(s.getShaderSource(e),a)}else return r}function Vx(s,e){const t=Hx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gx(s,e){let t;switch(e){case bd:t="Linear";break;case Td:t="Reinhard";break;case Ed:t="Cineon";break;case Cl:t="ACESFilmic";break;case Ad:t="AgX";break;case Cd:t="Neutral";break;case wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uo=new A;function Wx(){Ke.getLuminanceCoefficients(Uo);const s=Uo.x.toFixed(4),e=Uo.y.toFixed(4),t=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function jx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $x(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Rr(s){return s!==""}function Pu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(s){return s.replace(qx,Yx)}const Kx=new Map;function Yx(s,e){let t=We[e];if(t===void 0){const n=Kx.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}const Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(s){return s.replace(Zx,Jx)}function Jx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Iu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function ey(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ks:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ty(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ks&&(e="ENVMAP_MODE_REFRACTION"),e}function ny(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Al:e="ENVMAP_BLENDING_MULTIPLY";break;case nm:e="ENVMAP_BLENDING_MIX";break;case im:e="ENVMAP_BLENDING_ADD";break}return e}function iy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sy(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Qx(t),l=ey(t),h=ty(t),u=ny(t),d=iy(t),f=Xx(t),g=jx(r),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(m=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?We.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Vx("linearToOutputTexel",t.outputColorSpace),Wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=fl(o),o=Pu(o,t),o=Du(o,t),a=fl(a),a=Pu(a,t),a=Du(a,t),o=Lu(o),a=Lu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+o,y=b+p+a,w=Au(i,i.VERTEX_SHADER,T),C=Au(i,i.FRAGMENT_SHADER,y);i.attachShader(_,w),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(w)||"",F=i.getShaderInfoLog(C)||"",V=k.trim(),j=B.trim(),Y=F.trim();let G=!0,ae=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,C);else{const de=Ru(i,w,"vertex"),Re=Ru(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+de+`
`+Re)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(j===""||Y==="")&&(ae=!1);ae&&(D.diagnostics={runnable:G,programLog:V,vertexShader:{log:j,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(w),i.deleteShader(C),L=new qo(i,_),M=$x(i,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Fx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=C,this}let ry=0;class oy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ay(e),t.set(e,n)),n}}class ay{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}}function cy(s,e,t,n,i,r,o){const a=new Bl,c=new oy,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,k,B){const F=k.fog,V=B.geometry,j=M.isMeshStandardMaterial?k.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),G=Y&&Y.mapping===pa?Y.image.height:null,ae=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Re=de!==void 0?de.length:0;let Xe=0;V.morphAttributes.position!==void 0&&(Xe=1),V.morphAttributes.normal!==void 0&&(Xe=2),V.morphAttributes.color!==void 0&&(Xe=3);let ut,gt,et,$;if(ae){const tt=Wn[ae];ut=tt.vertexShader,gt=tt.fragmentShader}else ut=M.vertexShader,gt=M.fragmentShader,c.update(M),et=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);const Z=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,Ye=!!M.map,Gt=!!M.matcap,P=!!Y,_t=!!M.aoMap,Be=!!M.lightMap,Ne=!!M.bumpMap,ye=!!M.normalMap,vt=!!M.displacementMap,Se=!!M.emissiveMap,Ge=!!M.metalnessMap,kt=!!M.roughnessMap,Et=M.anisotropy>0,E=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,X=M.sheen>0,K=M.transmission>0,W=Et&&!!M.anisotropyMap,Ae=E&&!!M.clearcoatMap,ie=E&&!!M.clearcoatNormalMap,Me=E&&!!M.clearcoatRoughnessMap,Te=O&&!!M.iridescenceMap,te=O&&!!M.iridescenceThicknessMap,he=X&&!!M.sheenColorMap,Ue=X&&!!M.sheenRoughnessMap,Ee=!!M.specularMap,ce=!!M.specularColorMap,He=!!M.specularIntensityMap,I=K&&!!M.transmissionMap,ne=K&&!!M.thicknessMap,re=!!M.gradientMap,me=!!M.alphaMap,J=M.alphaTest>0,q=!!M.alphaHash,xe=!!M.extensions;let Fe=Ni;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Fe=s.toneMapping);const dt={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:ut,fragmentShader:gt,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:qt,alphaToCoverage:!!M.alphaToCoverage,map:Ye,matcap:Gt,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:G,aoMap:_t,lightMap:Be,bumpMap:Ne,normalMap:ye,displacementMap:d&&vt,emissiveMap:Se,normalMapObjectSpace:ye&&M.normalMapType===lm,normalMapTangentSpace:ye&&M.normalMapType===kl,metalnessMap:Ge,roughnessMap:kt,anisotropy:Et,anisotropyMap:W,clearcoat:E,clearcoatMap:Ae,clearcoatNormalMap:ie,clearcoatRoughnessMap:Me,dispersion:v,iridescence:O,iridescenceMap:Te,iridescenceThicknessMap:te,sheen:X,sheenColorMap:he,sheenRoughnessMap:Ue,specularMap:Ee,specularColorMap:ce,specularIntensityMap:He,transmission:K,transmissionMap:I,thicknessMap:ne,gradientMap:re,opaque:M.transparent===!1&&M.blending===Vs&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:J,alphaHash:q,combine:M.combine,mapUv:Ye&&_(M.map.channel),aoMapUv:_t&&_(M.aoMap.channel),lightMapUv:Be&&_(M.lightMap.channel),bumpMapUv:Ne&&_(M.bumpMap.channel),normalMapUv:ye&&_(M.normalMap.channel),displacementMapUv:vt&&_(M.displacementMap.channel),emissiveMapUv:Se&&_(M.emissiveMap.channel),metalnessMapUv:Ge&&_(M.metalnessMap.channel),roughnessMapUv:kt&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:Ae&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(M.sheenRoughnessMap.channel),specularMapUv:Ee&&_(M.specularMap.channel),specularColorMapUv:ce&&_(M.specularColorMap.channel),specularIntensityMapUv:He&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:me&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ye||Et),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Ye||me),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ye&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===st,decodeVideoTextureEmissive:Se&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bt,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&M.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(b(S,M),T(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function T(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=g[M.type];let D;if(S){const k=Wn[S];D=Wr.clone(k.uniforms)}else D=M.uniforms;return D}function w(M,S){let D;for(let k=0,B=h.length;k<B;k++){const F=h[k];if(F.cacheKey===S){D=F,++D.usedTimes;break}}return D===void 0&&(D=new sy(s,S,M,r),h.push(D)),D}function C(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:L}}function ly(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function hy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||hy),n.length>1&&n.sort(d||Uu),i.length>1&&i.sort(d||Uu)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function uy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Nu,s.set(n,[o])):i>=r.length?(o=new Nu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function dy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new ue};break;case"SpotLight":t={position:new A,direction:new A,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function fy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let py=0;function my(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gy(s){const e=new dy,t=fy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new ze,o=new ze;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,T=0,y=0,w=0,C=0,R=0;l.sort(my);for(let M=0,S=l.length;M<S;M++){const D=l[M],k=D.color,B=D.intensity,F=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],B);R++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,G=t.get(D);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=j,f++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(k).multiplyScalar(B),j.distance=F,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[_]=j;const Y=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,Y.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=V,y++}_++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(k).multiplyScalar(B),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=j,m++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const Y=D.shadow,G=t.get(D);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=j,g++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(B),j.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=j,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==y||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+w-C,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=y,L.numSpotMaps=w,L.numLightProbes=R,n.version=py++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const T=l[p];if(T.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(T.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ku(s){const e=new gy(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _y(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ku(s),e.set(i,[a])):r>=o.length?(a=new ku(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`;function yy(s,e,t){let n=new Hl;const i=new we,r=new we,o=new Qe,a=new g0({depthPacking:cm}),c=new _0,l={},h=t.maxTextureSize,u={[xi]:Vt,[Vt]:xi,[Bt]:Bt},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:vy,fragmentShader:xy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let p=this.type;this.render=function(C,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),k=s.state;k.setBlending(fi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==ai&&this.type===ai,F=p===ai&&this.type!==ai;for(let V=0,j=C.length;V<j;V++){const Y=C[V],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ae=G.getFrameExtents();if(i.multiply(ae),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||B===!0||F===!0){const Re=this.type!==ai?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new In(i.x,i.y,Re),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const de=G.getViewportCount();for(let Re=0;Re<de;Re++){const Xe=G.getViewport(Re);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),k.viewport(o),G.updateMatrices(Y,Re),n=G.getFrustum(),y(R,L,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===ai&&b(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,D)};function b(C,R){const L=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(R,null,L,f,_,null)}function T(C,R,L,M){let S=null;const D=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=S.uuid,B=R.uuid;let F=l[k];F===void 0&&(F={},l[k]=F);let V=F[B];V===void 0&&(V=S.clone(),F[B]=V,R.addEventListener("dispose",w)),S=V}if(S.visible=R.visible,S.wireframe=R.wireframe,M===ai?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=s.properties.get(S);k.light=L}return S}function y(C,R,L,M,S){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ai)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const B=e.update(C),F=C.material;if(Array.isArray(F)){const V=B.groups;for(let j=0,Y=V.length;j<Y;j++){const G=V[j],ae=F[G.materialIndex];if(ae&&ae.visible){const de=T(C,ae,M,S);C.onBeforeShadow(s,C,R,L,B,de,G),s.renderBufferDirect(L,null,B,de,C,G),C.onAfterShadow(s,C,R,L,B,de,G)}}}else if(F.visible){const V=T(C,F,M,S);C.onBeforeShadow(s,C,R,L,B,V,null),s.renderBufferDirect(L,null,B,V,C,null),C.onAfterShadow(s,C,R,L,B,V,null)}}const k=C.children;for(let B=0,F=k.length;B<F;B++)y(k[B],R,L,M,S)}function w(C){C.target.removeEventListener("dispose",w);for(const L in l){const M=l[L],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Sy={[Tc]:Ec,[wc]:Rc,[Ac]:Pc,[$s]:Cc,[Ec]:Tc,[Rc]:wc,[Pc]:Ac,[Cc]:$s};function My(s,e){function t(){let I=!1;const ne=new Qe;let re=null;const me=new Qe(0,0,0,0);return{setMask:function(J){re!==J&&!I&&(s.colorMask(J,J,J,J),re=J)},setLocked:function(J){I=J},setClear:function(J,q,xe,Fe,dt){dt===!0&&(J*=Fe,q*=Fe,xe*=Fe),ne.set(J,q,xe,Fe),me.equals(ne)===!1&&(s.clearColor(J,q,xe,Fe),me.copy(ne))},reset:function(){I=!1,re=null,me.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,re=null,me=null,J=null;return{setReversed:function(q){if(ne!==q){const xe=e.get("EXT_clip_control");q?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ne=q;const Fe=J;J=null,this.setClear(Fe)}},getReversed:function(){return ne},setTest:function(q){q?Z(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(q){re!==q&&!I&&(s.depthMask(q),re=q)},setFunc:function(q){if(ne&&(q=Sy[q]),me!==q){switch(q){case Tc:s.depthFunc(s.NEVER);break;case Ec:s.depthFunc(s.ALWAYS);break;case wc:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Ac:s.depthFunc(s.EQUAL);break;case Cc:s.depthFunc(s.GEQUAL);break;case Rc:s.depthFunc(s.GREATER);break;case Pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=q}},setLocked:function(q){I=q},setClear:function(q){J!==q&&(ne&&(q=1-q),s.clearDepth(q),J=q)},reset:function(){I=!1,re=null,me=null,J=null,ne=!1}}}function i(){let I=!1,ne=null,re=null,me=null,J=null,q=null,xe=null,Fe=null,dt=null;return{setTest:function(tt){I||(tt?Z(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(tt){ne!==tt&&!I&&(s.stencilMask(tt),ne=tt)},setFunc:function(tt,Qn,zn){(re!==tt||me!==Qn||J!==zn)&&(s.stencilFunc(tt,Qn,zn),re=tt,me=Qn,J=zn)},setOp:function(tt,Qn,zn){(q!==tt||xe!==Qn||Fe!==zn)&&(s.stencilOp(tt,Qn,zn),q=tt,xe=Qn,Fe=zn)},setLocked:function(tt){I=tt},setClear:function(tt){dt!==tt&&(s.clearStencil(tt),dt=tt)},reset:function(){I=!1,ne=null,re=null,me=null,J=null,q=null,xe=null,Fe=null,dt=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,T=null,y=null,w=null,C=null,R=new ue(0,0,0),L=0,M=!1,S=null,D=null,k=null,B=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=Y>=2);let ae=null,de={};const Re=s.getParameter(s.SCISSOR_BOX),Xe=s.getParameter(s.VIEWPORT),ut=new Qe().fromArray(Re),gt=new Qe().fromArray(Xe);function et(I,ne,re,me){const J=new Uint8Array(4),q=s.createTexture();s.bindTexture(I,q),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<re;xe++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(ne+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return q}const $={};$[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc($s),Ne(!1),ye(vh),Z(s.CULL_FACE),_t(fi);function Z(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function _e(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Oe(I,ne){return u[I]!==ne?(s.bindFramebuffer(I,ne),u[I]=ne,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ne),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ce(I,ne){let re=f,me=!1;if(I){re=d.get(ne),re===void 0&&(re=[],d.set(ne,re));const J=I.textures;if(re.length!==J.length||re[0]!==s.COLOR_ATTACHMENT0){for(let q=0,xe=J.length;q<xe;q++)re[q]=s.COLOR_ATTACHMENT0+q;re.length=J.length,me=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,me=!0);me&&s.drawBuffers(re)}function Ye(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Gt={[Qi]:s.FUNC_ADD,[Bp]:s.FUNC_SUBTRACT,[zp]:s.FUNC_REVERSE_SUBTRACT};Gt[Hp]=s.MIN,Gt[Vp]=s.MAX;const P={[Gp]:s.ZERO,[Wp]:s.ONE,[Xp]:s.SRC_COLOR,[Mc]:s.SRC_ALPHA,[Zp]:s.SRC_ALPHA_SATURATE,[Kp]:s.DST_COLOR,[$p]:s.DST_ALPHA,[jp]:s.ONE_MINUS_SRC_COLOR,[bc]:s.ONE_MINUS_SRC_ALPHA,[Yp]:s.ONE_MINUS_DST_COLOR,[qp]:s.ONE_MINUS_DST_ALPHA,[Jp]:s.CONSTANT_COLOR,[Qp]:s.ONE_MINUS_CONSTANT_COLOR,[em]:s.CONSTANT_ALPHA,[tm]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(I,ne,re,me,J,q,xe,Fe,dt,tt){if(I===fi){_===!0&&(_e(s.BLEND),_=!1);return}if(_===!1&&(Z(s.BLEND),_=!0),I!==Fp){if(I!==m||tt!==M){if((p!==Qi||y!==Qi)&&(s.blendEquation(s.FUNC_ADD),p=Qi,y=Qi),tt)switch(I){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cn:s.blendFunc(s.ONE,s.ONE);break;case xh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,T=null,w=null,C=null,R.set(0,0,0),L=0,m=I,M=tt}return}J=J||ne,q=q||re,xe=xe||me,(ne!==p||J!==y)&&(s.blendEquationSeparate(Gt[ne],Gt[J]),p=ne,y=J),(re!==b||me!==T||q!==w||xe!==C)&&(s.blendFuncSeparate(P[re],P[me],P[q],P[xe]),b=re,T=me,w=q,C=xe),(Fe.equals(R)===!1||dt!==L)&&(s.blendColor(Fe.r,Fe.g,Fe.b,dt),R.copy(Fe),L=dt),m=I,M=!1}function Be(I,ne){I.side===Bt?_e(s.CULL_FACE):Z(s.CULL_FACE);let re=I.side===Vt;ne&&(re=!re),Ne(re),I.blending===Vs&&I.transparent===!1?_t(fi):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(I){S!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),S=I)}function ye(I){I!==kp?(Z(s.CULL_FACE),I!==D&&(I===vh?s.cullFace(s.BACK):I===Op?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),D=I}function vt(I){I!==k&&(j&&s.lineWidth(I),k=I)}function Se(I,ne,re){I?(Z(s.POLYGON_OFFSET_FILL),(B!==ne||F!==re)&&(s.polygonOffset(ne,re),B=ne,F=re)):_e(s.POLYGON_OFFSET_FILL)}function Ge(I){I?Z(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function kt(I){I===void 0&&(I=s.TEXTURE0+V-1),ae!==I&&(s.activeTexture(I),ae=I)}function Et(I,ne,re){re===void 0&&(ae===null?re=s.TEXTURE0+V-1:re=ae);let me=de[re];me===void 0&&(me={type:void 0,texture:void 0},de[re]=me),(me.type!==I||me.texture!==ne)&&(ae!==re&&(s.activeTexture(re),ae=re),s.bindTexture(I,ne||$[I]),me.type=I,me.texture=ne)}function E(){const I=de[ae];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){ut.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ut.copy(I))}function Ue(I){gt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),gt.copy(I))}function Ee(I,ne){let re=l.get(ne);re===void 0&&(re=new WeakMap,l.set(ne,re));let me=re.get(I);me===void 0&&(me=s.getUniformBlockIndex(ne,I.name),re.set(I,me))}function ce(I,ne){const me=l.get(ne).get(I);c.get(ne)!==me&&(s.uniformBlockBinding(ne,me,I.__bindingPointIndex),c.set(ne,me))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ae=null,de={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,T=null,y=null,w=null,C=null,R=new ue(0,0,0),L=0,M=!1,S=null,D=null,k=null,B=null,F=null,ut.set(0,0,s.canvas.width,s.canvas.height),gt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:_e,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:Ye,setBlending:_t,setMaterial:Be,setFlipSided:Ne,setCullFace:ye,setLineWidth:vt,setPolygonOffset:Se,setScissorTest:Ge,activeTexture:kt,bindTexture:Et,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Te,texImage3D:te,updateUBOMapping:Ee,uniformBlockBinding:ce,texStorage2D:ie,texStorage3D:Me,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:W,compressedTexSubImage3D:Ae,scissor:he,viewport:Ue,reset:He}}function by(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return f?new OffscreenCanvas(E,v):Vr("canvas")}function _(E,v,O){let X=1;const K=Et(E);if((K.width>O||K.height>O)&&(X=O/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor(X*K.width),Ae=Math.floor(X*K.height);u===void 0&&(u=g(W,Ae));const ie=v?g(W,Ae):u;return ie.width=W,ie.height=Ae,ie.getContext("2d").drawImage(E,0,0,W,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+Ae+")."),ie}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(E,v,O,X,K=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=v;if(v===s.RED&&(O===s.FLOAT&&(W=s.R32F),O===s.HALF_FLOAT&&(W=s.R16F),O===s.UNSIGNED_BYTE&&(W=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.R8UI),O===s.UNSIGNED_SHORT&&(W=s.R16UI),O===s.UNSIGNED_INT&&(W=s.R32UI),O===s.BYTE&&(W=s.R8I),O===s.SHORT&&(W=s.R16I),O===s.INT&&(W=s.R32I)),v===s.RG&&(O===s.FLOAT&&(W=s.RG32F),O===s.HALF_FLOAT&&(W=s.RG16F),O===s.UNSIGNED_BYTE&&(W=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RG8UI),O===s.UNSIGNED_SHORT&&(W=s.RG16UI),O===s.UNSIGNED_INT&&(W=s.RG32UI),O===s.BYTE&&(W=s.RG8I),O===s.SHORT&&(W=s.RG16I),O===s.INT&&(W=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RGB8UI),O===s.UNSIGNED_SHORT&&(W=s.RGB16UI),O===s.UNSIGNED_INT&&(W=s.RGB32UI),O===s.BYTE&&(W=s.RGB8I),O===s.SHORT&&(W=s.RGB16I),O===s.INT&&(W=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),O===s.UNSIGNED_INT&&(W=s.RGBA32UI),O===s.BYTE&&(W=s.RGBA8I),O===s.SHORT&&(W=s.RGBA16I),O===s.INT&&(W=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),v===s.RGBA){const Ae=K?sa:Ke.getTransfer(X);O===s.FLOAT&&(W=s.RGBA32F),O===s.HALF_FLOAT&&(W=s.RGBA16F),O===s.UNSIGNED_BYTE&&(W=Ae===st?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(E,v){let O;return E?v===null||v===ns||v===Or?O=s.DEPTH24_STENCIL8:v===Dn?O=s.DEPTH32F_STENCIL8:v===kr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ns||v===Or?O=s.DEPTH_COMPONENT24:v===Dn?O=s.DEPTH_COMPONENT32F:v===kr&&(O=s.DEPTH_COMPONENT16),O}function w(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){const v=E.target;v.removeEventListener("dispose",C),L(v),v.isVideoTexture&&h.delete(v)}function R(E){const v=E.target;v.removeEventListener("dispose",R),S(v)}function L(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,X=d.get(O);if(X){const K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(E),Object.keys(X).length===0&&d.delete(O)}n.remove(E)}function M(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const O=E.source,X=d.get(O);delete X[v.__cacheKey],o.memory.textures--}function S(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)s.deleteFramebuffer(v.__webglFramebuffer[X][K]);else s.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)s.deleteFramebuffer(v.__webglFramebuffer[X]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=E.textures;for(let X=0,K=O.length;X<K;X++){const W=n.get(O[X]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(E)}let D=0;function k(){D=0}function B(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function F(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function V(E,v){const O=n.get(E);if(E.isVideoTexture&&Ge(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function j(E,v){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){$(O,E,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function Y(E,v){const O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){$(O,E,v);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function G(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const ae={[Kn]:s.REPEAT,[Ii]:s.CLAMP_TO_EDGE,[ia]:s.MIRRORED_REPEAT},de={[tn]:s.NEAREST,[Pd]:s.NEAREST_MIPMAP_NEAREST,[Ar]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Vo]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},Re={[hm]:s.NEVER,[gm]:s.ALWAYS,[um]:s.LESS,[Bd]:s.LEQUAL,[dm]:s.EQUAL,[mm]:s.GEQUAL,[fm]:s.GREATER,[pm]:s.NOTEQUAL};function Xe(E,v){if(v.type===Dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===Vo||v.magFilter===Ar||v.magFilter===li||v.minFilter===pn||v.minFilter===Vo||v.minFilter===Ar||v.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ae[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ae[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ae[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,de[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==Ar&&v.minFilter!==li||v.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ut(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));const X=v.source;let K=d.get(X);K===void 0&&(K={},d.set(X,K));const W=F(v);if(W!==E.__cacheKey){K[W]===void 0&&(K[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[W].usedTimes++;const Ae=K[E.__cacheKey];Ae!==void 0&&(K[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(v)),E.__cacheKey=W,E.__webglTexture=K[W].texture}return O}function gt(E,v,O){return Math.floor(Math.floor(E/O)/v)}function et(E,v,O,X){const W=E.updateRanges;if(W.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,X,v.data);else{W.sort((te,he)=>te.start-he.start);let Ae=0;for(let te=1;te<W.length;te++){const he=W[Ae],Ue=W[te],Ee=he.start+he.count,ce=gt(Ue.start,v.width,4),He=gt(he.start,v.width,4);Ue.start<=Ee+1&&ce===He&&gt(Ue.start+Ue.count-1,v.width,4)===ce?he.count=Math.max(he.count,Ue.start+Ue.count-he.start):(++Ae,W[Ae]=Ue)}W.length=Ae+1;const ie=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),Te=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let te=0,he=W.length;te<he;te++){const Ue=W[te],Ee=Math.floor(Ue.start/4),ce=Math.ceil(Ue.count/4),He=Ee%v.width,I=Math.floor(Ee/v.width),ne=ce,re=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,He,I,ne,re,O,X,v.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ie),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function $(E,v,O){let X=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=s.TEXTURE_3D);const K=ut(E,v),W=v.source;t.bindTexture(X,E.__webglTexture,s.TEXTURE0+O);const Ae=n.get(W);if(W.version!==Ae.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const ie=Ke.getPrimaries(Ke.workingColorSpace),Me=v.colorSpace===Li?null:Ke.getPrimaries(v.colorSpace),Te=v.colorSpace===Li||ie===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let te=_(v.image,!1,i.maxTextureSize);te=kt(v,te);const he=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type);let Ee=T(v.internalFormat,he,Ue,v.colorSpace,v.isVideoTexture);Xe(X,v);let ce;const He=v.mipmaps,I=v.isVideoTexture!==!0,ne=Ae.__version===void 0||K===!0,re=W.dataReady,me=w(v,te);if(v.isDepthTexture)Ee=y(v.format===Br,v.type),ne&&(I?t.texStorage2D(s.TEXTURE_2D,1,Ee,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Ee,te.width,te.height,0,he,Ue,null));else if(v.isDataTexture)if(He.length>0){I&&ne&&t.texStorage2D(s.TEXTURE_2D,me,Ee,He[0].width,He[0].height);for(let J=0,q=He.length;J<q;J++)ce=He[J],I?re&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,he,Ue,ce.data):t.texImage2D(s.TEXTURE_2D,J,Ee,ce.width,ce.height,0,he,Ue,ce.data);v.generateMipmaps=!1}else I?(ne&&t.texStorage2D(s.TEXTURE_2D,me,Ee,te.width,te.height),re&&et(v,te,he,Ue)):t.texImage2D(s.TEXTURE_2D,0,Ee,te.width,te.height,0,he,Ue,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Ee,He[0].width,He[0].height,te.depth);for(let J=0,q=He.length;J<q;J++)if(ce=He[J],v.format!==En)if(he!==null)if(I){if(re)if(v.layerUpdates.size>0){const xe=fu(ce.width,ce.height,v.format,v.type);for(const Fe of v.layerUpdates){const dt=ce.data.subarray(Fe*xe/ce.data.BYTES_PER_ELEMENT,(Fe+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Fe,ce.width,ce.height,1,he,dt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,te.depth,he,ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Ee,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,te.depth,he,Ue,ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Ee,ce.width,ce.height,te.depth,0,he,Ue,ce.data)}else{I&&ne&&t.texStorage2D(s.TEXTURE_2D,me,Ee,He[0].width,He[0].height);for(let J=0,q=He.length;J<q;J++)ce=He[J],v.format!==En?he!==null?I?re&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Ee,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ce.width,ce.height,he,Ue,ce.data):t.texImage2D(s.TEXTURE_2D,J,Ee,ce.width,ce.height,0,he,Ue,ce.data)}else if(v.isDataArrayTexture)if(I){if(ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,Ee,te.width,te.height,te.depth),re)if(v.layerUpdates.size>0){const J=fu(te.width,te.height,v.format,v.type);for(const q of v.layerUpdates){const xe=te.data.subarray(q*J/te.data.BYTES_PER_ELEMENT,(q+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,te.width,te.height,1,he,Ue,xe)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,Ue,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,te.width,te.height,te.depth,0,he,Ue,te.data);else if(v.isData3DTexture)I?(ne&&t.texStorage3D(s.TEXTURE_3D,me,Ee,te.width,te.height,te.depth),re&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,Ue,te.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,te.width,te.height,te.depth,0,he,Ue,te.data);else if(v.isFramebufferTexture){if(ne)if(I)t.texStorage2D(s.TEXTURE_2D,me,Ee,te.width,te.height);else{let J=te.width,q=te.height;for(let xe=0;xe<me;xe++)t.texImage2D(s.TEXTURE_2D,xe,Ee,J,q,0,he,Ue,null),J>>=1,q>>=1}}else if(He.length>0){if(I&&ne){const J=Et(He[0]);t.texStorage2D(s.TEXTURE_2D,me,Ee,J.width,J.height)}for(let J=0,q=He.length;J<q;J++)ce=He[J],I?re&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,he,Ue,ce):t.texImage2D(s.TEXTURE_2D,J,Ee,he,Ue,ce);v.generateMipmaps=!1}else if(I){if(ne){const J=Et(te);t.texStorage2D(s.TEXTURE_2D,me,Ee,J.width,J.height)}re&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Ue,te)}else t.texImage2D(s.TEXTURE_2D,0,Ee,he,Ue,te);m(v)&&p(X),Ae.__version=W.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Z(E,v,O){if(v.image.length!==6)return;const X=ut(E,v),K=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const W=n.get(K);if(K.version!==W.__version||X===!0){t.activeTexture(s.TEXTURE0+O);const Ae=Ke.getPrimaries(Ke.workingColorSpace),ie=v.colorSpace===Li?null:Ke.getPrimaries(v.colorSpace),Me=v.colorSpace===Li||Ae===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,he=[];for(let q=0;q<6;q++)!Te&&!te?he[q]=_(v.image[q],!0,i.maxCubemapSize):he[q]=te?v.image[q].image:v.image[q],he[q]=kt(v,he[q]);const Ue=he[0],Ee=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),He=T(v.internalFormat,Ee,ce,v.colorSpace),I=v.isVideoTexture!==!0,ne=W.__version===void 0||X===!0,re=K.dataReady;let me=w(v,Ue);Xe(s.TEXTURE_CUBE_MAP,v);let J;if(Te){I&&ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,He,Ue.width,Ue.height);for(let q=0;q<6;q++){J=he[q].mipmaps;for(let xe=0;xe<J.length;xe++){const Fe=J[xe];v.format!==En?Ee!==null?I?re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,He,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,0,0,Fe.width,Fe.height,Ee,ce,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe,He,Fe.width,Fe.height,0,Ee,ce,Fe.data)}}}else{if(J=v.mipmaps,I&&ne){J.length>0&&me++;const q=Et(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,He,q.width,q.height)}for(let q=0;q<6;q++)if(te){I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,he[q].width,he[q].height,Ee,ce,he[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,he[q].width,he[q].height,0,Ee,ce,he[q].data);for(let xe=0;xe<J.length;xe++){const dt=J[xe].image[q].image;I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,0,0,dt.width,dt.height,Ee,ce,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,He,dt.width,dt.height,0,Ee,ce,dt.data)}}else{I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee,ce,he[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,He,Ee,ce,he[q]);for(let xe=0;xe<J.length;xe++){const Fe=J[xe];I?re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,0,0,Ee,ce,Fe.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,xe+1,He,Ee,ce,Fe.image[q])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),W.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _e(E,v,O,X,K,W){const Ae=r.convert(O.format,O.colorSpace),ie=r.convert(O.type),Me=T(O.internalFormat,Ae,ie,O.colorSpace),Te=n.get(v),te=n.get(O);if(te.__renderTarget=v,!Te.__hasExternalTextures){const he=Math.max(1,v.width>>W),Ue=Math.max(1,v.height>>W);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,W,Me,he,Ue,v.depth,0,Ae,ie,null):t.texImage2D(K,W,Me,he,Ue,0,Ae,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),Se(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,K,te.__webglTexture,0,vt(v)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,K,te.__webglTexture,W),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(E,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,W=y(v.stencilBuffer,K),Ae=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=vt(v);Se(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,W,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,W,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,W,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,E)}else{const X=v.textures;for(let K=0;K<X.length;K++){const W=X[K],Ae=r.convert(W.format,W.colorSpace),ie=r.convert(W.type),Me=T(W.internalFormat,Ae,ie,W.colorSpace),Te=vt(v);O&&Se(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Me,v.width,v.height):Se(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,Me,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Me,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const K=X.__webglTexture,W=vt(v);if(v.depthTexture.format===Fr)Se(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(v.depthTexture.format===Br)Se(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ye(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=E.texture.mipmaps;X&&X.length>0?Ce(v.__webglFramebuffer[0],E):Ce(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=s.createRenderbuffer(),Oe(v.__webglDepthbuffer[X],E,!1);else{const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,W)}}else{const X=E.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),Oe(v.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,W)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(E,v,O){const X=n.get(E);v!==void 0&&_e(X.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ye(E)}function P(E){const v=E.texture,O=n.get(E),X=n.get(v);E.addEventListener("dispose",R);const K=E.textures,W=E.isWebGLCubeRenderTarget===!0,Ae=K.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=v.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ie]=[];for(let Me=0;Me<v.mipmaps.length;Me++)O.__webglFramebuffer[ie][Me]=s.createFramebuffer()}else O.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[ie]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ie=0,Me=K.length;ie<Me;ie++){const Te=n.get(K[ie]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Se(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const Me=K[ie];O.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ie]);const Te=r.convert(Me.format,Me.colorSpace),te=r.convert(Me.type),he=T(Me.internalFormat,Te,te,Me.colorSpace,E.isXRRenderTarget===!0),Ue=vt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,he,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,O.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)_e(O.__webglFramebuffer[ie][Me],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me);else _e(O.__webglFramebuffer[ie],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(v)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ie=0,Me=K.length;ie<Me;ie++){const Te=K[ie],te=n.get(Te);let he=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),Xe(he,Te),_e(O.__webglFramebuffer,E,Te,s.COLOR_ATTACHMENT0+ie,he,0),m(Te)&&p(he)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,X.__webglTexture),Xe(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)_e(O.__webglFramebuffer[Me],E,v,s.COLOR_ATTACHMENT0,ie,Me);else _e(O.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,ie,0);m(v)&&p(ie),t.unbindTexture()}E.depthBuffer&&Ye(E)}function _t(E){const v=E.textures;for(let O=0,X=v.length;O<X;O++){const K=v[O];if(m(K)){const W=b(E),Ae=n.get(K).__webglTexture;t.bindTexture(W,Ae),p(W),t.unbindTexture()}}}const Be=[],Ne=[];function ye(E){if(E.samples>0){if(Se(E)===!1){const v=E.textures,O=E.width,X=E.height;let K=s.COLOR_BUFFER_BIT;const W=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(E),ie=v.length>1;if(ie)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Me=E.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);const te=n.get(v[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,O,X,0,0,O,X,K,s.NEAREST),c===!0&&(Be.length=0,Ne.length=0,Be.push(s.COLOR_ATTACHMENT0+Te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Be.push(W),Ne.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ne)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Te]);const te=n.get(v[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function vt(E){return Math.min(i.maxSamples,E.samples)}function Se(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ge(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function kt(E,v){const O=E.colorSpace,X=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==qt&&O!==Li&&(Ke.getTransfer(O)===st?(X!==En||K!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Gt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Se}function Ty(s,e){function t(n,i=Li){let r;const o=Ke.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===Pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ud)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dd)return s.BYTE;if(n===Ld)return s.SHORT;if(n===kr)return s.UNSIGNED_SHORT;if(n===Rl)return s.INT;if(n===ns)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===pi)return s.HALF_FLOAT;if(n===Nd)return s.ALPHA;if(n===kd)return s.RGB;if(n===En)return s.RGBA;if(n===Fr)return s.DEPTH_COMPONENT;if(n===Br)return s.DEPTH_STENCIL;if(n===Ll)return s.RED;if(n===Il)return s.RED_INTEGER;if(n===Od)return s.RG;if(n===Ul)return s.RG_INTEGER;if(n===Nl)return s.RGBA_INTEGER;if(n===Go||n===Wo||n===Xo||n===jo)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Uc||n===Nc||n===kc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Fc||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===Fc)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===jc||n===$c||n===qc||n===Kc||n===Yc||n===Zc||n===Jc||n===Qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$c)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===el)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ay{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:Ey,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new ga(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cy extends sr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ay,p={},b=t.getContextAttributes();let T=null,y=null;const w=[],C=[],R=new we;let L=null;const M=new en;M.viewport=new Qe;const S=new en;S.viewport=new Qe;const D=[M,S],k=new F0;let B=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=w[$];return Z===void 0&&(Z=new Xa,w[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=w[$];return Z===void 0&&(Z=new Xa,w[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=w[$];return Z===void 0&&(Z=new Xa,w[$]=Z),Z.getHandSpace()};function V($){const Z=C.indexOf($.inputSource);if(Z===-1)return;const _e=w[Z];_e!==void 0&&(_e.update($.inputSource,$.frame,l||o),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<w.length;$++){const Z=C[$];Z!==null&&(C[$]=null,w[$].disconnect(Z))}B=null,F=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(T),f=null,d=null,u=null,i=null,y=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",j),i.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Br:Fr,Oe=b.stencil?Or:ns);const Ye={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new In(d.textureWidth,d.textureHeight,{format:En,type:Yn,depthTexture:new sf(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new In(f.framebufferWidth,f.framebufferHeight,{format:En,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let Z=0;Z<$.removed.length;Z++){const _e=$.removed[Z],Oe=C.indexOf(_e);Oe>=0&&(C[Oe]=null,w[Oe].disconnect(_e))}for(let Z=0;Z<$.added.length;Z++){const _e=$.added[Z];let Oe=C.indexOf(_e);if(Oe===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=C.length){C.push(_e),Oe=Ye;break}else if(C[Ye]===null){C[Ye]=_e,Oe=Ye;break}if(Oe===-1)break}const Ce=w[Oe];Ce&&Ce.connect(_e)}}const G=new A,ae=new A;function de($,Z,_e){G.setFromMatrixPosition(Z.matrixWorld),ae.setFromMatrixPosition(_e.matrixWorld);const Oe=G.distanceTo(ae),Ce=Z.projectionMatrix.elements,Ye=_e.projectionMatrix.elements,Gt=Ce[14]/(Ce[10]-1),P=Ce[14]/(Ce[10]+1),_t=(Ce[9]+1)/Ce[5],Be=(Ce[9]-1)/Ce[5],Ne=(Ce[8]-1)/Ce[0],ye=(Ye[8]+1)/Ye[0],vt=Gt*Ne,Se=Gt*ye,Ge=Oe/(-Ne+ye),kt=Ge*-Ne;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(kt),$.translateZ(Ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Et=Gt+Ge,E=P+Ge,v=vt-kt,O=Se+(Oe-kt),X=_t*P/E*Et,K=Be*P/E*Et;$.projectionMatrix.makePerspective(v,O,X,K,Et,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Re($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Z=$.near,_e=$.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),k.near=S.near=M.near=Z,k.far=S.far=M.far=_e,(B!==k.near||F!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,F=k.far),k.layers.mask=$.layers.mask|6,M.layers.mask=k.layers.mask&3,S.layers.mask=k.layers.mask&5;const Oe=$.parent,Ce=k.cameras;Re(k,Oe);for(let Ye=0;Ye<Ce.length;Ye++)Re(Ce[Ye],Oe);Ce.length===2?de(k,M,S):k.projectionMatrix.copy(M.projectionMatrix),Xe($,k,Oe)};function Xe($,Z,_e){_e===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ys*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return p[$]};let ut=null;function gt($,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let P=0;P<_e.length;P++){const _t=_e[P];let Be=null;if(f!==null)Be=f.getViewport(_t);else{const ye=u.getViewSubImage(d,_t);Be=ye.viewport,P===0&&(e.setRenderTargetTextures(y,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(y))}let Ne=D[P];Ne===void 0&&(Ne=new en,Ne.layers.enable(P),Ne.viewport=new Qe,D[P]=Ne),Ne.matrix.fromArray(_t.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(_t.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Be.x,Be.y,Be.width,Be.height),P===0&&(k.matrix.copy(Ne.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(Ne)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const P=u.getDepthInformation(_e[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let P=0;P<_e.length;P++){const _t=_e[P].camera;if(_t){let Be=p[_t];Be||(Be=new rf,p[_t]=Be);const Ne=u.getCameraImage(_t);Be.sourceTexture=Ne}}}}for(let _e=0;_e<w.length;_e++){const Oe=C[_e],Ce=w[_e];Oe!==null&&Ce!==void 0&&Ce.update(Oe,Z,l||o)}ut&&ut($,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const et=new lf;et.setAnimationLoop(gt),this.setAnimationLoop=function($){ut=$},this.dispose=function(){}}}const qi=new Nn,Ry=new ze;function Py(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,T):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,y=b.envMapRotation;T&&(m.envMap.value=T,qi.copy(y),qi.x*=-1,qi.y*=-1,qi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ry.makeRotationFromEuler(qi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dy(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const y=T.program;n.uniformBlockBinding(b,y)}function l(b,T){let y=i[b.id];y===void 0&&(g(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",m));const w=T.program;n.updateUBOMapping(b,w);const C=e.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){const T=u();b.__bindingPointIndex=T;const y=s.createBuffer(),w=b.__size,C=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=i[b.id],y=b.uniforms,w=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let C=0,R=y.length;C<R;C++){const L=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,S=L.length;M<S;M++){const D=L[M];if(f(D,C,M,w)===!0){const k=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let V=0;V<B.length;V++){const j=B[V],Y=_(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,k+F,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,T,y,w){const C=b.value,R=T+"_"+y;if(w[R]===void 0)return typeof C=="number"||typeof C=="boolean"?w[R]=C:w[R]=C.clone(),!0;{const L=w[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return w[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(b){const T=b.uniforms;let y=0;const w=16;for(let R=0,L=T.length;R<L;R++){const M=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,D=M.length;S<D;S++){const k=M[S],B=Array.isArray(k.value)?k.value:[k.value];for(let F=0,V=B.length;F<V;F++){const j=B[F],Y=_(j),G=y%w,ae=G%Y.boundary,de=G+ae;y+=ae,de!==0&&w-de<Y.storage&&(y+=w-de),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Y.storage}}}const C=y%w;return C>0&&(y+=w-C),b.__size=y,b.__cache={},this}function _(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Ly{constructor(e={}){const{canvas:t=Im(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=Rt;let C=0,R=0,L=null,M=-1,S=null;const D=new Qe,k=new Qe;let B=null;const F=new ue(0);let V=0,j=t.width,Y=t.height,G=1,ae=null,de=null;const Re=new Qe(0,0,j,Y),Xe=new Qe(0,0,j,Y);let ut=!1;const gt=new Hl;let et=!1,$=!1;const Z=new ze,_e=new A,Oe=new Qe,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Gt(){return L===null?G:1}let P=n;function _t(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${El}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",J,!1),P===null){const U="webgl2";if(P=_t(U,x),P===null)throw _t(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Be,Ne,ye,vt,Se,Ge,kt,Et,E,v,O,X,K,W,Ae,ie,Me,Te,te,he,Ue,Ee,ce,He;function I(){Be=new Vv(P),Be.init(),Ee=new Ty(P,Be),Ne=new Nv(P,Be,e,Ee),ye=new My(P,Be),Ne.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),vt=new Xv(P),Se=new ly,Ge=new by(P,Be,ye,Se,Ne,Ee,vt),kt=new Ov(y),Et=new Hv(y),E=new Z0(P),ce=new Iv(P,E),v=new Gv(P,E,vt,ce),O=new $v(P,v,E,vt),te=new jv(P,Ne,Ge),ie=new kv(Se),X=new cy(y,kt,Et,Be,Ne,ce,ie),K=new Py(y,Se),W=new uy,Ae=new _y(Be),Te=new Lv(y,kt,Et,ye,O,f,c),Me=new yy(y,O,Ne),He=new Dy(P,vt,Ne,ye),he=new Uv(P,Be,vt),Ue=new Wv(P,Be,vt),vt.programs=X.programs,y.capabilities=Ne,y.extensions=Be,y.properties=Se,y.renderLists=W,y.shadowMap=Me,y.state=ye,y.info=vt}I();const ne=new Cy(y,P);this.xr=ne,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=Be.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Be.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(j,Y,!1))},this.getSize=function(x){return x.set(j,Y)},this.setSize=function(x,U,z=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=x,Y=U,t.width=Math.floor(x*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(j*G,Y*G).floor()},this.setDrawingBufferSize=function(x,U,z){j=x,Y=U,G=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(Re)},this.setViewport=function(x,U,z,H){x.isVector4?Re.set(x.x,x.y,x.z,x.w):Re.set(x,U,z,H),ye.viewport(D.copy(Re).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(Xe)},this.setScissor=function(x,U,z,H){x.isVector4?Xe.set(x.x,x.y,x.z,x.w):Xe.set(x,U,z,H),ye.scissor(k.copy(Xe).multiplyScalar(G).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(x){ye.setScissorTest(ut=x)},this.setOpaqueSort=function(x){ae=x},this.setTransparentSort=function(x){de=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,z=!0){let H=0;if(x){let N=!1;if(L!==null){const ee=L.texture.format;N=ee===Nl||ee===Ul||ee===Il}if(N){const ee=L.texture.type,le=ee===Yn||ee===ns||ee===kr||ee===Or||ee===Pl||ee===Dl,ve=Te.getClearColor(),fe=Te.getClearAlpha(),Ie=ve.r,ke=ve.g,Pe=ve.b;le?(g[0]=Ie,g[1]=ke,g[2]=Pe,g[3]=fe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ie,_[1]=ke,_[2]=Pe,_[3]=fe,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Te.dispose(),W.dispose(),Ae.dispose(),Se.dispose(),kt.dispose(),Et.dispose(),O.dispose(),ce.dispose(),He.dispose(),X.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",zn),ne.removeEventListener("sessionend",dh),Hi.stop()};function re(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=vt.autoReset,U=Me.enabled,z=Me.autoUpdate,H=Me.needsUpdate,N=Me.type;I(),vt.autoReset=x,Me.enabled=U,Me.autoUpdate=z,Me.needsUpdate=H,Me.type=N}function J(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function q(x){const U=x.target;U.removeEventListener("dispose",q),xe(U)}function xe(x){Fe(x),Se.remove(x)}function Fe(x){const U=Se.get(x).programs;U!==void 0&&(U.forEach(function(z){X.releaseProgram(z)}),x.isShaderMaterial&&X.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,H,N,ee){U===null&&(U=Ce);const le=N.isMesh&&N.matrixWorld.determinant()<0,ve=Rp(x,U,z,H,N);ye.setMaterial(H,le);let fe=z.index,Ie=1;if(H.wireframe===!0){if(fe=v.getWireframeAttribute(z),fe===void 0)return;Ie=2}const ke=z.drawRange,Pe=z.attributes.position;let qe=ke.start*Ie,ct=(ke.start+ke.count)*Ie;ee!==null&&(qe=Math.max(qe,ee.start*Ie),ct=Math.min(ct,(ee.start+ee.count)*Ie)),fe!==null?(qe=Math.max(qe,0),ct=Math.min(ct,fe.count)):Pe!=null&&(qe=Math.max(qe,0),ct=Math.min(ct,Pe.count));const Mt=ct-qe;if(Mt<0||Mt===1/0)return;ce.setup(N,H,ve,z,fe);let pt,lt=he;if(fe!==null&&(pt=E.get(fe),lt=Ue,lt.setIndex(pt)),N.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*Gt()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(N.isLine){let De=H.linewidth;De===void 0&&(De=1),ye.setLineWidth(De*Gt()),N.isLineSegments?lt.setMode(P.LINES):N.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else N.isPoints?lt.setMode(P.POINTS):N.isSprite&&lt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))lt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const De=N._multiDrawStarts,yt=N._multiDrawCounts,Ze=N._multiDrawCount,hn=fe?E.get(fe).bytesPerElement:1,fs=Se.get(H).currentProgram.getUniforms();for(let un=0;un<Ze;un++)fs.setValue(P,"_gl_DrawID",un),lt.render(De[un]/hn,yt[un])}else if(N.isInstancedMesh)lt.renderInstances(qe,Mt,N.count);else if(z.isInstancedBufferGeometry){const De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,yt=Math.min(z.instanceCount,De);lt.renderInstances(qe,Mt,yt)}else lt.render(qe,Mt)};function dt(x,U,z){x.transparent===!0&&x.side===Bt&&x.forceSinglePass===!1?(x.side=Vt,x.needsUpdate=!0,io(x,U,z),x.side=xi,x.needsUpdate=!0,io(x,U,z),x.side=Bt):io(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),p=Ae.get(z),p.init(U),T.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==z&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const ve=ee[le];dt(ve,z,N),H.add(ve)}else dt(ee,z,N),H.add(ee)}),p=T.pop(),H},this.compileAsync=function(x,U,z=null){const H=this.compile(x,U,z);return new Promise(N=>{function ee(){if(H.forEach(function(le){Se.get(le).currentProgram.isReady()&&H.delete(le)}),H.size===0){N(x);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let tt=null;function Qn(x){tt&&tt(x)}function zn(){Hi.stop()}function dh(){Hi.start()}const Hi=new lf;Hi.setAnimationLoop(Qn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(x){tt=x,ne.setAnimationLoop(x),x===null?Hi.stop():Hi.start()},ne.addEventListener("sessionstart",zn),ne.addEventListener("sessionend",dh),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,U,L),p=Ae.get(x,T.length),p.init(U),T.push(p),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),gt.setFromProjectionMatrix(Z,$n,U.reversedDepth),$=this.localClippingEnabled,et=ie.init(this.clippingPlanes,$),m=W.get(x,b.length),m.init(),b.push(m),ne.enabled===!0&&ne.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&Ma(ee,U,-1/0,y.sortObjects)}Ma(x,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ae,de),Ye=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ye&&Te.addToRenderList(m,x),this.info.render.frame++,et===!0&&ie.beginShadows();const z=p.state.shadowsArray;Me.render(z,x,U),et===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ee=U.cameras;if(N.length>0)for(let le=0,ve=ee.length;le<ve;le++){const fe=ee[le];ph(H,N,x,fe)}Ye&&Te.render(x);for(let le=0,ve=ee.length;le<ve;le++){const fe=ee[le];fh(m,x,fe,fe.viewport)}}else N.length>0&&ph(H,N,x,U),Ye&&Te.render(x),fh(m,x,U);L!==null&&R===0&&(Ge.updateMultisampleRenderTarget(L),Ge.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(y,x,U),ce.resetDefaultState(),M=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],et===!0&&ie.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ma(x,U,z,H){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||gt.intersectsSprite(x)){H&&Oe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Z);const le=O.update(x),ve=x.material;ve.visible&&m.push(x,le,ve,z,Oe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||gt.intersectsObject(x))){const le=O.update(x),ve=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Oe.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Oe.copy(le.boundingSphere.center)),Oe.applyMatrix4(x.matrixWorld).applyMatrix4(Z)),Array.isArray(ve)){const fe=le.groups;for(let Ie=0,ke=fe.length;Ie<ke;Ie++){const Pe=fe[Ie],qe=ve[Pe.materialIndex];qe&&qe.visible&&m.push(x,le,qe,z,Oe.z,Pe)}}else ve.visible&&m.push(x,le,ve,z,Oe.z,null)}}const ee=x.children;for(let le=0,ve=ee.length;le<ve;le++)Ma(ee[le],U,z,H)}function fh(x,U,z,H){const N=x.opaque,ee=x.transmissive,le=x.transparent;p.setupLightsView(z),et===!0&&ie.setGlobalState(y.clippingPlanes,z),H&&ye.viewport(D.copy(H)),N.length>0&&no(N,U,z),ee.length>0&&no(ee,U,z),le.length>0&&no(le,U,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function ph(x,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new In(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?pi:Yn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ee=p.state.transmissionRenderTarget[H.id],le=H.viewport||D;ee.setSize(le.z*y.transmissionResolutionScale,le.w*y.transmissionResolutionScale);const ve=y.getRenderTarget(),fe=y.getActiveCubeFace(),Ie=y.getActiveMipmapLevel();y.setRenderTarget(ee),y.getClearColor(F),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&Te.render(z);const ke=y.toneMapping;y.toneMapping=Ni;const Pe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),et===!0&&ie.setGlobalState(y.clippingPlanes,H),no(x,z,H),Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ct=0,Mt=U.length;ct<Mt;ct++){const pt=U[ct],lt=pt.object,De=pt.geometry,yt=pt.material,Ze=pt.group;if(yt.side===Bt&&lt.layers.test(H.layers)){const hn=yt.side;yt.side=Vt,yt.needsUpdate=!0,mh(lt,z,H,De,yt,Ze),yt.side=hn,yt.needsUpdate=!0,qe=!0}}qe===!0&&(Ge.updateMultisampleRenderTarget(ee),Ge.updateRenderTargetMipmap(ee))}y.setRenderTarget(ve,fe,Ie),y.setClearColor(F,V),Pe!==void 0&&(H.viewport=Pe),y.toneMapping=ke}function no(x,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ee=x.length;N<ee;N++){const le=x[N],ve=le.object,fe=le.geometry,Ie=le.group;let ke=le.material;ke.allowOverride===!0&&H!==null&&(ke=H),ve.layers.test(z.layers)&&mh(ve,U,z,fe,ke,Ie)}}function mh(x,U,z,H,N,ee){x.onBeforeRender(y,U,z,H,N,ee),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(y,U,z,H,x,ee),N.transparent===!0&&N.side===Bt&&N.forceSinglePass===!1?(N.side=Vt,N.needsUpdate=!0,y.renderBufferDirect(z,U,H,N,x,ee),N.side=xi,N.needsUpdate=!0,y.renderBufferDirect(z,U,H,N,x,ee),N.side=Bt):y.renderBufferDirect(z,U,H,N,x,ee),x.onAfterRender(y,U,z,H,N,ee)}function io(x,U,z){U.isScene!==!0&&(U=Ce);const H=Se.get(x),N=p.state.lights,ee=p.state.shadowsArray,le=N.state.version,ve=X.getParameters(x,N.state,ee,U,z),fe=X.getProgramCacheKey(ve);let Ie=H.programs;H.environment=x.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(x.isMeshStandardMaterial?Et:kt).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ie===void 0&&(x.addEventListener("dispose",q),Ie=new Map,H.programs=Ie);let ke=Ie.get(fe);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===le)return _h(x,ve),ke}else ve.uniforms=X.getUniforms(x),x.onBeforeCompile(ve,y),ke=X.acquireProgram(ve,fe),Ie.set(fe,ke),H.uniforms=ve.uniforms;const Pe=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),_h(x,ve),H.needsLights=Dp(x),H.lightsStateVersion=le,H.needsLights&&(Pe.ambientLightColor.value=N.state.ambient,Pe.lightProbe.value=N.state.probe,Pe.directionalLights.value=N.state.directional,Pe.directionalLightShadows.value=N.state.directionalShadow,Pe.spotLights.value=N.state.spot,Pe.spotLightShadows.value=N.state.spotShadow,Pe.rectAreaLights.value=N.state.rectArea,Pe.ltc_1.value=N.state.rectAreaLTC1,Pe.ltc_2.value=N.state.rectAreaLTC2,Pe.pointLights.value=N.state.point,Pe.pointLightShadows.value=N.state.pointShadow,Pe.hemisphereLights.value=N.state.hemi,Pe.directionalShadowMap.value=N.state.directionalShadowMap,Pe.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pe.spotShadowMap.value=N.state.spotShadowMap,Pe.spotLightMatrix.value=N.state.spotLightMatrix,Pe.spotLightMap.value=N.state.spotLightMap,Pe.pointShadowMap.value=N.state.pointShadowMap,Pe.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function gh(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=qo.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function _h(x,U){const z=Se.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Rp(x,U,z,H,N){U.isScene!==!0&&(U=Ce),Ge.resetTextureUnits();const ee=U.fog,le=H.isMeshStandardMaterial?U.environment:null,ve=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qt,fe=(H.isMeshStandardMaterial?Et:kt).get(H.envMap||le),Ie=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,ct=!!z.morphAttributes.color;let Mt=Ni;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=pt!==void 0?pt.length:0,De=Se.get(H),yt=p.state.lights;if(et===!0&&($===!0||x!==S)){const Yt=x===S&&H.id===M;ie.setState(H,x,Yt)}let Ze=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==yt.state.version||De.outputColorSpace!==ve||N.isBatchedMesh&&De.batching===!1||!N.isBatchedMesh&&De.batching===!0||N.isBatchedMesh&&De.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&De.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&De.instancing===!1||!N.isInstancedMesh&&De.instancing===!0||N.isSkinnedMesh&&De.skinning===!1||!N.isSkinnedMesh&&De.skinning===!0||N.isInstancedMesh&&De.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&De.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&De.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&De.instancingMorph===!1&&N.morphTexture!==null||De.envMap!==fe||H.fog===!0&&De.fog!==ee||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ie.numPlanes||De.numIntersection!==ie.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==ke||De.morphTargets!==Pe||De.morphNormals!==qe||De.morphColors!==ct||De.toneMapping!==Mt||De.morphTargetsCount!==lt)&&(Ze=!0):(Ze=!0,De.__version=H.version);let hn=De.currentProgram;Ze===!0&&(hn=io(H,U,N));let fs=!1,un=!1,lr=!1;const St=hn.getUniforms(),gn=De.uniforms;if(ye.useProgram(hn.program)&&(fs=!0,un=!0,lr=!0),H.id!==M&&(M=H.id,un=!0),fs||S!==x){ye.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),St.setValue(P,"projectionMatrix",x.projectionMatrix),St.setValue(P,"viewMatrix",x.matrixWorldInverse);const sn=St.map.cameraPosition;sn!==void 0&&sn.setValue(P,_e.setFromMatrixPosition(x.matrixWorld)),Ne.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&St.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,un=!0,lr=!0)}if(N.isSkinnedMesh){St.setOptional(P,N,"bindMatrix"),St.setOptional(P,N,"bindMatrixInverse");const Yt=N.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),St.setValue(P,"boneTexture",Yt.boneTexture,Ge))}N.isBatchedMesh&&(St.setOptional(P,N,"batchingTexture"),St.setValue(P,"batchingTexture",N._matricesTexture,Ge),St.setOptional(P,N,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",N._indirectTexture,Ge),St.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",N._colorsTexture,Ge));const _n=z.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&te.update(N,z,hn),(un||De.receiveShadow!==N.receiveShadow)&&(De.receiveShadow=N.receiveShadow,St.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(gn.envMap.value=fe,gn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),un&&(St.setValue(P,"toneMappingExposure",y.toneMappingExposure),De.needsLights&&Pp(gn,lr),ee&&H.fog===!0&&K.refreshFogUniforms(gn,ee),K.refreshMaterialUniforms(gn,H,G,Y,p.state.transmissionRenderTarget[x.id]),qo.upload(P,gh(De),gn,Ge)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(qo.upload(P,gh(De),gn,Ge),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&St.setValue(P,"center",N.center),St.setValue(P,"modelViewMatrix",N.modelViewMatrix),St.setValue(P,"normalMatrix",N.normalMatrix),St.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yt=H.uniformsGroups;for(let sn=0,ba=Yt.length;sn<ba;sn++){const Vi=Yt[sn];He.update(Vi,hn),He.bind(Vi,hn)}}return hn}function Pp(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Dp(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,U,z){const H=Se.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Se.get(x.texture).__webglTexture=U,Se.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const z=Se.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Lp=P.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){L=x,C=U,R=z;let H=!0,N=null,ee=!1,le=!1;if(x){const fe=Se.get(x);if(fe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(fe.__webglFramebuffer===void 0)Ge.setupRenderTarget(x);else if(fe.__hasExternalTextures)Ge.rebindTextures(x,Se.get(x.texture).__webglTexture,Se.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Pe=x.depthTexture;if(fe.__boundDepthTexture!==Pe){if(Pe!==null&&Se.has(Pe)&&(x.width!==Pe.image.width||x.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(x)}}const Ie=x.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(le=!0);const ke=Se.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?N=ke[U][z]:N=ke[U],ee=!0):x.samples>0&&Ge.useMultisampledRTT(x)===!1?N=Se.get(x).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[z]:N=ke,D.copy(x.viewport),k.copy(x.scissor),B=x.scissorTest}else D.copy(Re).multiplyScalar(G).floor(),k.copy(Xe).multiplyScalar(G).floor(),B=ut;if(z!==0&&(N=Lp),ye.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&ye.drawBuffers(x,N),ye.viewport(D),ye.scissor(k),ye.setScissorTest(B),ee){const fe=Se.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,z)}else if(le){const fe=U;for(let Ie=0;Ie<x.textures.length;Ie++){const ke=Se.get(x.textures[Ie]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ie,ke.__webglTexture,z,fe)}}else if(x!==null&&z!==0){const fe=Se.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(x,U,z,H,N,ee,le,ve=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){ye.bindFramebuffer(P.FRAMEBUFFER,fe);try{const Ie=x.textures[ve],ke=Ie.format,Pe=Ie.type;if(!Ne.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-H&&z>=0&&z<=x.height-N&&(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(U,z,H,N,Ee.convert(ke),Ee.convert(Pe),ee))}finally{const Ie=L!==null?Se.get(L).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,H,N,ee,le,ve=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe)if(U>=0&&U<=x.width-H&&z>=0&&z<=x.height-N){ye.bindFramebuffer(P.FRAMEBUFFER,fe);const Ie=x.textures[ve],ke=Ie.format,Pe=Ie.type;if(!Ne.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),P.readPixels(U,z,H,N,Ee.convert(ke),Ee.convert(Pe),0);const ct=L!==null?Se.get(L).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,ct);const Mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Um(P,Mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(qe),P.deleteSync(Mt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,z=0){const H=Math.pow(2,-z),N=Math.floor(x.image.width*H),ee=Math.floor(x.image.height*H),le=U!==null?U.x:0,ve=U!==null?U.y:0;Ge.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,le,ve,N,ee),ye.unbindTexture()};const Ip=P.createFramebuffer(),Up=P.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,H=null,N=0,ee=null){ee===null&&(N!==0?(Gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=N,N=0):ee=0);let le,ve,fe,Ie,ke,Pe,qe,ct,Mt;const pt=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(z!==null)le=z.max.x-z.min.x,ve=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,Ie=z.min.x,ke=z.min.y,Pe=z.isBox3?z.min.z:0;else{const _n=Math.pow(2,-N);le=Math.floor(pt.width*_n),ve=Math.floor(pt.height*_n),x.isDataArrayTexture?fe=pt.depth:x.isData3DTexture?fe=Math.floor(pt.depth*_n):fe=1,Ie=0,ke=0,Pe=0}H!==null?(qe=H.x,ct=H.y,Mt=H.z):(qe=0,ct=0,Mt=0);const lt=Ee.convert(U.format),De=Ee.convert(U.type);let yt;U.isData3DTexture?(Ge.setTexture3D(U,0),yt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ge.setTexture2DArray(U,0),yt=P.TEXTURE_2D_ARRAY):(Ge.setTexture2D(U,0),yt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),hn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),fs=P.getParameter(P.UNPACK_SKIP_PIXELS),un=P.getParameter(P.UNPACK_SKIP_ROWS),lr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pe);const St=x.isDataArrayTexture||x.isData3DTexture,gn=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const _n=Se.get(x),Yt=Se.get(U),sn=Se.get(_n.__renderTarget),ba=Se.get(Yt.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,sn.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,ba.__webglFramebuffer);for(let Vi=0;Vi<fe;Vi++)St&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(x).__webglTexture,N,Pe+Vi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,ee,Mt+Vi)),P.blitFramebuffer(Ie,ke,le,ve,qe,ct,le,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||Se.has(x)){const _n=Se.get(x),Yt=Se.get(U);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Ip),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Up);for(let sn=0;sn<fe;sn++)St?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_n.__webglTexture,N,Pe+sn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,_n.__webglTexture,N),gn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.__webglTexture,ee,Mt+sn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yt.__webglTexture,ee),N!==0?P.blitFramebuffer(Ie,ke,le,ve,qe,ct,le,ve,P.COLOR_BUFFER_BIT,P.NEAREST):gn?P.copyTexSubImage3D(yt,ee,qe,ct,Mt+sn,Ie,ke,le,ve):P.copyTexSubImage2D(yt,ee,qe,ct,Ie,ke,le,ve);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else gn?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(yt,ee,qe,ct,Mt,le,ve,fe,lt,De,pt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,ee,qe,ct,Mt,le,ve,fe,lt,pt.data):P.texSubImage3D(yt,ee,qe,ct,Mt,le,ve,fe,lt,De,pt):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ee,qe,ct,le,ve,lt,De,pt.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ee,qe,ct,pt.width,pt.height,lt,pt.data):P.texSubImage2D(P.TEXTURE_2D,ee,qe,ct,le,ve,lt,De,pt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,hn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,fs),P.pixelStorei(P.UNPACK_SKIP_ROWS,un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,lr),ee===0&&U.generateMipmaps&&P.generateMipmap(yt),ye.unbindTexture()},this.initRenderTarget=function(x){Se.get(x).__webglFramebuffer===void 0&&Ge.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ge.setTextureCube(x,0):x.isData3DTexture?Ge.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ge.setTexture2DArray(x,0):Ge.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,ye.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Pr=30,qn=95,Ou=0,Fu=180,zs=6e3,Bu=5,Iy=1.6,Uy=1.5,Ny=3.2,ky=.32,Oy=1,Fy=11,By=.9,zu=[1,.85,.74,.65,.58,.52,.47,.43,.4],Hu=9,zy=.11,Hy=.16,Vy=1.22,Gy=1.13,Us=100,Vu=1.15,Wy=.3,Xy=.14,jy=.5,$y=.75,gi=["shot","sub","sp_shot","sp_melee"],ql=["n","side","fwd"],Fi={brave:{id:"brave",name:"ブレイヴ",cost:2e3,hp:620,role:"バランス",desc:"素直な性能。全距離をこなす基本機体",palette:{main:"#e9eef5",accent:"#2f6fd0",trim:"#d8322f",joint:"#8d97a6",eye:"#ffd23f",beam:"#ff5d7a",flame:"#8fd6ff"},shape:{head:"visor",shoulder:"pad",back:"pack",gun:"rifle"},walk:12,bdSpeed:27,bdDrain:24,stepSpeed:31,stepCost:17,stepDur:.34,riseSpeed:15,riseDrain:27,airMove:15,meleeCost:14,boostRecover:100,weapons:{shot:{label:"PR",name:"パルスライフル",kind:"beam",ammo:8,reload:3,dmg:70,down:2,speed:150,life:1.4,cooldown:.62,fireDelay:.16,homing:.9,radius:.45},sub:{label:"HB",name:"ヘヴィバズーカ",kind:"shell",ammo:2,reload:6,dmg:95,down:3,speed:78,life:2.4,cooldown:.95,fireDelay:.26,homing:.45,radius:.9,splash:6,arc:.22},sp_shot:{label:"WA",name:"ウェイトアンカー",kind:"shell",ammo:2,reload:8,dmg:110,down:5,speed:52,life:2,cooldown:1.1,fireDelay:.34,homing:.7,radius:1.2,arc:.42},sp_melee:{label:"PL",name:"プラズマランス",kind:"melee_special",ammo:1,reload:9,dmg:130,down:5,cooldown:1.4,rushSpeed:52,rushRange:46,rushTime:.9}},melee:{range:38,hitRadius:4.6,n:{label:"N格闘",rushSpeed:44,rushTime:.95,stages:[{dmg:60,down:.8,dur:.42,knock:2,pull:!0},{dmg:52,down:.8,dur:.4,knock:2,pull:!0},{dmg:88,down:3,dur:.62,knock:18,pull:!1}]},side:{label:"横格闘",rushSpeed:50,rushTime:.9,arc:.6,stages:[{dmg:55,down:.8,dur:.38,knock:2,pull:!0},{dmg:80,down:3,dur:.58,knock:16,pull:!1}]},fwd:{label:"前格闘",rushSpeed:58,rushTime:.8,stages:[{dmg:75,down:2,dur:.5,knock:6,pull:!0},{dmg:85,down:3,dur:.6,knock:20,pull:!1}]}}},aegis:{id:"aegis",name:"アイギス",cost:2e3,hp:640,role:"射撃",desc:"シールドと弾幕。距離を取って撃ち続ける",palette:{main:"#dfe6ef",accent:"#1f5f9e",trim:"#f0a03c",joint:"#7f8a99",eye:"#6effc0",beam:"#5fe3ff",flame:"#9be8ff"},shape:{head:"dome",shoulder:"shield",back:"wings",gun:"twin",chestDuct:!1},walk:11.5,bdSpeed:25,bdDrain:22,stepSpeed:30,stepCost:16,stepDur:.36,riseSpeed:15,riseDrain:25,airMove:14,meleeCost:16,boostRecover:100,weapons:{shot:{label:"TW",name:"ツインビーム",kind:"spread",ammo:9,reload:3.4,dmg:42,down:1.1,speed:150,life:1.4,cooldown:.66,fireDelay:.15,homing:.85,radius:.4,count:2,spreadAngle:.045},sub:{label:"MP",name:"ミサイルポッド",kind:"missile",ammo:4,reload:6.5,dmg:34,down:.8,speed:92,life:2.6,cooldown:1,fireDelay:.2,homing:1.7,radius:.5,splash:5,count:4,launchGap:.1,arc:.3},sp_shot:{label:"SB",name:"拡散ビーム",kind:"spread",ammo:2,reload:7.5,dmg:32,down:.7,speed:132,life:1.2,cooldown:1,fireDelay:.24,homing:.35,radius:.42,count:5,spreadAngle:.2},sp_melee:{label:"SH",name:"シールドバッシュ",kind:"melee_special",ammo:1,reload:8.5,dmg:105,down:5,cooldown:1.3,rushSpeed:48,rushRange:38,rushTime:.85}},melee:{range:34,hitRadius:4.6,n:{label:"N格闘",rushSpeed:40,rushTime:.9,stages:[{dmg:58,down:1,dur:.46,knock:3,pull:!0},{dmg:80,down:3,dur:.62,knock:18,pull:!1}]},side:{label:"横格闘",rushSpeed:46,rushTime:.85,arc:.5,stages:[{dmg:55,down:1,dur:.44,knock:3,pull:!0},{dmg:76,down:3,dur:.58,knock:16,pull:!1}]},fwd:{label:"前格闘",rushSpeed:52,rushTime:.8,stages:[{dmg:88,down:3,dur:.64,knock:20,pull:!1}]}}},garm:{id:"garm",name:"ガルム",cost:2e3,hp:600,role:"手数",desc:"マシンガンで削る。単発は軽いが手数で押す",palette:{main:"#4f7a52",accent:"#2f4d33",trim:"#8fae7a",joint:"#5c6157",eye:"#ff4d4d",beam:"#ffb03a",flame:"#ffb96b"},shape:{head:"mono",shoulder:"spike",back:"pack",gun:"machinegun",pipes:!0,legMain:!0,chestDuct:!1,kneeGuard:!1,calfThruster:!0,forearmFin:!1},walk:11.5,bdSpeed:26,bdDrain:23,stepSpeed:30,stepCost:17,stepDur:.34,riseSpeed:14.5,riseDrain:26,airMove:14,meleeCost:14,boostRecover:100,weapons:{shot:{label:"AM",name:"アサルトマシンガン",kind:"bullet",ammo:24,reload:4,dmg:16,down:.35,speed:135,life:1.2,cooldown:.1,fireDelay:.08,homing:.6,radius:.3,burst:3,burstGap:.09},sub:{label:"SB",name:"ショートバズーカ",kind:"shell",ammo:2,reload:6.5,dmg:90,down:3,speed:74,life:2.4,cooldown:.95,fireDelay:.28,homing:.45,radius:.9,splash:6,arc:.24},sp_shot:{label:"GR",name:"グレネード",kind:"shell",ammo:3,reload:7,dmg:70,down:2.5,speed:46,life:1.9,cooldown:.8,fireDelay:.24,homing:.3,radius:1,splash:7,arc:.55},sp_melee:{label:"TK",name:"タックル",kind:"melee_special",ammo:1,reload:8,dmg:100,down:5,cooldown:1.3,rushSpeed:50,rushRange:42,rushTime:.85}},melee:{range:36,hitRadius:4.6,n:{label:"N格闘",rushSpeed:42,rushTime:.95,stages:[{dmg:65,down:1,dur:.46,knock:3,pull:!0},{dmg:58,down:1,dur:.44,knock:3,pull:!0},{dmg:82,down:3,dur:.6,knock:20,pull:!1}]},side:{label:"横格闘",rushSpeed:48,rushTime:.9,arc:.55,stages:[{dmg:60,down:1,dur:.42,knock:3,pull:!0},{dmg:78,down:3,dur:.58,knock:18,pull:!1}]},fwd:{label:"前格闘",rushSpeed:54,rushTime:.8,stages:[{dmg:95,down:3,dur:.62,knock:22,pull:!1}]}}},nox:{id:"nox",name:"ノクス",cost:2500,hp:620,role:"格闘",desc:"射撃は貧弱。とにかく近づいて4段で削り切る",palette:{main:"#4a3a6b",accent:"#1b1626",trim:"#b98cf0",joint:"#6b6f80",eye:"#c96bff",beam:"#b06bff",flame:"#c79bff"},shape:{head:"horn",shoulder:"pad",back:"booster",gun:"none",saberCount:2,chestDuct:!1,legMain:!0},walk:13.5,bdSpeed:31,bdDrain:21,stepSpeed:35,stepCost:15,stepDur:.32,riseSpeed:16,riseDrain:25,airMove:18,meleeCost:11,boostRecover:100,weapons:{shot:{label:"HG",name:"ハンドガン",kind:"bullet",ammo:6,reload:4.5,dmg:34,down:1,speed:140,life:1.1,cooldown:.5,fireDelay:.12,homing:.55,radius:.35},sub:{label:"TB",name:"投擲ブレード",kind:"spread",ammo:2,reload:6,dmg:42,down:1,speed:120,life:1.3,cooldown:.8,fireDelay:.18,homing:.7,radius:.4,count:3,spreadAngle:.16},sp_shot:{label:"SL",name:"スラッシュハーケン",kind:"shell",ammo:2,reload:7,dmg:65,down:2,speed:95,life:1.4,cooldown:.85,fireDelay:.2,homing:.85,radius:.6},sp_melee:{label:"BL",name:"瞬間突撃",kind:"melee_special",ammo:2,reload:7.5,dmg:120,down:5,cooldown:1.1,rushSpeed:72,rushRange:62,rushTime:1.1}},melee:{range:46,hitRadius:4.8,n:{label:"N格闘",rushSpeed:52,rushTime:1.05,stages:[{dmg:58,down:.6,dur:.34,knock:2,pull:!0},{dmg:50,down:.6,dur:.32,knock:2,pull:!0},{dmg:48,down:.6,dur:.32,knock:2,pull:!0},{dmg:96,down:3,dur:.58,knock:22,pull:!1}]},side:{label:"横格闘",rushSpeed:58,rushTime:1,arc:.85,stages:[{dmg:56,down:.6,dur:.32,knock:2,pull:!0},{dmg:52,down:.6,dur:.32,knock:2,pull:!0},{dmg:88,down:3,dur:.54,knock:20,pull:!1}]},fwd:{label:"前格闘",rushSpeed:68,rushTime:.9,stages:[{dmg:70,down:1.5,dur:.4,knock:4,pull:!0},{dmg:105,down:3.5,dur:.62,knock:24,pull:!1}]}}},tempest:{id:"tempest",name:"テンペスト",cost:2500,hp:720,role:"砲撃",desc:"重い・遅い・硬い。当たれば一撃が大きい",palette:{main:"#8a8f99",accent:"#c8722a",trim:"#3a3f4a",joint:"#606672",eye:"#ffcf4d",beam:"#ffa040",flame:"#ffc46b"},shape:{head:"visor",shoulder:"cannon",back:"cannon",gun:"cannon",legMain:!0,forearmFin:!1},walk:10,bdSpeed:23,bdDrain:26,stepSpeed:27,stepCost:19,stepDur:.36,riseSpeed:13.5,riseDrain:29,airMove:12,meleeCost:18,boostRecover:100,weapons:{shot:{label:"LC",name:"ロングキャノン",kind:"shell",ammo:5,reload:4.2,dmg:105,down:2.5,speed:110,life:2.2,cooldown:1.05,fireDelay:.3,homing:.5,radius:.8,splash:5,arc:.1},sub:{label:"MS",name:"ミサイル斉射",kind:"missile",ammo:6,reload:7.5,dmg:36,down:.7,speed:88,life:2.8,cooldown:1.2,fireDelay:.24,homing:1.6,radius:.5,splash:5,count:6,launchGap:.09,arc:.42},sp_shot:{label:"HE",name:"榴弾",kind:"spread",ammo:2,reload:8,dmg:44,down:1,speed:70,life:2,cooldown:1.15,fireDelay:.3,homing:.25,radius:.8,splash:6,count:4,spreadAngle:.17,arc:.35},sp_melee:{label:"AK",name:"アンカー",kind:"melee_special",ammo:1,reload:9,dmg:110,down:5,cooldown:1.5,rushSpeed:44,rushRange:40,rushTime:.9}},melee:{range:32,hitRadius:4.8,n:{label:"N格闘",rushSpeed:38,rushTime:.9,stages:[{dmg:75,down:1.5,dur:.52,knock:4,pull:!0},{dmg:98,down:3,dur:.68,knock:24,pull:!1}]},side:{label:"横格闘",rushSpeed:42,rushTime:.85,arc:.4,stages:[{dmg:92,down:3,dur:.62,knock:20,pull:!1}]},fwd:{label:"前格闘",rushSpeed:48,rushTime:.8,stages:[{dmg:115,down:3.5,dur:.72,knock:26,pull:!1}]}}},vulca:{id:"vulca",name:"ヴァルカ",cost:3e3,hp:700,role:"高性能",desc:"ファンネルと照射ビーム。ただし落ちると3000減る",palette:{main:"#c2352f",accent:"#1e2029",trim:"#e2b53c",joint:"#8d97a6",eye:"#7ef0ff",beam:"#ff7de0",flame:"#ffa8f0"},shape:{head:"crest",shoulder:"binder",back:"funnels",gun:"rifle"},walk:13,bdSpeed:30,bdDrain:22,stepSpeed:34,stepCost:16,stepDur:.34,riseSpeed:16.5,riseDrain:25,airMove:17,meleeCost:13,boostRecover:100,weapons:{shot:{label:"HR",name:"ハイビームライフル",kind:"beam",ammo:7,reload:3.2,dmg:80,down:2,speed:165,life:1.5,cooldown:.6,fireDelay:.15,homing:.95,radius:.5},sub:{label:"FN",name:"ファンネル",kind:"funnel",ammo:6,reload:8.5,dmg:38,down:.9,speed:150,life:1,cooldown:1.5,fireDelay:.2,homing:.8,radius:.4,count:3,bitTime:3.2,bitOrbit:16,bitFireGap:.75},sp_shot:{label:"LZ",name:"照射ビーム",kind:"laser",ammo:1,reload:11,dmg:26,down:.55,tickGap:.12,cooldown:2.2,fireDelay:.42,duration:1.5,range:150,radius:1,turn:1.5},sp_melee:{label:"HD",name:"高速突撃",kind:"melee_special",ammo:1,reload:8,dmg:135,down:5,cooldown:1.3,rushSpeed:64,rushRange:56,rushTime:1}},melee:{range:40,hitRadius:4.6,n:{label:"N格闘",rushSpeed:48,rushTime:.95,stages:[{dmg:62,down:.8,dur:.4,knock:2,pull:!0},{dmg:55,down:.8,dur:.38,knock:2,pull:!0},{dmg:92,down:3,dur:.6,knock:20,pull:!1}]},side:{label:"横格闘",rushSpeed:54,rushTime:.9,arc:.7,stages:[{dmg:58,down:.8,dur:.36,knock:2,pull:!0},{dmg:52,down:.8,dur:.36,knock:2,pull:!0},{dmg:84,down:3,dur:.56,knock:18,pull:!1}]},fwd:{label:"前格闘",rushSpeed:62,rushTime:.8,stages:[{dmg:80,down:2,dur:.48,knock:6,pull:!0},{dmg:92,down:3,dur:.58,knock:22,pull:!1}]}}},lava:{id:"lava",name:"ラーヴァ",cost:1500,hp:480,role:"軽量",desc:"紙装甲だが最速。落ちても1500しか減らない",palette:{main:"#e8c33a",accent:"#2b2b30",trim:"#ff8a3c",joint:"#7c8189",eye:"#7ef0ff",beam:"#ffd45c",flame:"#ffe08a"},shape:{head:"twin",shoulder:"drum",back:"booster",gun:"machinegun",legMain:!0,chestDuct:!1,forearmFin:!1},walk:14,bdSpeed:33,bdDrain:20,stepSpeed:37,stepCost:13,stepDur:.3,riseSpeed:17,riseDrain:23,airMove:19,meleeCost:10,boostRecover:100,weapons:{shot:{label:"VC",name:"バルカン",kind:"bullet",ammo:30,reload:3.6,dmg:13,down:.3,speed:140,life:1.1,cooldown:.09,fireDelay:.06,homing:.55,radius:.28,burst:4,burstGap:.07},sub:{label:"MM",name:"マイクロミサイル",kind:"missile",ammo:3,reload:5.5,dmg:26,down:.6,speed:96,life:2.2,cooldown:.85,fireDelay:.16,homing:1.8,radius:.4,splash:4,count:3,launchGap:.08,arc:.24},sp_shot:{label:"SP",name:"スプレッド",kind:"spread",ammo:3,reload:6,dmg:26,down:.6,speed:128,life:1.1,cooldown:.8,fireDelay:.18,homing:.4,radius:.36,count:3,spreadAngle:.15},sp_melee:{label:"DS",name:"ダッシュスラスト",kind:"melee_special",ammo:2,reload:6.5,dmg:88,down:5,cooldown:1,rushSpeed:74,rushRange:52,rushTime:.95}},melee:{range:36,hitRadius:4.4,n:{label:"N格闘",rushSpeed:54,rushTime:.95,stages:[{dmg:46,down:.6,dur:.32,knock:2,pull:!0},{dmg:42,down:.6,dur:.3,knock:2,pull:!0},{dmg:70,down:3,dur:.5,knock:18,pull:!1}]},side:{label:"横格闘",rushSpeed:60,rushTime:.9,arc:.9,stages:[{dmg:44,down:.6,dur:.3,knock:2,pull:!0},{dmg:66,down:3,dur:.48,knock:16,pull:!1}]},fwd:{label:"前格闘",rushSpeed:70,rushTime:.8,stages:[{dmg:78,down:3,dur:.52,knock:20,pull:!1}]}}},vespa:{id:"vespa",name:"ヴェスパ",cost:1500,hp:470,role:"軽量格闘",desc:"射撃はほぼ無い。速さで懐に入る一点勝負",palette:{main:"#f2f4f7",accent:"#e0562c",trim:"#2b3038",joint:"#8d939c",eye:"#ffd23f",beam:"#ff9a3c",flame:"#ffc07a"},shape:{head:"horn",shoulder:"wing",back:"booster",gun:"none",chestDuct:!1},walk:14.5,bdSpeed:34,bdDrain:20,stepSpeed:38,stepCost:13,stepDur:.3,riseSpeed:17.5,riseDrain:23,airMove:20,meleeCost:9,boostRecover:100,weapons:{shot:{label:"NL",name:"ニードル",kind:"bullet",ammo:4,reload:5,dmg:28,down:.9,speed:150,life:1,cooldown:.55,fireDelay:.1,homing:.5,radius:.3},sub:{label:"TK",name:"投擲ナイフ",kind:"spread",ammo:2,reload:5.5,dmg:36,down:.9,speed:130,life:1.2,cooldown:.7,fireDelay:.14,homing:.65,radius:.35,count:2,spreadAngle:.1},sp_shot:{label:"HK",name:"ワイヤーフック",kind:"shell",ammo:2,reload:6.5,dmg:55,down:2,speed:105,life:1.3,cooldown:.8,fireDelay:.16,homing:.9,radius:.55},sp_melee:{label:"PS",name:"ピアススラスト",kind:"melee_special",ammo:2,reload:6.5,dmg:105,down:5,cooldown:1,rushSpeed:78,rushRange:58,rushTime:1.05}},melee:{range:44,hitRadius:4.4,n:{label:"N格闘",rushSpeed:56,rushTime:1.05,stages:[{dmg:48,down:.5,dur:.3,knock:2,pull:!0},{dmg:44,down:.5,dur:.28,knock:2,pull:!0},{dmg:42,down:.5,dur:.28,knock:2,pull:!0},{dmg:80,down:3,dur:.52,knock:20,pull:!1}]},side:{label:"横格闘",rushSpeed:62,rushTime:1,arc:.95,stages:[{dmg:46,down:.5,dur:.28,knock:2,pull:!0},{dmg:44,down:.5,dur:.28,knock:2,pull:!0},{dmg:74,down:3,dur:.48,knock:18,pull:!1}]},fwd:{label:"前格闘",rushSpeed:72,rushTime:.9,stages:[{dmg:58,down:1.5,dur:.34,knock:4,pull:!0},{dmg:88,down:3.5,dur:.54,knock:22,pull:!1}]}}},orca:{id:"orca",name:"オルカ",cost:2e3,hp:610,role:"変則",desc:"貫通ビームと戻ってくるブーメラン。射線が読みにくい",palette:{main:"#26324a",accent:"#c9d3e2",trim:"#3fd0c0",joint:"#79828f",eye:"#3fd0c0",beam:"#5fffe0",flame:"#8ffff0"},shape:{head:"mask",shoulder:"blade",back:"blades",gun:"bow",legMain:!0},walk:12,bdSpeed:27,bdDrain:23,stepSpeed:31,stepCost:16,stepDur:.34,riseSpeed:15,riseDrain:26,airMove:15,meleeCost:13,boostRecover:100,weapons:{shot:{label:"PB",name:"貫通ビーム",kind:"beam",pierce:!0,ammo:6,reload:3.6,dmg:62,down:1.8,speed:175,life:1.5,cooldown:.7,fireDelay:.18,homing:.55,radius:.4},sub:{label:"BM",name:"ブーメラン",kind:"boomerang",ammo:2,reload:6,dmg:58,down:1.6,speed:82,life:3,cooldown:1,fireDelay:.2,homing:.5,radius:.9,turnAt:.6},sp_shot:{label:"FB",name:"拡散ビーム",kind:"spread",ammo:2,reload:7,dmg:30,down:.7,speed:140,life:1.2,cooldown:.95,fireDelay:.22,homing:.4,radius:.4,count:4,spreadAngle:.18},sp_melee:{label:"SW",name:"ソードスロー",kind:"melee_special",ammo:1,reload:8,dmg:112,down:5,cooldown:1.25,rushSpeed:56,rushRange:46,rushTime:.9}},melee:{range:38,hitRadius:4.6,n:{label:"N格闘",rushSpeed:46,rushTime:.95,stages:[{dmg:58,down:.8,dur:.4,knock:2,pull:!0},{dmg:52,down:.8,dur:.38,knock:2,pull:!0},{dmg:84,down:3,dur:.58,knock:18,pull:!1}]},side:{label:"横格闘",rushSpeed:52,rushTime:.9,arc:.7,stages:[{dmg:54,down:.8,dur:.38,knock:2,pull:!0},{dmg:78,down:3,dur:.56,knock:16,pull:!1}]},fwd:{label:"前格闘",rushSpeed:60,rushTime:.8,stages:[{dmg:70,down:2,dur:.46,knock:6,pull:!0},{dmg:82,down:3,dur:.58,knock:20,pull:!1}]}}},grave:{id:"grave",name:"グラーヴ",cost:2500,hp:690,role:"重格闘",desc:"両刃と肩ブレード。遅いが一撃が重い格闘機",palette:{main:"#241f2b",accent:"#8e2436",trim:"#d4b25a",joint:"#5f6470",eye:"#ff5a5a",beam:"#ff4d6a",flame:"#ff8a9a"},shape:{head:"crest",shoulder:"blade",back:"wings",gun:"none",saberCount:2,legMain:!0,chestDuct:!1},walk:11.5,bdSpeed:27,bdDrain:23,stepSpeed:30,stepCost:16,stepDur:.34,riseSpeed:14.5,riseDrain:26,airMove:14,meleeCost:13,boostRecover:100,weapons:{shot:{label:"HC",name:"ハンドキャノン",kind:"shell",ammo:4,reload:4.5,dmg:72,down:2,speed:100,life:1.8,cooldown:.85,fireDelay:.22,homing:.5,radius:.7,splash:4,arc:.12},sub:{label:"BT",name:"ブレードスロー",kind:"boomerang",ammo:2,reload:6.5,dmg:64,down:1.8,speed:76,life:3,cooldown:1.05,fireDelay:.22,homing:.45,radius:.95,turnAt:.55},sp_shot:{label:"SH",name:"衝撃波",kind:"spread",ammo:2,reload:7.5,dmg:40,down:1,speed:88,life:1.1,cooldown:1,fireDelay:.26,homing:.2,radius:.7,count:4,spreadAngle:.22},sp_melee:{label:"GC",name:"両断",kind:"melee_special",ammo:1,reload:8.5,dmg:145,down:5,cooldown:1.4,rushSpeed:58,rushRange:48,rushTime:.95}},melee:{range:40,hitRadius:4.8,n:{label:"N格闘",rushSpeed:48,rushTime:1,stages:[{dmg:70,down:1,dur:.46,knock:3,pull:!0},{dmg:64,down:1,dur:.44,knock:3,pull:!0},{dmg:104,down:3,dur:.66,knock:22,pull:!1}]},side:{label:"横格闘",rushSpeed:54,rushTime:.95,arc:.65,stages:[{dmg:66,down:1,dur:.42,knock:3,pull:!0},{dmg:96,down:3,dur:.62,knock:20,pull:!1}]},fwd:{label:"前格闘",rushSpeed:62,rushTime:.85,stages:[{dmg:124,down:3.5,dur:.7,knock:26,pull:!1}]}}},titan:{id:"titan",name:"タイタン",cost:2500,hp:800,role:"重装",desc:"全機体で最も硬い。ガトリングで面を張る",palette:{main:"#3f4a3a",accent:"#8a7332",trim:"#d0a83c",joint:"#5a5f57",eye:"#ffb03a",beam:"#ffc24d",flame:"#ffcf80"},shape:{head:"dome",shoulder:"cannon",back:"tank",gun:"gatling",legMain:!0,forearmFin:!1},walk:9.5,bdSpeed:22,bdDrain:27,stepSpeed:26,stepCost:20,stepDur:.36,riseSpeed:13,riseDrain:30,airMove:11,meleeCost:19,boostRecover:100,weapons:{shot:{label:"GT",name:"ガトリング",kind:"bullet",ammo:40,reload:5,dmg:14,down:.28,speed:145,life:1.3,cooldown:.07,fireDelay:.08,homing:.55,radius:.3,burst:5,burstGap:.06},sub:{label:"HM",name:"重ミサイル",kind:"missile",ammo:4,reload:7.5,dmg:48,down:1,speed:82,life:3,cooldown:1.2,fireDelay:.26,homing:1.5,radius:.6,splash:6,count:4,launchGap:.12,arc:.38},sp_shot:{label:"MT",name:"迫撃砲",kind:"shell",ammo:2,reload:8,dmg:120,down:3.5,speed:58,life:2.4,cooldown:1.3,fireDelay:.34,homing:.3,radius:1.1,splash:8,arc:.6},sp_melee:{label:"CR",name:"圧殺",kind:"melee_special",ammo:1,reload:9,dmg:118,down:5,cooldown:1.5,rushSpeed:42,rushRange:36,rushTime:.85}},melee:{range:30,hitRadius:5,n:{label:"N格闘",rushSpeed:36,rushTime:.85,stages:[{dmg:82,down:1.5,dur:.54,knock:5,pull:!0},{dmg:106,down:3,dur:.72,knock:26,pull:!1}]},side:{label:"横格闘",rushSpeed:40,rushTime:.85,arc:.35,stages:[{dmg:98,down:3,dur:.66,knock:22,pull:!1}]},fwd:{label:"前格闘",rushSpeed:46,rushTime:.8,stages:[{dmg:126,down:3.5,dur:.76,knock:28,pull:!1}]}}},seraph:{id:"seraph",name:"セラフ",cost:3e3,hp:720,role:"万能",desc:"6基のファンネルと貫通ビーム。隙が無い代わりに3000",palette:{main:"#f4f6fa",accent:"#d9b04a",trim:"#4a9de0",joint:"#98a1ad",eye:"#8ff0ff",beam:"#7fd8ff",flame:"#bfeaff"},shape:{head:"visor",shoulder:"binder",back:"funnels",gun:"twin"},walk:13,bdSpeed:30,bdDrain:21,stepSpeed:34,stepCost:15,stepDur:.33,riseSpeed:16.5,riseDrain:24,airMove:17,meleeCost:13,boostRecover:100,weapons:{shot:{label:"PB",name:"貫通ビーム",kind:"beam",pierce:!0,ammo:7,reload:3.2,dmg:66,down:1.8,speed:180,life:1.5,cooldown:.62,fireDelay:.15,homing:.75,radius:.42},sub:{label:"FN",name:"ファンネル",kind:"funnel",ammo:6,reload:8,dmg:34,down:.8,speed:155,life:1,cooldown:1.4,fireDelay:.2,homing:.85,radius:.38,count:6,bitTime:3.6,bitOrbit:18,bitFireGap:.7},sp_shot:{label:"TB",name:"ツインビーム",kind:"spread",ammo:4,reload:5.5,dmg:44,down:1.1,speed:160,life:1.4,cooldown:.75,fireDelay:.16,homing:.8,radius:.4,count:2,spreadAngle:.05},sp_melee:{label:"RD",name:"急速接近",kind:"melee_special",ammo:1,reload:7.5,dmg:128,down:5,cooldown:1.25,rushSpeed:68,rushRange:58,rushTime:1}},melee:{range:40,hitRadius:4.6,n:{label:"N格闘",rushSpeed:50,rushTime:.95,stages:[{dmg:60,down:.8,dur:.38,knock:2,pull:!0},{dmg:54,down:.8,dur:.36,knock:2,pull:!0},{dmg:90,down:3,dur:.58,knock:20,pull:!1}]},side:{label:"横格闘",rushSpeed:56,rushTime:.9,arc:.75,stages:[{dmg:56,down:.8,dur:.36,knock:2,pull:!0},{dmg:52,down:.8,dur:.34,knock:2,pull:!0},{dmg:82,down:3,dur:.54,knock:18,pull:!1}]},fwd:{label:"前格闘",rushSpeed:64,rushTime:.8,stages:[{dmg:78,down:2,dur:.46,knock:6,pull:!0},{dmg:90,down:3,dur:.56,knock:22,pull:!1}]}}}},qy=["lava","vespa","brave","aegis","garm","orca","nox","grave","tempest","titan","vulca","seraph"];class Ky extends qd{constructor(){super();const e=new kn;e.deleteAttribute("uv");const t=new mn({side:Vt}),n=new mn,i=new cf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new be(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ef(e,n,6),a=new at;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new be(e,Ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new be(e,Ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new be(e,Ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new be(e,Ns(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new be(e,Ns(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new be(e,Ns(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ns(s){return new m0({color:0,emissive:16777215,emissiveIntensity:s})}function Gu(s,e){if(e===om)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===al||e===Fd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===al)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class pf extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new pS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Nr.extractUrlBase(e);o=Nr.resolveURL(l,this.path)}else o=Nr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ca(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===mf){try{o[$e.KHR_BINARY_GLTF]=new mS(e)}catch(u){i&&i(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new CS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new Jy;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new gS(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new _S;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new vS;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Yy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zy{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Cr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new cf(h),l.distance=u;break;case"spot":l=new U0(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Jy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ft}extendParams(e,t,n){const i=[];e.color=new ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(i)}}class Qy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class eS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(r)}}class tS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class nS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class iS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],qt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class sS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class rS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(a[0],a[1],a[2],qt),Promise.all(r)}}class oS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class aS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(a[0],a[1],a[2],qt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}}class cS{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class lS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class hS{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class uS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class dS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class fS{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class pS{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new ze,m=new A,p=new zi,b=new A(1,1,1),T=new ef(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&b.fromBufferAttribute(c.SCALE,y),T.setMatrixAt(y,_.compose(m,p,b));for(const y in c)if(y==="_COLOR_0"){const w=c[y];T.instanceColor=new ll(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);at.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const mf="glTF",Sr=12,Wu={JSON:1313821514,BIN:5130562};class mS{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Sr,r=new DataView(e,Sr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Wu.JSON){const l=new Uint8Array(e,Sr+o,a);this.content=n.decode(l)}else if(c===Wu.BIN){const l=Sr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=pl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=pl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ws[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,qt,d)})})}}class _S{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class vS{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class gf extends eo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,b=1-m,T=p-d+u;for(let y=0;y!==a;y++){const w=o[_+y+a],C=o[_+y+c]*h,R=o[g+y+a],L=o[g+y]*h;r[y]=b*w+T*C+m*R+p*L}return r}}const xS=new zi;class yS extends gf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return xS.fromArray(r).normalize().toArray(r),r}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xu={9728:tn,9729:pn,9984:Pd,9985:Vo,9986:Ar,9987:li},ju={33071:Ii,33648:ia,10497:Kn},oc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SS={CUBICSPLINE:void 0,LINEAR:Hr,STEP:zr},ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),s.DefaultMaterial}function Ki(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function TS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ES(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cc(t.attributes):e=s.indices+":"+cc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+cc(s.targets[n]);return e}function cc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ml(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const AS=new ze;class CS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new D0(this.options.manager):this.textureLoader=new O0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ca(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ki(r,a,i),Vn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Nr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=oc[i.type],a=Ws[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Lt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=oc[i.type],l=Ws[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let T=t.cache.get(b);T||(_=new l(a,p*f,i.count*f/h),T=new Kd(_,f/h),t.cache.add(b,T)),m=new Xr(T,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Lt(_,c,g);if(i.sparse!==void 0){const p=oc.SCALAR,b=Ws[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new b(o[1],T,i.sparse.count*p),C=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=w.length;R<L;R++){const M=w[R];if(m.setX(M,C[R*c]),c>=2&&m.setY(M,C[R*c+1]),c>=3&&m.setZ(M,C[R*c+2]),c>=4&&m.setW(M,C[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Xu[d.magFilter]||pn,h.minFilter=Xu[d.minFilter]||li,h.wrapS=ju[d.wrapS]||Kn,h.wrapT=ju[d.wrapT]||Kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==pn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Dt(_);m.needsUpdate=!0,d(m)}),t.load(Nr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Vn(u,o),u.userData.mimeType=o.mimeType||wS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Gl,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tf,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return mn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=i[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);const h=r.alphaMode||ac.OPAQUE;if(h===ac.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ac.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ft&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ft&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ft){const u=r.emissiveFactor;a.emissive=new ue().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&o!==ft&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Vn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ki(i,u,r),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return $u(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=ES(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=$u(new Pt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?MS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const b=l[f];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new o0(_,b):new be(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Gu(p.geometry,Fd):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Gu(p.geometry,al));else if(m.mode===Mn.LINES)p=new d0(_,b);else if(m.mode===Mn.LINE_STRIP)p=new Vl(_,b);else if(m.mode===Mn.LINE_LOOP)p=new f0(_,b);else if(m.mode===Mn.POINTS)p=new nf(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&TS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Vn(p,r),m.extensions&&Ki(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ki(i,u[0],r),u[0];const d=new Tt;r.extensions&&Ki(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new en($o.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new va(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zl(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let T=0,y=d.length;T<y;T++){const w=d[T],C=f[T],R=g[T],L=_[T],M=m[T];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const S=n._createAnimationTracks(w,C,R,L,M);if(S)for(let D=0;D<S.length;D++)p.push(S[D])}const b=new T0(r,void 0,p);return Vn(b,i),b})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,AS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Jd:l.length>1?h=new Tt:l.length===1?h=l[0]:h=new at,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Vn(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){const u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Tt;n.name&&(r.name=i.createUniqueName(n.name)),Vn(r,n),n.extensions&&Ki(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ci[r.path]===Ci.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ci[r.path]){case Ci.weights:l=Js;break;case Ci.rotation:l=Qs;break;case Ci.translation:case Ci.scale:l=er;break;default:n.itemSize===1?l=Js:l=er;break}const h=i.interpolation!==void 0?SS[i.interpolation]:Hr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ci[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ml(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Qs?yS:gf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RS(s,e,t){const n=e.attributes,i=new yi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),a.normalized){const h=ml(Ws[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,c=new A;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ml(Ws[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $u(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=pl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Vn(s,e),RS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?bS(s,e.targets,t):s})}const lc=new WeakMap;class _f extends ls{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new ca(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Rt,n).catch(n)}decodeDracoFile(e,t,n,i,r=qt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(lc.has(e)){const c=lc.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[r]={resolve:l,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),lc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Pt;e.index&&t.setIndex(new Lt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new Lt(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Rt)return;const n=new ue;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ke.colorSpaceToWorking(n,Rt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ca(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=PS.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function PS(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let b,T;if(l.useUniqueIDs)T=h[m],b=a.GetAttributeByUniqueId(d,T);else{if(T=a.GetAttributeId(d,o[h[m]]),T===-1)continue;b=a.GetAttribute(d,T)}const y=i(o,a,d,m,p,b);m==="color"&&(y.vertexColorSpace=l.vertexColorSpace),_.attributes.push(y)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,u,m,_,p);const b=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:b,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const Kl={city:{name:"ナイトシティ",desc:"夜の高層ビル街。遮蔽が多く、屋上を取り合う"},colony:{name:"コロニー内部",desc:"閉じた円筒。頭上に街が反り上がり、採光窓が光る"},ruins:{name:"廃墟",desc:"崩れた市街。低い瓦礫が多く、高さがばらばら"},canyon:{name:"渓谷",desc:"切り立った岩山。遮蔽は少なく大きい。開けた撃ち合い"}},DS=["city","colony","ruins","canyon"],rs="city",hc=s=>`/assault-frame-vs/${s}`;function vf(s,e){const t=[],n=a=>(s.add(a),t.push(a),a);n(new L0(e.hemiSky,e.hemiGround,e.hemi));const i=n(new Cr(e.keyColor,e.key));i.position.set(...e.keyPos),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),i.shadow.camera.near=20,i.shadow.camera.far=320;const r=72;i.shadow.camera.left=-r,i.shadow.camera.right=r,i.shadow.camera.top=r,i.shadow.camera.bottom=-r,i.shadow.bias=-.0012,n(new Cr(e.fillColor,e.fill)).position.set(...e.fillPos);for(const a of e.rims)n(new Cr(a[0],a[1])).position.set(...a[2]);return e.up&&n(new Cr(e.up[0],e.up[1])).position.set(...e.up[2]),{key:i,list:t}}function xf(s,e,t=600){const n=new Ht({side:Vt,depthWrite:!1,uniforms:{top:{value:new ue(s)},bot:{value:new ue(e)}},vertexShader:"varying float h; void main(){ h = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 bot; varying float h;
      void main(){ gl_FragColor = vec4(mix(bot, top, smoothstep(-0.1,0.6,h)), 1.0); }`});return new be(new On(t,24,16),n)}function yf(s,e,t){const n=new be(new $r(qn-1.5,qn,96),new ft({color:e,transparent:!0,opacity:.55,side:Bt}));n.rotation.x=-Math.PI/2,n.position.y=.05,s.add(n);const i=new be(new is(qn,qn,60,64,1,!0),new ft({color:e,transparent:!0,opacity:t,side:Vt,depthWrite:!1}));i.position.y=30,s.add(i)}function LS(s){return function(){s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function IS(s){s.traverse(e=>{if(e.userData.shared||!e.isMesh&&!e.isPoints)return;e.geometry?.dispose();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&(n.map?.dispose(),n.dispose())})}function Sf(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#232b3a",t.fillRect(0,0,512,512),t.strokeStyle="#303b4e",t.lineWidth=6;for(let i=0;i<=4;i++){const r=i/4*512;t.beginPath(),t.moveTo(r,0),t.lineTo(r,512),t.stroke(),t.beginPath(),t.moveTo(0,r),t.lineTo(512,r),t.stroke()}t.strokeStyle="#2a3444",t.lineWidth=2;for(let i=0;i<=16;i++){const r=i/16*512;t.beginPath(),t.moveTo(r,0),t.lineTo(r,512),t.stroke(),t.beginPath(),t.moveTo(0,r),t.lineTo(512,r),t.stroke()}t.fillStyle="#3a4a63";for(let i=0;i<26;i++){const r=Math.random()*512,o=Math.random()*512;t.fillRect(r,o,26+Math.random()*40,5)}const n=new Jr(e);return n.wrapS=n.wrapT=Kn,n.repeat.set(22,22),n.anisotropy=4,n}function US(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#4b453d",t.fillRect(0,0,512,512),t.strokeStyle="#3b362f",t.lineWidth=5;for(let i=0;i<=3;i++){const r=i/3*512;t.beginPath(),t.moveTo(r,0),t.lineTo(r,512),t.stroke(),t.beginPath(),t.moveTo(0,r),t.lineTo(512,r),t.stroke()}t.strokeStyle="#2b271f";for(let i=0;i<22;i++){let r=Math.random()*512,o=Math.random()*512,a=Math.random()*Math.PI*2;t.lineWidth=1+Math.random()*2.5,t.beginPath(),t.moveTo(r,o);for(let c=0;c<6+Math.random()*8;c++)a+=(Math.random()-.5)*1.1,r+=Math.cos(a)*(6+Math.random()*14),o+=Math.sin(a)*(6+Math.random()*14),t.lineTo(r,o);t.stroke()}for(let i=0;i<14;i++){const r=Math.random()*512,o=Math.random()*512,a=14+Math.random()*46,c=t.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,"rgba(18,14,11,0.72)"),c.addColorStop(1,"rgba(18,14,11,0)"),t.fillStyle=c,t.beginPath(),t.arc(r,o,a,0,7),t.fill()}t.fillStyle="#5b544a";for(let i=0;i<160;i++)t.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*4,1+Math.random()*3);const n=new Jr(e);return n.wrapS=n.wrapT=Kn,n.repeat.set(16,16),n.anisotropy=4,n}function NS(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");t.fillStyle="#a98a5f",t.fillRect(0,0,512,512);for(let i=0;i<18;i++){const r=Math.random()*512,o=Math.random()*512,a=20+Math.random()*60,c=t.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,"rgba(120,92,58,0.55)"),c.addColorStop(1,"rgba(120,92,58,0)"),t.fillStyle=c,t.beginPath(),t.arc(r,o,a,0,7),t.fill()}t.lineWidth=2;for(let i=0;i<60;i++){const r=Math.random()*512,o=3+Math.random()*9,a=.012+Math.random()*.02;t.strokeStyle=Math.random()<.5?"rgba(214,186,140,0.75)":"rgba(104,80,50,0.62)",t.beginPath();for(let c=0;c<=512;c+=8)t.lineTo(c,r+Math.sin(c*a+i)*o);t.stroke()}for(let i=0;i<220;i++)t.fillStyle=Math.random()<.5?"#7d6242":"#c2a878",t.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*3,1+Math.random()*2);const n=new Jr(e);return n.wrapS=n.wrapT=Kn,n.repeat.set(26,26),n.anisotropy=4,n}function kS(s){const e=new Tt;s.add(e),s.background=new ue("#0d1526"),s.fog=new ma("#14203a",120,340),e.add(xf("#0a1a3a","#111a26",600));const t=[];for(let f=0;f<900;f++){const g=new A().randomDirection().multiplyScalar(500);g.y<-40&&(g.y=-g.y),t.push(g.x,g.y,g.z)}const n=new Pt;n.setAttribute("position",new ht(t,3)),e.add(new nf(n,new Gl({color:10471167,size:2.2,sizeAttenuation:!1})));const i=new be(new Qr(qn+30,64),new mn({map:Sf(),color:8226715,roughness:.95,metalness:.08}));i.rotation.x=-Math.PI/2,i.receiveShadow=!0,e.add(i),yf(e,4161476,.09);const r=[new mn({color:"#4a5870",roughness:.78,metalness:.18}),new mn({color:"#3d4a63",roughness:.82,metalness:.15}),new mn({color:"#54648a",roughness:.74,metalness:.22})],o=new ft({color:7317736}),a=LS(20250820),c=new kn(1,1,1),l=[],h=[],u=[];for(let f=0;f<34;f++){const g=a()*Math.PI*2,_=34+a()*(qn-42),m=Math.cos(g)*_,p=Math.sin(g)*_;if(Math.hypot(m,p)<32)continue;let b=!0;for(const L of l)if(Math.hypot(L[0]-m,L[1]-p)<23){b=!1;break}if(!b)continue;l.push([m,p]);const T=7+a()*11,y=7+a()*11,w=7+a()*20,C=new be(c,r[a()*3|0]);C.scale.set(T,w,y),C.position.set(m,w/2,p),C.castShadow=!0,C.receiveShadow=!0,e.add(C),h.push(C),u.push({minX:m-T/2,maxX:m+T/2,minZ:p-y/2,maxZ:p+y/2,top:w});const R=Math.floor(w/5);for(let L=0;L<R;L++){if(a()<.45)continue;const M=new be(c,o);M.scale.set(T*.86,.7,.3),M.position.set(m,3+L*5,p+y/2+.05),e.add(M);const S=M.clone();S.position.z=p-y/2-.05,e.add(S)}if(a()<.5){const L=new be(new On(.5,6,5),new ft({color:16734810}));L.position.set(m,w+.6,p),e.add(L)}}const d=vf(s,{hemiSky:10405119,hemiGround:2304309,hemi:.6,keyColor:15266559,key:1.75,keyPos:[60,110,40],fillColor:7314142,fill:.4,fillPos:[-70,40,-60],rims:[[11062527,1.25,[-40,55,-120]],[16767400,.55,[90,30,-70]]]});return{grp:e,ground:i,buildings:h,boxes:u,lights:d,far:1200,envIntensity:.38}}let Mr=null;const uc=new Map;async function Mf(s){if(uc.has(s))return uc.get(s);Mr||(Mr=new _f,Mr.setDecoderPath(hc("draco/")),Mr.setDecoderConfig({type:"wasm"}));const e=new pf;e.setDRACOLoader(Mr);const[t,n]=await Promise.all([e.loadAsync(hc(`models/${s}.glb`)),fetch(hc(`models/${s}_boxes.json`)).then(r=>r.json())]);t.scene.traverse(r=>{r.userData.shared=!0});const i={scene:t.scene,boxes:n};return uc.set(s,i),i}const Yl={colony:{colliders:"CityBlocks",bg:"#070b14",fog:["#1b2c4d",340,1900],ground:{tex:Sf,color:7042963,rough:.92,metal:.1},boundary:[5873888,.07],far:2200,env:.4,mats:{col_pane:{mul:.85,emis:.55,rough:1,metal:0},col_window:{mul:1,emis:.3,rough:.85},col_lamp:{mul:1,emis:1.6},col_ground:{mul:1.15,shadow:"receive"},col_land:{mul:1.15},col_building:{mul:.62,shadow:"both"},col_frame:{mul:.7,rough:.75,metal:.35}},lights:{hemiSky:11127295,hemiGround:5926802,hemi:.62,keyColor:15397887,key:1.5,keyPos:[40,120,95],fillColor:8300262,fill:.35,fillPos:[-30,100,-110],rims:[[11062527,.9,[-60,70,-130]],[16765088,.5,[110,40,-50]]],up:[10337254,.55,[10,-100,-20]]}},ruins:{colliders:"RuinBlocks",bg:"#2a1a12",sky:["#6b4526","#c8794a",900],fog:["#7a4c2c",90,540],ground:{tex:US,color:9075304,rough:.96,metal:.03},boundary:[13923886,.1],far:1600,env:.34,mats:{ru_concrete:{mul:.86,shadow:"both"},ru_concrete2:{mul:.7,shadow:"both"},ru_rust:{mul:1,rough:.72,metal:.5},ru_rubble:{mul:1,shadow:"receive"},ru_ember:{mul:1,emis:1.9},ru_dark:{mul:1}},lights:{hemiSky:16761994,hemiGround:3022100,hemi:.5,keyColor:16767392,key:2.4,keyPos:[130,46,78],fillColor:9071192,fill:.32,fillPos:[-80,60,-70],rims:[[16756848,1.15,[-60,42,-130]],[10139357,.42,[40,70,-110]]]}},canyon:{colliders:"CanyonRocks",bg:"#4a6a94",sky:["#2f5b96","#a9c4de",1600],fog:["#8aa4c2",220,1500],ground:{tex:NS,color:9399621,rough:.98,metal:0},boundary:[9425151,.06],far:3e3,env:.5,mats:{cy_rock:{mul:1,shadow:"both"},cy_rock2:{mul:1,shadow:"both"},cy_rock3:{mul:1,shadow:"both"},cy_sand:{mul:1,shadow:"receive"},cy_dark:{mul:1}},lights:{hemiSky:12375797,hemiGround:7033400,hemi:.72,keyColor:16773330,key:2.5,keyPos:[90,120,60],fillColor:9745628,fill:.42,fillPos:[-70,70,-80],rims:[[12376319,.95,[-50,60,-130]],[16764826,.5,[110,34,-40]]]}}};async function OS(s,e){const t=Yl[e],{scene:n,boxes:i}=await Mf(e),r=new Tt;r.add(n),s.add(r),s.background=new ue(t.bg),s.fog=new ma(t.fog[0],t.fog[1],t.fog[2]),t.sky&&r.add(xf(t.sky[0],t.sky[1],t.sky[2]));const o=[];n.traverse(h=>{if(!h.isMesh)return;const u=Array.isArray(h.material)?h.material:[h.material];let d=!1,f=!1;for(const g of u){const _=t.mats[g.name];_&&(g.userData.tuned||(g.userData.tuned=!0,_.mul!==1&&g.color.multiplyScalar(_.mul),g.emissiveIntensity=_.emis??0,_.rough!=null&&(g.roughness=_.rough),_.metal!=null&&(g.metalness=_.metal)),(_.shadow==="receive"||_.shadow==="both")&&(d=!0),_.shadow==="both"&&(f=!0))}h.receiveShadow=d,h.castShadow=f,h.name.startsWith(t.colliders)&&o.push(h)});const a=t.ground,c=new be(new Qr(qn+26,64),new mn({map:a.tex(),color:a.color,roughness:a.rough,metalness:a.metal}));c.rotation.x=-Math.PI/2,c.position.y=.02,c.receiveShadow=!0,r.add(c),yf(r,t.boundary[0],t.boundary[1]);const l=vf(s,t.lights);return{grp:r,ground:c,buildings:o,boxes:i,lights:l,far:t.far,envIntensity:t.env}}let dc=null;async function FS(s,e,t){const n=Yl[t]?await OS(s,t):kS(s);if(!dc){const i=new dl(e);dc=i.fromScene(new Ky,.04).texture,i.dispose()}return s.environment=dc,s.environmentIntensity=n.envIntensity,n.dispose=()=>{s.remove(n.grp),IS(n.grp);for(const i of n.lights.list)s.remove(i)},n}function BS(s){Yl[s]&&Mf(s).catch(()=>{})}const br=new A;function xn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;br.copy(e),br[n]=0,br.normalize();const l=.5*o/(o+a),h=1-br.angleTo(s)/c;return Math.sign(br[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Zl extends kn{constructor(e=1,t=1,n=1,i=2,r=.1){const o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new A,l=new A,h=new A(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new A,m=.5/o;for(let p=0,b=0;p<u.length;p+=3,b+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[b+0]=xn(_,l,"z","y",r,n),f[b+1]=1-xn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),f[b+0]=1-xn(_,l,"z","y",r,n),f[b+1]=1-xn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),f[b+0]=1-xn(_,l,"x","z",r,e),f[b+1]=xn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[b+0]=1-xn(_,l,"x","z",r,e),f[b+1]=1-xn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[b+0]=1-xn(_,l,"x","y",r,e),f[b+1]=1-xn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),f[b+0]=xn(_,l,"x","y",r,e),f[b+1]=1-xn(_,l,"y","x",r,t);break}}static fromJSON(e){return new Zl(e.width,e.height,e.depth,e.segments,e.radius)}}const fc=new Map;function os(s,e=.85){const t=`${s}|${e}`;return fc.has(t)||fc.set(t,new ft({color:new ue(s),transparent:!0,opacity:e,blending:cn,depthWrite:!1,toneMapped:!1})),fc.get(t)}function gl(s,e,t,n={}){const i=new Tt,r=e*(n.coreRatio??.38),o=new be(new jr(r,Math.max(s-r*2,.01),3,8),os("#ffffff",1)),a=new be(new jr(e,Math.max(s-e*2,.01),3,10),os(t,n.glowOpacity??.5));return o.rotation.x=Math.PI/2,a.rotation.x=Math.PI/2,i.add(a),i.add(o),i.userData.core=o,i.userData.glow=a,i}let No=null;function zS(){if(No)return No;const s=128,e=document.createElement("canvas");e.width=e.height=s;const t=e.getContext("2d"),n=t.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.75)"),n.addColorStop(.55,"rgba(255,255,255,0.22)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,s,s),No=new Jr(e),No}function HS(s,e=.9){return new s0(new Yd({map:zS(),color:new ue(s),transparent:!0,opacity:e,blending:cn,depthWrite:!1,toneMapped:!1}))}function ko(s,e,t=.55){return new be(new On(s,10,8),os(e,t))}class VS{constructor(e,t,n=.55){this.n=e,this.pts=new Array(e);for(let a=0;a<e;a++)this.pts[a]={a:new A,b:new A};this.count=0;const i=new Pt;this.positions=new Float32Array(e*2*3),this.alphas=new Float32Array(e*2),i.setAttribute("position",new Lt(this.positions,3)),i.setAttribute("aAlpha",new Lt(this.alphas,1));const r=[];for(let a=0;a<e-1;a++){const c=a*2;r.push(c,c+1,c+2,c+1,c+3,c+2)}i.setIndex(r);const o=new Ht({uniforms:{uColor:{value:new ue(t)},uOpacity:{value:n}},vertexShader:`
        attribute float aAlpha;
        varying float vA;
        void main(){ vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        uniform vec3 uColor; uniform float uOpacity;
        varying float vA;
        void main(){ gl_FragColor = vec4(uColor, vA * uOpacity); }`,transparent:!0,blending:cn,depthWrite:!1,side:Bt,toneMapped:!1});this.mesh=new be(i,o),this.mesh.frustumCulled=!1,this.mesh.visible=!1}reset(){this.count=0,this.mesh.visible=!1}push(e,t){const n=this.pts.pop();n.a.copy(e),n.b.copy(t),this.pts.unshift(n),this.count=Math.min(this.count+1,this.n),this.rebuild()}rebuild(){const e=this.positions,t=this.alphas;for(let n=0;n<this.n;n++){const i=this.pts[n],r=n*6;e[r]=i.a.x,e[r+1]=i.a.y,e[r+2]=i.a.z,e[r+3]=i.b.x,e[r+4]=i.b.y,e[r+5]=i.b.z;const o=n<this.count?Math.pow(1-n/this.n,2.4):0;t[n*2]=o*.15,t[n*2+1]=o}this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.aAlpha.needsUpdate=!0,this.mesh.visible=this.count>1}}let Yi=null;function GS(){if(Yi)return Yi;const s=256,e=document.createElement("canvas");e.width=e.height=s;const t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,s,s),t.strokeStyle="rgba(0,0,0,0.34)",t.lineWidth=2;const n=[[.28,"h"],[.63,"h"],[.42,"v"],[.78,"v"]];for(const[r,o]of n)t.beginPath(),o==="h"?(t.moveTo(0,r*s),t.lineTo(s,r*s)):(t.moveTo(r*s,0),t.lineTo(r*s,s)),t.stroke();t.lineWidth=1.5,t.strokeStyle="rgba(0,0,0,0.22)";for(let r=0;r<10;r++){const o=Math.random()*s,a=Math.random()*s,c=14+Math.random()*40;t.beginPath(),t.moveTo(o,a),Math.random()<.5?t.lineTo(o+c,a):t.lineTo(o,a+c),t.stroke()}const i=t.createLinearGradient(0,0,0,s);return i.addColorStop(0,"rgba(0,0,0,0.12)"),i.addColorStop(.3,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,0.16)"),t.fillStyle=i,t.fillRect(0,0,s,s),Yi=new Jr(e),Yi.wrapS=Yi.wrapT=Kn,Yi.anisotropy=4,Yi}const bf=1.62;let an=null;async function WS(s,e){const t=new _f;t.setDecoderPath(e),t.setDecoderConfig({type:"wasm"});const n=new pf;n.setDRACOLoader(t);const i=await n.loadAsync(s),r=new Map;for(const o of i.scene.children)r.set(o.name,o);return an=r,r}function XS(s,e,t){const n=!e.legMain,i=n?s.accent:s.main,r=n?s.main:s.accent;let o=s.main,a=s.accent;return t==="leg"||t==="torso"?(o=i,a=r):t==="pelvis"&&(o=r,a=i),{m_main:Le(o),m_accent:Le(a),m_trim:Le(s.trim),m_joint:Le(s.joint,{kind:"metal"}),m_frame:Le("#2b303a",{kind:"metal"}),m_eye:Le(s.eye,{emissive:s.eye,emissiveIntensity:2.6,kind:"flat",noPanel:!0}),m_gold:Le("#f5c542"),m_gun:Le("#2c3340",{kind:"metal"}),m_glow:Le(s.beam,{emissive:s.beam,emissiveIntensity:1.4})}}function zt(s,e,t,n){const i=an&&an.get(s);if(!i)return null;const r=XS(e,t,n||s),o=i.clone(!0);return o.traverse(a=>{a.isMesh&&(a.material=r[a.material?.name]||r.m_main,a.castShadow=!0)}),o}const pc=new Map;function Le(s,e={}){const t=s+JSON.stringify(e);if(!pc.has(t)){const n=e.kind||"armor",i=n==="metal"?{metalness:.85,roughness:.28}:n==="flat"?{metalness:.1,roughness:.75}:{metalness:.42,roughness:.34};pc.set(t,new mn({color:new ue(s),metalness:e.metalness??i.metalness,roughness:e.roughness??i.roughness,map:e.noPanel?null:GS(),emissive:e.emissive?new ue(e.emissive):new ue(0),emissiveIntensity:e.emissiveIntensity??1}))}return pc.get(t)}const mc=new Map;function jS(s,e,t){const n=`${s.toFixed(3)}|${e.toFixed(3)}|${t.toFixed(3)}`;if(!mc.has(n)){const i=Math.min(.035,s*.22,e*.22,t*.22);mc.set(n,new Zl(s,e,t,1,i))}return mc.get(n)}function Q(s,e,t,n,i=0,r=0,o=0){const a=new be(jS(s,e,t),n);return a.position.set(i,r,o),a}function xt(s,e,t,n,i=0,r=0,o=0,a=10){const c=new be(new is(s,e,t,a),n);return c.position.set(i,r,o),c}function ki(s,e,t=0,n=0,i=0){const r=new be(new On(s,14,10),e);return r.position.set(t,n,i),r}function $S(s,e,t,n){const i=Le(e.main),r=Le(e.accent),o=Le(e.trim);switch(t){case"spike":{const a=xt(.42,.5,.34,r,.16*n,.02,0);a.rotation.z=-.18*n,s.add(a);for(let c=0;c<4;c++){const l=c/4*Math.PI*2,h=xt(0,.075,.28,o,.16*n+Math.cos(l)*.3,.16,Math.sin(l)*.3);h.rotation.x=Math.sin(l)*.5,h.rotation.z=-Math.cos(l)*.5,s.add(h)}break}case"shield":{n<0&&(s.add(Q(.13,.95,.76,r,.32*n,-.14,0)),s.add(Q(.05,.5,.3,o,.4*n,-.1,0))),s.add(xt(.36,.4,.3,r,.14*n,.02,0));break}case"cannon":{s.add(Q(.4,.4,.5,i,.2*n,.02,0));const a=xt(.11,.13,.95,Le("#2c3340",{kind:"metal"}),.24*n,.26,-.1);a.rotation.x=Math.PI/2-.12,s.add(a);break}case"binder":{const a=Q(.16,1.15,.62,r,.34*n,.06,-.1);a.rotation.z=-.22*n,a.rotation.x=.12,s.add(a),s.add(Q(.08,.7,.2,o,.44*n,.1,.08)),s.add(xt(.3,.34,.3,i,.13*n,.02,0));break}case"drum":{const a=xt(.28,.28,.42,r,.22*n,.02,0);a.rotation.z=Math.PI/2,s.add(a),s.add(xt(.3,.3,.06,o,.44*n,.02,0)).rotation.z=Math.PI/2;break}case"wing":{const a=Q(.09,.34,.78,r,.3*n,.14,-.12);a.rotation.z=-.5*n,a.rotation.x=.16,s.add(a),s.add(Q(.34,.34,.44,i,.17*n,.02,0));break}case"blade":{s.add(Q(.38,.4,.48,i,.19*n,.02,0));const a=Q(.07,.22,1,o,.34*n,.14,-.3);a.rotation.z=-.3*n,a.rotation.x=-.22,s.add(a),s.add(Q(.05,.16,.4,r,.4*n,.05,.1));break}default:s.add(Q(.42,.42,.52,i,.2*n,.02,0)),s.add(Q(.06,.3,.44,o,.42*n,.02,0))}}function qu(s,e,t){const n=new Tt,i=e,r=Le(s.main),o=Le(s.joint,{kind:"metal"}),a=Le(s.accent),c=Le("#2b303a",{kind:"metal"});if(an){const l=zt("sh_"+t.shoulder,s,t,"shoulder");if(l&&(l.scale.x=i,n.add(l)),t.shoulder==="shield"&&i<0){const u=zt("sh_shieldplate",s,t,"shoulder");u&&(u.scale.x=i,n.add(u))}const h=zt("arm",s,t,"arm");if(h&&n.add(h),t.forearmFin){const u=zt("arm_fin",s,t,"arm");u&&n.add(u)}return{pivot:n}}return $S(n,s,t.shoulder,i),n.add(ki(.16,o,.05*i,-.16,0)),n.add(Q(.19,.5,.21,c,.05*i,-.42,0)),n.add(Q(.24,.42,.26,r,.05*i,-.4,0)),n.add(ki(.13,o,.05*i,-.62,0)),n.add(Q(.22,.5,.24,c,.05*i,-.86,0)),n.add(Q(.28,.46,.3,r,.05*i,-.86,0)),n.add(Q(.1,.16,.05,Le(s.trim,{kind:"flat"}),.2*i,-.9,.12)),t.forearmFin&&n.add(Q(.3,.1,.32,a,.05*i,-.72,0)),n.add(Q(.2,.2,.22,o,.05*i,-1.14,0)),{pivot:n}}function Ku(s,e,t){const n=new Tt,i=Le(s.main),r=Le(s.joint,{kind:"metal"}),o=Le(s.accent),a=t.legMain?i:o,c=Le("#2b303a",{kind:"metal"});if(an){const l=zt("leg",s,t,"leg");if(l&&n.add(l),t.kneeGuard){const h=zt("leg_knee",s,t,"leg");h&&n.add(h)}if(t.calfThruster){const h=zt("leg_calf",s,t,"leg");h&&n.add(h)}return{pivot:n}}n.add(ki(.17,r,0,-.05,0)),n.add(Q(.28,.6,.3,c,0,-.36,0)),n.add(Q(.34,.55,.36,a,0,-.36,0)),n.add(ki(.16,r,0,-.66,0)),t.kneeGuard&&n.add(Q(.2,.18,.1,Le(s.trim),0,-.66,.2)),n.add(Q(.3,.62,.34,c,0,-1,.01)),n.add(Q(.36,.6,.4,a,0,-1,.01));for(const l of[-1,1])n.add(Q(.04,.26,.12,Le(s.trim,{kind:"flat"}),l*.19,-1.02,.08));return t.calfThruster&&n.add(Q(.3,.26,.16,o,0,-1.06,-.24)),n.add(ki(.13,r,0,-1.28,0)),n.add(Q(.4,.18,.62,i,0,-1.4,.1)),n.add(Q(.3,.16,.16,o,0,-1.34,-.16)),n.add(Q(.42,.08,.2,Le(s.trim),0,-1.46,.32)),{pivot:n}}function qS(s,e,t){const n=Le(e.main),i=Le(e.accent),r=Le(e.trim),o=Le(e.joint,{kind:"metal"}),a=Le(e.eye,{emissive:e.eye,emissiveIntensity:2.6,kind:"flat",noPanel:!0}),c=Le("#f5c542");if(s.add(xt(.1,.1,.12,o,0,-.06,0)),t==="mono"){s.add(ki(.26,n,0,.08,0)),s.add(Q(.42,.14,.12,i,0,.08,.2)),s.add(ki(.055,a,0,.09,.26));const l=xt(.045,.045,.24,o,0,.2,-.16);l.rotation.x=.7,s.add(l);return}if(t==="twin"){s.add(Q(.36,.26,.3,n,0,.1,0)),s.add(Q(.34,.09,.06,Le("#12161f",{kind:"flat",noPanel:!0}),0,.12,.16)),s.add(Q(.07,.05,.04,a,-.09,.12,.19)),s.add(Q(.07,.05,.04,a,.09,.12,.19)),s.add(Q(.44,.06,.14,i,0,.25,-.02));for(const l of[-1,1])s.add(Q(.05,.2,.12,r,l*.21,.06,0));return}if(t==="mask"){s.add(Q(.32,.32,.34,n,0,.1,0)),s.add(Q(.28,.2,.1,i,0,.02,.16)),s.add(Q(.26,.035,.05,a,0,.17,.19)),s.add(Q(.1,.24,.1,r,0,.3,.02));for(const l of[-1,1]){const h=Q(.06,.3,.06,r,l*.14,.3,-.04);h.rotation.z=-l*.2,s.add(h)}return}if(t==="dome"){s.add(ki(.27,n,0,.09,0)),s.add(Q(.36,.1,.1,Le("#1b2230"),0,.1,.19)),s.add(Q(.3,.05,.05,a,0,.1,.23)),s.add(Q(.5,.07,.24,i,0,.22,-.02));return}if(s.add(Q(.32,.3,.32,n,0,.1,0)),s.add(Q(.26,.12,.06,Le("#1b2230"),0,.1,.17)),s.add(Q(.05,.06,.04,a,-.07,.11,.2)),s.add(Q(.05,.06,.04,a,.07,.11,.2)),s.add(Q(.14,.1,.06,c,0,0,.19)),s.add(Q(.06,.16,.2,r,-.18,.08,.02)),s.add(Q(.06,.16,.2,r,.18,.08,.02)),t==="crest"){s.add(Q(.1,.3,.5,c,0,.32,-.02)),s.add(Q(.44,.06,.1,c,0,.26,.1));for(const l of[-1,1]){const h=Q(.3,.05,.05,c,l*.2,.3,0);h.rotation.z=-l*.35,s.add(h)}}else if(t==="horn"){const l=xt(0,.07,.5,r,0,.42,.08);l.rotation.x=-.35,s.add(l),s.add(Q(.3,.05,.06,r,0,.26,.04))}else{s.add(Q(.36,.05,.06,c,0,.28,.06));for(const l of[-1,1]){const h=Q(.24,.05,.05,c,l*.17,.34,.02);h.rotation.z=-l*.55,s.add(h)}s.add(Q(.1,.12,.08,r,0,.3,-.02))}}function KS(s,e,t){const n=Le("#2c3340",{kind:"metal"}),i=Le(e.beam,{emissive:e.beam,emissiveIntensity:1.4});let r=.9;switch(t){case"machinegun":s.add(Q(.14,.14,.9,n,0,0,.3)),s.add(Q(.12,.26,.14,n,0,-.14,.02));{const o=xt(.17,.17,.1,n,0,-.02,.14);o.rotation.z=Math.PI/2,s.add(o)}r=.78;break;case"cannon":s.add(Q(.22,.22,1.3,n,0,.02,.45)),s.add(Q(.13,.28,.16,n,0,-.16,.05));{const o=xt(.16,.14,.22,n,0,.02,1.08);o.rotation.x=Math.PI/2,s.add(o)}r=1.2;break;case"twin":for(const o of[-.09,.09])s.add(Q(.1,.1,.8,n,o,.02,.3));s.add(Q(.12,.24,.14,n,0,-.14,.02)),r=.74;break;case"bow":s.add(Q(.1,.1,1.5,n,0,0,.55)),s.add(Q(.11,.26,.14,n,0,-.14,.02)),s.add(Q(.16,.3,.14,n,0,.1,.2));{const o=xt(.05,.05,.24,i,0,0,1.28,8);o.rotation.x=Math.PI/2,s.add(o)}r=1.34;break;case"gatling":{const o=xt(.19,.19,1,n,0,0,.38);o.rotation.x=Math.PI/2,s.add(o)}for(let o=0;o<5;o++){const a=o/5*Math.PI*2,c=xt(.045,.045,1.05,n,Math.cos(a)*.11,Math.sin(a)*.11,.4);c.rotation.x=Math.PI/2,s.add(c)}s.add(Q(.14,.28,.16,n,0,-.18,0)),r=.94;break;case"none":r=.35;break;default:s.add(Q(.13,.13,1,n,0,0,.34)),s.add(Q(.11,.24,.13,n,0,-.13,0)),s.add(Q(.2,.2,.12,n,0,.06,.06));{const o=xt(.05,.05,.2,i,0,0,.86,8);o.rotation.x=Math.PI/2,s.add(o)}r=.9}return r}function YS(s,e,t,n,i){const r=Le(e.main),o=Le(e.accent),a=Le(e.trim),c=Le(e.joint,{kind:"metal"}),l=Q(.6,.5,.24,t==="wings"||t==="funnels"?o:r,0,.34,-.34);if(s.add(l),t==="wings")for(const u of[-1,1]){const d=Q(.1,.9,.55,o,u*.34,.5,-.42);d.rotation.z=-u*.4,d.rotation.x=.25,s.add(d);const f=Q(.06,.5,.18,a,u*.52,.82,-.5);f.rotation.z=-u*.4,s.add(f)}else if(t==="cannon"){for(const u of[-1,1]){const d=xt(.1,.12,1.15,Le("#2c3340",{kind:"metal"}),u*.3,.55,-.4);d.rotation.x=.32,s.add(d)}s.add(Q(.7,.24,.2,o,0,.62,-.4))}else if(t==="funnels")for(let u=0;u<4;u++){const d=u<2?-1:1,f=Q(.14,.34,.14,a,d*(.24+u%2*.17),.3+u%2*.28,-.46);f.rotation.x=.2,s.add(f)}else if(t==="tank"){for(const u of[-1,1]){const d=xt(.24,.24,.9,o,u*.34,.4,-.44);d.rotation.x=Math.PI/2,s.add(d),s.add(xt(.26,.26,.06,a,u*.34,.4,-.9)).rotation.x=Math.PI/2}s.add(Q(.8,.2,.22,a,0,.66,-.42))}else if(t==="blades"){for(const u of[-1,1]){const d=Q(.08,1.25,.3,a,u*.2,.55,-.44);d.rotation.z=-u*.3,d.rotation.x=.1,s.add(d)}s.add(Q(.5,.24,.16,o,0,.2,-.44))}else if(t==="booster")for(const u of[-1,1]){const d=xt(.15,.19,.8,o,u*.3,.42,-.46);d.rotation.x=.18,s.add(d)}const h=t==="booster"?[-.3,.3]:[-.22,.22];for(const u of h){const d=xt(.14,.18,.22,c,u,.1,-.44);d.rotation.x=.25,s.add(d);const f=new be(new ss(.2,1.4,8),n);f.position.set(u,-.16,-.84),f.rotation.x=-Math.PI/2+.3,f.visible=!1,s.add(f),i.push(f)}return l}function ZS(s,e,t,n,i){const r=zt("bk_"+t.back,e,t,"back")||zt("bk_pack",e,t,"back");r&&s.add(r);const o=t.back==="booster"?.215:.155;for(const a of[-o,o]){const c=new be(new ss(.2,1.4,8),n);c.position.set(a,-.26,-.8),c.rotation.x=-Math.PI/2+.3,c.visible=!1,s.add(c),i.push(c)}return r}const JS={rifle:.93,machinegun:.78,cannon:1.2,twin:.77,bow:1.34,gatling:.86,none:.35};function QS(s,e,t){if(t.gun!=="none"){const n=zt("gun_"+t.gun,e,t,"gun");n&&s.add(n)}return JS[t.gun]??.9}function eM(s,e={}){const t={head:"visor",shoulder:"pad",back:"pack",gun:"rifle",forearmFin:!0,kneeGuard:!0,calfThruster:!1,legMain:!1,chestDuct:!0,pipes:!1,saberCount:1,...e},n=new Tt,i=Le(s.main),r=Le(s.accent),o=Le(s.trim),a=Le(s.joint,{kind:"metal"}),c=new Tt;if(c.position.y=bf,n.add(c),an){const F=zt("pelvis",s,t,"pelvis");F&&c.add(F)}else{c.add(Q(.62,.3,.44,t.legMain?r:i,0,0,0)),c.add(Q(.26,.34,.12,o,0,-.02,.24)),c.add(Q(.7,.16,.16,r,0,-.14,-.2));for(const F of[-1,1])c.add(Q(.12,.36,.3,r,F*.36,-.08,.02))}const l=new Tt;if(l.position.y=.24,c.add(l),an){const F=zt("torso",s,t,"torso");if(F&&l.add(F),t.chestDuct){const V=zt("torso_duct",s,t,"torso");V&&l.add(V)}if(t.pipes){const V=zt("torso_pipes",s,t,"torso");V&&l.add(V)}}else{l.add(Q(.66,.28,.4,a,0,.02,0)),l.add(Q(.78,.54,.44,Le("#2b303a",{kind:"metal"}),0,.38,0)),l.add(Q(.86,.5,.5,t.legMain?i:r,0,.38,0));for(let F=0;F<3;F++)l.add(Q(.5,.025,.04,Le("#171b22",{kind:"flat",noPanel:!0}),0,.2+F*.055,.26));if(t.chestDuct?(l.add(Q(.24,.4,.1,Le("#ffe14d"),-.24,.4,.24)),l.add(Q(.24,.4,.1,Le("#ffe14d"),.24,.4,.24)),l.add(Q(.3,.26,.12,o,0,.3,.26))):l.add(Q(.5,.2,.1,r,0,.5,.26)),t.pipes)for(let F=0;F<4;F++){const V=xt(.06,.06,.1,a,-.3+F*.2,.62,.18);V.rotation.x=.4,l.add(V)}}const h=[],u=new ft({color:new ue(s.flame||"#8fd6ff"),transparent:!0,opacity:.42,depthWrite:!1,blending:cn,toneMapped:!1}),d=an?ZS(l,s,t,u,h):YS(l,s,t.back,u,h);for(const F of[-.22,.22]){const V=new be(new ss(.13,.85,7),u);V.position.set(F,-1.5,.06),V.rotation.x=Math.PI,V.visible=!1,c.add(V),h.push(V)}const f=new Tt;if(f.position.y=.72,l.add(f),an){const F=zt("hd_"+t.head,s,t,"head")||zt("hd_visor",s,t,"head");F&&f.add(F)}else qS(f,s,t.head);const g=qu(s,1,t);g.pivot.position.set(.52,.42,0),l.add(g.pivot);const _=qu(s,-1,t);_.pivot.position.set(-.52,.42,0),l.add(_.pivot);const m=Ku(s,1,t);m.pivot.position.set(.22,-.12,0),c.add(m.pivot);const p=Ku(s,-1,t);p.pivot.position.set(-.22,-.12,0),c.add(p.pivot);const b=new Tt;b.position.set(an?0:-.05,-1.2,an?.03:.05),_.pivot.add(b);const T=an?QS(b,s,t):KS(b,s,t.gun),y=new at;y.position.set(0,0,T),b.add(y);const w=new Tt;if(w.position.set(an?0:.05,-1.2,0),g.pivot.add(w),an){const F=zt("saber_grip",s,t,"gun");F&&w.add(F)}else{const F=xt(.06,.05,.3,Le("#c8ccd4",{metalness:.9,roughness:.2}),0,0,.04);F.rotation.x=Math.PI/2,w.add(F),w.add(xt(.075,.075,.05,Le(s.trim,{metalness:.7}),0,0,.17))}const C=new be(new On(.09,8,6),os(s.beam,.9));C.position.set(0,0,.2),w.add(C);const R=2.15,L=gl(R,.135,s.beam,{coreRatio:.34,glowOpacity:.42});L.position.set(0,0,.2+R/2),w.add(L);const M=new be(new On(.17,10,8),os(s.beam,.4));M.position.set(0,0,.2+R),w.add(M);let S=null;if(t.saberCount>1){S=gl(R,.135,s.beam,{coreRatio:.34,glowOpacity:.42}),S.position.set(0,0,-.1-R/2),w.add(S);const F=M.clone();F.position.set(0,0,-.1-R),w.add(F)}const D=new at;D.position.set(0,0,.2+R*.62),w.add(D);const k=new at;k.position.set(0,0,.2+R),w.add(k),w.visible=!1;const B=new be(new Qr(1.05,20),new ft({color:0,transparent:!0,opacity:.34,depthWrite:!1}));return B.rotation.x=-Math.PI/2,B.position.y=.02,n.add(B),n.userData={pelvis:c,torso:l,head:f,armL:g.pivot,armR:_.pivot,legL:m.pivot,legR:p.pivot,thrusters:h,saber:w,blade:L,blade2:S,bladeBase:D,bladeEnd:k,muzzle:y,gun:b,shadow:B,pack:d},n.traverse(F=>{F.isMesh&&(F.castShadow=!0)}),B.castShadow=!1,n}const Jt=new A,oi=new A,Yu=new A,Zu=new A,Ju=new A,gc=new A,ks=(s,e,t)=>s<e?e:s>t?t:s,Ft=(s,e,t)=>s+(e-s)*t;function tM(s,e,t){let n=(e-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*t}class Qu{constructor(e,t,n){this.d=e,this.team=t,this.world=n,this.isPlayer=!1,this.root=eM(e.palette,e.shape),n.scene.add(this.root),this.trail=new VS(7,e.palette.beam,.16),n.scene.add(this.trail.mesh),this.pos=new A(0,0,0),this.vel=new A,this.yaw=0,this.grounded=!0,this.maxHp=e.hp,this.hp=e.hp,this.boost=Us,this.overheat=!1,this.st="free",this.stT=0,this.stDur=0,this.stepDir=new A,this.boosting=!1,this.wasAir=!1,this.comboHits=0,this.comboDmg=0,this.comboT=0,this.downValue=0,this.staggerAccum=0,this.downT=0,this.invuln=0,this.awake=0,this.awakeT=0,this.awakeReady=!1,this.ammo={},this.reload={},this.cool={};for(const i of gi){const r=e.weapons[i];r&&(this.ammo[i]=r.ammo,this.reload[i]=0,this.cool[i]=0)}this.burstQueue=null,this.meleeStage=-1,this.meleeKey="melee",this.meleeVar=e.melee.n,this.meleeDir="n",this.meleeSide=1,this.fireKey=null,this.fireT=-1,this.stepGround=!1,this.groundDashT=0,this.buf=null,this.bufT=0,this.swingHit=!0,this.swingStage=null,this.deadT=0,this.animT=0,this.hitFlash=0,this.target=null}get alive(){return this.st!=="dead"}get busy(){return this.st==="fire"||this.st==="rush"||this.st==="swing"||this.st==="land"||this.st==="stagger"||this.st==="down"||this.st==="wake"}get canAct(){return this.st==="free"||this.st==="step"||this.st==="swing"&&this.stT>.1||this.st==="fire"&&this.stT>this.fireCancelT}get speedMul(){return this.awakeT>0?Vy:1}get dmgMul(){return this.awakeT>0?Gy:1}setState(e,t=0){this.st=e,this.stT=0,this.stDur=t}frame(){return this.target&&this.target.alive?(oi.copy(this.target.pos).sub(this.pos),oi.y=0,oi.lengthSq()<1e-4&&oi.set(0,0,1),oi.normalize()):oi.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),Yu.set(-oi.z,0,oi.x),{f:oi,r:Yu}}distTo(e){return Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z,(e.pos.y-this.pos.y)*.8)}update(e,t){this.animT+=e,this.stT+=e,this.hitFlash=Math.max(0,this.hitFlash-e*4),this.invuln=Math.max(0,this.invuln-e);for(const i of gi){this.cool[i]>0&&(this.cool[i]-=e);const r=this.d.weapons[i];r&&(this.ammo[i]<r.ammo?(this.reload[i]+=e,this.reload[i]>=r.reload&&(this.reload[i]=0,this.ammo[i]=r.ammo)):this.reload[i]=0)}if(this.burstQueue&&(this.burstQueue.t-=e,this.burstQueue.t<=0&&(this.world.spawnShot(this,this.burstQueue.key),this.burstQueue.n--,this.burstQueue.n<=0?this.burstQueue=null:this.burstQueue.t=this.burstQueue.gap)),this.downT>0&&(this.downT-=e,this.downT<=0&&(this.downValue=0,this.staggerAccum=0)),this.comboT>0&&(this.comboT-=e,this.comboT<=0&&(this.comboHits=0,this.comboDmg=0)),this.awakeT>0?(this.awakeT-=e,this.awake=Math.max(0,this.awakeT/Hu*100),this.awakeT<=0&&(this.awake=0,this.awakeReady=!1)):this.awake>=100&&(this.awakeReady=!0),this.st==="dead"){this.deadT-=e,this.deadT<=0&&this.respawn(),this.trail.reset();const i=ed-this.deadT;if(i<td){this.root.visible=!0;const r=i/td;this.root.rotation.x=-1.1*r,this.root.rotation.z=.5*r,this.root.position.y=this.pos.y-r*.8,this.root.scale.setScalar(1-r*.12)}else this.root.visible=!1;return}this.root.visible=!0;const n=t||ts;this.think(e,n),this.physics(e),this.pose(e),this.updateTrail()}think(e,t){const n=this.d,{f:i,r}=this.frame();this.bufT>0&&(this.bufT-=e),this.bufT<=0&&(this.buf=null);for(const f of sM)(f==="step"?t.stepPressed:t[f])&&(this.buf=f,this.bufT=rM);const o=f=>(f==="step"?t.stepPressed:t[f])||this.buf===f&&this.bufT>0,a=f=>{this.buf===f&&(this.buf=null,this.bufT=0)};if(t.awake&&this.awakeReady&&this.awakeT<=0&&this.st!=="down"&&this.st!=="wake"&&(this.awakeT=Hu,this.awake=100,this.awakeReady=!1,this.boost=Us,this.overheat=!1,this.setState("free"),this.invuln=Math.max(this.invuln,.4),this.world.fx.burst(this.pos,this.d.palette.beam),this.world.msg("BURST!")),this.st==="down"){(this.grounded&&this.stT>Uy||this.stT>Ny)&&(this.setState("wake",.45),this.invuln=.45+By,this.downValue=0,this.staggerAccum=0);return}if(this.st==="wake"){this.stT>=this.stDur&&this.setState("free");return}if(this.st==="stagger"){this.stT>=this.stDur&&this.setState("free");return}if(this.st==="land"){this.stT>=this.stDur&&this.setState("free");return}const c=this.fireKey&&n.weapons[this.fireKey],l=this.st==="fire"&&c&&c.kind==="laser"&&this.stT<this.fireCancelT,h=!this.overheat&&!l&&this.boost>=n.stepCost&&(this.st==="free"||this.st==="fire"||this.st==="swing"||this.st==="step"&&this.stT>.18);if(o("step")&&h){a("step");let f=t.mx,g=t.my;Math.abs(f)<.2&&Math.abs(g)<.2&&(f=0,g=-1),this.stepDir.copy(i).multiplyScalar(g).addScaledVector(r,f).normalize(),this.boost-=n.stepCost,this.boost<=0&&(this.boost=0,this.overheat=!0),this.stepGround=this.grounded,this.setState("step",n.stepDur),this.stepGround?this.vel.y=0:this.vel.y=Math.max(this.vel.y*.2,0),this.world.breakHoming(this),this.world.fx.stepPuff(this.pos,this.stepDir);return}if(this.canAct){if(o("melee")&&this.tryMelee(nM(t),t)){a("melee");return}if(o("sp_melee")&&this.trySpMelee()){a("sp_melee");return}if(o("sub")&&this.tryFire("sub")){a("sub");return}if(o("sp_shot")&&this.tryFire("sp_shot")){a("sp_shot");return}if(t.shot&&this.tryFire("shot"))return}if(this.st==="rush"){this.updateRush(e);return}if(this.st==="swing"){this.drainMeleeBoost(e),this.vel.x*=Math.pow(.02,e),this.vel.z*=Math.pow(.02,e),this.vel.y=Ft(this.vel.y,0,1-Math.pow(.02,e)),this.stT>=this.stDur&&(this.setState("fire",.28),this.fireKey=null,this.fireT=-1,this.root.userData.saber.visible=!1,this.meleeStage=-1);return}if(this.st==="fire"){this.stT>=this.stDur&&this.setState("free"),this.vel.x*=Math.pow(.22,e),this.vel.z*=Math.pow(.22,e),this.grounded||(this.vel.y-=Pr*.65*e);return}const u=Math.hypot(t.mx,t.my),d=t.jump&&!this.overheat&&this.boost>0;if(this.boosting=d&&this.st!=="step",this.st==="step"){const f=1-Math.pow(this.stT/this.stDur,2)*.45;this.vel.x=this.stepDir.x*n.stepSpeed*this.speedMul*f,this.vel.z=this.stepDir.z*n.stepSpeed*this.speedMul*f,this.stepGround?this.vel.y=0:this.vel.y=Math.max(this.vel.y-Pr*.22*e,-5),this.stT>=this.stDur&&(this.setState("free"),this.vel.x*=.35,this.vel.z*=.35);return}if(this.boosting||(this.groundDashT=0),this.boosting){const f=n.bdSpeed*this.speedMul,g=this.grounded&&u>.2&&this.groundDashT<jy;if(g&&(this.groundDashT+=e),u>.2){Jt.copy(i).multiplyScalar(t.my/Math.max(1,u)).addScaledVector(r,t.mx/Math.max(1,u)),Jt.normalize();const _=1-Math.pow(g?3e-4:8e-4,e);this.vel.x=Ft(this.vel.x,Jt.x*f,_),this.vel.z=Ft(this.vel.z,Jt.z*f,_),this.boost-=n.bdDrain*e}else this.vel.x*=Math.pow(.05,e),this.vel.z*=Math.pow(.05,e),this.boost-=n.riseDrain*.55*e;g?this.vel.y=0:(this.vel.y=Ft(this.vel.y,n.riseSpeed*this.speedMul,1-Math.pow(.002,e)),this.boost-=n.riseDrain*.45*e,this.grounded=!1),this.boost<=0&&(this.boost=0,this.overheat=!0,this.boosting=!1,this.grounded&&(this.setState("land",Vu),this.vel.x*=.2,this.vel.z*=.2))}else if(this.grounded){const f=n.walk*this.speedMul;u>.2?(Jt.copy(i).multiplyScalar(t.my/Math.max(1,u)).addScaledVector(r,t.mx/Math.max(1,u)),Jt.normalize(),this.vel.x=Ft(this.vel.x,Jt.x*f,1-Math.pow(5e-4,e)),this.vel.z=Ft(this.vel.z,Jt.z*f,1-Math.pow(5e-4,e))):(this.vel.x*=Math.pow(5e-4,e),this.vel.z*=Math.pow(5e-4,e))}else u>.2&&!this.overheat&&(Jt.copy(i).multiplyScalar(t.my/Math.max(1,u)).addScaledVector(r,t.mx/Math.max(1,u)),Jt.normalize(),this.vel.x=Ft(this.vel.x,Jt.x*n.airMove,1-Math.pow(.35,e)),this.vel.z=Ft(this.vel.z,Jt.z*n.airMove,1-Math.pow(.35,e))),this.vel.y-=Pr*e}get fireCancelT(){const e=this.fireKey&&this.d.weapons[this.fireKey];return e&&e.kind==="laser"?e.fireDelay+e.duration:.22}tryFire(e){const t=this.d.weapons[e];if(!t||t.kind==="melee_special")return!1;const n=t.kind==="funnel"&&t.count||1;if(this.ammo[e]<n||this.cool[e]>0)return!1;this.ammo[e]-=n,this.cool[e]=t.cooldown;const i=t.kind==="laser"?t.duration:0;return this.setState("fire",t.fireDelay+i+t.cooldown*.85),this.fireKey=e,this.fireT=t.fireDelay,this.grounded=this.grounded&&this.vel.y<=0,!0}trySpMelee(){const e=this.d.weapons.sp_melee;return!e||this.ammo.sp_melee<=0||this.cool.sp_melee>0||!this.target||!this.target.alive||this.distTo(this.target)>e.rushRange||!this.payMeleeBoost()?!1:(this.ammo.sp_melee--,this.cool.sp_melee=e.cooldown,this.meleeKey="sp_melee",this.meleeVar=null,this.meleeStage=-1,this.setState("rush",e.rushTime),this.root.userData.saber.visible=!0,!0)}tryMelee(e,t){const n=this.d.melee;if(!this.target||!this.target.alive)return!1;if(this.st==="swing"&&this.meleeKey==="melee"&&this.meleeStage<this.meleeVar.stages.length-1)return this.payMeleeBoost(.55)?(this.meleeStage++,this.startSwing(),!0):!1;if(this.distTo(this.target)>n.range||!this.payMeleeBoost())return!1;const i=n[e]||n.n;return this.meleeKey="melee",this.meleeDir=e,this.meleeVar=i,this.meleeSide=t&&t.mx<0?-1:1,this.meleeStage=-1,this.setState("rush",i.rushTime),this.root.userData.saber.visible=!0,!0}payMeleeBoost(e=1){const t=(this.d.meleeCost??14)*e;return this.overheat||this.boost<t?!1:(this.boost-=t,!0)}drainMeleeBoost(e){return this.overheat?!1:(this.boost-=this.d.bdDrain*$y*e,this.boost<=0?(this.boost=0,this.overheat=!0,!1):!0)}updateRush(e){if(!this.drainMeleeBoost(e)){this.endMelee();return}const t=this.target,n=this.meleeKey==="sp_melee",i=n?this.d.weapons.sp_melee:this.meleeVar||this.d.melee.n,r=n?4.6:this.d.melee.hitRadius;if(!t||!t.alive){this.endMelee();return}const o=t.pos.x-this.pos.x,a=t.pos.z-this.pos.z,c=Math.hypot(o,a),h=Math.max(t.pos.y,0)+1.1-this.pos.y;if(c<r&&Math.abs(h)<4){this.meleeStage=0,this.startSwing();return}const u=(i.rushSpeed??44)*this.speedMul;let d=c>1e-4?o/c:0,f=c>1e-4?a/c:0;if(!n&&i.arc){const g=i.arc*this.meleeSide*ks((c-r)/26,0,1),_=-f,m=d,p=d+_*g,b=f+m*g,T=Math.hypot(p,b)||1;d=p/T,f=b/T}this.vel.set(d*u,ks(h*2.6,-u*.6,u*.6),f*u),this.grounded=!1,this.stT>=this.stDur&&this.endMelee()}startSwing(){const t=this.meleeKey==="sp_melee"?{dmg:this.d.weapons.sp_melee.dmg,down:this.d.weapons.sp_melee.down,dur:.75,knock:22,pull:!1}:(this.meleeVar||this.d.melee.n).stages[this.meleeStage];this.setState("swing",t.dur),this.swingStage=t,this.swingHit=!1,this.vel.set(0,0,0),this.pos.y<1.2&&(this.pos.y=1.2)}endMelee(){this.setState("fire",.4),this.fireT=-1,this.root.userData.saber.visible=!1,this.meleeStage=-1}physics(e){if(this.fireT>=0&&this.st==="fire"){const h=this.fireT;if(this.fireT-=e,h>0&&this.fireT<=0){const u=this.d.weapons[this.fireKey];this.world.spawnShot(this,this.fireKey);const d=(u.kind==="missile"?u.count:u.burst)||1,f=(u.kind==="missile"?u.launchGap:u.burstGap)||.09;d>1&&(this.burstQueue={key:this.fireKey,n:d-1,t:f,gap:f})}}if(this.st==="swing"&&!this.swingHit&&this.stT>.1){const h=this.target;if(h&&h.alive&&this.distTo(h)<this.d.melee.hitRadius+2.4){this.swingHit=!0;const u=this.swingStage;Jt.copy(h.pos).sub(this.pos).normalize(),this.world.hit(this,h,u.dmg,u.down,Jt,u.knock,"melee"),u.pull&&(h.pos.copy(this.pos).addScaledVector(Jt,4.4),h.pos.y=this.pos.y,h.vel.set(0,.8,0))}else this.stT>.22&&(this.swingHit=!0)}this.st==="swing"&&this.stT>=this.stDur*.95&&(this.root.userData.saber.visible=!1),this.pos.addScaledVector(this.vel,e),(this.st==="down"||this.st==="stagger")&&(this.grounded||(this.vel.y-=Pr*e),this.vel.x*=Math.pow(.25,e),this.vel.z*=Math.pow(.25,e)),this.vel.y=Math.max(this.vel.y,-34);const t=Math.hypot(this.pos.x,this.pos.z);if(t>qn){const h=qn/t;this.pos.x*=h,this.pos.z*=h,this.vel.x*=.2,this.vel.z*=.2}const n=this.world.collision;if(n){const h=this.pos.x+this.pos.z;n.pushOut(this.pos,iM),this.pos.x+this.pos.z!==h&&(this.vel.x*=.15,this.vel.z*=.15)}const i=n?n.floorAt(this.pos.x,this.pos.z):Ou,r=this.st==="rush"||this.st==="swing",o=!this.grounded;if(this.pos.y<=i?(this.pos.y=i,r?(this.grounded=!1,this.vel.y<0&&(this.vel.y=0)):(o&&this.onLand(),this.grounded=!0,this.vel.y<0&&(this.vel.y=0))):this.grounded=!1,this.grounded&&(this.st==="land"||this.st==="stagger"||this.st==="wake"||this.st==="down")){const h=Math.pow(.008,e);this.vel.x*=h,this.vel.z*=h}if(this.grounded&&!this.boosting&&this.st!=="step"&&(this.boost=Math.min(Us,this.boost+62*e),this.boost>=Us*.999&&(this.overheat=!1)),this.st!=="down"){const h=this.target;if(h&&h.alive){const u=Math.atan2(h.pos.x-this.pos.x,h.pos.z-this.pos.z);this.yaw=tM(this.yaw,u,1-Math.pow(6e-4,e))}}this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const a=this.root.userData.shadow,c=n?n.floorAt(this.pos.x,this.pos.z):Ou;a.position.y=c-this.pos.y+.03;const l=ks(1-(this.pos.y-c)/40,.25,1);a.scale.setScalar(l),a.material.opacity=.34*l}onLand(){if(this.st==="down"){this.vel.x*=.1,this.vel.z*=.1;return}if(this.st==="stagger")return;const e=this.overheat?Vu:this.st==="step"?Xy:Wy;this.boost=Us,this.overheat=!1,this.boosting=!1,this.groundDashT=0,this.vel.x*=.15,this.vel.z*=.15,this.setState("land",e),this.world.fx.landPuff(this.pos)}takeHit(e,t,n,i,r,o){if(!this.alive||this.invuln>0)return 0;const a=this.st==="down";let c=zu[Math.min(e.comboHits,zu.length-1)];a&&(c*=ky);const l=Math.round(t*c*e.dmgMul);if(this.hp=Math.max(0,this.hp-l),this.hitFlash=1,e.comboHits++,e.comboDmg+=l,e.comboT=2.2,e.gainAwake(l*zy),this.gainAwake(l*Hy),this.downValue=Math.min(this.downValue+n,Bu*2),this.downT=Iy,gc.copy(this.pos),gc.y+=1.6,this.world.fx.hit(gc,o==="melee"?"#ffd166":this.d.palette.beam),this.hp<=0)return this.die(e),l;if(a)return this.vel.addScaledVector(i,r*.12),this.vel.y=Math.min(this.vel.y,1.5),l;if(this.downValue>=Bu||r>12){const h=Math.max(r,Fy)+8;return this.setState("down"),this.vel.set(i.x*h,9+r*.35,i.z*h),this.grounded=!1,this.staggerAccum=0,this.root.userData.saber.visible=!1,l}return this.staggerAccum+=n,o==="melee"||this.staggerAccum>=Oy?(this.staggerAccum=0,this.setState("stagger",n>=1?.55:.34),this.vel.addScaledVector(i,r*.9),this.grounded&&(this.vel.y=1.5),this.grounded=!1):this.vel.addScaledVector(i,r*.25),l}gainAwake(e){this.awakeT>0||(this.awake=Math.min(100,this.awake+e),this.awake>=100&&(this.awakeReady=!0))}die(e){this.setState("dead"),this.deadT=ed,this.awakeT=0,this.burstQueue=null,this.root.userData.saber.visible=!1,this.world.fx.explode(this.pos),this.world.onDeath(this,e)}respawn(){this.root.rotation.set(0,0,0),this.root.scale.setScalar(1),this.hp=this.maxHp,this.boost=Us,this.overheat=!1,this.downValue=0,this.invuln=1.6,this.vel.set(0,0,0);for(const n of gi)this.d.weapons[n]&&(this.ammo[n]=this.d.weapons[n].ammo,this.reload[n]=0,this.cool[n]=0);const e=Math.random()*Math.PI*2,t=this.target;t?this.pos.set(t.pos.x+Math.cos(e)*60,22,t.pos.z+Math.sin(e)*60):this.pos.set(0,22,0),this.setState("free")}updateTrail(){const e=this.root.userData;if(!(this.st==="swing"&&e.saber.visible)){this.trail.reset();return}e.bladeBase.updateWorldMatrix(!0,!1),e.bladeEnd.updateWorldMatrix(!0,!1),Zu.setFromMatrixPosition(e.bladeBase.matrixWorld),Ju.setFromMatrixPosition(e.bladeEnd.matrixWorld),this.trail.push(Zu,Ju)}pose(e){const t=this.root.userData,n=this.animT,i=Math.hypot(this.vel.x,this.vel.z),r=this.boosting||this.st==="step"||this.st==="rush";for(const m of t.thrusters)m.visible=r,r&&m.scale.set(1,.7+Math.sin(n*40)*.25+Math.min(i/30,1)*.5,1);let o=0,a=0,c=0,l=0,h=0,u=0,d=0,f=0;if(this.st==="down"){this.root.rotation.x=Ft(this.root.rotation.x,this.grounded?-1.35:-.9,1-Math.pow(.001,e)),t.saber.visible=!1;return}if(this.root.rotation.x=Ft(this.root.rotation.x,0,1-Math.pow(.002,e)),this.st==="stagger")d=.4,c=.7,l=.7;else if(this.st==="wake"){const m=this.stT/this.stDur;this.root.rotation.x=-1.35*(1-m),d=.3*(1-m)}else if(this.st==="swing"||this.st==="rush"){const m=this.st==="swing"?ks(this.stT/this.stDur,0,1):0,p=m<.28?-1+m/.28*.15:(m-.28)/.72;d=-.25+p*.5,u=-2.7+Math.max(0,p)*3.9,c=-1.1+Math.max(0,p)*1.7,l=.5,o=-.6,a=.3}else if(this.st==="fire"&&this.fireKey){const m=this.d.weapons[this.fireKey];l=m&&m.arc?-2-m.arc:-1.62,c=-.35,d=m&&m.arc?-.12:.04,o=-.25,a=.2}else if(this.boosting||!this.grounded){const m=ks(i/26,0,1);o=-.55-m*.5+Math.sin(n*3)*.05,a=-.35-m*.35-Math.sin(n*3)*.05,c=.35+m*.25,l=.3+m*.2,u=.25,h=-.25,d=.12+m*.2,f=0}else if(i>1.2){const m=n*7.5;o=Math.sin(m)*.5,a=-Math.sin(m)*.5,c=-Math.sin(m)*.3,l=Math.sin(m)*.3,f=Math.abs(Math.sin(m*2))*.06,d=.06}else{const m=Math.sin(n*1.8)*.02;o=0,a=0,c=.05+m,l=.05+m,f=m}if(this.st==="land"){const m=1-ks(this.stT/Math.max(this.stDur,.01),0,1);f-=.28*m,o=.5*m,a=.5*m,d=.35*m}this.st==="step"&&(d=.22,o=-.7,a=-.35,c=.5,l=.5);const g=this.st==="swing"||this.st==="step"||this.st==="stagger"||this.st==="rush",_=Math.min(1,e*(g?42:15));t.legL.rotation.x=Ft(t.legL.rotation.x,o,_),t.legR.rotation.x=Ft(t.legR.rotation.x,a,_),t.armL.rotation.x=Ft(t.armL.rotation.x,c,_),t.armR.rotation.x=Ft(t.armR.rotation.x,l,_),t.armL.rotation.z=Ft(t.armL.rotation.z,u,_),t.armR.rotation.z=Ft(t.armR.rotation.z,h,_),t.torso.rotation.x=Ft(t.torso.rotation.x,d,_),t.pelvis.position.y=Ft(t.pelvis.position.y,bf+f,_),this.root.visible=this.invuln>0?Math.sin(this.invuln*34)>-.25:!0}}function nM(s){const e=Math.abs(s.mx),t=Math.abs(s.my);return e>.45&&e>=t?"side":s.my>.45?"fwd":"n"}const iM=1.35,ed=3,td=.32,sM=["melee","sp_melee","sub","sp_shot","step"],rM=.35,ts={mx:0,my:0,jump:!1,stepPressed:!1,shot:!1,melee:!1,sub:!1,sp_shot:!1,sp_melee:!1,awake:!1},nt=new A,it=new A,Os=new A,Oo=new A,Fo=new A,nd=new A,Bo=new A(0,1,0),At=new A;function id(s,e,t){Oo.copy(t).sub(e),Fo.copy(s).sub(e);const n=Oo.lengthSq();let i=n>1e-8?Fo.dot(Oo)/n:0;return i=i<0?0:i>1?1:i,Fo.copy(e).addScaledVector(Oo,i),Fo.distanceToSquared(s)}class oM{constructor(e){this.world=e,this.list=[],this.beams=[],this.bits=[],this.beamGeo=new is(.16,.16,3.4,6),this.beamGeo.rotateX(Math.PI/2),this.bulletGeo=new On(.16,6,5),this.shellGeo=new On(.32,8,6),this.bitGeo=new kn(.34,.34,.9),this.laserGeo=new is(1,.28,1,20,1,!0),this.laserGeo.rotateX(Math.PI/2),this.laserGeo.translate(0,0,.5),this.matCache=new Map,this.shotProto=new Map,this.nextNetId=1,this.netShots=new Map,this.netBits=new Map}mat(e){return this.matCache.has(e)||this.matCache.set(e,new ft({color:new ue(e),transparent:!0,opacity:.95,depthWrite:!1})),this.matCache.get(e)}muzzleOf(e){const t=e.root.userData;return t.muzzle.updateWorldMatrix(!0,!1),new A().setFromMatrixPosition(t.muzzle.matrixWorld)}aimPoint(e,t,n,i){const r=e.pos.distanceTo(t.pos),o=Math.min(r/Math.max(n,1),1.2);i.copy(t.pos).addScaledVector(t.vel,o*.75),i.y+=1.3;const a=e.aimError||0;if(a>0){const c=r*a;i.x+=(Math.random()-.5)*2*c,i.y+=(Math.random()-.5)*c,i.z+=(Math.random()-.5)*2*c}return r}spawn(e,t){const n=e.d.weapons[t];if(!n)return;if(n.kind==="laser")return this.spawnLaser(e,t);if(n.kind==="funnel")return this.spawnBits(e,t);const i=n.kind==="spread"&&n.count||1;for(let r=0;r<i;r++)this.spawnOne(e,t,r,i)}spawnOne(e,t,n=0,i=1,r=null,o=null){const a=e.d.weapons[t],c=r||this.muzzleOf(e),l=e.target,h=new A,u=a.arc!=null?Pr*.55:0;let d=40;if(it.set(0,0,1).applyAxisAngle(Bo,e.yaw),o)it.copy(o).sub(c).normalize();else if(l&&l.alive){if(d=this.aimPoint(e,l,a.speed,nt),h.copy(nt).sub(l.pos),h.y-=1.3,u){const p=d/Math.max(a.speed,1);nt.y+=.5*u*p*p*(1+(a.arc||0))}it.copy(nt).sub(c).normalize()}if(i>1&&a.spreadAngle){const p=i===1?0:n/(i-1)*2-1;it.applyAxisAngle(Bo,p*a.spreadAngle),it.y+=p*a.spreadAngle*.25,it.normalize()}if(a.kind==="missile"){const p=Math.min(1,d/50);it.applyAxisAngle(Bo,(Math.random()-.5)*.5*p),it.y+=(.25+Math.random()*.2)*p,it.normalize()}const f=a.kind==="bullet"?.035:0;f&&(it.x+=(Math.random()-.5)*f,it.y+=(Math.random()-.5)*f,it.z+=(Math.random()-.5)*f,it.normalize());const g=a.kind==="beam"||a.kind==="spread"||a.kind==="boomerang"?e.d.palette.beam:a.kind==="bullet"?"#ffd98a":"#ffb45c",_=this.makeShotMesh(a,g);_.position.copy(c);const m={mesh:_,owner:e,w:a,key:t,pos:c.clone(),vel:it.clone().multiplyScalar(a.speed),life:a.life,radius:a.radius,homing:a.homing||0,gravity:u,aimOff:h,color:g,hitSet:a.pierce||a.kind==="boomerang"?new Set:null,boomT:0,returning:!1};return m.netId=this.nextNetId++,this.world.scene.add(_),this.list.push(m),this.world.fx.muzzle(c,g),m}makeShotMesh(e,t){const n=`${e.kind}|${t}|${e.radius}`;if(!this.shotProto.has(n)){let i;if(e.kind==="beam"||e.kind==="spread"){const r=e.kind==="beam"?5.2:3;i=gl(r,Math.max(e.radius,.34),t,{coreRatio:.4,glowOpacity:.4})}else if(e.kind==="boomerang"){i=new Tt;const r=new be(new kn(2,.16,.42),new mn({color:13159636,metalness:.9,roughness:.22}));i.add(r),i.add(ko(.55,t,.3))}else if(e.kind==="bullet"){i=new Tt,i.add(ko(Math.max(e.radius,.22),"#ffffff",.95)),i.add(ko(Math.max(e.radius,.22)*2.4,t,.28));const r=new be(new ss(Math.max(e.radius,.2)*.9,2.2,6),os(t,.22));r.rotation.x=-Math.PI/2,r.position.z=-1.1,i.add(r)}else{i=new Tt;const r=new be(new jr(e.radius*.6,e.radius*1.4,3,8),new mn({color:10134190,metalness:.75,roughness:.35}));r.rotation.x=Math.PI/2,i.add(r),i.add(ko(e.radius*1.5,t,.4));const o=new be(new ss(e.radius*.8,2.6,7),os(t,.3));o.rotation.x=-Math.PI/2,o.position.z=-1.4,i.add(o)}this.shotProto.set(n,i)}return this.shotProto.get(n).clone()}spawnLaser(e,t){const n=e.d.weapons[t],i=this.muzzleOf(e);it.set(0,0,1).applyAxisAngle(Bo,e.yaw);const r=e.target;r&&r.alive&&(this.aimPoint(e,r,9999,nt),it.copy(nt).sub(i).normalize());const o=e.d.palette.beam,a=new be(this.laserGeo,new ft({color:new ue("#ffffff"),transparent:!0,opacity:.95,depthWrite:!1,blending:cn,toneMapped:!1})),c=new be(this.laserGeo,new ft({color:new ue(o),transparent:!0,opacity:.45,depthWrite:!1,side:Bt,blending:cn,toneMapped:!1})),l=new Tt;l.add(a),l.add(c),l.position.copy(i),this.world.scene.add(l);const h={grp:l,core:a,glow:c,owner:e,w:n,color:o,dir:it.clone(),life:n.duration,tick:0,hitOnce:new Set};return this.beams.push(h),this.world.fx.muzzle(i,o),h}spawnBits(e,t){const n=e.d.weapons[t],i=this.muzzleOf(e),r=n.count||3;for(let o=0;o<r;o++){const a=new be(this.bitGeo,this.mat(e.d.palette.trim));a.position.copy(i),this.world.scene.add(a),this.bits.push({mesh:a,owner:e,w:n,key:t,netId:this.nextNetId++,pos:i.clone(),life:n.bitTime,phase:o/r*Math.PI*2,fireT:.5+o*(n.bitFireGap||.7)*.5})}this.world.fx.burst(e.pos,e.d.palette.trim)}update(e,t){this.updateShots(e,t),this.updateBeams(e,t),this.updateBits(e,t)}updateShots(e,t){for(let n=this.list.length-1;n>=0;n--){const i=this.list[n];i.life-=e;const r=i.owner.target;if(i.homing>0&&r&&r.alive&&i.life>.15){nt.copy(r.pos).add(i.aimOff),nt.y+=1.3,it.copy(nt).sub(i.pos).normalize();const h=i.vel.length();i.vel.addScaledVector(it,i.homing*h*2.2*e),i.vel.normalize().multiplyScalar(h)}if(i.gravity&&(i.vel.y-=i.gravity*e),i.w.kind==="boomerang"){if(i.boomT+=e,!i.returning&&i.boomT>=(i.w.turnAt||.55)&&(i.returning=!0,i.hitSet&&i.hitSet.clear()),i.returning){nt.copy(i.owner.pos),nt.y+=1.4,it.copy(nt).sub(i.pos);const h=it.length();it.normalize();const u=i.vel.length()||i.w.speed;i.vel.lerp(it.multiplyScalar(u),1-Math.pow(.004,e)),h<3&&(i.life=0)}i.mesh.children[0]&&(i.mesh.children[0].rotation.y+=e*26)}Os.copy(i.pos),i.pos.addScaledVector(i.vel,e),i.mesh.position.copy(i.pos),i.w.kind!=="bullet"&&i.mesh.lookAt(i.pos.x+i.vel.x,i.pos.y+i.vel.y,i.pos.z+i.vel.z);let o=!1;for(const h of t){if(h===i.owner||!h.alive||h.team===i.owner.team||h.invuln>0||i.hitSet&&i.hitSet.has(h))continue;nt.copy(h.pos),nt.y+=1.6;const u=i.radius+2;if(id(nt,Os,i.pos)<u*u){it.copy(i.vel).normalize(),this.world.hit(i.owner,h,i.w.dmg,i.w.down,it,i.w.kind==="shell"?8:3,i.w.kind),i.hitSet?(i.hitSet.add(h),this.world.fx.hit(i.pos,i.color)):o=!0;break}}let a=!1;const c=this.world.collision;if(!o&&c){const h=c.segmentHit(Os.x,Os.y,Os.z,i.pos.x,i.pos.y,i.pos.z);h>=0&&(i.pos.lerpVectors(Os,i.pos,Math.max(h-.01,0)),i.w.kind==="boomerang"&&!i.returning?(i.returning=!0,i.vel.negate(),i.hitSet&&i.hitSet.clear()):a=!0)}i.w.kind==="boomerang"&&i.pos.y<1&&(i.pos.y=1,i.vel.y<0&&(i.vel.y=0));const l=i.pos.y<0||Math.hypot(i.pos.x,i.pos.z)>qn+20;if(o||a||i.life<=0||l){if(a&&this.world.fx.hit(i.pos,i.color),i.w.splash&&(o||a||i.pos.y<0)){this.world.fx.explodeSmall(i.pos,"#ffb45c");for(const h of t)!h.alive||h.team===i.owner.team||h.invuln>0||(nt.copy(h.pos),nt.y+=1.5,nt.distanceTo(i.pos)<i.w.splash&&!o&&(it.copy(nt).sub(i.pos).normalize(),this.world.hit(i.owner,h,i.w.dmg*.6,i.w.down*.5,it,5,"shell")))}this.world.scene.remove(i.mesh),this.list.splice(n,1)}}}updateBeams(e,t){for(let n=this.beams.length-1;n>=0;n--){const i=this.beams[n];i.life-=e;const r=i.w,o=this.muzzleOf(i.owner);i.grp.position.copy(o);const a=i.owner.target;if(a&&a.alive){nt.copy(a.pos),nt.y+=1.5,it.copy(nt).sub(o).normalize();const f=Math.min(1,(r.turn||1.2)*e);i.dir.lerp(it,f).normalize()}i.grp.lookAt(o.x+i.dir.x,o.y+i.dir.y,o.z+i.dir.z);const c=this.world.collision,l=c?c.rayDistance(o.x,o.y,o.z,i.dir.x,i.dir.y,i.dir.z,r.range):r.range,h=1-i.life/r.duration,u=h<.12?h/.12:i.life<.18?i.life/.18:1,d=(r.radius||1.4)*(.55+u*.45);if(i.core.scale.set(d*.45,d*.45,l),i.glow.scale.set(d,d,l),i.core.material.opacity=.95*u,i.glow.material.opacity=.45*u,i.tick-=e,i.tick<=0&&i.life>0){i.tick=r.tickGap||.12,nd.copy(o).addScaledVector(i.dir,l);for(const f of t){if(f===i.owner||!f.alive||f.team===i.owner.team||f.invuln>0)continue;nt.copy(f.pos),nt.y+=1.6;const g=(r.radius||1.4)+1.8;id(nt,o,nd)<g*g&&this.world.hit(i.owner,f,r.dmg,r.down,i.dir,2,"laser")}}i.life<=0&&(this.world.scene.remove(i.grp),i.core.material.dispose(),i.glow.material.dispose(),this.beams.splice(n,1))}}updateBits(e,t){for(let n=this.bits.length-1;n>=0;n--){const i=this.bits[n];i.life-=e;const r=i.w,o=i.owner.target;if(o&&o.alive){i.phase+=e*1.6;const a=r.bitOrbit||16;nt.set(o.pos.x+Math.cos(i.phase)*a,o.pos.y+6+Math.sin(i.phase*.7)*3,o.pos.z+Math.sin(i.phase)*a)}else nt.copy(i.owner.pos),nt.y+=6;i.pos.lerp(nt,1-Math.pow(.02,e)),i.mesh.position.copy(i.pos),o&&o.alive&&i.mesh.lookAt(o.pos.x,o.pos.y+1.5,o.pos.z),i.fireT-=e,i.fireT<=0&&o&&o.alive&&i.life>.3&&(i.fireT=r.bitFireGap||.7,this.spawnOne(i.owner,i.key,0,1,i.pos.clone())),i.life<=0&&(this.world.fx.hit(i.pos,i.owner.d.palette.trim),this.world.scene.remove(i.mesh),this.bits.splice(n,1))}}syncShots(e,t,n){const i=new Set;for(let r=0;r<e.length;r+=9){const o=e[r],a=t[e[r+1]],c=n[e[r+2]];if(!a||!c)continue;i.add(o);let l=this.netShots.get(o);if(!l){const h=a.d.weapons[c];if(!h)continue;const u=h.kind==="beam"||h.kind==="spread"?a.d.palette.beam:h.kind==="bullet"?"#ffd98a":"#ffb45c",d=this.makeShotMesh(h,u);this.world.scene.add(d),l={mesh:d,w:h,pos:new A,vel:new A},this.netShots.set(o,l),this.world.fx.muzzle(new A(e[r+3],e[r+4],e[r+5]),u)}l.pos.set(e[r+3],e[r+4],e[r+5]),l.vel.set(e[r+6],e[r+7],e[r+8]),l.mesh.position.copy(l.pos),l.w.kind!=="bullet"&&l.mesh.lookAt(l.pos.x+l.vel.x,l.pos.y+l.vel.y,l.pos.z+l.vel.z)}for(const[r,o]of this.netShots)i.has(r)||(this.world.scene.remove(o.mesh),this.netShots.delete(r))}syncBits(e,t){const n=new Set;for(let i=0;i<e.length;i+=5){const r=e[i],o=t[e[i+1]];if(!o)continue;n.add(r);let a=this.netBits.get(r);if(!a){const l=new be(this.bitGeo,this.mat(o.d.palette.trim));this.world.scene.add(l),a={mesh:l,owner:o},this.netBits.set(r,a)}a.mesh.position.set(e[i+2],e[i+3],e[i+4]);const c=o.target;c&&a.mesh.lookAt(c.pos.x,c.pos.y+1.5,c.pos.z)}for(const[i,r]of this.netBits)n.has(i)||(this.world.scene.remove(r.mesh),this.netBits.delete(i))}syncBeams(e,t){for(;this.beams.length>e.length/5;){const n=this.beams.pop();this.world.scene.remove(n.grp),n.core.material.dispose(),n.glow.material.dispose()}for(let n=0;n<e.length;n+=5){const i=t[e[n]];if(!i)continue;const r=n/5;if(!this.beams[r]){const a=this.spawnLaser(i,"sp_shot");this.beams.pop(),this.beams[r]=a}const o=this.beams[r];o.dir.set(e[n+1],e[n+2],e[n+3]),o.life=e[n+4]}}extrapolate(e){for(const t of this.netShots.values())t.pos.addScaledVector(t.vel,e),t.mesh.position.copy(t.pos)}clearNet(){for(const e of this.netShots.values())this.world.scene.remove(e.mesh);for(const e of this.netBits.values())this.world.scene.remove(e.mesh);this.netShots.clear(),this.netBits.clear()}clear(){this.clearNet();for(const e of this.list)this.world.scene.remove(e.mesh);for(const e of this.beams)this.world.scene.remove(e.grp),e.core.material.dispose(),e.glow.material.dispose();for(const e of this.bits)this.world.scene.remove(e.mesh);this.list.length=0,this.beams.length=0,this.bits.length=0}}class aM{constructor(e){this.scene=e,this.items=[],this.sphereGeo=new On(1,10,8),this.ringGeo=new $r(.7,1,20),this.ringGeo.rotateX(-Math.PI/2),this.debrisGeo=new kn(.34,.34,.7),this.shockGeo=new $r(.975,1,72),this.shockGeo.rotateX(-Math.PI/2)}add(e,t,n){this.scene.add(e),this.items.push({mesh:e,life:t,max:t,fn:n})}_ball(e,t,n,i,r,o=0,a=!0){const c=a?HS(t,.9):new be(this.sphereGeo,new ft({color:new ue(t),transparent:!0,opacity:.9,depthWrite:!1}));c.position.copy(e),c.scale.setScalar(n*(a?1.6:1));const l=n*(a?1.6:1);this.add(c,i,(h,u)=>{h.mesh.scale.setScalar(l*(1+r*u)),h.mesh.material.opacity=.9*(1-u),o&&(h.mesh.position.y+=o*.016)})}muzzle(e,t){this._ball(e,"#ffffff",.22,.06,1.2),this._ball(e,t,.32,.09,1.5)}hit(e,t){this._ball(e,t,.55,.24,2.6),this._ball(e,"#ffffff",.3,.12,3);const n=new be(this.ringGeo,new ft({color:new ue(t),transparent:!0,opacity:.8,side:Bt,depthWrite:!1,blending:cn,toneMapped:!1}));n.position.copy(e),n.rotation.x=Math.random()*Math.PI,n.rotation.z=Math.random()*Math.PI,this.add(n,.2,(i,r)=>{i.mesh.scale.setScalar(.5+r*2.6),i.mesh.material.opacity=.45*(1-r)})}explodeSmall(e,t){this._ball(e,t,1.2,.4,3.2),this._ball(e,"#fff2c0",.7,.22,3.6)}explode(e){At.copy(e),At.y+=1.6,this._ball(At,"#fffbe0",.9,.26,2,6),this._ball(At,"#fff0a0",1.3,.46,2.6,18),this._ball(At,"#ff8a3c",1.9,.7,2.8,12),this._ball(At,"#ff5a20",2.6,.95,2.2,8);const t=new be(this.shockGeo,new ft({color:16765066,transparent:!0,opacity:.85,side:Bt,depthWrite:!1,blending:cn,toneMapped:!1}));t.position.set(e.x,.12,e.z),this.add(t,.5,(n,i)=>{n.mesh.scale.setScalar(2+i*13);const r=1-i;n.mesh.material.opacity=.9*r*r*r})}finishBlast(e){At.copy(e),At.y+=1.6,this._ball(At,"#ffffff",1.6,.18,2.6,4),this._ball(At,"#fffbe0",1.4,.4,3,10),this._ball(At,"#ffd06a",2.2,.75,3.4,16),this._ball(At,"#ff7a28",3.2,1.15,3,12),this._ball(At,"#c23a10",4,1.7,2.4,7);for(const[t,n]of[[0,22],[.14,15]]){const i=new be(this.shockGeo,new ft({color:16773312,transparent:!0,opacity:0,side:Bt,depthWrite:!1,blending:cn,toneMapped:!1}));i.position.set(e.x,.12,e.z);const r=.6+t;this.add(i,r,(o,a)=>{const c=Math.max(0,a*r-t)/.6;o.mesh.scale.setScalar(1+c*n);const l=1-c;o.mesh.material.opacity=c<=0?0:.95*l*l*l})}for(let t=0;t<14;t++){const n=new be(this.debrisGeo,new ft({color:new ue(t%3===0?"#ffd06a":"#ff8a3c"),transparent:!0,opacity:.95,depthWrite:!1,blending:cn,toneMapped:!1}));n.position.copy(At);const i=new A().randomDirection();i.y<0&&(i.y=-i.y);const r=i.multiplyScalar(14+Math.random()*26);r.y+=6;const o=new A().randomDirection().multiplyScalar(9),a=1.1+Math.random()*.7;this.add(n,a,(c,l)=>{const h=.016666666666666666;r.y-=34*h,c.mesh.position.addScaledVector(r,h),c.mesh.rotation.x+=o.x*h,c.mesh.rotation.y+=o.y*h,c.mesh.rotation.z+=o.z*h,c.mesh.material.opacity=.95*(1-l*l)})}}secondary(e,t=4){At.copy(e),At.x+=(Math.random()-.5)*t*2,At.y+=1+Math.random()*2.5,At.z+=(Math.random()-.5)*t*2,this._ball(At,"#fff0a0",.8,.26,2.4,8),this._ball(At,"#ff8a3c",1.3,.5,2.8,6)}burst(e,t){const n=new be(this.ringGeo,new ft({color:new ue(t),transparent:!0,opacity:.9,side:Bt,depthWrite:!1,blending:cn,toneMapped:!1}));n.position.copy(e),n.position.y+=1.4,this.add(n,.7,(i,r)=>{i.mesh.scale.setScalar(1+r*16),i.mesh.material.opacity=.9*(1-r)})}stepPuff(e,t){const n=new be(this.sphereGeo,new ft({color:12572927,transparent:!0,opacity:.4,depthWrite:!1}));n.position.copy(e).addScaledVector(t,-1.4),n.position.y+=1.3,n.scale.setScalar(.5),this.add(n,.26,(i,r)=>{i.mesh.scale.setScalar(.5+r*1.5),i.mesh.material.opacity=.4*(1-r)})}landPuff(e){const t=new be(this.ringGeo,new ft({color:13162216,transparent:!0,opacity:.4,side:Bt,depthWrite:!1}));t.position.set(e.x,.06,e.z),this.add(t,.42,(n,i)=>{n.mesh.scale.setScalar(1+i*5),n.mesh.material.opacity=.4*(1-i)})}update(e){for(let t=this.items.length-1;t>=0;t--){const n=this.items[t];n.life-=e;const i=1-n.life/n.max;n.fn&&n.fn(n,Math.min(i,1)),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.items.splice(t,1))}}clear(){for(const e of this.items)this.scene.remove(e.mesh),e.mesh.material.dispose();this.items.length=0}}const Hn=new A,yn=new A,zo=new A,Ri=new A,Fs=new A,Pi=new K0;class cM{constructor(e){this.cam=e,this.pos=new A(0,14,-34),this.look=new A,this.shake=0,this.portrait=!1,this.intro=0}bump(e=1){this.shake=Math.min(1.4,this.shake+e)}focusOn(e,t,n){if(!e)return;const i=e.pos,r=9+Math.min(t,2.4)*5.5,o=3.2+Math.min(t,2.4)*1.6;if(this._focusAng===void 0&&(this._focusAng=Math.atan2(this.cam.position.x-i.x,this.cam.position.z-i.z)),this._focusAng+=n*.55,yn.set(i.x+Math.sin(this._focusAng)*r,i.y+o,i.z+Math.cos(this._focusAng)*r),yn.y<2.5&&(yn.y=2.5),this.colliders&&this.colliders.length){Ri.set(i.x,i.y+1.8,i.z),Fs.copy(yn).sub(Ri);const a=Fs.length();if(a>.5){Pi.set(Ri,Fs.divideScalar(a)),Pi.far=a;const c=Pi.intersectObjects(this.colliders,!1)[0];c&&yn.copy(Ri).addScaledVector(Pi.ray.direction,Math.max(3,c.distance-1.4))}}if(this.pos.lerp(yn,1-Math.pow(.02,n)),zo.set(i.x,i.y+1.7,i.z),this.look.lerp(zo,1-Math.pow(.008,n)),this.cam.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-n*2);const a=this.shake*this.shake*1.1;this.cam.position.x+=(Math.random()-.5)*a,this.cam.position.y+=(Math.random()-.5)*a,this.cam.position.z+=(Math.random()-.5)*a}this.cam.lookAt(this.look)}endFocus(){this._focusAng=void 0}update(e,t,n){if(!t)return;const i=t.pos;n&&n.alive?(Hn.copy(n.pos).sub(i),Hn.y=0,Hn.lengthSq()<1e-4&&Hn.set(0,0,1),Hn.normalize()):Hn.set(Math.sin(t.yaw),0,Math.cos(t.yaw));const r=n&&n.alive?Math.hypot(n.pos.x-i.x,n.pos.z-i.z):40,o=$o.clamp(11+r*.12,11,22)*(this.portrait?1.22:1)*(1+this.intro*.6),a=4.8+this.intro*7,c=$o.clamp(r*.55,10,34),l=n&&n.alive?n.pos.y-i.y:0,h=1.2+$o.clamp(l*.3,-3,9);if(yn.set(i.x-Hn.x*o,i.y+a,i.z-Hn.z*o),yn.y<3&&(yn.y=3),this.colliders&&this.colliders.length){Ri.set(i.x,i.y+2.2,i.z),Fs.copy(yn).sub(Ri);const d=Fs.length();if(d>.5){Pi.set(Ri,Fs.divideScalar(d)),Pi.far=d;const f=Pi.intersectObjects(this.colliders,!1)[0];f&&yn.copy(Ri).addScaledVector(Pi.ray.direction,Math.max(2.5,f.distance-1.4))}}const u=1-Math.pow(6e-4,e);if(this.pos.lerp(yn,u),zo.set(i.x+Hn.x*c,i.y+h,i.z+Hn.z*c),this.look.lerp(zo,1-Math.pow(8e-4,e)),this.cam.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-e*3.2);const d=this.shake*this.shake*.9;this.cam.position.x+=(Math.random()-.5)*d,this.cam.position.y+=(Math.random()-.5)*d,this.cam.position.z+=(Math.random()-.5)*d}this.cam.lookAt(this.look)}snap(e,t){for(let n=0;n<40;n++)this.update(1/30,e,t)}}const sd={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyJ:"shot",KeyK:"melee",KeyL:"jump",Space:"jump",ShiftLeft:"step",ShiftRight:"step",KeyU:"sub",KeyI:"sp_shot",KeyO:"sp_melee",KeyQ:"awake"};class lM{constructor(){this.held=new Set,this.edge=new Set,this.stick={x:0,y:0},this.touchStick={active:!1,id:-1,ox:0,oy:0},this.out={mx:0,my:0,jump:!1,stepPressed:!1,shot:!1,melee:!1,sub:!1,sp_shot:!1,sp_melee:!1,awake:!1},this._bindKeys(),this._bindTouch()}press(e){this.held.has(e)||this.edge.add(e),this.held.add(e)}release(e){this.held.delete(e)}_bindKeys(){addEventListener("keydown",e=>{const t=sd[e.code];t&&(e.repeat||(e.preventDefault(),this.press(t)))}),addEventListener("keyup",e=>{const t=sd[e.code];t&&(e.preventDefault(),this.release(t))}),addEventListener("blur",()=>{this.held.clear()})}_bindTouch(){const e=document.getElementById("stickZone"),t=document.getElementById("stickBase"),n=document.getElementById("stickKnob"),i=52,r=(l,h)=>{n.style.transform=`translate(${l}px, ${h}px)`},o=l=>{const h=l.changedTouches?l.changedTouches[0]:l;this.touchStick.active=!0,this.touchStick.id=h.identifier??"mouse",t.getBoundingClientRect(),this.touchStick.ox=h.clientX,this.touchStick.oy=h.clientY,t.style.left=`${h.clientX}px`,t.style.bottom="auto",t.style.top=`${h.clientY}px`,t.style.margin="-59px 0 0 -59px",t.classList.add("active"),r(0,0),l.preventDefault()},a=l=>{if(!this.touchStick.active)return;const u=(l.changedTouches?Array.from(l.changedTouches):[l]).find(_=>(_.identifier??"mouse")===this.touchStick.id);if(!u)return;let d=u.clientX-this.touchStick.ox,f=u.clientY-this.touchStick.oy;const g=Math.hypot(d,f);g>i&&(d=d/g*i,f=f/g*i),r(d,f),this.stick.x=d/i,this.stick.y=-f/i,l.preventDefault()},c=l=>{!(l.changedTouches?Array.from(l.changedTouches):[l]).find(d=>(d.identifier??"mouse")===this.touchStick.id)&&l.changedTouches||(this.touchStick.active=!1,this.stick.x=0,this.stick.y=0,r(0,0),t.classList.remove("active"))};e.addEventListener("touchstart",o,{passive:!1}),e.addEventListener("touchmove",a,{passive:!1}),e.addEventListener("touchend",c),e.addEventListener("touchcancel",c),e.addEventListener("mousedown",o),addEventListener("mousemove",a),addEventListener("mouseup",c);for(const l of document.querySelectorAll("#btnPad .gb")){const h=l.dataset.act,u=f=>{f.preventDefault(),this.press(h),l.classList.add("on")},d=f=>{f.preventDefault(),this.release(h),l.classList.remove("on")};l.addEventListener("touchstart",u,{passive:!1}),l.addEventListener("touchend",d),l.addEventListener("touchcancel",d),l.addEventListener("mousedown",u),l.addEventListener("mouseup",d),l.addEventListener("mouseleave",d)}}read(){const e=this.out;let t=this.stick.x,n=this.stick.y;this.held.has("left")&&(t-=1),this.held.has("right")&&(t+=1),this.held.has("up")&&(n+=1),this.held.has("down")&&(n-=1);const i=Math.hypot(t,n);return i>1&&(t/=i,n/=i),e.mx=t,e.my=n,e.jump=this.held.has("jump"),e.shot=this.held.has("shot"),e.stepPressed=this.edge.has("step"),e.melee=this.edge.has("melee"),e.sub=this.edge.has("sub"),e.sp_shot=this.edge.has("sp_shot"),e.sp_melee=this.edge.has("sp_melee"),e.awake=this.edge.has("awake"),e}endFrame(){this.edge.clear()}}const Sn=new A,rd={easy:{react:.75,dodge:.28,aggro:.4,meleeWant:.2,boostUse:.35,aimError:.16,fireRate:.3},normal:{react:.45,dodge:.52,aggro:.62,meleeWant:.35,boostUse:.58,aimError:.085,fireRate:.55},hard:{react:.22,dodge:.8,aggro:.85,meleeWant:.55,boostUse:.8,aimError:.03,fireRate:.85}};class hM{constructor(e,t,n="normal"){this.m=e,this.world=t,this.L=rd[n]||rd.normal,e.aimError=this.L.aimError,this.inp={...ts},this.decideT=0,this.strafe=Math.random()<.5?1:-1,this.wantDist=34+Math.random()*18,this.boostT=0,this.holdBoost=!1,this.reactT=0,this.dodgeCool=0,this.stuckT=0,this.lastX=0,this.lastZ=0}update(e){const t=this.m,n=t.target,i=this.L,r=this.inp;if(r.shot=r.melee=r.sub=r.sp_shot=r.sp_melee=r.awake=!1,r.stepPressed=!1,!t.alive||!n||!n.alive)return r.mx=0,r.my=0,r.jump=!1,r;this.decideT-=e,this.boostT-=e,this.dodgeCool-=e,this.reactT-=e;const o=t.distTo(n),a=t.hp/t.maxHp;this.decideT<=0&&(this.decideT=.35+Math.random()*.8,Math.random()<.35&&(this.strafe*=-1),this.wantDist=a<.35?48+Math.random()*20:28+Math.random()*22,this.holdBoost=Math.random()<i.boostUse,this.boostT=.4+Math.random()*1);let c=0;o>this.wantDist+8?c=1:o<this.wantDist-8?c=-1:c=(Math.random()-.5)*.3,r.my=c*(.6+i.aggro*.5),r.mx=this.strafe*(.7+Math.random()*.3);const l=t.boost<25;r.jump=this.holdBoost&&this.boostT>0&&!t.overheat&&!l,l&&!t.grounded&&(r.jump=!1),this.dodgeCool<=0&&t.boost>t.d.stepCost+8&&this.incoming()&&Math.random()<i.dodge&&(r.stepPressed=!0,r.mx=this.strafe,r.my=0,this.dodgeCool=.45,this.strafe*=-1);const h=(t.pos.x-this.lastX)**2+(t.pos.z-this.lastZ)**2;if(this.lastX=t.pos.x,this.lastZ=t.pos.z,h<.004&&t.alive&&!t.busy?(this.stuckT+=e,this.stuckT>.5&&(this.stuckT=0,this.strafe*=-1,this.decideT=.8,r.jump=!0)):this.stuckT=0,t.awakeReady&&(a<.55||n.hp/n.maxHp<.3)&&Math.random()<.04&&(r.awake=!0),this.reactT<=0){this.reactT=i.react*(.6+Math.random()*.8);const u=this.facingRate(n);if(o<t.d.melee.range*.85&&Math.random()<i.meleeWant)t.ammo.sp_melee>0&&Math.random()<.3?r.sp_melee=!0:r.melee=!0;else if(u>.85&&this.hasLineOfSight()){const d=Math.random();o<60&&t.ammo.sub>0&&d<.18?r.sub=!0:o<55&&t.ammo.sp_shot>0&&d<.28?r.sp_shot=!0:t.ammo.shot>0&&d<i.fireRate&&(r.shot=!0)}}return!r.shot&&t.st==="fire"&&(r.shot=!1),r}hasLineOfSight(){const e=this.world.collision;if(!e)return!0;const t=this.m,n=t.target;return e.clearLine(t.pos.x,t.pos.y+2.2,t.pos.z,n.pos.x,n.pos.y+1.6,n.pos.z)}facingRate(e){Sn.copy(e.pos).sub(this.m.pos),Sn.y=0,Sn.normalize();const t=Math.sin(this.m.yaw),n=Math.cos(this.m.yaw);return Sn.x*t+Sn.z*n}incoming(){const e=this.m;for(const n of this.world.projectiles.list){if(n.owner.team===e.team)continue;Sn.copy(e.pos),Sn.y+=1.5,Sn.sub(n.pos);const i=Sn.length();if(i>55)continue;const r=n.vel.length();if((Sn.x*n.vel.x+Sn.y*n.vel.y+Sn.z*n.vel.z)/(i*r)>.93&&i/r<.55)return!0}const t=e.target;return!!(t&&t.st==="rush"&&e.distTo(t)<22)}}const rn=new A,bt=s=>document.getElementById(s);class uM{constructor(){this.el={hud:bt("hud"),costAlly:bt("costAlly").querySelector(".costBar i"),costAllyN:bt("costAlly").querySelector(".costNum"),costFoe:bt("costFoe").querySelector(".costBar i"),costFoeN:bt("costFoe").querySelector(".costNum"),timer:bt("battleTimer"),reticle:bt("reticle"),arrow:bt("offscreenArrow"),foeMarker:bt("foeMarker"),foeHp:bt("foeMarker").querySelector(".fhp b"),foeName:bt("foeMarker").querySelector(".fname"),selfName:bt("selfName"),hpBar:bt("hpBar"),hpDelay:bt("hpDelay"),hpNum:bt("hpNum"),boostBar:bt("boostBar"),boostTxt:bt("boostTxt"),awakeBar:bt("awakeBar"),awakeWrap:bt("awakeWrap"),ammoRow:bt("ammoRow"),combo:bt("comboPop"),msg:bt("centerMsg")},this.ammoEls=null,this.delayHp=1,this.comboT=0,this.msgT=0}setup(e,t){this.el.selfName.textContent=e.d.name,this.el.foeName.textContent=t.d.name,this.el.hpNum.textContent=e.hp,this.delayHp=1,this.el.ammoRow.innerHTML="",this.ammoEls={};for(const n of gi){const i=e.d.weapons[n];if(!i)continue;const r=document.createElement("div");r.className="ammo";const o=document.createElement("b");if(o.textContent=i.label,r.appendChild(o),i.ammo<=8){const a=document.createElement("span");a.className="pips";for(let c=0;c<i.ammo;c++)a.appendChild(document.createElement("i"));r.appendChild(a),this.ammoEls[n]={row:r,pips:Array.from(a.children),num:null}}else{const a=document.createElement("span");r.appendChild(a),this.ammoEls[n]={row:r,pips:null,num:a}}this.el.ammoRow.appendChild(r)}}update(e,t){const{self:n,foe:i,camera:r}=t,o=this.el;o.costAlly.style.transform=`scaleX(${t.cost.ally/zs})`,o.costAllyN.textContent=Math.max(0,Math.round(t.cost.ally)),o.costFoe.style.transform=`scaleX(${t.cost.foe/zs})`,o.costFoeN.textContent=Math.max(0,Math.round(t.cost.foe));const a=Math.max(0,Math.ceil(t.time));o.timer.textContent=a,o.timer.style.color=a<=20?"#ff6b74":"";const c=n.hp/n.maxHp;o.hpBar.style.transform=`scaleX(${c})`,c<this.delayHp?this.delayHp=Math.max(c,this.delayHp-e*.35):this.delayHp=c,o.hpDelay.style.transform=`scaleX(${this.delayHp})`,o.hpNum.textContent=n.hp;const l=n.boost/100;o.boostBar.style.transform=`scaleX(${l})`,o.boostBar.classList.toggle("hot",n.overheat||l<.22),o.boostTxt.textContent=n.overheat?"OVERHEAT":"BOOST",o.awakeBar.style.transform=`scaleX(${n.awake/100})`,o.awakeWrap.classList.toggle("full",n.awakeReady&&n.awakeT<=0);for(const h of gi){const u=this.ammoEls&&this.ammoEls[h];if(!u)continue;const d=n.d.weapons[h],f=n.ammo[h];if(u.pips)for(let g=0;g<u.pips.length;g++)u.pips[g].classList.toggle("on",g<f);else u.num.textContent=`${f}/${d.ammo}`;u.row.classList.toggle("reloading",f<d.ammo&&n.reload[h]>0)}if(i.alive){rn.copy(i.pos),rn.y+=3.4,rn.project(r);const h=rn.z<1,u=(rn.x*.5+.5)*innerWidth,d=(-rn.y*.5+.5)*innerHeight,f=h&&rn.x>-1&&rn.x<1&&rn.y>-1&&rn.y<1;if(o.foeMarker.style.opacity=f?"1":"0",f&&(o.foeMarker.style.transform=`translate(${u}px, ${d}px) translate(-50%,-100%)`,o.foeHp.style.transform=`scaleX(${i.hp/i.maxHp})`),f)o.arrow.style.opacity="0";else{o.arrow.style.opacity="1";let m=rn.x,p=rn.y;h||(m=-m,p=-p);const b=Math.atan2(m,p),T=Math.min(innerWidth,innerHeight)*.3;o.arrow.style.transform=`translate(${Math.sin(b)*T}px, ${-Math.cos(b)*T}px) rotate(${b}rad) translate(-50%,-50%)`}const g=f&&Math.abs(rn.x)<.16&&Math.abs(rn.y)<.2,_=n.distTo(i);o.reticle.classList.toggle("locked",g),o.reticle.classList.toggle("near",!g&&_<n.d.melee.range)}else o.foeMarker.style.opacity="0",o.arrow.style.opacity="0",o.reticle.classList.remove("locked","near");n.comboHits>=2&&n.comboT>0&&(this.comboT=.9,o.combo.innerHTML=`${n.comboDmg}<small>${n.comboHits} HIT</small>`),this.comboT>0?(this.comboT-=e,o.combo.style.opacity=Math.min(1,this.comboT*3),o.combo.style.transform=`translateX(-50%) scale(${1+Math.max(0,this.comboT-.7)*.6})`):o.combo.style.opacity="0",this.msgT>0?(this.msgT-=e,o.msg.style.opacity=Math.min(1,this.msgT*2.5),o.msg.style.transform=`translate(-50%,-50%) scale(${1+Math.max(0,this.msgT-.9)*.5})`):o.msg.style.opacity="0"}message(e,t){this.el.msg.textContent=e,this.el.msg.style.color=t||"#fff",this.msgT=1.4}show(){this.el.hud.classList.remove("hidden")}hide(){this.el.hud.classList.add("hidden")}}const dM=.05;class fM{constructor(e=[]){this.boxes=e}floorAt(e,t){let n=0;for(const i of this.boxes)e>=i.minX&&e<=i.maxX&&t>=i.minZ&&t<=i.maxZ&&i.top>n&&(n=i.top);return n}pushOut(e,t,n=.3){let i=!1;for(const r of this.boxes){if(e.y>=r.top-n)continue;const o=Math.max(r.minX,Math.min(e.x,r.maxX)),a=Math.max(r.minZ,Math.min(e.z,r.maxZ)),c=e.x-o,l=e.z-a;if(!(c*c+l*l>=t*t)){if(c!==0||l!==0){const h=Math.hypot(c,l)||1;e.x=o+c/h*t,e.z=a+l/h*t}else{const h=e.x-r.minX,u=r.maxX-e.x,d=e.z-r.minZ,f=r.maxZ-e.z,g=Math.min(h,u,d,f);g===h?e.x=r.minX-t:g===u?e.x=r.maxX+t:g===d?e.z=r.minZ-t:e.z=r.maxZ+t}i=!0}}return i}segmentHit(e,t,n,i,r,o){let a=-1;const c=i-e,l=r-t,h=o-n;for(const u of this.boxes){let d=0,f=1;if(Math.abs(c)<1e-8){if(e<u.minX||e>u.maxX)continue}else{let _=(u.minX-e)/c,m=(u.maxX-e)/c;if(_>m){const p=_;_=m,m=p}if(d=Math.max(d,_),f=Math.min(f,m),d>f)continue}if(Math.abs(h)<1e-8){if(n<u.minZ||n>u.maxZ)continue}else{let _=(u.minZ-n)/h,m=(u.maxZ-n)/h;if(_>m){const p=_;_=m,m=p}if(d=Math.max(d,_),f=Math.min(f,m),d>f)continue}if(Math.abs(l)<1e-8){if(t<0||t>u.top)continue}else{let _=(0-t)/l,m=(u.top-t)/l;if(_>m){const p=_;_=m,m=p}if(d=Math.max(d,_),f=Math.min(f,m),d>f)continue}if(f<0||d>1)continue;const g=Math.max(d,0);(a<0||g<a)&&(a=g)}return a}clearLine(e,t,n,i,r,o){return this.segmentHit(e,t,n,i,r,o)<0}rayDistance(e,t,n,i,r,o,a){const c=this.segmentHit(e,t,n,e+i*a,t+r*a,n+o*a);return c<0?a:c*a-dM}}class pM{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return mM(e).buffer}}function mM(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s){const r=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(r,n),n+=i.byteLength}return t}function Tf(s){return new gM(s).unpack()}function Ef(s){const e=new _M,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class gM{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class _M{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const r=this.pack(e[i]);return r instanceof Promise?r.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,r=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(r+1))}return i(r+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new pM,this._textEncoder=new TextEncoder}}let wf=!0,Af=!0;function Dr(s,e,t){const n=s.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function hs(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Jl("Unable to polyfill events");return}const i=s.RTCPeerConnection.prototype,r=i.addEventListener;i.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};const o=i.removeEventListener;i.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function vM(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(wf=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function xM(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Af=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function Jl(){if(typeof window=="object"){if(wf)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Ql(s,e){Af&&console.warn(s+" is deprecated, please use "+e+" instead.")}function yM(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Dr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Dr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Dr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=Dr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function od(s){return Object.prototype.toString.call(s)==="[object Object]"}function Cf(s){return od(s)?Object.keys(s).reduce(function(e,t){const n=od(s[t]),i=n?Cf(s[t]):s[t],r=n&&!Object.keys(i).length;return i===void 0||r?e:Object.assign(e,{[t]:i})},{}):s}function _l(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?_l(s,s.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{_l(s,s.get(i),t)})}))}function ad(s,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const r=[];return s.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{s.forEach(a=>{a.type===n&&a.trackId===o.id&&_l(s,a,i)})}),i}const cd=Jl;function Rf(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let f=d.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),cd("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return cd("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){i(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Pf(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Df(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)}),i.stream.getTracks().forEach(r=>{let o;s.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else hs(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Lf(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(i,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=i.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:i}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(a,c){let l=i.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function If(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const n=s.RTCPeerConnection.prototype.getSenders;n&&(s.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const i=s.RTCPeerConnection.prototype.addTrack;i&&(s.RTCPeerConnection.prototype.addTrack=function(){const o=i.apply(this,arguments);return o._pc=this,o}),s.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>ad(a,o.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const n=s.RTCPeerConnection.prototype.getReceivers;n&&(s.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),hs(s,"track",i=>(i.receiver._pc=i.srcElement,i)),s.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>ad(o,r.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const i=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===i&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===i&&(o?a=!0:o=c),c.track===i)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Uf(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function Nf(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Uf(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new s.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},s.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new s.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(g.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],g=l._streams[f.id];u=u.replace(new RegExp(f.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=s.RTCPeerConnection.prototype[l],u={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);d[0].apply(null,[_])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};s.RTCPeerConnection.prototype[l]=u[l]});const a=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),s.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(_=>h.track===_)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function vl(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]})}function kf(s,e){e.version>102||hs(s,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const ld=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:kf,shimAddTrackRemoveTrack:Nf,shimAddTrackRemoveTrackWithNative:Uf,shimGetSendersWithDtmf:Lf,shimGetUserMedia:Rf,shimMediaStream:Pf,shimOnTrack:Df,shimPeerConnection:vl,shimSenderReceiverGetStats:If},Symbol.toStringTag,{value:"Module"}));function Of(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const n=s&&s.MediaStreamTrack;if(t.getUserMedia=function(i,r,o){Ql("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function SM(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(n)}))}function Ff(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function xl(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=s.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=i[t]}))}function Bf(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function zf(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Hf(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),hs(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Vf(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){Ql("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Gf(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function Wf(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const r=i.length>0;r&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Xf(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function jf(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function $f(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const hd=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Wf,shimCreateAnswer:$f,shimCreateOffer:jf,shimGetDisplayMedia:SM,shimGetParameters:Xf,shimGetStats:Bf,shimGetUserMedia:Of,shimOnTrack:Ff,shimPeerConnection:xl,shimRTCDataChannel:Gf,shimReceiverGetStats:Hf,shimRemoveStream:Vf,shimSenderGetStats:zf},Symbol.toStringTag,{value:"Module"}));function qf(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},s.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(r=>{i.includes(r.track)&&this.removeTrack(r)})})}}function Kf(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const r=new Event("addstream");r.stream=i,this.dispatchEvent(r)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Yf(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let a=function(c,l,h){const u=i.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function Zf(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Jf(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,r){e.mediaDevices.getUserMedia(n).then(i,r)}).bind(e))}function Jf(s){return s&&s.video!==void 0?Object.assign({},s,{video:Cf(s.video)}):s}function Qf(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Ql("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,i)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function ep(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function tp(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function np(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const ud=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:np,shimCallbacksAPI:Yf,shimConstraints:Jf,shimCreateOfferLegacy:tp,shimGetUserMedia:Zf,shimLocalStreamsAPI:qf,shimRTCIceServerUrls:Qf,shimRemoteStreamsAPI:Kf,shimTrackEventTransceiver:ep},Symbol.toStringTag,{value:"Module"}));function MM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var _c={exports:{}},dd;function bM(){return dd||(dd=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,r)=>(r>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":i.relatedAddress=n[r+1];break;case"rport":i.relatedPort=parseInt(n[r+1],10);break;case"tcptype":i.tcpType=n[r+1];break;case"ufrag":i.ufrag=n[r+1],i.usernameFragment=n[r+1];break;default:i[n[r]]===void 0&&(i[n[r]]=n[r+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)i=r[o].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+i+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+i+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(i.attribute=t.substring(n+1,r),i.value=t.substring(r+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{i+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&r?{usernameFragment:i.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{i+=e.writeRtpMap(o),i+=e.writeFmtp(o),i+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(i+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),r=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),i.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(f.rtx={ssrc:l}),n.push(f),r&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let r;i.length>0&&(r=parseInt(i[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let r=0;r<i.length;r++)switch(i[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},s.exports=e})(_c)),_c.exports}var ip=bM();const Xs=MM(ip),TM=Np({__proto__:null,default:Xs},[ip]);function Ko(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),r=Xs.parseCandidate(n.candidate);for(const o in r)o in i||Object.defineProperty(i,o,{value:r[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},s.RTCIceCandidate.prototype=e.prototype,hs(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function yl(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||hs(s,"icecandidate",e=>{if(e.candidate){const t=Xs.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Yo(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Xs.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=Xs.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Xs.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function Zo(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,r){const o=i.send;i.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(i.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(i,arguments)}}const n=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},hs(s,"datachannel",i=>(t(i.channel,i.target),i))}function Sl(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const r=i.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",i);r.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function Ml(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&i instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:i.type,sdp:r}):i.sdp=r}return t.apply(this,arguments)}}function Jo(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Qo(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const EM=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Ml,shimAddIceCandidateNullOrEmpty:Jo,shimConnectionState:Sl,shimMaxMessageSize:Yo,shimParameterlessSetLocalDescription:Qo,shimRTCIceCandidate:Ko,shimRTCIceCandidateRelayProtocol:yl,shimSendThrowTypeError:Zo},Symbol.toStringTag,{value:"Module"}));function wM({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Jl,n=yM(s),i={browserDetails:n,commonShim:EM,extractVersion:Dr,disableLog:vM,disableWarnings:xM,sdp:TM};switch(n.browser){case"chrome":if(!ld||!vl||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=ld,Jo(s,n),Qo(s),Rf(s,n),Pf(s),vl(s,n),Df(s,n),Nf(s,n),Lf(s),If(s,n),kf(s,n),Ko(s),yl(s),Sl(s),Yo(s,n),Zo(s,n),Ml(s,n);break;case"firefox":if(!hd||!xl||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=hd,Jo(s,n),Qo(s),Of(s,n),xl(s,n),Bf(s,n),Ff(s),Vf(s),zf(s),Hf(s),Gf(s),Wf(s,n),Xf(s,n),jf(s,n),$f(s,n),Ko(s),Sl(s),Yo(s,n),Zo(s,n);break;case"safari":if(!ud||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=ud,Jo(s,n),Qo(s),Qf(s),tp(s),Yf(s),qf(s),Kf(s),ep(s),Zf(s),np(s),Ko(s),yl(s),Yo(s,n),Zo(s,n),Ml(s,n);break;default:t("Unsupported browser!");break}return i}const fd=wM({window:typeof window>"u"?void 0:window});function us(s,e,t,n){Object.defineProperty(s,e,{get:t,set:n,enumerable:!0,configurable:!0})}class sp{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:i};t.push(l),o=a,r++}return this._dataCount++,t}}}function AM(s){let e=0;for(const i of s)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of s)t.set(i,n),n+=i.byteLength;return t}const vc=fd.default||fd,Tr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return vc.browserDetails.browser}getVersion(){return vc.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=vc.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},CM=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),rp=()=>Math.random().toString(36).slice(2),pd={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class RM extends sp{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=pd,this.browser=Tr.getBrowser(),this.browserVersion=Tr.getVersion(),this.pack=Ef,this.unpack=Tf,this.supports=(function(){const t={browser:Tr.isBrowserSupported(),webRTC:Tr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(pd),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Tr.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=CM,this.randomToken=rp}}const on=new RM,PM="PeerJS: ";class DM{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[PM,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var ge=new DM,eh={},LM=Object.prototype.hasOwnProperty,nn="~";function qr(){}Object.create&&(qr.prototype=Object.create(null),new qr().__proto__||(nn=!1));function IM(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function op(s,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new IM(t,n||s,i),o=nn?nn+e:e;return s._events[o]?s._events[o].fn?s._events[o]=[s._events[o],r]:s._events[o].push(r):(s._events[o]=r,s._eventsCount++),s}function ea(s,e){--s._eventsCount===0?s._events=new qr:delete s._events[e]}function Kt(){this._events=new qr,this._eventsCount=0}Kt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)LM.call(t,n)&&e.push(nn?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Kt.prototype.listeners=function(e){var t=nn?nn+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,o=new Array(r);i<r;i++)o[i]=n[i].fn;return o};Kt.prototype.listenerCount=function(e){var t=nn?nn+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Kt.prototype.emit=function(e,t,n,i,r,o){var a=nn?nn+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,r),!0;case 6:return c.fn.call(c.context,t,n,i,r,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,i);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[u].fn.apply(c[u].context,h)}}return!0};Kt.prototype.on=function(e,t,n){return op(this,e,t,n,!1)};Kt.prototype.once=function(e,t,n){return op(this,e,t,n,!0)};Kt.prototype.removeListener=function(e,t,n,i){var r=nn?nn+e:e;if(!this._events[r])return this;if(!t)return ea(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&ea(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:ea(this,r)}return this};Kt.prototype.removeAllListeners=function(e){var t;return e?(t=nn?nn+e:e,this._events[t]&&ea(this,t)):(this._events=new qr,this._eventsCount=0),this};Kt.prototype.off=Kt.prototype.removeListener;Kt.prototype.addListener=Kt.prototype.on;Kt.prefixed=nn;Kt.EventEmitter=Kt;eh=Kt;var ds={};us(ds,"ConnectionType",()=>Oi);us(ds,"PeerErrorType",()=>Ct);us(ds,"BaseConnectionErrorType",()=>bl);us(ds,"DataConnectionErrorType",()=>th);us(ds,"SerializationType",()=>ya);us(ds,"SocketEventType",()=>Ui);us(ds,"ServerMessageType",()=>jt);var Oi=(function(s){return s.Data="data",s.Media="media",s})({}),Ct=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),bl=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),th=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),ya=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),Ui=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),jt=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const ap="1.5.5";class UM extends eh.EventEmitter{constructor(e,t,n,i,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+ap),this._disconnected=!1,this._socket.onmessage=i=>{let r;try{r=JSON.parse(i.data),ge.log("Server message received:",r)}catch{ge.log("Invalid server message",i.data);return}this.emit(Ui.Message,r)},this._socket.onclose=i=>{this._disconnected||(ge.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(Ui.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),ge.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){ge.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:jt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(Ui.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class cp{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Oi.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},r=t.createDataChannel(n.label,i);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){ge.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,r=this.connection.provider;ge.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(ge.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:jt.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":ge.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(bl.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":ge.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(bl.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":ge.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},ge.log("Listening for data channel"),e.ondatachannel=o=>{ge.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},ge.log("Listening for remote stream"),e.ontrack=o=>{ge.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Oi.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){ge.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);ge.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ge.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Oi.Data){const r=this.connection;i={...i,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:jt.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Ct.WebRTC,i),ge.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(Ct.WebRTC,n),ge.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();ge.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),ge.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:jt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(Ct.WebRTC,i),ge.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(Ct.WebRTC,n),ge.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;ge.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),ge.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){i.emitError(Ct.WebRTC,o),ge.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){ge.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),ge.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Ct.WebRTC,t),ge.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(ge.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return ge.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){ge.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class lp extends eh.EventEmitter{emitError(e,t){ge.error("Error:",t),this.emit("error",new NM(`${e}`,t))}}class NM extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class hp extends lp{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}class la extends hp{static#e=this.ID_PREFIX="mc_";get type(){return Oi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||la.ID_PREFIX+on.randomToken(),this._negotiator=new cp(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ge.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{ge.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){ge.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case jt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case jt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:ge.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){ge.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class kM{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${i}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",ap),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){ge.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==on.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===on.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw ge.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class ha extends hp{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return Oi.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||ha.ID_PREFIX+rp(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new cp(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{ge.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{ge.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{ge.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(th.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case jt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case jt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:ge.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class nh extends ha{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>ha.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return ge.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class xc extends nh{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new sp,this.serialization=ya.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Tf(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=AM(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=Ef(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);ge.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class OM extends nh{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=ya.None}}class FM extends nh{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=on.chunkedMTU){this.emitError(th.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=ya.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class ih extends lp{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:OM,json:FM,binary:xc,"binary-utf8":xc,default:xc},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:on.CLOUD_HOST,port:on.CLOUD_PORT,path:"/",key:ih.DEFAULT_KEY,token:on.randomToken(),config:on.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==on.CLOUD_HOST?this._options.secure=on.isSecure():this._options.host==on.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&ge.setLogFunction(this._options.logFunction),ge.logLevel=this._options.debug||0,this._api=new kM(t),this._socket=this._createServerConnection(),!on.supports.audioVideo&&!on.supports.data){this._delayedAbort(Ct.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!on.validateId(n)){this._delayedAbort(Ct.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(Ct.ServerError,i))}_createServerConnection(){const e=new UM(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(Ui.Message,t=>{this._handleMessage(t)}),e.on(Ui.Error,t=>{this._abort(Ct.SocketError,t)}),e.on(Ui.Disconnected,()=>{this.disconnected||(this.emitError(Ct.Network,"Lost connection to server."),this.disconnect())}),e.on(Ui.Close,()=>{this.disconnected||this._abort(Ct.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case jt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case jt.Error:this._abort(Ct.ServerError,n.msg);break;case jt.IdTaken:this._abort(Ct.UnavailableID,`ID "${this.id}" is taken`);break;case jt.InvalidKey:this._abort(Ct.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case jt.Leave:ge.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case jt.Expire:this.emitError(Ct.PeerUnavailable,`Could not connect to peer ${i}`);break;case jt.Offer:{const r=n.connectionId;let o=this.getConnection(i,r);if(o&&(o.close(),ge.warn(`Offer received for existing Connection ID:${r}`)),n.type===Oi.Media){const c=new la(i,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===Oi.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{ge.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){ge.warn(`You received a malformed message from ${i} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(i,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):ge.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){ge.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Ct.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){ge.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Ct.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){ge.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new la(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){ge.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){ge.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(ge.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;ge.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)ge.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)ge.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Ct.ServerError,t))}}var BM=ih;const md="ABCDEFGHJKMNPQRSTUVWXYZ23456789",gd="afvs-";function zM(s=4){let e="";for(let t=0;t<s;t++)e+=md[Math.random()*md.length|0];return e}function sh(s){return(s||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,4)}class HM{constructor(){this.peer=null,this.conn=null,this.role=null,this.code="",this.state="idle",this.error="",this.onState=()=>{},this.onMessage=()=>{},this.pingMs=0,this._pingSent=0,this._pingTimer=null}setState(e,t=""){this.state=e,this.error=t,this.onState(e,t)}get connected(){return this.state==="connected"&&this.conn&&this.conn.open}_newPeer(e){return new BM(e,{debug:0})}async host(e=0){this.close(),this.role="host",this.setState("opening");const t=zM();return new Promise((n,i)=>{const r=this._newPeer(gd+t);this.peer=r;let o=!1;r.on("open",()=>{this.code=t,o=!0,this.setState("waiting"),n(t)}),r.on("connection",a=>{if(this.conn){a.close();return}this._bind(a)}),r.on("error",a=>{if(!o&&a.type==="unavailable-id"&&e<5){r.destroy(),this.host(e+1).then(n,i);return}o?this.setState("error",Er(a)):(this.setState("error",Er(a)),i(a))})})}async join(e){return this.close(),this.role="guest",this.code=sh(e),this.setState("connecting"),new Promise((t,n)=>{const i=this._newPeer(null);this.peer=i;let r=!1;i.on("open",()=>{const o=i.connect(gd+this.code,{reliable:!0}),a=setTimeout(()=>{r||(r=!0,this.setState("error","その部屋コードの相手が見つかりません"),n(new Error("timeout")))},12e3);o.on("open",()=>{clearTimeout(a),r=!0,this._bind(o),t()})}),i.on("error",o=>{r?this.setState("error",Er(o)):(r=!0,this.setState("error",Er(o)),n(o))})})}_bind(e){this.conn=e,e.on("data",t=>{if(t&&t.t==="ping"){this.send({t:"pong",a:t.a});return}if(t&&t.t==="pong"){this.pingMs=Math.round(performance.now()-t.a);return}this.onMessage(t)}),e.on("close",()=>{this.setState("closed"),this.conn=null}),e.on("error",t=>this.setState("error",Er(t))),this.setState("connected"),clearInterval(this._pingTimer),this._pingTimer=setInterval(()=>{this.connected&&this.send({t:"ping",a:performance.now()})},1e3)}send(e){if(this.conn&&this.conn.open)try{this.conn.send(e)}catch{}}close(){if(clearInterval(this._pingTimer),this._pingTimer=null,this.conn){try{this.conn.close()}catch{}this.conn=null}if(this.peer){try{this.peer.destroy()}catch{}this.peer=null}this.role=null,this.code="",this.pingMs=0,this.state!=="idle"&&this.setState("idle")}}function Er(s){const e=s&&s.type;return e==="peer-unavailable"?"その部屋コードの相手が見つかりません":e==="unavailable-id"?"部屋コードが使用中です":e==="network"||e==="server-error"?"接続サーバーに繋がりません":e==="browser-incompatible"?"このブラウザは通信対戦に対応していません":s&&(s.message||s.type)||"接続エラー"}const up=["free","step","land","fire","rush","swing","stagger","down","wake","dead"],Xn=s=>Math.round(s*100)/100,Tn=s=>Math.round(s*10)/10;function _d(s){const e=s.root.userData;return[Xn(s.pos.x),Xn(s.pos.y),Xn(s.pos.z),Tn(s.vel.x),Tn(s.vel.y),Tn(s.vel.z),Xn(s.yaw),up.indexOf(s.st),Xn(s.stT),Xn(s.stDur),s.hp,Math.round(s.boost),(s.overheat?1:0)|(s.grounded?2:0)|(s.boosting?4:0)|(e.saber.visible?8:0),Tn(s.invuln),Math.round(s.awake),Tn(s.awakeT),s.ammo.shot??0,s.ammo.sub??0,s.ammo.sp_shot??0,s.ammo.sp_melee??0,s.meleeStage,ql.indexOf(s.meleeDir),gi.indexOf(s.fireKey)]}function vd(s,e,t=1){const n=s.root.userData;s.pos.x+=(e[0]-s.pos.x)*t,s.pos.y+=(e[1]-s.pos.y)*t,s.pos.z+=(e[2]-s.pos.z)*t,s.vel.set(e[3],e[4],e[5]),s.yaw=e[6],s.st=up[e[7]]||"free",s.stT=e[8],s.stDur=e[9],s.hp=e[10],s.boost=e[11];const i=e[12];s.overheat=!!(i&1),s.grounded=!!(i&2),s.boosting=!!(i&4),n.saber.visible=!!(i&8),s.invuln=e[13],s.awake=e[14],s.awakeT=e[15],s.awakeReady=s.awake>=100&&s.awakeT<=0,s.ammo.shot=e[16],s.ammo.sub=e[17],s.ammo.sp_shot=e[18],s.ammo.sp_melee=e[19],s.meleeStage=e[20],s.meleeDir=ql[e[21]]||"n",s.meleeVar=s.d.melee[s.meleeDir]||s.d.melee.n,s.fireKey=gi[e[22]]||null}function VM(s,e){const t=[];for(const n of s)n.netId!=null&&t.push(n.netId,e.indexOf(n.owner),gi.indexOf(n.key),Tn(n.pos.x),Tn(n.pos.y),Tn(n.pos.z),Math.round(n.vel.x),Math.round(n.vel.y),Math.round(n.vel.z));return t}function GM(s,e){const t=[];for(const n of s)n.netId!=null&&t.push(n.netId,e.indexOf(n.owner),Tn(n.pos.x),Tn(n.pos.y),Tn(n.pos.z));return t}function WM(s,e){const t=[];for(const n of s)t.push(e.indexOf(n.owner),Xn(n.dir.x),Xn(n.dir.y),Xn(n.dir.z),Xn(n.life));return t}function XM(s,e,t){const n=e.mechs;return{t:"s",n:t,m:[_d(n[0]),_d(n[1])],p:VM(e.projectiles.list,n),b:GM(e.projectiles.bits,n),l:WM(e.projectiles.beams,n),tm:Tn(s.time),c:[s.cost.ally,s.cost.foe],o:s.over?1:0}}const ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class cr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const jM=new va(-1,1,1,-1,0,1);class $M extends Pt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const qM=new $M;class rh{constructor(e){this._mesh=new be(qM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class KM extends cr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wr.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xd extends cr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class YM extends cr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ZM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new KM(ta),this.copyPass.material.blending=fi,this.clock=new B0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xd!==void 0&&(o instanceof xd?n=!0:o instanceof YM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class JM extends cr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const QM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class tr extends cr{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,o,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new In(r,o,{type:pi});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new In(r,o,{type:pi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=QM;this.highPassUniforms=Wr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new we(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wr.clone(ta.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,blending:cn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new ft,this._fsQuad=new rh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=tr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=tr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}tr.BlurDirectionX=new we(1,0);tr.BlurDirectionY=new we(0,1);const Ho={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class eb extends cr{constructor(){super(),this.uniforms=Wr.clone(Ho.uniforms),this.material=new p0({name:Ho.name,uniforms:this.uniforms,vertexShader:Ho.vertexShader,fragmentShader:Ho.fragmentShader}),this._fsQuad=new rh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Td?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ed?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ad?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Cd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const tb=document.getElementById("app"),nr=matchMedia("(pointer: coarse)").matches||innerWidth<760,Si=new Ly({antialias:!nr,powerPreference:"high-performance",preserveDrawingBuffer:!1});Si.setPixelRatio(Math.min(devicePixelRatio,nr?1.5:2));Si.shadowMap.enabled=!0;Si.shadowMap.type=nr?wl:Md;Si.toneMapping=Cl;Si.toneMappingExposure=1.12;tb.appendChild(Si.domElement);const ir=new qd,ui=new en(52,1,.5,1200),Nt=new cM(ui),oh=new fM([]);let Gn=null,Un=localStorage.getItem("gvs.stage")||rs;Kl[Un]||(Un=rs);async function Kr(s){if(Gn&&Gn.id===s)return;await(async()=>{const t=await FS(ir,Si,s);Gn&&Gn.dispose(),t.id=s,Gn=t,Nt.colliders=Gn.buildings,oh.boxes=Gn.boxes,ui.far=Gn.far,ui.updateProjectionMatrix()})()}const to=new ZM(Si);to.addPass(new JM(ir,ui));const dp=new tr(new we(1,1),nr?.42:.55,nr?.45:.55,.86);to.addPass(dp);to.addPass(new eb);function nb(){to.render()}const Bi=new aM(ir),Je={scene:ir,fx:Bi,collision:oh,projectiles:null,mechs:[],spawnShot(s,e){Je.projectiles.spawn(s,e)},hit(s,e,t,n,i,r,o){e.takeHit(s,t,n,i,r,o)>0&&(e===se.self||s===se.self)&&Nt.bump(o==="melee"?.55:.3)},onDeath(s,e){const t=s.team==="ally"?"ally":"foe";se.cost[t]=Math.max(0,se.cost[t]-s.d.cost),Nt.bump(1.2),se.cost[t]<=0?yp(t==="ally"?"lose":"win",s):(Fn.message(s===se.self?"DOWN...":"DESTROYED",s===se.self?"#ff6b74":"#ffcf4d"),db(.09,.12))},breakHoming(s){let e=0;for(const t of Je.projectiles.list)t.owner.team!==s.team&&t.homing>0&&(t.homing=0,e++);return e},msg(s){Fn.message(s,"#ffcf4d")}};Je.projectiles=new oM(Je);const Fn=new uM,wr=new lM,se={self:null,foe:null,ai:null,camera:ui,cost:{ally:zs,foe:zs},time:Fu,running:!1,paused:!1,over:!1,mode:"cpu",init(s="brave",e="garm",t="normal"){for(const r of Je.mechs)ir.remove(r.root),r.trail&&ir.remove(r.trail.mesh);Je.mechs.length=0,Je.projectiles.clear(),Bi.clear();const n=new Qu(Fi[s],"ally",Je),i=new Qu(Fi[e],"foe",Je);n.isPlayer=!0,n.target=i,i.target=n,n.pos.set(0,0,-42),n.yaw=0,i.pos.set(0,0,42),i.yaw=Math.PI,Je.mechs.push(n,i),this.self=n,this.foe=i,this.ai=this.mode==="cpu"?new hM(i,Je,t):null,this.cost.ally=zs,this.cost.foe=zs,this.time=Fu,this.over=!1,Fn.setup(n,i),Nt.snap(n,i)},finish(s){if(this.over)return;this.over=!0,this.running=!1,this.paused=!1,document.getElementById("pauseBtn").classList.add("hidden"),document.getElementById("pauseMenu").classList.add("hidden"),document.getElementById("touch").classList.add("hidden");const e=document.getElementById("result"),t=document.getElementById("resTitle");t.textContent=s==="win"?"MISSION COMPLETE":s==="lose"?"MISSION FAILED":"DRAW",t.className=s==="win"?"win":"lose",e.classList.remove("hidden"),this.mode==="host"&&mt.connected&&!$t.active&&mt.send({t:"end",r:s}),pe("againBtn").classList.toggle("hidden",this.mode!=="cpu")}};let yd=0,Sd=0;function ah(){const s=Math.max(1,Math.floor(visualViewport?visualViewport.width:innerWidth)),e=Math.max(1,Math.floor(visualViewport?visualViewport.height:innerHeight));if(s===yd&&e===Sd)return;yd=s,Sd=e,Si.setSize(s,e,!1),to.setSize(s,e);const t=nr?.5:1;dp.setSize(Math.max(1,Math.floor(s*t)),Math.max(1,Math.floor(e*t))),ui.aspect=s/e;const n=e>s;Nt.portrait=n,ui.fov=n?62:ui.aspect<1.7?54:48,ui.updateProjectionMatrix()}addEventListener("resize",ah);ah();function ib(s){if(se.paused){wr.read(),wr.endFrame();return}const e=se.running?wr.read():ts;if(se.mode==="guest"){Mb(s,e),wr.endFrame();return}if(se.running&&!se.over&&(se.time-=s,se.time<=0)){se.time=0;const n=se.cost.ally===se.cost.foe?"draw":se.cost.ally>se.cost.foe?"win":"lose";se.finish(n)}const t=se.mode==="host"?xb():se.ai?se.ai.update(s):ts;se.self&&se.self.update(s,se.running?e:ts),se.foe&&se.foe.update(s,se.running?t:ts),Je.projectiles.update(s,Je.mechs),Bi.update(s),$t.active||Nt.update(s,se.self,se.foe),se.self&&Fn.update(s,se),se.mode==="host"&&Sb(s),fp(),wr.endFrame()}let sb=0;function fp(){const s=pe("netPing");if(se.mode==="cpu"||!mt.connected){s.classList.add("hidden");return}s.classList.remove("hidden"),++sb%30===0&&(s.textContent=`PING ${mt.pingMs}ms`)}let as=performance.now();function pp(s){requestAnimationFrame(pp),ah();let e=(s-as)/1e3;as=s,e>.1&&(e=.1),lb(e),fb(e),mb(e),ib(e*ci),nb()}let _i=localStorage.getItem("gvs.level")||"easy";for(const s of document.querySelectorAll("#lvPick .lv"))s.classList.toggle("on",s.dataset.lv===_i),s.addEventListener("click",()=>{_i=s.dataset.lv,localStorage.setItem("gvs.level",_i);for(const e of document.querySelectorAll("#lvPick .lv"))e.classList.toggle("on",e===s)});const rb=[["射撃",s=>s.weapons.shot],["サブ",s=>s.weapons.sub],["特射",s=>s.weapons.sp_shot],["特格",s=>s.weapons.sp_melee]];let ln=localStorage.getItem("gvs.self")||"brave",vi=localStorage.getItem("gvs.foe")||"garm";Fi[ln]||(ln="brave");Fi[vi]||(vi="garm");function mp(s){const e=Fi[s],t=document.getElementById("mechInfo"),n=rb.map(([r,o])=>{const a=o(e);return a?`<div><i>${r}</i><span>${a.name}</span></div>`:""}).join(""),i=ql.map(r=>{const o=e.melee[r];return o?`<div><i>${o.label}</i><span>${o.stages.length}段 / 総${o.stages.reduce((a,c)=>a+c.dmg,0)}</span></div>`:""}).join("");t.innerHTML=`
    <div class="miTop"><span class="miName">${e.name}</span><span class="miRole">${e.role}</span></div>
    <div class="miDesc">${e.desc}</div>
    <div class="miStats">
      <span><b>コスト</b>${e.cost}</span><span><b>耐久</b>${e.hp}</span>
      <span><b>歩き</b>${e.walk}</span><span><b>BD</b>${e.bdSpeed}</span>
    </div>
    <div class="miMoves">${n}${i}</div>`}function gp(s,e){const t=document.getElementById(s);t.innerHTML="";for(const i of qy){const r=Fi[i],o=document.createElement("button");o.className="mp"+(e?" foeSel":""),o.dataset.id=i,o.innerHTML=`<span class="mpChip">${r.cost}</span>
                   <span class="mpName">${r.name}</span>
                   <span class="mpCost">${r.role}</span>`,o.addEventListener("click",()=>{e?(vi=i,localStorage.setItem("gvs.foe",i)):(ln=i,localStorage.setItem("gvs.self",i),mp(i));for(const a of t.children)a.classList.toggle("on",a===o);se.running||se.init(ln,vi,_i)}),t.appendChild(o)}const n=e?vi:ln;for(const i of t.children)i.classList.toggle("on",i.dataset.id===n)}gp("selfPick",!1);gp("foePick",!0);mp(ln);function ob(){const s=document.getElementById("stagePick");s.innerHTML="";for(const e of DS){const t=Kl[e],n=document.createElement("button");n.className="sp",n.dataset.id=e,n.innerHTML=`<span class="spName">${t.name}</span><span class="spDesc">${t.desc}</span>`,n.addEventListener("click",()=>ab(e)),n.addEventListener("pointerenter",()=>BS(e),{once:!0}),s.appendChild(n)}Yr()}function Yr(){for(const s of document.getElementById("stagePick").children)s.classList.toggle("on",s.dataset.id===Un)}async function ab(s){if(s===Un&&Gn)return;Un=s,localStorage.setItem("gvs.stage",s),Yr();const e=document.getElementById("stagePick");e.classList.add("loading");try{await Kr(s),se.running||se.init(ln,vi,_i)}catch(t){console.error(t),Fn.message("ステージを読み込めませんでした","#ff6b74"),Un=rs,Yr(),await Kr(rs)}finally{e.classList.remove("loading")}}ob();(async()=>{const s=e=>`/assault-frame-vs/${e}`;try{await WS(s("models/mechparts.glb"),s("draco/"))}catch(e){console.warn("機体パーツを読み込めませんでした。簡易モデルで続行します",e)}try{await Kr(Un)}catch(e){console.error(e),Un=rs,Yr(),await Kr(rs)}se.init(ln,vi,_i),as=performance.now(),requestAnimationFrame(pp)})();const pe=s=>document.getElementById(s),na={total:2,fight:.66};let jn=0;function _p(s,e){const t=pe("readyBanner");pe("readyText").textContent=s,t.className="",t.offsetWidth,t.className=e}function cb(){pe("readyBanner").className=""}function vp(){jn=na.total,se.running=!1,Nt.intro=1,Nt.snap(se.self,se.foe),_p("READY","ready")}function lb(s){if(jn<=0||se.paused)return;const e=jn;jn-=s,Nt.intro=Math.pow(Math.max(0,jn)/na.total,1.5),e>na.fight&&jn<=na.fight&&(_p("FIGHT!","fight"),Nt.bump(.35)),jn<=0&&hb()}function hb(){jn=0,Nt.intro=0,se.running=!0}function ub(){jn=0,Nt.intro=0,cb()}let ci=1,js=0,xp=1;function db(s,e){js=Math.max(js,s),xp=e}const Di={stop:.14,slow:1.45,ramp:2.35,result:2.75},$t={active:!1,t:0,result:null,victim:null,nextBoom:0,shown:!1};function yp(s,e){$t.active||se.over||($t.active=!0,$t.t=0,$t.result=s,$t.victim=e,$t.nextBoom=.35,$t.shown=!1,se.running=!1,Nt.endFocus(),Nt.bump(1.4),Bi.finishBlast(e.pos),pb(.85,.5),gb(s==="win"?"DESTROYED":"SHOT DOWN"),pe("touch").classList.add("hidden"),pe("pauseBtn").classList.add("hidden"),se.mode==="host"&&mt.connected&&mt.send({t:"fin",r:s,v:Je.mechs.indexOf(e)}))}function fb(s){if(js>0?(js-=s,ci=xp,js<=0&&(ci=1)):$t.active||(ci=1),!$t.active)return;const e=$t;e.t+=s,e.t<Di.stop?ci=.06:e.t<Di.slow?ci=.24:e.t<Di.ramp?ci=.24+(e.t-Di.slow)/(Di.ramp-Di.slow)*.76:ci=1,e.t<Di.ramp&&e.t>=e.nextBoom&&(e.nextBoom=e.t+.22+Math.random()*.2,Bi.secondary(e.victim.pos,4.5),Nt.bump(.35)),Nt.focusOn(e.victim,e.t,s),!e.shown&&e.t>=Di.result&&(e.shown=!0,se.finish(e.result))}function ch(){$t.active=!1,$t.victim=null,ci=1,js=0,Nt.endFocus(),pe("finishBanner").classList.remove("on"),pe("flash").style.opacity="0"}let Hs=0,Sp=1;function pb(s,e){Hs=Math.max(Hs,s),Sp=e}function mb(s){Hs<=0||(Hs=Math.max(0,Hs-s/Sp),pe("flash").style.opacity=String(Hs))}function gb(s){const e=pe("finishBanner");pe("finishText").textContent=s,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}const mt=new HM,_b=30,cs=["stepPressed","melee","sub","sp_shot","sp_melee","awake"],ua={},Sa={},da={};for(const s of cs)ua[s]=0,Sa[s]=0,da[s]=0;const Lr={...ts};let yc=0,Mp=0,fa=null;function vb(s){for(const e of cs)s[e]&&ua[e]++;mt.send({t:"in",x:Math.round(s.mx*100)/100,y:Math.round(s.my*100)/100,j:s.jump?1:0,s:s.shot?1:0,e:cs.map(e=>ua[e])})}function xb(){const s=Lr;for(const e of cs)s[e]=Sa[e]>da[e],s[e]&&da[e]++;return s}function yb(s){if(s){if(s.t==="in"){Lr.mx=s.x,Lr.my=s.y,Lr.jump=!!s.j,Lr.shot=!!s.s;for(let e=0;e<cs.length;e++)Sa[cs[e]]=s.e[e];return}if(s.t==="hello"){Tl=Fi[s.mech]?s.mech:"garm",mt.send({t:"start",h:ln,g:Tl,st:Un}),Sc("host");return}if(s.t==="start"){bp=Fi[s.h]?s.h:"brave";const e=Kl[s.st]?s.st:rs;e!==Un||!Gn?(di("netJoinStatus","ステージを読み込んでいます…"),Kr(e).then(()=>{Un=e,Yr(),Sc("guest")}).catch(()=>{di("netJoinStatus","ステージを読み込めませんでした",!0),mt.close()})):Sc("guest");return}if(s.t==="s"){fa=s;return}if(s.t==="fin"){const e=Je.mechs[s.v],t=s.r==="win"?"lose":s.r==="lose"?"win":"draw";e?yp(t,e):se.finish(t);return}if(s.t==="end"){if($t.active)return;se.finish(s.r==="win"?"lose":s.r==="lose"?"win":"draw");return}if(s.t==="menu"){Tp();return}}}let Tl="garm",bp="brave";function Sb(s){yc+=s,!(yc<1/_b)&&(yc=0,mt.connected&&mt.send(XM(se,Je,++Mp)))}function Mb(s,e){mt.connected&&vb(e);const t=fa;if(t){fa=null,vd(Je.mechs[0],t.m[0],.4),vd(Je.mechs[1],t.m[1],.4),Je.projectiles.syncShots(t.p,Je.mechs,gi),Je.projectiles.syncBits(t.b,Je.mechs),Je.projectiles.syncBeams(t.l,Je.mechs),se.time=t.tm,se.cost.ally=t.c[1],se.cost.foe=t.c[0];for(const n of Je.mechs)n.hp<n.netPrevHp&&bb(n),n.st==="dead"&&n.netPrevSt!=="dead"&&Bi.explode(n.pos),n.netPrevHp=n.hp,n.netPrevSt=n.st}for(const n of Je.mechs){if(n.st==="dead"){n.root.visible=!1;continue}n.root.visible=!0,n.pos.addScaledVector(n.vel,s),n.root.position.copy(n.pos),n.root.rotation.y=n.yaw;const i=oh.floorAt(n.pos.x,n.pos.z),r=n.root.userData.shadow;r.position.y=i-n.pos.y+.03,n.animT+=s,n.stT+=s,n.pose(s),n.updateTrail()}Je.projectiles.extrapolate(s),Bi.update(s),$t.active||Nt.update(s,se.self,se.foe),se.self&&Fn.update(s,se),fp()}function bb(s){const e=s.pos.clone();e.y+=1.6,Bi.hit(e,s.d.palette.beam)}function Sc(s){ch(),se.mode=s;const e=s==="host"?ln:bp,t=s==="host"?Tl:ln;se.init(e,t,_i);const n=s==="host"?Je.mechs[0]:Je.mechs[1],i=s==="host"?Je.mechs[1]:Je.mechs[0];se.self=n,se.foe=i,n.isPlayer=!0,i.isPlayer=!1;for(const r of Je.mechs)r.netPrevHp=r.hp,r.netPrevSt=r.st;for(const r of cs)ua[r]=0,Sa[r]=0,da[r]=0;fa=null,Mp=0,Fn.setup(n,i),Nt.snap(n,i),uh(),pe("gate").classList.add("hidden"),Fn.show(),se.paused=!1,se.over=!1,pe("pauseMenu").classList.add("hidden"),pe("pauseBtn").classList.remove("hidden"),pe("result").classList.add("hidden"),pe("touch").classList.remove("hidden"),as=performance.now(),vp()}function Tp(){se.mode!=="cpu"&&(Fn.message("相手が退出しました","#ff6b74"),mt.close(),setTimeout(hh,1200))}function lh(s){const e=se.mode==="cpu";se.paused=s&&e,pe("pauseMenu").querySelector("h2").textContent=e?"PAUSE":"MENU",pe("resumeBtn").textContent=e?"続ける":"戻る",pe("pauseMenu").classList.toggle("hidden",!s),pe("touch").classList.toggle("hidden",s),as=performance.now()}function Ep(){ch(),se.mode="cpu",se.init(ln,vi,_i),se.paused=!1,pe("pauseMenu").classList.add("hidden"),pe("pauseBtn").classList.remove("hidden"),pe("result").classList.add("hidden"),pe("touch").classList.remove("hidden"),as=performance.now(),vp()}function hh(){ch(),ub(),mt.connected&&mt.send({t:"menu"}),mt.close(),uh(),se.mode="cpu",pe("netPing").classList.add("hidden"),se.running=!1,se.paused=!1,se.over=!1,pe("pauseMenu").classList.add("hidden"),pe("pauseBtn").classList.add("hidden"),pe("result").classList.add("hidden"),pe("touch").classList.add("hidden"),Fn.hide(),pe("gate").classList.remove("hidden"),se.init(ln,vi,_i),as=performance.now()}function wp(s){for(const e of document.querySelectorAll("#modePick .md"))e.classList.toggle("on",e.dataset.mode===s);pe("lvPick").classList.toggle("hidden",s!=="cpu"),pe("startBtn").classList.toggle("hidden",s!=="cpu"),pe("netPick").classList.toggle("hidden",s!=="net"),pe("foePick").parentElement.classList.toggle("hidden",s!=="cpu"),pe("stageNote").textContent=s==="cpu"?"":"部屋を作った側のものが使われます"}function Ap(s){pe("netPanel").classList.remove("hidden"),pe("netTitle").textContent=s==="host"?"部屋を作る":"部屋に入る",pe("netHostBox").classList.toggle("hidden",s!=="host"),pe("netJoinBox").classList.toggle("hidden",s!=="join"),pe("netStatus").className="netStatus",pe("netJoinStatus").className="netStatus",pe("netJoinStatus").textContent=""}function uh(){pe("netPanel").classList.add("hidden")}function di(s,e,t){const n=pe(s);n.textContent=e,n.className="netStatus"+(t?" err":"")}mt.onMessage=yb;mt.onState=(s,e)=>{s==="waiting"&&di("netStatus","相手の接続を待っています…"),s==="connected"&&mt.role==="host"&&di("netStatus","接続しました。開始します…"),s==="connected"&&mt.role==="guest"&&di("netJoinStatus","接続しました。開始を待っています…"),s==="error"&&di(mt.role==="guest"?"netJoinStatus":"netStatus",e||"接続エラー",!0),s==="closed"&&se.running&&Tp()};pe("hostBtn").addEventListener("click",async()=>{Ap("host"),pe("roomCode").textContent="----",di("netStatus","部屋を準備中…");try{const s=await mt.host();pe("roomCode").textContent=s}catch{}});pe("joinBtn").addEventListener("click",()=>{Ap("join"),pe("codeInput").value="",setTimeout(()=>pe("codeInput").focus(),50)});pe("codeInput").addEventListener("input",s=>{s.target.value=sh(s.target.value)});pe("codeInput").addEventListener("keydown",s=>{s.key==="Enter"&&pe("connectBtn").click()});pe("connectBtn").addEventListener("click",async()=>{const s=sh(pe("codeInput").value);if(s.length<4){di("netJoinStatus","4文字のコードを入れてください",!0);return}di("netJoinStatus","接続中…");try{await mt.join(s),mt.send({t:"hello",mech:ln})}catch{}});pe("netCancelBtn").addEventListener("click",()=>{mt.close(),uh()});for(const s of document.querySelectorAll("#modePick .md"))s.addEventListener("click",()=>wp(s.dataset.mode));wp("cpu");const Cp=()=>(se.running||jn>0)&&!se.over;pe("pauseBtn").addEventListener("click",()=>{Cp()&&lh(!0)});pe("resumeBtn").addEventListener("click",()=>lh(!1));pe("toMenuBtn").addEventListener("click",hh);pe("resultMenuBtn").addEventListener("click",hh);addEventListener("keydown",s=>{s.code==="Escape"&&(Cp()||se.paused)&&lh(!se.paused)});pe("startBtn").addEventListener("click",()=>{pe("gate").classList.add("hidden"),Fn.show(),Ep()});pe("againBtn").addEventListener("click",Ep);
