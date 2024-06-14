import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const C=JSON.parse('{"title":"JSONL（JSON Lines） 数据","description":"","frontmatter":{"title":"JSONL（JSON Lines） 数据","date":"2023-02-02T00:00:00.000Z","tags":["ai"],"category":["其它"]},"headers":[],"relativePath":"posts/2023/02/2023-02-02-jsonl-data.md","filePath":"posts/2023/02/2023-02-02-jsonl-data.md","lastUpdated":1718173059000}'),t={name:"posts/2023/02/2023-02-02-jsonl-data.md"},h=n(`<p>JSONL 是 JSON 行文本格式，也称为换行符分隔的 JSON。 JSON 行是一种方便的存储格式 一次可以处理一条记录的结构化数据。它与 unix 风格配合得很好 文本处理工具和外壳管道。这是日志文件的好格式。 它也是一种灵活的格式，用于在协作进程之间传递消息。</p><h2 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to &quot;要求&quot;">​</a></h2><p>JSON 行格式有三个要求：</p><h3 id="_1-utf-8-编码" tabindex="-1">1. UTF-8 编码 <a class="header-anchor" href="#_1-utf-8-编码" aria-label="Permalink to &quot;1. UTF-8 编码&quot;">​</a></h3><p>JSON 允许仅使用 ASCII 转义序列对 Unicode 字符串进行编码， 但是，在文本编辑器中查看时，这些转义将难以阅读。 JSON 行文件作者可以选择转义字符以处理纯 ASCII 文件。</p><p>UTF-8 以外的编码 在解码为 UTF-8 时不太可能有效，因此 JSON 行文件中的字符数意外误解的可能性较低。</p><h3 id="_2-每行都是有效的-json-值" tabindex="-1">2. 每行都是有效的 JSON 值 <a class="header-anchor" href="#_2-每行都是有效的-json-值" aria-label="Permalink to &quot;2. 每行都是有效的 JSON 值&quot;">​</a></h3><p>最常见的值是对象或数组，但允许使用任何 JSON 值。</p><p>有关 JSON 值的详细信息，请参阅 <code>json.org</code>。</p><h3 id="_3-行分隔符是-n" tabindex="-1">3. 行分隔符是 <code>&#39;\\n&#39;</code> <a class="header-anchor" href="#_3-行分隔符是-n" aria-label="Permalink to &quot;3. 行分隔符是 \`&#39;\\n&#39;\`&quot;">​</a></h3><p>这也支持，因为在解析 JSON 值时会隐式忽略周围的空格。<code>&#39;\\r\\n&#39;</code></p><p>文件中的最后一个字符可能是行分隔符，它将被视为与 如果没有行分隔符。</p><p>建议的约定 JSON 行文件可以保存与文件扩展名<code>.jsonl</code>。</p><p>建议使用流压缩器来节省空间，从而产生<code>gzip</code> <code>bzip2</code> <code>.jsonl.gz</code> 或 <code>.jsonl.bz2</code>文件。</p><p>文本编辑程序将文本文件的第一行称为“第 1 行”。JSON 行文件中的第一个值也应称为“值 1”。</p><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><h3 id="优于-csv" tabindex="-1">优于 CSV <a class="header-anchor" href="#优于-csv" aria-label="Permalink to &quot;优于 CSV&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Session&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Score&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Completed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Gilbert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2013&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Alexa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2013&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">29</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;May&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2012B&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Deloise&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;2012A&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span></code></pre></div><p>CSV看起来非常简单，以至于许多程序员已经编写了代码来自己生成它，而且几乎每个实现都是不同的。处理损坏的CSV文件是一项常见且令人沮丧的任务。CSV 没有标准编码、标准列分隔符和多字符转义标准。字符串是单元格值支持的唯一类型，因此某些程序会尝试猜测正确的类型。</p><p>JSON 行干净地处理表格数据，没有歧义。单元格可以使用标准 JSON 类型。</p><p>最大的缺失是流行的电子表格程序的导入/导出过滤器，以便非程序员可以使用这种格式。</p><h3 id="轻松嵌套数据" tabindex="-1">轻松嵌套数据 <a class="header-anchor" href="#轻松嵌套数据" aria-label="Permalink to &quot;轻松嵌套数据&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Gilbert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;wins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;straight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;7♣&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;one pair&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;10♥&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Alexa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;wins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;two pair&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;4♠&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;two pair&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;9♠&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]]}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;May&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;wins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: []}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Deloise&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;wins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;three of a kind&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;5♣&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]]}</span></span></code></pre></div><p>JSON Lines最大的优势在于处理大量类似的嵌套数据结构。一个<code>.jsonl</code>文件比一个充满 XML 文件的目录更容易使用。</p><p>如果您有大型嵌套结构，则不建议直接读取 JSON 行文本。使用“jq”工具可以更轻松地查看大型结构：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pair</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> winning_hands.jsonl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> jq</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> .</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Gilbert&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;wins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;straight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;7♣&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ], </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;one pair&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;10♥&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Alexa&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;wins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;two pair&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;4♠&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ], </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;two pair&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;9♠&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><hr><ul><li><a href="https://jsonlines.org/" target="_blank" rel="noreferrer">https://jsonlines.org/</a></li></ul>`,29),l=[h];function p(k,e,d,o,r,g){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{C as __pageData,y as default};