import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const F=JSON.parse('{"title":"Tomcat Connector","description":"","frontmatter":{"title":"Tomcat Connector","date":"2017-10-27T00:00:00.000Z","tags":["tomcat"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2017/10/2017-10-27-tomcat-connector-config.md","filePath":"posts/2017/10/2017-10-27-tomcat-connector-config.md","lastUpdated":1718193786000}'),n={name:"posts/2017/10/2017-10-27-tomcat-connector-config.md"},e=t(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&lt;Connector executor=&quot;tomcatThreadPool&quot;</span></span>
<span class="line"><span>               port=&quot;80&quot; protocol=&quot;HTTP/1.1&quot;</span></span>
<span class="line"><span>               connectionTimeout=&quot;20000&quot;</span></span>
<span class="line"><span>               redirectPort=&quot;8443&quot; /&gt;</span></span>
<span class="line"><span>&lt;Connector</span></span>
<span class="line"><span>    className=&quot;org.apache.coyote.tomcat4.CoyoteConnector&quot;</span></span>
<span class="line"><span>    port=&quot;8080&quot;minProcessors=&quot;5&quot; maxProcessors=&quot;75&quot;</span></span>
<span class="line"><span>    enableLookups=&quot;true&quot; redirectPort=&quot;8443&quot;</span></span>
<span class="line"><span>    acceptCount=&quot;10&quot; debug=&quot;0&quot; connectionTimeout=&quot;20000&quot;</span></span>
<span class="line"><span>    useURIValidationHack=&quot;false&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre></div><h3 id="maxconnections" tabindex="-1"><code>maxConnections</code> <a class="header-anchor" href="#maxconnections" aria-label="Permalink to &quot;\`maxConnections\`&quot;">​</a></h3><p>服务器接受和处理的最大连接数。</p><ul><li>BIO 默认为 <code>maxThreads</code></li><li>NIO / NIO2 默认为 10000</li><li>APR/native 默认为8192</li></ul><p>超过这个数字，服务器只会接收，但是不会处理请求。这些多余的请求一直等到服务处理请求降低到<code>maxConnections</code>之下再处理。多余的连接数数量基于<code>acceptCount</code>这个参数。</p><p>如果参数设置为-1，会禁用<code>maxConnections</code>这个属性，那么服务器就不计算连接数了。</p><h3 id="maxthreads" tabindex="-1"><code>maxThreads</code> <a class="header-anchor" href="#maxthreads" aria-label="Permalink to &quot;\`maxThreads\`&quot;">​</a></h3><ul><li>default 200</li></ul><p>对于CPU密集的程序来说，该值不应该设的太大，以减少不同线程对CPU资源的抢占。 对于IO密集型的程序来说，参数可以调大点。</p><h3 id="acceptcount" tabindex="-1"><code>acceptCount</code> <a class="header-anchor" href="#acceptcount" aria-label="Permalink to &quot;\`acceptCount\`&quot;">​</a></h3><p>连接超过 maxConnections+acceptCount 之后，Tomcat会拒绝新的连接。</p><h3 id="maxkeepaliverequests" tabindex="-1"><code>maxKeepAliveRequests</code> <a class="header-anchor" href="#maxkeepaliverequests" aria-label="Permalink to &quot;\`maxKeepAliveRequests\`&quot;">​</a></h3><p>nginx动态的转给tomcat，nginx是不能keepalive的，而tomcat端默认开启了keepalive，会等待keepalive的timeout，默认不设置就是使用connectionTimeout。</p><p>所以必须设置tomcat的超时时间，并关闭tomcat的keepalive。否则会产生大量tomcat的socket timewait。</p><p><code>maxKeepAliveRequests=&quot;1&quot;</code> 就可以避免tomcat产生大量的TIME_WAIT连接，从而从一定程度上避免tomcat假死。</p><ul><li>default 100</li></ul><h2 id="minsparethreads-default-10" tabindex="-1"><code>minSpareThreads</code> default 10 <a class="header-anchor" href="#minsparethreads-default-10" aria-label="Permalink to &quot;\`minSpareThreads\` default 10&quot;">​</a></h2><p>最小运行线程，即使没有请求，这些线程也存在。</p><h2 id="processorcache-default-200" tabindex="-1"><code>processorCache</code> default 200 <a class="header-anchor" href="#processorcache-default-200" aria-label="Permalink to &quot;\`processorCache\` default 200&quot;">​</a></h2><p>最大 Process object数量，如果没有使用 Servlet 3.0 asynchronous processing，推荐和 maxConnections 相同，如果使用了的话，那么推荐 maxConnections 和期望最大请求并发数（同步+异步）的最大值。</p><h2 id="protocol" tabindex="-1">protocol <a class="header-anchor" href="#protocol" aria-label="Permalink to &quot;protocol&quot;">​</a></h2><ul><li><code>org.apache.coyote.ajp.AjpProtocol</code> - blocking Java connector <ul><li>默认的方式。使用传统的Java I/O，(java.io包)，性能最差。</li></ul></li><li><code>org.apache.coyote.ajp.AjpNioProtocol</code> - non blocking Java NIO connector. <ul><li>Java SE 1.4 之后提供。（java.nio）。基于缓冲，并能提供非阻塞I/O。</li></ul></li><li><code>org.apache.coyote.ajp.AjpNio2Protocol</code> - non blocking Java NIO2 connector.</li><li><code>org.apache.coyote.ajp.AjpAprProtocol</code> - the APR/native connector. <ul><li>apr（Apache Portable Runtime/Apache可移植运行时库)</li><li>以JNI形式调用Apache HTTP服务器的核心动态链接库来处理文件读取或网络传输操作，从而大大提供静态文件处理性能。从操作系统级别解决异步IO问题，大幅度提高性能。</li><li>是Tomcat上高并发应用的首选模式。</li></ul></li></ul><h3 id="查看" tabindex="-1">查看 <a class="header-anchor" href="#查看" aria-label="Permalink to &quot;查看&quot;">​</a></h3><ol><li><a href="http://x.x.x.x:8080/manager/status" target="_blank" rel="noreferrer">http://x.x.x.x:8080/manager/status</a></li><li>查看启动日志</li></ol><ul><li><p>bio</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>INFO: Initializing ProtocolHandler [&quot;http-bio-8080&quot;]</span></span>
<span class="line"><span>Aug 04, 2015 10:20:35 PM org.apache.coyote.AbstractProtocol init</span></span></code></pre></div></li><li><p>nio</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>INFO: Initializing ProtocolHandler [&quot;http-nio-8080&quot;]</span></span>
<span class="line"><span>Aug 04, 2015 10:27:58 PM org.apache.coyote.AbstractProtocol init</span></span></code></pre></div></li><li><p>apr</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>INFO: Initializing ProtocolHandler [&quot;http-apr-8080&quot;]</span></span>
<span class="line"><span>Aug 04, 2015 10:33:45 PM org.apache.coyote.AbstractProtocol init</span></span></code></pre></div></li></ul><h2 id="demo" tabindex="-1">demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;demo&quot;">​</a></h2><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;1.0&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Server</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> port</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;8015&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> shutdown</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;SHUTDOWN&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Listener</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> className</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.startup.VersionLoggerListener&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Listener</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> className</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.core.AprLifecycleListener&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> SSLEngine</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;on&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Listener</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> className</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.core.JreMemoryLeakPreventionListener&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Listener</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> className</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.mbeans.GlobalResourcesLifecycleListener&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Listener</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> className</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.core.ThreadLocalLeakPreventionListener&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">GlobalNamingResources</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Resource</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;UserDatabase&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> auth</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Container&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                  type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.UserDatabase&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                  description</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;User database that can be updated and saved&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                  factory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.users.MemoryUserDatabaseFactory&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                  pathname</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;conf/tomcat-users.xml&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">GlobalNamingResources</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Service</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Catalina&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Connector</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> port</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;8080&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> protocol</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.coyote.http11.Http11AprProtocol&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> compression</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;on&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                   disableUploadTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                   acceptCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;1024&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> connectionTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;20000&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> maxConnections</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2048&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                   pollerSize</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2048&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> maxKeepAliveRequests</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> keepAliveTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                   maxThreads</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;1024&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> minSpareThreads</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;256&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> processorCache</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;1024&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                   enableLookups</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;false&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> redirectPort</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;8443&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Engine</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Catalina&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> defaultHost</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Host</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;localhost&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> appBase</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;../../webapps/default&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                  unpackWARs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;true&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> autoDeploy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Valve</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> className</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;org.apache.catalina.valves.AccessLogValve&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> directory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;logs&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                       prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;localhost_access_log&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> suffix</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">                       pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;%h %l %u %t </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">%r</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">&amp;quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> %s %b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Host</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Engine</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Service</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p><a href="http://tomcat.apache.org/tomcat-8.0-doc/config/ajp.html#Connector_Comparison" target="_blank" rel="noreferrer">Connector Comparison</a></p><p>Links:</p><ul><li><a href="http://tomcat.apache.org/tomcat-8.0-doc/connectors.html" target="_blank" rel="noreferrer">Connectors How To</a></li><li><a href="http://tomcat.apache.org/tomcat-8.0-doc/config/ajp.html" target="_blank" rel="noreferrer">The AJP Connector</a></li><li><a href="https://tomcat.apache.org/tomcat-8.0-doc/config/http.html" target="_blank" rel="noreferrer">The HTTP Connector</a></li><li><a href="http://tomcat.apache.org/native-doc/" target="_blank" rel="noreferrer">Apache Tomcat Native Library</a></li><li><a href="http://blog.csdn.net/u010297957/article/details/50782212" target="_blank" rel="noreferrer">http://blog.csdn.net/u010297957/article/details/50782212</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,32),l=[e];function h(p,k,o,r,c,d){return a(),i("div",null,l)}const u=s(n,[["render",h]]);export{F as __pageData,u as default};