(()=>{var Fm=Object.defineProperty;var hi=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var ha=(i,e)=>{for(var t in e)Fm(i,t,{get:e[t],enumerable:!0})};function Rd(i,e,t,n){let s=Math.log2(i/e);return t*Math.exp(-(s*s)/(2*n*n))}function da(i){let e=Rd(i,2500,12,.55)-(i>7e3?Math.log2(i/7e3)*3:0),t=Rd(i,5e3,10,.42)-(i>8e3?Math.log2(i/8e3)*10:0);return{canal:e,concha:t,total:e+t*.55}}function Un(i){let e=Math.log10(i/165.4+.88)/2.1;return jt(1-e,.02,.98)}function Bo(i){let e=1-i;return 165.4*(Math.pow(10,2.1*e)-.88)}function $i(i,e,{active:t=!0,loud:n=!1}={}){let s=Un(i),r=(t?.3:.42)*s+.05+(n?.08:0),a=t?.028:.06,o;e<=s?o=Math.exp(-(s-e)/r):o=Math.exp(-Math.pow((e-s)/a,2)),o*=(t?1:.45)*(n?1.6:1);let c=6.2,h=.035,u;return e<=s?u=c*Math.log((s+h)/(s+h-e)):u=c*Math.log((s+h)/h)+c/h*(e-s),{env:o,phase:u,xc:s}}function ko(i,e,t=!0){let{env:n}=$i(i,e,{active:t}),s=20*Math.log10(Math.max(n,1e-4));return jt((t?18:58)-s,0,110)}function fa(i){let e=1/(1+Math.exp(-(i-.12)/.18)),t=1/(1+Math.exp(.12/.18)),n=wi+35*(e-t)/(1-t)+(e<t?12*(e-t)/t:0),s=jt((n-(wi+4))/28,0,1),r=1-.09*(n-wi)/35;return{po:e,v:n,release:s,ohcLength:r}}function Bm(i,e){let t=Math.log2(i/e);return t>=0?90*t:26*-t}function lr(i,e,t,n){let s=Th[i],r=e-(s.thr+Bm(t,n)),a=Vs(0,s.dr,r);return{rate:s.sr+(s.max-s.sr)*a,driven:a,eff:r}}function Ah(i){return i>=5e3?0:jt(.86/(1+Math.pow(i/2200,2.4)),0,.9)}function Cd({rate:i,f:e,vs:t,durationMs:n,startMs:s=0,rng:r=Math.random,refractoryMs:a=.8,sr:o=0}){let l=[],h=t<=0?0:t<.53?2*t+t**3+5*t**5/6:t<.85?-.4+1.39*t+.43/(1-t):1/(t**3-4*t**2+3*t),u=km(h),d=-1e9;for(let f=0;f<n;f+=.02){let m=s+f;if(m-d<a)continue;let x=jt((m-d-a)/1.5,0,1),p=2*Math.PI*e*m/1e3,g=Math.max(0,i-o),y=h>0?Math.exp(h*Math.cos(p))/u:1,w=(o+g*y)*x;r()<w*.02/1e3&&(l.push(m),d=m)}return l}function km(i){let e=1,t=1;for(let n=1;n<30&&(t*=(i/(2*n))**2,e+=t,!(t<1e-9));n++);return e}var jt,Eh,Vs,wi,Th,zo,yn,Ei=hi(()=>{jt=(i,e,t)=>Math.min(t,Math.max(e,i)),Eh=(i,e,t)=>i+(e-i)*t,Vs=(i,e,t)=>{let n=jt((t-i)/(e-i),0,1);return n*n*(3-2*n)};wi=-60;Th={high:{label:["High-SR \xB7 low threshold","\u9AD8\u81EA\u53D1\u7387 \xB7 \u4F4E\u9608\u503C"],sr:60,thr:0,dr:22,max:230},mid:{label:["Medium-SR","\u4E2D\u81EA\u53D1\u7387"],sr:12,thr:14,dr:32,max:210},low:{label:["Low-SR \xB7 high threshold","\u4F4E\u81EA\u53D1\u7387 \xB7 \u9AD8\u9608\u503C"],sr:.6,thr:32,dr:48,max:190}};zo=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,yn=i=>i>=1e3?`${+(i/1e3).toFixed(i%1e3?1:0)} kHz`:`${Math.round(i)} Hz`});function qm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $m(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hp(){let i=La("canvas");return i.style.display="block",i}function Da(...i){let e="THREE."+i.shift();Pr?Pr("log",e,...i):console.log(e,...i)}function up(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=up(i);let e="THREE."+i.shift();if(Pr)Pr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=up(i);let e="THREE."+i.shift();if(Pr)Pr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Zs(...i){let e=i.join(" ");e in Vd||(Vd[e]=!0,nt(...i))}function dp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function us(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function Bu(i,e){return(i%e+e)%e}function Xm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ym(i,e,t){return i!==e?(t-i)/(e-i):0}function Ta(i,e,t){return(1-t)*i+t*e}function Zm(i,e,t,n){return Ta(i,e,1-Math.exp(-t*n))}function Km(i,e=1){return e-Math.abs(Bu(i,e*2)-e)}function Jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function e0(i,e){return i+Math.random()*(e-i)}function t0(i){return i*(.5-Math.random())}function n0(i){i!==void 0&&(Gd=i);let e=Gd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function i0(i){return i*Ea}function s0(i){return i*Ir}function r0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function a0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function o0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*h,o*c);break;default:nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function eh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zu(i,e){if(e.constructor===Float32Array)return i;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Hu(i,e){if(e.constructor===Float32Array)return i;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function l0(){let i={enabled:!0,workingColorSpace:Pa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ft&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ft&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?Ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pa]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),i}function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}function Fh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Wh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qs.fromArray(i,r);let o=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),l=e.dot(qs),c=t.dot(qs),h=n.dot(qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function tf(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=us()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}function al(i,e,t,n,s,r){Mr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ya.x=r*Mr.x-s*Mr.y,ya.y=s*Mr.x+r*Mr.y):ya.copy(Mr),i.copy(e),i.x+=ya.x,i.y+=ya.y,i.applyMatrix4(mp)}function w0(i,e,t,n,s,r,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ds,o),l===null)return null;pl.copy(o),pl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:i}}function ml(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,hl),i.getVertexPosition(l,ul),i.getVertexPosition(c,dl);let h=w0(i,e,t,n,hl,ul,dl,of);if(h){let u=new C;ji.getBarycoord(of,hl,ul,dl,u),s&&(h.uv=ji.getInterpolatedAttribute(s,o,l,c,u,new ue)),r&&(h.uv1=ji.getInterpolatedAttribute(r,o,l,c,u,new ue)),a&&(h.normal=ji.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};ji.getNormal(hl,ul,dl,d.normal),h.face=d,h.barycoord=u}return h}function yl(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Wl.fromBufferAttribute(o,s),ql.fromBufferAttribute(o,r),t.distanceSqToSegment(Wl,ql,Jh,df)>n)return;Jh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jh);if(!(c<e.near||c>e.far))return{distance:c,point:df.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}function gf(i,e,t,n,s,r,a){let o=au.distanceSqToPoint(i);if(o<t){let l=new C;au.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Vu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function yf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function A0(i,e){let t=1-i;return t*t*e}function R0(i,e){return 2*(1-i)*i*e}function C0(i,e){return i*i*e}function Aa(i,e,t,n){return A0(i,e)+R0(i,t)+C0(i,n)}function P0(i,e){let t=1-i;return t*t*t*e}function I0(i,e){let t=1-i;return 3*t*t*i*e}function L0(i,e){return 3*(1-i)*i*i*e}function D0(i,e){return i*i*i*e}function Ra(i,e,t,n,s){return P0(i,e)+I0(i,t)+L0(i,n)+D0(i,s)}function N0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=gp(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=k0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ja(r,a,t,o,l,c,0),a}function gp(i,e,t,n,s){let r;if(s===K0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=vf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=vf(a/n|0,i[a],i[a+1],r);return r&&Br(r,r.next)&&(Qa(r),r=r.next),r}function Js(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Qa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ja(i,e,t,n,s,r,a){if(!i)return;!a&&r&&W0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?F0(i,n,s,r):U0(i)){e.push(l.i,i.i,c.i),Qa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=O0(Js(i),e),Ja(i,e,t,n,s,r,2)):a===2&&B0(i,e,t,n,s,r):Ja(Js(i),e,t,n,s,r,1);break}}}function U0(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&wa(s,o,r,l,a,c,m.x,m.y)&&Xt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function F0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),p=Math.max(h,u,d),g=ou(f,m,e,t,n),y=ou(x,p,e,t,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=g&&b&&b.z<=y;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=p&&w!==s&&w!==a&&wa(o,h,l,u,c,d,w.x,w.y)&&Xt(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=f&&b.x<=x&&b.y>=m&&b.y<=p&&b!==s&&b!==a&&wa(o,h,l,u,c,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=g;){if(w.x>=f&&w.x<=x&&w.y>=m&&w.y<=p&&w!==s&&w!==a&&wa(o,h,l,u,c,d,w.x,w.y)&&Xt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=m&&b.y<=p&&b!==s&&b!==a&&wa(o,h,l,u,c,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function O0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Br(n,s)&&xp(n,t,t.next,s)&&ja(n,s)&&ja(s,n)&&(e.push(n.i,t.i,s.i),Qa(t),Qa(t.next),t=i=s),t=t.next}while(t!==i);return Js(t)}function B0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&X0(a,o)){let l=yp(a,o);a=Js(a,a.next),l=Js(l,l.next),Ja(a,e,t,n,s,r,0),Ja(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function k0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=gp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($0(c))}s.sort(z0);for(let r=0;r<s.length;r++)t=H0(s[r],t);return t}function z0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function H0(i,e){let t=V0(i,e);if(!t)return e;let n=yp(t,i);return Js(n,n.next),Js(t,t.next)}function V0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Br(i,t))return t;do{if(Br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&_p(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ja(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&G0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function G0(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function W0(i,e,t,n){let s=i;do s.z===0&&(s.z=ou(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,q0(s)}function q0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function ou(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _p(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function wa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&_p(i,e,t,n,s,r,a,o)}function X0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Y0(i,e)&&(ja(i,e)&&ja(e,i)&&Z0(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||Br(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Br(i,e){return i.x===e.x&&i.y===e.y}function xp(i,e,t,n){let s=Sl(Xt(i,e,t)),r=Sl(Xt(i,e,n)),a=Sl(Xt(t,n,i)),o=Sl(Xt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ml(i,t,e)||r===0&&Ml(i,n,e)||a===0&&Ml(t,i,n)||o===0&&Ml(t,e,n))}function Ml(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sl(i){return i>0?1:i<0?-1:0}function Y0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ja(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function Z0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yp(i,e){let t=lu(i.i,i.x,i.y),n=lu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vf(i,e,t,n){let s=lu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}function bf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Mf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function j0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Sf(s))s.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Sf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tn(i){let e={};for(let t=0;t<i.length;t++){let n=ir(i[t]);for(let s in n)e[s]=n[s]}return e}function Sf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Q0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}function wr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function bp(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function ng(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ig(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=ng(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function wf(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Ef(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function If(i,e){return i.distance-e.distance}function fu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fu(r[a],e,t,!0)}}function $u(i,e,t,n){let s=dg(n);switch(t){case Iu:return i*e;case yc:return i*e/s.components*s.byteLength;case vc:return i*e/s.components*s.byteLength;case Ns:return i*e*2/s.components*s.byteLength;case bc:return i*e*2/s.components*s.byteLength;case Lu:return i*e*3/s.components*s.byteLength;case vi:return i*e*4/s.components*s.byteLength;case Mc:return i*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case Sc:case Ec:return Math.max(i,8)*Math.max(e,8)/2;case Ac:case Rc:case Pc:case Ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cc:case yo:case Lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xc:case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vo:case jc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dg(i){switch(i){case On:case Au:return{byteLength:1,components:1};case $r:case Ru:case yi:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case xi:case gc:case ai:return{byteLength:4,components:1};case Cu:case Pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Is,Ls,Lf,mu,Df,uo,Nf,Gr,Ds,gn,Pt,Qs,Wr,Di,gu,_u,Uf,er,Ff,Of,Bf,kf,zf,Hf,Vf,Gf,xu,yu,Wf,qf,$f,Xf,Yf,Zf,Kf,Jf,jf,Cl,Pl,Il,Rr,Ll,Dl,Nl,Ul,dc,Qf,ep,Ni,vu,bu,Mu,fo,Su,wu,Eu,Tu,tr,qr,fc,pc,Fl,Ai,Ol,un,tp,po,Pn,mc,ls,On,Au,Ru,$r,gc,xi,ai,yi,_c,xc,nr,Cu,Pu,Iu,Lu,vi,es,cs,yc,vc,Ns,bc,Mc,mo,go,_o,xo,Sc,wc,Ec,Tc,Ac,Rc,Cc,Pc,Ic,yo,Lc,Dc,Nc,Uc,Fc,Oc,Bc,kc,zc,Hc,Vc,Gc,Wc,qc,$c,Xc,Yc,Zc,Kc,Jc,vo,jc,Ca,Bl,Al,nu,iu,su,ru,np,bo,ip,hs,Mn,Pa,Ia,Ft,Rl,sp,rp,ap,op,Du,lp,cp,Nu,Uu,Fu,Qc,Ou,ii,Cr,Vd,Pr,fp,mi,vn,Gd,Ea,Ir,Us,Xu,ue,mn,Yu,C,Ih,Wd,Zu,ft,Lh,qd,$d,wt,cr,kl,c0,Lr,h0,Nh,In,Ku,qt,zl,$n,Na,Hl,uc,At,hr,di,u0,d0,ys,Jo,Gn,Xd,Yd,Ri,Dr,f0,Zd,ur,Xi,jo,pa,p0,m0,Kd,Jd,jd,Qd,g0,dr,Uh,Qt,Dt,_0,Nr,pp,vs,Qo,Ie,bn,Xn,fi,Yi,Oh,Zi,fr,pr,ef,Bh,kh,zh,Hh,Vh,Gh,ji,Ci,Ki,pi,el,mr,gr,_r,bs,Ms,Ws,ma,tl,nl,qs,nn,il,x0,zt,Ua,Fa,_t,y0,ga,qh,Pi,v0,ni,$h,xr,Wn,_a,hn,Tt,Vl,Cn,Oa,Xh,b0,M0,qn,S0,si,ws,yr,xa,vr,br,Mr,ya,mp,sl,va,rl,nf,Yh,sf,Ks,Ji,Zh,ol,ll,ts,Kt,rf,$s,cl,af,hl,ul,dl,Kh,fl,of,pl,we,Ba,ka,Sr,lf,gl,cf,E0,ba,Ma,Yn,Xs,T0,_l,Es,hf,Gl,ns,Wl,ql,uf,Sa,xl,Jh,df,is,ff,pf,za,Ts,mf,au,vl,bl,ss,Ha,Va,rs,Ga,Wa,Ii,Ur,wn,gi,Zn,Fr,$l,_f,xf,jh,Qh,eu,En,qa,Xl,$a,Yl,Xa,Ya,Za,Zl,Kl,Ka,Or,cu,Ys,eo,J0,js,to,kr,Yt,_i,Fn,vp,eg,tg,ri,Jl,as,os,no,jl,Ql,Li,As,ec,tc,nc,ic,Kn,Rs,sc,rc,ac,io,Cs,oc,lc,Mp,cc,zr,so,tu,Tf,Af,ro,El,Tl,Ti,ao,Ss,Rf,Cf,Sn,hu,oo,lo,uu,Hr,Er,Tr,Vr,hc,Wu,sg,qu,rg,ag,og,lg,cg,hg,ug,du,Vt,hM,Pf,co,Ps,Ju,pu,ho,ju=hi(()=>{Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lf=0,mu=1,Df=2,uo=1,Nf=2,Gr=3,Ds=0,gn=1,Pt=2,Qs=0,Wr=1,Di=2,gu=3,_u=4,Uf=5,er=100,Ff=101,Of=102,Bf=103,kf=104,zf=200,Hf=201,Vf=202,Gf=203,xu=204,yu=205,Wf=206,qf=207,$f=208,Xf=209,Yf=210,Zf=211,Kf=212,Jf=213,jf=214,Cl=0,Pl=1,Il=2,Rr=3,Ll=4,Dl=5,Nl=6,Ul=7,dc=0,Qf=1,ep=2,Ni=0,vu=1,bu=2,Mu=3,fo=4,Su=5,wu=6,Eu=7,Tu=300,tr=301,qr=302,fc=303,pc=304,Fl=1e3,Ai=1001,Ol=1002,un=1003,tp=1004,po=1005,Pn=1006,mc=1007,ls=1008,On=1009,Au=1010,Ru=1011,$r=1012,gc=1013,xi=1014,ai=1015,yi=1016,_c=1017,xc=1018,nr=1020,Cu=35902,Pu=35899,Iu=1021,Lu=1022,vi=1023,es=1026,cs=1027,yc=1028,vc=1029,Ns=1030,bc=1031,Mc=1033,mo=33776,go=33777,_o=33778,xo=33779,Sc=35840,wc=35841,Ec=35842,Tc=35843,Ac=36196,Rc=37492,Cc=37496,Pc=37488,Ic=37489,yo=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,kc=37814,zc=37815,Hc=37816,Vc=37817,Gc=37818,Wc=37819,qc=37820,$c=37821,Xc=36492,Yc=36494,Zc=36495,Kc=36283,Jc=36284,vo=36285,jc=36286,Ca=2300,Bl=2301,Al=2302,nu=2303,iu=2400,su=2401,ru=2402,np=3200,bo=0,ip=1,hs="",Mn="srgb",Pa="srgb-linear",Ia="linear",Ft="srgb",Rl=7680,sp=519,rp=512,ap=513,op=514,Du=515,lp=516,cp=517,Nu=518,Uu=519,Fu=35044,Qc=35048,Ou="300 es",ii=2e3,Cr=2001;Vd={},Pr=null;fp={[Cl]:Cl,[Il]:Nl,[Ll]:Ll,[Rr]:Dl,[Pl]:Pl,[Nl]:Il,[Ul]:Ul,[Dl]:Rr},mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gd=1234567,Ea=Math.PI/180,Ir=180/Math.PI;Us={DEG2RAD:Ea,RAD2DEG:Ir,generateUUID:us,clamp:xt,euclideanModulo:Bu,mapLinear:Xm,inverseLerp:Ym,lerp:Ta,damp:Zm,pingpong:Km,smoothstep:Jm,smootherstep:jm,randInt:Qm,randFloat:e0,randFloatSpread:t0,seededRandom:n0,degToRad:i0,radToDeg:s0,isPowerOfTwo:r0,ceilPowerOfTwo:a0,floorPowerOfTwo:ku,setQuaternionFromProperEuler:o0,normalize:Hu,denormalize:zu},Xu=class Xu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xu.prototype.isVector2=!0;ue=Xu,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*x;p<0&&(d=-d,f=-f,m=-m,x=-x,p=-p);let g=1-o;if(p<.9995){let y=Math.acos(p),w=Math.sin(y);g=Math.sin(g*y)/w,o=Math.sin(o*y)/w,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yu=class Yu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yu.prototype.isVector3=!0;C=Yu,Ih=new C,Wd=new mn,Zu=class Zu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],p=s[3],g=s[6],y=s[1],w=s[4],b=s[7],T=s[2],E=s[5],_=s[8];return r[0]=a*x+o*y+l*T,r[3]=a*p+o*w+l*E,r[6]=a*g+o*b+l*_,r[1]=c*x+h*y+u*T,r[4]=c*p+h*w+u*E,r[7]=c*g+h*b+u*_,r[2]=d*x+f*y+m*T,r[5]=d*p+f*w+m*E,r[8]=d*g+f*b+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return Zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return Zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zu.prototype.isMatrix3=!0;ft=Zu,Lh=new ft,qd=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt=l0();kl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cr===void 0&&(cr=La("canvas")),cr.width=e.width,cr.height=e.height;let s=cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c0=0,Lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dh(s[a].image)):r.push(Dh(s[a]))}else r=Dh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};h0=0,Nh=new C,In=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=Pn,a=ls,o=vi,l=On,c=i.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=us(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nh).x}get height(){return this.source.getSize(Nh).y}get depth(){return this.source.getSize(Nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fl:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fl:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Tu;In.DEFAULT_ANISOTROPY=1;Ku=class Ku{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(f+1)/2,T=(g+1)/2,E=(h+d)/4,_=(u+x)/4,S=(m+p)/4;return w>b&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=_/n):b>T?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=S/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(xt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ku.prototype.isVector4=!0;qt=Ku,zl=class extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Na=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Hl=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},uc=class uc{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,m,x,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u0,e,d0)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ys.crossVectors(n,Gn),ys.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ys.crossVectors(n,Gn)),ys.normalize(),Jo.crossVectors(Gn,ys),s[0]=ys.x,s[4]=Jo.x,s[8]=Gn.x,s[1]=ys.y,s[5]=Jo.y,s[9]=Gn.y,s[2]=ys.z,s[6]=Jo.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],g=n[14],y=n[3],w=n[7],b=n[11],T=n[15],E=s[0],_=s[4],S=s[8],F=s[12],L=s[1],D=s[5],O=s[9],G=s[13],I=s[2],q=s[6],K=s[10],H=s[14],ce=s[3],Y=s[7],re=s[11],X=s[15];return r[0]=a*E+o*L+l*I+c*ce,r[4]=a*_+o*D+l*q+c*Y,r[8]=a*S+o*O+l*K+c*re,r[12]=a*F+o*G+l*H+c*X,r[1]=h*E+u*L+d*I+f*ce,r[5]=h*_+u*D+d*q+f*Y,r[9]=h*S+u*O+d*K+f*re,r[13]=h*F+u*G+d*H+f*X,r[2]=m*E+x*L+p*I+g*ce,r[6]=m*_+x*D+p*q+g*Y,r[10]=m*S+x*O+p*K+g*re,r[14]=m*F+x*G+p*H+g*X,r[3]=y*E+w*L+b*I+T*ce,r[7]=y*_+w*D+b*q+T*Y,r[11]=y*S+w*O+b*K+T*re,r[15]=y*F+w*G+b*H+T*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],p=e[11],g=e[15],y=l*f-c*d,w=o*f-c*u,b=o*d-l*u,T=a*f-c*h,E=a*d-l*h,_=a*u-o*h;return t*(x*y-p*w+g*b)-n*(m*y-p*T+g*E)+s*(m*w-x*T+g*_)-r*(m*b-x*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],p=e[14],g=e[15],y=t*o-n*a,w=t*l-s*a,b=t*c-r*a,T=n*l-s*o,E=n*c-r*o,_=s*c-r*l,S=h*x-u*m,F=h*p-d*m,L=h*g-f*m,D=u*p-d*x,O=u*g-f*x,G=d*g-f*p,I=y*G-w*O+b*D+T*L-E*F+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/I;return e[0]=(o*G-l*O+c*D)*q,e[1]=(s*O-n*G-r*D)*q,e[2]=(x*_-p*E+g*T)*q,e[3]=(d*E-u*_-f*T)*q,e[4]=(l*L-a*G-c*F)*q,e[5]=(t*G-s*L+r*F)*q,e[6]=(p*b-m*_-g*w)*q,e[7]=(h*_-d*b+f*w)*q,e[8]=(a*O-o*L+c*S)*q,e[9]=(n*L-t*O-r*S)*q,e[10]=(m*E-x*b+g*y)*q,e[11]=(u*b-h*E-f*y)*q,e[12]=(o*F-a*D-l*S)*q,e[13]=(t*D-n*F+s*S)*q,e[14]=(x*w-m*T-p*y)*q,e[15]=(h*T-u*w+d*y)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,x=a*h,p=a*u,g=o*u,y=l*c,w=l*h,b=l*u,T=n.x,E=n.y,_=n.z;return s[0]=(1-(x+g))*T,s[1]=(f+b)*T,s[2]=(m-w)*T,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+g))*E,s[6]=(p+y)*E,s[7]=0,s[8]=(m+w)*_,s[9]=(p-y)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),l=hr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),di.copy(this);let c=1/a,h=1/o,u=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=ii,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===ii)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Cr)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ii,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===ii)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===Cr)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};uc.prototype.isMatrix4=!0;At=uc,hr=new C,di=new At,u0=new C(0,0,0),d0=new C(1,1,1),ys=new C,Jo=new C,Gn=new C,Xd=new At,Yd=new mn,Ri=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yd.setFromEuler(this),this.setFromQuaternion(Yd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";Dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},f0=0,Zd=new C,ur=new mn,Xi=new At,jo=new C,pa=new C,p0=new C,m0=new mn,Kd=new C(1,0,0),Jd=new C(0,1,0),jd=new C(0,0,1),Qd={type:"added"},g0={type:"removed"},dr={type:"childadded",child:null},Uh={type:"childremoved",child:null},Qt=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Ri,n=new mn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new ft}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Zd.copy(e).applyQuaternion(this.quaternion),this.position.add(Zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jo.copy(e):jo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(pa,jo,this.up):Xi.lookAt(jo,pa,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),ur.setFromRotationMatrix(Xi),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qd),dr.child=e,this.dispatchEvent(dr),dr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(g0),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qd),dr.child=e,this.dispatchEvent(dr),dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,m0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qt.DEFAULT_UP=new C(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Dt=class extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},Qo={h:0,s:0,l:0};Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=wt.workingColorSpace){if(e=Bu(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fh(a,r,e+1/3),this.g=Fh(a,r,e),this.b=Fh(a,r,e-1/3)}return wt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return wt.workingToColorSpace(bn.copy(this),e),Math.round(xt(bn.r*255,0,255))*65536+Math.round(xt(bn.g*255,0,255))*256+Math.round(xt(bn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Mn){wt.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(Qo);let n=Ta(vs.h,Qo.h,t),s=Ta(vs.s,Qo.s,t),r=Ta(vs.l,Qo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ie;Ie.NAMES=pp;Xn=class extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new C,Yi=new C,Oh=new C,Zi=new C,fr=new C,pr=new C,ef=new C,Bh=new C,kh=new C,zh=new C,Hh=new qt,Vh=new qt,Gh=new qt,ji=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Yi.subVectors(n,t),Oh.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(Yi),l=fi.dot(Oh),c=Yi.dot(Yi),h=Yi.dot(Oh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Hh.setScalar(0),Vh.setScalar(0),Gh.setScalar(0),Hh.fromBufferAttribute(e,t),Vh.fromBufferAttribute(e,n),Gh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hh,r.x),a.addScaledVector(Vh,r.y),a.addScaledVector(Gh,r.z),a}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Yi.subVectors(e,t),fi.cross(Yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),fi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;fr.subVectors(s,n),pr.subVectors(r,n),Bh.subVectors(e,n);let l=fr.dot(Bh),c=pr.dot(Bh);if(l<=0&&c<=0)return t.copy(n);kh.subVectors(e,s);let h=fr.dot(kh),u=pr.dot(kh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(fr,a);zh.subVectors(e,r);let f=fr.dot(zh),m=pr.dot(zh);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(pr,o);let p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return ef.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(ef,o);let g=1/(p+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(fr,a).addScaledVector(pr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ci=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pi):pi.fromBufferAttribute(r,a),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),el.copy(n.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),tl.subVectors(this.max,ma),mr.subVectors(e.a,ma),gr.subVectors(e.b,ma),_r.subVectors(e.c,ma),bs.subVectors(gr,mr),Ms.subVectors(_r,gr),Ws.subVectors(mr,_r);let t=[0,-bs.z,bs.y,0,-Ms.z,Ms.y,0,-Ws.z,Ws.y,bs.z,0,-bs.x,Ms.z,0,-Ms.x,Ws.z,0,-Ws.x,-bs.y,bs.x,0,-Ms.y,Ms.x,0,-Ws.y,Ws.x,0];return!Wh(t,mr,gr,_r,tl)||(t=[1,0,0,0,1,0,0,0,1],!Wh(t,mr,gr,_r,tl))?!1:(nl.crossVectors(bs,Ms),t=[nl.x,nl.y,nl.z],Wh(t,mr,gr,_r,tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ki=[new C,new C,new C,new C,new C,new C,new C,new C],pi=new C,el=new Ci,mr=new C,gr=new C,_r=new C,bs=new C,Ms=new C,Ws=new C,ma=new C,tl=new C,nl=new C,qs=new C;nn=new C,il=new ue,x0=0,zt=class extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=ai,this.version=0,this._normalizationScale=e!==void 0?eh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)il.fromBufferAttribute(this,t),il.applyMatrix3(e),this.setXY(t,il.x,il.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hu(e,this.array)}},Ua=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fa=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},_t=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=new Ci,ga=new C,qh=new C,Pi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);let t=ga.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(qh)),this.expandByPoint(ga.copy(e.center).sub(qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},v0=0,ni=new At,$h=new Qt,xr=new C,Wn=new Ci,_a=new Ci,hn=new C,Tt=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qm(e)?Fa:Ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Wn.min,_a.min),Wn.expandByPoint(hn),hn.addVectors(Wn.max,_a.max),Wn.expandByPoint(hn)):(Wn.expandByPoint(_a.min),Wn.expandByPoint(_a.max))}Wn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)hn.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),hn.add(xr)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new C,l[F]=new C;let h=new C,u=new C,d=new C,f=new ue,m=new ue,x=new ue,p=new C,g=new C;function y(F,L,D){c[F]=c[L]=c[D]=1,h.fromBufferAttribute(n,F),u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,L),x.fromBufferAttribute(r,D),u.sub(h),d.sub(h),m.sub(f),x.sub(f);let O=1/(m.x*x.y-x.x*m.y);isFinite(O)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-m.y).multiplyScalar(O),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-x.x).multiplyScalar(O),o[F].add(p),o[L].add(p),o[D].add(p),l[F].add(g),l[L].add(g),l[D].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,L=w.length;F<L;++F){let D=w[F],O=D.start,G=D.count;for(let I=O,q=O+G;I<q;I+=3)y(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new C,T=new C,E=new C,_=new C;function S(F){E.fromBufferAttribute(s,F),_.copy(E);let L=o[F];b.copy(L),b.sub(E.multiplyScalar(E.dot(L))).normalize(),T.crossVectors(_,L);let O=T.dot(l[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,O)}for(let F=0,L=n.count;F<L;++F)c[F]&&S(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new zt(d,h,u)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=us()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=tf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};Cn=new C,Oa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?eh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hu(e,this.data.array)}},Xh=new C,b0=new C,M0=new ft,qn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Xh.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Xh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||M0.getNormalMatrix(e),s=this.coplanarPoint(Xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},S0=0,si=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Wr,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=yu,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rl,this.stencilZFail=Rl,this.stencilZPass=Rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new qn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ws=class extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xa=new C,vr=new C,br=new C,Mr=new ue,ya=new ue,mp=new At,sl=new C,va=new C,rl=new C,nf=new ue,Yh=new ue,sf=new ue,Ks=class extends Qt{constructor(e=new ws){if(super(),this.isSprite=!0,this.type="Sprite",yr===void 0){yr=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vl(t,5);yr.setIndex([0,1,2,0,2,3]),yr.setAttribute("position",new Oa(n,3,0,!1)),yr.setAttribute("uv",new Oa(n,2,3,!1))}this.geometry=yr,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),mp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-br.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;al(sl.set(-.5,-.5,0),br,a,vr,s,r),al(va.set(.5,-.5,0),br,a,vr,s,r),al(rl.set(.5,.5,0),br,a,vr,s,r),nf.set(0,0),Yh.set(1,0),sf.set(1,1);let o=e.ray.intersectTriangle(sl,va,rl,!1,xa);if(o===null&&(al(va.set(-.5,.5,0),br,a,vr,s,r),Yh.set(0,1),o=e.ray.intersectTriangle(sl,rl,va,!1,xa),o===null))return;let l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||t.push({distance:l,point:xa.clone(),uv:ji.getInterpolation(xa,sl,va,rl,nf,Yh,sf,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};Ji=new C,Zh=new C,ol=new C,ll=new C,ts=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zh.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),ll.copy(this.origin).sub(Zh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ol),o=ll.dot(this.direction),l=-ll.dot(ol),c=ll.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zh).addScaledVector(ol,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);let n=Ji.dot(this.direction),s=Ji.dot(Ji)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,x=t.y-a.y,p=t.z-a.z,g=n.x-a.x,y=n.y-a.y,w=n.z-a.z,b=Math.abs(l),T=Math.abs(c),E=Math.abs(h),_,S,F,L,D,O,G,I,q,K,H,ce;if(b>=T&&b>=E?(F=l,O=u,q=m,ce=g,l>=0?(_=c,S=h,L=d,D=f,G=x,I=p,K=y,H=w):(_=h,S=c,L=f,D=d,G=p,I=x,K=w,H=y)):T>=E?(F=c,O=d,q=x,ce=y,c>=0?(_=h,S=l,L=f,D=u,G=p,I=m,K=w,H=g):(_=l,S=h,L=u,D=f,G=m,I=p,K=g,H=w)):(F=h,O=f,q=p,ce=w,h>=0?(_=l,S=c,L=u,D=d,G=m,I=x,K=g,H=y):(_=c,S=l,L=d,D=u,G=x,I=m,K=y,H=g)),F===0)return null;let Y=_/F,re=S/F,X=1/F,be=L-Y*O,Oe=D-re*O,j=G-Y*q,xe=I-re*q,de=K-Y*ce,Ne=H-re*ce,ye=de*xe-Ne*j,ke=be*Ne-Oe*de,pt=j*Oe-xe*be;if(s){if(ye<0||ke<0||pt<0)return null}else if((ye<0||ke<0||pt<0)&&(ye>0||ke>0||pt>0))return null;let We=ye+ke+pt;if(We===0)return null;let et=X*(ye*O+ke*q+pt*ce);return(We>0?et<0:et>0)?null:this.at(et/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rf=new At,$s=new ts,cl=new Pi,af=new C,hl=new C,ul=new C,dl=new C,Kh=new C,fl=new C,of=new C,pl=new C,we=class extends Qt{constructor(e=new Tt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Kh.fromBufferAttribute(u,e),a?fl.addScaledVector(Kh,h):fl.addScaledVector(Kh.sub(t),h))}t.add(fl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(cl.containsPoint($s.origin)===!1&&($s.intersectSphere(cl,af)===null||$s.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(rf.copy(r).invert(),$s.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,T=w;b<T;b+=3){let E=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=ml(this,g,e,n,c,h,u,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let y=o.getX(p),w=o.getX(p+1),b=o.getX(p+2);s=ml(this,a,e,n,c,h,u,y,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let p=d[m],g=a[p.materialIndex],y=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,T=w;b<T;b+=3){let E=b,_=b+1,S=b+2;s=ml(this,g,e,n,c,h,u,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=m,g=x;p<g;p+=3){let y=p,w=p+1,b=p+2;s=ml(this,a,e,n,c,h,u,y,w,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};Ba=class extends In{constructor(e=null,t=1,n=1,s,r,a,o,l,c=un,h=un,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ka=class extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sr=new At,lf=new At,gl=[],cf=new Ci,E0=new At,ba=new we,Ma=new Pi,Yn=class extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,E0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),cf.copy(e.boundingBox).applyMatrix4(Sr),this.boundingBox.union(cf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sr),Ma.copy(e.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),e.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),lf.multiplyMatrices(n,Sr),ba.matrixWorld=lf,ba.raycast(e,gl);for(let a=0,o=gl.length;a<o;a++){let l=gl[a];l.instanceId=r,l.object=this,t.push(l)}gl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ba(new Float32Array(s*this.count),s,this.count,yc,ai));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xs=new Pi,T0=new ue(.5,.5),_l=new C,Es=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],p=r[10],g=r[11],y=r[12],w=r[13],b=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-m,T-y).normalize(),s[1].setComponents(c+a,f+h,g+m,T+y).normalize(),s[2].setComponents(c+o,f+u,g+x,T+w).normalize(),s[3].setComponents(c-o,f-u,g-x,T-w).normalize(),n)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,f-d,g-p,T-b).normalize();else if(s[4].setComponents(c-l,f-d,g-p,T-b).normalize(),t===ii)s[5].setComponents(c+l,f+d,g+p,T+b).normalize();else if(t===Cr)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(e){Xs.center.set(0,0,0);let t=T0.distanceTo(e.center);return Xs.radius=.7071067811865476+t,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(_l.x=s.normal.x>0?e.max.x:e.min.x,_l.y=s.normal.y>0?e.max.y:e.min.y,_l.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hf=new At,Gl=class i{constructor(){this.coordinateSystem=ii,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];hf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Es),n[s].setFromProjectionMatrix(hf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Es),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},ns=class extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wl=new C,ql=new C,uf=new At,Sa=new ts,xl=new Pi,Jh=new C,df=new C,is=class extends Qt{constructor(e=new Tt,t=new ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Wl.fromBufferAttribute(t,s-1),ql.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wl.distanceTo(ql);e.setAttribute("lineDistance",new _t(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,e.ray.intersectsSphere(xl)===!1)return;uf.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(uf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=h.getX(x),y=h.getX(x+1),w=yl(this,e,Sa,l,g,y,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(f),g=yl(this,e,Sa,l,x,p,m-1);g&&t.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,p=m-1;x<p;x+=c){let g=yl(this,e,Sa,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=yl(this,e,Sa,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};ff=new C,pf=new C,za=class extends is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ff.fromBufferAttribute(t,s),pf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ff.distanceTo(pf);e.setAttribute("lineDistance",new _t(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ts=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mf=new At,au=new ts,vl=new Pi,bl=new C,ss=class extends Qt{constructor(e=new Tt,t=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),vl.radius+=r,e.ray.intersectsSphere(vl)===!1)return;mf.copy(s).invert(),au.copy(e.ray).applyMatrix4(mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let p=c.getX(m);bl.fromBufferAttribute(u,p),gf(bl,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,x=f;m<x;m++)bl.fromBufferAttribute(u,m),gf(bl,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ha=class extends In{constructor(e=[],t=tr,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Va=class extends In{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},rs=class extends In{constructor(e,t,n=xi,s,r,a,o=un,l=un,c,h=es,u=1){if(h!==es&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ga=class extends rs{constructor(e,t=xi,n=tr,s,r,a=un,o=un,l,c=es){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wa=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ii=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function m(x,p,g,y,w,b,T,E,_,S,F){let L=b/_,D=T/S,O=b/2,G=T/2,I=E/2,q=_+1,K=S+1,H=0,ce=0,Y=new C;for(let re=0;re<K;re++){let X=re*D-G;for(let be=0;be<q;be++){let Oe=be*L-O;Y[x]=Oe*y,Y[p]=X*w,Y[g]=I,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[g]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(be/_),u.push(1-re/S),H+=1}}for(let re=0;re<S;re++)for(let X=0;X<_;X++){let be=d+X+q*re,Oe=d+X+q*(re+1),j=d+(X+1)+q*(re+1),xe=d+(X+1)+q*re;l.push(be,Oe,xe),l.push(Oe,j,xe),ce+=6}o.addGroup(f,ce,F),f+=ce,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ur=class i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wn=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],p=n/2,g=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function y(){let b=new C,T=new C,E=0,_=(t-e)/n;for(let S=0;S<=r;S++){let F=[],L=S/r,D=L*(t-e)+e;for(let O=0;O<=s;O++){let G=O/s,I=G*l+o,q=Math.sin(I),K=Math.cos(I);T.x=D*q,T.y=-L*n+p,T.z=D*K,u.push(T.x,T.y,T.z),b.set(q,_,K).normalize(),d.push(b.x,b.y,b.z),f.push(G,1-L),F.push(m++)}x.push(F)}for(let S=0;S<s;S++)for(let F=0;F<r;F++){let L=x[F][S],D=x[F+1][S],O=x[F+1][S+1],G=x[F][S+1];(e>0||F!==0)&&(h.push(L,D,G),E+=3),(t>0||F!==r-1)&&(h.push(D,O,G),E+=3)}c.addGroup(g,E,0),g+=E}function w(b){let T=m,E=new ue,_=new C,S=0,F=b===!0?e:t,L=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*L,0),d.push(0,L,0),f.push(.5,.5),m++;let D=m;for(let O=0;O<=s;O++){let I=O/s*l+o,q=Math.cos(I),K=Math.sin(I);_.x=F*K,_.y=p*L,_.z=F*q,u.push(_.x,_.y,_.z),d.push(0,L,0),E.x=q*.5+.5,E.y=K*.5*L+.5,f.push(E.x,E.y),m++}for(let O=0;O<s;O++){let G=T+O,I=D+O;b===!0?h.push(I,I+1,G):h.push(I+1,I,G),S+=3}c.addGroup(g,S,b===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gi=class i extends wn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ue:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new At;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(xt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(xt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Fr=class extends Zn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends Fr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};_f=new C,xf=new C,jh=new Vu,Qh=new Vu,eu=new Vu,En=class extends Zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xf.subVectors(s[0],s[1]).add(s[0]),c=xf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_f.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_f),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),jh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,p),Qh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,p),eu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Qh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),eu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(jh.calc(l),Qh.calc(l),eu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};qa=class extends Zn{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ra(e,s.x,r.x,a.x,o.x),Ra(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xl=class extends Zn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ra(e,s.x,r.x,a.x,o.x),Ra(e,s.y,r.y,a.y,o.y),Ra(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Zn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yl=class extends Zn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Zn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Aa(e,s.x,r.x,a.x),Aa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends Zn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Aa(e,s.x,r.x,a.x),Aa(e,s.y,r.y,a.y),Aa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yf(o,l.x,c.x,h.x,u.x),yf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ue().fromArray(s))}return this}},Zl=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:En,CubicBezierCurve:qa,CubicBezierCurve3:Xl,EllipseCurve:Fr,LineCurve:$a,LineCurve3:Yl,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:Ya,SplineCurve:Za}),Kl=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Zl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ka=class extends Kl{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Xa(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new qa(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Fr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Or=class extends Ka{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ka().fromJSON(s))}return this}};cu=class{static triangulate(e,t,n=2){return N0(e,t,n)}},Ys=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bf(e),Mf(n,e);let a=e.length;t.forEach(bf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Mf(n,t[l]);let o=cu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};eo=class i extends Tt{constructor(e=new Or([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:J0,w,b=!1,T,E,_,S;if(g){w=g.getSpacedPoints(h),b=!0,d=!1;let ae=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,ae),E=new C,_=new C,S=new C}d||(p=0,f=0,m=0,x=0);let F=o.extractPoints(c),L=F.shape,D=F.holes;if(!Ys.isClockWise(L)){L=L.reverse();for(let ae=0,_e=D.length;ae<_e;ae++){let ge=D[ae];Ys.isClockWise(ge)&&(D[ae]=ge.reverse())}}function G(ae){let ge=10000000000000001e-36,Pe=ae[0];for(let Te=1;Te<=ae.length;Te++){let Qe=Te%ae.length,qe=ae[Qe],at=qe.x-Pe.x,rt=qe.y-Pe.y,mt=at*at+rt*rt,U=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(Pe.x),Math.abs(Pe.y)),Mt=ge*U*U;if(mt<=Mt){ae.splice(Qe,1),Te--;continue}Pe=qe}}G(L),D.forEach(G);let I=D.length,q=L;for(let ae=0;ae<I;ae++){let _e=D[ae];L=L.concat(_e)}function K(ae,_e,ge){return _e||ot("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(_e,ge)}let H=L.length;function ce(ae,_e,ge){let Pe,Te,Qe,qe=ae.x-_e.x,at=ae.y-_e.y,rt=ge.x-ae.x,mt=ge.y-ae.y,U=qe*qe+at*at,Mt=qe*mt-at*rt;if(Math.abs(Mt)>Number.EPSILON){let lt=Math.sqrt(U),St=Math.sqrt(rt*rt+mt*mt),Se=_e.x-at/lt,Ot=_e.y+qe/lt,Ye=ge.x-mt/St,tt=ge.y+rt/St,A=((Ye-Se)*mt-(tt-Ot)*rt)/(qe*mt-at*rt);Pe=Se+qe*A-ae.x,Te=Ot+at*A-ae.y;let v=Pe*Pe+Te*Te;if(v<=2)return new ue(Pe,Te);Qe=Math.sqrt(v/2)}else{let lt=!1;qe>Number.EPSILON?rt>Number.EPSILON&&(lt=!0):qe<-Number.EPSILON?rt<-Number.EPSILON&&(lt=!0):Math.sign(at)===Math.sign(mt)&&(lt=!0),lt?(Pe=-at,Te=qe,Qe=Math.sqrt(U)):(Pe=qe,Te=at,Qe=Math.sqrt(U/2))}return new ue(Pe/Qe,Te/Qe)}let Y=[];for(let ae=0,_e=q.length,ge=_e-1,Pe=ae+1;ae<_e;ae++,ge++,Pe++)ge===_e&&(ge=0),Pe===_e&&(Pe=0),Y[ae]=ce(q[ae],q[ge],q[Pe]);let re=[],X,be=Y.concat();for(let ae=0,_e=I;ae<_e;ae++){let ge=D[ae];X=[];for(let Pe=0,Te=ge.length,Qe=Te-1,qe=Pe+1;Pe<Te;Pe++,Qe++,qe++)Qe===Te&&(Qe=0),qe===Te&&(qe=0),X[Pe]=ce(ge[Pe],ge[Qe],ge[qe]);re.push(X),be=be.concat(X)}let Oe;if(p===0)Oe=Ys.triangulateShape(q,D);else{let ae=[],_e=[];for(let ge=0;ge<p;ge++){let Pe=ge/p,Te=f*Math.cos(Pe*Math.PI/2),Qe=m*Math.sin(Pe*Math.PI/2)+x;for(let qe=0,at=q.length;qe<at;qe++){let rt=K(q[qe],Y[qe],Qe);ke(rt.x,rt.y,-Te),Pe===0&&ae.push(rt)}for(let qe=0,at=I;qe<at;qe++){let rt=D[qe];X=re[qe];let mt=[];for(let U=0,Mt=rt.length;U<Mt;U++){let lt=K(rt[U],X[U],Qe);ke(lt.x,lt.y,-Te),Pe===0&&mt.push(lt)}Pe===0&&_e.push(mt)}}Oe=Ys.triangulateShape(ae,_e)}let j=Oe.length,xe=m+x;for(let ae=0;ae<H;ae++){let _e=d?K(L[ae],be[ae],xe):L[ae];b?(_.copy(T.normals[0]).multiplyScalar(_e.x),E.copy(T.binormals[0]).multiplyScalar(_e.y),S.copy(w[0]).add(_).add(E),ke(S.x,S.y,S.z)):ke(_e.x,_e.y,0)}for(let ae=1;ae<=h;ae++)for(let _e=0;_e<H;_e++){let ge=d?K(L[_e],be[_e],xe):L[_e];b?(_.copy(T.normals[ae]).multiplyScalar(ge.x),E.copy(T.binormals[ae]).multiplyScalar(ge.y),S.copy(w[ae]).add(_).add(E),ke(S.x,S.y,S.z)):ke(ge.x,ge.y,u/h*ae)}for(let ae=p-1;ae>=0;ae--){let _e=ae/p,ge=f*Math.cos(_e*Math.PI/2),Pe=m*Math.sin(_e*Math.PI/2)+x;for(let Te=0,Qe=q.length;Te<Qe;Te++){let qe=K(q[Te],Y[Te],Pe);ke(qe.x,qe.y,u+ge)}for(let Te=0,Qe=D.length;Te<Qe;Te++){let qe=D[Te];X=re[Te];for(let at=0,rt=qe.length;at<rt;at++){let mt=K(qe[at],X[at],Pe);b?ke(mt.x,mt.y+w[h-1].y,w[h-1].x+ge):ke(mt.x,mt.y,u+ge)}}}de(),Ne();function de(){let ae=s.length/3;if(d){let _e=0,ge=H*_e;for(let Pe=0;Pe<j;Pe++){let Te=Oe[Pe];pt(Te[2]+ge,Te[1]+ge,Te[0]+ge)}_e=h+p*2,ge=H*_e;for(let Pe=0;Pe<j;Pe++){let Te=Oe[Pe];pt(Te[0]+ge,Te[1]+ge,Te[2]+ge)}}else{for(let _e=0;_e<j;_e++){let ge=Oe[_e];pt(ge[2],ge[1],ge[0])}for(let _e=0;_e<j;_e++){let ge=Oe[_e];pt(ge[0]+H*h,ge[1]+H*h,ge[2]+H*h)}}n.addGroup(ae,s.length/3-ae,0)}function Ne(){let ae=s.length/3,_e=0;ye(q,_e),_e+=q.length;for(let ge=0,Pe=D.length;ge<Pe;ge++){let Te=D[ge];ye(Te,_e),_e+=Te.length}n.addGroup(ae,s.length/3-ae,1)}function ye(ae,_e){let ge=ae.length;for(;--ge>=0;){let Pe=ge,Te=ge-1;Te<0&&(Te=ae.length-1);for(let Qe=0,qe=h+p*2;Qe<qe;Qe++){let at=H*Qe,rt=H*(Qe+1),mt=_e+Pe+at,U=_e+Te+at,Mt=_e+Te+rt,lt=_e+Pe+rt;We(mt,U,Mt,lt)}}}function ke(ae,_e,ge){l.push(ae),l.push(_e),l.push(ge)}function pt(ae,_e,ge){et(ae),et(_e),et(ge);let Pe=s.length/3,Te=y.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);st(Te[0]),st(Te[1]),st(Te[2])}function We(ae,_e,ge,Pe){et(ae),et(_e),et(Pe),et(_e),et(ge),et(Pe);let Te=s.length/3,Qe=y.generateSideWallUV(n,s,Te-6,Te-3,Te-2,Te-1);st(Qe[0]),st(Qe[1]),st(Qe[3]),st(Qe[1]),st(Qe[2]),st(Qe[3])}function et(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function st(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return j0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Zl[s.type]().fromJSON(s)),new i(n,e.options)}},J0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ue(r,a),new ue(o,l),new ue(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ue(a,1-l),new ue(c,1-u),new ue(d,1-m),new ue(x,1-g)]:[new ue(o,1-l),new ue(h,1-u),new ue(f,1-m),new ue(p,1-g)]}};js=class i extends Tt{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=xt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new ue,f=new C,m=new C,x=new C,p=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:p=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-p,f.z=g*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let y=0;y<=t;y++){let w=n+y*h*s,b=Math.sin(w),T=Math.cos(w);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*b,u.y=e[E].y,u.z=e[E].x*T,a.push(u.x,u.y,u.z),d.x=y/t,d.y=E/(e.length-1),o.push(d.x,d.y);let _=l[3*E+0]*b,S=l[3*E+1],F=l[3*E+0]*T;c.push(_,S,F)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let b=w+y*e.length,T=b,E=b+e.length,_=b+e.length+1,S=b+1;r.push(T,E,S),r.push(_,S,E)}this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("uv",new _t(o,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},to=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let y=g*d-a;for(let w=0;w<c;w++){let b=w*u-r;m.push(b,-y,0),x.push(0,0,1),p.push(w/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let w=y+c*g,b=y+c*(g+1),T=y+1+c*(g+1),E=y+1+c*g;f.push(w,b,E),f.push(b,T,E)}this.setIndex(f),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},kr=class i extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new C,m=new ue;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let g=r+p/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let p=x*(n+1);for(let g=0;g<n;g++){let y=g+p,w=y,b=y+n+1,T=y+n+2,E=y+1;o.push(w,b,E),o.push(b,T,E)}}this.setIndex(o),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Yt=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let y=[],w=g/n,b=a+w*o,T=e*Math.cos(b),E=Math.sqrt(e*e-T*T),_=0;g===0&&a===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let F=S/t,L=s+F*r;u.x=-E*Math.cos(L),u.y=T,u.z=E*Math.sin(L),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(F+_,1-w),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=h[g][y+1],b=h[g][y],T=h[g+1][y],E=h[g+1][y+1];(g!==0||a>0)&&f.push(w,b,E),(g!==n-1||l<Math.PI)&&f.push(b,T,E)}this.setIndex(f),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},_i=class i extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new C,f=new C,m=new C;for(let x=0;x<=n;x++){let p=a+x/n*o;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let g=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,w=(s+1)*(x-1)+p,b=(s+1)*x+p;l.push(g,y,b),l.push(y,w,b)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Fn=class i extends Tt{constructor(e=new Ya(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new ue,h=new C,u=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(f,2));function x(){for(let w=0;w<t;w++)p(w);p(r===!1?t:0),y(),g()}function p(w){h=e.getPointAt(w/t,h);let b=a.normals[w],T=a.binormals[w];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,S=Math.sin(_),F=-Math.cos(_);l.x=F*b.x+S*T.x,l.y=F*b.y+S*T.y,l.z=F*b.z+S*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let w=1;w<=t;w++)for(let b=1;b<=s;b++){let T=(s+1)*(w-1)+(b-1),E=(s+1)*w+(b-1),_=(s+1)*w+b,S=(s+1)*(w-1)+b;m.push(T,E,S),m.push(E,_,S)}}function y(){for(let w=0;w<=t;w++)for(let b=0;b<=s;b++)c.x=w/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Zl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};vp={clone:ir,merge:Tn},eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new At().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jl=class extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},as=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},os=class extends as{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Zs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},no=class extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=dc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jl=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ql=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Li=class extends ns{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};As=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ec=class extends As{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:iu,endingEnd:iu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case su:r=e,o=2*t-n;break;case ru:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case su:a=e,l=2*n-t;break;case ru:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,g=-d*p+2*d*x-d*m,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,w=(-1-f)*p+(1.5+f)*x+.5*m,b=f*p-f*x;for(let T=0;T!==o;++T)r[T]=g*a[h+T]+y*a[c+T]+w*a[l+T]+b*a[u+T];return r}},tc=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},nc=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ic=class extends As{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),x=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let x=a[c+m],p=a[l+m],g=f*d+m*2,y=u[g],w=u[g+1],b=e*d+m*2,T=h[b],E=h[b+1],_=ig(n,t,y,T,s);r[m]=bp(_,x,w,E,p)}return r}};Kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),wl(e.settings)&&(n.settings={inTangents:wr(e.settings.inTangents,Array),outTangents:wr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ic(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ca:t=this.InterpolantFactoryMethodDiscrete;break;case Bl:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break;case nu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ca;case this.InterpolantFactoryMethodLinear:return Bl;case this.InterpolantFactoryMethodSmooth:return Al;case this.InterpolantFactoryMethodBezier:return nu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;wl(this.settings)&&(wf(this.settings.inTangents,e),wf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;wl(this.settings)&&(Ef(this.settings.inTangents,e),Ef(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ot("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&$m(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Al,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=Bl;Rs=class extends Kn{constructor(e,t,n){super(e,t,n)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ca;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;sc=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};sc.prototype.ValueTypeName="color";rc=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};rc.prototype.ValueTypeName="number";ac=class extends As{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},io=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;Cs=class extends Kn{constructor(e,t,n){super(e,t,n)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ca;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;oc=class extends Kn{constructor(e,t,n,s){super(e,t,n,s)}};oc.prototype.ValueTypeName="vector";lc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mp=new lc,cc=class{constructor(e){this.manager=e!==void 0?e:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};cc.DEFAULT_MATERIAL_NAME="__DEFAULT";zr=class extends Qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},so=class extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tu=new At,Tf=new C,Af=new C,ro=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tf),Af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Cr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},El=new C,Tl=new mn,Ti=new C,ao=class extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(El,Tl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Tl,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(El,Tl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Tl,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new C,Rf=new ue,Cf=new ue,Sn=class extends ao{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hu=class extends ro{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}},oo=class extends zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},lo=class extends ao{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uu=class extends ro{constructor(){super(new lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Er=-90,Tr=1,Vr=class extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn(Er,Tr,e,t);s.layers=this.layers,this.add(s);let r=new Sn(Er,Tr,e,t);r.layers=this.layers,this.add(r);let a=new Sn(Er,Tr,e,t);a.layers=this.layers,this.add(a);let o=new Sn(Er,Tr,e,t);o.layers=this.layers,this.add(o);let l=new Sn(Er,Tr,e,t);l.layers=this.layers,this.add(l);let c=new Sn(Er,Tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},hc=class extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Wu="\\[\\]\\.:\\/",sg=new RegExp("["+Wu+"]","g"),qu="[^"+Wu+"]",rg="[^"+Wu.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",qu),og=/(WCOD+)?/.source.replace("WCOD",rg),lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),hg=new RegExp("^"+ag+og+lg+cg+"$"),ug=["material","materials","bones","map"],du=class{constructor(e,t,n){let s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sg,"")}static parseTrackName(e){let t=hg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=du;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];hM=new Float32Array(1),Pf=new At,co=class{constructor(e,t,n=0,s=1/0){this.ray=new ts(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pf),this}intersectObject(e,t=!0,n=[]){return fu(e,this,n,t),n.sort(If),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fu(e[s],this,n,t);return n.sort(If),n}};Ps=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ju=class Ju{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ju.prototype.isMatrix2=!0;pu=Ju,ho=class extends mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function Wp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function Zx(i,e,t,n,s,r){let a=new Ie(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function m(y){let w=!1,b=f(y);b===null?p(a,o):b&&b.isColor&&(p(b,1),w=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){let b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new we(new Ii(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:ir(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qp),c.material.toneMapped=wt.getTransfer(b.colorSpace)!==Ft,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new we(new to(2,2),new ri({name:"BackgroundMaterial",uniforms:ir(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=wt.getTransfer(b.colorSpace)!==Ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(th,Gu(i)),t.buffers.color.setClear(th.r,th.g,th.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:m,addToRenderList:x,dispose:g}}function Kx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,O,G,I,q){let K=!1,H=u(D,I,G,O);r!==H&&(r=H,c(r.object)),K=f(D,I,G,q),K&&m(D,I,G,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,b(D,O,G,I),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,O,G,I){let q=I.wireframe===!0,K=n[O.id];K===void 0&&(K={},n[O.id]=K);let H=D.isInstancedMesh===!0?D.id:0,ce=K[H];ce===void 0&&(ce={},K[H]=ce);let Y=ce[G.id];Y===void 0&&(Y={},ce[G.id]=Y);let re=Y[q];return re===void 0&&(re=d(l()),Y[q]=re),re}function d(D){let O=[],G=[],I=[];for(let q=0;q<t;q++)O[q]=0,G[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,O,G,I){let q=r.attributes,K=O.attributes,H=0,ce=G.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let X=q[Y],be=K[Y];if(be===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),X===void 0||X.attribute!==be||be&&X.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function m(D,O,G,I){let q={},K=O.attributes,H=0,ce=G.getAttributes();for(let Y in ce)if(ce[Y].location>=0){let X=K[Y];X===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(X=D.instanceColor));let be={};be.attribute=X,X&&X.data&&(be.data=X.data),q[Y]=be,H++}r.attributes=q,r.attributesNum=H,r.index=I}function x(){let D=r.newAttributes;for(let O=0,G=D.length;O<G;O++)D[O]=0}function p(D){g(D,0)}function g(D,O){let G=r.newAttributes,I=r.enabledAttributes,q=r.attributeDivisors;G[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),q[D]!==O&&(i.vertexAttribDivisor(D,O),q[D]=O)}function y(){let D=r.newAttributes,O=r.enabledAttributes;for(let G=0,I=O.length;G<I;G++)O[G]!==D[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function w(D,O,G,I,q,K,H){H===!0?i.vertexAttribIPointer(D,O,G,q,K):i.vertexAttribPointer(D,O,G,I,q,K)}function b(D,O,G,I){x();let q=I.attributes,K=G.getAttributes(),H=O.defaultAttributeValues;for(let ce in K){let Y=K[ce];if(Y.location>=0){let re=q[ce];if(re===void 0&&(ce==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),ce==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),re!==void 0){let X=re.normalized,be=re.itemSize,Oe=e.get(re);if(Oe===void 0)continue;let j=Oe.buffer,xe=Oe.type,de=Oe.bytesPerElement,Ne=xe===i.INT||xe===i.UNSIGNED_INT||re.gpuType===gc;if(re.isInterleavedBufferAttribute){let ye=re.data,ke=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,pt=re.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let We=0;We<Y.locationSize;We++)g(Y.location+We,ye.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let We=0;We<Y.locationSize;We++)p(Y.location+We);i.bindBuffer(i.ARRAY_BUFFER,j);for(let We=0;We<Y.locationSize;We++)w(Y.location+We,be/Y.locationSize,xe,X,ke*de,(pt+be/Y.locationSize*We)*de,Ne)}else{if(re.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)g(Y.location+ye,re.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ye=0;ye<Y.locationSize;ye++)w(Y.location+ye,be/Y.locationSize,xe,X,be*de,be/Y.locationSize*ye*de,Ne)}}else if(H!==void 0){let X=H[ce];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(Y.location,X);break;case 3:i.vertexAttrib3fv(Y.location,X);break;case 4:i.vertexAttrib4fv(Y.location,X);break;default:i.vertexAttrib1fv(Y.location,X)}}}}y()}function T(){F();for(let D in n){let O=n[D];for(let G in O){let I=O[G];for(let q in I){let K=I[q];for(let H in K)h(K[H].object),delete K[H];delete I[q]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let G in O){let I=O[G];for(let q in I){let K=I[q];for(let H in K)h(K[H].object),delete K[H];delete I[q]}}delete n[D.id]}function _(D){for(let O in n){let G=n[O];for(let I in G){let q=G[I];if(q[D.id]===void 0)continue;let K=q[D.id];for(let H in K)h(K[H].object),delete K[H];delete q[D.id]}}}function S(D){for(let O in n){let G=n[O],I=D.isInstancedMesh===!0?D.id:0,q=G[I];if(q!==void 0){for(let K in q){let H=q[K];for(let ce in H)h(H[ce].object),delete H[ce];delete q[K]}delete G[I],Object.keys(G).length===0&&delete n[O]}}}function F(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function Jx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==vi&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==On&&_!==ai&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:T,samples:E}}function Qx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new qn,o=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,w=y*4,b=g.clippingState||null;l.value=b,b=h(m,d,w,f);for(let T=0;T!==w;++T)b[T]=t[T];g.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,b=f;w!==x;++w,b+=4)a.copy(u[w]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function wp(i,e,t){return new wo(i,{minFilter:ls,generateMipmaps:e,type:yi,colorSpace:Pa,depthBuffer:t})}function Eo(i,e,t){return new ri({name:i,uniforms:e,vertexShader:bt.cube_vert,fragmentShader:t,side:gn,blending:Qs,depthTest:!1,depthWrite:!1})}function ry(){return Eo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$p}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ay(){return Eo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function oy(){return Eo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ty}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ep(){return Eo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Tp(){return Eo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ly(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===fc||f===pc)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let x=new wo(m.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===fc||f===pc,x=f===tr||f===qr;if(m||x){let p=t.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Yr(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let y=d.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Yr(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===fc?d.mapping=tr:f===pc&&(d.mapping=qr),d}function l(d){let f=0,m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function cy(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Zs("WebGLRenderer: "+n+" extension not supported."),s}}}function hy(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let x=r.get(m);x&&(e.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function u(m){let x=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=x!==null?x.array.length:p.array.length/3-1,w=p.count>=65535?Fa:Ua,b=new w(Math.ceil(y/3)*6,1),T=b.array;if(x!==null){let _=x.array;g=x.version;for(let S=0,F=0;S<y;S+=3){let L=_[S+0],D=_[S+1],O=_[S+2];T[F++]=L,T[F++]=D,T[F++]=D,T[F++]=O,T[F++]=O,T[F++]=L}}else{g=p.version;for(let _=0,S=0;_<y;_+=3){let F=_+0,L=_+1,D=_+2;T[S++]=F,T[S++]=L,T[S++]=L,T[S++]=D,T[S++]=D,T[S++]=F}}b.version=g;let E=r.get(m);E&&e.remove(E),r.set(m,b)}function d(m){let x=r.get(m);if(x){let p=m.index;p!==null&&x.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let x=s[m].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function uy(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function dy(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fy(i,e,t){let n=new WeakMap,s=new qt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let F=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),x===!0&&(w=3);let b=o.attributes.position.count*w,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*T*4*u),_=new Na(E,b,T,u);_.type=ai,_.needsUpdate=!0;let S=w*4;for(let L=0;L<u;L++){let D=p[L],O=g[L],G=y[L],I=b*T*4*L;for(let q=0;q<D.count;q++){let K=q*S;f===!0&&(s.fromBufferAttribute(D,q),E[I+K+0]=s.x,E[I+K+1]=s.y,E[I+K+2]=s.z,E[I+K+3]=0),m===!0&&(s.fromBufferAttribute(O,q),E[I+K+4]=s.x,E[I+K+5]=s.y,E[I+K+6]=s.z,E[I+K+7]=0),x===!0&&(s.fromBufferAttribute(G,q),E[I+K+8]=s.x,E[I+K+9]=s.y,E[I+K+10]=s.z,E[I+K+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new ue(b,T)},n.set(o,d),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function py(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function gy(i,e,t,n,s,r){let a=new $n(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Tt;h.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _t([0,2,0,0,2,0],2));let u=new Jl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new we(h,u),f=new lo(-1,1,1,-1,0,1),m=null,x=null,p=!1,g,y=null,w=[],b=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let _=0;_<w.length;_++){let S=w[_];S.setSize&&S.setSize(T,E)}},this.setEffects=function(T){w=T,b=w.length>0&&w[0].isRenderPass===!0;let E=a.width,_=a.height;w.length>0&&o===null&&(o=new $n(E,_,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new $n(E,_,{type:yi,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(F=>F.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new rs(E,_),r===!0&&(c.format=cs,c.type=nr)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let F=0;F<w.length;F++){let L=w[F];L.setSize&&L.setSize(E,_),S&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Ni&&w.length===0)return!1;if(y=E,E!==null){let _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=Ni,!0},this.hasRenderPass=function(){return b},this.end=function(T,E){T.toneMapping=g,p=!0;let _=a,S=o;for(let F=0;F<w.length;F++){let L=w[F];L.enabled!==!1&&(L.render(T,S,_,E),L.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(m!==T.outputColorSpace||x!==T.toneMapping){m=T.outputColorSpace,x=T.toneMapping,u.defines={},wt.getTransfer(m)===Ft&&(u.defines.SRGB_TRANSFER="");let F=my[x];F&&(u.defines[F]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(d,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}function Zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ap[s];if(r===void 0&&(r=new Float32Array(s),Ap[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sh(i,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function by(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Ip.set(n),i.uniformMatrix2fv(this.addr,!1,Ip),rn(t,n)}}function My(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),rn(t,n)}}function Sy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;Cp.set(n),i.uniformMatrix4fv(this.addr,!1,Cp),rn(t,n)}}function wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ey(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Ry(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function rh(i){return i.version===0&&(i.compareFunction=Uu,i.needsUpdate=!0),i}function Ly(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=rh(Zp):r=Yp,t.setTexture2D(e||r,s)}function Dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jp,s)}function Ny(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=rh(Kp):r=Qp,t.setTextureCube(e||r,s)}function Uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jp,s)}function Fy(i){switch(i){case 5126:return _y;case 35664:return xy;case 35665:return yy;case 35666:return vy;case 35674:return by;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return wy;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Oy(i,e){i.uniform1fv(this.addr,e)}function By(i,e){let t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function ky(i,e){let t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function zy(i,e){let t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Hy(i,e){let t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vy(i,e){let t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gy(i,e){let t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wy(i,e){i.uniform1iv(this.addr,e)}function qy(i,e){i.uniform2iv(this.addr,e)}function $y(i,e){i.uniform3iv(this.addr,e)}function Xy(i,e){i.uniform4iv(this.addr,e)}function Yy(i,e){i.uniform1uiv(this.addr,e)}function Zy(i,e){i.uniform2uiv(this.addr,e)}function Ky(i,e){i.uniform3uiv(this.addr,e)}function Jy(i,e){i.uniform4uiv(this.addr,e)}function jy(i,e,t){let n=this.cache,s=e.length,r=sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=rh(Zp):a=Yp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Qy(i,e,t){let n=this.cache,s=e.length,r=sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jp,r[a])}function ev(i,e,t){let n=this.cache,s=e.length,r=sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=rh(Kp):a=Qp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function tv(i,e,t){let n=this.cache,s=e.length,r=sh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jp,r[a])}function nv(i){switch(i){case 5126:return Oy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return qy;case 35668:case 35672:return $y;case 35669:case 35673:return Xy;case 5125:return Yy;case 36294:return Zy;case 36295:return Ky;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function Lp(i,e){i.seq.push(e),i.map[e.id]=e}function iv(i,e,t){let n=i.name,s=n.length;for(Qu.lastIndex=0;;){let r=Qu.exec(n),a=Qu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Lp(t,c===void 0?new td(o,i,e):new nd(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new id(o),Lp(t,u)),t=u}}}function Dp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function av(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ov(i){wt._getMatrix(Np,wt.workingColorSpace,i);let e=`mat3( ${Np.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(i)){case Ia:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+av(i.getShaderSource(e),o)}else return r}function lv(i,e){let t=ov(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function hv(i,e){let t=cv[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function uv(){wt.getLuminanceCoefficients(nh);let i=nh.x.toFixed(4),e=nh.y.toFixed(4),t=nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function fv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function So(i){return i!==""}function Fp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Op(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function sd(i){return i.replace(mv,gv)}function gv(i,e){let t=bt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sd(t)}function Bp(i){return i.replace(_v,xv)}function xv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vv(i){return yv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Mv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function wv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sv[i.combine]||"ENVMAP_BLENDING_NONE"}function Ev(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=vv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Mv(t),u=wv(t),d=dv(t),f=fv(r),m=s.createProgram(),x,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(So).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(So).join(`
`),p.length>0&&(p+=`
`)):(x=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),p=[kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?bt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),uv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(So).join(`
`)),a=sd(a),a=Fp(a,t),a=Op(a,t),o=sd(o),o=Fp(o,t),o=Op(o,t),a=Bp(a),o=Bp(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+x+a,w=g+p+o,b=Dp(s,s.VERTEX_SHADER,y),T=Dp(s,s.FRAGMENT_SHADER,w);s.attachShader(m,b),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(m)||"",O=s.getShaderInfoLog(b)||"",G=s.getShaderInfoLog(T)||"",I=D.trim(),q=O.trim(),K=G.trim(),H=!0,ce=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,T);else{let Y=Up(s,b,"vertex"),re=Up(s,T,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+Y+`
`+re)}else I!==""?nt("WebGLProgram: Program Info Log:",I):(q===""||K==="")&&(ce=!1);ce&&(L.diagnostics={runnable:H,programLog:I,vertexShader:{log:q,prefix:x},fragmentShader:{log:K,prefix:p}})}s.deleteShader(b),s.deleteShader(T),_=new Xr(s,m),S=pv(s,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,sv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}function Av(i){return i===Ns||i===yo||i===vo}function Rv(i,e,t,n,s,r){let a=new Dr,o=new rd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,F,L,D,O){let G=L.fog,I=D.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||q,K),ce=d[_.type],Y=n.precision;_.precision!==null&&(Y=n.getMaxPrecision(_.precision),Y!==_.precision&&nt("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let re=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,X=re!==void 0?re.length:0,be=0;I.morphAttributes.position!==void 0&&(be=1),I.morphAttributes.normal!==void 0&&(be=2),I.morphAttributes.color!==void 0&&(be=3);let Oe,j,xe,de;if(ce){let Me=Fi[ce];Oe=Me.vertexShader,j=Me.fragmentShader}else{Oe=_.vertexShader,j=_.fragmentShader;let Me=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,Me,ct),xe=Me.id,de=ct.id}let Ne=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,pt=D.isBatchedMesh===!0,We=!!_.map,et=!!_.matcap,st=!!H,ae=st&&H.isPMREMTexture===!0,_e=!!_.aoMap,ge=!!_.lightMap,Pe=!!_.bumpMap&&_.wireframe===!1,Te=!!_.normalMap,Qe=!!_.displacementMap,qe=!!_.emissiveMap,at=!!_.metalnessMap,rt=!!_.roughnessMap,mt=_.anisotropy>0,U=_.clearcoat>0,Mt=_.diffuseRoughness>0,lt=_.dispersion>0,St=_.retroreflectivity>0,Se=_.iridescence>0,Ot=_.sheen>0,Ye=_.transmission>0,tt=mt&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,v=U&&!!_.clearcoatNormalMap,B=U&&!!_.clearcoatRoughnessMap,fe=Mt&&!!_.diffuseRoughnessMap,P=Se&&!!_.iridescenceMap,Z=Se&&!!_.iridescenceThicknessMap,ne=Ot&&!!_.sheenColorMap,k=Ot&&!!_.sheenRoughnessMap,z=!!_.specularMap,le=!!_.specularColorMap,R=!!_.specularIntensityMap,ie=Ye&&!!_.transmissionMap,ee=Ye&&!!_.thicknessMap,J=!!_.gradientMap,te=!!_.alphaMap,oe=_.alphaTest>0,pe=!!_.alphaHash,Ee=!!_.extensions,he=Ni;_.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(he=i.toneMapping);let Ue=ae?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ke={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:Oe,fragmentShader:j,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:pt,batchingColor:pt&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:et,envMap:st,envMapMode:st&&H.mapping,envMapPMREM:ae,envMapMaxLod:ae?Ue.length-1:null,envMapSize:ae?Ue[0].width:null,aoMap:_e,lightMap:ge,bumpMap:Pe,normalMap:Te,displacementMap:Qe,emissiveMap:qe,normalMapObjectSpace:Te&&_.normalMapType===ip,normalMapTangentSpace:Te&&_.normalMapType===bo,packedNormalMap:Te&&_.normalMapType===bo&&Av(_.normalMap.format),metalnessMap:at,roughnessMap:rt,anisotropy:mt,anisotropyMap:tt,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:Mt,diffuseRoughnessMap:fe,dispersion:lt,retroreflection:St,iridescence:Se,iridescenceMap:P,iridescenceThicknessMap:Z,sheen:Ot,sheenColorMap:ne,sheenRoughnessMap:k,specularMap:z,specularColorMap:le,specularIntensityMap:R,transmission:Ye,transmissionMap:ie,thicknessMap:ee,gradientMap:J,opaque:_.transparent===!1&&_.blending===Wr&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:oe,alphaHash:pe,combine:_.combine,mapUv:We&&f(_.map.channel),aoMapUv:_e&&f(_.aoMap.channel),lightMapUv:ge&&f(_.lightMap.channel),bumpMapUv:Pe&&f(_.bumpMap.channel),normalMapUv:Te&&f(_.normalMap.channel),displacementMapUv:Qe&&f(_.displacementMap.channel),emissiveMapUv:qe&&f(_.emissiveMap.channel),metalnessMapUv:at&&f(_.metalnessMap.channel),roughnessMapUv:rt&&f(_.roughnessMap.channel),anisotropyMapUv:tt&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:fe&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:P&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:k&&f(_.sheenRoughnessMap.channel),specularMapUv:z&&f(_.specularMap.channel),specularColorMapUv:le&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:ie&&f(_.transmissionMap.channel),thicknessMapUv:ee&&f(_.thicknessMap.channel),alphaMapUv:te&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Te||mt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(We||te),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Te===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:be,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&wt.getTransfer(_.map.colorSpace)===Ft,decodeVideoTextureEmissive:qe&&_.emissiveMap.isVideoTexture===!0&&wt.getTransfer(_.emissiveMap.colorSpace)===Ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===gn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function x(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)S.push(F),S.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(S,_),g(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let S=d[_.type],F;if(S){let L=Fi[S];F=vp.clone(L.uniforms)}else F=_.uniforms;return F}function w(_,S){let F=h.get(S);return F!==void 0?++F.usedTimes:(F=new Ev(i,S,_,s),c.push(F),h.set(S,F)),F}function b(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:E}}function Cv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Pv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,x,p,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=a(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=p,y.group=g),e++,y}function l(d,f,m,x,p,g,y){y.reversedDepth===!0&&(p=-p);let w=o(d,f,m,x,p,g);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):t.push(w)}function c(d,f,m,x,p,g){let y=o(d,f,m,x,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||Pv),n.length>1&&n.sort(f||zp),s.length>1&&s.sort(f||zp)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Iv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hp,i.set(n,[a])):s>=r.length?(a=new Hp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ie};break;case"SpotLight":t={position:new C,direction:new C,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Dv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Uv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fv(i){let e=new Lv,t=Dv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new At,a=new At;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,m=0,x=0,p=0,g=0,y=0,w=0,b=0,T=0,E=0,_=0,S=0,F=0,L=0;c.sort(Uv);for(let O=0,G=c.length;O<G;O++){let I=c[O],q=I.color,K=I.intensity,H=I.distance,ce=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ns?ce=I.shadow.map.texture:ce=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=q.r*K,u+=q.g*K,d+=q.b*K;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],K);L++}else if(I.isSunLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,X=t.get(I);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize.copy(re.mapSize).multiply(re.getFrameExtents()),n.sunShadow[m]=X,n.sunShadowMap[m]=ce;let be=re.getViewportCount();for(let Oe=0;Oe<be;Oe++)n.sunShadowMatrix[x+Oe]=re.getMatrix(Oe),n.sunShadowCascade[x+Oe]=re._cascadeData[Oe];x+=be,m++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let re=I.shadow,X=t.get(I);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=ce,n.directionalShadowMatrix[p]=I.shadow.matrix,T++}n.directional[p]=Y,p++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(q).multiplyScalar(K),Y.distance=H,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[y]=Y;let re=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,re.updateMatrices(I),I.castShadow&&F++),n.spotLightMatrix[y]=re.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=ce,_++}y++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(q).multiplyScalar(K),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=Y,w++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let re=I.shadow,X=t.get(I);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=ce,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=Y,g++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(K),Y.groundColor.copy(I.groundColor).multiplyScalar(K),n.hemi[b]=Y,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==w||D.hemiLength!==b||D.numSunShadows!==m||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==L)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-F,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=L,D.sunLength=f,D.directionalLength=p,D.pointLength=g,D.spotLength=y,D.rectAreaLength=w,D.hemiLength=b,D.numSunShadows=m,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=L,n.version=Nv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let b=c[y];if(b.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),u++}else if(b.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(b.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(b.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Vp(i){let e=new Fv(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ov(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Vp(i),e.set(s,[o])):r>=a.length?(o=new Vp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Vv(i,e,t){let n=new Es,s=new ue,r=new ue,a=new qt,o=new jl,l=new Ql,c={},h=t.maxTextureSize,u={[Ds]:gn,[gn]:Ds,[Pt]:Pt},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Bv,fragmentShader:kv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Tt;m.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new we(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let g=this.type;this.render=function(E,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Nf&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let F=i.getRenderTarget(),L=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Qs),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=g!==this.type;G&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=E.length;I<q;I++){let K=E[I],H=K.shadow;if(H===void 0){nt("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ce=H.getFrameExtents();s.multiply(ce),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,H.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gr){if(K.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new $n(s.x,s.y,{format:Ns,type:yi,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new rs(s.x,s.y,ai),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=es,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=un,H.map.depthTexture.magFilter=un}else K.isPointLight?(H.map=new wo(s.x),H.map.depthTexture=new Ga(s.x,xi)):(H.map=new $n(s.x,s.y),H.map.depthTexture=new rs(s.x,s.y,xi)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=es,this.type===uo?(H.map.depthTexture.compareFunction=Y?Nu:Du,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=un,H.map.depthTexture.magFilter=un);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let re=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();K.isPointLight!==!0&&H.updateMatrices(K,S);let X=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let be=0;be<re;be++){let Oe=H.getCamera(be);if(K.isPointLight){let j=H.camera,xe=H.matrix,de=K.distance||j.far;de!==j.far&&(j.far=de,j.updateProjectionMatrix()),Mo.setFromMatrixPosition(K.matrixWorld),j.position.copy(Mo),ed.copy(j.position),ed.add(zv[be]),j.up.copy(Hv[be]),j.lookAt(ed),j.updateMatrixWorld(),xe.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Gp.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Gp,j.coordinateSystem,j.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,be),i.clear();else{be===0&&(i.setRenderTarget(H.map),i.clear());let j=H.getViewport(be);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),O.viewport(a)}n=H.getFrustum(be),b(_,S,Oe,K,X,this.type)}H.isPointLightShadow!==!0&&this.type===Gr&&y(H,S),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(F,L,D)};function y(E,_){let S=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new $n(s.x,s.y,{format:Ns,type:yi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,S,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,S,f,x,null)}function w(E,_,S,F){let L=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)L=D;else if(L=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=L.uuid,G=_.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let q=I[G];q===void 0&&(q=L.clone(),I[G]=q,_.addEventListener("dispose",T)),L=q}if(L.visible=_.visible,L.wireframe=_.wireframe,F===Gr?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:u[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let O=i.properties.get(L);O.light=S}return L}function b(E,_,S,F,L,D){if(E.visible===!1)return;if(E.layers.test(L)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Gr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let I=e.update(E),q=E.material;if(Array.isArray(q)){let K=I.groups;for(let H=0,ce=K.length;H<ce;H++){let Y=K[H],re=q[Y.materialIndex];if(re&&re.visible){let X=w(E,re,F,D);E.onBeforeShadow(i,E,_,S,I,X,Y),i.renderBufferDirect(S,null,I,X,E,Y),E.onAfterShadow(i,E,_,S,I,X,Y)}}}else if(q.visible){let K=w(E,q,F,D);E.onBeforeShadow(i,E,_,S,I,K,null),i.renderBufferDirect(S,null,I,K,E,null),E.onAfterShadow(i,E,_,S,I,K,null)}}let G=E.children;for(let I=0,q=G.length;I<q;I++)b(G[I],_,S,F,L,D)}function T(E){E.target.removeEventListener("dispose",T);for(let S in c){let F=c[S],L=E.target.uuid;L in F&&(F[L].dispose(),delete F[L])}}}function Gv(i,e){function t(){let R=!1,ie=new qt,ee=null,J=new qt(0,0,0,0);return{setMask:function(te){ee!==te&&!R&&(i.colorMask(te,te,te,te),ee=te)},setLocked:function(te){R=te},setClear:function(te,oe,pe,Ee,he){he===!0&&(te*=Ee,oe*=Ee,pe*=Ee),ie.set(te,oe,pe,Ee),J.equals(ie)===!1&&(i.clearColor(te,oe,pe,Ee),J.copy(ie))},reset:function(){R=!1,ee=null,J.set(-1,0,0,0)}}}function n(){let R=!1,ie=!1,ee=null,J=null,te=null;return{setReversed:function(oe){if(ie!==oe){let pe=e.get("EXT_clip_control");oe?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ie=oe;let Ee=te;te=null,this.setClear(Ee)}},getReversed:function(){return ie},setTest:function(oe){oe?ye(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(oe){ee!==oe&&!R&&(i.depthMask(oe),ee=oe)},setFunc:function(oe){if(ie&&(oe=fp[oe]),J!==oe){switch(oe){case Cl:i.depthFunc(i.NEVER);break;case Pl:i.depthFunc(i.ALWAYS);break;case Il:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=oe}},setLocked:function(oe){R=oe},setClear:function(oe){te!==oe&&(te=oe,ie&&(oe=1-oe),i.clearDepth(oe))},reset:function(){R=!1,ee=null,J=null,te=null,ie=!1}}}function s(){let R=!1,ie=null,ee=null,J=null,te=null,oe=null,pe=null,Ee=null,he=null;return{setTest:function(Ue){R||(Ue?ye(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Ue){ie!==Ue&&!R&&(i.stencilMask(Ue),ie=Ue)},setFunc:function(Ue,Ke,Me){(ee!==Ue||J!==Ke||te!==Me)&&(i.stencilFunc(Ue,Ke,Me),ee=Ue,J=Ke,te=Me)},setOp:function(Ue,Ke,Me){(oe!==Ue||pe!==Ke||Ee!==Me)&&(i.stencilOp(Ue,Ke,Me),oe=Ue,pe=Ke,Ee=Me)},setLocked:function(Ue){R=Ue},setClear:function(Ue){he!==Ue&&(i.clearStencil(Ue),he=Ue)},reset:function(){R=!1,ie=null,ee=null,J=null,te=null,oe=null,pe=null,Ee=null,he=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],x=null,p=!1,g=null,y=null,w=null,b=null,T=null,E=null,_=null,S=new Ie(0,0,0),F=0,L=!1,D=null,O=null,G=null,I=null,q=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ce=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=ce>=1):Y.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=ce>=2);let re=null,X={},be=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),j=new qt().fromArray(be),xe=new qt().fromArray(Oe);function de(R,ie,ee,J){let te=new Uint8Array(4),oe=i.createTexture();i.bindTexture(R,oe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<ee;pe++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ie+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return oe}let Ne={};Ne[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),a.setFunc(Rr),Pe(!1),Te(mu),ye(i.CULL_FACE),_e(Qs);function ye(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function ke(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function pt(R,ie){return d[R]!==ie?(i.bindFramebuffer(R,ie),d[R]=ie,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function We(R,ie){let ee=m,J=!1;if(R){ee=f.get(ie),ee===void 0&&(ee=[],f.set(ie,ee));let te=R.textures;if(ee.length!==te.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,pe=te.length;oe<pe;oe++)ee[oe]=i.COLOR_ATTACHMENT0+oe;ee.length=te.length,J=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,J=!0);J&&i.drawBuffers(ee)}function et(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let st={[er]:i.FUNC_ADD,[Ff]:i.FUNC_SUBTRACT,[Of]:i.FUNC_REVERSE_SUBTRACT};st[Bf]=i.MIN,st[kf]=i.MAX;let ae={[zf]:i.ZERO,[Hf]:i.ONE,[Vf]:i.SRC_COLOR,[xu]:i.SRC_ALPHA,[Yf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[Wf]:i.DST_ALPHA,[Gf]:i.ONE_MINUS_SRC_COLOR,[yu]:i.ONE_MINUS_SRC_ALPHA,[Xf]:i.ONE_MINUS_DST_COLOR,[qf]:i.ONE_MINUS_DST_ALPHA,[Zf]:i.CONSTANT_COLOR,[Kf]:i.ONE_MINUS_CONSTANT_COLOR,[Jf]:i.CONSTANT_ALPHA,[jf]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(R,ie,ee,J,te,oe,pe,Ee,he,Ue){if(R===Qs){p===!0&&(ke(i.BLEND),p=!1);return}if(p===!1&&(ye(i.BLEND),p=!0),R!==Uf){if(R!==g||Ue!==L){if((y!==er||T!==er)&&(i.blendEquation(i.FUNC_ADD),y=er,T=er),Ue)switch(R){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",R);break}else switch(R){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gu:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _u:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",R);break}w=null,b=null,E=null,_=null,S.set(0,0,0),F=0,g=R,L=Ue}return}te=te||ie,oe=oe||ee,pe=pe||J,(ie!==y||te!==T)&&(i.blendEquationSeparate(st[ie],st[te]),y=ie,T=te),(ee!==w||J!==b||oe!==E||pe!==_)&&(i.blendFuncSeparate(ae[ee],ae[J],ae[oe],ae[pe]),w=ee,b=J,E=oe,_=pe),(Ee.equals(S)===!1||he!==F)&&(i.blendColor(Ee.r,Ee.g,Ee.b,he),S.copy(Ee),F=he),g=R,L=!1}function ge(R,ie){R.side===Pt?ke(i.CULL_FACE):ye(i.CULL_FACE);let ee=R.side===gn;ie&&(ee=!ee),Pe(ee),R.blending===Wr&&R.transparent===!1?_e(Qs):_e(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let J=R.stencilWrite;o.setTest(J),J&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),qe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(R){D!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),D=R)}function Te(R){R!==Lf?(ye(i.CULL_FACE),R!==O&&(R===mu?i.cullFace(i.BACK):R===Df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),O=R}function Qe(R){R!==G&&(H&&i.lineWidth(R),G=R)}function qe(R,ie,ee){R?(ye(i.POLYGON_OFFSET_FILL),(I!==ie||q!==ee)&&(I=ie,q=ee,a.getReversed()&&(ie=-ie,ee=-ee),i.polygonOffset(ie,ee))):ke(i.POLYGON_OFFSET_FILL)}function at(R){R?ye(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function rt(R){R===void 0&&(R=i.TEXTURE0+K-1),re!==R&&(i.activeTexture(R),re=R)}function mt(R,ie,ee){ee===void 0&&(re===null?ee=i.TEXTURE0+K-1:ee=re);let J=X[ee];J===void 0&&(J={type:void 0,texture:void 0},X[ee]=J),(J.type!==R||J.texture!==ie)&&(re!==ee&&(i.activeTexture(ee),re=ee),i.bindTexture(R,ie||Ne[R]),J.type=R,J.texture=ie)}function U(){let R=X[re];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Mt(){try{i.compressedTexImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function lt(){try{i.compressedTexImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function St(){try{i.texSubImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function Se(){try{i.texSubImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function Ot(){try{i.compressedTexSubImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function Ye(){try{i.compressedTexSubImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function tt(){try{i.texStorage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function A(){try{i.texStorage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function v(){try{i.texImage2D(...arguments)}catch(R){ot("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){ot("WebGLState:",R)}}function fe(R){return u[R]!==void 0?u[R]:i.getParameter(R)}function P(R,ie){u[R]!==ie&&(i.pixelStorei(R,ie),u[R]=ie)}function Z(R){j.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),j.copy(R))}function ne(R){xe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),xe.copy(R))}function k(R,ie){let ee=c.get(ie);ee===void 0&&(ee=new WeakMap,c.set(ie,ee));let J=ee.get(R);J===void 0&&(J=i.getUniformBlockIndex(ie,R.name),i.uniformBlockBinding(ie,J,J),ee.set(R,J))}function z(R,ie,ee){let te=c.get(ie).get(R);l[te]!==ee&&(i.bindBufferBase(i.UNIFORM_BUFFER,te,ee),l[te]=ee)}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},re=null,X={},d={},l={},f=new WeakMap,m=[],x=null,p=!1,g=null,y=null,w=null,b=null,T=null,E=null,_=null,S=new Ie(0,0,0),F=0,L=!1,D=null,O=null,G=null,I=null,q=null,j.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:ke,bindFramebuffer:pt,drawBuffers:We,useProgram:et,setBlending:_e,setMaterial:ge,setFlipSided:Pe,setCullFace:Te,setLineWidth:Qe,setPolygonOffset:qe,setScissorTest:at,activeTexture:rt,bindTexture:mt,unbindTexture:U,compressedTexImage2D:Mt,compressedTexImage3D:lt,texImage2D:v,texImage3D:B,pixelStorei:P,getParameter:fe,updateUBOMapping:k,uniformBlockBinding:z,texStorage2D:tt,texStorage3D:A,texSubImage2D:St,texSubImage3D:Se,compressedTexSubImage2D:Ot,compressedTexSubImage3D:Ye,scissor:Z,viewport:ne,reset:le}}function Wv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,x=new FinalizationRegistry(A=>m.delete(A)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):La("canvas")}function y(A,v,B){let fe=1,P=tt(A);if((P.width>B||P.height>B)&&(fe=B/Math.max(P.width,P.height)),fe<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Z=Math.floor(fe*P.width),ne=Math.floor(fe*P.height);d===void 0&&(d=g(Z,ne));let k=v?g(Z,ne):d;return k.width=Z,k.height=ne,k.getContext("2d").drawImage(A,0,0,Z,ne),nt("WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Z+"x"+ne+")."),k}else return"data"in A&&nt("WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),A;return A}function w(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,v,B,fe,P,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne;fe&&(ne=e.get("EXT_texture_norm16"),ne||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=v;if(v===i.RED&&(B===i.FLOAT&&(k=i.R32F),B===i.HALF_FLOAT&&(k=i.R16F),B===i.UNSIGNED_BYTE&&(k=i.R8),B===i.UNSIGNED_SHORT&&ne&&(k=ne.R16_EXT),B===i.SHORT&&ne&&(k=ne.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.R8UI),B===i.UNSIGNED_SHORT&&(k=i.R16UI),B===i.UNSIGNED_INT&&(k=i.R32UI),B===i.BYTE&&(k=i.R8I),B===i.SHORT&&(k=i.R16I),B===i.INT&&(k=i.R32I)),v===i.RG&&(B===i.FLOAT&&(k=i.RG32F),B===i.HALF_FLOAT&&(k=i.RG16F),B===i.UNSIGNED_BYTE&&(k=i.RG8),B===i.UNSIGNED_SHORT&&ne&&(k=ne.RG16_EXT),B===i.SHORT&&ne&&(k=ne.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RG8UI),B===i.UNSIGNED_SHORT&&(k=i.RG16UI),B===i.UNSIGNED_INT&&(k=i.RG32UI),B===i.BYTE&&(k=i.RG8I),B===i.SHORT&&(k=i.RG16I),B===i.INT&&(k=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGB8UI),B===i.UNSIGNED_SHORT&&(k=i.RGB16UI),B===i.UNSIGNED_INT&&(k=i.RGB32UI),B===i.BYTE&&(k=i.RGB8I),B===i.SHORT&&(k=i.RGB16I),B===i.INT&&(k=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),B===i.UNSIGNED_INT&&(k=i.RGBA32UI),B===i.BYTE&&(k=i.RGBA8I),B===i.SHORT&&(k=i.RGBA16I),B===i.INT&&(k=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ne&&(k=ne.RGB16_EXT),B===i.SHORT&&ne&&(k=ne.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),v===i.RGBA){let z=Z?Ia:wt.getTransfer(P);B===i.FLOAT&&(k=i.RGBA32F),B===i.HALF_FLOAT&&(k=i.RGBA16F),B===i.UNSIGNED_BYTE&&(k=z===Ft?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ne&&(k=ne.RGBA16_EXT),B===i.SHORT&&ne&&(k=ne.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function _(A,v){let B;return A?v===null||v===xi||v===nr?B=i.DEPTH24_STENCIL8:v===ai?B=i.DEPTH32F_STENCIL8:v===$r&&(B=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===nr?B=i.DEPTH_COMPONENT24:v===ai?B=i.DEPTH_COMPONENT32F:v===$r&&(B=i.DEPTH_COMPONENT16),B}function S(A,v){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==Pn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function F(A){let v=new WeakRef(A);n.get(A).__ref=v,m.add(v),x.register(A,v,v)}function L(A){let v=n.get(A).__ref;v!==void 0&&(m.delete(v),x.unregister(v))}function D(A){G(A.target)}function O(A){I(A.target)}function G(A){A.removeEventListener("dispose",D),L(A),K(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function I(A){A.removeEventListener("dispose",O),L(A),ce(A)}function q(){for(let A of m){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):G(v))}m.clear(),u.clear()}function K(A){let v=n.get(A);if(v.__webglInit===void 0)return;let B=A.source,fe=f.get(B);if(fe){let P=fe[v.__cacheKey];P.usedTimes--,P.usedTimes===0&&H(A),Object.keys(fe).length===0&&f.delete(B)}n.remove(A)}function H(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let B=A.source,fe=f.get(B);delete fe[v.__cacheKey],a.memory.textures--}function ce(A){let v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&G(B),A.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let Z=0;Z<v.__webglFramebuffer[P].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[P][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)i.deleteFramebuffer(v.__webglFramebuffer[P]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let fe=A.textures;for(let P=0,Z=fe.length;P<Z;P++){let ne=n.get(fe[P]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(fe[P])}n.remove(A)}let Y=0;function re(){Y=0}function X(){return Y}function be(A){Y=A}function Oe(){let A=Y;return A>=s.maxTextures&&nt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function j(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function xe(A,v){let B=n.get(A);if(A.isVideoTexture&&Ot(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let fe=A.image;if(fe===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function de(A,v){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ge(B,A,v);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Ne(A,v){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){ge(B,A,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function ye(A,v){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Pe(B,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let ke={[Fl]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},pt={[un]:i.NEAREST,[tp]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[mc]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},We={[rp]:i.NEVER,[Uu]:i.ALWAYS,[ap]:i.LESS,[Du]:i.LEQUAL,[op]:i.EQUAL,[Nu]:i.GEQUAL,[lp]:i.GREATER,[cp]:i.NOTEQUAL};function et(A,v){if(v.type===ai&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pn||v.magFilter===mc||v.magFilter===po||v.magFilter===ls||v.minFilter===Pn||v.minFilter===mc||v.minFilter===po||v.minFilter===ls)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ke[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ke[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ke[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,We[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===un||v.minFilter!==po&&v.minFilter!==ls||v.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",D),F(v));let fe=v.source,P=f.get(fe);P===void 0&&(P={},f.set(fe,P));let Z=j(v);if(Z!==A.__cacheKey){P[Z]===void 0&&(P[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),P[Z].usedTimes++;let ne=P[A.__cacheKey];ne!==void 0&&(P[A.__cacheKey].usedTimes--,ne.usedTimes===0&&H(v)),A.__cacheKey=Z,A.__webglTexture=P[Z].texture}return B}function ae(A,v,B){return Math.floor(Math.floor(A/B)/v)}function _e(A,v,B,fe){let Z=A.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,fe,v.data);else{Z.sort((R,ie)=>R.start-ie.start);let ne=0;for(let R=1;R<Z.length;R++){let ie=Z[ne],ee=Z[R],J=ie.start+ie.count,te=ae(ee.start,v.width,4),oe=ae(ie.start,v.width,4);ee.start<=J+1&&te===oe&&ae(ee.start+ee.count-1,v.width,4)===te?ie.count=Math.max(ie.count,ee.start+ee.count-ie.start):(++ne,Z[ne]=ee)}Z.length=ne+1;let k=t.getParameter(i.UNPACK_ROW_LENGTH),z=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let R=0,ie=Z.length;R<ie;R++){let ee=Z[R],J=Math.floor(ee.start/4),te=Math.ceil(ee.count/4),oe=J%v.width,pe=Math.floor(J/v.width),Ee=te,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe),t.texSubImage2D(i.TEXTURE_2D,0,oe,pe,Ee,he,B,fe,v.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,k),t.pixelStorei(i.UNPACK_SKIP_PIXELS,z),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function ge(A,v,B){let fe=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(fe=i.TEXTURE_3D);let P=st(A,v),Z=v.source;t.bindTexture(fe,A.__webglTexture,i.TEXTURE0+B);let ne=n.get(Z);if(Z.version!==ne.__version||P===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let he=wt.getPrimaries(wt.workingColorSpace),Ue=v.colorSpace===hs?null:wt.getPrimaries(v.colorSpace),Ke=v.colorSpace===hs||he===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let z=y(v.image,!1,s.maxTextureSize);z=Ye(v,z);let le=r.convert(v.format,v.colorSpace),R=r.convert(v.type),ie=E(v.internalFormat,le,R,v.normalized,v.colorSpace,v.isVideoTexture);et(fe,v);let ee,J=v.mipmaps,te=v.isVideoTexture!==!0,oe=ne.__version===void 0||P===!0,pe=Z.dataReady,Ee=S(v,z);if(v.isDepthTexture)ie=_(v.format===cs,v.type),oe&&(te?t.texStorage2D(i.TEXTURE_2D,1,ie,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,ie,z.width,z.height,0,le,R,null));else if(v.isDataTexture)if(J.length>0){te&&oe&&t.texStorage2D(i.TEXTURE_2D,Ee,ie,J[0].width,J[0].height);for(let he=0,Ue=J.length;he<Ue;he++)ee=J[he],te?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ee.width,ee.height,le,R,ee.data):t.texImage2D(i.TEXTURE_2D,he,ie,ee.width,ee.height,0,le,R,ee.data);v.generateMipmaps=!1}else te?(oe&&t.texStorage2D(i.TEXTURE_2D,Ee,ie,z.width,z.height),pe&&_e(v,z,le,R)):t.texImage2D(i.TEXTURE_2D,0,ie,z.width,z.height,0,le,R,z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){te&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,ie,J[0].width,J[0].height,z.depth);for(let he=0,Ue=J.length;he<Ue;he++)if(ee=J[he],v.format!==vi)if(le!==null)if(te){if(pe)if(v.layerUpdates.size>0){let Ke=$u(ee.width,ee.height,v.format,v.type);for(let Me of v.layerUpdates){let ct=ee.data.subarray(Me*Ke/ee.data.BYTES_PER_ELEMENT,(Me+1)*Ke/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Me,ee.width,ee.height,1,le,ct)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,z.depth,le,ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ie,ee.width,ee.height,z.depth,0,ee.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,ee.width,ee.height,z.depth,le,R,ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ie,ee.width,ee.height,z.depth,0,le,R,ee.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{te&&oe&&t.texStorage2D(i.TEXTURE_2D,Ee,ie,J[0].width,J[0].height);for(let he=0,Ue=J.length;he<Ue;he++)ee=J[he],v.format!==vi?le!==null?te?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,ee.width,ee.height,le,ee.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ie,ee.width,ee.height,0,ee.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,ee.width,ee.height,le,R,ee.data):t.texImage2D(i.TEXTURE_2D,he,ie,ee.width,ee.height,0,le,R,ee.data)}else if(v.isDataArrayTexture)if(te){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,ie,z.width,z.height,z.depth),pe)if(v.layerUpdates.size>0){let he=$u(z.width,z.height,v.format,v.type);for(let Ue of v.layerUpdates){let Ke=z.data.subarray(Ue*he/z.data.BYTES_PER_ELEMENT,(Ue+1)*he/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,z.width,z.height,1,le,R,Ke)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,le,R,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,z.width,z.height,z.depth,0,le,R,z.data);else if(v.isData3DTexture)te?(oe&&t.texStorage3D(i.TEXTURE_3D,Ee,ie,z.width,z.height,z.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,le,R,z.data)):t.texImage3D(i.TEXTURE_3D,0,ie,z.width,z.height,z.depth,0,le,R,z.data);else if(v.isFramebufferTexture){if(oe)if(te)t.texStorage2D(i.TEXTURE_2D,Ee,ie,z.width,z.height);else{let he=z.width,Ue=z.height;for(let Ke=0;Ke<Ee;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,ie,he,Ue,0,le,R,null),he>>=1,Ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),z.parentNode!==he){he.appendChild(z),u.add(v),he.onpaint=Ue=>{let Ke=Ue.changedElements;for(let Me of u)Ke.includes(Me.image)&&(Me.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,z);else{let Ke=i.RGBA,Me=i.RGBA,ct=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Me,ct,z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(J.length>0){if(te&&oe){let he=tt(J[0]);t.texStorage2D(i.TEXTURE_2D,Ee,ie,he.width,he.height)}for(let he=0,Ue=J.length;he<Ue;he++)ee=J[he],te?pe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,le,R,ee):t.texImage2D(i.TEXTURE_2D,he,ie,le,R,ee);v.generateMipmaps=!1}else if(te){if(oe){let he=tt(z);t.texStorage2D(i.TEXTURE_2D,Ee,ie,he.width,he.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,R,z)}else t.texImage2D(i.TEXTURE_2D,0,ie,le,R,z);w(v)&&v.mipmapsAutoUpdate===!0&&b(fe),ne.__version=Z.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Pe(A,v,B){if(v.image.length!==6)return;let fe=st(A,v),P=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let Z=n.get(P);if(P.version!==Z.__version||fe===!0){t.activeTexture(i.TEXTURE0+B);let ne=wt.getPrimaries(wt.workingColorSpace),k=v.colorSpace===hs?null:wt.getPrimaries(v.colorSpace),z=v.colorSpace===hs||ne===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let le=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let Me=0;Me<6;Me++)!le&&!R?ie[Me]=y(v.image[Me],!0,s.maxCubemapSize):ie[Me]=R?v.image[Me].image:v.image[Me],ie[Me]=Ye(v,ie[Me]);let ee=ie[0],J=r.convert(v.format,v.colorSpace),te=r.convert(v.type),oe=E(v.internalFormat,J,te,v.normalized,v.colorSpace),pe=v.isVideoTexture!==!0,Ee=Z.__version===void 0||fe===!0,he=P.dataReady,Ue=S(v,ee);et(i.TEXTURE_CUBE_MAP,v);let Ke;if(v.isDepthTexture){if(oe=_(v.format===cs,v.type),Ee)if(pe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,oe,ee.width,ee.height);else for(let Me=0;Me<6;Me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,ee.width,ee.height,0,J,te,null)}else if(le){pe&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,oe,ee.width,ee.height);for(let Me=0;Me<6;Me++){Ke=ie[Me].mipmaps;for(let ct=0;ct<Ke.length;ct++){let Rt=Ke[ct];v.format!==vi?J!==null?pe?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct,0,0,Rt.width,Rt.height,J,Rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct,oe,Rt.width,Rt.height,0,Rt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct,0,0,Rt.width,Rt.height,J,te,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct,oe,Rt.width,Rt.height,0,J,te,Rt.data)}}}else{if(Ke=v.mipmaps,pe&&Ee){Ke.length>0&&Ue++;let Me=tt(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,oe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(R){pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ie[Me].width,ie[Me].height,J,te,ie[Me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,ie[Me].width,ie[Me].height,0,J,te,ie[Me].data);for(let ct=0;ct<Ke.length;ct++){let Zt=Ke[ct].image[Me].image;pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct+1,0,0,Zt.width,Zt.height,J,te,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct+1,oe,Zt.width,Zt.height,0,J,te,Zt.data)}}else{pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,J,te,ie[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,oe,J,te,ie[Me]);for(let ct=0;ct<Ke.length;ct++){let Rt=Ke[ct];pe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct+1,0,0,J,te,Rt.image[Me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ct+1,oe,J,te,Rt.image[Me])}}}w(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),Z.__version=P.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Te(A,v,B,fe,P,Z){let ne=r.convert(B.format,B.colorSpace),k=r.convert(B.type),z=E(B.internalFormat,ne,k,B.normalized,B.colorSpace),le=n.get(v),R=n.get(B);if(R.__renderTarget=v,!le.__hasExternalTextures){let ie=Math.max(1,v.width>>Z),ee=Math.max(1,v.height>>Z);P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?t.texImage3D(P,Z,z,ie,ee,v.depth,0,ne,k,null):t.texImage2D(P,Z,z,ie,ee,0,ne,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,P,R.__webglTexture,0,St(v)):(P===i.TEXTURE_2D||P>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,P,R.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(A,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let fe=v.depthTexture,P=fe&&fe.isDepthTexture?fe.type:null,Z=_(v.stencilBuffer,P),ne=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(v),Z,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(v),Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,A)}else{let fe=v.textures;for(let P=0;P<fe.length;P++){let Z=fe[P],ne=r.convert(Z.format,Z.colorSpace),k=r.convert(Z.type),z=E(Z.internalFormat,ne,k,Z.normalized,Z.colorSpace);Se(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(v),z,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(v),z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(A,v,B){let fe=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let P=n.get(v.depthTexture);P.__renderTarget=v;let Z=fe?v.depthTexture.image[0]:v.depthTexture.image;(!P.__webglTexture||Z.width!==v.width||Z.height!==v.height)&&(Z.width=v.width,Z.height=v.height,v.depthTexture.needsUpdate=!0),fe?ye(v.depthTexture,0):xe(v.depthTexture,0);let ne=P.__webglTexture,k=St(v),z=fe?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,le=v.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===es)Se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,z,ne,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,le,z,ne,0);else if(v.depthTexture.format===cs)Se(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,z,ne,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,le,z,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(A){let v=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let fe=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),fe){let P=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,fe.removeEventListener("dispose",P)};fe.addEventListener("dispose",P),v.__depthDisposeCallback=P}v.__boundDepthTexture=fe}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let fe=0;fe<6;fe++)qe(v.__webglFramebuffer[fe],A,fe);else A.texture.mipmaps.length>0?qe(v.__webglFramebuffer[0],A,0):qe(v.__webglFramebuffer,A,0);else if(B){v.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[fe]),v.__webglDepthbuffer[fe]===void 0)v.__webglDepthbuffer[fe]=i.createRenderbuffer(),Qe(v.__webglDepthbuffer[fe],A,!1);else{let P=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,Z)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Qe(v.__webglDepthbuffer,A,!1);else{let P=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,v,B){let fe=n.get(A);v!==void 0&&Te(fe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&at(A)}function mt(A){let v=A.texture,B=n.get(A),fe=n.get(v);A.addEventListener("dispose",O),F(A);let P=A.textures,Z=A.isWebGLCubeRenderTarget===!0,ne=P.length>1;if(ne||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=v.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let k=0;k<6;k++)if(v.mipmaps.length>0){B.__webglFramebuffer[k]=[];for(let z=0;z<v.mipmaps.length;z++)B.__webglFramebuffer[k][z]=i.createFramebuffer()}else B.__webglFramebuffer[k]=i.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let k=0;k<v.mipmaps.length;k++)B.__webglFramebuffer[k]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ne)for(let k=0,z=P.length;k<z;k++){let le=n.get(P[k]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Se(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let k=0;k<P.length;k++){let z=P[k];B.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[k]);let le=r.convert(z.format,z.colorSpace),R=r.convert(z.type),ie=E(z.internalFormat,le,R,z.normalized,z.colorSpace,A.isXRRenderTarget===!0),ee=St(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,B.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),et(i.TEXTURE_CUBE_MAP,v);for(let k=0;k<6;k++)if(v.mipmaps.length>0)for(let z=0;z<v.mipmaps.length;z++)Te(B.__webglFramebuffer[k][z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,z);else Te(B.__webglFramebuffer[k],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);w(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ne){for(let k=0,z=P.length;k<z;k++){let le=P[k],R=n.get(le),ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,R.__webglTexture),et(ie,le),Te(B.__webglFramebuffer,A,le,i.COLOR_ATTACHMENT0+k,ie,0),w(le)&&b(ie)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(k=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,fe.__webglTexture),et(k,v),v.mipmaps.length>0)for(let z=0;z<v.mipmaps.length;z++)Te(B.__webglFramebuffer[z],A,v,i.COLOR_ATTACHMENT0,k,z);else Te(B.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,k,0);w(v)?b(k):v.mipmaps.length>0&&i.texParameteri(k,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&at(A)}function U(A){let v=A.textures;for(let B=0,fe=v.length;B<fe;B++){let P=v[B];if(w(P)&&P.mipmapsAutoUpdate===!0){let Z=T(A),ne=n.get(P).__webglTexture;t.bindTexture(Z,ne),b(Z),t.unbindTexture()}}}let Mt=[];function lt(A){if(A.samples>0){if(Se(A)===!1){let v=A.textures,B=A.width,fe=A.height,P=i.COLOR_BUFFER_BIT,Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=n.get(A),k=v.length>1;if(k)for(let le=0;le<v.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let le=0;le<v.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(P|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(P|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ne.__webglColorRenderbuffer[le]);let R=n.get(v[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,fe,0,0,B,fe,P,i.NEAREST),l===!0&&(Mt.length=0,Mt.push(i.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Mt.push(Z),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let le=0;le<v.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ne.__webglColorRenderbuffer[le]);let R=n.get(v[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function St(A){return Math.min(s.maxSamples,A.samples)}function Se(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ot(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Ye(A,v){let B=A.colorSpace,fe=A.format,P=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Pa&&B!==hs&&(wt.getTransfer(B)===Ft?(fe!==vi||P!==On)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",B)),v}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=re,this.getTextureUnits=X,this.setTextureUnits=be,this.setTexture2D=xe,this.setTexture2DArray=de,this.setTexture3D=Ne,this.setTextureCube=ye,this.rebindTextures=rt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Se,this.dispose=q}function qv(i,e){function t(n,s=hs){let r,a=wt.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return i.BYTE;if(n===Ru)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===gc)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===ai)return i.FLOAT;if(n===yi)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Lu)return i.RGB;if(n===vi)return i.RGBA;if(n===es)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===yc)return i.RED;if(n===vc)return i.RED_INTEGER;if(n===Ns)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(a===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===wc||n===Ec||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===yo||n===Lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ac||n===Rc)return a===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return r.COMPRESSED_R11_EAC;if(n===Ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return r.COMPRESSED_RG11_EAC;if(n===Lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===qc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Dc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===Yc||n===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xc)return a===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===Jc||n===vo||n===jc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Kc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function Zv(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Gu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,w,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,b)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,y,w):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,b=y.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(em),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,w){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=w*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kv(i,e,t,n){let s={},r={};function a(y,w){let b=w.program;n.uniformBlockBinding(y,b,s[y.id])}function o(y,w){let b=s[y.id];b===void 0&&(m(y),b=l(y),s[y.id]=b,y.addEventListener("dispose",p));let T=w.program;n.updateUBOMapping(y,T);let E=e.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let w=i.createBuffer(),b=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],b=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let E=0,_=b.length;E<_;E++){let S=b[E];if(Array.isArray(S))for(let F=0,L=S.length;F<L;F++)h(S[F],E,F,T);else h(S,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,b,T){if(d(y,w,b,T)===!0){let E=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let F=0;F<_.length;F++){let L=_[F],D=x(L,!0);u(L,y.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function u(y,w,b){typeof y=="number"||typeof y=="boolean"?w[b]=y:y.isMatrix3?(w[b]=y.elements[0],w[b+1]=y.elements[1],w[b+2]=y.elements[2],w[b+3]=0,w[b+4]=y.elements[3],w[b+5]=y.elements[4],w[b+6]=y.elements[5],w[b+7]=0,w[b+8]=y.elements[6],w[b+9]=y.elements[7],w[b+10]=y.elements[8],w[b+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-b),b):y.toArray(w,b)}function d(y,w,b,T){let E=y.value,_=w+"_"+b;if(Array.isArray(E)){T[_]===void 0&&(T[_]=[]);let S=T[_],F=!1;for(let L=0;L<E.length;L++)f(E[L],S,L)===!0&&(F=!0);return F}return f(E,T,_)}function f(y,w,b){if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{let T=w[b];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function m(y){let w=y.uniforms,b=0,T=16;for(let _=0,S=w.length;_<S;_++){let F=Array.isArray(w[_])?w[_]:[w[_]];for(let L=0,D=F.length;L<D;L++){let O=F[L],G=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(w[_])||Array.isArray(O.value),q=b;for(let H=0,ce=G.length;H<ce;H++){let Y=G[H],re=x(Y,I),X=b%T,be=X%re.boundary,Oe=X+be;b+=be,Oe!==0&&T-Oe<re.storage&&(b+=T-Oe),H===0&&(q=b),b+=re.storage}let K=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new K((b-q)/Float32Array.BYTES_PER_ELEMENT),O.__offset=q}}let E=b%T;return E>0&&(b+=T-E),y.__size=b,y.__cache={},this}function x(y,w){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(y){let w=y.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}function jv(){return Ui===null&&(Ui=new Ba(Jv,16,16,Ns,yi),Ui.name="DFG_LUT",Ui.minFilter=Pn,Ui.magFilter=Pn,Ui.wrapS=Ai,Ui.wrapT=Ai,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var mg,gg,_g,xg,yg,vg,bg,Mg,Sg,wg,Eg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ng,Ug,Fg,Og,Bg,kg,zg,Hg,Vg,Gg,Wg,qg,$g,Xg,Yg,Zg,Kg,Jg,jg,Qg,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,x_,y_,v_,b_,M_,S_,w_,E_,T_,A_,R_,C_,P_,I_,L_,D_,N_,U_,F_,O_,B_,k_,z_,H_,V_,G_,W_,q_,$_,X_,Y_,Z_,K_,J_,j_,Q_,ex,tx,nx,ix,sx,rx,ax,ox,lx,cx,hx,ux,dx,fx,px,mx,gx,_x,xx,yx,vx,bx,Mx,Sx,wx,Ex,Tx,Ax,Rx,Cx,Px,Ix,Lx,Dx,Nx,Ux,Fx,Ox,Bx,kx,zx,Hx,Vx,Gx,Wx,qx,$x,Xx,bt,Fe,Fi,th,Yx,qp,wo,Sp,ey,ty,$p,Xp,ny,iy,sy,Yr,my,Yp,Zp,Kp,Jp,jp,Qp,Ap,Rp,Cp,Pp,Ip,td,nd,id,Qu,Xr,sv,rv,Np,cv,nh,mv,_v,yv,bv,Sv,Tv,rd,ad,Nv,Bv,kv,zv,Hv,Gp,Mo,ed,$v,Xv,od,ld,Yv,em,Jv,Ui,ih,ds=hi(()=>{ju();ju();mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
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
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rg=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,kg=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t_=`#ifdef USE_GRADIENTMAP
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
}`,n_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,a_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,o_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,d_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f_=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,E_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O_=`#ifdef USE_NORMALMAP
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
#endif`,B_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,j_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Q_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
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
}`,bx=`#if DEPTH_PACKING == 3200
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
}`,Mx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Px=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
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
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Bx=`#define STANDARD
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
}`,kx=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,zx=`#define TOON
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
}`,Hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Vx=`uniform float size;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,$x=`uniform float rotation;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:mg,alphahash_pars_fragment:gg,alphamap_fragment:_g,alphamap_pars_fragment:xg,alphatest_fragment:yg,alphatest_pars_fragment:vg,aomap_fragment:bg,aomap_pars_fragment:Mg,batching_pars_vertex:Sg,batching_vertex:wg,begin_vertex:Eg,beginnormal_vertex:Tg,bsdfs:Ag,iridescence_fragment:Rg,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Pg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Dg,color_fragment:Ng,color_pars_fragment:Ug,color_pars_vertex:Fg,color_vertex:Og,common:Bg,defaultnormal_vertex:kg,displacementmap_pars_vertex:zg,displacementmap_vertex:Hg,emissivemap_fragment:Vg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:qg,envmap_fragment:$g,envmap_common_pars_fragment:Xg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:a_,envmap_vertex:Kg,fog_vertex:Jg,fog_pars_vertex:jg,fog_fragment:Qg,fog_pars_fragment:e_,gradientmap_pars_fragment:t_,lightmap_pars_fragment:n_,lights_lambert_fragment:i_,lights_lambert_pars_fragment:s_,lights_pars_begin:r_,lights_toon_fragment:o_,lights_toon_pars_fragment:l_,lights_phong_fragment:c_,lights_phong_pars_fragment:h_,lights_physical_fragment:u_,lights_physical_pars_fragment:d_,lights_fragment_begin:f_,lights_fragment_maps:p_,lights_fragment_end:m_,lightprobes_pars_fragment:g_,logdepthbuf_fragment:__,logdepthbuf_pars_fragment:x_,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:v_,map_fragment:b_,map_pars_fragment:M_,map_particle_fragment:S_,map_particle_pars_fragment:w_,metalnessmap_fragment:E_,metalnessmap_pars_fragment:T_,morphinstance_vertex:A_,morphcolor_vertex:R_,morphnormal_vertex:C_,morphtarget_pars_vertex:P_,morphtarget_vertex:I_,normal_fragment_begin:L_,normal_fragment_maps:D_,normal_pars_fragment:N_,normal_pars_vertex:U_,normal_vertex:F_,normalmap_pars_fragment:O_,clearcoat_normal_fragment_begin:B_,clearcoat_normal_fragment_maps:k_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:H_,opaque_fragment:V_,packing:G_,premultiplied_alpha_fragment:W_,project_vertex:q_,dithering_fragment:$_,dithering_pars_fragment:X_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:K_,shadowmap_pars_vertex:J_,shadowmap_vertex:j_,shadowmask_pars_fragment:Q_,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:xx,cube_frag:yx,depth_vert:vx,depth_frag:bx,distance_vert:Mx,distance_frag:Sx,equirect_vert:wx,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:Bx,meshphysical_frag:kx,meshtoon_vert:zx,meshtoon_frag:Hx,points_vert:Vx,points_frag:Gx,shadow_vert:Wx,shadow_frag:qx,sprite_vert:$x,sprite_frag:Xx},Fe={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Fi={basic:{uniforms:Tn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Tn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Tn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Tn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Tn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Ie(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Tn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Tn([Fe.points,Fe.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Tn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Tn([Fe.common,Fe.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Tn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Tn([Fe.sprite,Fe.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Tn([Fe.common,Fe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Tn([Fe.lights,Fe.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Fi.physical={uniforms:Tn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};th={r:0,b:0,g:0},Yx=new At,qp=new ft;qp.set(-1,0,0,0,1,0,0,0,1);wo=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Qs});r.uniforms.tEquirect.value=t;let a=new we(s,r),o=t.minFilter;return t.minFilter===ls&&(t.minFilter=Pn),new Vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Sp=256,ey=3,ty=20,$p=256,Xp=16,ny=3,iy=new C,sy=new Ie,Yr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vr(1,10,null),this._boxMesh=new we(new Ii(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=iy}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(sy));let p=new Vr(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sp,ku(e))}_fromTexture(e,t){e.mapping===tr||e.mapping===qr?this._setSize(e.image.length===0?Sp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wp(e,!1,!1),n=Math.log2(e)-ey;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===tr||e.mapping===qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ep()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ry(),this._integrationMaterial=ay());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Xp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-ny)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/($p*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=oy());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};my={[vu]:"LINEAR_TONE_MAPPING",[bu]:"REINHARD_TONE_MAPPING",[Mu]:"CINEON_TONE_MAPPING",[fo]:"ACES_FILMIC_TONE_MAPPING",[wu]:"AGX_TONE_MAPPING",[Eu]:"NEUTRAL_TONE_MAPPING",[Su]:"CUSTOM_TONE_MAPPING"};Yp=new In,Zp=new rs(1,1),Kp=new Ga(1),Jp=new Na,jp=new Hl,Qp=new Ha,Ap=[],Rp=[],Cp=new Float32Array(16),Pp=new Float32Array(9),Ip=new Float32Array(4);td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}},nd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}},id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Qu=/(\w+)(\])?(\[|\.)?/g;Xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);iv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};sv=37297,rv=0;Np=new ft;cv={[vu]:"Linear",[bu]:"Reinhard",[Mu]:"Cineon",[fo]:"ACESFilmic",[wu]:"AgX",[Eu]:"Neutral",[Su]:"Custom"};nh=new C;mv=/^[ \t]*#include +<([\w\d./]+)>/gm;_v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;yv={[uo]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};bv={[qr]:"ENVMAP_MODE_REFRACTION"};Sv={[dc]:"ENVMAP_BLENDING_MULTIPLY",[Qf]:"ENVMAP_BLENDING_MIX",[ep]:"ENVMAP_BLENDING_ADD"};Tv=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ad(e),t.set(e,n)),n}},ad=class{constructor(e){this.id=Tv++,this.code=e,this.usedTimes=0}};Nv=0;Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zv=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Hv=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Gp=new At,Mo=new C,ed=new C;$v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ri({vertexShader:$v,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ld=class extends mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",p=new od,g={},y=t.getContextAttributes(),w=null,b=null,T=[],E=[],_=new ue,S=null,F=null,L=new Sn;L.viewport=new qt;let D=new Sn;D.viewport=new qt;let O=[L,D],G=new hc,I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let xe=T[j];return xe===void 0&&(xe=new Nr,T[j]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(j){let xe=T[j];return xe===void 0&&(xe=new Nr,T[j]=xe),xe.getGripSpace()},this.getHand=function(j){let xe=T[j];return xe===void 0&&(xe=new Nr,T[j]=xe),xe.getHandSpace()};function K(j){let xe=E.indexOf(j.inputSource);if(xe===-1)return;let de=T[xe];de!==void 0&&(de.update(j.inputSource,j.frame,c||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ce);for(let j=0;j<T.length;j++){let xe=E[j];xe!==null&&(E[j]=null,T[j].disconnect(xe))}I=null,q=null,p.reset();for(let j in g)delete g[j];if(e.setRenderTarget(w),f=null,d=null,u=null,s=null,b=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),F!==null){let j=F.camera;j.fov=F.fov,j.zoom=F.zoom,j.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ne=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?cs:es,Ne=y.stencil?nr:xi);let ke={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new $n(d.textureWidth,d.textureHeight,{format:vi,type:On,depthTexture:new rs(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new $n(f.framebufferWidth,f.framebufferHeight,{format:vi,type:On,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ce(j){for(let xe=0;xe<j.removed.length;xe++){let de=j.removed[xe],Ne=E.indexOf(de);Ne>=0&&(E[Ne]=null,T[Ne].disconnect(de))}for(let xe=0;xe<j.added.length;xe++){let de=j.added[xe],Ne=E.indexOf(de);if(Ne===-1){for(let ke=0;ke<T.length;ke++)if(ke>=E.length){E.push(de),Ne=ke;break}else if(E[ke]===null){E[ke]=de,Ne=ke;break}if(Ne===-1)break}let ye=T[Ne];ye&&ye.connect(de)}}function Y(j,xe){xe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(xe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let xe=j.near,de=j.far;p.texture!==null&&(p.depthNear>0&&(xe=p.depthNear),p.depthFar>0&&(de=p.depthFar)),G.near=D.near=L.near=xe,G.far=D.far=L.far=de,(I!==G.near||q!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),I=G.near,q=G.far),G.layers.mask=j.layers.mask|6,L.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Ne=j.parent,ye=G.cameras;Y(G,Ne);for(let ke=0;ke<ye.length;ke++)Y(ye[ke],Ne);G.projectionMatrix.copy(L.projectionMatrix),G.projectionMatrixInverse.copy(L.projectionMatrixInverse),F===null&&j.isPerspectiveCamera&&(F={camera:j,fov:j.fov,zoom:j.zoom}),re(j,G,Ne)};function re(j,xe,de){de===null?j.matrix.copy(xe.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(xe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(xe.projectionMatrix),j.projectionMatrixInverse.copy(xe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ir*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(j){return g[j]};let X=null;function be(j,xe){if(h=xe.getViewerPose(c||a),m=xe,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ne=!1;de.length!==G.cameras.length&&(G.cameras.length=0,Ne=!0);for(let We=0;We<de.length;We++){let et=de[We],st=null;if(f!==null)st=f.getViewport(et);else{let _e=u.getViewSubImage(d,et);st=_e.viewport,We===0&&(e.setRenderTargetTextures(b,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(b))}let ae=O[We];ae===void 0&&(ae=new Sn,ae.layers.enable(We),ae.viewport=new qt,O[We]=ae),ae.matrix.fromArray(et.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(et.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(st.x,st.y,st.width,st.height),We===0&&(G.matrix.copy(ae.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ne===!0&&G.cameras.push(ae)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let We=u.getDepthInformation(de[0]);We&&We.isValid&&We.texture&&p.init(We,s.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let We=0;We<de.length;We++){let et=de[We].camera;if(et){let st=g[et];st||(st=new Wa,g[et]=st);let ae=u.getCameraImage(et);st.sourceTexture=ae}}}}for(let de=0;de<T.length;de++){let Ne=E[de],ye=T[de];Ne!==null&&ye!==void 0&&ye.update(Ne,xe,c||a)}X&&X(j,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),m=null}let Oe=new Wp;Oe.setAnimationLoop(be),this.setAnimationLoop=function(j){X=j},this.dispose=function(){}}},Yv=new At,em=new ft;em.set(-1,0,0,0,1,0,0,0,1);Jv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;ih=class{constructor(e={}){let{canvas:t=hp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=f,p=new Set([Mc,bc,vc]),g=new Set([On,xi,$r,nr,_c,xc]),y=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},T=null,E=null,_=[],S=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,D=!1,O=null,G=null,I=null,q=null;this._outputColorSpace=Mn;let K=0,H=0,ce=null,Y=-1,re=null,X=new qt,be=new qt,Oe=null,j=new Ie(0),xe=0,de=t.width,Ne=t.height,ye=1,ke=null,pt=null,We=new qt(0,0,de,Ne),et=new qt(0,0,de,Ne),st=!1,ae=new Es,_e=new Gl,ge=!1,Pe=!1,Te=new At,Qe=new C,qe=new qt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function mt(){return ce===null?ye:1}let U=n;function Mt(M,N){return t.getContext(M,N)}let lt,St,Se,Ot,Ye,tt,A,v,B,fe,P,Z,ne,k,z,le,R,ie,ee,J,te,oe,pe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Me,!1),U===null){let N="webgl2";if(U=Mt(N,M),U===null)throw Mt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(M){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),ot("WebGLRenderer: "+M.message),M}function Ee(){lt=new cy(U),lt.init(),te=new qv(U,lt),St=new jx(U,lt,e,te),Se=new Gv(U,lt),St.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),G=U.createFramebuffer(),I=U.createFramebuffer(),q=U.createFramebuffer(),Ot=new dy(U),Ye=new Cv,tt=new Wv(U,lt,Se,Ye,St,te,Ot),A=new ly(L),v=new pg(U),oe=new Kx(U,v),B=new hy(U,v,Ot,oe),fe=new py(U,B,v,oe,Ot),ie=new fy(U,St,tt),z=new Qx(Ye),P=new Rv(L,A,lt,St,oe,z),Z=new Zv(L,Ye),ne=new Iv,k=new Ov(lt),R=new Zx(L,A,Se,fe,m,l),le=new Vv(L,fe,St),pe=new Kv(U,Ot,St,Se),ee=new Jx(U,lt,Ot),J=new uy(U,lt,Ot),Ot.programs=P.programs,L.capabilities=St,L.extensions=lt,L.properties=Ye,L.renderLists=ne,L.shadowMap=le,L.state=Se,L.info=Ot}x!==On&&(F=new gy(x,t.width,t.height,o,s,r));let he=new ld(L,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=lt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=lt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(M){M!==void 0&&(ye=M,this.setSize(de,Ne,!1))},this.getSize=function(M){return M.set(de,Ne)},this.setSize=function(M,N,Q=!0){if(he.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}de=M,Ne=N,t.width=Math.floor(M*ye),t.height=Math.floor(N*ye),Q===!0&&(t.style.width=M+"px",t.style.height=N+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(de*ye,Ne*ye).floor()},this.setDrawingBufferSize=function(M,N,Q){de=M,Ne=N,ye=Q,t.width=Math.floor(M*Q),t.height=Math.floor(N*Q),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(x===On){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(X)},this.getViewport=function(M){return M.copy(We)},this.setViewport=function(M,N,Q,V){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,N,Q,V),Se.viewport(X.copy(We).multiplyScalar(mt()).round())},this.getScissor=function(M){return M.copy(et)},this.setScissor=function(M,N,Q,V){M.isVector4?et.set(M.x,M.y,M.z,M.w):et.set(M,N,Q,V),Se.scissor(be.copy(et).multiplyScalar(mt()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(M){Se.setScissorTest(st=M)},this.setOpaqueSort=function(M){ke=M},this.setTransparentSort=function(M){pt=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,Q=!0){let V=0;if(M){let W=!1;if(ce!==null){let Ae=ce.texture.format;W=p.has(Ae)}if(W){let Ae=ce.texture.type,ze=g.has(Ae),Re=R.getClearColor(),Le=R.getClearAlpha(),$e=Re.r,ht=Re.g,gt=Re.b;ze?(y[0]=$e,y[1]=ht,y[2]=gt,y[3]=Le,U.clearBufferuiv(U.COLOR,0,y)):(w[0]=$e,w[1]=ht,w[2]=gt,w[3]=Le,U.clearBufferiv(U.COLOR,0,w))}else V|=U.COLOR_BUFFER_BIT}N&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),R.dispose(),ne.dispose(),k.dispose(),tt.dispose(),Ye.dispose(),A.dispose(),fe.dispose(),B.dispose(),oe.dispose(),pe.dispose(),P.dispose(),he.dispose(),he.removeEventListener("sessionstart",zn),he.removeEventListener("sessionend",ia),fn.stop()};function Ue(M){M.preventDefault(),Da("WebGLRenderer: Context Lost."),D=!0}function Ke(){Da("WebGLRenderer: Context Restored."),D=!1;let M=Ot.autoReset,N=le.enabled,Q=le.autoUpdate,V=le.needsUpdate,W=le.type;Ee(),Ot.autoReset=M,le.enabled=N,le.autoUpdate=Q,le.needsUpdate=V,le.type=W}function Me(M){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ct(M){let N=M.target;N.removeEventListener("dispose",ct),Rt(N)}function Rt(M){Zt(M),Ye.remove(M)}function Zt(M){let N=Ye.get(M).programs;N!==void 0&&(N.forEach(function(Q){P.releaseProgram(Q)}),M.isShaderMaterial&&P.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,Q,V,W,Ae){N===null&&(N=at);let ze=W.isMesh&&W.matrixWorld.determinantAffine()<0,Re=ra(M,N,Q,V,W);Se.setMaterial(V,ze);let Le=Q.index,$e=1;if(V.wireframe===!0){if(Le=B.getWireframeAttribute(Q),Le===void 0)return;$e=2}let ht=Q.drawRange,gt=Q.attributes.position,He=ht.start*$e,yt=(ht.start+ht.count)*$e;Ae!==null&&(He=Math.max(He,Ae.start*$e),yt=Math.min(yt,(Ae.start+Ae.count)*$e)),Le!==null?(He=Math.max(He,0),yt=Math.min(yt,Le.count)):gt!=null&&(He=Math.max(He,0),yt=Math.min(yt,gt.count));let Gt=yt-He;if(Gt<0||Gt===1/0)return;oe.setup(W,V,Re,Q,Le);let Ct,It=ee;if(Le!==null&&(Ct=v.get(Le),It=J,It.setIndex(Ct)),W.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*mt()),It.setMode(U.LINES)):It.setMode(U.TRIANGLES);else if(W.isLine){let tn=V.linewidth;tn===void 0&&(tn=1),Se.setLineWidth(tn*mt()),W.isLineSegments?It.setMode(U.LINES):W.isLineLoop?It.setMode(U.LINE_LOOP):It.setMode(U.LINE_STRIP)}else W.isPoints?It.setMode(U.POINTS):W.isSprite&&It.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))It.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let tn=W._multiDrawStarts,Ve=W._multiDrawCounts,pn=W._multiDrawCount,vt=Le?v.get(Le).bytesPerElement:1,qi=Ye.get(V).currentProgram.getUniforms();for(let kt=0;kt<pn;kt++)qi.setValue(U,"_gl_DrawID",kt),It.render(tn[kt]/vt,Ve[kt])}else if(W.isInstancedMesh)It.renderInstances(He,Gt,W.count);else if(Q.isInstancedBufferGeometry){let tn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ve=Math.min(Q.instanceCount,tn);It.renderInstances(He,Gt,Ve)}else It.render(He,Gt)};function De(M,N,Q,V){O!==null&&M.isNodeMaterial&&O.setObject(V,M),ge===!0&&z.setState(M,Q,!1),M.transparent===!0&&M.side===Pt&&M.forceSinglePass===!1?(M.side=gn,M.needsUpdate=!0,An(M,N,V),M.side=Ds,M.needsUpdate=!0,An(M,N,V),M.side=Pt):An(M,N,V)}this.compile=function(M,N,Q=null){Q===null&&(Q=M),O!==null&&O.renderStart(M,N,Q),E=k.get(Q),E.init(N),S.push(E),Q.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),M!==Q&&M.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Pe=this.localClippingEnabled,ge=z.init(this.clippingPlanes,Pe),ge===!0&&z.setGlobalState(this.clippingPlanes,N),O!==null&&le.render(E.state.shadowsArray,Q,N);let V=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let ze=0;ze<Ae.length;ze++){let Re=Ae[ze];De(Re,Q,N,W),V.add(Re)}else De(Ae,Q,N,W),V.add(Ae)}),E=S.pop(),O!==null&&O.renderEnd(),V},this.compileAsync=function(M,N,Q=null){let V=this.compile(M,N,Q);return new Promise(W=>{function Ae(){if(V.forEach(function(ze){let Le=Ye.get(ze).currentProgram;(Le===void 0||Le.isReady())&&V.delete(ze)}),V.size===0){W(M);return}setTimeout(Ae,10)}lt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Bt=null;function dn(M){Bt&&Bt(M)}function zn(){fn.stop()}function ia(){fn.start()}let fn=new Wp;fn.setAnimationLoop(dn),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(M){Bt=M,he.setAnimationLoop(M),M===null?fn.stop():fn.start()},he.addEventListener("sessionstart",zn),he.addEventListener("sessionend",ia),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,N);let Q=he.enabled===!0&&he.isPresenting===!0,V=F!==null&&(ce===null||Q)&&F.begin(L,ce);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),M.isScene===!0&&M.onBeforeRender(L,M,N,ce),E=k.get(M,S.length),E.init(N),E.state.textureUnits=tt.getTextureUnits(),S.push(E),Te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?_e.setFromArrayCamera(N):ae.setFromProjectionMatrix(Te,ii,N.reversedDepth),Pe=this.localClippingEnabled,ge=z.init(this.clippingPlanes,Pe),T=ne.get(M,_.length),T.init(),_.push(T),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let ze=L.xr.getDepthSensingMesh();ze!==null&&Vi(ze,N,-1/0,L.sortObjects)}Vi(M,N,0,L.sortObjects),T.finish(),O!==null&&O.updateLights(E.state.lightsArray),L.sortObjects===!0&&T.sort(ke,pt),rt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,rt&&R.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),ge===!0&&z.beginShadows();let W=E.state.shadowsArray;if(le.render(W,M,N),ge===!0&&z.endShadows(),(V&&F.hasRenderPass())===!1){let ze=T.opaque,Re=T.transmissive;if(E.setupLights(),N.isArrayCamera){let Le=N.cameras;if(Re.length>0)for(let $e=0,ht=Le.length;$e<ht;$e++){let gt=Le[$e];_s(ze,Re,M,gt)}rt&&R.render(M);for(let $e=0,ht=Le.length;$e<ht;$e++){let gt=Le[$e];gs(T,M,gt,gt.viewport)}}else Re.length>0&&_s(ze,Re,M,N),rt&&R.render(M),gs(T,M,N)}ce!==null&&H===0&&(tt.updateMultisampleRenderTarget(ce),tt.updateRenderTargetMipmap(ce)),V&&F.end(L),M.isScene===!0&&M.onAfterRender(L,M,N),oe.resetDefaultState(),Y=-1,re=null,S.pop(),S.length>0?(E=S[S.length-1],tt.setTextureUnits(E.state.textureUnits),ge===!0&&z.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,O!==null&&O.renderEnd()};function Vi(M,N,Q,V){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)Q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let ze=N.isArrayCamera?_e:ae;if(!M.frustumCulled||M.intersectsFrustum(ze)){V&&qe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);let Re=fe.update(M),Le=M.material;Le.visible&&T.push(M,Re,Le,Q,qe.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){let ze=N.isArrayCamera?_e:ae;if(!M.frustumCulled||M.intersectsFrustum(ze)){let Re=fe.update(M),Le=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),qe.copy(M.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),qe.copy(Re.boundingSphere.center)),qe.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(Le)){let $e=Re.groups;for(let ht=0,gt=$e.length;ht<gt;ht++){let He=$e[ht],yt=Le[He.materialIndex];yt&&yt.visible&&T.push(M,Re,yt,Q,qe.z,He,N)}}else Le.visible&&T.push(M,Re,Le,Q,qe.z,null,N)}}}let Ae=M.children;for(let ze=0,Re=Ae.length;ze<Re;ze++)Vi(Ae[ze],N,Q,V)}function gs(M,N,Q,V){let{opaque:W,transmissive:Ae,transparent:ze}=M;E.setupLightsView(Q),ge===!0&&z.setGlobalState(L.clippingPlanes,Q),V&&Se.viewport(X.copy(V)),W.length>0&&Gi(W,N,Q),Ae.length>0&&Gi(Ae,N,Q),ze.length>0&&Gi(ze,N,Q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function _s(M,N,Q,V){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let He=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new $n(1,1,{generateMipmaps:!0,type:He?yi:On,minFilter:ls,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let Ae=E.state.transmissionRenderTarget[V.id],ze=V.viewport||X;Ae.setSize(ze.z*L.transmissionResolutionScale,ze.w*L.transmissionResolutionScale);let Re=L.getRenderTarget(),Le=L.getActiveCubeFace(),$e=L.getActiveMipmapLevel();L.setRenderTarget(Ae),L.getClearColor(j),xe=L.getClearAlpha(),xe<1&&L.setClearColor(16777215,.5),L.clear(),rt&&R.render(Q);let ht=L.toneMapping;L.toneMapping=Ni;let gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),ge===!0&&z.setGlobalState(L.clippingPlanes,V),Gi(M,Q,V),tt.updateMultisampleRenderTarget(Ae),tt.updateRenderTargetMipmap(Ae),lt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let yt=0,Gt=N.length;yt<Gt;yt++){let Ct=N[yt],{object:It,geometry:tn,material:Ve,group:pn}=Ct;if(Ve.side===Pt&&It.layers.test(V.layers)){let vt=Ve.side;Ve.side=gn,Ve.needsUpdate=!0,oi(It,Q,V,tn,Ve,pn),Ve.side=vt,Ve.needsUpdate=!0,He=!0}}He===!0&&(tt.updateMultisampleRenderTarget(Ae),tt.updateRenderTargetMipmap(Ae))}L.setRenderTarget(Re,Le,$e),L.setClearColor(j,xe),gt!==void 0&&(V.viewport=gt),L.toneMapping=ht}function Gi(M,N,Q){let V=N.isScene===!0?N.overrideMaterial:null;for(let W=0,Ae=M.length;W<Ae;W++){let ze=M[W],{object:Re,geometry:Le,group:$e}=ze,ht=ze.material;ht.allowOverride===!0&&V!==null&&(ht=V),Re.layers.test(Q.layers)&&oi(Re,N,Q,Le,ht,$e)}}function oi(M,N,Q,V,W,Ae){O!==null&&W.isNodeMaterial&&O.setObject(M,W),M.onBeforeRender(L,N,Q,V,W,Ae),M.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(L,N,Q,V,M,Ae),W.transparent===!0&&W.side===Pt&&W.forceSinglePass===!1?(W.side=gn,W.needsUpdate=!0,L.renderBufferDirect(Q,N,V,W,M,Ae),W.side=Ds,W.needsUpdate=!0,L.renderBufferDirect(Q,N,V,W,M,Ae),W.side=Pt):L.renderBufferDirect(Q,N,V,W,M,Ae),M.onAfterRender(L,N,Q,V,W,Ae)}function ln(M){let N=0;for(let Q of M)Q.texture!==null&&N++;return N}function An(M,N,Q){N.isScene!==!0&&(N=at);let V=Ye.get(M),W=E.state.lights,Ae=E.state.shadowsArray,ze=W.state.version,Re=P.getParameters(M,W.state,Ae,N,Q,E.state.lightProbeGridArray),Le=P.getProgramCacheKey(Re),$e=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let ht=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=A.get(M.envMap||V.environment,ht),V.envMapRotation=V.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,$e===void 0&&(M.addEventListener("dispose",ct),$e=new Map,V.programs=$e,V.programVariants=new Map);let gt=$e.get(Le);if(gt!==void 0){if(V.currentProgram===gt&&V.lightsStateVersion===ze)return Bs(M,Re),gt}else Re.uniforms=P.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,Q,Re),M.onBeforeCompile(Re,L),gt=P.acquireProgram(Re,Le),$e.set(Le,gt),V.uniforms=Re.uniforms;let He=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=z.uniform),Bs(M,Re),V.needsLights=Wi(M),V.lightsStateVersion=ze,V.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.sunLights.value=W.state.sun,He.sunLightShadows.value=W.state.sunShadow,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.sunShadowMatrix.value=W.state.sunShadowMatrix,He.sunShadowCascade.value=W.state.sunShadowCascade,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=ln(E.state.lightProbeGridArray),V.currentProgram=gt,V.uniformsList=null,gt}function Lo(M,N,Q,V,W){let Ae=Ye.get(M),ze=Ae.currentProgram.id+","+V+","+W,Re=Ae.programVariants.get(ze);return Re===void 0?(Re=An(M,N,Q),Ae.programVariants.set(ze,Re)):(Ae.currentProgram=Re,Ae.uniformsList=null,Ae.outputColorSpace=V,Ae.toneMapping=W),Re}function sa(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Xr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Bs(M,N){let Q=Ye.get(M);Q.outputColorSpace=N.outputColorSpace,Q.batching=N.batching,Q.batchingColor=N.batchingColor,Q.instancing=N.instancing,Q.instancingColor=N.instancingColor,Q.instancingMorph=N.instancingMorph,Q.skinning=N.skinning,Q.morphTargets=N.morphTargets,Q.morphNormals=N.morphNormals,Q.morphColors=N.morphColors,Q.morphTargetsCount=N.morphTargetsCount,Q.numClippingPlanes=N.numClippingPlanes,Q.numIntersection=N.numClipIntersection,Q.vertexAlphas=N.vertexAlphas,Q.vertexTangents=N.vertexTangents,Q.toneMapping=N.toneMapping}function ra(M,N,Q,V,W){N.isScene!==!0&&(N=at),tt.resetTextureUnits();let Ae=N.fog,ze=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,Re=ce===null?L.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:wt.workingColorSpace,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,$e=A.get(V.envMap||ze,Le),ht=V.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,gt=!!Q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),He=!!Q.morphAttributes.position,yt=!!Q.morphAttributes.normal,Gt=!!Q.morphAttributes.color,Ct=Ni;V.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ct=L.toneMapping);let It=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,tn=It!==void 0?It.length:0,Ve=Ye.get(V),pn=E.state.lights;if(ge===!0&&(Pe===!0||M!==re)){let Xe=M===re&&V.id===Y;z.setState(V,M,Xe)}let vt=!1,qi=!1;V.version===Ve.__version?Ve.needsLights&&Ve.lightsStateVersion!==pn.state.version||W.isBatchedMesh&&Ve.batching===!1||!W.isBatchedMesh&&Ve.batching===!0||W.isBatchedMesh&&Ve.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ve.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||W.isInstancedMesh&&Ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ve.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ve.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ve.instancingMorph===!1&&W.morphTexture!==null||Ve.envMap!==$e||V.fog===!0&&Ve.fog!==Ae||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==z.numPlanes||Ve.numIntersection!==z.numIntersection)||Ve.vertexAlphas!==ht||Ve.vertexTangents!==gt||Ve.morphTargets!==He||Ve.morphNormals!==yt||Ve.morphColors!==Gt||Ve.morphTargetsCount!==tn||Ve.numLightProbeGrids!==ln(E.state.lightProbeGridArray)?vt=!0:(Ve.outputColorSpace!==Re||Ve.toneMapping!==Ct)&&(qi=!0):(vt=!0,Ve.__version=V.version);let kt=Ve.currentProgram;(vt===!0||qi===!0)&&(kt=qi===!0?Lo(V,N,W,Re,Ct):An(V,N,W),O&&V.isNodeMaterial&&O.onUpdateProgram(V,kt,Ve));let sr=!1,Jn=!1,bi=!1,Et=kt.getUniforms(),cn=Ve.uniforms;if(Se.useProgram(kt.program)&&(sr=!0,Jn=!0,bi=!0),V.id!==Y&&(Y=V.id,Jn=!0),sr||re!==M){Se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Et.setValue(U,"projectionMatrix",M.projectionMatrix),Et.setValue(U,"viewMatrix",M.matrixWorldInverse);let Je=Et.map.cameraPosition;Je!==void 0&&Je.setValue(U,Qe.setFromMatrixPosition(M.matrixWorld)),St.logarithmicDepthBuffer&&Et.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Et.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),re!==M&&(re=M,Jn=!0,bi=!0)}if(Ve.needsLights&&(pn.state.sunShadowMap.length>0&&Et.setValue(U,"sunShadowMap",pn.state.sunShadowMap,tt),pn.state.directionalShadowMap.length>0&&Et.setValue(U,"directionalShadowMap",pn.state.directionalShadowMap,tt),pn.state.spotShadowMap.length>0&&Et.setValue(U,"spotShadowMap",pn.state.spotShadowMap,tt),pn.state.pointShadowMap.length>0&&Et.setValue(U,"pointShadowMap",pn.state.pointShadowMap,tt)),W.isSkinnedMesh){Et.setOptional(U,W,"bindMatrix"),Et.setOptional(U,W,"bindMatrixInverse");let Xe=W.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Et.setValue(U,"boneTexture",Xe.boneTexture,tt))}W.isBatchedMesh&&(Et.setOptional(U,W,"batchingTexture"),Et.setValue(U,"batchingTexture",W._matricesTexture,tt),Et.setOptional(U,W,"batchingIdTexture"),Et.setValue(U,"batchingIdTexture",W._indirectTexture,tt),Et.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Et.setValue(U,"batchingColorTexture",W._colorsTexture,tt));let Ce=Q.morphAttributes;if((Ce.position!==void 0||Ce.normal!==void 0||Ce.color!==void 0)&&ie.update(W,Q,kt),(Jn||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,Et.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=jv()),Jn){if(Et.setValue(U,"toneMappingExposure",L.toneMappingExposure),Ve.needsLights&&xn(cn,bi),Ae&&V.fog===!0&&Z.refreshFogUniforms(cn,Ae),Z.refreshMaterialUniforms(cn,V,ye,Ne,E.state.transmissionRenderTarget[M.id]),Ve.needsLights&&Ve.numLightProbeGrids>0){let Xe=b,Je=0;for(let Lt of E.state.lightProbeGridArray)Lt.texture!==null&&(Xe.textures[Je]=Lt.texture,Xe.min[Je]=Lt.boundingBox.min,Xe.max[Je]=Lt.boundingBox.max,Xe.resolution[Je]=Lt.resolution,Je++);for(let Lt in Xe)Xe[Lt].length=Je;cn.probesSH.value=Xe.textures,cn.probesMin.value=Xe.min,cn.probesMax.value=Xe.max,cn.probesResolution.value=Xe.resolution}Xr.upload(U,sa(Ve),cn,tt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xr.upload(U,sa(Ve),cn,tt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Et.setValue(U,"center",W.center),Et.setValue(U,"modelViewMatrix",W.modelViewMatrix),Et.setValue(U,"normalMatrix",W.normalMatrix),Et.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Xe=V.uniformsGroups;for(let Je=0,Lt=Xe.length;Je<Lt;Je++){let Nn=Xe[Je];pe.update(Nn,kt),pe.bind(Nn,kt)}}return kt}function xn(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function Wi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(M,N,Q){let V=Ye.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Ye.get(M.texture).__webglTexture=N,Ye.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let Q=Ye.get(M);Q.__webglFramebuffer=N,Q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,Q=0){ce=M,K=N,H=Q;let V=null,W=!1,Ae=!1;if(M){let Re=Ye.get(M);if(Re.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(U.FRAMEBUFFER,Re.__webglFramebuffer),X.copy(M.viewport),be.copy(M.scissor),Oe=M.scissorTest,Se.viewport(X),Se.scissor(be),Se.setScissorTest(Oe),Y=-1;return}else if(Re.__webglFramebuffer===void 0)tt.setupRenderTarget(M);else if(Re.__hasExternalTextures)tt.rebindTextures(M,Ye.get(M.texture).__webglTexture,Ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ht=M.depthTexture;if(Re.__boundDepthTexture!==ht){if(ht!==null&&Ye.has(ht)&&(M.width!==ht.image.width||M.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(M)}}let Le=M.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ae=!0);let $e=Ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray($e[N])?V=$e[N][Q]:V=$e[N],W=!0):M.samples>0&&tt.useMultisampledRTT(M)===!1?V=Ye.get(M).__webglMultisampledFramebuffer:Array.isArray($e)?V=$e[Q]:V=$e,X.copy(M.viewport),be.copy(M.scissor),Oe=M.scissorTest}else X.copy(We).multiplyScalar(ye).floor(),be.copy(et).multiplyScalar(ye).floor(),Oe=st;if(Q!==0&&(V=G),Se.bindFramebuffer(U.FRAMEBUFFER,V)&&Se.drawBuffers(M,V),Se.viewport(X),Se.scissor(be),Se.setScissorTest(Oe),W){let Re=Ye.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,Q)}else if(Ae){let Re=N;for(let Le=0;Le<M.textures.length;Le++){let $e=Ye.get(M.textures[Le]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Le,$e.__webglTexture,Q,Re)}}else if(M!==null&&Q!==0){let Re=Ye.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,Q)}Y=-1};function ks(M){let N=Ye.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=St.textureFormatReadable(M.format),N.__typeReadable=St.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,Q,V,W,Ae,ze,Re=0){if(!(M&&M.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ze!==void 0&&(Le=Le[ze],Array.isArray(Le)&&(Le=Le[0])),Le){Se.bindFramebuffer(U.FRAMEBUFFER,Le);try{let $e=M.textures[Re],ht=$e.format,gt=$e.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Re);let He=ks($e);if(He.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-V&&Q>=0&&Q<=M.height-W&&U.readPixels(N,Q,V,W,te.convert(ht),te.convert(gt),Ae)}finally{let $e=ce!==null?Ye.get(ce).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(M,N,Q,V,W,Ae,ze,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ze!==void 0&&(Le=Le[ze],Array.isArray(Le)&&(Le=Le[0])),Le)if(N>=0&&N<=M.width-V&&Q>=0&&Q<=M.height-W){Se.bindFramebuffer(U.FRAMEBUFFER,Le);let $e=M.textures[Re],ht=$e.format,gt=$e.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Re);let He=ks($e);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),U.readPixels(N,Q,V,W,te.convert(ht),te.convert(gt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Gt=ce!==null?Ye.get(ce).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,Gt);let Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await dp(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,yt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(yt),U.deleteSync(Ct),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,Q=0){let V=Math.pow(2,-Q),W=Math.floor(M.image.width*V),Ae=Math.floor(M.image.height*V),ze=N!==null?N.x:0,Re=N!==null?N.y:0;tt.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,ze,Re,W,Ae),Se.unbindTexture()},this.copyTextureToTexture=function(M,N,Q=null,V=null,W=0,Ae=0){let ze,Re,Le,$e,ht,gt,He,yt,Gt,Ct=M.isCompressedTexture?M.mipmaps[Ae]:M.image;if(Q!==null)ze=Q.max.x-Q.min.x,Re=Q.max.y-Q.min.y,Le=Q.isBox3?Q.max.z-Q.min.z:1,$e=Q.min.x,ht=Q.min.y,gt=Q.isBox3?Q.min.z:0;else{let Et=Math.pow(2,-W);ze=Math.floor(Ct.width*Et),Re=Math.floor(Ct.height*Et),M.isDataArrayTexture?Le=Ct.depth:M.isData3DTexture?Le=Math.floor(Ct.depth*Et):Le=1,$e=0,ht=0,gt=0}V!==null?(He=V.x,yt=V.y,Gt=V.z):(He=0,yt=0,Gt=0);let It=te.convert(N.format),tn=te.convert(N.type),Ve;N.isData3DTexture?(tt.setTexture3D(N,0),Ve=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(tt.setTexture2DArray(N,0),Ve=U.TEXTURE_2D_ARRAY):(tt.setTexture2D(N,0),Ve=U.TEXTURE_2D),Se.activeTexture(U.TEXTURE0),Se.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),Se.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),Se.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let pn=Se.getParameter(U.UNPACK_ROW_LENGTH),vt=Se.getParameter(U.UNPACK_IMAGE_HEIGHT),qi=Se.getParameter(U.UNPACK_SKIP_PIXELS),kt=Se.getParameter(U.UNPACK_SKIP_ROWS),sr=Se.getParameter(U.UNPACK_SKIP_IMAGES);Se.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),Se.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),Se.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),Se.pixelStorei(U.UNPACK_SKIP_ROWS,ht),Se.pixelStorei(U.UNPACK_SKIP_IMAGES,gt);let Jn=M.isDataArrayTexture||M.isData3DTexture,bi=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let Et=Ye.get(M),cn=Ye.get(N),Ce=Ye.get(Et.__renderTarget),Xe=Ye.get(cn.__renderTarget);Se.bindFramebuffer(U.READ_FRAMEBUFFER,Ce.__webglFramebuffer),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Je=0;Je<Le;Je++)Jn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.get(M).__webglTexture,W,gt+Je),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ye.get(N).__webglTexture,Ae,Gt+Je)),U.blitFramebuffer($e,ht,$e+ze,ht+Re,He,yt,He+ze,yt+Re,U.DEPTH_BUFFER_BIT,U.NEAREST);Se.bindFramebuffer(U.READ_FRAMEBUFFER,null),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||Ye.has(M)){let Et=Ye.get(M),cn=Ye.get(N);Se.bindFramebuffer(U.READ_FRAMEBUFFER,I),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let Ce=0;Ce<Le;Ce++)Jn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.__webglTexture,W,gt+Ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,W),bi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cn.__webglTexture,Ae,Gt+Ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cn.__webglTexture,Ae),W!==0?U.blitFramebuffer($e,ht,$e+ze,ht+Re,He,yt,He+ze,yt+Re,U.COLOR_BUFFER_BIT,U.NEAREST):bi?U.copyTexSubImage3D(Ve,Ae,He,yt,Gt+Ce,$e,ht,ze,Re):U.copyTexSubImage2D(Ve,Ae,He,yt,$e,ht,ze,Re);Se.bindFramebuffer(U.READ_FRAMEBUFFER,null),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else bi?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Ve,Ae,He,yt,Gt,ze,Re,Le,It,tn,Ct.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ve,Ae,He,yt,Gt,ze,Re,Le,It,Ct.data):U.texSubImage3D(Ve,Ae,He,yt,Gt,ze,Re,Le,It,tn,Ct):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,He,yt,ze,Re,It,tn,Ct.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,He,yt,Ct.width,Ct.height,It,Ct.data):U.texSubImage2D(U.TEXTURE_2D,Ae,He,yt,ze,Re,It,tn,Ct);Se.pixelStorei(U.UNPACK_ROW_LENGTH,pn),Se.pixelStorei(U.UNPACK_IMAGE_HEIGHT,vt),Se.pixelStorei(U.UNPACK_SKIP_PIXELS,qi),Se.pixelStorei(U.UNPACK_SKIP_ROWS,kt),Se.pixelStorei(U.UNPACK_SKIP_IMAGES,sr),Ae===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Ve),Se.unbindTexture()},this.initRenderTarget=function(M){Ye.get(M).__webglFramebuffer===void 0&&tt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?tt.setTextureCube(M,0):M.isData3DTexture?tt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?tt.setTexture2DArray(M,0):tt.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){K=0,H=0,ce=null,Se.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}});function eb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function nb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(im),this.state=Nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ib(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Nt.DOLLY;break;case Is.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Nt.ROTATE}break;case Is.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(hd)}function sb(i){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function rb(i){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(i.preventDefault(),this.dispatchEvent(hd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(im))}function ab(i){this.enabled!==!1&&this._handleKeyDown(i)}function ob(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1){this.state=Nt.NONE;break}this._handleTouchStartRotate(i),this.state=Nt.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1){this.state=Nt.NONE;break}this._handleTouchStartPan(i),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Nt.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(hd)}function lb(i){switch(this._trackPointer(i),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Nt.NONE}}function cb(i){this.enabled!==!1&&i.preventDefault()}function hb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ub(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var tm,hd,im,ah,nm,Qv,an,Bn,Nt,cd,oh,sm=hi(()=>{ds();tm={type:"change"},hd={type:"start"},im={type:"end"},ah=new ts,nm=new qn,Qv=Math.cos(70*Us.DEG2RAD),an=new C,Bn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cd=1e-6,oh=class extends ho{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new mn,this._lastTargetPosition=new C,this._quat=new mn().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ps,this._sphericalDelta=new Ps,this._scale=1,this._panOffset=new C,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new C,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tb.bind(this),this._onPointerDown=eb.bind(this),this._onPointerUp=nb.bind(this),this._onContextMenu=cb.bind(this),this._onMouseWheel=rb.bind(this),this._onKeyDown=ab.bind(this),this._onTouchStart=ob.bind(this),this._onTouchMove=lb.bind(this),this._onMouseDown=ib.bind(this),this._onMouseMove=sb.bind(this),this._interceptControlDown=hb.bind(this),this._interceptControlUp=ub.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Nt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tm),this.update(),this.state=Nt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bn:n>Math.PI&&(n-=Bn),s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=an.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ah.origin.copy(this.object.position),ah.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ah.direction))<Qv?this.object.lookAt(this.target):(nm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ah.intersectPlane(nm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cd||this._lastTargetPosition.distanceToSquared(this.target)>cd?(this.dispatchEvent(tm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bn/60*this.autoRotateSpeed*e:Bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;an.copy(s).sub(this.target);let r=an.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function Jr(i){return new no({color:0,emissive:16777215,emissiveIntensity:i})}var lh,rm=hi(()=>{ds();lh=class extends Xn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ii;e.deleteAttribute("uv");let t=new as({side:gn}),n=new as,s=new oo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new we(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Yn(e,n,6),o=new Qt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new we(e,Jr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new we(e,Jr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new we(e,Jr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new we(e,Jr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new we(e,Jr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new we(e,Jr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var am={};ha(am,{World:()=>ud,addLights:()=>fs,dotTexture:()=>Oi,mat:()=>ut,tag:()=>dt});function ut(i,e={}){let t=new os({color:i,roughness:.55,metalness:0,clearcoat:.25,clearcoatRoughness:.5,...e});return t.userData.base={opacity:t.opacity,transparent:t.transparent,emissive:t.emissive.clone(),emissiveIntensity:t.emissiveIntensity,depthWrite:t.depthWrite},t}function dt(i,e){return i.traverse(t=>{(t.isMesh||t.isLine||t.isPoints)&&(t.userData.structure=e)}),i.userData.structure=e,i}function pb(i){for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0}function Oi(i=.35){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1-i,"rgba(255,255,255,0.95)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new Va(e);return s.colorSpace=Mn,s}function fs(i,{key:e=2.2,fill:t=.7,rim:n=1.2}={}){i.add(new so("#fff6ea","#20342f",t));let s=new Hr("#fff1dd",e);s.position.set(-6,9,8),i.add(s);let r=new Hr("#9fd7ff",n);r.position.set(8,3,-9),i.add(r)}var ud,db,fb,jr=hi(()=>{ds();sm();rm();Ei();ud=class{constructor({canvas:e,container:t,labelLayer:n,onPick:s,onHover:r}){if(this.canvas=e,this.container=t,this.labelLayer=n,this.onPick=s,this.onHover=r,this.scenes=new Map,this.active=null,this.paused=!1,this.simTime=0,this.speed=1,this.labelMode="all",this.selected=null,this.hovered=null,this.labelEls=new Map,this.extraLabels=new Map,this.tween=null,this.renderer=new ih({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:new URLSearchParams(location.search).has("capture")}),!this.renderer.getContext())throw new Error("WebGL context unavailable");this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.outputColorSpace=Mn,this.renderer.toneMapping=fo,this.renderer.toneMappingExposure=.92,this.renderer.localClippingEnabled=!0;let a=new Yr(this.renderer);this.envMap=a.fromScene(new lh,.04).texture,a.dispose(),this.camera=new Sn(38,1,.05,200),this.camera.position.set(-8,4,14),this.controls=new oh(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.screenSpacePanning=!0,this.controls.rotateSpeed=.75,this.controls.zoomSpeed=.9,this.raycaster=new co,this.raycaster.params.Line.threshold=.05,this.raycaster.params.Points.threshold=.05,this.pointer=new ue,this._bindPointer(),this._bindKeys(),this.lastT=performance.now(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this._loop=this._loop.bind(this),requestAnimationFrame(this._loop)}addScene(e,t){t.scene.environment=this.envMap,t.structures=new Map,t.scene.traverse(n=>{let s=n.userData.structure;s&&(n.isMesh||n.isLine||n.isPoints)&&(t.structures.has(s)||t.structures.set(s,[]),t.structures.get(s).push(n))}),t.pickables=[...t.structures.values()].flat().filter(n=>n.userData.pickable!==!1),this.scenes.set(e,t)}setScene(e,t){let n=this.scenes.get(e);if(!n)return;this.active&&this.active!==n&&this.active.onExit?.(),this.active=n,this.activeName=e,n.onEnter?.();let s=t??n.poses.default;this.setPose(s,0),this.controls.minDistance=n.limits?.min??1,this.controls.maxDistance=n.limits?.max??60,this._applyHighlight(),this._syncLabels()}setPose(e,t=1.1,n){let s={pos:new C(...e.pos),target:new C(...e.target)};if(!t){this.tween=null,this.camera.position.copy(s.pos),this.controls.target.copy(s.target),this.controls.update(),n?.();return}this.tween={from:{pos:this.camera.position.clone(),target:this.controls.target.clone()},to:s,t:0,duration:t,onDone:n,via:e.via?new C(...e.via):null}}flyPath(e,t,n){let s=r=>{if(r>=e.length){n?.();return}this.setPose(e[r],t[r]??1,()=>s(r+1))};s(0)}resize(){let e=this.container.getBoundingClientRect(),t=Math.max(1,e.width),n=Math.max(1,e.height);this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=t/n<.9?52:38,this.camera.updateProjectionMatrix(),this.size={w:t,h:n}}_bindPointer(){let e=null,t=n=>{let s=this.canvas.getBoundingClientRect();this.pointer.set((n.clientX-s.left)/s.width*2-1,-((n.clientY-s.top)/s.height)*2+1)};this.canvas.addEventListener("pointerdown",n=>{e={x:n.clientX,y:n.clientY,t:performance.now()}}),this.canvas.addEventListener("pointerup",n=>{if(!e)return;let s=Math.hypot(n.clientX-e.x,n.clientY-e.y),r=performance.now()-e.t<600;if(e=null,s>6||!r)return;t(n);let a=this.pickAt(this.pointer);this.onPick?.(a,{x:n.clientX,y:n.clientY})}),this.canvas.addEventListener("pointermove",n=>{if(n.pointerType!=="mouse"||n.buttons)return;t(n);let s=this.pickAt(this.pointer);s!==this.hovered&&(this.hovered=s,this.canvas.style.cursor=s?"pointer":"",this._applyHighlight(),this.onHover?.(s,{x:n.clientX,y:n.clientY}))}),this.canvas.addEventListener("pointerleave",()=>{this.hovered&&(this.hovered=null,this._applyHighlight(),this.onHover?.(null))})}pickAt(e){if(!this.active)return null;this.active.scene.updateMatrixWorld(),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(e,this.camera);let t=this.raycaster.intersectObjects(this.active.pickables.filter(s=>s.visible&&pb(s)),!1),n=null;for(let s of t){let r=s.object.userData.structure;if(r){if(n&&s.distance-n.distance>1.4)break;if(s.object.userData.shell){n||(n={id:r,distance:s.distance});continue}return r}}return n?.id??null}_bindKeys(){this.canvas.tabIndex=0,this.canvas.addEventListener("keydown",e=>{let t=e.shiftKey?.25:.08,n={ArrowLeft:[t,0],ArrowRight:[-t,0],ArrowUp:[0,t],ArrowDown:[0,-t]};n[e.key]?(this.orbit(...n[e.key]),e.preventDefault()):e.key==="+"||e.key==="="?(this.zoom(.85),e.preventDefault()):(e.key==="-"||e.key==="_")&&(this.zoom(1.18),e.preventDefault())})}orbit(e,t){let n=this.camera.position.clone().sub(this.controls.target),s=new Ps().setFromVector3(n);s.theta+=e,s.phi=Us.clamp(s.phi-t,.1,Math.PI-.1),n.setFromSpherical(s),this.camera.position.copy(this.controls.target).add(n),this.controls.update()}zoom(e){let t=this.camera.position.clone().sub(this.controls.target),n=Us.clamp(t.length()*e,this.controls.minDistance,this.controls.maxDistance);t.setLength(n),this.camera.position.copy(this.controls.target).add(t),this.controls.update()}select(e){this.selected=e,this._applyHighlight(),this._syncLabels()}setFocus(e){this.focus=e&&e.length?new Set(e):null,this._applyHighlight()}_applyHighlight(){let e=this.active;if(e)for(let[t,n]of e.structures)for(let s of n){let r=s.material;if(!r||!r.userData?.base||r.userData.manual)continue;let a=r.userData.base,o=t===this.selected,l=t===this.hovered,c=this.focus&&!this.focus.has(t)||this.selected&&!o&&e.dimOnSelect!==!1&&!this.focus;r.emissive&&(r.emissive.copy(o?db:l?fb:a.emissive),r.emissiveIntensity=o?.55:l?.35:a.emissiveIntensity);let h=c?Math.min(a.opacity,.18):a.opacity;r.opacity=h,r.transparent=a.transparent||h<1,r.depthWrite=c?!1:a.depthWrite,r.needsUpdate=!0}}registerLabel(e,t){this.labelEls.set(e,t)}registerExtraLabel(e,t,n,s,r){this.extraLabels.set(e,{el:t,anchor:n,scene:s,when:r})}stepOnce(e=.08){this.active?.update?.(e,this.simTime+=e,e)}setLabelMode(e){this.labelMode=e,this._syncLabels()}setLabelFilter(e){this.labelFilter=e?new Set(e):null,this._syncLabels()}setPinned(e){this.pinned=e,this._syncLabels()}setLabelsSuppressed(e){this.labelsSuppressed=e,this._syncLabels()}_syncLabels(){let e=this.active;for(let[t,n]of this.labelEls){let s=e?.anchors?.[t],r=!this.labelFilter||this.labelFilter.has(t)||t===this.selected||this.pinned?.has(t),a=s&&!this.labelsSuppressed&&(this.labelMode==="all"&&r||t===this.selected||this.pinned?.has(t));n.hidden=!a,n.classList.toggle("is-selected",t===this.selected)}}_placeLabels(){let e=this.active;if(!e)return;let{w:t,h:n}=this.size,s=new C,r=(a,o)=>{if(a.hidden)return;o.isObject3D?o.getWorldPosition(s):s.copy(o),s.project(this.camera);let l=s.z>1;a.style.transform=`translate(${(s.x+1)/2*t}px, ${(1-s.y)/2*n}px)`,a.style.visibility=l?"hidden":""};for(let[a,o]of this.labelEls){let l=e.anchors?.[a];l&&r(o,l)}for(let[,a]of this.extraLabels){let o=a.scene===this.activeName&&!this.extrasOff&&(!a.when||a.when());a.el.hidden===o&&(a.el.hidden=!o),o&&r(a.el,a.anchor)}}_loop(){requestAnimationFrame(this._loop);let e=performance.now(),t=Math.min((e-this.lastT)/1e3,.05);if(this.lastT=e,document.hidden)return;if(this.tween){let s=this.tween;s.t+=t/s.duration;let r=zo(Math.min(s.t,1));if(s.via){let a=s.from.pos,o=s.via,l=s.to.pos;this.camera.position.set((1-r)**2*a.x+2*(1-r)*r*o.x+r*r*l.x,(1-r)**2*a.y+2*(1-r)*r*o.y+r*r*l.y,(1-r)**2*a.z+2*(1-r)*r*o.z+r*r*l.z)}else this.camera.position.lerpVectors(s.from.pos,s.to.pos,r);this.controls.target.lerpVectors(s.from.target,s.to.target,r),s.t>=1&&(this.tween=null,s.onDone?.())}this.controls.enabled=!this.tween,this.controls.update(),this.paused||(this.simTime+=t*this.speed);let n=this.active;if(n){if(n.update?.(this.paused?0:t*this.speed,this.simTime,t),this.selected&&n.structures.has(this.selected)){let s=.45+.25*Math.sin(performance.now()/260);for(let r of n.structures.get(this.selected))r.material?.emissive&&!r.material.userData.manual&&(r.material.emissiveIntensity=s)}this.renderer.render(n.scene,this.camera),this._placeLabels()}}},db=new Ie("#ffb347"),fb=new Ie("#7fd6c2")});function kn(i,e,t,n=16,s=!0){let r=typeof t=="function"?t:d=>t[0]+(t[1]-t[0])*d,a=i.computeFrenetFrames(e,!1),o=[],l=[],c=[],h=[];for(let d=0;d<=e;d++){let f=d/e,m=i.getPointAt(f),x=a.normals[d],p=a.binormals[d],g=r(f);for(let y=0;y<=n;y++){let w=y/n*Math.PI*2,b=Math.cos(w)*x.x+Math.sin(w)*p.x,T=Math.cos(w)*x.y+Math.sin(w)*p.y,E=Math.cos(w)*x.z+Math.sin(w)*p.z;o.push(m.x+g*b,m.y+g*T,m.z+g*E),l.push(b,T,E),c.push(f,y/n)}}for(let d=0;d<e;d++)for(let f=0;f<n;f++){let m=d*(n+1)+f,x=m+n+1;h.push(m,x,m+1,x,x+1,m+1)}if(s)for(let d of[0,e]){let f=i.getPointAt(d/e),m=i.getTangentAt(d/e).multiplyScalar(d?1:-1),x=o.length/3;o.push(f.x,f.y,f.z),l.push(m.x,m.y,m.z),c.push(.5,.5);let p=d*(n+1);for(let g=0;g<n;g++)d?h.push(x,p+g,p+g+1):h.push(x,p+g+1,p+g)}let u=new Tt;return u.setAttribute("position",new _t(o,3)),u.setAttribute("normal",new _t(l,3)),u.setAttribute("uv",new _t(c,2)),u.setIndex(h),s&&u.computeVertexNormals(),u}function Qr(i,e){return i.quaternion.setFromUnitVectors(new C(0,1,0),e.clone().normalize()),i}function To(i,e=1,t=.03){let n=new Dt,s=new Kt({color:i,toneMapped:!1}),r=new we(new wn(t,t,1,10),s),a=new we(new gi(t*2.6,t*7,14),s);return n.add(r,a),n.userData.set=o=>{let l=Math.min(t*7,o*.5);r.scale.set(1,Math.max(.001,o-l),1),r.position.y=(o-l)/2,a.scale.set(1,l/(t*7),1),a.position.y=o-l/2},n.userData.set(e),n.userData.material=s,n}function dd(i,e,t,n=64,s=!1){let r=[];for(let c=0;c<=n;c++){let h=c/n*Math.PI*2;r.push(new C(Math.cos(h)*i,Math.sin(h)*e,0))}let a=new Tt().setFromPoints(r),o=s?new Li({color:t,dashSize:.05,gapSize:.035,toneMapped:!1,transparent:!0}):new ns({color:t,toneMapped:!1,transparent:!0}),l=new is(a,o);return s&&l.computeLineDistances(),l}var me,on,ch=hi(()=>{ds();me=(i,e,t)=>new C(i,e,t),on=i=>new En(i.map(e=>e.isVector3?e:me(...e)),!1,"centripetal")});var om={};ha(om,{createEarScene:()=>mb});function mb(){let i=new Xn;fs(i);let e={},t={freq:2500,track:!1,areas:!1,lever:!1,reflex:!1,step:0,waveOn:!0,reduced:!1},n=me(-1,.4,0),s=me(-.34,0,-.94).normalize(),r=me(0,1,0),a=me(-.94,0,.34).normalize(),o=new En([[-.9,1.7],[-.25,2.95],[.75,3.25],[1.65,2.6],[2.05,1.35],[1.95,0],[1.55,-1.3],[1.05,-2.25],[.3,-2.95],[-.45,-2.65],[-.85,-1.75],[-1.25,-.6],[-1.15,.6]].map(([Ce,Xe])=>me(Ce,Xe,0)),!0,"centripetal"),l=me(-.15,-.35,0),c=(Ce,Xe,Je)=>n.clone().addScaledVector(s,Ce).addScaledVector(r,Xe).addScaledVector(a,Je);function h(Ce,Xe){let Je=Vs(-1.5,-2.4,Xe.y),Lt=Vs(-.55,-1.05,Xe.x)*(1-Vs(1.2,2.4,Xe.y)),Nn=(1-Je)*(1-Lt),Hn=.22+.28*jt(Xe.x/2,0,1);return Hn+=-1.05*Math.pow(Math.max(0,1-(Ce/.44)**2),1.2),Hn+=(1-Je)*.3*Math.exp(-(((Ce-.64)/.09)**2)),Hn+=(1-Je)*-.12*Math.exp(-(((Ce-.81)/.05)**2)),Hn+=Nn*.32*Vs(.84,.97,Ce),Hn+=Je*.12*Vs(.4,.9,Ce),{d:Hn,curl:Nn}}function u(Ce,Xe,Je){let Nn=[],aa=[];for(let li=0;li<=120;li++){let jn=o.getPointAt(li%120/120);for(let Mi=0;Mi<=Je;Mi++){let ci=Ce+(Xe-Ce)*(Mi/Je),{d:ph,curl:oa}=h(ci,jn),la=l.x+(jn.x-l.x)*ci,ca=l.y+(jn.y-l.y)*ci,Ht=ph;if(ci>.9){let Do=(ci-.9)/.1,zs=Do*Math.PI*.85*oa,rr=me(jn.x-l.x,jn.y-l.y,0).normalize();la-=rr.x*.16*(1-Math.cos(zs))*.7,ca-=rr.y*.16*(1-Math.cos(zs))*.7,Ht+=.16*Math.sin(zs)}let Qn=c(la,ca,Ht);Nn.push(Qn.x,Qn.y,Qn.z)}}for(let li=0;li<120;li++)for(let jn=0;jn<Je;jn++){let Mi=li*(Je+1)+jn,ci=(li+1)*(Je+1)+jn;aa.push(Mi,ci,Mi+1,ci,ci+1,Mi+1)}let Hn=new Tt;return Hn.setAttribute("position",new _t(Nn,3)),Hn.setIndex(aa),Hn.computeVertexNormals(),Hn}let d=ut(en.skin,{roughness:.58,sheen:.35,sheenColor:new Ie("#ffb59a"),sheenRoughness:.6,clearcoat:.12,clearcoatRoughness:.6,side:Pt,envMapIntensity:.55}),f=dt(new we(u(.43,1,34),d),"pinna"),m=ut(en.concha,{roughness:.6,sheen:.3,sheenColor:new Ie("#ffb59a"),side:Pt,emissive:new Ie("#000000"),envMapIntensity:.5}),x=dt(new we(u(.08,.43,14),m),"concha"),p=dt(new we(new Yt(.32,24,16),d),"pinna");p.scale.set(.55,.75,.45),p.position.copy(c(-1.15,-.45,.3)),i.add(f,x,p),e.pinna=c(1.4,2.1,.6),e.concha=c(.25,-.75,.05);let g=c(l.x,l.y,-.85),y=me(2.95,-.15,.05),w=on([g,me(.7,.12,-.12),me(1.6,.04,.04),me(2.45,-.1,.06),y]),b=w.getLength(),T=ut(en.canal,{transparent:!0,opacity:.42,depthWrite:!1,side:Pt,roughness:.5,emissive:new Ie("#000000"),envMapIntensity:.4}),E=dt(new we(new Fn(w,90,.36,32,!1),T),"ear-canal");E.renderOrder=2,E.userData.shell=!0,i.add(E),e["ear-canal"]=w.getPointAt(.45).add(me(0,.45,.15));let _=me(.77,.64,0).normalize(),S=me(-.64,.77,0).normalize(),F=new Dt;F.position.copy(y),Qr(F,_);let L=[];for(let Ce=0;Ce<=14;Ce++){let Xe=.44*(1-Ce/14);L.push(new ue(Math.max(Xe,.001),.15*Math.pow(1-Xe/.44,.7)))}let D=ut(en.tm,{transparent:!0,opacity:.88,side:Pt,roughness:.35,clearcoat:.8,sheen:.4,sheenColor:new Ie("#ffffff")}),O=dt(new we(new js(L,40),D),"tympanic-membrane"),G=dt(new we(new _i(.44,.035,10,48),ut("#e9cdb9")),"tympanic-membrane");G.rotation.x=Math.PI/2,F.add(O,G),i.add(F),e["tympanic-membrane"]=y.clone().addScaledVector(S,-.55).add(me(-.1,0,.3));let I=dt(new we(new Yt(1,32,24),ut(en.cavity,{transparent:!0,opacity:.045,depthWrite:!1,side:Pt})),"middle-cavity");I.scale.set(.85,1.45,.95),I.position.set(3.45,.35,0),I.userData.pickable=!1,I.traverse(Ce=>{Ce.userData.pickable=!1}),i.add(I);let q=()=>ut(en.bone,{roughness:.42,clearcoat:.6,clearcoatRoughness:.3}),K=y.clone().addScaledVector(_,.15),H=y.clone().addScaledVector(S,.38).addScaledVector(_,.04),ce=me(2.98,.86,.04),Y=me(3.12,.84,-.02),re=new Dt;re.position.copy(Y),i.add(re);let X=Ce=>Ce.clone().sub(Y),be=new Dt,Oe=q(),j=new we(new Yt(.145,24,18),Oe);j.scale.set(1,1.25,.9),j.position.copy(X(ce));let xe=new we(kn(on([X(ce),X(ce.clone().lerp(H,.5).add(me(.03,0,0))),X(H)]),16,[.08,.055],12),Oe),de=new we(kn(on([X(H),X(H.clone().lerp(K,.5).addScaledVector(_,.02)),X(K)]),18,[.05,.03],12),Oe),Ne=new we(new gi(.04,.12,10),Oe);Ne.position.copy(X(H.clone().addScaledVector(_,-.04))),Qr(Ne,_.clone().negate()),be.add(j,xe,de,Ne),dt(be,"malleus"),re.add(be),e.malleus=ce.clone().add(me(-.35,.35,.2));let ye=me(3.27,.82,-.12),ke=me(3.42,.04,-.08),pt=new Dt,We=q(),et=new we(new Yt(.16,24,18),We);et.scale.set(1.05,1.1,.85),et.position.copy(X(ye));let st=new we(kn(on([X(ye),X(me(3.36,.9,-.42)),X(me(3.42,.93,-.62))]),12,[.09,.02],10),We),ae=new we(kn(on([X(ye),X(me(3.36,.5,-.12)),X(me(3.35,.16,-.1)),X(ke)]),20,[.075,.04],12),We),_e=new we(new Yt(.05,14,10),We);_e.position.copy(X(ke)),pt.add(et,st,ae,_e),dt(pt,"incus"),re.add(pt),e.incus=ye.clone().add(me(.25,.42,-.35));let ge=new Dt,Pe=q(),Te=me(3.5,.02,-.07),Qe=me(3.98,-.02,-.07),qe=new we(new Yt(.055,14,10),Pe);qe.position.copy(Te);for(let Ce of[.17,-.17]){let Xe=new we(kn(on([Te,me(3.72,.03+(Ce>0?.02:-.02),-.07+Ce*.8),me(3.95,-.02,-.07+Ce)]),16,[.028,.022],8),Pe);ge.add(Xe)}let at=new we(new wn(1,1,.04,36),Pe);at.scale.set(.2,1,.078),at.rotation.z=Math.PI/2,at.rotation.y=Math.PI/2,at.position.copy(Qe),ge.add(qe,at),dt(ge,"stapes"),i.add(ge),e.stapes=Te.clone().add(me(.05,-.42,.45));let rt=dt(new we(new _i(1,.3,12,44),ut("#7cc7b2",{emissive:new Ie("#0d3f34"),emissiveIntensity:.5})),"oval-window");rt.scale.set(.27,.13,.2),rt.rotation.y=Math.PI/2,rt.position.set(4.03,-.02,-.07),i.add(rt);let mt=dt(new we(new kr(.85,1.55,40),new Kt({transparent:!0,opacity:0,depthWrite:!1,side:Pt})),"oval-window");mt.scale.set(.24,.12,1),mt.rotation.y=Math.PI/2,mt.position.set(4.04,-.02,-.07),i.add(mt),e["oval-window"]=me(4.15,.4,.3);let U=me(4,-.62,-.12),Mt=new Dt;Mt.position.copy(U),Qr(Mt,me(-.85,-.3,.1));let lt=dt(new we(new Yt(.15,24,12,0,Math.PI*2,0,Math.PI/2),ut("#a8d9e8",{transparent:!0,opacity:.85,side:Pt,clearcoat:.8})),"round-window");lt.scale.set(1,.35,1);let St=dt(new we(new _i(.15,.022,8,32),ut("#e5d6bd")),"round-window");St.rotation.x=Math.PI/2,Mt.add(lt,St),i.add(Mt),e["round-window"]=U.clone().add(me(-.15,-.35,.35));let Se=ut(en.muscle,{roughness:.6,sheen:.4,sheenColor:new Ie("#ff9d8f")}),Ot=on([me(3.62,.25,-.85),me(3.6,.12,-.5),me(3.55,.04,-.14)]),Ye=dt(new we(kn(Ot,16,Ce=>.07*Math.sin(Math.PI*(.15+.85*Ce))+.012,10),Se),"stapedius");i.add(Ye),e.stapedius=me(3.7,.35,-.95);let tt=dt(new we(kn(on([me(4.15,.78,.85),me(3.65,.74,.52),me(3.2,.66,.24),me(2.99,.6,.08)]),24,Ce=>.065*Math.sin(Math.PI*(.1+.8*(1-Ce)))+.012,10),ut(en.muscle,{roughness:.6})),"tensor-tympani");i.add(tt),e["tensor-tympani"]=me(4,1.05,.85);let A=on([me(3.25,-.75,.45),me(3.6,-1.5,1.3),me(4.05,-2.25,2.3),me(4.4,-2.85,3.2)]),v=dt(new we(kn(A,40,[.12,.24],16),ut(en.tube,{transparent:!0,opacity:.75,roughness:.55})),"eustachian-tube");i.add(v),e["eustachian-tube"]=A.getPointAt(.6).add(me(.3,0,.2));let B=ut(en.labyrinth,{transparent:!0,opacity:.62,roughness:.4,clearcoat:.5,emissive:new Ie("#000000")}),fe=dt(new we(new Yt(.24,24,18),B),"cochlea");fe.scale.set(1,.85,1.1),fe.position.set(4.42,.05,-.15),fe.userData.shell=!0,i.add(fe);let P=ut(en.labyrinth,{transparent:!0,opacity:.7,roughness:.4,clearcoat:.5}),Z=new Dt,ne=[{pos:[4.72,.62,-.55],rot:[Math.PI/2,0,.2],r:.36},{pos:[4.62,.95,-.2],rot:[0,.75,0],r:.4},{pos:[4.88,.58,-.8],rot:[0,-.8,0],r:.38}];for(let Ce of ne){let Xe=new we(new _i(Ce.r,.055,12,48,Math.PI*1.55),P);Xe.position.set(...Ce.pos),Xe.rotation.set(...Ce.rot),Z.add(Xe)}dt(Z,"semicircular-canals"),i.add(Z),e["semicircular-canals"]=me(4.95,1.5,-.6);let k=me(4.42,-.42,-.1),z=me(5,-.55,.08),le=k.clone().sub(z).normalize(),R=me(-.35,.25,.9);R.addScaledVector(le,-R.dot(le)).normalize();let ie=new C().crossVectors(R,le).normalize(),ee=k.distanceTo(z),J=2.6,te=.5,oe=(Ce,Xe=new C)=>{let Je=2*Math.PI*J*Ce,Lt=ee*(1-.72*Ce);return Xe.copy(z).addScaledVector(le,Lt*Math.cos(Je)).addScaledVector(ie,Lt*Math.sin(Je)).addScaledVector(R,te*Ce)},pe=[];for(let Ce=0;Ce<=160;Ce++)pe.push(oe(Ce/160));let Ee=new En(pe),he=ut(en.labyrinth,{transparent:!0,opacity:.55,roughness:.35,clearcoat:.6,emissive:new Ie("#000000"),side:Pt,depthWrite:!1}),Ue=dt(new we(kn(Ee,220,[.18,.07],20),he),"cochlea");Ue.renderOrder=3,Ue.userData.shell=!0,i.add(Ue);let Ke=[];for(let Ce=0;Ce<=200;Ce++)Ke.push(oe(Ce/200*.97));let Me=new we(new Fn(new En(Ke),220,.022,6,!1),new Kt({color:"#f2a65a",toneMapped:!1}));Me.userData.pickable=!1,i.add(Me),e.cochlea=z.clone().addScaledVector(R,.6).add(me(.25,.2,.2));let ct=new Dt,Rt=ut(en.nerve,{roughness:.45,clearcoat:.3,emissive:new Ie("#000000")}),Zt=z.clone().addScaledVector(R,.25),De=me(7.9,.45,-.9);for(let Ce=0;Ce<7;Ce++){let Xe=Ce/7*Math.PI*2,Je=me(0,Math.cos(Xe)*.08,Math.sin(Xe)*.08),Lt=on([Zt.clone().add(Je.clone().multiplyScalar(.3)),Zt.clone().lerp(De,.3).add(me(0,.15,-.2)).add(Je),Zt.clone().lerp(De,.65).add(me(0,.25,-.15)).add(Je.clone().multiplyScalar(1.3)),De.clone().add(Je.clone().multiplyScalar(1.5))]);ct.add(new we(new Fn(Lt,40,.045,8,!1),Rt))}ct.add(new we(kn(on([me(4.6,.25,-.3),me(5.6,.5,-.5),me(6.6,.55,-.7)]),24,[.05,.09],10),Rt)),dt(ct,"auditory-nerve"),i.add(ct),e["auditory-nerve"]=Zt.clone().lerp(De,.7).add(me(0,.55,0));let Bt=Oi(.4),dn=1500,zn=260,ia=620,fn=dn+zn+ia,Vi=new Float32Array(fn*3),gs=new Float32Array(fn),_s=new Uint8Array(fn),Gi=new Float32Array(fn),oi=new Float32Array(fn*2),ln=0,An=gb(7);for(let Ce=0;Ce<dn;Ce++,ln++){let Xe=-7.6+An()*5.1,Je=-2.4+An()*5.2,Lt=-2+An()*4;Vi.set([Xe,Je,Lt],ln*3),gs[ln]=Xe,_s[ln]=0}let Lo=g.clone().add(me(-2.2,.05,.4));for(let Ce=0;Ce<zn;Ce++,ln++){let Xe=An(),Je=Lo.clone().lerp(g,Xe),Lt=(1-.7*Xe)*Math.sqrt(An()),Nn=An()*Math.PI*2;Je.y+=Math.cos(Nn)*Lt,Je.z+=Math.sin(Nn)*Lt,Vi.set([Je.x,Je.y,Je.z],ln*3),gs[ln]=Je.x,_s[ln]=1}let sa=w.computeFrenetFrames(200,!1),Bs=[];for(let Ce=0;Ce<=200;Ce++)Bs.push({p:w.getPointAt(Ce/200),t:w.getTangentAt(Ce/200),n:sa.normals[Ce],b:sa.binormals[Ce]});let ra=g.x,xn=-1;for(let Ce=0;Ce<ia;Ce++,ln++){let Xe=.02+An()*.95,Je=.29*Math.sqrt(An()),Lt=An()*Math.PI*2;Gi[ln]=Xe,oi[ln*2]=Math.cos(Lt)*Je,oi[ln*2+1]=Math.sin(Lt)*Je,gs[ln]=ra+Xe*b,_s[ln]=2,xn<0&&Xe>.42&&Xe<.5&&Je<.08&&(xn=ln)}xn<0&&(xn=dn+zn+10,Gi[xn]=.45,oi[xn*2]=0,oi[xn*2+1]=0,gs[xn]=ra+.45*b);let Wi=new Float32Array(fn*3),ks=new Float32Array(fn*3),M=new Float32Array(fn),N=new Tt;N.setAttribute("position",new zt(Wi,3)),N.setAttribute("color",new zt(ks,3)),N.setAttribute("size",new zt(M,1));let Q=new ri({uniforms:{map:{value:Bt},scale:{value:1},dim:{value:1}},vertexShader:`attribute float size; varying vec3 vColor; uniform float scale;
      void main(){ vColor = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale * (60.0 / -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; uniform float dim; varying vec3 vColor;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); if (t.a < 0.05) discard; gl_FragColor = vec4(vColor * dim, t.a * 0.95); }`,vertexColors:!0,transparent:!0,depthWrite:!1}),V=new ss(N,Q);V.frustumCulled=!1,V.renderOrder=4,i.add(V);let W=new we(new kr(.07,.095,32),new Kt({color:"#ffffff",toneMapped:!1,side:Pt,transparent:!0,depthTest:!1}));W.renderOrder=10;let Ae=new we(new Yt(.045,16,12),new Kt({color:"#ffffff",toneMapped:!1,depthTest:!1}));Ae.renderOrder=10;let ze=new we(new Ii(.012,.22,.012),new Kt({color:"#ffffff",toneMapped:!1,transparent:!0,opacity:.55,depthTest:!1}));ze.renderOrder=10,i.add(W,Ae,ze);let Re=new Dt;i.add(Re);let Le=new Dt,$e=dd(.44,.44,"#ffd36e",64);$e.position.copy(y.clone().addScaledVector(_,.02)),$e.quaternion.setFromUnitVectors(me(0,0,1),_);let ht=new we(new Ur(.44,48),new Kt({color:"#ffd36e",transparent:!0,opacity:.22,side:Pt,toneMapped:!1,depthWrite:!1}));ht.position.copy($e.position),ht.quaternion.copy($e.quaternion);let gt=dd(.2,.078,"#ffd36e",48);gt.position.set(4.07,-.02,-.07),gt.rotation.y=Math.PI/2,gt.rotation.z=0;let He=new we(new Ur(1,40),ht.material);He.scale.set(.2,.078,1),He.position.copy(gt.position),He.rotation.copy(gt.rotation);let yt=To("#ffd36e",.7,.025);yt.position.copy(y.clone().addScaledVector(_,-.75)),Qr(yt,_);let Gt=To("#ffd36e",.7,.025);Gt.position.set(3.35,-.02,-.55),Qr(Gt,me(1,0,0)),Le.add($e,ht,gt,He,yt,Gt),Le.visible=!1,Re.add(Le),e["_area-tm"]=y.clone().addScaledVector(S,.62).add(me(-.25,0,0)),e["_area-fp"]=me(4.1,.3,.12);let Ct=new Dt,It=new is(new Tt().setFromPoints([Y,K]),new Li({color:"#7fe3c8",dashSize:.06,gapSize:.04,toneMapped:!1,depthTest:!1})),tn=new is(new Tt().setFromPoints([Y,ke]),new Li({color:"#ff9e7a",dashSize:.06,gapSize:.04,toneMapped:!1,depthTest:!1}));It.computeLineDistances(),tn.computeLineDistances();let Ve=new we(new gi(.09,.16,3),new Kt({color:"#ffffff",toneMapped:!1,depthTest:!1}));Ve.position.copy(Y).add(me(0,.15,.25)),Ve.rotation.x=Math.PI,It.renderOrder=tn.renderOrder=Ve.renderOrder=11,Ct.add(It,tn,Ve),Ct.visible=!1,re.add(Ct),Ct.position.copy(Y.clone().negate()),e["_lever-long"]=Y.clone().lerp(K,.55).add(me(-.45,0,.1)),e["_lever-short"]=Y.clone().lerp(ke,.6).add(me(.35,0,.3));let pn=Oi(.85),vt=new Ks(new ws({map:pn,color:"#ffd27a",blending:Di,depthTest:!1,toneMapped:!1,transparent:!0}));vt.scale.setScalar(.55),vt.visible=!1,vt.renderOrder=12,i.add(vt);let qi={"outer-ear":[me(-6.5,.6,.9),Lo,g,w.getPointAt(.5),y],"middle-ear":[y,K,H,ce,ye,me(3.36,.45,-.12),ke,Te,Qe,me(4.05,-.02,-.07)],cochlea:[me(4.05,-.02,-.07),me(4.3,-.2,-.08),...pe.filter((Ce,Xe)=>Xe%8===0)],"auditory-nerve":[oe(.4),Zt,Zt.clone().lerp(De,.5).add(me(0,.2,-.17)),De]},kt=null;function sr(Ce,Xe,Je){let Lt=qi[Ce];if(!Lt){Je?.();return}kt={curve:new En(Lt),t:0,duration:Xe,onDone:Je},vt.visible=!0}let Jn=new C,bi=0;function Et(Ce){let Xe=t.reduced?.35:1;t.waveOn&&(bi+=Ce*Xe);let Je=t.freq,Lt=2.2*Math.pow(1e3/Je,.35),Nn=2*Math.PI/Lt,aa=2*Math.PI*.55,Hn=.2*Math.min(1,Lt/2.2),li=aa*bi,jn=t.track?.45:1;Q.uniforms.dim.value=jn;for(let Ht=0;Ht<fn;Ht++){let Qn=Nn*gs[Ht]-li,Do=Hn*Math.sin(Qn),zs=-Math.cos(Qn),rr,mh,gh;if(_s[Ht]===2){let Md=jt(Gi[Ht]+Do/b,0,1)*200,yh=Math.floor(Md),Um=Math.min(200,yh+1),vh=Md-yh,ei=Bs[yh],bh=Bs[Um],Mh=oi[Ht*2],Sh=oi[Ht*2+1];rr=ei.p.x+(bh.p.x-ei.p.x)*vh+ei.n.x*Mh+ei.b.x*Sh,mh=ei.p.y+(bh.p.y-ei.p.y)*vh+ei.n.y*Mh+ei.b.y*Sh,gh=ei.p.z+(bh.p.z-ei.p.z)*vh+ei.n.z*Mh+ei.b.z*Sh}else rr=Vi[Ht*3]+Do,mh=Vi[Ht*3+1],gh=Vi[Ht*3+2];Wi[Ht*3]=rr,Wi[Ht*3+1]=mh,Wi[Ht*3+2]=gh;let _h=zs>=0?en.warm:en.cool,xh=Math.abs(zs);ks[Ht*3]=en.neutral.r+(_h.r-en.neutral.r)*xh,ks[Ht*3+1]=en.neutral.g+(_h.g-en.neutral.g)*xh,ks[Ht*3+2]=en.neutral.b+(_h.b-en.neutral.b)*xh,M[Ht]=(_s[Ht]===2?.9:1.15)*(.85+.35*zs)}N.attributes.position.needsUpdate=!0,N.attributes.color.needsUpdate=!0,N.attributes.size.needsUpdate=!0;let Mi=t.track;if(W.visible=Ae.visible=ze.visible=Mi,Mi){Jn.set(Wi[xn*3],Wi[xn*3+1],Wi[xn*3+2]),Ae.position.copy(Jn),W.position.copy(Jn),W.quaternion.copy(i.userData.cameraQuat||W.quaternion);let Ht=Gi[xn],Qn=Bs[Math.round(Ht*200)];ze.position.copy(Qn.p).addScaledVector(Qn.n,oi[xn*2]).addScaledVector(Qn.b,oi[xn*2+1])}let ci=-Math.cos(Nn*(ra+b)-li),ph=t.reflex?.45:1,oa=.075*ci*ph*(t.waveOn?1:0);O.scale.y=1+.9*oa/.075*.45,re.rotation.z=-oa*.55,re.rotation.x=0;let la=oa*.55*.62;ge.position.x=la,lt.scale.y=.35-3.2*la,Ye.scale.setScalar(1),Ye.material.emissive.set(t.reflex?"#5a0f08":"#000000"),Ye.material.emissiveIntensity=t.reflex?.6+.4*Math.sin(performance.now()/200):0;let ca=da(Je);if(T.emissive.set("#ff9c5a"),T.emissiveIntensity=t.glow?jt(ca.canal/12,0,1)*.9:0,m.emissive.set("#ff9c5a"),m.emissiveIntensity=t.glow?jt(ca.concha/10,0,1)*.7:0,T.userData.manual=m.userData.manual=!!t.glow,Le.visible=t.areas,Ct.visible=t.lever,kt){kt.t+=Ce/kt.duration;let Ht=Math.min(1,kt.t);if(vt.position.copy(kt.curve.getPointAt(Ht)),vt.scale.setScalar(.45+.15*Math.sin(performance.now()/120)),kt.t>=1){let Qn=kt.onDone;kt=null,vt.visible=!1,Qn?.()}}}return{scene:i,anchors:e,poses:{default:{pos:[-9.6,4.6,12.8],target:[2.3,.1,.2]},intro:{pos:[-9.6,4.6,12.8],target:[2.3,.1,.2]},"outer-ear":{pos:[-7.4,2.6,7.6],target:[.4,.1,0]},"middle-ear":{pos:[1.75,1.85,4.6],target:[3.4,.22,-.08]},"middle-areas":{pos:[1,-1.75,3.15],target:[3.4,0,-.05]},"cochlea-approach":{pos:[3.9,.9,3.5],target:[5.25,-.45,.1]},"nerve-approach":{pos:[5.2,2.4,4.2],target:[6.2,.2,-.2]},"canal-fly-1":{pos:[-3.2,.25,1.6],target:[.4,0,-.1]},"canal-fly-2":{pos:[.6,.1,-.05],target:[2.9,-.12,.05]},"tm-front":{pos:[2.05,.05,.75],target:[2.95,-.1,.05]}},state:t,update:Et,runPulse:sr,limits:{min:.6,max:30},stepFocus:{"middle-ear":[null,["tympanic-membrane"],["malleus"],["incus"],["stapes"],["oval-window","round-window"]]},setCameraQuat(Ce){i.userData.cameraQuat=Ce}}}function gb(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var en,lm=hi(()=>{ds();jr();ch();Ei();en={skin:"#d99272",concha:"#c97c62",canal:"#e08f74",tm:"#efe2d3",bone:"#f3e9d4",labyrinth:"#eadcc3",nerve:"#f1c55a",muscle:"#c4544a",tube:"#d99486",cavity:"#9fcdc2",warm:new Ie("#ffae5e"),cool:new Ie("#6fb4dc"),neutral:new Ie("#d9e4df")}});var cm={};ha(cm,{createCochleaScene:()=>vb});function vb(){let i=new Xn;fs(i,{key:2,fill:.8,rim:1.4});let e={},t={u:0,uTarget:0,freq:1e3,prevFreq:null,loud:!1,active:!0,fixedPlace:null,waveOn:!0,reduced:!1,drive:1},n=P=>_b*(1-.7*P),s=P=>n(P)*2*Math.PI*fd,r=0;for(let P=0;P<Ut;P++)r+=s((P+.5)/Ut)/Ut;let a=[],o=[],l=[],c=[],h=[];for(let P=0;P<=Ut;P++)a.push(new C),o.push(new C),l.push(new C),c.push(0),h.push(0);let u=new C(0,1,0);function d(P){let Z=Eh(1,3,P),ne=0,k=0;for(let z=0;z<=Ut;z++){let le=z/Ut,R=(1-P)*2*Math.PI*fd*le;if(z>0){let ie=(z-.5)/Ut,ee=(1-P)*2*Math.PI*fd*ie;ne+=Math.cos(ee)*s(ie)/Ut,k+=Math.sin(ee)*s(ie)/Ut}a[z].set(ne,xb*le*(1-P),k),o[z].set(Math.cos(R),0,Math.sin(R)),l[z].set(Math.sin(R),0,-Math.cos(R)),c[z]=(.5-.17*le)*Z,h[z]=(.46-.14*le)*Z}}let f=(P,Z,ne,k)=>k.copy(a[P]).addScaledVector(l[P],Z).addScaledVector(u,ne),m=[];function x({i0:P=0,i1:Z=Ut,K:ne,fn:k,material:z,structure:le,closed:R=!1,colors:ie=!1}){let ee=Z-P+1,J=new Float32Array(ee*ne*3),te=[];for(let he=0;he<ee-1;he++)for(let Ue=0;Ue<ne-(R?0:1);Ue++){let Ke=(Ue+1)%ne,Me=he*ne+Ue,ct=(he+1)*ne+Ue,Rt=he*ne+Ke,Zt=(he+1)*ne+Ke;te.push(Me,ct,Rt,ct,Zt,Rt)}let oe=new Tt;oe.setAttribute("position",new zt(J,3)),ie&&oe.setAttribute("color",new zt(new Float32Array(ee*ne*3),3)),oe.setIndex(te);let pe=new we(oe,z);pe.frustumCulled=!1,le&&dt(pe,le);let Ee={mesh:pe,i0:P,i1:Z,K:ne,fn:k,pos:J};return m.push(Ee),i.add(pe),Ee}let p=new C;function g(P,Z){let ne=0;for(let k=P.i0;k<=P.i1;k++)for(let z=0;z<P.K;z++){let[le,R]=P.fn(k,z,Z);f(k,le,R,p),P.pos[ne++]=p.x,P.pos[ne++]=p.y,P.pos[ne++]=p.z}P.mesh.geometry.attributes.position.needsUpdate=!0,P.mesh.geometry.computeVertexNormals(),P.mesh.geometry.computeBoundingSphere()}let y=P=>{let Z=P/Ut;return c[P]*(.9-1.85*(.17+.52*Z))},w=Math.round(Ut*yb),b=12,T=ut("#5aa7d6",{transparent:!0,opacity:.3,side:Pt,depthWrite:!1,roughness:.2,clearcoat:.6}),E=ut("#8f86d8",{transparent:!0,opacity:.3,side:Pt,depthWrite:!1,roughness:.2,clearcoat:.6}),_=ut("#4fc4a2",{transparent:!0,opacity:.38,side:Pt,depthWrite:!1,roughness:.3}),S=new os({color:"#efe3cc",transparent:!0,opacity:.08,side:Pt,depthWrite:!1,roughness:.4}),F=ut("#eadcc0",{side:Pt,roughness:.5}),L=ut("#bfe7f3",{transparent:!0,opacity:.5,side:Pt,depthWrite:!1}),D=ut("#f0a456",{side:Pt,roughness:.45,clearcoat:.4,vertexColors:!0});D.userData.base.emissive=new Ie("#000000");let O=x({K:32,closed:!0,material:S,fn:(P,Z)=>{let ne=Z/32*Math.PI*2;return[c[P]*Math.cos(ne),h[P]*Math.sin(ne)]}});O.mesh.renderOrder=1;let G=x({K:b,material:T,structure:"scala-vestibuli",fn:(P,Z)=>{let ne=Z/(b-1)*Math.PI*.62+.02;return[c[P]*Math.cos(ne),h[P]*Math.sin(ne)]}}),I=x({K:b,material:E,structure:"scala-tympani",fn:(P,Z)=>{let ne=-(Z/(b-1))*Math.PI*.62-.02;return[c[P]*Math.cos(ne),h[P]*Math.sin(ne)]}});G.mesh.renderOrder=I.mesh.renderOrder=2;let q=x({i1:w,K:2,material:F,structure:"spiral-lamina",fn:(P,Z)=>[Z===0?-c[P]*.98:y(P),0]}),K=11,H=x({i1:w,K,material:D,structure:"basilar-membrane",colors:!0,fn:(P,Z,ne)=>{let k=y(P),z=c[P]*.93,le=Z/(K-1),R=ne?ne[P]*Math.sin(Math.PI*le):0;return[k+(z-k)*le,R]}}),ce=P=>[c[P]*Math.cos(.68),h[P]*Math.sin(.68)],Y=x({i1:w,K:2,material:L,structure:"reissner-membrane",fn:(P,Z)=>Z===0?[y(P)-c[P]*.06,.02]:ce(P)});Y.mesh.userData.pickable=!1;let re=x({i1:w,K:6,material:_,structure:"scala-media",fn:(P,Z)=>{if(Z<2){let[k,z]=Z===0?[y(P)-c[P]*.04,.03]:ce(P);return[k-.01,z-.01]}let ne=.68*(1-(Z-2)/3);return[c[P]*Math.cos(ne)*.985,h[P]*Math.sin(ne)*.985+.01]}});re.mesh.renderOrder=3;let X=P=>{let Z=new Tt;Z.setAttribute("position",new zt(new Float32Array(78),3));let ne=[];for(let k=1;k<25;k++)ne.push(0,k,k+1);return Z.setIndex(ne),Z.userData.half=P,Z},be=dt(new we(X(1),T),"scala-vestibuli"),Oe=dt(new we(X(-1),E),"scala-tympani");be.frustumCulled=Oe.frustumCulled=!1,i.add(be,Oe);let j=dt(new we(new _i(1,.22,10,36),ut("#7cc7b2",{emissive:new Ie("#0d3f34"),emissiveIntensity:.6})),"oval-window"),xe=dt(new we(new wn(1,1,1,28),ut("#f3e9d4",{roughness:.4,clearcoat:.6})),"stapes"),de=dt(new we(new Yt(1,24,12,0,Math.PI*2,0,Math.PI/2),ut("#a8d9e8",{transparent:!0,opacity:.85,side:Pt})),"round-window");i.add(j,xe,de);let Ne=dt(new we(new Yt(1,20,14),ut("#ffd27a",{transparent:!0,opacity:.35,emissive:new Ie("#7a5200"),emissiveIntensity:.5,depthWrite:!1})),"helicotrema");i.add(Ne);let ye=new we(X(0),S);ye.frustumCulled=!1,i.add(ye);function ke(P,Z,ne){let k=P.geometry.attributes.position.array,z=c[Z],le=h[Z];f(Z,0,0,p),k.set([p.x,p.y,p.z],0);for(let R=0;R<=24;R++){let ie=ne===0?R/24*Math.PI*2:ne*(R/24)*Math.PI;f(Z,z*Math.cos(ie),le*Math.sin(ie),p),k.set([p.x,p.y,p.z],(R+1)*3)}P.geometry.attributes.position.needsUpdate=!0,P.geometry.computeVertexNormals(),P.geometry.computeBoundingSphere()}let pt=(P,Z)=>{let ne=new Tt;ne.setAttribute("position",new zt(new Float32Array(w*4*3),3));let k=Z?new Li({color:P,dashSize:.09,gapSize:.07,toneMapped:!1,transparent:!0,depthTest:!1}):new ns({color:P,toneMapped:!1,transparent:!0,depthTest:!1}),z=new za(ne,k);return z.frustumCulled=!1,z.renderOrder=9,i.add(z),z},We=pt("#fff1c9",!1),et=pt("#7fd6ff",!0),st=P=>new Kt({color:P,toneMapped:!1,depthTest:!1,transparent:!0}),ae=new we(new gi(.09,.28,16),st("#fff1c9")),_e=new we(new gi(.07,.22,16),st("#7fd6ff"));ae.rotation.x=_e.rotation.x=Math.PI,ae.renderOrder=_e.renderOrder=10,i.add(ae,_e);let ge=new we(new _i(1,.03,8,40),st("#c6a8ff"));ge.renderOrder=10,i.add(ge);let Pe={base:new C,apex:new C,peakNow:new C,peakPrev:new C,fixed:new C},Te=-1;function Qe(P){d(P);for(let k of[O,G,I,q,Y,re])g(k);ke(be,0,1),ke(Oe,0,-1),ke(ye,Ut,0);let Z=o[0];f(0,c[0]*.05,h[0]*.5,p),j.position.copy(p).addScaledVector(Z,-.01),j.quaternion.setFromUnitVectors(new C(0,0,1),Z),j.scale.set(c[0]*.42,h[0]*.24,c[0]*.3),xe.userData.rest=p.clone().addScaledVector(Z,-.18),xe.quaternion.setFromUnitVectors(new C(0,1,0),Z),xe.scale.set(c[0]*.33,.22,h[0]*.18),f(0,c[0]*.05,-h[0]*.5,p),de.position.copy(p),de.userData.normal=Z.clone().negate(),de.quaternion.setFromUnitVectors(new C(0,1,0),Z.clone().negate()),de.userData.baseScale=c[0]*.28;let ne=Math.round(Ut*.978);f(ne,0,0,Ne.position),Ne.scale.setScalar(h[ne]*.55),f(0,0,h[0]+.25,Pe.base).addScaledVector(o[0],-.25),f(Ut,0,h[Ut]+.25,Pe.apex).addScaledVector(o[Ut],.25),Te=P}function qe(P){return Math.round(jt(P,0,1)*Ut)}let at={"scala-vestibuli":P=>f(P,c[P]*.35,h[P]*.72,new C),"scala-tympani":P=>f(P,c[P]*.35,-h[P]*.72,new C),"scala-media":P=>f(P,c[P]*.62,h[P]*.28,new C),"basilar-membrane":P=>f(P,c[P]*.55,0,new C),"reissner-membrane":P=>f(P,c[P]*.2,h[P]*.22,new C),"spiral-lamina":P=>f(P,-c[P]*.7,0,new C)},rt={};for(let P of Object.keys(at))rt[P]=new C;rt["oval-window"]=new C,rt["round-window"]=new C,rt.helicotrema=new C,rt.stapes=new C,Object.assign(e,rt);function mt(){let P=Un(t.freq)>.45?Math.round(Ut*.16):Math.round(Ut*.62);for(let[Z,ne]of Object.entries(at))e[Z].copy(ne(Z==="basilar-membrane"?Math.round(Ut*.82):P));e["oval-window"].copy(j.position).addScaledVector(u,h[0]*.55),e["round-window"].copy(de.position).addScaledVector(u,-h[0]*.5),e.helicotrema.copy(Ne.position).addScaledVector(u,h[Ut]+.2),e.stapes.copy(xe.userData.rest).addScaledVector(o[0],-.2).addScaledVector(u,.25)}let U=new Float32Array(Ut+1),Mt=new Float32Array(Ut+1),lt=new Float32Array(Ut+1),St=new Ie("#ffd27a"),Se=new Ie("#e48b3f"),Ot=new Ie("#b35a2a"),Ye=0;function tt(P,Z,ne){let k=0,z=0;for(let le=0;le<=w;le++){let{env:R}=$i(P,le/Ut,ne);Z[le]=R,R>k&&(k=R,z=le)}return z}function A(P){if(Math.abs(t.u-t.uTarget)>1e-4){let Ee=P/(t.reduced?.01:2.4);t.u=t.uTarget>t.u?Math.min(t.uTarget,t.u+Ee):Math.max(t.uTarget,t.u-Ee)}let Z=zo(t.u);Z!==Te&&Qe(Z),t.waveOn&&(Ye+=P*(t.reduced?.4:1));let ne=t.freq,k=.55+.22*Math.log2(ne/250),z=2*Math.PI*k*Ye,le={active:t.active,loud:t.loud},R=.42*Eh(1,2.6,Z)*t.drive,ie=tt(ne,Mt,le);for(let Ee=0;Ee<=w;Ee++){let{phase:he}=$i(ne,Ee/Ut,le);U[Ee]=R*Mt[Ee]*Math.cos(z-he)*(t.waveOn||t.drive?1:0)}g(H,U);let ee=H.mesh.geometry.attributes.color.array,J=0;for(let Ee=0;Ee<=w;Ee++){let he=U[Ee]/(R||1);for(let Ue=0;Ue<K;Ue++){let Ke=he>=0?St:Ot,Me=Math.min(1,Math.abs(he)*1.4*Math.sin(Math.PI*Ue/(K-1))+0);ee[J++]=Se.r+(Ke.r-Se.r)*Me,ee[J++]=Se.g+(Ke.g-Se.g)*Me,ee[J++]=Se.b+(Ke.b-Se.b)*Me}}H.mesh.geometry.attributes.color.needsUpdate=!0;let te=Ee=>(y(Ee)+c[Ee]*.93)/2,oe=(Ee,he)=>{let Ue=Ee.geometry.attributes.position,Ke=Ue.array,Me=0;for(let ct=0;ct<w;ct++)for(let Rt of[1,-1])f(ct,te(ct),Rt*R*he[ct],p),Ke[Me++]=p.x,Ke[Me++]=p.y,Ke[Me++]=p.z,f(ct+1,te(ct+1),Rt*R*he[ct+1],p),Ke[Me++]=p.x,Ke[Me++]=p.y,Ke[Me++]=p.z;Ue.needsUpdate=!0,Ee.geometry.computeBoundingSphere(),Ee.material.isLineDashedMaterial&&Ee.computeLineDistances()};if(oe(We,Mt),f(ie,te(ie),R*Mt[ie]+.32,ae.position),Pe.peakNow.copy(ae.position).addScaledVector(u,.25),t.prevFreq){let Ee=tt(t.prevFreq,lt,le);oe(et,lt),et.visible=_e.visible=!0,f(Ee,te(Ee),R*lt[Ee]+.28,_e.position),Pe.peakPrev.copy(_e.position).addScaledVector(u,.22)}else et.visible=_e.visible=!1;t.peakPlace=ie/Ut;let pe=Math.cos(z)*.08*t.drive*(t.waveOn?1:0);if(xe.position.copy(xe.userData.rest).addScaledVector(o[0],pe),de.scale.set(de.userData.baseScale,de.userData.baseScale*(.35+2.2*pe),de.userData.baseScale),t.fixedPlace!=null){let Ee=qe(t.fixedPlace);f(Ee,te(Ee),0,ge.position),ge.quaternion.setFromUnitVectors(new C(0,0,1),o[Ee]),ge.scale.setScalar(Math.max(c[Ee],h[Ee])*1.08),ge.visible=!0,f(Ee,0,-h[Ee]-.3,Pe.fixed)}else ge.visible=!1;mt()}Qe(0),d(0);let v=new C;for(let P=0;P<=Ut;P++)v.add(a[P]);v.divideScalar(Ut+1),d(1);let B=a[Ut].clone().multiplyScalar(.5);Qe(0);let fe={coiled:{pos:[v.x+.4,v.y+5.4,v.z+6.4],target:[v.x,v.y,v.z]},unrolled:{pos:[B.x-.6,3.6,14.5],target:[B.x,-.1,0]},base:{pos:[3.2,2,6.2],target:[3.6,0,0]}};return fe.default=fe.unrolled,{scene:i,anchors:e,poses:fe,state:t,update:A,extra:Pe,length:r,limits:{min:1.2,max:40},dimOnSelect:!0,fitUnrolled(P,Z=38){let ne=r/2+(P<1?2.4:1.7),k=Us.degToRad(Z),z=Math.atan(Math.tan(k/2)*P),le=Math.max(8,ne/Math.tan(z));return{pos:[B.x-.4,le*.3,le*.95],target:[B.x,-.2,0]}},dotTexture:Oi}}var Ut,fd,_b,xb,yb,hm=hi(()=>{ds();jr();Ei();Ut=220,fd=2.6,_b=1.5,xb=2.1,yb=.955});var um={};ha(um,{createCortiScene:()=>bb});function bb(){let i=new Xn;fs(i,{key:2.1,fill:.85,rim:1.3});let e={},t={},n={mode:"oscillate",hold:0,amplifier:!0,showIons:!0,waveOn:!0,reduced:!1,step:0,d:0,cell:fa(0)},s=(J,te=2*$t,oe=.03)=>{let pe=new Or(J.map(([he,Ue])=>new ue(he,Ue))),Ee=new eo(pe,{depth:te,bevelEnabled:oe>0,bevelThickness:oe,bevelSize:oe,bevelSegments:2,curveSegments:24});return Ee.translate(0,0,-te/2),Ee},r=(J,te=80)=>new En(J.map(([pe,Ee])=>me(pe,Ee,0)),!0,"centripetal").getSpacedPoints(te).slice(0,te).map(pe=>[pe.x,pe.y]),a=dt(new we(s(r([[-4.4,-.22],[-.95,-.12],[-.9,.1],[-1.6,.18],[-2.2,.35],[-2.5,.95],[-2.7,1.18],[-3.3,1.1],[-3.9,.55],[-4.4,.3]],90)),ut("#cdbb98",{roughness:.6,envMapIntensity:.35})),"spiral-lamina");i.add(a),e["spiral-lamina"]=me(-3.6,.15,$t+.1);let o=new Dt;o.position.copy(Fs),i.add(o);let l=(J,te,oe=0)=>me(J-Fs.x,te-Fs.y,oe),c=(J,te,oe)=>{let pe=s(J,te,oe);return pe.translate(-Fs.x,-Fs.y,0),pe},h=ut("#f0a456",{roughness:.45,clearcoat:.4}),u=dt(new we(c([[-.92,-.07],[3,-.07],[3,.05],[-.92,.05]],2*$t,.02),h),"basilar-membrane");o.add(u),e["basilar-membrane"]=l(2.4,-.3,$t+.1);let d=ut("#d8c7e8",{roughness:.4,transparent:!0,opacity:.9}),f=new Dt;f.add(new we(c([[-.42,.05],[-.26,.05],[.3,_n-.06],[.16,_n-.06]],2*$t,0),d)),f.add(new we(c([[.52,.05],[.68,.05],[.36,_n-.06],[.24,_n-.06]],2*$t,0),d)),dt(f,"pillar-cells"),o.add(f),e["pillar-cells"]=l(.15,.55,$t+.15);let m=ut("#c9b7a5",{roughness:.5,transparent:!0,opacity:.92}),x=dt(new we(c([[-.85,_n-.03],[2.05,_n-.03],[2.05,_n+.04],[-.85,_n+.04]],2*$t,.01),m),"reticular-lamina");o.add(x),e["reticular-lamina"]=l(-1.1,_n+.1,$t+.2);let p=new we(c(r([[1.95,.05],[3,.05],[3.05,.5],[2.75,1.15],[2.2,1.5],[1.95,1.4]],60),2*$t,.02),ut("#c99886",{roughness:.7,transparent:!0,opacity:.5,depthWrite:!1,envMapIntensity:.3})),g=new we(c(r([[-.95,.05],[-.62,.05],[-.7,1.35],[-.95,1.2],[-1.15,.7]],50),2*$t,.02),ut("#c99886",{roughness:.7,transparent:!0,opacity:.5,depthWrite:!1,envMapIntensity:.3}));p.userData.pickable=g.userData.pickable=!1,o.add(p,g);let y=[-2.1,-1.26,-.42,.42,1.26,2.1],w=[.85,1.22,1.59],b=[];w.forEach((J,te)=>y.forEach((oe,pe)=>b.push({x:J,z:oe+(te%2?.2:-.1)*(pe%2?1:-1)*.5,r:te})));let T=[];for(let J=0;J<=20;J++){let te=J/20,oe=te*1.02,pe=.04+.24*Math.sin(Math.PI*Math.min(1,te*1.25))*(1-.55*te)+(te>.85?.03:0);T.push(new ue(Math.max(.02,pe),oe))}let E=ut("#9fb8e8",{roughness:.35,clearcoat:.5,transparent:!0,opacity:.95});E.userData.manual=!1;let _=new js(T,28),S=dt(new Yn(_,E,y.length),"ihc"),F=-.48,L=_n-1.02,D=new At;y.forEach((J,te)=>{D.makeTranslation(F-Fs.x,L-Fs.y,J),S.setMatrixAt(te,D)}),o.add(S),e.ihc=l(F-.35,.75,$t+.25);let O=ut("#9fb8e8",{roughness:.35,clearcoat:.5}),G=new wn(.13,.13,1,20);G.translate(0,-.5,0);let I=dt(new Yn(G,O,b.length),"ohc");o.add(I),e.ohc=l(1.25,.95,$t+.3);let q=.92,K=ut("#e8cfa6",{roughness:.55}),H=new wn(.05,.08,1,10);H.translate(0,.5,0);let ce=dt(new Yn(H,K,b.length),"deiters-cells");o.add(ce);let Y=new Yt(.15,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),re=dt(new Yn(Y,K,b.length),"deiters-cells");o.add(re),e["deiters-cells"]=l(1.95,.32,$t+.25);let X=[],be=[];y.forEach(J=>{[.17,.24,.32].forEach((te,oe)=>{for(let pe=-3;pe<=3;pe++){let Ee={x:F-.07+oe*.07,y:_n+.02,z:J+pe*.06+oe%2*.02,h:te,cell:"ihc"};X.push(Ee),oe<2&&be.push(Ee)}})}),b.forEach(J=>{[.15,.24,.36].forEach((te,oe)=>{for(let pe=-4;pe<=4;pe++){let Ee={x:J.x-.05+oe*.05-Math.abs(pe)*.022,y:_n+.02,z:J.z+pe*.032,h:te,cell:"ohc"};X.push(Ee),oe<2&&be.push(Ee)}})});let Oe=new wn(.012,.016,1,6);Oe.translate(0,.5,0);let j=ut("#f4efe6",{roughness:.3,clearcoat:.6,emissive:new Ie("#000000")}),xe=dt(new Yn(Oe,j,X.length),"stereocilia");xe.instanceMatrix.setUsage(Qc),o.add(xe);let de=new Kt({color:"#c48cff",toneMapped:!1,transparent:!0}),Ne=new Yn(new Yt(.022,8,6),de,be.length);Ne.userData.pickable=!1,Ne.instanceMatrix.setUsage(Qc),o.add(Ne),e.stereocilia=l(1,_n+.45,$t+.25);let ye=new Dt;ye.position.copy(pd),i.add(ye);let ke=r([[-2.62,1.12],[-1.9,1.62],[-.9,1.93],[.6,1.93],[1.95,1.9],[2.35,1.98],[2.25,2.12],[1.4,2.32],[-.2,2.5],[-1.6,2.35],[-2.5,1.62]],100),pt=s(ke,2*$t,.02);pt.translate(-pd.x,-pd.y,0);let We=ut("#9fd8cc",{transparent:!0,opacity:.3,roughness:.25,clearcoat:.8,depthWrite:!1,envMapIntensity:.4}),et=dt(new we(pt,We),"tectorial-membrane");et.renderOrder=4,et.userData.shell=!0,ye.add(et),e["tectorial-membrane"]=me(-.6,2.75,$t+.1);let st=ut("#f1c55a",{roughness:.4,emissive:new Ie("#000000")}),ae=[],_e=new Dt;y.forEach((J,te)=>{for(let oe of[-.12,.12]){let pe=on([[F,L+.06,J+oe*.5],[F-.25,.25,J+oe],[-.95,0,J+oe],[-2,-.05,J+oe*1.3],[-4.4,-.08,J+oe*1.6]]);_e.add(new we(new Fn(pe,40,.028,6,!1),st)),ae.push({curve:pe,cell:te})}});for(let J of[-1.6,.9]){let te=on([[1.4,.2,J],[1,.12,J+.4],[.2,.1,J+.9],[-.9,0,J+1.2],[-3.2,-.05,J+1.3]]);_e.add(new we(new Fn(te,30,.018,5,!1),ut("#ffe39a",{roughness:.4})))}dt(_e,"afferent-fiber"),i.add(_e),e["afferent-fiber"]=me(-2.6,-.5,$t+.15);let ge=new Dt;for(let J of[-1.2,1.6]){let te=on([[-4.3,.12,J],[-1.5,.15,J],[-.4,.4,J-.1],[.4,.55,J-.1],[w[1],.62,J]]);ge.add(new we(new Fn(te,40,.02,5,!1),ut("#e07a6f",{roughness:.45})))}dt(ge,"efferent-fiber"),i.add(ge),e["efferent-fiber"]=me(-1.4,.75,-$t+.3);let Pe=Oi(.6),Te=260,Qe=new Float32Array(Te*3),qe=[];for(let J=0;J<Te;J++)qe.push({target:be[J*7%be.length],t:Math.random(),speed:.4+Math.random()*.6,ox:(Math.random()-.5)*.9,oy:.4+Math.random()*.7});let at=new Tt;at.setAttribute("position",new zt(Qe,3));let rt=new Ts({map:Pe,color:"#c48cff",size:.09,transparent:!0,depthWrite:!1,toneMapped:!1,blending:Di}),mt=new ss(at,rt);mt.frustumCulled=!1,mt.userData.pickable=!1,o.add(mt),t.k=l(.3,2.95,$t-.3);let U=72,Mt=new Yn(new Yt(.03,8,6),new Kt({color:"#7dffb2",toneMapped:!1,transparent:!0}),U);Mt.userData.pickable=!1,o.add(Mt);let lt=[];for(let J=0;J<U;J++)lt.push({cell:J%y.length,t:Math.random(),a:Math.random()*Math.PI*2});let St=[];for(let J=0;J<16;J++){let te=new Ks(new ws({map:Pe,color:"#ffb35c",blending:Di,depthTest:!1,toneMapped:!1,transparent:!0}));te.scale.setScalar(.22),te.visible=!1,te.renderOrder=12,i.add(te),St.push({sprite:te,fiber:null,t:0})}t.spike=me(-3.6,-.55,$t-.2);let Se=[];for(let J of[-1.3,1.3]){let te=To("#7fe3c8",.4,.03);te.position.copy(l(1.22,-.95,J)),o.add(te),Se.push(te)}t.endolymph=l(-.2,2.95,-$t+.2),t.perilymph=l(.15,.35,-$t+.2),t.modiolus=me(-4.2,2.1,0),t.outer=me(3.3,2.1,0),t.bmArrow=l(2.4,-.65,-$t+.6);let Ot=new Ie("#6fa8dc"),Ye=new Ie("#9fb8e8"),tt=new Ie("#ffc65c"),A=new mn,v=new mn,B=new mn,fe=new C,P=me(0,0,1),Z=0,ne=0,k=0;function z(J){let te=n.reduced?.35:1;n.waveOn&&(Z+=J*te);let oe;n.mode==="hold"?oe=n.hold:oe=n.waveOn?Math.sin(2*Math.PI*.35*Z):n.d,n.d=oe;let pe=fa(oe*.95);n.cell=pe;let Ee=n.amplifier?1:.55,he=.085*oe*Ee;o.rotation.z=he,ye.rotation.z=.55*he;let Ue=.3*oe*Ee,Ke=jt((pe.v-wi)/30,-1,1),Me=Ke>=0?Ye.clone().lerp(tt,Ke):Ye.clone().lerp(Ot,-Ke);E.color.copy(Me),O.color.copy(Me);let ct=q*(n.amplifier?pe.ohcLength:1+(pe.ohcLength-1)*.15);b.forEach((De,Bt)=>{D.compose(l(De.x,_n,De.z),A.identity(),fe.set(1,ct,1)),I.setMatrixAt(Bt,D);let dn=_n-ct;D.compose(l(De.x,.05,De.z),A.identity(),fe.set(1,dn-.05-.05,1)),ce.setMatrixAt(Bt,D),D.compose(l(De.x,dn,De.z),A.identity(),fe.set(1,1,1)),re.setMatrixAt(Bt,D)}),I.instanceMatrix.needsUpdate=ce.instanceMatrix.needsUpdate=re.instanceMatrix.needsUpdate=!0,v.setFromAxisAngle(P,-Ue),B.setFromAxisAngle(P,-Ue*.85),X.forEach((De,Bt)=>{let dn=De.cell==="ihc"?B:v;De._base||(De._base=l(De.x,_n+.02,De.z)),De._tip||(De._tip=new C),D.compose(De._base,dn,fe.set(1,De.h,1)),xe.setMatrixAt(Bt,D),De._tip.set(0,De.h,0).applyQuaternion(dn).add(De._base)}),xe.instanceMatrix.needsUpdate=!0,be.forEach((De,Bt)=>{D.compose(De._tip,A.identity(),fe.setScalar(.6+pe.po*1.2)),Ne.setMatrixAt(Bt,D)}),Ne.instanceMatrix.needsUpdate=!0,de.opacity=.25+.75*pe.po,de.color.set(pe.po>.5?"#e2b8ff":"#9b6cd6"),mt.visible=n.showIons;let Rt=jt((pe.po-.08)/.7,0,1);for(qe.forEach((De,Bt)=>{De.t+=J*De.speed*(.15+1.6*Rt)*te,De.t>1&&(De.t=0,De.target=be[Math.floor(Math.random()*be.length)],De.ox=(Math.random()-.5)*.9,De.oy=.4+Math.random()*.7);let dn=De.target._tip||l(De.target.x,_n+.3,De.target.z),zn=Rt>.05?De.t:De.t*.15;Qe[Bt*3]=dn.x+De.ox*(1-zn),Qe[Bt*3+1]=dn.y+De.oy*(1-zn)+(Rt<.05?Math.sin(Z*2+Bt)*.05:0),Qe[Bt*3+2]=dn.z+Math.sin(Bt*1.7)*.2*(1-zn)}),at.attributes.position.needsUpdate=!0,rt.opacity=n.showIons?.35+.65*Rt:0,lt.forEach((De,Bt)=>{De.t+=J*te*(.2+2.2*pe.release),De.t>1&&(De.t=0,De.a=Math.random()*Math.PI*2);let dn=y[De.cell],zn=.16*(1-De.t);D.compose(l(F+Math.cos(De.a)*zn,L+.15-De.t*.12,dn+Math.sin(De.a)*zn),A.identity(),fe.setScalar(pe.release>.02?1:.55)),Mt.setMatrixAt(Bt,D)}),Mt.instanceMatrix.needsUpdate=!0,Mt.material.opacity=.35+.65*pe.release,ne+=J*te*(.5+14*pe.release);ne>1;){ne-=1;let De=St.find(Bt=>!Bt.fiber);De&&(De.fiber=ae[Math.floor(Math.random()*ae.length)],De.t=0,De.sprite.visible=!0)}St.forEach(De=>{if(De.fiber){if(De.t+=J*te*.9,De.t>=1){De.fiber=null,De.sprite.visible=!1;return}De.sprite.position.copy(De.fiber.curve.getPointAt(De.t))}}),st.emissive.set("#ff9a3c"),st.emissiveIntensity=.15+.5*pe.release;let Zt=n.amplifier?(1-pe.ohcLength)/.09:0;Se.forEach(De=>{De.visible=n.amplifier&&Math.abs(Zt)>.05;let Bt=.15+.45*Math.abs(Zt);De.userData.set(Bt),De.rotation.z=Zt>=0?0:Math.PI,De.position.y=(Zt>=0?-.95:-.95+Bt)-Fs.y}),k=Z}return z(0),{scene:i,anchors:e,poses:{default:{pos:[.9,3.3,7.4],target:[-.25,1,0]},wide:{pos:[-.3,2.4,10.5],target:[-.6,.9,0]},bundles:{pos:[1.7,3.7,6.3],target:[.35,1.45,0]},base:{pos:[-1.6,.9,5.2],target:[-.9,.5,0]}},state:n,update:z,extra:t,stepFocus:[null,["basilar-membrane"],["tectorial-membrane","stereocilia","reticular-lamina"],["stereocilia"],["ihc","ohc"],["ihc","afferent-fiber"],["ohc","deiters-cells","basilar-membrane"]],stepPose:[null,"default","bundles","bundles","default","base","default"],stepHold:[null,.9,.9,.9,.9,.9,.9],limits:{min:1.5,max:22},get phase(){return k}}}var $t,_n,Fs,pd,dm=hi(()=>{ds();jr();ch();Ei();$t=2.6,_n=1.52,Fs=me(-.9,0,0),pd=me(-2.6,1.15,0)});var fm={};ha(fm,{createNerveScene:()=>Mb});function Mb(){let i=new Xn;fs(i,{key:2,fill:.9,rim:1.4});let e={},t={},n={freq:250,level:60,waveOn:!0,reduced:!1},s=2.6,r=1.6,a=1.6,o=me(-2.2,-.6,0),l=(X,be=1)=>{let Oe=2*Math.PI*s*X,j=r*(1-.72*X)*be;return me(o.x+j*Math.cos(Oe),o.y+a*X,o.z+j*Math.sin(Oe))},c=[];for(let X=0;X<=180;X++)c.push(l(X/180));let h=dt(new we(kn(new En(c),260,[.36,.13],18),ut("#eadcc3",{transparent:!0,opacity:.32,depthWrite:!1,side:Pt,roughness:.35,clearcoat:.5})),"cochlea");h.renderOrder=2,i.add(h);let u=[];for(let X=0;X<=180;X++)u.push(l(X/180*.97,1.02));let d=new we(new Fn(new En(u),240,.035,6,!1),new Kt({color:"#f2a65a",toneMapped:!1}));d.userData.pickable=!1,i.add(d),e.cochlea=l(.15).add(me(0,1.4,.4));let f=["high","mid","low"],m=[],x=me(6.6,-.2,0),p=new Yt(.055,10,8),g=ut("#f6d98a",{roughness:.4}),y=new Dt,w=new Dt,b=18;for(let X=0;X<b;X++){let be=.03+X/(b-1)*.9,Oe=Bo(be);f.forEach((j,xe)=>{let de=(xe-1)*.012,Ne=l(be+de,.55),ye=o.y-.15-X*.012-xe*.01,ke=me(o.x+(Ne.x-o.x)*.25,(Ne.y+ye)/2,o.z+(Ne.z-o.z)*.25),pt=(X/(b-1)-.5)*.5+(xe-1)*.04,We=on([Ne,ke,me(o.x+.2,ye,pt*.6),me(1.5,ye+.1,pt*.8),x.clone().add(me(0,pt*.6,pt*.9))]),et=.66-.66*(1-be),st=new Ie().setHSL(et<0?0:et*.9,.62,.58),ae=new os({color:st,roughness:.45,transparent:!0,opacity:.55,emissive:st.clone(),emissiveIntensity:0});ae.userData.manual=!0;let _e=new we(new Fn(We,60,.018,5,!1),ae);dt(_e,"auditory-nerve"),y.add(_e);let ge=new we(p,g);ge.position.copy(We.getPointAt(.08)),dt(ge,"spiral-ganglion"),w.add(ge),m.push({curve:We,cf:Oe,s:be,type:j,mesh:_e,color:st,acc:Math.random(),rate:0})})}i.add(y,w);let T=dt(new we(kn(on([me(o.x+.3,o.y-.25,0),me(1.5,-.2,0),me(6.4,-.2,0)]),40,[.32,.45],18,!1),ut("#f1c55a",{transparent:!0,opacity:.12,depthWrite:!1,roughness:.4})),"auditory-nerve");T.userData.shell=!0,i.add(T),e["auditory-nerve"]=me(3.8,.5,.3),e["spiral-ganglion"]=l(.08,.55).add(me(.1,-.45,.4));let E=new Dt,_=new we(new wn(.012,.035,2.2,10),new as({color:"#c9d4d8",metalness:.8,roughness:.25}));_.position.y=1.1;let S=new we(new Yt(.04,10,8),new Kt({color:"#7fe3c8",toneMapped:!1}));E.add(_,S),E.rotation.z=-.5,i.add(E),t.electrode=new C,t.base=l(0).add(me(.3,-.5,.6)),t.apex=l(1).add(me(0,.6,0)),t.brainstem=x.clone().add(me(.4,.5,0));let F=Oi(.7),L=320,D=new Float32Array(L*3).fill(1e5),O=new Float32Array(L*3),G=new Tt;G.setAttribute("position",new zt(D,3)),G.setAttribute("color",new zt(O,3));let I=new ss(G,new Ts({map:F,size:.2,vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,blending:Di,toneMapped:!1}));I.frustumCulled=!1,I.renderOrder=10,I.userData.pickable=!1,i.add(I);let q=Array.from({length:L},(X,be)=>({i:be,fiber:null,t:0})),K=new Ie("#ffffff"),H=new Ie,ce=new C;function Y(X){let be=n.reduced?.35:1,Oe=Un(n.freq),j=null,xe=1e9;for(let de of m){let Ne=lr(de.type,n.level,n.freq,de.cf);de.rate=Ne.rate;let ye=Ne.driven;if(de.mesh.material.emissiveIntensity=.04+.55*ye,de.mesh.material.opacity=.28+.67*Math.max(ye,.08),n.waveOn)for(de.acc+=X*be*de.rate/45;de.acc>1;){de.acc-=1;let pt=q.find(We=>!We.fiber);pt&&(pt.fiber=de,pt.t=0,H.copy(de.color).lerp(K,.45),O.set([H.r,H.g,H.b],pt.i*3))}let ke=Math.abs(de.s-Oe);de.type==="high"&&ke<xe&&(xe=ke,j=de)}for(let de of q)if(de.fiber){if(de.t+=X*be*.55,de.t>=1){de.fiber=null,D[de.i*3+1]=1e5;continue}de.fiber.curve.getPointAt(de.t,ce),D.set([ce.x,ce.y,ce.z],de.i*3)}if(G.attributes.position.needsUpdate=!0,G.attributes.color.needsUpdate=!0,j){let de=j.curve.getPointAt(.03);E.position.copy(de),t.electrode.copy(de).add(me(.5,-.75,.9))}}return{scene:i,anchors:e,poses:{default:{pos:[.9,2.9,7.6],target:[.9,-.15,0]},coil:{pos:[-2,4.6,5.2],target:[-2.2,0,0]}},state:n,update:Y,extra:t,limits:{min:2,max:30}}}var pm=hi(()=>{ds();jr();ch();Ei()});var Ge=(i,e)=>({lecture:i,pages:String(e),page:Number(String(e).split(/[–,-]/)[0])}),No={l04:["L04 \xB7 Sound waves","L04 \xB7 \u58F0\u6CE2"],l12:["L12 \xB7 Filters","L12 \xB7 \u6EE4\u6CE2\u5668"],l13:["L13 \xB7 Outer ear","L13 \xB7 \u5916\u8033"],l14:["L14 \xB7 Middle ear","L14 \xB7 \u4E2D\u8033"],l15:["L15 \xB7 Inner ear","L15 \xB7 \u5185\u8033"],l16:["L16 \xB7 Cochlea","L16 \xB7 \u8033\u8717"],l17:["L17 \xB7 Neurons I","L17 \xB7 \u795E\u7ECF\u5143\uFF08\u4E00\uFF09"],l18:["L18 \xB7 Neurons II","L18 \xB7 \u795E\u7ECF\u5143\uFF08\u4E8C\uFF09"],l19:["L19 \xB7 Hair cells","L19 \xB7 \u5185\u5916\u6BDB\u7EC6\u80DE"],l20:["L20 \xB7 Neural codes","L20 \xB7 \u542C\u89C9\u795E\u7ECF\u7F16\u7801"],l21:["L21 \xB7 Neural pathways","L21 \xB7 \u542C\u89C9\u795E\u7ECF\u901A\u8DEF"]},Sd={"outer-ear":"m05","middle-ear":"m05",cochlea:"m06","hair-cells":"m08","auditory-nerve":"m08",pathway:"m09"},Rn={pinna:{name:["Pinna (auricle)","\u8033\u5ED3"],scene:"ear",station:"outer-ear",does:["Collects sound and funnels it toward the canal. Its folds shape high frequencies and add localization cues.","\u6536\u96C6\u58F0\u97F3\u5E76\u5BFC\u5411\u8033\u9053\uFF1B\u8936\u76B1\u6539\u53D8\u9AD8\u9891\u6210\u5206\uFF0C\u63D0\u4F9B\u5B9A\u4F4D\u7EBF\u7D22\u3002"],next:["Directs the pressure wave into the concha and ear canal.","\u628A\u538B\u529B\u6CE2\u5BFC\u5165\u8033\u7532\u8154\u548C\u5916\u8033\u9053\u3002"],source:Ge("L13",4)},concha:{name:["Concha","\u8033\u7532\u8154"],scene:"ear",station:"outer-ear",does:["The bowl at the canal entrance. Its resonance near ~5 kHz adds gain there.","\u8033\u9053\u5165\u53E3\u5904\u7684\u7897\u72B6\u51F9\u9677\uFF0C\u7EA6 5 kHz \u9644\u8FD1\u5171\u632F\u589E\u76CA\u3002"],next:["Feeds the boosted pressure wave into the ear canal.","\u628A\u589E\u5F3A\u540E\u7684\u538B\u529B\u6CE2\u9001\u5165\u5916\u8033\u9053\u3002"],source:Ge("L13",6)},"ear-canal":{name:["Ear canal (external auditory meatus)","\u5916\u8033\u9053"],scene:"ear",station:"outer-ear",does:["~2.5 cm long and 5\u20137 mm wide in adults, ending at the eardrum. It resonates near ~2.5 kHz.","\u6210\u4EBA\u7EA6 2.5 cm \u957F\u30015\u20137 mm \u5BBD\uFF0C\u6B62\u4E8E\u9F13\u819C\uFF1B\u7EA6 2.5 kHz \u9644\u8FD1\u5171\u632F\u3002"],next:["Delivers the pressure fluctuation to the tympanic membrane.","\u628A\u538B\u529B\u53D8\u5316\u9001\u5230\u9F13\u819C\u3002"],source:Ge("L13","4, 6")},"tympanic-membrane":{name:["Tympanic membrane (eardrum)","\u9F13\u819C"],scene:"ear",station:"outer-ear",does:["Thin cone-shaped boundary between the outer and middle ear. Pressure changes in the canal make it vibrate.","\u5916\u8033\u4E0E\u4E2D\u8033\u4E4B\u95F4\u7684\u8584\u9525\u5F62\u819C\uFF1B\u8033\u9053\u5185\u7684\u538B\u529B\u53D8\u5316\u4F7F\u5B83\u632F\u52A8\u3002"],next:["Drives the handle (manubrium) of the malleus, which is embedded in it.","\u5E26\u52A8\u5D4C\u5728\u9F13\u819C\u4E0A\u7684\u9524\u9AA8\u67C4\u3002"],source:Ge("L13",9)},malleus:{name:["Malleus (hammer)","\u9524\u9AA8"],scene:"ear",station:"middle-ear",does:["Its handle is embedded in the TM and forms the long arm of the ossicular lever.","\u9524\u9AA8\u67C4\u5D4C\u5728\u9F13\u819C\u5185\uFF0C\u662F\u542C\u9AA8\u6760\u6746\u7684\u957F\u81C2\u3002"],next:["Rotates together with the incus.","\u4E0E\u7827\u9AA8\u4E00\u8D77\u8F6C\u52A8\u3002"],source:Ge("L14","4, 15")},incus:{name:["Incus (anvil)","\u7827\u9AA8"],scene:"ear",station:"middle-ear",does:["Its long process is the shorter lever arm (\u22481.3\xD7 lever ratio).","\u7827\u9AA8\u957F\u7A81\u662F\u8F83\u77ED\u7684\u6760\u6746\u81C2\uFF08\u6760\u6746\u6BD4\u7EA6 1.3\uFF09\u3002"],next:["Pushes the head of the stapes.","\u63A8\u52A8\u956B\u9AA8\u5934\u3002"],source:Ge("L14","4, 16")},stapes:{name:["Stapes (stirrup)","\u956B\u9AA8"],scene:"ear",station:"middle-ear",does:["Smallest bone. Its footplate sits in the oval window and moves in and out like a piston.","\u6700\u5C0F\u7684\u9AA8\uFF1B\u956B\u9AA8\u5E95\u677F\u5D4C\u5728\u5375\u5706\u7A97\u4E0A\uFF0C\u50CF\u6D3B\u585E\u4E00\u6837\u8FDB\u51FA\u3002"],next:["Pushes the fluid of the scala vestibuli.","\u63A8\u52A8\u524D\u5EAD\u9636\u5185\u7684\u6DB2\u4F53\u3002"],source:Ge("L14",4)},"oval-window":{name:["Oval window","\u5375\u5706\u7A97"],scene:"ear",station:"middle-ear",does:["The opening into the inner ear under the stapes footplate (\u22483.2 mm\xB2 vs \u224855 mm\xB2 for the TM).","\u956B\u9AA8\u5E95\u677F\u4E0B\u901A\u5F80\u5185\u8033\u7684\u5F00\u53E3\uFF08\u7EA6 3.2 mm\xB2\uFF0C\u9F13\u819C\u7EA6 55 mm\xB2\uFF09\u3002"],next:["Starts a pressure wave in the cochlear fluid \u2192 basilar membrane.","\u5728\u8033\u8717\u6DB2\u4F53\u4E2D\u5F15\u8D77\u538B\u529B\u6CE2 \u2192 \u57FA\u5E95\u819C\u3002"],source:Ge("L14",14)},"round-window":{name:["Round window","\u5706\u7A97"],scene:"ear",station:"middle-ear",does:["Membrane at the base of the scala tympani. It bulges out when the stapes pushes in, because the fluid cannot compress.","\u9F13\u9636\u5E95\u90E8\u7684\u819C\u3002\u6DB2\u4F53\u4E0D\u53EF\u538B\u7F29\uFF0C\u6240\u4EE5\u956B\u9AA8\u63A8\u5165\u65F6\u5B83\u5411\u5916\u9F13\u51FA\u3002"],next:["Lets the fluid move, so the basilar membrane can be displaced.","\u4E3A\u6DB2\u4F53\u8FD0\u52A8\u201C\u6CC4\u538B\u201D\uFF0C\u57FA\u5E95\u819C\u624D\u80FD\u88AB\u63A8\u52A8\u3002"],source:Ge("L14",4)},"eustachian-tube":{name:["Eustachian (auditory) tube","\u54BD\u9F13\u7BA1"],scene:"ear",station:"middle-ear",does:["Connects the middle ear to the nasopharynx. It equalizes air pressure and drains fluid. It is shorter and flatter in infants (~10\xB0 vs ~45\xB0).","\u8FDE\u901A\u4E2D\u8033\u4E0E\u9F3B\u54BD\uFF0C\u5E73\u8861\u6C14\u538B\u5E76\u5F15\u6D41\u3002\u5A74\u513F\u66F4\u77ED\u66F4\u5E73\uFF08\u7EA6 10\xB0\uFF0C\u6210\u4EBA\u7EA6 45\xB0\uFF09\u3002"],next:["Keeps the TM free to vibrate. Dysfunction can lead to middle-ear fluid.","\u4FDD\u6301\u9F13\u819C\u4E24\u4FA7\u6C14\u538B\u76F8\u7B49\u4EE5\u4FBF\u81EA\u7531\u632F\u52A8\uFF1B\u529F\u80FD\u5931\u8C03\u53EF\u81F4\u4E2D\u8033\u79EF\u6DB2\u3002"],source:Ge("L14",9)},stapedius:{name:["Stapedius muscle","\u956B\u9AA8\u808C"],scene:"ear",station:"middle-ear",does:["Smallest muscle in the body (~6 mm). It attaches to the stapes head and is driven by the facial nerve (CN VII).","\u4EBA\u4F53\u6700\u5C0F\u7684\u808C\u8089\uFF08\u7EA6 6 mm\uFF09\uFF0C\u9644\u7740\u4E8E\u956B\u9AA8\u5934\uFF0C\u7531\u9762\u795E\u7ECF\uFF08CN VII\uFF09\u652F\u914D\u3002"],next:["Contracts to intense sounds (reflex above ~85 dB SPL, bilateral), stiffening the chain.","\u5F3A\u58F0\u65F6\u6536\u7F29\uFF08\u7EA6 85 dB SPL \u4EE5\u4E0A\uFF0C\u53CC\u4FA7\u53CD\u5C04\uFF09\uFF0C\u4F7F\u542C\u9AA8\u94FE\u53D8\u786C\u3002"],source:Ge("L14",7)},"tensor-tympani":{name:["Tensor tympani","\u9F13\u819C\u5F20\u808C"],scene:"ear",station:"middle-ear",does:["~25 mm muscle attached to the malleus. It tenses the TM.","\u7EA6 25 mm\uFF0C\u9644\u7740\u4E8E\u9524\u9AA8\uFF0C\u4F7F\u9F13\u819C\u7D27\u5F20\u3002"],next:["Also stiffens the ossicular chain.","\u540C\u6837\u4F1A\u8BA9\u542C\u9AA8\u94FE\u53D8\u786C\u3002"],source:Ge("L14",7)},cochlea:{name:["Cochlea","\u8033\u8717"],scene:"ear",station:"cochlea",does:["A coiled tube (a little over 2\xBD turns, the size of a small grape). Its two jobs are transduction and frequency analysis.","\u87BA\u65CB\u5F62\u7BA1\u9053\uFF08\u7565\u591A\u4E8E 2\xBD \u5708\uFF0C\u50CF\u4E00\u9897\u5C0F\u8461\u8404\uFF09\u3002\u4E24\u5927\u529F\u80FD\uFF1A\u6362\u80FD\u4E0E\u9891\u7387\u5206\u6790\u3002"],next:["Turns fluid motion into basilar-membrane motion and hair-cell signals.","\u628A\u6DB2\u4F53\u8FD0\u52A8\u53D8\u6210\u57FA\u5E95\u819C\u8FD0\u52A8\u548C\u6BDB\u7EC6\u80DE\u4FE1\u53F7\u3002"],source:Ge("L15","3, 5")},"semicircular-canals":{name:["Semicircular canals","\u534A\u89C4\u7BA1"],scene:"ear",station:"cochlea",does:["Vestibular end organs for balance. They also use hair cells, but they are not part of the hearing path.","\u524D\u5EAD\u5E73\u8861\u5668\u5B98\uFF0C\u540C\u6837\u7528\u6BDB\u7EC6\u80DE\uFF0C\u4F46\u4E0D\u5728\u542C\u89C9\u901A\u8DEF\u4E0A\u3002"],next:["Not on the sound path. Follow the cochlea instead.","\u4E0D\u5728\u58F0\u97F3\u8DEF\u7EBF\u4E0A\uFF0C\u58F0\u97F3\u7EE7\u7EED\u8D70\u8033\u8717\u3002"],source:Ge("L15","3\u20134")},"auditory-nerve":{name:["Auditory nerve (CN VIII)","\u542C\u795E\u7ECF\uFF08\u7B2C VIII \u5BF9\u8111\u795E\u7ECF\uFF09"],scene:"ear",station:"auditory-nerve",does:["Bundle of spiral-ganglion axons. It carries spike trains from the cochlea to the cochlear nucleus.","\u87BA\u65CB\u795E\u7ECF\u8282\u8F74\u7A81\u7EC4\u6210\u7684\u795E\u7ECF\u675F\uFF0C\u628A\u5C16\u5CF0\u5E8F\u5217\u4ECE\u8033\u8717\u9001\u5230\u8033\u8717\u6838\u3002"],next:["First central stop: the cochlear nucleus on the same side.","\u7B2C\u4E00\u7AD9\uFF1A\u540C\u4FA7\u8033\u8717\u6838\u3002"],source:Ge("L20",2)},"scala-vestibuli":{name:["Scala vestibuli","\u524D\u5EAD\u9636"],scene:"cochlea",station:"cochlea",does:["The \u201Cupper\u201D perilymph chamber, connected to the oval window.","\u201C\u4E0A\u5C42\u201D\u5916\u6DCB\u5DF4\u8154\uFF0C\u4E0E\u5375\u5706\u7A97\u76F8\u8FDE\u3002"],next:["Carries the pressure that pushes on the cochlear partition.","\u4F20\u9012\u63A8\u52A8\u8717\u7BA1\uFF08\u4E2D\u9694\uFF09\u7684\u538B\u529B\u3002"],source:Ge("L15","5\u20136")},"scala-media":{name:["Scala media (cochlear duct)","\u4E2D\u9636\uFF08\u8717\u7BA1\uFF09"],scene:"cochlea",station:"cochlea",does:["The middle chamber, filled with endolymph (high K\u207A). The organ of Corti sits on its floor, the basilar membrane.","\u4E2D\u95F4\u8154\uFF0C\u5145\u6EE1\u5185\u6DCB\u5DF4\uFF08\u9AD8 K\u207A\uFF09\uFF1BCorti \u5668\u4F4D\u4E8E\u5176\u5E95\u90E8\u7684\u57FA\u5E95\u819C\u4E0A\u3002"],next:["Its K\u207A-rich fluid bathes the stereocilia (next station).","\u9AD8\u94BE\u6DB2\u4F53\u6D78\u6DA6\u9759\u7EA4\u6BDB\uFF08\u4E0B\u4E00\u7AD9\uFF09\u3002"],source:Ge("L15",5)},"scala-tympani":{name:["Scala tympani","\u9F13\u9636"],scene:"cochlea",station:"cochlea",does:["The \u201Clower\u201D perilymph chamber, which ends at the round window.","\u201C\u4E0B\u5C42\u201D\u5916\u6DCB\u5DF4\u8154\uFF0C\u6B62\u4E8E\u5706\u7A97\u3002"],next:["Lets fluid move back toward the round window.","\u8BA9\u6DB2\u4F53\u6D41\u5411\u5706\u7A97\u6CC4\u538B\u3002"],source:Ge("L15","6\u20137")},"basilar-membrane":{name:["Basilar membrane (BM)","\u57FA\u5E95\u819C"],scene:"cochlea",station:"cochlea",does:["Narrow and stiff at the base, wide and flexible at the apex. Each frequency peaks at its own place (tonotopy).","\u5E95\u7AEF\u7A84\u800C\u786C\uFF0C\u9876\u7AEF\u5BBD\u800C\u8F6F\uFF1B\u6BCF\u4E2A\u9891\u7387\u5728\u5404\u81EA\u4F4D\u7F6E\u8FBE\u5230\u5CF0\u503C\uFF08\u97F3\u8C03\u62D3\u6251\uFF09\u3002"],next:["Its local motion bends the stereocilia of the hair cells resting on it.","\u5C40\u90E8\u8FD0\u52A8\u4F7F\u5176\u4E0A\u6BDB\u7EC6\u80DE\u7684\u9759\u7EA4\u6BDB\u5F2F\u66F2\u3002"],source:Ge("L15","9\u201310")},"reissner-membrane":{name:["Reissner's membrane","\u524D\u5EAD\u819C\uFF08Reissner \u819C\uFF09"],scene:"cochlea",station:"cochlea",does:["Thin membrane separating the scala vestibuli from the scala media.","\u5206\u9694\u524D\u5EAD\u9636\u4E0E\u4E2D\u9636\u7684\u8584\u819C\u3002"],next:["Keeps endolymph and perilymph apart.","\u4F7F\u5185\u3001\u5916\u6DCB\u5DF4\u5206\u5F00\u3002"],source:Ge("L16",14)},helicotrema:{name:["Helicotrema","\u8717\u5B54"],scene:"cochlea",station:"cochlea",does:["Passage at the apex where the scala vestibuli and scala tympani connect.","\u8033\u8717\u9876\u7AEF\u8FDE\u901A\u524D\u5EAD\u9636\u4E0E\u9F13\u9636\u7684\u901A\u9053\u3002"],next:["Very slow pressure changes pass through here rather than moving the BM.","\u6781\u6162\u7684\u538B\u529B\u53D8\u5316\u53EF\u4ECE\u6B64\u5904\u7ED5\u8FC7\uFF0C\u800C\u4E0D\u63A8\u52A8\u57FA\u5E95\u819C\u3002"],source:Ge("L15",7)},"spiral-lamina":{name:["Osseous spiral lamina","\u9AA8\u87BA\u65CB\u677F"],scene:"cochlea",station:"cochlea",does:["Bony shelf from the modiolus. The BM spans from its edge to the outer wall.","\u4ECE\u8717\u8F74\u4F38\u51FA\u7684\u9AA8\u6027\u8584\u677F\uFF1B\u57FA\u5E95\u819C\u4ECE\u5176\u8FB9\u7F18\u5EF6\u4F38\u5230\u5916\u4FA7\u58C1\u3002"],next:["Nerve fibers pass through it to reach the hair cells.","\u795E\u7ECF\u7EA4\u7EF4\u7A7F\u8FC7\u5B83\u5230\u8FBE\u6BDB\u7EC6\u80DE\u3002"],source:Ge("L16",14)},"tectorial-membrane":{name:["Tectorial membrane (TM)","\u76D6\u819C"],scene:"corti",station:"hair-cells",does:["Gel flap over the hair cells, anchored at the limbus. The tallest OHC stereocilia touch it.","\u8986\u76D6\u6BDB\u7EC6\u80DE\u7684\u80F6\u72B6\u819C\uFF0C\u56FA\u5B9A\u4E8E\u87BA\u65CB\u7F18\uFF1B\u5916\u6BDB\u7EC6\u80DE\u6700\u9AD8\u7684\u9759\u7EA4\u6BDB\u4E0E\u5176\u63A5\u89E6\u3002"],next:["BM up \u2192 it shifts laterally relative to the reticular lamina \u2192 shear bends the stereocilia.","\u57FA\u5E95\u819C\u4E0A\u79FB \u2192 \u76D6\u819C\u76F8\u5BF9\u7F51\u72B6\u677F\u5411\u5916\u4FA7\u79FB\u52A8 \u2192 \u526A\u5207\u4F7F\u9759\u7EA4\u6BDB\u5F2F\u66F2\u3002"],source:Ge("L19",5)},"reticular-lamina":{name:["Reticular lamina","\u7F51\u72B6\u677F"],scene:"corti",station:"hair-cells",does:["Seals the tops of the hair cells. The stereocilia sit in endolymph (high K\u207A) and the cell bodies in perilymph.","\u5C01\u4F4F\u6BDB\u7EC6\u80DE\u9876\u90E8\uFF1A\u9759\u7EA4\u6BDB\u6D78\u5728\u5185\u6DCB\u5DF4\uFF08\u9AD8 K\u207A\uFF09\uFF0C\u80DE\u4F53\u5728\u5916\u6DCB\u5DF4\u4E2D\u3002"],next:["This ionic difference drives K\u207A into the cell when channels open.","\u79BB\u5B50\u5DEE\u4F7F\u901A\u9053\u6253\u5F00\u65F6 K\u207A \u6D41\u5165\u7EC6\u80DE\u3002"],source:Ge("L19",3)},ihc:{name:["Inner hair cell (IHC)","\u5185\u6BDB\u7EC6\u80DE\uFF08IHC\uFF09"],scene:"corti",station:"hair-cells",does:["1 row, ~3500 flask-shaped cells near the modiolus. They provide the main input to the brain (85\u201395% of afferent fibers) and are not motile.","1 \u6392\uFF0C\u7EA6 3500 \u4E2A\u70E7\u74F6\u72B6\u7EC6\u80DE\uFF0C\u9760\u8FD1\u8717\u8F74\uFF1B\u662F\u4F20\u5165\u5927\u8111\u7684\u4E3B\u8981\u6765\u6E90\uFF0885\u201395% \u4F20\u5165\u7EA4\u7EF4\uFF09\uFF0C\u4E0D\u80FD\u8FD0\u52A8\u3002"],next:["Depolarization \u2192 Ca\xB2\u207A entry \u2192 transmitter release \u2192 spikes in Type I fibers.","\u53BB\u6781\u5316 \u2192 Ca\xB2\u207A \u5185\u6D41 \u2192 \u91CA\u653E\u9012\u8D28 \u2192 I \u578B\u7EA4\u7EF4\u4EA7\u751F\u5C16\u5CF0\u3002"],source:Ge("L16","6, 10")},ohc:{name:["Outer hair cell (OHC)","\u5916\u6BDB\u7EC6\u80DE\uFF08OHC\uFF09"],scene:"corti",station:"hair-cells",does:["3 rows, ~12000 cylindrical cells. They are motile: depolarization shortens them through prestin, and repolarization lengthens them.","3 \u6392\uFF0C\u7EA6 12000 \u4E2A\u5706\u67F1\u5F62\u7EC6\u80DE\uFF1B\u53EF\u8FD0\u52A8\uFF1A\u53BB\u6781\u5316\u65F6\u7ECF prestin \u7F29\u77ED\uFF0C\u590D\u6781\u5316\u65F6\u4F38\u957F\u3002"],next:["Feed mechanical energy back into the BM. This is the cochlear amplifier: more sensitivity and sharper tuning.","\u628A\u673A\u68B0\u80FD\u53CD\u9988\u5230\u57FA\u5E95\u819C\u2014\u2014\u8033\u8717\u653E\u5927\u5668\uFF1A\u66F4\u7075\u654F\u3001\u8C03\u8C10\u66F4\u5C16\u3002"],source:Ge("L19","8\u201310")},stereocilia:{name:["Stereocilia (hair bundle)","\u9759\u7EA4\u6BDB\uFF08\u6BDB\u675F\uFF09"],scene:"corti",station:"hair-cells",does:["Staircase rows linked by tip links. About 40 per IHC and about 150 per OHC.","\u9636\u68AF\u72B6\u6392\u5217\u3001\u7531\u9876\u8FDE\u76F8\u8FDE\uFF1BIHC \u7EA6 40 \u6839\uFF0COHC \u7EA6 150 \u6839\u3002"],next:["Bending toward the tallest row stretches the tip links and opens mechanically gated K\u207A channels.","\u5411\u6700\u9AD8\u4E00\u6392\u5F2F\u66F2\u65F6\u9876\u8FDE\u88AB\u62C9\u7D27\uFF0C\u673A\u68B0\u95E8\u63A7 K\u207A \u901A\u9053\u6253\u5F00\u3002"],source:Ge("L19",4)},"pillar-cells":{name:["Pillar cells \xB7 tunnel of Corti","\u67F1\u7EC6\u80DE \xB7 Corti \u96A7\u9053"],scene:"corti",station:"hair-cells",does:["Inner and outer pillars form a stiff triangular tunnel between the IHC and the OHCs.","\u5185\u3001\u5916\u67F1\u7EC6\u80DE\u5728 IHC \u4E0E OHC \u4E4B\u95F4\u56F4\u6210\u575A\u786C\u7684\u4E09\u89D2\u5F62\u96A7\u9053\u3002"],next:["Transmits BM motion to the reticular lamina.","\u628A\u57FA\u5E95\u819C\u8FD0\u52A8\u4F20\u5230\u7F51\u72B6\u677F\u3002"],source:Ge("L16",14)},"deiters-cells":{name:["Deiters' cells","Deiters \u7EC6\u80DE"],scene:"corti",station:"hair-cells",does:["Supporting cells that cup the base of each OHC.","\u6258\u4F4F\u6BCF\u4E2A\u5916\u6BDB\u7EC6\u80DE\u5E95\u90E8\u7684\u652F\u6301\u7EC6\u80DE\u3002"],next:["Couple OHC length changes to the BM.","\u628A\u5916\u6BDB\u7EC6\u80DE\u7684\u957F\u5EA6\u53D8\u5316\u8026\u5408\u5230\u57FA\u5E95\u819C\u3002"],source:Ge("L16",13)},"afferent-fiber":{name:["Type I afferent fiber","I \u578B\u4F20\u5165\u7EA4\u7EF4"],scene:"corti",station:"hair-cells",does:["Radial fibers. Many fibers (\u224810\u201320) contact one IHC (convergence). Type II fibers spiral along the OHCs (divergence).","\u653E\u5C04\u72B6\u7EA4\u7EF4\uFF0C\u591A\u6839\uFF08\u7EA6 10\u201320\uFF09\u8FDE\u5230\u4E00\u4E2A IHC\uFF08\u6C47\u805A\uFF09\uFF1BII \u578B\u7EA4\u7EF4\u6CBF\u5916\u6BDB\u7EC6\u80DE\u87BA\u65CB\u8D70\u884C\uFF08\u53D1\u6563\uFF09\u3002"],next:["Transmitter release \u2192 action potentials travel to the spiral ganglion and nerve.","\u9012\u8D28\u91CA\u653E \u2192 \u52A8\u4F5C\u7535\u4F4D\u4F20\u5411\u87BA\u65CB\u795E\u7ECF\u8282\u548C\u542C\u795E\u7ECF\u3002"],source:Ge("L16",10)},"efferent-fiber":{name:["Efferent (olivocochlear) fiber","\u4F20\u51FA\uFF08\u6A44\u6984\u8033\u8717\uFF09\u7EA4\u7EF4"],scene:"corti",station:"hair-cells",does:["Carries signals from the brainstem to the periphery and mainly targets the OHCs.","\u4ECE\u8111\u5E72\u4F20\u5411\u5916\u5468\uFF0C\u4E3B\u8981\u4F5C\u7528\u4E8E\u5916\u6BDB\u7EC6\u80DE\u3002"],next:["Can modify OHC motility, giving top-down control of cochlear gain.","\u53EF\u8C03\u8282 OHC \u8FD0\u52A8\u2014\u2014\u81EA\u4E0A\u800C\u4E0B\u63A7\u5236\u8033\u8717\u589E\u76CA\u3002"],source:Ge("L19",10)},"spiral-ganglion":{name:["Spiral ganglion","\u87BA\u65CB\u795E\u7ECF\u8282"],scene:"nerve",station:"auditory-nerve",does:["Cell bodies of the auditory-nerve fibers inside the modiolus. Each fiber keeps the CF of its place on the BM.","\u542C\u795E\u7ECF\u7EA4\u7EF4\u7684\u80DE\u4F53\uFF0C\u4F4D\u4E8E\u8717\u8F74\u5185\uFF1B\u6BCF\u6839\u7EA4\u7EF4\u4FDD\u7559\u5176\u5728\u57FA\u5E95\u819C\u4E0A\u4F4D\u7F6E\u7684\u7279\u5F81\u9891\u7387\uFF08CF\uFF09\u3002"],next:["Their axons form the auditory nerve. Losing fibers means less information reaches the brain.","\u5176\u8F74\u7A81\u7EC4\u6210\u542C\u795E\u7ECF\uFF1B\u7EA4\u7EF4\u4E22\u5931\u610F\u5473\u7740\u5230\u8FBE\u5927\u8111\u7684\u4FE1\u606F\u51CF\u5C11\u3002"],source:Ge("L16",12)}},ar={an:{name:["Auditory nerve","\u542C\u795E\u7ECF"],letter:"A"},cn:{name:["Cochlear nucleus (CN)","\u8033\u8717\u6838\uFF08CN\uFF09"],letter:"C",does:["First obligatory central relay; outputs diverge to both sides.","\u7B2C\u4E00\u4E2A\u5FC5\u7ECF\u7684\u4E2D\u67A2\u4E2D\u7EE7\u7AD9\uFF1B\u8F93\u51FA\u6295\u5C04\u5230\u53CC\u4FA7\u3002"]},soc:{name:["Superior olivary complex (SOC)","\u4E0A\u6A44\u6984\u590D\u5408\u4F53\uFF08SOC\uFF09"],letter:"S",does:["First major convergence of input from both ears (binaural). Some paths bypass it.","\u53CC\u8033\u8F93\u5165\u9996\u6B21\u5927\u89C4\u6A21\u6C47\u5408\u5904\uFF1B\u90E8\u5206\u901A\u8DEF\u53EF\u7ED5\u8FC7\u5B83\u3002"]},ll:{name:["Lateral lemniscus (LL)","\u5916\u4FA7\u4E18\u7CFB\uFF08LL\uFF09"],letter:"L",does:["Major tract to the inferior colliculus; also carries descending fibers.","\u901A\u5411\u4E0B\u4E18\u7684\u4E3B\u8981\u7EA4\u7EF4\u675F\uFF0C\u4E5F\u542B\u4E0B\u884C\u7EA4\u7EF4\u3002"]},ic:{name:["Inferior colliculus (IC)","\u4E0B\u4E18\uFF08IC\uFF09"],letter:"I",does:["Obligatory midbrain relay where brainstem routes converge.","\u4E2D\u8111\u5FC5\u7ECF\u4E2D\u7EE7\u7AD9\uFF0C\u8111\u5E72\u5404\u901A\u8DEF\u5728\u6B64\u6C47\u805A\u3002"]},mgb:{name:["Medial geniculate body (MGB)","\u5185\u4FA7\u819D\u72B6\u4F53\uFF08MGB\uFF09"],letter:"M",does:["Thalamic relay; obligatory synapse on the way to cortex.","\u4E18\u8111\u4E2D\u7EE7\u7AD9\uFF0C\u901A\u5F80\u76AE\u5C42\u7684\u5FC5\u7ECF\u7A81\u89E6\u3002"]},ac:{name:["Auditory cortex (A1)","\u542C\u89C9\u76AE\u5C42\uFF08A1\uFF09"],letter:"A",does:["Cortical destination; A1 lies in the core region.","\u76AE\u5C42\u7EC8\u70B9\uFF0CA1 \u4F4D\u4E8E\u6838\u5FC3\u533A\u3002"]}},xs=[{id:"outer-ear",n:1,scene:"ear",title:["Outer ear","\u5916\u8033"],question:["How does a pressure wave in air reach the eardrum?","\u7A7A\u6C14\u4E2D\u7684\u538B\u529B\u6CE2\u600E\u6837\u5230\u8FBE\u9F13\u819C\uFF1F"],signal:{kind:"pressure",label:["Air pressure \u2192 eardrum displacement","\u7A7A\u6C14\u538B\u529B \u2192 \u9F13\u819C\u4F4D\u79FB"]},scale:["Slowed far below audio rate; particle motion and TM motion exaggerated.","\u753B\u9762\u8FDC\u6162\u4E8E\u771F\u5B9E\u58F0\u9891\uFF1B\u7A7A\u6C14\u8D28\u70B9\u4E0E\u9F13\u819C\u4F4D\u79FB\u5747\u4E3A\u5938\u5927\u793A\u610F\u3002"],see:["Dots are air particles. Where they crowd together (warm) is a compression; where they spread out (cool) is a rarefaction. The pattern travels down the canal and pushes the eardrum in and out.","\u5706\u70B9\u4EE3\u8868\u7A7A\u6C14\u8D28\u70B9\uFF1A\u805A\u96C6\u5904\uFF08\u6696\u8272\uFF09\u4E3A\u538B\u7F29\uFF0C\u7A00\u758F\u5904\uFF08\u51B7\u8272\uFF09\u4E3A\u7A00\u758F\u3002\u8FD9\u4E00\u758F\u5BC6\u56FE\u6837\u6CBF\u8033\u9053\u4F20\u64AD\uFF0C\u63A8\u52A8\u9F13\u819C\u5185\u5916\u632F\u52A8\u3002"],lessons:[{slug:"l13"},{slug:"l04"},{slug:"l12",extra:!0}],structures:["pinna","concha","ear-canal","tympanic-membrane"],minimap:"outer",tasks:[{id:"oe-particle",kind:"predict",skill:["Sound moves as a pressure pattern; air particles oscillate in place","\u58F0\u97F3\u4EE5\u538B\u529B\u56FE\u6837\u4F20\u64AD\uFF0C\u7A7A\u6C14\u8D28\u70B9\u539F\u5730\u5F80\u590D"],prompt:["One air particle wears a white ring. Predict: as the wave passes, does that particle travel all the way to the eardrum?","\u6709\u4E00\u4E2A\u7A7A\u6C14\u8D28\u70B9\u5E26\u767D\u8272\u5706\u73AF\u3002\u9884\u6D4B\uFF1A\u58F0\u6CE2\u7ECF\u8FC7\u65F6\uFF0C\u8FD9\u4E2A\u8D28\u70B9\u4F1A\u4E00\u8DEF\u8D70\u5230\u9F13\u819C\u5417\uFF1F"],options:[{id:"travel",label:["Yes. It rides the wave to the eardrum.","\u4F1A\uFF0C\u5B83\u968F\u6CE2\u4E00\u8DEF\u5230\u8FBE\u9F13\u819C\u3002"]},{id:"oscillate",label:["No. It moves back and forth around one spot while the pattern travels on.","\u4E0D\u4F1A\uFF0C\u5B83\u5728\u539F\u4F4D\u9644\u8FD1\u6765\u56DE\u632F\u52A8\uFF0C\u56FE\u6837\u7EE7\u7EED\u5411\u524D\u4F20\u3002"],correct:!0}],verify:{action:"track",cta:["Turn on \u201CFollow a particle\u201D below the model","\u5728\u6A21\u578B\u4E0B\u65B9\u6253\u5F00\u201C\u8FFD\u8E2A\u8D28\u70B9\u201D"]},explain:["The ringed particle moves back and forth along the canal axis and returns near where it started. Energy and the compression\u2013rarefaction pattern travel to the eardrum; the air itself does not flow there. This is a longitudinal pressure wave.","\u5E26\u73AF\u8D28\u70B9\u53EA\u6CBF\u8033\u9053\u8F74\u6765\u56DE\u632F\u52A8\uFF0C\u53C8\u56DE\u5230\u8D77\u70B9\u9644\u8FD1\u3002\u4F20\u5230\u9F13\u819C\u7684\u662F\u80FD\u91CF\u548C\u538B\u7F29\u2014\u7A00\u758F\u56FE\u6837\uFF0C\u800C\u4E0D\u662F\u7A7A\u6C14\u672C\u8EAB\u2014\u2014\u8FD9\u5C31\u662F\u7EB5\u5411\u538B\u529B\u6CE2\u3002"],source:Ge("L04","5\u20139")},{id:"oe-tm",kind:"pick",hideLabels:!0,answer:["tympanic-membrane"],skill:["Locate the tympanic membrane as the outer/middle-ear boundary","\u5B9A\u4F4D\u9F13\u819C\uFF1A\u5916\u8033\u4E0E\u4E2D\u8033\u7684\u5206\u754C"],prompt:["On the model, click the membrane that the pressure wave pushes first.","\u5728\u6A21\u578B\u4E0A\u70B9\u51FA\u538B\u529B\u6CE2\u6700\u5148\u63A8\u52A8\u7684\u90A3\u5C42\u819C\u3002"],hint:["Follow the canal to its far end, where the dots stop.","\u6CBF\u8033\u9053\u8D70\u5230\u5C3D\u5934\u2014\u2014\u5706\u70B9\u505C\u4E0B\u7684\u5730\u65B9\u3002"],explain:["That is the tympanic membrane, the boundary between the outer and middle ear. A compression pushes it inward and a rarefaction lets it move outward. Its vibration drives the malleus.","\u8FD9\u662F\u9F13\u819C\uFF0C\u5916\u8033\u4E0E\u4E2D\u8033\u7684\u5206\u754C\u3002\u538B\u7F29\u628A\u5B83\u63A8\u5411\u5185\u4FA7\uFF0C\u7A00\u758F\u8BA9\u5B83\u56DE\u5230\u5916\u4FA7\uFF1B\u9F13\u819C\u632F\u52A8\u5E26\u52A8\u9524\u9AA8\u3002"],source:Ge("L13",9)},{id:"oe-boost",kind:"choice",optional:!0,skill:["Relate ear-canal and concha resonance to the outer-ear boost","\u628A\u5916\u8033\u9053\u3001\u8033\u7532\u8154\u5171\u632F\u548C\u5916\u8033\u589E\u76CA\u8054\u7CFB\u8D77\u6765"],prompt:["Optional. Move the \u201CFrequency\u201D slider below the model and watch the canal glow and the gain curve. At which frequency does the ear canal alone add the most gain?","\u8FDB\u9636\uFF1A\u62D6\u52A8\u6A21\u578B\u4E0B\u65B9\u7684\u201C\u9891\u7387\u201D\u6ED1\u5757\uFF0C\u89C2\u5BDF\u8033\u9053\u53D1\u5149\u4E0E\u589E\u76CA\u66F2\u7EBF\u3002\u5916\u8033\u9053\u672C\u8EAB\u5728\u54EA\u4E2A\u9891\u7387\u589E\u76CA\u6700\u5927\uFF1F"],options:[{id:"500",label:["About 500 Hz","\u7EA6 500 Hz"],feedback:["At 500 Hz the canal adds almost nothing. Its resonance is higher.","500 Hz \u65F6\u8033\u9053\u51E0\u4E4E\u4E0D\u589E\u76CA\uFF0C\u5B83\u7684\u5171\u632F\u66F4\u9AD8\u3002"]},{id:"2500",label:["About 2.5 kHz","\u7EA6 2.5 kHz"],correct:!0},{id:"8000",label:["About 8 kHz","\u7EA6 8 kHz"],feedback:["8 kHz is above both peaks; the curve is falling there.","8 kHz \u5DF2\u9AD8\u4E8E\u4E24\u4E2A\u5CF0\uFF0C\u589E\u76CA\u5728\u4E0B\u964D\u3002"]}],explain:["The canal resonates near ~2.5 kHz and the concha near ~5 kHz. Together they boost roughly 1.5\u20137 kHz by about 10\u201315 dB, a range that matters for speech.","\u8033\u9053\u7EA6\u5728 2.5 kHz \u5171\u632F\uFF0C\u8033\u7532\u8154\u7EA6\u5728 5 kHz\uFF1B\u5408\u8D77\u6765\u4F7F\u7EA6 1.5\u20137 kHz \u63D0\u5347 10\u201315 dB\uFF0C\u5BF9\u8A00\u8BED\u5F88\u91CD\u8981\u3002"],source:Ge("L13",6)}]},{id:"middle-ear",n:2,scene:"ear",title:["Middle ear","\u4E2D\u8033"],question:["How does vibration in air get into the cochlear fluid without being mostly reflected?","\u7A7A\u6C14\u4E2D\u7684\u632F\u52A8\u600E\u6837\u8FDB\u5165\u8033\u8717\u6DB2\u4F53\uFF0C\u800C\u4E0D\u88AB\u5927\u90E8\u5206\u53CD\u5C04\uFF1F"],signal:{kind:"displacement",label:["Structure displacement: TM \u2192 ossicles \u2192 oval window","\u7ED3\u6784\u4F4D\u79FB\uFF1A\u9F13\u819C \u2192 \u542C\u5C0F\u9AA8 \u2192 \u5375\u5706\u7A97"]},scale:["Rotation and piston motion exaggerated; slowed.","\u8F6C\u52A8\u4E0E\u6D3B\u585E\u8FD0\u52A8\u5747\u5938\u5927\u5E76\u6162\u653E\u3002"],see:["The TM swings the malleus. Malleus and incus rotate together, and the stapes footplate pistons in the oval window. Watch the round window bulge the opposite way.","\u9F13\u819C\u5E26\u52A8\u9524\u9AA8\uFF1B\u9524\u9AA8\u548C\u7827\u9AA8\u4E00\u8D77\u8F6C\u52A8\uFF0C\u956B\u9AA8\u5E95\u677F\u5728\u5375\u5706\u7A97\u4E0A\u505A\u6D3B\u585E\u8FD0\u52A8\u3002\u6CE8\u610F\u5706\u7A97\u671D\u76F8\u53CD\u65B9\u5411\u9F13\u51FA\u3002"],lessons:[{slug:"l14"}],structures:["tympanic-membrane","malleus","incus","stapes","oval-window","round-window","eustachian-tube","stapedius","tensor-tympani"],minimap:"middle",stepper:!0,tasks:[{id:"me-chain",kind:"sequence",hideLabels:!0,answer:["malleus","incus","stapes","oval-window"],skill:["Trace the ossicular chain to the oval window","\u6309\u987A\u5E8F\u8FFD\u8E2A\u542C\u9AA8\u94FE\u5230\u5375\u5706\u7A97"],prompt:["Click, in order, the parts that carry the vibration from the eardrum into the inner ear. Use \u201CStep\u201D to watch one link at a time.","\u6309\u987A\u5E8F\u70B9\u51FA\u628A\u632F\u52A8\u4ECE\u9F13\u819C\u9001\u8FDB\u5185\u8033\u7684\u7ED3\u6784\u3002\u53EF\u7528\u201C\u5355\u6B65\u201D\u9010\u8282\u89C2\u5BDF\u3002"],stepPrompts:[["1st: the bone attached to the eardrum","\u7B2C 1 \u4E2A\uFF1A\u8FDE\u5728\u9F13\u819C\u4E0A\u7684\u9AA8"],["2nd: the bone it rotates with","\u7B2C 2 \u4E2A\uFF1A\u4E0E\u5B83\u4E00\u8D77\u8F6C\u52A8\u7684\u9AA8"],["3rd: the bone whose footplate pistons","\u7B2C 3 \u4E2A\uFF1A\u5E95\u677F\u505A\u6D3B\u585E\u8FD0\u52A8\u7684\u9AA8"],["4th: the opening that footplate pushes on","\u7B2C 4 \u4E2A\uFF1A\u5E95\u677F\u63A8\u52A8\u7684\u5F00\u53E3"]],explain:["Malleus \u2192 incus \u2192 stapes \u2192 oval window. The stapes footplate pushes the oval window, creating a pressure wave in the scala vestibuli. The round window below moves the opposite way.","\u9524\u9AA8 \u2192 \u7827\u9AA8 \u2192 \u956B\u9AA8 \u2192 \u5375\u5706\u7A97\u3002\u956B\u9AA8\u5E95\u677F\u63A8\u52A8\u5375\u5706\u7A97\uFF0C\u5728\u524D\u5EAD\u9636\u5185\u4EA7\u751F\u538B\u529B\u6CE2\uFF1B\u4E0B\u65B9\u5706\u7A97\u53CD\u5411\u8FD0\u52A8\u3002"],source:Ge("L14",4)},{id:"me-area",kind:"predict",skill:["Predict pressure gain from the TM-to-footplate area ratio","\u7528\u9F13\u819C/\u5E95\u677F\u9762\u79EF\u6BD4\u9884\u6D4B\u538B\u5F3A\u589E\u76CA"],prompt:["The same force F acts on the TM (\u224855 mm\xB2) and is delivered to the footplate (\u22483.2 mm\xB2). Predict the pressure at the oval window compared with the TM.","\u540C\u6837\u7684\u529B F \u4F5C\u7528\u4E8E\u9F13\u819C\uFF08\u7EA6 55 mm\xB2\uFF09\uFF0C\u518D\u4F20\u5230\u956B\u9AA8\u5E95\u677F\uFF08\u7EA6 3.2 mm\xB2\uFF09\u3002\u9884\u6D4B\uFF1A\u5375\u5706\u7A97\u5904\u7684\u538B\u5F3A\u4E0E\u9F13\u819C\u5904\u76F8\u6BD4\u5982\u4F55\uFF1F"],options:[{id:"less",label:["About 17\xD7 smaller","\u7EA6\u5C0F 17 \u500D"]},{id:"same",label:["About the same: same force, same pressure","\u5DEE\u4E0D\u591A\uFF1A\u529B\u76F8\u540C\uFF0C\u538B\u5F3A\u76F8\u540C"]},{id:"more",label:["About 17\xD7 larger","\u7EA6\u5927 17 \u500D"],correct:!0}],verify:{action:"areas",cta:["Turn on \u201CShow areas\u201D below the model","\u5728\u6A21\u578B\u4E0B\u65B9\u6253\u5F00\u201C\u663E\u793A\u9762\u79EF\u201D"]},explain:["p = F / A. The force is the same but the area is \u224817\xD7 smaller (55 / 3.2 \u2248 17), so pressure rises \u224817\xD7, and 20\xB7log\u2081\u2080(17) \u2248 25 dB. The areal ratio is the largest part of the middle-ear gain.","p = F / A\u3002\u529B\u4E0D\u53D8\u3001\u9762\u79EF\u7EA6\u5C0F 17 \u500D\uFF0855 / 3.2 \u2248 17\uFF09\uFF0C\u538B\u5F3A\u7EA6\u589E\u5927 17 \u500D\uFF0C\u5373 20\xB7log\u2081\u2080(17) \u2248 25 dB\u3002\u9762\u79EF\u6BD4\u662F\u4E2D\u8033\u589E\u76CA\u4E2D\u6700\u5927\u7684\u4E00\u90E8\u5206\u3002"],source:Ge("L14",14)},{id:"me-total",kind:"choice",skill:["Combine areal ratio, lever and TM buckling into \u224833 dB","\u628A\u9762\u79EF\u6BD4\u3001\u6760\u6746\u548C\u9F13\u819C\u5F2F\u66F2\u5408\u6210\u7EA6 33 dB"],prompt:["Combine the three mechanisms: areal ratio \xD717, ossicular lever \xD71.3 and TM buckling \xD72. What total gain does the course give?","\u5408\u5E76\u4E09\u79CD\u673A\u5236\uFF1A\u9762\u79EF\u6BD4 \xD717\u3001\u542C\u9AA8\u6760\u6746 \xD71.3\u3001\u9F13\u819C\u5F2F\u66F2 \xD72\u3002\u8BFE\u7A0B\u7ED9\u51FA\u7684\u603B\u589E\u76CA\u7EA6\u662F\u591A\u5C11\uFF1F"],options:[{id:"25",label:["\u2248 25 dB","\u7EA6 25 dB"],feedback:["That is the areal ratio alone. Multiply in the lever and buckling too.","\u8FD9\u53EA\u662F\u9762\u79EF\u6BD4\u3002\u8FD8\u8981\u4E58\u4E0A\u6760\u6746\u548C\u9F13\u819C\u5F2F\u66F2\u3002"]},{id:"33",label:["\u2248 33 dB (17 \xD7 1.3 \xD7 2 \u2248 44)","\u7EA6 33 dB\uFF0817 \xD7 1.3 \xD7 2 \u2248 44\uFF09"],correct:!0},{id:"60",label:["\u2248 60 dB","\u7EA6 60 dB"],feedback:["Too large. Pressure ratios multiply, then take 20\xB7log\u2081\u2080 once.","\u592A\u5927\u4E86\u3002\u538B\u5F3A\u6BD4\u5148\u76F8\u4E58\uFF0C\u518D\u53D6\u4E00\u6B21 20\xB7log\u2081\u2080\u3002"]}],explain:["17 \xD7 1.3 \xD7 2 \u2248 44, and 20\xB7log\u2081\u2080(44) \u2248 33 dB. That roughly offsets the ~33 dB that would be lost to reflection at the air-to-fluid boundary (the impedance mismatch).","17 \xD7 1.3 \xD7 2 \u2248 44\uFF0C20\xB7log\u2081\u2080(44) \u2248 33 dB\u2014\u2014\u5927\u81F4\u62B5\u6D88\u4E86\u7A7A\u6C14\u5230\u6DB2\u4F53\u754C\u9762\u56E0\u963B\u6297\u5931\u914D\u800C\u53CD\u5C04\u635F\u5931\u7684\u7EA6 33 dB\u3002"],source:Ge("L14","16\u201317")}]},{id:"cochlea",n:3,scene:"cochlea",title:["Cochlea","\u8033\u8717"],question:["How does the cochlea separate one frequency from another?","\u8033\u8717\u5982\u4F55\u628A\u4E0D\u540C\u9891\u7387\u5206\u5F00\uFF1F"],signal:{kind:"bm",label:["Basilar-membrane traveling wave (displacement)","\u57FA\u5E95\u819C\u884C\u6CE2\uFF08\u4F4D\u79FB\uFF09"]},scale:["Slowed; visual cycle rate is not the tone frequency. Peak places follow a schematic frequency\u2013place map.","\u6162\u653E\uFF1B\u753B\u9762\u5468\u671F\u4E0D\u7B49\u4E8E\u58F0\u97F3\u9891\u7387\u3002\u5CF0\u503C\u4F4D\u7F6E\u6309\u793A\u610F\u7684\u9891\u7387\u2014\u4F4D\u7F6E\u56FE\u7ED8\u5236\u3002"],see:["The coiled duct unrolls. The stapes pushes the oval window, and a wave travels along the basilar membrane from base to apex. It grows, peaks at one place, then dies out quickly.","\u87BA\u65CB\u7BA1\u9053\u88AB\u5C55\u5F00\u3002\u956B\u9AA8\u63A8\u52A8\u5375\u5706\u7A97\uFF0C\u6CE2\u6CBF\u57FA\u5E95\u819C\u4ECE\u5E95\u7AEF\u5411\u9876\u7AEF\u4F20\u64AD\uFF1A\u9010\u6E10\u589E\u5927\uFF0C\u5728\u67D0\u5904\u8FBE\u5230\u5CF0\u503C\uFF0C\u968F\u540E\u8FC5\u901F\u8870\u51CF\u3002"],lessons:[{slug:"l15"},{slug:"l16",anchor:3}],structures:["scala-vestibuli","scala-media","scala-tympani","basilar-membrane","reissner-membrane","helicotrema","spiral-lamina","oval-window","round-window"],minimap:"cochlea",tasks:[{id:"co-scalae",kind:"sequence",hideLabels:!0,answer:["scala-vestibuli","scala-tympani","helicotrema"],skill:["Identify the scalae, windows and helicotrema","\u8FA8\u8BA4\u4E09\u9636\u3001\u4E24\u7A97\u548C\u8717\u5B54"],prompt:["Locate the fluid path on the unrolled cochlea.","\u5728\u5C55\u5F00\u7684\u8033\u8717\u4E0A\u627E\u51FA\u6DB2\u4F53\u8DEF\u7EBF\u3002"],stepPrompts:[["Click the chamber connected to the oval window.","\u70B9\u51FA\u4E0E\u5375\u5706\u7A97\u76F8\u8FDE\u7684\u8154\u3002"],["Click the chamber that ends at the round window.","\u70B9\u51FA\u6B62\u4E8E\u5706\u7A97\u7684\u8154\u3002"],["Click the passage that joins them at the apex.","\u70B9\u51FA\u5728\u9876\u7AEF\u8FDE\u901A\u4E24\u8005\u7684\u901A\u9053\u3002"]],explain:["Oval window \u2192 scala vestibuli. Round window \u2192 scala tympani. They join at the helicotrema. The scala media between them holds endolymph, and its floor is the basilar membrane.","\u5375\u5706\u7A97 \u2192 \u524D\u5EAD\u9636\uFF1B\u5706\u7A97 \u2192 \u9F13\u9636\uFF1B\u4E24\u8005\u5728\u8717\u5B54\u76F8\u8FDE\u3002\u5939\u5728\u4E2D\u95F4\u7684\u4E2D\u9636\u5145\u6EE1\u5185\u6DCB\u5DF4\uFF0C\u5176\u5E95\u90E8\u5C31\u662F\u57FA\u5E95\u819C\u3002"],source:Ge("L15","5\u20137")},{id:"co-predict",kind:"predict",setup:{freq:1e3},skill:["Predict how the place of peak displacement moves with frequency","\u9884\u6D4B\u5CF0\u503C\u4F4D\u7F6E\u968F\u9891\u7387\u600E\u6837\u79FB\u52A8"],prompt:["The tone is 1 kHz. Predict: when you switch to 4 kHz, where will the peak of the envelope go?","\u73B0\u5728\u662F 1 kHz\u3002\u9884\u6D4B\uFF1A\u5207\u6362\u5230 4 kHz \u65F6\uFF0C\u5305\u7EDC\u5CF0\u503C\u4F1A\u5F80\u54EA\u91CC\u79FB\u52A8\uFF1F"],options:[{id:"base",label:["Toward the base (near the oval window)","\u5411\u5E95\u7AEF\uFF08\u9760\u8FD1\u5375\u5706\u7A97\uFF09"],correct:!0},{id:"apex",label:["Toward the apex","\u5411\u9876\u7AEF"]},{id:"same",label:["Same place; only the speed changes","\u4F4D\u7F6E\u4E0D\u53D8\uFF0C\u53EA\u662F\u66F4\u5FEB"]}],verify:{event:"freq",value:4e3,cta:["Press 4 kHz below the model. The 1 kHz envelope stays as a dashed line.","\u6309\u6A21\u578B\u4E0B\u65B9\u7684 4 kHz\uFF1B1 kHz \u7684\u5305\u7EDC\u4F1A\u4FDD\u7559\u4E3A\u865A\u7EBF\u3002"]},explain:["The 4 kHz peak sits closer to the base, where the BM is narrow and stiff. Low frequencies peak toward the wide, flexible apex. Mapping frequency to place is tonotopic organization.","4 kHz \u7684\u5CF0\u66F4\u9760\u8FD1\u5E95\u7AEF\u2014\u2014\u90A3\u91CC\u57FA\u5E95\u819C\u7A84\u800C\u786C\uFF1B\u4F4E\u9891\u7684\u5CF0\u9760\u8FD1\u5BBD\u800C\u8F6F\u7684\u9876\u7AEF\u3002\u9891\u7387\u5BF9\u5E94\u4F4D\u7F6E\uFF0C\u5373\u97F3\u8C03\u62D3\u6251\uFF08tonotopic\uFF09\u7EC4\u7EC7\u3002"],source:Ge("L15","10, 14")},{id:"co-base",kind:"choice",skill:["Explain why every traveling wave starts at the base","\u8BF4\u660E\u4E3A\u4EC0\u4E48\u6240\u6709\u884C\u6CE2\u90FD\u4ECE\u5E95\u7AEF\u51FA\u53D1"],prompt:["Now try 250 Hz and compare it with the dashed envelope. Where does every traveling wave begin, whatever its frequency?","\u518D\u8BD5 250 Hz\uFF0C\u5E76\u4E0E\u865A\u7EBF\u5305\u7EDC\u6BD4\u8F83\u3002\u65E0\u8BBA\u9891\u7387\u9AD8\u4F4E\uFF0C\u6BCF\u4E2A\u884C\u6CE2\u90FD\u4ECE\u54EA\u91CC\u5F00\u59CB\uFF1F"],options:[{id:"base",label:["At the base, next to the oval window","\u5E95\u7AEF\uFF0C\u7D27\u6328\u5375\u5706\u7A97"],correct:!0},{id:"peak",label:["At its own peak place","\u5404\u81EA\u7684\u5CF0\u503C\u4F4D\u7F6E"],feedback:["The peak is where it ends up largest, not where it starts. Watch the crests leave the base.","\u5CF0\u503C\u662F\u6700\u5927\u5904\uFF0C\u4E0D\u662F\u8D77\u70B9\uFF1B\u770B\u6CE2\u5CF0\u4ECE\u5E95\u7AEF\u51FA\u53D1\u3002"]},{id:"apex",label:["At the apex","\u9876\u7AEF"],feedback:["The crests move away from the windows toward the apex, not the other way.","\u6CE2\u5CF0\u662F\u4ECE\u7A97\u53E3\u4E00\u4FA7\u5411\u9876\u7AEF\u79FB\u52A8\u7684\uFF0C\u800C\u4E0D\u662F\u53CD\u8FC7\u6765\u3002"]}],explain:["The stapes drives the fluid at the base, so every wave starts there. It grows as it travels apically, peaks at its resonant place, and then is damped quickly. A 250 Hz wave displaces almost the whole BM; a 4 kHz wave covers only a short basal region.","\u956B\u9AA8\u5728\u5E95\u7AEF\u63A8\u52A8\u6DB2\u4F53\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u6CE2\u90FD\u4ECE\u5E95\u7AEF\u51FA\u53D1\uFF0C\u5411\u9876\u7AEF\u4F20\u64AD\u65F6\u589E\u5927\uFF0C\u5728\u5171\u632F\u4F4D\u7F6E\u8FBE\u5230\u5CF0\u503C\u540E\u8FC5\u901F\u8870\u51CF\u3002250 Hz \u51E0\u4E4E\u8BA9\u6574\u6761\u57FA\u5E95\u819C\u90FD\u6709\u4F4D\u79FB\uFF0C4 kHz \u53EA\u8986\u76D6\u9760\u5E95\u7AEF\u7684\u4E00\u5C0F\u6BB5\u3002"],source:Ge("L15","13\u201314")}]},{id:"hair-cells",n:4,scene:"corti",title:["Hair cells","\u6BDB\u7EC6\u80DE"],question:["How does basilar-membrane motion become an electrical signal?","\u57FA\u5E95\u819C\u7684\u8FD0\u52A8\u600E\u6837\u53D8\u6210\u7535\u4FE1\u53F7\uFF1F"],signal:{kind:"receptor",label:["Hair-bundle deflection \u2192 receptor potential (mV)","\u6BDB\u675F\u504F\u8F6C \u2192 \u53D7\u4F53\u7535\u4F4D\uFF08mV\uFF09"]},scale:["Bundle deflection and OHC length change exaggerated; voltages schematic around a \u2248 \u221260 mV rest.","\u6BDB\u675F\u504F\u8F6C\u4E0E\u5916\u6BDB\u7EC6\u80DE\u957F\u5EA6\u53D8\u5316\u5747\u5938\u5927\uFF1B\u7535\u538B\u4EE5\u7EA6 \u221260 mV \u9759\u606F\u4E3A\u793A\u610F\u3002"],see:["One slice of the organ of Corti. The modiolus is to the left and the outer wall to the right. When the BM moves up, the tectorial membrane slides relative to the hair-cell tops and the stereocilia bend.","Corti \u5668\u7684\u4E00\u4E2A\u5207\u7247\uFF1A\u5DE6\u4FA7\u4E3A\u8717\u8F74\uFF0C\u53F3\u4FA7\u4E3A\u5916\u4FA7\u58C1\u3002\u57FA\u5E95\u819C\u4E0A\u79FB\u65F6\uFF0C\u76D6\u819C\u76F8\u5BF9\u6BDB\u7EC6\u80DE\u9876\u90E8\u6ED1\u52A8\uFF0C\u9759\u7EA4\u6BDB\u968F\u4E4B\u5F2F\u66F2\u3002"],lessons:[{slug:"l19"},{slug:"l16",anchor:3}],structures:["basilar-membrane","tectorial-membrane","reticular-lamina","ihc","ohc","stereocilia","pillar-cells","deiters-cells","afferent-fiber","efferent-fiber"],minimap:"corti",stepper:!0,tasks:[{id:"hc-direction",kind:"choice",setup:{bm:0,paused:!0},skill:["Link BM displacement to the direction of stereocilia shear","\u628A\u57FA\u5E95\u819C\u4F4D\u79FB\u4E0E\u9759\u7EA4\u6BDB\u526A\u5207\u65B9\u5411\u8054\u7CFB\u8D77\u6765"],prompt:["Paused: the BM is about to move up, toward the scala vestibuli. Which way will the hair bundles bend relative to their cells?","\u5DF2\u6682\u505C\uFF1A\u57FA\u5E95\u819C\u5373\u5C06\u5411\u4E0A\uFF08\u671D\u524D\u5EAD\u9636\uFF09\u79FB\u52A8\u3002\u6BDB\u675F\u76F8\u5BF9\u7EC6\u80DE\u4F1A\u671D\u54EA\u8FB9\u5F2F\uFF1F"],options:[{id:"tall",label:["Toward the tallest stereocilia (toward the outer wall)","\u671D\u6700\u9AD8\u7684\u9759\u7EA4\u6BDB\uFF08\u671D\u5916\u4FA7\u58C1\uFF09"],correct:!0},{id:"short",label:["Toward the shortest stereocilia (toward the modiolus)","\u671D\u6700\u77ED\u7684\u9759\u7EA4\u6BDB\uFF08\u671D\u8717\u8F74\uFF09"],feedback:["That happens when the BM moves down, toward the scala tympani. Then the cell hyperpolarizes.","\u90A3\u662F\u57FA\u5E95\u819C\u5411\u4E0B\uFF08\u671D\u9F13\u9636\uFF09\u65F6\u7684\u60C5\u51B5\uFF0C\u6B64\u65F6\u7EC6\u80DE\u8D85\u6781\u5316\u3002"]}],after:{bm:.9},explain:["BM up \u2192 the tectorial membrane shifts laterally relative to the reticular lamina \u2192 shear bends the bundles toward their tallest row, toward the outer wall. BM down reverses it.","\u57FA\u5E95\u819C\u4E0A\u79FB \u2192 \u76D6\u819C\u76F8\u5BF9\u7F51\u72B6\u677F\u5411\u5916\u4FA7\u79FB\u52A8 \u2192 \u526A\u5207\u4F7F\u6BDB\u675F\u671D\u6700\u9AD8\u4E00\u6392\uFF08\u671D\u5916\u4FA7\u58C1\uFF09\u5F2F\u66F2\u3002\u57FA\u5E95\u819C\u4E0B\u79FB\u5219\u76F8\u53CD\u3002"],source:Ge("L19",5)},{id:"hc-channels",kind:"predict",skill:["Predict channel gating, K\u207A influx and depolarization","\u9884\u6D4B\u901A\u9053\u5F00\u653E\u3001K\u207A \u5185\u6D41\u4E0E\u53BB\u6781\u5316"],prompt:["Predict what happens inside the hair cell when its bundle bends toward the tallest stereocilia.","\u9884\u6D4B\uFF1A\u6BDB\u675F\u671D\u6700\u9AD8\u9759\u7EA4\u6BDB\u5F2F\u66F2\u65F6\uFF0C\u6BDB\u7EC6\u80DE\u5185\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F"],options:[{id:"open",label:["Tip links stretch, channels open, K\u207A from the endolymph flows in, and the cell depolarizes","\u9876\u8FDE\u62C9\u7D27\uFF0C\u901A\u9053\u6253\u5F00\uFF0C\u5185\u6DCB\u5DF4 K\u207A \u6D41\u5165\uFF0C\u7EC6\u80DE\u53BB\u6781\u5316"],correct:!0},{id:"close",label:["Channels close and the cell hyperpolarizes","\u901A\u9053\u5173\u95ED\uFF0C\u7EC6\u80DE\u8D85\u6781\u5316"]},{id:"na",label:["Na\u207A from the perilymph enters at the tips","\u5916\u6DCB\u5DF4\u4E2D\u7684 Na\u207A \u4ECE\u9876\u7AEF\u6D41\u5165"]}],verify:{action:"step",count:3,cta:["Press \u201CStep\u201D to advance through tip links \u2192 K\u207A \u2192 potential","\u6309\u201C\u5355\u6B65\u201D\u4F9D\u6B21\u67E5\u770B\uFF1A\u9876\u8FDE \u2192 K\u207A \u2192 \u7535\u4F4D"]},explain:["The stereocilia sit in K\u207A-rich endolymph. Tip-link-gated channels open, K\u207A enters, and the cell depolarizes from \u2248 \u221260 mV. Hair cells are not neurons, but this receptor potential behaves like a neuron\u2019s.","\u9759\u7EA4\u6BDB\u6D78\u5728\u5BCC\u542B K\u207A \u7684\u5185\u6DCB\u5DF4\u4E2D\u3002\u9876\u8FDE\u95E8\u63A7\u901A\u9053\u6253\u5F00\uFF0CK\u207A \u6D41\u5165\uFF0C\u7EC6\u80DE\u4ECE\u7EA6 \u221260 mV \u53BB\u6781\u5316\u3002\u6BDB\u7EC6\u80DE\u4E0D\u662F\u795E\u7ECF\u5143\uFF0C\u4F46\u8FD9\u4E2A\u53D7\u4F53\u7535\u4F4D\u4E0E\u795E\u7ECF\u5143\u76F8\u4F3C\u3002"],source:Ge("L19","3\u20134")},{id:"hc-roles",kind:"sequence",hideLabels:!0,answer:["ihc","ohc"],setup:{mode:"oscillate"},skill:["Separate the IHC (afferent signal) from the OHC (cochlear amplifier)","\u533A\u5206\u5185\u6BDB\u7EC6\u80DE\uFF08\u4F20\u5165\u4FE1\u53F7\uFF09\u4E0E\u5916\u6BDB\u7EC6\u80DE\uFF08\u8033\u8717\u653E\u5927\u5668\uFF09"],prompt:["Keep the model playing and compare the two cell types.","\u8BA9\u6A21\u578B\u7EE7\u7EED\u64AD\u653E\uFF0C\u6BD4\u8F83\u4E24\u7C7B\u6BDB\u7EC6\u80DE\u3002"],stepPrompts:[["Click the cell type that mainly sends information into the auditory nerve.","\u70B9\u51FA\u4E3B\u8981\u628A\u4FE1\u606F\u9001\u8FDB\u542C\u795E\u7ECF\u7684\u7EC6\u80DE\u3002"],["Click the cell type that mainly adjusts the cochlea\u2019s mechanical response.","\u70B9\u51FA\u4E3B\u8981\u8C03\u8282\u8033\u8717\u673A\u68B0\u54CD\u5E94\u7684\u7EC6\u80DE\u3002"]],explain:["IHCs: depolarization \u2192 Ca\xB2\u207A \u2192 transmitter \u2192 Type I fibers (85\u201395% of afferents). OHCs: depolarization \u2192 prestin contracts \u2192 the cell shortens and pumps energy back into the BM. The result is more sensitivity and sharper tuning, the cochlear amplifier.","\u5185\u6BDB\u7EC6\u80DE\uFF1A\u53BB\u6781\u5316 \u2192 Ca\xB2\u207A \u2192 \u9012\u8D28 \u2192 I \u578B\u7EA4\u7EF4\uFF08\u5360\u4F20\u5165\u7EA4\u7EF4 85\u201395%\uFF09\u3002\u5916\u6BDB\u7EC6\u80DE\uFF1A\u53BB\u6781\u5316 \u2192 prestin \u6536\u7F29 \u2192 \u7EC6\u80DE\u7F29\u77ED\uFF0C\u628A\u80FD\u91CF\u53CD\u9988\u7ED9\u57FA\u5E95\u819C\uFF0C\u4F7F\u542C\u89C9\u66F4\u7075\u654F\u3001\u8C03\u8C10\u66F4\u5C16\u2014\u2014\u8033\u8717\u653E\u5927\u5668\u3002"],source:Ge("L19","6, 8\u201311")}]},{id:"auditory-nerve",n:5,scene:"nerve",title:["Auditory nerve","\u542C\u795E\u7ECF"],question:["How do spikes carry a tone\u2019s frequency and level?","\u5C16\u5CF0\u600E\u6837\u643A\u5E26\u58F0\u97F3\u7684\u9891\u7387\u548C\u5F3A\u5EA6\uFF1F"],signal:{kind:"spikes",label:["Neural spikes (action potentials)","\u795E\u7ECF\u5C16\u5CF0\uFF08\u52A8\u4F5C\u7535\u4F4D\uFF09"]},scale:["Spike times follow a schematic model on a real ms axis; the display sweeps slowly. Levels are schematic dB, not calibrated.","\u5C16\u5CF0\u65F6\u95F4\u6309\u793A\u610F\u6A21\u578B\u3001\u4EE5\u771F\u5B9E\u6BEB\u79D2\u8F74\u7ED8\u5236\uFF0C\u753B\u9762\u6162\u626B\uFF1B\u58F0\u7EA7\u4E3A\u793A\u610F dB\uFF0C\u672A\u6821\u51C6\u3002"],see:["Fibers leave the cochlea in tonotopic order: base fibers have high CFs and apex fibers low CFs. Below the model, the stimulus waveform and the spikes of six fibers with the same CF share one time axis.","\u7EA4\u7EF4\u6309\u97F3\u8C03\u62D3\u6251\u987A\u5E8F\u79BB\u5F00\u8033\u8717\uFF1A\u5E95\u7AEF\u7EA4\u7EF4 CF \u9AD8\uFF0C\u9876\u7AEF\u7EA4\u7EF4 CF \u4F4E\u3002\u6A21\u578B\u4E0B\u65B9\uFF0C\u523A\u6FC0\u6CE2\u5F62\u4E0E 6 \u6839\u540C CF \u7EA4\u7EF4\u7684\u5C16\u5CF0\u5171\u7528\u4E00\u6761\u65F6\u95F4\u8F74\u3002"],lessons:[{slug:"l20"},{slug:"l17",extra:!0},{slug:"l18",extra:!0}],structures:["spiral-ganglion","auditory-nerve","cochlea"],minimap:"nerve",tasks:[{id:"an-lock",kind:"choice",setup:{freq:250,level:60},skill:["Recognize phase-locking and cycle skipping","\u8BC6\u522B\u9501\u76F8\u4E0E\u8DF3\u5468\u671F"],prompt:["A 250 Hz tone at 60 dB (schematic). Look at the spikes against the waveform. Which description fits?","250 Hz\u300160 dB\uFF08\u793A\u610F\uFF09\u7684\u7EAF\u97F3\u3002\u5BF9\u7167\u6CE2\u5F62\u770B\u5C16\u5CF0\uFF0C\u54EA\u79CD\u63CF\u8FF0\u6B63\u786E\uFF1F"],options:[{id:"random",label:["Spikes fall at random times","\u5C16\u5CF0\u65F6\u95F4\u968F\u673A"],feedback:["Look again at the period histogram: the spikes pile up at one phase.","\u518D\u770B\u5468\u671F\u76F4\u65B9\u56FE\uFF1A\u5C16\u5CF0\u96C6\u4E2D\u5728\u540C\u4E00\u76F8\u4F4D\u3002"]},{id:"locked",label:["Spikes cluster at one phase of the cycle, but each fiber skips many cycles","\u5C16\u5CF0\u96C6\u4E2D\u5728\u5468\u671F\u7684\u540C\u4E00\u76F8\u4F4D\uFF0C\u4F46\u6BCF\u6839\u7EA4\u7EF4\u4F1A\u8DF3\u8FC7\u8BB8\u591A\u5468\u671F"],correct:!0},{id:"every",label:["Each fiber fires once on every cycle","\u6BCF\u6839\u7EA4\u7EF4\u6BCF\u4E2A\u5468\u671F\u90FD\u653E\u7535\u4E00\u6B21"],feedback:["A single fiber cannot keep up with every cycle. Count the gaps in one row.","\u5355\u6839\u7EA4\u7EF4\u8DDF\u4E0D\u4E0A\u6BCF\u4E2A\u5468\u671F\u2014\u2014\u6570\u4E00\u6570\u540C\u4E00\u884C\u7684\u7A7A\u7F3A\u3002"]}],explain:["Phase-locking: spikes occur at a preferred phase, giving a temporal code for frequency. Each fiber skips cycles, but the fibers together mark almost every cycle. This is the volley principle.","\u9501\u76F8\uFF1A\u5C16\u5CF0\u51FA\u73B0\u5728\u504F\u597D\u7684\u76F8\u4F4D\u4E0A\uFF0C\u6784\u6210\u9891\u7387\u7684\u65F6\u95F4\u7F16\u7801\u3002\u5355\u6839\u7EA4\u7EF4\u4F1A\u8DF3\u5468\u671F\uFF0C\u4F46\u591A\u6839\u7EA4\u7EF4\u5408\u8D77\u6765\u51E0\u4E4E\u8986\u76D6\u6BCF\u4E2A\u5468\u671F\u2014\u2014\u9F50\u5C04\uFF08volley\uFF09\u539F\u7406\u3002"],source:Ge("L20",10)},{id:"an-8k",kind:"predict",skill:["Know the upper limit of phase-locking and the role of place coding","\u77E5\u9053\u9501\u76F8\u7684\u4E0A\u9650\u4E0E\u4F4D\u7F6E\u7F16\u7801\u7684\u4F5C\u7528"],prompt:["Predict: at 8 kHz, will the spikes still cluster at one phase?","\u9884\u6D4B\uFF1A\u5728 8 kHz \u65F6\uFF0C\u5C16\u5CF0\u8FD8\u4F1A\u96C6\u4E2D\u5728\u540C\u4E00\u76F8\u4F4D\u5417\uFF1F"],options:[{id:"yes",label:["Yes, just more tightly","\u4F1A\uFF0C\u800C\u4E14\u66F4\u96C6\u4E2D"]},{id:"no",label:["No. Phase-locking fades at high frequencies (above ~5 kHz in the AN).","\u4E0D\u4F1A\u2014\u2014\u9AD8\u9891\u65F6\u9501\u76F8\u6D88\u5931\uFF08\u542C\u795E\u7ECF\u7EA6 5 kHz \u4EE5\u4E0A\uFF09"],correct:!0}],verify:{event:"freq",value:8e3,cta:["Choose 8 kHz below the model, then watch the histogram flatten","\u5728\u6A21\u578B\u4E0B\u65B9\u9009 8 kHz\uFF0C\u89C2\u5BDF\u76F4\u65B9\u56FE\u53D8\u5E73"]},explain:["Above ~5 kHz the auditory nerve no longer phase-locks, and the period histogram is flat. Frequency is then carried by place: which fibers (CFs) respond. In the 3D view, the active fibers move toward the base.","\u7EA6 5 kHz \u4EE5\u4E0A\u542C\u795E\u7ECF\u4E0D\u518D\u9501\u76F8\uFF0C\u5468\u671F\u76F4\u65B9\u56FE\u53D8\u5E73\u3002\u6B64\u65F6\u9891\u7387\u7531\u4F4D\u7F6E\u627F\u8F7D\u2014\u2014\u54EA\u4E9B\u7EA4\u7EF4\uFF08CF\uFF09\u5728\u653E\u7535\u30023D \u4E2D\u6D3B\u8DC3\u7EA4\u7EF4\u79FB\u5411\u5E95\u7AEF\u3002"],source:Ge("L20","10\u201311")},{id:"an-level",kind:"predict",setup:{freq:1e3,level:30},skill:["Describe rate, recruitment and fiber type as intensity codes","\u7528\u653E\u7535\u7387\u3001\u52DF\u96C6\u548C\u7EA4\u7EF4\u7C7B\u578B\u63CF\u8FF0\u5F3A\u5EA6\u7F16\u7801"],prompt:["Now raise the level from 30 to 90 dB at CF. Predict the high-SR fiber\u2019s firing rate.","\u5728 CF \u5904\u628A\u58F0\u7EA7\u4ECE 30 dB \u63D0\u9AD8\u5230 90 dB\u3002\u9884\u6D4B\u9AD8\u81EA\u53D1\u7387\u7EA4\u7EF4\u7684\u653E\u7535\u7387\u3002"],options:[{id:"linear",label:["It keeps rising in proportion to level","\u968F\u58F0\u7EA7\u6210\u6BD4\u4F8B\u6301\u7EED\u4E0A\u5347"]},{id:"sat",label:["It rises, then saturates, while low-SR fibers and neighboring CFs keep joining in","\u5148\u4E0A\u5347\u540E\u9971\u548C\uFF1B\u540C\u65F6\u4F4E\u81EA\u53D1\u7387\u7EA4\u7EF4\u548C\u76F8\u90BB CF \u7EA4\u7EF4\u4E0D\u65AD\u52A0\u5165"],correct:!0},{id:"fall",label:["It falls at high levels","\u9AD8\u58F0\u7EA7\u65F6\u4E0B\u964D"]}],verify:{event:"level",min:85,cta:["Drag the \u201CLevel\u201D slider up to 90 dB","\u628A\u201C\u58F0\u7EA7\u201D\u6ED1\u5757\u62C9\u5230 90 dB"]},explain:["Each fiber has a 20\u201350 dB dynamic range between threshold and saturation. Intensity is coded three ways: discharge rate, the number of fibers (recruitment and spread of excitation), and fiber type (high-SR fibers have low thresholds, low-SR fibers high thresholds).","\u6BCF\u6839\u7EA4\u7EF4\u4ECE\u9608\u503C\u5230\u9971\u548C\u53EA\u6709 20\u201350 dB \u52A8\u6001\u8303\u56F4\u3002\u5F3A\u5EA6\u6709\u4E09\u79CD\u7F16\u7801\uFF1A\u653E\u7535\u7387\u3001\u53C2\u4E0E\u7684\u7EA4\u7EF4\u6570\u91CF\uFF08\u52DF\u96C6\u4E0E\u5174\u594B\u6269\u6563\uFF09\u3001\u7EA4\u7EF4\u7C7B\u578B\uFF08\u9AD8\u81EA\u53D1\u7387\u7EA4\u7EF4\u9608\u503C\u4F4E\uFF0C\u4F4E\u81EA\u53D1\u7387\u7EA4\u7EF4\u9608\u503C\u9AD8\uFF09\u3002"],source:Ge("L20","4\u20137")},{id:"an-chain",kind:"order",skill:["Trace one event from bundle deflection to an auditory-nerve spike","\u4ECE\u6BDB\u675F\u504F\u8F6C\u4E00\u8DEF\u8FFD\u5230\u542C\u795E\u7ECF\u5C16\u5CF0"],prompt:["Put the chain in order, from basilar-membrane motion to an auditory-nerve spike.","\u628A\u8FD9\u6761\u94FE\u6309\u987A\u5E8F\u6392\u597D\uFF1A\u4ECE\u57FA\u5E95\u819C\u8FD0\u52A8\u5230\u542C\u795E\u7ECF\u5C16\u5CF0\u3002"],items:[{id:"bm",label:["BM moves toward the scala vestibuli","\u57FA\u5E95\u819C\u671D\u524D\u5EAD\u9636\u79FB\u52A8"]},{id:"shear",label:["Shear bends the stereocilia toward the tallest row","\u526A\u5207\u4F7F\u9759\u7EA4\u6BDB\u671D\u6700\u9AD8\u4E00\u6392\u5F2F\u66F2"]},{id:"k",label:["Tip-link channels open; K\u207A flows in","\u9876\u8FDE\u901A\u9053\u6253\u5F00\uFF0CK\u207A \u6D41\u5165"]},{id:"dep",label:["IHC depolarizes (receptor potential)","\u5185\u6BDB\u7EC6\u80DE\u53BB\u6781\u5316\uFF08\u53D7\u4F53\u7535\u4F4D\uFF09"]},{id:"ca",label:["Ca\xB2\u207A enters; transmitter is released at the ribbon synapse","Ca\xB2\u207A \u5185\u6D41\uFF0C\u5E26\u72B6\u7A81\u89E6\u91CA\u653E\u9012\u8D28"]},{id:"spike",label:["Type I fiber fires an action potential","I \u578B\u7EA4\u7EF4\u4EA7\u751F\u52A8\u4F5C\u7535\u4F4D"]}],explain:["BM motion \u2192 shear \u2192 channels \u2192 receptor potential \u2192 transmitter \u2192 spike. Each arrow is a change of signal: mechanical \u2192 electrical (graded) \u2192 chemical \u2192 electrical (all-or-none).","\u57FA\u5E95\u819C\u8FD0\u52A8 \u2192 \u526A\u5207 \u2192 \u901A\u9053 \u2192 \u53D7\u4F53\u7535\u4F4D \u2192 \u9012\u8D28 \u2192 \u5C16\u5CF0\u3002\u6BCF\u4E2A\u7BAD\u5934\u90FD\u662F\u4FE1\u53F7\u5F62\u5F0F\u7684\u8F6C\u6362\uFF1A\u673A\u68B0 \u2192 \u7535\uFF08\u5206\u7EA7\uFF09\u2192 \u5316\u5B66 \u2192 \u7535\uFF08\u5168\u6216\u65E0\uFF09\u3002"],source:Ge("L19","2\u20136")}]},{id:"pathway",n:6,scene:"pathway",extension:!0,title:["Auditory pathway","\u542C\u89C9\u901A\u8DEF"],question:["Where does left-ear input go after the auditory nerve?","\u5DE6\u8033\u8F93\u5165\u79BB\u5F00\u542C\u795E\u7ECF\u540E\u53BB\u54EA\u91CC\uFF1F"],signal:{kind:"pathway",label:["Neural activity along the ascending and descending pathway","\u6CBF\u4E0A\u884C\u548C\u4E0B\u884C\u901A\u8DEF\u7684\u795E\u7ECF\u6D3B\u52A8"]},scale:["Simplified diagram; many connections are omitted.","\u7B80\u5316\u793A\u610F\u56FE\uFF0C\u7701\u7565\u4E86\u8BB8\u591A\u8FDE\u63A5\u3002"],see:["Read the diagram from the bottom up: ACSLIMA. The midline separates the left and right sides. Each cochlea projects to its own cochlear nucleus, and from there information spreads to both sides.","\u4ECE\u4E0B\u5F80\u4E0A\u8BFB\uFF1AACSLIMA\u3002\u4E2D\u7EBF\u5206\u9694\u5DE6\u53F3\u4E24\u4FA7\u3002\u6BCF\u4FA7\u8033\u8717\u5148\u5230\u540C\u4FA7\u8033\u8717\u6838\uFF0C\u518D\u5411\u4E24\u4FA7\u6269\u6563\u3002"],lessons:[{slug:"l21"}],structures:[],minimap:"pathway",tasks:[{id:"pw-cn",kind:"pick",answer:["cn-l"],hideLabels:!1,skill:["Locate the first ipsilateral relay (CN)","\u5B9A\u4F4D\u7B2C\u4E00\u4E2A\u540C\u4FA7\u4E2D\u7EE7\u7AD9\uFF08CN\uFF09"],prompt:["Follow the left ear upward. Click the first central relay on the same side.","\u4ECE\u5DE6\u8033\u5F80\u4E0A\u8FFD\u8E2A\uFF0C\u70B9\u51FA\u540C\u4FA7\u7B2C\u4E00\u4E2A\u4E2D\u67A2\u4E2D\u7EE7\u7AD9\u3002"],hint:["The auditory nerve ends here; every afferent passes through it.","\u542C\u795E\u7ECF\u6B62\u4E8E\u6B64\u5904\uFF0C\u6240\u6709\u4F20\u5165\u4FE1\u606F\u90FD\u7ECF\u8FC7\u5B83\u3002"],explain:["The left cochlear nucleus. All afferent auditory information passes through the CN, and its outputs already diverge to both sides.","\u5DE6\u4FA7\u8033\u8717\u6838\u3002\u6240\u6709\u4F20\u5165\u542C\u89C9\u4FE1\u606F\u90FD\u7ECF\u8FC7\u8033\u8717\u6838\uFF0C\u5B83\u7684\u8F93\u51FA\u5DF2\u5F00\u59CB\u6295\u5C04\u5230\u53CC\u4FA7\u3002"],source:Ge("L21","3\u20135")},{id:"pw-soc",kind:"pick",answer:["soc-l","soc-r"],hideLabels:!1,skill:["Locate the first binaural convergence (SOC)","\u5B9A\u4F4D\u7B2C\u4E00\u4E2A\u53CC\u8033\u6C47\u5408\u5904\uFF08SOC\uFF09"],prompt:["Now click where input from both ears first converges.","\u518D\u70B9\u51FA\u53CC\u8033\u8F93\u5165\u9996\u6B21\u6C47\u5408\u7684\u5730\u65B9\u3002"],explain:["The superior olivary complex is the first major site where input from the two ears meets. That makes binaural comparison, and therefore localization, possible.","\u4E0A\u6A44\u6984\u590D\u5408\u4F53\u662F\u53CC\u8033\u8F93\u5165\u9996\u6B21\u5927\u89C4\u6A21\u6C47\u5408\u5904\uFF0C\u4E3A\u53CC\u8033\u6BD4\u8F83\uFF08\u5B9A\u4F4D\uFF09\u63D0\u4F9B\u57FA\u7840\u3002"],source:Ge("L21",5)},{id:"pw-bypass",kind:"choice",skill:["Distinguish obligatory relays from a relay that can be bypassed","\u533A\u5206\u5FC5\u7ECF\u4E2D\u7EE7\u7AD9\u4E0E\u53EF\u7ED5\u8FC7\u7684\u4E2D\u7EE7\u7AD9"],prompt:["Which relay can an ascending path skip on the way to cortex? Toggle \u201CShow bypass\u201D to check.","\u4E0A\u884C\u901A\u8DEF\u53BB\u5F80\u76AE\u5C42\u65F6\u53EF\u4EE5\u7ED5\u8FC7\u54EA\u4E2A\u4E2D\u7EE7\u7AD9\uFF1F\u53EF\u6253\u5F00\u201C\u663E\u793A\u65C1\u8DEF\u201D\u6838\u5BF9\u3002"],options:[{id:"cn",label:["Cochlear nucleus","\u8033\u8717\u6838"],feedback:["Every afferent passes through the CN.","\u6240\u6709\u4F20\u5165\u90FD\u7ECF\u8FC7\u8033\u8717\u6838\u3002"]},{id:"soc",label:["Superior olivary complex","\u4E0A\u6A44\u6984\u590D\u5408\u4F53"],correct:!0},{id:"mgb",label:["Medial geniculate body","\u5185\u4FA7\u819D\u72B6\u4F53"],feedback:["The MGB is the obligatory synapse before cortex.","\u5185\u4FA7\u819D\u72B6\u4F53\u662F\u8FDB\u5165\u76AE\u5C42\u524D\u7684\u5FC5\u7ECF\u7A81\u89E6\u3002"]}],explain:["A CN projection can reach the IC through the lateral lemniscus without synapsing in the SOC. In the course model, CN, IC and MGB are the obligatory relays. Descending fibers run the other way and end on the OHCs (station 4).","\u8033\u8717\u6838\u7684\u6295\u5C04\u53EF\u7ECF\u5916\u4FA7\u4E18\u7CFB\u76F4\u8FBE\u4E0B\u4E18\u800C\u4E0D\u5728 SOC \u6362\u5143\u3002\u8BFE\u7A0B\u6A21\u578B\u4E2D\uFF0CCN\u3001IC\u3001MGB \u662F\u5FC5\u7ECF\u4E2D\u7EE7\u7AD9\u3002\u4E0B\u884C\u7EA4\u7EF4\u53CD\u5411\u8D70\u884C\uFF0C\u7EC8\u6B62\u4E8E\u5916\u6BDB\u7EC6\u80DE\uFF08\u7B2C 4 \u7AD9\uFF09\u3002"],source:Ge("L21","3\u20137, 13")}]}],or={id:"review",title:["Review: you lead","\u590D\u4E60\uFF1A\u6211\u6765\u5E26\u8DEF"],order:{id:"rv-path",kind:"order",skill:["Lead the sound from the pinna to the auditory nerve","\u5E26\u7740\u58F0\u97F3\u4ECE\u8033\u5ED3\u8D70\u5230\u542C\u795E\u7ECF"],prompt:["Lead the sound: click the structures in the order the signal reaches them.","\u4F60\u6765\u5E26\u8DEF\uFF1A\u6309\u4FE1\u53F7\u5230\u8FBE\u7684\u987A\u5E8F\u70B9\u51FB\u7ED3\u6784\u3002"],items:["pinna","ear-canal","tympanic-membrane","malleus","incus","stapes","oval-window","scala-vestibuli","basilar-membrane","stereocilia","ihc","auditory-nerve"].map(i=>({id:i,label:Rn[i].name})),explain:["That is the whole route: air pressure \u2192 structure displacement \u2192 fluid pressure \u2192 BM traveling wave \u2192 bundle deflection \u2192 receptor potential \u2192 spikes.","\u6574\u6761\u8DEF\u7EBF\uFF1A\u7A7A\u6C14\u538B\u529B \u2192 \u7ED3\u6784\u4F4D\u79FB \u2192 \u6DB2\u4F53\u538B\u529B \u2192 \u57FA\u5E95\u819C\u884C\u6CE2 \u2192 \u6BDB\u675F\u504F\u8F6C \u2192 \u53D7\u4F53\u7535\u4F4D \u2192 \u5C16\u5CF0\u3002"]},match:{id:"rv-cause",kind:"match",skill:["Explain a cause \u2192 effect link at each stage","\u8BF4\u6E05\u6BCF\u4E00\u7AD9\u7684\u4E00\u4E2A\u56E0\u679C\u5173\u7CFB"],prompt:["Match each cause with its effect. Pick a cause, then its effect.","\u628A\u539F\u56E0\u4E0E\u7ED3\u679C\u914D\u5BF9\uFF1A\u5148\u9009\u539F\u56E0\uFF0C\u518D\u9009\u7ED3\u679C\u3002"],pairs:[{cause:["Ear canal resonance near ~2.5 kHz","\u5916\u8033\u9053\u7EA6 2.5 kHz \u5171\u632F"],effect:["10\u201315 dB boost around 1.5\u20137 kHz at the eardrum","\u9F13\u819C\u5904\u7EA6 1.5\u20137 kHz \u63D0\u5347 10\u201315 dB"],station:"outer-ear"},{cause:["TM area \u2248 17\xD7 the footplate area","\u9F13\u819C\u9762\u79EF\u7EA6\u4E3A\u5E95\u677F\u7684 17 \u500D"],effect:["Pressure at the oval window rises (\u224825 dB of the \u224833 dB)","\u5375\u5706\u7A97\u5904\u538B\u5F3A\u5347\u9AD8\uFF08\u7EA6 33 dB \u4E2D\u7684 25 dB\uFF09"],station:"middle-ear"},{cause:["BM narrow and stiff at the base","\u57FA\u5E95\u819C\u5E95\u7AEF\u7A84\u800C\u786C"],effect:["High frequencies peak near the base","\u9AD8\u9891\u5728\u5E95\u7AEF\u9644\u8FD1\u8FBE\u5230\u5CF0\u503C"],station:"cochlea"},{cause:["Stereocilia bend toward the tallest row","\u9759\u7EA4\u6BDB\u671D\u6700\u9AD8\u4E00\u6392\u5F2F\u66F2"],effect:["K\u207A channels open and the cell depolarizes","K\u207A \u901A\u9053\u6253\u5F00\uFF0C\u7EC6\u80DE\u53BB\u6781\u5316"],station:"hair-cells"},{cause:["OHCs shorten when depolarized","\u5916\u6BDB\u7EC6\u80DE\u53BB\u6781\u5316\u65F6\u7F29\u77ED"],effect:["BM response is amplified and more sharply tuned","\u57FA\u5E95\u819C\u54CD\u5E94\u88AB\u653E\u5927\u3001\u8C03\u8C10\u66F4\u5C16"],station:"hair-cells"},{cause:["Low-frequency tone (\u2264 ~5 kHz)","\u4F4E\u9891\u97F3\uFF08\u7EA6 5 kHz \u4EE5\u4E0B\uFF09"],effect:["Spikes phase-lock to the waveform","\u5C16\u5CF0\u4E0E\u6CE2\u5F62\u9501\u76F8"],station:"auditory-nerve"}]}},wd={"outer-ear":{guide:["Exam 1 study guide","\u671F\u4E2D\u4E00\u590D\u4E60\u6307\u5357"],items:[{text:["Know the role of the tympanic membrane","\u9F13\u819C\u7684\u4F5C\u7528"],via:"oe-tm"},{text:["Influence of pinna, ear canal and TM on the frequency spectrum","\u8033\u5ED3\u3001\u5916\u8033\u9053\u4E0E\u9F13\u819C\u5BF9\u9891\u8C31\u7684\u5F71\u54CD"],via:"oe-boost"},{text:["Know the role of the pinna and how the external ear affects localization","\u8033\u5ED3\u7684\u4F5C\u7528\u53CA\u5916\u8033\u5BF9\u5B9A\u4F4D\u7684\u5F71\u54CD"],via:"explore:pinna",lessonNote:!0},{text:["Sound as a longitudinal pressure wave (L04)","\u58F0\u97F3\u662F\u7EB5\u5411\u538B\u529B\u6CE2\uFF08L04\uFF09"],via:"oe-particle"}]},"middle-ear":{guide:["Exam 1 study guide","\u671F\u4E2D\u4E00\u590D\u4E60\u6307\u5357"],items:[{text:["Name the bones of the middle ear and describe their role","\u8BF4\u51FA\u542C\u5C0F\u9AA8\u5E76\u63CF\u8FF0\u5176\u4F5C\u7528"],via:"me-chain"},{text:["Main function of the middle ear: impedance matching","\u4E2D\u8033\u4E3B\u8981\u529F\u80FD\uFF1A\u963B\u6297\u5339\u914D"],via:"me-area"},{text:["Areal ratio \xD7 lever \xD7 TM buckling \u2248 33 dB","\u9762\u79EF\u6BD4 \xD7 \u6760\u6746 \xD7 \u9F13\u819C\u5F2F\u66F2 \u2248 33 dB"],via:"me-total"},{text:["Describe the role of the stapedial reflex","\u956B\u9AA8\u808C\u53CD\u5C04\u7684\u4F5C\u7528"],via:"advanced"},{text:["Eustachian tube: role; infants vs adults","\u54BD\u9F13\u7BA1\u7684\u4F5C\u7528\uFF1B\u5A74\u513F\u4E0E\u6210\u4EBA\u7684\u533A\u522B"],via:"advanced"}]},cochlea:{guide:["Final study guide \xB7 Inner ear","\u671F\u672B\u590D\u4E60\u6307\u5357 \xB7 \u5185\u8033"],items:[{text:["Organization of the cochlea and cochlear chambers","\u8033\u8717\u53CA\u4E09\u9636\u7684\u7EC4\u7EC7\u7ED3\u6784"],via:"co-scalae"},{text:["Tonotopic organization of the cochlea","\u8033\u8717\u7684\u97F3\u8C03\u62D3\u6251\u7EC4\u7EC7"],via:"co-predict"},{text:["Describe the traveling wave","\u63CF\u8FF0\u884C\u6CE2"],via:"co-base"},{text:["How BM movement changes with frequency or intensity","\u57FA\u5E95\u819C\u8FD0\u52A8\u968F\u9891\u7387\u6216\u5F3A\u5EA6\u7684\u53D8\u5316"],via:"advanced"},{text:["Why B\xE9k\xE9sy found only part of the story","\u4E3A\u4EC0\u4E48 B\xE9k\xE9sy \u53EA\u770B\u5230\u4E86\u4E00\u90E8\u5206"],via:"advanced"},{text:["Describe basilar membrane tuning curves","\u63CF\u8FF0\u57FA\u5E95\u819C\u8C03\u8C10\u66F2\u7EBF"],via:"advanced"}]},"hair-cells":{guide:["Final study guide \xB7 Hair cells","\u671F\u672B\u590D\u4E60\u6307\u5357 \xB7 \u6BDB\u7EC6\u80DE"],items:[{text:["Mechanical and electrical (ionic) properties of the inner ear","\u5185\u8033\u7684\u673A\u68B0\u4E0E\u7535\uFF08\u79BB\u5B50\uFF09\u7279\u6027"],via:"hc-channels"},{text:["Depolarization, hyperpolarization, resting potential","\u53BB\u6781\u5316\u3001\u8D85\u6781\u5316\u3001\u9759\u606F\u7535\u4F4D"],via:"hc-direction",lessonNote:!0},{text:["Effect of OHC motility; what creates and affects it","\u5916\u6BDB\u7EC6\u80DE\u8FD0\u52A8\u7684\u6548\u5E94\u3001\u6210\u56E0\u4E0E\u8C03\u8282"],via:"hc-roles"},{text:["Describe cochlear potentials","\u63CF\u8FF0\u8033\u8717\u7535\u4F4D"],via:"advanced",lessonNote:!0}]},"auditory-nerve":{guide:["Final study guide \xB7 Neural codes","\u671F\u672B\u590D\u4E60\u6307\u5357 \xB7 \u795E\u7ECF\u7F16\u7801"],items:[{text:["Two ways frequency is encoded (place, phase-locking)","\u9891\u7387\u7684\u4E24\u79CD\u7F16\u7801\uFF08\u4F4D\u7F6E\u3001\u9501\u76F8\uFF09"],via:"an-lock"},{text:["Phase-locking limit; place code at high frequency","\u9501\u76F8\u4E0A\u9650\u4E0E\u9AD8\u9891\u7684\u4F4D\u7F6E\u7F16\u7801"],via:"an-8k"},{text:["Low/medium/high SR fibers vs threshold; dynamic range; firing rate","\u4F4E/\u4E2D/\u9AD8\u81EA\u53D1\u7387\u7EA4\u7EF4\u4E0E\u9608\u503C\uFF1B\u52A8\u6001\u8303\u56F4\uFF1B\u653E\u7535\u7387"],via:"an-level"},{text:["AP generation, propagation and ions (L17\u2013L18)","\u52A8\u4F5C\u7535\u4F4D\u7684\u4EA7\u751F\u3001\u4F20\u5BFC\u4E0E\u79BB\u5B50\uFF08L17\u2013L18\uFF09"],via:"lesson"}]},pathway:{guide:["L21 key concepts","L21 \u6838\u5FC3\u6982\u5FF5"],items:[{text:["Major nuclei and tracts of the ascending pathway","\u4E0A\u884C\u901A\u8DEF\u7684\u4E3B\u8981\u6838\u56E2\u4E0E\u7EA4\u7EF4\u675F"],via:"pw-cn"},{text:["Where input from both ears first converges","\u53CC\u8033\u8F93\u5165\u9996\u6B21\u6C47\u5408\u5904"],via:"pw-soc"},{text:["Obligatory relays vs a bypassable relay; descending pathway","\u5FC5\u7ECF\u4E2D\u7EE7\u4E0E\u53EF\u7ED5\u8FC7\u7684\u4E2D\u7EE7\uFF1B\u4E0B\u884C\u901A\u8DEF"],via:"pw-bypass"}]}},Ed={"outer-ear":[{h:["Resonance = a band-pass filter","\u5171\u632F\u5373\u5E26\u901A\u6EE4\u6CE2"],p:["A tube closed at one end (the TM) resonates where its length is about a quarter wavelength. For a ~2.5 cm canal that is near 2.5\u20133 kHz. The concha adds a second resonance near 5 kHz. Together they boost energy in a range that matters for speech. Link this to the filter vocabulary of L12.","\u4E00\u7AEF\u5C01\u95ED\uFF08\u9F13\u819C\uFF09\u7684\u7BA1\u5728\u957F\u5EA6\u7EA6\u4E3A\u56DB\u5206\u4E4B\u4E00\u6CE2\u957F\u5904\u5171\u632F\uFF0C\u7EA6 2.5 cm \u7684\u8033\u9053\u7EA6\u5728 2.5\u20133 kHz\uFF1B\u8033\u7532\u8154\u7EA6\u5728 5 kHz \u63D0\u4F9B\u7B2C\u4E8C\u4E2A\u5171\u632F\u3002\u4E8C\u8005\u5171\u540C\u63D0\u5347\u8A00\u8BED\u91CD\u8981\u9891\u6BB5\u7684\u80FD\u91CF\uFF0C\u53EF\u4E0E L12 \u7684\u6EE4\u6CE2\u5668\u6982\u5FF5\u5BF9\u7167\u3002"],src:Ge("L13",6)},{h:["Pinna and localization","\u8033\u5ED3\u4E0E\u5B9A\u4F4D"],p:["The pinna\u2019s folds reflect high-frequency sound with small delays that depend on where the sound comes from. These spectral cues help with elevation and front/back judgments. This page does not model them; read L13 for the details.","\u8033\u5ED3\u8936\u76B1\u5BF9\u9AD8\u9891\u58F0\u4EA7\u751F\u968F\u65B9\u5411\u53D8\u5316\u7684\u5FAE\u5C0F\u5EF6\u8FDF\u53CD\u5C04\uFF0C\u8FD9\u79CD\u9891\u8C31\u7EBF\u7D22\u6709\u52A9\u4E8E\u5224\u65AD\u4E0A\u4E0B\u4E0E\u524D\u540E\u3002\u672C\u9875\u4E0D\u505A\u5EFA\u6A21\uFF0C\u7EC6\u8282\u89C1 L13\u3002"],src:Ge("L13",4)}],"middle-ear":[{h:["Ossicular lever (\u22481.3\xD7, \u22482 dB)","\u542C\u9AA8\u6760\u6746\uFF08\u7EA6 1.3 \u500D\uFF0C\u7EA6 2 dB\uFF09"],p:["The manubrium (in the TM) is the long arm and the incus long process the short arm. Force increases at the short arm in proportion to the arm lengths. Turn on \u201CLever arms\u201D below the model.","\u9524\u9AA8\u67C4\uFF08\u5728\u9F13\u819C\u5185\uFF09\u662F\u957F\u81C2\uFF0C\u7827\u9AA8\u957F\u7A81\u662F\u77ED\u81C2\uFF1B\u77ED\u81C2\u7AEF\u7684\u529B\u6309\u81C2\u957F\u6BD4\u4F8B\u589E\u5927\u3002\u5728\u6A21\u578B\u4E0B\u65B9\u6253\u5F00\u201C\u6760\u6746\u81C2\u201D\u3002"],src:Ge("L14",16)},{h:["TM buckling (\u22482\xD7, \u22486 dB)","\u9F13\u819C\u5F2F\u66F2\uFF08\u7EA6 2 \u500D\uFF0C\u7EA6 6 dB\uFF09"],p:["The conical TM concentrates force at the umbo: a large, fast TM movement becomes a smaller but stronger malleus movement (F_TM\xB7V_TM = F_m\xB7V_m).","\u9525\u5F62\u9F13\u819C\u628A\u529B\u96C6\u4E2D\u5230\u9F13\u8110\uFF1A\u9F13\u819C\u5927\u800C\u5FEB\u7684\u8FD0\u52A8\u53D8\u4E3A\u9524\u9AA8\u5C0F\u800C\u6709\u529B\u7684\u8FD0\u52A8\uFF08F_TM\xB7V_TM = F_m\xB7V_m\uFF09\u3002"],src:Ge("L14",16)},{h:["Acoustic (stapedial) reflex","\u58F0\u53CD\u5C04\uFF08\u956B\u9AA8\u808C\u53CD\u5C04\uFF09"],p:["Intense, long sounds (above ~85 dB SPL in normal hearing) make the stapedius contract on both sides. It is driven by CN VII and stiffens the chain, reducing transmission. Turn on \u201CStapedius reflex\u201D to see smaller stapes motion (schematic).","\u5F3A\u800C\u6301\u7EED\u7684\u58F0\u97F3\uFF08\u6B63\u5E38\u542C\u529B\u7EA6 85 dB SPL \u4EE5\u4E0A\uFF09\u4F7F\u53CC\u4FA7\u956B\u9AA8\u808C\u6536\u7F29\uFF08CN VII \u652F\u914D\uFF09\uFF0C\u542C\u9AA8\u94FE\u53D8\u786C\uFF0C\u4F20\u9012\u51CF\u5F31\u3002\u6253\u5F00\u201C\u956B\u9AA8\u808C\u53CD\u5C04\u201D\u53EF\u770B\u5230\u956B\u9AA8\u8FD0\u52A8\u53D8\u5C0F\uFF08\u793A\u610F\uFF09\u3002"],src:Ge("L14",7)},{h:["Eustachian tube","\u54BD\u9F13\u7BA1"],p:["It equalizes middle-ear and atmospheric pressure and drains the middle ear. In infants it is shorter and nearly horizontal (~10\xB0), versus ~45\xB0 in adults, so drainage is poorer and middle-ear infections are more common.","\u5E73\u8861\u4E2D\u8033\u4E0E\u5916\u754C\u6C14\u538B\u5E76\u5F15\u6D41\u3002\u5A74\u513F\u54BD\u9F13\u7BA1\u66F4\u77ED\u3001\u51E0\u4E4E\u6C34\u5E73\uFF08\u7EA6 10\xB0\uFF0C\u6210\u4EBA\u7EA6 45\xB0\uFF09\uFF0C\u5F15\u6D41\u8F83\u5DEE\uFF0C\u66F4\u6613\u53D1\u751F\u4E2D\u8033\u708E\u3002"],src:Ge("L14",9)}],cochlea:[{h:["Intensity: louder = bigger and broader","\u5F3A\u5EA6\uFF1A\u8D8A\u54CD\u8D8A\u5927\u3001\u8D8A\u5BBD"],p:["Turn on \u201CLoud\u201D. The envelope grows, and because it is asymmetric it spreads mainly toward the base. A loud tone therefore excites a wider stretch of BM.","\u6253\u5F00\u201C\u8F83\u54CD\u201D\uFF1A\u5305\u7EDC\u53D8\u5927\uFF0C\u5E76\u56E0\u4E0D\u5BF9\u79F0\u800C\u4E3B\u8981\u5411\u5E95\u7AEF\u6269\u5C55\u2014\u2014\u54CD\u58F0\u6FC0\u6D3B\u66F4\u957F\u4E00\u6BB5\u57FA\u5E95\u819C\u3002"],src:Ge("L15",15)},{h:["B\xE9k\xE9sy was only part of the story","B\xE9k\xE9sy \u53EA\u770B\u5230\u4E00\u90E8\u5206"],p:["B\xE9k\xE9sy watched cadaver cochleas with intense sounds. The BM was broadly tuned and linear. The living BM is far more sensitive, sharply tuned and nonlinear, because the outer hair cells add energy. Switch \u201COHC amplifier\u201D off to compare.","B\xE9k\xE9sy \u7528\u5F3A\u58F0\u89C2\u5BDF\u5C38\u4F53\u8033\u8717\uFF1A\u57FA\u5E95\u819C\u8C03\u8C10\u5BBD\u3001\u5448\u7EBF\u6027\u3002\u6D3B\u4F53\u57FA\u5E95\u819C\u8FDC\u66F4\u7075\u654F\u3001\u8C03\u8C10\u66F4\u5C16\u3001\u975E\u7EBF\u6027\u2014\u2014\u56E0\u4E3A\u5916\u6BDB\u7EC6\u80DE\u6CE8\u5165\u80FD\u91CF\u3002\u5173\u95ED\u201COHC \u653E\u5927\u5668\u201D\u5BF9\u6BD4\u3002"],src:Ge("L16",2)},{h:["Tuning curve: fix a place, sweep frequency","\u8C03\u8C10\u66F2\u7EBF\uFF1A\u56FA\u5B9A\u4F4D\u7F6E\u3001\u626B\u63CF\u9891\u7387"],p:["Move the slider to sweep the tone. The chart shows the level needed for a fixed displacement at the marked place. The result is V-shaped, its tip is the characteristic frequency (CF), and the high-frequency side is steeper.","\u62D6\u52A8\u6ED1\u5757\u626B\u9891\uFF0C\u56FE\u4E0A\u662F\u6807\u8BB0\u4F4D\u7F6E\u8FBE\u5230\u56FA\u5B9A\u4F4D\u79FB\u6240\u9700\u7684\u58F0\u7EA7\uFF1A\u5448 V \u5F62\uFF0C\u5C16\u7AEF\u662F\u7279\u5F81\u9891\u7387\uFF08CF\uFF09\uFF0C\u9AD8\u9891\u4FA7\u66F4\u9661\u3002"],src:Ge("L16",3),widget:"tuning"}],"hair-cells":[{h:["Two fluids, one seal","\u4E24\u79CD\u6DB2\u4F53\uFF0C\u4E00\u9053\u5C01\u53E3"],p:["The reticular lamina keeps the stereocilia in endolymph (high K\u207A, low Na\u207A) and the cell bodies in perilymph (high Na\u207A, low K\u207A). Because of this, opening channels at the tips lets K\u207A flow in and depolarize the cell.","\u7F51\u72B6\u677F\u4F7F\u9759\u7EA4\u6BDB\u6D78\u5728\u5185\u6DCB\u5DF4\uFF08\u9AD8 K\u207A\u3001\u4F4E Na\u207A\uFF09\uFF0C\u80DE\u4F53\u5728\u5916\u6DCB\u5DF4\uFF08\u9AD8 Na\u207A\u3001\u4F4E K\u207A\uFF09\u4E2D\uFF0C\u6240\u4EE5\u9876\u7AEF\u901A\u9053\u6253\u5F00\u65F6 K\u207A \u6D41\u5165\u4F7F\u7EC6\u80DE\u53BB\u6781\u5316\u3002"],src:Ge("L19",3)},{h:["What affects OHC motility","\u4EC0\u4E48\u5F71\u54CD\u5916\u6BDB\u7EC6\u80DE\u8FD0\u52A8"],p:["Prestin, a voltage-sensitive motor protein in the OHC wall, contracts on depolarization and expands on repolarization. Efferent fibers from the brainstem (olivocochlear) can modify this motility, giving top-down control of cochlear gain.","\u5916\u6BDB\u7EC6\u80DE\u4FA7\u58C1\u7684\u7535\u538B\u654F\u611F\u9A6C\u8FBE\u86CB\u767D prestin\uFF1A\u53BB\u6781\u5316\u65F6\u6536\u7F29\u3001\u590D\u6781\u5316\u65F6\u4F38\u957F\u3002\u6765\u81EA\u8111\u5E72\u7684\u4F20\u51FA\uFF08\u6A44\u6984\u8033\u8717\uFF09\u7EA4\u7EF4\u53EF\u8C03\u8282\u8FD9\u79CD\u8FD0\u52A8\uFF0C\u5B9E\u73B0\u81EA\u4E0A\u800C\u4E0B\u63A7\u5236\u8033\u8717\u589E\u76CA\u3002"],src:Ge("L19","9\u201310")},{h:["Cochlear potentials","\u8033\u8717\u7535\u4F4D"],p:["Voltages generated in the cochlea have AC parts that follow the waveform and DC parts that are steady during the tone. Receptor potentials of IHCs and OHCs contribute. The trace below shows a schematic receptor potential only. For AC/DC readings and clinical measures such as OAE and ABR, see L19.","\u8033\u8717\u4EA7\u751F\u7684\u7535\u538B\u6709\u968F\u6CE2\u5F62\u632F\u8361\u7684\u4EA4\u6D41\uFF08AC\uFF09\u6210\u5206\u548C\u5728\u58F0\u97F3\u671F\u95F4\u4FDD\u6301\u7684\u76F4\u6D41\uFF08DC\uFF09\u6210\u5206\uFF1B\u5185\u5916\u6BDB\u7EC6\u80DE\u7684\u53D7\u4F53\u7535\u4F4D\u90FD\u6709\u8D21\u732E\u3002\u4E0B\u65B9\u66F2\u7EBF\u53EA\u662F\u793A\u610F\u7684\u53D7\u4F53\u7535\u4F4D\uFF1BAC/DC \u5224\u8BFB\u4E0E OAE\u3001ABR \u7B49\u4E34\u5E8A\u6D4B\u91CF\u89C1 L19\u3002"],src:Ge("L19","11\u201314")}],"auditory-nerve":[{h:["Spontaneous rate and threshold","\u81EA\u53D1\u7387\u4E0E\u9608\u503C"],p:["Fibers fire even in silence (spontaneous rate). High-SR fibers have low thresholds and saturate early; low-SR fibers have high thresholds and wide dynamic ranges. Together they cover a wide range of levels.","\u65E0\u58F0\u65F6\u7EA4\u7EF4\u4E5F\u4F1A\u653E\u7535\uFF08\u81EA\u53D1\u7387\uFF09\u3002\u9AD8\u81EA\u53D1\u7387\u7EA4\u7EF4\u9608\u503C\u4F4E\u3001\u8F83\u65E9\u9971\u548C\uFF1B\u4F4E\u81EA\u53D1\u7387\u7EA4\u7EF4\u9608\u503C\u9AD8\u3001\u52A8\u6001\u8303\u56F4\u5BBD\u2014\u2014\u5408\u8D77\u6765\u8986\u76D6\u5BBD\u5E7F\u7684\u58F0\u7EA7\u8303\u56F4\u3002"],src:Ge("L20","3\u20136")},{h:["Neural tuning curves","\u795E\u7ECF\u8C03\u8C10\u66F2\u7EBF"],p:["Auditory-nerve fibers are tuned like the BM at their place. Each is most sensitive at its CF but responds to a range of frequencies when the level is high.","\u542C\u795E\u7ECF\u7EA4\u7EF4\u7684\u8C03\u8C10\u4E0E\u5176\u6240\u5728\u4F4D\u7F6E\u7684\u57FA\u5E95\u819C\u76F8\u4F3C\uFF1A\u5728 CF \u6700\u654F\u611F\uFF0C\u58F0\u7EA7\u9AD8\u65F6\u4E5F\u5BF9\u4E00\u6BB5\u9891\u7387\u8303\u56F4\u8D77\u53CD\u5E94\u3002"],src:Ge("L20",9)},{h:["Place vs temporal code","\u4F4D\u7F6E\u7F16\u7801\u4E0E\u65F6\u95F4\u7F16\u7801"],p:["Place representation weakens at high levels (vowel formants blur), while phase-locking holds up across a wide range of levels. Temporal coding fails above ~5 kHz. Cochlear-implant studies suggest both codes can carry pitch.","\u9AD8\u58F0\u7EA7\u65F6\u4F4D\u7F6E\u8868\u5F81\u53D8\u5DEE\uFF08\u5143\u97F3\u5171\u632F\u5CF0\u6A21\u7CCA\uFF09\uFF0C\u800C\u9501\u76F8\u5728\u5F88\u5BBD\u7684\u58F0\u7EA7\u8303\u56F4\u5185\u4FDD\u6301\uFF1B\u7EA6 5 kHz \u4EE5\u4E0A\u65F6\u95F4\u7F16\u7801\u5931\u6548\u3002\u4EBA\u5DE5\u8033\u8717\u7814\u7A76\u63D0\u793A\u4E24\u79CD\u7F16\u7801\u90FD\u80FD\u643A\u5E26\u97F3\u9AD8\u3002"],src:Ge("L20","11\u201312")}],pathway:[{h:["ACSLIMA","ACSLIMA"],p:["Auditory nerve \u2192 Cochlear nucleus \u2192 Superior olivary complex \u2192 Lateral lemniscus \u2192 Inferior colliculus \u2192 Medial geniculate body \u2192 Auditory cortex. In the course model, CN, IC and MGB are the obligatory relays.","\u542C\u795E\u7ECF \u2192 \u8033\u8717\u6838 \u2192 \u4E0A\u6A44\u6984\u590D\u5408\u4F53 \u2192 \u5916\u4FA7\u4E18\u7CFB \u2192 \u4E0B\u4E18 \u2192 \u5185\u4FA7\u819D\u72B6\u4F53 \u2192 \u542C\u89C9\u76AE\u5C42\u3002\u8BFE\u7A0B\u6A21\u578B\u4E2D CN\u3001IC\u3001MGB \u4E3A\u5FC5\u7ECF\u4E2D\u7EE7\u7AD9\u3002"],src:Ge("L21","3\u20137")},{h:["Descending (efferent) pathway","\u4E0B\u884C\uFF08\u4F20\u51FA\uFF09\u901A\u8DEF"],p:["Corticofugal fibers descend from cortex to subcortical sites. Olivocochlear efferents run from the SOC to the cochlea: MOC fibers to the OHCs and LOC fibers to the afferent dendrites. This closes the loop back to station 4.","\u76AE\u5C42\u79BB\u5FC3\u7EA4\u7EF4\u4ECE\u76AE\u5C42\u4E0B\u884C\u5230\u76AE\u5C42\u4E0B\u7ED3\u6784\uFF1B\u6A44\u6984\u8033\u8717\u4F20\u51FA\u7EA4\u7EF4\u4ECE SOC \u5230\u8033\u8717\u2014\u2014MOC \u5230\u5916\u6BDB\u7EC6\u80DE\uFF0CLOC \u5230\u4F20\u5165\u7EA4\u7EF4\u6811\u7A81\u3002\u7531\u6B64\u56DE\u5230\u7B2C 4 \u7AD9\u3002"],src:Ge("L21","12\u201313")}]},wh=[{href:"https://www.nidcd.nih.gov/news/multimedia/medical-illustration-parts-ear",label:["NIH / NIDCD \xB7 Parts of the ear (illustration)","NIH / NIDCD \xB7 \u4EBA\u8033\u7ED3\u6784\u56FE"]},{href:"https://openstax.org/books/introduction-behavioral-neuroscience/pages/7-2-how-does-acoustic-information-enter-the-brain",label:["OpenStax 7.2 \xB7 Figs 7.7, 7.10, 7.12 (scalae, transduction, pathway)","OpenStax 7.2 \xB7 \u56FE 7.7\u30017.10\u30017.12\uFF08\u4E09\u9636\u3001\u6362\u80FD\u3001\u901A\u8DEF\uFF09"]},{href:"https://www.cochlea.eu/en/cochlea/organ-of-corti/",label:["Cochlea.eu \xB7 Organ of Corti (further reading)","Cochlea.eu \xB7 Corti \u5668\uFF08\u5EF6\u4F38\u9605\u8BFB\uFF09"]}],Td=xs.map(i=>i.id),Si=i=>xs.find(e=>e.id===i);var ua=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),se=(i,e="span",t="")=>{if(!i)return"";let[n,s]=i;return`<${e} class="en-only ${t}">${ua(n)}</${e}><${e} class="cn-only ${t}" lang="zh-Hans">${ua(s)}</${e}>`},Om=i=>i?[`${i.lecture} PDF p. ${i.pages}`,`${i.lecture} \u8BB2\u4E49\u7B2C ${i.pages} \u9875`]:null,Oo=i=>se(Om(i));function Hs(i){if(Rn[i])return Rn[i].name;let[e,t]=i.split("-");if(ar[e]){let n=t==="l"?["left","\u5DE6\u4FA7"]:["right","\u53F3\u4FA7"];return[`${ar[e].name[0]} (${n[0]})`,`${n[1]}${ar[e].name[1]}`]}return e==="ear"?t==="l"?["Left ear","\u5DE6\u8033"]:["Right ear","\u53F3\u8033"]:[i,i]}function Ad(i,e=3){let t=i.slice(),n=e;for(let s=t.length-1;s>0;s--){n=(n*9301+49297)%233280;let r=Math.floor(n/233280*(s+1));[t[s],t[r]]=[t[r],t[s]]}return t.every((s,r)=>s===i[r])&&t.length>1&&([t[0],t[1]]=[t[1],t[0]]),t}var Uo=class{constructor({el:e,progress:t,onChange:n,onSetup:s,onAfter:r,onAction:a,onSuppressLabels:o,onFocusTask:l}){this.el=e,this.progress=t,this.onChange=n,this.onSetup=s,this.onAfter=r,this.onAction=a,this.onSuppressLabels=o,this.onFocusTask=l,this.tasks=[],this.index=0,this.stationId=null,e.addEventListener("click",c=>this._click(c))}load(e,t,n=null){this.stationId=e,this.tasks=t;let s=t.findIndex(r=>!this.progress.isDone(e,r.id));this.index=n??(s<0?0:s),this.state={},this._start()}get task(){return this.tasks[this.index]}get st(){var e,t;return(e=this.state)[t=this.task?.id]||(e[t]=this._fresh())}_fresh(){return{status:"active",step:0,wrong:[],chosen:null,prediction:null,order:[],matched:[],sel:null,firstTry:!0,feedback:null}}_start(){let e=this.task;if(!e){this.el.innerHTML="";return}this.state[e.id]=this._fresh(),e.kind==="order"&&(this.st.pool=Ad(e.items.map(t=>t.id),e.id.length+5)),e.kind==="match"&&(this.st.effects=Ad(e.pairs.map((t,n)=>n),7)),this.onSetup?.(e.setup||null,e),this.onSuppressLabels?.(!!e.hideLabels),this.render(),this.onFocusTask?.(e)}goTo(e){e>=0&&e<this.tasks.length&&(this.index=e,this._start())}next(){return this.index<this.tasks.length-1?(this.index++,this._start(),!0):!1}skip(){return this.st.status="skipped",this.next()}retry(){this._start()}_complete(){let e=this.st;e.status="done",this.progress.record(this.stationId,this.task.id,{firstTry:e.firstTry}),this.onSuppressLabels?.(!1),this.onAfter?.(this.task.after||null,this.task),this.onChange?.()}_miss(){this.st.firstTry=!1,this.progress.miss(this.stationId,this.task.id),this.onChange?.()}pick(e){let t=this.task;if(!t||this.st.status==="done")return!1;let n=this.st;if(t.kind==="pick")return t.answer.includes(e)?(n.feedback={ok:!0},this._complete(),this.render(),"correct"):(n.feedback={ok:!1,id:e},this._miss(),this.render(),"wrong");if(t.kind==="sequence"){let s=t.answer[n.step];return e===s?(n.step++,n.feedback=null,n.step>=t.answer.length&&this._complete(),this.render(),"correct"):t.answer.slice(0,n.step).includes(e)?!1:(n.feedback={ok:!1,id:e},this._miss(),this.render(),"wrong")}return t.kind==="order"&&t.items.some(s=>s.id===e)?(this._orderPick(e),!0):!1}event(e,t){let n=this.task;if(!n||n.kind!=="predict"||this.st.status!=="predicted")return;let s=n.verify,r=!1;if(s.event===e&&(r=s.value!=null?t===s.value:s.min!=null?t>=s.min:!0),s.action===e&&(r=s.count?t>=s.count:!!t),!r)return;let a=n.options.find(o=>o.id===this.st.prediction)?.correct;this.st.feedback={ok:a,verified:!0},a||this._miss(),this._complete(),this.render()}_orderPick(e){let t=this.task,n=this.st,s=t.items[n.order.length].id;e===s?(n.order.push(e),n.feedback=null,n.order.length===t.items.length&&this._complete()):(n.feedback={ok:!1,id:e,shake:e},this._miss()),this.render()}_click(e){let t=e.target.closest("[data-act]");if(!t||!this.el.contains(t))return;let n=t.dataset.act,s=this.task,r=this.st;if(n==="opt"){if(r.status==="done"&&s.kind==="choice")return;let a=s.options.find(o=>o.id===t.dataset.id);s.kind==="choice"?(r.chosen=a.id,a.correct?(r.feedback={ok:!0},this._complete()):(r.wrong.push(a.id),r.feedback={ok:!1,opt:a},this._miss())):s.kind==="predict"&&r.status==="active"&&(r.prediction=a.id,r.status="predicted",this.onChange?.()),this.render()}else if(n==="verify-do")this.onAction?.(s.verify);else if(n==="order")this._orderPick(t.dataset.id);else if(n==="cause")r.sel=Number(t.dataset.i),this.render();else if(n==="effect"){if(r.sel==null){r.feedback={ok:!1,msg:["Pick a cause first.","\u8BF7\u5148\u9009\u4E00\u4E2A\u539F\u56E0\u3002"]},this.render();return}let a=Number(t.dataset.i);a===r.sel?(r.matched.push(a),r.sel=null,r.feedback=null,r.matched.length===s.pairs.length&&this._complete()):(r.feedback={ok:!1,shake:`e${a}`},this._miss()),this.render()}else n==="retry"?this.retry():n==="next"?this.next()||this.onChange?.("station-complete"):n==="skip"?this.skip()||this.onChange?.("station-complete"):n==="goto"&&this.goTo(Number(t.dataset.i))}render(){let e=this.task;if(!e)return;let t=this.st,n=t.status==="done",s=this.tasks.length,r=this.tasks.map((d,f)=>{let m=this.progress.isDone(this.stationId,d.id);return`<button type="button" class="tdot${f===this.index?" is-current":""}${m?" is-done":""}" data-act="goto" data-i="${f}" aria-label="Task ${f+1}${m?" (done)":""}"><span aria-hidden="true">${m?"\u2713":f+1}</span></button>`}).join(""),a="",o={pick:["Click it on the model or its label. You can also use the Explore list.","\u5728\u6A21\u578B\u6216\u6807\u7B7E\u4E0A\u70B9\u51FB\uFF0C\u4E5F\u53EF\u7528\u201C\u63A2\u7D22\u201D\u5217\u8868\u3002"],sequence:["Click on the model or a label. Order matters.","\u5728\u6A21\u578B\u6216\u6807\u7B7E\u4E0A\u70B9\u51FB\uFF0C\u6CE8\u610F\u987A\u5E8F\u3002"],order:["Tap the cards in order.","\u6309\u987A\u5E8F\u70B9\u51FB\u5361\u7247\u3002"]};if(e.kind==="pick"||e.kind==="sequence"){if(e.kind==="sequence"){let d=e.answer.map((f,m)=>`<li class="seq-chip${m<t.step?" is-done":m===t.step&&!n?" is-current":""}"><span class="seq-n">${m+1}</span>${m<t.step?se(Hs(f)):'<span aria-hidden="true">?</span><span class="sr-only">not yet found</span>'}</li>`).join('<li class="seq-arrow" aria-hidden="true">\u2192</li>');a+=`<ol class="seq-chips">${d}</ol>`,!n&&e.stepPrompts&&(a+=`<p class="task-step">${se(e.stepPrompts[t.step])}</p>`)}n||(a+=`<p class="task-how"><span class="how-icon" aria-hidden="true">\u25CE</span>${se(o[e.kind])}</p>`)}if(e.kind==="choice"||e.kind==="predict"){let d=e.kind==="predict"&&t.status!=="active";a+=`<div class="opts" role="group">${e.options.map(f=>{let m=["opt",e.kind==="choice"&&t.wrong.includes(f.id)?"is-wrong":"",e.kind==="choice"&&n&&f.correct?"is-right":"",e.kind==="predict"&&t.prediction===f.id?"is-picked":"",e.kind==="predict"&&n&&f.correct?"is-right":""].join(" "),x=m.includes("is-right")?"\u2713":m.includes("is-wrong")?"\u2717":m.includes("is-picked")?"\u25CF":"",p=e.kind==="choice"&&(n||t.wrong.includes(f.id))||d;return`<button type="button" class="${m}" data-act="opt" data-id="${f.id}" ${p?"disabled":""}><span class="opt-mark" aria-hidden="true">${x}</span><span class="opt-text">${se(f.label)}</span></button>`}).join("")}</div>`,e.kind==="predict"&&t.status==="predicted"&&(a+=`<div class="verify"><p><strong>${se(["Now check it on the model:","\u73B0\u5728\u5728\u6A21\u578B\u4E0A\u9A8C\u8BC1\uFF1A"])}</strong> ${se(e.verify.cta)}</p><button type="button" class="btn-ghost" data-act="verify-do">${se(["Do it for me","\u5E2E\u6211\u64CD\u4F5C"])}</button></div>`)}if(e.kind==="order"){let d=t.order.map((f,m)=>`<li class="ord-placed"><span class="seq-n">${m+1}</span>${se(e.items.find(x=>x.id===f).label)}</li>`).join("");a+=`<ol class="ord-list">${d||`<li class="ord-empty">${se(["Your order appears here","\u4F60\u7684\u987A\u5E8F\u4F1A\u663E\u793A\u5728\u8FD9\u91CC"])}</li>`}</ol>`,n||(a+=`<div class="ord-pool">${t.pool.filter(f=>!t.order.includes(f)).map(f=>`<button type="button" class="ord-card${t.feedback?.shake===f?" is-shake":""}" data-act="order" data-id="${f}">${se(e.items.find(m=>m.id===f).label)}</button>`).join("")}</div>`)}if(e.kind==="match"){let d=e.pairs.map((m,x)=>`<button type="button" class="m-card cause${t.sel===x?" is-sel":""}${t.matched.includes(x)?" is-done":""}" data-act="cause" data-i="${x}" ${t.matched.includes(x)?"disabled":""}>${se(m.cause)}</button>`).join(""),f=t.effects.map(m=>`<button type="button" class="m-card effect${t.matched.includes(m)?" is-done":""}${t.feedback?.shake===`e${m}`?" is-shake":""}" data-act="effect" data-i="${m}" ${t.matched.includes(m)?"disabled":""}>${se(e.pairs[m].effect)}</button>`).join("");a+=`<div class="match"><div class="m-col"><p class="m-h">${se(["Cause","\u539F\u56E0"])}</p>${d}</div><div class="m-col"><p class="m-h">${se(["Effect","\u7ED3\u679C"])}</p>${f}</div></div>`}let l="",c=t.feedback;if(n){let d=e.kind==="predict"&&c&&c.verified&&!c.ok,f=e.kind==="predict"?d?["\u2717 Your prediction did not match. Here is what the model shows:","\u2717 \u9884\u6D4B\u4E0E\u89C2\u5BDF\u4E0D\u7B26\u3002\u6A21\u578B\u663E\u793A\uFF1A"]:["\u2713 Your prediction matched the model.","\u2713 \u4F60\u7684\u9884\u6D4B\u4E0E\u6A21\u578B\u4E00\u81F4\u3002"]:t.firstTry?["\u2713 Correct.","\u2713 \u6B63\u786E\u3002"]:["\u2713 Got it.","\u2713 \u627E\u5230\u4E86\u3002"];l=`<div class="fb ${d?"is-warn":"is-ok"}"><p class="fb-head">${se(f)}</p><p>${se(e.explain)}</p></div>`}else if(c&&c.ok===!1){let d;if(c.opt)d=c.opt.feedback||["Not this one. Look at the model again and try another answer.","\u4E0D\u662F\u8FD9\u4E2A\u3002\u518D\u770B\u770B\u6A21\u578B\uFF0C\u6362\u4E00\u4E2A\u7B54\u6848\u3002"];else if(c.id&&(e.kind==="pick"||e.kind==="sequence")){let f=Rn[c.id];d=[`That is the ${Hs(c.id)[0]}. ${f?f.does[0]:""} Try again.`,`\u8FD9\u662F${Hs(c.id)[1]}\u3002${f?f.does[1]:""}\u518D\u8BD5\u4E00\u6B21\u3002`]}else c.msg?d=c.msg:d=["Not in that order. Try again.","\u987A\u5E8F\u4E0D\u5BF9\uFF0C\u518D\u8BD5\u4E00\u6B21\u3002"];l=`<div class="fb is-no"><p class="fb-head">${se(["\u2717 Not yet","\u2717 \u8FD8\u4E0D\u5BF9"])}</p><p>${se(d)}</p>${e.hint?`<p class="fb-hint">${se(["Hint: ","\u63D0\u793A\uFF1A"])}${se(e.hint)}</p>`:""}</div>`}let h=this.index===s-1,u=`<div class="task-actions">
      <button type="button" class="btn-ghost" data-act="retry">${se(n?["Try again","\u518D\u505A\u4E00\u6B21"]:["Restart","\u91CD\u6765"])}</button>
      ${n?"":`<button type="button" class="btn-ghost" data-act="skip">${se(["Skip","\u8DF3\u8FC7"])}</button>`}
      <button type="button" class="btn-primary" data-act="next" ${n?"":"disabled"}>${se(h?["Station done \u2192","\u672C\u7AD9\u5B8C\u6210 \u2192"]:["Next task \u2192","\u4E0B\u4E00\u9898 \u2192"])}</button>
    </div>`;this.el.innerHTML=`<div class="task" data-kind="${e.kind}">
      <div class="task-head"><div class="tdots" role="group" aria-label="Tasks">${r}</div>${e.optional?`<span class="badge">${se(["Optional","\u8FDB\u9636"])}</span>`:""}${e.kind==="predict"?`<span class="badge badge-predict">${se(["Predict \u2192 verify","\u5148\u9884\u6D4B \u2192 \u518D\u9A8C\u8BC1"])}</span>`:""}</div>
      <p class="task-skill">${se(e.skill)}</p>
      <p class="task-prompt">${se(e.prompt)}</p>
      ${a}
      <div class="task-fb" role="status" aria-live="polite">${l}</div>
      ${u}
      ${e.source?`<p class="task-src">${se(["Source: ","\u6765\u6E90\uFF1A"])}${Oo(e.source)}</p>`:""}
    </div>`}},Fo=class{constructor(e="speech_hearing_science_ear3d_progress_v1"){var t;this.key=e;try{this.data=JSON.parse(localStorage.getItem(e))||{}}catch{this.data={}}(t=this.data).stations||(t.stations={})}_s(e){var t;return(t=this.data.stations)[e]||(t[e]={done:{},misses:{}})}record(e,t,{firstTry:n}){let s=this._s(e);s.done[t]={firstTry:n,at:Date.now()},this.save()}miss(e,t){let n=this._s(e);n.misses[t]=(n.misses[t]||0)+1,this.save()}isDone(e,t){return!!this.data.stations[e]?.done?.[t]}misses(e){return Object.values(this.data.stations[e]?.misses||{}).reduce((t,n)=>t+n,0)}doneCount(e,t){return t.filter(n=>this.isDone(e,n.id)).length}set(e,t){this.data[e]=t,this.save()}get(e){return this.data[e]}reset(){this.data={stations:{}},this.save()}save(){try{localStorage.setItem(this.key,JSON.stringify(this.data))}catch{}}};Ei();var it={grid:"rgba(220, 240, 232, 0.09)",axis:"rgba(220, 240, 232, 0.32)",text:"#a9c4bb",strong:"#e9f4ef",now:"#ffe2a8",prev:"#7fd6ff",canal:"#7fd39a",concha:"#ffb070",active:"#ffe2a8",passive:"#9fb8b0",spike:"#ffb35c",wave:"#7fd6ff",volt:"#ffc65c",hyper:"#6fa8dc",violet:"#c6a8ff"},Pd=()=>document.documentElement.dataset.lang||"en",Wt=(i,e)=>Pd()==="cn"?e:Pd()==="mixed"?`${i} \xB7 ${e}`:i,Gs=class{constructor(e){this.canvas=e,this.g=e.getContext("2d"),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(e),this.resize(),queueMicrotask(()=>{this.ready=!0,this.draw?.()})}resize(){let e=Math.min(window.devicePixelRatio||1,2),t=this.canvas.clientWidth||300,n=this.canvas.clientHeight||150;this.canvas.width=Math.round(t*e),this.canvas.height=Math.round(n*e),this.g.setTransform(e,0,0,e,0,0),this.w=t,this.h=n,this.ready&&this.draw?.()}clear(){this.g.clearRect(0,0,this.w,this.h)}text(e,t,n,{color:s=it.text,size:r=10.5,align:a="left",base:o="alphabetic",weight:l=500}={}){let c=this.g;c.font=`${l} ${r}px -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif`,c.fillStyle=s,c.textAlign=a,c.textBaseline=o,c.fillText(e,t,n)}line(e,{color:t,width:n=1.6,dash:s=null,alpha:r=1}={}){let a=this.g;a.save(),a.globalAlpha=r,a.strokeStyle=t,a.lineWidth=n,a.lineJoin="round",a.setLineDash(s||[]),a.beginPath(),e.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.stroke(),a.restore()}},Id=(i,e,t,n,s)=>n+Math.log(i/e)/Math.log(t/e)*(s-n),Ho=class extends Gs{constructor(e){super(e),this.freq=2500}set(e){this.freq=e,this.draw()}draw(){if(!this.g||!this.ready)return;this.clear();let{w:e,h:t}=this,n={l:34,r:12,t:16,b:22},s=h=>Id(h,200,1e4,n.l,e-n.r),r=h=>n.t+(1-(h+5)/25)*(t-n.t-n.b);for(let h of[200,500,1e3,2e3,5e3,1e4])this.line([[s(h),n.t],[s(h),t-n.b]],{color:it.grid,width:1}),this.text(h>=1e3?`${h/1e3}k`:`${h}`,s(h),t-6,{align:"center",size:9.5});for(let h of[0,10,20])this.line([[n.l,r(h)],[e-n.r,r(h)]],{color:h===0?it.axis:it.grid,width:1}),this.text(`${h}`,n.l-6,r(h)+3,{align:"right",size:9.5});this.text("dB",6,n.t+2,{size:9.5});let a=[],o=[];for(let h=0;h<=160;h++){let u=200*Math.pow(50,h/160),d=da(u);a.push([s(u),r(d.canal)]),o.push([s(u),r(d.concha)])}this.line(a,{color:it.canal,width:2}),this.line(o,{color:it.concha,width:2,dash:[5,4]});let l=da(this.freq),c=s(this.freq);this.line([[c,n.t],[c,t-n.b]],{color:it.strong,width:1,dash:[2,3]});for(let[h,u]of[[l.canal,it.canal],[l.concha,it.concha]])this.g.fillStyle=u,this.g.beginPath(),this.g.arc(c,r(h),3.6,0,Math.PI*2),this.g.fill();this.text(`${Wt("canal","\u8033\u9053")} +${Math.max(0,l.canal).toFixed(0)} dB`,e-n.r,n.t+2,{align:"right",color:it.canal,size:10}),this.text(`${Wt("concha (dashed)","\u8033\u7532\u8154\uFF08\u865A\u7EBF\uFF09")} +${Math.max(0,l.concha).toFixed(0)} dB`,e-n.r,n.t+15,{align:"right",color:it.concha,size:10}),this.text(Wt("schematic redraw of L13 p.6","\u793A\u610F\uFF1A\u91CD\u7ED8\u81EA L13 \u7B2C 6 \u9875"),n.l+2,n.t+2,{size:9,color:it.text})}},Vo=class extends Gs{constructor(e){super(e),this.freq=1e3,this.prev=null,this.t=0,this.opts={active:!0,loud:!1},this.fixed=null}set(e){Object.assign(this,e)}tick(e){this.t+=e,this.draw()}draw(){if(!this.g||!this.ready)return;this.clear();let{w:e,h:t}=this,n={l:14,r:14,t:22,b:30},s=c=>n.l+c*(e-n.l-n.r),r=n.t+(t-n.t-n.b)/2,a=(t-n.t-n.b)/2*.9;this.line([[s(0),r],[s(1),r]],{color:it.axis,width:1});for(let c of[8e3,4e3,1e3,250]){let h=s(Un(c));this.line([[h,t-n.b+2],[h,t-n.b+7]],{color:it.axis,width:1}),this.text(yn(c),h,t-n.b+18,{align:"center",size:9.5})}this.text(Wt("BASE \xB7 high f","\u5E95\u7AEF \xB7 \u9AD8\u9891"),s(0),n.t-8,{size:10,color:it.strong,weight:650}),this.text(Wt("APEX \xB7 low f","\u9876\u7AEF \xB7 \u4F4E\u9891"),s(1),n.t-8,{size:10,color:it.strong,weight:650,align:"right"});let o=(c,h,u,d)=>{let f=[],m=[],x=[],p=0,g=0,y=.55+.22*Math.log2(c/250);for(let b=0;b<=240;b++){let T=b/240,{env:E,phase:_}=$i(c,T,this.opts),S=Math.min(E,1.7)/1.7;f.push([s(T),r-S*a]),m.push([s(T),r+S*a]),d&&x.push([s(T),r-S*a*Math.cos(2*Math.PI*y*this.t-_)]),E>p&&(p=E,g=T)}d&&this.line(x,{color:"#f0a456",width:1.6,alpha:.95}),this.line(f,{color:h,width:1.8,dash:u}),this.line(m,{color:h,width:1.8,dash:u});let w=s(g);return this.g.fillStyle=h,this.g.beginPath(),this.g.moveTo(w,r-Math.min(p,1.7)/1.7*a-4),this.g.lineTo(w-5,r-Math.min(p,1.7)/1.7*a-12),this.g.lineTo(w+5,r-Math.min(p,1.7)/1.7*a-12),this.g.fill(),g};if(this.prev&&o(this.prev,it.prev,[5,4],!1),o(this.freq,it.now,null,!0),this.fixed!=null){let c=s(this.fixed);this.line([[c,n.t],[c,t-n.b]],{color:it.violet,width:1.2,dash:[3,3]})}let l=t-4;this.text(`\u2014 ${yn(this.freq)} ${Wt("envelope","\u5305\u7EDC")}`,n.l,l,{size:9.5,color:it.now}),this.prev&&this.text(`- - ${yn(this.prev)} ${Wt("(previous)","\uFF08\u4E0A\u4E00\u4E2A\uFF09")}`,n.l+118,l,{size:9.5,color:it.prev})}},Go=class extends Gs{constructor(e){super(e),this.place=Un(1e3),this.freq=1e3,this.active=!0}set(e){Object.assign(this,e),this.draw()}draw(){if(!this.g||!this.ready)return;this.clear();let{w:e,h:t}=this,n={l:34,r:12,t:14,b:22},s=c=>Id(c,100,16e3,n.l,e-n.r),r=c=>n.t+c/100*(t-n.t-n.b);for(let c of[100,250,1e3,4e3,16e3])this.line([[s(c),n.t],[s(c),t-n.b]],{color:it.grid,width:1}),this.text(yn(c).replace(" ",""),s(c),t-7,{align:"center",size:9.5});for(let c of[0,50,100])this.line([[n.l,r(c)],[e-n.r,r(c)]],{color:it.grid,width:1}),this.text(`${c}`,n.l-6,r(c)+3,{align:"right",size:9.5});this.text(Wt("dB to reach criterion","\u8FBE\u5230\u6807\u51C6\u4F4D\u79FB\u6240\u9700 dB"),n.l+4,n.t+10,{size:9.5});let a=c=>{let h=[];for(let u=0;u<=200;u++){let d=100*Math.pow(160,u/200);h.push([s(d),r(ko(d,this.place,c))])}return h};this.line(a(!1),{color:it.passive,width:1.8,dash:[5,4]}),this.line(a(!0),{color:it.active,width:2.2,alpha:this.active?1:.35});let o=Bo(this.place);this.text(`CF \u2248 ${yn(Math.round(o/10)*10)}`,s(o),r(ko(o,this.place,!0))+16,{align:"center",color:it.strong,size:10,weight:650});let l=r(ko(this.freq,this.place,this.active));this.g.fillStyle=it.violet,this.g.beginPath(),this.g.arc(s(this.freq),l,4.5,0,Math.PI*2),this.g.fill(),this.text(Wt("solid: living (OHC on) \xB7 dashed: passive (B\xE9k\xE9sy)","\u5B9E\u7EBF\uFF1A\u6D3B\u4F53\uFF08OHC \u5F00\uFF09\xB7 \u865A\u7EBF\uFF1A\u88AB\u52A8\uFF08B\xE9k\xE9sy\uFF09"),e-n.r,t-n.b-6,{align:"right",size:9.5})}},Wo=class extends Gs{constructor(e){super(e),this.buf=[]}push(e,t,n){this.buf.push(e),this.buf.length>240&&this.buf.shift(),this.po=t,this.ohc=n,this.v=e,this.draw()}draw(){if(!this.g||!this.ready)return;this.clear();let{w:e,h:t}=this,n={l:40,r:96,t:12,b:12},s=h=>n.t+(1-(h+80)/60)*(t-n.t-n.b);for(let h of[-80,-60,-40,-20])this.line([[n.l,s(h)],[e-n.r,s(h)]],{color:h===-60?it.axis:it.grid,width:1,dash:h===-60?[4,3]:null}),this.text(`${h}`,n.l-6,s(h)+3,{align:"right",size:9.5});this.text("mV",4,n.t+6,{size:9.5});let r=this.buf.map((h,u)=>[n.l+u/239*(e-n.l-n.r),s(h)]);r.length>1&&this.line(r,{color:this.v>=wi?it.volt:it.hyper,width:2});let a=e-n.r+14,o=18,l=t-n.t-n.b,c=(h,u,d,f)=>{this.g.fillStyle="rgba(255,255,255,0.08)",this.g.fillRect(h,n.t,o,l),this.g.fillStyle=d,this.g.fillRect(h,n.t+l*(1-u),o,l*u),this.text(f,h+o/2,t-1,{align:"center",size:9})};c(a,jt(this.po??0,0,1),it.violet,Wt("open","\u5F00\u653E")),c(a+34,jt(((this.ohc??1)-.88)/.24,0,1),"#7fe3c8",Wt("OHC L","OHC \u957F")),this.text(`${(this.v??wi).toFixed(0)} mV`,e-n.r-6,n.t+10,{align:"right",color:it.strong,size:11,weight:650})}},qo=class extends Gs{constructor(e,{seed:t=11}={}){super(e),this.freq=250,this.level=60,this.windowMs=20,this.sweepSec=3.2,this.cursor=0,this.rows=[{type:"high"},{type:"high"},{type:"mid"},{type:"mid"},{type:"low"},{type:"low"}],this.hist=new Float32Array(24),this.count=0,this.simMs=0,this.rng=zm(t),this.newSweep()}set({freq:e,level:t}){let n=!1;e!=null&&e!==this.freq&&(this.freq=e,n=!0),t!=null&&t!==this.level&&(this.level=t,n=!0),n&&(this.hist.fill(0),this.count=0,this.simMs=0,this.cursor=0,this.newSweep())}newSweep(){let e=this.freq,t=Ah(e);this.trains=this.rows.map(n=>{let{rate:s}=lr(n.type,this.level,e,e),r=Th[n.type];return Cd({rate:s,f:e,vs:t,durationMs:this.windowMs,rng:this.rng,sr:r.sr})});for(let n of this.trains)for(let s of n){let r=((s*e/1e3+.5)%1+1)%1;this.hist[Math.floor(r*24)%24]+=1}this.count+=this.trains[0].length+this.trains[1].length,this.simMs+=this.windowMs*2}get rateHigh(){return this.simMs?this.count/this.simMs*1e3:0}tick(e,t=!0){t&&(this.cursor+=e/this.sweepSec,this.cursor>=1&&(this.cursor=0,this.newSweep())),this.draw()}draw(){if(!this.g||!this.ready||!this.trains)return;this.clear();let{w:e,h:t}=this,n=e<560,s=n?0:Math.min(200,e*.26),r=n?92:0,a={l:56,r:s?s+26:12,t:10,b:24+r},o=e-a.l-a.r,l=T=>a.l+T/this.windowMs*o,c=a.t+44,h=Math.max(10,(t-a.b-c-18)/(this.rows.length+1)),u=this.cursor*this.windowMs,d=a.t+20,f=15,m=[],x=Math.min(1600,Math.max(240,Math.round(this.freq*this.windowMs/1e3*16)));for(let T=0;T<=x;T++){let E=T/x*u;m.push([l(E),d-f*Math.cos(2*Math.PI*this.freq*E/1e3)])}this.text(Wt("stimulus","\u523A\u6FC0"),6,d+3,{size:10,color:it.wave}),m.length>1&&this.line(m,{color:it.wave,width:1.3});let p={high:Wt("high SR","\u9AD8\u81EA\u53D1"),mid:Wt("mid SR","\u4E2D\u81EA\u53D1"),low:Wt("low SR","\u4F4E\u81EA\u53D1")};this.rows.forEach((T,E)=>{let _=c+E*h;this.text(p[T.type],6,_+h*.62,{size:9.5}),this.line([[a.l,_+h-1],[a.l+o,_+h-1]],{color:it.grid,width:1});for(let S of this.trains[E])S<=u&&this.line([[l(S),_+2],[l(S),_+h-3]],{color:it.spike,width:1.8})});let g=c+this.rows.length*h+4;this.text(Wt("all six","\u516D\u6839\u5408\u8BA1"),6,g+h*.62,{size:9.5,color:it.strong});for(let T of this.trains)for(let E of T)E<=u&&this.line([[l(E),g+2],[l(E),g+h-3]],{color:"#ffd9a8",width:1.4,alpha:.85});let y=g+h+4;this.line([[a.l,y],[a.l+o,y]],{color:it.axis,width:1});for(let T=0;T<=this.windowMs;T+=5)this.line([[l(T),y],[l(T),y+4]],{color:it.axis,width:1}),this.text(`${T}`,l(T),y+14,{align:"center",size:9.5});this.text("ms",a.l+o+4,y+14,{size:9.5}),this.line([[l(u),a.t],[l(u),y]],{color:"rgba(255,255,255,0.35)",width:1}),this.text(Wt("display slowed \u2248 160\xD7","\u753B\u9762\u6162\u653E\u7EA6 160 \u500D"),a.l+o,a.t+4,{align:"right",size:9});let w=(T,E,_,S)=>{let F=Math.max(1,...this.hist);this.text(Wt("spike phase (all sweeps)","\u5C16\u5CF0\u76F8\u4F4D\uFF08\u7D2F\u8BA1\uFF09"),T,E-4,{size:9.5,color:it.strong});let L=_/24;for(let G=0;G<24;G++){let I=this.hist[G]/F*(S-14);this.g.fillStyle=it.spike,this.g.fillRect(T+G*L+.5,E+S-12-I,L-1,I)}let D=[];for(let G=0;G<=48;G++)D.push([T+G/48*_,E+(S-12)/2-(S-12)/2.4*Math.cos(2*Math.PI*G/48-Math.PI)]);this.line(D,{color:it.wave,width:1,alpha:.7}),this.text("\u2212180\xB0",T,E+S,{size:9}),this.text(Wt("peak","\u6CE2\u5CF0"),T+_/2,E+S,{size:9,align:"center"}),this.text("+180\xB0",T+_,E+S,{size:9,align:"right"});let O=Ah(this.freq);this.text(O>.05?Wt(`locked \xB7 VS\u2248${O.toFixed(2)}`,`\u9501\u76F8 \xB7 VS\u2248${O.toFixed(2)}`):Wt("no locking (flat)","\u65E0\u9501\u76F8\uFF08\u5E73\u5766\uFF09"),T,E+S+12,{size:9.5,color:O>.05?it.now:it.text})},b=(T,E,_,S)=>{let F=O=>T+O/100*_,L=O=>E+S-O/250*S;this.text(Wt("rate vs level at CF","CF \u5904\u653E\u7535\u7387\u2014\u58F0\u7EA7"),T,E-6,{size:9.5,color:it.strong}),this.text(`${Math.round(this.rateHigh)} ${Wt("sp/s","\u6B21/\u79D2")}`,T+_,E-6,{size:9.5,color:it.spike,align:"right"}),this.line([[T,E+S],[T+_,E+S]],{color:it.axis,width:1}),this.line([[T,E],[T,E+S]],{color:it.axis,width:1});let D={high:null,mid:[5,3],low:[1.5,3]};for(let O of["high","mid","low"]){let G=[];for(let q=0;q<=100;q+=2)G.push([F(q),L(lr(O,q,this.freq,this.freq).rate)]);this.line(G,{color:it.now,width:1.6,dash:D[O]});let I=lr(O,this.level,this.freq,this.freq).rate;this.g.fillStyle=it.spike,this.g.beginPath(),this.g.arc(F(this.level),L(I),3.2,0,Math.PI*2),this.g.fill()}this.line([[F(this.level),E],[F(this.level),E+S]],{color:it.violet,width:1,dash:[2,3]}),this.text(Wt("\u2014 high \xB7 - - mid \xB7 \xB7\xB7\xB7 low SR","\u2014 \u9AD8 \xB7 - - \u4E2D \xB7 \xB7\xB7\xB7 \u4F4E\u81EA\u53D1\u7387"),T,E+S+12,{size:9}),this.text("0\u2013100 dB",T+_,E+S+12,{size:9,align:"right"})};if(s){let T=e-s-10,E=a.t+14,S=(t-E-22)*.42;w(T,E,s,S);let F=E+S+34;b(T,F,s,t-F-18)}else w(a.l,t-r+8,(e-a.l-16)*.45,r-28),b(a.l+(e-a.l-16)*.55,t-r+14,(e-a.l-16)*.45,r-34)}};function zm(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}Ei();var Rh=([i,e])=>`<span class="en-only">${i}</span><span class="cn-only" lang="zh-Hans">${e}</span>`,Hm=i=>{let e=document.createElement("div");return e.innerHTML=i.trim(),e.firstElementChild},Vn=(i,e,t=!1,n="")=>`<button type="button" class="tgl" data-param="${i}" aria-pressed="${t}">${n?`<span class="tgl-icon" aria-hidden="true">${n}</span>`:""}${se(e)}</button>`,Ch=(i,e,t,n)=>`<div class="seg" role="group" aria-label="${ua(n[0])}" data-param="${i}"><span class="seg-label">${se(n)}</span>${e.map(s=>`<button type="button" data-value="${s.v}" aria-pressed="${s.v===t}">${s.l?se(s.l):ua(s.t)}</button>`).join("")}</div>`,Xo=(i,e,{min:t,max:n,step:s=1,value:r,log:a=!1})=>`<label class="sld"><span class="sld-label">${se(e)}</span><input type="range" data-param="${i}" min="${a?0:t}" max="${a?1e3:n}" step="${a?1:s}" ${a?`data-log="${t},${n}"`:""} value="${a?Math.round(1e3*Math.log(r/t)/Math.log(n/t)):r}"><output data-out="${i}"></output></label>`,$o=i=>`<button type="button" class="play-btn" data-play="${i}"><span aria-hidden="true">\u266A</span>${se(["Play tone","\u64AD\u653E\u7EAF\u97F3"])}</button>`;function Dd(i){let e={},t=document.getElementById("readout"),n=i.S.params,s=(c,h)=>{let u=Hm(`<div class="ro" data-station="${c}" hidden>${h}</div>`);return t.append(u),e[c]={el:u},e[c]};s("intro",`<div class="ro-legend-grid">
    ${["pressure","displacement","bm","receptor","spikes"].map(c=>`<span class="sig sig-${c}"><i aria-hidden="true"></i>${se({pressure:["Air pressure","\u7A7A\u6C14\u538B\u529B"],displacement:["Structure displacement","\u7ED3\u6784\u4F4D\u79FB"],bm:["BM traveling wave","\u57FA\u5E95\u819C\u884C\u6CE2"],receptor:["Receptor potential","\u53D7\u4F53\u7535\u4F4D"],spikes:["Neural spikes","\u795E\u7ECF\u5C16\u5CF0"]}[c])}</span>`).join("")}
    <p class="ro-note">${se(["Each station names the signal it shows. Motion is slowed and exaggerated for teaching; audio plays in real time.","\u6BCF\u7AD9\u90FD\u4F1A\u6807\u660E\u663E\u793A\u7684\u662F\u54EA\u79CD\u4FE1\u53F7\u3002\u753B\u9762\u4E3A\u6559\u5B66\u800C\u6162\u653E\u3001\u5938\u5927\uFF1B\u58F0\u97F3\u6309\u771F\u5B9E\u65F6\u95F4\u64AD\u653E\u3002"])}</p></div>`);let r=s("outer-ear",`<div class="ro-controls">
      ${Vn("outer.wave",["Wave","\u58F0\u6CE2"],n.outer.wave,"\u25B6")}
      ${Vn("outer.track",["Follow a particle","\u8FFD\u8E2A\u8D28\u70B9"],n.outer.track,"\u25CE")}
      ${Xo("outer.freq",["Frequency","\u9891\u7387"],{min:200,max:1e4,value:n.outer.freq,log:!0})}
      ${$o("outer")}
    </div>
    <div class="ro-body"><div class="ro-chart"><canvas data-chart="gain" aria-label="Outer-ear gain chart"></canvas></div>
    <p class="ro-key"><span class="k-warm">\u25CF</span> ${se(["compression (dense, warm)","\u538B\u7F29\uFF08\u5BC6\u3001\u6696\u8272\uFF09"])} <span class="k-cool">\u25CF</span> ${se(["rarefaction (sparse, cool)","\u7A00\u758F\uFF08\u758F\u3001\u51B7\u8272\uFF09"])}</p></div>`);r.gain=new Ho(r.el.querySelector('[data-chart="gain"]')),s("middle-ear",`<div class="ro-controls">
      ${Vn("middle.areas",["Show areas","\u663E\u793A\u9762\u79EF"],n.middle.areas,"\u25EF")}
      ${Vn("middle.lever",["Lever arms","\u6760\u6746\u81C2"],n.middle.lever,"\u27CB")}
      ${Vn("middle.reflex",["Stapedius reflex","\u956B\u9AA8\u808C\u53CD\u5C04"],n.middle.reflex,"\u26A1")}
      ${$o("middle")}
    </div>
    <div class="ro-body"><div class="pbars" data-pbars ${n.middle.areas?"":"hidden"}>
      <div class="pbar"><span class="pbar-l">${se(["TM \xB7 \u224855 mm\xB2","\u9F13\u819C \xB7 \u7EA6 55 mm\xB2"])}</span><span class="bar"><i style="width:5.9%"></i></span><span class="pbar-v">p</span></div>
      <div class="pbar"><span class="pbar-l">${se(["Footplate \xB7 \u22483.2 mm\xB2","\u956B\u9AA8\u5E95\u677F \xB7 \u7EA6 3.2 mm\xB2"])}</span><span class="bar"><i style="width:100%"></i></span><span class="pbar-v">\u224817 p</span></div>
      <p class="ro-note">p = F / A \xB7 55 / 3.2 \u2248 17 \xB7 20\xB7log\u2081\u2080(17) \u2248 25 dB \xB7 ${se(["same force F on both (yellow arrows)","\u4E24\u5904\u662F\u540C\u6837\u7684\u529B F\uFF08\u9EC4\u8272\u7BAD\u5934\uFF09"])}</p>
    </div>
    <p class="ro-key" data-pbars-off ${n.middle.areas?"hidden":""}>${se(["Turn on \u201CShow areas\u201D to compare the TM and footplate. Use \u201CStep\u201D (top right) to follow the chain one link at a time.","\u6253\u5F00\u201C\u663E\u793A\u9762\u79EF\u201D\u6BD4\u8F83\u9F13\u819C\u4E0E\u5E95\u677F\uFF1B\u7528\u53F3\u4E0A\u89D2\u201C\u5355\u6B65\u201D\u9010\u8282\u67E5\u770B\u542C\u9AA8\u94FE\u3002"])}</p></div>`);let a=s("cochlea",`<div class="ro-controls">
      ${Ch("cochlea.freq",[{v:250,t:"250 Hz"},{v:1e3,t:"1 kHz"},{v:4e3,t:"4 kHz"},{v:8e3,t:"8 kHz"}],n.cochlea.freq,["Tone","\u7EAF\u97F3"])}
      ${Vn("cochlea.loud",["Loud","\u8F83\u54CD"],n.cochlea.loud,"\u25B2")}
      ${Vn("cochlea.active",["OHC amplifier","OHC \u653E\u5927\u5668"],n.cochlea.active,"\u2726")}
      ${Vn("cochlea.coiled",["Coil it back","\u5377\u56DE\u87BA\u65CB"],n.cochlea.coiled,"\u21BA")}
      ${$o("cochlea")}
    </div>
    <div class="ro-body"><div class="ro-chart"><canvas data-chart="bm" aria-label="Basilar membrane envelope chart"></canvas></div></div>`);a.bm=new Vo(a.el.querySelector('[data-chart="bm"]'));let o=s("hair-cells",`<div class="ro-controls">
      ${Ch("hair.mode",[{v:"oscillate",l:["Oscillate","\u632F\u52A8"]},{v:"hold",l:["Hold","\u4FDD\u6301"]}],n.hair.mode,["BM","\u57FA\u5E95\u819C"])}
      ${Xo("hair.hold",["BM displacement","\u57FA\u5E95\u819C\u4F4D\u79FB"],{min:-100,max:100,value:Math.round(n.hair.hold*100)})}
      ${Vn("hair.ions",["K\u207A ions","K\u207A \u79BB\u5B50"],n.hair.ions,"\u2022")}
      ${Vn("hair.amp",["OHC amplifier","OHC \u653E\u5927\u5668"],n.hair.amp,"\u2726")}
    </div>
    <div class="ro-body"><div class="ro-chart"><canvas data-chart="volt" aria-label="Receptor potential trace"></canvas></div>
    <p class="ro-key" data-hc-read></p></div>`);o.volt=new Wo(o.el.querySelector('[data-chart="volt"]'));let l=s("auditory-nerve",`<div class="ro-controls">
      ${Ch("nerve.freq",[250,500,1e3,2e3,4e3,8e3].map(c=>({v:c,t:yn(c)})),n.nerve.freq,["Tone","\u7EAF\u97F3"])}
      ${Xo("nerve.level",["Level (schematic dB)","\u58F0\u7EA7\uFF08\u793A\u610F dB\uFF09"],{min:0,max:100,value:n.nerve.level})}
      ${$o("nerve")}
    </div>
    <div class="ro-body ro-body-tall"><div class="ro-chart ro-chart-tall"><canvas data-chart="scope" aria-label="Stimulus waveform and spike raster on a shared time axis"></canvas></div></div>`);return l.scope=new qo(l.el.querySelector('[data-chart="scope"]')),s("pathway",`<div class="ro-controls">
      ${Vn("pathway.trace",["Trace left ear","\u8FFD\u8E2A\u5DE6\u8033"],n.pathway.trace,"\u25C9")}
      ${Vn("pathway.bypass",["Show bypass","\u663E\u793A\u65C1\u8DEF"],n.pathway.bypass,"\u2933")}
      ${Vn("pathway.desc",["Descending path","\u4E0B\u884C\u901A\u8DEF"],n.pathway.desc,"\u2193")}
    </div>
    <div class="ro-body"><p class="ro-key"><span class="k-line solid"></span>${se(["main ascending route","\u4E0A\u884C\u4E3B\u8DEF"])} <span class="k-line dot"></span>${se(["crossing / commissure","\u4EA4\u53C9 / \u8FDE\u5408"])} <span class="k-line bypass"></span>${se(["bypass of SOC","\u7ED5\u8FC7 SOC \u7684\u65C1\u8DEF"])} <span class="k-line desc"></span>${se(["descending","\u4E0B\u884C"])}</p></div>`),s("review",'<div class="ro-body"><div class="ro-progress" data-review-progress></div></div>'),t.addEventListener("click",c=>{let h=c.target.closest("button");if(!h)return;if(h.dataset.play){i.playTone(h.dataset.play);return}if(h.classList.contains("tgl")){let d=h.getAttribute("aria-pressed")!=="true";i.setParam(h.dataset.param,d);return}let u=h.closest(".seg");if(u&&h.dataset.value!=null){let d=h.dataset.value;i.setParam(u.dataset.param,isNaN(+d)?d:+d)}}),t.addEventListener("input",c=>{let h=c.target.closest("input[type=range]");h&&i.setParam(h.dataset.param,Ld(h),{live:!0})}),t.addEventListener("change",c=>{let h=c.target.closest("input[type=range]");h&&i.setParam(h.dataset.param,Ld(h),{commit:!0})}),e}function Ld(i){if(i.dataset.log){let[t,n]=i.dataset.log.split(",").map(Number);return Math.round(t*Math.pow(n/t,i.value/1e3))}let e=Number(i.value);return i.dataset.param==="hair.hold"?e/100:e}function ui(i,e){for(let t of document.querySelectorAll(`.tgl[data-param="${i}"]`))t.setAttribute("aria-pressed",String(!!e));for(let t of document.querySelectorAll(`.seg[data-param="${i}"]`))for(let n of t.querySelectorAll("button"))n.setAttribute("aria-pressed",String(String(n.dataset.value)===String(e)));for(let t of document.querySelectorAll(`input[data-param="${i}"]`))if(t.dataset.log){let[n,s]=t.dataset.log.split(",").map(Number);t.value=Math.round(1e3*Math.log(e/n)/Math.log(s/n))}else t.value=i==="hair.hold"?Math.round(e*100):e;for(let t of document.querySelectorAll(`output[data-out="${i}"]`))t.textContent=i.endsWith("freq")||i==="cochlea.sweep"?yn(e):i==="nerve.level"?`${e} dB`:i==="hair.hold"?`${e>0?"+":""}${e.toFixed(2)}`:String(e)}function Nd(i,e){return e.lessons.map((t,n)=>`<span class="chip">${se(No[t.slug])}</span>`).join("")}function Ud(i,e){let t=document.getElementById("tab-learn"),n=wd[e.id],s=Ed[e.id]||[],r=Sd[e.id];t.innerHTML=`
    <header class="st-head">
      <p class="eyebrow">${se(e.extension?["Extension station","\u5EF6\u4F38\u7AD9"]:[`Station ${e.n} of 5`,`\u7B2C ${e.n} \u7AD9 / \u5171 5 \u7AD9`])}</p>
      <h1 class="st-title">${se(e.title)}</h1>
      <p class="st-question">${se(e.question)}</p>
      <div class="chips">${Nd(i,e)}</div>
    </header>
    <p class="st-see"><span class="st-see-h">${se(["What you\u2019re seeing","\u4F60\u5728\u770B\u4EC0\u4E48"])}</span> ${se(e.see)}</p>
    <div id="task"></div>
    ${n?`<section class="goals" aria-labelledby="goals-h"><h2 id="goals-h" class="sec-h">${se(["Study-guide goals at this station","\u672C\u7AD9\u5BF9\u5E94\u7684\u590D\u4E60\u6307\u5357\u76EE\u6807"])} <small>${se(n.guide)}</small></h2><ul>${n.items.map(a=>Vm(i,e,a)).join("")}</ul></section>`:""}
    ${s.length?`<section class="adv" aria-labelledby="adv-h"><h2 id="adv-h" class="sec-h">${se(["Go deeper","\u8FDB\u9636"])}</h2>${s.map((a,o)=>`<details class="adv-item" data-adv="${o}" ${a.widget?'data-widget="'+a.widget+'"':""}><summary>${se(a.h)}</summary><p>${se(a.p)}</p>${a.widget==="tuning"?Gm(i):""}<p class="task-src">${se(["Source: ","\u6765\u6E90\uFF1A"])}${Oo(a.src)}</p></details>`).join("")}</section>`:""}
    <footer class="st-foot">
    </footer>`,e.id==="cochlea"&&i.mountTuning(t.querySelector('[data-chart="tuning"]'))}function Vm(i,e,t){let n=!1,s="";t.via.startsWith("explore:")?(n=i.progress.get("viewed")?.[t.via.slice(8)],s=`data-goal-explore="${t.via.slice(8)}"`):t.via==="advanced"?s="data-goal-adv":t.via==="lesson"?s="data-goal-lesson":(n=i.progress.isDone(e.id,t.via),s=`data-goal-task="${e.tasks.findIndex(o=>o.id===t.via)}"`);let r=t.via==="advanced"?["Go deeper \u2193","\u8FDB\u9636 \u2193"]:t.via==="lesson"?["Review page \u2197","\u590D\u4E60\u9875 \u2197"]:t.via.startsWith("explore:")?["Explore","\u63A2\u7D22"]:["Task","\u4EFB\u52A1"];return`<li class="goal${n?" is-done":""}"><span class="goal-mark" aria-hidden="true">${n?"\u2713":"\u25CB"}</span><span class="goal-text">${se(t.text)}${t.lessonNote?` <span class="goal-note">${se(["\xB7 more in the lesson","\xB7 \u8BFE\u8282\u91CC\u6709\u66F4\u591A"])}</span>`:""}</span><button type="button" class="goal-go" ${s}>${se(r)}</button></li>`}function Gm(i){let e=i.S.params.cochlea;return`<div class="tuning"><div class="ro-chart dark"><canvas data-chart="tuning" aria-label="Basilar-membrane tuning curve"></canvas></div>
    ${Xo("cochlea.sweep",["Sweep the tone","\u626B\u63CF\u9891\u7387"],{min:100,max:16e3,value:e.sweep,log:!0})}
    <p class="ro-note">${se(["The violet ring on the model marks the fixed place (CF \u2248 1 kHz). Find the CF and the steeper side.","\u6A21\u578B\u4E0A\u7684\u7D2B\u8272\u73AF\u6807\u51FA\u56FA\u5B9A\u4F4D\u7F6E\uFF08CF \u7EA6 1 kHz\uFF09\u3002\u627E\u51FA CF \u548C\u66F4\u9661\u7684\u4E00\u4FA7\u3002"])}</p></div>`}function Fd(i){let e=document.getElementById("tab-learn"),t=xs.map(n=>{let s=i.progress.doneCount(n.id,n.tasks);return`<li><button type="button" class="st-row" data-go="${n.id}"><span class="st-n">${n.extension?"+":n.n}</span><span class="st-name">${se(n.title)}<small>${se(n.question)}</small></span><span class="st-prog">${s}/${n.tasks.length}</span></button></li>`}).join("");e.innerHTML=`
    <header class="st-head">
      <p class="eyebrow">${se(["Speech & Hearing Science \xB7 interactive 3D","Speech & Hearing Science \xB7 \u4EA4\u4E92\u5F0F 3D"])}</p>
      <h1 class="st-title">${se(["Journey Through the Ear","\u4E00\u58F0\u5165\u8033"])}</h1>
      <p class="st-question">${se(["Make a sound, then follow it from the pinna to the auditory nerve.","\u53D1\u51FA\u4E00\u4E2A\u58F0\u97F3\uFF0C\u8DDF\u7740\u5B83\u4ECE\u8033\u5ED3\u8D70\u5230\u542C\u795E\u7ECF\u3002"])}</p>
    </header>
    <ol class="how">
      <li>${Rh(["<b>Follow the sound.</b> At each station the camera stops. Predict, act on the model, then read the explanation.","<b>\u8DDF\u7740\u58F0\u97F3\u8D70\u3002</b>\u6BCF\u5230\u4E00\u7AD9\u955C\u5934\u505C\u4E0B\uFF1A\u5148\u9884\u6D4B\u3001\u5728\u6A21\u578B\u4E0A\u64CD\u4F5C\uFF0C\u518D\u770B\u89E3\u91CA\u3002"])}</li>
      <li>${Rh(["<b>Explore freely.</b> Drag to rotate, scroll or pinch to zoom, and click any structure for its name, role and source.","<b>\u81EA\u7531\u63A2\u7D22\u3002</b>\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u6216\u53CC\u6307\u7F29\u653E\uFF0C\u70B9\u51FB\u4EFB\u4F55\u7ED3\u6784\u67E5\u770B\u540D\u79F0\u3001\u4F5C\u7528\u4E0E\u6765\u6E90\u3002"])}</li>
      <li>${Rh(["<b>You lead.</b> Finish with the review: put the route in order and match causes with effects.","<b>\u6211\u6765\u5E26\u8DEF\u3002</b>\u6700\u540E\u590D\u4E60\uFF1A\u6392\u51FA\u8DEF\u7EBF\u3001\u914D\u5BF9\u56E0\u679C\u3002"])}</li>
    </ol>
    <section><h2 class="sec-h">${se(["Stations","\u7AD9\u70B9"])}</h2><ol class="st-list">${t}<li><button type="button" class="st-row" data-go="review"><span class="st-n">\u2713</span><span class="st-name">${se(or.title)}<small>${se(["Put it all together","\u4E32\u8D77\u5168\u8FC7\u7A0B"])}</small></span></button></li></ol></section>
    <details class="adv-item"><summary>${se(["Keyboard, touch & accessibility","\u952E\u76D8\u3001\u89E6\u63A7\u4E0E\u65E0\u969C\u788D"])}</summary>
      <ul class="keys">
        <li><kbd>\u2190</kbd><kbd>\u2192</kbd><kbd>\u2191</kbd><kbd>\u2193</kbd> ${se(["rotate (model focused)","\u65CB\u8F6C\uFF08\u7126\u70B9\u5728\u6A21\u578B\u4E0A\uFF09"])} \xB7 <kbd>+</kbd><kbd>\u2212</kbd> ${se(["zoom","\u7F29\u653E"])}</li>
        <li><kbd>[</kbd> <kbd>]</kbd> ${se(["previous / next station","\u4E0A\u4E00\u7AD9 / \u4E0B\u4E00\u7AD9"])} \xB7 <kbd>P</kbd> ${se(["pause","\u6682\u505C"])} \xB7 <kbd>.</kbd> ${se(["step","\u5355\u6B65"])} \xB7 <kbd>R</kbd> ${se(["reset view","\u590D\u4F4D\u89C6\u89D2"])} \xB7 <kbd>L</kbd> ${se(["labels","\u6807\u7B7E"])}</li>
        <li>${se(["Every structure on the model is also a button in the Explore tab and on its label, so tasks never require precise clicking.","\u6A21\u578B\u4E0A\u7684\u6BCF\u4E2A\u7ED3\u6784\u5728\u201C\u63A2\u7D22\u201D\u9875\u548C\u6807\u7B7E\u4E0A\u90FD\u6709\u5BF9\u5E94\u6309\u94AE\uFF0C\u4EFB\u52A1\u4E0D\u9700\u8981\u7CBE\u786E\u70B9\u51FB\u3002"])}</li>
        <li>${se(["\u201CReduce motion\u201D cuts camera flights and slows the animation. Colors are paired with line styles, symbols and text.","\u201C\u51CF\u5C11\u52A8\u6001\u201D\u4F1A\u53D6\u6D88\u955C\u5934\u98DE\u884C\u5E76\u653E\u6162\u52A8\u753B\uFF1B\u989C\u8272\u5747\u914D\u6709\u7EBF\u578B\u3001\u7B26\u53F7\u548C\u6587\u5B57\u3002"])}</li>
      </ul>
    </details>
    <p class="fine">${se(["The 3D models are simplified teaching models.","3D \u6A21\u578B\u4E3A\u7B80\u5316\u6559\u5B66\u6A21\u578B\u3002"])}</p>`}function Od(i){let e=document.getElementById("tab-learn"),n=xs.flatMap(r=>r.tasks.map(a=>({s:r,tk:a}))).map(({s:r,tk:a})=>{let o=i.progress.isDone(r.id,a.id);return`<li class="${o?"is-done":""}"><span aria-hidden="true">${o?"\u2713":"\u25CB"}</span>${se(a.skill)} <button type="button" class="link-btn" data-go="${r.id}" data-task="${a.id}">${se(r.title)}</button></li>`}).join(""),s=xs.filter(r=>i.progress.misses(r.id)>0||i.progress.doneCount(r.id,r.tasks)<r.tasks.length);e.innerHTML=`
    <header class="st-head">
      <p class="eyebrow">${se(["Review","\u590D\u4E60\u6536\u5C3E"])}</p>
      <h1 class="st-title">${se(or.title)}</h1>
      <p class="st-question">${se(["Lead the sound yourself, then explain one cause \u2192 effect link at each stage.","\u81EA\u5DF1\u5E26\u7740\u58F0\u97F3\u8D70\u4E00\u904D\uFF0C\u518D\u8BF4\u6E05\u6BCF\u4E00\u7AD9\u7684\u4E00\u4E2A\u56E0\u679C\u5173\u7CFB\u3002"])}</p>
    </header>
    <div id="task"></div>
    <section class="recap"><h2 class="sec-h">${se(["What you practiced","\u5DF2\u7EC3\u4E60\u7684\u80FD\u529B"])}</h2><ul class="skills">${n}</ul></section>
    <section class="recap"><h2 class="sec-h">${se(["Worth another pass","\u503C\u5F97\u518D\u7EC3"])}</h2>${s.length?`<ul class="retry">${s.map(r=>`<li><button type="button" class="link-btn" data-go="${r.id}">${se(r.title)}</button> <span class="fine">${se([`${i.progress.doneCount(r.id,r.tasks)}/${r.tasks.length} done \xB7 ${i.progress.misses(r.id)} retries`,`\u5B8C\u6210 ${i.progress.doneCount(r.id,r.tasks)}/${r.tasks.length} \xB7 \u91CD\u8BD5 ${i.progress.misses(r.id)} \u6B21`])}</span> ${Nd(i,r)}</li>`).join("")}</ul>`:`<p>${se(["Every station is done. Try the weekly quizzes next.","\u6240\u6709\u7AD9\u70B9\u90FD\u5DF2\u5B8C\u6210\uFF0C\u63A5\u7740\u505A\u5F52\u6863\u5468\u6D4B\u5427\u3002"])}</p>`}</section>
    <section class="recap"><h2 class="sec-h">${se(["Further reading","\u5EF6\u4F38\u9605\u8BFB"])}</h2><ul class="ext">${wh.map(r=>`<li><a href="${r.href}" target="_blank" rel="noopener noreferrer">${se(r.label)} \u2197</a></li>`).join("")}</ul></section>
    <p><button type="button" class="btn-ghost" data-reset-progress>${se(["Reset my progress","\u6E05\u9664\u6211\u7684\u8FDB\u5EA6"])}</button></p>`}function Yo(i,e){let t=document.getElementById("tab-explore"),n=e.id==="pathway"?[]:Object.keys(Rn).filter(s=>i.hasAnchor(s));t.innerHTML=`
    <div class="info" id="info">${i.S.selected?Zo(i,i.S.selected):`<p class="info-empty">${se(["Click a structure on the model or pick one below.","\u5728\u6A21\u578B\u4E0A\u70B9\u51FB\u7ED3\u6784\uFF0C\u6216\u4ECE\u4E0B\u65B9\u9009\u62E9\u3002"])}</p>`}</div>
    <div class="lbl-mode" role="group" aria-label="Labels">
      <span class="seg-label">${se(["Labels","\u6807\u7B7E"])}</span>
      ${["all","selected","off"].map(s=>`<button type="button" data-labelmode="${s}" aria-pressed="${i.S.labelMode===s}">${se({all:["All","\u5168\u90E8"],selected:["Selected","\u4EC5\u9009\u4E2D"],off:["Off","\u5173\u95ED"]}[s])}</button>`).join("")}
    </div>
    <ul class="struct-list">${n.map(s=>`<li><button type="button" class="struct-btn${i.S.selected===s?" is-selected":""}" data-structure="${s}"><span class="sb-name">${se(Rn[s].name)}</span><span class="sb-st">${se(Si(Rn[s].station)?.title||["",""])}</span></button><button type="button" class="pin-btn" data-pin="${s}" aria-pressed="${i.S.pinned.has(s)}" title="Show this label"><span aria-hidden="true">\u25C9</span><span class="sr-only">${se(["Show label","\u663E\u793A\u6807\u7B7E"])}</span></button></li>`).join("")}</ul>
    ${e.id==="pathway"?`<p class="fine">${se(["On this station, click the boxes in the diagram.","\u672C\u7AD9\u8BF7\u76F4\u63A5\u70B9\u51FB\u793A\u610F\u56FE\u4E2D\u7684\u65B9\u6846\u3002"])}</p>`:""}`}function Zo(i,e){let t=Rn[e];if(!t){let s=ar[e.split("-")[0]];return`<h3 class="info-name">${se(Hs(e))}</h3>${s?.does?`<p class="info-does">${se(s.does)}</p>`:""}<p class="info-src">${se(["Source: ","\u6765\u6E90\uFF1A"])}${se(No.l21)}</p>`}let n=Si(t.station);return`<h3 class="info-name">${se(t.name)}</h3>
    <dl>
      <dt>${se(["What it does here","\u8FD9\u4E00\u6B65\u7684\u52A8\u4F5C"])}</dt><dd>${se(t.does)}</dd>
      <dt>${se(["Effect on the next step","\u5BF9\u4E0B\u4E00\u6B65\u7684\u5F71\u54CD"])}</dt><dd>${se(t.next)}</dd>
    </dl>
    <p class="info-src">${se(["Source: ","\u6765\u6E90\uFF1A"])}${Oo(t.source)}${n?` \xB7 ${se(No[n.lessons[0].slug])}`:""}</p>`}function Bd(i,e){let t=document.getElementById("tab-figures");t.innerHTML=`<h2 class="sec-h">${se(["Further reading","\u5EF6\u4F38\u9605\u8BFB"])}</h2><ul class="ext">${wh.map(n=>`<li><a href="${n.href}" target="_blank" rel="noopener noreferrer">${se(n.label)} \u2197</a></li>`).join("")}</ul>`}Ei();var Wm="http://www.w3.org/2000/svg",Be=(i,e={},t=[])=>{let n=document.createElementNS(Wm,i);for(let[s,r]of Object.entries(e))n.setAttribute(s,r);for(let s of[].concat(t))s&&n.append(s);return n},ti=(i,e,t,n,{class:s="",...r}={})=>{let a=Be("g",{class:`svg-bi ${s}`});return a.append(Be("text",{x:i,y:e,...r,class:"en-only"},[document.createTextNode(t)])),a.append(Be("text",{x:i,y:e,...r,class:"cn-only"},[document.createTextNode(n)])),a};function Ph({interactive:i=!1}={}){let e=Be("svg",{viewBox:"0 0 400 240",class:`ear-svg${i?" is-interactive":""}`,role:i?"group":"img"});i||e.setAttribute("aria-hidden","true");let t=(x,p)=>(p.setAttribute("data-structure",x),p.classList.add("s2d"),i&&p.setAttribute("tabindex","-1"),p);e.append(Be("rect",{x:4,y:20,width:168,height:212,rx:10,class:"region region-outer"})),e.append(Be("rect",{x:168,y:56,width:70,height:130,rx:10,class:"region region-middle"})),e.append(Be("rect",{x:238,y:56,width:158,height:130,rx:10,class:"region region-inner"})),e.append(t("pinna",Be("path",{class:"skin",d:"M60 40 C26 52 14 104 24 150 C34 192 58 214 74 206 C88 199 82 180 72 166 C63 152 66 138 76 131 L84 126 C70 116 58 102 60 84 C62 68 76 58 92 58 C84 42 72 36 60 40 Z"}))),e.append(t("concha",Be("ellipse",{class:"skin-deep",cx:80,cy:121,rx:11,ry:9}))),e.append(t("ear-canal",Be("path",{class:"canal",d:"M82 111 C110 104 140 108 168 106 L171 129 C140 131 110 134 82 131 Z"})));let n=Be("g",{class:"air-dots"});for(let x=0;x<18;x++)n.append(Be("circle",{cx:0,cy:120,r:2}));e.append(n),e.append(Be("rect",{x:171,y:68,width:62,height:104,rx:16,class:"cavity"}));let s=t("tympanic-membrane",Be("path",{class:"membrane",d:"M166 96 Q178 118 172 140"}));e.append(s);let r=Be("g",{class:"chain"});r.append(t("malleus",Be("path",{class:"bone",d:"M184 78 a7 8 0 1 1 0.1 0 M184 90 L175 121"}))),r.append(t("incus",Be("path",{class:"bone",d:"M199 80 a7 7 0 1 1 0.1 0 M201 92 L206 117 L210 119"}))),e.append(r);let a=t("stapes",Be("path",{class:"bone",d:"M210 120 C216 112 224 112 229 115 M210 121 C216 129 224 129 229 127 M229 113 L229 129"}));e.append(a),e.append(t("oval-window",Be("ellipse",{class:"window",cx:232,cy:121,rx:3,ry:9})));let o=t("round-window",Be("ellipse",{class:"window rw",cx:232,cy:150,rx:3,ry:6}));e.append(o),e.append(t("eustachian-tube",Be("path",{class:"tube",d:"M198 166 C212 186 226 206 246 228"}))),e.append(t("stapedius",Be("path",{class:"muscle",d:"M222 98 L215 116"}))),e.append(t("tensor-tympani",Be("path",{class:"muscle",d:"M226 74 C212 76 196 84 186 92"})));let l=Be("g");l.append(Be("ellipse",{cx:258,cy:88,rx:15,ry:11,class:"lab-line"}),Be("ellipse",{cx:270,cy:82,rx:9,ry:16,class:"lab-line"}),Be("ellipse",{cx:250,cy:80,rx:8,ry:14,class:"lab-line",transform:"rotate(-30 250 80)"})),e.append(t("semicircular-canals",l));let c="";for(let x=0;x<=120;x++){let p=x/120,g=p*2.6*Math.PI*2,y=30*(1-.72*p);c+=`${x?"L":"M"}${(286+y*Math.cos(g+Math.PI)).toFixed(1)} ${(140+y*Math.sin(g+Math.PI)).toFixed(1)} `}e.append(t("cochlea",Be("path",{class:"cochlea",d:c}))),e.append(Be("ellipse",{cx:246,cy:120,rx:10,ry:12,class:"vestibule"})),e.append(t("auditory-nerve",Be("path",{class:"nerve",d:"M290 136 C320 124 350 116 394 110"})));let h=Be("rect",{class:"zoom-box",x:0,y:0,width:10,height:10,rx:4}),u=Be("text",{class:"zoom-text",x:0,y:0});e.append(h,u);let d={intro:[6,22,388,210],"outer-ear":[6,22,172,210],"middle-ear":[160,58,84,128],cochlea:[240,92,92,92],"hair-cells":[270,124,26,26],"auditory-nerve":[272,92,124,72],pathway:[370,90,26,40],review:[6,22,388,210]},f={"hair-cells":"1 turn \u2192 Corti",pathway:"\u2192 brainstem"},m=0;return{svg:e,setStation(x){let p=d[x]||d.intro;h.setAttribute("x",p[0]),h.setAttribute("y",p[1]),h.setAttribute("width",p[2]),h.setAttribute("height",p[3]),u.textContent=f[x]||"",u.setAttribute("x",p[0]+p[2]/2),u.setAttribute("y",p[1]-4),e.dataset.station=x},select(x){e.querySelectorAll(".s2d").forEach(p=>p.classList.toggle("is-selected",p.dataset.structure===x))},tick(x,p=!0){if(!i)return;p&&(m+=x);let g=2*Math.PI*.55*m;[...n.children].forEach((w,b)=>{let T=18+b*8.5,E=T+3*Math.sin(.55*T-g),_=T<82?120+Math.sin(b*2.1)*26*(1-T/100):120;w.setAttribute("cx",E.toFixed(1)),w.setAttribute("cy",_.toFixed(1)),w.setAttribute("class",Math.cos(.55*T-g)<0?"dot-comp":"dot-rare")});let y=-Math.cos(.55*168-g);s.setAttribute("d",`M166 96 Q${178+y*4} 118 172 140`),r.setAttribute("transform",`rotate(${y*3} 190 80)`),a.setAttribute("transform",`translate(${y*1.6} 0)`),o.setAttribute("rx",(3+y*1.5).toFixed(2))}}}function kd(){let i=Be("svg",{viewBox:"0 0 600 230",class:"cochlea-svg is-interactive"}),e=(o,l)=>(l.setAttribute("data-structure",o),l.classList.add("s2d"),l);i.append(e("scala-vestibuli",Be("path",{class:"sv",d:"M40 40 L560 40 Q578 40 578 60 L578 108 L540 108 L540 100 L40 100 Z"}))),i.append(e("scala-tympani",Be("path",{class:"st",d:"M40 124 L540 124 L540 118 L578 118 L578 168 Q578 188 560 188 L40 188 Z"}))),i.append(e("scala-media",Be("path",{class:"sm",d:"M40 100 L540 100 L540 112 L40 112 Z"}))),i.append(e("helicotrema",Be("rect",{class:"heli",x:541,y:100,width:36,height:24,rx:6}))),i.append(e("oval-window",Be("ellipse",{class:"window",cx:40,cy:70,rx:5,ry:14}))),i.append(e("round-window",Be("ellipse",{class:"window rw",cx:40,cy:156,rx:5,ry:12})));let t=e("stapes",Be("rect",{class:"bone",x:18,y:62,width:18,height:16,rx:3}));i.append(t);let n=Be("path",{class:"env-now"}),s=Be("path",{class:"env-prev"}),r=e("basilar-membrane",Be("path",{class:"bm-line"}));i.append(s,n,r),i.append(ti(46,30,"BASE \xB7 high frequencies \xB7 narrow & stiff","\u5E95\u7AEF \xB7 \u9AD8\u9891 \xB7 \u7A84\u800C\u786C",{class:"svg-label"})),i.append(ti(560,30,"APEX \xB7 low frequencies \xB7 wide & flexible","\u9876\u7AEF \xB7 \u4F4E\u9891 \xB7 \u5BBD\u800C\u8F6F",{class:"svg-label","text-anchor":"end"})),i.append(ti(300,76,"scala vestibuli (perilymph)","\u524D\u5EAD\u9636\uFF08\u5916\u6DCB\u5DF4\uFF09",{class:"svg-chamber","text-anchor":"middle"})),i.append(ti(300,160,"scala tympani (perilymph)","\u9F13\u9636\uFF08\u5916\u6DCB\u5DF4\uFF09",{class:"svg-chamber","text-anchor":"middle"})),i.append(ti(300,216,"scala media sits between them on top of the basilar membrane","\u4E2D\u9636\u5939\u5728\u4E24\u8005\u4E4B\u95F4\uFF0C\u5750\u843D\u5728\u57FA\u5E95\u819C\u4E0A",{class:"svg-note","text-anchor":"middle"}));let a=0;return{svg:i,tick(o,{freq:l,prev:c,active:h=!0,loud:u=!1,running:d=!0}){d&&(a+=o);let f=.55+.22*Math.log2(l/250),m=y=>40+y*500,x="",p="",g="";for(let y=0;y<=200;y++){let w=y/200,{env:b,phase:T}=$i(l,w,{active:h,loud:u}),E=Math.min(b,1.7)/1.7*16;x+=`${y?"L":"M"}${m(w).toFixed(1)} ${(112-E*Math.cos(2*Math.PI*f*a-T)).toFixed(1)} `,p+=`${y?"L":"M"}${m(w).toFixed(1)} ${(112-E).toFixed(1)} `,g+=`${y?"L":"M"}${m(w).toFixed(1)} ${(112+E).toFixed(1)} `}if(r.setAttribute("d",x),n.setAttribute("d",p+g),c){let y="";for(let w of[-1,1])for(let b=0;b<=200;b++){let T=b/200,{env:E}=$i(c,T,{active:h,loud:u});y+=`${b?"L":"M"}${m(T).toFixed(1)} ${(112+w*Math.min(E,1.7)/1.7*16).toFixed(1)} `}s.setAttribute("d",y)}else s.setAttribute("d","");t.setAttribute("transform",`translate(${(Math.cos(2*Math.PI*f*a)*3).toFixed(2)} 0)`)},select(o){i.querySelectorAll(".s2d").forEach(l=>l.classList.toggle("is-selected",l.dataset.structure===o))}}}function zd(){let i=Be("svg",{viewBox:"0 0 420 270",class:"corti-svg is-interactive"}),e=(u,d)=>(d.setAttribute("data-structure",u),d.classList.add("s2d"),d);i.append(ti(14,22,"\u2190 modiolus (medial)","\u2190 \u8717\u8F74\uFF08\u5185\u4FA7\uFF09",{class:"svg-label"})),i.append(ti(406,22,"outer wall (lateral) \u2192","\u5916\u4FA7\u58C1\uFF08\u5916\u4FA7\uFF09\u2192",{class:"svg-label","text-anchor":"end"})),i.append(ti(300,50,"endolymph \xB7 high K\u207A","\u5185\u6DCB\u5DF4 \xB7 \u9AD8 K\u207A",{class:"svg-note"})),i.append(ti(250,186,"perilymph","\u5916\u6DCB\u5DF4",{class:"svg-note"})),i.append(e("spiral-lamina",Be("path",{class:"bone2",d:"M6 206 L132 202 L132 214 L6 220 Z M40 202 C50 170 62 150 74 140 L96 150 C100 170 110 190 120 202 Z"})));let t=Be("g");t.append(e("basilar-membrane",Be("rect",{class:"bm2",x:130,y:200,width:250,height:8,rx:3}))),t.append(e("pillar-cells",Be("path",{class:"pillar",d:"M186 200 L204 116 L212 116 L236 200 L228 200 L208 128 L194 200 Z"})));let n=e("ihc",Be("path",{class:"hc",d:"M168 118 C150 140 146 176 166 186 C186 176 182 140 172 118 Z"}));t.append(n);let s=[250,280,310].map(u=>e("ohc",Be("rect",{class:"hc",x:u-8,y:116,width:16,height:56,rx:7})));s.forEach(u=>t.append(u)),[250,280,310].forEach(u=>t.append(e("deiters-cells",Be("path",{class:"support",d:`M${u-6} 200 L${u-3} 174 L${u+3} 174 L${u+6} 200 Z`})))),t.append(e("reticular-lamina",Be("rect",{class:"rl",x:150,y:110,width:180,height:6,rx:2})));let r=[],a=(u,d,f)=>{let m=e("stereocilia",Be("g",{class:"bundle"}));f.forEach((x,p)=>m.append(Be("line",{x1:u-6+p*6,y1:110,x2:u-6+p*6,y2:110-x}))),m.dataset.x=u,m.dataset.cell=d,t.append(m),r.push(m)};a(170,"ihc",[10,14,19]),[250,280,310].forEach(u=>a(u,"ohc",[9,15,22])),i.append(t);let o=e("tectorial-membrane",Be("path",{class:"tm2",d:"M70 140 C110 96 160 86 240 87 L338 85 C346 86 346 94 338 96 L240 98 C180 99 130 110 96 150 Z"}));i.append(o),i.append(e("afferent-fiber",Be("path",{class:"fiber",d:"M166 186 C150 196 136 204 120 208 L6 212"}))),i.append(e("efferent-fiber",Be("path",{class:"fiber-eff",d:"M6 196 C90 194 150 190 200 182 C230 178 260 176 280 174"})));let l=Be("circle",{class:"spike-dot",r:4,cx:-10,cy:-10});i.append(l);let c=0,h=1;return{svg:i,tick(u,{d,amplifier:f=!0,running:m=!0}){m&&(c+=u);let x=fa(d),p=f?1:.55,g=5*d*p;t.setAttribute("transform",`rotate(${-g} 130 204)`),o.setAttribute("transform",`rotate(${-g*.55} 70 140)`),r.forEach(T=>T.setAttribute("transform",`rotate(${18*d*p} ${T.dataset.x} 110)`));let y=jt((x.v-wi)/30,-1,1),w=y>=0?`hsl(${220-175*y} ${55+30*y}% ${70-6*y}%)`:`hsl(214 ${55-20*y}% ${70+6*y}%)`;n.style.fill=w,s.forEach(T=>{T.style.fill=w;let E=56*(f?x.ohcLength:1);T.setAttribute("height",E.toFixed(1))}),h+=u*(.3+3*x.release);let b=h%1;return l.setAttribute("cx",(166-b*160).toFixed(1)),l.setAttribute("cy",(188+Math.min(b*3,1)*22).toFixed(1)),x},select(u){i.querySelectorAll(".s2d").forEach(d=>d.classList.toggle("is-selected",d.dataset.structure===u))}}}function Hd(){let i=Be("svg",{viewBox:"0 0 520 430",class:"pathway-svg is-interactive"}),e={l:150,r:370},t={ac:34,mgb:88,ic:142,ll:196,soc:256,cn:314,an:366},n={ac:["Auditory cortex","\u542C\u89C9\u76AE\u5C42"],mgb:["MGB","\u5185\u4FA7\u819D\u72B6\u4F53"],ic:["Inferior colliculus","\u4E0B\u4E18"],ll:["Lateral lemniscus","\u5916\u4FA7\u4E18\u7CFB"],soc:["SOC","\u4E0A\u6A44\u6984\u590D\u5408\u4F53"],cn:["Cochlear nucleus","\u8033\u8717\u6838"],an:["Auditory nerve","\u542C\u795E\u7ECF"]},s={ac:"A",mgb:"M",ic:"I",ll:"L",soc:"S",cn:"C",an:"A"};i.append(Be("line",{x1:260,y1:12,x2:260,y2:420,class:"midline"})),i.append(ti(264,424,"midline","\u4E2D\u7EBF",{class:"svg-note"}));let r=Be("g",{class:"edges"}),a=Be("g",{class:"desc-edges"});i.append(r,a);let o=Be("g");i.append(o);let l=(u,d)=>[e[d],t[u]],c=(u,d,f="",m="")=>{let[x,p]=l(...u),[g,y]=l(...d),w=(p+y)/2,b=Be("path",{d:`M${x} ${p-14} C${x} ${w} ${g} ${w} ${g} ${y+14}`,class:`edge ${f}`,"data-key":m});return r.append(b),b};for(let u of["l","r"])c(["an",u],["cn",u],"main",`an-cn-${u}`),c(["cn",u],["soc",u],"main",`cn-soc-${u}`),c(["soc",u],["ll",u],"main",`soc-ll-${u}`),c(["ll",u],["ic",u],"main",`ll-ic-${u}`),c(["ic",u],["mgb",u],"main",`ic-mgb-${u}`),c(["mgb",u],["ac",u],"main",`mgb-ac-${u}`);c(["cn","l"],["soc","r"],"cross","cn-soc-x-l"),c(["cn","r"],["soc","l"],"cross","cn-soc-x-r"),c(["cn","l"],["ll","r"],"bypass","cn-ll-bypass-l"),c(["cn","r"],["ll","l"],"bypass","cn-ll-bypass-r"),r.append(Be("path",{d:`M${e.l+60} ${t.ic} L${e.r-60} ${t.ic}`,class:"edge cross","data-key":"ic-commissure"}));for(let u of["l","r"]){let d=e[u]+(u==="l"?-78:78);a.append(Be("path",{d:`M${d} ${t.ac} L${d} ${t.soc} C${d} ${t.soc+40} ${e[u]+(u==="l"?-40:40)} ${t.an+20} ${e[u]+(u==="l"?-10:10)} ${t.an+36}`,class:"edge desc"}))}a.style.display="none";for(let u of["l","r"]){for(let m of Object.keys(t)){let[x,p]=l(m,u),g=m==="ll"||m==="an",y=Be("g",{class:`pnode${g?" tract":""}`,"data-node":`${m}-${u}`,tabindex:"-1"});y.append(Be("rect",{x:x-62,y:p-15,width:124,height:30,rx:g?15:7})),y.append(Be("text",{x:x-50,y:p+4,class:"pletter"},[document.createTextNode(s[m])])),y.append(ti(x-36,p+4,n[m][0],n[m][1],{class:"pname"})),o.append(y)}let[d]=l("an",u),f=Be("g",{class:"pear","data-node":`ear-${u}`});f.append(Be("circle",{cx:d,cy:406,r:12})),f.append(ti(d+18,410,u==="l"?"Left ear":"Right ear",u==="l"?"\u5DE6\u8033":"\u53F3\u8033",{class:"pname"})),o.append(f)}let h=["an-cn-l","cn-soc-l","cn-soc-x-l","soc-ll-l","soc-ll-r","ll-ic-l","ll-ic-r","ic-mgb-l","ic-mgb-r","mgb-ac-l","mgb-ac-r"];return{svg:i,setOptions({traceLeft:u,bypass:d,descending:f}){r.querySelectorAll(".edge").forEach(m=>{let x=m.dataset.key;m.classList.toggle("is-trace",!!u&&h.includes(x)),m.classList.contains("bypass")&&m.classList.toggle("is-shown",!!d)}),a.style.display=f?"":"none"},select(u){o.querySelectorAll("[data-node]").forEach(d=>d.classList.toggle("is-selected",d.dataset.node===u))},mark(u,d){let f=o.querySelector(`[data-node="${u}"]`);f&&f.classList.add(d?"is-correct":"is-wrong"),setTimeout(()=>f?.classList.remove("is-wrong"),900)},reset(){o.querySelectorAll("[data-node]").forEach(u=>u.classList.remove("is-correct","is-wrong","is-selected"))}}}var Ko=class{constructor(){this.ctx=null,this.enabled=!1,this.volume=.25,this.playing=null}ensure(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.volume;let t=this.ctx.createDynamicsCompressor();t.threshold.value=-12,this.master.connect(t).connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}setEnabled(e){this.enabled=e,e?this.ensure():this.stop()}setVolume(e){this.volume=e,this.master&&this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.02)}play(e,{duration:t=.7,level01:n=.7}={}){if(!this.enabled)return;let s=this.ensure();if(!s)return;this.stop();let r=s.createOscillator(),a=s.createGain();r.type="sine",r.frequency.value=e;let o=e<500?1.4:e>6e3?.55:e>3e3?.7:1,l=Math.min(.9,.5*n*o),c=s.currentTime;a.gain.setValueAtTime(0,c),a.gain.linearRampToValueAtTime(l,c+.02),a.gain.setValueAtTime(l,c+t-.06),a.gain.linearRampToValueAtTime(0,c+t),r.connect(a).connect(this.master),r.start(c),r.stop(c+t+.02),this.playing={osc:r,g:a},r.onended=()=>{this.playing?.osc===r&&(this.playing=null)}}stop(){if(!this.playing||!this.ctx)return;let{osc:e,g:t}=this.playing,n=this.ctx.currentTime;t.gain.cancelScheduledValues(n),t.gain.setTargetAtTime(0,n,.015);try{e.stop(n+.08)}catch{}this.playing=null}};Ei();var Sm="speech_hearing_science_review_lang_v1",wm="speech_hearing_science_ear3d_reduced_v1",mm=["en","mixed","cn"],zi=["intro",...Td,"review"],Ze=(i,e=document)=>e.querySelector(i),uh=new URLSearchParams(location.search),dh=i=>new Promise(e=>setTimeout(e,i)),$={lang:"en",station:null,tab:"learn",mode3d:!0,forced2d:!1,reduced:!1,paused:!1,labelMode:"all",pinned:new Set,selected:null,step:0,sound:!1,busy:!1,params:{outer:{freq:2500,track:!1,wave:!0},middle:{areas:!1,lever:!1,reflex:!1},cochlea:{freq:1e3,prev:null,loud:!1,active:!0,coiled:!1,sweep:1e3},hair:{mode:"oscillate",hold:0,ions:!0,amp:!0},nerve:{freq:250,level:60},pathway:{trace:!1,bypass:!1,desc:!1}}},Hi=new Fo,ta=new Ko,ve=null,je={},Jt=null,Ln=null,Po=null,Dn={},gd=null;function Sb(){let i=uh.get("lang");if(mm.includes(i))return i;try{let e=localStorage.getItem(Sm);if(mm.includes(e))return e}catch{}return"en"}function Em(i,e=!1){$.lang=i,document.documentElement.dataset.lang=i,document.documentElement.lang=i==="cn"?"zh-Hans":"en";let t=Ze(".lang-switch");if(t.dataset.active=i,t.querySelectorAll("button").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.lang===i))),requestAnimationFrame(()=>{let n=t.querySelector(`button[data-lang="${i}"]`),s=t.querySelector(".lang-thumb");n&&s&&(s.style.width=`${n.offsetWidth}px`,s.style.transform=`translateX(${n.offsetLeft-3}px)`)}),e)try{localStorage.setItem(Sm,i)}catch{}vd(),Am(),Rm(),Jt&&Object.values(Jt).forEach(n=>{n.gain?.draw(),n.bm?.draw(),n.volt?.draw(),n.scope?.draw()}),Po?.draw()}var Tm=(i,e)=>{let t=$.lang,n=e&&i==="l16"?`#l16-${t==="cn"?"cn":"en"}-${e}`:"";return`topics/${i}.html?lang=${t}${n}`},wb=i=>`quizzes.html?module=${i}&lang=${$.lang}`;function vd(){document.querySelectorAll("a[data-lesson]").forEach(i=>{i.href=Tm(i.dataset.lesson,i.dataset.anchor)}),document.querySelectorAll("a[data-route]").forEach(i=>{i.href=`${i.dataset.route}?lang=${$.lang}`}),document.querySelectorAll('a.quiz-link, .recap a.chip[href^="quizzes"]').forEach(i=>{i.href=i.href.replace(/lang=(en|mixed|cn)/,`lang=${$.lang}`)})}function Am(){let i=Si($.station),e=$.lang==="cn"?"\u4E00\u58F0\u5165\u8033":"Journey Through the Ear",t=i?` \xB7 ${$.lang==="cn"?i.title[1]:i.title[0]}`:$.station==="review"?` \xB7 ${$.lang==="cn"?"\u590D\u4E60":"Review"}`:"";document.title=`${e}${t} | Speech & Hearing Science`}function Rm(){let i=new URLSearchParams(location.search);i.set("lang",$.lang),$.station&&$.station!=="intro"?i.set("stage",$.station):i.delete("stage"),history.replaceState(null,"",`${location.pathname}?${i}${location.hash}`)}var Bi={S:$,progress:Hi,lessonHref:Tm,quizHref:wb,setParam:ps,playTone:ea,sceneOf:i=>i.scene,hasAnchor(i){return $.mode3d&&ve?.active?!!ve.active.anchors?.[i]:!!Rb()?.svg.querySelector(`[data-structure="${i}"]`)},mountTuning(i){i&&(Po=new Go(i),Po.set({place:Un(1e3),freq:$.params.cochlea.sweep,active:$.params.cochlea.active}),ui("cochlea.sweep",$.params.cochlea.sweep))}};async function Cm(){if(uh.get("mode")==="2d")throw new Error("2D requested");let i=document.createElement("canvas");if(!(i.getContext("webgl2")||i.getContext("webgl")))throw new Error("No WebGL");let[{World:e},{createEarScene:t},{createCochleaScene:n},{createCortiScene:s},{createNerveScene:r}]=await Promise.all([Promise.resolve().then(()=>(jr(),am)),Promise.resolve().then(()=>(lm(),om)),Promise.resolve().then(()=>(hm(),cm)),Promise.resolve().then(()=>(dm(),um)),Promise.resolve().then(()=>(pm(),fm))]);ve=new e({canvas:Ze("#gl"),container:Ze("#viewport"),labelLayer:Ze("#labels"),onPick:l=>Io(l,"model"),onHover:(l,c)=>Ub(l,c)}),je.ear=t(),je.cochlea=n(),je.corti=s(),je.nerve=r();for(let[l,c]of Object.entries(je))ve.addScene(l,c);let a=ve.camera,o=je.ear.update;je.ear.update=(l,c,h)=>{o(l,c,h),je.ear.scene.userData.cameraQuat=a.quaternion},Eb(),Tb(),ve.controls.addEventListener("start",()=>{ve.tween||($.userMoved=!0)}),new ResizeObserver(()=>{$.station!=="cochlea"||$.userMoved||ve.tween||$.params.cochlea.coiled||ve.activeName!=="cochlea"||(ve.resize(),ve.setPose(je.cochlea.fitUnrolled(ve.camera.aspect,ve.camera.fov),0))}).observe(Ze("#viewport"))}function Eb(){let i=Ze("#labels");for(let[e,t]of Object.entries(Rn)){let n=[t.name[0].replace(/\s*\(.*?\)\s*/g," ").trim(),t.name[1].replace(/（.*?）/g,"").trim()],s=document.createElement("button");s.type="button",s.className="lbl",s.dataset.structure=e,s.innerHTML=`<span class="lbl-dot" aria-hidden="true"></span><span class="lbl-text">${se(n)}</span>`,s.hidden=!0,s.addEventListener("click",()=>Io(e,"label")),i.append(s),ve.registerLabel(e,s)}}function Tb(){let i=Ze("#labels"),e=(a,o,l,c,h,u="")=>{let d=document.createElement("div");return d.className=`xlbl ${u}`,d.innerHTML=typeof o=="function"?"":se(o),d.hidden=!0,i.append(d),ve.registerExtraLabel(a,d,l,c,h),d},t=je.ear.anchors;e("area-tm",["TM \u2248 55 mm\xB2","\u9F13\u819C \u2248 55 mm\xB2"],t["_area-tm"],"ear",()=>je.ear.state.areas,"x-warm"),e("area-fp",["footplate \u2248 3.2 mm\xB2","\u5E95\u677F \u2248 3.2 mm\xB2"],t["_area-fp"],"ear",()=>je.ear.state.areas,"x-warm"),e("lever-long",["long arm \xB7 manubrium","\u957F\u81C2 \xB7 \u9524\u9AA8\u67C4"],t["_lever-long"],"ear",()=>je.ear.state.lever,"x-mint"),e("lever-short",["short arm \xB7 incus","\u77ED\u81C2 \xB7 \u7827\u9AA8\u957F\u7A81"],t["_lever-short"],"ear",()=>je.ear.state.lever,"x-coral");let n=je.cochlea.extra;e("base",["BASE \xB7 high f \xB7 narrow & stiff","\u5E95\u7AEF \xB7 \u9AD8\u9891 \xB7 \u7A84\u800C\u786C"],n.base,"cochlea",null,"x-strong"),e("apex",["APEX \xB7 low f \xB7 wide & flexible","\u9876\u7AEF \xB7 \u4F4E\u9891 \xB7 \u5BBD\u800C\u8F6F"],n.apex,"cochlea",null,"x-strong"),$.peakNowEl=e("peakNow",["",""],n.peakNow,"cochlea",()=>je.cochlea.state.u>.6,"x-now"),$.peakPrevEl=e("peakPrev",["",""],n.peakPrev,"cochlea",()=>je.cochlea.state.u>.6&&!!je.cochlea.state.prevFreq,"x-prev"),e("fixed",["fixed place \xB7 CF \u2248 1 kHz","\u56FA\u5B9A\u4F4D\u7F6E \xB7 CF \u2248 1 kHz"],n.fixed,"cochlea",()=>je.cochlea.state.fixedPlace!=null,"x-violet");let s=je.corti.extra;e("k",["K\u207A flows in when channels open","\u901A\u9053\u6253\u5F00\u65F6 K\u207A \u6D41\u5165"],s.k,"corti",()=>je.corti.state.showIons,"x-violet"),e("endo",["endolymph \xB7 high K\u207A (scala media)","\u5185\u6DCB\u5DF4 \xB7 \u9AD8 K\u207A\uFF08\u4E2D\u9636\uFF09"],s.endolymph,"corti",null,"x-dim"),e("peri",["perilymph \xB7 high Na\u207A","\u5916\u6DCB\u5DF4 \xB7 \u9AD8 Na\u207A"],s.perilymph,"corti",null,"x-dim"),e("mod",["\u2190 modiolus (medial)","\u2190 \u8717\u8F74\uFF08\u5185\u4FA7\uFF09"],s.modiolus,"corti",null,"x-dim"),e("outer",["outer wall (lateral) \u2192","\u5916\u4FA7\u58C1\uFF08\u5916\u4FA7\uFF09\u2192"],s.outer,"corti",null,"x-dim");let r=je.nerve.extra;$.electrodeEl=e("electrode",["",""],r.electrode,"nerve",null,"x-mint"),e("nbase",["base \xB7 high CF","\u5E95\u7AEF \xB7 \u9AD8 CF"],r.base,"nerve",null,"x-strong"),e("napex",["apex \xB7 low CF","\u9876\u7AEF \xB7 \u4F4E CF"],r.apex,"nerve",null,"x-strong"),e("brainstem",["\u2192 cochlear nucleus","\u2192 \u8033\u8717\u6838"],r.brainstem,"nerve",null,"x-dim"),na()}function na(){if(!ve)return;let i=$.params.cochlea;$.peakNowEl&&($.peakNowEl.innerHTML=se([`${yn(i.freq)} peak`,`${yn(i.freq)} \u5CF0\u503C`])),$.peakPrevEl&&i.prev&&($.peakPrevEl.innerHTML=se([`${yn(i.prev)} (previous)`,`${yn(i.prev)}\uFF08\u4E0A\u4E00\u4E2A\uFF09`])),$.electrodeEl&&($.electrodeEl.innerHTML=se([`recording \xB7 CF \u2248 ${yn($.params.nerve.freq)}`,`\u8BB0\u5F55\u7535\u6781 \xB7 CF \u2248 ${yn($.params.nerve.freq)}`]))}function Ab(){let i=Ze("#view2d");Dn.ear=Ph({interactive:!0}),Dn.cochlea=kd(),Dn.corti=zd(),Dn.pathway=Hd();for(let[e,t]of Object.entries(Dn))t.svg.dataset.view=e,t.svg.toggleAttribute("hidden",!0),i.append(t.svg);i.addEventListener("click",e=>{let t=e.target.closest("[data-structure], [data-node]");t&&Io(t.dataset.structure||t.dataset.node,"2d")}),gd=Ph(),Ze("#minimap").append(gd.svg)}function Pm(i){return i==="pathway"?"pathway":$.mode3d?null:{cochlea:"cochlea","hair-cells":"corti"}[i]||"ear"}var Rb=()=>Dn[Pm($.station)];function Cb(i){let e=Pm(i);Ze("#view2d").hidden=!e;for(let[t,n]of Object.entries(Dn))n.svg.toggleAttribute("hidden",t!==e);Ze("#gl").hidden=!$.mode3d||i==="pathway",Ze("#labels").hidden=!$.mode3d||i==="pathway",Ze("#viewport").classList.toggle("is-2d",!!e)}async function ms(i,{journey:e=!1,taskId:t=null,instant:n=!1}={}){zi.includes(i)||(i="intro");let s=$.station;$.station=i,$.step=0,$.selected=null,ve?.select(null),ve?.setFocus(null),ve?.setLabelsSuppressed(!1),Ze("#float-info").hidden=!0,Ze("#step-btn").querySelector(".step-n").textContent="",ta.stop(),Rm(),Am(),Hi.set("last",i),vm(),Ze("#intro").hidden=i!=="intro",document.body.dataset.station=i;let r=Si(i);Co($.tab==="figures"&&!r?"learn":$.tab),i==="intro"?Fd(Bi):i==="review"?Od(Bi):Ud(Bi,r),Ln=new Uo({el:Ze("#task")||document.createElement("div"),progress:Hi,onChange:o=>{vm(),Bb(),o==="station-complete"&&Ro()},onSetup:(o,l)=>xm(o,l),onAfter:o=>xm(o),onAction:o=>Nb(o),onSuppressLabels:o=>ve?.setLabelsSuppressed(o&&$.tab!=="explore")});let a=r?r.tasks:i==="review"?[or.order,or.match]:[];a.length&&Ln.load(i,a,t?Math.max(0,a.findIndex(o=>o.id===t)):null),r?Bd(Bi,r):Ze("#tab-figures").innerHTML="",vd();for(let[o,l]of Object.entries(Jt))l.el.hidden=o!==i;i==="review"&&Im(),kb(r),gd.setStation(i),Ze("#minimap").hidden=i==="pathway"||!$.mode3d&&["intro","outer-ear","middle-ear","review"].includes(i),zb(i),Ze("#step-btn").hidden=!(r?.stepper||["cochlea","auditory-nerve","outer-ear"].includes(i)),Cb(i),ve&&await Pb(i,s,{journey:e,instant:n}),Db(i),Yo(Bi,r||{id:i,structures:[]}),Os(null)}function bd(i){return{intro:"ear","outer-ear":"ear","middle-ear":"ear",cochlea:"cochlea","hair-cells":"corti","auditory-nerve":"nerve",review:"ear"}[i]}async function Ao(i){let e=Ze("#fade");if($.reduced){i();return}e.classList.add("on"),await dh(260),i(),await dh(40),e.classList.remove("on")}async function Pb(i,e,{journey:t,instant:n}){let s=bd(i);if(!s)return;ve.resize(),$.userMoved=!1;let r=je.ear,a=$.reduced||n;$.busy=!0;try{if(s==="ear")ve.activeName!=="ear"&&await Ao(()=>ve.setScene("ear",r.poses[i==="review"?"intro":i]||r.poses.intro)),r.state.glow=i==="outer-ear",r.state.freq=i==="outer-ear"?$.params.outer.freq:1e3,i==="outer-ear"&&t&&e==="intro"&&!a?(r.runPulse("outer-ear",3.6),await Ib(["canal-fly-1","canal-fly-2","tm-front","outer-ear"],[1.3,1.6,1,1.6])):i==="middle-ear"&&t&&!a?(r.runPulse("middle-ear",2.4),ve.setPose(r.poses["middle-ear"],1.8)):ve.setPose(r.poses[i==="review"?"intro":i]||r.poses.intro,a?0:1.1),i==="review"&&Lb();else if(s==="cochlea"){let o=je.cochlea;t&&e==="middle-ear"&&!a&&(ve.activeName!=="ear"&&await Ao(()=>ve.setScene("ear",r.poses["middle-ear"])),r.runPulse("cochlea",2.2),await gm(r.poses["cochlea-approach"],1.4),await dh(700));let l=!a;await Ao(()=>{o.state.u=l?0:1,o.state.uTarget=o.state.u,ve.setScene("cochlea",l?o.poses.coiled:o.fitUnrolled(ve.camera.aspect,ve.camera.fov))}),$.params.cochlea.coiled=!1,ui("cochlea.coiled",!1),l&&(Os(["Unrolling the cochlea: base stays at the windows, apex at the helicotrema.","\u6B63\u5728\u5C55\u5F00\u8033\u8717\uFF1A\u5E95\u7AEF\u4FDD\u6301\u5728\u4E24\u7A97\u5904\uFF0C\u9876\u7AEF\u662F\u8717\u5B54\u3002"],3200),await dh(650),o.state.uTarget=1,ve.setPose(o.fitUnrolled(ve.camera.aspect,ve.camera.fov),2.4))}else if(s==="corti"){let o=je.cochlea;if(t&&e==="cochlea"&&!a&&ve.activeName==="cochlea"){let l=Un($.params.cochlea.freq),c=o.length;await gm({pos:[l*c,1.2,2.2],target:[l*c,0,-.2]},1.3)}await Ao(()=>ve.setScene("corti",je.corti.poses.default))}else s==="nerve"&&await Ao(()=>ve.setScene("nerve",je.nerve.poses.default))}finally{$.busy=!1}}var gm=(i,e)=>new Promise(t=>ve.setPose(i,$.reduced?0:e,t)),Ib=(i,e)=>new Promise(t=>ve.flyPath(i.map(n=>je.ear.poses[n]),e,t)),_m=0;function Lb(){let i=++_m,e=["outer-ear","middle-ear","cochlea","auditory-nerve"],t=0,n=()=>{i!==_m||$.station!=="review"||(je.ear.runPulse(e[t%e.length],[3,2.2,2.6,1.6][t%4],n),t++)};n()}function Db(i){let e=$.params;ve&&(Object.assign(je.ear.state,{track:i==="outer-ear"&&e.outer.track,areas:i==="middle-ear"&&e.middle.areas,lever:i==="middle-ear"&&e.middle.lever,reflex:e.middle.reflex,waveOn:e.outer.wave||i!=="outer-ear",reduced:$.reduced}),Object.assign(je.cochlea.state,{freq:e.cochlea.freq,prevFreq:e.cochlea.prev,loud:e.cochlea.loud,active:e.cochlea.active,reduced:$.reduced}),Object.assign(je.corti.state,{mode:e.hair.mode,hold:e.hair.hold,showIons:e.hair.ions,amplifier:e.hair.amp,reduced:$.reduced}),Object.assign(je.nerve.state,{freq:e.nerve.freq,level:e.nerve.level,reduced:$.reduced}),na());for(let[t,n]of Object.entries(e))for(let[s,r]of Object.entries(n)){let a=`${t==="outer"?"outer":t==="middle"?"middle":t}.${s}`;s!=="prev"&&ui(a,r)}Jt["outer-ear"].gain.set(e.outer.freq),Jt.cochlea.bm.set({freq:e.cochlea.freq,prev:e.cochlea.prev,opts:{active:e.cochlea.active,loud:e.cochlea.loud}}),Jt["auditory-nerve"].scope.set({freq:e.nerve.freq,level:e.nerve.level}),Dn.pathway.setOptions({traceLeft:e.pathway.trace,bypass:e.pathway.bypass,descending:e.pathway.desc}),i==="pathway"&&Dn.pathway.reset()}function ps(i,e,{live:t=!1,commit:n=!1}={}){let[s,r]=i.split("."),a={outer:"outer",middle:"middle",cochlea:"cochlea",hair:"hair",nerve:"nerve",pathway:"pathway"}[s],o=$.params[a];if(!o)return;if(r==="freq"&&s==="cochlea"){if(e===o.freq)return;o.prev=o.freq}o[r]=e,ui(i,e);let l=je.ear?.state,c=je.cochlea?.state,h=je.corti?.state,u=je.nerve?.state;switch(i){case"outer.freq":l&&(l.freq=e),Jt["outer-ear"].gain.set(e),n&&ea("outer");break;case"outer.track":l&&(l.track=e),Ln?.event("track",e);break;case"outer.wave":l&&(l.waveOn=e);break;case"middle.areas":l&&(l.areas=e),Jt["middle-ear"].el.querySelector("[data-pbars]").hidden=!e,Jt["middle-ear"].el.querySelector("[data-pbars-off]").hidden=e,Ln?.event("areas",e),ve&&$.station==="middle-ear"&&ve.setPose(je.ear.poses[e?"middle-areas":"middle-ear"],$.reduced?0:1.1);break;case"middle.lever":l&&(l.lever=e);break;case"middle.reflex":l&&(l.reflex=e),Os(e?["Reflex on: the stapedius contracts, the chain stiffens and the stapes moves less (schematic).","\u53CD\u5C04\u5F00\u542F\uFF1A\u956B\u9AA8\u808C\u6536\u7F29\uFF0C\u542C\u9AA8\u94FE\u53D8\u786C\uFF0C\u956B\u9AA8\u8FD0\u52A8\u53D8\u5C0F\uFF08\u793A\u610F\uFF09\u3002"]:null,3600);break;case"cochlea.freq":c&&(c.prevFreq=o.prev,c.freq=e),Jt.cochlea.bm.set({freq:e,prev:o.prev}),na(),ea("cochlea"),Ln?.event("freq",e);break;case"cochlea.loud":c&&(c.loud=e),Jt.cochlea.bm.set({opts:{active:o.active,loud:e}});break;case"cochlea.active":c&&(c.active=e),Jt.cochlea.bm.set({opts:{active:e,loud:o.loud}}),Po?.set({active:e});break;case"cochlea.coiled":c&&ve&&(c.uTarget=e?0:1,ve.setPose(e?je.cochlea.poses.coiled:je.cochlea.fitUnrolled(ve.camera.aspect,ve.camera.fov),$.reduced?0:2.2));break;case"cochlea.sweep":Po?.set({freq:e}),c&&(c.freq=e,c.prevFreq=null,c.fixedPlace=Un(1e3)),Jt.cochlea.bm.set({freq:e,prev:null,fixed:Un(1e3)}),o.freq=e,o.prev=null,na(),n&&ea("cochlea");break;case"hair.mode":h&&(h.mode=e);break;case"hair.hold":o.mode="hold",ui("hair.mode","hold"),h&&(h.mode="hold",h.hold=e);break;case"hair.ions":h&&(h.showIons=e);break;case"hair.amp":h&&(h.amplifier=e);break;case"nerve.freq":u&&(u.freq=e),Jt["auditory-nerve"].scope.set({freq:e}),na(),ea("nerve"),Ln?.event("freq",e);break;case"nerve.level":u&&(u.level=e),Jt["auditory-nerve"].scope.set({level:e}),(!t||n)&&Ln?.event("level",e),n&&ea("nerve");break;case"pathway.trace":case"pathway.bypass":case"pathway.desc":Dn.pathway.setOptions({traceLeft:$.params.pathway.trace,bypass:$.params.pathway.bypass,descending:$.params.pathway.desc});break;default:break}}function xm(i){if(!i)return;let e=$.station;if(e==="cochlea"&&i.freq){let t=$.params.cochlea;t.freq=i.freq,t.prev=null,je.cochlea&&(je.cochlea.state.freq=i.freq,je.cochlea.state.prevFreq=null),Jt.cochlea.bm.set({freq:i.freq,prev:null}),ui("cochlea.freq",i.freq),na()}e==="auditory-nerve"&&(i.freq&&ps("nerve.freq",i.freq),i.level!=null&&ps("nerve.level",i.level)),e==="hair-cells"&&(i.mode==="oscillate"&&(ps("hair.mode","oscillate"),ki(!1),$.step=0,ve?.setFocus(null)),i.bm!=null&&($.params.hair.mode="hold",$.params.hair.hold=i.bm,ui("hair.mode","hold"),ui("hair.hold",i.bm),je.corti&&(je.corti.state.mode="hold",je.corti.state.hold=i.bm)),i.paused?(ki(!1),setTimeout(()=>ki(!0),120)):i.bm!=null&&ki(!1))}function Nb(i){if(i.action==="track")ps("outer.track",!0);else if(i.action==="areas")ps("middle.areas",!0);else if(i.action==="step")for(;$.step<(i.count||1);)_d();else i.event==="freq"?ps($.station==="cochlea"?"cochlea.freq":"nerve.freq",i.value):i.event==="level"&&ps("nerve.level",90,{commit:!0})}function Io(i,e){if(!i){fh(null);return}let t=Ln?.pick(i);$.station==="pathway"&&t&&Dn.pathway.mark(i,t==="correct"),fh(i,{fromTask:!!t})}function fh(i,{fromTask:e=!1}={}){if($.selected=i,ve?.select(i&&Rn[i]?i:null),Object.values(Dn).forEach(s=>s.select?.(i)),i&&Rn[i]){let s=Hi.get("viewed")||{};s[i]=!0,Hi.set("viewed",s)}let t=Ze("#info");t&&(t.innerHTML=i?Zo(Bi,i):`<p class="info-empty">${se(["Click a structure on the model or pick one below.","\u5728\u6A21\u578B\u4E0A\u70B9\u51FB\u7ED3\u6784\uFF0C\u6216\u4ECE\u4E0B\u65B9\u9009\u62E9\u3002"])}</p>`),document.querySelectorAll(".struct-btn").forEach(s=>s.classList.toggle("is-selected",s.dataset.structure===i));let n=Ze("#float-info");i&&(Rn[i]||i.includes("-"))&&$.tab!=="explore"?(n.innerHTML=`<button type="button" class="fi-close" aria-label="Close">\xD7</button>${Zo(Bi,i)}`,n.hidden=!1,n.classList.toggle("is-task",e)):n.hidden=!0,vd()}function Ub(i,e){let t=Ze("#tooltip");if(!i||!e){t.hidden=!0;return}let n=Ze("#viewport").getBoundingClientRect();t.innerHTML=se(Hs(i)),t.style.transform=`translate(${e.x-n.left+14}px, ${e.y-n.top+12}px)`,t.hidden=!1}var Fb={"middle-ear":[null,["1 \xB7 Pressure in the canal pushes the TM in and out.","1 \xB7 \u8033\u9053\u5185\u7684\u538B\u529B\u63A8\u52A8\u9F13\u819C\u5185\u5916\u632F\u52A8\u3002"],["2 \xB7 The malleus handle, embedded in the TM, swings with it.","2 \xB7 \u5D4C\u5728\u9F13\u819C\u91CC\u7684\u9524\u9AA8\u67C4\u968F\u4E4B\u6446\u52A8\u3002"],["3 \xB7 Malleus and incus rotate together as one lever.","3 \xB7 \u9524\u9AA8\u548C\u7827\u9AA8\u4F5C\u4E3A\u4E00\u4E2A\u6760\u6746\u4E00\u8D77\u8F6C\u52A8\u3002"],["4 \xB7 The incus pushes the stapes, and the footplate pistons.","4 \xB7 \u7827\u9AA8\u63A8\u52A8\u956B\u9AA8\uFF0C\u5E95\u677F\u505A\u6D3B\u585E\u8FD0\u52A8\u3002"],["5 \xB7 Oval window in \u2192 fluid moves \u2192 round window bulges out.","5 \xB7 \u5375\u5706\u7A97\u5411\u5185 \u2192 \u6DB2\u4F53\u6D41\u52A8 \u2192 \u5706\u7A97\u5411\u5916\u9F13\u51FA\u3002"]],"hair-cells":[null,["1 \xB7 The BM moves up, toward the scala vestibuli.","1 \xB7 \u57FA\u5E95\u819C\u5411\u4E0A\uFF08\u671D\u524D\u5EAD\u9636\uFF09\u79FB\u52A8\u3002"],["2 \xB7 Shear: the TM slides laterally over the reticular lamina, and the bundles bend toward their tallest row.","2 \xB7 \u526A\u5207\uFF1A\u76D6\u819C\u76F8\u5BF9\u7F51\u72B6\u677F\u5411\u5916\u6ED1\u52A8\uFF0C\u6BDB\u675F\u671D\u6700\u9AD8\u4E00\u6392\u5F2F\u66F2\u3002"],["3 \xB7 Tip links stretch \u2192 mechanically gated channels open \u2192 K\u207A flows in from the endolymph.","3 \xB7 \u9876\u8FDE\u62C9\u7D27 \u2192 \u673A\u68B0\u95E8\u63A7\u901A\u9053\u6253\u5F00 \u2192 \u5185\u6DCB\u5DF4\u7684 K\u207A \u6D41\u5165\u3002"],["4 \xB7 Receptor potential: the cell depolarizes from \u2248 \u221260 mV.","4 \xB7 \u53D7\u4F53\u7535\u4F4D\uFF1A\u7EC6\u80DE\u4ECE\u7EA6 \u221260 mV \u53BB\u6781\u5316\u3002"],["5 \xB7 IHC: Ca\xB2\u207A enters and transmitter is released, so Type I fibers fire.","5 \xB7 \u5185\u6BDB\u7EC6\u80DE\uFF1ACa\xB2\u207A \u5185\u6D41\u3001\u91CA\u653E\u9012\u8D28 \u2192 I \u578B\u7EA4\u7EF4\u653E\u7535\u3002"],["6 \xB7 OHC: prestin contracts, so the cell shortens and pushes back on the BM (the amplifier).","6 \xB7 \u5916\u6BDB\u7EC6\u80DE\uFF1Aprestin \u6536\u7F29 \u2192 \u7EC6\u80DE\u7F29\u77ED\u5E76\u53CD\u63A8\u57FA\u5E95\u819C\uFF08\u653E\u5927\u5668\uFF09\u3002"]]};function _d(){let i=$.station,e=Fb[i];if(!e){ki(!0),ve?.stepOnce(.09),$b(),Ln?.event("step",1);return}if($.step=($.step+1)%e.length,i==="middle-ear"&&ve?.setFocus(je.ear?.stepFocus["middle-ear"][$.step]),i==="hair-cells"){let t=je.corti;if($.step===0)ps("hair.mode","oscillate"),ve?.setFocus(null);else{if($.params.hair.mode="hold",$.params.hair.hold=.9,ui("hair.mode","hold"),ui("hair.hold",.9),t){t.state.mode="hold",t.state.hold=.9,ve.setFocus(t.stepFocus[$.step]);let n=t.poses[t.stepPose[$.step]];n&&ve.setPose(n,$.reduced?0:.9)}ki(!1)}}Os(e[$.step],0),Ze("#step-btn").querySelector(".step-n").textContent=$.step?`${$.step}/${e.length-1}`:"",Ln?.event("step",$.step)}function ki(i){$.paused=i,ve&&(ve.paused=i);let e=Ze("#pause-btn");e.setAttribute("aria-pressed",String(i)),e.innerHTML=i?`<span aria-hidden="true">\u25B6</span><span class="sr-only">${se(["Play","\u64AD\u653E"])}</span>`:`<span aria-hidden="true">\u275A\u275A</span><span class="sr-only">${se(["Pause","\u6682\u505C"])}</span>`,e.title=i?"Play (P)":"Pause (P)"}function Ob(){if($.busy)return;ki(!1),Os(null);let i=$.station,e=zi.indexOf(i);if(e<=0){xd();return}$.station=zi[e-1],ms(i,{journey:!0})}function Ro(){let i=zi.indexOf($.station);i<zi.length-1&&!$.busy&&ms(zi[i+1],{journey:!0})}function ym(){let i=zi.indexOf($.station);i>0&&!$.busy&&ms(zi[i-1])}function xd(){if(!ve?.active)return;let i=$.station;i==="cochlea"?ve.setPose($.params.cochlea.coiled?je.cochlea.poses.coiled:je.cochlea.fitUnrolled(ve.camera.aspect,ve.camera.fov),$.reduced?0:.8):bd(i)==="ear"?ve.setPose(je.ear.poses[i==="review"?"intro":i]||je.ear.poses.intro,$.reduced?0:.8):ve.setPose(ve.active.poses.default,$.reduced?0:.8)}function ea(i){if(!$.sound){i&&!$.soundHinted&&($.soundHinted=!0,Os(["Sound is off. Turn it on with the speaker button in the top bar.","\u58F0\u97F3\u5DF2\u5173\u95ED\uFF0C\u8BF7\u7528\u9876\u90E8\u7684\u626C\u58F0\u5668\u6309\u94AE\u5F00\u542F\u3002"],2600));return}let e=$.params,t=i==="outer"?e.outer.freq:i==="cochlea"?e.cochlea.freq:i==="nerve"?e.nerve.freq:1e3,n=i==="nerve"?Math.max(.08,e.nerve.level/100):i==="cochlea"&&e.cochlea.loud?1:.6;ta.play(t,{duration:.8,level01:n})}function vm(){let i=Ze("#rail"),e=zi.map(t=>{let n=Si(t),s=n?Hi.doneCount(t,n.tasks):0,r=n?n.tasks.length:0,a=t==="intro"?["Start","\u5F00\u59CB"]:t==="review"?["Review","\u590D\u4E60"]:n.title,o=t==="intro"?"\u25E6":t==="review"?"\u2713":n.extension?"+":n.n;return`<li><button type="button" class="rail-btn${n?.extension?" is-ext":""}${r&&s===r?" is-done":""}" data-go="${t}" ${$.station===t?'aria-current="step"':""}>
      <span class="rail-n" aria-hidden="true">${o}</span><span class="rail-t">${se(a)}</span>${r?`<span class="rail-p" aria-label="${s} of ${r} done">${s}/${r}</span>`:""}</button></li>`}).join("");i.innerHTML=`<ol>${e}</ol>`}function Bb(){let i=Si($.station);if(!i){$.station==="review"&&Im();return}let e=Ze(".goals");e&&e.querySelectorAll("[data-goal-task]").forEach(t=>{let n=i.tasks[Number(t.dataset.goalTask)],s=n&&Hi.isDone(i.id,n.id),r=t.closest(".goal");r.classList.toggle("is-done",!!s),r.querySelector(".goal-mark").textContent=s?"\u2713":"\u25CB"})}function Im(){let i=Jt.review.el.querySelector("[data-review-progress]");i.innerHTML=xs.map(e=>{let t=Hi.doneCount(e.id,e.tasks),n=e.tasks.length;return`<div class="rp"><span class="rp-t">${se(e.title)}</span><span class="rp-bar"><i style="width:${t/n*100}%"></i></span><span class="rp-n">${t}/${n}</span></div>`}).join("")}function Co(i){$.tab=i,document.querySelectorAll("[role=tab]").forEach(t=>{let n=t.dataset.tab===i;t.setAttribute("aria-selected",String(n)),t.tabIndex=n?0:-1});for(let t of["learn","explore","figures"])Ze(`#tab-${t}`).hidden=t!==i;i==="explore"&&(Ze("#float-info").hidden=!0),Wb();let e=Ln?.task;ve?.setLabelsSuppressed(i!=="explore"&&!!e?.hideLabels&&Ln.st.status!=="done")}function kb(i){let e=Ze("#signal");if(!i){e.innerHTML=$.station==="review"?`<span class="sig-k">${se(["Whole route","\u5168\u7A0B"])}</span>${se(["The pulse replays the path from air to nerve","\u5149\u70B9\u91CD\u653E\u4ECE\u7A7A\u6C14\u5230\u795E\u7ECF\u7684\u8DEF\u7EBF"])}`:`<span class="sig-k">${se(["Whole ear","\u5168\u8033"])}</span>${se(["Outer \u2192 middle \u2192 inner ear \u2192 nerve","\u5916\u8033 \u2192 \u4E2D\u8033 \u2192 \u5185\u8033 \u2192 \u795E\u7ECF"])}`,e.dataset.kind="none";return}e.dataset.kind=i.signal.kind,e.innerHTML=`<span class="sig-k"><i aria-hidden="true"></i>${se(["Signal","\u4FE1\u53F7"])}</span><span class="sig-v">${se(i.signal.label)}</span><span class="sig-scale">${se(i.scale)}${$.mode3d?"":` \xB7 ${se(["2D step view","2D \u5206\u6B65\u56FE"])}`}</span>`}function zb(i){let e=Ze("#orient"),t={ear:["Lateral (outside) \u2190 \u2192 medial (into the head) \xB7 \u2191 up","\u5916\u4FA7\uFF08\u4F53\u5916\uFF09\u2190 \u2192 \u5185\u4FA7\uFF08\u9885\u5185\uFF09\xB7 \u2191 \u4E0A"],cochlea:["Base (oval & round windows) \u2190 \u2192 apex (helicotrema) \xB7 cut-away toward the modiolus","\u5E95\u7AEF\uFF08\u5375\u5706\u7A97\u3001\u5706\u7A97\uFF09\u2190 \u2192 \u9876\u7AEF\uFF08\u8717\u5B54\uFF09\xB7 \u671D\u8717\u8F74\u4E00\u4FA7\u5256\u5F00"],corti:["One slice of one turn \xB7 \u2190 modiolus \xB7 outer wall \u2192 \xB7 \u2191 scala vestibuli","\u4E00\u5708\u4E2D\u7684\u4E00\u4E2A\u5207\u7247 \xB7 \u2190 \u8717\u8F74 \xB7 \u5916\u4FA7\u58C1 \u2192 \xB7 \u2191 \u524D\u5EAD\u9636"],nerve:["Cochlea (left) \u2192 auditory nerve \u2192 brainstem (right) \xB7 fiber color = CF","\u8033\u8717\uFF08\u5DE6\uFF09\u2192 \u542C\u795E\u7ECF \u2192 \u8111\u5E72\uFF08\u53F3\uFF09\xB7 \u7EA4\u7EF4\u989C\u8272 = CF"]},n=i==="pathway"?null:$.mode3d?bd(i):null;e.innerHTML=n?se(t[n]):"",e.hidden=!n}var bm=0;function Os(i,e=0,t=null){let n=Ze("#toast");if(clearTimeout(bm),!i){n.hidden=!0;return}n.innerHTML=`${t?`<span class="toast-b">${t}</span>`:""}${se(i)}`,n.hidden=!1,e&&(bm=setTimeout(()=>{n.hidden=!0},e))}function Hb(){Ze(".lang-switch").addEventListener("click",i=>{let e=i.target.closest("button[data-lang]");e&&Em(e.dataset.lang,!0)}),document.addEventListener("click",i=>{let e=i.target.closest("[data-go]");if(e){i.preventDefault(),ms(e.dataset.go,{taskId:e.dataset.task||null});return}let t=i.target.closest(".struct-btn");if(t){Io(t.dataset.structure,"list"),ve&&$.mode3d&&Vb(t.dataset.structure);return}let n=i.target.closest("[data-pin]");if(n){let o=n.dataset.pin;$.pinned.has(o)?$.pinned.delete(o):$.pinned.add(o),n.setAttribute("aria-pressed",String($.pinned.has(o))),Lm();return}let s=i.target.closest("[data-labelmode]");if(s){hh(s.dataset.labelmode);return}let r=i.target.closest("[data-goal-task]");if(r){Co("learn"),Ln?.goTo(Number(r.dataset.goalTask)),Ze("#task")?.scrollIntoView({behavior:$.reduced?"auto":"smooth",block:"start"});return}if(i.target.closest("[data-goal-adv]")){let o=Ze(".adv-item");o&&(o.open=!0,o.scrollIntoView({behavior:$.reduced?"auto":"smooth"}));return}if(i.target.closest("[data-goal-lesson]")){let o=Ze(".chips .chip");o&&(location.href=o.href);return}let a=i.target.closest("[data-goal-explore]");if(a){Co("explore"),Io(a.dataset.goalExplore,"goal");return}if(i.target.closest(".fi-close")){Ze("#float-info").hidden=!0,fh(null);return}i.target.closest("[data-reset-progress]")&&confirm($.lang==="cn"?"\u6E05\u9664\u672C\u9875\u7684\u7EC3\u4E60\u8FDB\u5EA6\uFF1F":"Clear your progress on this page?")&&(Hi.reset(),ms("review"))}),document.querySelectorAll("[role=tab]").forEach(i=>i.addEventListener("click",()=>{Co(i.dataset.tab),i.dataset.tab==="explore"&&Yo(Bi,Si($.station)||{id:$.station,structures:[]})})),Ze("#tabs").addEventListener("keydown",i=>{let e=[...document.querySelectorAll("[role=tab]")],t=e.indexOf(document.activeElement);if(!(t<0)&&(i.key==="ArrowRight"||i.key==="ArrowLeft")){let n=e[(t+(i.key==="ArrowRight"?1:e.length-1))%e.length];n.focus(),n.click()}}),Ze("#start-btn").addEventListener("click",()=>{$.sound&&ta.play(1e3,{duration:.6,level01:.6}),ms("outer-ear",{journey:!0})}),Ze("#explore-btn").addEventListener("click",()=>{Ze("#intro").hidden=!0,Co("explore"),Yo(Bi,{id:"intro",structures:[]})}),Ze("#pause-btn").addEventListener("click",()=>ki(!$.paused)),Ze("#step-btn").addEventListener("click",_d),Ze("#replay-btn").addEventListener("click",Ob),Ze("#reset-btn").addEventListener("click",xd),Ze("#zin-btn").addEventListener("click",()=>ve?.zoom(.8)),Ze("#zout-btn").addEventListener("click",()=>ve?.zoom(1.25)),Ze("#labels-btn").addEventListener("click",()=>hh($.labelMode==="off"?"all":"off")),Ze("#prev-st").addEventListener("click",ym),Ze("#next-st").addEventListener("click",Ro),Ze("#skip-task").addEventListener("click",()=>{if(!Ln?.task){Ro();return}Ln.skip()||Ro()}),Ze("#sound-btn").addEventListener("click",()=>{$.sound=!$.sound,ta.setEnabled($.sound),Ze("#sound-btn").setAttribute("aria-pressed",String($.sound)),Ze("#volume").hidden=!$.sound,$.sound&&ta.play(1e3,{duration:.25,level01:.4})}),Ze("#volume").addEventListener("input",i=>ta.setVolume(Number(i.target.value))),Ze("#motion-btn").addEventListener("click",()=>Dm(!$.reduced,!0)),Ze("#view-btn").addEventListener("click",()=>qb(!$.mode3d)),window.addEventListener("keydown",i=>{if(i.target.closest("input, textarea, select")||i.metaKey||i.ctrlKey||i.altKey)return;let e=i.target.id==="gl";i.key==="["?ym():i.key==="]"?Ro():i.key==="p"||i.key==="P"||i.key===" "&&e?(ki(!$.paused),i.preventDefault()):i.key==="."?_d():i.key==="r"||i.key==="R"?xd():i.key==="l"||i.key==="L"?hh($.labelMode==="off"?"all":"off"):i.key==="Escape"&&(Ze("#float-info").hidden=!0,fh(null))})}function Vb(i){let e=ve.active?.anchors?.[i];if(!e)return;let t=e.isObject3D?e.getWorldPosition(e.position.clone()):e.clone(),n=ve.camera.position.clone().sub(ve.controls.target).normalize(),s=Math.min(ve.camera.position.distanceTo(ve.controls.target),ve.activeName==="ear"?5:7);ve.setPose({pos:t.clone().addScaledVector(n,s).toArray(),target:t.toArray()},$.reduced?0:.8)}var Gb=["pinna","concha","ear-canal","tympanic-membrane","malleus","stapes","cochlea","semicircular-canals","auditory-nerve","eustachian-tube"];function Wb(){if(!ve)return;let i=Si($.station);$.tab==="explore"?ve.setLabelFilter(null):i&&i.structures?.length?ve.setLabelFilter(i.structures):ve.setLabelFilter(Gb)}function hh(i){$.labelMode=i,ve?.setLabelMode(i==="off"?"none":i),Lm(),document.querySelectorAll("[data-labelmode]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.labelmode===i))),Ze("#labels-btn").setAttribute("aria-pressed",String(i!=="off")),ve&&(ve.extrasOff=i==="off")}function Lm(){ve?.setPinned($.pinned)}function Dm(i,e=!1){if($.reduced=i,document.documentElement.classList.toggle("reduce-motion",i),Ze("#motion-btn").setAttribute("aria-pressed",String(i)),e)try{localStorage.setItem(wm,i?"1":"0")}catch{}for(let t of Object.values(je))t.state.reduced=i}async function qb(i){if(i&&!ve)try{await Cm()}catch{Os(["3D is not available in this browser. Staying in the 2D step view.","\u6B64\u6D4F\u89C8\u5668\u65E0\u6CD5\u4F7F\u7528 3D\uFF0C\u7EE7\u7EED\u4F7F\u7528 2D \u5206\u6B65\u56FE\u3002"],4e3);return}$.mode3d=i,$.forced2d=!i,Ze("#view-btn").setAttribute("aria-pressed",String(!i)),ms($.station,{instant:!0})}var md=performance.now(),yd=0;function $b(){yd=.09}function Nm(i){if(requestAnimationFrame(Nm),document.hidden){md=i;return}let e=Math.min(.05,(i-md)/1e3);md=i;let t=!$.paused;t||(e=yd,yd=0);let n=$.reduced?.4:1,s=$.station,r=$.params;if(s==="cochlea")Jt.cochlea.bm.tick(e*n),$.mode3d||Dn.cochlea.tick(e*n,{freq:r.cochlea.freq,prev:r.cochlea.prev,active:r.cochlea.active,loud:r.cochlea.loud});else if(s==="auditory-nerve")Jt["auditory-nerve"].scope.tick(e*n,!0);else if(s==="hair-cells"){let a;if($.mode3d&&je.corti)a=je.corti.state.cell;else{$.t2=($.t2||0)+e*n;let o=r.hair.mode==="hold"?r.hair.hold:Math.sin(2*Math.PI*.35*$.t2);a=Dn.corti.tick(e*n,{d:o,amplifier:r.hair.amp})}if(a&&(t||e)){Jt["hair-cells"].volt.push(a.v,a.po,a.ohcLength);let o=Jt["hair-cells"].el.querySelector("[data-hc-read]");o&&Math.random()<.2&&(o.innerHTML=se([`Channels ${(a.po*100).toFixed(0)}% open \xB7 ${a.v.toFixed(0)} mV \xB7 transmitter ${a.release>.05?"\u25B2 released":"\u2014 little"} \xB7 OHC ${(a.ohcLength*100).toFixed(0)}% length`,`\u901A\u9053\u5F00\u653E ${(a.po*100).toFixed(0)}% \xB7 ${a.v.toFixed(0)} mV \xB7 \u9012\u8D28 ${a.release>.05?"\u25B2 \u91CA\u653E":"\u2014 \u5F88\u5C11"} \xB7 OHC \u957F\u5EA6 ${(a.ohcLength*100).toFixed(0)}%`]))}}!$.mode3d&&["intro","outer-ear","middle-ear","review","auditory-nerve"].includes(s)&&Dn.ear.tick(e*n)}async function Mm(){Em(Sb());let i=matchMedia("(prefers-reduced-motion: reduce)").matches;try{let t=localStorage.getItem(wm);t!=null&&(i=t==="1")}catch{}Jt=Dd(Bi),Ab(),Hb(),Dm(i),ki(!1);try{await Cm()}catch(t){$.mode3d=!1,Ze("#view-btn").setAttribute("aria-pressed","true"),uh.get("mode")!=="2d"&&Os(["3D could not start here, so this is the 2D step view. Explanations, tasks and lesson links all still work.","\u6B64\u5904\u65E0\u6CD5\u542F\u52A8 3D\uFF0C\u5DF2\u5207\u6362\u4E3A 2D \u5206\u6B65\u56FE\uFF1B\u89E3\u91CA\u3001\u4EFB\u52A1\u4E0E\u8BFE\u8282\u94FE\u63A5\u7167\u5E38\u53EF\u7528\u3002"],6e3),console.info("[ear-3d] 2D fallback:",t?.message)}hh("all");let e=uh.get("stage");await ms(zi.includes(e)?e:"intro",{instant:!0}),document.body.classList.add("is-ready"),window.__ear3d={S:$,scenes:je,get world(){return ve},go:ms,progress:Hi,frames(t=3,n=.05){if(ve)for(let s=0;s<t;s++){if(ve.tween){ve.tween.t=1,ve.camera.position.copy(ve.tween.to.pos),ve.controls.target.copy(ve.tween.to.target);let r=ve.tween.onDone;ve.tween=null,r?.()}ve.active?.update(n,0,n),ve.controls.update(),ve.renderer.render(ve.active.scene,ve.camera),ve._placeLabels()}}},requestAnimationFrame(Nm)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Mm,{once:!0}):Mm();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
