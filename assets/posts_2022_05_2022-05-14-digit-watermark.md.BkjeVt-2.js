import{_ as i,a,o as h,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const s="/assets/before.Dg-lWC7l.jpg",t="/assets/both.DZQuwS_H.png",c=JSON.parse('{"title":"图片水印：数字水印","description":"","frontmatter":{"title":"图片水印：数字水印","date":"2022-05-14T00:00:00.000Z","tags":["其它"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/05/2022-05-14-digit-watermark.md","filePath":"posts/2022/05/2022-05-14-digit-watermark.md","lastUpdated":1718173059000}'),k={name:"posts/2022/05/2022-05-14-digit-watermark.md"},l=n(`<h2 id="数字水印-blind-watermark" tabindex="-1">数字水印 blind-watermark <a class="header-anchor" href="#数字水印-blind-watermark" aria-label="Permalink to &quot;数字水印 blind-watermark&quot;">​</a></h2><p><a href="https://github.com/guofei9987/blind_watermark" target="_blank" rel="noreferrer">blind-watermark</a> 是一个使用 Python 语言的基于频域的数字盲水印实现。</p><p>安装：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> blind-watermark</span></span></code></pre></div><h2 id="使用命令行" tabindex="-1">使用命令行 <a class="header-anchor" href="#使用命令行" aria-label="Permalink to &quot;使用命令行&quot;">​</a></h2><p>命令行用法：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 嵌入水印：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">blind_watermark</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --embed</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --pwd</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1234</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> examples/pic/ori_img.jpeg</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;alanland.github.io&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> examples/output/embedded.png</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 提取水印：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">blind_watermark</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --extract</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --pwd</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1234</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --wm_shape</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 111</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> examples/output/embedded.png</span></span></code></pre></div><p>测试原图：</p><p><img src="`+s+`" alt=""></p><p>添加水印 <code>alanland.github.io</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> blind_watermark --embed --pwd 1234 before.jpg </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;alanland.github.io&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> after.jpg</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Welcome</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> blind-watermark,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0.4.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Make</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sure</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> when</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> encode</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> decode</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Star</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> matters:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/guofei9987/blind_watermark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> message</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> only</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> once.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> To</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> close</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> it:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> blind_watermark.bw_notes.close</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Embed</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> succeed!</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  after.jpg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Put</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> down</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> watermark</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> size:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 143</span></span></code></pre></div><p>添加水印后的图片：</p><p><img src="`+s+`" alt=""></p><p>提取水印：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> blind_watermark --extract --pwd 1234 --wm_shape 143 after.jpg</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Welcome</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> blind-watermark,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0.4.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Make</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> sure</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> same</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> when</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> encode</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> decode</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Star</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> matters:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/guofei9987/blind_watermark</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> message</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> only</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> once.</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> To</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> close</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> it:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> blind_watermark.bw_notes.close</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Extract</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> succeed!</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> watermark</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> is:</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">alanland.github.io</span></span></code></pre></div><p>可以看到成功提取水印：<code>alanland.github.io</code>。</p><h2 id="使用代码" tabindex="-1">使用代码 <a class="header-anchor" href="#使用代码" aria-label="Permalink to &quot;使用代码&quot;">​</a></h2><p>代码使用，嵌入水印：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> blind_watermark </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> WaterMark</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">bwm1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> WaterMark(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">password_img</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">password_wm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">bwm1.read_img(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;pic/ori_img.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">wm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;@guofei9987 开源万岁！&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">bwm1.read_wm(wm, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;str&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">bwm1.embed(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;output/embedded.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">len_wm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(bwm1.wm_bit)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Put down the length of wm_bit </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">{len_wm}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.format(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">len_wm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">len_wm))</span></span></code></pre></div><p>提取水印：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">bwm1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> WaterMark(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">password_img</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">password_wm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">wm_extract </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> bwm1.extract(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;output/embedded.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">wm_shape</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">len_wm, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;str&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(wm_extract)</span></span></code></pre></div><p>对比，左侧为原图：</p><p><img src="`+t+'" alt=""></p>',23),p=[l];function e(d,r,F,g,y,o){return h(),a("div",null,p)}const m=i(k,[["render",e]]);export{c as __pageData,m as default};
