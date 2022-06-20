<template><div><h1 id="面试小技巧" tabindex="-1"><a class="header-anchor" href="#面试小技巧" aria-hidden="true">#</a> 面试小技巧</h1>
<h2 id="html-i-、-em-、-strong-、-b-的区别是什么" tabindex="-1"><a class="header-anchor" href="#html-i-、-em-、-strong-、-b-的区别是什么" aria-hidden="true">#</a> HTML<code v-pre>&lt;i&gt;</code>、<code v-pre>&lt;em&gt;</code>、<code v-pre>&lt;strong&gt;</code>、<code v-pre>&lt;b&gt;</code>的区别是什么?</h2>
<p>默认情况下它们起的作用b和strong是加粗字体，em与i是使字体变斜体的的作用，它们所不同的是，<code v-pre>&lt;b&gt;</code>与<code v-pre>&lt;i&gt;</code>标签是个实体标签，它所包围的
字符将被设为bold（粗体）和Italic(斜体)，告诉浏览器这只是个物理标签。<code v-pre>&lt;strong&gt;</code>和<code v-pre>&lt;em&gt;</code>标签是个逻辑标签，它们的作都有加强字
符的语气，有强调的意思，告诉浏览器这些字有怎么样的重要性。所以<code v-pre>&lt;strong&gt;</code>加强字符的语就气会通过将字符变为bold（粗
体），<code v-pre>&lt;em&gt;</code> 标签则会告诉浏览器其中的本表为强调的内容。对于所有浏览器来说，要把这段字用斜体来显。
WEB标准提倡样式与内容分离，所以纯粹为了达到某种效果使b和i已经不建议这么使。从XHTML档有意义性及户体验度来
说，strong更有益，更被建议使。而SEO方面，则针对优化情况定。对于搜索引擎来说<code v-pre>&lt;strong&gt;</code>和<code v-pre>&lt;em&gt;``&lt;b&gt;</code>和<code v-pre>&lt;i&gt;</code>要重视的多。为了
符合现在W3C的标准，还是推荐使strong和em标签。</p>
</div></template>
