import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const c=JSON.parse('{"title":"设置 Npm Registry 的方式","description":"","frontmatter":{"title":"设置 Npm Registry 的方式","date":"2022-08-16T00:00:00.000Z","tags":["javascript"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/08/2022-08-16-config-npm-registry.md","filePath":"posts/2022/08/2022-08-16-config-npm-registry.md","lastUpdated":1718173059000}'),t={name:"posts/2022/08/2022-08-16-config-npm-registry.md"},p=n(`<h2 id="nrm" tabindex="-1">NRM <a class="header-anchor" href="#nrm" aria-label="Permalink to &quot;NRM&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">➜</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ~</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nrm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">➜</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ~</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> ----------</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://registry.npmjs.org/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> ---------</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://registry.yarnpkg.com/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  tencent</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> ------</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://mirrors.cloud.tencent.com/npm/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> ---------</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://r.cnpmjs.org/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  taobao</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -------</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://registry.npmmirror.com/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  npmMirror</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> ----</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://skimdb.npmjs.com/registry/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">➜</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ~</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nrm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> taobao</span></span></code></pre></div><h2 id="手动" tabindex="-1">手动 <a class="header-anchor" href="#手动" aria-label="Permalink to &quot;手动&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 手动设置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://registry.npm.taobao.org</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> registry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 命令行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://registry.npm.taobao.org</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 修改 .npmrc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">registry</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 使用 cnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --registry=https://registry.npmmirror.com</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">cnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [name]</span></span></code></pre></div>`,4),h=[p];function l(k,e,r,F,g,d){return a(),i("div",null,h)}const o=s(t,[["render",l]]);export{c as __pageData,o as default};