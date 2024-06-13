import{_ as a,a as t,o as r,aj as s}from"./chunks/framework.Ba_Ek9Jm.js";const e="/assets/508134364182125.w9fDRP1k.png",o="/assets/508254921503666.CSZb4N1c.png",i="/assets/509544757526958.FhMZsD-c.png",l="/assets/509597794103375.BePi5Nj5.png",n="/assets/509431317612666.Bx7xVpzl.png",f=JSON.parse('{"title":"Databricks DBRX：高效开源大模型的新标准？","description":"","frontmatter":{"title":"Databricks DBRX：高效开源大模型的新标准？","date":"2024-04-02T00:00:00.000Z","tags":["ai","llm","行业大模型"],"category":["ai"]},"headers":[],"relativePath":"posts/2024/04/2024-04-02-llm-databricks-dbrx.md","filePath":"posts/2024/04/2024-04-02-llm-databricks-dbrx.md","lastUpdated":1718173059000}'),p={name:"posts/2024/04/2024-04-02-llm-databricks-dbrx.md"},c=s('<p>!!! abstract 本文带大家看看，Databricks 三个月花费 1000 万美元做出来的大模型 DBRX， 以及该模型结合 Databricks 的大数据产品生态，对企业来说有什么不一样的意义。 !!!</p><p>现在大语言模型已经不那么新奇了，不过去年就谈起了的行业大模型，到如今还只能说是起步阶段。 并没有百花齐放，或者惠及各个企业。 核心原因还是大模型太贵了：</p><ul><li>钱不够、</li><li>数据不够、</li><li>技术不行，</li></ul><p>满足不了这三个条件，做出来的大模型质量都不行。</p><p>而满足上面三个条件的公司有太少，或者说愿意投入真金白银的公司太少了。 上周 Databricks 也发布了自己的大模型，据说是<strong>三个月</strong>1000万美元搞出来的， 而且效果贼好，打败当前开源模型三巨头 Llama、Mixtral，以及马斯克的 Grok。</p><p>而模型的性能其实不是最重要的，他的<strong>企业属性</strong>我觉得才是最厉害，也是全方面超越其他大模型的重要因素。</p><h2 id="databricks-公司" tabindex="-1">Databricks 公司 <a class="header-anchor" href="#databricks-公司" aria-label="Permalink to &quot;Databricks 公司&quot;">​</a></h2><p>说起 Databricks 公司很多人可能不知道， 但是开源大数据工具 Apache Spark 应该很多人知道。 Databricks 就是 由 Apache Spark™、Delta Lake 和 MLflow 的原始创建者于 2013 年创立的。</p><p>号称是世界上第一个也是唯一一个云端 Lakehouse 平台，结合数仓和数据湖工具，为用户提供了统一、开放的数据平台。</p><p>!!! note 大数据领域从 Hadoop 开始，各个产品和公司的竞争和恩怨情仇其精彩程度堪比武侠小说， 现如今活下来的公司，都是极为不容易。以后有时间跟大家聊一聊大数据的发展史。 !!!</p><h2 id="一切都都靠天意" tabindex="-1">一切都都靠天意 <a class="header-anchor" href="#一切都都靠天意" aria-label="Permalink to &quot;一切都都靠天意&quot;">​</a></h2><p>回到今天的主题，大语言模型 DBRX，我想开个玩笑，技术固然重要，但大模型的好坏冥冥中有两个因素影响：</p><ul><li>大力出奇迹</li><li>好坏全看天意。</li></ul><p>Databricks 团队花费了数月时间和约 1000 万美元来训练 DBRX， 同样使用谷歌发布的 Transforms 技术，类似 ChatGPT 和 Gemini 背后的大语言模型。</p><p>虽然技术上觉得没什么问题，不过他们团队也表示， 但在最终的能力测试结果出来之前，没人知道自己创造出来的东西有多强大（或者有多平庸）。</p><p>然而幸运之神眷顾，训练效果是出奇的好， <strong>『我们超越了一切』</strong>， Databricks 首席神经网络架构师兼 DBRX 构建团队负责人 Jonathan Frankle 最终这样告诉团队。</p><h2 id="能力对比" tabindex="-1">能力对比 <a class="header-anchor" href="#能力对比" aria-label="Permalink to &quot;能力对比&quot;">​</a></h2><p>虽然看多了各个模型的比较很无聊，但是这也是衡量独立产品似乎最为可行的方法了。</p><h3 id="对比开源模型" tabindex="-1">对比开源模型 <a class="header-anchor" href="#对比开源模型" aria-label="Permalink to &quot;对比开源模型&quot;">​</a></h3><p>官方分享的数据显示，在衡量人工智能模型回答一般知识问题、 执行阅读理解、解决令人烦恼的逻辑难题和生成高质量代码的能力，在大约十几个基准测试中， DBRX 优于所有其他可用的开源模型。</p><p><img src="'+e+'" alt=""></p><p>它的表现超过了Meta 的 <strong>Llama 2</strong>和 Mistral 的 <strong>Mixtral</strong>，这两种是当今最流行的开源人工智能模型。 同时 DBRX 也确实超越了马斯克 的 xAI 最近开源的<strong>Grok</strong> AI 模型。</p><h3 id="对比商业模型" tabindex="-1">对比商业模型 <a class="header-anchor" href="#对比商业模型" aria-label="Permalink to &quot;对比商业模型&quot;">​</a></h3><p><img src="'+o+'" alt=""> 其次，DBRX 在大多数基准测试中都击败了 GPT-3.5。</p><p><img src="'+i+'" alt="KV-Pairs 和 HotpotQAXL 基准上模型的平均性能"></p><p>下图是每个模型给出使用 bge-large-en-v1.5 从维基百科语料库检索到的前 10 个段落时测量的模型性能。 <img src="'+l+'" alt="RAG性能"></p><h3 id="速度" tabindex="-1">速度 <a class="header-anchor" href="#速度" aria-label="Permalink to &quot;速度&quot;">​</a></h3><p>DBRX 基于<a href="https://arxiv.org/abs/2211.15841" target="_blank" rel="noreferrer">MegaBlocks</a> 和开源项目构建的专家混合 (MoE) 模型，使得该模型在速度方面极快。</p><p>!!! explain MoE 混合专家模型（Mixture of Experts，简称 MoE）是一种机器学习技术， 通过门控（gating）模型将单一任务空间划分为多个子任务， 再由多个专家网络（子模型）分别处理特定的子任务， 最终得到整体的预测结果。 !!!</p><p><img src="'+n+'" alt=""></p><p>Databricks 基础模型 API 的用户预计在我们具有 8 位量化的优化模型服务平台上看到每秒高达 150 个 DBRX 令牌。</p><p>DBRX 模型本身有 1320 亿个参数，但是在任何给定时间可仅使用 360 亿个参数， 使之在速度（令牌/秒）与性能（质量）方面鱼与熊掌兼得。</p><h2 id="企业定制" tabindex="-1">企业定制 <a class="header-anchor" href="#企业定制" aria-label="Permalink to &quot;企业定制&quot;">​</a></h2><p>!!! abstract 企业和组织越来越多地用开源模型取代专有模型，以提高效率和控制力。 许多客户可以通过根据其<strong>特定任务定制开源模型</strong>来超越专有模型的质量和速度。 !!!</p><p>而 Databricks 正好看到了这个趋势，并推出 DBRX 希望进一步加速这一趋势。</p><p>Databricks 在开源许可下发布 DBRX，允许其他人在其工作基础上进行构建， 让企业使用成为可能。</p><p>同时 DBRX 被<strong>设计为可轻松定制</strong>，以便企业可以提高人工智能应用程序的质量。</p><p>Databricks 作为大数据平台，有企业自己需要的所有数据， 每个企业都可以使用如下工具链在自己的<strong>私有数据</strong>上构建自定义 DBRX 模型：</p><ul><li><strong>训练数据</strong>在 Unity Catalog 中集中管理，</li><li>并使用 Apache Spark 和新收购的 Lilac AI 进行<strong>处理和清理数据</strong>，</li><li><strong>大模型训练和微调</strong>使用 Mosaic AI 训练服务，</li><li>通过 Mosaic AI 模型服务收集人类对<strong>质量和安全的反馈</strong>。</li></ul><p>这些工具和累积的数据优势，绝对是破开企业AIGC应用市场的大砍刀。</p><ul><li><a href="https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm" target="_blank" rel="noreferrer">https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm</a></li><li><a href="https://www.databricks.com/blog/announcing-dbrx-new-standard-efficient-open-source-customizable-llms" target="_blank" rel="noreferrer">https://www.databricks.com/blog/announcing-dbrx-new-standard-efficient-open-source-customizable-llms</a></li></ul>',41),b=[c];function d(g,h,k,m,_,D){return r(),t("div",null,b)}const x=a(p,[["render",d]]);export{f as __pageData,x as default};
