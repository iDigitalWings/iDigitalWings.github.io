import{_ as s}from"./chunks/tour02.UunMVPLj.js";import{_ as i,a,o as h,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const B=JSON.parse('{"title":"D3.js tour 3","description":"D3.js tour 3","frontmatter":{"title":"D3.js tour 3","date":"2017-04-20T00:00:00.000Z","img":"docker-jekyll.jpg","description":"D3.js tour 3","tags":["js","d3"]},"headers":[],"relativePath":"posts/2017/04/2017-04-19-d3js-tour-3.md","filePath":"posts/2017/04/2017-04-19-d3js-tour-3.md","lastUpdated":1718193786000}'),t={name:"posts/2017/04/2017-04-19-d3js-tour-3.md"},k=n(`<p>本次主要学习如何插入删除元素。<code>append</code>,<code>insert</code>和<code>remove</code>三个方法。</p><p>根据上一教程，我们做如下的改进：</p><h3 id="样式分离到css" tabindex="-1">样式分离到CSS <a class="header-anchor" href="#样式分离到css" aria-label="Permalink to &quot;样式分离到CSS&quot;">​</a></h3><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    color</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cadetblue</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    height</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">em</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    line-height</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">em</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    font-size</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">24</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">px</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    border</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">dashed</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> indianred</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">px</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    width</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">em</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    text-align</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">left</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    padding-left</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">em</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span></code></pre></div><h3 id="使用datum绑定数据到每个元素" tabindex="-1">使用<code>datum</code>绑定数据到每个元素 <a class="header-anchor" href="#使用datum绑定数据到每个元素" aria-label="Permalink to &quot;使用\`datum\`绑定数据到每个元素&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">d3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.$el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;.datum&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">selectAll</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">datum</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;D3.JS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">i</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">d</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  })</span></span></code></pre></div><h3 id="增加一个div展示data用法" tabindex="-1">增加一个div展示data用法 <a class="header-anchor" href="#增加一个div展示data用法" aria-label="Permalink to &quot;增加一个div展示data用法&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;w&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;datum&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>样式：</p><div class="language-stylus vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">  .w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;"> div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">left</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    margin</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">em</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span></code></pre></div><p>使用<code>data</code>方法绑定并显示数据：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;hello&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;d3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">d3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.$el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;.data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">selectAll</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">i</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">d</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  })</span></span></code></pre></div><h3 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h3><p><img src="`+s+'" alt=""></p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',16),l=[k];function p(e,d,r,g,C,A){return h(),a("div",null,l)}const F=i(t,[["render",p]]);export{B as __pageData,F as default};