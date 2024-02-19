"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1974],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,k=m["".concat(i,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(7896),a=(n(2784),n(876));const l={},o="\u53cc\u5411\u7ed1\u5b9a",p={unversionedId:"boot/model",id:"boot/model",title:"\u53cc\u5411\u7ed1\u5b9a",description:"TangoBoot \u652f\u6301\u5feb\u6377\u5b9e\u73b0\u7ec4\u4ef6\u4e0e\u89c6\u56fe\u53cc\u5411\u7ed1\u5b9a\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/boot/model.mdx",sourceDirName:"boot",slug:"/boot/model",permalink:"/tango/en/docs/boot/model",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/boot/model.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"\u501f\u52a9 <code>withModel</code> \u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a",id:"\u501f\u52a9-withmodel-\u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a",level:2},{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",level:2}],d={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53cc\u5411\u7ed1\u5b9a"},"\u53cc\u5411\u7ed1\u5b9a"),(0,a.kt)("p",null,"TangoBoot \u652f\u6301\u5feb\u6377\u5b9e\u73b0\u7ec4\u4ef6\u4e0e\u89c6\u56fe\u53cc\u5411\u7ed1\u5b9a\u3002"),(0,a.kt)("h2",{id:"\u501f\u52a9-withmodel-\u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a"},"\u501f\u52a9 ",(0,a.kt)("inlineCode",{parentName:"h2"},"withModel")," \u5b9e\u73b0\u53cc\u5411\u7ed1\u5b9a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"withModel")," \u662f TangoBoot \u5185\u7f6e\u7684\u6a21\u578b\u7ed1\u5b9a HOC\uff0c\u652f\u6301\u5c06\u7ec4\u4ef6\u7684\u5185\u90e8\u72b6\u6001\u540c\u6b65\u5230\u67d0\u4e2a store \u5b9a\u4e49\u7684\u72b6\u6001\u4e2d\u3002\u57fa\u672c\u7684\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"class Input extends React.Component {\n  foo() {}\n\n  render() {\n    return <input {...this.props} />;\n  }\n}\n\nconst ModelInput = withModel({\n  // \u8bbe\u7f6e\u4ece\u7ec4\u4ef6\u540c\u6b65\u5230 store \u4e2d\u7684\u72b6\u6001\u503c\n  getValueFromEvent(e: any) {\n    return e.target.value;\n  },\n})(Input);\n")),(0,a.kt)("p",null,"\u73b0\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelInput")," \u83b7\u53d6\u4e86\u53cc\u5411\u7ed1\u5b9a\u7684\u80fd\u529b\uff0c\u5176 ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," \u53d8\u5316\u540e\u7684\u503c\u5c06\u4f1a\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," \u4e8b\u4ef6\u540c\u6b65\u7ed9\u7ed1\u5b9a\u7684\u6a21\u578b\u53d8\u91cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const Store = defineStore(\n  {\n    name: 'alice',\n  },\n  'user'\n);\n\nconst ModelApp = defineView((props) => {\n  return (\n    <div>\n      <ModelInput model=\"user.name\" />\n    </div>\n  );\n});\n")),(0,a.kt)("h2",{id:"\u914d\u7f6e\u9009\u9879"},"\u914d\u7f6e\u9009\u9879"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"withModel")," \u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"withModel(options)(Component);\n")),(0,a.kt)("p",null,"\u5176\u4e2d options \u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7684 displayName")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"valuePropName"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},'"value"'),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u7684\u53d7\u63a7\u503c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trigger"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},'"onChange"'),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u503c\u53d8\u5316\u65f6\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"getValueFromEvent"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(...args) => any")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ece\u56de\u8c03\u51fd\u6570\u53c2\u6570\u4e2d\u7684\u53d6\u503c\u65b9\u6cd5")))),(0,a.kt)("p",null,"\u501f\u52a9 ",(0,a.kt)("inlineCode",{parentName:"p"},"withModel")," \u589e\u5f3a\u540e\uff0cComponent \u7ec4\u4ef6\u5c06\u4f1a\u83b7\u5f97\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"model"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ed1\u5b9a\u7684\u6a21\u578b\u53d8\u91cf\u7684\u53d8\u91cf\u8def\u5f84")))))}c.isMDXComponent=!0}}]);