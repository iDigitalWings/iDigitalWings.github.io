import{_ as a,a as i,o as s,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const m=JSON.parse('{"title":"Linux/Nginx: Open File Limit","description":"","frontmatter":{"title":"Linux/Nginx: Open File Limit","date":"2017-11-15T00:00:00.000Z","tags":["linux","nginx","ulimit"]},"headers":[],"relativePath":"posts/2017/11/2017-11-15-1-nginx-file-limit.md","filePath":"posts/2017/11/2017-11-15-1-nginx-file-limit.md","lastUpdated":1718173059000}'),t={name:"posts/2017/11/2017-11-15-1-nginx-file-limit.md"},l=e(`<h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h2><p><code>Too Many Open Files</code></p><h3 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置&quot;">​</a></h3><ol><li>应用级别 <code>nginx.conf</code></li></ol><ul><li><code>worker_rlimit_nofile</code> ：限制单个工作进程打开的最大文件数</li></ul><ol start="2"><li>系统级别</li></ol><ul><li><code>/etc/security/limits.conf</code></li></ul><ol start="3"><li>内核级别 <code>fs.file-max</code></li></ol><ul><li>file-max的默认值大概是系统内存的10%（系统内存以kb计算），别设置的比系统默认的还小</li></ul><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h3><ol><li>验证nginx程序的限制</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -ef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> nginx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 将得出的PID XXX带入下面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /proc/XXX/limits</span></span></code></pre></div><ol start="2"><li>验证系统级别的限制</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ ulimit -n</span></span></code></pre></div><ol start="3"><li>验证内核级别的限制</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>$ cat /proc/sys/fs/file-max</span></span></code></pre></div><h2 id="系统最大打开文件描述符数" tabindex="-1">系统最大打开文件描述符数 <a class="header-anchor" href="#系统最大打开文件描述符数" aria-label="Permalink to &quot;系统最大打开文件描述符数&quot;">​</a></h2><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>cat /proc/sys/fs/file-max</span></span></code></pre></div><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>临时</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>echo 1000000 &gt; /proc/sys/fs/file-max</span></span></code></pre></div><p>永久</p><p><code>/etc/sysctl.conf</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>fs.file-max = 1000000</span></span></code></pre></div><h2 id="进程最大打开文件描述符数" tabindex="-1">进程最大打开文件描述符数 <a class="header-anchor" href="#进程最大打开文件描述符数" aria-label="Permalink to &quot;进程最大打开文件描述符数&quot;">​</a></h2><p>user limit中nofile的soft limit</p><h3 id="get-1" tabindex="-1">get <a class="header-anchor" href="#get-1" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ulimit -n</span></span>
<span class="line"><span>ulimit -Hn # hard limit</span></span>
<span class="line"><span>ulimit -Sn # soft limit</span></span></code></pre></div><h3 id="set-1" tabindex="-1">set <a class="header-anchor" href="#set-1" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>soft limit不能大于hard limit</p><p>临时(当前Session)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>ulimit -Sn 65355</span></span>
<span class="line"><span>ulimit -Hn 65355</span></span>
<span class="line"><span>ulimit -n 1800000 # 同时设置soft limit和hard limit</span></span></code></pre></div><p>永久</p><p><code>/etc/security/limits.conf</code></p><p>增加：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>chanon           soft    nofile          1800000</span></span>
<span class="line"><span>chanon           hard   nofile          2000000</span></span></code></pre></div><p>重启生效。</p><p>设置nofile的hard limit还有一点要注意的就是hard limit 不能大于<code>/proc/sys/fs/nr_open</code>。否则无法正常登录。</p><h2 id="查看当前系统使用的打开文件描述符数" tabindex="-1">查看当前系统使用的打开文件描述符数 <a class="header-anchor" href="#查看当前系统使用的打开文件描述符数" aria-label="Permalink to &quot;查看当前系统使用的打开文件描述符数&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /proc/sys/fs/file-nr</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">5664</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        0</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        186405</span></span></code></pre></div><ul><li>第一个数表示当前系统已分配使用的打开文件描述符数，</li><li>第二个数为分配后已释放的（目前已不再使用），</li><li>第三个数等于file-max。</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">ulimit</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -u</span></span></code></pre></div><h2 id="proc-目录" tabindex="-1">/proc 目录 <a class="header-anchor" href="#proc-目录" aria-label="Permalink to &quot;/proc 目录&quot;">​</a></h2><p>/proc 目录包括很多系统当前状态的参数</p><ul><li>/proc/meminfo</li><li>/proc/cpuinfo</li><li>/proc/sys/fs/file-max #系统总限制</li><li>/proc/sys/fs/file-nr #整个系统目前使用的文件句柄数量</li></ul><hr><ul><li><a href="http://blog.csdn.net/superchanon/article/details/13303705" target="_blank" rel="noreferrer">Linux最大打开文件描述符数</a></li><li><a href="http://blog.csdn.net/taijianyu/article/details/5976319" target="_blank" rel="noreferrer">linux /etc/security/limits.conf的相关说明</a></li><li><a href="http://www.jianshu.com/p/23ee9db2a620" target="_blank" rel="noreferrer">使用ulimit 命令、/etc/security/limits.conf、proc 调整系统参数</a></li><li><a href="http://blog.csdn.net/jacson_bai/article/details/42171637" target="_blank" rel="noreferrer">Nginx: Too Many Open Files解决方案汇总</a></li></ul><hr>`,49),n=[l];function p(o,h,d,c,r,u){return s(),i("div",null,n)}const k=a(t,[["render",p]]);export{m as __pageData,k as default};
