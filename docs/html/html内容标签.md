# HTML内容标签

## 内容标签
![](/52.png)

### HTML`<head>`标题
HTML 标题（Heading）是通过`<h1> - <h6>` 标签来定义的,
标题标签文字默认加粗和独占一行显示
```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```
![](/51.png)

**注意事项**
+  `<h1>`在一个页面最多只能有一个,不要用多个
+ 避免跳过某级标题：始终要从 `<h1>` 开始，接下来依次使用 `<h2>` 等等。
+ 不要为了减小标题的字体而使用低级别的标题， 而是使用 CSS font-size 属性
+ `<h1>`中使用的关键词，往往是在网页标题中使用的
+ `<h1>`尽量靠近在html 中的`<body>`标签，越近越好，以便让搜索引擎最快的领略主题

####  一个页面的h1标签还可以为浏览器的搜索引擎提供SEO(搜索引擎优化)的功能

+ H1标签对SEO影响很大

+ H1标签对于SEO，可用性和可访问性非常重要。

![](/53.png)

![](/54.png)

### HTML`<header>`标签
`<header>` html5新标签

`<header>` 标签定义文档或者文档的一部分区域的页眉。

`<header>` 元素应该作为介绍内容或者导航链接栏的容器。

在一个文档中，您可以定义多个 `<header>` 元素。

注释：`<header>` 标签不能被放在 `<footer>、<address>` 或者另一个 `<header>` 元素内部。·

**页面的header**
```html
<header>
  <h1>主页标题</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>
```

**文章的header**
```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>Posted on Wednesday, 4 October 2017 by Jane Smith</p>
  </header>
  <p>We live on a planet that's blue and green, with so many things still unseen.</p>
  <p><a href="https://janesmith.com/the-planet-earth/">Continue reading....</a></p>
</article>
```
### HTML`<article>`标签
`<article>` 标签是 HTML5 的新标签。

`<article>` 标签定义独立的内容。

`<article>` 标签定义的内容本身必须是有意义的且必须是独立于文档的其余部分。

`<article>` 的潜在来源：

+ 论坛帖子
+ 博客文章
+ 新闻故事
+ 评论

```html
<article itemscope itemtype="http://schema.org/BlogPosting">
 <header>
  <h1 itemprop="headline">The Very First Rule of Life</h1>
  <p><time itemprop="datePublished" datetime="2009-10-09">3 days ago</time></p>
  <link itemprop="url" href="?comments=0">
 </header>
 <p>If there's a microphone anywhere near you, assume it's hot and
 sending whatever you're saying to the world. Seriously.</p>
 <p>...</p>
 <footer>
  <a itemprop="discussionUrl" href="?comments=1">Show comments...</a>
 </footer>
</article>
```

### HTML`<section>`标签
html5新定义的标签. `<section>` 标签定义了文档的某个区域。比如章节、头部、底部或者文档的其他区域。

+ 一般通过是否包含一个标题 (`<h1> (en-US)-<h6> (en-US) element`) 作为子节点 来 辨识每一个`<section>`。
+ 如果 `<section>` 元素的内容可以单独在多个媒体上发表，应该使用 `<article>` 而不是 `<section>`。
+ 不要把 `<section>` 元素作为一个普通的容器来使用，这是本应该是`<div>`的用法（特别是当片段（the sectioning ）仅仅是为了美化样式的时候）。 一般来说，一个 `<section>` 应该出现在文档大纲中。

```html
	<section>
	<h2>荣誉簿圆满喜极而泣，库里全票当选FMVP实至名归</h2>
	<img src='../vuepress/public/kl.jpeg'>
	<p>在队友的簇拥下喜极而泣，34岁的勇士头号球星库里终于收获梦寐以求的FMVP。曾经两夺常规赛MVP的他，本赛季独揽西部总决赛（新设）和总决赛最有价值球员，如愿达成个人荣誉“大满贯”。</p>
	</section>
```
一般在使用的时候如果不是文档大纲页面,使用div标签就可以了。

### HTML`<nav>`标签
`<nav>`是html5新标签,`<nav>`标签一般用来定义导航连接的标签
```html
<nav class="menu">
  <ul>
    <li><a href="#">首页</a></li>
    <li><a href="#">关于我们</a></li>
    <li><a href="#">公司介绍</a></li>
  </ul>
</nav>
```
并不是所有的 HTML 文档都要使用到`<nav>` 元素。`<nav>` 元素只是作为标注一个导航链接的区域。

在不同设备上（手机或者PC）可以制定导航链接是否显示，以适应不同屏幕的需求。

