import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const m=JSON.parse('{"title":"Js获取Url参数","description":"","frontmatter":{"title":"Js获取Url参数","date":"2017-09-06T00:00:00.000Z","tags":["js"]},"headers":[],"relativePath":"posts/2017/09/2017-09-06-js-get-url-parameter.md","filePath":"posts/2017/09/2017-09-06-js-get-url-parameter.md","lastUpdated":1718193786000}'),e={name:"posts/2017/09/2017-09-06-js-get-url-parameter.md"},l=t(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> url_string </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;http://www.example.com/t.html?a=1&amp;b=3&amp;c=m2-m3-m4-m5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(url_string);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> url.searchParams.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(c);</span></span></code></pre></div><p>Links:</p><ul><li><a href="https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters</a></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,5),n=[l];function h(p,r,k,o,d,c){return a(),i("div",null,n)}const _=s(e,[["render",h]]);export{m as __pageData,_ as default};
