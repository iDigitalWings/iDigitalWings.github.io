import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"MacOS Docker Bash Completion","description":"","frontmatter":{"title":"MacOS Docker Bash Completion","date":"2017-12-19T00:00:00.000Z","tags":["macos","docker"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2017/12/2017-12-19-1-macos-docker-completion.md","filePath":"posts/2017/12/2017-12-19-1-macos-docker-completion.md","lastUpdated":1718173059000}'),h={name:"posts/2017/12/2017-12-19-1-macos-docker-completion.md"},t=n(`<p>然后使用brew安装bash-completion：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bash-completion</span></span></code></pre></div><p>如下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> info</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bash-completion</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">bash-completion:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> stable</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1.3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (bottled)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Programmable</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> completion</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">https://bash-completion.alioth.debian.org/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Conflicts</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  bash-completion@2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (because </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Differing</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> formula</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/usr/local/Cellar/bash-completion/1.3_3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (189 </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">files,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 608.2KB</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  Poured</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> bottle</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 2017-12-19</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 09:23:26</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">From:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/Homebrew/homebrew-core/blob/master/Formula/bash-completion.rb</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Caveats</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Add</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> following</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> line</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ~/.bash_profile:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-f</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> /usr/local/etc/bash_completion ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /usr/local/etc/bash_completion</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Bash</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> completion</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> has</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> been</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> installed</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  /usr/local/etc/bash_completion.d</span></span></code></pre></div><p>执行以下命令下载补全脚本，并保存到<code>bash-completion</code>的配置目录中：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://raw.githubusercontent.com/docker/docker/v</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;{{.Client.Version}}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/contrib/completion/bash/docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /usr/local/etc/bash_completion.d/docker</span></span></code></pre></div>`,6),l=[t];function p(k,e,F,o,r,d){return a(),i("div",null,l)}const y=s(h,[["render",p]]);export{g as __pageData,y as default};
