import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const c=JSON.parse('{"title":"MyBatis Plus TypeHandler Json","description":"","frontmatter":{"title":"MyBatis Plus TypeHandler Json","date":"2021-09-27T00:00:00.000Z","tags":["mybatis","java"],"category":["Java"]},"headers":[],"relativePath":"posts/2021/09/2021-09-27-mybatis-plus-typehandler.md","filePath":"posts/2021/09/2021-09-27-mybatis-plus-typehandler.md","lastUpdated":1718173059000}'),t={name:"posts/2021/09/2021-09-27-mybatis-plus-typehandler.md"},l=n(`<p>可以使用 <code>@TableField(typeHandler = JacksonTypeHandler)</code> 注解在字段上让MyBatis自动进行对象的转换。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>MyBatis Plus 自带了 <code>JasksonTypeHandler</code>，<code>GsonTypeHandle</code> 等 handler。</li><li>字段可以是 varchar、text 或者是 json 类型。</li></ul></div><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@Entity</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@EntityListeners</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">AuditingEntityListener</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.class)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@TableName</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">autoResultMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> CyberObjectEntity</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    @Id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    @GeneratedValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">strategy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> GenerationType</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">AUTO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    Long</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> id</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> code</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> name</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> fields</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> deletedFields</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    @Column</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">columnDefinition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;TEXT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    @Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;org.hibernate.type.TextType&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    @TableField</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">typeHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> JacksonTypeHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    CyberObject</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;"> json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>如果要自定义 Handler 只需要实现其接口，配置 Handler 扫描路径即可。</p><ul><li><a href="https://baomidou.com/config/#typealiasessupertype" target="_blank" rel="noreferrer">https://baomidou.com/config/#typealiasessupertype</a></li></ul>`,5),e=[l];function p(h,k,r,d,y,g){return a(),i("div",null,e)}const A=s(t,[["render",p]]);export{c as __pageData,A as default};