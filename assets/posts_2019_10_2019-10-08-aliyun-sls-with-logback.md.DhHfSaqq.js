import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const t="/assets/aliyun-sls-logback-query.B4MWvqsj.png",l="/assets/aliyun-sts-nginx-1.BPJGRnDO.jpg",h="/assets/aliyun-sts-nginx-2.Cq57nxvy.jpg",C=JSON.parse('{"title":"Aliyun SLS with Logback","description":"","frontmatter":{"title":"Aliyun SLS with Logback","date":"2019-10-08T16:40:16.195Z","tags":["aliyun","logback","java"],"category":["Java"]},"headers":[],"relativePath":"posts/2019/10/2019-10-08-aliyun-sls-with-logback.md","filePath":"posts/2019/10/2019-10-08-aliyun-sls-with-logback.md","lastUpdated":1718173059000}'),p={name:"posts/2019/10/2019-10-08-aliyun-sls-with-logback.md"},k=n(`<p>之前使用阿里云的<a href="https://sls.console.aliyun.com/lognext/profile" target="_blank" rel="noreferrer">日志服务SLS</a>分析过 Nginx 的请求日志，由于内置的 Nginx 模板和 SQL 查询都 很实用，现在将 Logback 和 SLS 也结合一下。</p><p>使用起来很简单，Aliyun 在 <a href="https://github.com/aliyun/aliyun-log-logback-appender" target="_blank" rel="noreferrer">Github</a> 有维护 Logback 的 Appender，按照说明 使用即可。</p><p>首先添加依赖：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">dependencies {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    compile </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;com.google.protobuf:protobuf-java:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">protobufVersion</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;com.aliyun.openservices:aliyun-log-logback-appender:</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">aliyunLogLogbackVersion</span><span style="--shiki-light:#032F62;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>版本没有使用文档推荐的，而是使用官网最新的：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">aliyunLogLogbackVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=0.1.15</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">protobufVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=3.10.0</span></span></code></pre></div><p><code>logback.xml</code> 里面添加 appender（这里只是配置片段，完整配置可自行补充或者参考官网 Demo）：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> &lt;!-- To prevent data loss when the process exits, please remember to add this configuration --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">shutdownHook</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;ch.qos.logback.core.hook.DelayingShutdownHook&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">appender</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;aliyun&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;com.aliyun.openservices.log.logback.LoghubAppender&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!-- Required parameters --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!-- Configure account and network  --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;your project endpoint&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">endpoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">accessKeyId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;your accesskey id&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">accessKeyId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">accessKeySecret</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;your accesskey&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">accessKeySecret</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!-- Configure sls --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;your project&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">logStore</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;your logStore&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">logStore</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!-- Required parameters(end) --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!-- Optional parameters --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">topic</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;your topic&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">topic</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;your source&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!-- Optional parameters --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">totalSizeInBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;104857600&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">totalSizeInBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">maxBlockMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;60000&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">maxBlockMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">ioThreadCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;8&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">ioThreadCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">batchSizeThresholdInBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;524288&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">batchSizeThresholdInBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">batchCountThreshold</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;4096&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">batchCountThreshold</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">lingerMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;2000&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">lingerMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">retries</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;10&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">retries</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">baseRetryBackoffMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;100&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">baseRetryBackoffMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">maxRetryBackoffMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;100&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">maxRetryBackoffMs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!-- Optional parameters --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;%d %-5level [%thread] %logger{0}: %msg&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">encoder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!--  Optional parameters --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">timeFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;yyyy-MM-dd&#39;T&#39;HH:mmZ&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">timeFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    &lt;!--  Optional parameters --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">timeZone</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;UTC&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">timeZone</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">appender</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  &lt;!-- This listener will print the status in StatusManager to console</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  &lt;statusListener class=&quot;ch.qos.logback.core.status.OnConsoleStatusListener&quot;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">root</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> level</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;INFO&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">appender-ref</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;aliyun&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">root</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">configuration</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>调整配置里面的相关变量，即可在程序里面使用。</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> Logger</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> logger </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> LoggerFactory.</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">getLogger(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Application.</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">class);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">..</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">trace(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;trace log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">debug(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;debug log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">info(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;info log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">warn(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;warn log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">error(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;error log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">error(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;test exception&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> RuntimeException</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;my exception&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">))</span></span></code></pre></div><p>设置好<code>查询分析属性</code>，运行程序。</p><p>即可使用阿里云的控制台进行日志日志查询了，比如编写查询语句（如果要查询详细信息，增加查询字段<code>log</code>即可）：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">| </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">select</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">level</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, thread, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, __source__, __topic__ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">where</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> level=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;ERROR&#39;</span></span></code></pre></div><p><img src="`+t+'" alt=""></p><p>最后附上两个日志服务附带的 Nginx Dashboard 截图：</p><p><img src="'+l+'" alt=""></p><p><img src="'+h+'" alt=""></p>',17),e=[k];function r(g,d,A,y,o,D){return a(),i("div",null,e)}const B=s(p,[["render",r]]);export{C as __pageData,B as default};