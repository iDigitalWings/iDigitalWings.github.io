import{_ as a,a as t,o as e,aj as s}from"./chunks/framework.Ba_Ek9Jm.js";const o="/assets/double-check-flow.C-QJw4DJ.png",p="/assets/low-1.BnWW49fW.png",i="/assets/low-2.CLZgsACm.png",r="/assets/low-3.D6JS10zY.png",l="/assets/medium-1.C6yjrk_S.png",n="/assets/medium-2.CcND0sf1.png",h="/assets/medium-3.CQj9Zszu.png",c="/assets/high-1.B8L4gW4a.png",_="/assets/high-2.Cap8zza4.png",d="/assets/high-3.DwWicMcR.png",m="/assets/high-4.DqdFYO9e.png",u="/assets/high-5.D_uIVRkQ.png",g="/assets/attention-1.DvTEP-Kd.png",b="/assets/attention-2.CNFT8QWD.png",q="/assets/attention-3.CFHLH715.png",f="/assets/attention-4.DN0IZNj_.png",k="/assets/attention-5.Bp7OAl2o.png",P="/assets/attention-6.DC2Ft7AO.png",z=JSON.parse('{"title":"二次确认（Double Check）","description":"","frontmatter":{"title":"二次确认（Double Check）","date":"2022-07-20T00:00:00.000Z","tags":["设计"],"category":["设计"]},"headers":[],"relativePath":"posts/2022/07/2022-07-20-double-check.md","filePath":"posts/2022/07/2022-07-20-double-check.md","lastUpdated":1718173059000}'),x={name:"posts/2022/07/2022-07-20-double-check.md"},C=s('<p>二次确认的主要作用是防止误操作，以及警示操作带来的后果，避免用户无意之间执行了本不想做的操作。</p><p>二次确认是一种打断用户流程的设计，只是迫不得已的折中方案。所以在是否使用，如何使用上需要有一定的考虑，否则会适得其反。</p><p>二次确认流程：</p><p><img src="'+o+'" alt=""></p><p>对用户的操作的四个方面进行分析：</p><ul><li>可逆性：操作是否可以撤回</li><li>严重性：是否会造成严重或有涟漪效应的后果</li><li>复杂度：</li><li>操作频率：是否经常做这样的操作</li></ul><h2 id="危险级别" tabindex="-1">危险级别 <a class="header-anchor" href="#危险级别" aria-label="Permalink to &quot;危险级别&quot;">​</a></h2><p>按操作的危险级别分类，分为三个级别来说明二次确认：</p><ul><li>低危操作</li><li>中危操作</li><li>高危操作</li></ul><h3 id="低危操作" tabindex="-1">低危操作 <a class="header-anchor" href="#低危操作" aria-label="Permalink to &quot;低危操作&quot;">​</a></h3><p>对于低危操作我们可以不设置二次确认，或只在危险程度升高时再和用户确认。</p><h4 id="_1-操作基本无害-不设置二次确认" tabindex="-1">1. 操作基本无害，不设置二次确认 <a class="header-anchor" href="#_1-操作基本无害-不设置二次确认" aria-label="Permalink to &quot;1. 操作基本无害，不设置二次确认&quot;">​</a></h4><p>一些非常常规，很好注意到变化，或者容易回滚的操作无需配置二次确认。例如新建文件夹，复制文件，完成一个代办事项等。 <img src="'+p+'" alt=""></p><h4 id="_2-达到危险性后再进行确认" tabindex="-1">2. 达到危险性后再进行确认 <a class="header-anchor" href="#_2-达到危险性后再进行确认" aria-label="Permalink to &quot;2. 达到危险性后再进行确认&quot;">​</a></h4><p>这种场景比较特殊，我们用一个例子说明。比如当用户处于一个有两层级别的托盘，第二级的新表单没有完成填写，就点击了表单托盘的关闭按钮。我们可以让页面滚动到用户没有完成的地方，通过条幅提示，标红或闪烁等交互方式提醒用户。按照此时危险级别，我们仅需采用低强度的沟通方式，让用户明白操作的问题即可。 <img src="'+i+'" alt=""></p><p>然而假如用户点击的是浏览器的标签页关闭按钮，其危险级别就很高，系统很可能抛弃用户未完成的表单导致数据丢失。此时我们可以通过前端技术，在用户点击浏览器的刷新或关闭按钮时，弹出二次确认对话框。 <img src="'+r+'" alt=""></p><h3 id="中危操作" tabindex="-1">中危操作 <a class="header-anchor" href="#中危操作" aria-label="Permalink to &quot;中危操作&quot;">​</a></h3><p>日常的一些操作，如提交表单，删除文件，发送交易等， 若被用户在没有明确后果的情况下执行，会造成难以补救的不良影响，但后果不至于完全不可挽回。 我们可以在此危险范围内，配置不同形式的二次确认流程。</p><h4 id="_1-及时撤销" tabindex="-1">1. 及时撤销 <a class="header-anchor" href="#_1-及时撤销" aria-label="Permalink to &quot;1. 及时撤销&quot;">​</a></h4><p>撤回提醒一般针对操作频率高且容易回滚的操作。 例如在线上网盘删除或移动文件后，通常会弹出一个 toast 提示，告知用户成功执行了操作，并显示“撤回”按钮，让用户在误操作时可以快速回滚。</p><p><img src="'+l+'" alt=""></p><h4 id="_2-提示信息" tabindex="-1">2. 提示信息 <a class="header-anchor" href="#_2-提示信息" aria-label="Permalink to &quot;2. 提示信息&quot;">​</a></h4><p>提示信息是二次确认最常见的一种，适用场景广泛。 系统会在用户执行操作时打断，提示后果并询问是否继续。 其界面表现形式比较丰富，例如购物时的结算账单页，转账时的确认页，退出程序时的文件保存弹窗等等。</p><p><img src="'+n+'" alt=""></p><h4 id="_3-垃圾桶或类似的临时承接结构" tabindex="-1">3. 垃圾桶或类似的临时承接结构 <a class="header-anchor" href="#_3-垃圾桶或类似的临时承接结构" aria-label="Permalink to &quot;3. 垃圾桶或类似的临时承接结构&quot;">​</a></h4><p>临时承接结构适用于有不良后果但操作频次高的场景。 如果用户经常需要做一些有破坏性的操作，我们可以在系统中布置一个用来临时承接这些操作的结构，而不直接执行破坏性操作。 如此设计有两个优点：用户不仅可以随时反悔，而且避免了系统总是打断用户的高频操作。</p><p><img src="'+h+'" alt=""></p><p>例如大部分操作系统删除文件时只是将文件移动到垃圾桶，并不会造成实质伤害。 二次确认只会出现在用户需要清空垃圾桶时。这便通过临时承接结构缓冲了用户的破坏性操作，同时避免了频繁打断用户。</p><h3 id="高危操作" tabindex="-1">高危操作 <a class="header-anchor" href="#高危操作" aria-label="Permalink to &quot;高危操作&quot;">​</a></h3><p>执行后果极其严重且无法挽回的操作，例如删除账号，删除虚拟币钱包，抹除设备数据等时， 系统需要用户仔细想清楚，完全理解即将发生的事情并接受后果，此时可采用拦截性强，步骤多的确认方式。 但请务必注意，即将列举的几种设计会给用户带来一定程度的挫败感。除非万不得已，尽可能考虑上文中的设计方式。</p><h4 id="_1-按钮倒计时" tabindex="-1">1. 按钮倒计时 <a class="header-anchor" href="#_1-按钮倒计时" aria-label="Permalink to &quot;1. 按钮倒计时&quot;">​</a></h4><p>在确认按钮上倒计时，给用户一段冷静的时间，倒计时完成后按钮才变回可用状态。</p><p><img src="'+c+'" alt=""></p><h4 id="_2-多次询问" tabindex="-1">2. 多次询问 <a class="header-anchor" href="#_2-多次询问" aria-label="Permalink to &quot;2. 多次询问&quot;">​</a></h4><p>多次询问是一种较为粗暴的确认形式，通过不断地警告让用户确认。大家可能依稀记得苹果手机的重置流程：首先需要输入苹果账号密码和设备密码验证身份，再通过两层二次确认弹窗，系统才会开始抹除数据。</p><p><img src="'+_+'" alt=""></p><h4 id="_3-勾选并接受后果" tabindex="-1">3. 勾选并接受后果 <a class="header-anchor" href="#_3-勾选并接受后果" aria-label="Permalink to &quot;3. 勾选并接受后果&quot;">​</a></h4><p>将说明部分拆解成复选框，用户依次勾选并接受后果之后，执行按钮才会变成可用状态。通常用于有严重或复杂连带后果的操作。例如删除虚拟币钱包时，软件会让用户接受：未备份密钥的资产将永久丢失；没有服务商可以找回资产；软件方不承担任何连带责任。</p><p><img src="'+d+'" alt=""></p><h4 id="_4-输入操作对象名称" tabindex="-1">4. 输入操作对象名称 <a class="header-anchor" href="#_4-输入操作对象名称" aria-label="Permalink to &quot;4. 输入操作对象名称&quot;">​</a></h4><p>常见于底层目录的删除等操作。用户需要正确输入操作对象的名称才能执行，步骤较为繁琐，非常耗费用户精力，但很大程度上可以规避用户操作错误的对象。</p><p><img src="'+m+'" alt=""></p><h4 id="_5-冷静期-非二次确认" tabindex="-1">5. 冷静期（非二次确认） <a class="header-anchor" href="#_5-冷静期-非二次确认" aria-label="Permalink to &quot;5. 冷静期（非二次确认）&quot;">​</a></h4><p>当注销脸书等账号后，服务会将账户信息继续保留一段时间，若冷静期内用户重新登录，账号信息会自动恢复。冷静期的设计原理和 2.3 节介绍的临时承接结构有异曲同工之处，其并不属于二次确认的范畴，但针对高危操作给予了用户反悔的余地，故补充在这里。</p><p><img src="'+u+'" alt=""></p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p>无论是从人本主义还是功能的角度，二次确认都应让用户能够快速理解弹窗的意图并作出判断，减少使用中的挫败感。 下面罗列了一些能够提升使用体验的设计点。</p><ol><li><strong>文案的编写</strong></li></ol><p>无论是从人本主义还是功能的角度，二次确认都应让用户能够快速理解弹窗的意图并作出判断，减少使用中的挫败感。</p><p>标题文案为简明的疑问句。</p><p>用户映入眼帘的应是一个问题，也就是程序为什么打断了用户，需要用户确认什么操作。 同时标题的内容不宜过长，对操作后果的详细解读可作为描述信息放到弹窗内容中。</p><p><img src="'+g+'" alt=""></p><p>不要强加说明语句。</p><p>尽可能减少常规型二次确认打断用户的时长，如果能够用一句简单的标题讲清楚，则无需增加说明，让用户快速理解，快速决断。</p><p><img src="'+b+'" alt=""></p><p>按钮文案指明操作后果且无歧义。</p><p>有些操作比如“取消订单”中包含了“取消”一类的字眼，为避免歧义，按钮的文案应尽量不使用“确定/取消”。 可将操作带来的后果直接写在按钮上，减少误会。</p><p><img src="'+q+'" alt=""></p><ol start="2"><li><strong>避免滥用</strong></li></ol><p>在设计时不仅需要从操作的可逆性，严重性，复杂度和操作频率来考虑配置何种形式的二次确认， 甚至绕开或不配置二次确认，尽可能减少对用户的惊扰， 否则不仅降低体验还可能会让用户忽略真正的威胁。 这里举三个日常很容易接触到，通过流程优化避免了二次确认的例子：</p><p>免密支付：</p><p>用户可以设置在一定数额范围内转账时不进行密码确认。在此数额内的交易即便发生异常，损失也比较轻微，而且平台可以帮助追回。</p><p><img src="'+f+'" alt=""></p><p>草稿：</p><p>当用户在聊天软件的对话中输入了内容，或是在邮件服务上新写了邮件，但没有发送就退出了程序， 用户重新启动后，大部分聊天或邮件服务会以草稿的形式将写入的内容保留下来。 既避免了退出时的二次确认，也没有造成数据丢失。</p><p><img src="'+k+'" alt=""></p><p>底层的版本控制功能：</p><p>苹果电脑的操作系统内建了文档版本控制功能，用户关闭文档时系统不再询问是否需要保存， 因为文档每隔一段时间就会在后台自动生成一个版本。用户可以随时回滚到旧版本，甚至从旧版本中拷贝内容。</p><p><img src="'+P+'" alt=""></p><h2 id="结语" tabindex="-1">结语 <a class="header-anchor" href="#结语" aria-label="Permalink to &quot;结语&quot;">​</a></h2><p>与任何界面设计的原则相同，二次确认的设计重点仍然是人文关怀。 要让用户从容使用系统的同时，避免触发无意的操作。 本文的由来在于做项目时发现目前网络上对二次确认模式的讲解大多偏理论， 所以后期对该界面模式做了一些梳理并分享出来，希望有帮助到大家！</p><hr><ul><li>来源： <a href="https://www.uisdc.com/the-design-idea-of-double-confirmation" target="_blank" rel="noreferrer">土拨鼠</a></li></ul>',73),D=[C];function w(T,N,S,A,W,B){return e(),t("div",null,D)}const F=a(x,[["render",w]]);export{z as __pageData,F as default};