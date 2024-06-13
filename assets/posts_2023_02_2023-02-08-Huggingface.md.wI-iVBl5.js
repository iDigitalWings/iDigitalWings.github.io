import{_ as s,a as i,o as a,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const n="/assets/home.DWeRnenL.png",t="/assets/anything-v3.h7NKMzko.png",p="/assets/momoko.DSMA2d1J.png",r="/assets/nice-1.CHGNRZYm.png",l="/assets/nice-2.DAHgVbxB.png",h="/assets/redshift-1.DBl6RJGJ.png",o="/assets/redshift-2.wdoNeREV.png",k="/assets/redshift-3.DnsRTnrD.png",g="/assets/openjourney-1.BsZ0RXBi.png",d="/assets/openjourney-2.BXBFd5kF.png",c="/assets/openjourney-3.hHVCGzUM.png",f="/assets/dreamlike-v1-1.DSNsAy4R.png",u="/assets/dreamlike-v1-2.CpS_hJQC.png",m="/assets/dreamlike-v1-3.DOqcScKr.png",_="/assets/dreamlike-v1-4.BiMJOKVY.png",y="/assets/dreamlike-v2-1.gp2Sjr5K.png",D="/assets/dreamlike-v2-2.CswX27h4.png",A="/assets/dreamlike-v2-3.BTvw1rGz.png",b="/assets/inkpunk-1.B2JFAL2x.png",v="/assets/inkpunk-2.GKunKtp6.png",F="/assets/inkpunk-3.kwIS513k.png",C="/assets/inkpunk-4.DxWNQa_U.png",B="/assets/papercut-1.BFeOWmdH.png",E="/assets/papercut-2.B5E1K4g6.png",N=JSON.parse('{"title":"Huggingface 网站","description":"","frontmatter":{"title":"Huggingface 网站","date":"2023-02-08T00:00:00.000Z","tags":["ai","ai-tools"],"category":["其它"]},"headers":[],"relativePath":"posts/2023/02/2023-02-08-Huggingface.md","filePath":"posts/2023/02/2023-02-08-Huggingface.md","lastUpdated":1718173059000}'),q={name:"posts/2023/02/2023-02-08-Huggingface.md"},P=e('<p><img src="'+n+'" alt="home.png"></p><p>Hugging face 起初是一家总部位于纽约的聊天机器人初创服务商，他们本来打算创业做聊天机器人，然后在github上开源了一个Transformers库，虽然聊天机器人业务没搞起来，但是他们的这个库在机器学习社区迅速大火起来。目前已经共享了超100,000个预训练模型，10,000个数据集，变成了机器学习界的github。</p><p>其之所以能够获得如此巨大的成功，一方面是让我们这些甲方企业的小白，尤其是入门者也能快速用得上科研大牛们训练出的超牛模型。另一方面是，这种特别开放的文化和态度，以及利他利己的精神特别吸引人。huggingface上面很多业界大牛也在使用和提交新模型，这样我们就是站在大牛们的肩膀上工作，而不是从头开始，当然我们也没有大牛那么多的计算资源和数据集。</p><p>在国内huggingface也是应用非常广泛，一些开源框架本质上就是调用transfomer上的模型进行微调（当然也有很多大牛在默默提供模型和数据集）。很多nlp工程师招聘的条目上也明摆着要求熟悉huggingface transformer库的使用。简单介绍了他们多么牛逼之后，我们看看huggingface怎么玩吧。因为他既提供了数据集，又提供了模型让你随便调用下载，因此入门非常简单。你甚至不需要知道什么是GPT，BERT就可以用他的模型了（当然看看我写的BERT简介还是十分有必要的）。下面初步介绍下huggingface里面都有什么，以及怎么调用BERT模型做个简单的任务。</p><h2 id="模型介绍" tabindex="-1">模型介绍 <a class="header-anchor" href="#模型介绍" aria-label="Permalink to &quot;模型介绍&quot;">​</a></h2><h3 id="anything-v3" tabindex="-1">anything V3 <a class="header-anchor" href="#anything-v3" aria-label="Permalink to &quot;anything V3&quot;">​</a></h3><p><a href="https://huggingface.co/Linaqruf/anything-v3.0" target="_blank" rel="noreferrer">Linaqruf/anything-v3.0</a></p><p>二次元、动漫</p><p><img src="'+t+'" alt="anything-v3.png"></p><h3 id="momoko" tabindex="-1">Momoko <a class="header-anchor" href="#momoko" aria-label="Permalink to &quot;Momoko&quot;">​</a></h3><p><a href="https://huggingface.co/ouo/momoko" target="_blank" rel="noreferrer">ouo/momoko</a></p><p>基于日本画家momoko的风格训练</p><p><img src="'+p+'" alt="momoko.png"></p><h3 id="nice" tabindex="-1">nice <a class="header-anchor" href="#nice" aria-label="Permalink to &quot;nice&quot;">​</a></h3><p><a href="https://huggingface.co/elontrump/nice" target="_blank" rel="noreferrer">elontrump/nice</a></p><p>二次元、质感、厚涂、插画</p><p><img src="'+r+'" alt="nice-1.png"><img src="'+l+'" alt="nice-2.png"></p><h3 id="redshift-diffusion-v1" tabindex="-1">Redshift Diffusion V1 <a class="header-anchor" href="#redshift-diffusion-v1" aria-label="Permalink to &quot;Redshift Diffusion V1&quot;">​</a></h3><p><a href="https://huggingface.co/nitrosocke/redshift-diffusion" target="_blank" rel="noreferrer">nitrosocke/redshift-diffusion</a></p><p>基于Stable Diffusion微调的模型，使用高品质3D渲染作品训练而来，这个模型对关键词的要求也不高</p><p><img src="'+h+'" alt="redshift-1.png"><img src="'+o+'" alt="redshift-2.png"><img src="'+k+`" alt="redshift-3.png"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> diffusers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> StableDiffusionPipeline</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> torch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;nitrosocke/redshift-diffusion&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> StableDiffusionPipeline.from_pretrained(model_id, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">torch_dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">torch.float16)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipe.to(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;cuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;redshift style magical princess with golden hair&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipe(prompt).images[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">image.save(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;./magical_princess.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="midjourney-v4" tabindex="-1">Midjourney V4 <a class="header-anchor" href="#midjourney-v4" aria-label="Permalink to &quot;Midjourney V4&quot;">​</a></h3><p><a href="https://huggingface.co/prompthero/openjourney" target="_blank" rel="noreferrer">prompthero/openjourney</a></p><p>基于Midjourney v4 图片训练的Stable Diffusion微调模型，也有一些3D的感觉</p><p><img src="`+g+'" alt="openjourney-1.png"><img src="'+d+'" alt="openjourney-2.png"><img src="'+c+`" alt="openjourney-3.png"></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> diffusers </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> StableDiffusionPipeline</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> torch</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">model_id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;prompthero/openjourney&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> StableDiffusionPipeline.from_pretrained(model_id, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">torch_dtype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">torch.float16)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">pipe </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipe.to(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;cuda&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;retro serie of different cars with different colors and shapes, mdjrny-v4 style&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">image </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> pipe(prompt).images[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">image.save(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;./retro_cars.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span></code></pre></div><h3 id="dreamlike-diffusion-v1-v2" tabindex="-1">Dreamlike Diffusion V1 / V2 <a class="header-anchor" href="#dreamlike-diffusion-v1-v2" aria-label="Permalink to &quot;Dreamlike Diffusion V1 / V2&quot;">​</a></h3><ul><li><a href="https://huggingface.co/dreamlike-art/dreamlike-diffusion-1.0" target="_blank" rel="noreferrer">dreamlike-art/dreamlike-diffusion-1.0</a></li><li><a href="https://huggingface.co/dreamlike-art/dreamlike-photoreal-2.0" target="_blank" rel="noreferrer">dreamlike-art/dreamlike-photoreal-2.0</a></li></ul><p>基于stable diffusion 1.5微调的高品质艺术模型</p><p><img src="`+f+'" alt="dreamlike-v1-1.png"><img src="'+u+'" alt="dreamlike-v1-2.png"><img src="'+m+'" alt="dreamlike-v1-3.png"><img src="'+_+'" alt="dreamlike-v1-4.png"><img src="'+y+'" alt="dreamlike-v2-1.png"><img src="'+D+'" alt="dreamlike-v2-2.png"><img src="'+A+'" alt="dreamlike-v2-3.png"></p><h3 id="inkpunk-diffusion-v1" tabindex="-1">Inkpunk Diffusion V1 <a class="header-anchor" href="#inkpunk-diffusion-v1" aria-label="Permalink to &quot;Inkpunk Diffusion V1&quot;">​</a></h3><p><a href="https://huggingface.co/Envvi/Inkpunk-Diffusion" target="_blank" rel="noreferrer">Envvi/Inkpunk-Diffusion</a></p><p>使用dreambooth微调训练而来的模型，受到Gorillaz，FLCL和Yoji Shinkawa作品画风影响</p><p><img src="'+b+'" alt="inkpunk-1.png"><img src="'+v+'" alt="inkpunk-2.png"><img src="'+F+'" alt="inkpunk-3.png"><img src="'+C+'" alt="inkpunk-4.png"></p><h3 id="papercut-v1" tabindex="-1">PaperCut V1 <a class="header-anchor" href="#papercut-v1" aria-label="Permalink to &quot;PaperCut V1&quot;">​</a></h3><p><a href="https://huggingface.co/Fictiverse/Stable_Diffusion_PaperCut_Model" target="_blank" rel="noreferrer">Fictiverse/Stable_Diffusion_PaperCut_Model</a></p><p>使用剪纸图片训练而来</p><p><img src="'+B+'" alt="papercut-1.png"><img src="'+E+'" alt="papercut-2.png"></p><hr><ul><li><a href="http://www.huggingface.co" target="_blank" rel="noreferrer">http://www.huggingface.co</a>.</li><li><a href="https://cyberes.github.io/stable-diffusion-models/" target="_blank" rel="noreferrer">Stable Diffusion Models</a></li><li><a href="https://rentry.co/sdmodels" target="_blank" rel="noreferrer">Stable Diffusion Models</a></li></ul>',41),S=[P];function V(j,x,T,w,M,R){return a(),i("div",null,S)}const G=s(q,[["render",V]]);export{N as __pageData,G as default};
