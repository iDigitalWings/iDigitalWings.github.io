import{_ as t,a as s,o as n,aj as a}from"./chunks/framework.Ba_Ek9Jm.js";const r="/assets/3991128105895666.BoePwLv7.png",p="/assets/3933854152174333.CErpzzqg.png",e="/assets/3937926799249541.DCkpyVpU.png",o="/assets/3939986649857791.1a2C5mCH.png",g="/assets/3940022977799250.BIWBpgZF.png",i="/assets/3947540889813666.DPxsMq5R.png",l="/assets/3947702813787416.Bt_BvOBs.png",c="/assets/3947808952305791.Cj815LYX.png",h="/assets/3947842750188583.D_EGbG_E.png",d="/assets/3947975402035416.D8ZWhtyi.png",m="/assets/3948126400573750.BI52evG2.png",_="/assets/3992508934176250.Bs5Ae8kS.png",u="/assets/3992567059715083.Cbl8zsxI.png",A="/assets/3992653454261000.BcrT5DEq.png",k="/assets/3992803003640125.DhwnBspC.png",b="/assets/3993480844813166.Dhczyc2l.png",P="/assets/3993631000665250.CV_BIe5o.png",q="/assets/3996139230532291.B1LbuYlP.png",T="/assets/3996458132500375.yWegCA7y.png",f="/assets/3997911669926250.DP0fSkxY.png",L="/assets/3998095355683250.qBybZI3h.png",I="/assets/3998348399814833.CfecYkOT.png",C="/assets/3998773169448583.ejW0keXw.png",M="/assets/3998806063240791.BQsraAyV.png",y="/assets/3999004011962500.BftqNpkt.png",F="/assets/3938120726519083.DyyRQd4O.png",S="/assets/3938228860381833.BTuHQfQk.png",V=JSON.parse('{"title":"清华如何让开源大模型具备通用代理能力（数据篇）","description":"","frontmatter":{"title":"清华如何让开源大模型具备通用代理能力（数据篇）","date":"2023-07-26T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/07/2023-07-26-agentlm-intro.md","filePath":"posts/2023/07/2023-07-26-agentlm-intro.md","lastUpdated":1718173059000}'),D={name:"posts/2023/07/2023-07-26-agentlm-intro.md"},G=a('<p>!!! abstract 前段时间不知大家是否有被清华和智谱开源的 AgentLM 刷屏过，给 <strong>开源大模型</strong> 赋予了 <strong>代理能力</strong> 重新点燃了社区的激情， 然而 <strong>AgentLM 是用什么数据训练</strong> 出来的呢， 今天带大家一探究竟。 !!!</p><p><img src="'+r+'" alt="AgentLM 数据查看应用"></p><p>为了研究 AgentLM 的训练数据，我专门写了个程序来查看数据集（上图），我们先简单介绍下 AgentLM 的信息，后面讲数据的时候我们细看。</p><h2 id="agent-lm-是什么" tabindex="-1">Agent LM 是什么 <a class="header-anchor" href="#agent-lm-是什么" aria-label="Permalink to &quot;Agent LM 是什么&quot;">​</a></h2><p><strong>AgentLM</strong> 由 <strong>Llama2-chat</strong> 开源系列模型之上训练的到的，这个虽然是<strong>清华和智谱开源</strong>的，但是小伙伴注意不是在 ChatGLM 之上训练的哦。</p><h3 id="训练方法" tabindex="-1">训练方法 <a class="header-anchor" href="#训练方法" aria-label="Permalink to &quot;训练方法&quot;">​</a></h3><p>关于训练方法大家可以去 <a href="https://github.com/THUDM/AgentTuning" target="_blank" rel="noreferrer">AgentTuning</a> 这个项目仔细看。</p><blockquote><p>AgentTuning 是首次利用多个 Agent 任务交互轨迹对 LLM 进行指令调整的方法。 评估结果表明，AgentTuning 让 LLM 在未见过的 Agent 任务中也展现出强大的泛化能力，同时通用语言能力也基本保持不变。</p></blockquote><ul><li>论文下载：<a href="https://arxiv.org/pdf/2310.12823v1.pdf" target="_blank" rel="noreferrer">AgentTuning：为LLM启用通用代理能力</a></li><li>在线阅读：<a href="https://thudm.github.io/AgentTuning/" target="_blank" rel="noreferrer">AgentTuning: Enabling Generalized Agent Abilities For LLMs</a></li></ul><h2 id="数据集" tabindex="-1">数据集 <a class="header-anchor" href="#数据集" aria-label="Permalink to &quot;数据集&quot;">​</a></h2><p>AgentLM 是使用了两个数据集的<strong>混合数据集</strong>进行微调得到的： 代理数据集 <strong>AgentInstruct</strong> 和通用数据集 <strong>ShareGPT</strong> 。</p><blockquote><p>模型遵循 Llama-2-chat 的对话格式，系统提示词固定为 <code>You are a helpful, respectful and honest assistant</code>。</p></blockquote><h3 id="为什么用两个数据集" tabindex="-1">为什么用两个数据集 <a class="header-anchor" href="#为什么用两个数据集" aria-label="Permalink to &quot;为什么用两个数据集&quot;">​</a></h3><p>首先 AgentInstruct 数据集肯定是为了让基础模型获得 Agent 的能力，只有通过大量的 Agent 数据的训练，才能获取比较好的 Agent 性能。</p><p>但是如果只用 Agent 的指令数据训练，会有两个缺点：</p><ol><li>模型只能解决 Agent 训练数据相关的任务，如果每个领域的任务没有经过训练，解决效果不好；</li><li>很容易让模型忘了如何理解和完成<strong>通用任务</strong>，这样的话虽然<strong>专业课</strong>能力上去了，但是<strong>公共课</strong>的成绩就变差了。</li></ol><p>无论是上面那种结果，都不算是一个合格的 Agent 大模型。</p><p>而加入通用数据集的训练，就能让模型比较好保持着之前的语言能力，同时能让在 Agent 专有指令的训练下，让模型的学习可以<strong>举一反三</strong>，<strong>触类旁通</strong>。 把这部分 Agent 能力应用到其他领域的 Agent 任务。</p><h4 id="agentinstruct-数据集" tabindex="-1">AgentInstruct 数据集 <a class="header-anchor" href="#agentinstruct-数据集" aria-label="Permalink to &quot;AgentInstruct 数据集&quot;">​</a></h4><p>AgentLM 训练所用到最重要的数据集，就是 <strong>AgentInstruct</strong>， AgentInstruct 数据集开源在 <a href="https://huggingface.co/datasets/THUDM/AgentInstruct" target="_blank" rel="noreferrer">🤗Huggingface 仓库</a>。</p><p><img src="'+p+'" alt="Hugging Face AgentInstruct 数据集"></p><blockquote><p>PS: Hugging Face 网站最近好像访问偶尔异常。</p></blockquote><p>!!! note AgentInstruct 数据集 AgentInstruct 是一个经过挑选的智能体数据集，包含 1866 个高质量交互、6 个多样化的真实场景任务，用于增强语言模型的 Agent 能力，有如下特性</p><ul><li>🔍 <strong>思维链</strong> - 采用 ReAct 提示词策略，为每步操作提供详细的思维链，深入理解模型决策过程</li><li>🌍 <strong>多样性</strong> - 涵盖 6 个现实世界场景，包括日常家务到操作数据库，平均回合数 5 ~ 35 不等。</li><li>🎯 <strong>精确性</strong> - GPT-4 也不能完全做对智能体任务，使用轨迹奖励机制对数据严格筛选，确保每条数据的质量。</li><li>✅ <strong>泛化性</strong> - 严格检查，避免数据泄露，保证数据的泛化性 !!!</li></ul><p>我们今天介绍的<strong>主角</strong>也就是这个数据集。</p><p>我们先看一下这个数据集的整体情况：</p><p><img src="'+e+'" alt="AgentInstruct数据集的整体情况"></p><p>他总共有六个类型的任务，分别是：</p><ul><li><strong>家务劳动</strong>、</li><li><strong>网上购物</strong>、</li><li><strong>网页对话</strong>、</li><li><strong>知识图谱</strong>、</li><li><strong>操作系统</strong>、</li><li><strong>数据库操作</strong>。</li></ul><p>加起来一共 <strong>1866</strong> 组对话。</p><blockquote><p>每组会有多轮对话，每轮对话就是指一问一答。</p></blockquote><p>开源数据集的格式是 <code>parquet</code> 格式，你可以在 Hugging Face 上查看用他的查看器查看：</p><p><img src="'+o+'" alt="HuggingFace 数据集查看器"></p><p>!!! note Parquet 文件格式 Parquet 是一种专为大数据处理系统优化的列式存储文件格式。 它由Twitter 和Cloudera 两个在大数据生态系统中具有影响力的公司（曾经）于2013 年共同创建。 目标是开发一种高效，高性能的列式存储格式，并且能够与各种数据处理系统兼容。 !!!</p><p>由于查看不方便，我把他转化成 JSON 格式并做了一个 UI 来进行研究学习。</p><p><img src="'+g+'" alt="AgentLM 数据查看器"></p><p>数据一共有六种类型，我们一个一个的看一下。</p><h4 id="一、数据库" tabindex="-1">一、数据库 <a class="header-anchor" href="#一、数据库" aria-label="Permalink to &quot;一、数据库&quot;">​</a></h4><p>先看一下数据库的第一个轮数据问答，刚开始显示为 AI 设定<strong>角色</strong>，然后进行<strong>少样本提示</strong>。 <strong>具体的格式和要求</strong>也都一一明确指出，这个和我们之前讲的提示词最佳实践一样。</p><p><img src="'+i+'" alt="任务角色设定提示语"></p><p>为了避免大模型的幻觉，提示词还特别说明不要让它胡说八道：<strong>除非您确定答案，否则不要写此模式</strong>。</p><p><img src="'+l+'" alt="明确指令、减少幻觉"></p><p>最后，由于过程中无法进行实际的数据库交互，但是为了让模型能正确处理原始数据库响应，提示语最后还不忘交代一下： <strong>你的输入将是原始的 MySQL 响应，你必须自己处理它</strong>。</p><p><img src="'+c+'" alt="数据格式处理方式"></p><p>我们继续往下看。紧接着，用户就给出了问题『<code>有多少法国车手的圈速低于 01:00.00？</code>』,以及对应的上下文：数据表和字段信息。</p><p><img src="'+h+'" alt="任务上下文"></p><p>然后 GPT 给出了 SQL 回答：</p><p><img src="'+d+'" alt="GPT SQL回答"></p><p>用户执行了 SQL 语句，把 MYSQL 的原始输出(<strong>看格式应该是 Python 的SQL返回值</strong>)给 GPT，最后 GPT 根据这个结果返回了前面问题的答案。</p><p><img src="'+m+'" alt="根据格式获取最终答案"></p><p>至此，这一轮问答圆满结束结束。</p><p>!!! note 启发</p><p>这是第一条数据库任务的对话数据，除了我们提到的<strong>提示语编写原则</strong>，整个过程完全可以当做一个产品经理和程序员的交流过程， 『Human』这个产品经理负责把事情讲清楚，『GPT』这个程序员负责给出正确的的答案，以及一些<strong>必要的步骤说明</strong>，然后一条训练（微调） 数据就诞生了。</p><p>!!!</p><p>我们接下来看第二个数据库任务数据：</p><p><img src="'+_+'" alt="第二条数据库微调对话数据"></p><p>刚开始还是明确角色设定、格式等要求。</p><p><img src="'+u+'" alt="为 AI 设定角色"></p><p>第二步仍然是 <strong>提出问题</strong> 并 <strong>告诉 AI 环境（数据表）信息</strong>：</p><p><img src="'+A+'" alt="提出问题+告知表信息"></p><p>第三步也就是最后一步，把 MySQL的原始输出告诉 AI，让 AI 给你正确的答案。</p><p><img src="'+k+'" alt="MySQL的输出告诉 AI"></p><p>我们再看一条数据库任务数据，比如 512（我自己编的号）：</p><p><img src="'+b+'" alt="512号数据库任务"></p><p>角色设定提示语还是同样的，我们直接看任务描述，这次的任务是更新 John 的电子邮件地址，GPT 也是很顺利给出了 SQL：</p><p><img src="'+P+'" alt="AI 给出 SQL"></p><p>SQL 的执行结果是空，然后训练数据给出了「更新成功」的回复。一条完整的任务对话结束。</p><p>!!! note 再谈数据的重要性</p><p>数据很重要，就像老师的教案、学生的教材，数据是什么 AI 就能学会什么；数据质量好 AI 模型的效果同样好。所以数据一样要<strong>和你的实际业务相匹配</strong>， 确保<strong>正确的前提下、逻辑清晰、表述明确</strong>。</p><br><br><p>比如数据库任务的训练数据，如果是我来审查编写，我就会在</p><ul><li>执行成功的时候返回：<code>[1]</code></li><li>执行失败的时候返回：<code>[0]</code></li></ul><p>也就是<strong>返回更新记录的行数</strong>，因为在我们很多业务里面更新指令是因为各种原因有可能<strong>找不到数据进行更新</strong>的。 当然，这个和你的业务场景，或者说未来 <strong>工具（Tools）</strong> 的实现有关。</p><br><br><p>更重要的一点是，<strong>保证数据格式的一致性</strong>：如果更新成功是 <code>[]</code> ，那么所有样例中都应该是这样的，最好在<strong>编写数据之前就确定规范</strong>。</p><p>!!!</p><h4 id="知识图谱任务" tabindex="-1">知识图谱任务 <a class="header-anchor" href="#知识图谱任务" aria-label="Permalink to &quot;知识图谱任务&quot;">​</a></h4><p>我们在看一条知识图谱的任务：</p><p><img src="'+q+'" alt="知识图谱任务"></p><p>经过前面数据库任务对话的学习之后，就发现再看别的任务就很简单了。刚开始仍然是进行角色设定、把要求和格式描述清楚。 注意最后一句话，用了 <strong>ReAct</strong> 的提示方法，ReAct 提示技术的详细信息可以参考我之间的文章： <a href="https://mp.weixin.qq.com/s?__biz=MzA3MDAzNTgzMQ==&amp;mid=2650440542&amp;idx=1&amp;sn=22e3997705343c38632a252987d7a958&amp;chksm=86ccd346b1bb5a5024e0bbd4eb638e625ac4d4ed3bc33686a2331351e81892dc7d54792a02e7#rd" target="_blank" rel="noreferrer">PromptEngineering：ReAct 框架（LangChain 使用的 Agents 框架）</a></p><p><img src="'+T+'" alt="ReAct 提示方法"></p><p>我们看看前面几轮对话，好我们当时讲解 ReAct 的流程一样，</p><ul><li>用户提出<strong>问题</strong></li><li>GPT 给出<strong>想法</strong>和<strong>行动</strong>，</li><li>用户执行行动，给出<strong>观察</strong>结果</li><li>...（重复上面两个步骤知道问题解决）</li></ul><p><img src="'+f+'" alt="训练数据使用 ReAct 方法"></p><p>由于这个任务的对话轮数比较长，我们直接跳到最后，AI 根据最后一轮的观察，得出了最终答案， 也就是「克莱斯勒制造的支持“近地轨道”的火箭」。</p><p><img src="'+L+'" alt="得到最终答案"></p><h4 id="网上购物" tabindex="-1">网上购物 <a class="header-anchor" href="#网上购物" aria-label="Permalink to &quot;网上购物&quot;">​</a></h4><p>双十一快到了，我们再看一下网上购物任务的对话，网上购物数据集有 351 条数据，我们随机找一条查看。</p><p><img src="'+I+`" alt="网上购物任务"></p><p>同样我们先学习一下人家怎么进行角色设定的，</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">您正在网上购物。我将指导您做什么。您必须按照说明进行操作。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">每一轮我都会给你一个观察结果和一个可用动作列表，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">你必须根据状态和指令响应一个动作。如果搜索可用，您可以使用搜索操作。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">您可以单击可单击项中的按钮之一。操作应具有以下结构：</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">search[keywords]</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> click[value]</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">如果操作无效，则不执行任何操作。搜索中的关键字由您决定，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">但点击中的值必须是可用操作列表中的值。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">请记住，搜索中的关键字应该仔细设计。您的回复应使用以下格式：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">想法：我认为...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">操作：单击[某事]</span></span></code></pre></div><p>先给机器人立人设：<strong>买东西真简单，搜索+点击</strong>。</p><p>接下来用户，说我要买 <strong>50块以下的种子油沐浴露</strong>，GPT 爽快地告诉你给我搜索：</p><p><img src="`+C+'" alt="AI 执行搜索搜索商品"></p><p>接下来搜出来一堆沐浴露，GPT 告诉你给我点 <code>B07VNGPR39</code>。</p><blockquote><p>吐槽一下这个电商平台不靠谱，第一个商品竟然是 53.95 这么贵，肯定打广告了。</p></blockquote><p><img src="'+M+'" alt="AI 进行选品"></p><p>用户一如既往重复下要买啥，然后给你点击之后的界面，机器人直接分析：买买买。</p><p><img src="'+y+'" alt="AI执行购买指令"></p><p>至此愉快的购物结束，铁子们不要说咋不付款就结束了？因为付款留言抢优惠券啥的不是咱们训练的任务目标。</p><p>!!! note 定制模型的未来</p><p>写到这里，我不由得想跟大家聊一下定制模型的未来。定制模型其主要都是微调实现的， 当微调普及的时候大家已经<strong>不关心这个模型怎么来的</strong>，而是<strong>只关心这个模型能干啥</strong>，而且大多是由第三方服务商制作， 所以我才说是<strong>定制模型</strong>的未来，而不是微调模型的未来。</p><br><br><p>可以预见不久的将来<strong>每个企业可以拥有自己的大模型</strong>，甚至有多个模型来服务自己不同的业务， 这个目标在半年前听起来是很玄幻的事情，如今大家再去衡量的话便会发现这个已经慢慢在变成现实。</p><br><br><p>拥有自己的定制（微调）模型，整体上来说有对普通人三个难点，已经都有了很好的解决方案：</p><ol><li><strong>微调数据的准备</strong>：这个可能是以后唯一需要自己提供的东西，但是数据准备回变得越来越简单，给你个 Excel、或者在线表单，然后<strong>根据不同任务类型的样例照猫画虎</strong>即可；</li><li><strong>模型微调和导出</strong>：微调可能是这三步中技术难度最高的了，不过好在 <strong>MaaS 厂商</strong>如今已经极大简化了微调过程，上传数据点击即可训练即可，以后大家会向用淘宝和抖音一样用这些 MaaS 服务。</li><li><strong>模型的私有运行</strong>：同样的，大模型基础设施的厂商不经帮你微调，部署运行也同样提供了服务。自己<strong>部署一个大模型服务会比开一个网店更简单</strong>。</li></ol><p>!!!</p><p>其他数据集包括操作系统、家务、网页问答，模式上和我们刚才介绍的数据库、知识图谱、网上购物都一样，我就不一个一个讲了。 <strong>相信很多人看到这里肯定会灵感爆发，已经计划训练一个自己的专属模型了吧</strong>，有同感的可以留言或者私信跟大家分享一下， 我后面也会微调一个模型并配套一个应用的实现来实践一下。</p><h2 id="sharegpt-数据集" tabindex="-1">ShareGPT 数据集 <a class="header-anchor" href="#sharegpt-数据集" aria-label="Permalink to &quot;ShareGPT 数据集&quot;">​</a></h2><p>前面提到除了代理用的数据集之外，AgentLM 还混合了一些通用数据集。这些数据由产品人员精心挑选，共同造就了 AgentLM。我简单介绍下 ShareGPT， 没有接触过这个网站的同学可以有个大致了解。</p><p><a href="https://sharegpt.com/" target="_blank" rel="noreferrer">ShareGPT</a> 是一个专门分享 ChatGPT 对话的一个应用，迄今为止已经分享了 <strong>386,310</strong> 条对话。</p><p><img src="'+F+'" alt="ShareGPT"></p><p>你可以在上面分享自己觉得有用的 ChatGPT 对话历史。</p><p><img src="'+S+'" alt="网友分享的对话"></p><p>用作 AgentLM 训练的通用数据由产品经理在该网站上精心挑选，当然具体是那些我们不得而知了。</p><blockquote><p>ShareGPT 上有很多很棒的对话，无论是知识学习还是学习提示语我觉得都很不错，推荐大家都去看看。</p></blockquote><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>当时学习 AgentInstruct 数据集的时候我并没有想太多，但是写完这篇文章， 回想半年前的 AI 浪潮，接头巷尾的讨论，到如今这个很多人已经无心关注的已然崛起的市场，又有了诸多感慨。</p><p>当然还是先希望这篇介绍数据集的文章能帮助到大家，其他的下次单独跟大家聊一聊，</p>',124),x=[G];function B(Q,v,E,R,H,z){return n(),s("div",null,x)}const w=t(D,[["render",B]]);export{V as __pageData,w as default};