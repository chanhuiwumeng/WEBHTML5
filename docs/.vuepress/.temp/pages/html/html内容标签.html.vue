<template><div><h1 id="html内容标签" tabindex="-1"><a class="header-anchor" href="#html内容标签" aria-hidden="true">#</a> HTML内容标签</h1>
<h2 id="内容标签" tabindex="-1"><a class="header-anchor" href="#内容标签" aria-hidden="true">#</a> 内容标签</h2>
<p><img src="/52.png" alt=""></p>
<h3 id="html-head-标题" tabindex="-1"><a class="header-anchor" href="#html-head-标题" aria-hidden="true">#</a> HTML<code v-pre>&lt;head&gt;</code>标题</h3>
<p>HTML 标题（Heading）是通过<code v-pre>&lt;h1&gt; - &lt;h6&gt;</code> 标签来定义的,
标题标签文字默认加粗和独占一行显示</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Heading level 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Heading level 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Heading level 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>Heading level 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">></span></span>Heading level 5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">></span></span>Heading level 6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/51.png" alt=""></p>
<p><strong>注意事项</strong></p>
<ul>
<li><code v-pre>&lt;h1&gt;</code>在一个页面最多只能有一个,不要用多个</li>
<li>避免跳过某级标题：始终要从 <code v-pre>&lt;h1&gt;</code> 开始，接下来依次使用 <code v-pre>&lt;h2&gt;</code> 等等。</li>
<li>不要为了减小标题的字体而使用低级别的标题， 而是使用 CSS font-size 属性</li>
<li><code v-pre>&lt;h1&gt;</code>中使用的关键词，往往是在网页标题中使用的</li>
<li><code v-pre>&lt;h1&gt;</code>尽量靠近在html 中的<code v-pre>&lt;body&gt;</code>标签，越近越好，以便让搜索引擎最快的领略主题</li>
</ul>
<h4 id="一个页面的h1标签还可以为浏览器的搜索引擎提供seo-搜索引擎优化-的功能" tabindex="-1"><a class="header-anchor" href="#一个页面的h1标签还可以为浏览器的搜索引擎提供seo-搜索引擎优化-的功能" aria-hidden="true">#</a> 一个页面的h1标签还可以为浏览器的搜索引擎提供SEO(搜索引擎优化)的功能</h4>
<ul>
<li>
<p>H1标签对SEO影响很大</p>
</li>
<li>
<p>H1标签对于SEO，可用性和可访问性非常重要。</p>
</li>
</ul>
<p><img src="/53.png" alt=""></p>
<p><img src="/54.png" alt=""></p>
<h3 id="html-header-标签" tabindex="-1"><a class="header-anchor" href="#html-header-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;header&gt;</code>标签</h3>
<p><code v-pre>&lt;header&gt;</code> html5新标签</p>
<p><code v-pre>&lt;header&gt;</code> 标签定义文档或者文档的一部分区域的页眉。</p>
<p><code v-pre>&lt;header&gt;</code> 元素应该作为介绍内容或者导航链接栏的容器。</p>
<p>在一个文档中，您可以定义多个 <code v-pre>&lt;header&gt;</code> 元素。</p>
<p>注释：<code v-pre>&lt;header&gt;</code> 标签不能被放在 <code v-pre>&lt;footer&gt;、&lt;address&gt;</code> 或者另一个 <code v-pre>&lt;header&gt;</code> 元素内部。·</p>
<p><strong>页面的header</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>主页标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdn-logo-sm.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MDN logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文章的header</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>The Planet Earth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Posted on Wednesday, 4 October 2017 by Jane Smith<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>We live on a planet that's blue and green, with so many things still unseen.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://janesmith.com/the-planet-earth/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Continue reading....<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html-article-标签" tabindex="-1"><a class="header-anchor" href="#html-article-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;article&gt;</code>标签</h3>
<p><code v-pre>&lt;article&gt;</code> 标签是 HTML5 的新标签。</p>
<p><code v-pre>&lt;article&gt;</code> 标签定义独立的内容。</p>
<p><code v-pre>&lt;article&gt;</code> 标签定义的内容本身必须是有意义的且必须是独立于文档的其余部分。</p>
<p><code v-pre>&lt;article&gt;</code> 的潜在来源：</p>
<ul>
<li>论坛帖子</li>
<li>博客文章</li>
<li>新闻故事</li>
<li>评论</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">itemscope</span> <span class="token attr-name">itemtype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schema.org/BlogPosting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headline<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The Very First Rule of Life<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datePublished<span class="token punctuation">"</span></span> <span class="token attr-name">datetime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2009-10-09<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3 days ago<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>?comments=0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>If there's a microphone anywhere near you, assume it's hot and
 sending whatever you're saying to the world. Seriously.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">itemprop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>discussionUrl<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>?comments=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show comments...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html-section-标签" tabindex="-1"><a class="header-anchor" href="#html-section-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;section&gt;</code>标签</h3>
