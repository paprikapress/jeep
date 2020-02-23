var __awaiter=this&&this.__awaiter||function(t,e,i,r){function s(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function a(t){try{n(r.next(t))}catch(e){o(e)}}function h(t){try{n(r["throw"](t))}catch(e){o(e)}}function n(t){t.done?i(t.value):s(t.value).then(a,h)}n((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,s,o,a;return a={next:h(0),throw:h(1),return:h(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function h(t){return function(e){return n([t,e])}}function n(a){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,s&&(o=a[0]&2?s["return"]:a[0]?s["throw"]||((o=s["return"])&&o.call(s),0):s.next)&&!(o=o.call(s,a[1])).done)return o;if(s=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;s=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(a[0]===6&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}if(o[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(h){a=[6,h];s=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;for(var r=Array(t),s=0,e=0;e<i;e++)for(var o=arguments[e],a=0,h=o.length;a<h;a++,s++)r[s]=o[a];return r};System.register(["./p-3e01601f.system.js","./p-cba8fef5.system.js","./p-893514ea.system.js"],(function(t){"use strict";var e,i,r,s,o,a,h,n,l,p,u,c,_,d,f,g,y,v,w,b,S,x,m,P,k,C,T,z,L,V;return{setters:[function(t){e=t.r;i=t.h;r=t.g;s=t.H},function(t){o=t.w;a=t.c;h=t.k;n=t.a;l=t.u;p=t.t;u=t.b;c=t.d;_=t.e;d=t.m;f=t.l;g=t.r;y=t.n;v=t.o;w=t.h;b=t.p;S=t.j;x=t.q;m=t.s;P=t.v},function(t){k=t.d;C=t.a;T=t.b;z=t.c;L=t.e;V=t.g}],execute:function(){var X=t("jeep_linechart",function(){function t(t){e(this,t);this.toggle=false;this._update=false}t.prototype.parseTitleProp=function(t){this.innerTitle=t?t:null};t.prototype.parseSubTitleProp=function(t){this.innerSubTitle=t?t:null};t.prototype.parseXTitleProp=function(t){this.innerXTitle=t?t:null};t.prototype.parseYTitleProp=function(t){this.innerYTitle=t?t:null};t.prototype.parseDataProp=function(t){var e=t?t:null;var i=[];var r={status:200};if(e!=null){var s=JSON.parse(e);var o=[];if(s instanceof Array){o=s}else{o.push(s)}this._axisType=[];this._legendNames=[];this._legendColors=[];this._legendThicknesses=[];if(o.length>=1&&Object.keys(o[0]).length>=1){for(var a=0;a<o.length;a++){if(o[a].dataPoints){var h={};h.color=o[a].color?o[a].color:"#000000";h.name=o[a].name?o[a].name:null;h.lineThickness=o[a].lineThickness?o[a].lineThickness:1;h.markerType=o[a].markerType?o[a].markerType:"none";h.markerColor=o[a].markerColor?o[a].markerColor:h.color;h.markerSize=o[a].markerSize?o[a].markerSize:10;h.dataPoints=o[a].dataPoints;this._legendThicknesses.push(h.lineThickness);this._legendColors.push(h.color);if(h.name!==null)this._legendNames.push(h.name);if(!h.dataPoints[0].x){i=null;r={status:400,message:"Error: no x data in dataset: "+a+" of data property"}}else if(!h.dataPoints[0].y){i=null;r={status:400,message:"Error: no y data in dataset: "+a+" of data property"}}else{if(a===0){if(h.dataPoints[0].x)this._axisType.push("x");if(h.dataPoints[0].y)this._axisType.push("y")}i.push(h)}}else{i=null;r={status:400,message:"Error: no dataPoints object in dataset: "+a+" of data property"}}}if(r.status===200&&i&&i.length>1&&i.length!==this._legendNames.length){i=null;r={status:400,message:"Error: name attribute missing in some datasets"}}}else{i=null;r={status:400,message:"Error: no data provided"}}}else{i=null;r={status:400,message:"Error: no data property"}}this.status=r;this.innerData=this.status.status===200?__spreadArrays(i):null};t.prototype.parseStyleProp=function(t){this.innerStyle=t?t:null};t.prototype.parseAnimationProp=function(t){this.innerAnimation=t?t:false};t.prototype.parseBorderProp=function(t){this.innerBorder=t?t:false};t.prototype.parseDelayProp=function(t){this.innerDelay=t?parseFloat(t):100};t.prototype.init=function(){return Promise.resolve(this._init())};t.prototype.getStatus=function(){return Promise.resolve(this.status)};t.prototype.renderChart=function(){return Promise.resolve(this._renderChart())};t.prototype.getWindowSize=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,o(this.window)]}))}))};t.prototype.getCssProperties=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._prop]}))}))};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.window=window;this._prop={};return[4,this._init()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){this._element=this.el.shadowRoot;if(this.status.status===200){this._renderChart()}};t.prototype._init=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,i;return __generator(this,(function(r){switch(r.label){case 0:this.document=this.window.document;this.root=this.document.documentElement;this.window.addEventListener("resize",k(this,this._windowResize,100,false),false);this._selMarker=[];this._axisType=[];this._legendRect={};this._update=false;this._dataColor=false;this._yaxis={};this._xaxis={};this._legendRect={};t=[];t=this._axisType.filter((function(t){return t==="label"}));this._label=false;if(t[0]==="label"){this._label=true}this._showTarget=0;this._mouseStart=false;this._xmlns="http://www.w3.org/2000/svg";this._xlink="http://www.w3.org/1999/xlink";this.parseTitleProp(this.ctitle?this.ctitle:null);this.parseSubTitleProp(this.subtitle?this.subtitle:null);this.parseXTitleProp(this.xtitle?this.xtitle:null);this.parseYTitleProp(this.ytitle?this.ytitle:null);this.parseAnimationProp(this.animation?this.animation:false);this.parseBorderProp(this.cborder?this.cborder:false);this.parseStyleProp(this.cstyle?this.cstyle:null);this.parseDelayProp(this.delay?this.delay:"100");this._prop.topPlot=this._prop.topPlot?this._prop.topPlot:this._setPropertyValue("--chart-top",this.window.getComputedStyle(this.root).getPropertyValue("--chart-top"));this._prop.leftPlot=this._prop.leftPlot?this._prop.leftPlot:this._setPropertyValue("--chart-left",this.window.getComputedStyle(this.root).getPropertyValue("--chart-left"));this._prop.widthPlot=this._prop.widthPlot?this._prop.widthPlot:this._setPropertyValue("--chart-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-width"));this._prop.heightPlot=this._prop.heightPlot?this._prop.heightPlot:this._setPropertyValue("--chart-height",this.window.getComputedStyle(this.root).getPropertyValue("--chart-height"));this._prop.bgColor=this._prop.bgColor?this._prop.bgColor:this._setPropertyValue("--chart-background-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-background-color"));this._prop.tiColor=this._setPropertyValue("--chart-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-color"));this._prop.stColor=this._setPropertyValue("--chart-subtitle-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-color"));this._prop.ftFamily=this._setPropertyValue("--chart-font-family",this.window.getComputedStyle(this.root).getPropertyValue("--chart-font-family"));this._prop.ftTiSize=this._setPropertyValue("--chart-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-title-font-size"));this._prop.ftSTSize=this._setPropertyValue("--chart-subtitle-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-font-size"));this._prop.axColor=this._setPropertyValue("--chart-axis-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-color"));this._prop.lnColor=this._setPropertyValue("--chart-line-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-line-color"));this._prop.atColor=this._setPropertyValue("--chart-axis-title-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-color"));this._prop.lbColor=this._setPropertyValue("--chart-label-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-color"));this._prop.ftLbSize=this._setPropertyValue("--chart-label-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-label-font-size"));this._prop.ftATSize=this._setPropertyValue("--chart-axis-title-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-title-font-size"));this._prop.ftSTSize=this._setPropertyValue("--chart-subtitle-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-subtitle-font-size"));this._prop.tickX=this._setPropertyValue("--chart-tick-x-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-x-length"));this._prop.tickY=this._setPropertyValue("--chart-tick-y-length",this.window.getComputedStyle(this.root).getPropertyValue("--chart-tick-y-length"));this._prop.gridX=this._setPropertyValue("--chart-grid-x",this.window.getComputedStyle(this.root).getPropertyValue("--chart-grid-x"));this._prop.xInterval=this._setPropertyValue("--chart-axis-x-interval",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-x-interval"));this._prop.yInterval=this._setPropertyValue("--chart-axis-y-interval",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-y-interval"));this._prop.xZero=this._setPropertyValue("--chart-axis-x-zero",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-x-zero"));this._prop.yZero=this._setPropertyValue("--chart-axis-y-zero",this.window.getComputedStyle(this.root).getPropertyValue("--chart-axis-y-zero"));this._prop.animDuration=this._setPropertyValue("--chart-animation-duration",this.window.getComputedStyle(this.root).getPropertyValue("--chart-animation-duration"));this._prop.legendTop=this._setPropertyValue("--chart-legend-top",this.window.getComputedStyle(this.root).getPropertyValue("--chart-legend-top"));this._prop.ftLgSize=this._setPropertyValue("--chart-legend-font-size",this.window.getComputedStyle(this.root).getPropertyValue("--chart-legend-font-size"));this._prop.bdColor=this._setPropertyValue("--chart-border-color",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-color"));this._prop.bdWidth=this._setPropertyValue("--chart-border-width",this.window.getComputedStyle(this.root).getPropertyValue("--chart-border-width"));if(!(this.innerStyle!=null))return[3,2];return[4,C(this.innerStyle)];case 1:e=r.sent();if(e!=null){this._prop.leftPlot=e.left?e.left:this._prop.leftPlot;this._prop.topPlot=e.top?e.top:this._prop.topPlot;this._prop.widthPlot=e.width?e.width:this._prop.widthPlot;this._prop.heightPlot=e.height?e.height:this._prop.heightPlot;this._prop.bgColor=e.backgroundcolor?e.backgroundcolor:this._prop.bgColor}r.label=2;case 2:this.parseDataProp(this.data?this.data:null);i=this;return[4,this.getWindowSize()];case 3:i._wSize=r.sent();this._setContainerSize();return[2]}}))}))};t.prototype._setContainerSize=function(){this.w_width=T(this._prop.widthPlot,this._wSize.width,"0");this.w_height=T(this._prop.heightPlot,this._wSize.height,"0");this.el.style.setProperty("--top",this._prop.topPlot);this.el.style.setProperty("--left",this._prop.leftPlot);this.el.style.setProperty("--width",this.w_width+"px");this.el.style.setProperty("--height",this.w_height+"px");this.el.style.setProperty("--backgroundcolor",""+this._prop.bgColor);this._titleRect=null;this._chartRect={top:0,left:0,width:this.w_width,height:this.w_height}};t.prototype._setPropertyValue=function(t,e){if(t==="--chart-background-color"){return e?e:"#ffffff"}else if(t.slice(-5)==="color"){return e?e:"#000000"}else if(t.slice(-12)==="border-width"){return e?e:"1"}else if(t.slice(-9)==="font-size"){return e?e:"10px"}else if(t.slice(-11)==="font-family"){return e?e:"Verdana"}else if(t.slice(-6).substring(0,4)==="grid"){return e?e:"false"}else if(t.slice(-4)==="zero"){return e?e:"true"}else if(t.slice(-10)==="legend-top"){return e?e:"false"}else if(t.slice(-8)==="duration"){return e?e:"1s"}else{return e?e:"0"}};t.prototype._windowResize=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,this.getWindowSize()];case 1:t._wSize=e.sent();this._setContainerSize();this._update=true;if(this.status&&this.status.status===200){this._renderChart()}return[2]}}))}))};t.prototype._createMarkers=function(){var t=a("defs",this.svg);var e={};e.id="marker-circle";e.viewbox="0 0 10 10";var i="M0,5 A5,5 0 1,1 10,5 A5,5 0 0,1 0,5 Z";h(t,i,e);e.id="marker-square";i="M0,0 L10,0 L10,10 L0,10 Z";h(t,i,e);e.id="marker-triangle";i="M5,0 L10,10 L0,10 Z";h(t,i,e);e.id="marker-cross";i="M0,2 L2,0 L5,3 L8,0 L10,2 L7,5 L10,8 L8,10 L5,7 L2,10 L0,8 L3,5 Z";h(t,i,e);e.id="marker-plus";i="M0,4 L4,4 L4,0 L6,0 L6,4 L10,4 L10,6 L6,6 L6,10 L4,10 L4,6 L0,6 Z";h(t,i,e)};t.prototype._createTitle=function(){if(this.innerTitle!=null){var t=void 0;var e=void 0;if(!this._update){t=a("g",this.svg);t.setAttributeNS(null,"id","linechart-title")}else{t=this.svg.querySelector("#linechart-title");t.removeAttributeNS(null,"transform")}var i={id:"linechart-title-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftTiSize,fill:this._prop.tiColor,anchor:"middle"};var r={x:Math.round(this.w_width/2),y:z(this._prop.ftTiSize)+10};if(!this._update){e=n(t,this.innerTitle,r,i)}else{e=l(this.svg,i.id,i.anchor,r)}if(this.innerSubTitle!=null){var s=e.getBoundingClientRect();i.id="linechart-subtitle-text";i.fontSize=this._prop.ftSTSize;i.fill=this._prop.stColor;var o=Math.ceil(s.bottom-this.borderBB.top)+5;r={x:Math.round(this.w_width/2),y:o+10};if(!this._update){n(t,this.innerSubTitle,r,i)}else{l(this.svg,i.id,i.anchor,r)}}var h=t.getBoundingClientRect();var u=p(h.width,this.w_width,10);var c="translate("+Math.round(10-h.left*u)+",0) "+"scale("+u+","+u+")";if(u!=1)t.setAttributeNS(null,"transform",c);var _=t.getBoundingClientRect();this._titleRect={left:_.left-this.borderBB.left,top:_.top-this.borderBB.top,width:_.width,height:_.height}}};t.prototype._createAxis=function(){var t=z(this._prop.tickX);var e=z(this._prop.tickY);var i=parseFloat(this._prop.xInterval);var r=parseFloat(this._prop.yInterval);var s;if(!this._update){s=a("g",this.svg);s.setAttributeNS(this._xmlns,"id","linechart-axes")}else{s=this.svg.querySelector("#linechart-axes")}this._initChartRect();if(this.innerData.length>1)this._createLegend();var o=this._createTitleY();var h=this._createTitleX();this._lenY=u(this.innerData,"y",r,L(this._prop.yZero));if(this._label){this._lenX=u(this.innerData,"label",i)}else{this._lenX=u(this.innerData,"x",i,L(this._prop.xZero))}var p=this._labelSize(this._lenY,0);this._x_axy=3+p.width+2+e;this._nXlines=this.innerData[0].dataPoints.length;if(this._lenX.interval&&this._lenX.type==="number"){this._nXlines=Math.abs(Math.floor(this._lenX.length/this._lenX.interval))+1}var d=this._chartRect.width-this._x_axy;this._xInterval=Math.floor(d/this._nXlines);if(this._lenX.interval&&this._lenX.type==="number"){this._xInterval=d/(this._nXlines-1)}var f=this._xInterval;if(this._lenX.interval&&this._lenX.type==="string"){this._nXlines=Math.abs(Math.floor(this.innerData[0].dataPoints.length/this._lenX.interval));f=d/this._nXlines}this._labelRotate=false;var g=this._labelSize(this._lenX,0);if(g.width>f-10){g=this._labelSize(this._lenX,-80);this._labelRotate=true}this._y_axy=10+g.height+3+t;this._yaxis={};this._yaxis.left=this._chartRect.left+this._x_axy;this._yaxis.width=0;this._yaxis.top=this._chartRect.top;this._yaxis.height=this._chartRect.height-this._y_axy;var y={id:"linechart-yaxis",stroke:this._prop.axColor,strokeWidth:"1"};var v={x:this._yaxis.left,y:this._yaxis.top};var w={x:this._yaxis.left+this._yaxis.width,y:this._yaxis.top+this._yaxis.height};if(!this._update){c(s,v,w,y)}else{_(this.svg,y.id,v,w)}if(o!=null){var b="translate(0,0)";o.setAttributeNS(null,"transform",b);var x=o.getBoundingClientRect();var m=-Math.round(x.top-this.borderBB.top+x.height/2-(this._yaxis.top+this._yaxis.height/2));b="translate(0,"+m+")";o.setAttributeNS(null,"transform",b)}var P={id:"linechart-ylabel0",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"end"};var k=Math.floor(parseFloat(this._prop.ftLbSize.split("px")[0])/2)-2;this._nYlines=Math.abs(Math.floor(this._lenY.length/this._lenY.interval))+1;for(var C=0;C<this._nYlines;C++){var T=this._lenY.top-C*Math.abs(this._lenY.interval);y.id="linechart-yLine"+T.toString();y.stroke=this._prop.lnColor;if(C===this._nYlines-1){y.id="linechart-xaxis";y.stroke=this._prop.axColor}P.id="linechart-ylabel"+T.toString();var V=S(this._yaxis,this._lenY,T);var X={x:this._yaxis.left,y:V};var M={x:this._chartRect.left+this._chartRect.width,y:V};if(!this._update){c(s,X,M,y)}else{_(this.svg,y.id,X,M)}if(e>0){var R={x:this._yaxis.left-e,y:V};y.id="linechart-ytick"+T.toString();if(!this._update){c(s,X,R,y)}else{_(this.svg,y.id,X,R)}}var A={x:this._yaxis.left-e-2,y:V+k};if(!this._update){n(s,T.toString(),A,P)}else{l(this.svg,P.id,P.anchor,A)}}var B=this.svg.querySelector("#linechart-xaxis");var D=parseFloat(B.getAttribute("y1"));var N=Math.floor(this._xInterval/2);if(this._lenX.interval&&this._lenX.type==="number")N=0;P={id:"linechart-xlabel",stroke:this._prop.lbColor,strokeWidth:"1",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,anchor:"middle"};k=Math.floor(z(this._prop.ftLbSize));for(var C=0;C<this._nXlines;C++){var T=this._lenX.bottom+C*Math.abs(this._lenX.interval);var F={x:this._yaxis.left+N,y:D};if(L(this._prop.gridX)){y.id="linechart-xLine"+C.toString();if(this._lenX.interval&&this._lenX.type==="number"){y.id="linechart-xLine"+T.toString()}if(this._lenX.interval&&this._lenX.type==="string"){y.id="linechart-xLine"+(C*this._lenX.interval).toString()}y.stroke=this._prop.lnColor;var Y={x:this._yaxis.left+N,y:this._yaxis.top};if(!this._lenX.interval||C>=1||this._lenX.type!="number"){if(!this._update){c(s,F,Y,y)}else{_(this.svg,y.id,F,Y)}}}if(t>0){var R={x:this._yaxis.left+N,y:D+t};y.id="linechart-xtick"+C.toString();if(this._lenX.interval&&this._lenX.type==="number"){y.id="linechart-xtick"+T.toString()}if(this._lenX.interval&&this._lenX.type==="string"){y.id="linechart-xtick"+(C*this._lenX.interval).toString()}if(!this._update){c(s,F,R,y)}else{_(this.svg,y.id,F,R)}}var E=void 0;if(this._lenX.type==="string"){var q=typeof this._lenX.interval!="undefined"?this._lenX.interval:1;E=this.innerData[0].dataPoints[C*q].x}else{E=T.toString()}P.id="linechart-xlabel"+E;var j=void 0;var A=void 0;var I=null;if(this._labelRotate){P.anchor="end";A={x:this._yaxis.left+N,y:D+t+3};I="rotate(-80,"+A.x+","+A.y+")"}else{P.anchor="middle";A={x:this._yaxis.left+N,y:D+t+k};I="rotate(0,"+A.x+","+A.y+")"}if(!this._update){j=n(s,E,A,P)}else{j=l(this.svg,P.id,P.anchor,A)}if(I!=null)j.setAttributeNS(null,"transform",I);if(this._lenX.interval&&this._lenX.type==="string"){N+=this._xInterval*this._lenX.interval}else{N+=this._xInterval}}if(h!=null){var b="translate(0,0)";h.setAttributeNS(null,"transform",b);var W=B.getBoundingClientRect();var x=h.getBoundingClientRect();var m=-Math.round(x.left+x.width/2-(W.left+W.width/2));if(Math.abs(m)>0){var Z="translate("+m+",0)";h.setAttributeNS(null,"transform",Z)}}};t.prototype._labelSize=function(t,e){var i={fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLbSize,fill:this._prop.lbColor,anchor:"start"};var r;if(t.label){r=t.label}else{r=t.top.toString();var s=t.bottom.toString();if(s.length>r.length)r=s}var o=0;var a=0;var h={x:a,y:o};var l=n(this.svg,r,h,i);if(e!=0){var p="rotate("+e+",0,0)";l.setAttributeNS(null,"transform",p)}var u=l.getBoundingClientRect();this.svg.removeChild(l);return{width:Math.ceil(u.width),height:Math.ceil(u.height)}};t.prototype._initChartRect=function(){this._chartRect.top=20;if(this._titleRect!=null)this._chartRect.top+=Math.round(this._titleRect.height);this._chartRect.left=0;this._chartRect.width=this.w_width-this._chartRect.left-20;this._chartRect.height=this.w_height-this._chartRect.top};t.prototype._createLegend=function(){var t;var e={};var i={fontFamily:this._prop.ftFamily,fontSize:this._prop.ftLgSize,anchor:"start"};var r=d(this.svg,this.w_width,this._legendNames,this._legendColors,this._legendThicknesses,i);e.left=r.bBox.left;e.width=r.bBox.width;if(L(this._prop.legendTop)){e.top=this._chartRect.top+15;this._chartRect.top+=Math.ceil(r.bBox.height)+15}else{e.top=Math.floor(this._chartRect.top+this._chartRect.height-r.bBox.height)}e.height=r.bBox.height;this._chartRect.height-=Math.floor(r.bBox.height)+10;if(!this._update){t=a("g",this.svg);t.setAttributeNS(null,"id","linechart-legend");f(t,this._legendNames,this._legendColors,this._legendThicknesses,r,this.w_width,e.top,i)}else{t=this.svg.querySelector("#linechart-legend");g(t);f(t,this._legendNames,this._legendColors,this._legendThicknesses,r,this.w_width,e.top,i)}};t.prototype._createTitleY=function(){var t;var e={id:"linechart-ytitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(this.innerYTitle!=null){var i=void 0;if(!this._update){t=a("g",this.svg);t.setAttributeNS(null,"id","linechart-ytitle")}else{t=this.svg.querySelector("#linechart-ytitle")}var r=this._chartRect.top+Math.round(this._chartRect.height/2);var s=5+parseFloat(this._prop.ftATSize.split("px")[0]);var o={x:s,y:r};if(!this._update){i=n(t,this.innerYTitle,o,e)}else{i=l(this.svg,e.id,e.anchor,o)}var h="rotate(-90 "+o.x.toString()+" "+o.y.toString()+")";i.setAttributeNS(null,"transform",h);var p=t.getBoundingClientRect();this._chartRect.left=Math.ceil(p.right-this.borderBB.left);this._chartRect.width-=Math.ceil(p.right-this.borderBB.left);return t}else{return null}};t.prototype._createTitleX=function(){var t={id:"linechart-xtitle-text",fontFamily:this._prop.ftFamily,fontSize:this._prop.ftATSize,fill:this._prop.atColor,anchor:"middle"};if(this.innerXTitle!=null){var e=void 0;if(!this._update){e=a("g",this.svg);e.setAttributeNS(null,"id","linechart-xtitle")}else{e=this.svg.querySelector("#linechart-xtitle")}var i=this._chartRect.top+this._chartRect.height-15;var r=Math.round(this._chartRect.left+this._chartRect.width/2);var s={x:r,y:i};if(!this._update){n(e,this.innerXTitle,s,t)}else{l(this.svg,t.id,t.anchor,s)}var o=e.getBoundingClientRect();this._chartRect.height-=Math.floor(o.height);return e}else{return null}};t.prototype._createLine=function(){var t;this._Points=[];if(!this._update){t=a("g",this.svg);t.setAttributeNS(null,"id","linechart-data")}else{t=this.svg.querySelector("#linechart-data")}for(var e=0;e<this.innerData.length;e++){var i=[];var r={};r.stroke=this.innerData[e].color;r.strokeWidth=this.innerData[e].lineThickness.toString();r.fill="none";r.id="linechart-data-"+e.toString();var s=void 0;var o=void 0;this._xaxis.left=this._yaxis.left;this._xaxis.width=this._chartRect.left+this._chartRect.width-this._xaxis.left;var h=Math.floor(this._xInterval/2);for(var n=0;n<this.innerData[e].dataPoints.length;n++){r.stroke=this.innerData[e].dataPoints[n].color?this.innerData[e].dataPoints[n].color:this.innerData[e].color;var l={};l.y=S(this._yaxis,this._lenY,this.innerData[e].dataPoints[n].y);if(this._lenX.interval&&this._lenX.type==="number"){l.x=x(this._xaxis,this._lenX,this.innerData[e].dataPoints[n].x)}else{l.x=this._xaxis.left+h}i.push(l);var p=this.innerData[e].markerSize/10;this._placeMarker("marker-"+this.innerData[e].markerType,t,l,e,n,p,this.innerData[e].markerColor);if(n===0){s=l.x.toString()+","+l.y.toString()}else{s+=" "+l.x.toString()+","+l.y.toString()}h+=this._xInterval}r.strokeLinejoin="round";r.strokeLinecap="round";r.strokeMiterlimit="10";var u=m(i);if(!this._update){o=y(t,s,r)}else{o=v(this.svg,r.id,s)}if(this.innerAnimation){o.setAttributeNS(null,"stroke-dasharray",u.toString()+","+u.toString());o.setAttributeNS(null,"stroke-dashoffset",u.toString());this._setAnimation(o,u.toString(),this._prop.animDuration)}this._Points.push(i)}};t.prototype._setAnimation=function(t,e,i){var r={};r.attributeName="stroke-dashoffset";r.from=e;r.to="0";r.dur=i;r.fill="freeze";w(t,r)};t.prototype._placeMarker=function(t,e,i,r,s,o,h){var n;var l;if(!this._update){l=a("g",e);n=a("use",l)}else{l=e.querySelector("#"+t+"-g-"+r.toString()+"-"+s.toString());n=l.querySelector("#"+t+"-"+r.toString()+"-"+s.toString())}l.setAttributeNS(null,"id",t+"-g-"+r.toString()+"-"+s.toString());l.setAttribute("style","fill:"+h);n.setAttributeNS(this._xlink,"xlink:href","#"+t);n.setAttributeNS(null,"id",t+"-"+r.toString()+"-"+s.toString());n.setAttributeNS(null,"x",(i.x-5).toString());n.setAttributeNS(null,"y",(i.y-5).toString());n.setAttributeNS(null,"width","10");n.setAttributeNS(null,"height","10");this._scaleMarker(n,o,i)};t.prototype._scaleMarker=function(t,e,i){var r=1-e;var s={};s.x=r*i.x;s.y=r*i.y;var o="translate("+s.x.toString()+","+s.y.toString()+") scale("+e+")";t.setAttributeNS(null,"transform",o)};t.prototype._highlightMarker=function(t,e){var i=t.getAttributeNS(null,"transform");var r={};r.x=parseFloat(t.getAttributeNS(null,"x"))+5;r.y=parseFloat(t.getAttributeNS(null,"y"))+5;var s=1;if(i!=null){s=parseFloat(i.split("scale(")[1].slice(0,-1))}if(e){this._scaleMarker(t,s/1.5,r)}else{this._scaleMarker(t,s*1.5,r)}};t.prototype._waitRemoveLabel=function(){var t=this;if(this._mouseStart){setTimeout((function(){t._removeLabel(t.svg);t._mouseStart=false;t._showTarget=0}),1200)}};t.prototype._removeLabel=function(t){var e=t.querySelectorAll("#linechart-label-value");if(e.length>0){for(var i=0;i<e.length;i++){g(e[i]);t.removeChild(e[i])}}if(this._selMarker.length>0){for(var i=0;i<this._selMarker.length;i++){var r=this.svg.querySelector(this._selMarker[i]);this._highlightMarker(r,true)}}this._selMarker=[]};t.prototype._handleTouchDown=function(t){t.preventDefault();this._mouseStart=true;var e={x:t.touches[0].pageX,y:t.touches[0].pageY};this._handleEventTarget(t,e)};t.prototype._handleMouseDown=function(t){t.preventDefault();this._mouseStart=true;var e={x:t.pageX,y:t.pageY};this._handleEventTarget(t,e)};t.prototype._handleTouchUp=function(t){t.preventDefault();this._waitRemoveLabel()};t.prototype._handleMouseUp=function(t){t.preventDefault();this._waitRemoveLabel()};t.prototype._handleEventTarget=function(t,e){this._showTarget=t.target;e.x-=this.borderBB.left;e.y-=this.borderBB.top;this._removeLabel(this.svg);var i=P(this._Points,e);var r=this.innerData[i.line].dataPoints[i.index];var s="#marker-"+this.innerData[i.line].markerType+"-";s+=i.line.toString()+"-"+i.index.toString();this._selMarker.push(s);var o=this.svg.querySelector(s);this._highlightMarker(o,false);var a;if(typeof r.x==="number")a=r.x.toString();if(typeof r.x==="string")a=r.x;a=a+" : "+r.y.toString();var h=1.2*parseFloat(this._prop.ftLbSize.split("px")[0]);var n={fontFamily:this._prop.ftFamily,fontSize:h.toString()+"px",fill:this._prop.lbColor,anchor:"middle"};var l=this.innerData[i.line].color;b(this.svg,a,i,l,n)};t.prototype._renderChart=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:this.container=this._element.querySelector("#div-linechart-container");this.chart=this._element.querySelector("#div-linechart-chart");this.svg=this._element.querySelector("#svg-linechart");this.borderEl=this.svg.querySelector("#svg-border-rect");t=this;return[4,V(this.borderEl,this.innerDelay)];case 1:t.borderBB=e.sent();if(this.borderBB.top!=0||this.borderBB.left!=0||this.borderBB.width!=0||this.borderBB.height!=0){this.container.addEventListener("touchstart",this._handleTouchDown.bind(this),false);this.container.addEventListener("touchend",this._handleTouchUp.bind(this),false);this.container.addEventListener("mousedown",this._handleMouseDown.bind(this),false);this.container.addEventListener("mouseup",this._handleMouseUp.bind(this),false);if(this.innerBorder){this.borderEl.classList.remove("hidden")}this._createMarkers();if(this.innerTitle!=null&&this.innerTitle.length>0)this._createTitle();this._createAxis();this._createLine()}return[2]}}))}))};t.prototype.render=function(){var t=[];if(this.status.status===200){var e="0 0 "+this.w_width.toString()+" "+this.w_height.toString();t=__spreadArrays(t,[i("div",{id:"div-linechart-container"},i("div",{id:"div-linechart-chart"},i("svg",{id:"svg-linechart",width:this.w_width.toString(),height:this.w_height.toString(),viewBox:e},i("rect",{id:"svg-border-rect",class:"border-rect hidden",x:"0",y:"0",width:this.w_width.toString(),height:this.w_height.toString(),stroke:this._prop.bdColor,"stroke-width":this._prop.bdWidth,fill:"none","fill-opacity":"0"}))))])}else{t=__spreadArrays(t,[i("div",{id:"div-error-message"},i("p",{id:"p-error-message"},this.status.message))])}return i(s,null,t)};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{ctitle:["parseTitleProp"],subtitle:["parseSubTitleProp"],xtitle:["parseXTitleProp"],ytitle:["parseYTitleProp"],data:["parseDataProp"],cstyle:["parseStyleProp"],animation:["parseAnimationProp"],cborder:["parseBorderProp"],delay:["parseDelayProp"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--height:200px;--width:300px;--top:30px;--left:10px;--backgroundcolor:#fff}#div-linechart-container{position:relative;left:0;top:0;width:100%;height:calc(var(--height) + var(--top));z-index:1}#div-linechart-chart{position:relative;left:var(--left);top:var(--top);width:var(--width);height:var(--height);background-color:var(--backgroundcolor);z-index:1}.hidden{visibility:hidden}#div-error-message{background-color:#f89393;position:absolute;top:0;left:0;margin:0 auto;width:100%;height:60px;line-height:60px;text-align:left;padding-left:10px;font-size:15px;font-family:Verdana}#p-error-message{display:inline-block;vertical-align:middle;line-height:normal}"},enumerable:true,configurable:true});return t}())}}}));