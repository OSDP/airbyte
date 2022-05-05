"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3360],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85461:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],l={},s="Configuring Airbyte",p={unversionedId:"operator-guides/configuring-airbyte",id:"operator-guides/configuring-airbyte",title:"Configuring Airbyte",description:"This section covers how to configure Airbyte, and the various configuration Airbyte accepts.",source:"@site/../docs/operator-guides/configuring-airbyte.md",sourceDirName:"operator-guides",slug:"/operator-guides/configuring-airbyte",permalink:"/operator-guides/configuring-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/configuring-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Transformations with Airbyte (Part 3/3)",permalink:"/operator-guides/transformation-and-normalization/transformations-with-airbyte"},next:{title:"Sentry Integration",permalink:"/operator-guides/sentry-integration"}},d={},m=[{value:"Docker Deployments",id:"docker-deployments",level:2},{value:"Kubernetes Deployments",id:"kubernetes-deployments",level:2},{value:"Reference",id:"reference",level:2},{value:"Shared",id:"shared",level:3},{value:"Core",id:"core",level:4},{value:"Secrets",id:"secrets",level:4},{value:"Database",id:"database",level:4},{value:"Airbyte Services",id:"airbyte-services",level:4},{value:"Jobs",id:"jobs",level:4},{value:"Logging",id:"logging",level:4},{value:"Worker",id:"worker",level:4},{value:"Scheduler",id:"scheduler",level:4},{value:"Docker-Only",id:"docker-only",level:3},{value:"Kubernetes-Only",id:"kubernetes-only",level:3},{value:"Jobs",id:"jobs-1",level:4},{value:"Jobs specific",id:"jobs-specific",level:4},{value:"Worker",id:"worker-1",level:4},{value:"Logging",id:"logging-1",level:4}],u={toc:m};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-airbyte"},"Configuring Airbyte"),(0,a.kt)("p",null,"This section covers how to configure Airbyte, and the various configuration Airbyte accepts."),(0,a.kt)("p",null,"Configuration is currently via environment variables. See the below section on how to modify these variables."),(0,a.kt)("h2",{id:"docker-deployments"},"Docker Deployments"),(0,a.kt)("p",null,"The recommended way to run an Airbyte Docker deployment is via the Airbyte repo's ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,"To configure the default Airbyte Docker deployment, modify the bundled ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file. The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file injects appropriate variables into\nthe containers."),(0,a.kt)("p",null,"If you want to manage your own docker files, please refer to Airbyte's docker file to ensure applications get the correct variables."),(0,a.kt)("h2",{id:"kubernetes-deployments"},"Kubernetes Deployments"),(0,a.kt)("p",null,"The recommended way to run an Airbyte Kubernetes deployment is via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kustomize")," overlays."),(0,a.kt)("p",null,"We recommend using the overlays in the ",(0,a.kt)("inlineCode",{parentName:"p"},"stable")," directory as these have preset resource limits."),(0,a.kt)("p",null,"To configure the default Airbyte Kubernetes deployment, modify the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," in the respective directory. Each application will consume the appropriate\nenv var from a generated configmap."),(0,a.kt)("p",null,"If you want to manage your own Kube manifests, please refer to the various ",(0,a.kt)("inlineCode",{parentName:"p"},"Kustomize")," overlays for examples."),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"The following are the possible configuration options organised by deployment type and services."),(0,a.kt)("p",null,"Internal-only variables have been omitted for clarity. See ",(0,a.kt)("inlineCode",{parentName:"p"},"Configs.java")," for a full list."),(0,a.kt)("p",null,"Be careful using variables marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"alpha")," as they aren't meant for public consumption."),(0,a.kt)("h3",{id:"shared"},"Shared"),(0,a.kt)("p",null,"The following variables are relevant to both Docker and Kubernetes."),(0,a.kt)("h4",{id:"core"},"Core"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"AIRBYTE_VERSION")," - Defines the Airbyte deployment version."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SPEC_CACHE_BUCKET")," - Defines the bucket for caching specs. This immensely speeds up spec operations. This is updated when new versions are published."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"WORKER_ENVIRONMENT")," - Defines if the deployment is Docker or Kubernetes. Airbyte behaves accordingly."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CONFIG_ROOT")," - Defines the configs directory. Applies only to Docker, and is present in Kubernetes for backward compatibility."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"WORKSPACE_ROOT")," - Defines the Airbyte workspace directory. Applies only to Docker, and is present in Kubernetes for backward compatibility.")),(0,a.kt)("h4",{id:"secrets"},"Secrets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SECRET_STORE_GCP_PROJECT_ID")," - Defines the GCP Project to store secrets in. Alpha support."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SECRET_STORE_GCP_CREDENTIALS")," - Define the JSON credentials used to read/write Airbyte Configuration to Google Secret Manager. These credentials must have Secret Manager Read/Write access. Alpha support."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SECRET_PERSISTENCE")," - Defines the Secret Persistence type. Defaults to NONE. Set to GOOGLE_SECRET_MANAGER to use Google Secret Manager. Set to TESTING_CONFIG_DB_TABLE to use the database as a test. Alpha support. Undefined behavior will result if this is turned on and then off.")),(0,a.kt)("h4",{id:"database"},"Database"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_USER")," - Define the Jobs Database user."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_PASSWORD")," - Define the Jobs Database password."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," - Define the Jobs Database url in the form of ",(0,a.kt)("inlineCode",{parentName:"li"},"jdbc:postgresql://${DATABASE_HOST}:${DATABASE_PORT/${DATABASE_DB}"),". Do not include username or password."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOBS_DATABASE_INITIALIZATION_TIMEOUT_MS")," - Define the total time to wait for the Jobs Database to be initialized. This includes migrations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CONFIG_DATABASE_USER")," - Define the Configs Database user. Defaults to the Jobs Database user if empty."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CONFIG_DATABASE_PASSWORD")," - Define the Configs Database password. Defaults to the Jobs Database password if empty."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CONFIG_DATABASE_URL")," - Define the Configs Database url in the form of ",(0,a.kt)("inlineCode",{parentName:"li"},"jdbc:postgresql://${DATABASE_HOST}:${DATABASE_PORT/${DATABASE_DB}"),". Defaults to the Jobs Database url if empty."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CONFIG_DATABASE_INITIALIZATION_TIMEOUT_MS")," - Define the total time to wait for the Configs Database to be initialized. This includes migrations."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"RUN_DATABASE_MIGRATION_ON_STARTUP")," - Define if the Bootloader should run migrations on start up.")),(0,a.kt)("h4",{id:"airbyte-services"},"Airbyte Services"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TEMPORAL_HOST")," - Define the url where Temporal is hosted at. Please include the port. Airbyte services use this information."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"INTERNAL_API_HOST")," - Define the url where the Airbyte Server is hosted at. Please include the port. Airbyte services use this information."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"WEBAPP_URL")," - Define the url the Airbyte Webapp is hosted at. Please include the port. Airbyte services use this information.")),(0,a.kt)("h4",{id:"jobs"},"Jobs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SYNC_JOB_MAX_ATTEMPTS")," - Define the number of attempts a sync will attempt before failing."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SYNC_JOB_MAX_TIMEOUT_DAYS")," - Define the number of days a sync job will execute for before timing out."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_CPU_REQUEST")," -  Define the job container's minimum CPU usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_CPU_LIMIT")," - Define the job container's maximum CPU usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_MEMORY_REQUEST")," - Define the job container's minimum RAM usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_MAIN_CONTAINER_MEMORY_LIMIT")," - Define the job container's maximum RAM usage. Units follow either Docker or Kubernetes, depending on the deployment. Defaults to none.")),(0,a.kt)("h4",{id:"logging"},"Logging"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"LOG_LEVEL")," - Define log levels. Defaults to INFO. This value is expected to be one of the various Log4J log levels.")),(0,a.kt)("h4",{id:"worker"},"Worker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_SPEC_WORKERS")," - Define the maximum number of Spec workers each Airbyte Worker container can support. Defaults to 5."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_CHECK_WORKERS")," - Define the maximum number of Check workers each Airbyte Worker container can support. Defaults to 5."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_SYNC_WORKERS")," - Define the maximum number of Sync workers each Airbyte Worker container can support. Defaults to 5."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MAX_DISCOVER_WORKERS")," - Define the maximum number of Discover workers each Airbyte Worker container can support. Defaults to 5."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SENTRY_DSN")," - Define the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.sentry.io/product/sentry-basics/dsn-explainer/"},"DSN")," of necessary Sentry instance. Defaults to empty. Integration with Sentry is explained ",(0,a.kt)("a",{parentName:"li",href:"/operator-guides/sentry-integration"},"here")," ")),(0,a.kt)("h4",{id:"scheduler"},"Scheduler"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SUBMITTER_NUM_THREADS")," - Define the maximum number of concurrent jobs the Scheduler schedules. Defaults to 5."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MINIMUM_WORKSPACE_RETENTION_DAYS")," - Defines the minimum configuration file age for sweeping. The Scheduler will do it's best to now sweep files younger than this. Defaults to 1 day."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MAXIMUM_WORKSPACE_RETENTION_DAYS")," - Defines the oldest un-swept configuration file age. Files older than this will definitely be swept. Defaults to 60 days."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"MAXIMUM_WORKSPACE_SIZE_MB")," - Defines the workspace size sweeping will continue until. Defaults to 5GB.")),(0,a.kt)("h3",{id:"docker-only"},"Docker-Only"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"WORKSPACE_DOCKER_MOUNT")," - Defines the name of the Airbyte docker volume."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DOCKER_NETWORK")," - Defines the docker network the new Scheduler launches jobs on."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"LOCAL_DOCKER_MOUNT"),' - Defines the name of the docker mount that is used for local file handling. On Docker, this allows connector pods to interact with a volume for "local file" operations.')),(0,a.kt)("h3",{id:"kubernetes-only"},"Kubernetes-Only"),(0,a.kt)("h4",{id:"jobs-1"},"Jobs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_TOLERATIONS")," - Define one or more Job pod tolerations. Tolerations are separated by ';'. Each toleration contains k=v pairs mentioning some/all of key, effect, operator and value and separated by ",(0,a.kt)("inlineCode",{parentName:"li"},","),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_NODE_SELECTORS")," - Define one or more Job pod node selectors. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2"),". It is the pod node selectors of the sync job and the default pod node selectors fallback for others jobs."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_ANNOTATIONS")," - Define one or more Job pod annotations. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2"),". It is the pod annotations of the sync job and the default pod annotations fallback for others jobs."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_MAIN_CONTAINER_IMAGE_PULL_POLICY")," - Define the Job pod connector image pull policy."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_MAIN_CONTAINER_IMAGE_PULL_SECRET")," - Define the Job pod connector image pull secret. Useful when hosting private images."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_SIDECAR_CONTAINER_IMAGE_PULL_POLICY")," - Define the image pull policy on the sidecar containers in the Job pod. Useful when there are cluster policies enforcing to always pull."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_SOCAT_IMAGE")," - Define the Job pod socat image."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_BUSYBOX_IMAGE")," - Define the Job pod busybox image."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_CURL_IMAGE")," - Define the Job pod curl image pull."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_NAMESPACE")," - Define the Kubernetes namespace Job pods are created in.")),(0,a.kt)("h4",{id:"jobs-specific"},"Jobs specific"),(0,a.kt)("p",null,"A job specific variable overwrites the default sync job variable defined above."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SPEC_JOB_KUBE_NODE_SELECTORS")," - Define one or more pod node selectors for the spec job. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CHECK_JOB_KUBE_NODE_SELECTORS")," - Define one or more pod node selectors for the check job. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2")," "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DISCOVER_JOB_KUBE_NODE_SELECTORS")," - Define one or more pod node selectors for the discover job. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"SPEC_JOB_KUBE_ANNOTATIONS")," - Define one or more pod annotations for the spec job. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"CHECK_JOB_KUBE_ANNOTATIONS")," - Define one or more pod annotations for the check job. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DISCOVER_JOB_KUBE_ANNOTATIONS")," - Define one or more pod annotations for the discover job. Each k=v pair is separated by a ",(0,a.kt)("inlineCode",{parentName:"li"},","),". For example: ",(0,a.kt)("inlineCode",{parentName:"li"},"key1=value1,key2=value2"))),(0,a.kt)("h4",{id:"worker-1"},"Worker"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TEMPORAL_WORKER_PORTS")," - Define the local ports the Airbyte Worker pod uses to connect to the various Job pods. Port 9001 - 9040 are exposed by default in the Kustomize deployments.")),(0,a.kt)("h4",{id:"logging-1"},"Logging"),(0,a.kt)("p",null,"Note that Airbyte does not support logging to separate Cloud Storage providers."),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/deploying-airbyte/on-kubernetes#configure-logs"},"here")," for more information on configuring Kuberentes logging."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"GCS_LOG_BUCKET")," - Define the GCS bucket to store logs."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"S3_BUCKET")," - Define the S3 bucket to store logs."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"S3_RREGION")," - Define the S3 region the S3 log bucket is in."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"S3_AWS_KEY")," - Define the key used to access the S3 log bucket."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"S3_AWS_SECRET")," - Define the secret used to access the S3 log bucket."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"S3_MINIO_ENDPOINT")," - Define the url Minio is hosted at so Airbyte can use Minio to store logs."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"S3_PATH_STYLE_ACCESS")," - Set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if using Minio to store logs. Empty otherwise.")))}c.isMDXComponent=!0}}]);