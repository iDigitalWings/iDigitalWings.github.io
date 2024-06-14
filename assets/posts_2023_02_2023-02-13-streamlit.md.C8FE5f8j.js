import{_ as s,a as i,o as a,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const F=JSON.parse('{"title":"Streamlit 使用","description":"","frontmatter":{"title":"Streamlit 使用","date":"2023-02-13T00:00:00.000Z","tags":["ai","ai-tools","python"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/02/2023-02-13-streamlit.md","filePath":"posts/2023/02/2023-02-13-streamlit.md","lastUpdated":1718173059000}'),t={name:"posts/2023/02/2023-02-13-streamlit.md"},l=e(`<p>Streamlit 是一个开源 Python 库，可以轻松创建和共享用于机器学习和数据科学的漂亮自定义 Web 应用程序。只需几分钟，您就可以构建和部署功能强大的数据应用。所以让我们开始吧！</p><ul><li><a href="https://streamlit.io/" target="_blank" rel="noreferrer">Streamlit 官网</a></li><li><a href="https://docs.streamlit.io/" target="_blank" rel="noreferrer">Streamlit 文档</a></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># pip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ensurepip</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --upgrade</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># pipenv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pipenv</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># xcode in mac</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">xcode-select</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --install</span></span></code></pre></div><p>进入项目</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> myproject</span></span></code></pre></div><p>安装并激活环境。（生成 <code>Pipfile</code> 文件）</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pipenv</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> shell</span></span></code></pre></div><p>安装 streamlit</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> streamlit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pipenv</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> streamlit</span></span></code></pre></div><p>验证</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">streamlit</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> hello</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>激活环境</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pipenv</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> shell</span></span></code></pre></div><p>运行</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">streamlit</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> myfile.py</span></span></code></pre></div>`,17),p=[l];function n(h,d,k,r,o,c){return a(),i("div",null,p)}const m=s(t,[["render",n]]);export{F as __pageData,m as default};