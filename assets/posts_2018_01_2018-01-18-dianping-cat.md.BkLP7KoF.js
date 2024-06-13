import{_ as a,a as e,o as i,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const C=JSON.parse('{"title":"大众点评开源分布式监控平台 CAT","description":"","frontmatter":{"title":"大众点评开源分布式监控平台 CAT","date":"2010-01-18T00:00:00.000Z","tags":["dianping","cat"]},"headers":[],"relativePath":"posts/2018/01/2018-01-18-dianping-cat.md","filePath":"posts/2018/01/2018-01-18-dianping-cat.md","lastUpdated":1718173059000}'),l={name:"posts/2018/01/2018-01-18-dianping-cat.md"},r=t('<p><a href="https://www.oschina.net/p/cat-dianping" target="_blank" rel="noreferrer">OSChina CAT</a></p><p><a href="https://github.com/dianping/cat" target="_blank" rel="noreferrer">GitHub Cat</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>文章内容来自文末链接</span></span></code></pre></div><p>CAT系统原型和理念来源于eBay的CAL的系统,是一个实时和接近全量的监控系统,它侧重于对Java应用的监控.</p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>点评2011年Net迁移Java时，随着线上应用部署越来越多，规模越来越大，暴露出来的问题也越来越多：</p><ul><li>大量报错，特别是核心服务，需要花很久时间才能定位</li><li>异常日志都需要线上权限登陆线上机器排查，排错时间长</li><li>有些简单的错误定位都非常困难（一次将线上的库配置到了Beta，花了整个通宵排错）</li><li>很多不了了之的问题怀疑是网络问题（从现在看，内网真的很少出问题）</li></ul><p>虽然当时也采用了一些开源的监控和自研的工具。这些工具在单个方面表现还不错，但是整体服务化水平参差不齐、扩展能力相对较弱，工具之间不能互通互联，有时候排查一个问题需要切换多套系统，成本和难度较大，有些问题需要靠人品才能解决。适逢吴其敏从eBay加入大众点评成为首席架构师。</p><h2 id="整体设计" tabindex="-1">整体设计 <a class="header-anchor" href="#整体设计" aria-label="Permalink to &quot;整体设计&quot;">​</a></h2><p>整体设计要求快速发现故障，快速定位故障，辅助进行程序优化。如此，监控系统有如下要求：</p><ul><li>实时处理：信息的价值会随时间锐减，尤其是事故处理过程中。</li><li>全量数据：最开始的设计目标就是全量采集，全量的好处有很多。</li><li>高可用：所有应用都倒下了，需要监控还站着，并告诉工程师发生了什么，做到故障还原和问题定位。</li><li>故障容忍：CAT本身故障不应该影响业务正常运转，CAT挂了，应用不该受影响，只是监控能力暂时减弱。</li><li>高吞吐：要想还原真相，需要全方位地监控和度量，必须要有超强的处理吞吐能力。</li><li>可扩展：支持分布式、跨IDC部署，横向扩展的监控系统。</li><li>不保证可靠：允许消息丢失，这是一个很重要的trade-off，目前CAT服务端可以做到4个9的可靠性，可靠系统和不可靠性系统的设计差别非常大。</li><li>CAT从开发至今，一直秉承着 简单的架构就是最好的架构 原则，主要分为三个模块：CAT-client、CAT-consumer、CAT-home。</li><li>Cat-client 提供给业务以及中间层埋点的底层SDK。</li><li>Cat-consumer 用于实时分析从客户端提供的数据。</li><li>Cat-home 作为用户给用户提供展示的控制端。</li></ul><h2 id="客户端设计" tabindex="-1">客户端设计 <a class="header-anchor" href="#客户端设计" aria-label="Permalink to &quot;客户端设计&quot;">​</a></h2><h3 id="架构设计" tabindex="-1">架构设计 <a class="header-anchor" href="#架构设计" aria-label="Permalink to &quot;架构设计&quot;">​</a></h3><p>客户端设计要求API简单，高可靠性能。无论任何时候都不应该影响业务性能。</p><p>CAT在客户端手机数据使用ThreadLocal，线程存在于客户端线程池中。业务线程执行结束，将监控对象存在一个一步列队中，CAT有个消费线程将列队内的数据异步发给服务端。</p><h3 id="api设计" tabindex="-1">API设计 <a class="header-anchor" href="#api设计" aria-label="Permalink to &quot;API设计&quot;">​</a></h3><p>监控和性能分析涉及的场景如下：</p><ul><li>一段代码的执行时间，一段代码可以是URL执行耗时，也可以是SQL的执行耗时。</li><li>一段代码的执行次数，比如Java抛出异常记录次数，或者一段逻辑的执行次数。</li><li>定期执行某段代码，比如定期上报一些核心指标：JVM内存、GC等指标。</li><li>关键的业务监控指标，比如监控订单数、交易额、支付成功率等。</li></ul><p>在上述领域模型的基础上，CAT设计了自己的几个核心监控对象： Transaction, Event, Heartbeat, Metric.</p><h3 id="序列化和通信" tabindex="-1">序列化和通信 <a class="header-anchor" href="#序列化和通信" aria-label="Permalink to &quot;序列化和通信&quot;">​</a></h3><p>序列化和通信是服务端性能的两个很重要的方面：</p><ul><li>序列化使用自定义的序列化</li><li>通信基于Netty实现NIO的数据传输</li></ul><h3 id="客户端埋点" tabindex="-1">客户端埋点 <a class="header-anchor" href="#客户端埋点" aria-label="Permalink to &quot;客户端埋点&quot;">​</a></h3><p>日志埋点是监控活动的重要环节之一，日志质量决定了监控的质量和效率，当前CAT的埋点目标是以问题为中心，像程序抛出exception就是典型问题。我个人对问题的定义是：不符合预期的就可以算问题，比如请求未完成、响应时间快了慢了、请求TPS多了少了、时间分布不均匀等等。</p><p>在互联网环境中，最突出的问题场景，突出的理解是：跨越边界的行为。包括但不限于：</p><ul><li>HTTP/REST、RPC/SOA、MQ、Job、Cache、DAL;</li><li>搜索/查询引擎、业务应用、外包系统、遗留系统;</li><li>第三方网关/银行, 合作伙伴/供应商之间；</li><li>各类业务指标，如用户登录、订单数、支付状态、销售额。</li></ul><h2 id="服务端设计" tabindex="-1">服务端设计 <a class="header-anchor" href="#服务端设计" aria-label="Permalink to &quot;服务端设计&quot;">​</a></h2><hr><ul><li><a href="https://www.oschina.net/news/78563/cat-depth-analysis" target="_blank" rel="noreferrer">大众点评开源分布式监控平台 CAT 深度剖析</a></li><li><a href="https://tech.meituan.com/CAT_in_Depth_Java_Application_Monitoring.html" target="_blank" rel="noreferrer">美团技术团队</a></li></ul>',29),n=[r];function o(s,h,p,c,d,u){return i(),e("div",null,n)}const T=a(l,[["render",o]]);export{C as __pageData,T as default};
