import{_ as e,a,o as s,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const b=JSON.parse('{"title":"Tomcat: the response has already been committed","description":"","frontmatter":{"title":"Tomcat: the response has already been committed","date":"2017-09-28T00:00:00.000Z","tags":["spring","tomcat"],"category":["Java"]},"headers":[],"relativePath":"posts/2017/09/2017-09-28-response-has-already-been-committed.md","filePath":"posts/2017/09/2017-09-28-response-has-already-been-committed.md","lastUpdated":1718193786000}'),o={name:"posts/2017/09/2017-09-28-response-has-already-been-committed.md"},n=t(`<p>Server遇到如下错误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>o.s.boot.web.support.ErrorPageFilter     : Cannot forward to error page for </span></span>
<span class="line"><span>request [/strategy/list/] as the response has already been committed. As a </span></span>
<span class="line"><span>result, the response may have the wrong status code. If your application is </span></span>
<span class="line"><span>running on WebSphere Application Server you may be able to resolve this </span></span>
<span class="line"><span>problem by setting com.ibm.ws.webcontainer.invokeFlushAfterService to false</span></span></code></pre></div><p>网上有看到一些解决方案，实际上是发送了多次报表请求，在第一个请求还没有返回的时候。</p><ul><li><a href="http://www.jianshu.com/p/d5b09aa5d082" target="_blank" rel="noreferrer">http://www.jianshu.com/p/d5b09aa5d082</a></li><li><a href="https://stackoverflow.com/questions/30170586/how-to-disable-errorpagefilter-in-spring-boot" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/30170586/how-to-disable-errorpagefilter-in-spring-boot</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,6),r=[n];function p(i,l,c,d,h,m){return s(),a("div",null,r)}const u=e(o,[["render",p]]);export{b as __pageData,u as default};
