import{_ as i,a as s,o as a,aj as e}from"./chunks/framework.Ba_Ek9Jm.js";const _=JSON.parse('{"title":"Jenkins build and upload with git tag version","description":"","frontmatter":{"title":"Jenkins build and upload with git tag version","date":"2018-12-14T00:00:00.000Z","tags":["git","gradle","jenkins","ci"],"category":["DevOps"]},"headers":[],"relativePath":"posts/2018/12/2018-12-14-build-jenkins-gradle-build-with-tags.md","filePath":"posts/2018/12/2018-12-14-build-jenkins-gradle-build-with-tags.md","lastUpdated":1718173059000}'),t={name:"posts/2018/12/2018-12-14-build-jenkins-gradle-build-with-tags.md"},n=e('<p>如何使用git的tag版本号作为项目的版本号进行打包和发布：</p><ol><li>首先安装 <a href="https://wiki.jenkins.io/display/JENKINS/Git+Parameter+Plugin" target="_blank" rel="noreferrer">Git+Parameter+Plugin</a></li><li>配置 <code>This project is parameterized</code>，使用<code>TAG</code>作为参数和变量名，打开Advanced，进行排序等设置</li><li>通过<code>${TAG#*v}</code>tag名称作为版本号（v2.1.5 =&gt; 2.1.5)</li><li>构建脚本如下:<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">gradle</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> clean</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> upload</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -x</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> --refresh-dependencies</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  -PprojectVersion=${</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">TAG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">#*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">v</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">}</span></span></code></pre></div></li></ol>',2),l=[n];function d(p,r,h,o,k,g){return a(),s("div",null,l)}const u=i(t,[["render",d]]);export{_ as __pageData,u as default};