import{_ as a,a as s,o as i,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const v=JSON.parse('{"title":"Java Library Path 的指定方式","description":"","frontmatter":{"title":"Java Library Path 的指定方式","date":"2021-09-29T00:00:00.000Z","tags":["java"],"category":["Java"]},"headers":[],"relativePath":"posts/2021/09/2021-09-29-java-library-path.md","filePath":"posts/2021/09/2021-09-29-java-library-path.md","lastUpdated":1718173059000}'),e={name:"posts/2021/09/2021-09-29-java-library-path.md"},l=t('<h2 id="ld-library-path" tabindex="-1">LD_LIBRARY_PATH <a class="header-anchor" href="#ld-library-path" aria-label="Permalink to &quot;LD_LIBRARY_PATH&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> LD_LIBRARY_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/java/jdk/jre/lib/amd64</span></span></code></pre></div><h2 id="java参数" tabindex="-1">Java参数 <a class="header-anchor" href="#java参数" aria-label="Permalink to &quot;Java参数&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/jdk/jre/bin/java</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -Djava.library.path=/jdk/jre/lib/amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  app.jar</span></span></code></pre></div>',4),r=[l];function h(p,n,d,o,c,k){return i(),s("div",null,r)}const b=a(e,[["render",h]]);export{v as __pageData,b as default};