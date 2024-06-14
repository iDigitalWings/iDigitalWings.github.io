import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const D=JSON.parse('{"title":"Aliyun Kubernetes Ingress","description":"","frontmatter":{"title":"Aliyun Kubernetes Ingress","date":"2019-05-24T00:00:00.000Z","tags":["kubernetes","lbs","ingress","aliyun"]},"headers":[],"relativePath":"posts/2019/05/2019-05-24-aliyun-ingress.md","filePath":"posts/2019/05/2019-05-24-aliyun-ingress.md","lastUpdated":1718173059000}'),l={name:"posts/2019/05/2019-05-24-aliyun-ingress.md"},e=n(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ol><li>不指定SLB实例情况下系统会自动帮您生成一个公网SLB实例。</li><li>SLB实例默认前端监听端口为80（HTTP协议）和443（HTTPS协议）。</li><li>SLB实例HTTPS证书默认会初始化为第一个创建的Ingress配置的TLS证书，否则会初始化为系统默认证书；您可根据需要自行在SLB控制台上进行修改。</li><li>当您指定使用已存在的SLB实例时，要求该SLB实例规格必须是性能保障型（支持ENI）；同时确保80和443端口当前没有其他服务使用。</li></ol><h3 id="指定-loadbalancer" tabindex="-1">指定 LoadBalancer <a class="header-anchor" href="#指定-loadbalancer" aria-label="Permalink to &quot;指定 LoadBalancer&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>service.beta.kubernetes.io/alicloud-loadbalancer-id</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">apiVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">extensions/v1beta1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">kind</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Ingress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">metadata</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tomcat-ingress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  annotations</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    # 配置使用指定的SLB实例（SLB ID）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    service.beta.kubernetes.io/alicloud-loadbalancer-id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">lb-xxxxxxxxxx</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">            ##替换为你的SLB ID</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    service.beta.kubernetes.io/alicloud-loadbalancer-force-override-listeners</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;true&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">spec</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  tls</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">hosts</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">bar.foo.com</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    # 配置TLS证书</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    secretName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">cert-example</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  rules</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  # 配置七层域名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">host</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">bar.foo.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    http</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      paths</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      # 配置Context Path</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">        backend</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          serviceName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">tomcat</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">          servicePort</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">8080</span></span></code></pre></div><hr><ul><li><a href="https://help.aliyun.com/document_detail/86398.html" target="_blank" rel="noreferrer">通过Ingress提供7层服务访问</a></li><li><a href="https://help.aliyun.com/document_detail/86533.html" target="_blank" rel="noreferrer">Ingress 支持</a></li><li><a href="https://help.aliyun.com/document_detail/96470.html" target="_blank" rel="noreferrer">Ingress功能实现灰度发布使用的Annotation</a></li></ul>`,7),t=[e];function h(p,k,r,d,o,c){return a(),i("div",null,t)}const A=s(l,[["render",h]]);export{D as __pageData,A as default};