"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[267],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25279:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={},c="Connector Development",s={unversionedId:"connector-development/README",id:"connector-development/README",title:"Connector Development",description:"Airbyte supports two types of connectors: Sources and Destinations. A connector takes the form of a Docker image which follows the Airbyte specification.",source:"@site/../docs/connector-development/README.md",sourceDirName:"connector-development",slug:"/connector-development/",permalink:"/connector-development/",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/README.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Custom or New Connector",permalink:"/integrations/custom-connectors"},next:{title:"Python CDK Speedrun: Creating a Source",permalink:"/connector-development/tutorials/cdk-speedrun"}},u={},p=[{value:"Python Connector-Development Kit (CDK)",id:"python-connector-development-kit-cdk",level:2},{value:"C#/.NET Connector-Development Kit (CDK)",id:"cnet-connector-development-kit-cdk",level:2},{value:"TS/JS Connector-Development Kit (Faros AI Airbyte CDK)",id:"tsjs-connector-development-kit-faros-ai-airbyte-cdk",level:2},{value:"The Airbyte specification",id:"the-airbyte-specification",level:2},{value:"Adding a new connector",id:"adding-a-new-connector",level:2},{value:"Requirements",id:"requirements",level:3},{value:"1. Implement &amp; package the connector",id:"1-implement--package-the-connector",level:3},{value:"Sources",id:"sources",level:4},{value:"Destinations",id:"destinations",level:4},{value:"Creating a connector from a template",id:"creating-a-connector-from-a-template",level:4},{value:"2. Integration tests",id:"2-integration-tests",level:3},{value:"3. Document building &amp; testing your connector",id:"3-document-building--testing-your-connector",level:3},{value:"4. Publish the connector",id:"4-publish-the-connector",level:3},{value:"Updating an existing connector",id:"updating-an-existing-connector",level:2},{value:"Publishing a connector",id:"publishing-a-connector",level:2},{value:"The /publish command",id:"the-publish-command",level:3},{value:"Using credentials in CI",id:"using-credentials-in-ci",level:2},{value:"Access CI secrets on GSM",id:"access-ci-secrets-on-gsm",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connector-development"},"Connector Development"),(0,i.kt)("p",null,"Airbyte supports two types of connectors: Sources and Destinations. A connector takes the form of a Docker image which follows the ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification"},"Airbyte specification"),"."),(0,i.kt)("p",null,"To build a new connector in Java or Python, we provide templates so you don't need to start everything from scratch."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: you are not required to maintain the connectors you create.")," The goal is that the Airbyte core team and the community help maintain the connector."),(0,i.kt)("h2",{id:"python-connector-development-kit-cdk"},"Python Connector-Development Kit ","(","CDK",")"),(0,i.kt)("p",null,"You can build a connector very quickly in Python with the ",(0,i.kt)("a",{parentName:"p",href:"cdk-python/"},"Airbyte CDK"),", which generates 75% of the code required for you."),(0,i.kt)("h2",{id:"cnet-connector-development-kit-cdk"},"C#/.NET Connector-Development Kit ","(","CDK",")"),(0,i.kt)("p",null,"You can build a connector very quickly in C# .NET with the ",(0,i.kt)("a",{parentName:"p",href:"cdk-dotnet/"},"Airbyte Dotnet CDK"),", which generates 75% of the code required for you."),(0,i.kt)("h2",{id:"tsjs-connector-development-kit-faros-ai-airbyte-cdk"},"TS/JS Connector-Development Kit ","(","Faros AI Airbyte CDK",")"),(0,i.kt)("p",null,"You can build a connector in TypeScript/JavaScript with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/01b905a38385ca514c2d9c07cc44a8f9a48ce762/docs/connector-development/cdk-faros-js/README.md"},"Faros AI CDK"),", which generates and boostraps most of the code required for HTTP Airbyte sources."),(0,i.kt)("h2",{id:"the-airbyte-specification"},"The Airbyte specification"),(0,i.kt)("p",null,"Before building a new connector, review ",(0,i.kt)("a",{parentName:"p",href:"/understanding-airbyte/airbyte-specification"},"Airbyte's data protocol specification"),"."),(0,i.kt)("h2",{id:"adding-a-new-connector"},"Adding a new connector"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To add a new connector you need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Implement & Package your connector in an Airbyte Protocol compliant Docker image"),(0,i.kt)("li",{parentName:"ol"},"Add integration tests for your connector. At a minimum, all connectors must pass ",(0,i.kt)("a",{parentName:"li",href:"testing-connectors/"},"Airbyte's standard test suite"),", but you can also add your own tests. "),(0,i.kt)("li",{parentName:"ol"},"Document how to build & test your connector"),(0,i.kt)("li",{parentName:"ol"},"Publish the Docker image containing the connector")),(0,i.kt)("p",null,"Each requirement has a subsection below."),(0,i.kt)("h3",{id:"1-implement--package-the-connector"},"1. Implement & package the connector"),(0,i.kt)("p",null,"If you are building a connector in any of the following languages/frameworks, then you're in luck! We provide autogenerated templates to get you started quickly:"),(0,i.kt)("h4",{id:"sources"},"Sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python Source Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://singer.io"},(0,i.kt)("strong",{parentName:"a"},"Singer")),(0,i.kt)("strong",{parentName:"li"},"-based Python Source Connector"),". ",(0,i.kt)("a",{parentName:"li",href:"https://singer.io/"},"Singer.io")," is an open source framework with a large community and many available connectors ","(","known as taps & targets",")",". To build an Airbyte connector from a Singer tap, wrap the tap in a thin Python package to make it Airbyte Protocol-compatible. See the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-github-singer"},"Github Connector")," for an example of an Airbyte Connector implemented on top of a Singer tap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Generic Connector"),": This template provides a basic starting point for any language.")),(0,i.kt)("h4",{id:"destinations"},"Destinations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Java Destination Connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python Destination Connector"))),(0,i.kt)("h4",{id:"creating-a-connector-from-a-template"},"Creating a connector from a template"),(0,i.kt)("p",null,"Run the interactive generator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"cd airbyte-integrations/connector-templates/generator\n./generate.sh\n")),(0,i.kt)("p",null,"and choose the relevant template by using the arrow keys. This will generate a new connector in the ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte-integrations/connectors/<your-connector>")," directory."),(0,i.kt)("p",null,'Search the generated directory for "TODO"s and follow them to implement your connector. For more detailed walkthroughs and instructions, follow the relevant tutorial:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/connector-development/tutorials/cdk-speedrun"},"Speedrun: Building a HTTP source with the CDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"tutorials/cdk-tutorial-python-http/"},"Building a HTTP source with the CDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-python-source"},"Building a Python source")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-python-destination"},"Building a Python destination")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/connector-development/tutorials/building-a-java-destination"},"Building a Java destination"))),(0,i.kt)("p",null,"As you implement your connector, make sure to review the ",(0,i.kt)("a",{parentName:"p",href:"/connector-development/best-practices"},"Best Practices for Connector Development")," guide. Following best practices is not a requirement for merging your contribution to Airbyte, but it certainly doesn't hurt ;",")"),(0,i.kt)("h3",{id:"2-integration-tests"},"2. Integration tests"),(0,i.kt)("p",null,"At a minimum, your connector must implement the acceptance tests described in ",(0,i.kt)("a",{parentName:"p",href:"testing-connectors/"},"Testing Connectors")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: Acceptance tests are not yet available for Python destination connectors. Coming")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/4698"},(0,i.kt)("strong",{parentName:"a"},"soon")),(0,i.kt)("strong",{parentName:"p"},"!")),(0,i.kt)("h3",{id:"3-document-building--testing-your-connector"},"3. Document building & testing your connector"),(0,i.kt)("p",null,"If you're writing in Python or Java, skip this section -- it is provided automatically."),(0,i.kt)("p",null,"If you're writing in another language, please document the commands needed to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build your connector docker image ","(","usually this is just ",(0,i.kt)("inlineCode",{parentName:"li"},"docker build .")," but let us know if there are necessary flags, gotchas, etc..",")"," "),(0,i.kt)("li",{parentName:"ol"},"Run any unit or integration tests ",(0,i.kt)("em",{parentName:"li"},"in a Docker image"),".")),(0,i.kt)("p",null,"Your integration and unit tests must be runnable entirely within a Docker image. This is important to guarantee consistent build environments."),(0,i.kt)("p",null,"When you submit a PR to Airbyte with your connector, the reviewer will use the commands you provide to integrate your connector into Airbyte's build system as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},":airbyte-integrations:connectors:source-<name>:build")," should run unit tests and build the integration's Docker image "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},":airbyte-integrations:connectors:source-<name>:integrationTest")," should run integration tests including Airbyte's Standard test suite.")),(0,i.kt)("h3",{id:"4-publish-the-connector"},"4. Publish the connector"),(0,i.kt)("p",null,"Typically this will be handled as part of code review by an Airbyter. There is a section below on what steps are needed for publishing a connector and will mostly be used by Airbyte employees publishing the connector."),(0,i.kt)("h2",{id:"updating-an-existing-connector"},"Updating an existing connector"),(0,i.kt)("p",null,"The steps for updating an existing connector are the same as for building a new connector minus the need to use the autogenerator to create a new connector. Therefore the steps are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Iterate on the connector to make the needed changes"),(0,i.kt)("li",{parentName:"ol"},"Run tests"),(0,i.kt)("li",{parentName:"ol"},"Add any needed docs updates"),(0,i.kt)("li",{parentName:"ol"},"Create a PR to get the connector published")),(0,i.kt)("h2",{id:"publishing-a-connector"},"Publishing a connector"),(0,i.kt)("p",null,"Once you've finished iterating on the changes to a connector as specified in its ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md"),", follow these instructions to ship the new version of the connector with Airbyte out of the box."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bump the version in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," of the connector ","(",(0,i.kt)("inlineCode",{parentName:"p"},"LABEL io.airbyte.version=X.X.X"),")",". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit a PR containing the changes you made.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"One of Airbyte maintainers will review the change and publish the new version of the connector to Docker hub. Triggering tests and publishing connectors can be done by leaving a comment on the PR with the following format ","(","the PR must be from the Airbyte repo, not a fork",")",":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# to run integration tests for the connector\n# Example: /test connector=connectors/source-hubspot\n/test connector=(connectors|bases)/<connector_name> \n\n# to run integration tests, publish the connector and bump the connector version\n# Example: /publish connector=connectors/source-hubspot\n/publish connector=(connectors|bases)/<connector_name>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"OPTIONAL: Necessary if this is a new connector, or the automated connector version bump fails"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Update/Add the connector definition in the Airbyte connector index to use the new version:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"airbyte-config/init/src/main/resources/seed/source_definitions.yaml")," if it is a source"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"airbyte-config/init/src/main/resources/seed/destination_definitions.yaml")," if it is a destination."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew :airbyte-config:init:processResources")," to generate the seed spec yaml files, and commit the changes to the PR. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/a534bb2a8f29b20e3cc7c52fef1bc3c34783695d/airbyte-config/specs"},"this readme")," for more information.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The new version of the connector is now available for everyone who uses it. Thank you!"))),(0,i.kt)("h3",{id:"the-publish-command"},"The /publish command"),(0,i.kt)("p",null,"Publishing a connector can be done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"/publish")," command as outlined in the above section. The command runs a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/actions/workflows/publish-command.yml"},"github workflow"),", and has the following configurable parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"connector")," - Required. This tells the workflow which connector to publish. e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"connector=connectors/source-amazon-ads")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"repo")," - Defaults to the main airbyte repo. Set this when building connectors from forked repos. e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"repo=userfork/airbyte")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"gitref")," - Defaults to the branch of the PR where the /publish command is run as a comment. If running manually, set this to your branch where you made changes e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"gitref=george/s3-update")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"run-tests")," - Defaults to true. Should always run the tests as part of the publish flow so that if tests fail, the connector is not published."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"comment-id")," - This is automatically filled if you run /publish from a comment and enables the workflow to write back success/fail logs to the git comment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"auto-bump-version")," - Defaults to true, automates the post-publish process of bumping the connector's version in the yaml seed definitions and generating spec.")),(0,i.kt)("h2",{id:"using-credentials-in-ci"},"Using credentials in CI"),(0,i.kt)("p",null,"In order to run integration tests in CI, you'll often need to inject credentials into CI. There are a few steps for doing this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Place the credentials into Google Secret Manager(GSM)"),": Airbyte uses a project 'Google Secret Manager' service as the source of truth for all CI secrets. Place the credentials ",(0,i.kt)("strong",{parentName:"li"},"exactly as they should be used by the connector")," into a GSM secret ",(0,i.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/security/secret-manager?referrer=search&orgonly=true&project=dataline-integration-testing&supportedpurview=organizationId"},"here")," i.e.: it should basically be a copy paste of the ",(0,i.kt)("inlineCode",{parentName:"li"},"config.json")," passed into a connector via the ",(0,i.kt)("inlineCode",{parentName:"li"},"--config")," flag. We use the following naming pattern: ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_<capital source OR destination name>_CREDS")," e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_SOURCE-S3_CREDS")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"SECRET_DESTINATION-SNOWFLAKE_CREDS"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Add the GSM secret's labels"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connector")," (required) -- unique connector's name or set of connectors' names with '_' as delimiter i.e.: ",(0,i.kt)("inlineCode",{parentName:"li"},"connector=source-s3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"connector=destination-snowflake")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"filename")," (optional) -- custom target secret file. Unfortunately Google doesn't use '.' into labels' values and so Airbyte CI scripts will add '.json' to the end automatically. By default secrets will be saved to ",(0,i.kt)("inlineCode",{parentName:"li"},"./secrets/config.json")," i.e: ",(0,i.kt)("inlineCode",{parentName:"li"},"filename=config_auth")," => ",(0,i.kt)("inlineCode",{parentName:"li"},"secrets/config_auth.json")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Save a necessary JSON value")," ",(0,i.kt)("a",{parentName:"li",href:"https://user-images.githubusercontent.com/11213273/146040653-4a76c371-a00e-41fe-8300-cbd411f10b2e.png"},"Example"),"."),(0,i.kt)("li",{parentName:"ol"},"That should be it.")),(0,i.kt)("h4",{id:"access-ci-secrets-on-gsm"},"Access CI secrets on GSM"),(0,i.kt)("p",null,"Access to GSM storage is limited to Airbyte employees. To give an employee permissions to the project:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the permissions' ",(0,i.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/iam?project=dataline-integration-testing"},"page")),(0,i.kt)("li",{parentName:"ol"},"Add a new principal to ",(0,i.kt)("inlineCode",{parentName:"li"},"dataline-integration-testing"),":")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"input their login email"),(0,i.kt)("li",{parentName:"ul"},"select the role ",(0,i.kt)("inlineCode",{parentName:"li"},"Development_CI_Secrets"))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Save")))}d.isMDXComponent=!0}}]);