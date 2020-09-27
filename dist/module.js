/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","d3","emotion"],(function(e,t,n,r,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r=n(2),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function u(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)l.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return l}function c(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(i(arguments[t]));return e}function p(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var s,f,m,d,v=n(0),h=n.n(v),g=n(4),y=n(3),x=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.fill,r=t.stroke,a=t.data,o=t.curveGenerator;return h.a.createElement("g",null,a.map((function(t,a){return h.a.createElement("path",{fill:n,stroke:r,"stroke-width":e.props["stroke-width"],id:"curve-"+100*e.props.index+a,ref:function(e){return y.select(e).datum(t).attr("d",o)}})})))},t}(h.a.PureComponent),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.radius,r=e.xScale,a=e.yScale,o=e.color;return h.a.createElement("g",null,t.map((function(e){return h.a.createElement("circle",{r:String(n),cx:r(e[0]),cy:a(e[1]),fill:o},h.a.createElement("title",null,e[0]+", "+e[1]))})))},t}(h.a.PureComponent),C=n(1),E=Object(C.stylesFactory)((function(){return{wrapper:Object(g.css)(f||(f=p(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(g.css)(m||(m=p(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),legend:Object(g.css)(d||(d=p(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))}})),S=function(e){function t(t){var n=e.call(this,t)||this;return n.state=l({},t.value),n}return o(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.index,a=t.onChangeItem,o=t.onDelete;return h.a.createElement(C.HorizontalGroup,null,h.a.createElement(C.Label,null,"X"),h.a.createElement(C.Input,{type:"text",name:"performCurveX",defaultValue:n.performCurveX,onBlur:function(t){var o=t.currentTarget.value;e.setState((function(){return{performCurveX:o}})),a&&void 0!==r&&a(l(l({},n),{performCurveX:o}),r)}}),h.a.createElement(C.Label,null,"Y"),h.a.createElement(C.Input,{type:"text",name:"performCurveY",defaultValue:n.performCurveY,onBlur:function(t){var o=t.currentTarget.value;e.setState((function(){return{performCurveY:o}})),a&&void 0!==r&&a(l(l({},n),{performCurveY:o}),r)}}),h.a.createElement(C.Label,null,"Color"),h.a.createElement(C.ColorPicker,{color:n.color,onChange:function(t){e.setState((function(){return{color:t}})),a&&void 0!==r&&a(l(l({},n),{color:t}),r)}}),o&&void 0!==r&&h.a.createElement(C.Tooltip,{content:"Delete this performance curve.",theme:"info"},h.a.createElement(C.Button,{variant:"destructive",icon:"trash-alt",size:"sm",onClick:function(){o(r)}},"Remove")))},t}(h.a.PureComponent),F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChangeItem=function(e,n){var r=c(t.props.value);r[n]=e,t.props.onChange(r)},t.onAdd=function(e){var n=c(t.props.value,[e]);t.props.onChange(n)},t.onDelete=function(e){var n=c(t.props.value);n.splice(e,1),t.props.onChange(n)},t}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.value;return h.a.createElement(C.VerticalGroup,null,h.a.createElement(C.Tooltip,{content:"Add a new performance curve.",theme:"info"},h.a.createElement(C.Button,{variant:"secondary",size:"sm",icon:"plus",onClick:function(){e.onAdd({performCurveX:"",performCurveY:"",color:Object(r.getColorFromHexRgbOrName)("rgba(136, 136, 136, 0.6)")})}},"Add")),t.map((function(t,n){return h.a.createElement(S,{key:n,value:t,index:n,onChangeItem:e.onChangeItem,onDelete:e.onDelete})})))},t}(h.a.PureComponent),P=function(e){function t(t){var n=e.call(this,t)||this;return n.state=l({},t.value),n}return o(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.index,a=t.onChangeItem,o=t.onDeleteItem;return h.a.createElement(C.HorizontalGroup,null,h.a.createElement(C.Label,null,"X"),h.a.createElement(C.Input,{type:"text",name:"xField",defaultValue:n.xField,onBlur:function(t){var o=t.currentTarget.value;e.setState((function(){return{xField:o}})),a(l(l({},n),{xField:o}),r)}}),h.a.createElement(C.Label,null,"Y"),h.a.createElement(C.Input,{type:"text",name:"yField",defaultValue:n.yField,onBlur:function(t){var o=t.currentTarget.value;e.setState((function(){return{yField:o}})),a(l(l({},n),{yField:o}),r)}}),h.a.createElement(C.Button,{variant:"destructive",icon:"trash-alt",size:"sm",onClick:function(){o(r)}},"Remove"))},t}(h.a.PureComponent),w=function(e){function t(t){var n=e.call(this,t)||this;return n.onChangeItem=function(e,t){var r=c(n.props.value.fieldGroup);r[t]=e,n.props.onChange({fieldGroup:r,color:n.props.value.color},n.props.index)},n.onAddItem=function(e){var t=c(n.props.value.fieldGroup,[e]);n.props.onChange({fieldGroup:t,color:n.props.value.color},n.props.index)},n.onDeleteItem=function(e){var t=c(n.props.value.fieldGroup);t.splice(e,1),n.props.onChange({fieldGroup:t,color:n.props.value.color},n.props.index)},n.state=l({},t.value),n}return o(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.index,a=t.onChange,o=t.onDelete;return h.a.createElement(C.ControlledCollapse,{collapsible:!0,label:"Line Group "+r},h.a.createElement(C.VerticalGroup,null,h.a.createElement(C.HorizontalGroup,null,h.a.createElement(C.Button,{variant:"destructive",icon:"trash-alt",size:"sm",onClick:function(){o(r)}},"Remove Line Group")),h.a.createElement(C.HorizontalGroup,null,h.a.createElement(C.Button,{variant:"secondary",size:"sm",icon:"plus",onClick:function(){e.onAddItem({xField:"",yField:""})}},"Add Field"),h.a.createElement(C.Label,null,"Color"),h.a.createElement(C.ColorPicker,{color:n.color,onChange:function(t){e.setState((function(){return{color:t}})),a(l(l({},n),{color:t}),r)}})),n.fieldGroup.map((function(t,n){return h.a.createElement(P,{key:n,value:t,index:n,onChangeItem:e.onChangeItem,onDeleteItem:e.onDeleteItem})}))))},t}(h.a.PureComponent),V=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChangeGroup=function(e,n){var r=c(t.props.value);r[n]=e,t.props.onChange(r)},t.onAddGroup=function(e){var n=c(t.props.value,[e]);t.props.onChange(n)},t.onDeleteGroup=function(e){var n=c(t.props.value);n.splice(e,1),t.props.onChange(n)},t}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.value;return h.a.createElement(C.VerticalGroup,null,h.a.createElement(C.Button,{variant:"secondary",size:"sm",icon:"plus",onClick:function(){e.onAddGroup({fieldGroup:[{xField:"",yField:""}],color:Object(r.getColorFromHexRgbOrName)("rgba(136, 136, 136, 0.6)")})}},"Add"),t.map((function(t,n){return h.a.createElement(w,{key:n,value:t,index:n,onChange:e.onChangeGroup,onDelete:e.onDeleteGroup})})))},t}(h.a.PureComponent),O=function(e){function t(t){var n=e.call(this,t)||this;return n.state=l({},t.value),n}return o(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.index,a=t.onChangeItem,o=t.onDelete;return h.a.createElement(C.HorizontalGroup,null,h.a.createElement(C.Label,null,"Label"),h.a.createElement(C.Input,{type:"text",name:"label",defaultValue:n.label,onBlur:function(t){var o=t.currentTarget.value;e.setState((function(){return{label:o}})),a&&void 0!==r&&a(l(l({},n),{label:o}),r)}}),h.a.createElement(C.Label,null,"X"),h.a.createElement(C.Input,{type:"text",name:"xField",defaultValue:n.xField,onBlur:function(t){var o=t.currentTarget.value;e.setState((function(){return{xField:o}})),a&&void 0!==r&&a(l(l({},n),{xField:o}),r)}}),h.a.createElement(C.Label,null,"Y"),h.a.createElement(C.Input,{type:"text",name:"yField",defaultValue:n.yField,onBlur:function(t){var o=t.currentTarget.value;e.setState((function(){return{yField:o}})),a&&void 0!==r&&a(l(l({},n),{yField:o}),r)}}),h.a.createElement(C.Label,null,"Color"),h.a.createElement(C.ColorPicker,{color:n.color,onChange:function(t){e.setState((function(){return{color:t}})),a&&void 0!==r&&a(l(l({},n),{color:t}),r)}}),o&&void 0!==r&&h.a.createElement(C.Tooltip,{content:"Delete this plot.",theme:"info"},h.a.createElement(C.Button,{variant:"destructive",icon:"trash-alt",size:"sm",onClick:function(){o(r)}},"Remove")))},t}(h.a.PureComponent),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onChangeItem=function(e,n){var r=c(t.props.value);r[n]=e,t.props.onChange(r)},t.onAdd=function(e){var n=c(t.props.value,[e]);t.props.onChange(n)},t.onDelete=function(e){var n=c(t.props.value);n.splice(e,1),t.props.onChange(n)},t}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.value;return h.a.createElement(C.VerticalGroup,null,h.a.createElement(C.Tooltip,{content:"Add a new plot.",theme:"info"},h.a.createElement(C.Button,{variant:"secondary",size:"sm",icon:"plus",onClick:function(){e.onAdd({label:"",xField:"",yField:"",color:Object(r.getColorFromHexRgbOrName)("rgba(136, 136, 136, 0.6)")})}},"Add")),t.map((function(t,n){return h.a.createElement(O,{key:n,value:t,index:n,onChangeItem:e.onChangeItem,onDelete:e.onDelete})})))},t}(h.a.PureComponent),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.value;return h.a.createElement(C.VerticalGroup,null,h.a.createElement(C.HorizontalGroup,null,h.a.createElement(C.Label,null,"Min"),h.a.createElement(C.Input,{type:"number",name:"minValue",value:t.minValue,onChange:function(t){console.log("minValue");var n=t.currentTarget.value;e.props.onChange(l(l({},e.props.value),{minValue:Number(n)})),console.log(e.props.value)}}),h.a.createElement(C.Label,null,"Max"),h.a.createElement(C.Input,{type:"number",name:"maxValue",defaultValue:t.maxValue,onChange:function(t){var n=t.currentTarget.value;e.props.onChange(l(l({},e.props.value),{maxValue:Number(n)}))}}),h.a.createElement(C.Label,null,"Label"),h.a.createElement(C.Input,{type:"text",name:"label",defaultValue:t.label,onChange:function(t){var n=t.currentTarget.value;e.props.onChange(l(l({},e.props.value),{label:n})),e.setState((function(){return{label:n}}))}})))},t}(h.a.PureComponent);n.d(t,"plugin",(function(){return G}));var G=new r.PanelPlugin((function(e){var t,n,a=e.options,o=e.data,l=e.width,c=e.height,f=E(),m=20,d=20,v=70,S=60,F=a.performanceCurveData,P=[];try{for(var w=u(F.entries()),V=w.next();!V.done;V=w.next()){var O=i(V.value,2),A=O[0],k=O[1],G=k.performCurveX.split(","),I=k.performCurveY.split(",");P[A]={color:k.color,data:[]};for(var j=0;j<Math.min(G.length,I.length);j++)P[A].data[j]={x:Number(G[j]),y:Number(I[j])}}}catch(e){t={error:e}}finally{try{V&&!V.done&&(n=w.return)&&n.call(w)}finally{if(t)throw t.error}}var D=a.pointRadius,L=[];for(j=0;j<o.series.length;j++){var T=o.series[j].name;L[j]=T||""}var B=[];o.series.map((function(e){if(void 0!==e.name){var t=e.fields.find((function(e){return e.type===r.FieldType.number}));if(t){var n=Object(r.getFieldDisplayName)(t,e);t.name=n,B.push(t)}}else e.fields.map((function(e){if(e.type===r.FieldType.number){var t=e;B.push(t)}}))}));var z=a.plotSetting,N=z.length,X=[[]],_=[],Y=function(e){var t=B.find((function(t){return t.name===z[e].xField})),n=B.find((function(t){return t.name===z[e].yField}));if(t&&n){var r=t.values.toArray(),a=n.values.toArray();X[e]=[];for(var o=0;o<r.length;o++)X[e][o]=[r[o],a[o]];_[e]={color:z[e].color,label:z[e].label,isVisible:!0,yAxis:1}}};for(j=0;j<N;j++)Y(j);var R=a.dynamicPerfCurve,H=[],M=function(e){var t=R[e].fieldGroup;H[e]={color:a.dynamicPerfCurve[e].color,data:[]};for(var n=function(n){var r=B.find((function(e){return e.name===t[n].xField})),a=B.find((function(e){return e.name===t[n].yField}));if(r&&a)for(var o=r.values.toArray(),l=a.values.toArray(),u=0;u<o.length;u++)void 0===H[e].data[u]&&(H[e].data[u]=[]),H[e].data[u][n]={x:o[u],y:l[u]}},r=0;r<t.length;r++)n(r)};for(j=0;j<R.length;j++)M(j);var q=a.xAxis.label,J=a.xAxis.minValue,K=a.xAxis.maxValue,Q=a.yAxis.label,U=a.yAxis.minValue,W=a.yAxis.maxValue,Z=y.scaleLinear().domain([J,K||0]).range([S,l-d]),$=y.scaleLinear().domain([U,W||0]).range([c-v,m]),ee=y.axisBottom(Z).ticks(l/80),te=y.axisLeft($).ticks(c/80),ne=y.line().curve(y.curveBasis).x((function(e){return Z(e.x)})).y((function(e){return $(e.y)}));return h.a.createElement("div",{className:Object(g.cx)(f.wrapper,Object(g.css)(s||(s=p(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),l,c))},h.a.createElement("svg",{className:f.svg,width:l,height:c,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 "+l+" "+c},h.a.createElement("g",{transform:"translate(0, "+(c-v)+")",ref:function(e){y.select(e).call(ee)}},h.a.createElement("text",{x:(l-S-d)/2+S,y:"40","text-anchor":"middle",fill:"currentColor","font-size":"8pt"},q)),h.a.createElement("g",{transform:"translate("+S+", 0)",ref:function(e){y.select(e).call(te)}},h.a.createElement("text",{x:-(c-m-v)/2,y:"-50","text-anchor":"middle",fill:"currentColor",transform:"rotate(-90)","font-size":"8pt"},Q)),h.a.createElement("g",null,Z.ticks().map((function(e){return h.a.createElement("line",{stroke:"currentColor","stroke-opacity":"0.1",y1:m,y2:c-v,x1:.5+Z(e),x2:.5+Z(e)})}))),h.a.createElement("g",null,$.ticks().map((function(e){return h.a.createElement("line",{stroke:"currentColor","stroke-opacity":"0.1",x1:S,x2:l-d,y1:.5+$(e),y2:.5+$(e)})}))),P.map((function(e,t){return h.a.createElement("g",{id:"static-curve-group"},h.a.createElement("path",{fill:"none",stroke:e.color,"stroke-width":"1.5",id:"curve-"+t,ref:function(t){y.select(t).datum(e.data).attr("d",ne)}}))})),H.map((function(e,t){return h.a.createElement("g",{id:"dynamic-curve-group"},h.a.createElement(x,{fill:"none",stroke:e.color,"stroke-width":"1.5",index:t,data:e.data,curveGenerator:ne}))})),h.a.createElement("g",{id:"plot-group"},X.map((function(e,t){return h.a.createElement(b,{data:e,radius:D,xScale:Z,yScale:$,color:z[t].color})})))),h.a.createElement("div",{className:f.legend},h.a.createElement(C.GraphLegend,{items:_,displayMode:C.LegendDisplayMode.List,placement:"under"})))})).setPanelOptions((function(e){return e.addCustomEditor({category:["Canvas Setting","Axis"],id:"xAxis",path:"xAxis",name:"X-Axis Setting",defaultValue:{minValue:0,maxValue:60,label:"Flowrate"},editor:k}).addCustomEditor({category:["Canvas Setting","Axis"],id:"yAxis",path:"yAxis",name:"Y-Axis Setting",defaultValue:{minValue:0,maxValue:100,label:"Pressure"},editor:k}).addCustomEditor({category:["Canvas Setting","Performance Curve"],id:"performanceCurveData",path:"performanceCurveData",name:"Static Performance Curve Data",description:"Input sample data points of peformance curve. Program automatically draw smooth lines.",defaultValue:[{performCurveX:"10,20,30,40,50",performCurveY:"80,78,72,62,48",color:Object(r.getColorFromHexRgbOrName)("rgba(136, 136, 136, 0.6)")}],editor:F}).addCustomEditor({category:["Canvas Setting","Performance Curve"],id:"dynamicPerfCurve",path:"dynamicPerfCurve",name:"Dynamic Performance Curve Data",description:"Set filed names to draw dynamic peformance curve. Program automatically draw smooth lines.",defaultValue:[],editor:V}).addCustomEditor({category:["Plot Setting"],id:"plotSetting",path:"plotSetting",name:"Plot Setting",description:"Set field names of X and Y axis to plot operation points. Set alias in query to set field name.",defaultValue:[{label:"Label Name",xField:"Field X",yField:"Field Y",color:Object(r.getColorFromHexRgbOrName)("rgba(136, 136, 136, 0.6)")}],editor:A}).addSelect({category:["Plot Setting"],path:"pointRadius",name:"Point Radius",defaultValue:2,settings:{options:[{label:"0.5",value:.5},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10}]}})}))}])}));
//# sourceMappingURL=module.js.map