const t=(t,l)=>{let o={};return o.hex=e(t,l),o.rgb=a(t,l),o.hsb=r(t,l),o.hsl=s(t,l),o.opacity=Number(parseFloat(l).toFixed(3)),o},e=(t,e)=>{let a=parseFloat(e)<=1?parseFloat(e):1,r={};r.hex=t;let s=Math.round(255*a).toString(16);return s=1===s.length?`0${s}`:s,r.hexa=t+s,r},a=(t,e)=>{let a=parseFloat(e)<=1?parseFloat(e):1,r=t.replace(/#/,""),s={},l=parseInt(r,16);return s.r=l>>16&255,s.g=l>>8&255,s.b=255&l,s.rgb="RGB("+s.r+","+s.g+","+s.b+")",s.rgba="RGBA("+s.r+","+s.g+","+s.b+","+a.toFixed(3)+")",s},r=(t,e)=>{let r=parseFloat(e)<=1?parseFloat(e):1,s={};const l=a(t,r.toString()),o=Math.min(l.r,l.g,l.b),n=Math.max(l.r,l.g,l.b),p=n-o,c=0==n?0:p/n,F=n/255;let h;switch(n){case o:h=0;break;case l.r:h=l.g-l.b+p*(l.g<l.b?6:0),h/=6*p;break;case l.g:h=l.b-l.r+2*p,h/=6*p;break;case l.b:h=l.r-l.g+4*p,h/=6*p}return s.h=parseFloat((360*h).toFixed(3)),s.s=parseFloat((100*c).toFixed(3)),s.b=parseFloat((100*F).toFixed(3)),s.hsb="HSB("+s.h.toFixed(0)+","+s.s.toFixed(0)+"%,"+s.b.toFixed(0)+"%)",s.hsba="HSBA("+s.h.toFixed(0)+","+s.s.toFixed(0)+"%,"+s.b.toFixed(0)+"%,"+r.toFixed(3)+")",s},s=(t,e)=>{let r=parseFloat(e)<=1?parseFloat(e):1;const s=a(t,r.toString());return l(s)},l=t=>{const e=h(t);let a={};const r=t.r/255,s=t.g/255,l=t.b/255,o=Math.min(r,s,l),n=Math.max(r,s,l);let p=(n+o)/2,c=p,F=p;if(n==o)p=c=0;else{const t=n-o;switch(c=F>.5?t/(2-n-o):t/(n+o),n){case r:p=(s-l)/t+(s<l?6:0);break;case s:p=(l-r)/t+2;break;case l:p=(r-s)/t+4}p/=6}return a.h=parseFloat((360*p).toFixed(3)),a.s=parseFloat((100*c).toFixed(3)),a.l=parseFloat((100*F).toFixed(3)),a.hsl="HSL("+a.h.toFixed(0)+","+a.s.toFixed(0)+"%,"+a.l.toFixed(0)+"%)",a.hsla="HSLA("+a.h.toFixed(0)+","+a.s.toFixed(0)+"%,"+a.l.toFixed(0)+"%,"+e.toFixed(3)+")",a},o=t=>{let e={};const a=u(t),r=t.h/360,s=Math.floor(6*r),l=(()=>{const[e,a]=[t.s,t.b].map(t=>Number(t)/100),l=6*r-s,o=a*(1-e),n=a*(1-l*e),p=a*(1-(1-l)*e);return{0:[a,p,o],1:[n,a,o],2:[o,a,p],3:[o,n,a],4:[p,o,a],5:[a,o,n]}})(),[o,n,p]=l[s%6].map(t=>Math.round(255*t));return e.r=o,e.g=n,e.b=p,e.rgb="RGB("+e.r+","+e.g+","+e.b+")",e.rgba="RGBA("+e.r+","+e.g+","+e.b+","+a.toFixed(3)+")",e},n=t=>{let e=t.rgba.split("(")[1].slice(0,-1).split(","),a="#";e.forEach((t,e)=>{if(3===e){let e=Math.round(255*parseFloat(t)).toString(16);e.length<2&&(e=`0${e}`),a+=e}else{let e=parseFloat(t).toString(16);e.length<2&&(e=`0${e}`),a+=e}});let r={};return r.hex=a.slice(0,-2),r.hexa=a,r},p=t=>{let e=o(t);return n(e)},c=t=>{let e={};const a=M(t),r=t.h/360,s=t.s/100,l=t.l/100;if(0===s)e.r=e.g=e.b=l;else{const t=(t,e,a)=>(a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+6*(e-t)*a:a<.5?e:a<2/3?t+(e-t)*(2/3-a)*6:t),a=l<.5?l*(1+s):l+s-l*s,o=2*l-a;e.r=Math.round(255*t(o,a,r+1/3)),e.g=Math.round(255*t(o,a,r)),e.b=Math.round(255*t(o,a,r-1/3))}return e.rgb="RGB("+e.r+","+e.g+","+e.b+")",e.rgba="RGBA("+e.r+","+e.g+","+e.b+","+a.toFixed(3)+")",e},F=t=>{let e=Object.assign({},t),a=u(e);return e.s=100,e.b=100,e.hsb="HSB("+e.h.toFixed(0)+","+e.s.toFixed(0)+"%,"+e.b.toFixed(0)+"%)",e.hsba="HSBA("+e.h.toFixed(0)+","+e.s.toFixed(0)+"%,"+e.b.toFixed(0)+"%,"+a.toFixed(3)+")",p(e)},h=t=>parseFloat(t.rgba.split(",")[3].slice(0,-1)),u=t=>parseFloat(t.hsba.split(",")[3].slice(0,-1)),M=t=>parseFloat(t.hsla.split(",")[3].slice(0,-1)),B=t=>{let e={};var F;return e.hex={},e.rgb={},e.hsb={},e.hsl={},t.hex&&(e.hex.hex=t.hex,e.hex.hexa=t.hexa,e.opacity=(F=e.hex,parseInt(F.hexa.slice(F.hexa.length-2,F.hexa.length),16)/255),e.rgb=a(e.hex.hex,e.opacity.toString()),e.hsb=r(e.hex.hex,e.opacity.toString()),e.hsl=s(e.hex.hex,e.opacity.toString())),t.rgb&&(e.rgb.r=t.r,e.rgb.g=t.g,e.rgb.b=t.b,e.rgb.rgb=t.rgb,e.rgb.rgba=t.rgba,e.opacity=h(e.rgb),e.hex=n(e.rgb),e.hsb=r(e.hex.hex,e.opacity.toString()),e.hsl=l(e.rgb)),t.hsb&&(e.hsb.h=t.h,e.hsb.s=t.s,e.hsb.b=t.b,e.hsb.hsb=t.hsb,e.hsb.hsba=t.hsba,e.opacity=u(e.hsb),e.hex=p(e.hsb),e.rgb=o(e.hsb),e.hsl=l(e.rgb)),t.hsl&&(e.hsl.h=t.h,e.hsl.s=t.s,e.hsl.l=t.l,e.hsl.hsl=t.hsl,e.hsl.hsla=t.hsla,e.opacity=M(e.hsl),e.hex=(t=>{let e=c(t);return n(e)})(e.hsl),e.rgb=c(e.hsl),e.hsb=r(e.hex.hex,e.opacity.toString())),e},H=(t,e)=>{let a={};a.h=b(t,e),a.s=S(),a.b=S(),a.hsb="HSB("+a.h.toFixed(0)+","+a.s.toFixed(0)+"%,"+a.b.toFixed(0)+"%)",a.hsba="HSBA("+a.h.toFixed(0)+","+a.s.toFixed(0)+"%,"+a.b.toFixed(0)+"%,"+1..toFixed(3)+")";let r=o(a);return n(r).hex},b=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,S=()=>Math.floor(51*Math.random())+50;export{F as H,B as f,r as h,t as i,u as o,H as r};