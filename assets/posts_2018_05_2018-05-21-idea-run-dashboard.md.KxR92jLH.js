import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const D=JSON.parse('{"title":"Idea Run Dashboard","description":"","frontmatter":{"title":"Idea Run Dashboard","date":"2018-05-21T00:00:00.000Z","tags":["idea"]},"headers":[],"relativePath":"posts/2018/05/2018-05-21-idea-run-dashboard.md","filePath":"posts/2018/05/2018-05-21-idea-run-dashboard.md","lastUpdated":1718173059000}'),n={name:"posts/2018/05/2018-05-21-idea-run-dashboard.md"},h=t(`<p>Idea 2017.1 增加了 <code>Spring Boot Run Dashboard</code>，如果配置为Spring Boot 运行仍然找不到该窗口，可以编辑文件 <code>.idea/workspace.xml</code>，找到：<code>&lt;component name=&quot;RunDashboard&quot;&gt;</code>，增加：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;configurationTypes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;SpringBootApplicationConfigurationType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> /&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>比如：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">component</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;RunDashboard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;configurationTypes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;SpringBootApplicationConfigurationType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;ruleStates&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">RuleState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;ConfigurationTypeDashboardGroupingRule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">RuleState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">RuleState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;name&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;StatusDashboardGroupingRule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">RuleState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>就可以看到<code>Run Dashboard</code>就出来了。</p>`,5),l=[h];function p(k,e,d,r,g,A){return a(),i("div",null,l)}const y=s(n,[["render",p]]);export{D as __pageData,y as default};
