import{_ as s,a,o as t,aj as i}from"./chunks/framework.Ba_Ek9Jm.js";const F=JSON.parse('{"title":"Jenkins 任务监控","description":"","frontmatter":{"title":"Jenkins 任务监控","date":"2023-01-02T00:00:00.000Z","tags":["jenkins"],"category":["其它"]},"headers":[],"relativePath":"posts/2023/01/2023-01-02-jenkins-monitor.md","filePath":"posts/2023/01/2023-01-02-jenkins-monitor.md","lastUpdated":1718173059000}'),n={name:"posts/2023/01/2023-01-02-jenkins-monitor.md"},e=i(`<h2 id="datadog" tabindex="-1">datadog <a class="header-anchor" href="#datadog" aria-label="Permalink to &quot;datadog&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> datadog-agent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> datadog-agent</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> datadog-agent</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /etc/datadog-agent/conf.d/gitlab.d/conf.yaml</span></span></code></pre></div>`,2),l=[e];function d(p,o,h,k,r,c){return t(),a("div",null,l)}const _=s(n,[["render",d]]);export{F as __pageData,_ as default};
