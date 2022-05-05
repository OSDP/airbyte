"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5721],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={},l="Step 6: Read Data",p={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/read-data",id:"connector-development/tutorials/cdk-tutorial-python-http/read-data",title:"Step 6: Read Data",description:"Describing schemas is good and all, but at some point we have to start reading data! So let's get to work. But before, let's describe what we're about to do:",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/6-read-data.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/read-data",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/read-data",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/6-read-data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 5: Declare the Schema",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/declare-schema"},next:{title:"Step 7: Use the Connector in Airbyte",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte"}},c={},d=[{value:"Adding incremental sync",id:"adding-incremental-sync",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"step-6-read-data"},"Step 6: Read Data"),(0,s.kt)("p",null,"Describing schemas is good and all, but at some point we have to start reading data! So let's get to work. But before, let's describe what we're about to do:"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"HttpStream")," superclass, like described in the ",(0,s.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/http-streams"},"concepts documentation"),", is facilitating reading data from HTTP endpoints. It contains built-in functions or helpers for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"authentication"),(0,s.kt)("li",{parentName:"ul"},"pagination"),(0,s.kt)("li",{parentName:"ul"},"handling rate limiting or transient errors"),(0,s.kt)("li",{parentName:"ul"},"and other useful functionality")),(0,s.kt)("p",null,"In order for it to be able to do this, we have to provide it with a few inputs:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the URL base and path of the endpoint we'd like to hit"),(0,s.kt)("li",{parentName:"ul"},"how to parse the response from the API"),(0,s.kt)("li",{parentName:"ul"},"how to perform pagination")),(0,s.kt)("p",null,"Optionally, we can provide additional inputs to customize requests:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"request parameters and headers"),(0,s.kt)("li",{parentName:"ul"},"how to recognize rate limit errors, and how long to wait ","(","by default it retries 429 and 5XX errors using exponential backoff",")"),(0,s.kt)("li",{parentName:"ul"},"HTTP method and request body if applicable"),(0,s.kt)("li",{parentName:"ul"},"configure exponential backoff policy")),(0,s.kt)("p",null,"Backoff policy options:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"retry_factor")," Specifies factor for exponential backoff policy ","(","by default is 5",")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"max_retries")," Specifies maximum amount of retries for backoff policy ","(","by default is 5",")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"raise_on_http_errors")," If set to False, allows opting-out of raising HTTP code exception ","(","by default is True",")")),(0,s.kt)("p",null,"There are many other customizable options - you can find them in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/airbyte_cdk/sources/streams/http/http.py"},(0,s.kt)("inlineCode",{parentName:"a"},"airbyte_cdk.sources.streams.http.HttpStream"))," class."),(0,s.kt)("p",null,"So in order to read data from the exchange rates API, we'll fill out the necessary information for the stream to do its work. First, we'll implement a basic read that just reads the last day's exchange rates, then we'll implement incremental sync using stream slicing."),(0,s.kt)("p",null,"Let's begin by pulling data for the last day's rates by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"/latest")," endpoint:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class ExchangeRates(HttpStream):\n    url_base = \"http://api.exchangeratesapi.io/\"\n\n    primary_key = None\n\n    def __init__(self, config: Mapping[str, Any], **kwargs):\n        super().__init__()\n        self.base = config['base']\n        self.access_key = config['access_key']\n\n\n    def path(\n        self, \n        stream_state: Mapping[str, Any] = None, \n        stream_slice: Mapping[str, Any] = None, \n        next_page_token: Mapping[str, Any] = None\n    ) -> str:\n        # The \"/latest\" path gives us the latest currency exchange rates\n        return \"latest\"  \n\n    def request_params(\n            self,\n            stream_state: Mapping[str, Any],\n            stream_slice: Mapping[str, Any] = None,\n            next_page_token: Mapping[str, Any] = None,\n    ) -> MutableMapping[str, Any]:\n        # The api requires that we include access_key as a query param so we do that in this method\n        return {'access_key': self.access_key}\n\n    def parse_response(\n            self,\n            response: requests.Response,\n            stream_state: Mapping[str, Any],\n            stream_slice: Mapping[str, Any] = None,\n            next_page_token: Mapping[str, Any] = None,\n    ) -> Iterable[Mapping]:\n        # The response is a simple JSON whose schema matches our stream's schema exactly, \n        # so we just return a list containing the response\n        return [response.json()]\n\n    def next_page_token(self, response: requests.Response) -> Optional[Mapping[str, Any]]:\n        # The API does not offer pagination, \n        # so we return None to indicate there are no more pages in the response\n        return None\n")),(0,s.kt)("p",null,"This may look big, but that's just because there are lots of ","(","unused, for now",")"," parameters in these methods ","(","those can be hidden with Python's ",(0,s.kt)("inlineCode",{parentName:"p"},"**kwargs"),", but don't worry about it for now",")",'. Really we just added a few lines of "significant" code: 1. Added a constructor ',(0,s.kt)("inlineCode",{parentName:"p"},"__init__")," which stores the ",(0,s.kt)("inlineCode",{parentName:"p"},"base")," currency to query for and the ",(0,s.kt)("inlineCode",{parentName:"p"},"access_key")," used for authentication. 2. ",(0,s.kt)("inlineCode",{parentName:"p"},"return {'access_key': self.access_key}")," to add the ",(0,s.kt)("inlineCode",{parentName:"p"},"?access_key=<access-key-string>")," query parameter to the request based on the ",(0,s.kt)("inlineCode",{parentName:"p"},"access_key")," input by the user. 3. ",(0,s.kt)("inlineCode",{parentName:"p"},"return [response.json()]")," to parse the response from the API to match the schema of our schema ",(0,s.kt)("inlineCode",{parentName:"p"},".json")," file. 4. ",(0,s.kt)("inlineCode",{parentName:"p"},'return "latest"')," to indicate that we want to hit the ",(0,s.kt)("inlineCode",{parentName:"p"},"/latest")," endpoint of the API to get the latest exchange rate data."),(0,s.kt)("p",null,"Let's also pass the config specified by the user to the stream class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def streams(self, config: Mapping[str, Any]) -> List[Stream]:\n    auth = NoAuth()\n    return [ExchangeRates(authenticator=auth, config=config)] \n")),(0,s.kt)("p",null,"We're now ready to query the API!"),(0,s.kt)("p",null,"To do this, we'll need a ",(0,s.kt)("a",{parentName:"p",href:"/understanding-airbyte/beginners-guide-to-catalog"},"ConfiguredCatalog"),". We've prepared one ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/docs/tutorials/http_api_source_assets/configured_catalog.json"},"here")," -- download this and place it in ",(0,s.kt)("inlineCode",{parentName:"p"},"sample_files/configured_catalog.json"),". Then run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"}," python main.py read --config secrets/config.json --catalog sample_files/configured_catalog.json\n")),(0,s.kt)("p",null,"you should see some output lines, one of which is a record from the API:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'"type": "RECORD", "record": {"stream": "exchange_rates", "data": {"success": true, "timestamp": 1651129443, "base": "EUR", "date": "2022-04-28", "rates": {"AED": 3.86736, "AFN": 92.13195, "ALL": 120.627843, "AMD": 489.819318, "ANG": 1.910347, "AOA": 430.073735, "ARS": 121.119674, "AUD": 1.478877, "AWG": 1.895762, "AZN": 1.794932, "BAM": 1.953851, "BBD": 2.140212, "BDT": 91.662775, "BGN": 1.957013, "BHD": 0.396929, "BIF": 2176.669098, "BMD": 1.052909, "BND": 1.461004, "BOB": 7.298009, "BRL": 5.227798, "BSD": 1.060027, "BTC": 2.6717761e-05, "BTN": 81.165435, "BWP": 12.802036, "BYN": 3.565356, "BYR": 20637.011334, "BZD": 2.136616, "CAD": 1.349329, "CDF": 2118.452361, "CHF": 1.021627, "CLF": 0.032318, "CLP": 891.760584, "CNY": 6.953724, "COP": 4171.971894, "CRC": 701.446322, "CUC": 1.052909, "CUP": 27.902082, "CVE": 110.15345, "CZK": 24.499027, "DJF": 188.707108, "DKK": 7.441548, "DOP": 58.321493, "DZD": 152.371647, "EGP": 19.458297, "ERN": 15.793633, "ETB": 54.43729, "EUR": 1, "FJD": 2.274651, "FKP": 0.80931, "GBP": 0.839568, "GEL": 3.20611, "GGP": 0.80931, "GHS": 7.976422, "GIP": 0.80931, "GMD": 56.64554, "GNF": 9416.400803, "GTQ": 8.118402, "GYD": 221.765423, "HKD": 8.261854, "HNL": 26.0169, "HRK": 7.563467, "HTG": 115.545574, "HUF": 377.172734, "IDR": 15238.748216, "ILS": 3.489582, "IMP": 0.80931, "INR": 80.654494, "IQD": 1547.023976, "IRR": 44538.040218, "ISK": 137.457233, "JEP": 0.80931, "JMD": 163.910125, "JOD": 0.746498, "JPY": 137.331903, "KES": 121.87429, "KGS": 88.581418, "KHR": 4286.72178, "KMF": 486.443591, "KPW": 947.617993, "KRW": 1339.837191, "KWD": 0.322886, "KYD": 0.883397, "KZT": 473.770223, "LAK": 12761.755235, "LBP": 1602.661797, "LKR": 376.293562, "LRD": 159.989586, "LSL": 15.604181, "LTL": 3.108965, "LVL": 0.636894, "LYD": 5.031557, "MAD": 10.541225, "MDL": 19.593772, "MGA": 4284.002369, "MKD": 61.553251, "MMK": 1962.574442, "MNT": 3153.317641, "MOP": 8.567461, "MRO": 375.88824, "MUR": 45.165684, "MVR": 16.199478, "MWK": 865.62318, "MXN": 21.530268, "MYR": 4.594366, "MZN": 67.206888, "NAD": 15.604214, "NGN": 437.399752, "NIO": 37.965356, "NOK": 9.824365, "NPR": 129.86672, "NZD": 1.616441, "OMR": 0.405421, "PAB": 1.060027, "PEN": 4.054233, "PGK": 3.73593, "PHP": 55.075028, "PKR": 196.760944, "PLN": 4.698101, "PYG": 7246.992296, "QAR": 3.833603, "RON": 4.948144, "RSD": 117.620172, "RUB": 77.806269, "RWF": 1086.709833, "SAR": 3.949063, "SBD": 8.474149, "SCR": 14.304711, "SDG": 470.649944, "SEK": 10.367719, "SGD": 1.459695, "SHP": 1.45028, "SLL": 13082.391386, "SOS": 609.634325, "SRD": 21.904702, "STD": 21793.085136, "SVC": 9.275519, "SYP": 2645.380032, "SZL": 16.827859, "THB": 36.297991, "TJS": 13.196811, "TMT": 3.685181, "TND": 3.22348, "TOP": 2.428117, "TRY": 15.575532, "TTD": 7.202107, "TWD": 31.082183, "TZS": 2446.960099, "UAH": 32.065033, "UGX": 3773.578577, "USD": 1.052909, "UYU": 43.156886, "UZS": 11895.19696, "VEF": 225143710305.04727, "VND": 24171.62598, "VUV": 118.538204, "WST": 2.722234, "XAF": 655.287181, "XAG": 0.045404, "XAU": 0.000559, "XCD": 2.845538, "XDR": 0.783307, "XOF": 655.293398, "XPF": 118.347299, "YER": 263.490114, "ZAR": 16.77336, "ZMK": 9477.445964, "ZMW": 18.046154, "ZWL": 339.036185}}, "emitted_at": 1651130169364}}\n')),(0,s.kt)("p",null,"There we have it - a stream which reads data in just a few lines of code!"),(0,s.kt)("p",null,"We theoretically ",(0,s.kt)("em",{parentName:"p"},"could")," stop here and call it a connector. But let's give adding incremental sync a shot."),(0,s.kt)("h2",{id:"adding-incremental-sync"},"Adding incremental sync"),(0,s.kt)("p",null,"To add incremental sync, we'll do a few things: "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Pass the ",(0,s.kt)("inlineCode",{parentName:"li"},"start_date")," param input by the user into the stream. "),(0,s.kt)("li",{parentName:"ol"},"Declare the stream's ",(0,s.kt)("inlineCode",{parentName:"li"},"cursor_field"),". "),(0,s.kt)("li",{parentName:"ol"},"Declare the stream's property ",(0,s.kt)("inlineCode",{parentName:"li"},"_cursor_value")," to hold the state value"),(0,s.kt)("li",{parentName:"ol"},"Add ",(0,s.kt)("inlineCode",{parentName:"li"},"IncrementalMixin")," to the list of the ancestors of the stream and implement setter and getter of the ",(0,s.kt)("inlineCode",{parentName:"li"},"state"),"."),(0,s.kt)("li",{parentName:"ol"},"Implement the ",(0,s.kt)("inlineCode",{parentName:"li"},"stream_slices")," method. "),(0,s.kt)("li",{parentName:"ol"},"Update the ",(0,s.kt)("inlineCode",{parentName:"li"},"path")," method to specify the date to pull exchange rates for. "),(0,s.kt)("li",{parentName:"ol"},"Update the configured catalog to use ",(0,s.kt)("inlineCode",{parentName:"li"},"incremental")," sync when we're testing the stream.")),(0,s.kt)("p",null,"We'll describe what each of these methods do below. Before we begin, it may help to familiarize yourself with how incremental sync works in Airbyte by reading the ",(0,s.kt)("a",{parentName:"p",href:"/understanding-airbyte/connections/incremental-append"},"docs on incremental"),"."),(0,s.kt)("p",null,"To keep things concise, we'll only show functions as we edit them one by one."),(0,s.kt)("p",null,"Let's get the easy parts out of the way and pass the ",(0,s.kt)("inlineCode",{parentName:"p"},"start_date"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def streams(self, config: Mapping[str, Any]) -> List[Stream]:\n    auth = NoAuth()\n    # Parse the date from a string into a datetime object\n    start_date = datetime.strptime(config['start_date'], '%Y-%m-%d')\n    return [ExchangeRates(authenticator=auth, config=config, start_date=start_date)]\n")),(0,s.kt)("p",null,"Let's also add this parameter to the constructor and declare the ",(0,s.kt)("inlineCode",{parentName:"p"},"cursor_field"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime, timedelta\nfrom airbyte_cdk.sources.streams import IncrementalMixin\n\n\nclass ExchangeRates(HttpStream, IncrementalMixin):\n    url_base = "http://api.exchangeratesapi.io/"\n    cursor_field = "date"\n    primary_key = "date"\n\n    def __init__(self, config: Mapping[str, Any], start_date: datetime, **kwargs):\n        super().__init__()\n        self.base = config[\'base\']\n        self.access_key = config[\'access_key\']\n        self.start_date = start_date\n        self._cursor_value = None\n')),(0,s.kt)("p",null,"Declaring the ",(0,s.kt)("inlineCode",{parentName:"p"},"cursor_field")," informs the framework that this stream now supports incremental sync. The next time you run ",(0,s.kt)("inlineCode",{parentName:"p"},"python main_dev.py discover --config secrets/config.json")," you'll find that the ",(0,s.kt)("inlineCode",{parentName:"p"},"supported_sync_modes")," field now also contains ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),"."),(0,s.kt)("p",null,"But we're not quite done with supporting incremental, we have to actually emit state! We'll structure our state object very simply: it will be a ",(0,s.kt)("inlineCode",{parentName:"p"},"dict")," whose single key is ",(0,s.kt)("inlineCode",{parentName:"p"},"'date'")," and value is the date of the last day we synced data from. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"{'date': '2021-04-26'}")," indicates the connector previously read data up until April 26th and therefore shouldn't re-read anything before April 26th."),(0,s.kt)("p",null,"Let's do this by implementing the getter and setter for the ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"ExchangeRates")," class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"    @property\n    def state(self) -> Mapping[str, Any]:\n        if self._cursor_value:\n            return {self.cursor_field: self._cursor_value.strftime('%Y-%m-%d')}\n        else:\n            return {self.cursor_field: self.start_date.strftime('%Y-%m-%d')}\n    \n    @state.setter\n    def state(self, value: Mapping[str, Any]):\n       self._cursor_value = datetime.strptime(value[self.cursor_field], '%Y-%m-%d')\n")),(0,s.kt)("p",null,"Update internal state ",(0,s.kt)("inlineCode",{parentName:"p"},"cursor_value")," inside ",(0,s.kt)("inlineCode",{parentName:"p"},"read_records")," method"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"    def read_records(self, *args, **kwargs) -> Iterable[Mapping[str, Any]]:\n        for record in super().read_records(*args, **kwargs):\n            if self._cursor_value:\n                latest_record_date = datetime.strptime(record[self.cursor_field], '%Y-%m-%d')\n                self._cursor_value = max(self._cursor_value, latest_record_date)\n            yield record\n\n")),(0,s.kt)("p",null,'This implementation compares the date from the latest record with the date in the current state and takes the maximum as the "new" state object.'),(0,s.kt)("p",null,"We'll implement the ",(0,s.kt)("inlineCode",{parentName:"p"},"stream_slices")," method to return a list of the dates for which we should pull data based on the stream state if it exists:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"    def _chunk_date_range(self, start_date: datetime) -> List[Mapping[str, Any]]:\n        \"\"\"\n        Returns a list of each day between the start date and now.\n        The return value is a list of dicts {'date': date_string}.\n        \"\"\"\n        dates = []\n        while start_date < datetime.now():\n            dates.append({self.cursor_field: start_date.strftime('%Y-%m-%d')})\n            start_date += timedelta(days=1)\n        return dates\n\n    def stream_slices(self, sync_mode, cursor_field: List[str] = None, stream_state: Mapping[str, Any] = None) -> Iterable[Optional[Mapping[str, Any]]]:\n        start_date = datetime.strptime(stream_state[self.cursor_field], '%Y-%m-%d') if stream_state and self.cursor_field in stream_state else self.start_date\n        return self._chunk_date_range(start_date)\n")),(0,s.kt)("p",null,"Each slice will cause an HTTP request to be made to the API. We can then use the information present in the ",(0,s.kt)("inlineCode",{parentName:"p"},"stream_slice")," parameter ","(","a single element from the list we constructed in ",(0,s.kt)("inlineCode",{parentName:"p"},"stream_slices")," above",")"," to set other configurations for the outgoing request like ",(0,s.kt)("inlineCode",{parentName:"p"},"path")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"request_params"),". For more info about stream slicing, see ",(0,s.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/stream-slices"},"the slicing docs"),"."),(0,s.kt)("p",null,"In order to pull data for a specific date, the Exchange Rates API requires that we pass the date as the path component of the URL. Let's override the ",(0,s.kt)("inlineCode",{parentName:"p"},"path")," method to achieve this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def path(self, stream_state: Mapping[str, Any] = None, stream_slice: Mapping[str, Any] = None, next_page_token: Mapping[str, Any] = None) -> str:\n    return stream_slice['date']\n")),(0,s.kt)("p",null,"With these changes, your implementation should look like the file ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-python-http-tutorial/source_python_http_tutorial/source.py"},"here"),"."),(0,s.kt)("p",null,"The last thing we need to do is change the ",(0,s.kt)("inlineCode",{parentName:"p"},"sync_mode")," field in the ",(0,s.kt)("inlineCode",{parentName:"p"},"sample_files/configured_catalog.json")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"incremental"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'"sync_mode": "incremental",\n')),(0,s.kt)("p",null,"We should now have a working implementation of incremental sync!"),(0,s.kt)("p",null,"Let's try it out:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"python main.py read --config secrets/config.json --catalog sample_files/configured_catalog.json\n")),(0,s.kt)("p",null,"You should see a bunch of ",(0,s.kt)("inlineCode",{parentName:"p"},"RECORD")," messages and ",(0,s.kt)("inlineCode",{parentName:"p"},"STATE")," messages. To verify that incremental sync is working, pass the input state back to the connector and run it again:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"# Save the latest state to sample_files/state.json\npython main.py read --config secrets/config.json --catalog sample_files/configured_catalog.json | grep STATE | tail -n 1 | jq .state.data > sample_files/state.json\n\n# Run a read operation with the latest state message\npython main.py read --config secrets/config.json --catalog sample_files/configured_catalog.json --state sample_files/state.json\n")),(0,s.kt)("p",null,"You should see that only the record from the last date is being synced! This is acceptable behavior, since Airbyte requires at-least-once delivery of records, so repeating the last record twice is OK."),(0,s.kt)("p",null,"With that, we've implemented incremental sync for our connector!"))}m.isMDXComponent=!0}}]);