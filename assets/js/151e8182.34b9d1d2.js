"use strict";(self.webpackChunkpublic_docs=self.webpackChunkpublic_docs||[]).push([[687],{7653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=r(5893),n=r(1151);const o={toc_max_heading_level:4},s="Operational Metrics",a={id:"product-documentation/operational-metrics",title:"Operational Metrics",description:"Observe how Divvi Up is working.",source:"@site/docs/product-documentation/operational-metrics.md",sourceDirName:"product-documentation",slug:"/product-documentation/operational-metrics",permalink:"/product-documentation/operational-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/divviup/public-docs/tree/main/docs/product-documentation/operational-metrics.md",tags:[],version:"current",frontMatter:{toc_max_heading_level:4},sidebar:"docSidebar",previous:{title:"Emulating Categorical Histograms with DAP draft-04",permalink:"/product-documentation/categorical-histogram-dap-04"},next:{title:"References",permalink:"/references/"}},l={},c=[{value:"Upload Metrics",id:"upload-metrics",level:2},{value:"Successful Uploads",id:"successful-uploads",level:3},{value:"Upload Errors",id:"upload-errors",level:3},{value:"Interval Collected Failure",id:"interval-collected-failure",level:4},{value:"Decode Failure",id:"decode-failure",level:4},{value:"Decrypt Failure",id:"decrypt-failure",level:4},{value:"Report Expired Failure",id:"report-expired-failure",level:4},{value:"Outdated Key Failure",id:"outdated-key-failure",level:4},{value:"Report Too Early Failure",id:"report-too-early-failure",level:4},{value:"Task Expired Failure",id:"task-expired-failure",level:4},{value:"API Access",id:"api-access",level:3}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"operational-metrics",children:"Operational Metrics"})}),"\n",(0,i.jsx)(t.p,{children:"Observe how Divvi Up is working."}),"\n",(0,i.jsx)(t.h2,{id:"upload-metrics",children:"Upload Metrics"}),"\n",(0,i.jsx)(t.p,{children:"Tasks provide metrics on reports uploaded to them. Upload metrics are reported\nto Divvi Up via the task's leader aggregator, and represent the leader's ability\nto process the reports."}),"\n",(0,i.jsx)(t.p,{children:"Metrics are monotonic counters that last the lifetime of the task."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"This feature was implemented February 24th, 2024. Tasks created before will\nstart counting after then, rather than for the lifetime of the task."})}),"\n",(0,i.jsx)(t.h3,{id:"successful-uploads",children:"Successful Uploads"}),"\n",(0,i.jsx)(t.p,{children:"Indicates reports successfully ingested by the leader. Reports contributing to\nthis count are eligible for aggregation and collection. Use the rate of this\ncounter to inform many reports this task gets over time."}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_success"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h3,{id:"upload-errors",children:"Upload Errors"}),"\n",(0,i.jsx)(t.p,{children:"Aggregators count some DAP-level errors that lead to report rejection. Rejected\nreports are not processed any further."}),"\n",(0,i.jsx)(t.p,{children:"See sections below for a description and basic troubleshooting steps for each\nerror type."}),"\n",(0,i.jsx)(t.h4,{id:"interval-collected-failure",children:"Interval Collected Failure"}),"\n",(0,i.jsx)(t.p,{children:"Indicates there were reports that had timestamps corresponding to time intervals\nthat were already collected. This is only applicable for tasks with a query type\nof time interval."}),"\n",(0,i.jsx)(t.p,{children:"The rate of this error depends on the accuracy of the client time source, and\nhow long the collector waits after a time interval has passed before collecting\nit. Use the rate to inform how long you should wait before collecting a time\ninterval."}),"\n",(0,i.jsx)(t.p,{children:"Depending on how the client derives the report timestamp, it may not be possible\nto fully eliminate this error."}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_interval_collected"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h4,{id:"decode-failure",children:"Decode Failure"}),"\n",(0,i.jsx)(t.p,{children:"Indicates there were reports that failed to decode from their DAP message\nrepresentation."}),"\n",(0,i.jsx)(t.p,{children:"This is most often caused by task configuration mismatch between the server and\nclient. Ensure that all client-side task parameters match those reported by\nDivvi Up. In particular, check for these common configuration mistakes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Client's DAP library is using an incorrect DAP version, e.g. library supports\nDAP-04 when the task supports DAP-07."}),"\n",(0,i.jsxs)(t.li,{children:["Using the wrong function, e.g. using ",(0,i.jsx)(t.code,{children:"sum"})," when the task is configured for\n",(0,i.jsx)(t.code,{children:"count"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_decode_failure"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h4,{id:"decrypt-failure",children:"Decrypt Failure"}),"\n",(0,i.jsx)(t.p,{children:"Indicates there were reports whose leader share could not be decrypted."}),"\n",(0,i.jsx)(t.p,{children:"This is most often caused by clients using the incorrect HPKE configuration.\nEnsure that the client is using the correct task HPKE key and HPKE keys are not\nbeing permanently cached."}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_decrypt_failure"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h4,{id:"report-expired-failure",children:"Report Expired Failure"}),"\n",(0,i.jsx)(t.p,{children:"Indicates that there were reports whose timestamp was too old. Divvi Up rejects\nreports whose timestamps are more than 2 weeks in the past."}),"\n",(0,i.jsx)(t.p,{children:"Depending on how the client derives the report timestamp, it may not be possible\nto fully eliminate this error."}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_expired"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h4,{id:"outdated-key-failure",children:"Outdated Key Failure"}),"\n",(0,i.jsx)(t.p,{children:"Indicates that there were reports whose leader share was encrypted with an\nunknown or outdated HPKE key."}),"\n",(0,i.jsx)(t.p,{children:"Ensure that the client is using the correct task HPKE key and HPKE keys are not\nbeing permanently cached."}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_outdated_key"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h4,{id:"report-too-early-failure",children:"Report Too Early Failure"}),"\n",(0,i.jsx)(t.p,{children:"Indicates that there were reports whose timestamp was too far in the future.\nDivvi Up rejects reports whose timestamps are more than 60 seconds in the\nfuture."}),"\n",(0,i.jsx)(t.p,{children:"Depending on how the client derives the report timestamp, it may not be possible\nto fully eliminate this error."}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_too_early"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h4,{id:"task-expired-failure",children:"Task Expired Failure"}),"\n",(0,i.jsx)(t.p,{children:"Indicates there were reports sent to this task after it had expired."}),"\n",(0,i.jsx)(t.p,{children:"Use this metric to monitor clients migrating off of the expired task."}),"\n",(0,i.jsxs)(t.p,{children:["Also referred to as ",(0,i.jsx)(t.code,{children:"report_counter_task_expired"})," in the Divvi Up API."]}),"\n",(0,i.jsx)(t.h3,{id:"api-access",children:"API Access"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"GET /tasks/{task_id}"})," to retrieve upload metrics from the API."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var i=r(7294);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);