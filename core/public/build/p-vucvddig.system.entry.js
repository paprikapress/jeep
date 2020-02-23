var __awaiter=this&&this.__awaiter||function(t,i,e,s){function n(t){return t instanceof e?t:new e((function(i){i(t)}))}return new(e||(e=Promise))((function(e,o){function r(t){try{h(s.next(t))}catch(i){o(i)}}function a(t){try{h(s["throw"](t))}catch(i){o(i)}}function h(t){t.done?e(t.value):n(t.value).then(r,a)}h((s=s.apply(t,i||[])).next())}))};var __generator=this&&this.__generator||function(t,i){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},s,n,o,r;return r={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function a(t){return function(i){return h([t,i])}}function h(r){if(s)throw new TypeError("Generator is already executing.");while(e)try{if(s=1,n&&(o=r[0]&2?n["return"]:r[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,r[1])).done)return o;if(n=0,o)r=[r[0]&2,o.value];switch(r[0]){case 0:case 1:o=r;break;case 4:e.label++;return{value:r[1],done:false};case 5:e.label++;n=r[1];r=[0];continue;case 7:r=e.ops.pop();e.trys.pop();continue;default:if(!(o=e.trys,o=o.length>0&&o[o.length-1])&&(r[0]===6||r[0]===2)){e=0;continue}if(r[0]===3&&(!o||r[1]>o[0]&&r[1]<o[3])){e.label=r[1];break}if(r[0]===6&&e.label<o[1]){e.label=o[1];o=r;break}if(o&&e.label<o[2]){e.label=o[2];e.ops.push(r);break}if(o[2])e.ops.pop();e.trys.pop();continue}r=i.call(t,e)}catch(a){r=[6,a];n=0}finally{s=o=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,i=0,e=arguments.length;i<e;i++)t+=arguments[i].length;for(var s=Array(t),n=0,i=0;i<e;i++)for(var o=arguments[i],r=0,a=o.length;r<a;r++,n++)s[n]=o[r];return s};System.register(["./p-3e01601f.system.js","./p-893514ea.system.js"],(function(t){"use strict";var i,e,s,n,o,r;return{setters:[function(t){i=t.r;e=t.c;s=t.h;n=t.H;o=t.g},function(t){r=t.c}],execute:function(){var a=t("jeep_flipimages",function(){function t(t){i(this,t);this.type="horizontal";this.fpadding="0";this.defBlocks=false;this._typeArray=["horizontal","vertical"];this._localCSS={};this.dimImgloaded=e(this,"jeepFlipImagesImgLoaded",7)}t.prototype.parseTypeProp=function(t){this.innerType=t&&this._typeArray.indexOf(t)>=0?t:"horizontal"};t.prototype.parseFpaddingProp=function(t){this.innerPadding=t?parseFloat(t):0};t.prototype.handleDimImgloaded=function(t){return __awaiter(this,void 0,void 0,(function(){var i;return __generator(this,(function(e){switch(e.label){case 0:i=t.detail;this._preload(this._imagesUrl,2,this._imagesUrl.length-1);this.imageRatio=i.naturalHeight/i.naturalWidth;this._bbContainer=this._container.getBoundingClientRect();this._imageWidth=this._bbContainer.width-2*this.innerPadding-2*r(this._localCSS.borderWidth)-2*r(this._localCSS.shadowWidth);this._imageHeight=Math.floor(this._imageWidth*this.imageRatio);return[4,this._checkImageWidthHeight()];case 1:e.sent();this._container.removeChild(this._imgDim);this._flipToggle=this._container.querySelector("#flip-toggle");if(this.innerType==="vertical"){this._backImg1=this._flipToggle.querySelector("#image-back-left");this._backImg2=this._flipToggle.querySelector("#image-back-right");this._frontImg1=this._flipToggle.querySelector("#image-front-left");this._frontImg2=this._flipToggle.querySelector("#image-front-right")}else{this._backImg1=this._flipToggle.querySelector("#image-back-top");this._backImg2=this._flipToggle.querySelector("#image-back-bottom");this._frontImg1=this._flipToggle.querySelector("#image-front-top");this._frontImg2=this._flipToggle.querySelector("#image-front-bottom")}this._setCssProperties();this._flipToggle.classList.add("flipvisible");this.defBlocks=true;return[2]}}))}))};t.prototype.init=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this._init()];case 1:return[2,t.sent()]}}))}))};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(i){switch(i.label){case 0:this._window=window;return[4,this._init()];case 1:i.sent();this._window.addEventListener("resize",(function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this._bbContainer=this._container.getBoundingClientRect();this._imageWidth=this._bbContainer.width-2*this.innerPadding-2*r(this._localCSS.borderWidth)-2*r(this._localCSS.shadowWidth);this._imageHeight=Math.floor(this._imageWidth*this.imageRatio);return[4,this._checkImageWidthHeight()];case 1:t.sent();this._setCssProperties();this.defBlocks=true;return[2]}}))}))}),false);return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._element=this.el.shadowRoot;if(this._flipElements!=null){this._getImageDim()}return[2]}))}))};t.prototype._init=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._document=this._window.document;this._root=this._document.documentElement;this.parseTypeProp(this.type?this.type:"horizontal");this.parseFpaddingProp(this.fpadding?this.fpadding:"0");this._getElementList();this._indexFront=0;this._indexBack=this._imagesUrl.length>1?1:0;this.toggle=false;this._flipUp=false;this._flipLeft=false;this._mouseStart=false;this._mouseMove=false;this._flipElements=null;this._first=true;this._localCSS.shadowWidth=window.getComputedStyle(this.el).getPropertyValue("--flipimages-shadow-width");this._localCSS.shadowColor=window.getComputedStyle(this.el).getPropertyValue("--flipimages-shadow-color");this._localCSS.borderWidth=window.getComputedStyle(this.el).getPropertyValue("--flipimages-border-width");this._localCSS.borderColor=window.getComputedStyle(this.el).getPropertyValue("--flipimages-border-color");this.el.style.setProperty("--container-padding",this.innerPadding.toString()+"px");return[2]}))}))};t.prototype._getImageDim=function(){var t=this;this._container=this._element.querySelector(".container");this._imgDim=this._container.querySelector(".image-dim");var i=this._imgDim.querySelector("img");i.onload=function(){return __awaiter(t,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this._images=[];return[4,this._preload(this._imagesUrl,0,1)];case 1:t.sent();this.dimImgloaded.emit(i);return[2]}}))}))}};t.prototype._setCssProperties=function(){this.el.style.setProperty("--image-height",this._imageHeight.toString()+"px");this.el.style.setProperty("--image-width",this._imageWidth.toString()+"px");this.el.style.setProperty("--container-padding",this.innerPadding.toString()+"px")};t.prototype._preload=function(t,i,e){return __awaiter(this,void 0,void 0,(function(){var s=this;return __generator(this,(function(n){return[2,new Promise((function(n){return __awaiter(s,void 0,void 0,(function(){var s,o;return __generator(this,(function(r){switch(r.label){case 0:s=i;r.label=1;case 1:if(!(s<e+1))return[3,6];if(!(t[s].substring(0,4)==="http"))return[3,3];return[4,this._toDataUrl(t[s])];case 2:o=r.sent();this._images=__spreadArrays(this._images,[o]);return[3,4];case 3:this._images=__spreadArrays(this._images,[t[s]]);r.label=4;case 4:if(s===e)n();r.label=5;case 5:s++;return[3,1];case 6:return[2]}}))}))}))]}))}))};t.prototype._toDataUrl=function(t){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(e){return[2,new Promise((function(e){fetch(t,{method:"GET"}).then((function(t){return t.blob()})).then((function(t){var i=new FileReader;i.addEventListener("load",(function(){e(i.result)}),false);i.readAsDataURL(t)})).catch((function(t){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(i){console.log("Error: ",t.message);e();return[2]}))}))}))}))]}))}))};t.prototype._getElementList=function(){this._imagesUrl=[];this._alts=[];for(var t=0;t<this.el.childElementCount;t++){this._imagesUrl.push(this.el.children[t].getAttribute("src"));this._alts.push(this.el.children[t].getAttribute("alt"))}this._removeChilds(this.el)};t.prototype._removeChilds=function(t){while(t.firstChild){t.removeChild(t.firstChild)}};t.prototype._checkImageWidthHeight=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(i){t=Math.floor(this._bbContainer.height-2*this.innerPadding-2*r(this._localCSS.borderWidth)-2*r(this._localCSS.shadowWidth));if(this._imageHeight>t){this._imageHeight=t;this._imageWidth=Math.floor(this._imageHeight/this.imageRatio)}return[2]}))}))};t.prototype._handleMoveEventTarget=function(){if(this.innerType==="horizontal"){if(this._stPoint.y<this._bbContainer.height/2){this._top=true;if(this._mvPoint.y<this._stPoint.y){this._flipUp=true}else{this._flipUp=false}}else{this._top=false;if(this._mvPoint.y<this._stPoint.y){this._flipUp=true}else{this._flipUp=false}}}else if(this.innerType==="vertical"){if(this._stPoint.x<this._bbContainer.width/2){this._left=true;if(this._mvPoint.x<this._stPoint.x){this._flipLeft=true}else{this._flipLeft=false}}else{this._left=false;if(this._mvPoint.x<this._stPoint.x){this._flipLeft=true}else{this._flipLeft=false}}}};t.prototype._handleEndEventTarget=function(){if(this._flipToggle.classList){if(this.innerType==="horizontal"){this._handleToggle(this._top,this._flipUp)}else if(this.innerType==="vertical"){this._handleToggle(this._left,this._flipLeft)}}};t.prototype._handleToggle=function(t,i){if(!this.toggle){if(t){this._doToggle=true;if(!i){this._indexFront=this._indexBack+1;if(this._indexFront===this._images.length)this._indexFront=0}else{this._indexBack=this._indexFront-1;if(this._indexBack===-1)this._indexBack=this._images.length-1}this._flipToggle.classList.toggle("toggle");this.toggle=!this.toggle}else{this._doToggle=false}}else{if(!t){this._doToggle=true;if(!i){this._indexFront=this._indexBack-1;if(this._indexFront<0)this._indexFront=this._images.length-1}else{this._indexBack=this._indexFront+1;if(this._indexBack===this._images.length)this._indexBack=0}this._flipToggle.classList.toggle("toggle");this.toggle=!this.toggle}else{this._doToggle=false}}};t.prototype._handleMouseDown=function(t){t.preventDefault();this._stPoint={x:t.pageX,y:t.pageY};this._mouseMove=false;this._mouseStart=true};t.prototype._handleMouseMove=function(t){t.preventDefault();if(this._mouseStart){this._mouseMove=true;this._mvPoint={x:t.pageX,y:t.pageY};this._handleMoveEventTarget()}};t.prototype._handleMouseEnd=function(){if(this._mouseMove){this._handleEndEventTarget();this._mouseStart=false;this._mouseMove=false}};t.prototype._handleTouchStart=function(t){t.preventDefault();this._stPoint={x:t.touches[0].pageX,y:t.touches[0].pageY};this._mouseStart=true};t.prototype._handleTouchMove=function(t){t.preventDefault();this._mvPoint={x:t.touches[0].pageX,y:t.touches[0].pageY};this._mouseMove=true;this._handleMoveEventTarget()};t.prototype._handleTouchEnd=function(){if(this._mouseMove){this._handleEndEventTarget();this._mouseStart=false;this._mouseMove=false}};t.prototype.renderFlipImages=function(){if(this._first){this._first=false;this._frontImg1.setAttribute("src",this._images[this._indexFront]);this._frontImg2.setAttribute("src",this._images[this._indexFront]);this._backImg1.setAttribute("src",this._images[this._indexBack]);this._backImg2.setAttribute("src",this._images[this._indexBack]);if(this._alts[this._indexFront]!==null){this._frontImg1.setAttribute("alt",this._alts[this._indexFront]);this._frontImg2.setAttribute("alt",this._alts[this._indexFront])}if(this._alts[this._indexBack]!==null){this._backImg1.setAttribute("alt",this._alts[this._indexBack]);this._backImg2.setAttribute("alt",this._alts[this._indexBack])}}else{if(this._doToggle){if(!this.toggle){this._frontImg1.setAttribute("src",this._images[this._indexFront]);this._frontImg2.setAttribute("src",this._images[this._indexFront]);if(this._alts[this._indexFront]!==null){this._frontImg1.setAttribute("alt",this._alts[this._indexFront]);this._frontImg2.setAttribute("alt",this._alts[this._indexFront])}}else{this._backImg1.setAttribute("src",this._images[this._indexBack]);this._backImg2.setAttribute("src",this._images[this._indexBack]);if(this._alts[this._indexBack]!==null){this._backImg1.setAttribute("alt",this._alts[this._indexBack]);this._backImg2.setAttribute("alt",this._alts[this._indexBack])}}}}};t.prototype.render=function(){if(this._flipElements===null){if(this.innerType=="horizontal"){this._flipElements=[s("div",{class:"container"},s("div",{class:"image-dim"},s("img",{src:this._imagesUrl[0],alt:this._alts[0]})),s("div",{class:"flip-container horizontal",id:"flip-toggle",onMouseDown:this._handleMouseDown.bind(this),onMouseMove:this._handleMouseMove.bind(this),onMouseUp:this._handleMouseEnd.bind(this),onTouchStart:this._handleTouchStart.bind(this),onTouchMove:this._handleTouchMove.bind(this),onTouchEnd:this._handleTouchEnd.bind(this)},s("div",{class:"back-top",id:"back-top"},s("div",{class:"image-back-top"},s("img",{id:"image-back-top"}))),s("div",{class:"flipper",id:"flipper"},s("div",{class:"front-top",id:"front-top"},s("div",{class:"image-front-top"},s("img",{id:"image-front-top"}))),s("div",{class:"back-bottom",id:"back-bottom"},s("div",{class:"image-back-bottom"},s("img",{id:"image-back-bottom"})))),s("div",{class:"front-bottom",id:"front-bottom"},s("div",{class:"image-front-bottom"},s("img",{id:"image-front-bottom"})))))]}else if(this.innerType=="vertical"){this._flipElements=[s("div",{class:"container"},s("div",{class:"image-dim"},s("img",{src:this._imagesUrl[0],alt:this._alts[0]})),s("div",{class:"flip-container vertical",id:"flip-toggle",onMouseDown:this._handleMouseDown.bind(this),onMouseMove:this._handleMouseMove.bind(this),onMouseUp:this._handleMouseEnd.bind(this),onTouchStart:this._handleTouchStart.bind(this),onTouchMove:this._handleTouchMove.bind(this),onTouchEnd:this._handleTouchEnd.bind(this)},s("div",{class:"back-left",id:"back-left"},s("div",{class:"image-back-left"},s("img",{id:"image-back-left"}))),s("div",{class:"flipper",id:"flipper"},s("div",{class:"front-left",id:"front-left"},s("div",{class:"image-front-left"},s("img",{id:"image-front-left"}))),s("div",{class:"back-right",id:"back-right"},s("div",{class:"image-back-right"},s("img",{id:"image-back-right"})))),s("div",{class:"front-right",id:"front-right"},s("div",{class:"image-front-right"},s("img",{id:"image-front-right"})))))]}else{this._flipElements=null}}else{if(this.defBlocks)this.renderFlipImages()}return s(n,null,s("slot",null,this._flipElements))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{type:["parseTypeProp"],fpadding:["parseFpaddingProp"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--flipimages-border-width:10px;--flipimages-border-color:#fff;--flipimages-shadow-width:20px;--flipimages-shadow-color:grey;--image-height:720px;--image-width:1280px;--container-padding:0px}.imghidden{display:none;visibility:hidden}.container{position:absolute;bottom:0;right:0;overflow:hidden;-ms-flex-pack:center;justify-content:center;padding:var(--container-padding)}.container,.image-dim{top:0;left:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.image-dim{position:relative;visibility:hidden;width:100%;height:100%;z-index:10}.image-dim img{max-width:100%;max-height:100%;visibility:hidden;overflow:hidden}.flip-container{width:var(--image-width);height:var(--image-height);margin:0;-webkit-perspective:calc(2 * var(--image-width));perspective:calc(2 * var(--image-width));-webkit-box-shadow:0 0 var(--flipimages-shadow-width) 2px var(--flipimages-shadow-color);box-shadow:0 0 var(--flipimages-shadow-width) 2px var(--flipimages-shadow-color);border-color:var(--flipimages-border-color);border-style:solid;border-width:var(--flipimages-border-width);border-radius:var(--flipimages-border-width);visibility:hidden}.flipvisible{visibility:visible}.toggle.horizontal.flip-container .flipper{transform:rotateX(-180deg);-moz-transform:rotateX(-180deg);-webkit-transform:rotateX(-180deg)}.toggle.horizontal.flip-container .back-top{opacity:1}.toggle.horizontal.flip-container .front-bottom{opacity:0}.toggle.vertical.flip-container .flipper{transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-webkit-transform:rotateY(-180deg)}.toggle.vertical.flip-container .back-left{opacity:1}.toggle.vertical.flip-container .front-right{opacity:0}.flipper{position:absolute;width:100%;height:100%;top:0;left:0;transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;transition-timing-function:linear;-webkit-transition-timing-function:linear;-moz-transition-timing-function:linear;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.back-bottom,.back-top,.front-bottom,.front-top{max-height:calc(1 * var(--image-height) / 2 + 2px);max-width:var(--image-width);overflow:hidden;margin:0}.back-bottom img,.back-top img,.front-bottom img,.front-top img{display:block;width:var(--image-width)}.front-top{top:0;z-index:10}.front-bottom,.front-top{position:absolute;left:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}.front-bottom{bottom:0;z-index:1;opacity:1;transition:opacity .5s;-webkit-transition:opacity .5s;-moz-transition:opacity .5s;transition-timing-function:ease-in;-webkit-transition-timing-function:ease-in;-moz-transition-timing-function:ease-in}.front-top img{margin-bottom:calc(-1 * var(--image-height) / 2 + 2px)}.front-bottom img{margin-top:calc(-1 * var(--image-height) / 2)}.back-top{opacity:0;transition:opacity .5s;-webkit-transition:opacity .5s;-moz-transition:opacity .5s;transition-timing-function:ease-in;-webkit-transition-timing-function:ease-in;-moz-transition-timing-function:ease-in;z-index:-2}.back-bottom,.back-top{position:absolute;top:0;left:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}.back-bottom{z-index:5}.back-top img{margin-bottom:calc(-1 * var(--image-height) / 2 + 2px)}.back-bottom img{margin-top:calc(-1 * var(--image-height) / 2)}.front-top{transform:rotateX(0deg);-moz-transform:rotateX(0deg);-webkit-transform:rotateX(0deg)}.back-bottom{transform:rotateX(180deg);-moz-transform:rotateX(180deg);-webkit-transform:rotateX(180deg)}.back-left,.back-right,.front-left,.front-right{max-height:var(--image-height);max-width:calc(1 * var(--image-width) / 2 + 2px);overflow:hidden;margin:0}.back-left img,.back-right img,.front-left img,.front-right img{display:block;width:var(--image-width)}.front-left{left:0;z-index:10}.front-left,.front-right{position:absolute;top:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}.front-right{left:50%;z-index:1;opacity:1;transition:opacity .5s;-webkit-transition:opacity .5s;-moz-transition:opacity .5s;transition-timing-function:ease-in;-webkit-transition-timing-function:ease-in;-moz-transition-timing-function:ease-in}.front-left img{margin-right:calc(-1 * var(--image-width) / 2 + 2px)}.front-right img{margin-left:calc(-1 * var(--image-width) / 2)}.back-left{opacity:0;transition:opacity .5s;-webkit-transition:opacity .5s;-moz-transition:opacity .5s;transition-timing-function:ease-in;-webkit-transition-timing-function:ease-in;-moz-transition-timing-function:ease-in;z-index:-2}.back-left,.back-right{position:absolute;top:0;left:0;backface-visibility:hidden;-webkit-backface-visibility:hidden}.back-right{z-index:5}.back-left img{margin-right:calc(-1 * var(--image-width) / 2 + 2px)}.back-right img{margin-left:calc(-1 * var(--image-width) / 2)}.front-left{transform:rotateY(0deg);-moz-transform:rotateY(0deg);-webkit-transform:rotateY(0deg)}.back-right{transform:rotateY(180deg);-moz-transform:rotateY(180deg);-webkit-transform:rotateY(180deg)}"},enumerable:true,configurable:true});return t}())}}}));