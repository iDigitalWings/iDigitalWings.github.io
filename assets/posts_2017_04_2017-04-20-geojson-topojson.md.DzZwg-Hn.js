import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const y=JSON.parse('{"title":"GeoJson and TopoJson","description":"GeoJson and TopoJson","frontmatter":{"title":"GeoJson and TopoJson","date":"2017-04-19T00:00:00.000Z","img":"docker-jekyll.jpg","description":"GeoJson and TopoJson","tags":["js","d3","geojson","topjson"]},"headers":[],"relativePath":"posts/2017/04/2017-04-20-geojson-topojson.md","filePath":"posts/2017/04/2017-04-20-geojson-topojson.md","lastUpdated":1718193786000}'),t={name:"posts/2017/04/2017-04-20-geojson-topojson.md"},h=n(`<h2 id="geojson" tabindex="-1">GeoJson <a class="header-anchor" href="#geojson" aria-label="Permalink to &quot;GeoJson&quot;">​</a></h2><p>GeoJson是一种描述地理空间信息的数据格式。对JSON数据结构进行了定义，专门用来表示地理信息。</p><p>有如下类型的对象，每个对象都有必须定义的元素：</p><ul><li><code>Point</code>： 点</li><li><code>coordinates</code></li><li><code>MultiPoint</code>： 多点</li><li><code>coordinates</code></li><li><code>LineString</code>： 线</li><li><code>coordinates</code></li><li><code>MultiLineString</code>： 多线</li><li><code>coordinates</code></li><li><code>Polygon</code>： 面</li><li><code>coordinates</code></li><li><code>MultiPolygon</code>： 多面</li><li><code>coordinates</code></li><li><code>GeometryCollection</code>： 几何体集合</li><li><code>geometries</code>，表示GeoJSON几何对象的数组</li><li><code>Feature</code>： 特征</li><li><code>geometry</code>表示GeoJSON几何对象</li><li><code>properties</code></li><li><code>FeatureCollection</code>： 特征集合</li><li><code>features</code></li></ul><p>建议花几分钟看一下wikipedia的页面： <a href="https://en.wikipedia.org/wiki/GeoJSON" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/GeoJSON</a></p><h3 id="样例" tabindex="-1">样例 <a class="header-anchor" href="#样例" aria-label="Permalink to &quot;样例&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;FeatureCollection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;features&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Feature&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;geometry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;coordinates&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">102.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]},</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;prop0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;value0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Feature&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;geometry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;LineString&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;coordinates&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">102.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">103.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">104.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">105.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;prop0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;value0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;prop1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    { </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Feature&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;geometry&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Polygon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;coordinates&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          [ [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">101.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">101.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;prop0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;value0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">        &quot;prop1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;this&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;that&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="topojson" tabindex="-1">TopoJson <a class="header-anchor" href="#topojson" aria-label="Permalink to &quot;TopoJson&quot;">​</a></h2><p>TopoJson是GeoJSON按拓扑学编码后的扩展形式，由D3的作者Mike Bostock制定。</p><p>相比 GeoJSON 直接使用 Polygon、Point 之类的几何体来表示图形的方法，TopoJSON 中的每一个几何体都是通过将共享边（被称为arcs）整合后组成的。</p><p>TopoJSON 消除了冗余，文件大小缩小了 80%。</p><ul><li>wikipedia定义： <a href="https://en.wikipedia.org/wiki/GeoJSON#TopoJSON" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/GeoJSON#TopoJSON</a></li><li>github: <a href="https://github.com/topojson/topojson" target="_blank" rel="noreferrer">https://github.com/topojson/topojson</a></li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Topology&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;transform&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;scale&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;translate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;objects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;two-squares&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;GeometryCollection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;geometries&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Polygon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;arcs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:[[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]],</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Left_Polygon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Polygon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;arcs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:[[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]],</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Right_Polygon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;one-line&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;GeometryCollection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;geometries&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;LineString&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;arcs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Under_LineString&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;two-places&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;GeometryCollection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">      &quot;geometries&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;coordinates&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Origine_Point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;coordinates&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;properties&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:{</span><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Under_Point&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">  &quot;arcs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    [[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">-1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">],[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="两者区别可参考" tabindex="-1">两者区别可参考 <a class="header-anchor" href="#两者区别可参考" aria-label="Permalink to &quot;两者区别可参考&quot;">​</a></h2><p><a href="http://stackoverflow.com/questions/14740705/difference-between-geojson-and-topojson" target="_blank" rel="noreferrer">http://stackoverflow.com/questions/14740705/difference-between-geojson-and-topojson</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>If you care about file size or topology, then use TopoJSON. If you don’t care about either, then use GeoJSON for simplicity’s sake.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The primary advantage of TopoJSON is size. By eliminating redundancy and using a more efficent fixed-precision integer encoding of coordinates, TopoJSON files are often an order of magnitude smaller than GeoJSON files. The secondary advantage of TopoJSON files is that encoding the topology has useful applications, such as topology-preserving simplification (similar to MapShaper) and automatic mesh generation (as in the state-state boundaries in this example choropleth).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>These advantages come at a cost: a more complex file format. In JavaScript, for example, you’d typically use the TopoJSON client library to convert TopoJSON to GeoJSON for use with standard tools such as d3.geo.path. (In Python, you can use topojson.py.) Also, TopoJSON’s integer format requires quantizing coordinates, which means that it can introduce rounding error if you’re not careful. (See the documentation for topojson -q.)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>For server-side manipulation of geometries that does not require topology, then GeoJSON is probably the simpler choice. Otherwise, if you need topology or want to send the geometry over the wire to a client, then use TopoJSON</span></span></code></pre></div><h2 id="转换" tabindex="-1">转换 <a class="header-anchor" href="#转换" aria-label="Permalink to &quot;转换&quot;">​</a></h2><ul><li><a href="http://jeffpaine.github.io/geojson-topojson/" target="_blank" rel="noreferrer">http://jeffpaine.github.io/geojson-topojson/</a></li><li><a href="http://mapshaper.org/" target="_blank" rel="noreferrer">http://mapshaper.org/</a></li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>如果不在乎数据量或者程序要求，GeoJson的可读性更好（毕竟花几分钟就能看懂）。</p><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,23),p=[h];function k(l,e,o,r,C,d){return a(),i("div",null,p)}const A=s(t,[["render",k]]);export{y as __pageData,A as default};