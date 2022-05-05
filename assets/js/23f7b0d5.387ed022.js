"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4639],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},14893:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={},l="Bing Ads",c={unversionedId:"integrations/sources/bing-ads",id:"integrations/sources/bing-ads",title:"Bing Ads",description:"Overview",source:"@site/../docs/integrations/sources/bing-ads.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/bing-ads",permalink:"/integrations/sources/bing-ads",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/bing-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Bamboo HR",permalink:"/integrations/sources/bamboo-hr"},next:{title:"BigCommerce",permalink:"/integrations/sources/bigcommerce"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:2},{value:"Report Aggregation",id:"report-aggregation",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started (Airbyte Open Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup Guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bing-ads"},"Bing Ads"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Bing Ads connector syncs data from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/advertising/guides/?view=bingads-13"},"Bing Ads API"),"."),(0,i.kt)("h2",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This Source is capable of syncing the following resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/customer-management-service/searchaccounts?view=bingads-13"},"Accounts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/campaign-management-service/getcampaignsbyaccountid?view=bingads-13"},"Campaigns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/campaign-management-service/getadgroupsbycampaignid?view=bingads-13"},"AdGroups")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/campaign-management-service/getadsbyadgroupid?view=bingads-13"},"Ads"))),(0,i.kt)("p",null,"It can also sync the following reports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/accountperformancereportrequest?view=bingads-13"},"AccountPerformanceReport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportrequest?view=bingads-13"},"AdPerformanceReport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportrequest?view=bingads-13"},"AdGroupPerformanceReport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportrequest?view=bingads-13"},"CampaignPerformanceReport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/budgetsummaryreportrequest?view=bingads-13"},"BudgetSummaryReport")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportrequest?view=bingads-13"},"KeywordPerformanceReport"))),(0,i.kt)("h3",{id:"report-aggregation"},"Report Aggregation"),(0,i.kt)("p",null,"All reports synced by this connector can be aggregated using hourly, daily, weekly, or monthly windows. Performance data is aggregated using the selected window. For example, if you select the daily-aggregation flavor of a report, the report will contain a row for each day for the duration of the report. Each row will indicate the number of impressions recorded on that day.   "),(0,i.kt)("p",null,"A report's aggregation window is indicated in its name e.g: ",(0,i.kt)("inlineCode",{parentName:"p"},"account_performance_report_hourly")," is the Account Performance Reported aggregated using an hourly window. "),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"API limits number of requests for all Microsoft Advertising clients. You can find detailied info ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/advertising/guides/services-protocol?view=bingads-13#throttling"},"here")),(0,i.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting started (Airbyte Open Source)"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Microsoft User account with access to at least one Microsoft Advertising account"),(0,i.kt)("li",{parentName:"ul"},"A Microsoft Ads Customer ID"),(0,i.kt)("li",{parentName:"ul"},"Your Microsoft User ID"),(0,i.kt)("li",{parentName:"ul"},"A developer application with access to: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"client ID "),(0,i.kt)("li",{parentName:"ul"},"client secret "),(0,i.kt)("li",{parentName:"ul"},"A developer token "),(0,i.kt)("li",{parentName:"ul"},"Optionally, a tenant ID"))),(0,i.kt)("li",{parentName:"ul"},"A refresh token generated using the above developer application credentials"),(0,i.kt)("li",{parentName:"ul"},"(Optional) Ad Account IDs you want to access, if you want to limit replication to specific ad accounts")),(0,i.kt)("h3",{id:"setup-guide"},"Setup Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a developer application using the instructions for ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-register?view=bingads-13"},"registering an application")," in Azure portal"),(0,i.kt)("li",{parentName:"ul"},"Perform ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-consent?view=bingads-13l"},"these steps")," to get auth code, and use that to ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-get-tokens?view=bingads-13"},"get a refresh token"),". For reference, the full authentication process described ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#access-token"},"here"),". Be aware that the refresh token will expire in 90 days. You need to repeat the auth process to get a new refresh token."),(0,i.kt)("li",{parentName:"ul"},"Find your Microsoft developer token by following ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-developer-token"},"these instructions")),(0,i.kt)("li",{parentName:"ul"},"Find your customer ID and User ID by visiting the following URL: ",(0,i.kt)("a",{parentName:"li",href:"https://ui.ads.microsoft.com/campaign/Campaigns.m"},"https://ui.ads.microsoft.com/campaign/Campaigns.m")," then copying the CID & UID parameters from the URL in the address bar. For example, once you visit the URL above, you'll notice it will have changed to an address of the form ",(0,i.kt)("a",{parentName:"li",href:"https://ui.ads.microsoft.com/campaign/vnext/overview?uid=USER_ID&cid=CUSTOMER_ID&aid=180534868"},"https://ui.ads.microsoft.com/campaign/vnext/overview?uid=USER_ID&cid=CUSTOMER_ID&aid=180534868")," -- the customer ID is the value in the part of the URL that looks like ",(0,i.kt)("inlineCode",{parentName:"li"},"cid=THIS_IS_THE_CUSTOMER_ID&"),", and the user ID is the value in front of ",(0,i.kt)("inlineCode",{parentName:"li"},"uid")," e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"uid=THIS_IS_THE_USER_ID&"),". "),(0,i.kt)("li",{parentName:"ul"},"Optionally, if you want to replicate data from specific ad account IDs (you can configure the Bing Ads connector to replicate data from all accounts you have access to, or only from some), then also grab the account IDs you want by visiting the ",(0,i.kt)("a",{parentName:"li",href:"https://ui.ads.microsoft.com/campaign/vnext/accounts/performance"},"Accounts Summary")," page, clicking on each of the accounts you want under the ",(0,i.kt)("inlineCode",{parentName:"li"},"Account name")," column, then repeating the process described earlier to get the ",(0,i.kt)("inlineCode",{parentName:"li"},"aid")," parameter in the URL that looks like ",(0,i.kt)("inlineCode",{parentName:"li"},"aid=ACCOUNT_ID&"),". You'll need to do this process once for each account from which you want to replicate data. "),(0,i.kt)("li",{parentName:"ul"},"Optionally, if your oauth app lives under a custom tenant which cannot use Microsoft's recommended ",(0,i.kt)("inlineCode",{parentName:"li"},"common")," tenant, make sure to get the tenant ID ready for input when configuring the connector. The tenant will be used in the auth URL e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://login.microsoftonline.com/<tenant>/oauth2/v2.0/authorize"),".")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11652"},"11652")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rebump attempt after DockerHub failure at registring the 0.1.4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11311"},"11311")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added optional Redirect URI & Tenant ID to spec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9510"},"9510")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed broken dependency that blocked connector's operations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"8429")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5750"},"5750")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added reporting streams",")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4911"},"4911")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial release supported core streams ","(","Accounts, Campaigns, Ads, AdGroups",")")))))}m.isMDXComponent=!0}}]);