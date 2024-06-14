import{_ as s,a,o as e,aj as i}from"./chunks/framework.Ba_Ek9Jm.js";const t="/assets/arms-1.D0QyD2Vw.png",n="/assets/arms-2.DIvrC4DF.png",A=JSON.parse('{"title":"Java: 阿里云 ARMS 线程池监控","description":"","frontmatter":{"title":"Java: 阿里云 ARMS 线程池监控","date":"2022-04-15T00:00:00.000Z","tags":["Java","线程池","Aliyun"],"category":["Java"]},"headers":[],"relativePath":"posts/2022/04/2022-04-15-java-thread-pool-arms.md","filePath":"posts/2022/04/2022-04-15-java-thread-pool-arms.md","lastUpdated":1718173059000}'),l={name:"posts/2022/04/2022-04-15-java-thread-pool-arms.md"},p=i(`<h2 id="使用阿里云-arms-监控" tabindex="-1">使用阿里云 ARMS 监控 <a class="header-anchor" href="#使用阿里云-arms-监控" aria-label="Permalink to &quot;使用阿里云 ARMS 监控&quot;">​</a></h2><ul><li>打开 <a href="https://arms.console.aliyun.com/" target="_blank" rel="noreferrer">ARMS控制台</a>，在<code>应用列表</code>中点击<code>接入应用</code>，选择<code>Java</code>，</li><li>下载 <a href="https://arms-apm-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/2.7.1.3-jdk11/ArmsAgent.zip" target="_blank" rel="noreferrer">Agent 2.7.1.3 （支持JDK11）</a></li><li>解压 <code>unzip ArmsAgent.zip -d /{user.workspace}/</code></li><li>添加AppName以及LicenseKey参数 <ul><li>方法一，使用 JVM 参数(Idea 中 <strong>VM Options</strong>)<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>-javaagent:/{user.workspace}/ArmsAgent/arms-bootstrap-1.7.0-SNAPSHOT.jar</span></span>
<span class="line"><span>-Darms.licenseKey=f75seexxx</span></span>
<span class="line"><span>-Darms.appName=spring26test</span></span></code></pre></div></li><li>方法二修改arms-agent.config，替换arms.licenseKey及arms.appName配置定义<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>arms.licenseKey=f75seexxx</span></span>
<span class="line"><span>arms.appName=spring26test</span></span></code></pre></div>在应用服务器的启动脚本中添加以下JVM参数。<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>-javaagent:/{user.workspace}/ArmsAgent/arms-bootstrap-1.7.0-SNAPSHOT.jar</span></span></code></pre></div></li></ul></li><li>启动应用<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -javaagent:/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">user.workspace}/ArmsAgent/arms-bootstrap-1.7.0-SNAPSHOT.jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -Darms.licenseKey=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">LicenseKey}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -Darms.appName=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">AppName}</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> demoApp.jar</span></span></code></pre></div></li><li>可在 ArmsAgent/logs 目录下查看 arms 日志 <ul><li>若无 ARMS 日志表示没有启动 Agent，检查文件权限和VM Options</li><li><a href="https://help.aliyun.com/document_detail/66214.html" target="_blank" rel="noreferrer">https://help.aliyun.com/document_detail/66214.html</a></li></ul></li><li>查看Aliyun ARMS控制可以看到相关监控信息 <img src="`+t+'" alt=""></li><li>在左侧导航栏单击<strong>应用设置</strong>， 在<strong>自定义配置</strong>页签下的<strong>高级设置</strong>区域内，打开<strong>线程池监控</strong>的开关</li><li>重启应用，去控制台查看监控 <img src="'+n+'" alt=""></li></ul>',2),r=[p];function o(h,d,c,m,g,k){return e(),a("div",null,r)}const _=s(l,[["render",o]]);export{A as __pageData,_ as default};