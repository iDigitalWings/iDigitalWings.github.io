import{_ as s,a,o as i,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const u=JSON.parse('{"title":"Etcd backup Restore","description":"","frontmatter":{"title":"Etcd backup Restore","date":"2022-09-03T00:00:00.000Z","tags":["etcd"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/09/2022-09-03-ectd-backup-restore.md","filePath":"posts/2022/09/2022-09-03-ectd-backup-restore.md","lastUpdated":1718173059000}'),e={name:"posts/2022/09/2022-09-03-ectd-backup-restore.md"},n=t(`<p>传统使用 <code>etcdctl snapshot</code> 进行备份需要使用到 etcd 命令，备份的位置一般在服务器上，这时候比如容器等场景， 磁盘挂载不方便。</p><p>推荐 <a href="https://github.com/jinmukeji/etcddump" target="_blank" rel="noreferrer">etcddump</a> 工具。</p><p>可以使用 go get 安装：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">go</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> github.com/jinmukeji/etcddump</span></span></code></pre></div><p>也可以在 <a href="https://github.com/jinmukeji/etcddump/releases" target="_blank" rel="noreferrer">Github Release</a> 界面下载编译好的包。</p><p>使用比较简单，可以访问 2379 即可。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># help</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">etcddump</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -h</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># dump</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">etcddump</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> dump</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	--address=127.0.0.1:2379</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	--prefix=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/micro/config/jm&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	--output=test.out</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># restore</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">etcddump</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> restore</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	--address=127.0.0.1:2379</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">	--file=test.out</span></span></code></pre></div>`,7),p=[n];function l(h,d,k,r,c,o){return i(),a("div",null,p)}const F=s(e,[["render",l]]);export{u as __pageData,F as default};
