import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const y=JSON.parse('{"title":"ApiSix Install Custom Plugin","description":"","frontmatter":{"title":"ApiSix Install Custom Plugin","date":"2022-08-03T00:00:00.000Z","tags":["apisix","kubernetes"],"category":["Other"]},"headers":[],"relativePath":"posts/2022/08/2022-08-03-apisix-custom-plugin.md","filePath":"posts/2022/08/2022-08-03-apisix-custom-plugin.md","lastUpdated":1718173059000}'),p={name:"posts/2022/08/2022-08-03-apisix-custom-plugin.md"},l=n(`<p>比如编写插件：</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> core </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;apisix.core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> jwt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;resty.jwt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ck </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;resty.cookie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> consumer_mod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;apisix.consumer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">-- codes below</span></span></code></pre></div><p>创建ConfigMap：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ConfigMap</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">jwt-auth-redis</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ingress-apisix</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  jwt-auth-redis.lua</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;-</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    local core = require(&quot;apisix.core&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    local jwt = require(&quot;resty.jwt&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    local ck = require(&quot;resty.cookie&quot;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    -- codes below</span></span></code></pre></div><p>使用 Helm 安装 Apisix，在 Values.yaml 里面配置自定义插件：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">customPlugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  enabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # the lua_path that tells APISIX where it can find plugins,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # note the last &#39;;&#39; is required.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  luaPath</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/opts/custom_plugins/?.lua&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # plugin name.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;jwt-auth-redis&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # plugin attrs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      attrs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        exp</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">86400</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        key</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">234</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        redis_database</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        redis_password</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">pyfgpyfg</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        redis_port</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">6379</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        redis_timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # plugin codes can be saved inside configmap object.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      configMap</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        # name of configmap.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;jwt-auth-redis&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        # since keys in configmap is flat, mountPath allows to define the mount</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        # path, so that plugin codes can be mounted hierarchically.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        mounts</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;jwt-auth-redis.lua&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">            path</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/opts/custom_plugins/apisix/plugins/jwt-auth-redis.lua&quot;</span></span></code></pre></div><p>系统会挂载 <code>jwt-auth-redis.lua</code> 文件。</p><p>启动 ApiSix，可以看到插件已经加载。</p><p>在 apisix 容器内执行：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 127.0.0.1:9090/v1/schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> schema.json</span></span></code></pre></div><p>拷贝 <code>schema.json</code> 到 dashboard 容器的 conf 目录。</p><hr><ul><li><a href="https://apisix.apache.org/docs/dashboard/FAQ/" target="_blank" rel="noreferrer">https://apisix.apache.org/docs/dashboard/FAQ/</a></li></ul>`,13),t=[l];function h(k,e,d,r,g,o){return a(),i("div",null,t)}const A=s(p,[["render",h]]);export{y as __pageData,A as default};
