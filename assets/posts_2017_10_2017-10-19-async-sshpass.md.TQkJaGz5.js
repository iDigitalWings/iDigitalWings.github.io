import{_ as s,a,o as t,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const w=JSON.parse('{"title":"Use rsync with sshpass","description":"","frontmatter":{"title":"Use rsync with sshpass","date":"2017-10-19T00:00:00.000Z","tags":["linux"]},"headers":[],"relativePath":"posts/2017/10/2017-10-19-async-sshpass.md","filePath":"posts/2017/10/2017-10-19-async-sshpass.md","lastUpdated":1718193786000}'),o={name:"posts/2017/10/2017-10-19-async-sshpass.md"},r=e('<p>使用sshpass：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>rsync -ratlzvP --rsh=&quot;sshpass -p ${password} ssh -o StrictHostKeyChecking=no -l ${user}&quot; ${user}@${ip}:${remote_path} ${host_path}</span></span></code></pre></div><hr><p>下面是segmentfault的一个总结：</p><p>rsync有两种常用的认证方式，一种为rsync-daemon方式，另外一种则是ssh。 在一些场合，使用rsync-daemon方式会比较缺乏灵活性，ssh方式则成为首选。</p><p>1、从本地同步到远程 rsync -avz -e ssh /data/wwwroot/shop/upload/ <a href="mailto:root@120.24.170.210" target="_blank" rel="noreferrer">root@120.24.170.210</a>:/data/wwwroot/shop/upload rsync -avz -e &#39;ssh -p 61124&#39; /data/wwwroot/shop/upload/ <a href="mailto:root@120.24.170.210" target="_blank" rel="noreferrer">root@120.24.170.210</a>:/data/wwwroot/shop/upload 以上两种方式的区别就是远程的ssh默认端口换了</p><p>2、从远程同步到本地 rsync -avzP -e ssh <a href="mailto:root@114.215.191.193" target="_blank" rel="noreferrer">root@114.215.191.193</a>:/data/wwwroot/shop/upload /data/wwwroot/shop/upload/ rsync -avzP -e &#39;ssh -p 61124&#39; <a href="mailto:root@114.215.191.193" target="_blank" rel="noreferrer">root@114.215.191.193</a>:/data/wwwroot/shop/upload /data/wwwroot/shop/upload/</p><p>Links:</p><ul><li><a href="https://segmentfault.com/a/1190000007634970" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000007634970</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',11),p=[r];function n(l,h,d,c,i,_){return t(),a("div",null,p)}const m=s(o,[["render",n]]);export{w as __pageData,m as default};