### HTML`<aside>`标签
`<aside>` 标签是 HTML5 的新标签。

`<aside>` 标签定义 `<article>` 标签外的内容。

`<aside>` 的内容应该与附近的内容相关
```html
<p>Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail in both larval and adult forms.</p>

<aside>
    <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>Several species of salamander inhabit the temperate rainforest of the Pacific Northwest, including the Ensatina, the Northwestern Salamander and the Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects, worms and other small creatures.</p>
```
```css
aside {
    width: 40%;
    padding-left: .5rem;
    margin-left: .5rem;
    float: right;
    box-shadow: inset 5px 0 5px -5px #29627e;
    font-style: italic;
    color: #29627e;
}

aside > p {
    margin: .5rem;
}

p {
    font-family: 'Fira Sans', sans-serif;
}
```
**效果图**

![](/55.png)

### HTTML`<hgroup>`标签
`<hgroup>` 标签被用来对标题元素进行分组。

当标题有多个层级（副标题）时，`<hgroup>` 元素被用来对一系列 `<h1> - <h6>` 元素进行分组。

```css
hgroup {
    text-align: right;
    font-family: Verdana, sans-serif;
    padding-right: 16px;
    border-right: 10px solid #00c8d7;
}

h1 {
    font-size: 1.93rem;
    margin-bottom: 0;
}

h2 {
    font-size: 1.16rem;
    margin-top: 0;
}

p {
    text-align: justify;
    font-family: Georgia, serif;
    font-size: .95rem;
}

p::first-letter {
    font-size: 3.2rem;
    line-height: .7;
    float: left;
    padding-right: 8px;
    padding-top: 4px;
}
```
```html
<hgroup>
    <h1>Calculus I</h1>
    <h2>Fundamentals</h2>
</hgroup>
<p>This course will start with a brief introduction about the limit of a function. Then we will describe how the idea of derivative emerges in the Physics and Geometry fields. After that, we will explain that the key to master calculus is …</p>
```
**页面效果**

![](/56.png)

### HTML`<footer>`标签
`<footer>` 标签定义文档或者文档的一部分区域的页脚。

`<footer>` 元素应该包含它所包含的元素的信息。

在典型情况下，该元素会包含文档创作者的姓名、文档的版权信息、使用条款的链接、联系信息等等。

在一个文档中，您可以定义多个 `<footer>` 元素。

```html
<article>
    <h1>How to be a wizard</h1>
    <ol>
        <li>Grow a long, majestic beard.</li>
        <li>Wear a tall, pointed hat.</li>
        <li>Have I mentioned the beard?</li>
    </ol>
    <footer>
        <p>© 2018 Gandalf</p>
    </footer>
</article>
```
**京东页面效果**

![](/57.png)

## 文本标签
![](/58.png)
### HTML`<p>`标签
`<p>` 标签定义段落。

`<p>`元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。

```html
<p class="text_align-left">老区和老区人民，为我们党领导的中国革命作出了重大牺牲和贡献。在广袤的神州大地上，每一个革命老区都见证着中国人民选择中国共产党、坚定不移跟党走的伟大历程。</p>
<p class="text_align-left">饮水思源，不忘老区。为人民谋幸福，是中国共产党始终坚守的初心。</p>
```
**页面效果图**

![](/61.png)

### HTML`<ul>`标签
`<ul>` 标签定义无序列表。

将 `<ul>` 标签与 `<li>` 标签一起使用，创建无序列表。

```html
	<ul>
	  <li>first item</li>
	  <li>second item     
	  <!-- Look, the closing </li> tag is not placed here! -->
		<ul>
		  <li>second item first subitem</li>
		  <li>second item second subitem
		  <!-- Same for the second nested unordered list! -->
			<ul>
			  <li>second item second subitem first sub-subitem</li>
			  <li>second item second subitem second sub-subitem</li>
			  <li>second item second subitem third sub-subitem</li>
			</ul>
		  </li> <!-- Closing </li> tag for the li that
					  contains the third unordered list -->
		  <li>second item third subitem</li>
		</ul>
	  <!-- Here is the closing </li> tag -->
	  </li>
	  <li>third item</li>
	</ul>
```
![](/59.png)

### HTML`<ol>`标签
`<ol>` 标签定义了一个有序列表. 列表排序以数字来显示。

