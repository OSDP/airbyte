"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2169],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90020:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},l="Meltano vs Airbyte",c={unversionedId:"archive/faq/differences-with/meltano-vs-airbyte",id:"archive/faq/differences-with/meltano-vs-airbyte",title:"Meltano vs Airbyte",description:"We wrote an article, \u201cThe State of Open-Source Data Integration and ETL,\u201d in which we list and compare all ETL-related open-source projects, including Meltano and Airbyte. Don\u2019t hesitate to check it out for more detailed arguments. As a summary, here are the differences:",source:"@site/../docs/archive/faq/differences-with/meltano-vs-airbyte.md",sourceDirName:"archive/faq/differences-with",slug:"/archive/faq/differences-with/meltano-vs-airbyte",permalink:"/archive/faq/differences-with/meltano-vs-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/faq/differences-with/meltano-vs-airbyte.md",tags:[],version:"current",frontMatter:{}},u={},h=[{value:"<strong>Meltano:</strong>",id:"meltano",level:2},{value:"<strong>Airbyte:</strong>",id:"airbyte",level:2},{value:"<strong>Other noteworthy differences:</strong>",id:"other-noteworthy-differences",level:2}],p={toc:h};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"meltano-vs-airbyte"},"Meltano vs Airbyte"),(0,o.kt)("p",null,"We wrote an article, \u201c",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.io/articles/data-engineering-thoughts/the-state-of-open-source-data-integration-and-etl/"},"The State of Open-Source Data Integration and ETL"),",\u201d in which we list and compare all ETL-related open-source projects, including Meltano and Airbyte. Don\u2019t hesitate to check it out for more detailed arguments. As a summary, here are the differences:"),(0,o.kt)("h2",{id:"meltano"},(0,o.kt)("strong",{parentName:"h2"},"Meltano:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Meltano is built on top of the Singer protocol, whereas Airbyte is built on top of the Airbyte protocol"),". Having initially created Airbyte on top of Singer, we wrote about why we didn't move forward with it ",(0,o.kt)("a",{parentName:"li",href:"https://airbyte.io/blog/why-you-should-not-build-your-data-pipeline-on-top-of-singer"},"here")," and ",(0,o.kt)("a",{parentName:"li",href:"https://airbyte.io/blog/airbyte-vs-singer-why-airbyte-is-not-built-on-top-of-singer"},"here"),". Summarized, the reasons were: Singer connectors didn't always adhere to the Singer protocol, had poor standardization and visibility in terms of quality, and community governance and support was abandoned by Stitch. By contrast, we aim to make Airbyte a product that ",(0,o.kt)("a",{parentName:"li",href:"https://airbyte.io/blog/our-truth-for-2021-airbyte-just-works"},'"just works"')," and always plan to maximize engagement within the Airbyte community. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CLI-first approach:")," Meltano was primarily built with a command line interface in mind. In that sense, they seem to target engineers with a preference for that interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integration with Airflow for orchestration:")," You can either use Meltano alone for orchestration or with Airflow; Meltano works both ways.  "),(0,o.kt)("li",{parentName:"ul"},"All connectors must use Python.  "),(0,o.kt)("li",{parentName:"ul"},"Meltano works with any of Singer's 200+ available connectors. However, in our experience, quality has been hit or miss. ")),(0,o.kt)("h2",{id:"airbyte"},(0,o.kt)("strong",{parentName:"h2"},"Airbyte:")),(0,o.kt)("p",null,"In contrast, Airbyte is a company fully committed to the open-source project and has a ",(0,o.kt)("a",{parentName:"p",href:"https://handbook.airbyte.io/strategy/business-model"},"business model")," in mind around this project. Our ",(0,o.kt)("a",{parentName:"p",href:"https://airbyte.io/about-us"},"team")," are data integration experts that have built more than 1,000 integrations collectively at large scale. The team now counts 20 engineers working full-time on Airbyte."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Airbyte supports more than 100 connectors after only 1 year since its inception"),", 20% of which were built by the community. Our ambition is to support ",(0,o.kt)("strong",{parentName:"li"},"200+ connectors by the end of 2021.")," "),(0,o.kt)("li",{parentName:"ul"},"Airbyte\u2019s connectors are ",(0,o.kt)("strong",{parentName:"li"},"usable out of the box through a UI and API,")," with monitoring, scheduling and orchestration. Airbyte was built on the premise that a user, whatever their background, should be able to move data in 2 minutes. Data engineers might want to use raw data and their own transformation processes, or to use Airbyte\u2019s API to include data integration in their workflows. On the other hand, analysts and data scientists might want to use normalized consolidated data in their database or data warehouses. Airbyte supports all these use cases.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"One platform, one project with standards:")," This will help consolidate the developments behind one single project, some standardization and specific data protocol that can benefit all teams and specific cases. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Not limited by Singer\u2019s data protocol:")," In contrast to Meltano, Airbyte was not built on top of Singer, but its data protocol is compatible with Singer\u2019s. This means Airbyte can go beyond Singer, but Meltano will remain limited. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connectors can be built in the language of your choice,")," as Airbyte runs them as Docker containers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Airbyte integrates with your data stack and your needs:")," Airflow, Kubernetes, dbt, etc. Its normalization is optional, it gives you a basic version that works out of the box, but also allows you to use dbt to do more complicated things.")),(0,o.kt)("h2",{id:"other-noteworthy-differences"},(0,o.kt)("strong",{parentName:"h2"},"Other noteworthy differences:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In terms of community, Meltano's Slack community got 430 new members in the last 6 months, while Airbyte got 800. "),(0,o.kt)("li",{parentName:"ul"},"The difference in velocity in terms of feature progress is easily measurable as both are open-source projects. Meltano closes about 30 issues per month, while Airbyte closes about 120.")))}m.isMDXComponent=!0}}]);