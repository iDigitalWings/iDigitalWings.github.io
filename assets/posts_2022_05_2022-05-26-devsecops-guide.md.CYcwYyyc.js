import{_ as e,a,o as p,aj as s}from"./chunks/framework.Ba_Ek9Jm.js";const n=JSON.parse('{"title":"DevSecOps 指南","description":"","frontmatter":{"title":"DevSecOps 指南","date":"2022-05-26T00:00:00.000Z","tags":["devsecops","devops"],"category":["运维"]},"headers":[],"relativePath":"posts/2022/05/2022-05-26-devsecops-guide.md","filePath":"posts/2022/05/2022-05-26-devsecops-guide.md","lastUpdated":1718173059000}'),t={name:"posts/2022/05/2022-05-26-devsecops-guide.md"},o=s('<p>DevSecOps 不再将安全区分开来， 工程团队需要从一开始就安全其纳入， 以确保他们在软件开发生命周期 (SDLC) 的每个阶段都增强安全性。</p><p>DevSecOps 位于提高自动化和协作的交叉点。 这有助于更快的开发、增强的安全性和更顺畅的操作。 虽然这表明 DevSecOps 可以对发布周期和整体组织结构产生巨大影响， 但它也强调了转向 DevSecOps 可能有点挑战的事实。</p><p>在本指南中，我们将了解 如何将安全性集成到 DevOps 流水线中、 您在这样做时可能面临的挑战、 基本工具是什么， 并提供一个简单的起点。 我们还将分享一些示例， 这些示例可以在您的旅程中为您提供帮助，并让您更轻松、更快速地转向 DevSecOps。</p><h2 id="devsecops-是什么意思" tabindex="-1">DevSecOps 是什么意思 <a class="header-anchor" href="#devsecops-是什么意思" aria-label="Permalink to &quot;DevSecOps 是什么意思&quot;">​</a></h2><p>DevSecOps 是一种文化和工程实践，它打破了孤岛，并在开发、安全和运维团队之间展开协作。 这个想法是是用自动化来专注于将安全软件和基础设施快速、频繁地交付到生产中。</p><p>简单地说，DevSecOps 是DevOps的扩展，您的关注点明确地放在安全角色上。 通过这种方法，安全成为所有团队成员之间的共同责任。 通常，漏洞检查在开发周期结束时执行。 这会导致团队之间的反复来回增加、昂贵的错误修复和资源浪费。</p><p>通过将 DevSecOps 集成到您的开发 pipeline 中， 您可以在整个开发阶段创建用于测试应用程序的循环实践。 因此，您将最大限度地减少应用程序中的漏洞，减少团队之间的摩擦，并节省合规性和安全修复的成本。</p><h2 id="为什么需要-devsecops" tabindex="-1">为什么需要 DevSecOps <a class="header-anchor" href="#为什么需要-devsecops" aria-label="Permalink to &quot;为什么需要 DevSecOps&quot;">​</a></h2><p>DevSecOps 支持“左移”安全协议。 这意味着在开发流程的早期阶段识别错误和问题， 以便更轻松、更便宜地应用安全修复程序。 目标是『一揽子安全』， 您可以在其中提高安全检查的覆盖范围和有效性， 提高软件质量，减少停机时间和漏洞数量。</p><p>这很简单。越早发现错误，就能越快解决它。 流程自动化程度越高，您的安全团队可以节省更多时间并专注于更关键、更具挑战性的问题。 DevSecOps 结合了所有这些，为您提供了一个简化、灵活和安全的应用程序开发生命周期。</p><h2 id="devsecops-和-devops-有什么区别" tabindex="-1">DevSecOps 和 DevOps 有什么区别？ <a class="header-anchor" href="#devsecops-和-devops-有什么区别" aria-label="Permalink to &quot;DevSecOps 和 DevOps 有什么区别？&quot;">​</a></h2><p>虽然 DevOps 和 DevSecOps 听起来非常相似， 但它们之间存在一些重要的差异，这些差异将两者区分开来并影响 IT 和业务效率。 请记住，这些是关键的差异化因素， 它们将帮助您对当前的应用程序开发生命周期进行必要的更改， 从而更多地关注速度、敏捷性和安全性。</p><p>DevOps 专注于在整个应用程序开发生命周期中开发和运维团队之间的协作，以提高速度。 它致力于持续集成和持续交付的理念； 在应用程序开发阶段利用自动化。 从集成到测试、交付和部署，DevOps 可在应用程序的整个生命周期内实现持续自动化。</p><p>对优化交付速度给予了极大的关注， 因此 DevOps 团队可能并不总是优先考虑安全协议。 更快的集成、代码检查、发布会给 DevOps 工程团队带来很大的压力。 更重要的是，它会影响安全团队，因为检查漏洞和错误被置于次要位置， 而速度在 DevOps 中占据主导地位。</p><p>另一方面，DevSecOps 是一种更具包容性的方法， 您可以在整个 DevOps 流水线中添加一个安全层。 应用程序安全性始于构建过程的开始并持续执行 -- 而不是在开发生命周期结束时。</p><p>DevSecOps 专注于嵌入自动安全检查的简短、迭代的应用程序开发流水线。 它提供了一个更受版本控制的 CI 流水线， 因此开发团队可以更轻松、更快速地跟踪和管理他们的代码。 通过这种方法，DevSecOps 工程师努力确保应用程序安全， 不会出现错误和漏洞，坚持安全检查，并准备好交付给用户。</p><p>总体而言，DevSecOps 包含 DevOps 的实践， 并将安全性作为支柱集成到整个应用程序开发流水线中。 由于消费者需求压力和赶上最后期限，开发人员可能会跳过许多安全检查。 通过在整个开发过程中集成 DevSecOps，开发人员可以轻松依赖自动安全检查并提高代码质量。 此外，DevSecOps 还包括减少停机时间的威胁建模和事件管理。</p><h2 id="如何实施-devsecops" tabindex="-1">如何实施 DevSecOps <a class="header-anchor" href="#如何实施-devsecops" aria-label="Permalink to &quot;如何实施 DevSecOps&quot;">​</a></h2><p>采用 DevSecOps 方法是一个目标，而不是冲刺。 可以理解的是，实现这种文化转变需要时间、资源和策略。 重要的是让利益相关者参与进来，与您的开发团队进行讨论， 与安全团队一起确定安全实践中的瓶颈和常见问题， 并引入运维以构建您的新 DevSecOps 生态系统。</p><p>值得注意的是，许多组织未能成功实施 DevSecOps， 因为他们以传统的安全思维方式对待它。 因此，他们将安全里程碑和实践直接带给开发团队，期望他们改变整个内部开发阶段。</p><p>近年来，我们已经看到数百家公司采用 DevSecOps， 尤其是在 COVID-19 期间和之后。 这些公司的不同之处在于， 他们为每个团队（开发、运维和安全）设定了真实的、可实现的里程碑， 并实施了在逐步实施 DevSecOps 的同时保持发布速度和节奏的框架。</p><p>以下是在 SDLC 中实施 DevSecOps 的工作流程：</p><h3 id="培训" tabindex="-1">培训 <a class="header-anchor" href="#培训" aria-label="Permalink to &quot;培训&quot;">​</a></h3><p>一种新的工作方式意味着让您的工程师拥有最好的知识； 提供特定于安全的编码培训。 投资与行业领导者和经验丰富的 DevSecOps 专业人士一起组织虚拟活动。 激励安全认证，使采用过程更快、更高效。</p><h3 id="ide扫描" tabindex="-1">IDE扫描 <a class="header-anchor" href="#ide扫描" aria-label="Permalink to &quot;IDE扫描&quot;">​</a></h3><p>IDE 扫描在开发人员编码时为他们提供有针对性的实时安全反馈。 鉴于这些工具在几秒钟内生成结果，开发人员可以立即更快地修复安全问题。 更复杂的 IDE 扫描工具也提供命令行变体， 这意味着即使没有 IDE 的直接支持，应用程序的安全功能可直接使用命令行。</p><h3 id="源代码扫描" tabindex="-1">源代码扫描 <a class="header-anchor" href="#源代码扫描" aria-label="Permalink to &quot;源代码扫描&quot;">​</a></h3><p>在当今快速发展的软件开发环境中， 开发人员依靠大量的开源集成（例如库、源代码、组件、插件、框架等） 来缩短开发时间并加快发布速度。在开发阶段的早期测试开源代码至关重要， 这就是源代码扫描的用武之地。</p><p>源代码扫描是一个代码分析框架， 通过快速分析安全瓶颈或潜在错误，帮助开发人员创建安全的应用程序和软件。 它针对您的应用程序的行业测试用例识别一系列安全问题，以检测开源代码问题。</p><h3 id="静态代码分析" tabindex="-1">静态代码分析 <a class="header-anchor" href="#静态代码分析" aria-label="Permalink to &quot;静态代码分析&quot;">​</a></h3><p>静态代码分析或静态应用程序安全测试 (SAST) 是在源代码未运行时分析常见安全问题和漏洞的过程。 由于 SAST 不需要您的应用程序正在运行， 因此它是一种在开发流水线的几乎每个阶段识别安全漏洞的高效方法。</p><p>SAST 是一个白盒测试过程，它允许在执行之前对代码进行测试。 SAST 工具逐行评估代码，在发现问题时提供补救建议，并确保开发人员符合开发标准。</p><h3 id="动态代码分析" tabindex="-1">动态代码分析 <a class="header-anchor" href="#动态代码分析" aria-label="Permalink to &quot;动态代码分析&quot;">​</a></h3><p>动态代码分析或动态应用程序安全测试 (DAST) 是一种用于识别正在运行的应用程序中的安全问题和漏洞的安全方法。这通常被称为黑盒测试。</p><p>DAST 采用更全面的方法，从外部检查正在运行的应用程序， 以通过攻击来发现缺陷或威胁。 因此，它不需要访问源代码或二进制文件来分析应用程序。</p><h3 id="容器安全管理" tabindex="-1">容器安全管理 <a class="header-anchor" href="#容器安全管理" aria-label="Permalink to &quot;容器安全管理&quot;">​</a></h3><p>您需要嵌入到软件开发生命周期中的另一种安全实践是容器安全性。 这是使用安全工具和策略来确保所有容器按预期工作的过程， 包括基础设施、系统工具、软件供应链、系统库和运行时以抵御网络安全威胁。</p><p>容器安全管理可帮助您确保环境的配置是安全的。 由于容器大量使用第三方组件，因此需要评估它们是否存在任何潜在的弱点或威胁。 容器安全管理中的漏洞评估有助于确保软件团队不会部署具有集成到 DevOps 流水线中的已知安全漏洞的不安全代码。</p><h3 id="密钥管理或保管库" tabindex="-1">密钥管理或保管库 <a class="header-anchor" href="#密钥管理或保管库" aria-label="Permalink to &quot;密钥管理或保管库&quot;">​</a></h3><p>这些工具专门用于安全地存储和管理 API 密钥、数据库凭证、 加密密钥、敏感配置设置（用户名、电子邮件地址、调试标志等）和密码等秘密。 选择可以帮助您保持严格的访问控制并提供全面审计日志的密钥管理工具或保管库。</p><p>例如，AWS Secrets Manager 可帮助您在本地和第三方服务上快速轮换、 管理和检索访问 AWS 云功能所需的密钥。</p><h2 id="devsecops-最佳实践" tabindex="-1">DevSecOps 最佳实践 <a class="header-anchor" href="#devsecops-最佳实践" aria-label="Permalink to &quot;DevSecOps 最佳实践&quot;">​</a></h2><p>无论您实施了多少技术或工具来培养 DevSecOps 文化， 您都需要同样关注人的因素。 提高组织所有团队的意识很重要，并且需要采用自上而下的方法， 尤其是在您采用 DevSecOps 时。</p><p>我们创建了DevSecOps 最佳实践指南，以帮助您完成您的旅程。 以下是我们在那里提到的所有最佳实践的快速总结。</p><ul><li>使用正确的工具提高 DevOps 性能</li><li>分析手动测试过程</li><li>实施左移安全原则</li><li>使用自动化来监控合规性、安全流程和策略</li><li>瞄准网络弹性</li><li>授权您的开发人员</li><li>集成 DevSecOps 自动化和编排</li></ul><h2 id="devops-安全工具" tabindex="-1">DevOps 安全工具 <a class="header-anchor" href="#devops-安全工具" aria-label="Permalink to &quot;DevOps 安全工具&quot;">​</a></h2><p>有很多可用的 DevOps 安全工具。 挑战在于找出您的要求并为您的 DevSecOps 技术堆栈选择正确的工具。</p><p>在本节中，我将帮助您了解将安全性成功集成到 DevSecOps 流水线中所需的工具类型。 我还将分享一份综合列表，其中包含最受认可和最有效的工具， 这些工具可以帮助您的开发团队创建安全代码并以持续的速度融入安全性。</p><h3 id="sast-工具" tabindex="-1">SAST 工具 <a class="header-anchor" href="#sast-工具" aria-label="Permalink to &quot;SAST 工具&quot;">​</a></h3><h4 id="什么是-sast" tabindex="-1">什么是 SAST？ <a class="header-anchor" href="#什么是-sast" aria-label="Permalink to &quot;什么是 SAST？&quot;">​</a></h4><p>SAST 工具依靠自动化来评估代码是否存在安全问题或错误。 因此，人为干预更少，并且开发人员自己执行测试不会成为一个平凡、耗时的过程。</p><p>SAST 工具的实时反馈使开发人员能够了解安全漏洞的确切位置及其原因。 这使团队可以节省金钱和时间——否则他们会在以后的错误变得昂贵并影响应用程序时投资于修复错误。</p><h3 id="dast-工具" tabindex="-1">DAST 工具 <a class="header-anchor" href="#dast-工具" aria-label="Permalink to &quot;DAST 工具&quot;">​</a></h3><h4 id="什么是-dast" tabindex="-1">什么是 DAST？ <a class="header-anchor" href="#什么是-dast" aria-label="Permalink to &quot;什么是 DAST？&quot;">​</a></h4><p>DAST 工具分析正在运行的应用程序中的执行逻辑和实时数据。 它可以检查应用程序是否存在 SQL 注入、跨站点脚本和其他常见安全漏洞。 DAST 工具还可以帮助验证权限，以确保只有授权用户才具有特定权限。 DAST 还可以识别硬应用程序故障并记录应用程序执行以进行测试故障分析。</p><p>SAST 和 DAST 工具都是安全开发流水线的必备工具。 这些工具是 DevSecOps 流水线的支柱， 更重要的是因为它们有助于提高效率，降低错误和威胁的风险， 并节省原本昂贵的缓解过程的成本。</p><h3 id="容器扫描" tabindex="-1">容器扫描 <a class="header-anchor" href="#容器扫描" aria-label="Permalink to &quot;容器扫描&quot;">​</a></h3><p>容器扫描为容器提供手动和自动漏洞扫描。 这种安全测试方法会持续扫描您的容器，以确保它们按预期运行。</p><p>在 SAST 和 DAST 的上下文中，容器扫描是一种跨越 SDLC 的连续安全测试方法。 通常，容器扫描应确认您的容器基础架构已正确配置和保护，并且软件供应链正常运行。</p><hr><ul><li><a href="https://www.opsera.io/learn/devsecops-complete-guide" target="_blank" rel="noreferrer">https://www.opsera.io/learn/devsecops-complete-guide</a></li></ul>',61),r=[o];function c(i,l,d,h,S,v){return p(),a("div",null,r)}const O=e(t,[["render",c]]);export{n as __pageData,O as default};