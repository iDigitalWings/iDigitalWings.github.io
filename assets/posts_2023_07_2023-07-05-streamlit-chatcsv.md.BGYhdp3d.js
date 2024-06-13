import{_ as s,a as i,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const n="/assets/2561612329660541.DYQB9Qyp.png",h="/assets/2573680011355791.BnJu0wfi.png",l="/assets/2573966998533625.Y1e5KsK-.png",p="/assets/2574075311575541.DDUD1Sg6.png",e="/assets/2574221656356791.BJu0BtxO.png",k="/assets/2574551445484041.DVSFd7hq.png",r="/assets/2558636652315541.DLeeBnKF.png",d="/assets/2558017994949083.CvYFa8G7.jpg",o="/assets/2558197308115958.BynmunQJ.png",g="/assets/2557879709527291.DuN_iclK.png",c="/assets/2557805850965625.7w_ZCjWg.jpg",A="/assets/2575103235983291.BSd81E4e.png",y="/assets/2575530062175583.BGT5bYMt.png",D="/assets/2575688264850500.DK_owJzQ.png",C="/assets/2575792096325666.DzpAbM1o.png",F="/assets/2555149105101083.BmF0CVDg.png",u="/assets/2555402560625500.Cj_4zV_Z.png",m="/assets/2555917620490250.DUs3TjMN.png",B="/assets/2556275379989875.C9DdX-BX.png",T=JSON.parse('{"title":"使用 Streamlit + PandasAI 和 Excel 进行数据问答和分析","description":"","frontmatter":{"title":"使用 Streamlit + PandasAI 和 Excel 进行数据问答和分析","date":"2023-07-05T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/07/2023-07-05-streamlit-chatcsv.md","filePath":"posts/2023/07/2023-07-05-streamlit-chatcsv.md","lastUpdated":1718173059000}'),E={name:"posts/2023/07/2023-07-05-streamlit-chatcsv.md"},b=t('<blockquote><p>今天讲下如何用 Streamlit 和 PandasAI 实现 Excel 的数据问答和分析。</p></blockquote><p><img src="'+n+'" alt=""></p><h2 id="知识点" tabindex="-1">知识点 <a class="header-anchor" href="#知识点" aria-label="Permalink to &quot;知识点&quot;">​</a></h2><h3 id="pandas" tabindex="-1">Pandas <a class="header-anchor" href="#pandas" aria-label="Permalink to &quot;Pandas&quot;">​</a></h3><blockquote><p><a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">Pandas</a> 是一个快速、强大、灵活且易于使用的开源数据分析和操作工具，数据科学家进行数据分析的不二选择。</p></blockquote><h3 id="pandasai" tabindex="-1">PandasAI <a class="header-anchor" href="#pandasai" aria-label="Permalink to &quot;PandasAI&quot;">​</a></h3><blockquote><p><a href="https://github.com/gventuri/pandas-ai" target="_blank" rel="noreferrer">PandasAI</a> 是一个将 生成式 AI 技术集成到 Pandas 中的 Python 库，来实现对话式的数据分析。</p></blockquote><h3 id="实现步骤" tabindex="-1">实现步骤 <a class="header-anchor" href="#实现步骤" aria-label="Permalink to &quot;实现步骤&quot;">​</a></h3><p>实现这样的 Excel/CSV 数据问答需要怎么做呢？</p><p>大致程序流程如下：</p><p><img src="'+h+'" alt=""></p><p>除了界面显示需要做的，我们只要做两件事：</p><ul><li>解析文件</li><li>获取答案</li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="ui-布局" tabindex="-1">UI 布局 <a class="header-anchor" href="#ui-布局" aria-label="Permalink to &quot;UI 布局&quot;">​</a></h3><p><img src="'+l+`" alt=""></p><h3 id="标题和文件选择" tabindex="-1">标题和文件选择 <a class="header-anchor" href="#标题和文件选择" aria-label="Permalink to &quot;标题和文件选择&quot;">​</a></h3><p>使用 <code>file_uploader</code> 来上传文件，并且限制了 <code>xlsx</code> 和 <code>csv</code> 类型的文件。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">st.set_page_config(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">layout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;wide&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">st.title(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;数翼 Excel / CSV 分析&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">input_csv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.file_uploader(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;上传 CSV 文件&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;xlsx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;csv&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">])</span></span></code></pre></div><p>效果如下：</p><p><img src="`+p+`" alt=""></p><h3 id="数据预览" tabindex="-1">数据预览 <a class="header-anchor" href="#数据预览" aria-label="Permalink to &quot;数据预览&quot;">​</a></h3><p>接加下分成两列，左边显示数据：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> input_csv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    col1, col2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.columns([</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> col1:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        st.info(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CSV 上传成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> input_csv.name.lower().endswith(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;.csv&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pd.read_csv(input_csv)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            data </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pd.read_excel(input_csv)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        st.dataframe(data, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">use_container_width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        bot.set_data(data)</span></span></code></pre></div><p>选择文件上传之后，效果如下：</p><p><img src="`+e+`" alt=""></p><h3 id="对话和结果展示" tabindex="-1">对话和结果展示 <a class="header-anchor" href="#对话和结果展示" aria-label="Permalink to &quot;对话和结果展示&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> col2:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        st.info(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;开始聊天吧&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        input_text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.text_area(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;输入您的问题&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;销量最好的三个产品&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> input_text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.button(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;和 CSV 聊天&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                st.info(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;问题: </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">input_text</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> PandasAI(OpenAI(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">api_token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">openai_api_key), </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">verbose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                st.success(df.run(data ,input_text))</span></span></code></pre></div><p>PandasAI 是老接口，当然你也可以用新接口：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> SmartDataframe(data, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;llm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.llm, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;verbose&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, })</span></span></code></pre></div><p>提个问题看看，是不是效果贼好：</p><p><img src="`+k+'" alt=""></p><p>换一些问题看看。</p><h5 id="共有哪些产品" tabindex="-1">共有哪些产品 <a class="header-anchor" href="#共有哪些产品" aria-label="Permalink to &quot;共有哪些产品&quot;">​</a></h5><p><img src="'+r+'" alt=""></p><h4 id="销量最好的三个商品" tabindex="-1">销量最好的三个商品 <a class="header-anchor" href="#销量最好的三个商品" aria-label="Permalink to &quot;销量最好的三个商品&quot;">​</a></h4><p><img src="'+d+'" alt=""></p><h2 id="使用表格展示" tabindex="-1">使用表格展示 <a class="header-anchor" href="#使用表格展示" aria-label="Permalink to &quot;使用表格展示&quot;">​</a></h2><p>我们把最后一行改成万能的 write 方法：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">st.write(df.run(data ,input_text))</span></span></code></pre></div><p>他就可以展示表格，如果你的提问不正确或者太复杂，AI 也可能回答错误。比如Excel 只有产品，我用商品提问他的理解就和我想象的不一样：</p><p><img src="'+o+'" alt=""></p><blockquote><p>解决这个问题，可以丰富（纠正）你的提示词，或者使用 GPT 4 的API。</p></blockquote><h4 id="销量最好的三个商品-1" tabindex="-1">销量最好的三个商品 <a class="header-anchor" href="#销量最好的三个商品-1" aria-label="Permalink to &quot;销量最好的三个商品&quot;">​</a></h4><p><img src="'+g+'" alt=""></p><h2 id="图表" tabindex="-1">图表 <a class="header-anchor" href="#图表" aria-label="Permalink to &quot;图表&quot;">​</a></h2><h3 id="图表的问题" tabindex="-1">图表的问题 <a class="header-anchor" href="#图表的问题" aria-label="Permalink to &quot;图表的问题&quot;">​</a></h3><p>由于 PandasAI 本身的设计特性，他的实现很简单，只有一个 <code>chat</code> 或 <code>run</code> 接口， 用来返回字符串，如果你让他画图， 那么他<strong>画好之后</strong>什么都不返回：</p><p><img src="'+c+'" alt=""></p><p>但是我为什么又说他画好了呢。因为我们开启了调试信息，看输出就很容易看到：</p><p><img src="'+A+`" alt=""></p><p>先调整保存图片路径：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> PandasAI(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    llm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.llm,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    verbose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    save_charts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    save_charts_path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;/tmp/pandasai&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p>再次执行，虽然成功了，但是依然界面啥也没有。</p><h3 id="使用-pandasai-中间件" tabindex="-1">使用 PandasAI 中间件 <a class="header-anchor" href="#使用-pandasai-中间件" aria-label="Permalink to &quot;使用 PandasAI 中间件&quot;">​</a></h3><blockquote><p>PandasAI 提供了中间件机制，我们可以通过中间件来定制 PandasAI 执行的代码。</p></blockquote><p>下面实现一个 Streamlit 的中间件：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pandasai.middlewares.base </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Middleware</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> StreamlitMiddleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">Middleware</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(self, code: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> code.replace(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;plt.show()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;st.pyplot(plt.gcf())&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> code.replace(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;plt.close(fig)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;st.pyplot(plt.gcf())&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> code.replace(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;plt.close()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;st.pyplot(plt.gcf())&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;import streamlit as st</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> code</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> code</span></span></code></pre></div><p>然后重新构建 PandasAI 对象：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">df </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> PandasAI(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    llm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.llm,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    verbose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    middlewares</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[StreamlitMiddleware()],</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    save_charts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">    save_charts_path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;/tmp/pandasai&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p><img src="`+y+'" alt=""></p><p>是不是成功可以绘制图标了。</p><h2 id="ui-升级" tabindex="-1">UI 升级 <a class="header-anchor" href="#ui-升级" aria-label="Permalink to &quot;UI 升级&quot;">​</a></h2><p>我们发现这样子 Chart 显示的不是很好，重新设计一下：</p><p><img src="'+D+`" alt=""></p><p>代码稍微重构下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    col1, col2, col3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.columns([</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> st.button(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;和 CSV 聊天&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> col3:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            st.success(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;问题: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> input_text)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> bot.chat(input_text)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            st.write(result)</span></span></code></pre></div><p>看看最终的效果吧：</p><h4 id="市场最好的四个产品饼图" tabindex="-1">市场最好的四个产品饼图 <a class="header-anchor" href="#市场最好的四个产品饼图" aria-label="Permalink to &quot;市场最好的四个产品饼图&quot;">​</a></h4><p><img src="`+C+'" alt=""></p><h4 id="销量最好的十个国家柱状图" tabindex="-1">销量最好的十个国家柱状图 <a class="header-anchor" href="#销量最好的十个国家柱状图" aria-label="Permalink to &quot;销量最好的十个国家柱状图&quot;">​</a></h4><p><img src="'+F+'" alt=""></p><h4 id="government-2014-年每个月不同国家销量的折线图" tabindex="-1">Government 2014 年每个月不同国家销量的折线图 <a class="header-anchor" href="#government-2014-年每个月不同国家销量的折线图" aria-label="Permalink to &quot;Government 2014 年每个月不同国家销量的折线图&quot;">​</a></h4><p><img src="'+u+'" alt=""></p><h4 id="government-2014-年每个月不同国家销量的气泡图-总售价表示气泡大小" tabindex="-1">Government 2014 年每个月不同国家销量的气泡图， 总售价表示气泡大小 <a class="header-anchor" href="#government-2014-年每个月不同国家销量的气泡图-总售价表示气泡大小" aria-label="Permalink to &quot;Government 2014 年每个月不同国家销量的气泡图， 总售价表示气泡大小&quot;">​</a></h4><p>Government 2014 年每个月不同国家销量的气泡图， Sale Price 的总和表示气泡大小</p><h4 id="government-2014-年每个月不同国家销量的气泡图-y-轴代表-units-sold-气泡大小-表示-sale-price-的总和-不同颜色表示不同国家" tabindex="-1">Government 2014 年每个月不同国家销量的气泡图， Y 轴代表 Units Sold，气泡大小 表示 Sale Price 的总和，不同颜色表示不同国家 <a class="header-anchor" href="#government-2014-年每个月不同国家销量的气泡图-y-轴代表-units-sold-气泡大小-表示-sale-price-的总和-不同颜色表示不同国家" aria-label="Permalink to &quot;Government 2014 年每个月不同国家销量的气泡图， Y 轴代表 Units Sold，气泡大小 表示 Sale Price 的总和，不同颜色表示不同国家&quot;">​</a></h4><p>当然 GPT 的理解能力有时候有限，或者是我的表述还有问题：</p><p><img src="'+m+'" alt="GPT的理解能力也有限"></p><h4 id="历史销售金额-units-sold-sale-prise-最高的三个商品在不同渠道的柱状图" tabindex="-1">历史销售金额（Units Sold * Sale Prise ）最高的三个商品在不同渠道的柱状图 <a class="header-anchor" href="#历史销售金额-units-sold-sale-prise-最高的三个商品在不同渠道的柱状图" aria-label="Permalink to &quot;历史销售金额（Units Sold * Sale Prise ）最高的三个商品在不同渠道的柱状图&quot;">​</a></h4><p><img src="'+B+'" alt=""></p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>怎么样，有没有感受到 AIGC 的魅力，不只是花里胡哨的图片、视频、音频生成，日常工作也能解决很多问题。</p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',85),_=[b];function q(v,f,x,P,S,I){return a(),i("div",null,_)}const G=s(E,[["render",q]]);export{T as __pageData,G as default};
