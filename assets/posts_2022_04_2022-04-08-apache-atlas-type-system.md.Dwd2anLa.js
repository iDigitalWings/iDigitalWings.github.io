import{_ as s,a as i,o as a,aj as l}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"Apache Atlas: 类型系统（Type System）","description":"","frontmatter":{"title":"Apache Atlas: 类型系统（Type System）","date":"2022-04-08T00:00:00.000Z","tags":["apache-atlas"],"category":["BigData"]},"headers":[],"relativePath":"posts/2022/04/2022-04-08-apache-atlas-type-system.md","filePath":"posts/2022/04/2022-04-08-apache-atlas-type-system.md","lastUpdated":1718173059000}'),n={name:"posts/2022/04/2022-04-08-apache-atlas-type-system.md"},e=l(`<p>Apache Atlas 的类型系统和面向编程中的概念类型，都有类型（类）、实例、属性、值、继承等概念。 下面我们详细了解下 Apache Atlas 的类型系统。</p><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>Atlas 允许用户为他们想要管理的元数据对象定义一个模型。 该模型由称为“类型”的定义组成。 被称为「实体」的「类型」实例代表被管理的实际元数据对象。 类型系统是一个允许用户定义和管理类型和实体的组件， 由 Atlas 开箱即用管理的所有元数据对象（例如 Hive 表）都使用类型建模并表示为实体。 要在 Atlas 中存储新类型的元数据，需要了解类型系统组件的概念。</p><h2 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h2><p>Atlas 中的类型是对如何存储和访问特定类型的元数据对象的定义。</p><p>类型表示定义元数据对象的属性的一个或一组属性。 具有开发背景的用户将认识到类型与面向对象编程语言的「类」定义或关系数据库的「表模式」的相似性。</p><p>Atlas 原生定义类型的一个示例是 Hive 表。 比如使用以下属性定义 Hive 表：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Name:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">         hive_table</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">TypeCategory:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> Entity</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">SuperTypes:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">   DataSet</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">Attributes:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    name:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">             string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    db:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">               hive_db</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    owner:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    createTime:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">       date</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    lastAccessTime:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">   date</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    comment:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">          string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    retention:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        int</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    sd:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">               hive_storagedesc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    partitionKeys:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hive_colum</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    aliases:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">          array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    columns:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">          array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">hive_colum</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    parameters:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">       map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">strin</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">g</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    viewOriginalText:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    viewExpandedText:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    tableType:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        string</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    temporary:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        boolean</span></span></code></pre></div><p>上面例子可以看出：</p><ul><li>Atlas 类型的唯一标识是 <code>Name</code></li><li>一个类型有一个元类型。Atlas 具有以下元类型： <ul><li>原始元类型：<code>boolean</code>、<code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code>、<code>float</code>、<code>double</code>、<code>biginteger</code>、<code>bigdecimal</code>、<code>string</code>、<code>date</code></li><li>枚举元类型</li><li>集合元类型：<code>array</code>、<code>map</code></li><li>复合元类型：<code>Entity</code>、<code>Sturt</code>、<code>Classification</code>、<code>Relationship</code></li></ul></li><li>实体和分类类型可以从其他类型<strong>扩展</strong>，称为「超类型」——因此，它也可以包含超类型中定义的属性。这允许建模者跨一组相关类型等定义公共属性。这再次类似于面向对象语言如何为类定义超类的概念。Atlas 中的一个类型也可以从多个超类型扩展而来。 <ul><li>在此示例中，每个 hive 表都从称为<code>DataSet</code>的预定义超类型扩展而来。稍后将提供有关此预定义类型的更多详细信息。</li></ul></li><li>具有<code>Entity</code>、<code>Structure</code>、<code>Classification</code>或<code>Relationship</code>元类型的类型可以具有属性集合。每个属性都有一个名称和一些其他相关属性。可以使用表达式 <code>type_name.attribute_name</code> 来引用属性。还需要注意的是，属性本身是使用 Atlas 元类型定义的。 <ul><li>在此示例中，<code>hive_table.name</code> 是一个字符串，</li><li><code>hive_table.aliases</code> 是一个字符串数组，</li><li><code>hive_table.db</code> 指的是一个名为 <code>hive_db</code> 的类型的实例，依此类推。</li></ul></li><li>属性中的类型引用（如 <code>hive_table.db</code>）特别有趣。 <ul><li>使用这样的属性，我们可以定义 Atlas 中定义的两种类型之间的任意关系，从而构建丰富的模型。</li><li>还可以收集引用列表作为属性类型（例如 <code>hive_table.columns</code> 表示从 <code>hive_table</code> 到 <code>hive_column</code> 类型的引用列表）</li></ul></li></ul><h2 id="实体-entities" tabindex="-1">实体 / Entities <a class="header-anchor" href="#实体-entities" aria-label="Permalink to &quot;实体 / Entities&quot;">​</a></h2><p>实体是「类型」特定的值或示例。和面向对象编程中的<code>实例/instance</code>类似。</p><p>上面例子中 <code>hive_table</code> 类型的一个 Entity 就是一个特定的 Hive 表。具有 <code>hive_table</code> 类型的每个属性的值：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">guid:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">     &quot;9ba387dd-fa76-429c-b791-ffc338d3c91f&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">typeName:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;hive_table&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">status:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">   &quot;ACTIVE&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">values:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    name:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">             “customers”</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    db:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">               {</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;guid&quot;:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;b42c6cfc-c1e7-42fd-a9e6-890e0adf33bc&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">                        &quot;typeName&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;hive_db&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                      }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    owner:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">            “admin”</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    createTime:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       1490761686029</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    updateTime:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">       1516298102877</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    comment:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">          null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    retention:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    sd:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">               {</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;guid&quot;:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;ff58025f-6854-4195-9f75-3a3058dd8dcf&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">                        &quot;typeName&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">                        &quot;hive_storagedesc&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                      }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    partitionKeys:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    aliases:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">          null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    columns:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          [ </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;guid&quot;:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;65e2204f-6a23-4130-934a-9679af6a211f&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">                          &quot;typeName&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;hive_column&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                        { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">&quot;guid&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;d726de70-faca-46fb-9c99-cf04f6b579a6&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">                          &quot;typeName&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;hive_column&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">                          ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                      ]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    parameters:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">       {</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;transient_lastDdlTime&quot;:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;1466403208&quot;}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    viewOriginalText:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    viewExpandedText:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    tableType:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        “MANAGED_TABLE”</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">    temporary:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        false</span></span></code></pre></div><p>可以看出：</p><ul><li>每个实例都有一个 <code>GUID</code>标识，有 Atlas 服务器在定义对象时生成，在 Entity 整个生命周期内保持不变，任何时间都可以用 GUID 来访问实体。</li><li>每个实体都有类型名称 <code>typeName</code></li></ul><div class="tip custom-block"><p class="custom-block-title">Entity 和 Struct 区别</p><ul><li>Entity 有标识（GUID） <ul><li>Struct 没有标识</li></ul></li><li>实体可以从其他实体引用 <ul><li>Struct 只能作为值嵌入在实体内部属性</li></ul></li></ul></div><h2 id="属性-attributes" tabindex="-1">属性 / Attributes <a class="header-anchor" href="#属性-attributes" aria-label="Permalink to &quot;属性 / Attributes&quot;">​</a></h2><p>上面我们看到在实体、结构中定义了属性。属性本身除了名称和类型之外还有自己的其它元素：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        string,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">typeName:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    string,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">isOptional:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">isIndexable:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">isUnique:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">    boolean,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">cardinality:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> enum</span></span></code></pre></div><ul><li>name: 名称</li><li>typeName: 数据类型</li><li>isOptional: 可选</li><li>isIndexable: 是否索引</li><li>isUnique: 是否唯一</li><li>cardinality: 复合属性还是单一属性</li></ul><h2 id="系统特定的类型" tabindex="-1">系统特定的类型 <a class="header-anchor" href="#系统特定的类型" aria-label="Permalink to &quot;系统特定的类型&quot;">​</a></h2><p>如同前面看到的 <code>DataSet</code>，Atlas 带有一些预定义系统类型。</p><ul><li>Referenceable: 表示可以使用名为<code>qualifiedName</code>的唯一属性来搜索所有实体</li><li>Asset：扩展了 <code>Referenceable</code>并添加了<code>name</code>,<code>description</code>,<code>owner</code>等属性。 <ul><li>name 是必选的(isOptional=false)</li><li>其它属性是可选的</li><li>Asset 和 Referenceable 都是为了给建模者定义和查询实体做的约束和约定。</li></ul></li><li>Infrastructure: 扩展了 Asset，可以作为基础设施元数据对象的通用超类。比如：集群、主机等。</li><li>DataSet: 扩展了 <code>Referenceable</code>，可以用来标识存数数据的类型。 <ul><li>hive 表、hbase 表等类型都是从 DataSet 扩展而来。</li></ul></li><li>Process：扩展了 Asset，可以来表示任何数据转换操作。例如： <ul><li>从原始数据的 hive 表转换为存储了聚合信息 hive 表的 ETL 过程。</li><li>Process 具有 <code>inputs</code> 和 <code>outputs</code> 两个属性。</li></ul></li></ul><hr><ul><li><a href="https://atlas.apache.org/#/TypeSystem" target="_blank" rel="noreferrer">https://atlas.apache.org/#/TypeSystem</a></li></ul>`,26),t=[e];function h(p,k,d,F,r,c){return a(),i("div",null,t)}const y=s(n,[["render",h]]);export{g as __pageData,y as default};