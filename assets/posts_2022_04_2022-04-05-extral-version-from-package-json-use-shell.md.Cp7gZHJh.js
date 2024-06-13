import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const c=JSON.parse('{"title":"在 Shell 中从 NPM package.json 中获取 Version","description":"","frontmatter":{"title":"在 Shell 中从 NPM package.json 中获取 Version","date":"2022-04-06T00:00:00.000Z","tags":["shell","linux"],"category":["Java"]},"headers":[],"relativePath":"posts/2022/04/2022-04-05-extral-version-from-package-json-use-shell.md","filePath":"posts/2022/04/2022-04-05-extral-version-from-package-json-use-shell.md","lastUpdated":1718173059000}'),e={name:"posts/2022/04/2022-04-05-extral-version-from-package-json-use-shell.md"},n=t('<p>CI 的时候 Build 之后要用到软件版本，Git上又没有打 Tag，需要获得软件的版本， npm 命令的话有进程隔离，命令之外获取不到，现从Shell里面直接读 <code>package.json</code>。</p><p>由于对 awk，sed 等命令不太熟悉，特此记录下三种方法：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PACKAGE_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;require(&#39;./package.json&#39;).version&quot;`</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PACKAGE_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sed</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;s/.*&quot;version&quot;:\\s&quot;\\(.*\\)&quot;.*/\\1/;t;d&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ./package.json</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">PACKAGE_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> package.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> head</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> awk</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -F:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;{ print $2 }&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> sed</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;s/[&quot;,]//g&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div>',3),h=[n];function l(k,p,r,d,o,g){return a(),i("div",null,h)}const y=s(e,[["render",l]]);export{c as __pageData,y as default};
