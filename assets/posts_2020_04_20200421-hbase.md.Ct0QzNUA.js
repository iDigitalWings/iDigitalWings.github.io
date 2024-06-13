import{_ as s,a as i,o as a,aj as h}from"./chunks/framework.Ba_Ek9Jm.js";const A=JSON.parse('{"title":"HBase","description":"","frontmatter":{"title":"HBase","date":"2020-04-21T11:31:32.491Z","category":["大数据"],"tag":["hbase"]},"headers":[],"relativePath":"posts/2020/04/20200421-hbase.md","filePath":"posts/2020/04/20200421-hbase.md","lastUpdated":1718175555000}'),e={name:"posts/2020/04/20200421-hbase.md"},t=h(`<p>NoSQL 数据库。特性：</p><ul><li>强读写一致。不是最终一致性。适合高速的计算聚合</li><li>自动分片，通过 Region 分散在集群中。</li><li>Thrift/Rest Api, Java API</li><li>高效的列查询优化</li><li>Web 界面</li></ul><p>适合场景：</p><ul><li>十亿百亿的数据</li><li>不需要辅助索引、静态类型列、事务等特性</li><li>有足够的硬件资源</li></ul><h2 id="hbase-架构" tabindex="-1">HBase 架构 <a class="header-anchor" href="#hbase-架构" aria-label="Permalink to &quot;HBase 架构&quot;">​</a></h2><ul><li>Zookeeper</li><li>HDFS</li><li>RegionServer</li><li>Master</li><li>RegionServer 实时向 Master 报告信息，Master 控制 RegionServer 的故障转移和 Region 划分。</li></ul><h3 id="hbase-env-sh" tabindex="-1">hbase-env.sh <a class="header-anchor" href="#hbase-env-sh" aria-label="Permalink to &quot;hbase-env.sh&quot;">​</a></h3><p>$HBASE_HOME/conf/hbase-env.sh</p><p>配置了 JavaHome 等</p><h2 id="hbase-site-xml" tabindex="-1">hbase-site.xml <a class="header-anchor" href="#hbase-site-xml" aria-label="Permalink to &quot;hbase-site.xml&quot;">​</a></h2><p>主配置文件。 $HBASE_HOME/conf/hbase-site.xml</p><h2 id="start-hbase-sh" tabindex="-1">start-hbase.sh <a class="header-anchor" href="#start-hbase-sh" aria-label="Permalink to &quot;start-hbase.sh&quot;">​</a></h2><p>$HBASE_HOME/bin/start-hbase.sh</p><p>启动成功后可以通过 <a href="http://hosts:16010" target="_blank" rel="noreferrer">http://hosts:16010</a> 查看 WebUI。</p><h2 id="shell" tabindex="-1">Shell <a class="header-anchor" href="#shell" aria-label="Permalink to &quot;Shell&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">$HBASE_HOME/bin/hbase shell</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> help</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 创建表，必须指定表名和列簇名</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> create </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;cf&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 列出表信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> list </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;test&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 表详细信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> describe </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;test&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 写入数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> put </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;row1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;cf:a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;value1&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> put </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;row2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;cf:b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;value2&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> put </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;row3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;cf:c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;value3&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 查看表所有数据</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> scan </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;test&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&gt;</span></span></code></pre></div><hr><ul><li><a href="https://hbase.apache.org/" target="_blank" rel="noreferrer">官网</a></li></ul>`,18),l=[t];function n(p,k,r,d,g,o){return a(),i("div",null,l)}const F=s(e,[["render",n]]);export{A as __pageData,F as default};