<p>html5新定义的标签. <code v-pre>&lt;section&gt;</code> 标签定义了文档的某个区域。比如章节、头部、底部或者文档的其他区域。</p>
<ul>
<li>一般通过是否包含一个标题 (<code v-pre>&lt;h1&gt; (en-US)-&lt;h6&gt; (en-US) element</code>) 作为子节点 来 辨识每一个<code v-pre>&lt;section&gt;</code>。</li>
<li>如果 <code v-pre>&lt;section&gt;</code> 元素的内容可以单独在多个媒体上发表，应该使用 <code v-pre>&lt;article&gt;</code> 而不是 <code v-pre>&lt;section&gt;</code>。</li>
<li>不要把 <code v-pre>&lt;section&gt;</code> 元素作为一个普通的容器来使用，这是本应该是<code v-pre>&lt;div&gt;</code>的用法（特别是当片段（the sectioning ）仅仅是为了美化样式的时候）。 一般来说，一个 <code v-pre>&lt;section&gt;</code> 应该出现在文档大纲中。</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>荣誉簿圆满喜极而泣，库里全票当选FMVP实至名归<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>../vuepress/public/kl.jpeg<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>在队友的簇拥下喜极而泣，34岁的勇士头号球星库里终于收获梦寐以求的FMVP。曾经两夺常规赛MVP的他，本赛季独揽西部总决赛（新设）和总决赛最有价值球员，如愿达成个人荣誉“大满贯”。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般在使用的时候如果不是文档大纲页面,使用div标签就可以了。</p>
<h3 id="html-nav-标签" tabindex="-1"><a class="header-anchor" href="#html-nav-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;nav&gt;</code>标签</h3>
<p><code v-pre>&lt;nav&gt;</code>是html5新标签,<code v-pre>&lt;nav&gt;</code>标签一般用来定义导航连接的标签</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关于我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>公司介绍<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并不是所有的 HTML 文档都要使用到<code v-pre>&lt;nav&gt;</code> 元素。<code v-pre>&lt;nav&gt;</code> 元素只是作为标注一个导航链接的区域。</p>
<p>在不同设备上（手机或者PC）可以制定导航链接是否显示，以适应不同屏幕的需求。</p>
<h3 id="html-aside-标签" tabindex="-1"><a class="header-anchor" href="#html-aside-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;aside&gt;</code>标签</h3>
<p><code v-pre>&lt;aside&gt;</code> 标签是 HTML5 的新标签。</p>
<p><code v-pre>&lt;aside&gt;</code> 标签定义 <code v-pre>&lt;article&gt;</code> 标签外的内容。</p>
<p><code v-pre>&lt;aside&gt;</code> 的内容应该与附近的内容相关</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail in both larval and adult forms.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>The Rough-skinned Newt defends itself with a deadly neurotoxin.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Several species of salamander inhabit the temperate rainforest of the Pacific Northwest, including the Ensatina, the Northwestern Salamander and the Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects, worms and other small creatures.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">aside</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 5px 0 5px -5px #29627e<span class="token punctuation">;</span>
    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #29627e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside > p</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Fira Sans'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>效果图</strong></p>
