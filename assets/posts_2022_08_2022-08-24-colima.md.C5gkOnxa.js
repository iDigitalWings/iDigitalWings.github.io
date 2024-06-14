import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"Colima: Mac Docker Desktop 的替代方案","description":"","frontmatter":{"title":"Colima: Mac Docker Desktop 的替代方案","date":"2022-08-24T00:00:00.000Z","tags":["containerd","docker"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/08/2022-08-24-colima.md","filePath":"posts/2022/08/2022-08-24-colima.md","lastUpdated":1718173059000}'),n={name:"posts/2022/08/2022-08-24-colima.md"},l=t(`<p>Container runtimes on macOS (and Linux) with minimal setup.</p><blockquote><p>Colima means Containers in <a href="https://github.com/lima-vm/lima" target="_blank" rel="noreferrer">Lima</a>.</p></blockquote><p>Colima 正成为 Docker 桌面版的一个热门开放替代方案。 它通过在 Lima VM 中配置 Docker 容器运行时环境， 可以在 macOS 上配置 Docker CLI 并处理端口转发和挂载存储。 Colima 使用 containerd 作为容器运行时， 这也是大多数托管 Kubernetes 服务采用的容器运行时(提升了开发与生产环境的一致性)。 您可以基于 Colima 轻松地使用和测试 containerd 的最新特性，例如容器镜像的惰性加载。</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># MacPorts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> port</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> colima</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Homebrew</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> colima</span></span></code></pre></div><h2 id="start" tabindex="-1">Start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;Start&quot;">​</a></h2><p>Show container context:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> docker context show</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">default</span></span></code></pre></div><p>Start colima:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">colima</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --cpu</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 4</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --memory</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 4</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> colima start --cpu 4 --memory 4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">INFO[0000]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> starting</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> colima</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">INFO[0000]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> runtime:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">INFO[0000]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> preparing</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                         context=vm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">INFO[0000]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> starting</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                                  context=vm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">INFO[0059]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> provisioning</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                              context=docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">INFO[0059]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> starting</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ...</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                                  context=docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">INFO[0064]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> done</span></span></code></pre></div><p>show context:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> docker context show</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">colima</span></span></code></pre></div><h2 id="list-context" tabindex="-1">List Context <a class="header-anchor" href="#list-context" aria-label="Permalink to &quot;List Context&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> docker context list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                TYPE</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                DESCRIPTION</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                               DOCKER</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ENDPOINT</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                                  KUBERNETES</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ENDPOINT</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">   ORCHESTRATOR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">colima</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            moby</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                colima</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                                    unix:///Users/demo/.colima/default/docker.sock</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">default</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">             moby</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                Current</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> DOCKER_HOST</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> based</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> configuration</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">   unix:///var/run/docker.sock</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                                            swarm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">desktop-linux</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">       moby</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">                                                          unix:///Users/demo/.docker/run/docker.sock</span></span></code></pre></div><h2 id="switch-to-docker" tabindex="-1">Switch to Docker <a class="header-anchor" href="#switch-to-docker" aria-label="Permalink to &quot;Switch to Docker&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">colima</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stop</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># tell the Docker client which container you want to work with. </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># The name default refers to Docker Desktop for Mac</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> context</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># When colima start is run, it automatically switches Docker to the colima context</span></span></code></pre></div><h2 id="lima" tabindex="-1">Lima <a class="header-anchor" href="#lima" aria-label="Permalink to &quot;Lima&quot;">​</a></h2><p>Lima is Linux virtual machines, typically on macOS, for running containerd.</p><hr><ul><li><a href="https://github.com/abiosoft/colima" target="_blank" rel="noreferrer">Colima</a></li><li><a href="https://github.com/lima-vm/lima" target="_blank" rel="noreferrer">Lima</a></li></ul>`,21),e=[l];function h(p,k,r,o,d,c){return a(),i("div",null,e)}const m=s(n,[["render",h]]);export{g as __pageData,m as default};