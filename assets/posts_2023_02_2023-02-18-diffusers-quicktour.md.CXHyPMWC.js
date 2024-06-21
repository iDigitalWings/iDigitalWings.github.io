import{_ as p}from"./chunks/ArticleMetadata.C2iwnGeD.js";import{_ as l,m as o,a as d,u as g,B as f,e as i,x as c,aj as h,o as t,p as u,q as k}from"./chunks/framework.Ba_Ek9Jm.js";import"./chunks/theme.DgQsFvzE.js";const w=JSON.parse('{"title":"Diffusers教程：快速开始","description":"","frontmatter":{"title":"Diffusers教程：快速开始","date":"2023-02-18T00:00:00.000Z","tags":["ai","stable-diffusion"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/02/2023-02-18-diffusers-quicktour.md","filePath":"posts/2023/02/2023-02-18-diffusers-quicktour.md","lastUpdated":1718173059000}'),m={name:"posts/2023/02/2023-02-18-diffusers-quicktour.md"},b=i("h1",{id:"快速浏览",tabindex:"-1"},[c("快速浏览 "),i("a",{class:"header-anchor",href:"#快速浏览","aria-label":'Permalink to "快速浏览"'},"​")],-1),_=h(`<p>快速启动并运行🧨扩散器！ 无论您是开发人员还是日常用户，此快速教程都将帮助您入门，并向您展示如何使用 <a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline" target="_blank" rel="noreferrer">DiffusionPipeline</a> 进行推理。</p><p>在开始之前，请确保已安装所有必要的库：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> diffusers</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> accelerate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> transformers</span></span></code></pre></div><ul><li>加速<a href="https://huggingface.co/docs/accelerate/index" target="_blank" rel="noreferrer"><code>加速</code></a>模型加载以进行推理和训练</li><li>需要<a href="https://huggingface.co/docs/transformers/index" target="_blank" rel="noreferrer"><code>变压器</code></a>来运行最流行的扩散模型，例如<a href="https://huggingface.co/docs/diffusers/api/pipelines/stable_diffusion/overview" target="_blank" rel="noreferrer">稳定扩散</a></li></ul><h2 id="扩散管道" tabindex="-1">扩散管道 <a class="header-anchor" href="#扩散管道" aria-label="Permalink to &quot;扩散管道&quot;">​</a></h2><p><a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline" target="_blank" rel="noreferrer">扩散管道</a>是使用预先训练的扩散系统进行推理的最简单方法。您可以将开箱即用的<a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline" target="_blank" rel="noreferrer">扩散管道</a>用于跨不同模式的许多任务。请查看下表，了解一些支持的任务：</p><table tabindex="0"><thead><tr><th><strong>任务</strong></th><th><strong>描述</strong></th><th><strong>管道</strong></th></tr></thead><tbody><tr><td>无条件图像生成</td><td>从高斯噪声生成图像</td><td><a href="https://huggingface.co/docs/diffusers/using-diffusers/unconditional_image_generation" target="_blank" rel="noreferrer">unconditional_image_generation</a></td></tr><tr><td>文本引导图像生成</td><td>在给定文本提示的情况下生成图像</td><td><a href="https://huggingface.co/docs/diffusers/using-diffusers/conditional_image_generation" target="_blank" rel="noreferrer">conditional_image_generation</a></td></tr><tr><td>文本引导的图像到图像转换</td><td>在文本提示引导下调整图像</td><td><a href="https://huggingface.co/docs/diffusers/using-diffusers/img2img" target="_blank" rel="noreferrer">img2img</a></td></tr><tr><td>文本引导图像修复</td><td>在给定图像、蒙版和文本提示的情况下填充图像的蒙版部分</td><td><a href="https://huggingface.co/docs/diffusers/using-diffusers/inpaint" target="_blank" rel="noreferrer">上漆</a></td></tr><tr><td>文本引导的图像深度翻译</td><td>在文本提示的引导下调整图像的某些部分，同时通过深度估计保留结构</td><td><a href="https://huggingface.co/docs/diffusers/using-diffusers/depth2img" target="_blank" rel="noreferrer">深度2img</a></td></tr></tbody></table><p>有关扩散管道如何针对不同任务工作的更多详细信息，请查看<a href="https://huggingface.co/docs/diffusers/using-diffusers/overview" target="_blank" rel="noreferrer"><strong>使用扩散器</strong></a>部分。</p><p>例如，首先创建 <a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline" target="_blank" rel="noreferrer">DiffusionPipeline</a> 的实例，并指定要下载的管道检查点。 您可以将扩散<a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline" target="_blank" rel="noreferrer">管道</a>用于任何<a href="https://huggingface.co/models?library=diffusers&amp;sort=downloads" target="_blank" rel="noreferrer">扩散器的检查点</a>。 不过，在本指南中，您将使用扩散<a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline" target="_blank" rel="noreferrer">管道</a>通过<a href="https://huggingface.co/CompVis/stable-diffusion" target="_blank" rel="noreferrer">稳定扩散</a>生成文本到图像。</p><p>对于<a href="https://huggingface.co/CompVis/stable-diffusion" target="_blank" rel="noreferrer">稳定扩散</a>，请在运行模型之前仔细阅读其<a href="https://huggingface.co/spaces/CompVis/stable-diffusion-license" target="_blank" rel="noreferrer">许可证</a>。 这是由于改进了模型的图像生成功能以及可能用它生成的潜在有害内容。 请转到您选择的稳定扩散模型，<em>例如</em><a href="https://huggingface.co/runwayml/stable-diffusion-v1-5" target="_blank" rel="noreferrer"><code>runwayml/stable-diffusion-v1-5</code></a>，并阅读许可证。</p><p>您可以按如下方式加载模型：</p><p>复制</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;&gt;&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> diffusers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> DiffusionPipeline</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipeline </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> DiffusionPipeline.from_pretrained(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;runwayml/stable-diffusion-v1-5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><p><a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/diffusion_pipeline#diffusers.DiffusionPipeline" target="_blank" rel="noreferrer">扩散管道</a>下载并缓存所有建模、标记化和调度组件。 由于该模型由大约 1 亿个参数组成，因此我们强烈建议在 GPU 上运行它。 您可以将生成器对象移动到 GPU，就像在 PyTorch 中一样。</p><p>复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; pipeline.to(&quot;cuda&quot;)</span></span></code></pre></div><p>现在，您可以使用文本提示：<code>pipeline</code></p><p>复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; image = pipeline(&quot;An image of a squirrel in Picasso style&quot;).images[0]</span></span></code></pre></div><p>默认情况下，输出包装到 <a href="https://pillow.readthedocs.io/en/stable/reference/Image.html?highlight=image#the-image-class" target="_blank" rel="noreferrer">PIL Image 对象</a>中。</p><p>您可以通过简单地调用以下命令来保存图像：</p><p>复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; image.save(&quot;image_of_squirrel_painting.png&quot;)</span></span></code></pre></div><p><strong>注意</strong>：您还可以通过以下方式下载权重在本地使用管道：</p><p>复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>git lfs install</span></span>
<span class="line"><span>git clone https://huggingface.co/runwayml/stable-diffusion-v1-5</span></span></code></pre></div><p>然后将保存的权重加载到管道中。</p><p>复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; pipeline = DiffusionPipeline.from_pretrained(&quot;./stable-diffusion-v1-5&quot;)</span></span></code></pre></div><p>然后，运行管道与上面的代码相同，因为它是相同的模型体系结构。</p><p>复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; generator.to(&quot;cuda&quot;)</span></span>
<span class="line"><span>&gt;&gt;&gt; image = generator(&quot;An image of a squirrel in Picasso style&quot;).images[0]</span></span>
<span class="line"><span>&gt;&gt;&gt; image.save(&quot;image_of_squirrel_painting.png&quot;)</span></span></code></pre></div><p>扩散系统可以与多个不同的调度程序一起使用，每个<a href="https://huggingface.co/docs/diffusers/api/schedulers/overview" target="_blank" rel="noreferrer">调度程序</a>都有 优点和缺点。默认情况下，稳定扩散与 <a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/schedulers/pndm#diffusers.PNDMScheduler" target="_blank" rel="noreferrer">PNDMScheduler</a> 一起运行，但非常简单 使用不同的调度程序。*例如，*如果您想使用 <a href="https://huggingface.co/docs/diffusers/v0.14.0/en/api/schedulers/euler#diffusers.EulerDiscreteScheduler" target="_blank" rel="noreferrer">EulerDiscreteScheduler</a> 调度器， 您可以按如下方式使用它：</p><p>复制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>&gt;&gt;&gt; from diffusers import EulerDiscreteScheduler</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; pipeline = StableDiffusionPipeline.from_pretrained(&quot;runwayml/stable-diffusion-v1-5&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; # change scheduler to Euler</span></span>
<span class="line"><span>&gt;&gt;&gt; pipeline.scheduler = EulerDiscreteScheduler.from_config(pipeline.scheduler.config)</span></span></code></pre></div><p>有关如何在调度程序之间切换的更多详细信息，请参阅<a href="https://huggingface.co/docs/diffusers/using-diffusers/schedulers" target="_blank" rel="noreferrer">使用调度程序</a>指南。</p><p><a href="https://stability.ai/" target="_blank" rel="noreferrer">稳定性 AI 的</a>稳定扩散模型是一个令人印象深刻的图像生成模型 并且可以做的不仅仅是从文本生成图像。我们专门有一个完整的文档页面， 只是为了<a href="https://huggingface.co/docs/diffusers/conceptual/stable_diffusion" target="_blank" rel="noreferrer">这里的</a>稳定扩散。</p><p>如果您想知道如何优化稳定扩散以在特定硬件（如 Mac）或 <a href="https://onnxruntime.ai/" target="_blank" rel="noreferrer">ONNX 运行时</a>上运行更少的内存、更高的推理速度，请查看我们的 优化页面：</p><ul><li><a href="https://huggingface.co/docs/diffusers/optimization/fp16" target="_blank" rel="noreferrer">GPU 上优化的 PyTorch</a></li><li><a href="https://huggingface.co/docs/diffusers/optimization/mps" target="_blank" rel="noreferrer">带有 PyTorch 的 Mac OS</a></li><li><a href="https://huggingface.co/docs/diffusers/optimization/onnx" target="_blank" rel="noreferrer">欧恩克斯</a></li><li><a href="https://huggingface.co/docs/diffusers/optimization/open_vino" target="_blank" rel="noreferrer">开放视频</a></li></ul><p>如果您想微调或训练扩散模型，请查看<a href="https://huggingface.co/docs/diffusers/training/overview" target="_blank" rel="noreferrer"><strong>训练部分</strong></a></p><p>最后，公开分发生成的镜像🤗时请体谅。</p>`,41);function v(e,y,D,C,P,q){const n=p,r=o("ClientOnly");return t(),d("div",null,[b,g(r,null,{default:f(()=>{var s,a;return[(((s=e.$frontmatter)==null?void 0:s.aside)??!0)&&(((a=e.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),u(n,{key:0,article:e.$frontmatter},null,8,["article"])):k("",!0)]}),_:1}),_])}const S=l(m,[["render",v]]);export{w as __pageData,S as default};