<p><img src="/55.png" alt=""></p>
<h3 id="httml-hgroup-标签" tabindex="-1"><a class="header-anchor" href="#httml-hgroup-标签" aria-hidden="true">#</a> HTTML<code v-pre>&lt;hgroup&gt;</code>标签</h3>
<p><code v-pre>&lt;hgroup&gt;</code> 标签被用来对标题元素进行分组。</p>
<p>当标题有多个层级（副标题）时，<code v-pre>&lt;hgroup&gt;</code> 元素被用来对一系列 <code v-pre>&lt;h1&gt; - &lt;h6&gt;</code> 元素进行分组。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">hgroup</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Verdana<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 10px solid #00c8d7<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.93rem<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.16rem<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> Georgia<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> .95rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p::first-letter</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 3.2rem<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> .7<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">padding-right</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hgroup</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Calculus I<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Fundamentals<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hgroup</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This course will start with a brief introduction about the limit of a function. Then we will describe how the idea of derivative emerges in the Physics and Geometry fields. After that, we will explain that the key to master calculus is …<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果</strong></p>
<p><img src="/56.png" alt=""></p>
<h3 id="html-footer-标签" tabindex="-1"><a class="header-anchor" href="#html-footer-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;footer&gt;</code>标签</h3>
<p><code v-pre>&lt;footer&gt;</code> 标签定义文档或者文档的一部分区域的页脚。</p>
<p><code v-pre>&lt;footer&gt;</code> 元素应该包含它所包含的元素的信息。</p>
<p>在典型情况下，该元素会包含文档创作者的姓名、文档的版权信息、使用条款的链接、联系信息等等。</p>
<p>在一个文档中，您可以定义多个 <code v-pre>&lt;footer&gt;</code> 元素。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>How to be a wizard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Grow a long, majestic beard.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Wear a tall, pointed hat.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Have I mentioned the beard?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>© 2018 Gandalf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>京东页面效果</strong></p>
<p><img src="/57.png" alt=""></p>
<h2 id="文本标签" tabindex="-1"><a class="header-anchor" href="#文本标签" aria-hidden="true">#</a> 文本标签</h2>
<p><img src="/58.png" alt=""></p>
<h3 id="html-p-标签" tabindex="-1"><a class="header-anchor" href="#html-p-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;p&gt;</code>标签</h3>
<p><code v-pre>&lt;p&gt;</code> 标签定义段落。</p>
<p><code v-pre>&lt;p&gt;</code>元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text_align-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>老区和老区人民，为我们党领导的中国革命作出了重大牺牲和贡献。在广袤的神州大地上，每一个革命老区都见证着中国人民选择中国共产党、坚定不移跟党走的伟大历程。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text_align-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>饮水思源，不忘老区。为人民谋幸福，是中国共产党始终坚守的初心。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果图</strong></p>
<p><img src="/61.png" alt=""></p>
<h3 id="html-ul-标签" tabindex="-1"><a class="header-anchor" href="#html-ul-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;ul&gt;</code>标签</h3>
<p><code v-pre>&lt;ul&gt;</code> 标签定义无序列表。</p>
<p>将 <code v-pre>&lt;ul&gt;</code> 标签与 <code v-pre>&lt;li&gt;</code> 标签一起使用，创建无序列表。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>first item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second item     
	  <span class="token comment">&lt;!-- Look, the closing &lt;/li> tag is not placed here! --></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second item first subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second item second subitem
		  <span class="token comment">&lt;!-- Same for the second nested unordered list! --></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
			  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second item second subitem first sub-subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
			  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second item second subitem second sub-subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
			  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second item second subitem third sub-subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- Closing &lt;/li> tag for the li that
					  contains the third unordered list --></span>
		  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>second item third subitem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
	  <span class="token comment">&lt;!-- Here is the closing &lt;/li> tag --></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/59.png" alt=""></p>
