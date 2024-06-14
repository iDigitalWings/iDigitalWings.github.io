import{_ as s,a as e,o as a,aj as i}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"Kubernetes 运行 SpringBoot 启动慢问题","description":"","frontmatter":{"title":"Kubernetes 运行 SpringBoot 启动慢问题","date":"2022-05-03T00:00:00.000Z","tags":["java","k8s"],"category":["java"]},"headers":[],"relativePath":"posts/2022/05/2022-05-03-kubernetes-springboot-start-slowly.md","filePath":"posts/2022/05/2022-05-03-kubernetes-springboot-start-slowly.md","lastUpdated":1718173059000}'),t={name:"posts/2022/05/2022-05-03-kubernetes-springboot-start-slowly.md"},n=i(`<p>最近两天遇到 Kubernetes 启动速度很慢，持续了半个小时以上才启动。查阅了相关资料， 给应用增加了资源请求和资源限制得以解决。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">spec:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  containers:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  -</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    image:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> xxx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    resources:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      limits:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        cpu:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;1&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      requests:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        cpu:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;0.5&quot;</span></span></code></pre></div><p>可能的原因是：</p><ul><li>机器被调度到资源紧张的 Node 上；</li><li>CPU 节流限制了 Pod 的 CPU 时间(可通过 container_cpu_cfs_throttled_seconds_total 指标查看)。</li></ul><p>网络上还搜索到一个答案，由于 <code>/dev/random</code> 都操作阻塞造成的。建议设备都使用 <code>/dev/urandom</code>。 可通过检查<code>$JAVA_HOME/jre/lib/security/java.security</code>中的配置。</p><div class="language-properties vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">securerandom.source</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=file:/dev/urandom</span></span></code></pre></div><p>我这里没有细查是不是和这个原因有关。顺便记录一下，看看未来是否有需要。</p><hr><ul><li><a href="https://www.yisu.com/zixun/546464.html" target="_blank" rel="noreferrer">https://www.yisu.com/zixun/546464.html</a></li><li><a href="https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/" target="_blank" rel="noreferrer">https://kubernetes.io/docs/tasks/configure-pod-container/assign-cpu-resource/</a></li><li><a href="https://heapdump.cn/article/2429542" target="_blank" rel="noreferrer">https://heapdump.cn/article/2429542</a></li></ul>`,9),p=[n];function l(r,o,h,c,d,k){return a(),e("div",null,p)}const _=s(t,[["render",l]]);export{g as __pageData,_ as default};