import{_ as s,a as i,o as a,aj as p}from"./chunks/framework.Ba_Ek9Jm.js";const n="/assets/spray-template-hello-page.CDZi5kYD.png",A=JSON.parse('{"title":"Spray 1 First App","description":"Spray 1 First App","frontmatter":{"title":"Spray 1 First App","date":"2017-04-14T00:00:00.000Z","img":"docker-jekyll.jpg","description":"Spray 1 First App","category":["Scala"],"tags":["scala","spray"]},"headers":[],"relativePath":"posts/2017/04/2017-04-14-Spray1-first-app.md","filePath":"posts/2017/04/2017-04-14-Spray1-first-app.md","lastUpdated":1718173059000}'),t={name:"posts/2017/04/2017-04-14-Spray1-first-app.md"},l=p(`<p>首先用<code>SimpleRoutingApp</code>来运行第一个程序：</p><div class="language-scala vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scala</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> spray</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">routing</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">SimpleRoutingApp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Main</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> App</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> with</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> SimpleRoutingApp</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  implicit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> val</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> system</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> ActorSystem</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;my-system&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  startServer(interface </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;localhost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, port </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 8080</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    path(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      get {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        complete {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Say</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> hello to spray&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>import spray.http._</span></span>
<span class="line"><span>import HttpMethods._</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyHttpService extends Actor {</span></span>
<span class="line"><span>  def receive = {</span></span>
<span class="line"><span>    case HttpRequest(GET, Uri.Path(&quot;/ping&quot;), _, _, _) =&gt;</span></span>
<span class="line"><span>      sender ! HttpResponse(entity = &quot;PONG&quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="`+n+'" alt=""></p>',4),e=[l];function h(k,r,d,c,o,g){return a(),i("div",null,e)}const D=s(t,[["render",h]]);export{A as __pageData,D as default};
