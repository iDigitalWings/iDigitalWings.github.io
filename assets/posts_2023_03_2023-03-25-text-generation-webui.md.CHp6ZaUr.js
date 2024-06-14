import{_ as i,a as s,o as a,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const e="/assets/73527171591750-cff4d9ab.CMLISOjj.png",n="/assets/72168706436000-18d0260a.C2N9SAcA.png",l="/assets/73483165104041-cf063b15.qbuFdtaS.png",p="/assets/73589687928291-136bb805.i_EjO3JY.png",h="/assets/73734226940333-dea82ddb.bO6KGPQ_.png",o="/assets/73811419247916-b9177818.Dr4omeAN.png",d="/assets/73839814929166-658a72cd.CWT-ZRNx.png",r="/assets/73868030189541-a4f0ed86.BoBUgBv7.png",x=JSON.parse('{"title":"text-generation-webui：文本生成界的 1111","description":"","frontmatter":{"title":"text-generation-webui：文本生成界的 1111","date":"2023-03-25T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/03/2023-03-25-text-generation-webui.md","filePath":"posts/2023/03/2023-03-25-text-generation-webui.md","lastUpdated":1718173059000}'),k={name:"posts/2023/03/2023-03-25-text-generation-webui.md"},c=t('<blockquote><p>之前看过那么多的 LLM 聊天项目，今天介绍一个文本生成界的 1111：<strong>text-generation-webui</strong>。 text-generation-webui 是一个基于 Gradio 的界面， 用于运行 LLaMA、llama.cpp、GPT-J、Pythia、OPT 和 GALACTICA 等大型语言模型。 它提供了一个用户友好的界面来与这些模型交互并生成文本，具有模型切换、笔记本模式、聊天模式等功能。 该项目旨在成为文本生成的首选 Web UI （AUTOMATIC1111/stable-diffusion-webui）。</p></blockquote><p>首先看下界面：</p><p><img src="'+e+`" alt=""></p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><ul><li>3 种界面模式：默认、笔记本和聊天</li><li>多模型后端：Transformer、llama.cpp、AutoGPTQ、GPTQ-for-LLaMa、ExLlama、RWKV、FlexGen</li><li>用于在不同模型之间快速切换的下拉菜单</li><li>GPT-4chan 漂亮 的 HTML 输出</li><li>LoRA：动态加载和卸载 LoRA，同时加载多个 LoRA，训练新的 LoRA</li><li>精确的聊天模式指令模板，包括Alpaca、Vicuna、Open Assistant、Dolly、Koala、ChatGLM、MOSS、RWKV-Raven、Galactica、StableLM、WizardLM、Baize、Ziya、Chinese-Vicuna、MPT、INCITE、Wizard Mega、KoAlpaca、 Vigogne、Bactrian、h2o 和 OpenBuddy</li><li>多模式管道，包括 LLaVA 和 MiniGPT-4</li><li>通过 bitsandbytes 进行 8 位和 4 位推理</li><li>Transformer 模型的 CPU 模式</li><li>DeepSpeed ZeRO-3 推理</li><li>扩展</li><li>自定义聊天角色</li><li>非常高效的文本流</li><li>使用 LaTeX 渲染的 Markdown 输出，例如与GALACTICA一起使用</li><li>GPT-4chan 的漂亮 HTML 输出</li><li>API，包括用于 websocket 流的端点（</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>作者提供了一件安装包，包含 Window、Linux、MacOS。</p><p>并且可以支持 Docker，当然手动安装也很简单。</p><p>首先用 Conda 创建一个新的 Python 环境。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> textgen</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3.10.9</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> textgen</span></span></code></pre></div><p>下载项目安装依赖：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> https://github.com/oobabooga/text-generation-webui</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> text-generation-webui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> requirements.txt</span></span></code></pre></div><p>使用下载脚本从 HuggingFace 上下载模型：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> download-model.py</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">organizatio</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">mode</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span></code></pre></div><p>比如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> download-model.py</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> facebook/opt-1.3b</span></span></code></pre></div><p>启动界面：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> textgen</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> text-generation-webui</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> server.py</span></span></code></pre></div><p>可以看到：</p><p><img src="`+n+'" alt=""></p><p>我们使用 Messenger 的聊天样式：</p><p><img src="'+l+'" alt=""></p><h2 id="聊天设置" tabindex="-1">聊天设置 <a class="header-anchor" href="#聊天设置" aria-label="Permalink to &quot;聊天设置&quot;">​</a></h2><p>项目提供了很完整的聊天设置，并且可以导入导出，包括：</p><ul><li>角色名称</li><li>你的名称</li><li>语境</li><li>问候语</li><li>指令模板</li><li>用户和机器人字符串</li><li>聊天记录导入</li><li>角色头像等</li></ul><p><img src="'+p+'" alt=""></p><h2 id="参数设置" tabindex="-1">参数设置 <a class="header-anchor" href="#参数设置" aria-label="Permalink to &quot;参数设置&quot;">​</a></h2><p>参数设置界面可以细粒度的调节大语言模型的参数。</p><p><img src="'+h+'" alt=""></p><h2 id="模型" tabindex="-1">模型 <a class="header-anchor" href="#模型" aria-label="Permalink to &quot;模型&quot;">​</a></h2><p><img src="'+o+'" alt=""></p><h2 id="训练" tabindex="-1">训练 <a class="header-anchor" href="#训练" aria-label="Permalink to &quot;训练&quot;">​</a></h2><p><img src="'+d+'" alt=""></p><h2 id="接口扩展" tabindex="-1">接口扩展 <a class="header-anchor" href="#接口扩展" aria-label="Permalink to &quot;接口扩展&quot;">​</a></h2><p><img src="'+r+'" alt=""></p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>',37),g=[c];function F(b,u,m,y,C,_){return a(),s("div",null,g)}const v=i(k,[["render",F]]);export{x as __pageData,v as default};