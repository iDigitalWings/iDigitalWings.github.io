import{_ as e,a as s,o as t,aj as a}from"./chunks/framework.Ba_Ek9Jm.js";const u=JSON.parse('{"title":"APScheduler Local Timezone","description":"","frontmatter":{"title":"APScheduler Local Timezone","date":"2017-12-11T00:00:00.000Z","tags":["python","apscheduler"]},"headers":[],"relativePath":"posts/2017/12/2017-12-11-1-apschedule-timezone.md","filePath":"posts/2017/12/2017-12-11-1-apschedule-timezone.md","lastUpdated":1718173059000}'),i={name:"posts/2017/12/2017-12-11-1-apschedule-timezone.md"},n=a('<p>将Python程序打包到Docker里面运行的时候，报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>Unable to determine the name of the local timezone -- you must explicitly specify the name of the local timezone.</span></span></code></pre></div><p>在创建 Scheduler 的时候，只需要指定 timezone 参数即可：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">scheduler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> BackgroundScheduler(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">timezone</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;UTC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div>',4),o=[n];function p(l,h,d,c,r,k){return t(),s("div",null,o)}const _=e(i,[["render",p]]);export{u as __pageData,_ as default};
