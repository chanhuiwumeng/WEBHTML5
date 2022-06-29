<template><div><h1 id="html图片和媒体标签" tabindex="-1"><a class="header-anchor" href="#html图片和媒体标签" aria-hidden="true">#</a> HTML图片和媒体标签</h1>
<p><img src="/70.png" alt=""></p>
<h2 id="html-img-标签" tabindex="-1"><a class="header-anchor" href="#html-img-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;img&gt;</code>标签</h2>
<p><code v-pre>&lt;img&gt;</code> 标签定义 HTML 页面中的图像。</p>
<p><code v-pre>&lt;img&gt;</code> 标签有两个必需的属性：src 和 alt。</p>
<p>注释：从技术上讲，图像并不会插入 HTML 页面中，而是链接到 HTML 页面上。<code v-pre>&lt;img&gt;</code> 标签的作用是为被引用的图像创建占位符。</p>
<p>提示：通过在 <code v-pre>&lt;a&gt;</code> 标签中嵌套 <code v-pre>&lt;img&gt;</code> 标签，给图像添加到另一个文档的链接。</p>
<h3 id="img-基本属性" tabindex="-1"><a class="header-anchor" href="#img-基本属性" aria-hidden="true">#</a> <code v-pre>&lt;img&gt;</code>基本属性</h3>
<ul>
<li>src 属性是必须的，它包含了你想嵌入的图片的文件路径。</li>
<li>alt 属性包含一条对图像的文本描述，这不是强制性的，但对可访问性而言，它难以置信地有用——屏幕阅读器会将这些描述读给需要使用阅读器的使用者听，让他们知道图像的含义。如果由于某种原因无法加载图像，普通浏览器也会在页面上显示alt 属性中的备用文本：例如，网络错误、内容被屏蔽或链接过期时。</li>
<li>loading  指定浏览器是应立即加载图像还是延迟加载图像。 eager：立即加载 lazy：延迟加载</li>
<li>width 规定图像的宽度。</li>
</ul>
<h3 id="支持的图片格式" tabindex="-1"><a class="header-anchor" href="#支持的图片格式" aria-hidden="true">#</a> 支持的图片格式</h3>
<p><img src="/71.png" alt=""></p>
<p><img src="/72.png" alt=""></p>
<h4 id="bmp" tabindex="-1"><a class="header-anchor" href="#bmp" aria-hidden="true">#</a> BMP</h4>
<p>BMP是英文Bitmap（位图）的简写，它是Windows操作系统中的标准图像文件格式，能够被多种Windows应用程序所支持。BMP位图文件默认的文件扩展名是BMP或者bmp（有时它也会以.DIB或.RLE作扩展名）。它的显著特点是：</p>
<ul>
<li>几乎不压缩，包含的图像信息较丰富，图片品质最好；</li>
<li>文件太大，不利于网络传输；
正是因为BMP格式本身不利于网络传输，所以后续才陆续诞生了其他的图片压缩算法，来制定新的图片格式，比如我们常用的JPG/JPEG、PNG、GIF、TIFF、SVG等等。</li>
</ul>
<h4 id="jpg-jpeg" tabindex="-1"><a class="header-anchor" href="#jpg-jpeg" aria-hidden="true">#</a> JPG/JPEG</h4>
<p>JPG/JPEG（Joint Photographic Experts Group）是一种面向连续色调静止图像的压缩标准。是目前网络上最流行的图像格式。它的设计目标是在不影响人类可分辨的图片质量的前提下，尽可能的压缩文件大小。典型特点如下：</p>
<ul>
<li>在网络传输中应用广泛；</li>
<li>采用有损压缩，压缩比可自定义；
这意味着JPG去掉了一部分图片的原始信息，也即是进行了有损压缩。并且压缩比是可以自定义的：在Photoshop中进行图片导出JPG/JPEG格式时，可自由设置图片的品质，有0~12个等级可选。</li>
</ul>
<p>图片品质越高（压缩比越低），对应的图片质量越高，图片文件越大，反之亦然。图片品质在9以上时，图片质量也是相当不错的，肉眼很难分辨出来，同时也有效的降低了图片的文件大小。</p>
<h4 id="gif" tabindex="-1"><a class="header-anchor" href="#gif" aria-hidden="true">#</a> GIF</h4>
<p>GIF（Graphics Interchange Format）是图形转换格式，采用LZW压缩算法进行编码。特点有：</p>
<ul>
<li>支持动图和透明属性；</li>
<li>色彩范围较小，只支持256色；
适用于对色彩要求不高同时需要文件体积较小的场景，比如企业Logo、线框类的图等。很多人以为GIF指的就是动图，其实GIF不仅有动画GIF，还有静态GIF，因其体积小的特点，现在GIF被广泛的应用在各类网站中。</li>
</ul>
<h4 id="png" tabindex="-1"><a class="header-anchor" href="#png" aria-hidden="true">#</a> PNG</h4>
<p>PNG（Portable Network Graphics）是便携式网络图形，PNG是一种无损压缩的位图片形格式，其设计目的是试图替代GIF和TIFF文件格式，同时增加一些GIF文件格式所不具备的特性。典型特点有：</p>
<ul>
<li>采用无损压缩：
绝大多数情况下，同样的图片，PNG格式的图片质量要优于JPG，但图片大小也略大于JPG格式；而且无损压缩的图片在多次保存中也不会出现图片质量的损坏。</li>
<li>支持透明通道，广泛用于LOGO，Icon的制作；
PNG格式有8位、24位、32位三种形式，其中8位PNG支持两种不同的透明形式（索引透明和alpha透明），24位PNG不支持透明，32位PNG在24位基础上增加了8位透明通道，因此可展现256级透明程度。</li>
</ul>
<h4 id="svg" tabindex="-1"><a class="header-anchor" href="#svg" aria-hidden="true">#</a> SVG</h4>
<p>SVG（Scalable Vector Graphics）是可缩放矢量图形。它是基于XML（Extensible Markup Language），由World Wide Web Consortium（W3C）联盟进行开发的。SVG图片实质为一段代码，由直线和曲线以及绘制它们的方法组成。</p>
<ul>
<li>代码实现；</li>
<li>矢量性，放大缩小时，不会失真；</li>
<li>文件体积小，可二次编辑；
我们在Iconfont图标库中使用某个Icon时，就支持SVG格式的下载或者直接复制SVG代码的功能
常见的矢量文件格式还有ai、cdr、eps格式：
<ul>
<li>ai —— Adobe公司旗下软件 Adobe Illustrator 生成的可再编辑矢量图片；</li>
<li>cdr —— Corel公司旗下软件CorelDRAW生成的可再编辑矢量图片，CorelDRAW是目前多数广告公司用的广告产品排版软件；</li>
<li>eps —— 是Encapsulated PostScript的简写，严格说并不是一种图片格式，它主要用于矢量图像和光栅图像的存储。 可以保存其他一些类型信息，例如多色调曲线、Alpha通道、分色、剪辑路径、挂网信息和色调曲线等，因此EPS格式常用于印刷或打印输出。</li>
</ul>
</li>
</ul>
<h4 id="webp" tabindex="-1"><a class="header-anchor" href="#webp" aria-hidden="true">#</a> WEBP</h4>
<p>WebP是由谷歌推出的一种全新图片文件格式，与JPEG格式一样，WebP是一种有损压缩格式。不同的是，WebP格式的压缩效率更为出色，在同等质量下，WebP格式图像的体积要比JPEG格式图像小40%。目前互联网的流量中有65%为图片，这意味如果Google让WebP格式得到普及的话，浏览网页的速度将大幅提升</p>
<p>WebP 的优势体现在它具有更优的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量；同时具备了无损和有损的压缩模式、Alpha 透明以及动画的特性，在 JPEG 和 PNG 上的转化效果都相当优秀、稳定和统一。</p>
<ul>
<li>PNG 转 WebP 的压缩率要高于 PNG 原图压缩率，同样支持有损与无损压缩</li>
<li>转换后的 WebP 体积大幅减少，图片质量也得到保障（同时肉眼几乎无法看出差异）</li>
<li>转换后的 WebP 支持 Alpha 透明和 24-bit 颜色数，不存在 PNG8 色彩不够丰富和在浏览器中可能会出现毛边的问题</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//img20.360buyimg.com/mobilecms/s300x300_jfs/t17092/242/1564085538/102732/1f9c832b/5aced93dNd35af3c6.jpg!q70.jpg.webp<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazyimg_img<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>阿迪达斯减震系带跑鞋<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="base64位的图片" tabindex="-1"><a class="header-anchor" href="#base64位的图片" aria-hidden="true">#</a> BASE64位的图片</h3>
<p>sss</p>
<h2 id="html-audio-标签" tabindex="-1"><a class="header-anchor" href="#html-audio-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;audio&gt;</code>标签</h2>
<p>HTML <code v-pre>&lt;audio&gt;</code> 元素用于在文档中嵌入音频内容。 <code v-pre>&lt;audio&gt;</code> 元素可以包含一个或多个音频资源，
这些音频资源可以使用 src 属性或者<code v-pre>&lt;source&gt;</code> 元素来进行描述：浏览器将会选择最合适的一个来使用</p>
<p>目前，<code v-pre>&lt;audio&gt;</code> 元素支持的3种文件格式：MP3、Wav、Ogg。</p>
<h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3>
<ul>
<li>controls 控件</li>
<li>muted 表示是否静音的布尔值。默认值为 false，表示有声音。</li>
<li>loop  循环次数 负数就是死循环</li>
<li>autoplay  自动播放</li>
<li>src 嵌入的音频的 URL。</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.runoob.com/try/demo_source/horse.ogg<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>horse.mp3<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
您的浏览器不支持 audio 元素。
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>&lt;audio&gt;</code>和<code v-pre>&lt;source&gt;</code></strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.opus<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/ogg; codecs=opus<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.ogg<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/ogg; codecs=vorbis<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>foo.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio/mpeg<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
     Your browser doesn't support HTML5 audio.
     Here is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myAudio.mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>link to download the audio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> instead.
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果是</strong></p>
<p><img src="/73.png" alt=""></p>
<h2 id="html-vedio-标签" tabindex="-1"><a class="header-anchor" href="#html-vedio-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;vedio&gt;</code>标签</h2>
<p>HTML <code v-pre>&lt;video&gt;</code> 元素 用于在 HTML 或者 XHTML 文档中嵌入媒体播放器，用于支持文档内的视频播放</p>
<h3 id="基本属性" tabindex="-1"><a class="header-anchor" href="#基本属性" aria-hidden="true">#</a> 基本属性</h3>
<ul>
<li>autoplay 声明该属性后，视频会尽快自动开始播放，不会停下来等待数据全部加载完成</li>
<li>controls 加上这个属性，浏览器会在视频底部提供一个控制面板，允许用户控制视频的播放，包括音量，跨帧，暂停/恢复播放</li>
<li>loop  布尔属性；指定后，会在视频播放结束的时候，自动返回视频开始的地方，继续播放。</li>
<li>muted  布尔属性，指明在视频中音频的默认设置。设置后，音频会初始化为静音。默认值是 false, 意味着视频播放的时候音频也会播放</li>
<li>src 要嵌到页面的视频的URL</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm<span class="token punctuation">"</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/webm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4<span class="token punctuation">"</span></span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video/mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    Sorry, your browser doesn't support embedded videos.
&lt;/video
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果</strong></p>
<p><img src="/74.png" alt=""></p>
<h2 id="html-map-标签" tabindex="-1"><a class="header-anchor" href="#html-map-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;map&gt;</code>标签</h2>
<p><code v-pre>&lt;map&gt;</code> 标签用于客户端图像映射。图像映射指带有可点击区域的一幅图像。</p>
<p><code v-pre>&lt;img&gt;</code>中的 usemap 属性可引用 <code v-pre>&lt;map&gt;</code> 中的 id 或 name 属性（取决于浏览器），所以我们应同时向<code v-pre>&lt;map&gt;</code> 添加 id 和 name 属性。</p>
<p>area 元素永远嵌套在 map 元素内部。area 元素可定义图像映射中的区域。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infographic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>130,147,200,107,254,219,130,228<span class="token punctuation">"</span></span>
		  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/HTML<span class="token punctuation">"</span></span>
		  <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTML<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>130,147,130,228,6,219,59,107<span class="token punctuation">"</span></span>
		  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/CSS<span class="token punctuation">"</span></span>
		  <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CSS<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>130,147,200,107,130,4,59,107<span class="token punctuation">"</span></span>
		  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/JavaScript<span class="token punctuation">"</span></span>
		  <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JavaScript<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">usemap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#infographic<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MDN infographic<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面显示效果</strong></p>
