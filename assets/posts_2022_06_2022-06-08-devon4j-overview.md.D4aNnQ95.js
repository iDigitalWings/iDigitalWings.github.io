import{_ as e,a as o,o as t,aj as i}from"./chunks/framework.Ba_Ek9Jm.js";const a="/assets/T-Architecture.DE0s6wEW.svg",u=JSON.parse('{"title":"Devon4j: 简介","description":"","frontmatter":{"title":"Devon4j: 简介","date":"2022-06-08T00:00:00.000Z","tags":["devon4j"],"category":["架构"]},"headers":[],"relativePath":"posts/2022/06/2022-06-08-devon4j-overview.md","filePath":"posts/2022/06/2022-06-08-devon4j-overview.md","lastUpdated":1718173059000}'),r={name:"posts/2022/06/2022-06-08-devon4j-overview.md"},l=i('<p><a href="https://github.com/devonfw/devon4j" target="_blank" rel="noreferrer">devon4j</a> 是 <a href="https://devonfw.com/website/pages/welcome/welcome.html" target="_blank" rel="noreferrer">devonfw</a> 的 Java 后端栈，</p><p>devon4w 的口号是：</p><blockquote><p>We bring right tech and right answers. In one platform. For free.</p></blockquote><p>它是一个软件架构蓝图，提供了一套工具、架构、方法论、组件和知识库来指导你开发。 为最先进的云原生（微）服务和基于开源同类最佳技术栈的多平台富客户端应用程序指定了一个标准化的开源架构蓝图。</p><p>此外，devonfw 是经过行业验证的最佳实践和成熟的命名/编码约定的知识库， 可通过可用的蓝图、代码生成器、devonfw 架构合规检查器等来加快项目速度并提高软件质量。</p><h2 id="devon4w-目标" tabindex="-1">Devon4w 目标 <a class="header-anchor" href="#devon4w-目标" aria-label="Permalink to &quot;Devon4w 目标&quot;">​</a></h2><p>devonfw 的目标是加速软件的开发。软件开发人员的共同经验是，开发过程缓慢有一些主要原因：</p><ul><li>一遍又一遍地重新发明轮子</li><li>没人喜欢做但需要做的重复性工作</li><li>你没有发现的错误，当你发现它们时，你会抓住你的头说：“我们应该知道的！”</li></ul><p>在 devonfw 中，我们通过提供共享和可重用的体验库以及使您的生活更轻松的工具来准确定位这些问题。</p><h2 id="devon4j-主要原则" tabindex="-1">Devon4j 主要原则 <a class="header-anchor" href="#devon4j-主要原则" aria-label="Permalink to &quot;Devon4j 主要原则&quot;">​</a></h2><ul><li><strong>KISS</strong> 保持小而简单</li><li><strong>开放</strong> 对开放标准和解决方案的开放承诺（无需依赖于商业或供应商特定标准或解决方案）</li><li><strong>模式</strong> 我们专注于提供模式、最佳实践和示例，而不是编写框架代码。</li><li><strong>坚固</strong> 我们选择已建立并在实际（商业）项目中被证明是可靠和强大的解决方案。</li></ul><h2 id="架构原则" tabindex="-1">架构原则 <a class="header-anchor" href="#架构原则" aria-label="Permalink to &quot;架构原则&quot;">​</a></h2><ul><li><p>面向组件的设计 我们遵循严格的面向组件设计来解决以下子原则：</p><ul><li>关注点分离</li><li>可重用性和避免冗余代码</li><li>通过组件 API隐藏信息及其可交换实现被视为机密。</li><li>为自包含、描述性和稳定的组件 API按合同设计。</li><li>分层以及业务逻辑与技术代码的分离，以便更好地维护。</li><li>数据主权（和低耦合的高内聚）表示组件对其数据负责，并且对这些数据的更改只能通过组件发生。否则，将出现维护问题，以确保数据保持一致。因此，可能被其他组件使用的组件接口设计为按值调用而不是按引用调用。</li></ul></li><li><p>同质性 以相似的方式解决相似的问题，建立统一的代码风格。</p></li></ul><h2 id="应用架构" tabindex="-1">应用架构 <a class="header-anchor" href="#应用架构" aria-label="Permalink to &quot;应用架构&quot;">​</a></h2><p>对于应用程序的架构，我们区分以下视图：</p><ul><li>业务架构从业务角度描述应用程序。它将应用程序划分为业务组件，并完全抽象了技术方面。</li><li>技术架构从技术实现的角度描述了一个应用程序。它将应用程序划分为技术层，并定义使用哪些技术产品和框架来支持这些层。</li><li>基础架构架构从操作基础架构的角度描述应用程序。它定义了用于运行应用程序的节点，包括集群、负载平衡和网络。本指南不进一步探讨此视图。</li></ul><h3 id="业务架构" tabindex="-1">业务架构 <a class="header-anchor" href="#业务架构" aria-label="Permalink to &quot;业务架构&quot;">​</a></h3><p><em>业务架构</em>将应用程序划分为 <em>业务组件</em> 。业务组件具有其封装的明确定义的职责。 与该责任相关的所有方面都必须在该业务组件中实现。 此外，业务架构定义了业务组件之间的依赖关系。这些依赖项需要没有循环。 业务组件通过定义良好的接口将其功能导出为自包含的 API。 一个业务组件可以通过其 API 使用另一个业务组件，并符合业务架构定义的依赖关系。</p><p>由于应用程序的业务领域和逻辑可能完全不同， devonfw 无法定义标准化的业务架构。 根据业务领域，它必须从头开始或从领域参考架构模板定义。 对于非常小的系统，只定义一个包含所有代码的业务组件可能是合适的。</p><h5 id="技术架构" tabindex="-1">技术架构 <a class="header-anchor" href="#技术架构" aria-label="Permalink to &quot;技术架构&quot;">​</a></h5><p><em>技术架构</em>基于多层架构将应用程序划分为技术 <em>层</em> 。层是具有相同类别的代码单元，例如服务或表示逻辑。 因此，一个层通常由技术框架支持。因此，每个业务组件都可以拆分为每个层的组件部分。 然而，一个业务组件可能没有针对每一层的组件部分（例如，只有一个使用来自其他组件的逻辑的表示部分）。</p><p>图“技术参考架构”给出了 devonfw 技术参考架构的概述。它定义了以下可视化为水平框的层：</p><ul><li><strong>前端</strong>（GUI）的客户端层。</li><li><strong>服务层</strong>，用于向客户端或其他消费者公开后端功能的服务。</li><li><strong>批处理层</strong>，用于在批处理过程中公开功能（例如批量导入）。</li><li>业务逻辑的<strong>逻辑层</strong>。</li><li>数据访问的<strong>领域层</strong>，尤其是持久性（在经典项目结构中，该层称为数据访问层）。</li></ul><p>此外，您可以将（业务）组件视为垂直框（例如<em>A</em>和 <em>X</em> ），以及它们是如何由组件部分组成的，每个部分都分配给一个技术层。</p><p>此外，左侧的灰色框对横切方面的技术组件进行了分组。这是一个完整的列表：</p><ul><li>安全</li><li>日志记录</li><li>监控</li><li>事务处理</li><li>异常处理</li><li>国际化</li><li>依赖注入</li></ul><p>[<img src="'+a+'" alt="devonfw 架构蓝图"></p><p>图 5. 技术参考架构</p><p>请单击架构图像以将其打开为 SVG，然后单击图层和横切主题以打开相应的文档指南。</p><p>我们在代码中反映了这种架构，如我们的<a href="https://devonfw-com.translate.goog/website/pages/docs/devonfw-guide_devon4j.wiki_coding-conventions.asciidoc.html?_x_tr_sl=auto&amp;_x_tr_tl=zh-CN&amp;_x_tr_hl=en#devonfw-guide_devon4j.wiki_coding-conventions.asciidoc_packages" target="_blank" rel="noreferrer">编码约定</a>中所述，允许将业务组件、用例、层等跟踪到代码中，并为开发人员在项目中提供良好的定位。</p><p>此外，架构图显示了由深绿色连接器表示的允许依赖项。在业务组件中，组件部分可以通过对其 API（垂直连接器）的依赖关系直接调用下层上的下一个组件部分。虽然这是自然而明显的，但通常禁止依赖向上层或通过直接依赖于下面两层或更多层的组件来跳过一层。业务组件之间允许的一般依赖关系由<a href="https://devonfw-com.translate.goog/website/pages/docs/devonfw-guide_devon4j.wiki_architecture.asciidoc.html?_x_tr_sl=auto&amp;_x_tr_tl=zh-CN&amp;_x_tr_hl=en#devonfw-guide_devon4j.wiki_architecture.asciidoc_business-architecture" target="_blank" rel="noreferrer">业务架构</a>定义。在我们的参考架构图中，我们假设<code>A1</code>允许业务组件依赖于组件<code>A2</code>。因此，允许逻辑组件部分中<code>A1</code>的用例从<code>A2</code>通过对组件 API 的依赖。这同样适用于客户端层上的对话框。这由水平连接器说明。请注意，<a href="https://devonfw-com.translate.goog/website/pages/docs/devonfw-guide_devon4j.wiki_guide-jpa.asciidoc.html?_x_tr_sl=auto&amp;_x_tr_tl=zh-CN&amp;_x_tr_hl=en#devonfw-guide_devon4j.wiki_guide-jpa.asciidoc_entity" target="_blank" rel="noreferrer">持久性实体</a>是数据访问组件部分的 API 的一部分，因此只有同一业务组件的逻辑组件部分可能依赖于它们。</p><p>技术架构必须解决非功能性需求：</p><ul><li><strong>可伸缩性</strong> 是通过在客户端保持状态并使服务器无状态（登录会话除外）来建立的。通过负载平衡器可以添加新的服务器节点以提高性能（水平扩展）。</li><li><strong>可用性</strong>和<strong>可靠性</strong> 通过冗余节点集群来解决，避免任何单点故障。如果一个节点发生故障，系统仍然可用。此外，软件必须是健壮的，这样就不会有死锁或其他可能导致系统不可用或不可靠的不良影响。</li><li><strong>安全性</strong> 通过正确的模板和避免漏洞的最佳实践归档在 devonfw 中。有关详细信息，请参阅<a href="https://devonfw-com.translate.goog/website/pages/docs/devonfw-guide_devon4j.wiki_guide-security.asciidoc.html?_x_tr_sl=auto&amp;_x_tr_tl=zh-CN&amp;_x_tr_hl=en" target="_blank" rel="noreferrer">安全指南</a>。</li><li><strong>性能</strong> 是通过选择正确的产品和适当的配置来获得的。虽然应用程序的实际实现对性能很重要，但正确的设计很重要，因为它是允许性能优化的关键（参见例如<a href="https://devonfw-com.translate.goog/website/pages/docs/asciidoc_devonfw-guide_devon4j.wiki_devon4j.asciidoc_guides.html?_x_tr_sl=auto&amp;_x_tr_tl=zh-CN&amp;_x_tr_hl=en#devonfw-guide_devon4j.wiki_guide-caching.asciidoc" target="_blank" rel="noreferrer">缓存</a>）。</li></ul>',33),n=[l];function s(d,_,c,p,g,h){return t(),o("div",null,n)}const f=e(r,[["render",s]]);export{u as __pageData,f as default};
