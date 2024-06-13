import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const u=JSON.parse('{"title":"Kubernetes Plugins","description":"","frontmatter":{"title":"Kubernetes Plugins","date":"2019-05-20T00:00:00.000Z","tags":["kubernetes","helm","aliyun"]},"headers":[],"relativePath":"posts/2019/05/2019-05-20-k8s-plugins.md","filePath":"posts/2019/05/2019-05-20-k8s-plugins.md","lastUpdated":1718173059000}'),t={name:"posts/2019/05/2019-05-20-k8s-plugins.md"},l=n(`<p>更新kubectl到 1.12+</p><p><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-macos" target="_blank" rel="noreferrer">Install Kubectl</a></p><p><code>/usr/local/bin/kubectl-foo</code>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># optional argument handling</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [[ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ]]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;1.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># optional argument handling</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [[ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ]]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    echo</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> $KUBECONFIG</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    exit</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;I am a plugin named kubectl-foo&quot;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /usr/local/bin/kubectl-foo</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>kubectl foo</span></span>
<span class="line"><span>kubectl foo version</span></span></code></pre></div><hr><ul><li><a href="https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/" target="_blank" rel="noreferrer">Kubectl Puligns</a></li></ul>`,8),e=[l];function p(h,k,o,d,r,c){return a(),i("div",null,e)}const F=s(t,[["render",p]]);export{u as __pageData,F as default};
