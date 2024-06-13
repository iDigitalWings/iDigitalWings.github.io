import{_ as i,a as s,o as a,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const g=JSON.parse('{"title":"OSHI Operating System & Hardware Information","description":"","frontmatter":{"title":"OSHI Operating System & Hardware Information","date":"2019-09-10T00:00:00.000Z","tags":["java","oshi"],"category":["Java"]},"headers":[],"relativePath":"posts/2019/09/2019-09-10-oshi.md","filePath":"posts/2019/09/2019-09-10-oshi.md","lastUpdated":1718173059000}'),t={name:"posts/2019/09/2019-09-10-oshi.md"},r=e(`<p>之前使用 sigar 获取系统信息，但是该方案在不同平台上需要 dll，so 等库，后来 发现了 <a href="https://github.com/oshi/oshi" target="_blank" rel="noreferrer">oshi</a> 这个项目。</p><h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// https://mvnrepository.com/artifact/com.github.oshi/oshi-core</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">compile </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">group</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;com.github.oshi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;oshi-core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;4.0.0&#39;</span></span></code></pre></div><h2 id="支持的特性" tabindex="-1">支持的特性 <a class="header-anchor" href="#支持的特性" aria-label="Permalink to &quot;支持的特性&quot;">​</a></h2><ul><li>Computer System and firmware, baseboard</li><li>Operating System and Version/Build</li><li>Physical (core) and Logical (hyperthreaded) CPUs</li><li>System and per-processor load % and tick counters</li><li>CPU uptime, processes, and threads</li><li>Process uptime, CPU, memory usage</li><li>Physical and virtual memory used/available</li><li>Mounted filesystems (type, usable and total space)</li><li>Disk drives (model, serial, size) and partitions</li><li>Network interfaces (IPs, bandwidth in/out)</li><li>Battery state (% capacity, time remaining)</li><li>Connected displays (with EDID info)</li><li>USB Devices</li><li>Sensors (temperature, fan speeds, voltage)</li></ul><h2 id="测试类" tabindex="-1">测试类 <a class="header-anchor" href="#测试类" aria-label="Permalink to &quot;测试类&quot;">​</a></h2><p>官方提供了测试类 <a href="https://github.com/oshi/oshi/blob/master/oshi-core/src/test/java/oshi/SystemInfoTest.java" target="_blank" rel="noreferrer">SystemInfoTest</a> 演示了怎么使用，很简单就不再赘述了。</p>`,7),l=[r];function o(n,h,p,d,c,k){return a(),s("div",null,l)}const y=i(t,[["render",o]]);export{g as __pageData,y as default};
