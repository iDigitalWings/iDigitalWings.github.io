import{_ as s,a,o as i,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const m=JSON.parse('{"title":"TProfiler","description":"","frontmatter":{"title":"TProfiler","date":"2018-08-09T00:00:00.000Z","tags":["java","tprofiler","profile"],"category":["Java"]},"headers":[],"relativePath":"posts/2018/08/2018-08-10-tprofiler.md","filePath":"posts/2018/08/2018-08-10-tprofiler.md","lastUpdated":1718173059000}'),l={name:"posts/2018/08/2018-08-10-tprofiler.md"},t=e(`<h2 id="安装配置" tabindex="-1">安装配置 <a class="header-anchor" href="#安装配置" aria-label="Permalink to &quot;安装配置&quot;">​</a></h2><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#log file name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">logFileName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = tprofiler.log</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">methodFileName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = tmethod.log</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">samplerFileName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = tsampler.log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#basic configuration items</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">startProfTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = 9:00:00 </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 开始时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">endProfTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = 23:00:00 </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 结束时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">eachProfUseTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = 5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">eachProfIntervalTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = 50</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">samplerIntervalTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = 20</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = 30000 </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 启动端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">debugMode</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">needNanoTime</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = false</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">ignoreGetSetMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#file paths</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">logFilePath</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = \${user.home}/logs/\${logFileName}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">methodFilePath</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = \${user.home}/logs/\${methodFileName}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">samplerFilePath</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = \${user.home}/logs/\${samplerFileName}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#include &amp; excludes items</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">excludeClassLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = org.eclipse.osgi.internal.baseadaptor.DefaultClassLoader</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 要监控的包</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">includePackageStartsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = com.caucho</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">;com.defonds;com.fasterxml;com.sun.jersey;com.sun.jmx;org.apache;org.codehaus;org.jdbcdslog;org.mybatis;org.quartz;org.springframework</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">excludePackageStartsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> = com.taobao.sketch</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">;org.apache.velocity;com.alibaba;com.taobao.forest.domain.dataobject</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>JVM应用启动参数：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">-javaagent:/home/ic/tprofiler/tprofiler.jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -Dprofile.properties=/home/ic/tprofiler/profile.properties</span></span></code></pre></div><p>Tomcat的话，修改<code>catalina.sh</code>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">JAVA_OPTS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot; -javaagent:/home/ic/tprofiler/tprofiler.jar -Dprofile.properties=/home/ic/tprofiler/profile.properties&quot;</span></span></code></pre></div><p>分析tsampler.log采样文件，输出method.log与thread.log两文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -cp</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tprofiler.jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> com.taobao.profile.analysis.SamplerLogAnalysis</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  /home/ic/logs/tsampler.log</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /home/ic/logs/method.log</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /home/ic/logs/thread.log</span></span></code></pre></div><p>分析tprofiler.log采样文件，输出topmethod.log与topobject.log两文件，需要tmethod.log文件为输入</p><ol><li>首先生成tmethod.log文件(必需等到profile.properties文件中endProfTime属性定义的时间点结束后，才能生成，因此需人工提前生成)，由此命令</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -cp</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tprofiler.jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> com.taobao.profile.client.TProfilerClient</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 127.0.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 50000</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> flushmethod</span></span></code></pre></div><ol start="2"><li>生成topmethod.log与topobject.log两文件，</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -cp</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tprofiler.jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> com.taobao.profile.analysis.ProfilerLogAnalysis</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /home/ic/logs/tprofiler.log</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /home/ic/logs/tmethod.log</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /home/ic/logs/topmethod.log</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /home/ic/logs/topobject.log</span></span></code></pre></div><h2 id="启动停止" tabindex="-1">启动停止 <a class="header-anchor" href="#启动停止" aria-label="Permalink to &quot;启动停止&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -cp</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tprofiler.jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> com.taobao.profile.client.TProfilerClient</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 127.0.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 50000</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stauts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -cp</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tprofiler.jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> com.taobao.profile.client.TProfilerClient</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 127.0.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 50000</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -cp</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tprofiler.jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> com.taobao.profile.client.TProfilerClient</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 127.0.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 50000</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> start</span></span></code></pre></div><h2 id="文件格式" tabindex="-1">文件格式 <a class="header-anchor" href="#文件格式" aria-label="Permalink to &quot;文件格式&quot;">​</a></h2><h3 id="topobject-log" tabindex="-1">topobject.log <a class="header-anchor" href="#topobject-log" aria-label="Permalink to &quot;topobject.log&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>方法信息 执行次数 平均执行时间 全部执行时间</span></span>
<span class="line"><span>sketch/compile/parser/node/PropertyExecutor:&lt;init&gt;:32 573 1 636</span></span>
<span class="line"><span>sketch/util/introspection/UberspectImpl:&lt;init&gt;:282 34 7 241</span></span></code></pre></div><p><strong>实验时，文件没有写入内容。分析代码是方法名必需包括<code>&lt;init&gt;</code>，才会写入。</strong></p><h3 id="tprofiler-log" tabindex="-1">tprofiler.log <a class="header-anchor" href="#tprofiler-log" aria-label="Permalink to &quot;tprofiler.log&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>线程ID 线程栈深度 方法ID 方法执行时间</span></span>
<span class="line"><span>13        2       14558       6</span></span></code></pre></div><h3 id="topmethod-log" tabindex="-1">topmethod.log <a class="header-anchor" href="#topmethod-log" aria-label="Permalink to &quot;topmethod.log&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>方法信息     执行次数    平均执行时间       全部执行时间 </span></span>
<span class="line"><span>com/tcs/server/mpush/connect/MessageReceivedHandler:received:13613022 2472</span></span>
<span class="line"><span>com/tcs/server/mpush/connect/Login:validateToken:56682 138</span></span>
<span class="line"><span>com/tcs/server/mpush/connect/Login:sendOfflineMessage:112102 20</span></span></code></pre></div><h3 id="method-log文件格式说明" tabindex="-1">method.log文件格式说明: <a class="header-anchor" href="#method-log文件格式说明" aria-label="Permalink to &quot;method.log文件格式说明:&quot;">​</a></h3><p>方法信息 采样过程中方法出现次数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>org.quartz.simpl.SimpleThreadPool.getNextRunnable(SimpleThreadPool.java:428) 19728</span></span>
<span class="line"><span>org.quartz.simpl.SimpleThreadPool$WorkerThread.run(SimpleThreadPool.java:518) 19728</span></span>
<span class="line"><span>org.quartz.simpl.SimpleThreadPool.access$000(SimpleThreadPool.java:47) 19728</span></span>
<span class="line"><span>org.apache.mina.util.NamePreservingRunnable.run(NamePreservingRunnable.java:51) 17558</span></span></code></pre></div><h3 id="thread-log文件格式说明" tabindex="-1">thread.log文件格式说明: <a class="header-anchor" href="#thread-log文件格式说明" aria-label="Permalink to &quot;thread.log文件格式说明:&quot;">​</a></h3><p>线程信息 采样过程中线程出现次数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>56 DefaultQuartzScheduler_Worker-3 TIMED_WAITING 661</span></span>
<span class="line"><span>55 DefaultQuartzScheduler_Worker-2 TIMED_WAITING 661</span></span>
<span class="line"><span>60 DefaultQuartzScheduler_Worker-7 TIMED_WAITING 661</span></span></code></pre></div><hr><ul><li><a href="https://github.com/alibaba/TProfiler" target="_blank" rel="noreferrer">TProfiler GitHub</a></li><li><a href="https://github.com/alibaba/TProfiler/issues/33" target="_blank" rel="noreferrer">TProfiler.log的内容为空</a></li><li><a href="https://blog.csdn.net/defonds/article/details/52605670" target="_blank" rel="noreferrer">JVM 性能调优实战之：使用阿里开源工具 TProfiler 在海量业务代码中精确定位性能代码</a></li><li><a href="https://blog.csdn.net/wh0426/article/details/51994054" target="_blank" rel="noreferrer"></a></li></ul>`,32),n=[t];function p(h,o,r,k,d,c){return i(),a("div",null,n)}const F=s(l,[["render",p]]);export{m as __pageData,F as default};