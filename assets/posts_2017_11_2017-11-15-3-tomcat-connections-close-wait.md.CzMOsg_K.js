import{_ as t,a as o,o as e,aj as a}from"./chunks/framework.Ba_Ek9Jm.js";const h=JSON.parse('{"title":"Tomcat Connections Close Wait","description":"","frontmatter":{"title":"Tomcat Connections Close Wait","date":"2017-11-15T00:00:00.000Z","tags":["tomcat"]},"headers":[],"relativePath":"posts/2017/11/2017-11-15-3-tomcat-connections-close-wait.md","filePath":"posts/2017/11/2017-11-15-3-tomcat-connections-close-wait.md","lastUpdated":1718173059000}'),s={name:"posts/2017/11/2017-11-15-3-tomcat-connections-close-wait.md"},n=a(`<p>设置 server.xml <code>keepAliveTimeout=&quot;0&quot;</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&lt;Connector port=&quot;33011&quot; protocol=&quot;org.apache.coyote.http11.Http11NioProtocol&quot;</span></span>
<span class="line"><span>           connectionTimeout=&quot;20000&quot; maxThreads=&quot;1000&quot; URIEncoding=&quot;UTF-8&quot; keepAliveTimeout=&quot;0&quot; /&gt;</span></span></code></pre></div><ul><li><a href="https://segmentfault.com/q/1010000003919178" target="_blank" rel="noreferrer">omcat不定期close_wait过多</a></li><li><a href="https://www.cnblogs.com/sunxucool/p/3449068.html" target="_blank" rel="noreferrer">服务器TIME_WAIT和CLOSE_WAIT详解和解决办法</a></li></ul>`,3),c=[n];function i(l,p,r,_,u,d){return e(),o("div",null,c)}const T=t(s,[["render",i]]);export{h as __pageData,T as default};
