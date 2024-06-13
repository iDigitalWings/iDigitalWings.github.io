import{_ as e,a as i,o as a,aj as l}from"./chunks/framework.Ba_Ek9Jm.js";const k=JSON.parse('{"title":"服务治理","description":"","frontmatter":{"title":"服务治理","date":"2022-04-20T00:00:00.000Z","tags":["架构"],"category":["架构"]},"headers":[],"relativePath":"posts/2022/04/2022-04-20-service-governance.md","filePath":"posts/2022/04/2022-04-20-service-governance.md","lastUpdated":1718173059000}'),o={name:"posts/2022/04/2022-04-20-service-governance.md"},r=l('<h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><h3 id="wikipedia" tabindex="-1">Wikipedia <a class="header-anchor" href="#wikipedia" aria-label="Permalink to &quot;Wikipedia&quot;">​</a></h3><p>服务治理（Service Governance）<a href="https://en.wikipedia.org/wiki/Service_governance" target="_blank" rel="noreferrer">Wikipedia定义</a>如下：</p><blockquote><p>Service governance is a means of achieving good corporate governance through managing internal corporate services across and throughout an enterprise.</p></blockquote><blockquote><p>服务治理是通过管理整个企业的内部公司服务来实现良好公司治理的一种手段。</p></blockquote><h3 id="igiglobal" tabindex="-1">IGIGlobal <a class="header-anchor" href="#igiglobal" aria-label="Permalink to &quot;IGIGlobal&quot;">​</a></h3><p><a href="https://www.igi-global.com/dictionary/service-governance/26614" target="_blank" rel="noreferrer">IGIGlobal定义</a></p><blockquote><p>The processes and mechanisms needed to coordinate and manage the use of IT-related activities and resources to meet the operative and strategic goals of the company providing the services.</p></blockquote><blockquote><p>协调和管理IT相关的活动和资源使用所需的流程和机制， 以满足提供服务的公司的运营和战略目标。</p></blockquote><p>来源：《<a href="https://www.igi-global.com/chapter/semantic-modelling-resource-dependability-sla/60896" target="_blank" rel="noreferrer">Semantic Modelling of Resource Dependability for SLA-Based Service Governance</a>》 By Martin Hall-May.</p><h3 id="soa-governance" tabindex="-1">SOA Governance <a class="header-anchor" href="#soa-governance" aria-label="Permalink to &quot;SOA Governance&quot;">​</a></h3><p><a href="https://en.wikipedia.org/wiki/SOA_governance" target="_blank" rel="noreferrer">SOA Governance Wikipedia 的定义</a>：</p><blockquote><p>SOA Governance is a set of processes used for activities related to exercising control over services in a service-oriented architecture (SOA)</p></blockquote><blockquote><p>综上所述服务治理目的是为了实现公司目标，而采用的流程、机制、手段。 从技术上看，他包含一些最佳实践、架构原则、流程、技术等，涵盖了 IT过程的多个方面。</p></blockquote><p>现阶段，服务治理我们一般指微服务治理。下面具体讲一下都有哪些需要考虑的地方。</p><h2 id="元数据管理" tabindex="-1">元数据管理 <a class="header-anchor" href="#元数据管理" aria-label="Permalink to &quot;元数据管理&quot;">​</a></h2><p>当 IT 规模变得庞大的时候，服务元数据本身的管理也编程一个挑战。元数据包含：</p><ul><li>服务名称</li><li>服务描述</li><li>服务功能（模块、接口等信息）</li><li>服务依赖</li><li>等</li></ul><h3 id="注册与发现" tabindex="-1">注册与发现 <a class="header-anchor" href="#注册与发现" aria-label="Permalink to &quot;注册与发现&quot;">​</a></h3><p>单体服务拆分为微服务后，如果微服务之间存在调用，就需要得到目标服务的服务地址， 也就是微服务治理的<strong>服务发现</strong>，服务发现基于服务元数据管理。</p><p>现在常用的方案，是将所有服务信息都存储在<strong>服务注册中心</strong>， 而将服务信息存储到服务注册中心的动作即是<strong>服务注册</strong>。</p><p>常见的服务注册中心有：</p><ul><li>Consul</li><li>Nacos</li><li>Eureka</li><li>Zookeeper</li></ul><h2 id="配置中心" tabindex="-1">配置中心 <a class="header-anchor" href="#配置中心" aria-label="Permalink to &quot;配置中心&quot;">​</a></h2><p><strong>服务注册中心</strong>一般不管理中的配置数据，比如数据库连接等。当琳琳种种的 配置信息变得复杂难以维护之后，配置中心的需求就应运而生。</p><p>配置中心管理服务的配置，一般支持多服务、多 Profile、多环境的配置管理。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在云原生的场景下，配置中心的功能被越来弱化，逐渐被自动化平台或编排工具代替， 比如 Kubernetes 的 ConfigMap、Secret 等原生概念便更适合进行配置管理。</p></div><p>常见的配置中心有：</p><ul><li>Spring Cloud Config</li><li>Apollo</li><li>Nacos</li><li>Etcd</li></ul><h2 id="服务-mock" tabindex="-1">服务 Mock <a class="header-anchor" href="#服务-mock" aria-label="Permalink to &quot;服务 Mock&quot;">​</a></h2><p>微服务场景下，复杂的服务依赖和团队开发进度不同，Mock 服务让开发不再依赖下游 接口开发完成，便可进行上有接口开发测试。</p><p>Mock一般引入相关 Mock 框架。一些有用的工具：</p><ul><li>Wiremock</li><li>MockServer</li><li>Mockito</li><li>YApi</li><li>EasyMock</li><li>Taobao RAP2</li><li>Netease Nei</li><li>Metersphere</li><li>Apifox(国产 SaaS） <ul><li>集成了微信、飞书、钉钉、Github、Gitlab API</li></ul></li><li>Postman</li></ul><h2 id="压力测试" tabindex="-1">压力测试 <a class="header-anchor" href="#压力测试" aria-label="Permalink to &quot;压力测试&quot;">​</a></h2><p>为了确保性能，服务压测是保证线上服务稳定运行的必要步骤。常见的工具有：</p><ul><li>JMeter</li><li>Metersphere (压测能力基于 JMeter)</li><li>Grafana k6 <ul><li>可将 Postman 的 Collection 转为 k6 脚本</li><li><a href="https://k6.io/blog/comparing-best-open-source-load-testing-tools/" target="_blank" rel="noreferrer">压测工具对比</a></li></ul></li></ul><p>云服务厂商，比如阿里云，也会提供全链路压测服务、流量录制回放等功能。</p><h2 id="自动化测试" tabindex="-1">自动化测试 <a class="header-anchor" href="#自动化测试" aria-label="Permalink to &quot;自动化测试&quot;">​</a></h2><p>自动化的回归测试，可以节省人工的重复测试，保证业务的正确性。</p><p>常见的自动化测试工具有：</p><ul><li>Cypress（笔者推荐）</li><li>Selenium（老牌）</li><li>Playwright</li><li>Puppeteer</li></ul><h2 id="流量管理" tabindex="-1">流量管理 <a class="header-anchor" href="#流量管理" aria-label="Permalink to &quot;流量管理&quot;">​</a></h2><p>服务流量管理是服务治理的重要部分。流量降级、路由、灰度发布等都和流量管理相关。</p><h3 id="限流" tabindex="-1">限流 <a class="header-anchor" href="#限流" aria-label="Permalink to &quot;限流&quot;">​</a></h3><p>流量暴涨的时候，限流可避免请求超过服务器承受的极限，而造成的系统崩溃，所导致的服务不可用。</p><p>限流指标有：QPS、总并发数、并发线程数、IP 白名单等。</p><p>限流的组件或工具有：</p><ul><li>Sentinel</li><li>Resilience4j</li><li>Hystrix</li></ul><p>支持 Service Mesh 的比如 Istio 也都有限流等流量管理能力。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>只有2C 的业务或者开放API 才有限流的需求（突发流量），企业应用的管理应用流量、 服务域内部微服务调用的流量应该保证足够的可用性，没有必要做限流处理。</p><p>限流可以从服务集群、不同站点或路由、某个（某类）API 来做不同颗粒度的管理。</p></div><h3 id="熔断" tabindex="-1">熔断 <a class="header-anchor" href="#熔断" aria-label="Permalink to &quot;熔断&quot;">​</a></h3><p>熔断应对<strong>服务血崩</strong>的一种自我保护机制：</p><ul><li>当下游的目标服务因为某种原因突然变得不可用或响应过慢，上游服务为了保证自己整体服务的可用性， 不再继续调用目标服务，直接返回，快速释放资源。如果目标服务情况好转则恢复调用。</li></ul><p>限流和熔断都是为了保护当前服务自身的可用性，</p><ul><li>但限流是为了防止上游服务调用量过大从而压垮当前服务，</li><li>熔断则是为了避免下游服务出现故障时引发级联故障。</li></ul><p>上面是理论的设计，从实现上来说，流量管理组件都会提供限流、降级、熔断管理。</p><h3 id="降级" tabindex="-1">降级 <a class="header-anchor" href="#降级" aria-label="Permalink to &quot;降级&quot;">​</a></h3><p>服务降级一般是指在服务器压力剧增的时候， 根据实际业务使用情况以及流量， 对一些服务和页面有策略的不处理或者用一种简单的方式进行处理， 从而释放服务器资源的资源以保证核心业务的正常高效运行。</p><p>从实现上来说，流量管理组件都会提供限流、降级、熔断管理。</p><h2 id="高可用" tabindex="-1">高可用 <a class="header-anchor" href="#高可用" aria-label="Permalink to &quot;高可用&quot;">​</a></h2><p>高可用(<code>High Availability</code>)也是微服务治理中必须考虑的因素， 通常指：通过设计来提升系统可以正常提供服务的时间、减少系统不能提供服务的时间。</p><h3 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h3><p>负载均衡是高可用的常见手段之一。良好的服务设计要求服务是无状态的，可以横向扩展， 通过负载均衡组件来提高可用性。</p><p>负载均衡分为客户端负载均衡和服务端负载均衡：</p><ul><li>客户端负载均衡：调用方维护服务地址列表，选择合适的服务访问</li><li>服务端负载均衡：被调用方维护服务地址列表，选择合适的服务提供给客户端访问</li></ul><p>客户端负载均衡一般常用于服务调用，常见的组件有：</p><ul><li>Ribbon</li><li>Spring Cloud LoadBalancer</li></ul><p>服务端负载均衡组件有：</p><ul><li>Nginx、OpenResty、Kong、ApiSix</li><li>SpringCloudGateway</li><li>Zuul</li><li>HaProxy</li></ul><p>Kubernetes 和 ServiceMesh 组件也都有自己的负载均衡器。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Kubernetes 下可使用 Service 来进行服务管理，使用其原声的负载均衡能力。</p></div><h2 id="路由管理" tabindex="-1">路由管理 <a class="header-anchor" href="#路由管理" aria-label="Permalink to &quot;路由管理&quot;">​</a></h2><p>路由管理多由网关承载。常见的路由策略有：</p><ul><li>域名</li><li>路径</li><li>IP</li><li>请求（完成更高级的路由，比如用户、灰度标签等） <ul><li>请求头</li><li>参数</li><li>Cookie</li></ul></li></ul><p>常见的网关有：</p><ul><li>Kong</li><li>Emissary-ingress(Ambassador)</li><li>Apisix</li><li>Zuul</li><li>SpringCloudGateway</li><li>Traefik</li><li>Tyk</li><li>Gravitee</li></ul><h2 id="可观测性" tabindex="-1">可观测性 <a class="header-anchor" href="#可观测性" aria-label="Permalink to &quot;可观测性&quot;">​</a></h2><p>微服务由于较单体应用有了更多的部署载体，需要对众多服务间的调用关系、状态有清晰的掌控。 可观测性就包括了</p><ul><li>调用拓扑关系（Service Graph）、</li><li>监控（Metrics）、</li><li>日志（Logging）、</li><li>调用追踪（Trace） 等。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>可观测性之前多在应用内集成，已经升级成使用 Agent 和 Sidecar 的方式集成可观测性的能力。</p></div><h3 id="链路追踪" tabindex="-1">链路追踪 <a class="header-anchor" href="#链路追踪" aria-label="Permalink to &quot;链路追踪&quot;">​</a></h3><p>链路追踪值得一提的是 <code>OpenTelemetry</code>（前身 <code>OpenTracing</code>）。</p><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h2><p>由于微服务本身存在不同版本，在版本更迭过程中，需要对微服务间调用进行控制，以完成微服务版本更迭的平滑。 这一过程中需要根据流量的特征（访问参数等）、百分比向不同版本服务分发， 这也孵化出灰度发布、蓝绿发布、A/B测试等服务治理的细分主题。</p><p>常用的发布策略有：</p><ul><li>灰度发布</li><li>蓝绿发布</li><li>金丝雀发布</li></ul><div class="tip custom-block"><p class="custom-block-title">无损上下线</p><p>发布时还要注意无损上线和无损下线的问题。</p><p>即保证运行时可用的服务列表和发布完成的应用状态保证一致， 不会在发布、扩减容、停止服务时，所有流量都不会受到影响。</p></div><div class="tip custom-block"><p class="custom-block-title">全链路灰度</p><p>灰度发布的下一步是全链路灰度。</p><ul><li>流量的全链路灰度可以通过服务调用框架打标签或 Sidecar 接管流量来实现。</li><li>全链路灰度还涉及数据的全链路，一般我们很少考虑数据全链路灰度，只有到数据不兼容或者需要回滚的时候数据全链路灰度才有意义。</li></ul></div><h2 id="安全" tabindex="-1">安全 <a class="header-anchor" href="#安全" aria-label="Permalink to &quot;安全&quot;">​</a></h2><p>不同微服务承载自身独有的业务职责，对于业务敏感的微服务，需要对其他服务的访问进行认证与鉴权，也就是安全问题。</p><p>安全问题包含：</p><ul><li>服务鉴权、授权</li><li>安全配置</li><li>漏洞扫描防护管理等</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>微服务给我们带来了便利的同时，也提升了整个系统架构的复杂性。好消息是服务治理和云原生的架构 和经验也越来越多，越来越成熟。让很多遥不可及的治理能力让普通企业可以公容易使用。</p><hr><ul><li><a href="https://opensergo.io/" target="_blank" rel="noreferrer">OpenSergo</a></li></ul>',96),t=[r];function n(c,s,p,h,u,d){return a(),i("div",null,t)}const g=e(o,[["render",n]]);export{k as __pageData,g as default};
