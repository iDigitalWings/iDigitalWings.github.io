import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const p="/assets/npmgraph.DXLA1qI6.png",e="/assets/npmgraph-2.DOCjnxQz.png",l="/assets/webpack-visualizer.7Oi3B4op.png",h="/assets/webpack-analyse-1.r6BWorLa.png",t="/assets/webpack-analyse-2.DWpVqGJ6.png",k="/assets/depchecker.CmDXtYg8.png",r="/assets/anvaka-2d.BfK_5WBR.png",F="/assets/anvaka-3d.CoKcu9HZ.png",d="/assets/lerna-dependencies.F_aWotJ_.png",_=JSON.parse('{"title":"NPM 依赖图和分析 （NPM Dependency Graph and Analyze）","description":"","frontmatter":{"title":"NPM 依赖图和分析 （NPM Dependency Graph and Analyze）","date":"2022-05-09T00:00:00.000Z","tags":["其它"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/05/2022-05-09-npm-dependency-graph.md","filePath":"posts/2022/05/2022-05-09-npm-dependency-graph.md","lastUpdated":1718175555000}'),g={name:"posts/2022/05/2022-05-09-npm-dependency-graph.md"},c=n('<h2 id="npmgraph-js-推荐" tabindex="-1"><a href="https://npmgraph.js.org/" target="_blank" rel="noreferrer">npmgraph.js</a> (推荐) <a class="header-anchor" href="#npmgraph-js-推荐" aria-label="Permalink to &quot;[npmgraph.js](https://npmgraph.js.org/) (推荐)&quot;">​</a></h2><p>打开网页上传 <code>package.json</code> 即可，可以下载生成的 SVG。</p><p><img src="'+p+'" alt=""></p><p><img src="'+e+`" alt=""></p><h2 id="npm-list-ll" tabindex="-1">npm list/ll <a class="header-anchor" href="#npm-list-ll" aria-label="Permalink to &quot;npm list/ll&quot;">​</a></h2><p>可以使用 <code>npm list</code> 或者 <code>npm ll</code> 来查看本地项目依赖。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/core@7.17.8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/plugin-proposal-nullish-coalescing-operator@7.16.7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/plugin-proposal-optional-chaining@7.16.7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/plugin-transform-runtime@7.17.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/preset-env@7.16.11</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/runtime-corejs3@7.17.8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/runtime@7.17.8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @element-plus/icons-vue@1.1.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @fortawesome/fontawesome-svg-core@6.1.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @fortawesome/free-solid-svg-icons@6.1.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @fortawesome/vue-fontawesome@3.0.0-5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @storybook/addon-actions@6.4.19</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @storybook/addon-essentials@6.4.19</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @storybook/addon-interactions@6.4.19</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @storybook/addon-links@6.4.19</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @storybook/addon-storyshots@6.4.19</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @storybook/testing-library@0.0.9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @storybook/vue3@6.4.19</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/cli-plugin-babel@5.0.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/cli-plugin-typescript@5.0.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/cli-service@5.0.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> babel-loader@8.2.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> babel-plugin-add-module-exports@1.0.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> babel-plugin-import@1.13.3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clean-webpack-plugin@4.0.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> core-js@3.21.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cross-env@7.0.3</span></span></code></pre></div><h2 id="npm-remote-ls" tabindex="-1">npm-remote-ls <a class="header-anchor" href="#npm-remote-ls" aria-label="Permalink to &quot;npm-remote-ls&quot;">​</a></h2><p>本地安装：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> npm-remote-ls</span></span></code></pre></div><p>查看：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm-remote-ls</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> vue</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm-remote-ls</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> vue</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">└─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> vue@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/server-renderer@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-ssr@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-dom@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/runtime-dom@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/runtime-core@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/reactivity@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> csstype@2.6.20</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-sfc@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-core@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> estree-walker@2.0.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> source-map@0.6.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/parser@7.18.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/parser@7.18.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/reactivity-transform@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @babel/parser@7.18.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> estree-walker@2.0.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-core@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> magic-string@0.25.9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> estree-walker@2.0.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-ssr@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> magic-string@0.25.9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sourcemap-codec@1.4.8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> source-map@0.6.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> postcss@8.4.14</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> picocolors@1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> source-map-js@1.0.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nanoid@3.3.4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   │</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-dom@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">   └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-dom@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      ├─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/shared@3.2.36</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">      └─</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> @vue/compiler-core@3.2.36</span></span></code></pre></div><h2 id="webpack-visualizer" tabindex="-1"><a href="https://chrisbateman.github.io/webpack-visualizer/" target="_blank" rel="noreferrer">webpack-visualizer</a> <a class="header-anchor" href="#webpack-visualizer" aria-label="Permalink to &quot;[webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/)&quot;">​</a></h2><p>webpack-visualizer 可以看到项目打包的情况。</p><p><img src="`+l+'" alt=""></p><h2 id="webpack-analyzer" tabindex="-1"><a href="https://webpack.github.io/analyse" target="_blank" rel="noreferrer">Webpack Analyzer</a> <a class="header-anchor" href="#webpack-analyzer" aria-label="Permalink to &quot;[Webpack Analyzer](https://webpack.github.io/analyse)&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">webpack</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --profile</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> webpack-stats.json</span></span></code></pre></div><p><a href="https://webpack.github.io/analyse" target="_blank" rel="noreferrer">在线使用</a> 生成文件。</p><p><img src="'+h+'" alt=""></p><p><img src="'+t+'" alt=""></p><h2 id="depchecker" tabindex="-1"><a href="https://depchecker.com/" target="_blank" rel="noreferrer">depchecker</a> <a class="header-anchor" href="#depchecker" aria-label="Permalink to &quot;[depchecker](https://depchecker.com/)&quot;">​</a></h2><p><img src="'+k+'" alt=""></p><h2 id="anvaka" tabindex="-1"><a href="https://npm.anvaka.com/" target="_blank" rel="noreferrer">anvaka</a> <a class="header-anchor" href="#anvaka" aria-label="Permalink to &quot;[anvaka](https://npm.anvaka.com/)&quot;">​</a></h2><p>在线使用，可以输入包名进行查询。</p><p><img src="'+r+'" alt=""></p><p>可以查看三维图，但是并没有包信息，只有节点，没有太多用。</p><p><img src="'+F+'" alt=""></p><h2 id="npm-dependency-graph" tabindex="-1"><a href="https://github.com/TypeFox/npm-dependency-graph" target="_blank" rel="noreferrer">npm-dependency-graph</a> <a class="header-anchor" href="#npm-dependency-graph" aria-label="Permalink to &quot;[npm-dependency-graph](https://github.com/TypeFox/npm-dependency-graph)&quot;">​</a></h2><p><img src="'+d+`" alt=""></p><h3 id="在线使用" tabindex="-1">在线使用 <a class="header-anchor" href="#在线使用" aria-label="Permalink to &quot;在线使用&quot;">​</a></h3><p>打开 <a href="https://gitpod.io/#https://github.com/TypeFox/npm-dependency-graph/" target="_blank" rel="noreferrer">Gitpod.</a> 在线使用。</p><h3 id="本地运行" tabindex="-1">本地运行 <a class="header-anchor" href="#本地运行" aria-label="Permalink to &quot;本地运行&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/TypeFox/npm-dependency-graph.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> npm-dependency-graph</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> &amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> start</span></span></code></pre></div><p>启动成功后访问： <a href="http://127.0.0.1:3001/" target="_blank" rel="noreferrer">http://127.0.0.1:3001/</a></p><hr><ul><li><a href="https://backstage.io/" target="_blank" rel="noreferrer">https://backstage.io/</a></li><li><a href="https://github.com/spotify/backstage" target="_blank" rel="noreferrer">https://github.com/spotify/backstage</a></li><li><a href="https://github.com/spotify/backstage#project-roadmap" target="_blank" rel="noreferrer">https://github.com/spotify/backstage#project-roadmap</a></li><li><a href="https://medium.com/@joeclever/three-simple-ways-to-inspect-a-webpack-bundle-7f6a8fe7195d" target="_blank" rel="noreferrer">https://medium.com/@joeclever/three-simple-ways-to-inspect-a-webpack-bundle-7f6a8fe7195d</a></li></ul>`,37),o=[c];function y(D,m,b,u,C,v){return a(),i("div",null,o)}const w=s(g,[["render",y]]);export{_ as __pageData,w as default};