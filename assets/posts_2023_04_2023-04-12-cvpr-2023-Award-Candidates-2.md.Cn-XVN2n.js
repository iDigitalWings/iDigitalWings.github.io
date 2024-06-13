import{_ as e,a as t,o as i,aj as a}from"./chunks/framework.Ba_Ek9Jm.js";const r="/assets/92692244854833.Dyrt9b5w.png",n="/assets/93279094331541.BWDBXg_q.gif",o="/assets/93576030646750.BahcTwqS.png",s="/assets/93926422004250.D0CzxLZC.gif",p="/assets/101722165493750.B1BEkLtc.gif",l="/assets/101839804209833.D39gFvRK.gif",c="/assets/101883748489083.C7WnICyq.gif",g="/assets/101943890153583.CCkMzWO8.gif",d="/assets/101958873061250.9WVoj72i.gif",m="/assets/101980794634916.BBG--on_.gif",_="/assets/102586161762375.BqHFWX9o.png",h="/assets/102758208849166.C8WE30UX.gif",B=JSON.parse('{"title":"CVPR 2023 候选获奖论文都讲了什么(2/4)","description":"","frontmatter":{"title":"CVPR 2023 候选获奖论文都讲了什么(2/4)","date":"2023-04-12T00:00:00.000Z","tags":["ai","ml"],"category":["AI"]},"headers":[],"relativePath":"posts/2023/04/2023-04-12-cvpr-2023-Award-Candidates-2.md","filePath":"posts/2023/04/2023-04-12-cvpr-2023-Award-Candidates-2.md","lastUpdated":1718173059000}'),f={name:"posts/2023/04/2023-04-12-cvpr-2023-Award-Candidates-2.md"},u=a('<blockquote><p>《CVPR 2023 候选获奖论文都讲了什么》第二篇，介绍一下周二后面三篇论文。</p></blockquote><h2 id="《mobilenerf-exploiting-the-polygon-rasterization-pipeline-for-efficient-neural-field-rendering-on-mobile-architectures》" tabindex="-1">《MobileNeRF: Exploiting the Polygon Rasterization Pipeline for Efficient Neural Field Rendering on Mobile Architectures》 <a class="header-anchor" href="#《mobilenerf-exploiting-the-polygon-rasterization-pipeline-for-efficient-neural-field-rendering-on-mobile-architectures》" aria-label="Permalink to &quot;《MobileNeRF: Exploiting the Polygon Rasterization Pipeline for Efficient Neural Field Rendering on Mobile Architectures》&quot;">​</a></h2><p><strong>《MobileNeRF：利用多边形光栅化管道在移动架构上进行高效的神经场渲染》</strong></p><p><strong>一句话</strong>： 论文提出了一个可以在各种常见设备上实时运行的 NeRF.</p><p><img src="'+r+'" alt=""></p><p><strong>NeRF(Neural Radiance Field)</strong>：通过图片来合成 3D 场景图像。</p><p>可以看看下面的例子：</p><p><img src="'+n+'" alt=""></p><p>然而，NeRF 依赖于基于光线行进的专门体积渲染算法， 这些算法与广泛部署的图形硬件的功能不匹配。</p><p>MobileNeRF 介绍了一种<strong>基于纹理多边形的新 NeRF 表示</strong>， 可以使用标准渲染管道有效地合成新图像。</p><p>原理是：</p><p>NeRF 被表示为一组多边形， 其纹理表示二元不透明度和特征向量。 使用 z 缓冲区对多边形进行传统渲染会生成每个像素都具有特征的图像， 这些图像由在片段着色器中运行的小型、依赖于视图的 MLP 进行解释，以生成最终的像素颜色。</p><p>这种方法使 NeRF 能够使用传统的多边形光栅化管道进行渲染，</p><p>比如现场演示的，根据下面这张图：</p><p><img src="'+o+'" alt=""></p><p>生成的场景：</p><p><img src="'+s+'" alt=""></p><p>你就说牛不牛吧。</p><h3 id="网站" tabindex="-1">网站 <a class="header-anchor" href="#网站" aria-label="Permalink to &quot;网站&quot;">​</a></h3><p>网站：</p><ul><li><a href="https://mobile-nerf.github.io/" target="_blank" rel="noreferrer">https://mobile-nerf.github.io/</a></li></ul><p>论文：</p><ul><li><a href="https://arxiv.org/abs/2208.00277" target="_blank" rel="noreferrer">https://arxiv.org/abs/2208.00277</a></li></ul><p>NeRF</p><ul><li><a href="https://www.matthewtancik.com/nerf" target="_blank" rel="noreferrer">https://www.matthewtancik.com/nerf</a></li></ul><h2 id="《dynibar-neural-dynamic-image-based-rendering》" tabindex="-1">《DynIBaR Neural Dynamic Image-Based Rendering》 <a class="header-anchor" href="#《dynibar-neural-dynamic-image-based-rendering》" aria-label="Permalink to &quot;《DynIBaR Neural Dynamic Image-Based Rendering》&quot;">​</a></h2><p>《DynIBaR 基于神经动态图像的渲染》</p><p>如果说 MobileNeRF 项目把二维图像变成三维模型的话。 那么 <strong>DynIBaR</strong> 就是把二维图像+时间的三维视频，变成了三维视频+时间的四维产物了。</p><p>看下演示和使用场景：</p><p>把抖动的视频变平稳，这下子云台什么的不用买了，又省下一大笔钱。</p><p><img src="'+p+'" alt="把抖动的视频变平稳"></p><p>滑动变焦和子弹时间：</p><p><img src="'+l+'" alt=""></p><p>固定场景，这下子视频编辑软件离事业又近了一步：</p><p><img src="'+c+'" alt=""></p><p>深度：</p><p><img src="'+g+'" alt=""></p><p>焦外成像：</p><p><img src="'+d+'" alt=""></p><p>3D 视频生成：以后 2D 变 3D 不需要投资那么多钱，整那么多相机了。</p><p><img src="'+m+'" alt=""></p><h2 id="《planning-oriented-autonomous-driving》" tabindex="-1">《Planning-oriented Autonomous Driving》 <a class="header-anchor" href="#《planning-oriented-autonomous-driving》" aria-label="Permalink to &quot;《Planning-oriented Autonomous Driving》&quot;">​</a></h2><p>《规划型自动驾驶》</p><p>这个项目的成员来自上海人工智能实验室、武汉大学、商汤研究院等。</p><p>作者在传统的自动驾驶模块化任务设计（感知、预测和规划）之上， 设计和优化了一个追求最终目标的框架， 并以此为导向，重新审视感知和预测中的关键组成部分，并确定任务的优先级，以便所有这些任务都有助于规划</p><p><img src="'+_+'" alt=""></p><p>演示视频：</p><p><img src="'+h+'" alt=""></p><p>项目地址：</p><ul><li><a href="https://opendrivelab.github.io/UniAD/" target="_blank" rel="noreferrer">https://opendrivelab.github.io/UniAD/</a></li></ul>',50),b=[u];function R(D,N,P,y,C,F){return i(),t("div",null,b)}const v=e(f,[["render",R]]);export{B as __pageData,v as default};
