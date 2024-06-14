import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const c=JSON.parse('{"title":"Kubernetes Ingress External WebSite","description":"","frontmatter":{"title":"Kubernetes Ingress External WebSite","date":"2022-02-14T00:00:00.000Z","tags":["kubernetes","ingress"],"category":["运维"]},"headers":[],"relativePath":"posts/2022/02/2022-02-14-Ingress-External-WebSite.md","filePath":"posts/2022/02/2022-02-14-Ingress-External-WebSite.md","lastUpdated":1718173059000}'),t={name:"posts/2022/02/2022-02-14-Ingress-External-WebSite.md"},e=n(`<p>Service 使用 ExternalName:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">v1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">my-service</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">prod</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">ExternalName</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  externalName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">my.database.example.com</span></span></code></pre></div><p>Ingress 配置 <code>nginx.ingress.kubernetes.io/upstream-vhost: my.database.example.com</code></p><p>也可以使用配置片段：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    annotations</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        # Nginx 的 Server 配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        nginx.ingress.kubernetes.io/server-snippet</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            set $agentflag 0;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            if ($http_user_agent ~* &quot;(Mobile)&quot; ){</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">              set $agentflag 1;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            if ( $agentflag = 1 ) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">              return 301 https://m.example.com;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    # Nginx 的 Localtion 配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    nginx.ingress.kubernetes.io/configuration-snippet</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      proxy_set_header Host www.example-host.com;</span></span></code></pre></div><p>效果：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    ## start server foo.bar.com</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    server {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        server_name foo.bar.com ;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        listen [::]:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        set</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> $</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">proxy_upstream_name </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;-&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    ### server-snippet配置。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        rewrite </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">^/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">v4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">card</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">query http:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">m.maizuo.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">v5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/card/query permanent;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    ### configuration-snippet配置。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      rewrite </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">^/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">v6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">card</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">query http:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">m.maizuo.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">v7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">/</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/card/query permanent;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    ## end server foo.bar.com</span></span></code></pre></div><hr><ul><li><a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#custom-nginx-upstream-vhost" target="_blank" rel="noreferrer">Custom Nginx Upstream Vhost</a></li><li><a href="https://help.aliyun.com/document_detail/86533.html" target="_blank" rel="noreferrer">Aliyun Nginx Ingress高级用法</a></li></ul>`,9),p=[e];function l(h,k,r,d,g,y){return a(),i("div",null,p)}const o=s(t,[["render",l]]);export{c as __pageData,o as default};