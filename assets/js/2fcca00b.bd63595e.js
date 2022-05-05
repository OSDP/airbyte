"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9656],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5644:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={},s="Orb",u={unversionedId:"integrations/sources/orb",id:"integrations/sources/orb",title:"Orb",description:"Overview",source:"@site/../docs/integrations/sources/orb.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/orb",permalink:"/integrations/sources/orb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/orb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Oracle Siebel CRM",permalink:"/integrations/sources/oracle-siebel-crm"},next:{title:"Outreach",permalink:"/integrations/sources/outreach"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Note on Incremental Syncs",id:"note-on-incremental-syncs",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"orb"},"Orb"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Orb source supports both Full Refresh and Incremental syncs. For incremental syncs, this source\nwill only read and output new records based on their ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," timestamp."),(0,l.kt)("h3",{id:"output-schema"},"Output schema"),(0,l.kt)("p",null,"This Source is capable of syncing the following core resources, each of which has a separate Stream. Note that all of the streams are incremental:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.withorb.com/reference/list-subscriptions"},"Subscriptions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.withorb.com/reference/list-plans"},"Plans")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.withorb.com/reference/list-customers"},"Customers")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.withorb.com/reference/view-credits-ledger"},"Credits Ledger Entries"))),(0,l.kt)("p",null,"As a caveat, the Credits Ledger Entries must read all Customers for an incremental sync, but will only incrementally return new ledger entries for each customers."),(0,l.kt)("h3",{id:"note-on-incremental-syncs"},"Note on Incremental Syncs"),(0,l.kt)("p",null,"The Orb API does not allow querying objects based on an ",(0,l.kt)("inlineCode",{parentName:"p"},"updated_at")," time. Therefore, this connector uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"created_at")," field to query for new data since the last sync."),(0,l.kt)("p",null,"In order to capture data that has been updated after creation, please run a periodic Full Refresh."),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental - Dedupe Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,l.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,l.kt)("p",null,"The Orb connector should not run into Orb API limitations under normal usage. Please ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Orb Account"),(0,l.kt)("li",{parentName:"ul"},"Orb API Key")),(0,l.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,l.kt)("p",null,"Please reach out to the Orb team at ",(0,l.kt)("a",{parentName:"p",href:"mailto:team@withorb.com"},"team@withorb.com")," to request\nan Orb Account and API Key."),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Date"),(0,l.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-04-20"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11528"},"11528")),(0,l.kt)("td",{parentName:"tr",align:null},"Add cost basis to ledger entries, update expiration date, sync only committed entries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.1"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03-03"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10839"},"10839")),(0,l.kt)("td",{parentName:"tr",align:null},"Support ledger entries with numeric properties + schema fixes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-02-01"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"New Source: Orb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},":---"),(0,l.kt)("td",{parentName:"tr",align:null},":---"),(0,l.kt)("td",{parentName:"tr",align:null},":---"),(0,l.kt)("td",{parentName:"tr",align:null},":---")))))}d.isMDXComponent=!0}}]);