<h3 id="html-ol-标签" tabindex="-1"><a class="header-anchor" href="#html-ol-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;ol&gt;</code>标签</h3>
<p><code v-pre>&lt;ol&gt;</code> 标签定义了一个有序列表. 列表排序以数字来显示。</p>
<p>使用<code v-pre>&lt;li&gt;</code> 标签来定义列表选项。`</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Mix flour, baking powder, sugar, and salt.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>In another bowl, mix eggs, milk, and oil.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Stir both mixtures together.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Fill muffin tray 3/4 full.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Bake for 20 minutes.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/60.png" alt=""></p>
<h3 id="html-blockquote-标签" tabindex="-1"><a class="header-anchor" href="#html-blockquote-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;blockquote&gt;</code>标签</h3>
<p><code v-pre>&lt;blockquote&gt;</code> 标签定义摘自另一个源的块引用。</p>
<p>浏览器通常会对 <code v-pre>&lt;blockquote&gt;</code> 元素进行缩进。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blockquote</span> <span class="token attr-name">cite</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://tools.ietf.org/html/rfc1149<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Avian carriers can provide high delay, low
  throughput, and low altitude service.  The
  connection topology is limited to a single
  point-to-point path for each carrier, used with
  standard carriers, but many carriers can be used
  without significant interference with each other,
  outside of early spring.  This is because of the 3D
  ether space available to the carriers, in contrast
  to the 1D ether used by IEEE802.3.  The carriers
  have an intrinsic collision avoidance system, which
  increases availability.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blockquote</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果图</strong></p>
<p><img src="/62.png" alt=""></p>
<h3 id="html-hr-标签" tabindex="-1"><a class="header-anchor" href="#html-hr-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;hr&gt;</code>标签</h3>
<p><code v-pre>&lt;hr&gt;</code> 标签定义 HTML 页面中的主题变化（比如话题的转移），并显示为一条水平线。</p>
<p><code v-pre>&lt;hr&gt;</code> 元素被用来分隔 HTML 页面中的内容（或者定义一个变化）。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">hr</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 3px double #333<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">hr:after</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'§'</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 4px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> -13px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>§1: The first rule of Fight Club is: You do not talk about Fight Club.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>§2: The second rule of Fight Club is: Always bring cupcakes.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果图</strong></p>
<p><img src="/63.png" alt=""></p>
<h3 id="html-figure-和-figcaption-标签" tabindex="-1"><a class="header-anchor" href="#html-figure-和-figcaption-标签" aria-hidden="true">#</a> HTML <code v-pre>&lt;figure&gt;</code>和<code v-pre>&lt;figcaption&gt;</code>标签</h3>
<p><code v-pre>&lt;figure&gt;</code> 标签规定独立的流内容（图像、图表、照片、代码等等）。</p>
<p><code v-pre>&lt;figure&gt;</code> 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。</p>
<p><code v-pre>&lt;figcaption&gt;</code> 标签为 <code v-pre>&lt;figure&gt;</code> 元素定义标题。</p>
<p><code v-pre>&lt;figcaption&gt;</code> 元素应该被置于 <code v-pre>&lt;figure&gt;</code> 元素的第一个或最后一个子元素的位置。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
			<span class="token selector">figure</span> <span class="token punctuation">{</span>
			    <span class="token property">border</span><span class="token punctuation">:</span> thin #c0c0c0 solid<span class="token punctuation">;</span>
			    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
			    <span class="token property">flex-flow</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
			    <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
			    <span class="token property">max-width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
			    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">img</span> <span class="token punctuation">{</span>
			    <span class="token property">max-width</span><span class="token punctuation">:</span> 220px<span class="token punctuation">;</span>
			    <span class="token property">max-height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">figcaption</span> <span class="token punctuation">{</span>
			    <span class="token property">background-color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
			    <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
			    <span class="token property">font</span><span class="token punctuation">:</span> italic smaller sans-serif<span class="token punctuation">;</span>
			    <span class="token property">padding</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
			    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">></span></span>
		    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg<span class="token punctuation">"</span></span>
		         <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Elephant at sunset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">></span></span>An elephant at sunset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/64.png" alt=""></p>
<h3 id="html-dl-、-dt-、-dd-标签-自定义列表" tabindex="-1"><a class="header-anchor" href="#html-dl-、-dt-、-dd-标签-自定义列表" aria-hidden="true">#</a> <code v-pre>HTML&lt;dl&gt;、&lt;dt&gt;、&lt;dd&gt;</code>标签(自定义列表)</h3>
<p><code v-pre>&lt;dl&gt;</code> 标签定义一个描述列表。</p>
<p><code v-pre>&lt;dl&gt;</code> 标签与 <code v-pre>&lt;dt&gt;</code> （定义项目/名字）和 <code v-pre>&lt;dd&gt;</code> （描述每一个项目/名字）一起使用。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-links <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>选购指南<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>手机<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E7%94%B5%E8%A7%86<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>电视<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>笔记本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span> 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>平板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>穿戴<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E8%80%B3%E6%9C%BA<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>耳机<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E5%AE%B6%E7%94%B5<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>家电<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E8%B7%AF%E7%94%B1%E5%99%A8<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>路由器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E9%9F%B3%E7%AE%B1<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>音箱<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nofollow<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//www.mi.com/search?keyword=%E9%85%8D%E4%BB%B6<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>配件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果</strong>
<img src="/65.png" alt=""></p>
<h3 id="html-pre-标签" tabindex="-1"><a class="header-anchor" href="#html-pre-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;pre&gt;</code>标签</h3>
<p><code v-pre>&lt;pre&gt;</code> 标签可定义预格式化的文本。</p>
<p>被包围在 <code v-pre>&lt;pre&gt;</code> 标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
			                               _ooOoo_
			                              o8888888o
			                              88" . "88
			                              (| -_- |)
			                              O\  =  /O
			                           ____/`---'\____
			                         .'  \\|     |//  `.
			                        /  \\|||  :  |||//  \
			                       /  _||||| -:- |||||-  \
			                       |   | \\\  -  /// |   |
			                       | \_|  ''\---/''  |   |
			                       \  .-\__  `-`  ___/-. /
			                     ___`. .'  /--.--\  `. . __
			                  ."" '&lt;  `.___\_<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>|</span><span class="token punctuation">></span></span>_/___.'  >'"".
			                 | | :  `- \`.;`\ _ /`;.`/ - ` : | |
			                 \  \ `-.   \_ __\ /__ _/   .-` /  /
			            ======`-.____`-.___\_____/___.-`____.-'======
			                               `=---='
			            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
			                       佛祖保佑        永无BUG
			              佛曰:
			                     写字楼里写字间，写字间里程序员；
			                     程序人员写程序，又拿程序换酒钱。
			                     酒醒只在网上坐，酒醉还来网下眠；
			                     酒醉酒醒日复日，网上网下年复年。
			                     但愿老死电脑间，不愿鞠躬老板前；
			                     奔驰宝马贵者趣，公交自行程序员。
			                     别人笑我忒疯癫，我笑自己命太贱；
			                     不见满街漂亮妹，哪个归得程序员？
			  
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果图</strong></p>
<p><img src="/66.png" alt=""></p>
</div></template>
