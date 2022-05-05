"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2112],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),s=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,g=d["".concat(m,".").concat(c)]||d[c]||p[c]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4825:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},m="End-to-End Testing Source",s={unversionedId:"integrations/sources/e2e-test",id:"integrations/sources/e2e-test",title:"End-to-End Testing Source",description:"Overview",source:"@site/../docs/integrations/sources/e2e-test.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/e2e-test",permalink:"/integrations/sources/e2e-test",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/e2e-test.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Drupal",permalink:"/integrations/sources/drupal"},next:{title:"Exchange Rates API",permalink:"/integrations/sources/exchangeratesapi"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Mode",id:"mode",level:2},{value:"Continuous Feed",id:"continuous-feed",level:3},{value:"Legacy Infinite Feed",id:"legacy-infinite-feed",level:3},{value:"Exception after N",id:"exception-after-n",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"end-to-end-testing-source"},"End-to-End Testing Source"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This is a mock source for testing the Airbyte pipeline. It can generate arbitrary data streams."),(0,l.kt)("h2",{id:"mode"},"Mode"),(0,l.kt)("h3",{id:"continuous-feed"},"Continuous Feed"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"This is the only mode available starting from ",(0,l.kt)("inlineCode",{parentName:"strong"},"2.0.0"),".")),(0,l.kt)("p",null,"This mode allows users to specify a single-stream or multi-stream catalog with arbitrary schema. The schema should be compliant with Json schema ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/draft-07/json-schema-release-notes.html"},"draft-07"),"."),(0,l.kt)("p",null,"The single-stream catalog config exists just for convenient, since in many testing cases, one stream is enough. If only one stream is specified in the multi-stream catalog config, it is equivalent to a single-stream catalog config."),(0,l.kt)("p",null,"Here is its configuration:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Mock Catalog Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single-stream"),(0,l.kt)("td",{parentName:"tr",align:null},"stream name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the stream in the catalog.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"stream schema"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Json schema of the stream in the catalog. It must be a valid Json schema.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"stream duplication"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Duplicate the stream N times to quickly create a multi-stream catalog.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Multi-stream"),(0,l.kt)("td",{parentName:"tr",align:null},"streams and schemas"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"A Json object specifying multiple data streams and their schemas. Each key in this object is one stream name. Each value is the schema for that stream.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Both"),(0,l.kt)("td",{parentName:"tr",align:null},"max records"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of record messages to emit from this connector. Min 1. Max 100 billion.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"random seed"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"current time millis"),(0,l.kt)("td",{parentName:"tr",align:null},"The seed is used in random Json object generation. Min 0. Max 1 million.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"message interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The time interval between messages in millisecond. Min 0 ms. Max 60000 ms (1 minute).")))),(0,l.kt)("h3",{id:"legacy-infinite-feed"},"Legacy Infinite Feed"),(0,l.kt)("p",null,"This is a legacy mode used in Airbyte integration tests. It has been removed since ",(0,l.kt)("inlineCode",{parentName:"p"},"2.0.0"),". It has a simple catalog with one ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," stream that has the following schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n  "properties":\n    {\n      "column1": { "type": "string" }\n    }\n}\n')),(0,l.kt)("p",null,"The value of ",(0,l.kt)("inlineCode",{parentName:"p"},"column1")," will be an increasing number starting from ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("p",null,"This mode can generate infinite number of records, which can be dangerous. That's why it is excluded from the Cloud variant of this connector. Usually this mode should not be used."),(0,l.kt)("p",null,"There are two configurable parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max records"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of message records to emit. When it is left empty, the connector will generate infinite number of messages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message interval"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},"Time interval between messages in millisecond.")))),(0,l.kt)("h3",{id:"exception-after-n"},"Exception after N"),(0,l.kt)("p",null,"This is a legacy mode used in Airbyte integration tests. It has been removed since ",(0,l.kt)("inlineCode",{parentName:"p"},"2.0.0"),". It throws an ",(0,l.kt)("inlineCode",{parentName:"p"},"IllegalStateException")," after certain number of messages. The number of messages to emit before exception is the only parameter for this mode."),(0,l.kt)("p",null,"This mode is also excluded from the Cloud variant of this connector."),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("p",null,"The OSS and Cloud variants have the same version number. The Cloud variant was initially released at version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Pull request"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-12"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10298"},"#","10298")),(0,l.kt)("td",{parentName:"tr",align:null},"Support stream duplication to quickly create a multi-stream catalog.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02-01"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9954"},"#","9954")),(0,l.kt)("td",{parentName:"tr",align:null},"Remove legacy modes. Use more efficient Json generator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-29"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9745"},"#","9745")),(0,l.kt)("td",{parentName:"tr",align:null},"Integrate with Sentry.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9720"},"#","9720")),(0,l.kt)("td",{parentName:"tr",align:null},"Add new continuous feed mode that supports arbitrary catalog specification. Initial release to cloud.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.1"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-12-16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8217"},"#","8217")),(0,l.kt)("td",{parentName:"tr",align:null},"Fix sleep time in infinite feed mode.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07-23"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3290"},"#","3290")," ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4939"},"#","4939")),(0,l.kt)("td",{parentName:"tr",align:null},"Initial release.")))))}c.isMDXComponent=!0}}]);