import{_ as s,a as i,o as a,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const D=JSON.parse('{"title":"Auto generate Release Notes in gitlab","description":"","frontmatter":{"title":"Auto generate Release Notes in gitlab","date":"2018-11-16T00:00:00.000Z","tags":["gitlab","git"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2018/11/2018-11-16-generate-release-note-in-gitlab.md","filePath":"posts/2018/11/2018-11-16-generate-release-note-in-gitlab.md","lastUpdated":1718173059000}'),h={name:"posts/2018/11/2018-11-16-generate-release-note-in-gitlab.md"},k=n(`<p>以下方案搜索自网络，未经过测试。</p><h2 id="方案一-使用-git-commits" tabindex="-1">方案一：使用 Git commits <a class="header-anchor" href="#方案一-使用-git-commits" aria-label="Permalink to &quot;方案一：使用 Git commits&quot;">​</a></h2><p><code>format_release_notes.rb</code></p><div class="language-ruby vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ruby</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#!/usr/bin/env ruby</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">log </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> ARGF</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.read</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">formatted </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> log.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">gsub</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/commit (</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">[</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\d</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">a-f]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">{40}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">)</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Author: .*</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">Date: +.*</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\n\\n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> {4}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">(.*)</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">(?:</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">{4}</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">.*</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">)*/</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;|\\1|\\2|&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">puts</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> formatted</span></span></code></pre></div><p>在 <code>.gitconfig</code> 中添加：</p><div class="language-ruby vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ruby</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">release</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">notes </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;!sh -c &#39;git log $(git rev-parse --abbrev-ref HEAD) --no-merges --not master | format_release_notes.rb&#39; -&quot;</span></span></code></pre></div><p>可以在命令行中使用：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> release-notes</span></span></code></pre></div><h2 id="方案二-使用-issues-github" tabindex="-1">方案二：使用 issues (GitHub) <a class="header-anchor" href="#方案二-使用-issues-github" aria-label="Permalink to &quot;方案二：使用 issues (GitHub)&quot;">​</a></h2><p>Generate HISTORY.md from GitHub Milestones and Tags</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">Build HISTORY.md from your GitHub Tags and Milestones.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">Note: Tag and Milestone name/title MUST MATCH!</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">**/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  GitHubApi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;github&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  async </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;async&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;fs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  _ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;underscore&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> github </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> GitHubApi</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // required</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  version: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;3.0.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // optional</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  timeout: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> REPO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;YOURREPONAME&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> USER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;YOURGITHUBUSERNAME&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">--optional</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">github.authenticate({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  type: &#39;oauth&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  token: &#39;yourtoken&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">});</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> MDContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> calls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">github.repos.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getTags</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({user: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">USER</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, repo: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">REPO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tags</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (err)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    throw</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> err;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  github.issues.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getAllMilestones</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({user: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">USER</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, repo: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">REPO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, state: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;closed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">milestones</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (err)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">      throw</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> err;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tags.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">      var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> milestone </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> _.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">find</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(milestones, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">m</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> m.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> tag.name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (milestone) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> call</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          github.issues.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">repoIssues</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({user: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">USER</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, repo: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">REPO</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, state: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;closed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, milestone: milestone.number}, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">issues</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (err)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">              throw</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> err;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (issues.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> ==</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">              return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            MDContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">### &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issues[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">].milestone.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\r\\n\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            issues </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> _.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">sortBy</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(issues, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">issue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">              return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issue.closed_at;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            issues.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            issues.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">issue</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">              var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">              if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (issue.html_url.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;/pull/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (issue.labels.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> &gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                  issue.labels.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">lbl</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                    labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> lbl.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;, &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (labels) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                  labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> labels.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, labels.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                  MDContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;[#&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issue.number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;](&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issue.html_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;) &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issue.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39; [&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> labels </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;]  </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">                else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                  MDContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;[#&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issue.number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;](&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issue.html_url </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;) &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> issue.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;  </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\r\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">              }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">          });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        calls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(call);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    async.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">series</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(calls, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">err</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(MDContent);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">writeFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;./HISTORY.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, MDContent);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><hr><ul><li><a href="https://coderwall.com/p/gkw6tg/generating-release-notes-from-git-commits" target="_blank" rel="noreferrer">https://coderwall.com/p/gkw6tg/generating-release-notes-from-git-commits</a></li><li><a href="https://gist.github.com/itayw/10249629" target="_blank" rel="noreferrer">https://gist.github.com/itayw/10249629</a></li></ul>`,13),l=[k];function t(p,e,r,g,d,A){return a(),i("div",null,l)}const F=s(h,[["render",t]]);export{D as __pageData,F as default};