import{_ as t,a as r,o as e,aj as a}from"./chunks/framework.Ba_Ek9Jm.js";const o="/assets/img.fOnGmqA-.png",l="/assets/img_1.BY9f_cjy.png",u=JSON.parse('{"title":"SBOM 创新洞察力（Gartner）","description":"","frontmatter":{"title":"SBOM 创新洞察力（Gartner）","date":"2022-05-17T00:00:00.000Z","tags":["sbom","security","gartner"],"category":["其它"]},"headers":[],"relativePath":"posts/2022/05/2022-05-17-sbom-innovation-insight.md","filePath":"posts/2022/05/2022-05-17-sbom-innovation-insight.md","lastUpdated":1718173059000}'),n={name:"posts/2022/05/2022-05-17-sbom-innovation-insight.md"},i=a('<p>软件物料清单提高了软件供应链中专有和开源代码的<code>可见性</code>、<code>透明度</code>、<code>安全性</code>和<code>完整性</code>。 为了实现这些好处，软件工程领导者应该在<strong>整个软件交付生命周期</strong>中集成 SBOM。</p><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><h3 id="主要发现" tabindex="-1">主要发现 <a class="header-anchor" href="#主要发现" aria-label="Permalink to &quot;主要发现&quot;">​</a></h3><ul><li>软件供应链中专有和开源依赖项缺乏可见性和透明度，加剧了安全和合规风险。</li><li>软件工程团队通常缺乏工具、实践和标准来系统地发现和共享整个组织中易受攻击的软件包的详细信息。</li><li>使软件物料清单 (SBOM) 数据与相应的软件工件保持同步是一项关键挑战。</li><li>软件供应链安全攻击暴露了与商业采购工具和平台相关的风险，因为您不知道“盒子里面”有什么。</li></ul><h3 id="建议" tabindex="-1">建议 <a class="header-anchor" href="#建议" aria-label="Permalink to &quot;建议&quot;">​</a></h3><p>负责构建软件应用程序的软件工程领导者应该：</p><ul><li>通过使用 SBOM 跟踪软件开发生命周期 (SDLC) 中开源组件之间的依赖关系，增强对整个软件供应链的可见性。</li><li>通过使用 SBOM 标准交换有关组件及其关系的信息，发现受影响的组件并共享漏洞数据。</li><li>通过在软件构建过程中生成 SBOM，而不是依赖于预生成的 SBOM 数据，确保 SBOM 与软件工件一起重建。使用软件组成分析工具为第三方开源组件生成和验证 SBOM。</li><li>通过要求商业软件供应商在采购过程中提供基于标准的（例如，软件包数据交换(software package data exchange) [SPDX]、 软件识别 (software identification) [SWID]、CycloneDX）SBOM，降低软件供应链安全风险。</li></ul><h2 id="战略规划假设" tabindex="-1">战略规划假设 <a class="header-anchor" href="#战略规划假设" aria-label="Permalink to &quot;战略规划假设&quot;">​</a></h2><p>到 2025 年，60% 的构建或采购关键基础设施软件的组织将在其软件工程实践中强制执行和标准化 SBOM， 而 2022 年这一比例不到 20% 。</p><p>到 2024 年，90% 的软件组成分析工具将能够生成和验证 SBOM， 以帮助安全地使用开源软件，高于 2022 年的 30%。</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>本文档于 2022 年 3 月 28 日修订。您查看的文档为更正版本。有关详细信息，请参阅 gartner.com 上的更正页面。</p><p>开源是现代软件开发的基础。正如一份报告发现的那样， 75% 的被审计代码库是由具有已知安全漏洞的开源组件组成的。 此外，91% 的代码库包含开源依赖项， 在过去两年中没有任何功能升级、代码改进和安全问题修复。</p><p>虽然可重用组件和开源软件简化了软件开发， 但这种简单性暴露了一个严重的可见性差距： 组织无法准确记录和总结他们生产、使用和操作的大量软件。 如果没有这种可见性，软件供应链很容易受到与软件组件相关的安全和许可合规风险的影响。</p><p>软件工程领导者如何减轻安全和许可合规风险以实现大规模供应链安全? 他们必须将 SBOM 集成到他们的 DevSecOps 流水线中以执行三项任务：</p><ul><li>为所有生产的软件自动生成 SBOM</li><li>自动验证所使用软件的 SBOM（开源和专有）</li><li>使用 SBOM 数据持续评估安全和合规风险（部署前后）</li></ul><p>图 1 说明了软件工程领导者如何跨 SDLC 集成 SBOM 工作流（有关其他上下文，请参见注 1）。</p><p>图 1：将 SBOM 工作流集成为软件开发生命周期的一部分</p><p><img src="'+o+'" alt=""></p><p>该图显示了将 SBOM 工作流集成为软件开发流水线的一部分的步骤</p><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>软件物料清单 (SBOM) 是正式结构化的、机器可读的元数据， 它唯一地标识一个软件包和用于构建它的组件——这些组件可以是开源的或专有的。 SBOM 旨在跟踪和共享软件组件的详细信息及其跨组织的供应链关系。 这可以提高整个软件供应链的透明度、可审计性和可追溯性，从而加快解决安全性和合规性问题。</p><p>SBOM帮助组织确定他们是否容易受到以前在软件组件中发现的安全漏洞的影响。 这些组件可以是内部开发、商业采购或开源软件库。 SBOM 生成并验证有关代码来源和组件之间关系的信息， 这有助于软件工程团队在开发（例如，代码注入）和部署（例如，二进制篡改）期间检测恶意攻击。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>SBOM 是您的安全和合规工具箱中必不可少的工具。 它们有助于持续验证软件完整性并提醒利益相关者注意安全漏洞和违反政策的情况。</p></div><p>供应链依赖存在于所有软件包中。 图 2 突出了浏览器软件供应链的一小部分（例如，Chromium 浏览器项目） 中组件之间的复杂关系网络和间接依赖关系。 为了增加这种复杂性，图中的每个高级组件本身都由多个传递依赖项组成。 SBOM 揭示并强调了现代软件开发中看似无穷无尽的依赖链所面临的挑战。</p><p>图 2：真实世界开源项目中的软件供应链关系示例</p><p><img src="'+l+'" alt=""></p><p>该图显示了浏览器软件供应链的一小部分</p><p>为了驾驭这些关系和依赖关系，软件工程领导者应该采用一种通用的 SBOM 格式行业标准。 这种标准化将帮助软件工程团队轻松共享有关组成软件包的组件的元数据。 通用的数据交换格式还将使团队更容易自动化生成和验证 SBOM 的过程， 并确保整个供应链的互操作性和来源数据共享。</p><p>存在三个SBOM 标准：<code>SPDX</code>、<code>SWID</code> 和 <code>CycloneDX</code>。 在市场牵引力和社区支持方面，SPDX 和 CycloneDX 是广泛支持的格式：</p><ol><li><strong>软件包数据交换 (SPDX)</strong> —在 Linux 基金会的支持下创建的 SPDX 规范现在是一个 ISO 标准 (ISO/IEC 5962:2021)。由开源工具和商业供应商组成的丰富生态系统支持 SPDX。2创建和使用 SPDX 格式的 SBOM 的开发人员和打包人员可以参考 GitHub 存储库中的示例。3</li><li><strong>软件标识 (SWID)</strong> — SWID 项目由美国国家标准与技术研究院 (NIST) 支持，规范由 ISO/IEC 19770-2:2015 标准定义。NIST 正在努力将 SWID 标签数据纳入国家漏洞数据库 (NVD) 提供的漏洞数据集中，并将 SWID 标签数据纳入安全内容自动化协议 (SCAP)。NIST GitHub 存储库提供了用于生成和验证 SWID 标签的示例工具。4</li><li><strong>CycloneDX</strong> — CycloneDX 是一种轻量级 SBOM 标准，设计用于应用程序安全环境和供应链组件分析。CycloneDX 始于开放 Web 应用程序安全项目 (OWASP) 社区，该社区管理规范的战略方向和维护。CycloneDX GitHub 存储库包括以各种编程语言创建和使用 SBOM 的工具。5</li></ol><h3 id="美国-sbom-的最低要求" tabindex="-1">美国 SBOM 的最低要求 <a class="header-anchor" href="#美国-sbom-的最低要求" aria-label="Permalink to &quot;美国 SBOM 的最低要求&quot;">​</a></h3><p>美国商务部与国家电信和信息管理局 (NTIA) 一起发布了 SBOM 所需的最低要素（见注 1）。 最小元素支持基本的 SBOM 功能，分类如下：</p><ul><li>数据字段 -应跟踪的每个组件的基线信息</li><li>自动化支持——使用标准数据格式（SPDX、SWID 和 CycloneDX）自动生成 SBOM 和机器可读性</li><li>实践和流程——频率（在每个新的构建或发布时生成 SBOM）、深度（具有传递依赖的顶级组件）和分布（可供需要的人使用）</li></ul><h2 id="好处和用途" tabindex="-1">好处和用途 <a class="header-anchor" href="#好处和用途" aria-label="Permalink to &quot;好处和用途&quot;">​</a></h2><h3 id="好处" tabindex="-1">好处 <a class="header-anchor" href="#好处" aria-label="Permalink to &quot;好处&quot;">​</a></h3><h4 id="提高安全性和合规性" tabindex="-1">提高安全性和合规性 <a class="header-anchor" href="#提高安全性和合规性" aria-label="Permalink to &quot;提高安全性和合规性&quot;">​</a></h4><p>美国（例如，食品和药物管理局 [FDA] 和联邦能源管理委员会[FERC]）和欧洲（例如，欧盟网络安全局 [ENISA]） 的监管机构强制要求将 SBOM 作为所有可交付成果的先决条件与政府机构和受监管组织进行交易的组织。 这些法规的目标是提供对软件组件和依赖项的更大可见性，以准确确定组织面临的安全风险和漏洞。</p><p><em>示例：</em> 2021 年 12 月，在广泛使用的开源 Java 日志库Apache Log4j中发现了一个零日远程执行代码漏洞（代号Log4Shell ）。减轻此类风险的第一步是发现使用受影响版本库的应用程序。SBOM 可以成为一种有用的工具，用于清点应用程序并将其映射到易受攻击的依赖项，从而减少响应时间。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>SBOM 将为最终用户提供他们所需的透明度，以了解他们的产品是否依赖于易受攻击的软件库。</p><p><em>— 资料来源：网络安全和基础设施安全局</em></p></div><h4 id="提高软件的可见性和可追溯性" tabindex="-1">提高软件的可见性和可追溯性 <a class="header-anchor" href="#提高软件的可见性和可追溯性" aria-label="Permalink to &quot;提高软件的可见性和可追溯性&quot;">​</a></h4><p>SBOM 可以为软件工程团队提供更高的透明度， 让他们了解软件的构建方式、组成该软件的组件以及识别和修复安全漏洞的速度。 当团队发现组件中的缺陷或漏洞时， 他们可以使用 SBOM 快速识别受漏洞组件影响的所有软件。 SBOM 还为他们提供信息，以评估易受攻击的组件带来的潜在影响和风险。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>SBOM 提供了一种系统的、可扩展的方式来增加跨越组织边界、产品线、供应商、合作伙伴和国家的软件供应链的信任和安全性。</p></div><h4 id="改进了数据共享" tabindex="-1">改进了数据共享 <a class="header-anchor" href="#改进了数据共享" aria-label="Permalink to &quot;改进了数据共享&quot;">​</a></h4><p>SBOM 旨在解决共享开源软件和第三方软件的基本问题： 虽然每个组织都使用相同的组件，但每个组织都会重复扫描漏洞和分析违规行为的工作。 SPDX、SWID 和 CycloneDX 建立了一个通用的基础设施和数据交换格式， 以共享有关软件包的详细信息。这种标准化促进了组织之间的更大协作，并通过减少重复工作来节省时间。</p><h3 id="用途" tabindex="-1">用途 <a class="header-anchor" href="#用途" aria-label="Permalink to &quot;用途&quot;">​</a></h3><p>常见的 SBOM 用例包括：</p><ul><li>许可证合规性</li><li>监控软件组件的安全漏洞</li><li>导出/导入控件——允许创建组件的“拒绝列表”和“允许列表”</li><li>作为并购的一部分，确保整个软件组合的可见性</li><li>主动识别达到使用寿命的组件的替代品</li></ul><h2 id="风险" tabindex="-1">风险 <a class="header-anchor" href="#风险" aria-label="Permalink to &quot;风险&quot;">​</a></h2><p>SBOM 的成功取决于四个关键因素——数据共享、工作流自动化、数据交换标准化和对新应用程序架构的适应性。缺乏标准化的数据交换格式阻碍了团队、合作伙伴、供应商和客户之间共享 SBOM。</p><p>当供应链中的每个参与者都遵守共同商定的标准时，SBOM 会带来最大的价值。由于已经在使用或刚刚出现的大量软件和工具，实现这一共识可能需要一段时间。</p><p><em>建议：</em> 为了更好地促进数据共享和自动化SBOM的验证和处理，软件工程领导者必须使用基于标准的 SBOM 格式。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>SBOM 不是静态文档。组件的每个新版本都应包含一个新的 SBOM。 在未对 SBOM 进行相应更改的情况下发布和使用新组件存在巨大风险。 SBOM 生成和管理工具的可用性对于它们的广泛采用至关重要。 组织需要将 SBOM 功能集成到软件开发、打包和发布活动中； 并将 SBOM 作为资产管理系统的一个组成部分。</p></div><p>SBOM 生成工具依赖于发现可以通过包管理器 (PIP/DPKG) 查询的依赖关系。 这有时会提供一种“完整性”的错误感觉， 因为开发人员可以将预编译的二进制文件 (wget) 或原始代码 (tar.gz) 提取到他们的代码库中。 此外，使用 SBOM 的团队不得将“一层深”的 SBOM 与“完整的”SBOM 混为一谈。</p><p><em>建议</em>：为了使软件供应链完全透明，SBOM 必须在依赖图中尽可能深入地枚举组件。 SBOM 可以提供分层信息，其中包含在 SBOM 中的每个组件都可以拥有自己的 SBOM。</p><h2 id="采用率" tabindex="-1">采用率 <a class="header-anchor" href="#采用率" aria-label="Permalink to &quot;采用率&quot;">​</a></h2><p>在三个 SBOM 标准中，SPDX获得了最大的行业牵引力。它得到了 Snyk ( FossID )、Sonatype、Synopsys 和 WhiteSource 等软件组合分析 (SCA) 供应商的支持。SPDX 规范现在是一个 ISO 标准。SPDX 2.2 版包含一个“SPDX Lite”配置文件，该配置文件定义了规范的一个子集，以根据垂直特定的用例对其进行调整。SPDX Lite 由 Pioneer、Sony、Hitachi、Renesas 和 Fujitsu 等公司开发。</p><blockquote><p><strong>SPDX 规范成为 ISO/IEC 5962:2021</strong> “SPDX 在提高软件在整个供应链中创建、分发和使用的方式的信任和透明度方面发挥着重要作用。从事实上的行业标准到正式的 ISO/IEC JTC 1 标准的过渡使 SPDX 在全球范围内显着增加了采用率。”</p><p>Linux 基金会执行董事 Jim Zemlin</p><p>资料来源：Linux 基金会6</p></blockquote><p>SBOM 将在涉及关键基础设施和人类生活的垂直领域得到更多采用，例如能源、公用事业、医疗保健、制造、电信和政府。最直接的影响将是公共部门。对于美国联邦部门和机构来说尤其如此，其中 NIST 指南要求软件产品和服务供应商使用标准数据格式支持 SBOM。</p><h2 id="建议-1" tabindex="-1">建议 <a class="header-anchor" href="#建议-1" aria-label="Permalink to &quot;建议&quot;">​</a></h2><ul><li>通过使用、验证和共享所有软件组件和依赖项的出处数据，加快解决软件供应链中的漏洞。</li><li>使用基于标准的格式（例如 SPDX、SWID 和 CycloneDX）在组织内部和外部共享出处数据。</li><li>自动系统生成 SBOM，以便 SBOM 随工件的每个新版本更新。</li><li>通过维护包含经过验证的开源和第三方组件及其 SBOM的存储库，实现软件模块和服务的安全重用。</li></ul><h2 id="代表供应商" tabindex="-1">代表供应商 <a class="header-anchor" href="#代表供应商" aria-label="Permalink to &quot;代表供应商&quot;">​</a></h2><p>SBOM 标准由用于生产和使用 SBOM 的工具生态系统支持。表 1 包括三个主要 SBOM 标准的工具。</p><p>表1 ：自动化 SBOM 处理的工具（基于 SBOM 格式）</p><table tabindex="0"><thead><tr><th>SBOM Format</th><th>Tools</th></tr></thead><tbody><tr><td><strong>CycloneDX</strong></td><td><a href="https://cyclonedx.org/tool-center/" target="_blank" rel="noreferrer">CycloneDX Tool Center</a></td></tr><tr><td><strong>SPDX</strong></td><td><em><a href="https://spdx.dev/tools-community/" target="_blank" rel="noreferrer">SPDX Open-Source Tools</a></em> <a href="https://spdx.dev/tools-commercial/" target="_blank" rel="noreferrer">SPDX Commercial (Proprietary) Tools</a></td></tr><tr><td><strong>SWID</strong></td><td><a href="https://pages.nist.gov/swid-tools/" target="_blank" rel="noreferrer">NIST Software Identification (SWID) Tools</a></td></tr></tbody></table><p>Source: Gartner (February 2022)</p><p>表 2 和表 3分别包含开源和商业 SBOM 工具的代表性列表。这些 SBOM 工具支持以下一项或多项功能：</p><ul><li><strong>生产</strong>——在构建过程中创建 SBOM 的能力；分析源代码和二进制文件（例如，容器图像、zip 文件、动态链接库 [DLL]）以生成这些工件的 SBOM；和编辑 SBOM。</li><li><strong>消费</strong>——能够以人类可读的格式查看、比较、导入和验证 SBOM。</li><li><strong>转换</strong>——能够将 SBOM 内容从一种格式或文件类型合并和转换为另一种格式或文件类型。支持通过 API 和库在其他工具中使用 SBOM 操作。</li></ul><p>表2 ：开源 SBOM 工具</p><table tabindex="0"><thead><tr><th>Tool</th></tr></thead><tbody><tr><td><a href="https://github.com/chaoss/augur" target="_blank" rel="noreferrer">Augur</a></td></tr><tr><td><a href="https://github.com/kubernetes-sigs/bom" target="_blank" rel="noreferrer">Bom</a></td></tr><tr><td><a href="https://github.com/sigstore/cosign" target="_blank" rel="noreferrer">Cosign</a></td></tr><tr><td><a href="https://dependencytrack.org/" target="_blank" rel="noreferrer">Dependency-Track</a></td></tr><tr><td><a href="https://www.fossology.org/" target="_blank" rel="noreferrer">FOSSology</a></td></tr><tr><td><a href="https://github.com/oss-review-toolkit/ort" target="_blank" rel="noreferrer">GitHub OSS Review Toolkit (ORT)</a></td></tr><tr><td><a href="https://github.com/tap8stry/orion" target="_blank" rel="noreferrer">Orion</a></td></tr><tr><td><a href="https://democert.org/sbom/" target="_blank" rel="noreferrer">SwiftBOM</a></td></tr><tr><td><a href="https://github.com/nexB/scancode-toolkit" target="_blank" rel="noreferrer">GitHub ScanCode-Toolkit</a></td></tr><tr><td><a href="https://github.com/opensbom-generator/spdx-sbom-generator" target="_blank" rel="noreferrer">SPDX SBOM Generator</a></td></tr><tr><td><a href="https://github.com/anchore/syft" target="_blank" rel="noreferrer">Syft</a></td></tr><tr><td><a href="https://github.com/tern-tools/tern" target="_blank" rel="noreferrer">Tern</a></td></tr><tr><td><a href="https://www.yoctoproject.org/" target="_blank" rel="noreferrer">Yocto</a> <strong>(Linux-specific)</strong></td></tr></tbody></table><p>Source: Gartner (February 2022)</p><p>表3 ：商业 SBOM 工具</p><table tabindex="0"><thead><tr><th>Provider (Tool)</th></tr></thead><tbody><tr><td><a href="https://anchore.com/" target="_blank" rel="noreferrer">Anchore</a> <strong>(Syft)</strong></td></tr><tr><td><a href="https://www.argon.io/" target="_blank" rel="noreferrer">Aqua Security</a> <strong>(Argon)</strong></td></tr><tr><td><a href="https://codenotary.com/" target="_blank" rel="noreferrer">Codenotary</a></td></tr><tr><td><a href="https://www.contrastsecurity.com/" target="_blank" rel="noreferrer">Contrast Security</a></td></tr><tr><td><a href="https://www.cybeats.com/" target="_blank" rel="noreferrer">Cybeats</a> <strong>(Cybeats SBOM Studio)</strong></td></tr><tr><td><a href="https://www.nowsecure.com/" target="_blank" rel="noreferrer">NowSecure</a></td></tr><tr><td><a href="https://www.secure.software/" target="_blank" rel="noreferrer">Secure.software</a> <strong>by ReversingLabs</strong></td></tr><tr><td><a href="https://snyk.io/" target="_blank" rel="noreferrer">Snyk</a> <strong>(FossID)</strong></td></tr><tr><td><a href="https://www.sonatype.com/" target="_blank" rel="noreferrer">Sonatype</a> <strong>(Nexus)</strong></td></tr><tr><td><a href="https://soos.io/" target="_blank" rel="noreferrer">SOOS</a></td></tr><tr><td><a href="https://www.synopsys.com/" target="_blank" rel="noreferrer">Synopsys</a> <strong>(Black Duck)</strong></td></tr><tr><td><a href="https://tidelift.com/" target="_blank" rel="noreferrer">Tidelift</a></td></tr><tr><td><a href="https://www.whitesourcesoftware.com/" target="_blank" rel="noreferrer">WhiteSource</a></td></tr><tr><td></td></tr><tr><td>-</td></tr></tbody></table><h2 id="证据" tabindex="-1">证据 <a class="header-anchor" href="#证据" aria-label="Permalink to &quot;证据&quot;">​</a></h2><ol><li>2021 年 Synopsys 开源安全和风险分析报告。<a href="https://www.synopsys.com/software-integrity/resources/analyst-reports/open-source-security-risk-analysis.html" target="_blank" rel="noreferrer">2021 Synopsys Open Source Security and Risk Analysis Report.</a><ol><li>此外，根据 Sonatype 的2021 年软件供应链状况报告，排名前四的开源生态系统（Java、JavaScript、Python 和 .NET）现在包含 37,451,682 个不同版本的组件。2021 年，旨在利用上游开源生态系统弱点的软件供应链攻击同比增长 650%。攻击者不再等待利用公开披露的漏洞，而是积极在开源项目中植入恶意代码。软件供应链中由此产生的不利连锁反应导致需要验证第三方和开源软件的 SBOM。 <a href="https://www.sonatype.com/resources/state-of-the-software-supply-chain-2021" target="_blank" rel="noreferrer"></a></li></ol></li><li>软件包数据交换 <a href="https://spdx.dev/" target="_blank" rel="noreferrer">The Software Package Data Exchange</a></li><li>个^SPDX 示例，GitHub <a href="https://github.com/spdx/spdx-examples" target="_blank" rel="noreferrer">SPDX Examples</a></li><li>SWID 工具，GitHub <a href="https://github.com/usnistgov/swid-tools" target="_blank" rel="noreferrer">SWID Tools</a></li><li>CycloneDX SBOM 标准，GitHub <a href="https://github.com/CycloneDX" target="_blank" rel="noreferrer">CycloneDX SBOM Standard</a></li><li>SPDX 成为国际公认的软件材料清单标准，Linux 基金会 <a href="https://www.linuxfoundation.org/featured/spdx-becomes-internationally-recognized-standard-for-software-bill-of-materials/" target="_blank" rel="noreferrer"></a></li><li>SBOM 常见问题解答，NTIA <a href="https://www.ntia.doc.gov/files/ntia/publications/ntia_sbom_faq_-_april_15_draft.pdf" target="_blank" rel="noreferrer">SBOM FAQ</a></li><li>构建软件组件透明度：建立通用软件物料清单 (SBOM) ，NTIA <a href="https://www.ntia.gov/files/ntia/publications/ntia_sbom_framing_2nd_edition_20211021.pdf" target="_blank" rel="noreferrer"></a></li></ol><h2 id="注-1-谁使用-sbom-以及用于什么目的" tabindex="-1">注 1. 谁使用 SBOM 以及用于什么目的？ <a class="header-anchor" href="#注-1-谁使用-sbom-以及用于什么目的" aria-label="Permalink to &quot;注 1. 谁使用 SBOM 以及用于什么目的？&quot;">​</a></h2><p>如SBOM FAQ中所述，美国的 NTIA 为 SBOM 的使用提供了三个视角：^7^</p><ul><li><strong>对于那些生产软件的人，</strong> SBOM 用于协助构建和维护他们提供的软件。</li><li><strong>对于选择或购买软件的人来说，</strong> SBOM用于告知预购保证、协商折扣或计划实施策略。</li><li><strong>对于那些操作软件的人，</strong> SBOM 用于通知漏洞管理和资产管理，管理许可和合规性，并快速识别软件或组件的依赖关系和供应链风险。</li></ul><p>下面的表 4描述了NTIA定义和授权的最少数据字段。8</p><p>表4 ：SBOM 的最少数据字段（美国商务部）</p><table tabindex="0"><thead><tr><th>数据字段</th><th>描述</th></tr></thead><tbody><tr><td>供应商名称</td><td>创建、定义和标识组件的实体的名称。</td></tr><tr><td>组件名称</td><td>分配给原始供应商定义的软件单元的名称。</td></tr><tr><td>组件的版本</td><td>供应商用来指定软件从先前标识的版本发生变化的标识符。</td></tr><tr><td>其他唯一标识符</td><td>用于标识组件或用作相关数据库的查找键的其他标识符。</td></tr><tr><td>依赖关系</td><td>表征上游组件 X 包含在软件 Y 中的关系。</td></tr><tr><td>SBOM 数据的作者</td><td>为此组件创建 SBOM 数据的实体的名称。</td></tr><tr><td>时间戳</td><td>记录 SBOM 数据组装的日期和时间。</td></tr><tr><td><strong>推荐的数据字段</strong></td><td>描述</td></tr><tr><td>组件哈希</td><td>组件的唯一哈希，以帮助允许列表或拒绝列表。</td></tr><tr><td>生命周期阶段</td><td>SDLC 中捕获 SBOM 数据的阶段。</td></tr><tr><td></td><td></td></tr><tr><td>-</td><td></td></tr></tbody></table><p>资料来源：Gartner（2022 年 2 月）</p>',82),s=[i];function d(h,p,S,c,b,g){return e(),r("div",null,s)}const O=t(n,[["render",d]]);export{u as __pageData,O as default};
