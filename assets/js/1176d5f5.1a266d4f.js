"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6753],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83049:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],i={},u="Qualaroo",s={unversionedId:"integrations/sources/qualaroo",id:"integrations/sources/qualaroo",title:"Qualaroo",description:"Overview",source:"@site/../docs/integrations/sources/qualaroo.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/qualaroo",permalink:"/integrations/sources/qualaroo",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/qualaroo.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"PrestaShop",permalink:"/integrations/sources/presta-shop"},next:{title:"QuickBooks",permalink:"/integrations/sources/quickbooks"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"qualaroo"},"Qualaroo"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Qualaroo source supports Full Refresh syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,o.kt)("p",null,"This Source Connector is based on a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"Several output streams are available from this source:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.qualaroo.com/hc/en-us/articles/201969438-The-REST-Reporting-API"},"Surveys")," ","(","Full table",")",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://help.qualaroo.com/hc/en-us/articles/201969438-The-REST-Reporting-API"},"Responses")," ","(","Full table",")")))),(0,o.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"NO")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"The connector is ",(0,o.kt)("strong",{parentName:"p"},"not")," yet restricted by normal requests limitation. As a result, the Qualaroo connector might run into API limitations under normal usage. Please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Qualaroo API Key"),(0,o.kt)("li",{parentName:"ul"},"Qualaroo API Token")),(0,o.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,o.kt)("p",null,"Please read ",(0,o.kt)("a",{parentName:"p",href:"https://help.qualaroo.com/hc/en-us/articles/201969438-The-REST-Reporting-API"},"How to get your APIs Token and Key")," or you can log in to Qualaroo and visit ",(0,o.kt)("a",{parentName:"p",href:"https://app.qualaroo.com/account"},"Reporting API"),"."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-08-18"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8623"},"8623")),(0,o.kt)("td",{parentName:"tr",align:"left"},"New source: Qualaroo")))))}d.isMDXComponent=!0}}]);