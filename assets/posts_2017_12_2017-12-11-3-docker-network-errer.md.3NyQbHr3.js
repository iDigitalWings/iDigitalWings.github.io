import{_ as e,a as t,o as a,aj as o}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"Docker ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network","description":"","frontmatter":{"title":"Docker ERROR: could not find an available, non-overlapping IPv4 address pool among the defaults to assign to the network","date":"2017-12-11T00:00:00.000Z","tags":["springboot","metrics"]},"headers":[],"relativePath":"posts/2017/12/2017-12-11-3-docker-network-errer.md","filePath":"posts/2017/12/2017-12-11-3-docker-network-errer.md","lastUpdated":1718173059000}'),s={name:"posts/2017/12/2017-12-11-3-docker-network-errer.md"},n=o('<p>I&#39;ve seen it suggested docker may be at its maximum of created networks. The command</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> network</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> prune</span></span></code></pre></div><p>can be used to remove all networks not used by at least one container.</p><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>docker network rm $(docker network ls | grep &quot;bridge&quot; | awk &#39;/ / { print $1 }&#39;)</span></span></code></pre></div><hr><p><a href="https://stackoverflow.com/questions/43720339/docker-error-could-not-find-an-available-non-overlapping-ipv4-address-pool-am" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/43720339/docker-error-could-not-find-an-available-non-overlapping-ipv4-address-pool-am</a></p>',7),r=[n];function i(d,p,l,c,k,h){return a(),t("div",null,r)}const u=e(s,[["render",i]]);export{g as __pageData,u as default};
