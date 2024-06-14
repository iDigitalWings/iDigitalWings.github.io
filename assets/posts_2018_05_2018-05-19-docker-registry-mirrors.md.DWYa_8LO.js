import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"Docker registry mirrors","description":"","frontmatter":{"title":"Docker registry mirrors","date":"2018-05-19T00:00:00.000Z","tags":["ubuntu","docker"]},"headers":[],"relativePath":"posts/2018/05/2018-05-19-docker-registry-mirrors.md","filePath":"posts/2018/05/2018-05-19-docker-registry-mirrors.md","lastUpdated":1718173059000}'),e={name:"posts/2018/05/2018-05-19-docker-registry-mirrors.md"},n=t(`<h2 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-label="Permalink to &quot;Ubuntu&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /etc/docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /etc/docker/daemon.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &lt;&lt;-</span><span style="--shiki-light:#032F62;--shiki-dark:#ADBAC7;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;registry-mirrors&quot;: [&quot;https://gwu7r07s.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#ADBAC7;">EOF</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> docker</span></span></code></pre></div>`,2),r=[n];function l(p,h,k,o,d,c){return a(),i("div",null,r)}const u=s(e,[["render",l]]);export{g as __pageData,u as default};