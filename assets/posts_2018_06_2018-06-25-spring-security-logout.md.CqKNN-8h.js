import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const y=JSON.parse('{"title":"Spring Security Logout","description":"","frontmatter":{"title":"Spring Security Logout","date":"2018-06-25T00:00:00.000Z","tags":["spring","security"]},"headers":[],"relativePath":"posts/2018/06/2018-06-25-spring-security-logout.md","filePath":"posts/2018/06/2018-06-25-spring-security-logout.md","lastUpdated":1718173059000}'),t={name:"posts/2018/06/2018-06-25-spring-security-logout.md"},e=n(`<h2 id="logout-inviladate-session" tabindex="-1">Logout inviladate session <a class="header-anchor" href="#logout-inviladate-session" aria-label="Permalink to &quot;Logout inviladate session&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">http</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .logout</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">invalidateHttpSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h2 id="手动logout" tabindex="-1">手动Logout <a class="header-anchor" href="#手动logout" aria-label="Permalink to &quot;手动Logout&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">val session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  val id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> session.getId</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  val auth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> SecurityContextHolder.getContext.getAuthentication</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> SecurityContextLogoutHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">logout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request, response, auth)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  sessionRegistry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSessionInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(id).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">expireNow</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  sessionRegistry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">removeSessionInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">sendRedirect</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getHeader</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;referer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  case</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> IOException </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">printStackTrace</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="用户session失效" tabindex="-1">用户Session失效 <a class="header-anchor" href="#用户session失效" aria-label="Permalink to &quot;用户Session失效&quot;">​</a></h2><p>在使用</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> sessionRegistry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSessionInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">expireNow</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span></code></pre></div><p><code>expireNow</code>并不是说直接从redis删除session，而是在session上加上了expired标记。</p><p>在<code>ConcurrentSessionFilter</code>的<code>doFilter</code>方法里面，expired的session会自动登出。</p><p>然而通过源码（spring-security-5.0.5），<strong>并没有找到删除的逻辑，只是进行了一个跳转</strong>。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">HttpSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> session</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  SessionInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> info</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> sessionRegistry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSessionInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(session</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (info </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (info.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">isExpired</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // Expired - abort processing</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">isDebugEnabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Requested session ID &quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getRequestedSessionId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot; has expired.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">      doLogout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request, response);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">      this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.sessionInformationExpiredStrategy.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">onExpiredSessionDetected</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> SessionInformationExpiredEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(info, request, response));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">      // Non-expired - update last request date/time</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      sessionRegistry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">refreshLastRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(info.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSessionId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="session的删除" tabindex="-1">Session的删除 <a class="header-anchor" href="#session的删除" aria-label="Permalink to &quot;Session的删除&quot;">​</a></h2><ul><li><a href="https://stackoverflow.com/questions/28992395/data-stored-in-spring-http-session-is-not-removed-from-redis-during-destroy" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/28992395/data-stored-in-spring-http-session-is-not-removed-from-redis-during-destroy</a></li></ul><p>测试下来，Session并没有从Redis里面删除，从文档 <a href="https://docs.spring.io/spring-session/docs/current/reference/html5/#api-redisoperationssessionrepository-expiration" target="_blank" rel="noreferrer">Session Expiration section Spring Session reference</a> 中可以看到，session在失效后仍然会保留5分钟，但是</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">SessionRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String)</span></span></code></pre></div><p>方法并不会查找到失效的session。</p><p>SpringSession使用<code>SessionDeletedEvent</code>和<code>SessionExpiredEvent</code>来确保session相关的资源被清除。</p><h2 id="真正的删除逻辑" tabindex="-1">真正的删除逻辑 <a class="header-anchor" href="#真正的删除逻辑" aria-label="Permalink to &quot;真正的删除逻辑&quot;">​</a></h2><p>最后找到实际删除session的地方， <code>SecurityContextLogoutHandler</code></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> logout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(HttpServletRequest request, HttpServletResponse response,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    Authentication authentication) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  Assert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">notNull</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(request, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;HttpServletRequest required&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (invalidateHttpSession) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    HttpSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> session</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> request.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      logger.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Invalidating session: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">invalidate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span></code></pre></div><p>session.invalidate方法则调用了，<code>SessionRepositoryRequestWrapper</code>下<code>HttpSessionWrapper</code>的invalidate方法：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> invalidate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  super</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">invalidate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  SessionRepositoryRequestWrapper.this.requestedSessionInvalidated </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">  setCurrentSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  SessionRepositoryFilter.this.sessionRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">deleteById</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>而最终的删除逻辑在<code>RedisOperationsSessionRepository</code>：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> deleteById</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String sessionId) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  RedisSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> session</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getSession</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(sessionId, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (session </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">  cleanupPrincipalIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(session);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.expirationPolicy.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">onDelete</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(session);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> expireKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getExpiredKey</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getId</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.sessionRedisOperations.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(expireKey);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  session.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setMaxInactiveInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(Duration.ZERO);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">  save</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(session);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>然而，实际执行过之后，session key, sessio expried key在redis里面仍然存在。</p><p>对于expried key，在debug时时显示删除成功了，玄学操作。有空在继续研究。</p><p><code>RedisTemplate</code>的删除方法：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Boolean </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(K key) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  byte</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">rawKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> rawKey</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(key);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  Long</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> execute</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(connection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> connection.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(rawKey), </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> result.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">intValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><hr><p>未完待续。</p>`,30),h=[e];function p(l,k,r,d,g,o){return a(),i("div",null,h)}const C=s(t,[["render",p]]);export{y as __pageData,C as default};