使用`<li>` 标签来定义列表选项。`

```html
<ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>
```

![](/60.png)

### HTML`<blockquote>`标签
`<blockquote>` 标签定义摘自另一个源的块引用。

浏览器通常会对 `<blockquote>` 元素进行缩进。

```html
<blockquote cite="https://tools.ietf.org/html/rfc1149">
  <p>Avian carriers can provide high delay, low
  throughput, and low altitude service.  The
  connection topology is limited to a single
  point-to-point path for each carrier, used with
  standard carriers, but many carriers can be used
  without significant interference with each other,
  outside of early spring.  This is because of the 3D
  ether space available to the carriers, in contrast
  to the 1D ether used by IEEE802.3.  The carriers
  have an intrinsic collision avoidance system, which
  increases availability.</p>
</blockquote>
```
**页面效果图**

![](/62.png)

### HTML`<hr>`标签
`<hr>` 标签定义 HTML 页面中的主题变化（比如话题的转移），并显示为一条水平线。

`<hr>` 元素被用来分隔 HTML 页面中的内容（或者定义一个变化）。
```css
hr {
    border: none;
    border-top: 3px double #333;
    color: #333;
    overflow: visible;
    text-align: center;
    height: 5px;
}

hr:after {
    background: #fff;
    content: '§';
    padding: 0 4px;
    position: relative;
    top: -13px;
}
```
```html
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>
<hr>
<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```
**页面效果图**

![](/63.png)

### HTML `<figure>`和`<figcaption>`标签
`<figure>` 标签规定独立的流内容（图像、图表、照片、代码等等）。

`<figure>` 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。

`<figcaption>` 标签为 `<figure>` 元素定义标题。

`<figcaption>` 元素应该被置于 `<figure>` 元素的第一个或最后一个子元素的位置。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			figure {
			    border: thin #c0c0c0 solid;
			    display: flex;
			    flex-flow: column;
			    padding: 5px;
			    max-width: 220px;
			    margin: auto;
			}
			img {
			    max-width: 220px;
			    max-height: 150px;
			}
			figcaption {
			    background-color: #222;
			    color: #fff;
			    font: italic smaller sans-serif;
			    padding: 3px;
			    text-align: center;
			}
		</style>
	</head>
	<body>
		<figure>
		    <img src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
		         alt="Elephant at sunset">
		    <figcaption>An elephant at sunset</figcaption>
		</figure>
	</body>
</html>
```
![](/64.png)

### `HTML<dl>、<dt>、<dd>`标签(自定义列表)
`<dl>` 标签定义一个描述列表。

`<dl>` 标签与 `<dt>` （定义项目/名字）和 `<dd>` （描述每一个项目/名字）一起使用。

```html
<dl class="col-links ">
<dt>选购指南</dt> 
<dd>
<a rel="nofollow" href="//www.mi.com/search?keyword=%E6%89%8B%E6%9C%BA" target="_blank">手机</a>
</dd>
 <dd>
 <a rel="nofollow" href="//www.mi.com/search?keyword=%E7%94%B5%E8%A7%86" target="_blank">电视</a>
 </dd> 
 <dd>
 <a rel="nofollow" href="//www.mi.com/search?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC" target="_blank">笔记本</a>
 </dd> 
 <dd>
 <a rel="nofollow" href="//www.mi.com/search?keyword=%E5%B9%B3%E6%9D%BF" target="_blank">平板</a>
 </dd>
  <dd>
  <a rel="nofollow" href="//www.mi.com/search?keyword=%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4" target="_blank">穿戴</a>
  </dd> 
  <dd>
  <a rel="nofollow" href="//www.mi.com/search?keyword=%E8%80%B3%E6%9C%BA" target="_blank">耳机</a>
  </dd> 
  <dd>
  <a rel="nofollow" href="//www.mi.com/search?keyword=%E5%AE%B6%E7%94%B5" target="_blank">家电</a>
  </dd>
   <dd>
   <a rel="nofollow" href="//www.mi.com/search?keyword=%E8%B7%AF%E7%94%B1%E5%99%A8" target="_blank">路由器</a>
   </dd> 
   <dd>
   <a rel="nofollow" href="//www.mi.com/search?keyword=%E9%9F%B3%E7%AE%B1" target="_blank">音箱</a>
   </dd>
	<dd>
	<a rel="nofollow" href="//www.mi.com/search?keyword=%E9%85%8D%E4%BB%B6" target="_blank">配件</a>
	</dd>
	</dl>
```
**页面效果**
![](/65.png)

### HTML`<pre>`标签
`<pre>` 标签可定义预格式化的文本。

被包围在 `<pre>` 标签 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

```html
<pre>
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
			                  ."" '<  `.___\_<|>_/___.'  >'"".
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
			  
		</pre>
```
**页面效果图**

![](/66.png)


