import{_ as a,a as e,o as s,aj as t}from"./chunks/framework.Ba_Ek9Jm.js";const u=JSON.parse('{"title":"Metabase","description":"","frontmatter":{"title":"Metabase","date":"2020-01-17T21:07:46.680Z","tags":["metabase","bi"],"category":["Tools"]},"headers":[],"relativePath":"posts/2020/01/2020-01-17-bi-metabase.md","filePath":"posts/2020/01/2020-01-17-bi-metabase.md","lastUpdated":1718173059000}'),n={name:"posts/2020/01/2020-01-17-bi-metabase.md"},i=t(`<h2 id="kubernetes-安装" tabindex="-1">Kubernetes 安装 <a class="header-anchor" href="#kubernetes-安装" aria-label="Permalink to &quot;Kubernetes 安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>k create ns bi</span></span>
<span class="line"><span>k ns bi</span></span>
<span class="line"><span>helm install --name metabase stable/metabase</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span>export POD_NAME=$(kubectl get pods --namespace bi -l &quot;app=metabase,release=metabase&quot; -o jsonpath=&quot;{.items[0].metadata.name}&quot;)</span></span>
<span class="line"><span>echo &quot;Visit http://127.0.0.1:8080 to use your application&quot;</span></span>
<span class="line"><span>kubectl port-forward --namespace bi $POD_NAME 8080:3000</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>`,4),o=[i];function p(l,c,d,r,b,h){return s(),e("div",null,o)}const _=a(n,[["render",p]]);export{u as __pageData,_ as default};
