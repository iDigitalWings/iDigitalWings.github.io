import{_ as e,a,o as t,aj as s}from"./chunks/framework.Ba_Ek9Jm.js";const _=JSON.parse('{"title":"Get host Ip from docker","description":"","frontmatter":{"title":"Get host Ip from docker","date":"2017-12-09T00:00:00.000Z","tags":["docker","macos"]},"headers":[],"relativePath":"posts/2017/12/2017-12-09-2-get-hostip-from-docker.md","filePath":"posts/2017/12/2017-12-09-2-get-hostip-from-docker.md","lastUpdated":1718173059000}'),o={name:"posts/2017/12/2017-12-09-2-get-hostip-from-docker.md"},r=s('<h2 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h2><p>special Mac-only DNS name <code>docker.for.mac.localhost</code></p><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">/sbin/ip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> route</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">awk</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;/default/ { print $3 }&#39;</span></span></code></pre></div><ul><li><a href="https://docs.docker.com/docker-for-mac/networking/#use-cases-and-workarounds" target="_blank" rel="noreferrer">Networking features in Docker for Mac</a></li><li><a href="https://stackoverflow.com/questions/22944631/how-to-get-the-ip-address-of-the-docker-host-from-inside-a-docker-container" target="_blank" rel="noreferrer">How to get the IP address of the docker host from inside a docker container</a></li></ul>',5),i=[r];function n(c,d,h,l,p,k){return t(),a("div",null,i)}const f=e(o,[["render",n]]);export{_ as __pageData,f as default};