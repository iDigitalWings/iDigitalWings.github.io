import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const u=JSON.parse('{"title":"Electron package","description":"","frontmatter":{"title":"Electron package","date":"2017-09-08T00:00:00.000Z","tags":["js","electron"]},"headers":[],"relativePath":"posts/2017/09/2017-09-08-electron-package.md","filePath":"posts/2017/09/2017-09-08-electron-package.md","lastUpdated":1718193786000}'),t={name:"posts/2017/09/2017-09-08-electron-package.md"},e=n(`<h2 id="run" tabindex="-1">Run <a class="header-anchor" href="#run" aria-label="Permalink to &quot;Run&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Clone the repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/electron/electron-quick-start</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Go into the repository</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> electron-quick-start</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Run the app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> start</span></span></code></pre></div><h2 id="install-electron-packager" tabindex="-1">Install Electron packager <a class="header-anchor" href="#install-electron-packager" aria-label="Permalink to &quot;Install Electron packager&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># for use in npm scripts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> electron-packager</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># for use from cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> electron-packager</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -g</span></span></code></pre></div><h2 id="setting-productname-and-electron-version" tabindex="-1">Setting productname and electron version <a class="header-anchor" href="#setting-productname-and-electron-version" aria-label="Permalink to &quot;Setting productname and electron version&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> electron</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;electron-tutorial-app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;productName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Electron tutorial app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;0.1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;electron&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;^1.4.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;electron-packager&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;^8.1.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="building-macos-windows-and-linux-package-from-the-terminal" tabindex="-1">Building MacOS, Windows and Linux package from the terminal <a class="header-anchor" href="#building-macos-windows-and-linux-package-from-the-terminal" aria-label="Permalink to &quot;Building MacOS, Windows and Linux package from the terminal&quot;">​</a></h2><h3 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">electron-packager</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --overwrite</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --platform=darwin</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --arch=x64</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --icon=assets/icons/mac/icon.icns</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --prune=true</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --out=release-builds</span></span></code></pre></div><h2 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">electron-packager</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --overwrite</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --asar=true</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --platform=win32</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --arch=ia32</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --icon=assets/icons/win/icon.ico</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --prune=true</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --out=release-builds</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --version-string.CompanyName=CE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --version-string.FileDescription=CE</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --version-string.ProductName=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Electron Tutorial App&quot;</span></span></code></pre></div><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">electron-packager</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --overwrite</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --platform=linux</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --arch=x64</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --icon=assets/icons/png/1024x1024.png</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --prune=true</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --out=release-builds</span></span></code></pre></div><h2 id="shortcuts" tabindex="-1">Shortcuts <a class="header-anchor" href="#shortcuts" aria-label="Permalink to &quot;Shortcuts&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;electron-tutorial-app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;productName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Electron tutorial app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;0.1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;electron&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;^1.4.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;electron-packager&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;^8.1.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;package-mac&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;package-win&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Electron Tutorial App</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;"> &quot;package-linux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> package-mac</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> package-win</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> package-linux</span></span></code></pre></div><hr><p>Links:</p><ul><li><a href="https://www.christianengvall.se/electron-packager-tutorial/" target="_blank" rel="noreferrer">https://www.christianengvall.se/electron-packager-tutorial/</a></li><li><a href="https://electron.atom.io/docs/tutorial/quick-start/" target="_blank" rel="noreferrer">https://electron.atom.io/docs/tutorial/quick-start/</a></li><li><a href="https://electron.atom.io/docs/tutorial/application-distribution/" target="_blank" rel="noreferrer">https://electron.atom.io/docs/tutorial/application-distribution/</a></li><li><a href="https://electron.atom.io/docs/tutorial/application-packaging/" target="_blank" rel="noreferrer">https://electron.atom.io/docs/tutorial/application-packaging/</a></li><li><a href="https://electron.atom.io/docs/tutorial/installation/" target="_blank" rel="noreferrer">https://electron.atom.io/docs/tutorial/installation/</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,22),l=[e];function h(p,k,r,o,d,c){return a(),i("div",null,l)}const C=s(t,[["render",h]]);export{u as __pageData,C as default};