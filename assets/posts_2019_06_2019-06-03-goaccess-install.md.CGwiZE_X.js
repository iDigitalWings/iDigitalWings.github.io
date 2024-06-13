import{_ as t,a as s,o as e,aj as o}from"./chunks/framework.Ba_Ek9Jm.js";const _=JSON.parse('{"title":"GoAccess Install","description":"","frontmatter":{"title":"GoAccess Install","date":"2019-06-03T00:00:00.000Z","tags":["linux","nginx","goaccess"]},"headers":[],"relativePath":"posts/2019/06/2019-06-03-goaccess-install.md","filePath":"posts/2019/06/2019-06-03-goaccess-install.md","lastUpdated":1718187682000}'),a={name:"posts/2019/06/2019-06-03-goaccess-install.md"},u=o(`<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> libncursesw5-dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://tar.goaccess.io/goaccess-1.3.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> goaccess-1.3.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> goaccess-1.3/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --enable-utf8</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --enable-geoip=legacy</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    --prefix=/home/shuyi/app/goaccess/goaccess</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span> wget -O .goaccessrc https://raw.githubusercontent.com/allinurl/goaccess/master/config/goaccess.conf --no-check-certificate</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>logformat=&#39;{&quot;@timestamp&quot;:&quot;$time_iso8601&quot;,&quot;host&quot;:&quot;$server_addr&quot;,&quot;clientip&quot;:&quot;$remote_addr&quot;,&quot;remote_user&quot;:&quot;$remote_user&quot;,&quot;request&quot;:&quot;$request&quot;,&quot;http_user_agent&quot;:&quot;$http_user_agent&quot;,&quot;size&quot;:$body_bytes_sent,&quot;responsetime&quot;:$request_time,&quot;uct&quot;:&quot;$upstream_connect_time&quot;,&quot;uht&quot;:&quot;$upstream_header_time&quot;,&quot;upstreamtime&quot;:&quot;$upstream_response_time&quot;,&quot;upstreamhost&quot;:&quot;$upstream_addr&quot;,&quot;http_host&quot;:&quot;$host&quot;,&quot;url&quot;:&quot;$uri&quot;,&quot;domain&quot;:&quot;$host&quot;,&quot;xff&quot;:&quot;$http_x_forwarded_for&quot;,&quot;referer&quot;:&quot;$http_referer&quot;,&quot;status&quot;:&quot;$status&quot;}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>goaccess -c -f access.log --log-format=&#39;{&quot;@timestamp&quot;:&quot;$time_iso8601&quot;,&quot;host&quot;:&quot;$server_addr&quot;,&quot;clientip&quot;:&quot;$remote_addr&quot;,&quot;remote_user&quot;:&quot;$remote_user&quot;,&quot;request&quot;:&quot;$request&quot;,&quot;http_user_agent&quot;:&quot;$http_user_agent&quot;,&quot;size&quot;:$body_bytes_sent,&quot;responsetime&quot;:$request_time,&quot;uct&quot;:&quot;$upstream_connect_time&quot;,&quot;uht&quot;:&quot;$upstream_header_time&quot;,&quot;upstreamtime&quot;:&quot;$upstream_response_time&quot;,&quot;upstreamhost&quot;:&quot;$upstream_addr&quot;,&quot;http_host&quot;:&quot;$host&quot;,&quot;url&quot;:&quot;$uri&quot;,&quot;domain&quot;:&quot;$host&quot;,&quot;xff&quot;:&quot;$http_x_forwarded_for&quot;,&quot;referer&quot;:&quot;$http_referer&quot;,&quot;status&quot;:&quot;$status&quot;}&#39;</span></span></code></pre></div>`,2),i=[u];function n(p,q,r,l,h,c){return e(),s("div",null,i)}const k=t(a,[["render",n]]);export{_ as __pageData,k as default};
