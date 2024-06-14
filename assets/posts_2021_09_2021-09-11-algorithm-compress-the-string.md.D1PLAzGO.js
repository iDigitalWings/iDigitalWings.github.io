import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const C=JSON.parse('{"title":"CodeChallenge: Compress The String","description":"","frontmatter":{"title":"CodeChallenge: Compress The String","date":"2021-09-13T00:00:00.000Z","tags":["algorithm","code-challenge"],"category":["学习"]},"headers":[],"relativePath":"posts/2021/09/2021-09-11-algorithm-compress-the-string.md","filePath":"posts/2021/09/2021-09-11-algorithm-compress-the-string.md","lastUpdated":1718173059000}'),e={name:"posts/2021/09/2021-09-11-algorithm-compress-the-string.md"},n=t(`<p><a href="https://www.hackerrank.com/challenges/compress-the-string/problem" target="_blank" rel="noreferrer">https://www.hackerrank.com/challenges/compress-the-string/problem</a></p><p>字符串压缩：</p><p>输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>1222311</span></span></code></pre></div><p>输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>(1, 1) (3, 2) (1, 3) (2, 1)</span></span></code></pre></div><p>解释：</p><p>1 出现 1 次，输出 <code>(1, 1)</code>，2 出现 3 次，输出 <code>(3, 2)</code>，类推。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> itertools </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> groupby</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> key, group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> groupby(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()): </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(key)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(group))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">((count,key),</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div>`,9),p=[n];function h(l,k,r,o,d,c){return a(),i("div",null,p)}const y=s(e,[["render",h]]);export{C as __pageData,y as default};