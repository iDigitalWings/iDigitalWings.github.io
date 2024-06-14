import{_ as s,a,o as i,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const n="/assets/latent-diffusion.q61pNRSg.png",t="/assets/sayak-pokemon-collage.BzLNbYvu.png",C=JSON.parse('{"title":"使用 LoRA 进行高效 SD 微调","description":"","frontmatter":{"title":"使用 LoRA 进行高效 SD 微调","date":"2023-02-14T00:00:00.000Z","tags":["ai","stable-diffusion"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/02/2023-02-14-lora.md","filePath":"posts/2023/02/2023-02-14-lora.md","lastUpdated":1718173059000}'),l={name:"posts/2023/02/2023-02-14-lora.md"},h=e('<p>LoRA: <code>Low-Rank Adaptation of Large Language Models</code>是微软研究人员为处理微调大型语言模型的问题而引入的一项新技术。 具有数十亿参数的强大模型（例如 GPT-3）为了使其适应特定任务或领域而进行微调的成本高得令人望而却步。 LoRA 提出冻结预训练模型权重并注入可训练层（秩分解矩阵）在每个变压器块中。 这大大减少了可训练参数的数量和 GPU 内存要求，因为不需要为大多数模型权重计算梯度。 研究人员发现，通过关注大型语言模型的 Transformer 注意力块，使用 LoRA 进行的微调质量与完整模型微调相当，同时速度更快且需要更少的计算。</p><h2 id="lora-for-diffusers-🧨" tabindex="-1">LoRA for Diffusers 🧨 <a class="header-anchor" href="#lora-for-diffusers-🧨" aria-label="Permalink to &quot;LoRA for Diffusers 🧨&quot;">​</a></h2><p>尽管 LoRA 最初是为大型语言模型提出的，并在 transformer 块上进行了演示，但该技术也可以应用于其他地方。 在 stable diffusion 微调的情况下，LoRA 可以应用于将图像表示与描述它们的提示相关联的交叉注意层。 下图的细节（取自Stable Diffusion 论文）并不重要，只需注意黄色块是负责建立图像和文本表示之间关系的块。</p><p><img src="'+n+`" alt="latent-diffusion.png"></p><p>据我们所知，Simo Ryu ( <a href="https://github.com/cloneofsimo" target="_blank" rel="noreferrer">@cloneofsimo</a>) 是第一个提出适用于稳定扩散的 LoRA 实现的人。 请务必查看他们的 <a href="https://github.com/cloneofsimo/lora" target="_blank" rel="noreferrer">GitHub 项目</a>以查看示例以及许多有趣的讨论和见解。</p><p>为了将 LoRA 可训练矩阵注入到与交叉注意力层一样深的模型中，过去人们需要以富有想象力（但脆弱）的方式破解<a href="https://github.com/huggingface/diffusers" target="_blank" rel="noreferrer">扩散器(Diffusers)</a>的源代码。 如果 Stable Diffusion 向我们展示了一件事，那就是社区总是想出办法来改变和调整模型以达到创造性目的，我们喜欢这样！ 出于许多其他原因，提供操纵交叉注意力层的灵活性可能是有益的，例如更容易采用<a href="https://github.com/facebookresearch/xformers" target="_blank" rel="noreferrer">xFormers</a>等优化技术。 <a href="https://arxiv.org/abs/2208.01626" target="_blank" rel="noreferrer">Prompt-to-Prompt</a> 等其他创意项目可以通过一些简单的方法来访问这些层，因此我们决定<a href="https://github.com/huggingface/diffusers/pull/1639" target="_blank" rel="noreferrer">为用户提供一种通用的方法</a>。 我们从 12 月下旬开始一直在测试 pull request，并在昨天与我们的<a href="https://github.com/huggingface/diffusers/releases/tag/v0.12.0" target="_blank" rel="noreferrer">扩散器(Diffusers)发布</a>一起正式启动。</p><p>LoRA 支持有以下好处：</p><ul><li>如前所述，训练要快得多。</li><li>计算要求较低。我们可以在具有 11 GB VRAM 的 2080 Ti 中创建一个完全微调的模型！</li><li><strong>训练权重要小得多</strong>。由于原始模型已冻结，我们注入了新层进行训练，因此我们可以将新层的权重保存为大小约为 3 MB 的单个文件。这比 UNet 模型的原始尺寸小了大约一千倍！</li></ul><p>我们对最后一点特别兴奋。为了让用户分享他们出色的微调或 Dreambooth 模型，他们必须分享最终模型的完整副本。 其他想要试用它们的用户必须在他们最喜欢的 UI 中下载经过微调的权重，这会增加大量存储和下载成本。 截至今天，大约有1,000 个 Dreambooth 模型在 <a href="https://huggingface.co/sd-dreambooth-library/georgeart" target="_blank" rel="noreferrer">Dreambooth 概念库</a>中注册，可能还有更多未在库中注册。</p><p>使用 LoRA，现在可以发布一个 3.29 MB 的文件，以允许其他人使用您的微调模型。</p><h2 id="lora微调" tabindex="-1">LoRA微调 <a class="header-anchor" href="#lora微调" aria-label="Permalink to &quot;LoRA微调&quot;">​</a></h2><p>过去，Stable Diffusion 的完整模型微调既缓慢又困难，这也是 Dreambooth 或 Textual Inversion 等轻量级方法变得如此流行的部分原因。 使用 LoRA，在自定义数据集上微调模型要容易得多。</p><p>Diffusers 现在提供了一个 <a href="https://github.com/huggingface/diffusers/blob/main/examples/text_to_image/train_text_to_image_lora.py" target="_blank" rel="noreferrer">LoRA 微调脚本</a>，可以在低至 11 GB 的 GPU RAM 中运行，而无需借助 8 位优化器等技巧。 这就是您如何使用它来微调使用 <a href="https://huggingface.co/datasets/lambdalabs/pokemon-blip-captions" target="_blank" rel="noreferrer">Lambda Labs Pokémon 数据集</a>的模型：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> MODEL_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;runwayml/stable-diffusion-v1-5&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> OUTPUT_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/sddata/finetune/lora/pokemon&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> HUB_MODEL_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;pokemon-lora&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> DATASET_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;lambdalabs/pokemon-blip-captions&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">accelerate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> launch</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --mixed_precision=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;fp16&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  train_text_to_image_lora.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --pretrained_model_name_or_path=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$MODEL_NAME</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --dataset_name=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$DATASET_NAME</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --dataloader_num_workers=8</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --resolution=512</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --center_crop</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --random_flip</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --train_batch_size=1</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --gradient_accumulation_steps=4</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --max_train_steps=15000</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --learning_rate=1e-04</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --max_grad_norm=1</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --lr_scheduler=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;cosine&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --lr_warmup_steps=0</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --output_dir=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">OUTPUT_DIR</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --push_to_hub</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --hub_model_id=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">HUB_MODEL_ID</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --report_to=wandb</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --checkpointing_steps=500</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --validation_prompt=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Totoro&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  --seed=1337</span></span></code></pre></div><p>需要注意的一件事是，学习率是<code>1e-4</code>，远大于常规微调的通常学习率（通常顺序下为<code>~1e-6</code>）。 这是上一次运行的<a href="https://wandb.ai/pcuenq/text2image-fine-tune/runs/b4k1w0tn?workspace=user-pcuenq" target="_blank" rel="noreferrer">W&amp;B 仪表板</a>， 在 2080 Ti GPU（11 GB RAM）中花费了大约 5 个小时。 我没有尝试优化超参数，所以请自行尝试！ <a href="https://huggingface.co/sayakpaul" target="_blank" rel="noreferrer">Sayak</a>在 T4（16 GB RAM）上又运行了一次， 这是他的<a href="https://huggingface.co/sayakpaul/sd-model-finetuned-lora-t4" target="_blank" rel="noreferrer">最终模型</a>， 这是一个<a href="https://huggingface.co/spaces/pcuenq/lora-pokemon" target="_blank" rel="noreferrer">使用它的演示空间</a>。</p><p><img src="`+t+`" alt="Sayak 的 LoRA 模型的示例输出"></p><p>有关扩散器中 LoRA 支持的更多详细信息， 请参阅<a href="https://huggingface.co/docs/diffusers/main/en/training/lora" target="_blank" rel="noreferrer">我们的文档</a>，它将始终与实现保持同步。</p><h2 id="推理" tabindex="-1">推理 <a class="header-anchor" href="#推理" aria-label="Permalink to &quot;推理&quot;">​</a></h2><p>正如我们所讨论的，LoRA 的主要优势之一是您可以通过训练比原始模型大小少几个数量级的权重来获得出色的结果。我们设计了一个推理过程，允许在未修改的稳定扩散模型权重之上加载额外的权重。让我们看看它是如何工作的。</p><p>首先，我们将使用 Hub API 自动确定用于微调 LoRA 模型的基本模型是什么。从<a href="https://huggingface.co/sayakpaul/sd-model-finetuned-lora-t4" target="_blank" rel="noreferrer">Sayak 的模型</a>开始，我们可以使用这段代码：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> huggingface_hub </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> model_info</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># LoRA weights ~3 MB</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model_path </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;sayakpaul/sd-model-finetuned-lora-t4&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">info </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> model_info(model_path)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model_base </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> info.cardData[</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;base_model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(model_base)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># CompVis/stable-diffusion-v1-4</span></span></code></pre></div><p>这段代码将打印他用于微调的模型，即<code>CompVis/stable-diffusion-v1-4</code>. <a href="https://huggingface.co/pcuenq/pokemon-lora" target="_blank" rel="noreferrer">在我的例子中，我从 Stable Diffusion 1.5 版开始训练我的模型，所以如果你用我的 LoRA 模型</a>运行相同的代码，你会看到输出是<code>runwayml/stable-diffusion-v1-5</code>.</p><p>如果您使用该选项，有关基本模型的信息将由我们在上一节中看到的微调脚本自动填充<code>--push_to_hub</code>。正如您在此处<code>README</code>看到的那样，这被记录为模型存储库文件中的元数据标签。<a href="https://huggingface.co/pcuenq/pokemon-lora/blob/main/README.md" target="_blank" rel="noreferrer"></a></p><p>在我们确定了用于使用 LoRA 进行微调的基础模型之后，我们加载了一个正常的稳定扩散管道。我们将使用 对其进行自定义以<code>DPMSolverMultistepScheduler</code>进行非常快速的推理：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> torch</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> diffusers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> StableDiffusionPipeline, DPMSolverMultistepScheduler</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> StableDiffusionPipeline.from_pretrained(model_base, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">torch_dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">torch.float16)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe.scheduler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)</span></span></code></pre></div><p><strong>这就是神奇的地方</strong>。<em>我们在常规模型权重之上</em>从集线器加载 LoRA 权重，将管道移动到 cuda 设备并运行推理：</p><div class="language-Python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe.unet.load_attn_procs(model_path)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe.to(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;cuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipe(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Green pokemon with menacing face&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">num_inference_steps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).images[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">image.save(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;green_pokemon.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h2 id="与-lora-一起梦想" tabindex="-1">与 LoRA 一起梦想 <a class="header-anchor" href="#与-lora-一起梦想" aria-label="Permalink to &quot;与 LoRA 一起梦想&quot;">​</a></h2><p>Dreambooth 允许您向稳定扩散模型“教授”新概念。LoRA 与 Dreambooth 兼容，过程类似于微调，有几个优点：</p><ul><li>训练速度更快。</li><li>我们只需要要训练的主题的几张图像（通常 5 或 10 张就足够了）。</li><li>如果需要，我们可以调整文本编码器，以提高对主题的保真度。</li></ul><p>要使用 LoRA 训练 Dreambooth，您需要使用<a href="https://github.com/huggingface/diffusers/blob/main/examples/dreambooth/train_dreambooth_lora.py" target="_blank" rel="noreferrer">此扩散器脚本</a>。请查看<a href="https://github.com/huggingface/diffusers/tree/main/examples/dreambooth#training-with-low-rank-adaptation-of-large-language-models-lora" target="_blank" rel="noreferrer">自述文件</a>、<a href="https://huggingface.co/docs/diffusers/main/en/training/lora" target="_blank" rel="noreferrer">文档</a>和<a href="https://huggingface.co/blog/dreambooth" target="_blank" rel="noreferrer">我们的超参数探索博客文章</a>了解详细信息。</p><p>如需使用 LoRA 训练您的 Dreambooth 模型的快速、便宜且简单的方法，请查看<a href="https://huggingface.co/spaces/lora-library/LoRA-DreamBooth-Training-UI" target="_blank" rel="noreferrer">此空间</a><a href="https://twitter.com/hysts12321" target="_blank" rel="noreferrer"><code>hysts</code></a>。您需要复制它并分配一个 GPU 以便它运行得更快。此过程将使您不必设置自己的训练环境，您将能够在几分钟内训练您的模型！</p><h2 id="其他方法" tabindex="-1">其他方法 <a class="header-anchor" href="#其他方法" aria-label="Permalink to &quot;其他方法&quot;">​</a></h2><p>对轻松微调的追求并不新鲜。除了 Dreambooth 之外，<a href="https://huggingface.co/docs/diffusers/main/en/training/text_inversion" target="_blank" rel="noreferrer"><em>文本倒置</em></a>是另一种流行的方法，它试图向训练有素的稳定扩散模型教授新概念。使用 Textual Inversion 的主要原因之一是经过训练的权重也很小且易于共享。然而，它们只适用于单个主题（或一小部分主题），而 LoRA 可用于通用微调，这意味着它可以适应新的领域或数据集。</p><p><a href="https://arxiv.org/abs/2106.05744" target="_blank" rel="noreferrer">Pivotal Tuning</a>是一种尝试将 Textual Inversion 与 LoRA 相结合的方法。首先，您使用文本反转技术向模型教授一个新概念，获得一个新的标记嵌入来表示它。然后，您使用 LoRA 训练该令牌嵌入以获得两全其美。</p><p>我们还没有使用 LoRA 探索 Pivotal Tuning。谁来迎接挑战？🤗</p><hr><ul><li><a href="https://huggingface.co/blog/lora" target="_blank" rel="noreferrer">Using LoRA for Efficient Stable Diffusion Fine-Tuning</a></li></ul>`,38),p=[h];function r(o,k,d,g,c,f){return i(),a("div",null,p)}const y=s(l,[["render",r]]);export{C as __pageData,y as default};