(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(36)},18:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(12),r=(t(18),e=>{let{label:a,value:t,onChange:l}=e;return n.a.createElement("div",null,n.a.createElement("label",null,a),n.a.createElement("input",{className:"input",value:t,onChange:e=>l(e.target.value)}))});const u=[{label:"Afrikaans",value:"af"},{label:"Arabic",value:"ar"},{label:"French",value:"fr"},{label:"Hindi",value:"hi"},{label:"Japanese",value:"ja"},{label:"Portuguese",value:"pt"},{label:"English",value:"en"},{label:"Simplified Chinese",value:"zh-CN"},{label:"Spanish",value:"es"},{label:"Swahili",value:"sw"},{label:"Thai",value:"th"}];var s=e=>{let{language:a,onLanguageChange:t}=e;void 0===a&&(a="en");const c=u.find(e=>e.value===a);if(!c)throw new Error("Unknown language code '".concat(a,"'"));const[r,s]=Object(l.useState)(!1);return n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044f\u0437\u044b\u043a"),n.a.createElement("div",{className:"dropdown ".concat(r&&"is-active")},n.a.createElement("div",{className:"dropdown-trigger"},n.a.createElement("button",{className:"button",onClick:()=>s(!r)},n.a.createElement("span",null,c.label),n.a.createElement("span",{className:"icon is-small"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"dropdown-menu"},n.a.createElement("div",{className:"dropdown-content"},u.map(e=>{let{label:a,value:l}=e;return n.a.createElement("a",{key:Math.random(),href:"#",onClick:()=>(e=>{s(!1),t(e)})(l),className:"dropdown-item"},a)})))))},o=t(2),i=t.n(o);var m=e=>{let{language:a,text:t}=e;const[c,r]=Object(l.useState)("");return Object(l.useEffect)(()=>{if(!t)return;const e=i.a.CancelToken.source();return(async(e,a,t)=>{let l="".concat("https://dictionary.yandex.net/api/v1/dicservice.json","/lookup?key=dict.1.1.20241219T115139Z.470f052673aaf320.b27b107b72cb2d4a5d6a6ab9047c36c9941b90ae&lang=ru-").concat(a,"&text=").concat(e);try{const{data:e}=await i.a.post(l);return e.def[0].tr[0].text}catch(n){return""}})(t,a).then(r),()=>{try{e.cancel()}catch(a){}}},[t,a]),n.a.createElement("div",null,n.a.createElement("label",{className:"label"},"Output"),n.a.createElement("h1",{className:"title"},c))};function b(){const[e,a]=Object(l.useState)("en"),[t,c]=Object(l.useState)("\u0420\u0435\u0430\u043a\u0446\u0438\u044f");return n.a.createElement("div",null,n.a.createElement(r,{label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0443\u0441\u0441\u043a\u0438\u0435 \u0441\u043b\u043e\u0432\u0430",onChange:c,value:t}),n.a.createElement(s,{language:e,onLanguageChange:a}),n.a.createElement("hr",null),n.a.createElement(m,{text:t,language:e}))}Object(c.render)(n.a.createElement(b,null),document.querySelector("#root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.003d22f2.chunk.js.map