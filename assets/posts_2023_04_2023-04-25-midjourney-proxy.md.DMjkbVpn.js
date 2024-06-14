import{_ as i,a,o as e,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const t="/assets/498734274509000.DH6sJqPq.png",l="/assets/502082322351166.Ce2o02Hr.png",p="/assets/502245706739875.BS6Lw_0I.png",s="/assets/502395530936250.Bn7Li1of.png",o="/assets/502606007424208.D_9XLTDx.png",r="/assets/502653266638208.Des_gGDs.png",h="/assets/502718248226916.CuJRKNlq.png",d="/assets/502744698879875.CA_hcq2W.png",q=JSON.parse('{"title":"本地搭建 Midjourney 代理","description":"","frontmatter":{"title":"本地搭建 Midjourney 代理","date":"2023-04-25T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/04/2023-04-25-midjourney-proxy.md","filePath":"posts/2023/04/2023-04-25-midjourney-proxy.md","lastUpdated":1718175555000}'),k={name:"posts/2023/04/2023-04-25-midjourney-proxy.md"},c=n('<blockquote><p>众所周知 Midjourney 没有提供 API，不能想 OpenAI 一样集成在本地服务里面。 但是方法总比困难多，Midjourney 的载体 <code>Discord</code> 是有 API 的，曲线救国就可以 在本地搭建一个 Midjourney 的服务。</p></blockquote><h2 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;">​</a></h2><p>我们的方案就是使用本地服务连接 Discord 服务，然后发送消息，拿到返回的数据，进行给 UI。</p><h3 id="开源项目" tabindex="-1">开源项目 <a class="header-anchor" href="#开源项目" aria-label="Permalink to &quot;开源项目&quot;">​</a></h3><p>在我准备动手写代码的时候，想起了 Github，于是乎去搜了下 Midjourney，很多个封装好的项目映入眼帘。</p><p>这不就省下了大把的时间。</p><h2 id="midjourney-proxy" tabindex="-1">midjourney-proxy <a class="header-anchor" href="#midjourney-proxy" aria-label="Permalink to &quot;midjourney-proxy&quot;">​</a></h2><p>我们选择 <code>midjourney-proxy</code> 项目做后端，</p><h3 id="项目功能" tabindex="-1">项目功能 <a class="header-anchor" href="#项目功能" aria-label="Permalink to &quot;项目功能&quot;">​</a></h3><ul><li>支持 Imagine 指令和相关U、V操作</li><li>Imagine 时支持添加图片base64，作为垫图</li><li>支持 Blend(图片混合) 指令和相关U、V操作</li><li>支持 Describe 指令，根据图片生成 prompt</li><li>支持 Imagine、V、Blend 图片生成进度</li><li>支持中文 prompt 翻译，需配置百度翻译或 gpt</li><li>prompt 敏感词判断，支持覆盖调整</li><li>任务队列，默认队列10，并发3。可参考 MidJourney订阅级别 调整mj.queue</li><li>user-token 连接 wss，可以获取错误信息和完整功能</li><li>支持 discord域名(server、cdn、wss)反代，配置 mj.ng-discord</li></ul><h3 id="使用前提" tabindex="-1">使用前提 <a class="header-anchor" href="#使用前提" aria-label="Permalink to &quot;使用前提&quot;">​</a></h3><ul><li>注册 MidJourney，创建自己的频道，参考 <a href="https://docs.midjourney.com/docs/quick-start" target="_blank" rel="noreferrer">https://docs.midjourney.com/docs/quick-start</a></li><li>获取用户Token、服务器ID、频道ID</li></ul><h4 id="_1-获取用户token" tabindex="-1">1. 获取用户Token <a class="header-anchor" href="#_1-获取用户token" aria-label="Permalink to &quot;1. 获取用户Token&quot;">​</a></h4><p>进入频道，打开<code>network</code>，刷新页面，找到 <code>messages</code> 的请求，这里的 <code>authorization</code> 即<code>用户Token</code>，后续设置到 <code>mj.discord.user-token</code></p><h4 id="_2-获取用户sessionid" tabindex="-1">2. 获取用户sessionId <a class="header-anchor" href="#_2-获取用户sessionid" aria-label="Permalink to &quot;2. 获取用户sessionId&quot;">​</a></h4><p>进入频道，打开<code>network</code>，发送<code>/imagine</code>作图指令，找到 <code>interactions</code> 的请求，这里的 <code>session_id</code> 即<code>用户sessionId</code>，后续设置到 <code>mj.discord.session-id</code></p><h4 id="_3-获取服务器id、频道id" tabindex="-1">3. 获取服务器ID、频道ID <a class="header-anchor" href="#_3-获取服务器id、频道id" aria-label="Permalink to &quot;3. 获取服务器ID、频道ID&quot;">​</a></h4><p>频道的url里取出 服务器ID、频道ID，后续设置到配置项</p><h3 id="分享须知" tabindex="-1">分享须知 <a class="header-anchor" href="#分享须知" aria-label="Permalink to &quot;分享须知&quot;">​</a></h3><ul><li>作图频繁等行为，可能会触发midjourney账号警告，请谨慎使用</li><li>为减少风险，请设置mj.discord.user-agent 和 mj.discord.session-id</li><li>默认使用user-wss方式，可以获取midjourney的错误信息、图片变换进度等，但可能会增加账号风险</li><li>支持设置mj.discord.user-wss为false，使用bot-token连接wss，需添加自定义机器人：流程说明</li></ul><h3 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h3><p>这是一个Java 项目，你可以使用 jre 本地运行或者 Docker 运行，也可以使用 Railway 等网络平台运行。</p><h4 id="railway" tabindex="-1">Railway <a class="header-anchor" href="#railway" aria-label="Permalink to &quot;Railway&quot;">​</a></h4><p>这里使用 Railway 部署， 设置变量如下，克隆抗木布局即可</p><p><img src="'+t+`" alt=""></p><h4 id="本地-docker" tabindex="-1">本地 Docker <a class="header-anchor" href="#本地-docker" aria-label="Permalink to &quot;本地 Docker&quot;">​</a></h4><p>这里给出大家 compose 配置：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  midjourney-proxy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">midjourney-proxy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">novicezk/midjourney-proxy:2.3.5</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">18080:8080</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">./config:/home/spring/config</span></span></code></pre></div><p>Discord 配置在 <code>./config/application.yml</code> 文件里：</p><p><img src="`+l+'" alt=""></p><p>运行如下：</p><p><img src="'+p+'" alt=""></p><h2 id="chatgpt-midjourney" tabindex="-1">ChatGPT-Midjourney <a class="header-anchor" href="#chatgpt-midjourney" aria-label="Permalink to &quot;ChatGPT-Midjourney&quot;">​</a></h2><p>Midjourney-proxy 项目只是后端对接了 discord 和 midjourney 服务， 关于前端 UI，Github 上也有，比如 <strong>ChatGPT-Midjourney</strong>。</p><p>直接看效果把：</p><p><img src="'+s+`" alt=""></p><p>ps: 项目还继承了 ChatGPT，不需要可以不配置。</p><h3 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h3><p>仍然使用 Compose 运行，：我们把两个配置文件放在一起：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">version:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;3&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">services:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  midjourney-proxy:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    container_name:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> midjourney-proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    image:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> novicezk/midjourney-proxy:2.3.5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    ports:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 18080:8080</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    volumes:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ./config:/home/spring/config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  chatgpt-midjourney:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    container_name:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chatgpt-midjourney</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    image:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> licoy/chatgpt-midjourney:v1.3.9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    ports:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 13000:3000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    environment:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      OPENAI_API_KEY:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;sk-xx&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      #CODE: &quot;789789&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      BASE_URL:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;https://api.openai.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      MIDJOURNEY_PROXY_URL:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;http://midjourney-proxy:8080&quot;</span></span></code></pre></div><p>执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> up</span></span></code></pre></div><p>然后访问 <code>http://127.0.0.1:3000</code>就可以看到 UI：</p><p><img src="`+s+'" alt=""></p><p>如果要使用 <code>V1 - V4</code> 的图像变换，要在 Midjourney 设置快速变化，</p><p><img src="'+o+'" alt=""></p><p>如下（取消勾选 Remix mode）：</p><p><img src="'+r+'" alt=""></p><p>不然执行变换会提示任务超时：</p><p><img src="'+h+'" alt=""></p><p>最后看下放大的图片：</p><p><img src="'+d+'" alt=""></p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',54),y=[c];function u(g,m,F,D,_,C){return e(),a("div",null,y)}const j=i(k,[["render",u]]);export{q as __pageData,j as default};