<p><img src="/75.png" alt=""></p>
<h2 id="html-area-标签" tabindex="-1"><a class="header-anchor" href="#html-area-标签" aria-hidden="true">#</a> HTML<code v-pre>&lt;area&gt;</code>标签</h2>
<p><code v-pre>&lt;area&gt;</code> 标签定义图像映射内部的区域（图像映射指的是带有可点击区域的图像）。</p>
<p><code v-pre>&lt;area&gt;</code> 元素始终嵌套在 <code v-pre>&lt;map&gt;</code> 标签内部。
注释：<code v-pre>&lt;img&gt;</code> 标签中的 usemap 属性与 <code v-pre>&lt;map&gt;</code> 元素中的 name 相关联，以创建图像与映射之间的关系。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>infographic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>184,6,253,27<span class="token punctuation">"</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://mozilla.org<span class="token punctuation">"</span></span>
          <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Mozilla<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>130,136,60<span class="token punctuation">"</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/<span class="token punctuation">"</span></span>
          <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MDN<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>130,6,253,96,223,106,130,39<span class="token punctuation">"</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/Guide/Graphics<span class="token punctuation">"</span></span>
          <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Graphics<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>253,96,207,241,189,217,223,103<span class="token punctuation">"</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/HTML<span class="token punctuation">"</span></span>
          <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>HTML<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>207,241,54,241,72,217,189,217<span class="token punctuation">"</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/JavaScript<span class="token punctuation">"</span></span>
          <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JavaScript<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>54,241,6,97,36,107,72,217<span class="token punctuation">"</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/API<span class="token punctuation">"</span></span>
          <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Web APIs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>poly<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6,97,130,6,130,39,36,107<span class="token punctuation">"</span></span>
          <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/docs/Web/CSS<span class="token punctuation">"</span></span>
          <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>CSS<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">usemap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#infographic<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MDN infographic<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>页面效果图</strong></p>
<p><img src="/76.png" alt=""></p>
</div></template>
