import{_ as p}from"./chunks/199169936052583.C33x9hn9.js";import{_ as r,a,o,aj as n}from"./chunks/framework.Ba_Ek9Jm.js";const t="/assets/292972217640208.FGLT2rX_.png",e="/assets/305600983355958.D4n9Z8f0.png",i="/assets/306594465052458.rC2UAivM.png",g="/assets/310202093534333.B_VEEcxy.png",l="/assets/310044343836083.DE0nSTwH.png",c="/assets/311987575959416.Cf5LroUh.png",_="/assets/312231741668166.Dzh3J67t.png",m="/assets/312406363590125.C0K_x3NR.png",h="/assets/337056965395041.B-Ms7Mab.png",d="/assets/309935732267875.DI8gXdkt.png",u="/assets/313473579617875.B9Uf9z3U.png",f="/assets/313038561751083.BYfrU6C1.png",b="/assets/313990078242958.U2yCXq0Q.png",s="/assets/314590767358000.DleahM80.png",k="/assets/315227797917708.V21Rbu5a.png",q="/assets/315339588082291.-MfvrC-O.png",x="/assets/316145789507208.BYEvvVge.png",E=JSON.parse('{"title":"《构建个人知识图谱》014：分享你自己的知识图谱","description":"","frontmatter":{"title":"《构建个人知识图谱》014：分享你自己的知识图谱","date":"2023-08-07T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"topics/knowledge-graph/articles/2023-08-07-konwledge-graph-014-share-picture.md","filePath":"topics/knowledge-graph/articles/2023-08-07-konwledge-graph-014-share-picture.md","lastUpdated":1718173059000}'),D={name:"topics/knowledge-graph/articles/2023-08-07-konwledge-graph-014-share-picture.md"},P=n('<p>!!! abstract 还记得我们上篇文章我们聊导入功能时候不是在网上找了一个大模型图谱的图片么，今天就来探索下如何从3d 的知识图谱工具中分享二维的图谱图片。 !!!</p><h2 id="为什么做分享" tabindex="-1">为什么做分享 <a class="header-anchor" href="#为什么做分享" aria-label="Permalink to &quot;为什么做分享&quot;">​</a></h2><p>之前我们也聊过，使用二维和三维进行知识图谱展示时的优劣。简单点儿来说就是<strong>二维更直观</strong>、<strong>三维适合复杂交互</strong>。</p><p>比如二维图片，像上篇文章我们用到的：</p><p><img src="'+p+'" alt="网络上发布的大语言模型图谱"></p><p>一张图所有人都能看的清清楚楚，但是这点儿数据导入到三维图谱里面， 即使我们调整下显示样式，可读性仍然不高，如果分享给别人更是走投无路：</p><p><img src="'+t+'" alt="三维图谱截图"></p><p>但是你要过对数据里面的内容感兴趣，在里面进行<strong>交互性的探索</strong>，又会比平面的好一些。</p><p><img src="'+t+'" alt="视频：在 3D 场景中探索"></p><p>所以对于<strong>分享</strong>、<strong>移动端</strong>、<strong>快速浏览</strong>甚至<strong>线下物料</strong>等场景，3D真的不堪用，从<strong>传播渠道</strong>考虑， 3D最好的是展示形式是视频，但是信息密度较低，同时传播效率也低。</p><p>!!! explain 2D 场景的浏览 二维的图谱当然也能提供很方便的浏览、搜索、聚焦、定位等操作。但是在关系比较复杂的时候，<strong>良好的交互在设计上难度比较大</strong>。 大多数软件都是一层一层地进行 <strong>放大+隐藏</strong>，核心原因就是画布就那么大，无法承载很多的数据和关系的显示。 !!!</p><h2 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h2><p>!!! note 分享的形式 分享功能我们这里只讨论<strong>图片分享</strong>，当然对于特定的信息<strong>视频分享</strong>也很棒，但是场景要一定要求，我们下次讨论。 !!!</p><p>说回来，实现分享功能我也主要参考类各类图谱和排名的UI设计。我在网上随便搜了些图片（之前保存的）。</p><p><img src="'+e+'" alt="UI 设计参考"></p><p>看了一百多张图片之后，感慨有些图谱做的真是精美。然而现实也提醒我自己，我要做<strong>自动生成</strong>的二维图谱，<strong>好看且一致的布局对于数据的分布要求</strong>很高。 所以相当于看了个寂寞。</p><p><img src="'+i+'" alt=""></p><p>看着桌子上一团的充电线，决定还是万事从简单开始处理，分享的二维图谱先做下面几点：</p><ul><li>有一个边框</li><li>加一个标题</li><li>最多支持3级分类</li><li>每级标题加一个小小的样式</li><li>标题颜色可以沿用节点颜色</li></ul><p>好了，这些功能感觉差不多了够用了。开始动手。</p><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><p>我们用之前的 《2023 中国 AIGC 行业图谱》来做示例。</p><p><img src="'+g+'" alt="2023 中国 AIGC 行业图谱(3D)"></p><p>由于我对色彩和渐变的偏爱，第一步先选一个简单的<strong>渐变色</strong>作为基础色，</p><p><img src="'+l+'" alt="选择颜色"></p><p>定了色彩基调，就简简单单显示个边框和根节点的名称：</p><p><img src="'+c+'" alt="使用基础色制作边框"></p><p>循环显示下内容，大致布局一下，调整下位置，虽然不好看，但是你说他是不是已经整整齐齐了！</p><p><img src="'+_+'" alt=""></p><p>用基础色中的冷色调作为以一级子分类的标题，再随便选两个颜色作为二级和三级分类标题：</p><p><img src="'+m+'" alt="对内容标题进行着色"></p><p>当然整个图片还需要有一个大标题，我们首先在标签编辑里面维护一下标题的<strong>名称</strong>、<strong>类型</strong>和<strong>版本</strong>：</p><p><img src="'+h+'" alt="标签标题相关数据"></p><p>简单设计标题样式看看效果（已然使用基础色调，这次去暖色作为标题色）：</p><p><img src="'+d+'" alt="标题样式"></p><p>最后是一个非常重要的部分，<strong>介绍出处</strong>，用<strong>暖色</strong>着重显示下<strong>作者</strong>，以及咱们非常重要的联系方式。联系方式传统都是放电话、网站之类的， 不过现在一般是组织名称和二维码居多，我们也把公众号的二维码放上去稍微排版下。</p><p><img src="'+u+'" alt="来源信息部分"></p><blockquote><p>之后会为每一个图谱生成一个唯一的二维码，现阶段就先用咱们的公众号。</p></blockquote><h2 id="分享操作" tabindex="-1">分享操作 <a class="header-anchor" href="#分享操作" aria-label="Permalink to &quot;分享操作&quot;">​</a></h2><p>最后把上面的元素简单拼接布局一下，就是我们最终样式了：</p><p><img src="'+f+'" alt="最终的样式"></p><p>系统内的话，还记得之前的按钮栏么？随便找个不用的位置，换上一个分享的按钮，就 OK 啦。</p><p><img src="'+b+'" alt="界面内的分享按钮"></p><p>点击分享按钮，就会弹窗生成分享图片在屏幕正中间，可以右键保存图片或者点击双方的「保存图片」按钮，浏览器会自动保存到你电脑的下载目录。</p><p><img src="'+s+'" alt="图片预览和下载"></p><p>!!! explain 虽然没做什么精细的设计，但是花花绿绿的我觉得还怪好看，本来我是想打印一下，奈何看了下身边没有彩色打印机。作罢！</p><p>!!!</p><p>还是播放一下操作视频吧：</p><p><img src="'+s+'" alt="视频：预览操作"></p><h2 id="现有的一些问题" tabindex="-1">现有的一些问题 <a class="header-anchor" href="#现有的一些问题" aria-label="Permalink to &quot;现有的一些问题&quot;">​</a></h2><p>由于设计和实现的时间有限，上面展示的功能还是有不少问题的。</p><h4 id="节点logo展示" tabindex="-1">节点Logo展示 <a class="header-anchor" href="#节点logo展示" aria-label="Permalink to &quot;节点Logo展示&quot;">​</a></h4><p>虽然加了节点颜色的支持（使用节点自己设置的颜色），比如我调整下节点的颜色：</p><p><img src="'+k+'" alt=""></p><p>然后重新点击分享，可以看到我们的 「AIGC 应用层」节点已经变成了刚才设置的颜色：</p><p><img src="'+q+'" alt=""></p><p>和别的机构发布的图谱最大的差别倒不是版式和标题，而是内容项，我为了简单直接显示了名称， 没有用 Logo，原因当然是我没有维护 Logo 数据 🌵。后续内置了，再更新下分享图。</p><p>!!! explain 方案 简单来说就是加一个内置的「图片/Logo」属性维护入口。 !!!</p><h4 id="布局问题" tabindex="-1">布局问题 <a class="header-anchor" href="#布局问题" aria-label="Permalink to &quot;布局问题&quot;">​</a></h4><p>我们看到的所有发布的图谱，都是机构人工编辑和<strong>精心排版</strong>的，所以我简单的自动排版，并不能满适应各种各样的图谱数据， 比如数据库图谱（当然也是因为我把很多小众的数据库都录入了进去），导出来之后就是下面这样：</p><p><img src="'+x+'" alt="数据库图谱"></p><p>!!! explain 方案 或许继续优化下布局方案，尽量适应一些不均衡数据，或者提供一些配置性，对于不同数据让人用户手动调整，当然多做几个模板也是一个方案。 !!!</p><p>好啦，今天就到这里。喜欢作者的别忘了一键三连。</p>',63),C=[P];function I(T,U,w,A,B,L){return o(),a("div",null,C)}const V=r(D,[["render",I]]);export{E as __pageData,V as default};