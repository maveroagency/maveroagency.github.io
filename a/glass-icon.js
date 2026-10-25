(()=>{var Iu=0,LA=1,Bu=2;var $c=1,Lu=2,mn=3,qt=0,gt=1,Rt=2,Fn=0,Ei=1,RA=2,UA=3,zA=4,Ru=5,ti=100,Uu=101,zu=102,Nu=103,Fu=104,ku=200,Hu=201,ju=202,Gu=203,Co=204,bo=205,qu=206,Qu=207,Wu=208,Vu=209,Zu=210,Yu=211,Ku=212,Ju=213,Xu=214,Eo=0,So=1,Do=2,Ii=3,_o=4,Oo=5,Io=6,Bo=7,eu=0,$u=1,el=2,kn=0,tl=1,nl=2,il=3,za=4,sl=5,rl=6,ol=7,NA="attached",al="detached",tu=300,Bi=301,Li=302,Lo=303,Ro=304,zr=306,ii=1e3,vn=1001,ls=1002,yt=1003,Na=1004;var Ci=1005;var Dt=1006,As=1007;var rn=1008;var xn=1009,nu=1010,iu=1011,hs=1012,Fa=1013,si=1014,$t=1015,Ms=1016,ka=1017,Ha=1018,Ri=1020,su=35902,ru=1021,ou=1022,jt=1023,au=1024,Au=1025,Si=1026,Ui=1027,ja=1028,Ga=1029,cu=1030,qa=1031;var Qa=1033,rr=33776,or=33777,ar=33778,Ar=33779,Uo=35840,zo=35841,No=35842,Fo=35843,ko=36196,Ho=37492,jo=37496,Go=37808,qo=37809,Qo=37810,Wo=37811,Vo=37812,Zo=37813,Yo=37814,Ko=37815,Jo=37816,Xo=37817,$o=37818,ea=37819,ta=37820,na=37821,cr=36492,ia=36494,sa=36495,uu=36283,ra=36284,oa=36285,aa=36286;var zi=2300,Ni=2301,Qr=2302,FA=2400,kA=2401,HA=2402,Al=2500;var lu=0,Nr=1,Cs=2,cl=3200,ul=3201;var hu=0,ll=1,Un="",ct="srgb",Mt="srgb-linear",Fr="linear",Ke="srgb";var ui=7680;var jA=519,hl=512,dl=513,fl=514,du=515,pl=516,ml=517,gl=518,vl=519,Aa=35044;var GA="300 es",wn=2e3,ur=2001,Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qA=1234567,Di=Math.PI/180,Fi=180/Math.PI;function en(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[s&255]+wt[s>>8&255]+wt[s>>16&255]+wt[s>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function Wa(s,e){return(s%e+e)%e}function wl(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pl(s,e,t){return s!==e?(t-s)/(e-s):0}function cs(s,e,t){return(1-t)*s+t*e}function xl(s,e,t,n){return cs(s,e,1-Math.exp(-t*n))}function yl(s,e=1){return e-Math.abs(Wa(s,e*2)-e)}function Tl(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ml(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Cl(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bl(s,e){return s+Math.random()*(e-s)}function El(s){return s*(.5-Math.random())}function Sl(s){s!==void 0&&(qA=s);let e=qA+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dl(s){return s*Di}function _l(s){return s*Fi}function Ol(s){return(s&s-1)===0&&s!==0}function Il(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ll(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),A=o(t/2),c=r((e+n)/2),u=o((e+n)/2),l=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,A*l,A*h,a*c);break;case"YZY":s.set(A*h,a*u,A*l,a*c);break;case"ZXZ":s.set(A*l,A*h,a*u,a*c);break;case"XZX":s.set(a*u,A*m,A*f,a*c);break;case"YXY":s.set(A*f,a*u,A*m,a*c);break;case"ZYZ":s.set(A*m,A*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var kr={DEG2RAD:Di,RAD2DEG:Fi,generateUUID:en,clamp:xt,euclideanModulo:Wa,mapLinear:wl,inverseLerp:Pl,lerp:cs,damp:xl,pingpong:yl,smoothstep:Tl,smootherstep:Ml,randInt:Cl,randFloat:bl,randFloatSpread:El,seededRandom:Sl,degToRad:Dl,radToDeg:_l,isPowerOfTwo:Ol,ceilPowerOfTwo:Il,floorPowerOfTwo:Bl,setQuaternionFromProperEuler:Ll,normalize:Ye,denormalize:Xt},Ne=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_e=class s{constructor(e,t,n,i,r,o,a,A,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,A,c)}set(e,t,n,i,r,o,a,A,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=A,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],A=n[6],c=n[1],u=n[4],l=n[7],h=n[2],f=n[5],m=n[8],g=i[0],p=i[3],d=i[6],M=i[1],T=i[4],x=i[7],R=i[2],b=i[5],E=i[8];return r[0]=o*g+a*M+A*R,r[3]=o*p+a*T+A*b,r[6]=o*d+a*x+A*E,r[1]=c*g+u*M+l*R,r[4]=c*p+u*T+l*b,r[7]=c*d+u*x+l*E,r[2]=h*g+f*M+m*R,r[5]=h*p+f*T+m*b,r[8]=h*d+f*x+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*A+i*r*c-i*o*A}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],u=e[8],l=u*o-a*c,h=a*A-u*r,f=c*r-o*A,m=t*l+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=l*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*A)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*A-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let A=Math.cos(r),c=Math.sin(r);return this.set(n*A,n*c,-n*(A*o+c*a)+o+e,-i*c,i*A,-i*(-c*o+A*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wr.makeScale(e,t)),this}rotate(e){return this.premultiply(Wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wr=new _e;function fu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rl(){let s=ds("canvas");return s.style.display="block",s}var QA={};function os(s){s in QA||(QA[s]=!0,console.warn(s))}function Ul(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function zl(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Nl(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ze={enabled:!0,workingColorSpace:Mt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ke&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ke&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Fr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var WA=[.64,.33,.3,.6,.15,.06],VA=[.2126,.7152,.0722],ZA=[.3127,.329],YA=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),KA=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ze.define({[Mt]:{primaries:WA,whitePoint:ZA,transfer:Fr,toXYZ:YA,fromXYZ:KA,luminanceCoefficients:VA,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:WA,whitePoint:ZA,transfer:Ke,toXYZ:YA,fromXYZ:KA,luminanceCoefficients:VA,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}});var li,ca=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{li===void 0&&(li=ds("canvas")),li.width=e.width,li.height=e.height;let n=li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ds("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fl=0,lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=en(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vr(i[o].image)):r.push(Vr(i[o]))}else r=Vr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ca.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kl=0,mt=class s extends Hn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=vn,i=vn,r=Dt,o=rn,a=jt,A=xn,c=s.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=en(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=A,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=tu;mt.DEFAULT_ANISOTROPY=1;var Qe=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,A=e.elements,c=A[0],u=A[4],l=A[8],h=A[1],f=A[5],m=A[9],g=A[2],p=A[6],d=A[10];if(Math.abs(u-h)<.01&&Math.abs(l-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(l+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,x=(f+1)/2,R=(d+1)/2,b=(u+h)/4,E=(l+g)/4,L=(m+p)/4;return T>x&&T>R?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=b/n,r=E/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=L/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=L/r),this.set(n,i,r,t),this}let M=Math.sqrt((p-m)*(p-m)+(l-g)*(l-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(l-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ua=class extends Hn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new lr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends ua{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},hr=class extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var la=class extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=yt,this.minFilter=yt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let A=n[i+0],c=n[i+1],u=n[i+2],l=n[i+3],h=r[o+0],f=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=A,e[t+1]=c,e[t+2]=u,e[t+3]=l;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(l!==g||A!==h||c!==f||u!==m){let p=1-a,d=A*h+c*f+u*m+l*g,M=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){let R=Math.sqrt(T),b=Math.atan2(R,d*M);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}let x=a*M;if(A=A*p+h*x,c=c*p+f*x,u=u*p+m*x,l=l*p+g*x,p===1-a){let R=1/Math.sqrt(A*A+c*c+u*u+l*l);A*=R,c*=R,u*=R,l*=R}}e[t]=A,e[t+1]=c,e[t+2]=u,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],A=n[i+1],c=n[i+2],u=n[i+3],l=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*l+A*f-c*h,e[t+1]=A*m+u*h+c*l-a*f,e[t+2]=c*m+u*f+a*h-A*l,e[t+3]=u*m-a*l-A*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,A=Math.sin,c=a(n/2),u=a(i/2),l=a(r/2),h=A(n/2),f=A(i/2),m=A(r/2);switch(o){case"XYZ":this._x=h*u*l+c*f*m,this._y=c*f*l-h*u*m,this._z=c*u*m+h*f*l,this._w=c*u*l-h*f*m;break;case"YXZ":this._x=h*u*l+c*f*m,this._y=c*f*l-h*u*m,this._z=c*u*m-h*f*l,this._w=c*u*l+h*f*m;break;case"ZXY":this._x=h*u*l-c*f*m,this._y=c*f*l+h*u*m,this._z=c*u*m+h*f*l,this._w=c*u*l-h*f*m;break;case"ZYX":this._x=h*u*l-c*f*m,this._y=c*f*l+h*u*m,this._z=c*u*m-h*f*l,this._w=c*u*l+h*f*m;break;case"YZX":this._x=h*u*l+c*f*m,this._y=c*f*l+h*u*m,this._z=c*u*m-h*f*l,this._w=c*u*l-h*f*m;break;case"XZY":this._x=h*u*l-c*f*m,this._y=c*f*l-h*u*m,this._z=c*u*m+h*f*l,this._w=c*u*l+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],A=t[9],c=t[2],u=t[6],l=t[10],h=n+a+l;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-A)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>l){let f=2*Math.sqrt(1+n-a-l);this._w=(u-A)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>l){let f=2*Math.sqrt(1+a-n-l);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(A+u)/f}else{let f=2*Math.sqrt(1+l-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(A+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,A=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*A,this._y=i*u+o*A+r*a-n*c,this._z=r*u+o*c+n*A-i*a,this._w=o*u-n*a-i*A-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let A=1-a*a;if(A<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(A),u=Math.atan2(c,a),l=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*l+this._w*h,this._x=n*l+this._x*h,this._y=i*l+this._y*h,this._z=r*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(JA.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(JA.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,A=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),l=2*(r*n-o*t);return this.x=t+A*c+o*l-a*u,this.y=n+A*u+a*c-r*l,this.z=i+A*l+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,A=t.z;return this.x=i*A-r*a,this.y=r*o-n*A,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zr=new _,JA=new tn,_t=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(r,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),_s.subVectors(this.max,Xi),hi.subVectors(e.a,Xi),di.subVectors(e.b,Xi),fi.subVectors(e.c,Xi),_n.subVectors(di,hi),On.subVectors(fi,di),Zn.subVectors(hi,fi);let t=[0,-_n.z,_n.y,0,-On.z,On.y,0,-Zn.z,Zn.y,_n.z,0,-_n.x,On.z,0,-On.x,Zn.z,0,-Zn.x,-_n.y,_n.x,0,-On.y,On.x,0,-Zn.y,Zn.x,0];return!Yr(t,hi,di,fi,_s)||(t=[1,0,0,0,1,0,0,0,1],!Yr(t,hi,di,fi,_s))?!1:(Os.crossVectors(_n,On),t=[Os.x,Os.y,Os.z],Yr(t,hi,di,fi,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},un=[new _,new _,new _,new _,new _,new _,new _,new _],Yt=new _,Ds=new _t,hi=new _,di=new _,fi=new _,_n=new _,On=new _,Zn=new _,Xi=new _,_s=new _,Os=new _,Yn=new _;function Yr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Yn.fromArray(s,r);let a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),A=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(A,c,u),Math.min(A,c,u))>a)return!1}return!0}var Hl=new _t,$i=new _,Kr=new _,Ut=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Kr)),this.expandByPoint($i.copy(e.center).sub(Kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ln=new _,Jr=new _,Is=new _,In=new _,Xr=new _,Bs=new _,$r=new _,ki=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jr.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Jr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Is),a=In.dot(this.direction),A=-In.dot(Is),c=In.lengthSq(),u=Math.abs(1-o*o),l,h,f,m;if(u>0)if(l=o*A-a,h=o*a-A,m=r*u,l>=0)if(h>=-m)if(h<=m){let g=1/u;l*=g,h*=g,f=l*(l+o*h+2*a)+h*(o*l+h+2*A)+c}else h=r,l=Math.max(0,-(o*h+a)),f=-l*l+h*(h+2*A)+c;else h=-r,l=Math.max(0,-(o*h+a)),f=-l*l+h*(h+2*A)+c;else h<=-m?(l=Math.max(0,-(-o*r+a)),h=l>0?-r:Math.min(Math.max(-r,-A),r),f=-l*l+h*(h+2*A)+c):h<=m?(l=0,h=Math.min(Math.max(-r,-A),r),f=h*(h+2*A)+c):(l=Math.max(0,-(o*r+a)),h=l>0?r:Math.min(Math.max(-r,-A),r),f=-l*l+h*(h+2*A)+c);else h=o>0?-r:r,l=Math.max(0,-(o*h+a)),f=-l*l+h*(h+2*A)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(Jr).addScaledVector(Is,h),f}intersectSphere(e,t){ln.subVectors(e.center,this.origin);let n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,A=n+o;return A<0?null:a<0?this.at(A,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,A,c=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),l>=0?(a=(e.min.z-h.z)*l,A=(e.max.z-h.z)*l):(a=(e.max.z-h.z)*l,A=(e.min.z-h.z)*l),n>A||a>i)||((a>n||n!==n)&&(n=a),(A<i||i!==i)&&(i=A),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,i,r){Xr.subVectors(t,e),Bs.subVectors(n,e),$r.crossVectors(Xr,Bs);let o=this.direction.dot($r),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);let A=a*this.direction.dot(Bs.crossVectors(In,Bs));if(A<0)return null;let c=a*this.direction.dot(Xr.cross(In));if(c<0||A+c>o)return null;let u=-a*In.dot($r);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class s{constructor(e,t,n,i,r,o,a,A,c,u,l,h,f,m,g,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,A,c,u,l,h,f,m,g,p)}set(e,t,n,i,r,o,a,A,c,u,l,h,f,m,g,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=A,d[2]=c,d[6]=u,d[10]=l,d[14]=h,d[3]=f,d[7]=m,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/pi.setFromMatrixColumn(e,0).length(),r=1/pi.setFromMatrixColumn(e,1).length(),o=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),A=Math.cos(i),c=Math.sin(i),u=Math.cos(r),l=Math.sin(r);if(e.order==="XYZ"){let h=o*u,f=o*l,m=a*u,g=a*l;t[0]=A*u,t[4]=-A*l,t[8]=c,t[1]=f+m*c,t[5]=h-g*c,t[9]=-a*A,t[2]=g-h*c,t[6]=m+f*c,t[10]=o*A}else if(e.order==="YXZ"){let h=A*u,f=A*l,m=c*u,g=c*l;t[0]=h+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*l,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=g+h*a,t[10]=o*A}else if(e.order==="ZXY"){let h=A*u,f=A*l,m=c*u,g=c*l;t[0]=h-g*a,t[4]=-o*l,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*A}else if(e.order==="ZYX"){let h=o*u,f=o*l,m=a*u,g=a*l;t[0]=A*u,t[4]=m*c-f,t[8]=h*c+g,t[1]=A*l,t[5]=g*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*A,t[10]=o*A}else if(e.order==="YZX"){let h=o*A,f=o*c,m=a*A,g=a*c;t[0]=A*u,t[4]=g-h*l,t[8]=m*l+f,t[1]=l,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*l+m,t[10]=h-g*l}else if(e.order==="XZY"){let h=o*A,f=o*c,m=a*A,g=a*c;t[0]=A*u,t[4]=-l,t[8]=c*u,t[1]=h*l+g,t[5]=o*u,t[9]=f*l-m,t[2]=m*l-f,t[6]=a*u,t[10]=g*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jl,e,Gl)}lookAt(e,t,n){let i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Bn.crossVectors(n,Bt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Bn.crossVectors(n,Bt)),Bn.normalize(),Ls.crossVectors(Bt,Bn),i[0]=Bn.x,i[4]=Ls.x,i[8]=Bt.x,i[1]=Bn.y,i[5]=Ls.y,i[9]=Bt.y,i[2]=Bn.z,i[6]=Ls.z,i[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],A=n[8],c=n[12],u=n[1],l=n[5],h=n[9],f=n[13],m=n[2],g=n[6],p=n[10],d=n[14],M=n[3],T=n[7],x=n[11],R=n[15],b=i[0],E=i[4],L=i[8],y=i[12],P=i[1],S=i[5],j=i[9],F=i[13],q=i[2],K=i[6],G=i[10],J=i[14],k=i[3],$=i[7],ce=i[11],de=i[15];return r[0]=o*b+a*P+A*q+c*k,r[4]=o*E+a*S+A*K+c*$,r[8]=o*L+a*j+A*G+c*ce,r[12]=o*y+a*F+A*J+c*de,r[1]=u*b+l*P+h*q+f*k,r[5]=u*E+l*S+h*K+f*$,r[9]=u*L+l*j+h*G+f*ce,r[13]=u*y+l*F+h*J+f*de,r[2]=m*b+g*P+p*q+d*k,r[6]=m*E+g*S+p*K+d*$,r[10]=m*L+g*j+p*G+d*ce,r[14]=m*y+g*F+p*J+d*de,r[3]=M*b+T*P+x*q+R*k,r[7]=M*E+T*S+x*K+R*$,r[11]=M*L+T*j+x*G+R*ce,r[15]=M*y+T*F+x*J+R*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],A=e[9],c=e[13],u=e[2],l=e[6],h=e[10],f=e[14],m=e[3],g=e[7],p=e[11],d=e[15];return m*(+r*A*l-i*c*l-r*a*h+n*c*h+i*a*f-n*A*f)+g*(+t*A*f-t*c*h+r*o*h-i*o*f+i*c*u-r*A*u)+p*(+t*c*l-t*a*f-r*o*l+n*o*f+r*a*u-n*c*u)+d*(-i*a*u-t*A*l+t*a*h+i*o*l-n*o*h+n*A*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],A=e[6],c=e[7],u=e[8],l=e[9],h=e[10],f=e[11],m=e[12],g=e[13],p=e[14],d=e[15],M=l*p*c-g*h*c+g*A*f-a*p*f-l*A*d+a*h*d,T=m*h*c-u*p*c-m*A*f+o*p*f+u*A*d-o*h*d,x=u*g*c-m*l*c+m*a*f-o*g*f-u*a*d+o*l*d,R=m*l*A-u*g*A-m*a*h+o*g*h+u*a*p-o*l*p,b=t*M+n*T+i*x+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=M*E,e[1]=(g*h*r-l*p*r-g*i*f+n*p*f+l*i*d-n*h*d)*E,e[2]=(a*p*r-g*A*r+g*i*c-n*p*c-a*i*d+n*A*d)*E,e[3]=(l*A*r-a*h*r-l*i*c+n*h*c+a*i*f-n*A*f)*E,e[4]=T*E,e[5]=(u*p*r-m*h*r+m*i*f-t*p*f-u*i*d+t*h*d)*E,e[6]=(m*A*r-o*p*r-m*i*c+t*p*c+o*i*d-t*A*d)*E,e[7]=(o*h*r-u*A*r+u*i*c-t*h*c-o*i*f+t*A*f)*E,e[8]=x*E,e[9]=(m*l*r-u*g*r-m*n*f+t*g*f+u*n*d-t*l*d)*E,e[10]=(o*g*r-m*a*r+m*n*c-t*g*c-o*n*d+t*a*d)*E,e[11]=(u*a*r-o*l*r-u*n*c+t*l*c+o*n*f-t*a*f)*E,e[12]=R*E,e[13]=(u*g*i-m*l*i+m*n*h-t*g*h-u*n*p+t*l*p)*E,e[14]=(m*a*i-o*g*i-m*n*A+t*g*A+o*n*p-t*a*p)*E,e[15]=(o*l*i-u*a*i+u*n*A-t*l*A-o*n*h+t*a*h)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,A=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*A,c*A+i*a,0,c*a+i*A,u*a+n,u*A-i*o,0,c*A-i*a,u*A+i*o,r*A*A+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,A=t._w,c=r+r,u=o+o,l=a+a,h=r*c,f=r*u,m=r*l,g=o*u,p=o*l,d=a*l,M=A*c,T=A*u,x=A*l,R=n.x,b=n.y,E=n.z;return i[0]=(1-(g+d))*R,i[1]=(f+x)*R,i[2]=(m-T)*R,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(h+d))*b,i[6]=(p+M)*b,i[7]=0,i[8]=(m+T)*E,i[9]=(p-M)*E,i[10]=(1-(h+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=pi.set(i[0],i[1],i[2]).length(),o=pi.set(i[4],i[5],i[6]).length(),a=pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);let c=1/r,u=1/o,l=1/a;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=l,Kt.elements[9]*=l,Kt.elements[10]*=l,t.setFromRotationMatrix(Kt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=wn){let A=this.elements,c=2*r/(t-e),u=2*r/(n-i),l=(t+e)/(t-e),h=(n+i)/(n-i),f,m;if(a===wn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ur)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return A[0]=c,A[4]=0,A[8]=l,A[12]=0,A[1]=0,A[5]=u,A[9]=h,A[13]=0,A[2]=0,A[6]=0,A[10]=f,A[14]=m,A[3]=0,A[7]=0,A[11]=-1,A[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wn){let A=this.elements,c=1/(t-e),u=1/(n-i),l=1/(o-r),h=(t+e)*c,f=(n+i)*u,m,g;if(a===wn)m=(o+r)*l,g=-2*l;else if(a===ur)m=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return A[0]=2*c,A[4]=0,A[8]=0,A[12]=-h,A[1]=0,A[5]=2*u,A[9]=0,A[13]=-f,A[2]=0,A[6]=0,A[10]=g,A[14]=-m,A[3]=0,A[7]=0,A[11]=0,A[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},pi=new _,Kt=new Oe,jl=new _(0,0,0),Gl=new _(1,1,1),Bn=new _,Ls=new _,Bt=new _,XA=new Oe,$A=new tn,on=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],A=i[1],c=i[5],u=i[9],l=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(A,c)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(A,r));break;case"ZYX":this._y=Math.asin(-xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(A,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return XA.makeRotationFromQuaternion(e),this.setFromRotationMatrix(XA,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $A.setFromEuler(this),this.setFromQuaternion($A,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ql=0,ec=new _,mi=new tn,hn=new Oe,Rs=new _,es=new _,Ql=new _,Wl=new tn,tc=new _(1,0,0),nc=new _(0,1,0),ic=new _(0,0,1),sc={type:"added"},Vl={type:"removed"},gi={type:"childadded",child:null},eo={type:"childremoved",child:null},ot=class s extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new _,t=new on,n=new tn,i=new _(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new _e}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(tc,e)}rotateY(e){return this.rotateOnAxis(nc,e)}rotateZ(e){return this.rotateOnAxis(ic,e)}translateOnAxis(e,t){return ec.copy(e).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tc,e)}translateY(e){return this.translateOnAxis(nc,e)}translateZ(e){return this.translateOnAxis(ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rs.copy(e):Rs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(es,Rs,this.up):hn.lookAt(Rs,es,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),mi.setFromRotationMatrix(hn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),gi.child=e,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vl),eo.child=e,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),gi.child=e,this.dispatchEvent(gi),gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Ql),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Wl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,A){return a[A.uuid]===void 0&&(a[A.uuid]=A.toJSON(e)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let A=a.shapes;if(Array.isArray(A))for(let c=0,u=A.length;c<u;c++){let l=A[c];r(e.shapes,l)}else r(e.shapes,A)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let A=0,c=this.material.length;A<c;A++)a.push(r(e.materials,this.material[A]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let A=this.animations[a];i.animations.push(r(e.animations,A))}}if(t){let a=o(e.geometries),A=o(e.materials),c=o(e.textures),u=o(e.images),l=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),A.length>0&&(n.materials=A),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let A=[];for(let c in a){let u=a[c];delete u.metadata,A.push(u)}return A}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ot.DEFAULT_UP=new _(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jt=new _,dn=new _,to=new _,fn=new _,vi=new _,wi=new _,rc=new _,no=new _,io=new _,so=new _,ro=new Qe,oo=new Qe,ao=new Qe,zn=class s{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jt.subVectors(e,t),i.cross(Jt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jt.subVectors(i,t),dn.subVectors(n,t),to.subVectors(e,t);let o=Jt.dot(Jt),a=Jt.dot(dn),A=Jt.dot(to),c=dn.dot(dn),u=dn.dot(to),l=o*c-a*a;if(l===0)return r.set(0,0,0),null;let h=1/l,f=(c*A-a*u)*h,m=(o*u-a*A)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,i,r,o,a,A){return this.getBarycoord(e,t,n,i,fn)===null?(A.x=0,A.y=0,"z"in A&&(A.z=0),"w"in A&&(A.w=0),null):(A.setScalar(0),A.addScaledVector(r,fn.x),A.addScaledVector(o,fn.y),A.addScaledVector(a,fn.z),A)}static getInterpolatedAttribute(e,t,n,i,r,o){return ro.setScalar(0),oo.setScalar(0),ao.setScalar(0),ro.fromBufferAttribute(e,t),oo.fromBufferAttribute(e,n),ao.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ro,r.x),o.addScaledVector(oo,r.y),o.addScaledVector(ao,r.z),o}static isFrontFacing(e,t,n,i){return Jt.subVectors(n,t),dn.subVectors(e,t),Jt.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Jt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;vi.subVectors(i,n),wi.subVectors(r,n),no.subVectors(e,n);let A=vi.dot(no),c=wi.dot(no);if(A<=0&&c<=0)return t.copy(n);io.subVectors(e,i);let u=vi.dot(io),l=wi.dot(io);if(u>=0&&l<=u)return t.copy(i);let h=A*l-u*c;if(h<=0&&A>=0&&u<=0)return o=A/(A-u),t.copy(n).addScaledVector(vi,o);so.subVectors(e,r);let f=vi.dot(so),m=wi.dot(so);if(m>=0&&f<=m)return t.copy(r);let g=f*c-A*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(wi,a);let p=u*m-f*l;if(p<=0&&l-u>=0&&f-m>=0)return rc.subVectors(r,i),a=(l-u)/(l-u+(f-m)),t.copy(i).addScaledVector(rc,a);let d=1/(p+g+h);return o=g*d,a=h*d,t.copy(n).addScaledVector(vi,o).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Us={h:0,s:0,l:0};function Ao(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ze.workingColorSpace){if(e=Wa(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ao(o,r,e+1/3),this.g=Ao(o,r,e),this.b=Ao(o,r,e-1/3)}return ze.toWorkingColorSpace(this,i),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let n=pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return ze.fromWorkingColorSpace(Pt.copy(this),e),Math.round(xt(Pt.r*255,0,255))*65536+Math.round(xt(Pt.g*255,0,255))*256+Math.round(xt(Pt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Pt.copy(this),t);let n=Pt.r,i=Pt.g,r=Pt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),A,c,u=(a+o)/2;if(a===o)A=0,c=0;else{let l=o-a;switch(c=u<=.5?l/(o+a):l/(2-o-a),o){case n:A=(i-r)/l+(i<r?6:0);break;case i:A=(r-n)/l+2;break;case r:A=(n-i)/l+4;break}A/=6}return e.h=A,e.s=c,e.l=u,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=ct){ze.fromWorkingColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,i=Pt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Us);let n=cs(Ln.h,Us.h,t),i=cs(Ln.s,Us.s,t),r=cs(Ln.l,Us.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Te;Te.NAMES=pu;var Zl=0,zt=class extends Hn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=en(),this.name="",this.blending=Ei,this.side=qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=bo,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==qt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jA&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let A=r[a];delete A.metadata,o.push(A)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Nt=class extends zt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new _,zs=new Ne,ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Aa&&(e.usage=this.usage),e}};var fr=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pr=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yl=0,Ht=new Oe,co=new ot,Pi=new _,Lt=new _t,ts=new _t,pt=new _,Ot=class s extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fu(e)?pr:fr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new _e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return co.lookAt(e),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Lt.min,ts.min),Lt.expandByPoint(pt),pt.addVectors(Lt.max,ts.max),Lt.expandByPoint(pt)):(Lt.expandByPoint(ts.min),Lt.expandByPoint(ts.max))}Lt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],A=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)pt.fromBufferAttribute(a,c),A&&(Pi.fromBufferAttribute(e,c),pt.add(Pi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],A=[];for(let L=0;L<n.count;L++)a[L]=new _,A[L]=new _;let c=new _,u=new _,l=new _,h=new Ne,f=new Ne,m=new Ne,g=new _,p=new _;function d(L,y,P){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,y),l.fromBufferAttribute(n,P),h.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,P),u.sub(c),l.sub(c),f.sub(h),m.sub(h);let S=1/(f.x*m.y-m.x*f.y);isFinite(S)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(l,-f.y).multiplyScalar(S),p.copy(l).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(S),a[L].add(g),a[y].add(g),a[P].add(g),A[L].add(p),A[y].add(p),A[P].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,y=M.length;L<y;++L){let P=M[L],S=P.start,j=P.count;for(let F=S,q=S+j;F<q;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let T=new _,x=new _,R=new _,b=new _;function E(L){R.fromBufferAttribute(i,L),b.copy(R);let y=a[L];T.copy(y),T.sub(R.multiplyScalar(R.dot(y))).normalize(),x.crossVectors(b,y);let S=x.dot(A[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,S)}for(let L=0,y=M.length;L<y;++L){let P=M[L],S=P.start,j=P.count;for(let F=S,q=S+j;F<q;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new _,r=new _,o=new _,a=new _,A=new _,c=new _,u=new _,l=new _;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),l.subVectors(i,r),u.cross(l),a.fromBufferAttribute(n,m),A.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),A.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,A.x,A.y,A.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),l.subVectors(i,r),u.cross(l),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,A){let c=a.array,u=a.itemSize,l=a.normalized,h=new c.constructor(A.length*u),f=0,m=0;for(let g=0,p=A.length;g<p;g++){a.isInterleavedBufferAttribute?f=A[g]*a.data.stride+a.offset:f=A[g]*u;for(let d=0;d<u;d++)h[m++]=c[f++]}return new ht(h,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let A=i[a],c=e(A,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let A=[],c=r[a];for(let u=0,l=c.length;u<l;u++){let h=c[u],f=e(h,n);A.push(f)}t.morphAttributes[a]=A}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,A=o.length;a<A;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let A=this.parameters;for(let c in A)A[c]!==void 0&&(e[c]=A[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let A in n){let c=n[A];e.data.attributes[A]=c.toJSON(e.data)}let i={},r=!1;for(let A in this.morphAttributes){let c=this.morphAttributes[A],u=[];for(let l=0,h=c.length;l<h;l++){let f=c[l];u.push(f.toJSON(e.data))}u.length>0&&(i[A]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],l=r[c];for(let h=0,f=l.length;h<f;h++)u.push(l[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let l=o[c];this.addGroup(l.start,l.count,l.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let A=e.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oc=new Oe,Kn=new ki,Ns=new Ut,ac=new _,Fs=new _,ks=new _,Hs=new _,uo=new _,js=new _,Ac=new _,Gs=new _,lt=class extends ot{constructor(e=new Ot,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let A=0,c=r.length;A<c;A++){let u=a[A],l=r[A];u!==0&&(uo.fromBufferAttribute(l,e),o?js.addScaledVector(uo,u):js.addScaledVector(uo.sub(t),u))}t.add(js)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(Ns.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ns,ac)===null||Kn.origin.distanceToSquared(ac)>(e.far-e.near)**2))&&(oc.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,A=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,l=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){let p=h[m],d=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,R=T;x<R;x+=3){let b=a.getX(x),E=a.getX(x+1),L=a.getX(x+2);i=qs(this,d,e,n,c,u,l,b,E,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=m,d=g;p<d;p+=3){let M=a.getX(p),T=a.getX(p+1),x=a.getX(p+2);i=qs(this,o,e,n,c,u,l,M,T,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(A!==void 0)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){let p=h[m],d=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(A.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,R=T;x<R;x+=3){let b=x,E=x+1,L=x+2;i=qs(this,d,e,n,c,u,l,b,E,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),g=Math.min(A.count,f.start+f.count);for(let p=m,d=g;p<d;p+=3){let M=p,T=p+1,x=p+2;i=qs(this,o,e,n,c,u,l,M,T,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Kl(s,e,t,n,i,r,o,a){let A;if(e.side===gt?A=n.intersectTriangle(o,r,i,!0,a):A=n.intersectTriangle(i,r,o,e.side===qt,a),A===null)return null;Gs.copy(a),Gs.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:s}}function qs(s,e,t,n,i,r,o,a,A,c){s.getVertexPosition(a,Fs),s.getVertexPosition(A,ks),s.getVertexPosition(c,Hs);let u=Kl(s,e,t,n,Fs,ks,Hs,Ac);if(u){let l=new _;zn.getBarycoord(Ac,Fs,ks,Hs,l),i&&(u.uv=zn.getInterpolatedAttribute(i,a,A,c,l,new Ne)),r&&(u.uv1=zn.getInterpolatedAttribute(r,a,A,c,l,new Ne)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,A,c,l,new _),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:A,c,normal:new _,materialIndex:0};zn.getNormal(Fs,ks,Hs,h.normal),u.face=h,u.barycoord=l}return u}var fs=class s extends Ot{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let A=[],c=[],u=[],l=[],h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(A),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(l,2));function m(g,p,d,M,T,x,R,b,E,L,y){let P=x/E,S=R/L,j=x/2,F=R/2,q=b/2,K=E+1,G=L+1,J=0,k=0,$=new _;for(let ce=0;ce<G;ce++){let de=ce*S-F;for(let Le=0;Le<K;Le++){let Je=Le*P-j;$[g]=Je*M,$[p]=de*T,$[d]=q,c.push($.x,$.y,$.z),$[g]=0,$[p]=0,$[d]=b>0?1:-1,u.push($.x,$.y,$.z),l.push(Le/E),l.push(1-ce/L),J+=1}}for(let ce=0;ce<L;ce++)for(let de=0;de<E;de++){let Le=h+de+K*ce,Je=h+de+K*(ce+1),W=h+(de+1)+K*(ce+1),te=h+(de+1)+K*ce;A.push(Le,Je,te),A.push(Je,W,te),k+=6}a.addGroup(f,k,y),f+=k,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(s){let e={};for(let t=0;t<s.length;t++){let n=Hi(s[t]);for(let i in n)e[i]=n[i]}return e}function Jl(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var Xl={clone:Hi,merge:bt},$l=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends zt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$l,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},mr=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rn=new _,cc=new Ne,uc=new Ne,ut=class extends mr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,cc,uc),t.subVectors(uc,cc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Di*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let A=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/A,t-=o.offsetY*n/c,i*=o.width/A,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xi=-90,yi=1,ha=class extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ut(xi,yi,e,t);i.layers=this.layers,this.add(i);let r=new ut(xi,yi,e,t);r.layers=this.layers,this.add(r);let o=new ut(xi,yi,e,t);o.layers=this.layers,this.add(o);let a=new ut(xi,yi,e,t);a.layers=this.layers,this.add(a);let A=new ut(xi,yi,e,t);A.layers=this.layers,this.add(A);let c=new ut(xi,yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,A]=t;for(let c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),A.up.set(0,1,0),A.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),A.up.set(0,-1,0),A.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,A,c,u]=this.children,l=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,A),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(l,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},gr=class extends mt{constructor(e,t,n,i,r,o,a,A,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,r,o,a,A,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},da=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fs(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:Fn});r.uniforms.tEquirect.value=t;let o=new lt(i,r),a=t.minFilter;return t.minFilter===rn&&(t.minFilter=Dt),new ha(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},lo=new _,th=new _,nh=new _e,gn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=lo.subVectors(n,t).cross(th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nh.getNormalMatrix(e),i=this.coplanarPoint(lo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jn=new Ut,Qs=new _,ps=class{constructor(e=new gn,t=new gn,n=new gn,i=new gn,r=new gn,o=new gn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],A=i[3],c=i[4],u=i[5],l=i[6],h=i[7],f=i[8],m=i[9],g=i[10],p=i[11],d=i[12],M=i[13],T=i[14],x=i[15];if(n[0].setComponents(A-r,h-c,p-f,x-d).normalize(),n[1].setComponents(A+r,h+c,p+f,x+d).normalize(),n[2].setComponents(A+o,h+u,p+m,x+M).normalize(),n[3].setComponents(A-o,h-u,p-m,x-M).normalize(),n[4].setComponents(A-a,h-l,p-g,x-T).normalize(),t===wn)n[5].setComponents(A+a,h+l,p+g,x+T).normalize();else if(t===ur)n[5].setComponents(a,l,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Qs.x=i.normal.x>0?e.max.x:e.min.x,Qs.y=i.normal.y>0?e.max.y:e.min.y,Qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ih(s){let e=new WeakMap;function t(a,A){let c=a.array,u=a.usage,l=c.byteLength,h=s.createBuffer();s.bindBuffer(A,h),s.bufferData(A,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,A,c){let u=A.array,l=A.updateRanges;if(s.bindBuffer(c,a),l.length===0)s.bufferSubData(c,0,u);else{l.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<l.length;f++){let m=l[h],g=l[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++h,l[h]=g)}l.length=h+1;for(let f=0,m=l.length;f<m;f++){let g=l[f];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}A.clearUpdateRanges()}A.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let A=e.get(a);A&&(s.deleteBuffer(A.buffer),e.delete(a))}function o(a,A){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,A));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,A),c.version=a.version}}return{get:i,remove:r,update:o}}var ji=class s extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),A=Math.floor(i),c=a+1,u=A+1,l=e/a,h=t/A,f=[],m=[],g=[],p=[];for(let d=0;d<u;d++){let M=d*h-o;for(let T=0;T<c;T++){let x=T*l-r;m.push(x,-M,0),g.push(0,0,1),p.push(T/a),p.push(1-d/A)}}for(let d=0;d<A;d++)for(let M=0;M<a;M++){let T=M+c*d,x=M+c*(d+1),R=M+1+c*(d+1),b=M+1+c*d;f.push(T,x,b),f.push(x,R,b)}this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rh=`#ifdef USE_ALPHAHASH
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
#endif`,oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uh=`#ifdef USE_AOMAP
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
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
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
#endif`,dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ph=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gh=`#ifdef USE_IRIDESCENCE
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
#endif`,vh=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eh=`#define PI 3.141592653589793
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
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dh=`vec3 transformedNormal = objectNormal;
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
#endif`,_h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qh=`#ifdef USE_GRADIENTMAP
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
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
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
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,td=`PhysicalMaterial material;
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
#endif`,nd=`struct PhysicalMaterial {
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
}`,id=`
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
#endif`,sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dd=`#if defined( USE_POINTS_UV )
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
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,Ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jd=`float getShadowMask() {
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
}`,Gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
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
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rf=`uniform sampler2D t2D;
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
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`#include <common>
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
}`,lf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hf=`#define DISTANCE
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
}`,df=`#define DISTANCE
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
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
}`,gf=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,wf=`uniform vec3 diffuse;
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
}`,Pf=`#define LAMBERT
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
}`,xf=`#define LAMBERT
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
}`,yf=`#define MATCAP
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
}`,Tf=`#define MATCAP
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
}`,Mf=`#define NORMAL
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
}`,Cf=`#define NORMAL
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
}`,bf=`#define PHONG
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
}`,Ef=`#define PHONG
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
}`,Sf=`#define STANDARD
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
}`,Df=`#define STANDARD
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
}`,_f=`#define TOON
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
}`,Of=`#define TOON
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
}`,If=`uniform float size;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,Rf=`uniform vec3 color;
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
}`,Uf=`uniform float rotation;
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
}`,zf=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:sh,alphahash_pars_fragment:rh,alphamap_fragment:oh,alphamap_pars_fragment:ah,alphatest_fragment:Ah,alphatest_pars_fragment:ch,aomap_fragment:uh,aomap_pars_fragment:lh,batching_pars_vertex:hh,batching_vertex:dh,begin_vertex:fh,beginnormal_vertex:ph,bsdfs:mh,iridescence_fragment:gh,bumpmap_pars_fragment:vh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Ph,clipping_planes_pars_vertex:xh,clipping_planes_vertex:yh,color_fragment:Th,color_pars_fragment:Mh,color_pars_vertex:Ch,color_vertex:bh,common:Eh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:Dh,displacementmap_pars_vertex:_h,displacementmap_vertex:Oh,emissivemap_fragment:Ih,emissivemap_pars_fragment:Bh,colorspace_fragment:Lh,colorspace_pars_fragment:Rh,envmap_fragment:Uh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Nh,envmap_pars_vertex:Fh,envmap_physical_pars_fragment:Kh,envmap_vertex:kh,fog_vertex:Hh,fog_pars_vertex:jh,fog_fragment:Gh,fog_pars_fragment:qh,gradientmap_pars_fragment:Qh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Zh,lights_pars_begin:Yh,lights_toon_fragment:Jh,lights_toon_pars_fragment:Xh,lights_phong_fragment:$h,lights_phong_pars_fragment:ed,lights_physical_fragment:td,lights_physical_pars_fragment:nd,lights_fragment_begin:id,lights_fragment_maps:sd,lights_fragment_end:rd,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:cd,map_fragment:ud,map_pars_fragment:ld,map_particle_fragment:hd,map_particle_pars_fragment:dd,metalnessmap_fragment:fd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:vd,morphtarget_pars_vertex:wd,morphtarget_vertex:Pd,normal_fragment_begin:xd,normal_fragment_maps:yd,normal_pars_fragment:Td,normal_pars_vertex:Md,normal_vertex:Cd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:_d,opaque_fragment:Od,packing:Id,premultiplied_alpha_fragment:Bd,project_vertex:Ld,dithering_fragment:Rd,dithering_pars_fragment:Ud,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Nd,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:kd,shadowmap_vertex:Hd,shadowmask_pars_fragment:jd,skinbase_vertex:Gd,skinning_pars_vertex:qd,skinning_vertex:Qd,skinnormal_vertex:Wd,specularmap_fragment:Vd,specularmap_pars_fragment:Zd,tonemapping_fragment:Yd,tonemapping_pars_fragment:Kd,transmission_fragment:Jd,transmission_pars_fragment:Xd,uv_pars_fragment:$d,uv_pars_vertex:ef,uv_vertex:tf,worldpos_vertex:nf,background_vert:sf,background_frag:rf,backgroundCube_vert:of,backgroundCube_frag:af,cube_vert:Af,cube_frag:cf,depth_vert:uf,depth_frag:lf,distanceRGBA_vert:hf,distanceRGBA_frag:df,equirect_vert:ff,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:vf,meshbasic_frag:wf,meshlambert_vert:Pf,meshlambert_frag:xf,meshmatcap_vert:yf,meshmatcap_frag:Tf,meshnormal_vert:Mf,meshnormal_frag:Cf,meshphong_vert:bf,meshphong_frag:Ef,meshphysical_vert:Sf,meshphysical_frag:Df,meshtoon_vert:_f,meshtoon_frag:Of,points_vert:If,points_frag:Bf,shadow_vert:Lf,shadow_frag:Rf,sprite_vert:Uf,sprite_frag:zf},ne={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},sn={basic:{uniforms:bt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:bt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:bt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:bt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:bt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:bt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:bt([ne.points,ne.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:bt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:bt([ne.common,ne.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:bt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:bt([ne.sprite,ne.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:bt([ne.common,ne.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:bt([ne.lights,ne.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};sn.physical={uniforms:bt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Ws={r:0,b:0,g:0},Xn=new on,Nf=new Oe;function Ff(s,e,t,n,i,r,o){let a=new Te(0),A=r===!0?0:1,c,u,l=null,h=0,f=null;function m(M){let T=M.isScene===!0?M.background:null;return T&&T.isTexture&&(T=(M.backgroundBlurriness>0?t:e).get(T)),T}function g(M){let T=!1,x=m(M);x===null?d(a,A):x&&x.isColor&&(d(x,1),T=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,T){let x=m(T);x&&(x.isCubeTexture||x.mapping===zr)?(u===void 0&&(u=new lt(new fs(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Hi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Xn.copy(T.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Nf.makeRotationFromEuler(Xn)),u.material.toneMapped=ze.getTransfer(x.colorSpace)!==Ke,(l!==x||h!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,l=x,h=x.version,f=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new lt(new ji(2,2),new an({name:"BackgroundMaterial",uniforms:Hi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=ze.getTransfer(x.colorSpace)!==Ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(l!==x||h!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,l=x,h=x.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,T){M.getRGB(Ws,mu(s)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),A=T,d(a,A)},getClearAlpha:function(){return A},setClearAlpha:function(M){A=M,d(a,A)},render:g,addToRenderList:p}}function kf(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,o=!1;function a(P,S,j,F,q){let K=!1,G=l(F,j,S);r!==G&&(r=G,c(r.object)),K=f(P,F,j,q),K&&m(P,F,j,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(P,S,j,F),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function A(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function u(P){return s.deleteVertexArray(P)}function l(P,S,j){let F=j.wireframe===!0,q=n[P.id];q===void 0&&(q={},n[P.id]=q);let K=q[S.id];K===void 0&&(K={},q[S.id]=K);let G=K[F];return G===void 0&&(G=h(A()),K[F]=G),G}function h(P){let S=[],j=[],F=[];for(let q=0;q<t;q++)S[q]=0,j[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:j,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,S,j,F){let q=r.attributes,K=S.attributes,G=0,J=j.getAttributes();for(let k in J)if(J[k].location>=0){let ce=q[k],de=K[k];if(de===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),ce===void 0||ce.attribute!==de||de&&ce.data!==de.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function m(P,S,j,F){let q={},K=S.attributes,G=0,J=j.getAttributes();for(let k in J)if(J[k].location>=0){let ce=K[k];ce===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor));let de={};de.attribute=ce,ce&&ce.data&&(de.data=ce.data),q[k]=de,G++}r.attributes=q,r.attributesNum=G,r.index=F}function g(){let P=r.newAttributes;for(let S=0,j=P.length;S<j;S++)P[S]=0}function p(P){d(P,0)}function d(P,S){let j=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;j[P]=1,F[P]===0&&(s.enableVertexAttribArray(P),F[P]=1),q[P]!==S&&(s.vertexAttribDivisor(P,S),q[P]=S)}function M(){let P=r.newAttributes,S=r.enabledAttributes;for(let j=0,F=S.length;j<F;j++)S[j]!==P[j]&&(s.disableVertexAttribArray(j),S[j]=0)}function T(P,S,j,F,q,K,G){G===!0?s.vertexAttribIPointer(P,S,j,q,K):s.vertexAttribPointer(P,S,j,F,q,K)}function x(P,S,j,F){g();let q=F.attributes,K=j.getAttributes(),G=S.defaultAttributeValues;for(let J in K){let k=K[J];if(k.location>=0){let $=q[J];if($===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let ce=$.normalized,de=$.itemSize,Le=e.get($);if(Le===void 0)continue;let Je=Le.buffer,W=Le.type,te=Le.bytesPerElement,ge=W===s.INT||W===s.UNSIGNED_INT||$.gpuType===Fa;if($.isInterleavedBufferAttribute){let se=$.data,Me=se.stride,Ee=$.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<k.locationSize;Re++)d(k.location+Re,se.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<k.locationSize;Re++)p(k.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let Re=0;Re<k.locationSize;Re++)T(k.location+Re,de/k.locationSize,W,ce,Me*te,(Ee+de/k.locationSize*Re)*te,ge)}else{if($.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)d(k.location+se,$.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let se=0;se<k.locationSize;se++)p(k.location+se);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let se=0;se<k.locationSize;se++)T(k.location+se,de/k.locationSize,W,ce,de*te,de/k.locationSize*se*te,ge)}}else if(G!==void 0){let ce=G[J];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(k.location,ce);break;case 3:s.vertexAttrib3fv(k.location,ce);break;case 4:s.vertexAttrib4fv(k.location,ce);break;default:s.vertexAttrib1fv(k.location,ce)}}}}M()}function R(){L();for(let P in n){let S=n[P];for(let j in S){let F=S[j];for(let q in F)u(F[q].object),delete F[q];delete S[j]}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let S=n[P.id];for(let j in S){let F=S[j];for(let q in F)u(F[q].object),delete F[q];delete S[j]}delete n[P.id]}function E(P){for(let S in n){let j=n[S];if(j[P.id]===void 0)continue;let F=j[P.id];for(let q in F)u(F[q].object),delete F[q];delete j[P.id]}}function L(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function Hf(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,l){l!==0&&(s.drawArraysInstanced(n,c,u,l),t.update(u,n,l))}function a(c,u,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,l);let f=0;for(let m=0;m<l;m++)f+=u[m];t.update(f,n,1)}function A(c,u,l,h){if(l===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,l);let m=0;for(let g=0;g<l;g++)m+=u[g]*h[g];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=A}function jf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==jt&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let L=E===Ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==xn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==$t&&!L)}function A(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=A(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let l=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:A,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:l,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,vertexTextures:R,maxSamples:b}}function Gf(s){let e=this,t=null,n=0,i=!1,r=!1,o=new gn,a=new _e,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){let f=l.length!==0||h||n!==0||i;return i=h,n=l.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,h){t=u(l,h,0)},this.setState=function(l,h,f){let m=l.clippingPlanes,g=l.clipIntersection,p=l.clipShadows,d=s.get(l);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{let M=r?0:n,T=M*4,x=d.clippingState||null;A.value=x,x=u(m,h,T,f);for(let R=0;R!==T;++R)x[R]=t[R];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){A.value!==t&&(A.value=t,A.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(l,h,f,m){let g=l!==null?l.length:0,p=null;if(g!==0){if(p=A.value,m!==!0||p===null){let d=f+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,x=f;T!==g;++T,x+=4)o.copy(l[T]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}A.value=p,A.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function qf(s){let e=new WeakMap;function t(o,a){return a===Lo?o.mapping=Bi:a===Ro&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lo||a===Ro)if(e.has(o)){let A=e.get(o).texture;return t(A,o.mapping)}else{let A=o.image;if(A&&A.height>0){let c=new da(A.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let A=e.get(a);A!==void 0&&(e.delete(a),A.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Gi=class extends mr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,A=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,A=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,A,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bi=4,lc=[.125,.215,.35,.446,.526,.582],ni=20,ho=new Gi,hc=new Te,fo=null,po=0,mo=0,go=!1,ei=(1+Math.sqrt(5))/2,Ti=1/ei,dc=[new _(-ei,Ti,0),new _(ei,Ti,0),new _(-Ti,0,ei),new _(Ti,0,ei),new _(0,ei,-Ti),new _(0,ei,Ti),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],qi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo,po,mo),this._renderer.xr.enabled=go,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget(),po=this._renderer.getActiveCubeFace(),mo=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ms,format:jt,colorSpace:Mt,depthBuffer:!1},i=fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qf(r)),this._blurMaterial=Wf(r,e,t)}return i}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,ho)}_sceneToCubeUV(e,t,n,i){let a=new ut(90,1,t,n),A=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,h=u.toneMapping;u.getClearColor(hc),u.toneMapping=kn,u.autoClear=!1;let f=new Nt({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),m=new lt(new fs,f),g=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(hc),g=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,A[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,A[d]),a.lookAt(0,c[d],0)):(a.up.set(0,A[d],0),a.lookAt(0,0,c[d]));let T=this._cubeSize;Vs(i,M*T,d>2?T:0,T,T),u.setRenderTarget(i),g&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=l,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Bi||e.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let A=this._cubeSize;Vs(t,0,0,3*A,2*A),n.setRenderTarget(t),n.render(o,ho)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dc[(i-r-1)%dc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let A=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,l=new lt(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ni-1),g=r/m,p=isFinite(r)?1+Math.floor(u*g):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);let d=[],M=0;for(let E=0;E<ni;++E){let L=E/g,y=Math.exp(-L*L/2);d.push(y),E===0?M+=y:E<p&&(M+=2*y)}for(let E=0;E<d.length;E++)d[E]=d[E]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:T}=this;h.dTheta.value=m,h.mipInt.value=T-n;let x=this._sizeLods[i],R=3*x*(i>T-bi?i-T+bi:0),b=4*(this._cubeSize-x);Vs(t,R,b,3*x,2*x),A.setRenderTarget(t),A.render(l,ho)}};function Qf(s){let e=[],t=[],n=[],i=s,r=s-bi+1+lc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let A=1/a;o>s-bi?A=lc[o-s+bi-1]:o===0&&(A=0),n.push(A);let c=1/(a-2),u=-c,l=1+c,h=[u,u,l,u,l,l,u,u,l,l,u,l],f=6,m=6,g=3,p=2,d=1,M=new Float32Array(g*m*f),T=new Float32Array(p*m*f),x=new Float32Array(d*m*f);for(let b=0;b<f;b++){let E=b%3*2/3-1,L=b>2?0:-1,y=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];M.set(y,g*m*b),T.set(h,p*m*b);let P=[b,b,b,b,b,b];x.set(P,d*m*b)}let R=new Ot;R.setAttribute("position",new ht(M,g)),R.setAttribute("uv",new ht(T,p)),R.setAttribute("faceIndex",new ht(x,d)),e.push(R),i>bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fc(s,e,t){let n=new yn(s,e,t);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Wf(s,e,t){let n=new Float32Array(ni),i=new _(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function pc(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function mc(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function Vf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let A=a.mapping,c=A===Lo||A===Ro,u=A===Bi||A===Li;if(c||u){let l=e.get(a),h=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new qi(s)),l=c?t.fromEquirectangular(a,l):t.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),l.texture;if(l!==void 0)return l.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new qi(s)),l=c?t.fromEquirectangular(a):t.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,e.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function i(a){let A=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&A++;return A===c}function r(a){let A=a.target;A.removeEventListener("dispose",r);let c=e.get(A);c!==void 0&&(e.delete(A),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zf(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&os("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yf(s,e,t,n){let i={},r=new WeakMap;function o(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);for(let m in h.morphAttributes){let g=h.morphAttributes[m];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}h.removeEventListener("dispose",o),delete i[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(l,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function A(l){let h=l.attributes;for(let m in h)e.update(h[m],s.ARRAY_BUFFER);let f=l.morphAttributes;for(let m in f){let g=f[m];for(let p=0,d=g.length;p<d;p++)e.update(g[p],s.ARRAY_BUFFER)}}function c(l){let h=[],f=l.index,m=l.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let T=0,x=M.length;T<x;T+=3){let R=M[T+0],b=M[T+1],E=M[T+2];h.push(R,b,b,E,E,R)}}else if(m!==void 0){let M=m.array;g=m.version;for(let T=0,x=M.length/3-1;T<x;T+=3){let R=T+0,b=T+1,E=T+2;h.push(R,b,b,E,E,R)}}else return;let p=new(fu(h)?pr:fr)(h,1);p.version=g;let d=r.get(l);d&&e.remove(d),r.set(l,p)}function u(l){let h=r.get(l);if(h){let f=l.index;f!==null&&h.version<f.version&&c(l)}else c(l);return r.get(l)}return{get:a,update:A,getWireframeAttribute:u}}function Kf(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function A(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,h*o,m),t.update(f,n,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,m);let p=0;for(let d=0;d<m;d++)p+=f[d];t.update(p,n,1)}function l(h,f,m,g){if(m===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/o,f[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,g,0,m);let d=0;for(let M=0;M<m;M++)d+=f[M]*g[M];t.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=A,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=l}function Jf(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Xf(s,e,t){let n=new WeakMap,i=new Qe;function r(o,a,A){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==l){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),m===!0&&(T=2),g===!0&&(T=3);let x=a.attributes.position.count*T,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*R*4*l),E=new hr(b,x,R,l);E.type=$t,E.needsUpdate=!0;let L=T*4;for(let P=0;P<l;P++){let S=p[P],j=d[P],F=M[P],q=x*R*4*P;for(let K=0;K<S.count;K++){let G=K*L;f===!0&&(i.fromBufferAttribute(S,K),b[q+G+0]=i.x,b[q+G+1]=i.y,b[q+G+2]=i.z,b[q+G+3]=0),m===!0&&(i.fromBufferAttribute(j,K),b[q+G+4]=i.x,b[q+G+5]=i.y,b[q+G+6]=i.z,b[q+G+7]=0),g===!0&&(i.fromBufferAttribute(F,K),b[q+G+8]=i.x,b[q+G+9]=i.y,b[q+G+10]=i.z,b[q+G+11]=F.itemSize===4?i.w:1)}}h={count:l,texture:E,size:new Ne(x,R)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)A.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let m=a.morphTargetsRelative?1:1-f;A.getUniforms().setValue(s,"morphTargetBaseInfluence",m),A.getUniforms().setValue(s,"morphTargetInfluences",c)}A.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),A.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function $f(s,e,t,n){let i=new WeakMap;function r(A){let c=n.render.frame,u=A.geometry,l=e.get(A,u);if(i.get(l)!==c&&(e.update(l),i.set(l,c)),A.isInstancedMesh&&(A.hasEventListener("dispose",a)===!1&&A.addEventListener("dispose",a),i.get(A)!==c&&(t.update(A.instanceMatrix,s.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,s.ARRAY_BUFFER),i.set(A,c))),A.isSkinnedMesh){let h=A.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return l}function o(){i=new WeakMap}function a(A){let c=A.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var vr=class extends mt{constructor(e,t,n,i,r,o,a,A,c,u=Si){if(u!==Si&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=si),n===void 0&&u===Ui&&(n=Ri),super(null,i,r,o,a,A,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=A!==void 0?A:yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vu=new mt,gc=new vr(1,1),wu=new hr,Pu=new la,xu=new gr,vc=[],wc=[],Pc=new Float32Array(16),xc=new Float32Array(9),yc=new Float32Array(4);function Zi(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=vc[i];if(r===void 0&&(r=new Float32Array(i),vc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Hr(s,e){let t=wc[e];t===void 0&&(t=new Int32Array(e),wc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ep(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function np(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function ip(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function sp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;yc.set(n),s.uniformMatrix2fv(this.addr,!1,yc),ft(t,n)}}function rp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;xc.set(n),s.uniformMatrix3fv(this.addr,!1,xc),ft(t,n)}}function op(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Pc.set(n),s.uniformMatrix4fv(this.addr,!1,Pc),ft(t,n)}}function ap(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ap(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function cp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function up(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function lp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function hp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function dp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function fp(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function pp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gc.compareFunction=du,r=gc):r=vu,t.setTexture2D(e||r,i)}function mp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pu,i)}function gp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xu,i)}function vp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wu,i)}function wp(s){switch(s){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return op;case 5124:case 35670:return ap;case 35667:case 35671:return Ap;case 35668:case 35672:return cp;case 35669:case 35673:return up;case 5125:return lp;case 36294:return hp;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return vp}}function Pp(s,e){s.uniform1fv(this.addr,e)}function xp(s,e){let t=Zi(e,this.size,2);s.uniform2fv(this.addr,t)}function yp(s,e){let t=Zi(e,this.size,3);s.uniform3fv(this.addr,t)}function Tp(s,e){let t=Zi(e,this.size,4);s.uniform4fv(this.addr,t)}function Mp(s,e){let t=Zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cp(s,e){let t=Zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function bp(s,e){let t=Zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ep(s,e){s.uniform1iv(this.addr,e)}function Sp(s,e){s.uniform2iv(this.addr,e)}function Dp(s,e){s.uniform3iv(this.addr,e)}function _p(s,e){s.uniform4iv(this.addr,e)}function Op(s,e){s.uniform1uiv(this.addr,e)}function Ip(s,e){s.uniform2uiv(this.addr,e)}function Bp(s,e){s.uniform3uiv(this.addr,e)}function Lp(s,e){s.uniform4uiv(this.addr,e)}function Rp(s,e,t){let n=this.cache,i=e.length,r=Hr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vu,r[o])}function Up(s,e,t){let n=this.cache,i=e.length,r=Hr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Pu,r[o])}function zp(s,e,t){let n=this.cache,i=e.length,r=Hr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xu,r[o])}function Np(s,e,t){let n=this.cache,i=e.length,r=Hr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wu,r[o])}function Fp(s){switch(s){case 5126:return Pp;case 35664:return xp;case 35665:return yp;case 35666:return Tp;case 35674:return Mp;case 35675:return Cp;case 35676:return bp;case 5124:case 35670:return Ep;case 35667:case 35671:return Sp;case 35668:case 35672:return Dp;case 35669:case 35673:return _p;case 5125:return Op;case 36294:return Ip;case 36295:return Bp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Np}}var fa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wp(t.type)}},pa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fp(t.type)}},ma=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},vo=/(\w+)(\])?(\[|\.)?/g;function Tc(s,e){s.seq.push(e),s.map[e.id]=e}function kp(s,e,t){let n=s.name,i=n.length;for(vo.lastIndex=0;;){let r=vo.exec(n),o=vo.lastIndex,a=r[1],A=r[2]==="]",c=r[3];if(A&&(a=a|0),c===void 0||c==="["&&o+2===i){Tc(t,c===void 0?new fa(a,s,e):new pa(a,s,e));break}else{let l=t.map[a];l===void 0&&(l=new ma(a),Tc(t,l)),t=l}}}var Oi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);kp(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],A=n[a.id];A.needsUpdate!==!1&&a.setValue(e,A.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Mc(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Hp=37297,jp=0;function Gp(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Cc=new _e;function qp(s){ze._getMatrix(Cc,ze.workingColorSpace,s);let e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(s)){case Fr:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bc(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Gp(s.getShaderSource(e),o)}else return i}function Qp(s,e){let t=qp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wp(s,e){let t;switch(e){case tl:t="Linear";break;case nl:t="Reinhard";break;case il:t="Cineon";break;case za:t="ACESFilmic";break;case rl:t="AgX";break;case ol:t="Neutral";break;case sl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zs=new _;function Vp(){ze.getLuminanceCoefficients(Zs);let s=Zs.x.toFixed(4),e=Zs.y.toFixed(4),t=Zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function Yp(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kp(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function as(s){return s!==""}function Ec(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ga(s){return s.replace(Jp,$p)}var Xp=new Map;function $p(s,e){let t=Be[e];if(t===void 0){let n=Xp.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ga(t)}var em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(s){return s.replace(em,tm)}function tm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function _c(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function nm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function im(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case Li:e="ENVMAP_TYPE_CUBE";break;case zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sm(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Li&&(e="ENVMAP_MODE_REFRACTION"),e}function rm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case eu:e="ENVMAP_BLENDING_MULTIPLY";break;case $u:e="ENVMAP_BLENDING_MIX";break;case el:e="ENVMAP_BLENDING_ADD";break}return e}function om(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function am(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,A=nm(t),c=im(t),u=sm(t),l=rm(t),h=om(t),f=Zp(t),m=Yp(r),g=i.createProgram(),p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(as).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(as).join(`
`),d.length>0&&(d+=`
`)):(p=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),d=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Be.tonemapping_pars_fragment:"",t.toneMapping!==kn?Wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Qp("linearToOutputTexel",t.outputColorSpace),Vp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=ga(o),o=Ec(o,t),o=Sc(o,t),a=ga(a),a=Ec(a,t),a=Sc(a,t),o=Dc(o),a=Dc(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===GA?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=M+p+o,x=M+d+a,R=Mc(i,i.VERTEX_SHADER,T),b=Mc(i,i.FRAGMENT_SHADER,x);i.attachShader(g,R),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(S){if(s.debug.checkShaderErrors){let j=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(R).trim(),q=i.getShaderInfoLog(b).trim(),K=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,R,b);else{let J=bc(i,R,"vertex"),k=bc(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+j+`
`+J+`
`+k)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(F===""||q==="")&&(G=!1);G&&(S.diagnostics={runnable:K,programLog:j,vertexShader:{log:F,prefix:p},fragmentShader:{log:q,prefix:d}})}i.deleteShader(R),i.deleteShader(b),L=new Oi(i,g),y=Kp(i,g)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,Hp)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=b,this}var Am=0,va=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wa(e),t.set(e,n)),n}},wa=class{constructor(e){this.id=Am++,this.code=e,this.usedTimes=0}};function cm(s,e,t,n,i,r,o){let a=new dr,A=new va,c=new Set,u=[],l=i.logarithmicDepthBuffer,h=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,P,S,j,F){let q=j.fog,K=F.geometry,G=y.isMeshStandardMaterial?j.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),k=J&&J.mapping===zr?J.image.height:null,$=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=ce!==void 0?ce.length:0,Le=0;K.morphAttributes.position!==void 0&&(Le=1),K.morphAttributes.normal!==void 0&&(Le=2),K.morphAttributes.color!==void 0&&(Le=3);let Je,W,te,ge;if($){let Ze=sn[$];Je=Ze.vertexShader,W=Ze.fragmentShader}else Je=y.vertexShader,W=y.fragmentShader,A.update(y),te=A.getVertexShaderID(y),ge=A.getFragmentShaderID(y);let se=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,st=!!y.map,je=!!y.matcap,at=!!J,B=!!y.aoMap,Ft=!!y.lightMap,Fe=!!y.bumpMap,ke=!!y.normalMap,xe=!!y.displacementMap,tt=!!y.emissiveMap,Pe=!!y.metalnessMap,C=!!y.roughnessMap,v=y.anisotropy>0,U=y.clearcoat>0,V=y.dispersion>0,Y=y.iridescence>0,Q=y.sheen>0,ve=y.transmission>0,re=v&&!!y.anisotropyMap,ue=U&&!!y.clearcoatMap,Ge=U&&!!y.clearcoatNormalMap,X=U&&!!y.clearcoatRoughnessMap,le=Y&&!!y.iridescenceMap,ye=Y&&!!y.iridescenceThicknessMap,Ce=Q&&!!y.sheenColorMap,he=Q&&!!y.sheenRoughnessMap,He=!!y.specularMap,Ie=!!y.specularColorMap,Xe=!!y.specularIntensityMap,D=ve&&!!y.transmissionMap,ie=ve&&!!y.thicknessMap,H=!!y.gradientMap,Z=!!y.alphaMap,Ae=y.alphaTest>0,oe=!!y.alphaHash,Se=!!y.extensions,rt=kn;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(rt=s.toneMapping);let vt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:Je,fragmentShader:W,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Mt,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:je,envMap:at,envMapMode:at&&J.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:Ft,bumpMap:Fe,normalMap:ke,displacementMap:h&&xe,emissiveMap:tt,normalMapObjectSpace:ke&&y.normalMapType===ll,normalMapTangentSpace:ke&&y.normalMapType===hu,metalnessMap:Pe,roughnessMap:C,anisotropy:v,anisotropyMap:re,clearcoat:U,clearcoatMap:ue,clearcoatNormalMap:Ge,clearcoatRoughnessMap:X,dispersion:V,iridescence:Y,iridescenceMap:le,iridescenceThicknessMap:ye,sheen:Q,sheenColorMap:Ce,sheenRoughnessMap:he,specularMap:He,specularColorMap:Ie,specularIntensityMap:Xe,transmission:ve,transmissionMap:D,thicknessMap:ie,gradientMap:H,opaque:y.transparent===!1&&y.blending===Ei&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:Ae,alphaHash:oe,combine:y.combine,mapUv:st&&g(y.map.channel),aoMapUv:B&&g(y.aoMap.channel),lightMapUv:Ft&&g(y.lightMap.channel),bumpMapUv:Fe&&g(y.bumpMap.channel),normalMapUv:ke&&g(y.normalMap.channel),displacementMapUv:xe&&g(y.displacementMap.channel),emissiveMapUv:tt&&g(y.emissiveMap.channel),metalnessMapUv:Pe&&g(y.metalnessMap.channel),roughnessMapUv:C&&g(y.roughnessMap.channel),anisotropyMapUv:re&&g(y.anisotropyMap.channel),clearcoatMapUv:ue&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:he&&g(y.sheenRoughnessMap.channel),specularMapUv:He&&g(y.specularMap.channel),specularColorMapUv:Ie&&g(y.specularColorMap.channel),specularIntensityMapUv:Xe&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:ie&&g(y.thicknessMap.channel),alphaMapUv:Z&&g(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ke||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(st||Z),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Le,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&ze.getTransfer(y.map.colorSpace)===Ke,decodeVideoTextureEmissive:tt&&y.emissiveMap.isVideoTexture===!0&&ze.getTransfer(y.emissiveMap.colorSpace)===Ke,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rt,flipSided:y.side===gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function d(y){let P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(let S in y.defines)P.push(S),P.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(M(P,y),T(P,y),P.push(s.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function M(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function T(y,P){a.disableAll(),P.supportsVertexTextures&&a.enable(0),P.instancing&&a.enable(1),P.instancingColor&&a.enable(2),P.instancingMorph&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),P.dispersion&&a.enable(20),P.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reverseDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let P=m[y.type],S;if(P){let j=sn[P];S=Xl.clone(j.uniforms)}else S=y.uniforms;return S}function R(y,P){let S;for(let j=0,F=u.length;j<F;j++){let q=u[j];if(q.cacheKey===P){S=q,++S.usedTimes;break}}return S===void 0&&(S=new am(s,P,y,r),u.push(S)),S}function b(y){if(--y.usedTimes===0){let P=u.indexOf(y);u[P]=u[u.length-1],u.pop(),y.destroy()}}function E(y){A.remove(y)}function L(){A.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:L}}function um(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,A){s.get(o)[a]=A}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function lm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Oc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ic(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(l,h,f,m,g,p){let d=s[e];return d===void 0?(d={id:l.id,object:l,geometry:h,material:f,groupOrder:m,renderOrder:l.renderOrder,z:g,group:p},s[e]=d):(d.id=l.id,d.object=l,d.geometry=h,d.material=f,d.groupOrder=m,d.renderOrder=l.renderOrder,d.z=g,d.group=p),e++,d}function a(l,h,f,m,g,p){let d=o(l,h,f,m,g,p);f.transmission>0?n.push(d):f.transparent===!0?i.push(d):t.push(d)}function A(l,h,f,m,g,p){let d=o(l,h,f,m,g,p);f.transmission>0?n.unshift(d):f.transparent===!0?i.unshift(d):t.unshift(d)}function c(l,h){t.length>1&&t.sort(l||lm),n.length>1&&n.sort(h||Oc),i.length>1&&i.sort(h||Oc)}function u(){for(let l=e,h=s.length;l<h;l++){let f=s[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:A,finish:u,sort:c}}function hm(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Ic,s.set(n,[o])):i>=r.length?(o=new Ic,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function dm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new _,color:new Te};break;case"SpotLight":t={position:new _,direction:new _,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new _,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new _,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new _,halfWidth:new _,halfHeight:new _};break}return s[e.id]=t,t}}}function fm(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var pm=0;function mm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gm(s){let e=new dm,t=fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new _);let i=new _,r=new Oe,o=new Oe;function a(c){let u=0,l=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,g=0,p=0,d=0,M=0,T=0,x=0,R=0,b=0,E=0;c.sort(mm);for(let y=0,P=c.length;y<P;y++){let S=c[y],j=S.color,F=S.intensity,q=S.distance,K=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=j.r*F,l+=j.g*F,h+=j.b*F;else if(S.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(S.sh.coefficients[G],F);E++}else if(S.isDirectionalLight){let G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let J=S.shadow,k=t.get(S);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=S.shadow.matrix,M++}n.directional[f]=G,f++}else if(S.isSpotLight){let G=e.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(j).multiplyScalar(F),G.distance=q,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,n.spot[g]=G;let J=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,J.updateMatrices(S),S.castShadow&&b++),n.spotLightMatrix[g]=J.matrix,S.castShadow){let k=t.get(S);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=K,x++}g++}else if(S.isRectAreaLight){let G=e.get(S);G.color.copy(j).multiplyScalar(F),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=G,p++}else if(S.isPointLight){let G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){let J=S.shadow,k=t.get(S);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=S.shadow.matrix,T++}n.point[m]=G,m++}else if(S.isHemisphereLight){let G=e.get(S);G.skyColor.copy(S.color).multiplyScalar(F),G.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[d]=G,d++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=l,n.ambient[2]=h;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==g||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==R||L.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,L.directionalLength=f,L.pointLength=m,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=R,L.numLightProbes=E,n.version=pm++)}function A(c,u){let l=0,h=0,f=0,m=0,g=0,p=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let T=c[d];if(T.isDirectionalLight){let x=n.directional[l];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),l++}else if(T.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(T.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(T.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){let x=n.point[h];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(p),h++}else if(T.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(p),g++}}}return{setup:a,setupView:A,state:n}}function Bc(s){let e=new gm(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function A(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:A,pushLight:r,pushShadow:o}}function vm(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Bc(s),e.set(i,[a])):r>=o.length?(a=new Bc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Pa=class extends zt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xa=class extends zt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
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
}`;function xm(s,e,t){let n=new ps,i=new Ne,r=new Ne,o=new Qe,a=new Pa({depthPacking:ul}),A=new xa,c={},u=t.maxTextureSize,l={[qt]:gt,[gt]:qt,[Rt]:Rt},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:wm,fragmentShader:Pm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ot;m.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new lt(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let d=this.type;this.render=function(b,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;let y=s.getRenderTarget(),P=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Fn),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let F=d!==mn&&this.type===mn,q=d===mn&&this.type!==mn;for(let K=0,G=b.length;K<G;K++){let J=b[K],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let $=k.getFrameExtents();if(i.multiply($),r.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,k.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,k.mapSize.y=r.y)),k.map===null||F===!0||q===!0){let de=this.type!==mn?{minFilter:yt,magFilter:yt}:{};k.map!==null&&k.map.dispose(),k.map=new yn(i.x,i.y,de),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let ce=k.getViewportCount();for(let de=0;de<ce;de++){let Le=k.getViewport(de);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),j.viewport(o),k.updateMatrices(J,de),n=k.getFrustum(),x(E,L,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===mn&&M(k,L),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(y,P,S)};function M(b,E){let L=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yn(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(E,null,L,h,g,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(E,null,L,f,g,null)}function T(b,E,L,y){let P=null,S=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)P=S;else if(P=L.isPointLight===!0?A:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let j=P.uuid,F=E.uuid,q=c[j];q===void 0&&(q={},c[j]=q);let K=q[F];K===void 0&&(K=P.clone(),q[F]=K,E.addEventListener("dispose",R)),P=K}if(P.visible=E.visible,P.wireframe=E.wireframe,y===mn?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:l[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,L.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let j=s.properties.get(P);j.light=L}return P}function x(b,E,L,y,P){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);let F=e.update(b),q=b.material;if(Array.isArray(q)){let K=F.groups;for(let G=0,J=K.length;G<J;G++){let k=K[G],$=q[k.materialIndex];if($&&$.visible){let ce=T(b,$,y,P);b.onBeforeShadow(s,b,E,L,F,ce,k),s.renderBufferDirect(L,null,F,ce,b,k),b.onAfterShadow(s,b,E,L,F,ce,k)}}}else if(q.visible){let K=T(b,q,y,P);b.onBeforeShadow(s,b,E,L,F,K,null),s.renderBufferDirect(L,null,F,K,b,null),b.onAfterShadow(s,b,E,L,F,K,null)}}let j=b.children;for(let F=0,q=j.length;F<q;F++)x(j[F],E,L,y,P)}function R(b){b.target.removeEventListener("dispose",R);for(let L in c){let y=c[L],P=b.target.uuid;P in y&&(y[P].dispose(),delete y[P])}}}var ym={[Eo]:So,[Do]:Io,[_o]:Bo,[Ii]:Oo,[So]:Eo,[Io]:Do,[Bo]:_o,[Oo]:Ii};function Tm(s,e){function t(){let D=!1,ie=new Qe,H=null,Z=new Qe(0,0,0,0);return{setMask:function(Ae){H!==Ae&&!D&&(s.colorMask(Ae,Ae,Ae,Ae),H=Ae)},setLocked:function(Ae){D=Ae},setClear:function(Ae,oe,Se,rt,vt){vt===!0&&(Ae*=rt,oe*=rt,Se*=rt),ie.set(Ae,oe,Se,rt),Z.equals(ie)===!1&&(s.clearColor(Ae,oe,Se,rt),Z.copy(ie))},reset:function(){D=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,H=null,Z=null,Ae=null;return{setReversed:function(oe){if(ie!==oe){let Se=e.get("EXT_clip_control");ie?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT);let rt=Ae;Ae=null,this.setClear(rt)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?se(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(oe){H!==oe&&!D&&(s.depthMask(oe),H=oe)},setFunc:function(oe){if(ie&&(oe=ym[oe]),Z!==oe){switch(oe){case Eo:s.depthFunc(s.NEVER);break;case So:s.depthFunc(s.ALWAYS);break;case Do:s.depthFunc(s.LESS);break;case Ii:s.depthFunc(s.LEQUAL);break;case _o:s.depthFunc(s.EQUAL);break;case Oo:s.depthFunc(s.GEQUAL);break;case Io:s.depthFunc(s.GREATER);break;case Bo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=oe}},setLocked:function(oe){D=oe},setClear:function(oe){Ae!==oe&&(ie&&(oe=1-oe),s.clearDepth(oe),Ae=oe)},reset:function(){D=!1,H=null,Z=null,Ae=null,ie=!1}}}function i(){let D=!1,ie=null,H=null,Z=null,Ae=null,oe=null,Se=null,rt=null,vt=null;return{setTest:function(Ze){D||(Ze?se(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!D&&(s.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Vt,An){(H!==Ze||Z!==Vt||Ae!==An)&&(s.stencilFunc(Ze,Vt,An),H=Ze,Z=Vt,Ae=An)},setOp:function(Ze,Vt,An){(oe!==Ze||Se!==Vt||rt!==An)&&(s.stencilOp(Ze,Vt,An),oe=Ze,Se=Vt,rt=An)},setLocked:function(Ze){D=Ze},setClear:function(Ze){vt!==Ze&&(s.clearStencil(Ze),vt=Ze)},reset:function(){D=!1,ie=null,H=null,Z=null,Ae=null,oe=null,Se=null,rt=null,vt=null}}}let r=new t,o=new n,a=new i,A=new WeakMap,c=new WeakMap,u={},l={},h=new WeakMap,f=[],m=null,g=!1,p=null,d=null,M=null,T=null,x=null,R=null,b=null,E=new Te(0,0,0),L=0,y=!1,P=null,S=null,j=null,F=null,q=null,K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,J=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=J>=2);let $=null,ce={},de=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Je=new Qe().fromArray(de),W=new Qe().fromArray(Le);function te(D,ie,H,Z){let Ae=new Uint8Array(4),oe=s.createTexture();s.bindTexture(D,oe),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<H;Se++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ie+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return oe}let ge={};ge[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(s.DEPTH_TEST),o.setFunc(Ii),Fe(!1),ke(LA),se(s.CULL_FACE),B(Fn);function se(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function Me(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Ee(D,ie){return l[D]!==ie?(s.bindFramebuffer(D,ie),l[D]=ie,D===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=ie),D===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(D,ie){let H=f,Z=!1;if(D){H=h.get(ie),H===void 0&&(H=[],h.set(ie,H));let Ae=D.textures;if(H.length!==Ae.length||H[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,Se=Ae.length;oe<Se;oe++)H[oe]=s.COLOR_ATTACHMENT0+oe;H.length=Ae.length,Z=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,Z=!0);Z&&s.drawBuffers(H)}function st(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let je={[ti]:s.FUNC_ADD,[Uu]:s.FUNC_SUBTRACT,[zu]:s.FUNC_REVERSE_SUBTRACT};je[Nu]=s.MIN,je[Fu]=s.MAX;let at={[ku]:s.ZERO,[Hu]:s.ONE,[ju]:s.SRC_COLOR,[Co]:s.SRC_ALPHA,[Zu]:s.SRC_ALPHA_SATURATE,[Wu]:s.DST_COLOR,[qu]:s.DST_ALPHA,[Gu]:s.ONE_MINUS_SRC_COLOR,[bo]:s.ONE_MINUS_SRC_ALPHA,[Vu]:s.ONE_MINUS_DST_COLOR,[Qu]:s.ONE_MINUS_DST_ALPHA,[Yu]:s.CONSTANT_COLOR,[Ku]:s.ONE_MINUS_CONSTANT_COLOR,[Ju]:s.CONSTANT_ALPHA,[Xu]:s.ONE_MINUS_CONSTANT_ALPHA};function B(D,ie,H,Z,Ae,oe,Se,rt,vt,Ze){if(D===Fn){g===!0&&(Me(s.BLEND),g=!1);return}if(g===!1&&(se(s.BLEND),g=!0),D!==Ru){if(D!==p||Ze!==y){if((d!==ti||x!==ti)&&(s.blendEquation(s.FUNC_ADD),d=ti,x=ti),Ze)switch(D){case Ei:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case RA:s.blendFunc(s.ONE,s.ONE);break;case UA:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zA:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ei:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case RA:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case UA:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zA:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,T=null,R=null,b=null,E.set(0,0,0),L=0,p=D,y=Ze}return}Ae=Ae||ie,oe=oe||H,Se=Se||Z,(ie!==d||Ae!==x)&&(s.blendEquationSeparate(je[ie],je[Ae]),d=ie,x=Ae),(H!==M||Z!==T||oe!==R||Se!==b)&&(s.blendFuncSeparate(at[H],at[Z],at[oe],at[Se]),M=H,T=Z,R=oe,b=Se),(rt.equals(E)===!1||vt!==L)&&(s.blendColor(rt.r,rt.g,rt.b,vt),E.copy(rt),L=vt),p=D,y=!1}function Ft(D,ie){D.side===Rt?Me(s.CULL_FACE):se(s.CULL_FACE);let H=D.side===gt;ie&&(H=!H),Fe(H),D.blending===Ei&&D.transparent===!1?B(Fn):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),tt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){P!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),P=D)}function ke(D){D!==Iu?(se(s.CULL_FACE),D!==S&&(D===LA?s.cullFace(s.BACK):D===Bu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),S=D}function xe(D){D!==j&&(G&&s.lineWidth(D),j=D)}function tt(D,ie,H){D?(se(s.POLYGON_OFFSET_FILL),(F!==ie||q!==H)&&(s.polygonOffset(ie,H),F=ie,q=H)):Me(s.POLYGON_OFFSET_FILL)}function Pe(D){D?se(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+K-1),$!==D&&(s.activeTexture(D),$=D)}function v(D,ie,H){H===void 0&&($===null?H=s.TEXTURE0+K-1:H=$);let Z=ce[H];Z===void 0&&(Z={type:void 0,texture:void 0},ce[H]=Z),(Z.type!==D||Z.texture!==ie)&&($!==H&&(s.activeTexture(H),$=H),s.bindTexture(D,ie||ge[D]),Z.type=D,Z.texture=ie)}function U(){let D=ce[$];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(D){Je.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Je.copy(D))}function he(D){W.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function He(D,ie){let H=c.get(ie);H===void 0&&(H=new WeakMap,c.set(ie,H));let Z=H.get(D);Z===void 0&&(Z=s.getUniformBlockIndex(ie,D.name),H.set(D,Z))}function Ie(D,ie){let Z=c.get(ie).get(D);A.get(ie)!==Z&&(s.uniformBlockBinding(ie,Z,D.__bindingPointIndex),A.set(ie,Z))}function Xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},$=null,ce={},l={},h=new WeakMap,f=[],m=null,g=!1,p=null,d=null,M=null,T=null,x=null,R=null,b=null,E=new Te(0,0,0),L=0,y=!1,P=null,S=null,j=null,F=null,q=null,Je.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:Me,bindFramebuffer:Ee,drawBuffers:Re,useProgram:st,setBlending:B,setMaterial:Ft,setFlipSided:Fe,setCullFace:ke,setLineWidth:xe,setPolygonOffset:tt,setScissorTest:Pe,activeTexture:C,bindTexture:v,unbindTexture:U,compressedTexImage2D:V,compressedTexImage3D:Y,texImage2D:le,texImage3D:ye,updateUBOMapping:He,uniformBlockBinding:Ie,texStorage2D:Ge,texStorage3D:X,texSubImage2D:Q,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Ce,viewport:he,reset:Xe}}function Lc(s,e,t,n){let i=Mm(n);switch(t){case ru:return s*e;case au:return s*e;case Au:return s*e*2;case ja:return s*e/i.components*i.byteLength;case Ga:return s*e/i.components*i.byteLength;case cu:return s*e*2/i.components*i.byteLength;case qa:return s*e*2/i.components*i.byteLength;case ou:return s*e*3/i.components*i.byteLength;case jt:return s*e*4/i.components*i.byteLength;case Qa:return s*e*4/i.components*i.byteLength;case rr:case or:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ar:case Ar:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zo:case Fo:return Math.max(s,16)*Math.max(e,8)/4;case Uo:case No:return Math.max(s,8)*Math.max(e,8)/2;case ko:case Ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cr:case ia:case sa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case uu:case ra:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oa:case aa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(s){switch(s){case xn:case nu:return{byteLength:1,components:1};case hs:case iu:case Ms:return{byteLength:2,components:1};case ka:case Ha:return{byteLength:2,components:4};case si:case Fa:case $t:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Cm(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,l,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,v){return f?new OffscreenCanvas(C,v):ds("canvas")}function g(C,v,U){let V=1,Y=Pe(C);if((Y.width>U||Y.height>U)&&(V=U/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Q=Math.floor(V*Y.width),ve=Math.floor(V*Y.height);l===void 0&&(l=m(Q,ve));let re=v?m(Q,ve):l;return re.width=Q,re.height=ve,re.getContext("2d").drawImage(C,0,0,Q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+Q+"x"+ve+")."),re}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function p(C){return C.generateMipmaps}function d(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(C,v,U,V,Y=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=v;if(v===s.RED&&(U===s.FLOAT&&(Q=s.R32F),U===s.HALF_FLOAT&&(Q=s.R16F),U===s.UNSIGNED_BYTE&&(Q=s.R8)),v===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(Q=s.R8UI),U===s.UNSIGNED_SHORT&&(Q=s.R16UI),U===s.UNSIGNED_INT&&(Q=s.R32UI),U===s.BYTE&&(Q=s.R8I),U===s.SHORT&&(Q=s.R16I),U===s.INT&&(Q=s.R32I)),v===s.RG&&(U===s.FLOAT&&(Q=s.RG32F),U===s.HALF_FLOAT&&(Q=s.RG16F),U===s.UNSIGNED_BYTE&&(Q=s.RG8)),v===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(Q=s.RG8UI),U===s.UNSIGNED_SHORT&&(Q=s.RG16UI),U===s.UNSIGNED_INT&&(Q=s.RG32UI),U===s.BYTE&&(Q=s.RG8I),U===s.SHORT&&(Q=s.RG16I),U===s.INT&&(Q=s.RG32I)),v===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),U===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),U===s.UNSIGNED_INT&&(Q=s.RGB32UI),U===s.BYTE&&(Q=s.RGB8I),U===s.SHORT&&(Q=s.RGB16I),U===s.INT&&(Q=s.RGB32I)),v===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),U===s.UNSIGNED_INT&&(Q=s.RGBA32UI),U===s.BYTE&&(Q=s.RGBA8I),U===s.SHORT&&(Q=s.RGBA16I),U===s.INT&&(Q=s.RGBA32I)),v===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),v===s.RGBA){let ve=Y?Fr:ze.getTransfer(V);U===s.FLOAT&&(Q=s.RGBA32F),U===s.HALF_FLOAT&&(Q=s.RGBA16F),U===s.UNSIGNED_BYTE&&(Q=ve===Ke?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(C,v){let U;return C?v===null||v===si||v===Ri?U=s.DEPTH24_STENCIL8:v===$t?U=s.DEPTH32F_STENCIL8:v===hs&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===Ri?U=s.DEPTH_COMPONENT24:v===$t?U=s.DEPTH_COMPONENT32F:v===hs&&(U=s.DEPTH_COMPONENT16),U}function R(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==yt&&C.minFilter!==Dt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function b(C){let v=C.target;v.removeEventListener("dispose",b),L(v),v.isVideoTexture&&u.delete(v)}function E(C){let v=C.target;v.removeEventListener("dispose",E),P(v)}function L(C){let v=n.get(C);if(v.__webglInit===void 0)return;let U=C.source,V=h.get(U);if(V){let Y=V[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(C),Object.keys(V).length===0&&h.delete(U)}n.remove(C)}function y(C){let v=n.get(C);s.deleteTexture(v.__webglTexture);let U=C.source,V=h.get(U);delete V[v.__cacheKey],o.memory.textures--}function P(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Y=0;Y<v.__webglFramebuffer[V].length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[V][Y]);else s.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)s.deleteFramebuffer(v.__webglFramebuffer[V]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=C.textures;for(let V=0,Y=U.length;V<Y;V++){let Q=n.get(U[V]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(U[V])}n.remove(C)}let S=0;function j(){S=0}function F(){let C=S;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),S+=1,C}function q(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function K(C,v){let U=n.get(C);if(C.isVideoTexture&&xe(C),C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){let V=C.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(U,C,v);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+v)}function G(C,v){let U=n.get(C);if(C.version>0&&U.__version!==C.version){W(U,C,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+v)}function J(C,v){let U=n.get(C);if(C.version>0&&U.__version!==C.version){W(U,C,v);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+v)}function k(C,v){let U=n.get(C);if(C.version>0&&U.__version!==C.version){te(U,C,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+v)}let $={[ii]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[ls]:s.MIRRORED_REPEAT},ce={[yt]:s.NEAREST,[Na]:s.NEAREST_MIPMAP_NEAREST,[Ci]:s.NEAREST_MIPMAP_LINEAR,[Dt]:s.LINEAR,[As]:s.LINEAR_MIPMAP_NEAREST,[rn]:s.LINEAR_MIPMAP_LINEAR},de={[hl]:s.NEVER,[vl]:s.ALWAYS,[dl]:s.LESS,[du]:s.LEQUAL,[fl]:s.EQUAL,[gl]:s.GEQUAL,[pl]:s.GREATER,[ml]:s.NOTEQUAL};function Le(C,v){if(v.type===$t&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dt||v.magFilter===As||v.magFilter===Ci||v.magFilter===rn||v.minFilter===Dt||v.minFilter===As||v.minFilter===Ci||v.minFilter===rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,$[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ce[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ce[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yt||v.minFilter!==Ci&&v.minFilter!==rn||v.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Je(C,v){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",b));let V=v.source,Y=h.get(V);Y===void 0&&(Y={},h.set(V,Y));let Q=q(v);if(Q!==C.__cacheKey){Y[Q]===void 0&&(Y[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Y[Q].usedTimes++;let ve=Y[C.__cacheKey];ve!==void 0&&(Y[C.__cacheKey].usedTimes--,ve.usedTimes===0&&y(v)),C.__cacheKey=Q,C.__webglTexture=Y[Q].texture}return U}function W(C,v,U){let V=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=s.TEXTURE_3D);let Y=Je(C,v),Q=v.source;t.bindTexture(V,C.__webglTexture,s.TEXTURE0+U);let ve=n.get(Q);if(Q.version!==ve.__version||Y===!0){t.activeTexture(s.TEXTURE0+U);let re=ze.getPrimaries(ze.workingColorSpace),ue=v.colorSpace===Un?null:ze.getPrimaries(v.colorSpace),Ge=v.colorSpace===Un||re===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let X=g(v.image,!1,i.maxTextureSize);X=tt(v,X);let le=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),Ce=T(v.internalFormat,le,ye,v.colorSpace,v.isVideoTexture);Le(V,v);let he,He=v.mipmaps,Ie=v.isVideoTexture!==!0,Xe=ve.__version===void 0||Y===!0,D=Q.dataReady,ie=R(v,X);if(v.isDepthTexture)Ce=x(v.format===Ui,v.type),Xe&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,Ce,X.width,X.height):t.texImage2D(s.TEXTURE_2D,0,Ce,X.width,X.height,0,le,ye,null));else if(v.isDataTexture)if(He.length>0){Ie&&Xe&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,He[0].width,He[0].height);for(let H=0,Z=He.length;H<Z;H++)he=He[H],Ie?D&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,he.width,he.height,le,ye,he.data):t.texImage2D(s.TEXTURE_2D,H,Ce,he.width,he.height,0,le,ye,he.data);v.generateMipmaps=!1}else Ie?(Xe&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,X.width,X.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,X.width,X.height,le,ye,X.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,X.width,X.height,0,le,ye,X.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,He[0].width,He[0].height,X.depth);for(let H=0,Z=He.length;H<Z;H++)if(he=He[H],v.format!==jt)if(le!==null)if(Ie){if(D)if(v.layerUpdates.size>0){let Ae=Lc(he.width,he.height,v.format,v.type);for(let oe of v.layerUpdates){let Se=he.data.subarray(oe*Ae/he.data.BYTES_PER_ELEMENT,(oe+1)*Ae/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,oe,he.width,he.height,1,le,Se)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,X.depth,le,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Ce,he.width,he.height,X.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,X.depth,le,ye,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,Ce,he.width,he.height,X.depth,0,le,ye,he.data)}else{Ie&&Xe&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,He[0].width,He[0].height);for(let H=0,Z=He.length;H<Z;H++)he=He[H],v.format!==jt?le!==null?Ie?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(s.TEXTURE_2D,H,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,he.width,he.height,le,ye,he.data):t.texImage2D(s.TEXTURE_2D,H,Ce,he.width,he.height,0,le,ye,he.data)}else if(v.isDataArrayTexture)if(Ie){if(Xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,X.width,X.height,X.depth),D)if(v.layerUpdates.size>0){let H=Lc(X.width,X.height,v.format,v.type);for(let Z of v.layerUpdates){let Ae=X.data.subarray(Z*H/X.data.BYTES_PER_ELEMENT,(Z+1)*H/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,X.width,X.height,1,le,ye,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,le,ye,X.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,X.width,X.height,X.depth,0,le,ye,X.data);else if(v.isData3DTexture)Ie?(Xe&&t.texStorage3D(s.TEXTURE_3D,ie,Ce,X.width,X.height,X.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,le,ye,X.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,X.width,X.height,X.depth,0,le,ye,X.data);else if(v.isFramebufferTexture){if(Xe)if(Ie)t.texStorage2D(s.TEXTURE_2D,ie,Ce,X.width,X.height);else{let H=X.width,Z=X.height;for(let Ae=0;Ae<ie;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,Ce,H,Z,0,le,ye,null),H>>=1,Z>>=1}}else if(He.length>0){if(Ie&&Xe){let H=Pe(He[0]);t.texStorage2D(s.TEXTURE_2D,ie,Ce,H.width,H.height)}for(let H=0,Z=He.length;H<Z;H++)he=He[H],Ie?D&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,le,ye,he):t.texImage2D(s.TEXTURE_2D,H,Ce,le,ye,he);v.generateMipmaps=!1}else if(Ie){if(Xe){let H=Pe(X);t.texStorage2D(s.TEXTURE_2D,ie,Ce,H.width,H.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,ye,X)}else t.texImage2D(s.TEXTURE_2D,0,Ce,le,ye,X);p(v)&&d(V),ve.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function te(C,v,U){if(v.image.length!==6)return;let V=Je(C,v),Y=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+U);let Q=n.get(Y);if(Y.version!==Q.__version||V===!0){t.activeTexture(s.TEXTURE0+U);let ve=ze.getPrimaries(ze.workingColorSpace),re=v.colorSpace===Un?null:ze.getPrimaries(v.colorSpace),ue=v.colorSpace===Un||ve===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Ge=v.isCompressedTexture||v.image[0].isCompressedTexture,X=v.image[0]&&v.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!Ge&&!X?le[Z]=g(v.image[Z],!0,i.maxCubemapSize):le[Z]=X?v.image[Z].image:v.image[Z],le[Z]=tt(v,le[Z]);let ye=le[0],Ce=r.convert(v.format,v.colorSpace),he=r.convert(v.type),He=T(v.internalFormat,Ce,he,v.colorSpace),Ie=v.isVideoTexture!==!0,Xe=Q.__version===void 0||V===!0,D=Y.dataReady,ie=R(v,ye);Le(s.TEXTURE_CUBE_MAP,v);let H;if(Ge){Ie&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,He,ye.width,ye.height);for(let Z=0;Z<6;Z++){H=le[Z].mipmaps;for(let Ae=0;Ae<H.length;Ae++){let oe=H[Ae];v.format!==jt?Ce!==null?Ie?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,oe.width,oe.height,Ce,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,He,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,0,0,oe.width,oe.height,Ce,he,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae,He,oe.width,oe.height,0,Ce,he,oe.data)}}}else{if(H=v.mipmaps,Ie&&Xe){H.length>0&&ie++;let Z=Pe(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(X){Ie?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,Ce,he,le[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,le[Z].width,le[Z].height,0,Ce,he,le[Z].data);for(let Ae=0;Ae<H.length;Ae++){let Se=H[Ae].image[Z].image;Ie?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,Se.width,Se.height,Ce,he,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,He,Se.width,Se.height,0,Ce,he,Se.data)}}else{Ie?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,he,le[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Ce,he,le[Z]);for(let Ae=0;Ae<H.length;Ae++){let oe=H[Ae];Ie?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,0,0,Ce,he,oe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ae+1,He,Ce,he,oe.image[Z])}}}p(v)&&d(s.TEXTURE_CUBE_MAP),Q.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ge(C,v,U,V,Y,Q){let ve=r.convert(U.format,U.colorSpace),re=r.convert(U.type),ue=T(U.internalFormat,ve,re,U.colorSpace),Ge=n.get(v),X=n.get(U);if(X.__renderTarget=v,!Ge.__hasExternalTextures){let le=Math.max(1,v.width>>Q),ye=Math.max(1,v.height>>Q);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?t.texImage3D(Y,Q,ue,le,ye,v.depth,0,ve,re,null):t.texImage2D(Y,Q,ue,le,ye,0,ve,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),ke(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Y,X.__webglTexture,0,Fe(v)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Y,X.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(C,v,U){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){let V=v.depthTexture,Y=V&&V.isDepthTexture?V.type:null,Q=x(v.stencilBuffer,Y),ve=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=Fe(v);ke(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,Q,v.width,v.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,Q,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Q,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,C)}else{let V=v.textures;for(let Y=0;Y<V.length;Y++){let Q=V[Y],ve=r.convert(Q.format,Q.colorSpace),re=r.convert(Q.type),ue=T(Q.internalFormat,ve,re,Q.colorSpace),Ge=Fe(v);U&&ke(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,ue,v.width,v.height):ke(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,ue,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ue,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let Y=V.__webglTexture,Q=Fe(v);if(v.depthTexture.format===Si)ke(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Y,0);else if(v.depthTexture.format===Ui)ke(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ee(C){let v=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=V}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Me(v.__webglFramebuffer,C)}else if(U){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=s.createRenderbuffer(),se(v.__webglDepthbuffer[V],C,!1);else{let Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),se(v.__webglDepthbuffer,C,!1);else{let V=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,Y)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(C,v,U){let V=n.get(C);v!==void 0&&ge(V.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ee(C)}function st(C){let v=C.texture,U=n.get(C),V=n.get(v);C.addEventListener("dispose",E);let Y=C.textures,Q=C.isWebGLCubeRenderTarget===!0,ve=Y.length>1;if(ve||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=v.version,o.memory.textures++),Q){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let ue=0;ue<v.mipmaps.length;ue++)U.__webglFramebuffer[re][ue]=s.createFramebuffer()}else U.__webglFramebuffer[re]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)U.__webglFramebuffer[re]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ve)for(let re=0,ue=Y.length;re<ue;re++){let Ge=n.get(Y[re]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ke(C)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<Y.length;re++){let ue=Y[re];U.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[re]);let Ge=r.convert(ue.format,ue.colorSpace),X=r.convert(ue.type),le=T(ue.internalFormat,Ge,X,ue.colorSpace,C.isXRRenderTarget===!0),ye=Fe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,le,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,U.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),se(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Le(s.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ge(U.__webglFramebuffer[re][ue],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else ge(U.__webglFramebuffer[re],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(v)&&d(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,ue=Y.length;re<ue;re++){let Ge=Y[re],X=n.get(Ge);t.bindTexture(s.TEXTURE_2D,X.__webglTexture),Le(s.TEXTURE_2D,Ge),ge(U.__webglFramebuffer,C,Ge,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),p(Ge)&&d(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,V.__webglTexture),Le(re,v),v.mipmaps&&v.mipmaps.length>0)for(let ue=0;ue<v.mipmaps.length;ue++)ge(U.__webglFramebuffer[ue],C,v,s.COLOR_ATTACHMENT0,re,ue);else ge(U.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,re,0);p(v)&&d(re),t.unbindTexture()}C.depthBuffer&&Ee(C)}function je(C){let v=C.textures;for(let U=0,V=v.length;U<V;U++){let Y=v[U];if(p(Y)){let Q=M(C),ve=n.get(Y).__webglTexture;t.bindTexture(Q,ve),d(Q),t.unbindTexture()}}}let at=[],B=[];function Ft(C){if(C.samples>0){if(ke(C)===!1){let v=C.textures,U=C.width,V=C.height,Y=s.COLOR_BUFFER_BIT,Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(C),re=v.length>1;if(re)for(let ue=0;ue<v.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);let Ge=n.get(v[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,U,V,0,0,U,V,Y,s.NEAREST),A===!0&&(at.length=0,B.length=0,at.push(s.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(at.push(Q),B.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<v.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);let Ge=n.get(v[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&A){let v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Fe(C){return Math.min(i.maxSamples,C.samples)}function ke(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function tt(C,v){let U=C.colorSpace,V=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Mt&&U!==Un&&(ze.getTransfer(U)===Ke?(V!==jt||Y!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Re,this.setupRenderTarget=st,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ke}function bm(s,e){function t(n,i=Un){let r,o=ze.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return s.UNSIGNED_SHORT_5_5_5_1;if(n===su)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return s.BYTE;if(n===iu)return s.SHORT;if(n===hs)return s.UNSIGNED_SHORT;if(n===Fa)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===$t)return s.FLOAT;if(n===Ms)return s.HALF_FLOAT;if(n===ru)return s.ALPHA;if(n===ou)return s.RGB;if(n===jt)return s.RGBA;if(n===au)return s.LUMINANCE;if(n===Au)return s.LUMINANCE_ALPHA;if(n===Si)return s.DEPTH_COMPONENT;if(n===Ui)return s.DEPTH_STENCIL;if(n===ja)return s.RED;if(n===Ga)return s.RED_INTEGER;if(n===cu)return s.RG;if(n===qa)return s.RG_INTEGER;if(n===Qa)return s.RGBA_INTEGER;if(n===rr||n===or||n===ar||n===Ar)if(o===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===zo||n===No||n===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Ho||n===jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Ho)return o===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Go||n===qo||n===Qo||n===Wo||n===Vo||n===Zo||n===Yo||n===Ko||n===Jo||n===Xo||n===$o||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cr||n===ia||n===sa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cr)return o===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===ra||n===oa||n===aa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ya=class extends ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Gt=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Em={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,A=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,n),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],l=c.joints["thumb-tip"],h=u.position.distanceTo(l.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else A!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(A.matrix.fromArray(r.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,r.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(r.linearVelocity)):A.hasLinearVelocity=!1,r.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(r.angularVelocity)):A.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return a!==null&&(a.visible=i!==null),A!==null&&(A.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dm=`
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

}`,Ta=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new an({vertexShader:Sm,fragmentShader:Dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ma=class extends Hn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",A=1,c=null,u=null,l=null,h=null,f=null,m=null,g=new Ta,p=t.getContextAttributes(),d=null,M=null,T=[],x=[],R=new Ne,b=null,E=new ut;E.viewport=new Qe;let L=new ut;L.viewport=new Qe;let y=[E,L],P=new ya,S=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=T[W];return te===void 0&&(te=new us,T[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=T[W];return te===void 0&&(te=new us,T[W]=te),te.getGripSpace()},this.getHand=function(W){let te=T[W];return te===void 0&&(te=new us,T[W]=te),te.getHandSpace()};function F(W){let te=x.indexOf(W.inputSource);if(te===-1)return;let ge=T[te];ge!==void 0&&(ge.update(W.inputSource,W.frame,c||o),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",K);for(let W=0;W<T.length;W++){let te=x[W];te!==null&&(x[W]=null,T[W].disconnect(te))}S=null,j=null,g.reset(),e.setRenderTarget(d),f=null,h=null,l=null,i=null,M=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return l},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new yn(f.framebufferWidth,f.framebufferHeight,{format:jt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ge=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?Ui:Si,ge=p.stencil?Ri:si);let Me={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};l=new XRWebGLBinding(i,t),h=l.createProjectionLayer(Me),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new yn(h.textureWidth,h.textureHeight,{format:jt,type:xn,depthTexture:new vr(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(A),c=null,o=await i.requestReferenceSpace(a),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(W){for(let te=0;te<W.removed.length;te++){let ge=W.removed[te],se=x.indexOf(ge);se>=0&&(x[se]=null,T[se].disconnect(ge))}for(let te=0;te<W.added.length;te++){let ge=W.added[te],se=x.indexOf(ge);if(se===-1){for(let Ee=0;Ee<T.length;Ee++)if(Ee>=x.length){x.push(ge),se=Ee;break}else if(x[Ee]===null){x[Ee]=ge,se=Ee;break}if(se===-1)break}let Me=T[se];Me&&Me.connect(ge)}}let G=new _,J=new _;function k(W,te,ge){G.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(ge.matrixWorld);let se=G.distanceTo(J),Me=te.projectionMatrix.elements,Ee=ge.projectionMatrix.elements,Re=Me[14]/(Me[10]-1),st=Me[14]/(Me[10]+1),je=(Me[9]+1)/Me[5],at=(Me[9]-1)/Me[5],B=(Me[8]-1)/Me[0],Ft=(Ee[8]+1)/Ee[0],Fe=Re*B,ke=Re*Ft,xe=se/(-B+Ft),tt=xe*-B;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(tt),W.translateZ(xe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Me[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Pe=Re+xe,C=st+xe,v=Fe-tt,U=ke+(se-tt),V=je*st/C*Pe,Y=at*st/C*Pe;W.projectionMatrix.makePerspective(v,U,V,Y,Pe,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let te=W.near,ge=W.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),P.near=L.near=E.near=te,P.far=L.far=E.far=ge,(S!==P.near||j!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),S=P.near,j=P.far),E.layers.mask=W.layers.mask|2,L.layers.mask=W.layers.mask|4,P.layers.mask=E.layers.mask|L.layers.mask;let se=W.parent,Me=P.cameras;$(P,se);for(let Ee=0;Ee<Me.length;Ee++)$(Me[Ee],se);Me.length===2?k(P,E,L):P.projectionMatrix.copy(E.projectionMatrix),ce(W,P,se)};function ce(W,te,ge){ge===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Fi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&f===null))return A},this.setFoveation=function(W){A=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)};let de=null;function Le(W,te){if(u=te.getViewerPose(c||o),m=te,u!==null){let ge=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let se=!1;ge.length!==P.cameras.length&&(P.cameras.length=0,se=!0);for(let Ee=0;Ee<ge.length;Ee++){let Re=ge[Ee],st=null;if(f!==null)st=f.getViewport(Re);else{let at=l.getViewSubImage(h,Re);st=at.viewport,Ee===0&&(e.setRenderTargetTextures(M,at.colorTexture,h.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(M))}let je=y[Ee];je===void 0&&(je=new ut,je.layers.enable(Ee),je.viewport=new Qe,y[Ee]=je),je.matrix.fromArray(Re.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Re.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(st.x,st.y,st.width,st.height),Ee===0&&(P.matrix.copy(je.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),se===!0&&P.cameras.push(je)}let Me=i.enabledFeatures;if(Me&&Me.includes("depth-sensing")){let Ee=l.getDepthInformation(ge[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(e,Ee,i.renderState)}}for(let ge=0;ge<T.length;ge++){let se=x[ge],Me=T[ge];se!==null&&Me!==void 0&&Me.update(se,te,c||o)}de&&de(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let Je=new gu;Je.setAnimationLoop(Le),this.setAnimationLoop=function(W){de=W},this.dispose=function(){}}},$n=new on,_m=new Oe;function Om(s,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,mu(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,M,T,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),l(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?A(p,d,M,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===gt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===gt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d),T=M.envMap,x=M.envMapRotation;T&&(p.envMap.value=T,$n.copy(x),$n.x*=-1,$n.y*=-1,$n.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),p.envMapRotation.value.setFromMatrix4(_m.makeRotationFromEuler($n)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function A(p,d,M,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function l(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Im(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function A(M,T){let x=T.program;n.uniformBlockBinding(M,x)}function c(M,T){let x=i[M.id];x===void 0&&(m(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",p));let R=T.program;n.updateUBOMapping(M,R);let b=e.render.frame;r[M.id]!==b&&(h(M),r[M.id]=b)}function u(M){let T=l();M.__bindingPointIndex=T;let x=s.createBuffer(),R=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,x),x}function l(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let T=i[M.id],x=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let b=0,E=x.length;b<E;b++){let L=Array.isArray(x[b])?x[b]:[x[b]];for(let y=0,P=L.length;y<P;y++){let S=L[y];if(f(S,b,y,R)===!0){let j=S.__offset,F=Array.isArray(S.value)?S.value:[S.value],q=0;for(let K=0;K<F.length;K++){let G=F[K],J=g(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,j+q,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,T,x,R){let b=M.value,E=T+"_"+x;if(R[E]===void 0)return typeof b=="number"||typeof b=="boolean"?R[E]=b:R[E]=b.clone(),!0;{let L=R[E];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return R[E]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function m(M){let T=M.uniforms,x=0,R=16;for(let E=0,L=T.length;E<L;E++){let y=Array.isArray(T[E])?T[E]:[T[E]];for(let P=0,S=y.length;P<S;P++){let j=y[P],F=Array.isArray(j.value)?j.value:[j.value];for(let q=0,K=F.length;q<K;q++){let G=F[q],J=g(G),k=x%R,$=k%J.boundary,ce=k+$;x+=$,ce!==0&&R-ce<J.storage&&(x+=R-ce),j.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=x,x+=J.storage}}}let b=x%R;return b>0&&(x+=R-b),M.__size=x,M.__cache={},this}function g(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),T}function p(M){let T=M.target;T.removeEventListener("dispose",p);let x=o.indexOf(T.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function d(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:A,update:c,dispose:d}}var wr=class{constructor(e={}){let{canvas:t=Rl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),g=new Int32Array(4),p=null,d=null,M=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this.toneMapping=kn,this.toneMappingExposure=1;let x=this,R=!1,b=0,E=0,L=null,y=-1,P=null,S=new Qe,j=new Qe,F=null,q=new Te(0),K=0,G=t.width,J=t.height,k=1,$=null,ce=null,de=new Qe(0,0,G,J),Le=new Qe(0,0,G,J),Je=!1,W=new ps,te=!1,ge=!1,se=new Oe,Me=new Oe,Ee=new _,Re=new Qe,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function at(){return L===null?k:1}let B=n;function Ft(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:A,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",oe,!1),B===null){let O="webgl2";if(B=Ft(O,w),B===null)throw Ft(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Fe,ke,xe,tt,Pe,C,v,U,V,Y,Q,ve,re,ue,Ge,X,le,ye,Ce,he,He,Ie,Xe,D;function ie(){Fe=new Zf(B),Fe.init(),Ie=new bm(B,Fe),ke=new jf(B,Fe,e,Ie),xe=new Tm(B,Fe),ke.reverseDepthBuffer&&h&&xe.buffers.depth.setReversed(!0),tt=new Jf(B),Pe=new um,C=new Cm(B,Fe,xe,Pe,ke,Ie,tt),v=new qf(x),U=new Vf(x),V=new ih(B),Xe=new kf(B,V),Y=new Yf(B,V,tt,Xe),Q=new $f(B,Y,V,tt),Ce=new Xf(B,ke,C),X=new Gf(Pe),ve=new cm(x,v,U,Fe,ke,Xe,X),re=new Om(x,Pe),ue=new hm,Ge=new vm(Fe),ye=new Ff(x,v,U,xe,Q,f,A),le=new xm(x,Q,ke),D=new Im(B,tt,ke,xe),he=new Hf(B,Fe,tt),He=new Kf(B,Fe,tt),tt.programs=ve.programs,x.capabilities=ke,x.extensions=Fe,x.properties=Pe,x.renderLists=ue,x.shadowMap=le,x.state=xe,x.info=tt}ie();let H=new Ma(x,B);this.xr=H,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(G,J,!1))},this.getSize=function(w){return w.set(G,J)},this.setSize=function(w,O,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,J=O,t.width=Math.floor(w*k),t.height=Math.floor(O*k),z===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(G*k,J*k).floor()},this.setDrawingBufferSize=function(w,O,z){G=w,J=O,k=z,t.width=Math.floor(w*z),t.height=Math.floor(O*z),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(de)},this.setViewport=function(w,O,z,N){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,O,z,N),xe.viewport(S.copy(de).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,O,z,N){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,O,z,N),xe.scissor(j.copy(Le).multiplyScalar(k).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(w){xe.setScissorTest(Je=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ce=w},this.getClearColor=function(w){return w.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(w=!0,O=!0,z=!0){let N=0;if(w){let I=!1;if(L!==null){let ee=L.texture.format;I=ee===Qa||ee===qa||ee===Ga}if(I){let ee=L.texture.type,ae=ee===xn||ee===si||ee===hs||ee===Ri||ee===ka||ee===Ha,fe=ye.getClearColor(),pe=ye.getClearAlpha(),be=fe.r,De=fe.g,me=fe.b;ae?(m[0]=be,m[1]=De,m[2]=me,m[3]=pe,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=be,g[1]=De,g[2]=me,g[3]=pe,B.clearBufferiv(B.COLOR,0,g))}else N|=B.COLOR_BUFFER_BIT}O&&(N|=B.DEPTH_BUFFER_BIT),z&&(N|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),Ge.dispose(),Pe.dispose(),v.dispose(),U.dispose(),Q.dispose(),Xe.dispose(),D.dispose(),ve.dispose(),H.dispose(),H.removeEventListener("sessionstart",bA),H.removeEventListener("sessionend",EA),Vn.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=tt.autoReset,O=le.enabled,z=le.autoUpdate,N=le.needsUpdate,I=le.type;ie(),tt.autoReset=w,le.enabled=O,le.autoUpdate=z,le.needsUpdate=N,le.type=I}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Se(w){let O=w.target;O.removeEventListener("dispose",Se),rt(O)}function rt(w){vt(w),Pe.remove(w)}function vt(w){let O=Pe.get(w).programs;O!==void 0&&(O.forEach(function(z){ve.releaseProgram(z)}),w.isShaderMaterial&&ve.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,z,N,I,ee){O===null&&(O=st);let ae=I.isMesh&&I.matrixWorld.determinant()<0,fe=Du(w,O,z,N,I);xe.setMaterial(N,ae);let pe=z.index,be=1;if(N.wireframe===!0){if(pe=Y.getWireframeAttribute(z),pe===void 0)return;be=2}let De=z.drawRange,me=z.attributes.position,qe=De.start*be,$e=(De.start+De.count)*be;ee!==null&&(qe=Math.max(qe,ee.start*be),$e=Math.min($e,(ee.start+ee.count)*be)),pe!==null?(qe=Math.max(qe,0),$e=Math.min($e,pe.count)):me!=null&&(qe=Math.max(qe,0),$e=Math.min($e,me.count));let nt=$e-qe;if(nt<0||nt===1/0)return;Xe.setup(I,N,fe,z,pe);let St,We=he;if(pe!==null&&(St=V.get(pe),We=He,We.setIndex(St)),I.isMesh)N.wireframe===!0?(xe.setLineWidth(N.wireframeLinewidth*at()),We.setMode(B.LINES)):We.setMode(B.TRIANGLES);else if(I.isLine){let we=N.linewidth;we===void 0&&(we=1),xe.setLineWidth(we*at()),I.isLineSegments?We.setMode(B.LINES):I.isLineLoop?We.setMode(B.LINE_LOOP):We.setMode(B.LINE_STRIP)}else I.isPoints?We.setMode(B.POINTS):I.isSprite&&We.setMode(B.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)We.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))We.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let we=I._multiDrawStarts,cn=I._multiDrawCounts,Ve=I._multiDrawCount,Zt=pe?V.get(pe).bytesPerElement:1,ci=Pe.get(N).currentProgram.getUniforms();for(let It=0;It<Ve;It++)ci.setValue(B,"_gl_DrawID",It),We.render(we[It]/Zt,cn[It])}else if(I.isInstancedMesh)We.renderInstances(qe,nt,I.count);else if(z.isInstancedBufferGeometry){let we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,cn=Math.min(z.instanceCount,we);We.renderInstances(qe,nt,cn)}else We.render(qe,nt)};function Ze(w,O,z){w.transparent===!0&&w.side===Rt&&w.forceSinglePass===!1?(w.side=gt,w.needsUpdate=!0,Ss(w,O,z),w.side=qt,w.needsUpdate=!0,Ss(w,O,z),w.side=Rt):Ss(w,O,z)}this.compile=function(w,O,z=null){z===null&&(z=w),d=Ge.get(z),d.init(O),T.push(d),z.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),w!==z&&w.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights();let N=new Set;return w.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let ee=I.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){let fe=ee[ae];Ze(fe,z,I),N.add(fe)}else Ze(ee,z,I),N.add(ee)}),T.pop(),d=null,N},this.compileAsync=function(w,O,z=null){let N=this.compile(w,O,z);return new Promise(I=>{function ee(){if(N.forEach(function(ae){Pe.get(ae).currentProgram.isReady()&&N.delete(ae)}),N.size===0){I(w);return}setTimeout(ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Vt=null;function An(w){Vt&&Vt(w)}function bA(){Vn.stop()}function EA(){Vn.start()}let Vn=new gu;Vn.setAnimationLoop(An),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(w){Vt=w,H.setAnimationLoop(w),w===null?Vn.stop():Vn.start()},H.addEventListener("sessionstart",bA),H.addEventListener("sessionend",EA),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(O),O=H.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,L),d=Ge.get(w,T.length),d.init(O),T.push(d),Me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),W.setFromProjectionMatrix(Me),ge=this.localClippingEnabled,te=X.init(this.clippingPlanes,ge),p=ue.get(w,M.length),p.init(),M.push(p),H.enabled===!0&&H.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&qr(ee,O,-1/0,x.sortObjects)}qr(w,O,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort($,ce),je=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,je&&ye.addToRenderList(p,w),this.info.render.frame++,te===!0&&X.beginShadows();let z=d.state.shadowsArray;le.render(z,w,O),te===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();let N=p.opaque,I=p.transmissive;if(d.setupLights(),O.isArrayCamera){let ee=O.cameras;if(I.length>0)for(let ae=0,fe=ee.length;ae<fe;ae++){let pe=ee[ae];DA(N,I,w,pe)}je&&ye.render(w);for(let ae=0,fe=ee.length;ae<fe;ae++){let pe=ee[ae];SA(p,w,pe,pe.viewport)}}else I.length>0&&DA(N,I,w,O),je&&ye.render(w),SA(p,w,O);L!==null&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,O),Xe.resetDefaultState(),y=-1,P=null,T.pop(),T.length>0?(d=T[T.length-1],te===!0&&X.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function qr(w,O,z,N){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){N&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);let ae=Q.update(w),fe=w.material;fe.visible&&p.push(w,ae,fe,z,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){let ae=Q.update(w),fe=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Re.copy(ae.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(fe)){let pe=ae.groups;for(let be=0,De=pe.length;be<De;be++){let me=pe[be],qe=fe[me.materialIndex];qe&&qe.visible&&p.push(w,ae,qe,z,Re.z,me)}}else fe.visible&&p.push(w,ae,fe,z,Re.z,null)}}let ee=w.children;for(let ae=0,fe=ee.length;ae<fe;ae++)qr(ee[ae],O,z,N)}function SA(w,O,z,N){let I=w.opaque,ee=w.transmissive,ae=w.transparent;d.setupLightsView(z),te===!0&&X.setGlobalState(x.clippingPlanes,z),N&&xe.viewport(S.copy(N)),I.length>0&&Es(I,O,z),ee.length>0&&Es(ee,O,z),ae.length>0&&Es(ae,O,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function DA(w,O,z,N){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[N.id]===void 0&&(d.state.transmissionRenderTarget[N.id]=new yn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Ms:xn,minFilter:rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let ee=d.state.transmissionRenderTarget[N.id],ae=N.viewport||S;ee.setSize(ae.z,ae.w);let fe=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(q),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),je&&ye.render(z);let pe=x.toneMapping;x.toneMapping=kn;let be=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),d.setupLightsView(N),te===!0&&X.setGlobalState(x.clippingPlanes,N),Es(w,z,N),C.updateMultisampleRenderTarget(ee),C.updateRenderTargetMipmap(ee),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let me=0,qe=O.length;me<qe;me++){let $e=O[me],nt=$e.object,St=$e.geometry,We=$e.material,we=$e.group;if(We.side===Rt&&nt.layers.test(N.layers)){let cn=We.side;We.side=gt,We.needsUpdate=!0,_A(nt,z,N,St,We,we),We.side=cn,We.needsUpdate=!0,De=!0}}De===!0&&(C.updateMultisampleRenderTarget(ee),C.updateRenderTargetMipmap(ee))}x.setRenderTarget(fe),x.setClearColor(q,K),be!==void 0&&(N.viewport=be),x.toneMapping=pe}function Es(w,O,z){let N=O.isScene===!0?O.overrideMaterial:null;for(let I=0,ee=w.length;I<ee;I++){let ae=w[I],fe=ae.object,pe=ae.geometry,be=N===null?ae.material:N,De=ae.group;fe.layers.test(z.layers)&&_A(fe,O,z,pe,be,De)}}function _A(w,O,z,N,I,ee){w.onBeforeRender(x,O,z,N,I,ee),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),I.onBeforeRender(x,O,z,N,w,ee),I.transparent===!0&&I.side===Rt&&I.forceSinglePass===!1?(I.side=gt,I.needsUpdate=!0,x.renderBufferDirect(z,O,N,I,w,ee),I.side=qt,I.needsUpdate=!0,x.renderBufferDirect(z,O,N,I,w,ee),I.side=Rt):x.renderBufferDirect(z,O,N,I,w,ee),w.onAfterRender(x,O,z,N,I,ee)}function Ss(w,O,z){O.isScene!==!0&&(O=st);let N=Pe.get(w),I=d.state.lights,ee=d.state.shadowsArray,ae=I.state.version,fe=ve.getParameters(w,I.state,ee,O,z),pe=ve.getProgramCacheKey(fe),be=N.programs;N.environment=w.isMeshStandardMaterial?O.environment:null,N.fog=O.fog,N.envMap=(w.isMeshStandardMaterial?U:v).get(w.envMap||N.environment),N.envMapRotation=N.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",Se),be=new Map,N.programs=be);let De=be.get(pe);if(De!==void 0){if(N.currentProgram===De&&N.lightsStateVersion===ae)return IA(w,fe),De}else fe.uniforms=ve.getUniforms(w),w.onBeforeCompile(fe,x),De=ve.acquireProgram(fe,pe),be.set(pe,De),N.uniforms=fe.uniforms;let me=N.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(me.clippingPlanes=X.uniform),IA(w,fe),N.needsLights=Ou(w),N.lightsStateVersion=ae,N.needsLights&&(me.ambientLightColor.value=I.state.ambient,me.lightProbe.value=I.state.probe,me.directionalLights.value=I.state.directional,me.directionalLightShadows.value=I.state.directionalShadow,me.spotLights.value=I.state.spot,me.spotLightShadows.value=I.state.spotShadow,me.rectAreaLights.value=I.state.rectArea,me.ltc_1.value=I.state.rectAreaLTC1,me.ltc_2.value=I.state.rectAreaLTC2,me.pointLights.value=I.state.point,me.pointLightShadows.value=I.state.pointShadow,me.hemisphereLights.value=I.state.hemi,me.directionalShadowMap.value=I.state.directionalShadowMap,me.directionalShadowMatrix.value=I.state.directionalShadowMatrix,me.spotShadowMap.value=I.state.spotShadowMap,me.spotLightMatrix.value=I.state.spotLightMatrix,me.spotLightMap.value=I.state.spotLightMap,me.pointShadowMap.value=I.state.pointShadowMap,me.pointShadowMatrix.value=I.state.pointShadowMatrix),N.currentProgram=De,N.uniformsList=null,De}function OA(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Oi.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function IA(w,O){let z=Pe.get(w);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.batchingColor=O.batchingColor,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.instancingMorph=O.instancingMorph,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function Du(w,O,z,N,I){O.isScene!==!0&&(O=st),C.resetTextureUnits();let ee=O.fog,ae=N.isMeshStandardMaterial?O.environment:null,fe=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mt,pe=(N.isMeshStandardMaterial?U:v).get(N.envMap||ae),be=N.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),me=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,$e=!!z.morphAttributes.color,nt=kn;N.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(nt=x.toneMapping);let St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,We=St!==void 0?St.length:0,we=Pe.get(N),cn=d.state.lights;if(te===!0&&(ge===!0||w!==P)){let kt=w===P&&N.id===y;X.setState(N,w,kt)}let Ve=!1;N.version===we.__version?(we.needsLights&&we.lightsStateVersion!==cn.state.version||we.outputColorSpace!==fe||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==pe||N.fog===!0&&we.fog!==ee||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==X.numPlanes||we.numIntersection!==X.numIntersection)||we.vertexAlphas!==be||we.vertexTangents!==De||we.morphTargets!==me||we.morphNormals!==qe||we.morphColors!==$e||we.toneMapping!==nt||we.morphTargetsCount!==We)&&(Ve=!0):(Ve=!0,we.__version=N.version);let Zt=we.currentProgram;Ve===!0&&(Zt=Ss(N,O,I));let ci=!1,It=!1,Ki=!1,it=Zt.getUniforms(),nn=we.uniforms;if(xe.useProgram(Zt.program)&&(ci=!0,It=!0,Ki=!0),N.id!==y&&(y=N.id,It=!0),ci||P!==w){xe.buffers.depth.getReversed()?(se.copy(w.projectionMatrix),zl(se),Nl(se),it.setValue(B,"projectionMatrix",se)):it.setValue(B,"projectionMatrix",w.projectionMatrix),it.setValue(B,"viewMatrix",w.matrixWorldInverse);let Sn=it.map.cameraPosition;Sn!==void 0&&Sn.setValue(B,Ee.setFromMatrixPosition(w.matrixWorld)),ke.logarithmicDepthBuffer&&it.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&it.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),P!==w&&(P=w,It=!0,Ki=!0)}if(I.isSkinnedMesh){it.setOptional(B,I,"bindMatrix"),it.setOptional(B,I,"bindMatrixInverse");let kt=I.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),it.setValue(B,"boneTexture",kt.boneTexture,C))}I.isBatchedMesh&&(it.setOptional(B,I,"batchingTexture"),it.setValue(B,"batchingTexture",I._matricesTexture,C),it.setOptional(B,I,"batchingIdTexture"),it.setValue(B,"batchingIdTexture",I._indirectTexture,C),it.setOptional(B,I,"batchingColorTexture"),I._colorsTexture!==null&&it.setValue(B,"batchingColorTexture",I._colorsTexture,C));let Ji=z.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Ce.update(I,z,Zt),(It||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,it.setValue(B,"receiveShadow",I.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(nn.envMap.value=pe,nn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&O.environment!==null&&(nn.envMapIntensity.value=O.environmentIntensity),It&&(it.setValue(B,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&_u(nn,Ki),ee&&N.fog===!0&&re.refreshFogUniforms(nn,ee),re.refreshMaterialUniforms(nn,N,k,J,d.state.transmissionRenderTarget[w.id]),Oi.upload(B,OA(we),nn,C)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Oi.upload(B,OA(we),nn,C),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&it.setValue(B,"center",I.center),it.setValue(B,"modelViewMatrix",I.modelViewMatrix),it.setValue(B,"normalMatrix",I.normalMatrix),it.setValue(B,"modelMatrix",I.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let kt=N.uniformsGroups;for(let Sn=0,Dn=kt.length;Sn<Dn;Sn++){let BA=kt[Sn];D.update(BA,Zt),D.bind(BA,Zt)}}return Zt}function _u(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ou(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,O,z){Pe.get(w.texture).__webglTexture=O,Pe.get(w.depthTexture).__webglTexture=z;let N=Pe.get(w);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=z===void 0,N.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){let z=Pe.get(w);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,z=0){L=w,b=O,E=z;let N=!0,I=null,ee=!1,ae=!1;if(w){let pe=Pe.get(w);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(B.FRAMEBUFFER,null),N=!1;else if(pe.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(pe.__hasExternalTextures)C.rebindTextures(w,Pe.get(w.texture).__webglTexture,Pe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let me=w.depthTexture;if(pe.__boundDepthTexture!==me){if(me!==null&&Pe.has(me)&&(w.width!==me.image.width||w.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ae=!0);let De=Pe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[O])?I=De[O][z]:I=De[O],ee=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?I=Pe.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?I=De[z]:I=De,S.copy(w.viewport),j.copy(w.scissor),F=w.scissorTest}else S.copy(de).multiplyScalar(k).floor(),j.copy(Le).multiplyScalar(k).floor(),F=Je;if(xe.bindFramebuffer(B.FRAMEBUFFER,I)&&N&&xe.drawBuffers(w,I),xe.viewport(S),xe.scissor(j),xe.setScissorTest(F),ee){let pe=Pe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,pe.__webglTexture,z)}else if(ae){let pe=Pe.get(w.texture),be=O||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,pe.__webglTexture,z||0,be)}y=-1},this.readRenderTargetPixels=function(w,O,z,N,I,ee,ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){xe.bindFramebuffer(B.FRAMEBUFFER,fe);try{let pe=w.texture,be=pe.format,De=pe.type;if(!ke.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-N&&z>=0&&z<=w.height-I&&B.readPixels(O,z,N,I,Ie.convert(be),Ie.convert(De),ee)}finally{let pe=L!==null?Pe.get(L).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(w,O,z,N,I,ee,ae){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Pe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){let pe=w.texture,be=pe.format,De=pe.type;if(!ke.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-N&&z>=0&&z<=w.height-I){xe.bindFramebuffer(B.FRAMEBUFFER,fe);let me=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,me),B.bufferData(B.PIXEL_PACK_BUFFER,ee.byteLength,B.STREAM_READ),B.readPixels(O,z,N,I,Ie.convert(be),Ie.convert(De),0);let qe=L!==null?Pe.get(L).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,qe);let $e=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ul(B,$e,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,me),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ee),B.deleteBuffer(me),B.deleteSync($e),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,z=0){w.isTexture!==!0&&(os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);let N=Math.pow(2,-z),I=Math.floor(w.image.width*N),ee=Math.floor(w.image.height*N),ae=O!==null?O.x:0,fe=O!==null?O.y:0;C.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,z,0,0,ae,fe,I,ee),xe.unbindTexture()},this.copyTextureToTexture=function(w,O,z=null,N=null,I=0){w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1],O=arguments[2],I=arguments[3]||0,z=null);let ee,ae,fe,pe,be,De,me,qe,$e,nt=w.isCompressedTexture?w.mipmaps[I]:w.image;z!==null?(ee=z.max.x-z.min.x,ae=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,pe=z.min.x,be=z.min.y,De=z.isBox3?z.min.z:0):(ee=nt.width,ae=nt.height,fe=nt.depth||1,pe=0,be=0,De=0),N!==null?(me=N.x,qe=N.y,$e=N.z):(me=0,qe=0,$e=0);let St=Ie.convert(O.format),We=Ie.convert(O.type),we;O.isData3DTexture?(C.setTexture3D(O,0),we=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),we=B.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),we=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let cn=B.getParameter(B.UNPACK_ROW_LENGTH),Ve=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Zt=B.getParameter(B.UNPACK_SKIP_PIXELS),ci=B.getParameter(B.UNPACK_SKIP_ROWS),It=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pe),B.pixelStorei(B.UNPACK_SKIP_ROWS,be),B.pixelStorei(B.UNPACK_SKIP_IMAGES,De);let Ki=w.isDataArrayTexture||w.isData3DTexture,it=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let nn=Pe.get(w),Ji=Pe.get(O),kt=Pe.get(nn.__renderTarget),Sn=Pe.get(Ji.__renderTarget);xe.bindFramebuffer(B.READ_FRAMEBUFFER,kt.__webglFramebuffer),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Sn.__webglFramebuffer);for(let Dn=0;Dn<fe;Dn++)Ki&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(w).__webglTexture,I,De+Dn),w.isDepthTexture?(it&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pe.get(O).__webglTexture,I,$e+Dn),B.blitFramebuffer(pe,be,ee,ae,me,qe,ee,ae,B.DEPTH_BUFFER_BIT,B.NEAREST)):it?B.copyTexSubImage3D(we,I,me,qe,$e+Dn,pe,be,ee,ae):B.copyTexSubImage2D(we,I,me,qe,$e+Dn,pe,be,ee,ae);xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else it?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(we,I,me,qe,$e,ee,ae,fe,St,We,nt.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(we,I,me,qe,$e,ee,ae,fe,St,nt.data):B.texSubImage3D(we,I,me,qe,$e,ee,ae,fe,St,We,nt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,I,me,qe,ee,ae,St,We,nt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,I,me,qe,nt.width,nt.height,St,nt.data):B.texSubImage2D(B.TEXTURE_2D,I,me,qe,ee,ae,St,We,nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,cn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ve),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Zt),B.pixelStorei(B.UNPACK_SKIP_ROWS,ci),B.pixelStorei(B.UNPACK_SKIP_IMAGES,It),I===0&&O.generateMipmaps&&B.generateMipmap(we),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,O,z=null,N=null,I=0){return w.isTexture!==!0&&(os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,N=arguments[1]||null,w=arguments[2],O=arguments[3],I=arguments[4]||0),os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,z,N,I)},this.initRenderTarget=function(w){Pe.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){b=0,E=0,L=null,xe.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};var ms=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},gs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Aa,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ct=new _,vs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Rc=new _,Uc=new Qe,zc=new Qe,Bm=new _,Nc=new Oe,Ys=new _,wo=new Ut,Fc=new Oe,Po=new ki,Pr=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=NA,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingBox.expandByPoint(Ys)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ut),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingSphere.expandByPoint(Ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wo.copy(this.boundingSphere),wo.applyMatrix4(i),e.ray.intersectsSphere(wo)!==!1&&(Fc.copy(i).invert(),Po.copy(e.ray).applyMatrix4(Fc),!(this.boundingBox!==null&&Po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===NA?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===al?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Uc.fromBufferAttribute(i.attributes.skinIndex,e),zc.fromBufferAttribute(i.attributes.skinWeight,e),Rc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=zc.getComponent(r);if(o!==0){let a=Uc.getComponent(r);Nc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Bm.copy(Rc).applyMatrix4(Nc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ws=class extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},xr=class extends mt{constructor(e=null,t=1,n=1,i,r,o,a,A,c=yt,u=yt,l,h){super(null,o,a,A,c,u,i,r,l,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kc=new Oe,Lm=new Oe,yr=class s{constructor(e=[],t=[]){this.uuid=en(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Lm;kc.multiplyMatrices(a,t[r]),kc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xr(t,e,e,jt,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ws),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ri=class extends ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mi=new Oe,Hc=new Oe,Ks=[],jc=new _t,Rm=new Oe,ns=new lt,is=new Ut,Tr=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),jc.copy(e.boundingBox).applyMatrix4(Mi),this.boundingBox.union(jc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ut),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mi),is.copy(e.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),e.ray.intersectsSphere(is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mi),Hc.multiplyMatrices(n,Mi),ns.matrixWorld=Hc,ns.raycast(e,Ks);for(let o=0,a=Ks.length;o<a;o++){let A=Ks[o];A.instanceId=r,A.object=this,t.push(A)}Ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(i*this.count),i,this.count,ja,$t));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,A=i*e;r[A]=a,r.set(n,A+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var oi=class extends zt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mr=new _,Cr=new _,Gc=new Oe,ss=new ki,Js=new Ut,xo=new _,qc=new _,Qi=class extends ot{constructor(e=new Ot,t=new oi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Mr.fromBufferAttribute(t,i-1),Cr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Mr.distanceTo(Cr);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=r,e.ray.intersectsSphere(Js)===!1)return;Gc.copy(i).invert(),ss.copy(e.ray).applyMatrix4(Gc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,p=m-1;g<p;g+=c){let d=u.getX(g),M=u.getX(g+1),T=Xs(this,e,ss,A,d,M);T&&t.push(T)}if(this.isLineLoop){let g=u.getX(m-1),p=u.getX(f),d=Xs(this,e,ss,A,g,p);d&&t.push(d)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,p=m-1;g<p;g+=c){let d=Xs(this,e,ss,A,g,g+1);d&&t.push(d)}if(this.isLineLoop){let g=Xs(this,e,ss,A,m-1,f);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xs(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Mr.fromBufferAttribute(o,i),Cr.fromBufferAttribute(o,r),t.distanceSqToSegment(Mr,Cr,xo,qc)>n)return;xo.applyMatrix4(s.matrixWorld);let A=e.ray.origin.distanceTo(xo);if(!(A<e.near||A>e.far))return{distance:A,point:qc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Qc=new _,Wc=new _,Wi=class extends Qi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Qc.fromBufferAttribute(t,i),Wc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qc.distanceTo(Wc);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},br=class extends Qi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ps=class extends zt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vc=new Oe,Ca=new ki,$s=new Ut,er=new _,Er=class extends ot{constructor(e=new Ot,t=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;Vc.copy(i).invert(),Ca.copy(e.ray).applyMatrix4(Vc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),A=a*a,c=n.index,l=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=h,g=f;m<g;m++){let p=c.getX(m);er.fromBufferAttribute(l,p),Zc(er,p,A,i,e,t,this)}}else{let h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=h,g=f;m<g;m++)er.fromBufferAttribute(l,m),Zc(er,m,A,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zc(s,e,t,n,i,r,o){let a=Ca.distanceSqToPoint(s);if(a<t){let A=new _;Ca.closestPointToPoint(s,A),A.applyMatrix4(n);let c=i.ray.origin.distanceTo(A);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:A,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Sr=class extends mt{constructor(e,t,n,i,r,o,a,A,c){super(e,t,n,i,r,o,a,A,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var tr=new _,nr=new _,yo=new _,ir=new zn,Dr=class extends Ot{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Di*t),o=e.getIndex(),a=e.getAttribute("position"),A=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],l=new Array(3),h={},f=[];for(let m=0;m<A;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:g,b:p,c:d}=ir;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),ir.getNormal(yo),l[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,l[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,l[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(l[0]===l[1]||l[1]===l[2]||l[2]===l[0]))for(let M=0;M<3;M++){let T=(M+1)%3,x=l[M],R=l[T],b=ir[u[M]],E=ir[u[T]],L=`${x}_${R}`,y=`${R}_${x}`;y in h&&h[y]?(yo.dot(h[y].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(E.x,E.y,E.z)),h[y]=null):L in h||(h[L]={index0:c[M],index1:c[T],normal:yo.clone()})}}for(let m in h)if(h[m]){let{index0:g,index1:p}=h[m];tr.fromBufferAttribute(a,g),nr.fromBufferAttribute(a,p),f.push(tr.x,tr.y,tr.z),f.push(nr.x,nr.y,nr.z)}this.setAttribute("position",new Tt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var _r=class s extends Ot{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let A=Math.min(o+a,Math.PI),c=0,u=[],l=new _,h=new _,f=[],m=[],g=[],p=[];for(let d=0;d<=n;d++){let M=[],T=d/n,x=0;d===0&&o===0?x=.5/t:d===n&&A===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){let b=R/t;l.x=-e*Math.cos(i+b*r)*Math.sin(o+T*a),l.y=e*Math.cos(o+T*a),l.z=e*Math.sin(i+b*r)*Math.sin(o+T*a),m.push(l.x,l.y,l.z),h.copy(l).normalize(),g.push(h.x,h.y,h.z),p.push(b+x,1-T),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let T=u[d][M+1],x=u[d][M],R=u[d+1][M],b=u[d+1][M+1];(d!==0||o>0)&&f.push(T,x,b),(d!==n-1||A<Math.PI)&&f.push(x,R,b)}this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vi=class extends zt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hu,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Et=class extends Vi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function sr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Um(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zm(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yc(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let A=0;A!==e;++A)i[o++]=s[a+A]}return i}function yu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var jn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let A=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===A)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ba=class extends jn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:FA,endingEnd:FA}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],A=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case kA:r=e,a=2*t-n;break;case HA:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(A===void 0)switch(this.getSettings_().endingEnd){case kA:o=e,A=2*n-t;break;case HA:o=1,A=n+i[1]-i[0];break;default:o=e-1,A=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(A-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,u=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),g=m*m,p=g*m,d=-h*p+2*h*g-h*m,M=(1+h)*p+(-1.5-2*h)*g+(-.5+h)*m+1,T=(-1-f)*p+(1.5+f)*g+.5*m,x=f*p-f*g;for(let R=0;R!==a;++R)r[R]=d*o[u+R]+M*o[c+R]+T*o[A+R]+x*o[l+R];return r}},Ea=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=e*a,c=A-a,u=(n-t)/(i-t),l=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*l+o[A+h]*u;return r}},Sa=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ba(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zi:t=this.InterpolantFactoryMethodDiscrete;break;case Ni:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zi;case this.InterpolantFactoryMethodLinear:return Ni;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let A=n[a];if(typeof A=="number"&&isNaN(A)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,A),e=!1;break}if(o!==null&&o>A){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,A,o),e=!1;break}o=A}if(i!==void 0&&Um(i))for(let a=0,A=i.length;a!==A;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,r=e.length-1,o=1;for(let a=1;a<r;++a){let A=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)A=!0;else{let l=a*n,h=l-n,f=l+n;for(let m=0;m!==n;++m){let g=t[l+m];if(g!==t[h+m]||g!==t[f+m]){A=!0;break}}}if(A){if(a!==o){e[o]=e[a];let l=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[l+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,A=o*n,c=0;c!==n;++c)t[A+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=Ni;var Gn=class extends Qt{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=zi;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends Qt{};Or.prototype.ValueTypeName="color";var Tn=class extends Qt{};Tn.prototype.ValueTypeName="number";var Da=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,A);return r}},Mn=class extends Qt{InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};Mn.prototype.ValueTypeName="quaternion";Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends Qt{constructor(e,t,n){super(e,t,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=zi;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cn=class extends Qt{};Cn.prototype.ValueTypeName="vector";var Ir=class{constructor(e="",t=-1,n=[],i=Al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=en(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Fm(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Qt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let A=[],c=[];A.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=zm(A);A=Yc(A,1,u),c=Yc(c,1,u),!i&&A[0]===0&&(A.push(r),c.push(c[0])),o.push(new Tn(".morphTargetInfluences["+t[a].name+"]",A,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,A=e.length;a<A;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let l=u[1],h=i[l];h||(i[l]=h=[]),h.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(l,h,f,m,g){if(f.length!==0){let p=[],d=[];yu(f,p,d,m),p.length!==0&&g.push(new l(h,p,d))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,A=e.length||-1,c=e.hierarchy||[];for(let l=0;l<c.length;l++){let h=c[l].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let g=0;g<h[m].morphTargets.length;g++)f[h[m].morphTargets[g]]=-1;for(let g in f){let p=[],d=[];for(let M=0;M!==h[m].morphTargets.length;++M){let T=h[m];p.push(T.time),d.push(T.morphTarget===g?1:0)}i.push(new Tn(".morphTargetInfluence["+g+"]",p,d))}A=f.length*o}else{let f=".bones["+t[l].name+"]";n(Cn,f+".position",h,"pos",i),n(Mn,f+".quaternion",h,"rot",i),n(Cn,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,A,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Nm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tn;case"vector":case"vector2":case"vector3":case"vector4":return Cn;case"color":return Or;case"quaternion":return Mn;case"bool":case"boolean":return Gn;case"string":return qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Fm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Nm(s.type);if(s.times===void 0){let t=[],n=[];yu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Nn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},_a=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,A,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return A?A(u):u},this.setURLModifier=function(u){return A=u,this},this.addHandler=function(u,l){return c.push(u,l),this},this.removeHandler=function(u){let l=c.indexOf(u);return l!==-1&&c.splice(l,2),this},this.getHandler=function(u){for(let l=0,h=c.length;l<h;l+=2){let f=c[l],m=c[l+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null}}},km=new _a,bn=class{constructor(e){this.manager=e!==void 0?e:km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bn.DEFAULT_MATERIAL_NAME="__DEFAULT";var pn={},Oa=class extends Error{constructor(e,t){super(e),this.response=t}},xs=class extends bn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Nn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pn[e]!==void 0){pn[e].push({onLoad:t,onProgress:n,onError:i});return}pn[e]=[],pn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,A=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=pn[e],l=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0,g=0,p=new ReadableStream({start(d){M();function M(){l.read().then(({done:T,value:x})=>{if(T)d.close();else{g+=x.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let b=0,E=u.length;b<E;b++){let L=u[b];L.onProgress&&L.onProgress(R)}d.enqueue(x),M()}},T=>{d.error(T)})}}});return new Response(p)}else throw new Oa(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(A){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let l=/charset="?([^;"\s]*)"?/i.exec(a),h=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Nn.add(e,c);let u=pn[e];delete pn[e];for(let l=0,h=u.length;l<h;l++){let f=u[l];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete pn[e];for(let l=0,h=u.length;l<h;l++){let f=u[l];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ia=class extends bn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Nn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=ds("img");function A(){u(),Nn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(l){u(),i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",A,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",A,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Br=class extends bn{constructor(e){super(e)}load(e,t,n,i){let r=new mt,o=new Ia(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ys=class extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var To=new Oe,Kc=new _,Jc=new _,Ts=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ba=class extends Ts{constructor(){super(new ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Fi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Lr=class extends ys{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ba}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Xc=new Oe,rs=new _,Mo=new _,La=class extends Ts{constructor(){super(new ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(rs),Mo.copy(n.position),Mo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mo),n.updateMatrixWorld(),i.makeTranslation(-rs.x,-rs.y,-rs.z),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc)}},Rr=class extends ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new La}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ra=class extends Ts{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ai=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Ra}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qn=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ur=class extends bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Nn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let A=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Nn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Nn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Nn.add(e,A),r.manager.itemStart(e)}};var Za="\\[\\]\\.:\\/",Hm=new RegExp("["+Za+"]","g"),Ya="[^"+Za+"]",jm="[^"+Za.replace("\\.","")+"]",Gm=/((?:WC+[\/:])*)/.source.replace("WC",Ya),qm=/(WCOD+)?/.source.replace("WCOD",jm),Qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ya),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ya),Vm=new RegExp("^"+Gm+qm+Qm+Wm+"$"),Zm=["material","materials","bones","map"],Ua=class{constructor(e,t,n){let i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},et=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hm,"")}static parseTrackName(e){let t=Vm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let A=n(a.children);if(A)return A}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let A=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}A=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(A=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(A=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[A],this.setValue=this.SetterByBindingTypeAndVersioning[A][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=Ua;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ag=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Ka(s,e){if(e===lu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Cs||e===Nr){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let A=0;A<a.count;A++)o.push(A);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Cs)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var jr=class extends bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iA(t)}),this.register(function(t){return new sA(t)}),this.register(function(t){return new dA(t)}),this.register(function(t){return new fA(t)}),this.register(function(t){return new pA(t)}),this.register(function(t){return new oA(t)}),this.register(function(t){return new aA(t)}),this.register(function(t){return new AA(t)}),this.register(function(t){return new cA(t)}),this.register(function(t){return new nA(t)}),this.register(function(t){return new uA(t)}),this.register(function(t){return new rA(t)}),this.register(function(t){return new hA(t)}),this.register(function(t){return new lA(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new mA(t)}),this.register(function(t){return new gA(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Qn.extractUrlBase(e);o=Qn.resolveURL(c,this.path)}else o=Qn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},A=new xs(this.manager);A.setPath(this.path),A.setResponseType("arraybuffer"),A.setRequestHeader(this.requestHeader),A.setWithCredentials(this.withCredentials),A.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},A=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(A.decode(new Uint8Array(e,0,4))===Eu){try{o[Ue.KHR_BINARY_GLTF]=new vA(e)}catch(l){i&&i(l);return}r=JSON.parse(o[Ue.KHR_BINARY_GLTF].content)}else r=JSON.parse(A.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new CA(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let l=this.pluginCallbacks[u](c);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let l=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(l){case Ue.KHR_MATERIALS_UNLIT:o[l]=new tA;break;case Ue.KHR_DRACO_MESH_COMPRESSION:o[l]=new wA(r,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:o[l]=new PA;break;case Ue.KHR_MESH_QUANTIZATION:o[l]=new xA;break;default:h.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Km(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},eA=class{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,A=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Te(16777215);A.color!==void 0&&u.setRGB(A.color[0],A.color[1],A.color[2],Mt);let l=A.range!==void 0?A.range:0;switch(A.type){case"directional":c=new ai(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Rr(u),c.distance=l;break;case"spot":c=new Lr(u),c.distance=l,A.spot=A.spot||{},A.spot.innerConeAngle=A.spot.innerConeAngle!==void 0?A.spot.innerConeAngle:0,A.spot.outerConeAngle=A.spot.outerConeAngle!==void 0?A.spot.outerConeAngle:Math.PI/4,c.angle=A.spot.outerConeAngle,c.penumbra=1-A.spot.innerConeAngle/A.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+A.type)}return c.position.set(0,0,0),c.decay=2,En(c,A),A.intensity!==void 0&&(c.intensity=A.intensity),c.name=t.createUniqueName(A.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(A){return n._getNodeRef(t.cache,a,A)})}},tA=class{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return Nt}extendParams(e,t,n){let i=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ct))}return Promise.all(i)}},nA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},iA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(r)}},sA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},rA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},oA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},aA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},AA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Mt),Promise.all(r)}},cA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},uA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Mt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ct)),Promise.all(r)}},lA=class{constructor(e){this.parser=e,this.name=Ue.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},hA=class{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},dA=class{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},fA=class{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],A=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(A=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,A);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pA=class{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],A=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(A=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,A);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mA=class{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let A=i.byteOffset||0,c=i.byteLength||0,u=i.count,l=i.byteStride,h=new Uint8Array(a,A,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,l,h,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*l);return o.decodeGltfBuffer(new Uint8Array(f),u,l,h,i.mode,i.filter),f})})}else return null}},gA=class{constructor(e){this.name=Ue.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Wt.TRIANGLES&&c.mode!==Wt.TRIANGLE_STRIP&&c.mode!==Wt.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],A={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(A[c]=u,A[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),l=u.isGroup?u.children:[u],h=c[0].count,f=[];for(let m of l){let g=new Oe,p=new _,d=new tn,M=new _(1,1,1),T=new Tr(m.geometry,m.material,h);for(let x=0;x<h;x++)A.TRANSLATION&&p.fromBufferAttribute(A.TRANSLATION,x),A.ROTATION&&d.fromBufferAttribute(A.ROTATION,x),A.SCALE&&M.fromBufferAttribute(A.SCALE,x),T.setMatrixAt(x,g.compose(p,d,M));for(let x in A)if(x==="_COLOR_0"){let R=A[x];T.instanceColor=new ri(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,A[x]);ot.prototype.copy.call(T,m),this.parser.assignFinalMaterial(T),f.push(T)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Eu="glTF",bs=12,Tu={JSON:1313821514,BIN:5130562},vA=class{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-bs,r=new DataView(e,bs),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let A=r.getUint32(o,!0);if(o+=4,A===Tu.JSON){let c=new Uint8Array(e,bs+o,a);this.content=n.decode(c)}else if(A===Tu.BIN){let c=bs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wA=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},A={},c={};for(let u in o){let l=TA[u]||u.toLowerCase();a[l]=o[u]}for(let u in e.attributes){let l=TA[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],f=Yi[h.componentType];c[l]=f.name,A[l]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(l,h){i.decodeDracoFile(u,function(f){for(let m in f.attributes){let g=f.attributes[m],p=A[m];p!==void 0&&(g.normalized=p)}l(f)},a,c,Mt,h)})})}},PA=class{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},xA=class{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}},Gr=class extends jn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,A=a*2,c=a*3,u=i-t,l=(n-t)/u,h=l*l,f=h*l,m=e*c,g=m-c,p=-2*f+3*h,d=f-h,M=1-p,T=d-h+l;for(let x=0;x!==a;x++){let R=o[g+x+a],b=o[g+x+A]*u,E=o[m+x+a],L=o[m+x]*u;r[x]=M*R+T*b+p*E+d*L}return r}},Jm=new tn,yA=class extends Gr{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Jm.fromArray(r).normalize().toArray(r),r}},Wt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mu={9728:yt,9729:Dt,9984:Na,9985:As,9986:Ci,9987:rn},Cu={33071:vn,33648:ls,10497:ii},Ja={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},TA={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Xm={CUBICSPLINE:void 0,LINEAR:Ni,STEP:zi},Xa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $m(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Vi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qt})),s.DefaultMaterial}function Ai(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eg(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let l=e[c];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(i=!0),l.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],A=[];for(let c=0,u=e.length;c<u;c++){let l=e[c];if(n){let h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):s.attributes.position;o.push(h)}if(i){let h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):s.attributes.normal;a.push(h)}if(r){let h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):s.attributes.color;A.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A)]).then(function(c){let u=c[0],l=c[1],h=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=l),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function tg(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ng(s){let e,t=s.extensions&&s.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$a(t.attributes):e=s.indices+":"+$a(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$a(s.targets[n]);return e}function $a(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function MA(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ig(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var sg=new Oe,CA=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Km,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let A=a.match(/Version\/(\d+)/);i=n&&A?parseInt(A[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Br(this.options.manager):this.textureLoader=new Ur(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ai(r,a,i),En(a,i),Promise.all(n._invokeAll(function(A){return A.afterRoot&&A.afterRoot(a)})).then(function(){for(let A of a.scenes)A.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,A=o.length;a<A;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let A=this.associations.get(o);A!=null&&this.associations.set(a,A);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Qn.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ja[i.type],a=Yi[i.componentType],A=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ht(c,o,A))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],A=Ja[i.type],c=Yi[i.componentType],u=c.BYTES_PER_ELEMENT,l=u*A,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,g,p;if(f&&f!==l){let d=Math.floor(h/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count,T=t.cache.get(M);T||(g=new c(a,d*f,i.count*f/u),T=new gs(g,f/u),t.cache.add(M,T)),p=new vs(T,A,h%f/u,m)}else a===null?g=new c(i.count*A):g=new c(a,h,i.count*A),p=new ht(g,A,m);if(i.sparse!==void 0){let d=Ja.SCALAR,M=Yi[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new M(o[1],T,i.sparse.count*d),b=new c(o[2],x,i.sparse.count*A);a!==null&&(p=new ht(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,L=R.length;E<L;E++){let y=R[E];if(p.setX(y,b[E*A]),A>=2&&p.setY(y,b[E*A+1]),A>=3&&p.setZ(y,b[E*A+2]),A>=4&&p.setW(y,b[E*A+3]),A>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let A=n.manager.getHandler(o.uri);A!==null&&(a=A)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],A=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[A])return this.textureCache[A];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Mu[h.magFilter]||Dt,u.minFilter=Mu[h.minFilter]||rn,u.wrapS=Cu[h.wrapS]||ii,u.wrapT=Cu[h.wrapT]||ii,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==yt&&u.minFilter!==Dt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[A]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());let o=i.images[e],a=self.URL||self.webkitURL,A=o.uri||"",c=!1;if(o.bufferView!==void 0)A=n.getDependency("bufferView",o.bufferView).then(function(l){c=!0;let h=new Blob([l],{type:o.mimeType});return A=a.createObjectURL(h),A});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(A).then(function(l){return new Promise(function(h,f){let m=h;t.isImageBitmapLoader===!0&&(m=function(g){let p=new mt(g);p.needsUpdate=!0,h(p)}),t.load(Qn.resolveURL(l,r.path),m,void 0,f)})}).then(function(l){return c===!0&&a.revokeObjectURL(A),En(l,o),l.userData.mimeType=o.mimeType||ig(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",A),l});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ue.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let A=r.associations.get(o);o=r.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,A)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new Ps,zt.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,A.sizeAttenuation=!1,this.cache.add(a,A)),n=A}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,A=this.cache.get(a);A||(A=new oi,zt.prototype.copy.call(A,n),A.color.copy(n.color),A.map=n.map,this.cache.add(a,A)),n=A}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let A=this.cache.get(a);A||(A=n.clone(),r&&(A.vertexColors=!0),o&&(A.flatShading=!0),i&&(A.normalScale&&(A.normalScale.y*=-1),A.clearcoatNormalScale&&(A.clearcoatNormalScale.y*=-1)),this.cache.add(a,A),this.associations.set(A,this.associations.get(n))),n=A}e.material=n}getMaterialType(){return Vi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},A=r.extensions||{},c=[];if(A[Ue.KHR_MATERIALS_UNLIT]){let l=i[Ue.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),c.push(l.extendParams(a,r,t))}else{let l=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){let h=l.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Mt),a.opacity=h[3]}l.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",l.baseColorTexture,ct)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Rt);let u=r.alphaMode||Xa.OPAQUE;if(u===Xa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==Nt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Nt){let l=r.emissiveFactor;a.emissive=new Te().setRGB(l[0],l[1],l[2],Mt)}return r.emissiveTexture!==void 0&&o!==Nt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ct)),Promise.all(c).then(function(){let l=new o(a);return r.name&&(l.name=r.name),En(l,r),t.associations.set(l,{materials:e}),r.extensions&&Ai(i,l,r),l})}createUniqueName(e){let t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(A){return bu(A,a,t)})}let o=[];for(let a=0,A=e.length;a<A;a++){let c=e[a],u=ng(c),l=i[u];if(l)o.push(l.promise);else{let h;c.extensions&&c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=bu(new Ot,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let A=0,c=o.length;A<c;A++){let u=o[A].material===void 0?$m(this.cache):this.getDependency("material",o[A].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(A){let c=A.slice(0,A.length-1),u=A[A.length-1],l=[];for(let f=0,m=u.length;f<m;f++){let g=u[f],p=o[f],d,M=c[f];if(p.mode===Wt.TRIANGLES||p.mode===Wt.TRIANGLE_STRIP||p.mode===Wt.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new Pr(g,M):new lt(g,M),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===Wt.TRIANGLE_STRIP?d.geometry=Ka(d.geometry,Nr):p.mode===Wt.TRIANGLE_FAN&&(d.geometry=Ka(d.geometry,Cs));else if(p.mode===Wt.LINES)d=new Wi(g,M);else if(p.mode===Wt.LINE_STRIP)d=new Qi(g,M);else if(p.mode===Wt.LINE_LOOP)d=new br(g,M);else if(p.mode===Wt.POINTS)d=new Er(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&tg(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),En(d,r),p.extensions&&Ai(i,d,p),t.assignFinalMaterial(d),l.push(d)}for(let f=0,m=l.length;f<m;f++)t.associations.set(l[f],{meshes:e,primitives:f});if(l.length===1)return r.extensions&&Ai(i,l[0],r),l[0];let h=new Gt;r.extensions&&Ai(i,h,r),t.associations.set(h,{meshes:e});for(let f=0,m=l.length;f<m;f++)h.add(l[f]);return h})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ut(kr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Gi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],A=[];for(let c=0,u=o.length;c<u;c++){let l=o[c];if(l){a.push(l);let h=new Oe;r!==null&&h.fromArray(r.array,c*16),A.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yr(a,A)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],A=[],c=[],u=[];for(let l=0,h=i.channels.length;l<h;l++){let f=i.channels[l],m=i.samplers[f.sampler],g=f.target,p=g.node,d=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",d)),A.push(this.getDependency("accessor",M)),c.push(m),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(A),Promise.all(c),Promise.all(u)]).then(function(l){let h=l[0],f=l[1],m=l[2],g=l[3],p=l[4],d=[];for(let M=0,T=h.length;M<T;M++){let x=h[M],R=f[M],b=m[M],E=g[M],L=p[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let y=n._createAnimationTracks(x,R,b,E,L);if(y)for(let P=0;P<y.length;P++)d.push(y[P])}return new Ir(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let A=0,c=i.weights.length;A<c;A++)a.morphTargetInfluences[A]=i.weights[A]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let A=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),A]).then(function(c){let u=c[0],l=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,sg)});for(let f=0,m=l.length;f<m;f++)u.add(l[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],A=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return A&&a.push(A),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new ws:c.length>1?u=new Gt:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let l=0,h=c.length;l<h;l++)u.add(c[l]);if(r.name&&(u.userData.name=r.name,u.name=o),En(u,r),r.extensions&&Ai(n,u,r),r.matrix!==void 0){let l=new Oe;l.fromArray(r.matrix),u.applyMatrix4(l)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Gt;n.name&&(r.name=i.createUniqueName(n.name)),En(r,n),n.extensions&&Ai(t,r,n);let o=n.nodes||[],a=[];for(let A=0,c=o.length;A<c;A++)a.push(i.getDependency("node",o[A]));return Promise.all(a).then(function(A){for(let u=0,l=A.length;u<l;u++)r.add(A[u]);let c=u=>{let l=new Map;for(let[h,f]of i.associations)(h instanceof zt||h instanceof mt)&&l.set(h,f);return u.traverse(h=>{let f=i.associations.get(h);f!=null&&l.set(h,f)}),l};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,A=[];Wn[r.path]===Wn.weights?e.traverse(function(h){h.morphTargetInfluences&&A.push(h.name?h.name:h.uuid)}):A.push(a);let c;switch(Wn[r.path]){case Wn.weights:c=Tn;break;case Wn.rotation:c=Mn;break;case Wn.position:case Wn.scale:c=Cn;break;default:n.itemSize===1?c=Tn:c=Cn;break}let u=i.interpolation!==void 0?Xm[i.interpolation]:Ni,l=this._getArrayFromAccessor(n);for(let h=0,f=A.length;h<f;h++){let m=new c(A[h]+"."+Wn[r.path],t.array,l,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=MA(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Mn?yA:Gr;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function rg(s,e,t){let n=e.attributes,i=new _t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],A=a.min,c=a.max;if(A!==void 0&&c!==void 0){if(i.set(new _(A[0],A[1],A[2]),new _(c[0],c[1],c[2])),a.normalized){let u=MA(Yi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new _,A=new _;for(let c=0,u=r.length;c<u;c++){let l=r[c];if(l.POSITION!==void 0){let h=t.json.accessors[l.POSITION],f=h.min,m=h.max;if(f!==void 0&&m!==void 0){if(A.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),A.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),A.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),h.normalized){let g=MA(Yi[h.componentType]);A.multiplyScalar(g)}a.max(A)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Ut;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function bu(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(A){s.setAttribute(a,A)})}for(let o in n){let a=TA[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ze.workingColorSpace!==Mt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),En(s,e),rg(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?eg(s,e.targets,t):s})}var Su="Z2xURgIAAAA0EgIAmBAAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC4yLjYwIiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzAsMSwyLDNdfV0sIm5vZGVzIjpbeyJtZXNoIjowLCJuYW1lIjoiQ3VydmUiLCJyb3RhdGlvbiI6WzAuNzA3MTA2ODI4Njg5NTc1MiwwLDAsMC43MDcxMDY4Mjg2ODk1NzUyXSwic2NhbGUiOlsxMzQuNDczNjAyMjk0OTIxODgsMTM0LjQ3MzYwMjI5NDkyMTg4LDEzNC40NzM2MDIyOTQ5MjE4OF0sInRyYW5zbGF0aW9uIjpbLTAuMTA1NjE4Nzg5NzkyMDYwODUsMC45NzgzMjQ1OTIxMTM0OTQ5LDBdfSx7Im1lc2giOjEsIm5hbWUiOiJDdXJ2ZS4wMDEiLCJyb3RhdGlvbiI6WzAuNzA3MTA2ODI4Njg5NTc1MiwwLDAsMC43MDcxMDY4Mjg2ODk1NzUyXSwic2NhbGUiOlsxMzQuNDczNjAyMjk0OTIxODgsMTM0LjQ3MzYwMjI5NDkyMTg4LDEzNC40NzM2MDIyOTQ5MjE4OF0sInRyYW5zbGF0aW9uIjpbLTAuMDMxMTc2NzMwOTkwNDA5ODUsMi4zOTcxOTEwNDc2Njg0NTcsMF19LHsibWVzaCI6MiwibmFtZSI6IkN1cnZlLjAwMiIsInJvdGF0aW9uIjpbMC43MDcxMDY4Mjg2ODk1NzUyLDAsMCwwLjcwNzEwNjgyODY4OTU3NTJdLCJzY2FsZSI6WzEzNC40NzM2MDIyOTQ5MjE4OCwxMzQuNDczNjAyMjk0OTIxODgsMTM0LjQ3MzYwMjI5NDkyMTg4XSwidHJhbnNsYXRpb24iOlsxLjQ5OTc0MzEwMzk4MTAxOCwyLjQ4NzE2MDQ0NDI1OTY0MzYsMF19LHsibWVzaCI6MywibmFtZSI6IkN1cnZlLjAwMyIsInJvdGF0aW9uIjpbMC43MDcxMDY4Mjg2ODk1NzUyLDAsMCwwLjcwNzEwNjgyODY4OTU3NTJdLCJzY2FsZSI6WzEzNC40NzM2MDIyOTQ5MjE4OCwxMzQuNDczNjAyMjk0OTIxODgsMTM0LjQ3MzYwMjI5NDkyMTg4XSwidHJhbnNsYXRpb24iOlstMS4zMjg0ODcwMzg2MTIzNjU3LDIuNTM3Mzg4MDg2MzE4OTY5NywwXX1dLCJtYXRlcmlhbHMiOlt7ImRvdWJsZVNpZGVkIjp0cnVlLCJuYW1lIjoiU1ZHTWF0In1dLCJtZXNoZXMiOlt7Im5hbWUiOiJDdXJ2ZSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIk5PUk1BTCI6MSwiVEVYQ09PUkRfMCI6Mn0sImluZGljZXMiOjMsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkN1cnZlLjAwMSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjQsIk5PUk1BTCI6NSwiVEVYQ09PUkRfMCI6Nn0sImluZGljZXMiOjcsIm1hdGVyaWFsIjowfV19LHsibmFtZSI6IkN1cnZlLjAwMiIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjgsIk5PUk1BTCI6OSwiVEVYQ09PUkRfMCI6MTB9LCJpbmRpY2VzIjoxMSwibWF0ZXJpYWwiOjB9XX0seyJuYW1lIjoiQ3VydmUuMDAzIiwicHJpbWl0aXZlcyI6W3siYXR0cmlidXRlcyI6eyJQT1NJVElPTiI6MTIsIk5PUk1BTCI6MTMsIlRFWENPT1JEXzAiOjE0fSwiaW5kaWNlcyI6MTUsIm1hdGVyaWFsIjowfV19XSwiYWNjZXNzb3JzIjpbeyJidWZmZXJWaWV3IjowLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6ODc0LCJtYXgiOlswLjAwMjg5NDk2MjQzOTMxMzUzMSwwLjAwMDkwMDAwMDIxNzM3MDY4ODksMC4wMDY4MjQ1NjgzNzk2NzAzODE1XSwibWluIjpbLTAuMDAyODk0OTY5MTkxNDAyMTk3LC0wLjAwMDkwMDAwMDIxNzM3MDY4ODksLTAuMDA2ODI0NTMxNTkyNDI4Njg0XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo4NzQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6ODc0LCJ0eXBlIjoiVkVDMiJ9LHsiYnVmZmVyVmlldyI6MywiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjQzODAsInR5cGUiOiJTQ0FMQVIifSx7ImJ1ZmZlclZpZXciOjQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo1ODksIm1heCI6WzAuMDA0NDk2Nzk1NTkwOTY2OTQsMC4wMDA5MDAwMDAyMTczNzA2ODg5LDAuMDA0MDAyMzc3MzkwODYxNTExXSwibWluIjpbLTAuMDA1NjMxMTcwMjM1NTc0MjQ1NSwtMC4wMDA5MDAwMDAyMTczNzA2ODg5LC0wLjAwNjE1MjAxMzMxNjc1MDUyNl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo1LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NTg5LCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6NiwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjU4OSwidHlwZSI6IlZFQzIifSx7ImJ1ZmZlclZpZXciOjcsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyNzI0LCJ0eXBlIjoiU0NBTEFSIn0seyJidWZmZXJWaWV3Ijo4LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTAyNiwibWF4IjpbMC4wMDQ2MTA0Njk1NjQ3OTU0OTQsMC4wMDA5MDAwMDAyMTczNzA2ODg5LDAuMDAyNDQ4NjMyNjE0Njg3MDg1XSwibWluIjpbLTAuMDA3MTM0OTM3MjE1NTk2NDM3NSwtMC4wMDA5MDAwMDAyMTczNzA2ODg5LC0wLjAwNTQ4MDE0NjUwMTIxMzMxMl0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3Ijo5LCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTAyNiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEwLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTAyNiwidHlwZSI6IlZFQzIifSx7ImJ1ZmZlclZpZXciOjExLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6NDUyNCwidHlwZSI6IlNDQUxBUiJ9LHsiYnVmZmVyVmlldyI6MTIsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo3MTMsIm1heCI6WzAuMDA0Mjk2MjAxMjgxMjQ5NTIzLDAuMDAwODk5OTk5OTg0NTQwMDQ1MywwLjAwMjgxOTk3MjExMjc3NDg0OV0sIm1pbiI6Wy0wLjAwNzM3MjA4Njg2NzY5MDA4NiwtMC4wMDA4OTk5OTk5ODQ1NDAwNDUzLC0wLjAwNTExMjI3NTQ4MTIyNDA2XSwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjEzLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6NzEzLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MTQsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50Ijo3MTMsInR5cGUiOiJWRUMyIn0seyJidWZmZXJWaWV3IjoxNSwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjI4NjgsInR5cGUiOiJTQ0FMQVIifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjEwNDg4LCJieXRlT2Zmc2V0IjowLCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTA0ODgsImJ5dGVPZmZzZXQiOjEwNDg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6Njk5MiwiYnl0ZU9mZnNldCI6MjA5NzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjo4NzYwLCJieXRlT2Zmc2V0IjoyNzk2OCwidGFyZ2V0IjozNDk2M30seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjcwNjgsImJ5dGVPZmZzZXQiOjM2NzI4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NzA2OCwiYnl0ZU9mZnNldCI6NDM3OTYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjo0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AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAABe30bgAAIA/AAAAABe30bgAAIA/AAAAAAAAAAAAAIA/AAAAABe30bgAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAAAJDy/b05Bn4/AAAAAJDy/b05Bn4/AAAAAAAAAAAAAIC/AAAAAJDy/b05Bn4/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIA/AAAAAJDy/b05Bn4/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAAAJDy/b05Bn4/AAAAAAAAAAAAAIA/AAAAAJDy/b05Bn4/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/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KAACACkAKAADAAIAJwADACgAJwAEAAMAJgAEACcAJgAFAAQAJQAFACYAJQAGAAUAJAAGACUAJAAHAAYAIwAHACQAIwAIAAcAIgAIACMAIgAJAAgAIQAJACIAIQAKAAkAIAAKACEAIAALAAoAHwALACAAHwAMAAsAHgAMAB8AHQAMAB4AHQAcAAwAHAATAAwAEwANAAwAGgATABwAGQAVABsAFAATABoAFwAWABgAFgAUABgAEQAOABMADgANABMAEAAPABIAgACBAIMAfgB/AIIAfQB+AIIAfQCCAIQAfAB9AIQAfACEAIUAfACFAIYAewB8AIYAewCGAIcAegB7AIcAegCHAIgAeQB6AIgAeQCIAIkAeQCJAIoAeAB5AIoAeACKAIsAdwB4AIsAdwCLAIwAdwCMAI0AdgB3AI0AdgCNAEQAdQB2AEQAdAB1AEQAcwB0AEQAcwBEAEUAcwBFAEYAcgBzAEYAcgBGAEcAcQByAEcAcQBHAEgAcABxAEgAcABIAEkAbwBwAEkAbwBJAEoAbgBvAEoAbgBKAEsAbQBuAEsAbQBLAEwAbABtAEwAbABMAE0AawBsAE0AawBNAE4AagBrAE4AagBOAE8AaQBqAE8AaQBPAFAAaABpAFAAZwBoAFAAZwBQAGYAZgBQAFoAWgBQAFIAYwBlAFkAYgBkAFwAWwBjAFkAXwBhAF4AXQBgAFsAVwBaAFQAUwBZAFEAVgBYAFUAjwCbAJoAjwCaAI4AkACcAJsAkACbAI8AkQCdAJwAkQCcAJAAkgCeAJ0AkgCdAJEAkwCfAJ4AkwCeAJIAlACgAJ8AlACfAJMAlQChAKAAlQCgAJQAlgCiAKEAlgChAJUAlwCjAKIAlwCiAJYAmACkAKMAmACjAJcAmQClAKQAmQCkAJgAmwCnAKYAmwCmAJoAnACoAKcAnACnAJsAnQCpAKgAnQCoAJwAngCqAKkAngCpAJ0AnwCrAKoAnwCqAJ4AoACsAKsAoACrAJ8AoQCtAKwAoQCsAKAAogCuAK0AogCtAKEAowCvAK4AowCuAKIApACwAK8ApACvAKMApQCxALAApQCwAKQApwCzALIApwCyAKYAqAC0ALMAqACzAKcAqQC1ALQAqQC0AKgAqgC2ALUAqgC1AKkAqwC3ALYAqwC2AKoArAC4ALcArAC3AKsArQC5ALgArQC4AKwArgC6ALkArgC5AK0ArwC7ALoArwC6AK4AsAC8ALsAsAC7AK8AsQC9ALwAsQC8ALAAswC/AL4AswC+ALIAtADAAL8AtAC/ALMAtQDBAMAAtQDAALQAtgDCAMEAtgDBALUAtwDDAMIAtwDCALYAuADEAMMAuADDALcAuQDFAMQAuQDEALgAugDGAMUAugDFALkAuwDHAMYAuwDGALoAvADIAMcAvADHALsAvQDJAMgAvQDIALwAvwDLAMoAvwDKAL4AwADMAMsAwADLAL8AwQDNAMwAwQDMAMAAwgDOAM0AwgDNAMEAwwDPAM4AwwDOAMIAxADQAM8AxADPAMMAxQDRANAAxQDQAMQAxgDSANEAxgDRAMUAxwDTANIAxwDSAMYAyADUANMAyADTAMcAyQDVANQAyQDUAMgAywDXANYAywDWAMoAzADYANcAzADXAMsAzQDZANgAzQDYAMwAzgDaANkAzgDZAM0AzwDbANoAzwDaAM4A0ADcANsA0ADbAM8A0QDdANwA0QDcANAA0gDeAN0A0gDdANEA0wDfAN4A0wDeANIA1ADgAN8A1ADfANMA1QDhAOAA1QDgANQA1wDjAOIA1wDiANYA2ADkAOMA2ADjANcA2QDlAOQA2QDkANgA2gDmAOUA2gDlANkA2wDnAOYA2wDmANoA3ADoAOcA3ADnANsA3QDpAOgA3QDoANwA3gDqAOkA3gDpAN0A3wDrAOoA3wDqAN4A4ADsAOsA4ADrAN8A4QDtAOwA4QDsAOAA4wDvAO4A4wDuAOIA5ADwAO8A5ADvAOMA5QDxAPAA5QDwAOQA5gDyAPEA5gDxAOUA5wDzAPIA5wDyAOYA6AD0APMA6ADzAOcA6QD1APQA6QD0AOgA6gD2APUA6gD1AOkA6wD3APYA6wD2AOoA7AD4APcA7AD3AOsA7QD5APgA7QD4AOwA7wD7APoA7wD6AO4A8AD8APsA8AD7AO8A8QD9APwA8QD8APAA8gD+AP0A8gD9APEA8wD/AP4A8wD+APIA9AAAAf8A9AD/APMA9QABAQAB9QAAAfQA9gACAQEB9gABAfUA9wADAQIB9wACAfYA+AAEAQMB+AADAfcA+QAFAQQB+QAEAfgA+wAHAQYB+wAGAfoA/AAIAQcB/AAHAfsA/QAJAQgB/QAIAfwA/gAKAQkB/gAJAf0A/wALAQoB/wAKAf4AAAEMAQsBAAELAf8AAQENAQwBAQEMAQABAgEOAQ0BAgENAQEBAwEPAQ4BAwEOAQIBBAEQAQ8BBAEPAQMBBQERARABBQEQAQQBBwETARIBBwESAQYBCAEUARMBCAETAQcBCQEVARQBCQEUAQgBCgEWARUBCgEVAQkBCwEXARYBCwEWAQoBDAEYARcBDAEXAQsBDQEZARgBDQEYAQwBDgEaARkBDgEZAQ0BDwEbARoBDwEaAQ4BEAEcARsBEAEbAQ8BEQEdARwBEQEcARABEwEfAR4BEwEeARIBFAEgAR8BFAEfARMBFQEhASABFQEgARQBFgEiASEBFgEhARUBFwEjASIBFwEiARYBGAEkASMBGAEjARcBGQElASQBGQEkARgBGgEmASUBGgElARkBGwEnASYBGwEmARoBHAEoAScBHAEnARsBHQEpASgBHQEoARwBHwErASoBHwEqAR4BIAEsASsBIAErAR8BIQEtASwBIQEsASABIgEuAS0BIgEtASEBIwEvAS4BIwEuASIBJAEwAS8BJAEvASMBJQExATABJQEwASQBJgEyATEBJgExASUBJwEzATIBJwEyASYBKAE0ATMBKAEzAScBKQE1ATQBKQE0ASgBKwE3ATYBKwE2ASoBLAE4ATcBLAE3ASsBLQE5ATgBLQE4ASwBLgE6ATkBLgE5AS0BLwE7AToBLwE6AS4BMAE8ATsBMAE7AS8BMQE9ATwBMQE8ATABMgE+AT0BMgE9ATEBMwE/AT4BMwE+ATIBNAFAAT8BNAE/ATMBNQFBAUABNQFAATQBNwFDAUIBNwFCATYBOAFEAUMBOAFDATcBOQFFAUQBOQFEATgBOgFGAUUBOgFFATkBOwFHAUYBOwFGAToBPAFIAUcBPAFHATsBPQFJAUgBPQFIATwBPgFKAUkBPgFJAT0BPwFLAUoBPwFKAT4BQAFMAUsBQAFLAT8BQQFNAUwBQQFMAUABQwFPAU4BQwFOAUIBRAFQAU8BRAFPAUMBRQFRAVABRQFQAUQBRgFSAVEBRgFRAUUBRwFTAVIBRwFSAUYBSAFUAVMBSAFTAUcBSQFVAVQBSQFUAUgBSgFWAVUBSgFVAUkBSwFXAVYBSwFWAUoBTAFYAVcBTAFXAUsBTQFZAVgBTQFYAUwBTwFbAVoBTwFaAU4BUAFcAVsBUAFbAU8BUQFdAVwBUQFcAVABUgFeAV0BUgFdAVEBUwFfAV4BUwFeAVIBVAFgAV8BVAFfAVMBVQFhAWABVQFgAVQBVgFiAWEBVgFhAVUBVwFjAWIBVwFiAVYBWAFkAWMBWAFjAVcBWQFlAWQBWQFkAVgBWwFnAWYBWwFmAVoBXAFoAWcBXAFnAVsBXQFpAWgBXQFoAVwBXgFqAWkBXgFpAV0BXwFrAWoBXwFqAV4BYAFsAWsBYAFrAV8BYQFtAWwBYQFsAWABYgFuAW0BYgFtAWEBYwFvAW4BYwFuAWIBZAFwAW8BZAFvAWMBZQFxAXABZQFwAWQBZwFzAXIBZwFyAWYBaAF0AXMBaAFzAWcBaQF1AXQBaQF0AWgBagF2AXUBagF1AWkBawF3AXYBawF2AWoBbAF4AXcBbAF3AWsBbQF5AXgBbQF4AWwBbgF6AXkBbgF5AW0BbwF7AXoBbwF6AW4BcAF8AXsBcAF7AW8BcQF9AXwBcQF8AXABcwF/AX4BcwF+AXIBdAGAAX8BdAF/AXMBdQGBAYABdQGAAXQBdgGCAYEBdgGBAXUBdwGDAYIBdwGCAXYBeAGEAYMBeAGDAXcBeQGFAYQBeQGEAXgBegGGAYUBegGFAXkBewGHAYYBewGGAXoBfAGIAYcBfAGHAXsBfQGJAYgBfQGIAXwBfwGLAYoBfwGKAX4BgAGMAYsBgAGLAX8BgQGNAYwBgQGMAYABggGOAY0BggGNAYEBgwGPAY4BgwGOAYIBhAGQAY8BhAGPAYMBhQGRAZABhQGQAYQBhgGSAZEBhgGRAYUBhwGTAZIBhwGSAYYBiAGUAZMBiAGTAYcBiQGVAZQBiQGUAYgBiwGXAZYBiwGWAYoBjAGYAZcBjAGXAYsBjQGZAZgBjQGYAYwBjgGaAZkBjgGZAY0BjwGbAZoBjwGaAY4BkAGcAZsBkAGbAY8BkQGdAZwBkQGcAZABkgGeAZ0BkgGdAZEBkwGfAZ4BkwGeAZIBlAGgAZ8BlAGfAZMBlQGhAaABlQGgAZQBlwGjAaIBlwGiAZYBmAGkAaMBmAGjAZcBmQGlAaQBmQGkAZgBmgGmAaUBmgGlAZkBmwGnAaYBmwGmAZoBnAGoAacBnAGnAZsBnQGpAagBnQGoAZwBngGqAakBngGpAZ0BnwGrAaoBnwGqAZ4BoAGsAasBoAGrAZ8BoQGtAawBoQGsAaABowGvAa4BowGuAaIBpAGwAa8BpAGvAaMBpQGxAbABpQGwAaQBpgGyAbEBpgGxAaUBpwGzAbIBpwGyAaYBqAG0AbMBqAGzAacBqQG1AbQBqQG0AagBqgG2AbUBqgG1AakBqwG3AbYBqwG2AaoBrAG4AbcBrAG3AasBrQG5AbgBrQG4AawBrwG7AboBrwG6Aa4BsAG8AbsBsAG7Aa8BsQG9AbwBsQG8AbABsgG+Ab0BsgG9AbEBswG/Ab4BswG+AbIBtAHAAb8BtAG/AbMBtQHBAcABtQHAAbQBtgHCAcEBtgHBAbUBtwHDAcIBtwHCAbYBuAHEAcMBuAHDAbcBuQHFAcQBuQHEAbgBuwHHAcYBuwHGAboBvAHIAccBvAHHAbsBvQHJAcgBvQHIAbwBvgHKAckBvgHJAb0BvwHLAcoBvwHKAb4BwAHMAcsBwAHLAb8BwQHNAcwBwQHMAcABwgHOAc0BwgHNAcEBwwHPAc4BwwHOAcIBxAHQAc8BxAHPAcMBxQHRAdABxQHQAcQBxwHTAdIBxwHSAcYByAHUAdMByAHTAccByQHVAdQByQHUAcgBygHWAdUBygHVAckBywHXAdYBywHWAcoBzAHYAdcBzAHXAcsBzQHZAdgBzQHYAcwBzgHaAdkBzgHZAc0BzwHbAdoBzwHaAc4B0AHcAdsB0AHbAc8B0QHdAdwB0QHcAdAB0wHfAd4B0wHeAdIB1AHgAd8B1AHfAdMB1QHhAeAB1QHgAdQB1gHiAeEB1gHhAdUB1wHjAeIB1wHiAdYB2AHkAeMB2AHjAdcB2QHlAeQB2QHkAdgB2gHmAeUB2gHlAdkB2wHnAeYB2wHmAdoB3AHoAecB3AHnAdsB3QHpAegB3QHoAdwB3wHrAeoB3wHqAd4B4AHsAesB4AHrAd8B4QHtAewB4QHsAeAB4gHuAe0B4gHtAeEB4wHvAe4B4wHuAeIB5AHwAe8B5AHvAeMB5QHxAfAB5QHwAeQB5gHyAfEB5gHxAeUB5wHzAfIB5wHyAeYB6AH0AfMB6AHzAecB6QH1AfQB6QH0AegB6wH3AfYB6wH2AeoB7AH4AfcB7AH3AesB7QH5AfgB7QH4AewB7gH6AfkB7gH5Ae0B7wH7AfoB7wH6Ae4B8AH8AfsB8AH7Ae8B8QH9AfwB8QH8AfAB8gH+Af0B8gH9AfEB8wH/Af4B8wH+AfIB9AEAAv8B9AH/AfMB9QEBAgAC9QEAAvQB9wEDAgIC9wECAvYB+AEEAgMC+AEDAvcB+QEFAgQC+QEEAvgB+gEGAgUC+gEFAvkB+wEHAgYC+wEGAvoB/AEIAgcC/AEHAvsB/QEJAggC/QEIAvwB/gEKAgkC/gEJAv0B/wELAgoC/wEKAv4BAAIMAgsCAAILAv8BAQINAgwCAQIMAgACAwIPAg4CAwIOAgICBAIQAg8CBAIPAgMCBQIRAhACBQIQAgQCBgISAhECBgIRAgUCBwITAhICBwISAgYCCAIUAhMCCAITAgcCCQIVAhQCCQIUAggCCgIWAhUCCgIVAgkCCwIXAhYCCwIWAgoCDAIYAhcCDAIXAgsCDQIZAhgCDQIYAgwCDwIbAhoCDwIaAg4CEAIcAhsCEAIbAg8CEQIdAhwCEQIcAhACEgIeAh0CEgIdAhECEwIfAh4CEwIeAhICFAIgAh8CFAIfAhMCFQIhAiACFQIgAhQCFgIiAiECFgIhAhUCFwIjAiICFwIiAhYCGAIkAiMCGAIjAhcCGQIlAiQCGQIkAhgCGwInAiYCGwImAhoCHAIoAicCHAInAhsCHQIpAigCHQIoAhwCHgIqAikCHgIpAh0CHwIrAioCHwIqAh4CIAIsAisCIAIrAh8CIQItAiwCIQIsAiACIgIuAi0CIgItAiECIwIvAi4CIwIuAiICJAIwAi8CJAIvAiMCJQIxAjACJQIwAiQCJwIzAjICJwIyAiYCKAI0AjMCKAIzAicCKQI1AjQCKQI0AigCKgI2AjUCKgI1AikCKwI3AjYCKwI2AioCLAI4AjcCLAI3AisCLQI5AjgCLQI4AiwCLgI6AjkCLgI5Ai0CLwI7AjoCLwI6Ai4CMAI8AjsCMAI7Ai8CMQI9AjwCMQI8AjACMwI/Aj4CMwI+AjICNAJAAj8CNAI/AjMCNQJBAkACNQJAAjQCNgJCAkECNgJBAjUCNwJDAkICNwJCAjYCOAJEAkMCOAJDAjcCOQJFAkQCOQJEAjgCOgJGAkUCOgJFAjkCOwJHAkYCOwJGAjoCPAJIAkcCPAJHAjsCPQJJAkgCPQJIAjwCPwJLAkoCPwJKAj4CQAJMAksCQAJLAj8CQQJNAkwCQQJMAkACQgJOAk0CQgJNAkECQwJPAk4CQwJOAkICRAJQAk8CRAJPAkMCRQJRAlACRQJQAkQCRgJSAlECRgJRAkUCRwJTAlICRwJSAkYCSAJUAlMCSAJTAkcCSQJVAlQCSQJUAkgCSwJXAlYCSwJWAkoCTAJYAlcCTAJXAksCTQJZAlgCTQJYAkwCTgJaAlkCTgJZAk0CTwJbAloCTwJaAk4CUAJcAlsCUAJbAk8CUQJdAlwCUQJcAlACUgJeAl0CUgJdAlECUwJfAl4CUwJeAlICVAJgAl8CVAJfAlMCVQJhAmACVQJgAlQCVwJjAmICVwJiAlYCWAJkAmMCWAJjAlcCWQJlAmQCWQJkAlgCWgJmAmUCWgJlAlkCWwJnAmYCWwJmAloCXAJoAmcCXAJnAlsCXQJpAmgCXQJoAlwCXgJqAmkCXgJpAl0CXwJrAmoCXwJqAl4CYAJsAmsCYAJrAl8CYQJtAmwCYQJsAmACYwJvAm4CYwJuAmICZAJwAm8CZAJvAmMCZQJxAnACZQJwAmQCZgJyAnECZgJxAmUCZwJzAnICZwJyAmYCaAJ0AnMCaAJzAmcCaQJ1AnQCaQJ0AmgCagJ2AnUCagJ1AmkCawJ3AnYCawJ2AmoCbAJ4AncCbAJ3AmsCbQJ5AngCbQJ4AmwCbwJ7AnoCbwJ6Am4CcAJ8AnsCcAJ7Am8CcQJ9AnwCcQJ8AnACcgJ+An0CcgJ9AnECcwJ/An4CcwJ+AnICdAKAAn8CdAJ/AnMCdQKBAoACdQKAAnQCdgKCAoECdgKBAnUCdwKDAoICdwKCAnYCeAKEAoMCeAKDAncCeQKFAoQCeQKEAngCewKHAoYCewKGAnoCfAKIAocCfAKHAnsCfQKJAogCfQKIAnwCfgKKAokCfgKJAn0CfwKLAooCfwKKAn4CgAKMAosCgAKLAn8CgQKNAowCgQKMAoACggKOAo0CggKNAoECgwKPAo4CgwKOAoIChAKQAo8ChAKPAoMChQKRApAChQKQAoQChwKTApIChwKSAoYCiAKUApMCiAKTAocCiQKVApQCiQKUAogCigKWApUCigKVAokCiwKXApYCiwKWAooCjAKYApcCjAKXAosCjQKZApgCjQKYAowCjgKaApkCjgKZAo0CjwKbApoCjwKaAo4CkAKcApsCkAKbAo8CkQKdApwCkQKcApACkwKfAp4CkwKeApIClAKgAp8ClAKfApMClQKhAqAClQKgApQClgKiAqEClgKhApUClwKjAqIClwKiApYCmAKkAqMCmAKjApcCmQKlAqQCmQKkApgCmgKmAqUCmgKlApkCmwKnAqYCmwKmApoCnAKoAqcCnAKnApsCnQKpAqgCnQKoApwCnwKrAqoCnwKqAp4CoAKsAqsCoAKrAp8CoQKtAqwCoQKsAqACogKuAq0CogKtAqECowKvAq4CowKuAqICpAKwAq8CpAKvAqMCpQKxArACpQKwAqQCpgKyArECpgKxAqUCpwKzArICpwKyAqYCqAK0ArMCqAKzAqcCqQK1ArQCqQK0AqgCqwK3ArYCqwK2AqoCrAK4ArcCrAK3AqsCrQK5ArgCrQK4AqwCrgK6ArkCrgK5Aq0CrwK7AroCrwK6Aq4CsAK8ArsCsAK7Aq8CsQK9ArwCsQK8ArACsgK+Ar0CsgK9ArECswK/Ar4CswK+ArICtALAAr8CtAK/ArMCtQLBAsACtQLAArQCtwLDAsICtwLCArYCuALEAsMCuALDArcCuQLFAsQCuQLEArgCugLGAsUCugLFArkCuwLHAsYCuwLGAroCvALIAscCvALHArsCvQLJAsgCvQLIArwCvgLKAskCvgLJAr0CvwLLAsoCvwLKAr4CwALMAssCwALLAr8CwQLNAswCwQLMAsACwwLPAs4CwwLOAsICxALQAs8CxALPAsMCxQLRAtACxQLQAsQCxgLSAtECxgLRAsUCxwLTAtICxwLSAsYCyALUAtMCyALTAscCyQLVAtQCyQLUAsgCygLWAtUCygLVAskCywLXAtYCywLWAsoCzALYAtcCzALXAssCzQLZAtgCzQLYAswCzwLbAtoCzwLaAs4C0ALcAtsC0ALbAs8C0QLdAtwC0QLcAtAC0gLeAt0C0gLdAtEC0wLfAt4C0wLeAtIC1ALgAt8C1ALfAtMC1QLhAuAC1QLgAtQC1gLiAuEC1gLhAtUC1wLjAuIC1wLiAtYC2ALkAuMC2ALjAtcC2QLlAuQC2QLkAtgC2wLnAuYC2wLmAtoC3ALoAucC3ALnAtsC3QLpAugC3QLoAtwC3gLqAukC3gLpAt0C3wLrAuoC3wLqAt4C4ALsAusC4ALrAt8C4QLtAuwC4QLsAuAC4gLuAu0C4gLtAuEC4wLvAu4C4wLuAuIC5ALwAu8C5ALvAuMC5QLxAvAC5QLwAuQC5wLzAvIC5wLyAuYC6AL0AvMC6ALzAucC6QL1AvQC6QL0AugC6gL2AvUC6gL1AukC6wL3AvYC6wL2AuoC7AL4AvcC7AL3AusC7QL5AvgC7QL4AuwC7gL6AvkC7gL5Au0C7wL7AvoC7wL6Au4C8AL8AvsC8AL7Au8C8QL9AvwC8QL8AvAC8wL/Av4C8wL+AvIC9AIAA/8C9AL/AvMC9QIBAwAD9QIAA/QC9gICAwED9gIBA/UC9wIDAwID9wICA/YC+AIEAwMD+AIDA/cC+QIFAwQD+QIEA/gC+gIGAwUD+gIFA/kC+wIHAwYD+wIGA/oC/AIIAwcD/AIHA/sC/QIJAwgD/QIIA/wC/wILAwoD/wIKA/4CAAMMAwsDAAMLA/8CAQMNAwwDAQMMAwADAgMOAw0DAgMNAwEDAwMPAw4DAwMOAwIDBAMQAw8DBAMPAwMDBQMRAxADBQMQAwQDBgMSAxEDBgMRAwUDBwMTAxIDBwMSAwYDCAMUAxMDCAMTAwcDCQMVAxQDCQMUAwgDCwMXAxYDCwMWAwoDDAMYAxcDDAMXAwsDDQMZAxgDDQMYAwwDDgMaAxkDDgMZAw0DDwMbAxoDDwMaAw4DEAMcAxsDEAMbAw8DEQMdAxwDEQMcAxADEgMeAx0DEgMdAxEDEwMfAx4DEwMeAxIDFAMgAx8DFAMfAxMDFQMhAyADFQMgAxQDFwMjAyIDFwMiAxYDGAMkAyMDGAMjAxcDGQMlAyQDGQMkAxgDGgMmAyUDGgMlAxkDGwMnAyYDGwMmAxoDHAMoAycDHAMnAxsDHQMpAygDHQMoAxwDHgMqAykDHgMpAx0DHwMrAyoDHwMqAx4DIAMsAysDIAMrAx8DIQMtAywDIQMsAyADIwMvAy4DIwMuAyIDJAMwAy8DJAMvAyMDJQMxAzADJQMwAyQDJgMyAzEDJgMxAyUDJwMzAzIDJwMyAyYDKAM0AzMDKAMzAycDKQM1AzQDKQM0AygDKgM2AzUDKgM1AykDKwM3AzYDKwM2AyoDLAM4AzcDLAM3AysDLQM5AzgDLQM4AywDLwM7AzoDLwM6Ay4DMAM8AzsDMAM7Ay8DMQM9AzwDMQM8AzADMgM+Az0DMgM9AzEDMwM/Az4DMwM+AzIDNANAAz8DNAM/AzMDNQNBA0ADNQNAAzQDNgNCA0EDNgNBAzUDNwNDA0IDNwNCAzYDOANEA0MDOANDAzcDOQNFA0QDOQNEAzgDOwNHA0YDOwNGAzoDPANIA0cDPANHAzsD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H2H4uVPsZrpbEX47No7wuaofYbpeI387RIjrueHQWbpL0387KM3puRm3Ubr1B4A7KM3puRm3UTr1B4A7RIjrueHQWTpL0387No7wuaofYTpeI387H2H4uVPsZjpbEX47eB4BuoqlajoVuHw7TZUGuv7tazpXOXs7RTkHuv7ta7r0Xns7e7sBuoqlaroZ3Hw7mY75uVPsZrrvM347urHxuaofYbrORH87Y6XsueHQWbr/8387E+jquRm3UbovGIA7E+jquRm3UTovGIA7Y6XsueHQWTr/8387urHxuaofYTrORH87mY75uVPsZjrvM347e7sBuoqlajoZ3Hw7RTkHuv7tazr0Xns7lwwIuv7ta7roj3s7pYYCuoqlaropC307Nhb7uVPsZrpLYX47qi3zuaofYbrQcH870xnuueHQWbqRD4A77lnsuRm3UbqaLYA77lnsuRm3UTqaLYA70xnuueHQWTqRD4A7qi3zuaofYTrQcH87Nhb7uVPsZjpLYX47pYYCuoqlajopC307lwwIuv7tazroj3s7vAQJuv7ta7oRyns7H3UDuoqlaroOQ307ueH8uVPsZroll347Vev0uaofYboKpX87m87vueHQWbopKYA7pgvuuRm3UboER4A7pgvuuRm3UToER4A7m87vueHQWTopKYA7Vev0uaofYToKpX87ueH8uVPsZjoll347H3UDuoqlajoOQ307vAQJuv7tazoRyns7LxcKuv7ta7pLC3w7+HsEuoqlarqHgX07fNr+uVPsZrog0347e9P2uaofYboM3387F6zxueHQWbqIRYA7deXvuRm3UborY4A7deXvuRm3UTorY4A7F6zxueHQWTqIRYA7e9P2uaofYToM3387fNr+uVPsZjog0347+HsEuoqlajqHgX07LxcKuv7tazpLC3w7ajkLuv7ta7p0UXw7A5AFuoqlarpCxH07fHQAulPsZrrDEn87qM34uaofYbodDoA7OJnzueHQWbpVY4A7GM7xuRm3UbqzgIA7GM7xuRm3UTqzgIA7OJnzueHQWTpVY4A7qM34uaofYTodDoA7fHQAulPsZjrDEn87A5AFuoqlajpCxH07ajkLuv7tazp0UXw752AMuv7ta7pomnw7xqUGuoqlarrVCH47QnoBulPsZrpkU3870r/6uaofYbrdLIA7F3v1ueHQWboTgYA7WarzuRm3UboYnoA7WarzuRm3UToYnoA7F3v1ueHQWToTgYA70r/6uaofYTrdLIA7QnoBulPsZjpkU387xqUGuoqlajrVCH4752AMuv7tazpomnw7IYMNuv7ta7oF5Hw7OrEHuoqlarqrTH47KnECulPsZroEkn87Bo38uaofYbobSoA7XDP3ueHQWbr+nIA7Z1v1uRm3UbqOuYA7Z1v1uRm3UTqOuYA7XDP3ueHQWTr+nIA7Bo38uaofYTobSoA7KnECulPsZjoEkn87OrEHuoqlajqrTH47IYMNuv7tazoF5Hw7kZUOuv7ta7onLH07WaUIuoqlarrWjH478EkDulPsZrr+yn87KRP+uaofYbq+Y4A7oJ34ueHQWbrMtIA7Ebz2uRm3Ubq60IA7Ebz2uRm3UTq60IA7oJ34ueHQWTrMtIA7KRP+uaofYTq+Y4A78EkDulPsZjr+yn87WaUIuoqlajrWjH47kZUOuv7tazonLH07so0Puv7ta7qscH072A8Kuoqlarrv8H47mxsFulPsZrrLJYA7IC0BuqofYbpYr4A72039ueHQWbqoB4E7hpD7uRm3UboWJoE7hpD7uRm3UToWJoE72039ueHQWTqoB4E7IC0BuqofYTpYr4A7mxsFulPsZjrLJYA72A8Kuoqlajrv8H47so0Puv7tazqscH07LZUQuv7ta7pmon07f1MRuoqlarr0J4A7L/8RulPsZrooXYE7cIcSuqofYbqLUoI7694SuuHQWboX8II7EP0Suhm3UbpgJoM7EP0Suhm3UTpgJoM7694SuuHQWToX8II7cIcSuqofYTqLUoI7L/8RulPsZjooXYE7f1MRuoqlajr0J4A7LZUQuv7tazpmon07bSURuv7ta7pZfn07lN8WuoqlaroA7X47NwoculPsZrriG4A73SMguqofYbohn4A7yMUiuuHQWbpl84A7/60juhm3UbpvEIE7/60juhm3UTpvEIE7yMUiuuHQWTpl84A73SMguqofYTohn4A7NwoculPsZjriG4A7lN8WuoqlajoA7X47bSURuv7tazpZfn07Vv8Ruv7ta7rjR307gbkXuoqlarqJtn47J+QculPsZrqmAIA70P0guqofYbrlg4A7vJ8juuHQWbop2IA79Ickuhm3Uboy9YA79Ickuhm3UToy9YA7vJ8juuHQWTop2IA70P0guqofYTrlg4A7J+QculPsZjqmAIA7gbkXuoqlajqJtn47Vv8Ruv7tazrjR307fhATuv7ta7qeA307qcoYuoqlarpEcn47T/UdulPsZroHvX87+Q4iuqofYbrCYYA75bAkuuHQWboGtoA7HZkluhm3UboQ04A7HZkluhm3UToQ04A75bAkuuHQWToGtoA7+Q4iuqofYTrCYYA7T/UdulPsZjoHvX87qcoYuoqlajpEcn47fhATuv7tazqeA307ekYUuv7ta7oltnw7pwAauoqlarrLJH47UCsfulPsZrqNb387+0QjuqofYboFO4A76OYluuHQWbpJj4A7IM8muhm3UbpSrIA7IM8muhm3UTpSrIA76OYluuHQWTpJj4A7+0QjuqofYToFO4A7UCsfulPsZjqNb387pwAauoqlajrLJH47ekYUuv7tazoltnw74I4Vuv7ta7oRZHw7EUkbuoqlarq20n07vXMgulPsZrp3HX87a40kuqofYbr6EYA7Wi8nuuHQWbo+ZoA7kxcouhm3UbpHg4A7kxcouhm3UTpHg4A7Wi8nuuHQWTo+ZoA7a40kuqofYTr6EYA7vXMgulPsZjp3HX87EUkbuoqlajq20n074I4Vuv7tazoRZHw7RtcWuv7ta7r9EXw7c5EcuoqlarqjgH07HLwhulPsZrply347x9UluqofYbri0X87tHcouuHQWbo1PYA77F8puhm3Ubo+WoA77F8puhm3UTo+WoA7tHcouuHQWTo1PYA7x9UluqofYTri0X87HLwhulPsZjply347c5EcuoqlajqjgH07RtcWuv7tazr9EXw7Qg0Yuv7ta7qExHs7bccduoqlaroqM307E/IiulPsZrrtfX47vQsnuqofYbprhH87qa0puuHQWbp5FoA74ZUquhm3UbqDM4A74ZUquhm3UTqDM4A7qa0puuHQWTp5FoA7vQsnuqofYTprhH87E/IiulPsZjrtfX47bccduoqlajoqM307Qg0Yuv7tazqExHs7ah4Zuv7ta7o/gHs7ldgeuoqlarrl7nw7OwMkulPsZrqoOX475BwouqofYbomQH870L4quuHQWbqu6H87CKcruhm3UbpgEYA7CKcruhm3UTpgEYA70L4quuHQWTqu6H875BwouqofYTomQH87OwMkulPsZjqoOX47ldgeuoqlajrl7nw7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XwBUAF8AUwBVAGEAYABVAGAAVABWAGIAYQBWAGEAVQBXAGMAYgBXAGIAVgBYAGQAYwBYAGMAVwBZAGUAZABZAGQAWABaAGYAZQBaAGUAWQBbAGcAZgBbAGYAWgBcAGgAZwBcAGcAWwBdAGkAaABdAGgAXABfAGsAagBfAGoAXgBgAGwAawBgAGsAXwBhAG0AbABhAGwAYABiAG4AbQBiAG0AYQBjAG8AbgBjAG4AYgBkAHAAbwBkAG8AYwBlAHEAcABlAHAAZABmAHIAcQBmAHEAZQBnAHMAcgBnAHIAZgBoAHQAcwBoAHMAZwBpAHUAdABpAHQAaABrAHcAdgBrAHYAagBsAHgAdwBsAHcAawBtAHkAeABtAHgAbABuAHoAeQBuAHkAbQBvAHsAegBvAHoAbgBwAHwAewBwAHsAbwBxAH0AfABxAHwAcAByAH4AfQByAH0AcQBzAH8AfgBzAH4AcgB0AIAAfwB0AH8AcwB1AIEAgAB1AIAAdAB3AIMAggB3AIIAdgB4AIQAgwB4AIMAdwB5AIUAhAB5AIQAeAB6AIYAhQB6AIUAeQB7AIcAhgB7AIYAegB8AIgAhwB8AIcAewB9AIkAiAB9AIgAfAB+AIoAiQB+AIkAfQB/AIsAigB/AIoAfgCAAIwAiwCAAIsAfwCBAI0AjACBAIwAgACDAI8AjgCDAI4AggCEAJAAjwCEAI8AgwCFAJEAkACFAJAAhACGAJIAkQCGAJEAhQCHAJMAkgCHAJIAhgCIAJQAkwCIAJMAhwCJAJUAlACJAJQAiACKAJYAlQCKAJUAiQCLAJcAlgCLAJYAigCMAJgAlwCMAJcAiwCNAJkAmACNAJgAjACPAJsAmgCPAJoAjgCQAJwAmwCQAJsAjwCRAJ0AnACRAJwAkACSAJ4AnQCSAJ0AkQCTAJ8AngCTAJ4AkgCUAKAAnwCUAJ8AkwCVAKEAoACVAKAAlACWAKIAoQCWAKEAlQCXAKMAogCXAKIAlgCYAKQAowCYAKMAlwCZAKUApACZAKQAmACbAKcApgCbAKYAmgCcAKgApwCcAKcAmwCdAKkAqACdAKgAnACeAKoAqQCeAKkAnQCfAKsAqgCfAKoAngCgAKwAqwCgAKsAnwChAK0ArAChAKwAoACiAK4ArQCiAK0AoQCjAK8ArgCjAK4AogCkALAArwCkAK8AowClALEAsAClALAApACnALMAsgCnALIApgCoALQAswCoALMApwCpALUAtACpALQAqACqALYAtQCqALUAqQCrALcAtgCrALYAqgCsALgAtwCsALcAqwCtALkAuACtALgArACuALoAuQCuALkArQCvALsAugCvALoArgCwALwAuwCwALsArwCxAL0AvACxALwAsACzAL8AvgCzAL4AsgC0AMAAvwC0AL8AswC1AMEAwAC1AMAAtAC2AMIAwQC2AMEAtQC3AMMAwgC3AMIAtgC4AMQAwwC4AMMAtwC5AMUAxAC5AMQAuAC6AMYAxQC6AMUAuQC7AMcAxgC7AMYAugC8AMgAxwC8AMcAuwC9AMkAyAC9AMgAvAC/AMsAygC/AMoAvgDAAMwAywDAAMsAvwDBAM0AzADBAMwAwADCAM4AzQDCAM0AwQDDAM8AzgDDAM4AwgDEANAAzwDEAM8AwwDFANEA0ADFANAAxADGANIA0QDGANEAxQDHANMA0gDHANIAxgDIANQA0wDIANMAxwDJANUA1ADJANQAyADLANcA1gDLANYAygDMANgA1wDMANcAywDNANkA2ADNANgAzADOANoA2QDOANkAzQDPANsA2gDPANoAzgDQANwA2wDQANsAzwDRAN0A3ADRANwA0ADSAN4A3QDSAN0A0QDTAN8A3gDTAN4A0gDUAOAA3wDUAN8A0wDVAOEA4ADVAOAA1ADXAOMA4gDXAOIA1gDYAOQA4wDYAOMA1wDZAOUA5ADZAOQA2ADaAOYA5QDaAOUA2QDbAOcA5gDbAOYA2gDcAOgA5wDcAOcA2wDdAOkA6ADdAOgA3ADeAOoA6QDeAOkA3QDfAOsA6gDfAOoA3gDgAOwA6wDgAOsA3wDhAO0A7ADhAOwA4ADjAO8A7gDjAO4A4gDkAPAA7wDkAO8A4wDlAPEA8ADlAPAA5ADmAPIA8QDmAPEA5QDnAPMA8gDnAPIA5gDoAPQA8wDoAPMA5wDpAPUA9ADpAPQA6ADqAPYA9QDqAPUA6QDrAPcA9gDrAPYA6gDsAPgA9wDsAPcA6wDtAPkA+ADtAPgA7ADvAPsA+gDvAPoA7gDwAPwA+wDwAPsA7wDxAP0A/ADxAPwA8ADyAP4A/QDyAP0A8QDzAP8A/gDzAP4A8gD0AAAB/wD0AP8A8wD1AAEBAAH1AAAB9AD2AAIBAQH2AAEB9QD3AAMBAgH3AAIB9gD4AAQBAwH4AAMB9wD5AAUBBAH5AAQB+AD7AAcBBgH7AAYB+gD8AAgBBwH8AAcB+wD9AAkBCAH9AAgB/AD+AAoBCQH+AAkB/QD/AAsBCgH/AAoB/gAAAQwBCwEAAQsB/wABAQ0BDAEBAQwBAAECAQ4BDQECAQ0BAQEDAQ8BDgEDAQ4BAgEEARABDwEEAQ8BAwEFAREBEAEFARABBAEHARMBEgEHARIBBgEIARQBEwEIARMBBwEJARUBFAEJARQBCAEKARYBFQEKARUBCQELARcBFgELARYBCgEMARgBFwEMARcBCwENARkBGAENARgBDAEOARoBGQEOARkBDQEPARsBGgEPARoBDgEQARwBGwEQARsBDwERAR0BHAERARwBEAETAR8BHgETAR4BEgEUASABHwEUAR8BEwEVASEBIAEVASABFAEWASIBIQEWASEBFQEXASMBIgEXASIBFgEYASQBIwEYASMBFwEZASUBJAEZASQBGAEaASYBJQEaASUBGQEbAScBJgEbASYBGgEcASgBJwEcAScBGwEdASkBKAEdASgBHAEfASsBKgEfASoBHgEgASwBKwEgASsBHwEhAS0BLAEhASwBIAEiAS4BLQEiAS0BIQEjAS8BLgEjAS4BIgEkATABLwEkAS8BIwElATEBMAElATABJAEmATIBMQEmATEBJQEnATMBMgEnATIBJgEoATQBMwEoATMBJwEpATUBNAEpATQBKAErATcBNgErATYBKgEsATgBNwEsATcBKwEtATkBOAEtATgBLAEuAToBOQEuATkBLQEvATsBOgEvAToBLgEwATwBOwEwATsBLwExAT0BPAExATwBMAEyAT4BPQEyAT0BMQEzAT8BPgEzAT4BMgE0AUABPwE0AT8BMwE1AUEBQAE1AUABNAE3AUMBQgE3AUIBNgE4AUQBQwE4AUMBNwE5AUUBRAE5AUQBOAE6AUYBRQE6AUUBOQE7AUcBRgE7AUYBOgE8AUgBRwE8AUcBOwE9AUkBSAE9AUgBPAE+AUoBSQE+AUkBPQE/AUsBSgE/AUoBPgFAAUwBSwFAAUsBPwFBAU0BTAFBAUwBQAFDAU8BTgFDAU4BQgFEAVABTwFEAU8BQwFFAVEBUAFFAVABRAFGAVIBUQFGAVEBRQFHAVMBUgFHAVIBRgFIAVQBUwFIAVMBRwFJAVUBVAFJAVQBSAFKAVYBVQFKAVUBSQFLAVcBVgFLAVYBSgFMAVgBVwFMAVcBSwFNAVkBWAFNAVgBTAFPAVsBWgFPAVoBTgFQAVwBWwFQAVsBTwFRAV0BXAFRAVwBUAFSAV4BXQFSAV0BUQFTAV8BXgFTAV4BUgFUAWABXwFUAV8BUwFVAWEBYAFVAWABVAFWAWIBYQFWAWEBVQFXAWMBYgFXAWIBVgFYAWQBYwFYAWMBVwFZAWUBZAFZAWQBWAFbAWgBZgFbAWYBWgFcAWoBaAFcAWgBWwFdAWsBagFdAWoBXAFeAWwBawFeAWsBXQFfAW0BbAFfAWwBXgFgAW4BbQFgAW0BXwFhAW8BbgFhAW4BYAFiAXABbwFiAW8BYQFjAXIBcAFjAXABYgFkAXQBcgFkAXIBYwFlAXUBdAFlAXQBZAFpAXgBdgFpAXYBZwFqAXkBdwFqAXcBaAFrAXoBeQFrAXkBagFsAXwBegFsAXoBawFtAX4BfAFtAXwBbAFuAYABfgFuAX4BbQFvAYIBgAFvAYABbgFwAYQBggFwAYIBbwFzAYcBhQFzAYUBcQF0AYgBhgF0AYYBcgF1AYkBiAF1AYgBdAF4AYsBigF4AYoBdgF5AY8BjQF5AY0BdwF6AZIBjwF6AY8BeQF9AZMBkAF9AZABewF/AZQBkwF/AZMBfQGBAZUBlAGBAZQBfwGCAZgBlgGCAZYBgAGFAZkBlwGFAZcBgwGHAZoBmQGHAZkBhQGIAZwBmwGIAZsBhgGJAZ0BnAGJAZwBiAGLAaABngGLAZ4BigGOAaMBoQGOAaEBjAGRAaYBowGRAaMBjgGTAagBpQGTAaUBkAGUAaoBqAGUAagBkwGVAawBqgGVAaoBlAGYAa8BrQGYAa0BlgGZAbABrgGZAa4BlwGaAbIBsAGaAbABmQGcAbQBswGcAbMBmwGdAbUBtAGdAbQBnAGiAbkBtwGiAbcBnwGkAboBuQGkAbkBogGnAbwBugGnAboBpAGpAb4BvAGpAbwBpwGqAb8BvQGqAb0BqAGtAcEBwAGtAcABqwGvAcMBwQGvAcEBrQGwAcQBwgGwAcIBrgGzAcYBxQGzAcUBsQG0AccBxgG0AcYBswG1AcgBxwG1AccBtAG4AcsByQG4AckBtgG6Ac0BzAG6AcwBuQG8Ac8BzQG8Ac0BugG9AdABzgG9Ac4BuwHAAdIB0QHAAdEBvgHBAdMB0gHBAdIBwAHDAdQB0wHDAdMBwQHFAdUB1AHFAdQBwwHGAdYB1QHGAdUBxQHHAdcB1gHHAdYBxgHIAdgB1wHIAdcBxwHMAdoB2QHMAdkBygHNAdsB2gHNAdoBzAHPAdwB2wHPAdsBzQHRAd0B3AHRAdwBzwHSAd4B3QHSAd0B0QHTAd8B3gHTAd4B0gHUAeAB3wHUAd8B0wHVAeIB4AHVAeAB1AHWAeQB4gHWAeIB1QHXAeUB5AHXAeQB1gHYAeYB5QHYAeUB1wHaAegB5wHaAecB2QHbAekB6AHbAegB2gHcAeoB6QHcAekB2wHdAesB6gHdAeoB3AHeAewB6wHeAesB3QHfAe0B7AHfAewB3gHgAe4B7QHgAe0B3wHiAfAB7gHiAe4B4AHjAfEB7wHjAe8B4QHlAfMB8gHlAfIB5AHmAfQB8wHmAfMB5QHoAfYB9QHoAfUB5wHpAfcB9gHpAfYB6AHqAfgB9wHqAfcB6QHrAfkB+AHrAfgB6gHsAfoB+QHsAfkB6wHtAfsB+gHtAfoB7AHuAfwB+wHuAfsB7QHwAf0B/AHwAfwB7gHyAf4B/QHyAf0B8AHzAf8B/gHzAf4B8gH0AQAC/wH0Af8B8wH2AQQCAgL2AQIC9QH3AQUCBAL3AQQC9gH4AQYCBQL4AQUC9wH5AQcCBgL5AQYC+AH6AQgCBwL6AQcC+QH7AQkCCAL7AQgC+gH8AQoCCQL8AQkC+wH9AQsCCgL9AQoC/AH+AQwCCwL+AQsC/QH/AQ0CDAL/AQwC/gEAAg4CDQIAAg0C/wEDAhECDwIDAg8CAQIFAhMCEgIFAhICBAIGAhQCEwIGAhMCBQIHAhUCFAIHAhQCBgIIAhYCFQIIAhUCBwIJAhcCFgIJAhYCCAIKAhgCFwIKAhcCCQILAhkCGAILAhgCCgIMAhoCGQIMAhkCCwINAhsCGgINAhoCDAIOAhwCGwIOAhsCDQISAh4CHQISAh0CEAITAh8CHgITAh4CEgIUAiACHwIUAh8CEwIVAiECIAIVAiACFAIWAiICIQIWAiECFQIXAiMCIgIXAiICFgIYAiQCIwIYAiMCFwIZAiUCJAIZAiQCGAIaAiYCJQIaAiUCGQIbAicCJgIbAiYCGgIcAigCJwIcAicCGwIeAioCKQIeAikCHQIfAisCKgIfAioCHgIgAiwC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GbdRuvdwHjunk5S6GbdROvdwHjunk5S6GbdROvdwHjs2hpS64dBZOhUfHjs1X5S6qh9hOnExHTt1IpS6U+xmOk+/Gzvp1ZO6iqVqOursGTsOgZO6/u1rOunnFzs3rea6/u1ruicTEzvGR+e6iqVquhsUFTs00+e6U+xmutniFjvbQei6qh9huhVSGDvmiOi64dBZut09GTthoei6GbdRuhuPGTthoei6GbdROhuPGTthoei6GbdROhuPGTvmiOi64dBZOt09GTvbQei6qh9hOhVSGDs00+e6U+xmOtniFjvGR+e6iqVqOhsUFTs3rea6/u1rOicTEzvhlRy7/u1runVsCzvNBR27iqVquvxmDTvEah27U+xmuu4vDzvkuh27qh9hupGaEDtW7h274dBZumSDETsPAB67GbdRup7TETsPAB67GbdROp7TETsPAB67GbdROp7TETtW7h274dBZOmSDETvkuh27qh9hOpGaEDvEah27U+xmOu4vDzvNBR27iqVqOvxmDTvhlRy7/u1rOnVsCzs6VkW7/u1rutTzADt46EW7iqVquorlAjtmbEa7U+xmuoemBDsZ1Ua7qh9hutkKBjtRGEe74dBZup7vBjt7L0e7GbdRunM+Bzt7L0e7GbdROnM+Bzt7L0e7GbdROnM+BztRGEe74dBZOp7vBjsZ1Ua7qh9hOtkKBjtmbEa7U+xmOoemBDt46EW7iqVqOorlAjs6VkW7/u1rOtTzADuIb227/u1ruohS5zqoI267iqVqun0f6zomxm67U+xmujWN7joaR2+7qh9husRF8TrlmW+74dBZuv0E8zpttm+7GbdRuhef8zpttm+7GbdROhef8zpttm+7GbdROhef8zrlmW+74dBZOv0E8zoaR2+7qh9hOsRF8Tomxm67U+xmOjWN7jqoI267iqVqOn0f6zqIb227/u1rOohS5zrXXIq7/u1ruokZxzqMx4q7iqVqujDLyjrQJ4u7U+xmukYgzjo1dIu7qh9huknF0DpBpYu74dBZuvR30jootou7GbdRursN0zootou7GbdROrsN0zootou7GbdROrsN0zpBpYu74dBZOvR30jo1dIu7qh9hOknF0DrQJ4u7U+xmOkYgzjqMx4q7iqVqOjDLyjrXXIq7/u1rOokZxzpHhp27/u1ruqs8oTpBAZ67iqVqui3OpDoycJ67U+xmukMGqDo8yJ67qh9hukOUqjrDAJ+74dBZuic4rDo9FJ+7GbdRutfIrDo9FJ+7GbdROtfIrDo9FJ+7GbdROtfIrDrDAJ+74dBZOic4rDo8yJ67qh9hOkOUqjoycJ67U+xmOkMGqDpBAZ67iqVqOi3OpDpHhp27/u1rOqs8oToGILC7/u1rutx3azrLqrC7iqVquv9Qcjr7J7G7U+xmuoZ+eDpVi7G7qh9huqFlfToey7G74dBZurpFgDoZ4bG7GbdRupDQgDoZ4bG7GbdROpDQgDoZ4bG7GbdROpDQgDoey7G74dBZOrpFgDpVi7G7qh9hOqFlfTr7J7G7U+xmOoZ+eDrLqrC7iqVqOv9QcjoGILC7/u1rOtx3azoEFsK7/u1ruqUuCToAsMK7iqVquoe0DzrqOsO7U+xmuvOWFTonqcO7qh9hunRCGjrv78O74dBZugRCHTpSCMS7GbdRuoBKHjpSCMS7GbdROoBKHjpSCMS7GbdROoBKHjrv78O74dBZOgRCHTonqcO7qh9hOnRCGjrqOsO7U+xmOvOWFToAsMK7iqVqOoe0DzoEFsK7/u1rOqUuCTozVNO7/u1ruoTt3Di0/NO7iqVqujodBzm3lNS7U+xmuv1ZHTlaDdW7qh9husn/LjnOWtW74dBZumRUOjl+ddW7GbdRuuA7Pjl+ddW7GbdROuA7Pjl+ddW7GbdROuA7PjnOWtW74dBZOmRUOjlaDdW7qh9hOsn/Ljm3lNS7U+xmOv1ZHTm0/NO7iqVqOjodBzkzVNO7/u1rOoTt3DiExuO7/u1rugB2urnqeeS7iqVqutvCrrnBG+W7U+xmuuY0pLkwnOW7qh9hup3Um7mm7uW74dBZuuZzlrkQC+a7GbdRuoOZlLkQC+a7GbdROoOZlLkQC+a7GbdROoOZlLmm7uW74dBZOuZzlrmm7uW74dBZOuZzlrkwnOW7qh9hOp3Um7kwnOW7qh9hOp3Um7nBG+W7U+xmOuY0pLnBG+W7U+xmOuY0pLnqeeS7iqVqOtvCrrnqeeS7iqVqOtvCrrmExuO7/u1rOgB2urmExuO7/u1rOgB2urkb5OO7/u1rumBPvLlkm+S7iqVqumrasLm8QOW7U+xmuo2Eprn0w+W7qh9hushQnrk0GOa74dBZuqUMmbk7Nea7GbdRuhw8l7k7Nea7GbdROhw8l7k0GOa74dBZOqUMmbn0w+W7qh9hOshQnrm8QOW7U+xmOo2Eprlkm+S7iqVqOmrasLkb5OO7/u1rOmBPvLmyAeS7/u1rusAovrn6uOS7iqVqurGzsrlQXuW7U+xmur5dqLmH4eW7qh9huucpoLnGNea74dBZurnlmrnNUua7GbdRuiwVmbnNUua7GbdROiwVmbnGNea74dBZOrnlmrmH4eW7qh9hOucpoLlQXuW7U+xmOr5dqLn6uOS7iqVqOrGzsrmyAeS7/u1rOsAovrlKH+S7/u1ruiACwLmQ1uS7iqVquviMtLnme+W7U+xmuu42qrkb/+W7qh9hugYDorlZU+a74dBZus2+nLlgcOa7GbdRujzumrlgcOa7GbdROjzumrlZU+a74dBZOs2+nLkb/+W7qh9hOgYDornme+W7U+xmOu42qrmQ1uS7iqVqOviMtLlKH+S7/u1rOiACwLniPOS7/u1ruoDbwbko9OS7iqVqulhmtrl+meW7U+xmuk4QrLmzHOa7qh9humbco7nxcOa74dBZui2Ynrn4jea7GbdRupzHnLn4jea7GbdROpzHnLnxcOa74dBZOi2YnrmzHOa7qh9hOmbco7l+meW7U+xmOk4QrLko9OS7iqVqOlhmtrniPOS7/u1rOoDbwbl6WuS7/u1ruuC0w7nAEeW7iqVqurg/uLkWt+W7U+xmuq7prblLOua7qh9husa1pbmJjua74dBZuo1xoLmQq+a7GbdRuvygnrmQq+a7GbdROvygnrmJjua74dBZOo1xoLlLOua7qh9hOsa1pbkWt+W7U+xmOq7prbnAEeW7iqVqOrg/uLl6WuS7/u1rOuC0w7kSeOS7/u1rukCOxblYL+W7iqVquhgZurmu1OW7U+xmug7Dr7njV+a7qh9huiaPp7khrOa74dBZuu1Korkoyea7GbdRulx6oLkoyea7GbdROlx6oLkhrOa74dBZOu1KornjV+a7qh9hOiaPp7mu1OW7U+xmOg7Dr7lYL+W7iqVqOhgZurkSeOS7/u1rOkCOxbmqleS7/u1ruqBnx7nwTOW7iqVqunjyu7lG8uW7U+xmum6csbl7dea7qh9huoZoqbm5yea74dBZuk0kpLnA5ua7GbdRurxTornA5ua7GbdROrxTorm5yea74dBZOk0kpLl7dea7qh9hOoZoqblG8uW7U+xmOm6csbnwTOW7iqVqOnjyu7mqleS7/u1rOqBnx7lCs+S7/u1rugBBybmIauW7iqVqutjLvbneD+a7U+xmus51s7kTk+a7qh9huuZBq7lR5+a74dBZuq39pblYBOe7GbdRuhwtpLlYBOe7GbdROhwtpLlR5+a74dBZOq39pbkTk+a7qh9hOuZBq7neD+a7U+xmOs51s7mIauW7iqVqOtjLvblCs+S7/u1rOgBBybna0OS7/u1rumAay7kgiOW7iqVqujilv7l2Lea7U+xmui5PtbmrsOa7qh9hukYbrbnpBOe74dBZug3Xp7nwIee7GbdRunwGprnwIee7GbdROnwGprnpBOe74dBZOg3Xp7mrsOa7qh9hOkYbrbl2Lea7U+xmOi5PtbkgiOW7iqVqOjilv7na0OS7/u1rOmAay7ly7uS7/u1rusDzzLm4peW7iqVquph+wbkOS+a7U+xmuo4ot7lDzua7qh9huqb0rrmBIue74dBZum2wqbmIP+e7GbdRutzfp7mIP+e7GbdROtzfp7mBIue74dBZOm2wqblDzua7qh9hOqb0rrkOS+a7U+xmOo4ot7m4peW7iqVqOph+wbly7uS7/u1rOsDzzLkKDOW7/u1ruiDNzrlNw+W7iqVqusdXw7mgaOa7U+xmupABubnT6+a7qh9huoTNsLkQQOe74dBZujSJq7kWXee7GbdRupy4qbkWXee7GbdROpy4qbkQQOe74dBZOjSJq7nT6+a7qh9hOoTNsLmgaOa7U+xmOpABublNw+W7iqVqOsdXw7kKDOW7/u1rOiDNzrmkKeW7/u1ruoCm0LmkKeW7/u1ruoCm0LlOmOa7iqVqugmm0LlOmOa7iqVqugmm0LkU4+e7U+xmup2l0LmU6ei7qh9hukil0LmU6ei7qh9hukil0Lkekum74dBZuhGl0Lkekum74dBZuhGl0LkxzOm7GbdRuv+k0LkxzOm7GbdRuv+k0LkxzOm7GbdROv+k0Lkekum74dBZOhGl0LmU6ei7qh9hOkil0LkU4+e7U+xmOp2l0LkU4+e7U+xmOp2l0LlOmOa7iqVqOgmm0LlOmOa7iqVqOgmm0LmkKeW7/u1rOoCm0LmkKeW7/u1rOoCm0Ln6+eG7/u1rujDPAbpBseK7iqVqurqJB7pBseK7iqVqurqJB7qYVuO7U+xmura0DLrO2eO7qh9huqPOELrO2eO7qh9huqPOELoNLuS74dBZurtwE7oUS+S7GbdRugJZFLoUS+S7GbdRugJZFLoUS+S7GbdROgJZFLoUS+S7GbdROgJZFLoNLuS74dBZOrtwE7oNLuS74dBZOrtwE7rO2eO7qh9hOqPOELrO2eO7qh9hOqPOELqYVuO7U+xmOra0DLqYVuO7U+xmOra0DLqYVuO7U+xmOra0DLpBseK7iqVqOrqJB7r6+eG7/u1rOjDPAbroKtm7/u1ruvRDSLov4tm7iqVqun7+Tbov4tm7iqVqun7+TbqGh9q7U+xmunopU7q8Ctu7qh9humdDV7q8Ctu7qh9humdDV7r7Xtu74dBZun/lWboCfNu7GbdRusbNWroCfNu7GbdROsbNWroCfNu7GbdROsbNWrr7Xtu74dBZOn/lWbr7Xtu74dBZOn/lWbq8Ctu7qh9hOmdDV7qGh9q7U+xmOnopU7qGh9q7U+xmOnopU7ov4tm7iqVqOn7+TbroKtm7/u1rOvRDSLpP3Mu7/u1run5ZmbqWk8y7iqVqusM2nLqWk8y7iqVqusM2nLrtOM27U+xmukHMnrojvM27qh9hujfZoLojvM27qh9hujfZoLpiEM674dBZukQqorppLc67GbdRumeeorppLc67GbdROmeeorppLc67GbdROmeeorpiEM674dBZOkQqorpiEM674dBZOkQqorojvM27qh9hOjfZoLrtOM27U+xmOkHMnrrtOM27U+xmOkHMnrqWk8y7iqVqOsM2nLpP3Mu7/u1rOn5ZmboRLru7/u1rutsO3LpY5bu7iqVquiDs3rpY5bu7iqVquiDs3rqviry7U+xmup6B4brlDb27qh9hupSO47rlDb27qh9hupSO47okYr274dBZuqDf5Lorf727GbdRusRT5borf727GbdROsRT5borf727GbdROsRT5bokYr274dBZOqDf5LokYr274dBZOqDf5LrlDb27qh9hOpSO47qviry7U+xmOp6B4bqviry7U+xmOp6B4bpY5bu7iqVqOiDs3roRLru7/u1rOtsO3LoQQKi7/u1rumThE7tX96i7iqVqugZQFbtX96i7iqVqugZQFbuunKm7U+xmusWaFrvkH6q7qh9hukGhF7vkH6q7qh9hukGhF7sjdKq74dBZusdJGLsqkaq7GbdRutiDGLsqkaq7GbdROtiDGLsqkaq7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AACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAz/NS+AAAAAIXMaD/hfgq/NlInvg0zUz9ar+m+YbAlvnP7Xz+d0dG+CyMbvvhFZj/6ubi+sJPlvcEGbT+ghL6+BkeUvFKSbT+ghL6+BkeUPFKSbT/6ubi+sJPlPcEGbT/6ubi+sJPlPcEGbT+d0dG+CyMbPvhFZj+d0dG+CyMbPvhFZj9ar+m+YbAlPnP7Xz9ar+m+YbAlPnP7Xz/hfgq/NlInPg0zUz/hfgq/NlInPg0zUz8z/NS+AAAAAIXMaD/14Ym++h4Fvd9mdj8G7m+/Ti6yvsWvtryuWyu/r4iOvaRaPb8x8xq/06tHvnSSRb8Ljhq/qooSvuHDSL8VHB6/kXulvLxFSb/pzR2/wQ8+PG+OSb9g+hq/OJELPuG/SL+ndBe/xK46PnwLSb9PJia/G88qPdZ2Qr+IDHG/JD6oPn67lr1Vm7W+y2lePW3zbj/qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL4hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL4hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL4hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr4hpeM+6xxPv0HSxL4KrBw/EnoWvxtzB7/tLDg/Pzeevmc9H79aDkE//MWgvefqJr9aDkE//MWgPefqJr/tLDg/PzeePmc9H78KrBw/EnoWPxtzB78hpeM+6xxPP0HSxL4hpeM+6xxPP0HSxL5DZm8+PHhzP7XwTr5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b3qRvI9idl8P1uC0b3qRvI9idl8v1uC0b1DZm8+PHhzv7XwTr6mr+M+kBpPvwXQxL4KrBw/EnoWvxtzB78FMzg/2TaevnQ2H79nFEE/ksWgverjJr9nFEE/ksWgPerjJr8FMzg/2TaePnQ2H78FMzg/2TaePnQ2H78KrBw/EnoWPxtzB78KrBw/EnoWPxtzB7+mr+M+kBpPPwXQxL6mr+M+kBpPPwXQxL5DZm8+PHhzP7XwTr5DZm8+PHhzP7XwTr7qRvI9idl8P1uC0b0hecc9Nb5+v38tkDzBDII+N1N3v1ACPD2ZNe8+805hv3TarD2r8DE/gDc1v0WcAD4P2mU/S43RvgMwJj4gNno/+C3uvRTWND4gNno/+C3uPRTWND4gNno/+C3uPRTWND4P2mU/S43RPgMwJj4P2mU/S43RPgMwJj6r8DE/gDc1P0WcAD6ZNe8+805hP3TarD3BDII+N1N3P1ACPD0hecc9Nb5+P38tkDxebpI9g9l8vwJwDj5BuBE+zkhzv925jT6D74k+m9NOvx0sBj//i70+4DIWvyNgOD84rN4+UuedvnCUWD8lUOk+PY+gvXH9Yj8lUOk+PY+gPXH9Yj8lUOk+PY+gPXH9Yj84rN4+UuedPnCUWD//i70+4DIWPyNgOD+D74k+m9NOPx0sBj9BuBE+zkhzP925jT5ebpI9g9l8PwJwDj4R5IM9wNl8v27rET65RQM+Tktzv6clkT4+o3g+w9ROv8JzCT+Tzao+7jEWv/fmPD8ipsg+1OWdvoTlXT/2RtI+8o+gvZCMaD/2RtI+8o+gPZCMaD/2RtI+8o+gPZCMaD8ipsg+1OWdPoTlXT+Tzao+7jEWP/fmPD8+o3g+w9ROP8JzCT+5RQM+TktzP6clkT4R5IM9wNl8P27rET6t7Ws9ldl8v4zjFD7Ffuo9M01zv+QRlD4rNF4+FthOv/E7DD9arpg+MTkWv1u4QD/kWrM+7uadvoFoYj9D87s+GY+gvbhHbT9D87s+GY+gPbhHbT9D87s+GY+gPbhHbT/kWrM+7uadPoFoYj9arpg+MTkWP1u4QD8rNF4+FthOP/E7DD/Ffuo9M01zP+QRlD6t7Ws9ldl8P4zjFD505VA9Adp8v/FYFz7zrM897U9zv557lj52zUQ+49xOvxqPDj9/OYc+DzoWv0LzQz+C4J4+eOedvjszZj80gKY+yI+gvYdAcT80gKY+yI+gPYdAcT80gKY+yI+gPYdAcT+C4J4+eOedPjszZj9/OYc+DzoWP0LzQz92zUQ+49xOPxqPDj/zrM897U9zP557lj505VA9Adp8P/FYFz7lFjc9SNl8vwJ/GT5QELY9yFJzv394mD6Qciw+deFOv8p9ED9gDG0+1j0Wv72fRj/LQ4s+8vOdvmhYaT8X7JE+z5CgvX+PdD8X7JE+z5CgPX+PdD8X7JE+z5CgPX+PdD/LQ4s+8vOdPmhYaT9gDG0+1j0WP72fRj+Qciw+deFOP8p9ED9QELY9yFJzP394mD7lFjc9SNl8PwJ/GT7egx493tl8v8siGz50fp09EFVzv14dmj4KTBU+beVOv0wSEj9pOE0+GEEWvyLRSD/NDnE+FvWdvgjwaz/kn3w+y5CgvSpGdz/kn3w+y5CgPSpGdz/kn3w+y5CgPSpGdz/NDnE+FvWdPgjwaz9pOE0+GEEWPyLRSD8KTBU+beVOP0wSEj90fp09EFVzP14dmj7egx493tl8P8siGz6wKgc9Ttl8v3KRHD5ZJoY9qlZzvy9zmz4oW/49DOVOv0FgEz/05C4+kEQWv8CXSj+ma00+6vSdvi8Jbj9AWFc+to+gvRp4eT9AWFc+to+gPRp4eT9AWFc+to+gPRp4eT+ma00+6vSdPi8Jbj/05C4+kEQWP8CXSj8oW/49DOVOP0FgEz9ZJoY9qlZzPy9zmz6wKgc9Ttl8P3KRHD6PGOI8+dh8v5ixHT6sCmA94VdzvwODnD7hl9Q95+hOv5tiFD+bBhI+iEYWv9sCTD+/nys+MgGevu2xbz936zM+3ZCgvYw3ez936zM+3ZCgPYw3ez936zM+3ZCgPYw3ez+/nys+MgGePu2xbz9KIBI++0UWPxwCTD/hl9Q95+hOP5tiFD+sCmA94VdzPwODnD6PGOI8+dh8P5ixHT7Uf7c8ZNl8v5GDHj7PRTY9wlpzv3lJnT6Ypaw95OxOv+4rFT93j+099UoWv8QZTT9qkQs+5v+dvi/+cD+0OxI+3pGgvXmUfD+0OxI+3pGgPXmUfD+0OxI+3pGgPXmUfD9qkQs+5v+dPi/+cD93j+099UoWP8QZTT+Ypaw95OxOP+4rFT/PRTY9wlpzP3lJnT7Uf7c8ZNl8P5GDHj4KXI88sdl8vwohHz4kiw49tVtzv2DnnT4F+IY99e5OvyjEFT+Uwbk9uEwWv+TtTT9AHdo9PQGevkX5cT+OxeQ9/5GgvdSafT+OxeQ9/5GgPdSafT+OxeQ9/5GgPdSafT9AHdo9PQGePkX5cT+Uwbk9uEwWP+TtTT8F+IY99e5OPyjEFT8kiw49tVtzP2DnnT4KXI88sdl8PwohHz7rWVM8Ltl8v8ujHz7EudE8oV1zv3tRnj7qpUY9MfFOv3EwFj/Bm4g9G04Wv4eGTj9WWqA9bf+dvv2tcj+RJag9o5GgvVJYfj+RJag9o5GgPVJYfj+RJag9o5GgPVJYfj9WWqA9bf+dPv2tcj/Bm4g9G04WP4eGTj/qpUY9MfFOP3EwFj/EudE8oV1zP3tRnj7rWVM8Ltl8P8ujHz6n0t47Ctp8v/ryHz5Y0V48HUxzv1Mgnz6titI8X9ROv2K2Fj/FlxA9DDMWvxscTz/h+Sk9uuSdvoVKcz/OKzI9DY+gvRH4fj/OKzI9DY+gPRH4fj/OKzI9DY+gPRH4fj/h+Sk9uuSdPoVKcz/FlxA9DDMWPxscTz+titI8X9ROP2K2Fj9Y0V48HUxzP1Mgnz6n0t47Ctp8P/ryHz4kLhC7X9p8v2YNID7kdJO7Azpzv4axnz7yQgu87L1Ov+L1Fj9zDz68gx8Wv0RXTz84d2C8Rs2dvjSDcz+1S2q8+pCgvY0vfz+1S2q8+pCgPY0vfz+1S2q8+pCgPY0vfz84d2C8Rs2dPjSDcz9zDz68gx8WP0RXTz/yQgu87L1OP+L1Fj/kdJO7AzpzP4axnz4kLhC7X9p8P2YNID5lt1G8Rtp8v0SKHz5n5dC8yTlzv04unz4bbEW9jr1Ovxp5Fj9nyIe9bR4Wv2CrTj/2Vp+9u82dvr64cj/W6Ka9kY+gvZpbfj/W6Ka9kY+gPZpbfj/W6Ka9kY+gPZpbfj/2Vp+9u82dPr64cj9nyIe9bR4WP2CrTj8bbEW9jr1OPxp5Fj9n5dC8yTlzP04unz5lt1G8Rtp8P0SKHz7C3768ENp8v49PHj6xdz696Tpzv1vnnT5jA7S9H71Ov1RLFT96MPe9ph0Wv28NTT8hGhG+vsydvkDScD9gEBi+K5CgvWBdfD9gEBi+K5CgPWBdfD9gEBi+K5CgPWBdfD8hGhG+vsydPkDScD96MPe9ph0WP28NTT9jA7S9H71OP1RLFT+xdz696TpzP1vnnT7C3768ENp8P49PHj7xCAq9xtl8v09dHD6T1Im9vTlzv4b0mz6/PwK+VL1OvxVtEz92/DK+XxwWv118Sj9rOlK+lcydvq3MbT9gRVy+yJGgvTszeT9gRVy+yJGgPTszeT9gRVy+yJGgPTszeT9rOlK+lcydPq3MbT92/DK+XxwWP118Sj+/PwK+VL1OPxVtEz+T1Im9vTlzP4b0mz7xCAq9xtl8P09dHD5LojS9Cdp8v66ZGT78BLS92jlzv+k9mT4DSCq+zLtOv6vcED+P32m+8BwWv8P0Rj+SUom+m82dvoKoaT8834++L5CgvTHddD8834++L5CgPTHddD8834++L5CgPTHddD+SUom+m82dPoKoaT+P32m+8BwWP8P0Rj8DSCq+zLtOP6vcED/8BLS92jlzP+k9mT5LojS9Cdp8P66ZGT7saV69MNp8v3oeFj4Zzd29iDpzvwnDlT5EuVG+d7pOv26ZDT/MBpC+kB4Wv3l1Qj+mHqm+2s2dvshiZD8+QLG+Yo+gvWpUbz8+QLG+Yo+gPWpUbz8+QLG+Yo+gPWpUbz+mHqm+2s2dPshiZD/MBpC+kB4WP3l1Qj9EuVG+d7pOP26ZDT8Zzd29iDpzPwnDlT7saV69MNp8P3oeFj7ar4O9Ktp8v6vrET6AYAO+sThzvz2ckT4yh3i+B7lOv5+gCT9opaq+hh0Wvz8APT93ZMi+gsudvgf5XT/o9tG+3Y6gvaeeaD/o9tG+3Y6gPaeeaD/o9tG+3Y6gPaeeaD93ZMi+gsudPgf5XT9opaq+hh0WPz8APT8yh3i+B7lOP5+gCT+AYAO+sThzPz2ckT7ar4O9Ktp8P6vrET6twZe9zNl8vywBDT6gche+/zhzvwqljD6PNY++XLlOv4PxBD9yp8S+Tx0Wvw+TNj+Z6ua+Kc2dvv9tVj/fAfK+no2gveqzYD/fAfK+no2gPeqzYD/fAfK+no2gPeqzYD+Z6ua+Kc2dPv9tVj9yp8S+Tx0WPw+TNj+PNY++XLlOP4PxBD+gche+/zhzPwqljD6twZe9zNl8PywBDT6vNqu9Ntp8v2NFBz4q5yq+zjhzvw32hj4al6G+ULlOv2ci/z785t2+BBgWvyQ1Lz/LTQK/Wsydvju/TT+bigi/e42gvVmdVz+bigi/e42gPVmdVz+bigi/e42gPVmdVz/LTQK/WsydPju/TT/85t2+BBgWPyQ1Lz8al6G+ULlOP2ci/z4q5yq+zjhzPw32hj6vNqu9Ntp8P2NFBz40Dr69Rtp8v+fRAD4YpD2+gDhzv4SPgD6UTLO+W7dOv74K8z72OPa+BhgWvzfjJj96lRC/6b2dvqn8Qz8rghe/Q5KgvaVfTT8rghe/Q5KgPaVfTT8rghe/Q5KgPaVfTT96lRC/6b2dPqn8Qz/2OPa+BhgWPzfjJj+UTLO+W7dOP74K8z4YpD2+gDhzP4SPgD40Dr69Rtp8P+fRAD5eE9C9jdl8v4CB8z2Aj0++ejhzv0njcj6EMcS++rZOv02g5T6dtQa/ZBgWv0qsHT//NB6/CL+dvuUpOT9JyiW/UZGgvRwHQj9JyiW/UZGgPRwHQj9JyiW/UZGgPRwHQj//NB6/CL+dPuUpOT+dtQa/ZBgWP0qsHT+EMcS++rZOP02g5T6Aj0++ejhzP0njcj5eE9C9jdl8P4CB8z3Tl929wNl8v/k35z0ZQVy+rVFzv/LGZT7Jr9C+ft5Ov7a/2T6raA+/cz4Wv7inFT/HfSi/0fGdvgTQLz/flDC/fI6gvd5COD/flDC/fI6gPd5COD/flDC/fI6gPd5COD/HfSi/0fGdPgTQLz/HfSi/0fGdPgTQLz+raA+/cz4WP7inFT+raA+/cz4WP7inFT/Jr9C+ft5OP7a/2T7Jr9C+ft5OP7a/2T4ZQVy+rVFzP/LGZT4ZQVy+rVFzP/LGZT7Tl929wNl8P/k35z3Tl929wNl8P/k35z3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+EJSy/GjievhIsLD+ucjS/JMOgvTt5ND+ucjS/JMOgPTt5ND+EJSy/GjiePhIsLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej8bKSy/YTWevhspLD+ucjS/JMOgvTt5ND+ucjS/JMOgPTt5ND8bKSy/YTWePhspLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D7CbhK/O3oWv091Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD/CbhK/O3oWP091Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz46ydS+VhpPv1XW1D6dbBK/B3gWv7h5Ej+NIiy/YTWevqgvLD9ibzS/C8agvX18ND9ibzS/C8agPX18ND+NIiy/YTWePqgvLD+dbBK/B3gWP7h5Ej86ydS+VhpPP1XW1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j3KgeK9ZNl8v8qB4j1NvF++73hzv028Xz5ivtS+ihxPv5nY1D40aBK/O3oWv917Ej+NIiy/YTWevqgvLD8hbDS/JMOgvcl/ND8hbDS/JMOgPcl/ND+NIiy/YTWePqgvLD80aBK/O3oWP917Ej9ivtS+ihxPP5nY1D5NvF++73hzP028Xz7KgeK9ZNl8P8qB4j1/8OO91Gh+vwAAAAB/8OO91Gh+vwAAAAApXI++j8J1vwAAAAApXI++j8J1vwAAAAB+rwK/VSFcvwAAAABILz2/w3csv0m30ThILz2/w3csv0m30Tj+3my/aDLCvsq10Tj+3my/aDLCvsq10Thxln6/4NTWvS220Thxln6/4NTWvS220Thxln6/4NTWPS220Tj+3my/aDLCPsq10ThILz2/w3csP0m30Th+rwK/VSFcPwAAAAB+rwK/VSFcPwAAAAApXI++j8J1PwAAAAApXI++j8J1PwAAAAB/8OO91Gh+PwAAAAB/8OO91Gh+PwAAAADKgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r3KgeK9ZNl8v8qB4r1NvF++73hzv028X75NvF++73hzv028X746ydS+VhpPv1XW1L7CbhK/O3oWv091Er/CbhK/O3oWv091Er+NIiy/YTWevqgvLL+ucjS/JMOgvTt5NL+ucjS/JMOgPTt5NL+ucjS/JMOgPTt5NL+NIiy/YTWePqgvLL+NIiy/YTWePqgvLL/CbhK/O3oWP091Er86ydS+VhpPP1XW1L46ydS+VhpPP1XW1L5NvF++73hzP028X77KgeK9ZNl8P8qB4r0AAAAA1Gh+v3/w470AAAAAj8J1vylcj74AAAAAj8J1vylcj74AAAAAVSFcv36vAr8AAAAA7XAsv4U1Pb8AAAAA7XAsv4U1Pb8AAAAALyfCvkrhbL8AAAAA4NTWvXGWfr8AAAAA4NTWPXGWfr8AAAAA4NTWPXGWfr8AAAAALyfCPkrhbL8AAAAALyfCPkrhbL8AAAAA7XAsP4U1Pb8AAAAAVSFcP36vAr8AAAAAVSFcP36vAr8AAAAAj8J1Pylcj74AAAAA1Gh+P3/w473KgeI9ZNl8v8qB4r1NvF8+73hzv028X75NvF8+73hzv028X746ydQ+VhpPv1XW1L7CbhI/O3oWv091Er/CbhI/O3oWv091Er+NIiw/YTWevqgvLL+ucjQ/JMOgvTt5NL+ucjQ/JMOgPTt5NL+ucjQ/JMOgPTt5NL+NIiw/YTWePqgvLL+NIiw/YTWePqgvLL/CbhI/O3oWP091Er86ydQ+VhpPP1XW1L46ydQ+VhpPP1XW1L5NvF8+73hzP028X77KgeI9ZNl8P8qB4r2Z9WQ9Boh/v7k6vTyZ9WQ9Boh/v7k6vTwHJyQ+6x18v9b9hz0HJyQ+6x18v9b9hz1qUZw+oJ5xv/BvAT6a2AE/NvhVv64lVz6a2AE/NvhVv64lVz6MWUY/pHELvzdNpD6MWUY/pHELvzdNpD7v0mg/wDc0vh7dwD7v0mg/wDc0vh7dwD7v0mg/wDc0Ph7dwD7v0mg/wDc0Ph7dwD6MWUY/pHELPzdNpD6MWUY/pHELPzdNpD6MWUY/pHELPzdNpD6a2AE/NvhVP64lVz6a2AE/NvhVP64lVz5qUZw+oJ5xP/BvAT5qUZw+oJ5xP/BvAT4HJyQ+6x18P9b9hz0HJyQ+6x18P9b9hz2Z9WQ9Boh/P7k6vTyZ9WQ9Boh/P7k6vTwmTG0/HiezPpVObT/ALLM+U1VtP1Q8sz6BX20/5FOzPkRsbT9kcbM+vnptP+qSsz4Wim0/ZrazPm2ZbT/g2bM+6KdtP2D7sz6rtG0/5Bi0Ptm+bT9uMLQ+lcVtPwhAtD4GyG0/rEW0Pt7Maz+EcLY+wcRpP8ZluD5BsWc/eCe6PvWTZT+qt7s+cW5jP1IYvT5NQmE/eku+PhsRXz8wU78+cNxcP3AxwD7jpVo/POjAPgZvWD+kecE+cDlWP6LnwT62BlQ/QDTCPjk0UD8iWsI+WWJMP/b7wT69lEg/wBnBPhHPRD+Cs78+/xRBPzbJvT42aj0/2Fq7Pl7SOT90aLg+I1E2PwrytD4w6jI/ivewPjKhLz8Ceaw+0XksP252pz66dyk/0O+hPlFyKT8A5aE+52wpPy7aoT58Zyk/Vs+hPhNiKT+KxKE+qVwpP7a5oT5AVyk/4q6hPtVRKT8QpKE+bUwpPzqZoT4CRyk/bI6hPplBKT+Wg6E+NMIlP0I3nz4uPCk/xHihPlC8JT94K58+xTYpP+5toT71yyk/oEOgPmxoKz/eCp0+gtctP/osmD6P5DA/MBOSPutaND/aJos+7gU4PzbRgz7ysDs/MPd4Pk4nPz98Hms+WzRCP/TqXj5wo0Q/KC9VPuc/Rj+gvU4+GNVGPwBpTD5pc2Q/7m2hPhs0Zj94K58+elBtPx4nsz7DfnA/5FuzPm+BcD8aYrM+2ohwPzpzsz4NlHA/JI2zPhaicD+YrbM+ArJwP3bSsz7jwnA/fPmzPsPTcD+EILQ+sONwP15FtD658XA/1GW0Puz8cD+6f7Q+VARxP+CQtD4EB3E/Fpe0Pi3Zbj9e+bY+Fp1sP7gguT56VGo/XA+7PhYBaD+Mx7w+qaRlP3BLvj7xQGM/TJ2/PqvXYD9av8A+k2peP9CzwT5o+1s/4HzCPuaLWT/QHMM+yx1XP8yVwz7UslQ/EurDPpB+UD+8E8Q+90pMPyiswz4QHEg/WLPCPuX1Qz9OKcE+e9w/PwIOvz7h0zs/dGG8Ph/gNz+sI7k+OgU0P6xUtT4/RzA/ZvSwPjeqLD/kAqw+JzIpPyiApj4c4yU/KmygPifdJT9GYKA+NNclP2BUoD4+0SU/dEigPkvLJT+QPKA+V8UlP6gwoD5jvyU/wCSgPm65JT/YGKA+e7MlP+4MoD6FrSU/CgGgPpKnJT8g9Z8+naElPzbpnz6pmyU/UN2fPsI/Jj8ylZ4+cQUoPwQKmz7Ksio/nq+VPuQNLj/E+Y4+09wxP1Jchz6s5TU/GJZ+PobuOT+Yc24+dL09P6w4Xz6OGEE/AM1RPujFQz8wGEc+l4tFP9gBQD6wL0Y/mHE9PrXDZj9Q3Z8+hYNwP+Rbsz4F2m8/SFS0PrZLcD9MvLQ+RrJwPxoatT6rA3E/kmS1Pu43cT9elLU+8ElxP9iktT7wSXE/2KS1Pk2Gbj+69LU+7jdxP16UtT5IVm4/0Mi1PqsDcT+SZLU+fQtuP2SEtT5GsnA/Ghq1PkCtbT8yLrU+tktwP0y8tD4F2m8/SFS0PrDcbz94WrQ+CARwP3AWtD6DJ3A/FNmzPq9DcD9kqLM+xFVwPx6Jsz7/W3A/Vn6zPv9bcD9WfrM+xFVwPx6Jsz6vQ3A/ZKizPoMncD8U2bM+CARwP3AWtD6w3G8/eFq0PhXkbz+Oa7Q+awtwP4ontD7oLnA/KuqzPhBLcD98ubM+Jl1wPzSasz5hY3A/bI+zPmFjcD9sj7M+Jl1wPzSasz4QS3A/fLmzPugucD8q6rM+awtwP4ontD4V5G8/jmu0Pj/vbz9khbQ+lhZwP15BtD4SOnA//gO0PjtWcD9M07M+UGhwPwq0sz6KbnA/RKmzPopucD9EqbM+UGhwPwq0sz47VnA/TNOzPhI6cD/+A7Q+lhZwP15BtD4/728/ZIW0Pj79bz/CpbQ+lCRwP75htD4RSHA/YCS0PjxkcD+s87M+UXZwP2rUsz6KfHA/osmzPop8cD+iybM+UXZwP2rUsz48ZHA/rPOzPhFIcD9gJLQ+lCRwP75htD4+/W8/wqW0Ph8NcD+EyrQ+dzRwP3qGtD7zV3A/Gkm0Phx0cD9qGLQ+MYZwPyj5sz5tjHA/YO6zPm2McD9g7rM+MYZwPyj5sz4cdHA/ahi0PvNXcD8aSbQ+dzRwP3qGtD4fDXA/hMq0PvQdcD9u8bQ+S0VwP2qttD7HaHA/CnC0Pu+EcD9UP7Q+BZdwPxIgtD5AnXA/TBW0PkCdcD9MFbQ+BZdwPxIgtD7vhHA/VD+0PsdocD8KcLQ+W6dtP4YgtT5LRXA/aq20PjSDbT8EX7U+9B1wP27xtD7HLnA/WBi1Ph1WcD9U1LQ+mXlwP/iWtD7ElXA/Qma0PtmncD8AR7Q+E65wPzw8tD4TrnA/PDy0PtmncD8AR7Q+xJVwP0JmtD5p120/5gu1Ppl5cD/4lrQ+z7ZtP0ZEtT4dVnA/VNS0PqmSbT/GgrU+xy5wP1gYtT6pPnA/Fj21Pv9lcD8S+bQ+fIlwP7S7tD6lpXA//oq0Pru3cD+8a7Q+971wP/RgtD73vXA/9GC0Pru3cD+8a7Q+paVwP/6KtD4D5m0/pi21PnyJcD+0u7Q+Z8VtPwpmtT7/ZXA/Evm0PkKhbT+IpLU+qT5wPxY9tT6nTHA/dl21Pv1zcD9yGbU+epdwPxbctD6ls3A/YKu0PrjFcD8cjLQ+9ctwP1iBtD71y3A/WIG0PrjFcD8cjLQ+pbNwP2CrtD7f8m0/aEu1PnqXcD8W3LQ+Q9JtP8iDtT79c3A/chm1Ph2ubT9IwrU+p0xwP3ZdtT7SV3A/SHe1Pid/cD9EM7U+pKJwP+j1tD7LvnA/NMW0PuPQcD/spbQ+H9dwPyabtD4f13A/Jpu0PuPQcD/spbQ+y75wPzTFtD4g/W0/IGO1PqSicD/o9bQ+hdxtP4KbtT4nf3A/RDO1PmG4bT8C2rU+0ldwP0h3tT41X3A/ZIi1Po6GcD9eRLU+C6pwPwQHtT41xnA/UNa0PknYcD8Qt7Q+hd5wP0istD6F3nA/SKy0Pmsubj9kKbU+SdhwPxC3tD7OHW4/Gka1PjXGcD9Q1rQ+7gNuP9hytT4LqnA/BAe1PlHjbT84q7U+joZwP15EtT4qv20/uum1PuJhcD+UjrU+VrNwP/6rtT7P/HA/jsa1PiE3cT+k27U+kVxxPyrptT54aXE/1u21PtKzbj/wRrY+eGlxP9bttT73p24/pkK2PpFccT8q6bU+kYVuPzo2tj76T24/2iK2PncMbj9yCrY+oMFtP2rvtT6jNW4/Hu+3PmtNbj+kS7g+32JuPxyfuD7nc24/XuG4PtV+bj/mC7k+l4JuP4wauT45CWw/tDG5PpeCbj+MGrk+xQVsP0AkuT66+2s/Kv24PhTsaz9KwLg+XdhrP5ZzuD6Dwms/kh64Pi77az/kFLo+nBBsP7Jzuj7yI2w/NMm6PkkzbD8UDbs+Iz1sP6Y4uz6IQGw/qEe7PhH2aT+eMbs+iEBsP6hHuz7z8mk/1CO7PubpaT/K+7o+zNtpP2y9uj4Iymk/2m66Pli2aT+8F7o+PbRpPyACvD5lx2k/2mK8Pq3YaT8curw+ZeZpP1z/vD4y72k/0iu9PjnyaT8iO70+qNdnP5D8vD458mk/Iju9Pt/UZz987rw+ysxnP6LFvD4uwGc/BIa8Pk2wZz/UNbw+s55nP/Lcuz6MYmc/Drm9PoVzZz9gG74+0oJnPxx0vj75jmc/gLq+PsWWZz+y574+dZlnP0j3vj6jr2U/rJS+PnWZZz9I974+K61lP1qGvj4CpmU/0ly+PteaZT8kHL4+yIxlP5zKvT4wfWU/QnC9PtgHZT/YO78+uBZlP4ifvz4kJGU/dPm/PssuZT/SQMA+nzVlP6ZuwD77N2U/cH7APp5/Yz8W/L8++zdlP3B+wD5zfWM/lO2/Pix3Yz94w78+Y21jP+SBvz4OYWM/RC+/PmNTYz+s074+36ViP7yMwD7BsmI/ivHAPl2+Yj90TME+lMdiP5yUwT6BzWI/7sLBPofPYj/o0sE+L0lhP+40wT6Hz2I/6NLBPlNHYT9AJsE+4UFhP7D7wD5qOWE/ZLnAPr8uYT/aZcA+6SJhPzgJwD5cPmA/9q3BPlRJYD+mE8I+O1NgP2Bvwj4XW2A/KrjCPiFgYD/s5sI+3WFgPwT3wj72DV8/VkHCPt1hYD8E98I+XgxfP4wywj69B18/lgfCPoQAXz+yxME+a/deP2xwwT5X7V4//BLBPgrTXT+6ocI+MtxdPx4Iwz545F0/fGTDPgjrXT/IrcM+P+9dP9jcwz6y8F0/EO3DPoXPXD9sI8M+svBdPxDtwz4wzlw/hBTDPlHKXD9E6cI+ScRcP+6lwj6vvFw/DlHCPka0XD/48sE+pmVbPzhqwz4XbVs/KNHDPtJzWz8ILsQ+J3lbP7x3xD6TfFs/CqfEPsJ9Wz9ct8Q+dI9aP0zdwz7CfVs/XLfEPl6OWj9OzsM+OYtaP9iiwz5Thlo/Hl/DPiOAWj/ICcM+TXlaPzCrwj7r91g/sgnEPr79WD8MccQ+/wJZP0rOxD4rB1k/ShjFPtkJWT/KR8U+xQpZPyxYxT5XT1g/EHHEPsUKWT8sWMU+fk5YPwJixD4JTFg/XjbEPjNIWD9e8sM+X0NYP7Ccwz4FPlg/vD3DPpeLVj9WgsQ+3o9WPwDqxD68k1Y/gkfFPs+WVj+2kcU+x5hWP17BxT50mVY/zNHFPsMQVj/S4MQ+dJlWP8zRxT4lEFY/utHEPlUOVj/upcQ+gwtWP8BhxD71B1Y/1gvEPgcEVj+UrMM+ZSJUP17WxD6sJFQ/TD7FPrcmVD8SnMU+VyhUP3rmxT5hKVQ/RBbGPr4pVD+2JsY+qdNTP9guxT6+KVQ/tibGPlXTUz+8H8U+YNJTP9TzxD7h0FM/dK/EPgLPUz9KWcQ+6cxTP8z5wz4z8U8/6v/EPnTwTz/4Z8U+yO9PP9jFxT4/708/VBDGPuXuTz8oQMY+x+5PP6JQxj7H7k8/olDGPpLwTz9eVcU+r/BPPzpGxT4B8U8/SBrFPn7xTz/W1cQ+HPJPP5R/xD7M8k8/+B/EPqvASz+imMQ+abxLP1wAxT6VuEs/6l3FPoi1Sz8qqMU+krNLP9jXxT7lsks/ROjFPuWySz9E6MU+owxMP3j1xD5DDUw/YObEPhAPTD+QusQ+3RFMP1h2xD5iFUw/YCDEPksZTD8QwcM+05RHP4igwz4SjUc/cgfEPhOGRz9EZMQ+iIBHP/StxD73fEc/Ot3EPr17Rz+K7cQ+vXtHP4rtxD4LLUg/FA/EPi0uSD8aAMQ+dDFIP6jUwz6MNkg/8pDDPvk8SD+oO8M+GURIPxjdwj6vcUM/nBfCPnVmQz84fcI+U1xDP+TYwj5LVEM/oCHDPiBPQz9YUMM+Wk1DP3Bgwz5aTUM/cGDDPoRVRD80osI+JFdEP2qTwj7kW0Q/fmjCPkVjRD+mJcI+lWxEP2zRwT7ldkQ/DnTBPkRbPz/c/b8+m0w/P7BhwD5ePz8/vrvAPt00Pz88A8E+IS4/PyQxwT7NKz8/9EDBPs0rPz/0QME+xolAP9CuwD7pi0A/SqDAPhmSQD8cdsA+wZtAP2w0wD7rp0A/rOG/PmO1QD/whb8+nVU7P0BTvT6MQzs/2rS9PkAzOz/mDL4+USY7P8JSvj4DHjs/on++PicbOz8Wj74+Jxs7PxaPvj6RzTw/7jS+PjHQPD+8Jr4+09c8P379vT614zw/Tr29Pq7yPD9obL0+SAM9P7gSvT69ZDc/2Be6PlVPNz+0dro+BDw3P0bMuj6yLDc/LBC7PtsiNz/IO7s+dx83P8xKuz53Hzc/zEq7Pp8kOT+ANLs+uyc5P7Qmuz7GMDk/ov66Pto+OT8+wLo+mlA5P5xxuj5FZDk/chq6PqmMMz+gS7Y+/nMzP0Cntj69XTM/5Pm2PhNMMz+AO7c+vUAzP5xltz7TPDM/InS3PtM8Mz8idLc+r5I1P5Cttz5HljU/OqC3PrKgNT+Iebc+7bA1P0A9tz5gxTU/UPG2PgvcNT8enbY+adEvP4zusT6TtS8/fEayPnWcLz/OlbI+h4gvP77Usj69ey8/KP2yPlN3Lz8UC7M+U3cvPxQLsz6HGzI/IKCzPpUfMj9Uk7M+VSsyPzRusz6mPTI/YDSzPrlUMj9+67I+Tm4yP66asj4FNyw/pgCtPh4YLD9oVK0+QvwrP/ifrT4k5is/7NutPvDXKz9qAq4+DNMrP6wPrj4M0ys/rA+uPuXCLj82DK8+ZccuPwYArz5x1C4/qNyuPsToLj+Upa4+XQIvPyRgrj7CHi8/LhOuPn7BKD/wgac+sJ8oPxTRpz4xgSg/bBioPv5oKD8WUag+dVkoP3R1qD4aVCg//IGoPhpUKD/8gag+kYwrP+DxqT59kSs/XuapPsOfKz/0xKk+ALYrP+aQqT4F0is/VE+pPhXxKz+cBqk+3XQlP2RyoT7gUCU/gL2hPmkwJT9AAaI+pRYlPwY3oj4aBiU/kFmiPmcAJT9wZaI+ZwAlP3Bloj77fSg/SFSkPhoGJT+QWaI+OIMoP15JpD6lFiU/BjeiPmqSKD+kKaQ+aTAlP0ABoj4Xqig/PPijPuBQJT+AvaE+68coP/i5oz7ddCU/ZHKhPv3oKD/2dKM+7m4lP4hmoT4pSiU/ELChPvwoJT9q8qE+qw4lPxInoj7D/SQ/4kiiPvH3JD+GVKI+8fckP4ZUoj7D/SQ/4kiiPqsOJT8SJ6I+/CglP2ryoT4pSiU/ELChPu5uJT+IZqE+/2glP6paoT46RCU/NqShPhAjJT+M5qE+vQglPzIboj7X9yQ/BD2iPgPyJD+sSKI+A/IkP6xIoj7X9yQ/BD2iPr0IJT8yG6I+ECMlP4zmoT46RCU/NqShPv9oJT+qWqE+DWMlP8ZOoT5JPiU/WJihPh4dJT+s2qE+zQIlP1YPoj7n8SQ/KDGiPhPsJD/QPKI+E+wkP9A8oj7n8SQ/KDGiPs0CJT9eD6I+Hh0lP6zaoT5JPiU/WJihPg1jJT/GTqE+Hl0lP+xCoT5aOCU/doyhPi8XJT/SzqE+3fwkP3oDoj736yQ/SCWiPiPmJD/yMKI+I+YkP/Iwoj736yQ/SCWiPt38JD96A6I+LxclP9LOoT5aOCU/doyhPh5dJT/sQqE+LlclPww3oT5rMiU/moChPj8RJT/0wqE+7fYkP5r3oT4H5iQ/bBmiPjPgJD8SJaI+M+AkPxIloj4H5iQ/bBmiPu32JD+a96E+PxElP/TCoT5rMiU/moChPi5XJT8MN6E+P1ElPy4roT57LCU/unShPk8LJT8Ut6E+//AkP8DroT4X4CQ/jA2iPkTaJD8yGaI+RNokPzIZoj4X4CQ/jA2iPv/wJD/A66E+TwslPxS3oT57LCU/unShPj9RJT8uK6E+TkslP04foT6KJiU/3mihPl8FJT82q6E+DeskP9zfoT4n2iQ/rAGiPlTUJD9WDaI+VNQkP1YNoj4n2iQ/rAGiPg3rJD/c36E+XwUlPzaroT6KJiU/3mihPk5LJT9OH6E+YEUlP2wToT6bICU//FyhPnH/JD9Yn6E+HeUkP/zToT451CQ/zvWhPmXOJD92AaI+Zc4kP3YBoj451CQ/zvWhPh3lJD/806E+cf8kP1ifoT6bICU//FyhPmBFJT9sE6E+bj8lP5IHoT6rGiU/HFGhPoH5JD94k6E+Lt8kPx7IoT5IziQ/7umhPnTIJD+W9aE+dMgkP5b1oT5IziQ/7umhPi7fJD8eyKE+gfkkP3iToT6rGiU/HFGhPm4/JT+SB6E+fzklP7D7oD67FCU/PkWhPpDzJD+ah6E+PtkkP0S8oT5YyCQ/EN6hPoXCJD+26aE+hcIkP7bpoT5YyCQ/EN6hPj7ZJD9EvKE+kPMkP5qHoT67FCU/PkWhPn85JT+w+6A+jzMlP9DvoD7NDiU/ZDmhPqPtJD+8e6E+UdMkP2SwoT5pwiQ/NtKhPpm8JD/c3aE+mbwkP9zdoT5pwiQ/NtKhPlHTJD9ksKE+o+0kP8B7oT7NDiU/ZDmhPo8zJT/S76A+ny0lP/LjoD48nyc//BykPhLkJD/446A+z1knPwIdpD62oSQ//OOgPg1tJD/846A+dukmPwYdpD4/SyQ//OOgPo3JJj8GHaQ+lz8kPwDkoD6NviY/Ch2kPpc/JD8A5KA+P0skP/zjoD4NbSQ//OOgPrahJD/846A++CYoPxzyoj4S5CQ/+OOgPvFjKD8Y8qI+ny0lP/LjoD6Hpyg/EvKiPq85KD8m6KI+fawlPzpTnz78Fig/vKKiPlOLJT/cEJ8+/3AlPzTcnj7V3ic/ZDKiPuDOJz9+EqI+RlolP76unj5hySc/fAeiPkZaJT++rp4+YcknP3wHoj4ZYCU/ZrqePgITKz+ALaQ+/3AlPzTcnj6sISs/0kqkPlOLJT/cEJ8+n/0oP+REoT6AOCs/fHikPhocKT/egaE+4T0pP3DFoT6z5Ck/TJKfPuBwJz+iyps+/8EpP+RMnz61Tyc/SIibPmE1Jz+gU5s+14kpP47cnj7leSk/pryePmV0KT+msZ4+qR4nPywmmz5ldCk/prGePn0kJz/UMZs+YpssP/AcoT4Jqiw/QDqhPk2dKj+0BZ4+3cAsP+xnoT7Huyo/rkKePo/dKj9Ahp4+xGksP3KImj5DHCo/IHSWPg5HLD8EQ5o+GvspP8Qxlj7H4Ck/Gv2VPukOLD+s0pk+9P4rP8aymT52+Ss/xqeZPg3KKT+qz5U+dvkrP8anmT7gzyk/UNuVPhnsLj+6e5w+w/ouPwqZnD4/ES0/FB6ZPpcRLz+4xpw+ty8tPwxbmT6BUS0/op6ZPl+SLz+QN5Q+63QtPzDDjz6sby8/JPKTPsBTLT/UgI8+bjktPzBMjz6FNy8/0IGTPpAnLz/mYZM+ESIvP+pWkz60Ii0/vB6PPhEiLz/qVpM+hygtP14qjz4Y0zE/DK6WPsHhMT9gy5Y+YiQwPyL4kj6U+DE/CvmWPtxCMD8aNZM+o2QwP654kz4AKDM/tAyNPhBBMT9OK4g+SwUzP0jHjD7lHzE/8uiHPpQFMT9KtIc+JM0yP/BWjD4xvTI/DDeMPrG3Mj8ILIw+2u4wP9SGhz6xtzI/CCyMPq30MD+Akoc+Qx41PxYYkD7sLDU/YjWQPqahMz/8/Ys+v0M1PxBjkD4fwDM/9DqMPunhMz+Gfow+JPQ2P9R0hT75RjU/7B+APnHRNj9oL4U+ziU1Pyi7fz57CzU/2FF/PkmZNj8Uv4Q+VYk2PyifhD7WgzY/LJSEPsH0ND/w9n4+1oM2PyyUhD6U+jQ/OA5/PoabOD/uHYk+L6o4Pz47iT79Uzc/tJmEPgPBOD/qaIk+d3I3P6zWhD4/lDc/QBqFPkjAOj/suXs+4Ew5PxwpcD6UnTo/EC97PrQrOT9kpG8+YRE5Pxg7bz5sZTo/aE56PnpVOj+MDno++k86P5T4eT6p+jg/MOBuPvpPOj+U+Hk+fAA5P3j3bj7KGDw/xiOCPnEnPD8aQYI+UQY7P9xqej5FPjw/xG6CPswkOz/Q5Ho+lUY7PwBsez7oVT4/LGRtPgUZPT9Y+WA+NTM+P1TZbD7c9zw/oHRgPojdPD9UC2A+Dfs9P6z4az4a6z0/1LhrPpvlPT/Qoms+z8Y8P2CwXz6b5T0/0KJrPqLMPD+0x18+9GM/P5gbdz6ccj8/RFZ3PpeDPj+Mdmw+cYk/P5Sxdz4Roj4/gPBsPtnDPj+od20+hH5BP3DCYD6scUA/cJdTPtBbQT+UN2A+gVBAP8ASUz4uNkA/bKlSPqgjQT/oVl8+thNBPxgXXz41DkE/GAFfPnQfQD+ETlI+NQ5BPxgBXz5JJUA/1GVSPvNKQj9AgGs+mllCP+C6az66lkE/rCpgPm9wQj9AFmw+NLVBP5SkYD781kE/xCthPpUDRD+8rlY+ER1DP3TqSD7g4EM/4CNWPuX7Qj/AZUg+k+FCP3j8Rz65qEM/PENVPsWYQz9kA1U+RJNDP2TtVD7YykI/iKFHPkSTQz9k7VQ+rNBCP9i4Rz6qm0Q/4D1iPlSqRD+EeGI+qgpEP2hbVj4owUQ/1NNiPiUpRD9c1VY+7kpEP4xcVz6ZrkU/CANQPnLhRD9U2UE+44tFPzR4Tz5IwEQ/nFRBPvSlRD9M60A+vFNFP4SXTj7IQ0U/sFdOPko+RT+8QU4+PY9EP2iQQD5KPkU/vEFOPg6VRD+wp0A+ByRGP8AcXD6wMkY/YFdcPliqRT8U3U8+hklGP7iyXD7RyEU/BFdQPpzqRT8o3lA+DUlGP1iZTT7aqUU/4Lc+Pg1JRj+0g0w+2qlFP4SuPT7aqUU/9Ns8Pg1JRj90wko+DUlGP9RCSj4NSUY/5BZKPtqpRT8wJjw+DUlGP+QWSj7aqUU/vFQ8PhsURz+oXFg+GxRHP/DRWD72gEY/xIJMPhsURz+MiFk+9oBGP5h2TT72gEY/4IROPt7yZD/8HKQ+khVlP5TXoz7WSmY/apqgPgFsZj8OWKA+uU1lPz5noz5ThmY/ZiOgPq1dZT9UR6M+LGNlP1I8oz4sY2U/UjyjPg6dZj/u9Z8+HKNjP0ZJpT46l2Y/mAGgPnOUYz+cZqU+nn1jP0aUpT6lmmQ/inGiPit8ZD+CrqI+ZFpkPxLyoj78H24/Ona2PsPebz9IVLQ+gJZuP2rYtj5TXHA/TLy0PprNcD8aGrU+RlZvP0B3tz5+J3E/kmS1PsGMbz9cpLc+N2FxP16UtT6In28/6rO3Pht1cT/YpLU+iJ9vP+qztz4bdXE/2KS1Pqf+bD9Q/7c+PaxuP7r0tT43YXE/XpS1PpXMbD/c1bc+M3duP9DItT6ffmw/RpW3Ppokbj9khLU+hLxtPzIutT5TXHA/TLy0PiVJbT+gzrQ+w95vP0hUtD49AD8APgA8AD8APQA7AD8APAA6AD8AOwA5AD8AOgA4AD8AOQA3AD8AOAA2AD8ANwA1AD8ANgA0AD8ANQAzAD8ANAAyAD8AMwAvAEAAMQAwAEEAPwAuAEEAMAAtAEEALgAsAEEALQArAEEALAAqAEEAKwApAEEAKgAoAEEAKQAnAEEAKAAmAEEAJwAlAEEAJgAkAEEAJQAjAEEAJAAiAEEAIwAhAEEAIgAgAAAAIQAAAEEAIQAgAAEAAAAgAAIAAQAgAAMAAgAgAAQAAwAgAAUABAAgAAYABQAgAAcABgAgAAgABwAgAAkACAAgAAoACQAgAAsACgAgAAwACwAgAA0ADAAfAA0AIAAfAA4ADQAfAA8ADgAeAA8AHwAeABAADwAdABAAHgAdABEAEAAdABIAEQAcABIAHQAcABMAEgAcABQAEwAbABQAHAAbABUAFAAbABYAFQAaABYAGwAaABcAFgAaABgAFwAZABgAGgB9AH4AfwB8AH0AfwB7AHwAfwB6AHsAfwB5AHoAfwB4AHkAfwB3AHgAfwB2AHcAfwB1AHYAfwB0AHUAfwBzAHQAfwByAHMAfwBxAHIAfwBxAH8AgABwAHEAgABvAHAAgABuAG8AgABtAG4AgABsAG0AgABrAGwAgABqAGsAgABpAGoAgABoAGkAgABnAGgAgABmAGcAgABlAGYAgABkAGUAgABjAGQAgABiAGMAQgBCAGMAgABiAEIAQwBiAEMARABiAEQARQBiAEUARgBiAEYARwBiAEcASABiAEgASQBiAEkASgBiAEoASwBiAEsATABiAEwATQBiAE0ATgBiAE4ATwBhAGIATwBhAE8AUABhAFAAUQBgAGEAUQBgAFEAUgBfAGAAUgBfAFIAUwBfAFMAVABeAF8AVABeAFQAVQBeAFUAVgBdAF4AVgBdAFYAVwBdAFcAWABcAF0AWABcAFgAWQBcAFkAWgBbAFwAWgCCAJIAgQCSAJEAgQCDAJMAkgCDAJIAggCEAJQAkwCEAJMAgwCFAJUAlACFAJQAhACGAJYAlQCGAJUAhQCHAJcAlgCHAJYAhgCJAJgAlwCJAJcAhwCLAJkAmACLAJgAiQCNAJoAmQCNAJkAiwCPAJsAmgCPAJoAjQCQAJwAjwCcAJsAjwCSAJ4AnQCSAJ0AkQCTAJ8AngCTAJ4AkgCUAKAAnwCUAJ8AkwCVAKEAoACVAKAAlACWAKIAoQCWAKEAlQCXAKMAogCXAKIAlgCYAKQAowCYAKMAlwCZAKUApACZAKQAmACaAKYApQCaAKUAmQCbAKcApgCbAKYAmgCcAKgApwCcAKcAmwCeAKoAqQCeAKkAnQCfAKsAqgCfAKoAngCgAKwAqwCgAKsAnwChAK0ArAChAKwAoACiAK4ArQCiAK0AoQCjAK8ArgCjAK4AogCkALAArwCkAK8AowClALEAsAClALAApACmALIAsQCmALEApQCnALMAsgCnALIApgCoALQAswCoALMApwCqALYAtQCqALUAqQCrALcAtgCrALYAqgCsALgAtwCsALcAqwCtALkAuACtALgArACuALoAuQCuALkArQCvALsAugCvALoArgCwALwAuwCwALsArwCxAL0AvACxALwAsACyAL4AvQCyAL0AsQCzAL8AvgCzAL4AsgC0AMAAvwC0AL8AswC2AMIAwQC2AMEAtQC3AMMAwgC3AMIAtgC4AMQAwwC4AMMAtwC5AMUAxAC5AMQAuAC6AMYAxQC6AMUAuQC7AMcAxgC7AMYAugC8AMgAxwC8AMcAuwC9AMkAyAC9AMgAvAC+AMoAyQC+AMkAvQC/AMsAygC/AMoAvgDAAMwAywDAAMsAvwDCAM4AzQDCAM0AwQDDAM8AzgDDAM4AwgDEANAAzwDEAM8AwwDFANEA0ADFANAAxADGANIA0QDGANEAxQDHANMA0gDHANIAxgDIANQA0wDIANMAxwDJANUA1ADJANQAyADKANYA1QDKANUAyQDLANgA1gDLANYAygDMANoA2ADMANgAywDOANwA2wDOANsAzQDPAN0A3ADPANwAzgDQAN4A3QDQAN0AzwDRAN8A3gDRAN4A0ADSAOAA3wDSAN8A0QDTAOEA4ADTAOAA0gDUAOIA4QDUAOEA0wDVAOMA4gDVAOIA1ADWAOUA4wDWAOMA1QDYAOcA5QDYAOUA1gDZAOgA5gDZAOYA1wDcAOsA6gDcAOoA2wDdAOwA6wDdAOsA3ADeAO0A7ADeAOwA3QDfAO4A7QDfAO0A3gDgAO8A7gDgAO4A3wDhAPAA7wDhAO8A4ADiAPEA8ADiAPAA4QDjAPIA8QDjAPEA4gDlAPQA8gDlAPIA4wDmAPUA8wDmAPMA5ADpAPgA9gDpAPYA5wDrAPoA+QDrAPkA6gDsAPsA+gDsAPoA6wDtAPwA+wDtAPsA7ADuAP0A/ADuAPwA7QDvAP4A/QDvAP0A7gDwAP8A/gDwAP4A7wDxAAAB/wDxAP8A8ADyAAEBAAHyAAAB8QD0AAMBAQH0AAEB8gD2AAUBAwH2AAMB9AD3AAYBBAH3AAQB9QD6AAkBCAH6AAgB+QD7AAoBCQH7AAkB+gD8AAsBCgH8AAoB+wD9AAwBCwH9AAsB/AD+AA0BDAH+AAwB/QD/AA4BDQH/AA0B/gAAAQ8BDgEAAQ4B/wABARABDwEBAQ8BAAEDARIBEAEDARABAQEEARMBEQEEAREBAgEHARYBFAEHARQBBQEJARgBFwEJARcBCAEKARkBGAEKARgBCQELARoBGQELARkBCgEMARsBGgEMARoBCwENARwBGwENARsBDAEOAR0BHAEOARwBDQEPAR8BHQEPAR0BDgEQASEBHwEQAR8BDwESASMBIQESASEBEAEUASUBIwEUASMBEgEVASYBJAEVASQBEwEYASgBJwEYAScBFwEZASkBKAEZASgBGAEaASoBKQEaASkBGQEbASsBKgEbASoBGgEcASwBKwEcASsBGwEdAS4BLAEdASwBHAEfATABLgEfAS4BHQEgATEBLwEgAS8BHgEiATIBMQEiATEBIAEkATMBMgEkATIBIgEmATQBMwEmATMBJAEoATYBNQEoATUBJwEpATcBNgEpATYBKAEqATgBNwEqATcBKQErATkBOAErATgBKgEsAToBOQEsATkBKwEuATwBOgEuAToBLAEvAT0BOwEvATsBLQExAT4BPQExAT0BLwEyAT8BPgEyAT4BMQEzAUABPwEzAT8BMgE0AUEBQAE0AUABMwE2AUMBQgE2AUIBNQE3AUQBQwE3AUMBNgE4AUUBRAE4AUQBNwE5AUYBRQE5AUUBOAE6AUcBRgE6AUYBOQE8AUkBRwE8AUcBOgE9AUoBSAE9AUgBOwE+AUsBSgE+AUoBPQE/AUwBSwE/AUsBPgFAAU0BTAFAAUwBPwFBAU4BTQFBAU0BQAFDAVABTwFDAU8BQgFEAVEBUAFEAVABQwFFAVIBUQFFAVEBRAFGAVMBUgFGAVIBRQFHAVQBUwFHAVMBRgFJAVYBVAFJAVQBRwFKAVcBVQFKAVUBSAFLAVgBVwFLAVcBSgFMAVkBWAFMAVgBSwFNAVoBWQFNAVkBTAFOAVsBWgFOAVoBTQFQAV0BXAFQAVwBTwFRAV4BXQFRAV0BUAFSAV8BXgFSAV4BUQFTAWABXwFTAV8BUgFUAWEBYAFUAWABUwFWAWMBYQFWAWEBVAFXAWQBYgFXAWIBVQFYAWUBZAFYAWQBVwFZAWYBZQFZAWUBWAFaAWcBZgFaAWYBWQFbAWgBZwFbAWcBWgFdAWoBaQFdAWkBXAFeAWsBagFeAWoBXQFfAWwBawFfAWsBXgFgAW0BbAFgAWwBXwFhAW4BbQFhAW0BYAFjAXABbgFjAW4BYQFkAXEBbwFkAW8BYgFlAXIBcQFlAXEBZAFmAXMBcgFmAXIBZQFnAXQBcwFnAXMBZgFoAXUBdAFoAXQBZwFqAXcBdgFqAXYBaQFrAXgBdwFrAXcBagFsAXkBeAFsAXgBawFtAXoBeQFtAXkBbAFuAXsBegFuAXoBbQFwAX0BewFwAXsBbgFxAX4BfAFxAXwBbwFyAX8BfgFyAX4BcQFzAYABfwFzAX8BcgF0AYEBgAF0AYABcwF1AYIBgQF1AYEBdAF3AYQBgwF3AYMBdgF4AYUBhAF4AYQBdwF5AYYBhQF5AYUBeAF6AYcBhgF6AYYBeQF7AYgBhwF7AYcBegF9AYoBiAF9AYgBewF+AYsBiQF+AYkBfAF/AYwBiwF/AYsBfgGAAY0BjAGAAYwBfwGBAY4BjQGBAY0BgAGCAY8BjgGCAY4BgQGEAZEBkAGEAZABgwGFAZIBkQGFAZEBhAGGAZMBkgGGAZIBhQGHAZQBkwGHAZMBhgGIAZUBlAGIAZQBhwGKAZcBlQGKAZUBiAGLAZgBlgGLAZYBiQGMAZkBmAGMAZgBiwGNAZoBmQGNAZkBjAGOAZsBmgGOAZoBjQGPAZwBmwGPAZsBjgGRAZ4BnQGRAZ0BkAGSAZ8BngGSAZ4BkQGTAaABnwGTAZ8BkgGUAaEBoAGUAaABkwGVAaIBoQGVAaEBlAGXAaQBogGXAaIBlQGYAaUBowGYAaMBlgGZAaYBpQGZAaUBmAGaAacBpgGaAaYBmQGbAagBpwGbAacBmgGcAakBqAGcAagBmwGeAasBqgGeAaoBnQGfAawBqwGfAasBngGgAa0BrAGgAawBnwGhAa4BrQGhAa0BoAGiAa8BrgGiAa4BoQGkAbEBrwGkAa8BogGlAbIBsAGlAbABowGmAbMBsgGmAbIBpQGnAbQBswGnAbMBpgGoAbUBtAGoAbQBpwGpAbYBtQGpAbUBqAGrAbgBtwGrAbcBqgGsAbkBuAGsAbgBqwGtAboBuQGtAbkBrAGuAbsBugGuAboBrQGvAbwBuwGvAbsBrgGxAb4BvAGxAbwBrwGyAb8BvQGyAb0BsAGzAcABvwGzAb8BsgG0AcEBwAG0AcABswG1AcIBwQG1AcEBtAG2AcMBwgG2AcIBtQG4AcUBxAG4AcQBtwG5AcYBxQG5AcUBuAG6AccBxgG6AcYBuQG7AcgBxwG7AccBugG8AckByAG8AcgBuwG+AcsByQG+AckBvAG/AcwBygG/AcoBvQHAAc0BzAHAAcwBvwHBAc4BzQHBAc0BwAHCAc8BzgHCAc4BwQHDAdABzwHDAc8BwgHFAdIB0QHFAdEBxAHGAdMB0gHGAdIBxQHHAdQB0wHHAdMBxgHIAdUB1AHIAdQBxwHJAdYB1QHJAdUByAHLAdcB1gHLAdYByQHMAdkB2AHMAdgBygHNAdoB2QHNAdkBzAHOAdsB2gHOAdoBzQHPAdwB2wHPAdsBzgHQAd0B3AHQAdwBzwHSAd8B3gHSAd4B0QHTAeAB3wHTAd8B0gHUAeEB4AHUAeAB0wHVAeIB4QHVAeEB1AHWAeMB4gHWAeIB1QHXAeQB4wHXAeMB1gHZAeYB5QHZAeUB2AHaAecB5gHaAeYB2QHbAegB5wHbAecB2gHcAekB6AHcAegB2wHdAeoB6QHdAekB3AHfAewB6wHfAesB3gHgAe0B7AHgAewB3wHhAe4B7QHhAe0B4AHiAe8B7gHiAe4B4QHjAfAB7wHjAe8B4gHkAfEB8AHkAfAB4wHmAfMB8gHmAfIB5QHnAfQB8wHnAfMB5gHoAfUB9AHoAfQB5wHpAfYB9QHpAfUB6AHqAfcB9gHqAfYB6QHsAfkB+AHsAfgB6wHtAfoB+QHtAfkB7AHuAfsB+gHuAfoB7QHvAfwB+wHvAfsB7gHwAf0B/AHwAfwB7wHxAf4B/QHxAf0B8AHzAQAC/wHzAf8B8gH0AQECAAL0AQAC8wH1AQICAQL1AQEC9AH2AQMCAgL2AQIC9QH3AQQCAwL3AQMC9gH5AQYCBQL5AQUC+AH6AQcCBgL6AQYC+QH7AQgCBwL7AQcC+gH8AQkCCAL8AQgC+wH9AQoCCQL9AQkC/AH+AQsCCgL+AQoC/QEAAg0CDAIAAgwC/wEBAg4CDQIBAg0CAAICAg8CDgICAg4CAQIDAhACDwIDAg8CAgIEAhECEAIEAhACAwIGAhMCEgIGAhICBQIHAhQCEwIHAhMCBgIIAhUCFAIIAhQCBwIJAhYCFQIJAhUCCAIKAhcCFgIKAhYCCQILAhgCFwILAhcCCgINAhoCGQINAhkCDAIOAhsCGgIOAhoCDQIPAhwCGwIPAhsCDgIQAh0CHAIQAhwCDwIRAh4CHQIRAh0CEAITAiACHwITAh8CEgIUAiECIAIUAiACEwIVAiICIQIVAiECFAIWAiMCIgIWAiICFQIXAiQCIwIXAiMCFgIYAiUCJAIYAiQCFwIaAicCJgIaAiYCGQIbAigCJwIbAicCGgIcAikCKAIcAigCGwIdAioCKQIdAikCHAIeAisCKgIeAioCHQIgAi0CLAIgAiwCHwIhAi4CLQIhAi0CIAIiAi8CLgIiAi4CIQIjAjACLwIjAi8CIgIkAjECMAIkAjACIwIlAjICMQIlAjECJAInAjQCMwInAjMCJgIoAjUCNAIoAjQCJwIpAjYCNQIpAjUCKAIqAjcCNgIqAjYCKQIrAjgCNwIrAjcCKgItAjoCOQItAjkCLAIuAjsCOgIuAjoCLQIvAjwCOwIvAjsCLgIwAj0CPAIwAjwCLwIxAj4CPQIxAj0CMAIyAj8CPgIyAj4CMQI0AkECQAI0AkACMwI1AkICQQI1AkECNAI2AkMCQgI2AkICNQI3AkQCQwI3AkMCNgI4AkUCRAI4AkQCNwI6AkcCRgI6AkYCOQI7AkgCRwI7AkcCOgI8AkkCSAI8AkgCOwI9AkoCSQI9AkkCPAI+AksCSgI+AkoCPQI/AkwCSwI/AksCPgJBAk4CTQJBAk0CQAJCAk8CTgJCAk4CQQJDAlACTwJDAk8CQgJEAlECUAJEAlACQwJFAlICUQJFAlECRAJHAlQCUwJHAlMCRgJIAlUCVAJIAlQCRwJJAlYCVQJJAlUCSAJKAlcCVgJKAlYCSQJLAlgCVwJLAlcCSgJMAlkCWAJMAlgCSwJOAlsCWgJOAloCTQJPAlwCWwJPAlsCTgJQAl0CXAJQAlwCTwJRAl4CXQJRAl0CUAJSAl8CXgJSAl4CUQJUAmECYAJUAmACUwJVAmICYQJVAmECVAJWAmMCYgJWAmICVQJXAmQCYwJXAmMCVgJYAmUCZAJYAmQCVwJZAmYCZQJZAmUCWAJbAmkCZwJbAmcCWgJcAmsCaQJcAmkCWwJdAm0CawJdAmsCXAJeAm8CbQJeAm0CXQJfAnECbwJfAm8CXgJhAnMCcgJhAnICYAJiAnQCcwJiAnMCYQJjAnUCdAJjAnQCYgJkAnYCdQJkAnUCYwJlAncCdgJlAnYCZAJmAngCdwJmAncCZQJoAnkCeAJoAngCZgJqAnoCeQJqAnkCaAJsAnsCegJsAnoCagJuAnwCewJuAnsCbAJwAn0CfAJwAnwCbgJzAn8CfgJzAn4CcgJ0AoACfwJ0An8CcwJ1AoECgAJ1AoACdAJ2AoICgQJ2AoECdQJ3AoMCggJ3AoICdgJ4AoQCgwJ4AoMCdwJ5AoUChAJ5AoQCeAJ6AoYChQJ6AoUCeQJ7AocChgJ7AoYCegJ8AogChwJ8AocCewJ9AokCiAJ9AogCfAJ/AosCigJ/AooCfgKAAowCiwKAAosCfwKBAo0CjAKBAowCgAKCAo4CjQKCAo0CgQKDAo8CjgKDAo4CggKEApACjwKEAo8CgwKFApECkAKFApAChAKGApICkQKGApEChQKHApMCkgKHApIChgKIApQCkwKIApMChwKJApUClAKJApQCiAKLApcClgKLApYCigKMApgClwKMApcCiwKNApkCmAKNApgCjAKOApoCmQKOApkCjQKPApsCmgKPApoCjgKQApwCmwKQApsCjwKRAp0CnAKRApwCkAKSAp4CnQKSAp0CkQKTAp8CngKTAp4CkgKUAqACnwKUAp8CkwKVAqECoAKVAqAClAKXAqMCogKXAqIClgKYAqQCowKYAqMClwKZAqUCpAKZAqQCmAKaAqYCpQKaAqUCmQKbAqcCpgKbAqYCmgKcAqgCpwKcAqcCmwKdAqkCqAKdAqgCnAKeAqoCqQKeAqkCnQKfAqsCqgKfAqoCngKgAqwCqwKgAqsCnwKhAq0CrAKhAqwCoAKjAq8CrgKjAq4CogKkArACrwKkAq8CowKlArECsAKlArACpAKmArICsQKmArECpQKnArMCsgKnArICpgKoArQCswKoArMCpwKpArUCtAKpArQCqAKqArYCtQKqArUCqQKrArcCtgKrArYCqgKsArgCtwKsArcCqwKtArkCuAKtArgCrAKvArsCugKvAroCrgKwArwCuwKwArsCrwKxAr0CvAKxArwCsAKyAr4CvQKyAr0CsQKzAr8CvgKzAr4CsgK0AsACvwK0Ar8CswK1AsECwAK1AsACtAK2AsICwQK2AsECtQK3AsMCwgK3AsICtgK4AsQCwwK4AsMCtwK5AsUCxAK5AsQCuAK7AscCxgK7AsYCugK8AsgCxwK8AscCuwK9AskCyAK9AsgCvAK+AsoCyQK+AskCvQK/AssCygK/AsoCvgLAAswCywLAAssCvwLBAs0CzALBAswCwALCAs4CzQLCAs0CwQLDAs8CzgLDAs4CwgLEAtACzwLEAs8CwwLFAtEC0ALFAtACxALHAtMC0gLHAtICxgLIAtQC0wLIAtMCxwLJAtUC1ALJAtQCyALKAtYC1QLKAtUCyQLLAtcC1gLLAtYCygLMAtgC1wLMAtcCywLNAtkC2ALNAtgCzALOAtoC2QLOAtkCzQLPAtsC2gLPAtoCzgLQAtwC2wLQAtsCzwLRAt0C3ALRAtwC0ALTAt8C3gLTAt4C0gLUAuAC3wLUAt8C0wLVAuEC4ALVAuAC1ALWAuIC4QLWAuEC1QLXAuMC4gLXAuIC1gLYAuQC4wLYAuMC1wLZAuUC5ALZAuQC2ALaAuYC5QLaAuUC2QLbAucC5gLbAuYC2gLcAugC5wLcAucC2wLdAukC6ALdAugC3ALfAusC6gLfAuoC3gLgAuwC6wLgAusC3wLhAu0C7ALhAuwC4ALiAu4C7QLiAu0C4QLjAu8C7gLjAu4C4gLkAvAC7wLkAu8C4wLlAvEC8ALlAvAC5ALmAvIC8QLmAvEC5QLnAvMC8gLnAvIC5gLoAvQC8wLoAvMC5wLpAvUC9ALpAvQC6ALrAvgC9gLrAvYC6gLsAvoC+ALsAvgC6wLtAvsC+gLtAvoC7ALuAv0C+wLuAvsC7QLvAv8C/QLvAv0C7gLwAgED/wLwAv8C7wLxAgIDAQPxAgED8ALyAgMDAgPyAgID8QLzAgQDAwPzAgMD8gL0AgYDBAP0AgQD8wL1AggDBgP1AgYD9AL5AgwDCgP5AgoD9wL6Ag0DCwP6AgsD+AL7Ag4DDQP7Ag0D+gL+AhADDwP+Ag8D/AIAAxIDEAMAAxAD/gIBAxMDEQMBAxED/wICAxUDEwMCAxMDAQMDAxcDFQMDAxUDAgMEAxkDFwMEAxcDAwMHAxwDGgMHAxoDBQMJAx0DHAMJAxwDBwMMAyADHgMMAx4DCgMNAyEDHwMNAx8DCwMOAyIDIQMOAyEDDQMQAyQDIwMQAyMDDwMSAyUDJAMSAyQDEAMUAycDJQMUAyUDEgMVAygDJgMVAyYDEwMYAyoDKQMYAykDFgMbAywDKgMbAyoDGAMcAy0DKwMcAysDGgMdAy4DLQMdAy0DHAMgAzEDLwMgAy8DHgMhAzIDMAMhAzADHwMiAzMDMgMiAzIDIQMkAzUDNAMkAzQDIwMlAzYDNQMlAzUDJAMnAzgDNgMnAzYDJQMoAzkDNwMoAzcDJgMqAzsDOgMqAzoDKQMsAz0DOwMsAzsDKgMtAz4DPAMtAzwDKwMuAz8DPgMuAz4DLQMxA0IDQAMxA0ADLwMyA0MDQQMyA0EDMAMzA0QDQwMzA0MDMgM1A0YDRQM1A0UDNAM2A0cDRgM2A0YDNQM4A0kDRwM4A0cDNgM5A0oDSAM5A0gDNwM7A0wDSwM7A0sDOgM9A04DTAM9A0wDOwM+A08DTQM+A00DPAM/A1ADTwM/A08DPgNCA1MDUQNCA1EDQANDA1QDUgNDA1IDQQNEA1UDVANEA1QDQwNGA1cDVgNGA1YDRQNHA1gDVwNHA1cDRgNJA1oDWANJA1gDRwNKA1sDWQNKA1kDSANMA10DXANMA1wDSwNOA18DXQNOA10DTANPA2ADXgNPA14DTQNQA2EDYANQA2ADTwNTA2QDYgNTA2IDUQNUA2UDYwNUA2MDUgNVA2YDZQNVA2UDVANXA2gDZwNXA2cDVgNYA2kDaANYA2gDVwNaA2sDaQNaA2kDWANbA2wDagNbA2oDWQNdA24DbQNdA20DXANfA3ADbgNfA24DXQNgA3EDbwNgA28DXgNhA3IDcQNhA3EDYANkA3UDcwNkA3MDYgNlA3YDdANlA3QDYwNmA3cDdgNmA3YDZQNoA3kDeANoA3gDZwNpA3oDeQNpA3kDaANrA3wDegNrA3oDaQNsA30DewNsA3sDagNuA38DfgNuA34DbQNwA4EDfwNwA38DbgNxA4IDgANxA4ADbwNyA4MDggNyA4IDcQN1A4YDhAN1A4QDcwN2A4cDhQN2A4UDdAN3A4gDhwN3A4cDdgN5A4oDiQN5A4kDeAN6A4sDigN6A4oDeQN8A40DiwN8A4sDegN9A44DjAN9A4wDewN/A5ADjwN/A48DfgOBA5IDkAOBA5ADfwOCA5MDkQOCA5EDgAODA5QDkwODA5MDggOGA5cDlQOGA5UDhAOHA5gDlgOHA5YDhQOIA5kDmAOIA5gDhwOKA5sDmgOKA5oDiQOLA5wDmwOLA5sDigONA54DnAONA5wDiwOOA58DnQOOA50DjAOQA6EDoAOQA6ADjwOSA6MDoQOSA6EDkAOTA6QDogOTA6IDkQOUA6UDpAOUA6QDkwOXA6gDpgOXA6YDlQOYA6kDpwOYA6cDlgOZA6oDqQOZA6kDmAObA6wDqwObA6sDmgOcA60DrAOcA6wDmwOeA68DrQOeA60DnAOfA7ADrgOfA64DnQOhA7IDsQOhA7EDoAOjA7QDsgOjA7IDoQOkA7UDswOkA7MDogOlA7YDtQOlA7UDpAOoA7kDtwOoA7cDpgOpA7oDuAOpA7gDpwOqA7sDugOqA7oDqQOsA70DvAOsA7wDqwOtA74DvQOtA70DrAOvA8ADvgOvA74DrQOwA8EDvwOwA78DrgOyA8MDwgOyA8IDsQO0A8UDwwO0A8MDsgO1A8YDxAO1A8QDswO2A8cDxgO2A8YDtQO5A8oDyAO5A8gDtwO6A8sDyQO6A8kDuAO7A8wDywO7A8sDugO9A84DzQO9A80DvAO+A88DzgO+A84DvQPAA9EDzwPAA88DvgPBA9ID0APBA9ADvwPDA9QD0wPDA9MDwgPFA9YD1APFA9QDwwPGA9cD1QPGA9UDxAPHA9gD1wPHA9cDxgPKA9oD2QPKA9kDyAPLA9wD2wPLA9sDyQPMA94D3APMA9wDywPOA98D3QPOA90DzQPPA+AD3wPPA98DzgPRA+ED4APRA+ADzwPSA+QD4gPSA+ID0APUA+UD4wPUA+MD0wPWA+YD5QPWA+UD1APXA+gD5wPXA+cD1QPYA+kD6APYA+gD1wPaA+wD6gPaA+oD2QPcA+4D7QPcA+0D2wPeA/AD7gPeA+4D3APfA/ED7wPfA+8D3QPgA/MD8QPgA/ED3wPhA/UD8wPhA/MD4APkA/kD9gPkA/YD4gPlA/oD9wPlA/cD4wPmA/wD+gPmA/oD5QPoA/4D/QPoA/0D5wPpAwAE/gPpA/4D6APtA4IAgQDtA4EA6wPuA4MAggDuA4IA7QPwA4QAgwDwA4MA7gPyA4UAhADyA4QA8AP0A4YA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+u1rOhYmADticta7+u1rumoG7DqZ4ta7hqVqulmt7zrVR9e7UOxmusP48jormNe7ph9huhmW9TrAy9e73tBZutdD9zqG3de7F7dRuuvX9zqG3de7F7dRuuvX9zqG3de7F7dROuvX9zqG3de7F7dROuvX9zrAy9e73tBZOtdD9zormNe7ph9hOhmW9TrVR9e7UOxmOsP48jqZ4ta7hqVqOlmt7zpicta7+u1rOmoG7Dr+Z+G7+u1ruq7g1TqV4eG7hqVquqp02TpGT+K7UOxmuv2u3DpTpuK7ph9husM+3zo33uK73tBZusvj4Dp58eK7F7dRut904Tp58eK7F7dRut904Tp58eK7F7dROt904Tp58eK7F7dROt904To33uK73tBZOsvj4DpTpuK7ph9hOsM+3zpGT+K7UOxmOv2u3DqV4eG7hqVqOqp02Tr+Z+G7+u1rOq7g1Tr9Luy7+u1rulDavTr82O27hqVqurfHvjpJWe+7UOxmuuGdvzpEivC7ph9hutdHwDoTTvG73tBZuva0wDqMkfG7F7dRupDawDqMkfG7F7dRupDawDqMkfG7F7dROpDawDqMkfG7F7dROpDawDoTTvG73tBZOva0wDoTTvG73tBZOva0wDpEivC7ph9hOtdHwDpEivC7ph9hOtdHwDpJWe+7UOxmOuGdvzr82O27hqVqOrfHvjr9Luy7+u1rOlDavTrlOuu7+u1ruiUKujos8uu7hqVquuAstzqDl+y7UOxmumKXtDq5Gu27ph9humyKsjr4bu273tBZumA5sTr/i+27F7dRujzFsDr/i+27F7dRujzFsDr/i+27F7dROjzFsDr/i+27F7dROjzFsDr4bu273tBZOmA5sTr4bu273tBZOmA5sTq5Gu27ph9hOmyKsjq5Gu27ph9hOmyKsjqDl+y7UOxmOmKXtDos8uu7hqVqOuAstzrlOuu7+u1rOiUKujoMmOi7+u1rulR/rzpTT+m7hqVqug+irDqq9Om7UOxmupEMqjrgd+q7ph9hupv/pzofzOq73tBZuo+upjom6eq7F7dRums6pjom6eq7F7dRums6pjom6eq7F7dROms6pjom6eq7F7dROms6pjofzOq73tBZOo+upjofzOq73tBZOo+upjrgd+q7ph9hOpv/pzrgd+q7ph9hOpv/pzqq9Om7UOxmOpEMqjpTT+m7hqVqOg+irDoMmOi7+u1rOlR/rzqZnOS7+u1rumWSnzrgU+W7hqVquiC1nDo3+eW7UOxmuqIfmjptfOa7ph9huqwSmDqs0Oa73tBZuqDBljqz7ea7F7dRunxNljqz7ea7F7dRunxNljqz7ea7F7dROnxNljqz7ea7F7dROnxNljqs0Oa73tBZOqDBljqs0Oa73tBZOqDBljptfOa7ph9hOqwSmDptfOa7ph9hOqwSmDo3+eW7UOxmOqIfmjrgU+W7hqVqOiC1nDqZnOS7+u1rOmWSnzqynt+7+u1ruuCbizr5VeC7hqVqupu+iDpQ++C7UOxmuh0phjqGfuG7ph9huicchDrF0uG73tBZuhvLgjrM7+G7F7dRuvdWgjrM7+G7F7dRuvdWgjrM7+G7F7dROvdWgjrM7+G7F7dROvdWgjrF0uG73tBZOhvLgjrF0uG73tBZOhvLgjqGfuG7ph9hOicchDqGfuG7ph9hOicchDpQ++C7UOxmOh0phjr5VeC7hqVqOpu+iDqynt+7+u1rOuCbizp+9Nm7+u1rupjoaTrFq9q7hqVqug4uZDocUdu7UOxmuhIDXzpS1Nu7ph9huiXpWjqRKNy73tBZug1HWDqYRdy7F7dRusZeVzqYRdy7F7dRusZeVzqYRdy7F7dROsZeVzqYRdy7F7dROsZeVzqRKNy73tBZOg1HWDqRKNy73tBZOg1HWDpS1Nu7ph9hOiXpWjpS1Nu7ph9hOiXpWjocUdu7UOxmOhIDXzrFq9q7hqVqOg4uZDp+9Nm7+u1rOpjoaToj9NO7+u1rumDoOTpqq9S7hqVqutYtNDrBUNW7UOxmutoCLzr309W7ph9huu3oKjo2KNa73tBZutVGKDo9Rda7F7dRuo5eJzo9Rda7F7dRuo5eJzo9Rda7F7dROo5eJzo9Rda7F7dROo5eJzo2KNa73tBZOtVGKDo2KNa73tBZOtVGKDr309W7ph9hOu3oKjr309W7ph9hOu3oKjrBUNW7UOxmOtoCLzpqq9S7hqVqOtYtNDoj9NO7+u1rOmDoOTrI8827+u1ruijoCToPq867hqVqup4tBDpmUM+7UOxmukQF/jmc08+7ph9humrR9TnbJ9C73tBZujqN8DniRNC7F7dRuq287jniRNC7F7dRuq287jniRNC7F7dROq287jniRNC7F7dROq287jnbJ9C73tBZOjqN8DnbJ9C73tBZOjqN8Dmc08+7ph9hOmrR9Tmc08+7ph9hOmrR9TlmUM+7UOxmOkQF/jkPq867hqVqOp4tBDrI8827+u1rOijoCTqUSci7+u1rugAyuTnbAMm7hqVquuy8rTkypsm7UOxmuvVmozloKcq7ph9huhszmzmnfcq73tBZuurulTmumsq7F7dRul0elDmumsq7F7dRul0elDmumsq7F7dROl0elDmumsq7F7dROl0elDmnfcq73tBZOurulTmnfcq73tBZOurulTloKcq7ph9hOhszmzloKcq7ph9hOhszmzkypsm7UOxmOvVmoznbAMm7hqVqOuy8rTmUSci7+u1rOgAyuTmtS8O7+u1rutivUjn0AsS7hqVqurHFOzlLqMS7UOxmusIZJzmBK8W7ph9hug6yFjnAf8W73tBZuq4pDDnHnMW7F7dRupKICDnHnMW7F7dRupKICDnHnMW7F7dROpKICDnHnMW7F7dROpKICDnAf8W73tBZOq4pDDnAf8W73tBZOq4pDDmBK8W7ph9hOg6yFjmBK8W7ph9hOg6yFjlLqMS7UOxmOsIZJzn0AsS7hqVqOrHFOzmtS8O7+u1rOtivUjk6UL+7+u1rusyQpjiBB8C7hqVquvp4cTjYrMC7UOxmujzJHjgOMMG7ph9hutZUujdNhMG73tBZurAjTDdUocG7F7dRuvgREjdUocG7F7dRuvgREjdUocG7F7dROvgREjdUocG7F7dROvgREjdNhMG73tBZOrAjTDdNhMG73tBZOrAjTDcOMMG7ph9hOtZUujcOMMG7ph9hOtZUujfYrMC7UOxmOjzJHjiBB8C7hqVqOvp4cTg6UL+7+u1rOsyQpjhhrby7+u1rugANh7WpZL27hqVqusfBv7f/Cb67UOxmuoGQMrg2jb67ph9hujkvdLh04b673tBZulUoj7h8/r67F7dRuolqlrh8/r67F7dRuolqlrh8/r67F7dROolqlrh8/r67F7dROolqlrh04b673tBZOlUoj7h04b673tBZOlUoj7g2jb67ph9hOjkvdLg2jb67ph9hOjkvdLj/Cb67UOxmOoGQMripZL27hqVqOsfBv7dhrby7+u1rOgANh7VKubu7+u1rugB8/LdKubu7+u1rugB8/LeScLy7hqVqunfmWbiScLy7hqVqunfmWbjoFb27UOxmughLlrgfmb27ph9humIat7gfmb27ph9humIat7he7b273tBZuhorzLhe7b273tBZuhorzLhlCr67F7dRuk5t07hlCr67F7dRuk5t07hlCr67F7dRuk5t07hlCr67F7dRuk5t07hlCr67F7dROk5t07hlCr67F7dROk5t07hlCr67F7dROk5t07he7b273tBZOhorzLhe7b273tBZOhorzLgfmb27ph9hOmIat7gfmb27ph9hOmIat7gfmb27ph9hOmIat7joFb27UOxmOghLlrjoFb27UOxmOghLlriScLy7hqVqOnfmWbhKubu7+u1rOgB8/LfgUk66+u1ruqziorvgUk66hqVqujtRpLvgUk66hqVqujtRpLvgUk66UOxmuuibpbvgUk66ph9hulWiprvgUk66ph9hulWiprvgUk663tBZutFKp7vgUk66F7dRuuCEp7vgUk66F7dRuuCEp7vgUk66F7dRuuCEp7vgUk66F7dROuCEp7vgUk66F7dROuCEp7vgUk66F7dROuCEp7vgUk66F7dROuCEp7vgUk663tBZOtFKp7vgUk663tBZOtFKp7vgUk663tBZOtFKp7vgUk663tBZOtFKp7vgUk66ph9hOlWiprvgUk66ph9hOlWiprvgUk66UOxmOuibpbvgUk66UOxmOuibpbvgUk66hqVqOjtRpLvgUk66+u1rOqziorsAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAA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xBuePqAOzT0yfaM+cuXYPeyKnz6d8ss9KjajPm/J1z3kQ58+OcnWPdIDnz4UJ8o9QMOiPub91T360J4+haTJPZyioj5We9U9VrCePol3yT1el6I+W07VPRilnj49C+A9Hg2iPq0k6j1Qr54+PQvgPR4Noj6tJOo9UK+ePmwh8D2m/5w+VnvVPVqwnj7TSPA9ggmdPub91T360J4+MLvwPRYmnT7jTCg+YMKYPklt8T2gUp0+2ogoPl7gmD63TfI9voqdPn1G8z32yJ0+GvhePhjPVj4a+F4+eARWPmfqaT7oiEA+Z+ppPrSIPz4a+F4+oLxUPmfqaT5YvT4+GvhePohfVD55S1g+gMNjPhr4Xj5sP1Q+To1nPthQfT55S1g+gMNjPiaKZz7gi0o+To1nPthQfT5n6mk+0A0+PiwxYz4Yvk4+JopnPkizSj5n6mk+1Do+Po4pcz4gX2Y+LDFjPjQbTz6OKXM+HKxmPiaKZz6810s+jilzPgwkZz4mimc+KLhMPiaKZz7wsE0+JgAAACcAJQAAACYAJQABAAAAJQACAAEAJAACACUAJAADAAIAIwADACQAIgADACMAIQADACIAIQAEAAMAIAAEACEAHwAEACAAHgAEAB8AHgAFAAQAHQAFAB4AHAAFAB0AHAAGAAUAGwAGABwAGgAGABsAGQAGABoAGQAHAAYAGAAHABkAFwAHABgAFwAIAAcAFgAIABcAFQAIABYAFQAJAAgAFAAJABUAEwAJABQAEwAKAAkAEgAKABMAEgALAAoAEQALABIAEAALABEAEAAMAAsADwAMABAADgAMAA8ADgANAAwATgBPACgATQBOACgATQAoACkATQApACoATABNACoATAAqACsASwBMACsASgBLACsASQBKACsASQArACwASABJACwARwBIACwARgBHACwARgAsAC0ARQBGAC0ARABFAC0ARAAtAC4AQwBEAC4AQgBDAC4AQQBCAC4AQQAuAC8AQABBAC8APwBAAC8APwAvADAAPgA/ADAAPQA+ADAAPQAwADEAPAA9ADEAOwA8ADEAOwAxADIAOgA7ADIAOgAyADMAOQA6ADMAOAA5ADMAOAAzADQANwA4ADQANgA3ADQANgA0ADUAUwBsAGsAUwBrAFEAVABtAGwAVABsAFMAVgBuAG0AVgBtAFQAWABvAG4AWABuAFYAXABxAG8AXABvAFgAXgByAHAAXgBwAFsAYAB0AHMAYABzAF8AYwB1AHQAYwB0AGAAZgB3AHUAZgB1AGMAaAB5AHcAaAB3AGYAagB7AHkAagB5AGgAbAB9AHwAbAB8AGsAbQB+AH0AbQB9AGwAbgB/AH4AbgB+AG0AbwCAAH8AbwB/AG4AcQCCAIAAcQCAAG8AcgCDAIEAcgCBAHAAdACHAIUAdACFAHMAdQCJAIcAdQCHAHQAdwCLAIkAdwCJAHUAeACMAIoAeACKAHYAegCNAIwAegCMAHgAfQCPAI4AfQCOAHwAfgCQAI8AfgCPAH0AfwCRAJAAfwCQAH4AgACSAJEAgACRAH8AggCUAJIAggCSAIAAgwCVAJMAgwCTAIEAhgCXAJYAhgCWAIQAiACYAJcAiACXAIYAigCZAJgAigCYAIgAjACaAJkAjACZAIoAjQCbAJoAjQCaAIwAjwCdAJwAjwCcAI4AkACeAJ0AkACdAI8AkQCfAJ4AkQCeAJAAkgCgAJ8AkgCfAJEAlACiAKAAlACgAJIAlQCjAKEAlQChAJMAlwClAKQAlwCkAJYAmACmAKUAmAClAJcAmQCnAKYAmQCmAJgAmgCoAKcAmgCnAJkAmwCpAKgAmwCoAJoAnQCrAKoAnQCqAJwAngCsAKsAngCrAJ0AnwCtAKwAnwCsAJ4AoACuAK0AoACtAJ8AogCwAK4AogCuAKAAowCxAK8AowCvAKEApQCzALIApQCyAKQApgC0ALMApgCzAKUApwC1ALQApwC0AKYAqAC2ALUAqAC1AKcAqQC3ALYAqQC2AKgAqwC5ALgAqwC4AKoArAC6ALkArAC5AKsArQC7ALoArQC6AKwArgC8ALsArgC7AK0AsAC+ALwAsAC8AK4AsQC/AL0AsQC9AK8AswDCAMAAswDAALIAtADEAMIAtADCALMAtQDFAMQAtQDEALQAtgDGAMUAtgDFALUAtwDHAMYAtwDGALYAuQDJAMgAuQDIALgAugDKAMkAugDJALkAuwDLAMoAuwDKALoAvADMAMsAvADLALsAvgDOAMwAvgDMALwAvwDPAM0AvwDNAL0AwwDTANEAwwDRAMEAxADUANIAxADSAMIAxQDVANQAxQDUAMQAxgDWANUAxgDVAMUAxwDXANYAxwDWAMYAyQDZANgAyQDYAMgAygDaANkAygDZAMkAywDbANoAywDaAMoAzADcANsAzADbAMsAzgDeANwAzgDcAMwAzwDfAN0AzwDdAM0A0gDhAOAA0gDgANAA1ADiAOEA1ADhANIA1QDjAOIA1QDiANQA1gDkAOMA1gDjANUA1wDlAOQA1wDkANYA2QDnAOYA2QDmANgA2gDoAOcA2gDnANkA2wDpAOgA2wDoANoA3ADqAOkA3ADpANsA3gDsAOoA3gDqANwA3wDtAOsA3wDrAN0A4QDvAO4A4QDuAOAA4gDwAO8A4gDvAOEA4wDxAPAA4wDwAOIA5ADyAPEA5ADxAOMA5QDzAPIA5QDyAOQA5wD1APQA5wD0AOYA6AD2APUA6AD1AOcA6QD3APYA6QD2AOgA6gD4APcA6gD3AOkA7AD6APgA7AD4AOoA7QD7APkA7QD5AOsA7wD9APwA7wD8AO4A8AD+AP0A8AD9AO8A8QD/AP4A8QD+APAA8gAAAf8A8gD/APEA8wABAQAB8wAAAfIA9QADAQIB9QACAfQA9gAEAQMB9gADAfUA9wAFAQQB9wAEAfYA+AAGAQUB+AAFAfcA+gAIAQYB+gAGAfgA+wAJAQcB+wAHAfkA/QALAQoB/QAKAfwA/gAMAQsB/gALAf0A/wANAQwB/wAMAf4AAAEOAQ0BAAENAf8AAQEPAQ4BAQEOAQABAwERARABAwEQAQIBBAESAREBBAERAQMBBQETARIBBQESAQQBBgEUARMBBgETAQUBCAEWARQBCAEUAQYBCQEXARUBCQEVAQcBCwEZARgBCwEYAQoBDAEaARkBDAEZAQsBDQEbARoBDQEaAQwBDgEcARsBDgEbAQ0BDwEdARwBDwEcAQ4BEQEfAR4BEQEeARABEgEgAR8BEgEfAREBEwEhASABEwEgARIBFAEiASEBFAEhARMBFgEkASIBFgEiARQBFwElASMBFwEjARUBGQEnASYBGQEmARgBGgEoAScBGgEnARkBGwEpASgBGwEoARoBHAEqASkBHAEpARsBHQErASoBHQEqARwBHwEtASwBHwEsAR4BIAEuAS0BIAEtAR8BIQEvAS4BIQEuASABIgEwAS8BIgEvASEBJAEyATABJAEwASIBJQEzATEBJQExASMBJwE1ATQBJwE0ASYBKAE2ATUBKAE1AScBKQE3ATYBKQE2ASgBKgE4ATcBKgE3ASkBKwE5ATgBKwE4ASoBLQE7AToBLQE6ASwBLgE8ATsBLgE7AS0BLwE9ATwBLwE8AS4BMAE+AT0BMAE9AS8BMgE/AT4BMgE+ATABMwFBAUABMwFAATEBNQFDAUIBNQFCATQBNgFEAUMBNgFDATUBNwFFAUQBNwFEATYBOAFGAUUBOAFFATcBOQFHAUYBOQFGATgBOwFJAUgBOwFIAToBPAFKAUkBPAFJATsBPQFLAUoBPQFKATwBPgFMAUsBPgFLAT0BPwFNAUwBPwFMAT4BQQFPAU4BQQFOAUABQwFRAVABQwFQAUIBRAFSAVEBRAFRAUMBRQFTAVIBRQFSAUQBRgFUAVMBRgFTAUUBRwFVAVQBRwFUAUYBSQFXAVYBSQFWAUgBSgFYAVcBSgFXAUkBSwFZAVgBSwFYAUoBTAFaAVkBTAFZAUsBTQFbAVoBTQFaAUwBTwFdAVwBTwFcAU4BUQFfAV4BUQFeAVABUgFgAV8BUgFfAVEBUwFhAWABUwFgAVIBVAFiAWEBVAFhAVMBVQFjAWIBVQFiAVQBVwFlAWQBVwFkAVYBWAFmAWUBWAFlAVcBWQFnAWYBWQFmAVgBWgFoAWcBWgFnAVkBWwFpAWgBWwFoAVoBXQFrAWoBXQFqAVwBXwFtAWwBXwFsAV4BYAFuAW0BYAFtAV8BYQFvAW4BYQFuAWABYgFwAW8BYgFvAWEBYwFxAXABYwFwAWIBZQFzAXIBZQFyAWQBZgF0AXMBZgFzAWUBZwF1AXQBZwF0AWYBaAF2AXUBaAF1AWcBaQF3AXYBaQF2AWgBawF5AXgBawF4AWoBbQF7AXoBbQF6AWwBbgF8AXsBbgF7AW0BbwF9AXwBbwF8AW4BcAF+AX0BcAF9AW8BcQF/AX4BcQF+AXABcwGBAYABcwGAAXIBdAGCAYEBdAGBAXMBdQGDAYIBdQGCAXQBdgGEAYMBdgGDAXUBdwGFAYQBdwGEAXYBeQGIAYYBeQGGAXgBewGLAYkBewGJAXoBfAGMAYsBfAGLAXsBfQGNAYwBfQGMAXwBfgGOAY0BfgGNAX0BfwGPAY4BfwGOAX4BgQGRAZABgQGQAYABggGSAZEBggGRAYEBgwGTAZIBgwGSAYIBhAGUAZMBhAGTAYMBhQGVAZQBhQGUAYQBiAGYAZYBiAGWAYYBigGaAZcBigGXAYcBjAGcAZsBjAGbAYsBjQGdAZwBjQGcAYwBjgGeAZ0BjgGdAY0BjwGfAZ4BjwGeAY4BkQGhAaABkQGgAZABkgGiAaEBkgGhAZEBkwGjAaIBkwGiAZIBlAGkAaMBlAGjAZMBlQGlAaQBlQGkAZQBmAGnAaYBmAGmAZYBmwGpAagBmwGoAZkBnAGqAakBnAGpAZsBnQGrAaoBnQGqAZwBngGsAasBngGrAZ0BnwGtAawBnwGsAZ4BoQGvAa4BoQGuAaABogGwAa8BogGvAaEBowGxAbABowGwAaIBpAGyAbEBpAGxAaMBpQGzAbIBpQGyAaQBpwG1AbQBpwG0AaYBqQG3AbYBqQG2AagBqgG4AbcBqgG3AakBqwG5AbgBqwG4AaoBrAG6AbkBrAG5AasBrQG7AboBrQG6AawBrwG9AbwBrwG8Aa4BsAG+Ab0BsAG9Aa8BsQG/Ab4BsQG+AbABsgHAAb8BsgG/AbEBswHBAcABswHAAbIBtQHDAcIBtQHCAbQBtwHFAcQBtwHEAbYBuAHGAcUBuAHFAbcBuQHHAcYBuQHGAbgBugHIAccBugHHAbkBuwHJAcgBuwHIAboBvQHLAcoBvQHKAbwBvgHMAcsBvgHLAb0BvwHNAcwBvwHMAb4BwAHOAc0BwAHNAb8BwQHPAc4BwQHOAcABwwHRAdABwwHQAcIBxQHTAdIBxQHSAcQBxgHUAdMBxgHTAcUBxwHVAdQBxwHUAcYByAHWAdUByAHVAccByQHXAdYByQHWAcgBywHZAdgBywHYAcoBzAHaAdkBzAHZAcsBzQHbAdoBzQHaAcwBzgHcAdsBzgHbAc0BzwHdAdwBzwHcAc4B0QHfAd4B0QHeAdAB0wHiAeAB0wHgAdIB1AHkAeIB1AHiAdMB1QHlAeQB1QHkAdQB1gHmAeUB1gHlAdUB1wHnAeYB1wHmAdYB2QHpAegB2QHoAdgB2gHqAekB2gHpAdkB2wHrAeoB2wHqAdoB3AHsAesB3AHrAdsB3QHtAewB3QHsAdwB3wHvAe4B3wHuAd4B4gHyAfAB4gHwAeAB4wHzAfEB4wHxAeEB5QH1AfQB5QH0AeQB5gH2AfUB5gH1AeUB5wH3AfYB5wH2AeYB6QH5AfgB6QH4AegB6gH6AfkB6gH5AekB6wH7AfoB6wH6AeoB7AH8AfsB7AH7AesB7QH9AfwB7QH8AewB7wH/Af4B7wH+Ae4B8gECAgAC8gEAAvAB8wEDAgEC8wEBAvEB9QEFAgQC9QEEAvQB9gEGAgUC9gEFAvUB9wEHAgYC9wEGAvYB+QEJAggC+QEIAvgB+gEKAgkC+gEJAvkB+wELAgoC+wEKAvoB/AEMAgsC/AELAvsB/QENAgwC/QEMAvwB/wEPAg4C/wEOAv4BAgISAhACAgIQAgACAwITAhECAwIRAgECBQIVAhQCBQIUAgQCBgIWAhUCBgIVAgUCBwIXAhYCBwIWAgYCCQIZAhgCCQIYAggCCgIaAhkCCgIZAgkCCwIbAhoCCwIaAgoCDAIcAhsCDAIbAgsCDQIdAhwCDQIcAgwCDwIfAh4CDwIeAg4CEgIiAiACEgIgAhACEwIjAiECEwIhAhECFQIlAiQCFQIkAhQCFgImAiUCFgIlAhUCFwInAiYCFwImAhYCGQIpAigCGQIoAhgCGgIqAikCGgIpAhkCGwIrAioCGwIqAhoCHAIsAisCHAIrAhsCHQItAiwCHQIsAhwCHwIvAi4CHwIuAh4CIgIyAjACIgIwAiACIwIzAjECIwIxAiECJQI1AjQCJQI0AiQCJgI2AjUCJgI1AiUCJwI3AjYCJwI2AiYCKQI5AjgCKQI4AigCKgI6AjkCKgI5AikCKwI7AjoCKwI6AioCLAI8AjsCLAI7AisCLQI9AjwCLQI8AiwCLwI/Aj4CLwI+Ai4CMgJCAkACMgJAAjACMwJDAkECMwJBAjECNQJFAkQCNQJEAjQCNgJGAkUCNgJFAjUCNwJHAkYCNwJGAjYCOQJJAkgCOQJIAjgCOgJKAkkCOgJJAjkCOwJLAkoCOwJKAjoCPAJMAksCPAJLAjsCPQJNAkwCPQJMAjwCPwJPAk4CPwJOAj4CQgJSAlACQgJQAkACQwJTAlECQwJRAkECRQJVAlQCRQJUAkQCRgJWAlUCRgJVAkUCRwJXAlYCRwJWAkYCSQJZAlgCSQJYAkgCSgJaAlkCSgJZAkkCSwJbAloCSwJaAkoCTAJcAlsCTAJbAksCTQJdAlwCTQJcAkwCTwJfAl4CTwJeAk4CUgJiAmACUgJgAlACUwJjAmECUwJhAlECVQJlAmQCVQJkAlQCVgJmAmUCVgJlAlUCVwJnAmYCVwJmAlYCWQJpAmgCWQJoAlgCWgJqAmkCWgJpAlkCWwJrAmoCWwJqAloCXAJsAmsCXAJrAlsCXQJtAmwCXQJsAlwCXwJvAm4CXwJuAl4CYgJyAnACYgJwAmACYwJzAnECYwJxAmECZQJ1AnQCZQJ0AmQCZgJ2AnUCZgJ1AmUCZwJ3AnYCZwJ2AmYCaQJ5AngCaQJ4AmgCagJ6AnkCagJ5AmkCawJ7AnoCawJ6AmoCbAJ8AnsCbAJ7AmsCbQJ9AnwCbQJ8AmwCbwJ/An4CbwJ+Am4CcgKCAoACcgKAAnACcwKDAoECcwKBAnECdQKFAoQCdQKEAnQCdgKGAoUCdgKFAnUCdwKHAoYCdwKGAnYCeQKJAogCeQKIAngCegKKAokCegKJAnkCewKLAooCewKKAnoCfAKMAosCfAKLAnsCfQKNAowCfQKMAnwCfwKPAo4CfwKOAn4CggKSApACggKQAoACgwKTApECgwKRAoEChQKVApQChQKUAoQChgKWApUChgKVAoUChwKXApYChwKWAoYCiQKbApkCiQKZAogCigKcApsCigKbAokCiwKeApwCiwKcAooCjAKgAp4CjAKeAosCjQKiAqACjQKgAowCjwKmAqQCjwKkAo4CkgKpAqcCkgKnApACkwKqAqgCkwKoApEClQKtAqsClQKrApQClgKvAq0ClgKtApUClwKwAq8ClwKvApYCmgKyArECmgKxApgCnAK0ArMCnAKzApsCngK2ArQCngK0ApwCnwK3ArUCnwK1Ap0CoQK5ArcCoQK3Ap8CpQK7ArgCpQK4AqMCqQLAArwCqQK8AqcCqgLDAr8CqgK/AqgCrgLGAsQCrgLEAqwCrwLHAsUCrwLFAq0CsALIAscCsALHAq8CsgJSAFAAsgJQALECtAJUAFMAtAJTALMCtgJWAFQAtgJUALQCtwJXAFUAtwJVALUCuQJaAFcAuQJXALcCvQJdAFkAvQJZALoCwQJgAF8AwQJfAL4CxAJiAGEAxAJhAMICxgJkAGIAxgJiAMQCxwJnAGUAxwJlAMUCyAJpAGcAyAJnAMcC";function og(){var s=new ms,e=new _r(10,48,24),t=document.createElement("canvas");t.width=4,t.height=256;var n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,256);i.addColorStop(0,"#cfe9ff"),i.addColorStop(.45,"#4aa8f2"),i.addColorStop(.62,"#2f6fe0"),i.addColorStop(1,"#0e1c4a"),n.fillStyle=i,n.fillRect(0,0,4,256);var r=new Sr(t);r.colorSpace=ct,s.add(new lt(e,new Nt({map:r,side:gt})));function o(a,A,c,u,l,h,f){var m=new lt(new ji(a,A),new Nt({color:new Te(h).multiplyScalar(f),side:Rt}));m.position.set(c,u,l),m.lookAt(0,0,0),s.add(m)}return o(7,3,-5,6,6,16777215,7),o(2,9,7,1,3,16777215,6),o(5,2,0,-6,5,12576511,4),o(3,6,-8,0,-4,16766706,3),o(3,6,6,2,-6,10480127,3.5),s}function ag(s,e){e=e||{};var t=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;display:block";var i;try{i=new wr({canvas:n,alpha:!0,antialias:!0,premultipliedAlpha:!0})}catch{return!1}i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.setClearColor(0,0),i.toneMapping=za,i.toneMappingExposure=1.05;var r=new ms,o=new qi(i);r.environment=o.fromScene(og(),.02).texture;var a=new ut(28,1,.1,100),A=new ai(16777215,2.2);A.position.set(3,4,5),r.add(A);var c=new ai(11131131,1.6);c.position.set(-4,1,-3),r.add(c);function u(P,S){var j=new Et({color:15923711,metalness:0,roughness:.03,transparent:!0,opacity:S,clearcoat:1,clearcoatRoughness:.02,iridescence:1,iridescenceIOR:1.3,iridescenceThicknessRange:[200,700],envMapIntensity:e.env||2.2,specularIntensity:1,side:P,depthWrite:!1});return j.onBeforeCompile=function(F){F.fragmentShader=F.fragmentShader.replace("#include <dithering_fragment>",`float fr=pow(1.0-abs(dot(normalize(vNormal),normalize(vViewPosition))),2.0);
gl_FragColor.a=clamp(gl_FragColor.a+fr*0.55,0.0,1.0);
gl_FragColor.rgb+=fr*vec3(0.55,0.8,1.0)*0.55;
#include <dithering_fragment>`)},j}var l=u(gt,(e.opacity||.34)*.8),h=u(qt,e.opacity||.34),f=new Gt;r.add(f);for(var m=!1,g=atob(Su),p=new ArrayBuffer(g.length),d=new Uint8Array(p),M=0;M<g.length;M++)d[M]=g.charCodeAt(M);new jr().parse(p,"",function(P){var S=P.scene,j=[];S.traverse(function($){if($.isMesh){var ce=$.clone();ce.material=l,ce.renderOrder=1,$.material=h,$.renderOrder=2,j.push([$.parent,ce]);var de=new Wi(new Dr($.geometry,30),new oi({color:16777215,transparent:!0,opacity:.55,depthWrite:!1}));de.renderOrder=3,de.position.copy($.position),de.quaternion.copy($.quaternion),de.scale.copy($.scale),j.push([$.parent,de])}}),j.forEach(function($){$[0].add($[1])});var F=new _t().setFromObject(S),q=F.getCenter(new _),K=F.getSize(new _);S.position.sub(q);var G=Math.max(K.x,K.y),J=2/G;f.scale.set(J,J,J*(e.depth||2.2)),f.add(S);var k=1/Math.tan(kr.degToRad(a.fov/2))*1.15;a.position.set(0,0,k+K.z*J/2),a.lookAt(0,0,0),m=!0},function(P){e.onerror&&e.onerror(P)}),s.appendChild(n);function T(){var P=s.getBoundingClientRect(),S=Math.max(1,P.width),j=Math.max(1,P.height);i.setSize(S,j,!1),a.aspect=S/j,a.updateProjectionMatrix()}T(),window.addEventListener("resize",T),window.ResizeObserver&&new ResizeObserver(T).observe(s);var x=!1,R=!0,b=performance.now(),E=e.period||14e3,L=e.tilt==null?.12:e.tilt;"IntersectionObserver"in window&&new IntersectionObserver(function(P){R=P[0].isIntersecting}).observe(s);function y(P){if(requestAnimationFrame(y),!(!m||!R)){var S=t?.5:(P-b)/E*Math.PI*2;f.rotation.y=S,f.rotation.x=L,i.render(r,a),x||(x=!0,e.onready&&e.onready())}}return requestAnimationFrame(y),!0}window.MaveroGlass={mount:ag};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
