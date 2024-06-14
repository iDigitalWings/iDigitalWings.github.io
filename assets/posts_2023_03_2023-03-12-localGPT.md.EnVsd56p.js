import{_ as i,a,o as t,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const s="/assets/610234084908041.B9lMAu2K.png",l="/assets/610704145969875.DPuZanes.png",F=JSON.parse('{"title":"localGPT: 100%私有本地文档的GPT检索（附 WebUI 实现）","description":"","frontmatter":{"title":"localGPT: 100%私有本地文档的GPT检索（附 WebUI 实现）","date":"2023-03-12T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/03/2023-03-12-localGPT.md","filePath":"posts/2023/03/2023-03-12-localGPT.md","lastUpdated":1718173059000}'),e={name:"posts/2023/03/2023-03-12-localGPT.md"},h=n('<blockquote><p>localGPT 是一个 100% 私有的开源 AI 问答系统， 使用 LLM 的强大功能， 同时无需联网，所有数据都没有离开您的执行环境。 借助大语言模型，你可以对本地的文档进行检索问答， 支持 txt, pdf, csv 等文档格式。 作者希望搭建一个开源信息检索系统，并持续加入更多的功能。</p></blockquote><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><p>作者实现了一个命令行的 Promp 程序，</p><p>我习惯用 UI，用 Gradio 实现了一个简单的问答机器人，效果如下：</p><p><img src="'+s+'" alt=""></p><h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>世界各地的企业都在竞相利用大型语言模型 (LLM) 的能力， 例如 OpenAI 的 chatGPT 类似的功能，以推动他们的数据计划并提高生产力。 然而，对保护敏感公司数据的安全需求怎么强调也不为过， 之前发生了三星员工在使用 ChatGPT 进行工作协助时意外共享机密信息等事件， 很明显企业需要一个安全可控的替代解决方案。</p><p>当然，对于大部分公司来说包括费用，或者对于国内的公司，网络以及合规等也都是一个挑战。</p><p>localGPT 就可以在本地安全的环境中无缝集成类似 GPT 的大语言模型，并且针对本地文档进行问答， 集成企业数据的同时，保证了数据的合规性和安全性。</p><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>作者录制了一个 YouTube 视频来解释这个项目，这个这个项目的架构图。</p><p><img src="'+l+`" alt=""></p><p>整个过程非常简单，第一步讲文档（PDF、DOC、TXT 等）加载之后向量化，丢在向量数据库里， 这个过程通过 <code>ingest.py</code> 这个程序来完成。</p><p>第二步就是和用户交互，检索数据并通过 LLM 生成文本答案。</p><p>这个项目的灵感来自 <code>privateGPT</code> 项目， 不过作者使用 Vicuna-7B 模型替换了 GPT4ALL 模型，以及 InstructorEmbeddings 替换了 privateGPT 中使用的 LlamaEmbeddings。 Embeddings 和 LLM 都将在 GPU 而不是 CPU 上运行。 如果您没有 GPU 也想运行 localGPT，它也有 CPU 支持（请参阅下面的说明）。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="下载项目" tabindex="-1">下载项目： <a class="header-anchor" href="#下载项目" aria-label="Permalink to &quot;下载项目：&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/alanland/localGPT.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> localGPT</span></span></code></pre></div><h3 id="安装依赖" tabindex="-1">安装依赖： <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖：&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> requirements.txt</span></span></code></pre></div><h3 id="准备数据集" tabindex="-1">准备数据集 <a class="header-anchor" href="#准备数据集" aria-label="Permalink to &quot;准备数据集&quot;">​</a></h3><p>作者项目默认放了美国宪法的 PDF 文档。你可以准备自己的文档数据，默认放置在 <code>SOURCE_DOCUMENTS</code> 目录。</p><p>可以修改 <code>constants.py</code> 文件的配置来改变文档目录的位置：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># Define the folder for storing database</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">SOURCE_DIRECTORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">ROOT_DIRECTORY</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/SOURCE_DOCUMENTS&quot;</span></span></code></pre></div><p>如果你有多个文档，把所有文档都丢在目录中就可以了（支持<code>.txt</code>、<code>.pdf</code>、 <code>.xlsx</code> 或 <code>.csv</code> 文件） 。</p><p>然后执行以下命令提取数据：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ingest.py</span></span></code></pre></div><p>它将创建一个包含本地 vectorstore 的索引。 这个命令执行需要时间，具体取决于文档的大小。 您可以摄取任意数量的文档，所有文档都将累积在本地嵌入数据库中。如果要从空数据库开始，删除 index 即可。</p><p>注意：当您第一次运行它时，下载需要时间，因为它<strong>必须下载嵌入模型</strong>。 在后续运行中，没有数据会离开您的本地环境，并且可以在没有互联网连接的情况下运行。</p><h3 id="在本地对您的文件提问" tabindex="-1">在本地对您的文件提问 <a class="header-anchor" href="#在本地对您的文件提问" aria-label="Permalink to &quot;在本地对您的文件提问&quot;">​</a></h3><p>要提出问题，请运行如下命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run_localGPT.py</span></span></code></pre></div><p>并等待脚本要求您输入。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Enter a query:</span></span></code></pre></div><p>输入问题回车，等待 LLM 模型使用提示并准备答案。 完成后，它将打印答案和用作文档上下文的 4 个来源；然后您可以问另一个问题而无需重新运行脚本，只需再次等待提示即可。</p><p>如果需要退出，输入 <code>exit</code> 即可。</p><p>注意：第一次运行时，需要连接互联网才能<strong>下载 vicuna-7B 模型</strong>。 之后您可以关闭互联网连接，脚本推理仍然有效。没有数据会从您的本地环境中泄露出来。</p><h3 id="使用-web-ui" tabindex="-1">使用 Web UI <a class="header-anchor" href="#使用-web-ui" aria-label="Permalink to &quot;使用 Web UI&quot;">​</a></h3><p>我使用 Gradio 实现了一个简单的而 UI，执行以下命令即可：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run_localGPT_web.py</span></span></code></pre></div><p>你可以在 Web UI 中更简单的进行问答。</p><p><img src="`+s+`" alt=""></p><p>代码实现可以参考我的 Github 项目，也可以参考下面代码：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> gr.Blocks() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> demo:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    gr.HTML(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;&quot;&lt;h1 align=&quot;center&quot;&gt;localGPT&lt;/h1&gt;&quot;&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    chatbot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> gr.Chatbot()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> gr.Textbox()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    clear </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> gr.Button(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Clear&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> respond</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(message, chat_history):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        # Get the answer from the chain</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> qa(message)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        answer, docs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> res[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;result&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], res[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;source_documents&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        # # Print the relevant sources used for the answer</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;----------------------------------SOURCE DOCUMENTS---------------------------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> document </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> docs:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&gt; &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> document.metadata[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(document.page_content)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;----------------------------------SOURCE DOCUMENTS---------------------------&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        chat_history.append((message, answer))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, chat_history</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    msg.submit(respond, [msg, chatbot], [msg, chatbot])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    clear.click(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, chatbot, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">queue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">False</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">demo.launch(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">share</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">inbrowser</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h2 id="项目地址" tabindex="-1">项目地址 <a class="header-anchor" href="#项目地址" aria-label="Permalink to &quot;项目地址&quot;">​</a></h2><p>项目的 Github 地址是（带 WebUI）：</p><ul><li><strong><a href="https://github.com/alanland/localGPT" target="_blank" rel="noreferrer">https://github.com/alanland/localGPT</a></strong></li></ul><p>原始项目地址：</p><ul><li><strong><a href="https://github.com/PromtEngineer/localGPT" target="_blank" rel="noreferrer">https://github.com/PromtEngineer/localGPT</a></strong></li></ul><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,51),p=[h];function k(r,d,o,c,g,y){return t(),a("div",null,p)}const C=i(e,[["render",k]]);export{F as __pageData,C as default};