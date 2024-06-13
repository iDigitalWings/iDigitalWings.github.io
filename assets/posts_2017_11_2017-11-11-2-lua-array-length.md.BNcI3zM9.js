import{_ as s,a as i,o as a,aj as h}from"./chunks/framework.Ba_Ek9Jm.js";const y=JSON.parse('{"title":"Lua: Array Length","description":"","frontmatter":{"title":"Lua: Array Length","date":"2017-11-11T00:00:00.000Z","tags":["lua","Nginx"],"category":["Lua"]},"headers":[],"relativePath":"posts/2017/11/2017-11-11-2-lua-array-length.md","filePath":"posts/2017/11/2017-11-11-2-lua-array-length.md","lastUpdated":1718173059000}'),n={name:"posts/2017/11/2017-11-11-2-lua-array-length.md"},k=h(`<p>lua 数组需要注意的细节</p><p>lua 中，数组的实现方式其实类似于 C++中的 map ，对于数组中所有的值，都是以键值对的形式来存储（无论是显式还是隐式），lua 内部实际采用哈希表和数组分别保存键值对、普通值，所以不推荐混合使用这两种赋值方式。尤其需要注意的一点是： lua 数组中允许 nil 值的存在，但是数组默认结束标志却是 nil 。这类比于 C 语言中的字符串，字符串中允许&#39;\\0&#39;存在，但当读到&#39;\\0&#39;时，就认为字符串已经结束了。</p><p>初始化是例外，在 lua 相关源码中，初始化数组时首先判断数组的长度，若长度大于 0 ，并且最后一个值不为 nil ，返回包括 nil 的长度；若最后一个值为 nil ，则返回截至第一个非 nil 值的长度。</p><p>注意！！一定不要使用#操作符来计算包含 nil 的数组长度，这是一个未定义的操作，不一定报错，但不能保证结果如你所想。如果你要删除一个数组中的元素，请使用 remove 函数，而不是用 nil 赋值。</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">arr1)               </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">-- output: 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">nil</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">nil</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">arr2)               </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">-- output: 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">nil</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">arr3[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 5</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">arr3)               </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">-- output: 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> arr4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">arr4[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 4</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">arr4)               </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">-- output: 4</span></span></code></pre></div><p>按照我们上面的分析，应该为 1 ，但这里却是 4 ，所以一定不要使用#操作符来计算包含 nil 的数组长度。</p><hr><ul><li><a href="http://wiki.jikexueyuan.com/project/openresty-best-practice/array-size.html" target="_blank" rel="noreferrer">OpenResty 最佳实践 判断数组大小</a></li></ul><hr>`,9),l=[k];function t(p,e,r,C,d,A){return a(),i("div",null,l)}const F=s(n,[["render",t]]);export{y as __pageData,F as default};
