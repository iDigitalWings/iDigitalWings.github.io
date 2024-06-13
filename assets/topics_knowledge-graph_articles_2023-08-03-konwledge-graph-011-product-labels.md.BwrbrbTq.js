import{_ as t,a as e,o,aj as p}from"./chunks/framework.Ba_Ek9Jm.js";const a="/assets/183841059081958.Bwep95mt.jpg",r="/assets/152611157221958.DNuBI708.png",s="/assets/152483586208291.DQ3RHVWq.png",l="/assets/153167968773000.CqHcoLTP.png",i="/assets/153259192070333.CEhHBZ9d.png",n="/assets/182783388985083.Cb5jpRwT.png",P=JSON.parse('{"title":"《构建个人知识图谱》011：产品化思路和多图谱标签","description":"","frontmatter":{"title":"《构建个人知识图谱》011：产品化思路和多图谱标签","date":"2023-08-03T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"topics/knowledge-graph/articles/2023-08-03-konwledge-graph-011-product-labels.md","filePath":"topics/knowledge-graph/articles/2023-08-03-konwledge-graph-011-product-labels.md","lastUpdated":1718173059000}'),c={name:"topics/knowledge-graph/articles/2023-08-03-konwledge-graph-011-product-labels.md"},h=p('<p>个人知识图谱开发过程中是有产品化的计划的，不过忙了个双十一然后加之自己偷懒，一直没更新。 前两天跟我亲爱的读者聊天时还被问到，改变拖延今天继续更新。这篇文章主要跟大家介绍下产品化的思路以及标签（多图谱）功能的实现。</p><blockquote><p>今天内容不多，想省流的话可以直接去文章末尾看16秒的视频演示。</p></blockquote><p>!!! explain 关于系列文章 从这篇文章开始，《构建个人知识图谱》变成了《<strong>构建个人知识图谱产品</strong>》，011 之前介绍做给自己的知识图谱工具， 从今天开始讲构建给大家的个人知识图谱工具。</p><p>之前是有一篇讲搜索的 <strong>009</strong>，一篇闲聊 UI 的 <strong>010</strong> 两个短篇，由于写的比较简单没发布，文章编号的时候我想了又想还是把他俩也算上了，接着从 011 开始。</p><p>!!!</p><h2 id="产品化思路" tabindex="-1">产品化思路 <a class="header-anchor" href="#产品化思路" aria-label="Permalink to &quot;产品化思路&quot;">​</a></h2><p>现有的工具我自己的使用感受挺不错的，产品化的话无非就是两件事：</p><ul><li>优化现有的</li><li>增加新的</li></ul><p><img src="'+a+'" alt="预览"></p><h4 id="优化现有的" tabindex="-1">优化现有的 <a class="header-anchor" href="#优化现有的" aria-label="Permalink to &quot;优化现有的&quot;">​</a></h4><p>优化现有的：就是把我想要的功能留下，把我自己的东西去掉，用高中哲学课本里面的话说就是：<strong>从特性里面寻找共性</strong>。 按这个思路来，我个人图谱工具现有的功能我还有不少喜欢的，几乎所有写到公众号里面的文章我都挺满意的。</p><h4 id="增加新功能" tabindex="-1">增加新功能 <a class="header-anchor" href="#增加新功能" aria-label="Permalink to &quot;增加新功能&quot;">​</a></h4><p>其次就是增加新的：之前计划有不少新功能还没实现，既然决定产品化了，这些东西当然要一个一个安排上， 比如：</p><ul><li>我很想加但是还没设计好的时间线功能；</li><li>之前和一个读者聊过的与本地知识管理工具的同步等；</li><li>当然还有基本的用户管理、数据隔离也不能少。</li></ul><p>!!! explain 产品化的第一步？</p><p>产品化的第一步是不是做用户注册么？当然不是，所有和产品核心功能无关的都是小事，放到最后去稍微整整就行。</p><p>!!!</p><h2 id="多图谱定义" tabindex="-1">多图谱定义 <a class="header-anchor" href="#多图谱定义" aria-label="Permalink to &quot;多图谱定义&quot;">​</a></h2><p>前面我们提到过，一个知识图谱可能不够用，所以增加了多图谱的定义， 但是之前我是按照自己的需求一个个写的，现在来说，肯定不能让我自己对每个人定制了。</p><p>所以咱们上来就先搞个多谱图的支持。</p><h3 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h3><p>功能设计上我们继承之前多图谱的设计。同一个节点可以属于多张图谱，这样的话整个图谱就对应你的第二大脑， 一个知识点他永远是一个知识点，不需要在不同图谱之间拷贝。</p><p><img src="'+r+'" alt="图谱和节点的关系"></p><p>概念上我们参考 Neo4j 的图数据库的概念来设计，这里的一张图谱我们对应到「<strong>标签</strong>」上，有相同标签的节点 相当于一个集合，当然每个节点可以有很多个标签。</p><p>如此一来，我们的多图谱功能就是：</p><ul><li>允许自定义节点标签，</li><li>一个节点可以有多个标签</li><li>可以选择标签来进行图谱查看。</li></ul><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><p>实现当然使用最朴实无华的方法，加一个图谱维护列表，用 CV 大法从度娘那里收获一段代码，运行起来：</p><p><img src="'+s+'" alt="一个很简单的列表界面"></p><p>再配上一个朴实无华的新增弹窗：</p><p><img src="'+l+'" alt="标签的新增弹窗"></p><p>把之前的类型属性拿过来，这不有模有样了么：</p><p><img src="'+i+'" alt="增加了一些数据之后的列表"></p><h3 id="图谱的切换" tabindex="-1">图谱的切换 <a class="header-anchor" href="#图谱的切换" aria-label="Permalink to &quot;图谱的切换&quot;">​</a></h3><p>切换功能还是沿用之前的交互。<strong>标签管理</strong>里面创建的标签都可以在图谱浏览的时候选择切换。</p><p>因为我测试会放很多数据（标签），为了简单起见（避免一屏幕放不下还要滚动），切换的时候一行显示多个标签：</p><p><img src="'+n+'" alt="切换图谱标签"></p><p>最后的效果如下视频：</p><p><img src="'+a+'" alt="预览"></p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>最近事情多状态不太好，写东西比较慢，我尽量小步快走，所以每一篇内容的丰富程度不比以前，这样<strong>大家读起来也快</strong>（给自己找个借口）。</p>',41),d=[h];function g(_,u,m,b,q,k){return o(),e("div",null,d)}const x=t(c,[["render",g]]);export{P as __pageData,x as default};
