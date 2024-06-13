import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const y=JSON.parse('{"title":"Devon4j: JSON","description":"","frontmatter":{"title":"Devon4j: JSON","date":"2022-06-18T00:00:00.000Z","tags":["devon4j"],"category":["架构"]},"headers":[],"relativePath":"posts/2022/06/2022-06-18-devon4j-json.md","filePath":"posts/2022/06/2022-06-18-devon4j-json.md","lastUpdated":1718173059000}'),t={name:"posts/2022/06/2022-06-18-devon4j-json.md"},e=n(`<p><a href="http://en.wikipedia.org/wiki/JSON" target="_blank" rel="noreferrer">JSON</a>（JavaScript Object Notation） 是一种流行的格式来表示和交换数据，特别是对于现代网络客户端。 对于将 Java 对象映射到 JSON ，没有官方标准 API，反之亦然。 我们使用成熟且强大的开源解决方案<a href="http://wiki.fasterxml.com/JacksonHome" target="_blank" rel="noreferrer">Jackson</a>。 由于 fastxml 的 wiki 存在问题，您应该尝试这个替代 <a href="https://github.com/FasterXML/jackson%23jackson-project-home-github" target="_blank" rel="noreferrer">wiki_Jackson</a>。</p><h2 id="配置-json-映射" tabindex="-1">配置 JSON 映射 <a class="header-anchor" href="#配置-json-映射" aria-label="Permalink to &quot;配置 JSON 映射&quot;">​</a></h2><p>为了避免使用专有的 Jackson 注释（例如<code>@JsonTypeInfo</code>、<code>@JsonSubTypes</code>、<code>@JsonProperty</code> ）污染业务对象， 我们建议创建一个单独的配置类。因此，每个 devonfw 应用程序（示例或从我们的<a href="https://devonfw.com/website/pages/docs/devonfw-guide_devon4j.wiki_devon4j.asciidoc_tutorials.html#devonfw-guide_devon4j.wiki_tutorial-newapp.asciidoc" target="_blank" rel="noreferrer">app-template</a> 创建的任何应用程序）都有一个名为<code>ApplicationObjectMapperFactory</code>的类，该类从 devon4j-rest 模块扩展 ObjectMapperFactory。它看起来像这样：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Named</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;ApplicationObjectMapperFactory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> ApplicationObjectMapperFactory</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> ObjectMapperFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> RestaurantObjectMapperFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    super</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // JSON configuration code goes here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="json-和继承" tabindex="-1">JSON 和继承 <a class="header-anchor" href="#json-和继承" aria-label="Permalink to &quot;JSON 和继承&quot;">​</a></h2><p>如果您对映射到 JSON 的对象使用继承，则无法开箱即用地支持多态性。 所以一般避免 JSON 映射中的多态对象。然而，这并不总是可能的。从我们的示例应用程序中查看以下示例：</p><p><img src="https://devonfw.com/website/pages/docs/images/REST-Inheritance.png" alt="继承类图"></p><p>图 6. 使用继承的传输对象</p><p>现在假设您有一个作为 Java 方法的 REST 服务操作，它以 ProductEto 作为参数。 由于这是一个抽象类，服务器需要知道要实例化的实际子类。 我们通常不想在 JSON 中指定类名，因为这应该是实现细节而不是公共 JSON 格式的一部分（例如，在服务接口的情况下）。 因此，我们为每个多态子类型使用一个符号名称，该名称在对象的 JSON 数据中作为虚拟属性 @type 提供：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{ </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;@type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Drink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }</span></span></code></pre></div><p>因此，您将配置代码添加到 <code>ApplicationObjectMapperFactory</code> 的构造函数中。在这里，您可以看到示例应用程序中的示例：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setBaseClasses</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(ProductEto.class);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addSubtypes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> NamedType</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(MealEto.class, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Meal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">), </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> NamedType</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(DrinkEto.class, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Drink&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> NamedType</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(SideDishEto.class, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;SideDish&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span></code></pre></div><p>我们用<code>setBaseClasses</code>来注册多态对象的所有顶级类。此外，我们通过<code>addSubtypes</code>声明所有具体的多态子类及其符号名称的 JSON 格式。</p><h2 id="自定义映射" tabindex="-1">自定义映射 <a class="header-anchor" href="#自定义映射" aria-label="Permalink to &quot;自定义映射&quot;">​</a></h2><p>为了映射不遵循 Java bean 约定的自定义数据类型或其他类型，您需要定义自定义映射。 如果您创建专用于 JSON 映射的对象，则可以轻松避免此类情况。当这不合适时，请按照以下说明定义映射：</p><ol><li><p>例如，为了正确处理货币金额，我们推荐使用 JSR354 (<code>javax.money</code>)。但是，如果没有自定义映射，Jackson 的默认映射将为 <code>MonetaryAmount</code> 生成以下 JSON：</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;currency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;defaultFractionDigits&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;numericCode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">978</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;currencyCode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;EUR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;monetaryContext&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">6.99</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;factory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>可以清楚地看到，JSON 包含太多信息，并揭示了不属于这里的程序实现秘密。相反，预期和期望的 JSON 输出将是：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;currency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;EUR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;amount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;6.99&quot;</span></span></code></pre></div><p>更糟糕的是，当我们将 JSON 数据发送到服务器时，Jackson 会看到这 <code>MonetaryAmount</code> 是一个接口，并且不知道如何实例化它，因此请求将失败。因此我们需要一个定制的 Serializer。</p></li><li><p>我们实现 <code>MonetaryAmountJsonSerializer</code> 来定义如何将 <code>MonetaryAmount</code> 序列化为 JSON：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> MonetaryAmountJsonSerializer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> JsonSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">MonetaryAmount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> NUMBER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;amount&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> CURRENCY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;currency&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> serialize</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(MonetaryAmount </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, JsonGenerator </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">jgen</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, SerializerProvider </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">provider</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ... {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      jgen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">writeStartObject</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      jgen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">writeFieldName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(MonetaryAmountJsonSerializer.CURRENCY);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      jgen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">writeString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getCurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getCurrencyCode</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      jgen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">writeFieldName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(MonetaryAmountJsonSerializer.NUMBER);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      jgen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">writeString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      jgen.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">writeEndObject</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span></code></pre></div><p>对于复合数据类型，将信息包装为对象（<code>writeStartObject()</code>和<code>writeEndObject()</code>）很重要。<code>MonetaryAmount</code>通过<code>getCurrency()</code>和<code>getNumber()</code> 提供我们需要的信息。这样我们就可以轻松地将它们写入 JSON 数据。</p></li><li><p>接下来，我们实现<code>MonetaryAmountJsonDeserializer</code>定义 <code>MonetaryAmount</code> 如何从 JSON 反序列化为 Java 对象：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> MonetaryAmountJsonDeserializer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> AbstractJsonDeserializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">MonetaryAmount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  protected</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> MonetaryAmount </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">deserializeNode</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(JsonNode </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">node</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    BigDecimal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getRequiredValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(node, MonetaryAmountJsonSerializer.NUMBER, BigDecimal.class);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> currencyCode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getRequiredValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(node, MonetaryAmountJsonSerializer.CURRENCY, String.class);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    MonetaryAmount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> monetaryAmount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        MonetaryAmounts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getAmountFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(number).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">setCurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(currencyCode).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> monetaryAmount;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>对于复合数据类型，我们扩展自<a href="https://github.com/devonfw/devon4j/blob/develop/modules/rest/src/main/java/com/devonfw/module/rest/service/impl/json/AbstractJsonDeserializer.java" target="_blank" rel="noreferrer"><code>AbstractJsonDeserializer</code></a>因为这使我们的任务更容易。所以我们通过数据类型解析的报文已经得到了<code>JsonNode</code>。基于此 API，可以轻松地从报文中检索各个字段，而无需考虑它们的顺序等。<code>AbstractJsonDeserializer</code>还提供了诸如<code>getRequiredValue</code>等方法读取所需字段并将它们转换为所需的基本数据类型。因此我们可以通过官方工厂 API 轻松读取金额和货币并构造一个<code>MonetaryAmount</code>实例。</p></li><li><p>最后，我们需要在 ApplicationObjectMapperFactory 的构造函数中使用以下配置代码注册我们的自定义（反）序列化器：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">SimpleModule</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> module</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getExtensionModule</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">module.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addDeserializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(MonetaryAmount.class, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> MonetaryAmountJsonDeserializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">module.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(MonetaryAmount.class, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> MonetaryAmountJsonSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span></code></pre></div></li></ol><p>现在我们可以按预期从JSON中读或者写<code>MonetaryAmount</code>对象。</p>`,17),h=[e];function l(p,k,r,d,o,g){return a(),i("div",null,h)}const A=s(t,[["render",l]]);export{y as __pageData,A as default};
