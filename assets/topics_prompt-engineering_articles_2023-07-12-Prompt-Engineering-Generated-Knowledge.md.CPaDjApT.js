import{_ as e,a as t,o as a,aj as r}from"./chunks/framework.Ba_Ek9Jm.js";const n="/assets/2802835156759375.4apuQcNJ.png",o="/assets/2790999176025416.Cr73XoNV.png",s="/assets/2791360238060833.BiBsJKQg.png",p="/assets/2792174423430291.BxB5l0J2.png",i="/assets/2792560639211083.4DWoQ8hV.png",l="/assets/2799416251772833.V17rqt1M.png",g="/assets/2801092569881791.BozMuOqU.png",q=JSON.parse('{"title":"PromptEngineering：知识生成提示和检索增强生成 (RAG)","description":"","frontmatter":{"title":"PromptEngineering：知识生成提示和检索增强生成 (RAG)","date":"2023-07-12T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"topics/prompt-engineering/articles/2023-07-12-Prompt-Engineering-Generated-Knowledge.md","filePath":"topics/prompt-engineering/articles/2023-07-12-Prompt-Engineering-Generated-Knowledge.md","lastUpdated":1718173059000}'),c={name:"topics/prompt-engineering/articles/2023-07-12-Prompt-Engineering-Generated-Knowledge.md"},_=r('<p>!!! abstract 今天介绍两种提示技术：知识生成提示和检索增强生成。前者使用LLM 先生成知识，辅助进行推测提升准确率。 后者集成外部知识数据，当今被广泛应用在知识库等应用场景。 !!!</p><p><img src="'+n+'" alt="知识生成提示和检索增强提示"></p><h2 id="知识生成提示进行尝试推理" tabindex="-1">知识生成提示进行尝试推理 <a class="header-anchor" href="#知识生成提示进行尝试推理" aria-label="Permalink to &quot;知识生成提示进行尝试推理&quot;">​</a></h2><p>随着语言模型的发展，出现了一种流行的技术是能够融合知识或信息，以帮助模型做出更准确的预测。</p><blockquote><p>这种提示方式已经被 ChatGPT 等模型采用，很多时候我们不需要手动使用该方法生成知识并提示，LLM 会自动进行知识生成并判断。</p></blockquote><p><img src="'+o+'" alt="知识生成提示原理"></p><p>2022 年 Jiacheng Liu 等的一篇论文<a href="https://arxiv.org/pdf/2110.08387.pdf" target="_blank" rel="noreferrer">《常识推理的生成知识提示》</a>提出这种方法， 在预测之前生成知识，将生成知识以作为提示的一部分，来帮助语言模型更好的的完成预测。</p><h4 id="让-chatgpt-不思考直接回答-❌" tabindex="-1">让 ChatGPT 不思考直接回答 ❌ <a class="header-anchor" href="#让-chatgpt-不思考直接回答-❌" aria-label="Permalink to &quot;让 ChatGPT 不思考直接回答 ❌&quot;">​</a></h4><p><img src="'+s+'" alt="GPT 3 给出了错误答案"></p><p>这种提示错误揭示了LLM在<strong>执行过程中需要更多关于世界的知识的任务</strong>时的局限性。下面看一下如何通过生成知识来改进：</p><h4 id="使用知识生成辅助提示-❌" tabindex="-1">使用知识生成辅助提示 ❌ <a class="header-anchor" href="#使用知识生成辅助提示-❌" aria-label="Permalink to &quot;使用知识生成辅助提示  ❌&quot;">​</a></h4><p>先生成知识：</p><p><img src="'+p+'" alt="先让 GPT 生成知识"></p><p><img src="'+i+'" alt="将知识一起给GPT 得到正确回答"></p><h2 id="检索增强生成-rag" tabindex="-1">检索增强生成 (RAG) <a class="header-anchor" href="#检索增强生成-rag" aria-label="Permalink to &quot;检索增强生成 (RAG)&quot;">​</a></h2><p>前面提到用语言模型生成的知识来提升推理预测的准确性。要完成更复杂和知识密集型的任务（知识在模型中不存在）， 有两个方案： 一是使用新知识进行微调，二是使用外部知识和语言模型结合完成。</p><p>微调很很好实现新知识的集成，但是过程复杂，并且不能使用快速变化的支持。</p><p>Meta AI 的研究人员引入了一种叫做<a href="https://ai.meta.com/blog/retrieval-augmented-generation-streamlining-the-creation-of-intelligent-natural-language-processing-models/" target="_blank" rel="noreferrer">检索增强生成（Retrieval Augmented Generation，RAG）2020</a> 的方法来完成这类知识密集型的任务。</p><p>RAG 把一个信息检索组件和文本生成模型结合在一起，基于语言模型构建一个系统，访问外部知识源实现与事实更加一性的系统， 生成的答案更可靠，还有助于缓解「幻觉」问题。</p><blockquote><p>RAG 现在已经已经很广泛了，我们常见的知识库方案大多基于此实现。</p></blockquote><p>我们看下论文<a href="https://arxiv.org/pdf/2005.11401.pdf" target="_blank" rel="noreferrer">《检索增强生成处理知识密集型NLP任务》</a>中对 RAG 的图解：</p><p><img src="'+l+'" alt="RAG 概述"></p><p>RAG 会接受输入并检索出一组相关/支撑的文档，并给出文档的来源（例如维基百科）。 这些文档作为上下文和输入的原始提示词组合，送给文本生成器得到最终的输出。</p><p><img src="'+g+'" alt="简化的的 RAG 过程"></p><p>这样 RAG 更加适应事实会随时间变化的情况。这非常有用，因为 <strong>LLM 的参数化知识是静态</strong>的。 RAG 让语言模型不用重新训练就能够获取最新的信息，基于检索生成产生可靠的输出。</p><p><a href="https://python.langchain.com/docs/use_cases/question_answering/how_to/vector_db_qa" target="_blank" rel="noreferrer">LangChain</a>、 <a href="https://gpt-index.readthedocs.io/en/latest/end_to_end_tutorials/question_and_answer.html" target="_blank" rel="noreferrer">LlamaIndex</a> 等框架都有使用 RAG 实现知识搜索的例子。 大家可以翻看我之前的文章或者复制文末连接自己尝试。</p>',26),d=[_];function h(m,u,f,G,P,b){return a(),t("div",null,d)}const R=e(c,[["render",h]]);export{q as __pageData,R as default};