import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const C=JSON.parse('{"title":"Kong 0.12 Quick Start","description":"","frontmatter":{"title":"Kong 0.12 Quick Start","date":"2018-04-22T00:00:00.000Z","tags":["kong"]},"headers":[],"relativePath":"posts/2018/04/2018-04-22-kong-quickstart.md","filePath":"posts/2018/04/2018-04-22-kong-quickstart.md","lastUpdated":1718175555000}'),t={name:"posts/2018/04/2018-04-22-kong-quickstart.md"},h=n(`<h2 id="_1-add-your-api-using-the-admin-api" tabindex="-1">1. Add your API using the Admin API <a class="header-anchor" href="#_1-add-your-api-using-the-admin-api" aria-label="Permalink to &quot;1. Add your API using the Admin API&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8001/apis/</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;name=example-api&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;hosts=example.com&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;upstream_url=http://mockbin.org&#39;</span></span></code></pre></div><p>You should see a similar response from that request:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">HTTP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 201</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Created</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: application</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Connection</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: keep</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">alive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;created_at&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1488830759000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;hosts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;example.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;http_if_terminated&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;https_only&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;6378122c-a0a1-438d-a5c6-efabae9fb969&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;example-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;preserve_host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;retries&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;strip_uri&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;upstream_connect_timeout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">60000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;upstream_read_timeout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">60000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;upstream_send_timeout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">60000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;upstream_url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;http://mockbin.org&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="_2-forward-your-requests-through-kong" tabindex="-1">2. Forward your requests through Kong <a class="header-anchor" href="#_2-forward-your-requests-through-kong" aria-label="Permalink to &quot;2. Forward your requests through Kong&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> GET</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8000/</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --header</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Host: example.com&#39;</span></span></code></pre></div><h2 id="enabling-plugins" tabindex="-1">Enabling Plugins <a class="header-anchor" href="#enabling-plugins" aria-label="Permalink to &quot;Enabling Plugins&quot;">​</a></h2><h3 id="_1-configure-the-key-auth-plugin-for-your-api" tabindex="-1">1. Configure the key-auth plugin for your API <a class="header-anchor" href="#_1-configure-the-key-auth-plugin-for-your-api" aria-label="Permalink to &quot;1. Configure the key-auth plugin for your API&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8001/apis/example-api/plugins/</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;name=key-auth&#39;</span></span></code></pre></div><h3 id="_2-verify-that-the-plugin-is-properly-configured" tabindex="-1">2. Verify that the plugin is properly configured <a class="header-anchor" href="#_2-verify-that-the-plugin-is-properly-configured" aria-label="Permalink to &quot;2. Verify that the plugin is properly configured&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> GET</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8000/</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --header</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Host: example.com&#39;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">HTTP/1.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 401</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Unauthorized</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Date:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Sun,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 22</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Apr</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2018</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 01:23:51</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> GMT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Content-Type:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> application/json</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; charset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">utf-8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Transfer-Encoding:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chunked</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Connection:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> keep-alive</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">WWW-Authenticate:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Key</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> realm=&quot;kong&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Server:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> kong/0.12.3</span></span></code></pre></div><h2 id="adding-consumers" tabindex="-1">Adding Consumers <a class="header-anchor" href="#adding-consumers" aria-label="Permalink to &quot;Adding Consumers&quot;">​</a></h2><h3 id="_1-create-a-consumer-through-the-restful-api" tabindex="-1">1. Create a Consumer through the RESTful API <a class="header-anchor" href="#_1-create-a-consumer-through-the-restful-api" aria-label="Permalink to &quot;1. Create a Consumer through the RESTful API&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8001/consumers/</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;username=Jason&quot;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">HTTP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 201</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Created</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: application</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">json</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Connection</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: keep</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">alive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;username&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Jason&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;created_at&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1428555626000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;bbdf1c48-19dc-4ab7-cae0-ff4f59d87dc9&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h3 id="_2-provision-key-credentials-for-your-consumer" tabindex="-1">2. Provision key credentials for your Consumer <a class="header-anchor" href="#_2-provision-key-credentials-for-your-consumer" aria-label="Permalink to &quot;2. Provision key credentials for your Consumer&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> POST</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8001/consumers/Jason/key-auth/</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --data</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;key=ENTER_KEY_HERE&#39;</span></span></code></pre></div><h3 id="_3-verify-that-your-consumer-credentials-are-valid" tabindex="-1">3. Verify that your Consumer credentials are valid <a class="header-anchor" href="#_3-verify-that-your-consumer-credentials-are-valid" aria-label="Permalink to &quot;3. Verify that your Consumer credentials are valid&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> GET</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --url</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> http://127.0.0.1:8000</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --header</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Host: example.com&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --header</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;apikey: ENTER_KEY_HERE&quot;</span></span></code></pre></div><hr><ul><li><a href="https://getkong.org/docs/0.13.x/getting-started/quickstart/" target="_blank" rel="noreferrer">https://getkong.org/docs/0.13.x/getting-started/quickstart/</a></li><li><a href="https://getkong.org/docs/0.12.x/getting-started/adding-your-api/" target="_blank" rel="noreferrer">https://getkong.org/docs/0.12.x/getting-started/adding-your-api/</a></li></ul>`,22),l=[h];function e(p,k,r,d,F,g){return a(),i("div",null,l)}const y=s(t,[["render",e]]);export{C as __pageData,y as default};
