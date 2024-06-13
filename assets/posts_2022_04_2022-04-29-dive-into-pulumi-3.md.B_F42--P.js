import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const c=JSON.parse('{"title":"深入 Pulumi - 3","description":"","frontmatter":{"title":"深入 Pulumi - 3","date":"2022-04-29T00:00:00.000Z","tags":["IaC"],"category":["运维"]},"headers":[],"relativePath":"posts/2022/04/2022-04-29-dive-into-pulumi-3.md","filePath":"posts/2022/04/2022-04-29-dive-into-pulumi-3.md","lastUpdated":1718173059000}'),t={name:"posts/2022/04/2022-04-29-dive-into-pulumi-3.md"},e=n(`<p>Pulumi 是一个现代的<code>基础设施即代码</code>平台。Pulumi 充分利用现有的编程语言通过 Pulumi SDK 来管理云资源。</p><h2 id="资源-resources" tabindex="-1">资源 Resources <a class="header-anchor" href="#资源-resources" aria-label="Permalink to &quot;资源 Resources&quot;">​</a></h2><p>资源是云基础架构的基本单元，比如一个计算示例、一个 VPC、一个服务。</p><p>Pulumi 中所有的基础设置资源都由<code>Resource</code>的两个子类描述：</p><ul><li><code>CustomResource</code>：自定义资源是 AWS、Azure 等 Provider 提供的云资源。</li><li><code>ComponentResource</code>：组件资源是其它资源的逻辑分组，是一个更大、更高级的抽象。</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Resource</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(name, args, options);</span></span></code></pre></div><p>所有资源都有一个必须的<code>name</code>参数作为<code>逻辑名称</code>，该名称在同一个 Stack 的同类资源中唯一。</p><p>Pulumi 会默认自动命名物理资源，当然也可以通过参数指定物理资源名称。</p><h3 id="资源名称" tabindex="-1">资源名称 <a class="header-anchor" href="#资源名称" aria-label="Permalink to &quot;资源名称&quot;">​</a></h3><p>Pulumi 的每个资源都有一个逻辑名称和物理名称。物理名称即 Provider 中的资源名称。</p><ul><li>默认使用逻辑名称+后缀作为物理名称。</li><li>Uniform Resource Name (URN)：统一资源名称是逻辑名称和资源类型以及组件派生的唯一名称。</li><li>更新资源的时候，一般会创建新的物理资源和逻辑名称关联，然后珊瑚旧的物理资源。</li></ul><p>URN 示例：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">urn:pulumi:production::acmecorp-website::custom:resources:Resource$aws:s3/bucket:Bucket::my-bucket</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">           ^^^^^^^^^^</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ^^^^^^^^^^^^^^^^</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ^^^^^^^^^^^^^^^^^^^^^^^^^</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ^^^^^^^^^^^^^^^^^^^^</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  ^^^^^^^^^</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">           &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">stack-name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">project-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">   &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">parent-typ</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">             &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">resource-typ</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">       &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">resource-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span></code></pre></div><h3 id="资源选项-options" tabindex="-1">资源选项 (Options) <a class="header-anchor" href="#资源选项-options" aria-label="Permalink to &quot;资源选项 (Options)&quot;">​</a></h3><p>所有资源构造器都接收下面这些资源参数：</p><ul><li><code>additionalSecretOutputs</code>:</li><li><code>aliases</code></li><li><code>customTimeouts</code></li><li><code>deleteBeforeReplace</code></li><li><code>dependsOn</code></li><li><code>ignoreChanges</code></li><li><code>import</code></li><li><code>parent</code></li><li><code>protect</code></li><li><code>provider</code></li><li><code>providers</code></li><li><code>replaceOnChanges</code></li><li><code>retainOnDelete</code></li><li><code>transformations</code></li><li><code>version</code></li></ul><p>需要的话可以查阅<a href="https://www.pulumi.com/docs/intro/concepts/resources/options/" target="_blank" rel="noreferrer">文档</a> ，此处不进行解释。</p><h3 id="组件-components" tabindex="-1">组件(Components) <a class="header-anchor" href="#组件-components" aria-label="Permalink to &quot;组件(Components)&quot;">​</a></h3><p>组件是资源的逻辑分组。通常在资源的构造函数中实例化一组相关资源。</p><p>比如：</p><ul><li>VPC 内置附带的最佳实践</li></ul><p>要在程序中创建可重用的新组件，需要继承 <code>ComponentResource</code>， 并在构造函数内部窗机资源，使用<code>parent</code>来建立父子关系。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> MyComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> pulumi</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">ComponentResource</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">opts</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;pkg:index:MyComponent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, name, {}, opts);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 创建子资源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> bucket </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> aws.s3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">Bucket</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">\`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">}-bucket\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/*...*/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}, { parent: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> });</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 注册组件的输出</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">registerOutputs</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({  bucketDnsName: bucket.bucketDomainName, })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>继承资源提供者：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> component </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    providers: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        aws: useast1,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        kubernetes: myk8s,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><h3 id="providers" tabindex="-1">Providers <a class="header-anchor" href="#providers" aria-label="Permalink to &quot;Providers&quot;">​</a></h3><p>资源提供者处理与云服务的通信， 以创建、读取、更新和删除您在 Pulumi 程序中定义的资源。 Pulumi 将代码传递给诸如 Node.js 之类的语言主机， 等待资源注册通知，组装您所需状态的模型， 并调用资源提供者来生成该状态。 资源提供者将这些请求转换为对云服务的 API 调用。</p><p>比如要使用 AWS Provider，那么就可以引入包 <code>@pulumi/aws</code>。</p><p>我们可以通过<code>pulumi config</code>来设置云厂商的配置信息：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pulumi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> aws:region</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> us-west-2</span></span></code></pre></div><p>具体的配置项，可以查看对应 Provider 的文档。</p><p>当然，我们也可以通过程序显示指定配置信息：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">let</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pulumi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;@pulumi/pulumi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">let</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> aws</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;@pulumi/aws&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Create</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> AWS</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> provider</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> us-east-1</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> region.</span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">let</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> useast1</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> aws.Provider</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;useast1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> region:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;us-east-1&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> }</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Create</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ACM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> us-east-1.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">let</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cert</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> aws.acm.Certificate</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;cert&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    domainName:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;foo.com&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    validationMethod:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;EMAIL&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}, { provider: useast1 });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Create</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> an</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ALB</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> listener</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> default</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> region</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> that</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> references</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> ACM</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> created</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> above.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">let</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> listener</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> aws.lb.Listener</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;listener&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    loadBalancerArn:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> loadBalancerArn,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    port:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> 443,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    protocol:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;HTTPS&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    sslPolicy:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;ELBSecurityPolicy-2016-08&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    certificateArn:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> cert.arn,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    defaultAction:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">        targetGroupArn:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> targetGroupArn,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        type</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;forward&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><p>我们也可以通过配置来禁用默认的 Provider（比如禁用 AWS）：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pulumi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;pulumi:disable-default-providers[0]&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> aws</span></span></code></pre></div><p>继续禁用 Kubernetes：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pulumi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;pulumi:disable-default-providers[1]&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> kubernetes</span></span></code></pre></div><p>禁用所有的 Providers：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">pulumi</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> set</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --path</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;pulumi:disable-default-providers[0]&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;*&#39;</span></span></code></pre></div><h3 id="getter" tabindex="-1">Getter <a class="header-anchor" href="#getter" aria-label="Permalink to &quot;Getter&quot;">​</a></h3><p>我们通过 Getter 来获取当前已有资源的信息（通过其它方式创建的资源）， 获取到的资源不会被 Pulumi 管理，不用担心他们的状态被修改或者破坏：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> *</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> aws </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;@pulumi/aws&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> group </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> aws.ec2.SecurityGroup.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;sg-0dfd33cdac25b1ec9&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> server </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> aws.ec2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">Instance</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;web-server&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ami: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;ami-6869aa05&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    instanceType: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;t2.micro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    securityGroups: [ group.name ], </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// reference the security group resource above</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><hr><ul><li><a href="https://www.pulumi.com/registry/packages/kubernetes/api-docs/" target="_blank" rel="noreferrer">Pulumi Node.js API</a></li><li><a href="https://github.com/pulumi/pulumi-kubernetes" target="_blank" rel="noreferrer">Pulumi Kubernetes</a></li><li><a href="https://www.pulumi.com/" target="_blank" rel="noreferrer">Pulumi 官网</a></li></ul>`,44),l=[e];function h(p,k,r,d,F,o){return a(),i("div",null,l)}const y=s(t,[["render",h]]);export{c as __pageData,y as default};
