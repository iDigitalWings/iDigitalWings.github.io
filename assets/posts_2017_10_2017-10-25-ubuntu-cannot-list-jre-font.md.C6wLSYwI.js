import{_ as s,a,o as i,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const u=JSON.parse('{"title":"Ubuntu Java List Font failed","description":"","frontmatter":{"title":"Ubuntu Java List Font failed","date":"2017-10-25T00:00:00.000Z","tags":["ubuntu","java","font"]},"headers":[],"relativePath":"posts/2017/10/2017-10-25-ubuntu-cannot-list-jre-font.md","filePath":"posts/2017/10/2017-10-25-ubuntu-cannot-list-jre-font.md","lastUpdated":1718193786000}'),t={name:"posts/2017/10/2017-10-25-ubuntu-cannot-list-jre-font.md"},e=n(`<div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> java.awt.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> * Created by shuyi on 2017/10/25.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> ListFont</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        GraphicsEnvironment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> GraphicsEnvironment.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getLocalGraphicsEnvironment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> font</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getAvailableFontFamilyNames</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(font);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h2 id="error1" tabindex="-1">error1 <a class="header-anchor" href="#error1" aria-label="Permalink to &quot;error1&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>java.lang.UnsatisfiedLinkError: jre/lib/amd64/libawt_xawt.so:</span></span>
<span class="line"><span>libXrender.so.1: cannot open shared object file: No such file or directory</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>apt-get install libxrender-dev</span></span></code></pre></div><h2 id="error2" tabindex="-1">error2 <a class="header-anchor" href="#error2" aria-label="Permalink to &quot;error2&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>java.lang.UnsatisfiedLinkError: /mnt/jdk1.8/jre/lib/amd64/libawt_xawt.so:</span></span>
<span class="line"><span>libXtst.so.6: cannot open shared object file: No such file or directory</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>apt-get install libxtst-dev</span></span></code></pre></div><hr><div style="text-align:center;color:#00000099;font-size:14px;">END</div>`,9),l=[e];function p(h,r,k,d,o,c){return i(),a("div",null,l)}const y=s(t,[["render",p]]);export{u as __pageData,y as default};