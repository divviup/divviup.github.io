"use strict";(self.webpackChunkpublic_docs=self.webpackChunkpublic_docs||[]).push([[727],{6291:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(5893),s=r(1151);const n={sidebar_position:2},i="How It Works",o={id:"how-it-works",title:"How It Works",description:"Learn how Divvi Up works and how it protects privacy.",source:"@site/docs/how-it-works.md",sourceDirName:".",slug:"/how-it-works",permalink:"/how-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/divviup/public-docs/tree/main/docs/how-it-works.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Product Documentation",permalink:"/product-documentation/"}},h={},l=[{value:"Breakdown",id:"breakdown",level:2},{value:"Step 0: Subscriber sets up Divvi Up",id:"step-0-subscriber-sets-up-divvi-up",level:3},{value:"Step 1: Client generates measurements",id:"step-1-client-generates-measurements",level:3},{value:"Step 2: Client shards the measurement",id:"step-2-client-shards-the-measurement",level:3},{value:"Step 3: Client sends shares to the aggregators",id:"step-3-client-sends-shares-to-the-aggregators",level:3},{value:"Step 4: Aggregators perform aggregation",id:"step-4-aggregators-perform-aggregation",level:3},{value:"Step 5: Subscriber collects aggregate measurements",id:"step-5-subscriber-collects-aggregate-measurements",level:3}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"how-it-works",children:"How It Works"}),"\n",(0,a.jsx)(t.p,{children:"Learn how Divvi Up works and how it protects privacy."}),"\n",(0,a.jsx)(t.h2,{id:"breakdown",children:"Breakdown"}),"\n",(0,a.jsx)(t.p,{children:"Divvi Up ingests measurements and aggregates them, while protecting the privacy\nof each individual measurement. This can be broadly broken down into several\nsteps, described in the following sections."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{src:r(4916).Z+"#gh-dark-mode-only",width:"6714",height:"1693"}),"\n",(0,a.jsx)(t.img,{src:r(4350).Z+"#gh-light-mode-only",width:"1477",height:"382"})]}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/draft-ietf-ppm-dap/",children:"Distributed Aggregation Protocol (DAP)"})," for a highly detailed\nspecification of the protocol that underpins Divvi Up."]}),"\n",(0,a.jsx)(t.h3,{id:"step-0-subscriber-sets-up-divvi-up",children:"Step 0: Subscriber sets up Divvi Up"}),"\n",(0,a.jsx)(t.p,{children:"Subscribers are users of Divvi Up, such as app developers, who wish to collect\nquantitative measurements about their end-user applications."}),"\n",(0,a.jsxs)(t.p,{children:["The subscriber chooses a DAP client library, which is used to interact with any\nDAP-compatible measurements aggregator, such as the aggregators provided by\nDivvi Up and its partners. Client libraries for ",(0,a.jsx)(t.a,{href:"https://crates.io/crates/janus_client",children:"Rust\n(janus_client)"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/divviup/divviup-ts",children:"TypeScript (divviup-ts)"})," are\navailable."]}),"\n",(0,a.jsx)(t.p,{children:"For each measurement the subscriber wishes to aggregate, the subscriber creates\na task. A task contains metadata about how the measurement will be made, which\naggregators will be used, and which aggregation function to use. The task's\nparameters are shared with both aggregators."}),"\n",(0,a.jsx)(t.h3,{id:"step-1-client-generates-measurements",children:"Step 1: Client generates measurements"}),"\n",(0,a.jsx)(t.p,{children:"The subscriber writes and deploys app functionality that takes measurements\ncorresponding to each task. They invoke a DAP client library and provide some of\nthe task parameters to it, such as the task identifier, measurement type, and\nthe aggregator servers being used."}),"\n",(0,a.jsx)(t.p,{children:"For each measurement, the subsequent steps are performed."}),"\n",(0,a.jsx)(t.h3,{id:"step-2-client-shards-the-measurement",children:"Step 2: Client shards the measurement"}),"\n",(0,a.jsx)(t.p,{children:"The app uses the DAP client library to randomly shard the measurement into two\nparts, known as report shares. One report share is for the leader aggregator,\nand the other for the helper aggregator."}),"\n",(0,a.jsx)(t.p,{children:"The client library encrypts each share with a public key advertised by the\nrespective aggregator."}),"\n",(0,a.jsx)(t.h3,{id:"step-3-client-sends-shares-to-the-aggregators",children:"Step 3: Client sends shares to the aggregators"}),"\n",(0,a.jsx)(t.p,{children:"The DAP client library sends the report shares via HTTPS to the leader\naggregator."}),"\n",(0,a.jsx)(t.p,{children:"The leader relays the helper's share to the helper. Because the helper's report\nshare is encrypted to the helper, the leader cannot read it or reconstitute the\noriginal measurement."}),"\n",(0,a.jsx)(t.p,{children:"Each aggregator is operated by different organizations. Often, Divvi Up will act\nas the leader, while another organization operates as a helper."}),"\n",(0,a.jsx)(t.p,{children:"Crucially, these organizations are non-colluding. They don't directly share\nreport shares or otherwise conspire to defeat the protocol. DAP guarantees that\nas long as at least one of the aggregators operates according to the protocol,\nthe privacy of each individual measurement will be protected."}),"\n",(0,a.jsx)(t.p,{children:"If you don't wish to use any of the already-available third-party organizations\nthat Divvi Up partners with, you can self-host your own helper aggregator."}),"\n",(0,a.jsx)(t.h3,{id:"step-4-aggregators-perform-aggregation",children:"Step 4: Aggregators perform aggregation"}),"\n",(0,a.jsxs)(t.p,{children:["Both aggregators work together to reject out-of-range or invalid measurements,\nwithout revealing the report shares to each other and without any knowledge of\nthe originally submitted measurements. They do this by exchanging ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Zero-knowledge_proof",children:"zero\nknowledge proofs (ZKP)"})," based on their report share."]}),"\n",(0,a.jsxs)(t.p,{children:["The principle behind this is ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Secure_multi-party_computation",children:"multi-party computation"}),". The MPC protocol is\ndescribed in DAP and the ZKP cryptography is described in ",(0,a.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/draft-irtf-cfrg-vdaf/",children:"Verifiable\nDistributed Aggregation Functions (VDAF)"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"After validation, each aggregator independently executes the aggregation\nfunction. For most measurement types, this will be summation."}),"\n",(0,a.jsx)(t.p,{children:"At the end of the process, each aggregator will have computed a share of the\noverall aggregate. Neither share reveals information about the final aggregate."}),"\n",(0,a.jsx)(t.p,{children:"Each aggregator stores its aggregate share until the next step."}),"\n",(0,a.jsx)(t.h3,{id:"step-5-subscriber-collects-aggregate-measurements",children:"Step 5: Subscriber collects aggregate measurements"}),"\n",(0,a.jsx)(t.p,{children:"The subscriber operates a collector, which queries each aggregator to collect\nthe aggregate shares. Depending on the query type, this could be a query over a\ntime interval, or for an arbitrary batch of reports."}),"\n",(0,a.jsx)(t.p,{children:"Aggregates often aren't available immediately, depending on the measurement\ntype. The collector will poll the aggregator until it's ready."}),"\n",(0,a.jsx)(t.p,{children:"Each aggregate share is encrypted to the collector. The collector combines the\naggregate shares, yielding the aggregate result, the number of reports included\nin the result, and the time interval that the result spans."}),"\n",(0,a.jsx)(t.p,{children:"The collector only communicates with the leader. The leader relays the helper's\naggregate share to the collector. Because each share is encrypted to the\ncollector, the leader cannot read the aggregate shares or reconstitute the\naggregate."}),"\n",(0,a.jsx)(t.p,{children:"Off-the-shelf collectors that more elegantly handle the collection process and\npresentation of data are currently in development."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},4350:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/how-it-works-light-233bb525a2e810522fa99c3b87ff8b9d.jpg"},4916:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/how-it-works-c07678e2ebf0b7b8dd042ae8ebe15462.png"},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(7294);const s={},n=a.createContext(s);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);