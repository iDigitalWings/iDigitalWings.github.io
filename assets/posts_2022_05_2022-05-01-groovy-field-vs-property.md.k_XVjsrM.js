import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const c=JSON.parse('{"title":"Groovy 的字段和属性（Field vs Property）","description":"","frontmatter":{"title":"Groovy 的字段和属性（Field vs Property）","date":"2022-05-01T00:00:00.000Z","tags":["groovy"],"category":["java"]},"headers":[],"relativePath":"posts/2022/05/2022-05-01-groovy-field-vs-property.md","filePath":"posts/2022/05/2022-05-01-groovy-field-vs-property.md","lastUpdated":1718173059000}'),t={name:"posts/2022/05/2022-05-01-groovy-field-vs-property.md"},p=n(`<h2 id="field" tabindex="-1">Field <a class="header-anchor" href="#field" aria-label="Permalink to &quot;Field&quot;">​</a></h2><p><code>class</code> 或者 <code>trait</code> 满足下面条件的成员会作为字段（Field）：</p><ul><li>手动增加访问修饰符 (<code>public</code>, <code>protected</code>, <code>private</code>)</li><li>一个或者多个可选修饰符 (<code>static</code>, <code>final</code>, <code>synchronized</code>)</li><li>可选的类型</li><li>成员有名称</li></ul><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> id                                  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    protected</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> description                    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> boolean</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> DEBUG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">       </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>字段可以被初始化：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> IDGenerator.</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">next() </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>字段可以忽略类型：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> BadPractice</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> mapping                         </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> GoodPractice</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> Map&lt;String,String&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> mapping      </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="property" tabindex="-1">Property <a class="header-anchor" href="#property" aria-label="Permalink to &quot;Property&quot;">​</a></h2><p>Property 定义请参考 <a href="https://download.oracle.com/otndocs/jcp/7224-javabeans-1.01-fr-spec-oth-JSpec/" target="_blank" rel="noreferrer">JavaBeans Specification</a>。</p><p><code>class</code> 或者 <code>trait</code> 满足下面条件的成员会作为字段（Property）：</p><ul><li>隐式访问修饰符 (没有 <code>public</code>, <code>protected</code>, <code>private</code>)</li><li>一个或者多个可选修饰符 (<code>static</code>, <code>final</code>, <code>synchronized</code>)</li><li>可选的类型</li><li>成员有名称</li></ul><p>Groovy 会为属性生成合适的 getters/setters 方法：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> name                             </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> age                                 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>如果一个属性被声明为 <code>final</code>，那么不会有 setter 生成：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> name                   </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    final</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> age                       </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> age</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> name                </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> age                  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>可以通过 <code>properties</code> 来访问所有属性：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> age</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">properties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">keySet()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">containsAll([</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">])</span></span></code></pre></div><p>如果有符合 Java Bean 规范的 getter/setter，那么 Groovy 人为存在这个属性：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> PseudoProperties</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // a pseudo property &quot;name&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> setName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    String</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // a pseudo read-only property &quot;age&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> getAge</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() { </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // a pseudo write-only property &quot;groovy&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> setGroovy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">boolean</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> groovy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">def</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> PseudoProperties</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                      </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">assert</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 42</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">groovy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> true</span></span></code></pre></div><hr><ul><li><a href="https://groovy-lang.org/objectorientation.html#_fields_and_properties" target="_blank" rel="noreferrer">https://groovy-lang.org/objectorientation.html#_fields_and_properties</a></li><li><a href="https://download.oracle.com/otndocs/jcp/7224-javabeans-1.01-fr-spec-oth-JSpec/" target="_blank" rel="noreferrer">https://download.oracle.com/otndocs/jcp/7224-javabeans-1.01-fr-spec-oth-JSpec/</a></li></ul>`,22),l=[p];function h(e,k,r,d,o,g){return a(),i("div",null,l)}const A=s(t,[["render",h]]);export{c as __pageData,A as default};