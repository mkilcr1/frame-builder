(function(){"use strict";var t={504:function(t,o,e){var r=e(144),i=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"left"},[o("div",{staticClass:"edit"},[o("h3",[t._v("边框样式编辑器")]),o("p",[t._v("可以输入各个角的圆弧角度来预览形状,记得带单位(￣︶￣)")]),o("div",{staticClass:"inputBox"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.boxSty.borderTopLeftRadius,expression:"boxSty.borderTopLeftRadius"}],attrs:{type:"range",min:"0",max:"50"},domProps:{value:t.boxSty.borderTopLeftRadius},on:{__r:function(o){return t.$set(t.boxSty,"borderTopLeftRadius",o.target.value)}}}),t._v("左上 "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.boxSty.borderTopRightRadius,expression:"boxSty.borderTopRightRadius"}],attrs:{type:"range",min:"0",max:"50"},domProps:{value:t.boxSty.borderTopRightRadius},on:{__r:function(o){return t.$set(t.boxSty,"borderTopRightRadius",o.target.value)}}}),t._v("右上 "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.boxSty.borderBottomLeftRadius,expression:"boxSty.borderBottomLeftRadius"}],attrs:{type:"range",min:"0",max:"50"},domProps:{value:t.boxSty.borderBottomLeftRadius},on:{__r:function(o){return t.$set(t.boxSty,"borderBottomLeftRadius",o.target.value)}}}),t._v("左下 "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.boxSty.borderBottomRightRadius,expression:"boxSty.borderBottomRightRadius"}],attrs:{type:"range",min:"0",max:"50"},domProps:{value:t.boxSty.borderBottomRightRadius},on:{__r:function(o){return t.$set(t.boxSty,"borderBottomRightRadius",o.target.value)}}}),t._v("右下 "),o("hr"),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.boxSty.width,expression:"boxSty.width"}],attrs:{type:"range",min:"0",max:"400"},domProps:{value:t.boxSty.width},on:{__r:function(o){return t.$set(t.boxSty,"width",o.target.value)}}}),t._v("宽度 "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.boxSty.height,expression:"boxSty.height"}],attrs:{type:"range",min:"0",max:"400"},domProps:{value:t.boxSty.height},on:{__r:function(o){return t.$set(t.boxSty,"height",o.target.value)}}}),t._v("高度")])]),o("hr"),o("input",{directives:[{name:"model",rawName:"v-model",value:t.boxSty.backgroundColor,expression:"boxSty.backgroundColor"}],attrs:{type:"color",value:"#444"},domProps:{value:t.boxSty.backgroundColor},on:{input:function(o){o.target.composing||t.$set(t.boxSty,"backgroundColor",o.target.value)}}})]),o("div",{staticClass:"copy"},[o("h3",[t._v("以下是各个角的样式,可供复制! OvO")]),o("p",[t._v("border-top-left-radius: "+t._s(this.oneSize.borderTopLeftRadius)+";")]),o("p",[t._v("border-top-right-radius: "+t._s(this.oneSize.borderTopRightRadius)+";")]),o("p",[t._v("border-bottom-right-radius: "+t._s(this.oneSize.borderBottomLeftRadius)+";")]),o("p",[t._v("border-bottom-left-radius: "+t._s(this.oneSize.borderBottomRightRadius)+";")])])]),o("div",{staticClass:"right"},[o("div",{staticClass:"bigBox"},[o("div",{staticClass:"box",style:t.oneSize})])])])},a=[],n={name:"App",data(){return{boxSty:{borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0,width:"400",height:"400",backgroundColor:"#444"}}},computed:{oneSize(){return{borderTopLeftRadius:this.boxSty.borderTopLeftRadius+"%",borderTopRightRadius:this.boxSty.borderTopRightRadius+"%",borderBottomLeftRadius:this.boxSty.borderBottomLeftRadius+"%",borderBottomRightRadius:this.boxSty.borderBottomRightRadius+"%",width:this.boxSty.width+"px",height:this.boxSty.height+"px",backgroundColor:this.boxSty.backgroundColor}}}},d=n,s=e(1),u=(0,s.Z)(d,i,a,!1,null,null,null),b=u.exports;r.ZP.config.productionTip=!1,new r.ZP({render:t=>t(b)}).$mount("#app")}},o={};function e(r){var i=o[r];if(void 0!==i)return i.exports;var a=o[r]={exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(o,r,i,a){if(!r){var n=1/0;for(b=0;b<t.length;b++){r=t[b][0],i=t[b][1],a=t[b][2];for(var d=!0,s=0;s<r.length;s++)(!1&a||n>=a)&&Object.keys(e.O).every((function(t){return e.O[t](r[s])}))?r.splice(s--,1):(d=!1,a<n&&(n=a));if(d){t.splice(b--,1);var u=i();void 0!==u&&(o=u)}}return o}a=a||0;for(var b=t.length;b>0&&t[b-1][2]>a;b--)t[b]=t[b-1];t[b]=[r,i,a]}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var i,a,n=r[0],d=r[1],s=r[2],u=0;if(n.some((function(o){return 0!==t[o]}))){for(i in d)e.o(d,i)&&(e.m[i]=d[i]);if(s)var b=s(e)}for(o&&o(r);u<n.length;u++)a=n[u],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(b)},r=self["webpackChunkborder_test"]=self["webpackChunkborder_test"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(504)}));r=e.O(r)})();
//# sourceMappingURL=app.cb292c96.js.map