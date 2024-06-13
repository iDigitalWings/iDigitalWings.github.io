import{_ as a,a as e,o as t,aj as i}from"./chunks/framework.Ba_Ek9Jm.js";const s="/assets/gateway.CWIPFrZX.png",r="/assets/cncf-apigateway.9FDHjvTz.png",o="/assets/kong.DmvNrFZp.png",p="/assets/kong-feature.BJdVzTQ_.png",l="/assets/apisix.BtxPaklu.png",n="/assets/apisix-arch.DerwqdVa.png",g="/assets/apisix-plugin-load-precss.CMFAHGYv.png",c="/assets/apisix-plugin-structure.B-VljOxq.png",h="/assets/apisix-plugin-user.B_d6JR-e.png",m="/assets/emmissary-ingress.BFnpQ-Ev.png",d="/assets/gravitee.io-global.fMuj3pzv.png",P="/assets/gravitee.io-platform._nQTyzwK.png",u="/assets/gravitee.io-v3-global.CSJO4pNQ.png",_="/assets/gravitee.io-v3-gateway.BdkvhDnG.png",k="/assets/gravitee.io-v3-api-design.Bkj0T6bU.png",A="/assets/gravitee.io-v3-api-management.BRFaqwKj.png",I="/assets/gravitee.io-v3-api-deployment.DQQp2c52.png",b="/assets/gravitee.io-v3-api-observability.DTo_2efg.png",f="/assets/gravitee.io-v3-access-management.Bh9kXrt2.png",y="/assets/krakend.DCzFOErE.png",v="/assets/krakend-config-online.BcIpf9it.png",q="/assets/tyk._qW7e5IZ.png",x="/assets/tyk-arch.DZWoZCdb.png",w="/assets/tyk-e.BXogk8_n.png",T="/assets/tyk-single.CDWQCtaO.png",C="/assets/tyk-multi.Dqj_TsLF.png",D="/assets/gloo.fSSPrQjC.png",S="/assets/apigee-overview.PtQNw97R.png",M="/assets/apigee-arch.KKgk8PrP.png",G="/assets/traefik-overview.BGXDpaSL.png",B="/assets/traefik-arch.CE9B4GH2.png",j=JSON.parse('{"title":"网关 Gateway","description":"","frontmatter":{"title":"网关 Gateway","date":"2022-05-13T00:00:00.000Z","tags":["架构","gateway"],"category":["架构"]},"headers":[],"relativePath":"posts/2022/05/2022-05-13-traffic-gateway-api-gateway.md","filePath":"posts/2022/05/2022-05-13-traffic-gateway-api-gateway.md","lastUpdated":1718173059000}'),O={name:"posts/2022/05/2022-05-13-traffic-gateway-api-gateway.md"},K=i('<h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>我们常说的网关分为流量网关和业务网关（API网关），前者管理南北流量，后者管理东西流量， 而随着技术发展，流量网关、API 网关的功能正在慢慢的重叠和融合。</p><p><img src="'+s+'" alt=""></p><p>所有的客户端和消费端都通过统一的网关接入微服务， 在网关层处理所有的非业务功能。通常，网关也是提供REST/HTTP的访问API。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>业务网关是对一个业务域的网关，同一个域内的流量不走网关。</p></div><h2 id="网关功能" tabindex="-1">网关功能 <a class="header-anchor" href="#网关功能" aria-label="Permalink to &quot;网关功能&quot;">​</a></h2><p>网关经常需要具备下面能力：</p><ul><li>负载均衡</li><li>路由管理</li></ul><p>而随着最近几年业务流量的增加、设计和协议的多样性，以及微服务架构的升级变迁， API 网关要求更多的功能：</p><ul><li>网关高可用，可随意扩缩容</li><li>云原生</li><li>服务管理：注册发现</li><li>API 管理</li><li>流量管理 <ul><li>限流、限速、熔断</li><li>流量统计、分析</li></ul></li><li>上游服务健康检查</li><li>可观测 <ul><li>日志、追踪、指标的可观测能力</li><li>常对接 Prometheus、Skywalking、Grafana 等组件</li></ul></li><li>协议转化 <ul><li>HTTP、HTTPS、gRPC 协议转换</li></ul></li><li>身份认证 <ul><li>OAuth2.0、OpenID、SAML2.0、Password、LDAP、Token等认证方式</li><li>Auth0、Akta、OneLogin、Dua、PingIdentify、Keycloak、CAS、AzureAD、Idaas 等供应商或软件</li></ul></li><li>Serverless 能力：动态执行用户函数</li></ul><h2 id="网关产品" tabindex="-1">网关产品 <a class="header-anchor" href="#网关产品" aria-label="Permalink to &quot;网关产品&quot;">​</a></h2><p>各大云厂商比如 AWS、Google、Microsoft、Alibaba等都有自己的网关产品。 这些产品多为自己家的云服务SaaS 产品，网关功能齐全，但是如果业务不在一个 供应商下，或者不希望被某个厂商绑定，或者希望根据自己的需求进行网关自定义 开发。那么我们就要把目光放到开源方案上。</p><p>下面是 CNCF Landscape 的 API 网关图选：</p><p><img src="'+r+'" alt=""></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>很多开源软件也都会提供自己的商业软件（比如 Kong）。</p></div><h3 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h3><h3 id="openresty" tabindex="-1">OpenResty <a class="header-anchor" href="#openresty" aria-label="Permalink to &quot;OpenResty&quot;">​</a></h3><h3 id="kong" tabindex="-1">Kong <a class="header-anchor" href="#kong" aria-label="Permalink to &quot;Kong&quot;">​</a></h3><p><a href="https://konghq.com/" target="_blank" rel="noreferrer">Kong</a> 基于 Nginx/OpenResty，知名度比较高的一个API WAN 网关， 有丰富的<a href="https://docs.konghq.com/hub/" target="_blank" rel="noreferrer">插件</a>支持， 也有一些商业组件， 比如 Dashboard 等。也有开源的 Dashboard，不过可能 不支持最新的 API。Kong也开源了API 设计工具 Insomnia。</p><p>Kong 整体架构： <img src="'+o+'" alt=""></p><p>部分特性： <img src="'+p+'" alt=""></p><h3 id="apisix" tabindex="-1">APISIX <a class="header-anchor" href="#apisix" aria-label="Permalink to &quot;APISIX&quot;">​</a></h3><p><a href="https://apisix.apache.org/" target="_blank" rel="noreferrer">APISIX</a> 也是基于 Nginx/OpenResty 的开源网关，也是笔者正在实践的软件。</p><p>有丰富的内置插件支持， 支持 Lua、Python、Go、Java 来编写插件，支持<strong>插件编排</strong> （可视化拖拽组合插件），有配套 Dashboard，支持云原生。</p><p>APISIX Ingress：</p><p><img src="'+l+'" alt=""></p><p>软件架构：</p><p><img src="'+n+'" alt=""></p><p>插件加载流程：</p><p><img src="'+g+'" alt=""></p><p>插件结构：</p><p><img src="'+c+'" alt=""></p><p>插件编排：</p><p><img src="'+h+'" alt=""></p><h3 id="emissary-ingress" tabindex="-1">Emissary-Ingress <a class="header-anchor" href="#emissary-ingress" aria-label="Permalink to &quot;Emissary-Ingress&quot;">​</a></h3><p><a href="https://www.getambassador.io/products/api-gateway/" target="_blank" rel="noreferrer">Emissary-Ingress</a> 是由 CNCF 孵化，基于 Envoy Proxy 的 API 网关，前身是 Ambassador。</p><p>Emissary-Ingress 架构：</p><p><img src="'+m+'" alt=""></p><h3 id="gravitee-io" tabindex="-1">Gravitee.io <a class="header-anchor" href="#gravitee-io" aria-label="Permalink to &quot;Gravitee.io&quot;">​</a></h3><p><a href="https://www.gravitee.io/" target="_blank" rel="noreferrer">Gravitee.io</a> API Management (APIM) 提供完整的 API 管理功能，主要包含下面几部分：</p><ul><li>APIM Gateway</li><li>APIM API</li><li>APIM Console</li><li>APIM Portal</li></ul><p>Gravitee.io 整体架构 V1 (了解历史设计）：</p><p><img src="'+d+'" alt=""></p><p>平台架构 V1 (了解历史设计）：</p><p><img src="'+P+'" alt=""></p><p>Gravitee.io 整体架构 V3 (current)：</p><p><img src="'+u+'" alt=""></p><h4 id="apim-gateway" tabindex="-1">APIM Gateway <a class="header-anchor" href="#apim-gateway" aria-label="Permalink to &quot;APIM Gateway&quot;">​</a></h4><p>APIM Gateway 的核心是可以应用各种 policies 来实现转换、安全验证等特性。</p><p><img src="'+_+'" alt=""></p><h4 id="apim-api" tabindex="-1">APIM API <a class="header-anchor" href="#apim-api" aria-label="Permalink to &quot;APIM API&quot;">​</a></h4><p>APIM API 暴露服务来管理 APIM Console 和 APIM Portal 的 Web UI。</p><h4 id="apim-console" tabindex="-1">APIM Console <a class="header-anchor" href="#apim-console" aria-label="Permalink to &quot;APIM Console&quot;">​</a></h4><p>API 发布者通过 APIM Console 的 Web UI 来发布 API。 管理有也可以通过它来配置平台全局的配置和 Portal 的配置。</p><p>API 设计：</p><p><img src="'+k+'" alt=""></p><p>API 管理：</p><p><img src="'+A+'" alt=""></p><p>API 部署：</p><p><img src="'+I+'" alt=""></p><p>API 可观测性：</p><p><img src="'+b+'" alt=""></p><h4 id="apim-portal" tabindex="-1">APIM Portal <a class="header-anchor" href="#apim-portal" aria-label="Permalink to &quot;APIM Portal&quot;">​</a></h4><p>API 消费者通过 APIM Portal 的 Web UI 来搜索、查看、尝试和订阅已经发布的API， 同时也可以管理他们的应用。</p><p>API 访问管理：</p><p><img src="'+f+'" alt=""></p><h3 id="krakend" tabindex="-1">KrakenD <a class="header-anchor" href="#krakend" aria-label="Permalink to &quot;KrakenD&quot;">​</a></h3><p>无状态的 API 网关，以性能有限设计，宣传说是市场上最快的网关，支持 7w 请求/秒。</p><p><img src="'+y+'" alt=""></p><p>提供一个在线的配置器来生成配置：</p><p><img src="'+v+'" alt=""></p><p>除了高性能、使用简单，也提供了很多开箱即用的功能：</p><ul><li>支持 API 组合，即把多个后端的 API 组合成一个 API 给客户端调用</li><li>GraphQL 支持</li><li>基于 DNS 的服务发现</li><li>可使用DSL和Go或者 Lua 来写扩展</li><li>安全上支持 OAuth、SSL、JWT等</li></ul><h3 id="tyk" tabindex="-1">Tyk <a class="header-anchor" href="#tyk" aria-label="Permalink to &quot;Tyk&quot;">​</a></h3><p><img src="'+q+'" alt=""></p><p>Tyk 也是一个明星网关产品，功能丰富：</p><ul><li>支持 Rest、gRPC、SOAP、GraphQL、TCP 等协议</li><li>支持 OIDC, JWT, bearer Tokens, Basic Auth, Client Certificates 等各种认证</li><li>支持 Swagger 和 OAS2/3 的接口导入</li><li>高性能和横向扩展</li><li>数据转换（请求的各部分都支持转换）</li><li>支持 Python、JavaScript、Go 等语言进行插件扩展</li><li>API 版本</li><li>限流等流量管理</li><li>访问控制、黑白名单</li><li>日志分析等</li></ul><p>Tyk 架构：</p><p><img src="'+x+'" alt=""></p><p>Tyk 生态组件：</p><p><img src="'+w+'" alt=""></p><h4 id="mdcb" tabindex="-1">MDCB <a class="header-anchor" href="#mdcb" aria-label="Permalink to &quot;MDCB&quot;">​</a></h4><p>Tyk’s Multi Data Centre Bridge (MDCB)。</p><p>单数据中心：</p><p><img src="'+T+'" alt=""></p><p>多数据中心：</p><p><img src="'+C+'" alt=""></p><h3 id="gloo" tabindex="-1">Gloo <a class="header-anchor" href="#gloo" aria-label="Permalink to &quot;Gloo&quot;">​</a></h3><p><a href="https://github.com/solo-io/gloo" target="_blank" rel="noreferrer">Gloo</a> 基于 Envoy。</p><p><img src="'+D+'" alt=""></p><h3 id="apigee" tabindex="-1">Apigee <a class="header-anchor" href="#apigee" aria-label="Permalink to &quot;Apigee&quot;">​</a></h3><p>已被 Google 收购。也提供丰富的功能：</p><ul><li>协议转换</li><li>安全</li><li>流量管理</li><li>API分析等</li></ul><p>Google 已经发布下一代产品 <code>Apigee X</code>。</p><p>Apigee Overview：</p><p><img src="'+S+'" alt=""></p><p>Apigee 架构：</p><p><img src="'+M+'" alt=""></p><h3 id="traefik" tabindex="-1">Traefik <a class="header-anchor" href="#traefik" aria-label="Permalink to &quot;Traefik&quot;">​</a></h3><p>Traefik 也是笔者正在使用的网关。主要场景在非 Kubernetes 环境下，除了丰富的功能之外， 它支持 Docker 环境下的服务发现。</p><p><img src="'+G+'" alt=""></p><p>Traefik 架构：</p><p><img src="'+B+'" alt=""></p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>本文描述了网关的概念，并列举了一些笔者了解的网关产品，做了一个粗略的介绍， 大家在自己选择的时候还是要多多实践，挑一个成熟、流行并且自己能掌握的产品。</p><hr><ul><li><a href="https://apisix.apache.org/blog/2021/10/09/apisix-ingress-techblog/" target="_blank" rel="noreferrer">A thoughtful tutorial to get started with Apache APISIX Ingress from concept to practice</a></li><li><a href="https://tyk.io/blog/from-one-to-many-migrating-from-a-single-data-centre-to-multiple-using-tyk-multi-data-centre-bridge/" target="_blank" rel="noreferrer">Migrating from a single data centre to multiple using Tyk Multi Data Centre Bridge</a></li></ul>',107),N=[K];function E(L,R,Q,W,F,X){return t(),e("div",null,N)}const J=a(O,[["render",E]]);export{j as __pageData,J as default};
