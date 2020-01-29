import{r as t,h as i,H as s,g as h}from"./p-66e1c136.js";import{d as e,a,b as l,c as r,e as n,g as o}from"./p-a5313538.js";import{w as c,c as d,a as u,b as f,u as p,t as x,d as m,e as y,f as g,m as b,g as M,r as L,h as w,i as k,j as z,k as _,l as v,n as P,o as F,p as S}from"./p-36c59eeb.js";const T=class{constructor(i){t(this,i),this.toggle=!1,this._update=!1}parseTitleProp(t){this.innerTitle=t||null}parseSubTitleProp(t){this.innerSubTitle=t||null}parseXTitleProp(t){this.innerXTitle=t||null}parseYTitleProp(t){this.innerYTitle=t||null}parseDataProp(t){const i=t||null;let s=[],h={status:200};if(null!=i){let t=JSON.parse(i),e=[];if(t instanceof Array?e=t:e.push(t),this._axisType=[],this._legendNames=[],this._legendColors=[],this._legendThicknesses=[],e.length>=1&&Object.keys(e[0]).length>=1){for(let t=0;t<e.length;t++)if(e[t].dataPoints){let i={};i.color=e[t].color?e[t].color:"#000000",i.name=e[t].name?e[t].name:null,i.lineThickness=e[t].lineThickness?e[t].lineThickness:1,i.markerType=e[t].markerType?e[t].markerType:"none",i.markerColor=e[t].markerColor?e[t].markerColor:i.color,i.markerSize=e[t].markerSize?e[t].markerSize:10,i.dataPoints=e[t].dataPoints,this._legendThicknesses.push(i.lineThickness),this._legendColors.push(i.color),null!==i.name&&this._legendNames.push(i.name),i.dataPoints[0].x?i.dataPoints[0].y?(0===t&&(i.dataPoints[0].x&&this._axisType.push("x"),i.dataPoints[0].y&&this._axisType.push("y")),s.push(i)):(s=null,h={status:400,message:"Error: no y data in dataset: "+t+" of data property"}):(s=null,h={status:400,message:"Error: no x data in dataset: "+t+" of data property"})}else s=null,h={status:400,message:"Error: no dataPoints object in dataset: "+t+" of data property"};200===h.status&&s&&s.length>1&&s.length!==this._legendNames.length&&(s=null,h={status:400,message:"Error: name attribute missing in some datasets"})}else s=null,h={status:400,message:"Error: no data provided"}}else s=null,h={status:400,message:"Error: no data property"};this.status=h,this.innerData=200===this.status.status?[...s]:null}parseStyleProp(t){this.innerStyle=t||null}parseAnimationProp(t){this.innerAnimation=t||!1}parseBorderProp(t){this.innerBorder=t||!1}parseDelayProp(t){this.innerDelay=t?parseFloat(t):100}init(){return Promise.resolve(this._init())}getStatus(){return Promise.resolve(this.status)}renderChart(){return Promise.resolve(this._renderChart())}async getWindowSize(){return c(this.window)}async getCssProperties(){return this._prop}async componentWillLoad(){this.window=window,this._prop={},await this._init()}componentDidLoad(){this._element=this.el.shadowRoot,200===this.status.status&&this._renderChart()}async _init(){this.document=this.window.document,this.root=this.document.documentElement,this.window.addEventListener("resize",e(this,this._windowResize,100,!1),!1),this._selMarker=[],this._axisType=[],this._legendRect={},this._update=!1,this._dataColor=!1,this._yaxis={},this._xaxis={},this._legendRect={};let t=[];if(t=this._axisType.filter(t=>"label"===t),this._label=!1,"label"===t[0]&&(this._label=!0),this._showTarget=0,this._mouseStart=!1,this._xmlns="http://www.w3.org/2000/svg",this._xlink="http://www.w3.org/1999/xlink",this.parseTitleProp(this.ctitle?this.ctitle:null),this.parseSubTitleProp(this.subtitle?this.subtitle:null),this.parseXTitleProp(this.xtitle?this.xtitle:null),this.parseYTitleProp(this.ytitle?this.ytitle:null),this.parseAnimationProp(!!this.animation&&this.animation),this.parseBorderProp(!!this.cborder&&this.cborder),this.parseStyleProp(this.cstyle?this.cstyle:null),this.parseDelayProp(this.delay?this.delay:"100"),this._prop.topPlot=this._prop.topPlot?this._prop.topPlot:this._setPropertyValue("--chart-top",this.window.getComputedStyle(this.root).getPropertyValue("--chart-top")),this._prop.leftPlot=this._prop.leftPlot?this._prop.leftPlot:this._setPropertyValue("--chart-left",this.window.getComputedStyle(this.root).getPropertyValue("--chart-left")),this._prop.widthPlot=this._prop.widthPlot?this._prop.widthPlot:this._setPropertyValue("--chart-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-width")),this._prop.heightPlot=this._prop.heightPlot?this._prop.heightPlot:this._setPropertyValue("--chart-height",this.window.getComputedStyle(this.root).getPropertyValue("--chart-height")),this._prop.bgColor=this._prop.bgColor?this._prop.bgColor:this._setPropertyValue("--chart-background-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-background-color")),this._prop.tiColor=this._setPropertyValue("--chart-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-color")),this._prop.stColor=this._setPropertyValue("--chart-subtitle-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-color")),this._prop.ftFamily=this._setPropertyValue("--chart-font-family",this.window.getComputedStyle(this.root).getPropertyValue("--chart-font-family")),this._prop.ftTiSize=this._setPropertyValue("--chart-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-font-size")),this._prop.ftSTSize=this._setPropertyValue("--chart-subtitle-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-font-size")),this._prop.axColor=this._setPropertyValue("--chart-axis-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-color")),this._prop.lnColor=this._setPropertyValue("--chart-line-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-line-color")),this._prop.atColor=this._setPropertyValue("--chart-axis-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-color")),this._prop.lbColor=this._setPropertyValue("--chart-label-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-color")),this._prop.ftLbSize=this._setPropertyValue("--chart-label-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-font-size")),this._prop.ftATSize=this._setPropertyValue("--chart-axis-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-font-size")),this._prop.ftSTSize=this._setPropertyValue("--chart-subtitle-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-font-size")),this._prop.tickX=this._setPropertyValue("--chart-tick-x-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-x-length")),this._prop.tickY=this._setPropertyValue("--chart-tick-y-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-y-length")),this._prop.gridX=this._setPropertyValue("--chart-grid-x",this.window.getComputedStyle(this.root).getPropertyValue("--chart-grid-x")),this._prop.xInterval=this._setPropertyValue("--chart-axis-x-interval",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-x-interval")),this._prop.yInterval=this._setPropertyValue("--chart-axis-y-interval",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-y-interval")),this._prop.xZero=this._setPropertyValue("--chart-axis-x-zero",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-x-zero")),this._prop.yZero=this._setPropertyValue("--chart-axis-y-zero",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-y-zero")),this._prop.animDuration=this._setPropertyValue("--chart-animation-duration",this.window.getComputedStyle(this.root).getPropertyValue("--chart-animation-duration")),this._prop.legendTop=this._setPropertyValue("--chart-legend-top",this.window.getComputedStyle(this.root).getPropertyValue("--chart-legend-top")),this._prop.ftLgSize=this._setPropertyValue("--chart-legend-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-legend-font-size")),this._prop.bdColor=this._setPropertyValue("--chart-border-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-color")),this._prop.bdWidth=this._setPropertyValue("--chart-border-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-width")),null!=this.innerStyle){const t=await a(this.innerStyle);null!=t&&(this._prop.leftPlot=t.left?t.left:this._prop.leftPlot,this._prop.topPlot=t.top?t.top:this._prop.topPlot,this._prop.widthPlot=t.width?t.width:this._prop.widthPlot,this._prop.heightPlot=t.height?t.height:this._prop.heightPlot,this._prop.bgColor=t.backgroundcolor?t.backgroundcolor:this._prop.bgColor)}this.parseDataProp(this.data?this.data:null),this._wSize=await this.getWindowSize(),this._setContainerSize()}_setContainerSize(){this.w_width=l(this._prop.widthPlot,this._wSize.width,"0"),this.w_height=l(this._prop.heightPlot,this._wSize.height,"0"),this.el.style.setProperty("--top",this._prop.topPlot),this.el.style.setProperty("--left",this._prop.leftPlot),this.el.style.setProperty("--width",`${this.w_width}px`),this.el.style.setProperty("--height",`${this.w_height}px`),this.el.style.setProperty("--backgroundcolor",`${this._prop.bgColor}`),this._titleRect=null,this._chartRect={top:0,left:0,width:this.w_width,height:this.w_height}}_setPropertyValue(t,i){return"--chart-background-color"===t?i||"#ffffff":"color"===t.slice(-5)?i||"#000000":"border-width"===t.slice(-12)?i||"1":"font-size"===t.slice(-9)?i||"10px":"font-family"===t.slice(-11)?i||"Verdana":"grid"===t.slice(-6).substring(0,4)?i||"false":"zero"===t.slice(-4)?i||"true":"legend-top"===t.slice(-10)?i||"false":"duration"===t.slice(-8)?i||"1s":i||"0"}async _windowResize(){this._wSize=await this.getWindowSize(),this._setContainerSize(),this._update=!0,this.status&&200===this.status.status&&this._renderChart()}_createMarkers(){let t=d("defs",this.svg),i={id:"marker-circle",viewbox:"0 0 10 10"},s="M0,5 A5,5 0 1,1 10,5 A5,5 0 0,1 0,5 Z";u(t,s,i),i.id="marker-square",s="M0,0 L10,0 L10,10 L0,10 Z",u(t,s,i),i.id="marker-triangle",s="M5,0 L10,10 L0,10 Z",u(t,s,i),i.id="marker-cross",s="M0,2 L2,0 L5,3 L8,0 L10,2 L7,5 L10,8 L8,10 L5,7 L2,10 L0,8 L3,5 Z",u(t,s,i),i.id="marker-plus",s="M0,4 L4,4 L4,0 L6,0 L6,4 L10,4 L10,6 L6,6 L6,10 L4,10 L4,6 L0,6 Z",u(t,s,i)}_createTitle(){if(null!=this.innerTitle){let t,i;this._update?(t=this.svg.querySelector("#linechart-title"),t.removeAttributeNS(null,"transform")):(t=d("g",this.svg),t.setAttributeNS(null,"id","linechart-title"));let s={id:"linechart-title-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftTiSize,fill:this._prop.tiColor,anchor:"middle"},h={x:Math.round(this.w_width/2),y:r(this._prop.ftTiSize)+10};if(i=this._update?p(this.svg,s.id,s.anchor,h):f(t,this.innerTitle,h,s),null!=this.innerSubTitle){const e=i.getBoundingClientRect();s.id="linechart-subtitle-text",s.fontSize=this._prop.ftSTSize,s.fill=this._prop.stColor;let a=Math.ceil(e.bottom-this.borderBB.top)+5;h={x:Math.round(this.w_width/2),y:a+10},this._update?p(this.svg,s.id,s.anchor,h):f(t,this.innerSubTitle,h,s)}const e=t.getBoundingClientRect();let a=x(e.width,this.w_width,10),l="translate("+Math.round(10-e.left*a)+",0) scale("+a+","+a+")";1!=a&&t.setAttributeNS(null,"transform",l);const n=t.getBoundingClientRect();this._titleRect={left:n.left-this.borderBB.left,top:n.top-this.borderBB.top,width:n.width,height:n.height}}}_createAxis(){let t,i=r(this._prop.tickX),s=r(this._prop.tickY),h=parseFloat(this._prop.xInterval),e=parseFloat(this._prop.yInterval);this._update?t=this.svg.querySelector("#linechart-axes"):(t=d("g",this.svg),t.setAttributeNS(this._xmlns,"id","linechart-axes")),this._initChartRect(),this.innerData.length>1&&this._createLegend();let a=this._createTitleY(),l=this._createTitleX();this._lenY=m(this.innerData,"y",e,n(this._prop.yZero)),this._lenX=this._label?m(this.innerData,"label",h):m(this.innerData,"x",h,n(this._prop.xZero));let o=this._labelSize(this._lenY,0);this._x_axy=3+o.width+2+s,this._nXlines=this.innerData[0].dataPoints.length,this._lenX.interval&&"number"===this._lenX.type&&(this._nXlines=Math.abs(Math.floor(this._lenX.length/this._lenX.interval))+1);let c=this._chartRect.width-this._x_axy;this._xInterval=Math.floor(c/this._nXlines),this._lenX.interval&&"number"===this._lenX.type&&(this._xInterval=c/(this._nXlines-1));let u=this._xInterval;this._lenX.interval&&"string"===this._lenX.type&&(this._nXlines=Math.abs(Math.floor(this.innerData[0].dataPoints.length/this._lenX.interval)),u=c/this._nXlines),this._labelRotate=!1;let x=this._labelSize(this._lenX,0);x.width>u-10&&(x=this._labelSize(this._lenX,-80),this._labelRotate=!0),this._y_axy=10+x.height+3+i,this._yaxis={},this._yaxis.left=this._chartRect.left+this._x_axy,this._yaxis.width=0,this._yaxis.top=this._chartRect.top,this._yaxis.height=this._chartRect.height-this._y_axy;let b={id:"linechart-yaxis",stroke:this._prop.axColor,strokeWidth:"1"},M={x:this._yaxis.left,y:this._yaxis.top},L={x:this._yaxis.left+this._yaxis.width,y:this._yaxis.top+this._yaxis.height};if(this._update?g(this.svg,b.id,M,L):y(t,M,L,b),null!=a){let t="translate(0,0)";a.setAttributeNS(null,"transform",t);let i=a.getBoundingClientRect();t="translate(0,"+-Math.round(i.top-this.borderBB.top+i.height/2-(this._yaxis.top+this._yaxis.height/2))+")",a.setAttributeNS(null,"transform",t)}let w={id:"linechart-ylabel0",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"end"},k=Math.floor(parseFloat(this._prop.ftLbSize.split("px")[0])/2)-2;this._nYlines=Math.abs(Math.floor(this._lenY.length/this._lenY.interval))+1;for(let r=0;r<this._nYlines;r++){let i=this._lenY.top-r*Math.abs(this._lenY.interval);b.id="linechart-yLine"+i.toString(),b.stroke=this._prop.lnColor,r===this._nYlines-1&&(b.id="linechart-xaxis",b.stroke=this._prop.axColor),w.id="linechart-ylabel"+i.toString();let h=v(this._yaxis,this._lenY,i),e={x:this._yaxis.left,y:h},a={x:this._chartRect.left+this._chartRect.width,y:h};if(this._update?g(this.svg,b.id,e,a):y(t,e,a,b),s>0){let a={x:this._yaxis.left-s,y:h};b.id="linechart-ytick"+i.toString(),this._update?g(this.svg,b.id,e,a):y(t,e,a,b)}let l={x:this._yaxis.left-s-2,y:h+k};this._update?p(this.svg,w.id,w.anchor,l):f(t,i.toString(),l,w)}let z=this.svg.querySelector("#linechart-xaxis"),_=parseFloat(z.getAttribute("y1")),P=Math.floor(this._xInterval/2);this._lenX.interval&&"number"===this._lenX.type&&(P=0),w={id:"linechart-xlabel",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"middle"},k=Math.floor(r(this._prop.ftLbSize));for(let r=0;r<this._nXlines;r++){let s,h,e,a=this._lenX.bottom+r*Math.abs(this._lenX.interval),l={x:this._yaxis.left+P,y:_};if(n(this._prop.gridX)){b.id="linechart-xLine"+r.toString(),this._lenX.interval&&"number"===this._lenX.type&&(b.id="linechart-xLine"+a.toString()),this._lenX.interval&&"string"===this._lenX.type&&(b.id="linechart-xLine"+(r*this._lenX.interval).toString()),b.stroke=this._prop.lnColor;let i={x:this._yaxis.left+P,y:this._yaxis.top};(!this._lenX.interval||r>=1||"number"!=this._lenX.type)&&(this._update?g(this.svg,b.id,l,i):y(t,l,i,b))}if(i>0){let s={x:this._yaxis.left+P,y:_+i};b.id="linechart-xtick"+r.toString(),this._lenX.interval&&"number"===this._lenX.type&&(b.id="linechart-xtick"+a.toString()),this._lenX.interval&&"string"===this._lenX.type&&(b.id="linechart-xtick"+(r*this._lenX.interval).toString()),this._update?g(this.svg,b.id,l,s):y(t,l,s,b)}s="string"===this._lenX.type?this.innerData[0].dataPoints[r*(void 0!==this._lenX.interval?this._lenX.interval:1)].x:a.toString(),w.id="linechart-xlabel"+s;let o=null;this._labelRotate?(w.anchor="end",e={x:this._yaxis.left+P,y:_+i+3},o="rotate(-80,"+e.x+","+e.y+")"):(w.anchor="middle",e={x:this._yaxis.left+P,y:_+i+k},o="rotate(0,"+e.x+","+e.y+")"),h=this._update?p(this.svg,w.id,w.anchor,e):f(t,s,e,w),null!=o&&h.setAttributeNS(null,"transform",o),P+=this._lenX.interval&&"string"===this._lenX.type?this._xInterval*this._lenX.interval:this._xInterval}if(null!=l){l.setAttributeNS(null,"transform","translate(0,0)");let t=z.getBoundingClientRect(),i=l.getBoundingClientRect(),s=-Math.round(i.left+i.width/2-(t.left+t.width/2));Math.abs(s)>0&&l.setAttributeNS(null,"transform","translate("+s+",0)")}}_labelSize(t,i){let s,h={fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,fill:this._prop.lbColor,anchor:"start"};if(t.label)s=t.label;else{s=t.top.toString();let i=t.bottom.toString();i.length>s.length&&(s=i)}let e=f(this.svg,s,{x:0,y:0},h);0!=i&&e.setAttributeNS(null,"transform","rotate("+i+",0,0)");let a=e.getBoundingClientRect();return this.svg.removeChild(e),{width:Math.ceil(a.width),height:Math.ceil(a.height)}}_initChartRect(){this._chartRect.top=20,null!=this._titleRect&&(this._chartRect.top+=Math.round(this._titleRect.height)),this._chartRect.left=0,this._chartRect.width=this.w_width-this._chartRect.left-20,this._chartRect.height=this.w_height-this._chartRect.top}_createLegend(){let t,i={},s={fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLgSize,anchor:"start"},h=b(this.svg,this.w_width,this._legendNames,this._legendColors,this._legendThicknesses,s);i.left=h.bBox.left,i.width=h.bBox.width,n(this._prop.legendTop)?(i.top=this._chartRect.top+15,this._chartRect.top+=Math.ceil(h.bBox.height)+15):i.top=Math.floor(this._chartRect.top+this._chartRect.height-h.bBox.height),i.height=h.bBox.height,this._chartRect.height-=Math.floor(h.bBox.height)+10,this._update?(t=this.svg.querySelector("#linechart-legend"),L(t),M(t,this._legendNames,this._legendColors,this._legendThicknesses,h,this.w_width,i.top,s)):(t=d("g",this.svg),t.setAttributeNS(null,"id","linechart-legend"),M(t,this._legendNames,this._legendColors,this._legendThicknesses,h,this.w_width,i.top,s))}_createTitleY(){let t,i={id:"linechart-ytitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(null!=this.innerYTitle){let s;this._update?t=this.svg.querySelector("#linechart-ytitle"):(t=d("g",this.svg),t.setAttributeNS(null,"id","linechart-ytitle"));let h=this._chartRect.top+Math.round(this._chartRect.height/2),e={x:5+parseFloat(this._prop.ftATSize.split("px")[0]),y:h};s=this._update?p(this.svg,i.id,i.anchor,e):f(t,this.innerYTitle,e,i);let a="rotate(-90 "+e.x.toString()+" "+e.y.toString()+")";s.setAttributeNS(null,"transform",a);let l=t.getBoundingClientRect();return this._chartRect.left=Math.ceil(l.right-this.borderBB.left),this._chartRect.width-=Math.ceil(l.right-this.borderBB.left),t}return null}_createTitleX(){let t={id:"linechart-xtitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(null!=this.innerXTitle){let i;this._update?i=this.svg.querySelector("#linechart-xtitle"):(i=d("g",this.svg),i.setAttributeNS(null,"id","linechart-xtitle"));let s=this._chartRect.top+this._chartRect.height-15,h={x:Math.round(this._chartRect.left+this._chartRect.width/2),y:s};this._update?p(this.svg,t.id,t.anchor,h):f(i,this.innerXTitle,h,t);let e=i.getBoundingClientRect();return this._chartRect.height-=Math.floor(e.height),i}return null}_createLine(){let t;this._Points=[],this._update?t=this.svg.querySelector("#linechart-data"):(t=d("g",this.svg),t.setAttributeNS(null,"id","linechart-data"));for(let i=0;i<this.innerData.length;i++){let s,h,e=[],a={};a.stroke=this.innerData[i].color,a.strokeWidth=this.innerData[i].lineThickness.toString(),a.fill="none",a.id="linechart-data-"+i.toString(),this._xaxis.left=this._yaxis.left,this._xaxis.width=this._chartRect.left+this._chartRect.width-this._xaxis.left;let l=Math.floor(this._xInterval/2);for(let n=0;n<this.innerData[i].dataPoints.length;n++){a.stroke=this.innerData[i].dataPoints[n].color?this.innerData[i].dataPoints[n].color:this.innerData[i].color;let h={};h.y=v(this._yaxis,this._lenY,this.innerData[i].dataPoints[n].y),h.x=this._lenX.interval&&"number"===this._lenX.type?P(this._xaxis,this._lenX,this.innerData[i].dataPoints[n].x):this._xaxis.left+l,e.push(h),this._placeMarker("marker-"+this.innerData[i].markerType,t,h,i,n,this.innerData[i].markerSize/10,this.innerData[i].markerColor),0===n?s=h.x.toString()+","+h.y.toString():s+=" "+h.x.toString()+","+h.y.toString(),l+=this._xInterval}a.strokeLinejoin="round",a.strokeLinecap="round",a.strokeMiterlimit="10";let r=F(e);h=this._update?k(this.svg,a.id,s):w(t,s,a),this.innerAnimation&&(h.setAttributeNS(null,"stroke-dasharray",r.toString()+","+r.toString()),h.setAttributeNS(null,"stroke-dashoffset",r.toString()),this._setAnimation(h,r.toString(),this._prop.animDuration)),this._Points.push(e)}}_setAnimation(t,i,s){let h={attributeName:"stroke-dashoffset"};h.from=i,h.to="0",h.dur=s,h.fill="freeze",z(t,h)}_placeMarker(t,i,s,h,e,a,l){let r,n;this._update?(n=i.querySelector("#"+t+"-g-"+h.toString()+"-"+e.toString()),r=n.querySelector("#"+t+"-"+h.toString()+"-"+e.toString())):(n=d("g",i),r=d("use",n)),n.setAttributeNS(null,"id",t+"-g-"+h.toString()+"-"+e.toString()),n.setAttribute("style","fill:"+l),r.setAttributeNS(this._xlink,"xlink:href","#"+t),r.setAttributeNS(null,"id",t+"-"+h.toString()+"-"+e.toString()),r.setAttributeNS(null,"x",(s.x-5).toString()),r.setAttributeNS(null,"y",(s.y-5).toString()),r.setAttributeNS(null,"width","10"),r.setAttributeNS(null,"height","10"),this._scaleMarker(r,a,s)}_scaleMarker(t,i,s){let h=1-i,e={};e.x=h*s.x,e.y=h*s.y;let a="translate("+e.x.toString()+","+e.y.toString()+") scale("+i+")";t.setAttributeNS(null,"transform",a)}_highlightMarker(t,i){let s=t.getAttributeNS(null,"transform"),h={};h.x=parseFloat(t.getAttributeNS(null,"x"))+5,h.y=parseFloat(t.getAttributeNS(null,"y"))+5;let e=1;null!=s&&(e=parseFloat(s.split("scale(")[1].slice(0,-1))),this._scaleMarker(t,i?e/1.5:1.5*e,h)}_waitRemoveLabel(){this._mouseStart&&setTimeout(()=>{this._removeLabel(this.svg),this._mouseStart=!1,this._showTarget=0},1200)}_removeLabel(t){let i=t.querySelectorAll("#linechart-label-value");if(i.length>0)for(let s=0;s<i.length;s++)L(i[s]),t.removeChild(i[s]);if(this._selMarker.length>0)for(let s=0;s<this._selMarker.length;s++){let t=this.svg.querySelector(this._selMarker[s]);this._highlightMarker(t,!0)}this._selMarker=[]}_handleTouchDown(t){t.preventDefault(),this._mouseStart=!0,this._handleEventTarget(t,{x:t.touches[0].pageX,y:t.touches[0].pageY})}_handleMouseDown(t){t.preventDefault(),this._mouseStart=!0,this._handleEventTarget(t,{x:t.pageX,y:t.pageY})}_handleTouchUp(t){t.preventDefault(),this._waitRemoveLabel()}_handleMouseUp(t){t.preventDefault(),this._waitRemoveLabel()}_handleEventTarget(t,i){this._showTarget=t.target,i.x-=this.borderBB.left,i.y-=this.borderBB.top,this._removeLabel(this.svg);let s=S(this._Points,i),h=this.innerData[s.line].dataPoints[s.index],e="#marker-"+this.innerData[s.line].markerType+"-";e+=s.line.toString()+"-"+s.index.toString(),this._selMarker.push(e);let a,l=this.svg.querySelector(e);this._highlightMarker(l,!1),"number"==typeof h.x&&(a=h.x.toString()),"string"==typeof h.x&&(a=h.x),a=a+" : "+h.y.toString();let r=1.2*parseFloat(this._prop.ftLbSize.split("px")[0]),n={fontFamily:this._prop.ftFamily,fontSize:r.toString()+"px",fill:this._prop.lbColor,anchor:"middle"};_(this.svg,a,s,this.innerData[s.line].color,n)}async _renderChart(){this.container=this._element.querySelector("#div-linechart-container"),this.chart=this._element.querySelector("#div-linechart-chart"),this.svg=this._element.querySelector("#svg-linechart"),this.borderEl=this.svg.querySelector("#svg-border-rect"),this.borderBB=await o(this.borderEl,this.innerDelay),0==this.borderBB.top&&0==this.borderBB.left&&0==this.borderBB.width&&0==this.borderBB.height||(this.container.addEventListener("touchstart",this._handleTouchDown.bind(this),!1),this.container.addEventListener("touchend",this._handleTouchUp.bind(this),!1),this.container.addEventListener("mousedown",this._handleMouseDown.bind(this),!1),this.container.addEventListener("mouseup",this._handleMouseUp.bind(this),!1),this.innerBorder&&this.borderEl.classList.remove("hidden"),this._createMarkers(),null!=this.innerTitle&&this.innerTitle.length>0&&this._createTitle(),this._createAxis(),this._createLine())}render(){if(200===this.status.status){let t=`0 0 ${this.w_width.toString()} ${this.w_height.toString()}`;return i(s,null,i("div",{id:"div-linechart-container"},i("div",{id:"div-linechart-chart"},i("svg",{id:"svg-linechart",width:this.w_width.toString(),height:this.w_height.toString(),viewBox:t},i("rect",{id:"svg-border-rect",class:"border-rect hidden",x:"0",y:"0",width:this.w_width.toString(),height:this.w_height.toString(),stroke:this._prop.bdColor,"stroke-width":this._prop.bdWidth,fill:"none","fill-opacity":"0"})))))}return i("div",{id:"div-error-message"},i("p",{id:"p-error-message"},this.status.message))}get el(){return h(this)}static get watchers(){return{ctitle:["parseTitleProp"],subtitle:["parseSubTitleProp"],xtitle:["parseXTitleProp"],ytitle:["parseYTitleProp"],data:["parseDataProp"],cstyle:["parseStyleProp"],animation:["parseAnimationProp"],cborder:["parseBorderProp"],delay:["parseDelayProp"]}}static get style(){return":host{--height:200px;--width:300px;--top:30px;--left:10px;--backgroundcolor:#fff}#div-linechart-container{position:relative;left:0;top:0;width:100%;height:calc(var(--height) + var(--top));z-index:1}#div-linechart-chart{position:relative;left:var(--left);top:var(--top);width:var(--width);height:var(--height);background-color:var(--backgroundcolor);z-index:1}.hidden{visibility:hidden}#div-error-message{background-color:#f89393;position:absolute;top:0;left:0;margin:0 auto;width:100%;height:60px;line-height:60px;text-align:left;padding-left:10px;font-size:15px;font-family:Verdana}#p-error-message{display:inline-block;vertical-align:middle;line-height:normal}"}};export{T as jeep_linechart};