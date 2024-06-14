import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const F=JSON.parse('{"title":"Kong HMAC Authentication 插件","description":"","frontmatter":{"title":"Kong HMAC Authentication 插件","date":"2020-07-21T12:44:07.160Z","category":["网关"],"tag":["kong"]},"headers":[],"relativePath":"posts/2020/07/0721-kong-hmac-auth.md","filePath":"posts/2020/07/0721-kong-hmac-auth.md","lastUpdated":1718175555000}'),e={name:"posts/2020/07/0721-kong-hmac-auth.md"},n=t(`<p>Kong 提供了多种认证的插件，其中就包括 <a href="https://docs.konghq.com/hub/kong-inc/hmac-auth/" target="_blank" rel="noreferrer">HMAC-Authentication</a>。</p><p>hmac-auth 几个要注意的配置项：</p><ul><li><code>config.clock_skew</code>： 默认3000秒，用来防止重放攻击。请求的时间戳和服务器时间相隔超过这个时间，客户端会提示 invalid date。 <ul><li>docker 环境运行 kong 的时候要特别主意时区</li></ul></li><li><code>config.validate_request_body</code>： 默认 false</li><li><code>config.enforce_headers</code>：HTTP 签名的必须的头信息列表</li><li><code>config.algorithms</code>： 算法。比如 hmac-sha256</li></ul><p>请求的格式：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> GET</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8000/requests</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      -H</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Host: hmac.com&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      -H</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Date: Thu, 22 Jun 2017 17:15:21 GMT&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      -H</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Authorization: hmac username=&quot;alice123&quot;, algorithm=&quot;hmac-sha256&quot;, headers=&quot;date request-line&quot;, signature=&quot;ujWCGHeec9Xd6UD2zlyxiNMCiXnDOWeVFMu5VeRUxtw=&quot;&#39;</span></span></code></pre></div><p>其中 date 必须是GMT格式的。</p><p>signature 的算法：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">signing_string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;date: Thu, 22 Jun 2017 17:15:21 GMT\\nGET /requests HTTP/1.1&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">digest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">HMAC-SHA256</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">signing_string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;secret&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">base64_digest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">base64</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">digest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p>如果 headers 为 <code>date host request-line</code>，那么 signing string 为：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">date:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Thu,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 22</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Jun</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2017</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 17:15:21</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> GMT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">host:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> hmac.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">GET</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /requests</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> HTTP/1.1</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>header key 为小写，然后冒号空格，值后面加回车。最后一行后面不能跟回车。</p></div><p>如果有 request-line，那么 signing string 后拼接 http request line。</p><p>如果 hmac-auth 配置里面 header 不要求 request-line，那么 signing string 就是：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">date:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Thu,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 22</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Jun</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2017</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 17:15:21</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> GMT</span></span></code></pre></div><p>HMAC-SHA 可以通过这个<a href="https://www.devglan.com/online-tools/hmac-sha256-online" target="_blank" rel="noreferrer">在线工具</a> 来计算。</p><div class="tip custom-block"><p class="custom-block-title">关于签名</p><p>一般我们要求 <code>host</code>，<code>date</code>，<code>request-line</code> 来进行签名。要求高的话，就开启 request-body 校验。</p></div><div class="tip custom-block"><p class="custom-block-title">HMAC Auth的优点</p><ul><li>不传播密码</li><li>参数加密，防止敏感信息</li><li>HMAC 摘要防篡改</li><li>加入时间戳，防止重放攻击</li></ul></div>`,17),h=[n];function l(p,k,d,o,r,c){return a(),i("div",null,h)}const u=s(e,[["render",l]]);export{F as __pageData,u as default};