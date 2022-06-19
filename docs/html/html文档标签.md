# HTML文档标签

## HTML简介

HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。除 HTML 以外的其它技术则通常用来描述一个网页的表现与展示效果（如 CSS），或功能与行为（如 JavaScript）。

“超文本”（hypertext）是指连接单个网站内或多个网站间的网页的链接。链接是网络的一个基本方面。只要将内容上传到互联网，并将其与他人创建的页面相链接，你就成为了万维网的积极参与者。

HTML 使用“标记”（markup）来注明文本、图片和其他内容，以便于在 Web 浏览器中显示。HTML 标记包含一些特殊“元素”如 `<head>，<title>，<body>，<header>，<footer>，<article>，<section>，<p>，<div>，<span>，<img>，<aside>，<audio>，<canvas>，<datalist>，<details>，<embed>，<nav>，<output>，<progress>，<video>` 等等等等。

![](/48.png)

**标签主要组成部分:**

+ 开始标记：它由元素的名称（在本例中为 p）组成，用左尖括号和右尖括号括起来。这表示元素开始或开始生效的位置 - 在本例中为段落开始的位置。
+ 结束标记：这与开始标记相同，只是它在元素名称前包含正斜杠。这表示元素的结束位置 — 在本例中为段落结束的位置。未能添加结束标记是标准的初学者错误之一，可能会导致奇怪的结果。
+ 内容：这是元素的内容，在本例中，它只是文本。
+ 元素：开始标记、结束标记和内容共同构成元素。

![](/49.png)

属性包含有关您不希望在实际内容中显示的元素的额外信息。此处，是属性名称，并且是属性值。该属性允许您为元素提供一个非唯一标识符，该标识符可用于通过样式信息和其他内容来定位该元素（以及具有相同值的任何其他元素）。classeditor-noteclassclass

**属性应始终具有以下各项:**

+ 它与元素名称（或上一个属性，如果元素已具有一个或多个属性）之间的空格。
+ 后跟等号的属性名称。
+ 由左引号和右引号括起来的属性值。

**标签的学习**
+ 标签的语义 根据标签名称 学习标签是用来干嘛的? `<p>` 代表段落 `<img>`代表图片
+ 标签的属性 标签语义之外定义标签的属性 通过属性名称和属性值定义 `<img  src='1.png' width="100px"/>`

## HTML基本结构
```html
<!-- documenttype 文档类型是 html 这是html5的声明头 告诉浏览器以哪种类型来调用哪个解析器核心来解析html 

1.DOCTYPE和浏览器渲染模式
    DOCTYPE，或者称为 Document Type Declaration（文档类型声明，缩写 DTD）
    通常情况下，DOCTYPE 位于一个 HTML 文档的最前面的位置，位于根元素 HTML 的起始标签之前。
    因为浏览器必须在解析 HTML 文档正文之前就确定当前文档的类型，以决定其需要采用的渲染模式，
    不同的渲染模式会影响到浏览器对于 CSS 代码甚至 JavaScript 脚本的解析
    怪异模式:
    严格模式:
-->
<!DOCTYPE html>
<!-- html代码书写的主框架 lang 是国际化的语言 默认是英文的 帮助翻译工具确定要使用的翻译规则-->
<html lang="en">
  <!-- head是头 -->
  <head>
    <!-- meta 元数据配置  charset 是字符编码 -->
    <meta charset="UTF-8" />
    <!-- 网页的标题  搜索引擎可以根据title判断网页中的主要内容是什么 -->
    <title>document</title>
    <!-- 告诉以默认的哪一个ie浏览器的内核版本打开  一般是对于国产的双核浏览器来说的不如360浏览器 
    是IE8的专属标记，用来兼容其它低版本IE浏览器的，告诉IE8浏览器以哪个低版本的IE浏览器来渲染页面。-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!--参数解析： 
      1）name项：常用的选项有Keywords(关键字) ，description(网站内容描述)，author(作者)，robots(机器人向导)等。 
      2）http-equiv项：可用于代替name项，常用的选项有Expires(期限)，Pragma(cache模式)，Refresh(刷新)，Set-Cookie(cookie设定)，Window-target(显示窗口的设定)，content-Type(显示字符集的设定)等。 
      3）content项：根据name项或http-equiv项的定义来决定此项填写什么样的字符串。   -->
    <meta name="description" content="Description" />
    <!-- 视口: 学习移动端的时候在详细的说明 -->
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
      <!--页面3庙后自动跳转  页面注册后跳转到登录页面  页面重定向-->
      <meta http-equiv="refresh" content="3;url=https://www.baidu.com" />
  </head>
  <body>
    <!-- html 的主要内容展示区域 -->
  </body>
</html>

```

+ `<!DOCTYPE html>`— 文档类型。这是必需的序言。在时间的迷雾中，当HTML还很年轻（大约1991/92年），DOCTYPES旨在充当一组规则的链接，HTML页面必须遵循这些规则才能被认为是好的HTML，这可能意味着自动错误检查和其他有用的东西。但是，如今，它们并没有做太多事情，基本上只需要确保您的文档行为正确。这就是您现在需要知道的。

```html
+ <!-- 这是早期的html4的文档声明的头 现在已经不推荐使用了-->
【过渡定义类型】：HTML4.01文档过渡定义类型，此类型定义的文档，对于标记和属性的语法要求并不是很严格，可以使用HTML中的标签与元素包括一些修饰性标签（例如：u、b等标签），不可以使用框架。

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
【严格定义类型】：HTML4.01文档严格定义类型，此类型定义的文档，对于文档内的代码要求比较严格，不允许使用任何表现层的标记和属性（例如：u、b等标签），不可以使用框架。

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
【框架定义类型】：HTML4.01文档框架定义类型，除 frameset 元素取代了 body
元素之外，此类型等同于HTML4.01文档过渡定义类型，但可以使用框架。 1
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

```
+ `<html></html>— <html>` 元素。此元素包装整个页面上的所有内容，有时称为根元素。
+ `<head></head>`— <头>元素。此元素充当要包含在 HTML 页面上的所有内容的容器，这些内容不是您向页面查看者显示的内容。这包括您希望在搜索结果中显示的关键字和页面描述，用于设置内容样式的CSS，字符集声明等内容。
+ `<meta charset="utf-8">`— 此元素将文档应使用的字符集设置为 UTF-8，其中包括绝大多数书面语言中的大多数字符。从本质上讲，它现在可以处理您可能放在其上的任何文本内容。没有理由不设置它，它可以帮助避免以后的一些问题。
+ `<title></title>`— <标题>元素。这将设置页面的标题，该标题显示在加载页面的浏览器选项卡中。它还用于在您添加书签/收藏页面时描述页面。
+ `<body></body>`— <体>元素。这包含您希望在Web用户访问您的页面时向他们显示的所有内容，无论是文本，图像，视频，游戏，可播放的音轨还是其他任何内容。
图像

## 文档标签

[W3C官网文档教程](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)

### <code>base标签</code>
`<base>` HTML 元素指定要用于文档中所有相对 URL 的基 URL。一个文档中只能有一个元素。

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<base target="_blank"/>
		<base target="_blank" href="http://www.baidu.com"/>
		<base  href="http://www.baidu.com"/>
	</head>
	<body>
		<a href="http://www.baidu.com">百度一下</a>
		<hr>
		<a href="#docs">百度一下</a>
	</body>
</html>
```

### <code>head标签</code>

`<head>` HTML 元素包含有关文档的机器可读信息（元数据），如文档的标题、脚本和样式表。

### <code>link标签</code>

`<link>` HTML 元素指定当前文档与外部资源之间的关系。此元素最常用于链接到样式表，但也用于建立网站图标（“favicon”样式图标以及主屏幕和移动设备上的应用程序的图标）等。

*淘宝网源码*

```html
 <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="renderer" content="webkit" />
  <title>淘宝网 - 淘！我喜欢</title>
  <meta name="spm-id" content="a21bo" />
  <meta name="description" content="淘宝网 - 亚洲较大的网上交易平台，提供各类服饰、美容、家居、数码、话费/点卡充值… 数亿优质商品，同时提供担保交易(先收货后付款)等安全交易保障服务，并由商家提供退货承诺、破损补寄等消费者保障服务，让你安心享受网上购物乐趣！" />
  <meta name="aplus-xplug" content="NONE">
  <meta name="keyword" content="淘宝,掏宝,网上购物,C2C,在线交易,交易市场,网上交易,交易市场,网上买,网上卖,购物网站,团购,网上贸易,安全购物,电子商务,放心买,供应,买卖信息,网店,一口价,拍卖,网上开店,网络购物,打折,免费开店,网购,频道,店铺" />
  <link rel="dns-prefetch" href="//g.alicdn.com" />
  <link rel="dns-prefetch" href="//img.alicdn.com" />
  <link rel="dns-prefetch" href="//tce.alicdn.com" />
  <link rel="dns-prefetch" href="//gm.mmstat.com" />
  <link ref="dns-prefetch" href="//tce.taobao.com" />
  <link rel="dns-prefetch" href="//log.mmstat.com" />
  <link rel="dns-prefetch" href="//tui.taobao.com" />
  <link rel="dns-prefetch" href="//ald.taobao.com" />
  <link rel="dns-prefetch" href="//gw.alicdn.com" />
  <link rel="dns-prefetch" href="//atanx.alicdn.com"/>
  <link rel="dns-prefetch" href="//dfhs.tanx.com"/>
  <link rel="dns-prefetch" href="//ecpm.tanx.com" />
  <link rel="dns-prefetch" href="//res.mmstat.com" />
  <link href="//img.alicdn.com/tps/i3/T1OjaVFl4dXXa.JOZB-114-114.png" rel="apple-touch-icon-precomposed" />
```

*京东源码*

```html
<link rel="dns-prefetch" href="//static.360buyimg.com"/>
    <link rel="dns-prefetch" href="//misc.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img10.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img11.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img12.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img13.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img14.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img20.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img30.360buyimg.com"/>
    <link rel="dns-prefetch" href="//d.3.cn"/>
    <link rel="dns-prefetch" href="//d.jd.com"/>
    <link rel="icon" href="//www.jd.com/favicon.ico" mce_href="//www.jd.com/favicon.ico" type="image/x-icon"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit"/>

    <!--[if lte IE 6]>
    <script src="//misc.360buyimg.com/mtd/pc/index/home/ie6tip.min.js"></script>
    <![endif]-->
    <!--[if IE 8]>
    <script src="//misc.360buyimg.com/mtd/pc/index_2019/1.0.0/static/lib/polyfill/index.js"></script>
    <![endif]-->

    <link href="//misc.360buyimg.com/mtd/pc/index_2019/1.0.0/static/css/first-screen.chunk.css" rel="stylesheet"/>

    <link href="//misc.360buyimg.com/mtd/pc/index_2019/1.0.0/static/css/index.chunk.css" rel="stylesheet"/>
```
### <code>meta标签</code>

> `<meta>` 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
> 
> `<meta>` 标签位于文档的头部，不包含任何内容。`<meta>` 标签的属性定义了与文档相关联的名称/值对。

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- 允许控制资源从何处加载。在 <head> 中尽可能地靠前放置，因为该标签仅适用于在其之后声明的资源。-->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">

<!-- Web 应用的名称（仅当网站被用作为一个应用时才使用）-->
<meta name="application-name" content="应用名称">

<!-- Chrome、Firefox OS 和 Opera 的主题颜色 -->
<meta name="theme-color" content="#4285f4">

<!-- 针对页面的简短描述（限制 150 字符）-->
<!-- 此内容*可能*被用作搜索引擎结果的一部分。 -->
<meta name="description" content="一个页面描述">

<!-- 控制搜索引擎的抓取和索引行为 -->
<meta name="robots" content="index,follow"><!-- 所有搜索引擎 -->
<meta name="googlebot" content="index,follow"><!-- 仅对 Google 有效 -->

<!-- 告诉 Google 不显示网站链接的搜索框 -->
<meta name="google" content="nositelinkssearchbox">

<!-- 告诉 Google 不提供此页面的翻译 -->
<meta name="google" content="notranslate">

<!-- 验证网址所有权 -->
<meta name="google-site-verification" content="verification_token"><!-- Google Search Console -->
<meta name="yandex-verification" content="verification_token"><!-- Yandex Webmasters -->
<meta name="msvalidate.01" content="verification_token"><!-- Bing Webmaster Center -->
<meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console -->
<meta name="p:domain_verify" content="code from pinterest"><!-- Pinterest Console -->
<meta name="norton-safeweb-site-verification" content="norton code"><!-- Norton Safe Web -->

<!-- 确定用于构建页面的软件（如 - WordPress、Dreamweaver）-->
<meta name="generator" content="program">

<!-- 关于你的网站主题的简短描述 -->
<meta name="subject" content="你的网站主题">

<!-- 基于网站内容给出一般的年龄分级 -->
<meta name="rating" content="General">

<!-- 允许控制 referrer 信息如何传递 -->
<meta name="referrer" content="no-referrer">

<!-- 禁用自动检测和格式化可能的电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 通过设置为 "off" 完全退出 DNS 预取 -->
<meta http-equiv="x-dns-prefetch-control" content="off">

<!-- 在客户端存储 cookie，web 浏览器的客户端识别 -->
<meta http-equiv="set-cookie" content="name=value; expires=date; path=url">

<!-- 指定要显示在一个特定框架中的页面 -->
<meta http-equiv="Window-Target" content="_value">

<!-- 地理标签 -->
<meta name="ICBM" content="latitude, longitude">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.region" content="country[-state]"><!-- 国家代码 (ISO 3166-1): 强制性, 州代码 (ISO 3166-2): 可选; 如 content="US" / content="US-NY" -->
<meta name="geo.placename" content="city/town"><!-- 如 content="New York City" -->
```
*京东源码*

```html
  <meta charset="utf8" version='1'/>
    <title>京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"/>
    <meta name="description"
          content="京东JD.COM-专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。"/>
    <meta name="Keywords" content="网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东"/>
    <script type="text/javascript">
        window.point = {}
        window.point.start = new Date().getTime()
    </script>
    <link rel="dns-prefetch" href="//static.360buyimg.com"/>
    <link rel="dns-prefetch" href="//misc.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img10.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img11.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img12.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img13.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img14.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img20.360buyimg.com"/>
    <link rel="dns-prefetch" href="//img30.360buyimg.com"/>
    <link rel="dns-prefetch" href="//d.3.cn"/>
    <link rel="dns-prefetch" href="//d.jd.com"/>
    <link rel="icon" href="//www.jd.com/favicon.ico" mce_href="//www.jd.com/favicon.ico" type="image/x-icon"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="renderer" content="webkit"/>

```
### <code>style标签</code>
`<style>` HTML 元素包含文档或文档一部分的样式信息。它包含 CSS，它应用于包含该元素的文档的内容。
```html
  <style>
  blockquote,body,button,dd,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,hr,input,legend,li,ol,p,pre,td,textarea,th,ul{
	  margin:0;padding:0;
	  }
	  body,button,input,select,textarea{
		  font:12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
	  }
  </style>
  <link rel="stylesheet" href="//g.alicdn.com/??tbhome/taobao-2021/0.0.30/lib/style/page-min.css,tbhome/taobao-2021/0.0.30/lib/style/index-min.css">
  <link rel="stylesheet" href="//g.alicdn.com/main-search/new-search-suggest/0.0.2/bundle.css">
```

### <code>title标签</code>

`<title>` HTML 元素定义在浏览器的标题栏或页面选项卡中显示的文档标题。它只包含文本;标记将被忽略	
	  
## 字符集和字符编码表

### 基础知识
> 计算机中储存的信息都是用二进制数表示的；而我们在屏幕上看到的英文、汉字等字符是二进制数转换之后的结果。通俗的说，按照何种规则将字符存储在计算机中，如'a'用什么表示，称为"编码"；反之，将存储在计算机中的二进制数解析显示出来，称为"解码"，如同密码学中的加密和解密。在解码过程中，如果使用了错误的解码规则，则导致'a'解析成'b'或者乱码。

**字符集（Charset）**:是一个系统支持的所有抽象字符的集合。字符是各种文字和符号的总称，包括各国家文字、标点符号、图形符号、数字等。

**字符编码（Character Encoding）**:是一套法则，使用该法则能够对自然语言的字符的一个集合（如字母表或音节表），与其他东西的一个集合（如号码或电脉冲）进行配对。即在符号集合与数字系统之间建立对应关系，它是信息处理的一项基本技术。通常人们用符号集合（一般情况下就是文字）来表达信息。而以计算机为基础的信息处理系统则是利用元件（硬件）不同状态的组合来存储和处理信息的。元件不同状态的组合能代表数字系统的数字，因此字符编码就是将符号转换为计算机可以接受的数字系统的数，称为数字代码。

###  常用字符集和字符编码
> 常见字符集名称：ASCII 字符集、GB2312 字符集、BIG5 字符集、GB18030 字符集、Unicode 字符集等。计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字

###  ASCII 字符集&编码
> SCII（American Standard Code for Information Interchange，美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统。它主要用于显示现代英语，而其扩展版本 EASCII 则可以勉强显示其他西欧语言。它是现今最通用的单字节编码系统（但是有被 Unicode 追上的迹象），并等同于国际标准 ISO/IEC 646。
> 
ASCII 字符集：主要包括控制字符（回车键、退格、换行键等）；可显示字符（英文大小写字符、阿拉伯数字和西文符号）。

ASCII 编码：将 ASCII 字符集转换为计算机可以接受的数字系统的数的规则。使用 7 位（bits）表示一个字符，共 128 字符；但是 7 位编码的字符集只能支持 128 个字符，为了表示更多的欧洲常用字符对 ASCII 进行了扩展，ASCII 扩展字符集使用 8 位（bits）表示一个字符，共 256 字符。ASCII 字符集映射到数字编码规则如下图所示

![](/50.png)

ASCII 的最大缺点是只能显示 26 个基本拉丁字母、阿拉伯数目字和英式标点符号，因此只能用于显示现代美国英语（而且在处理英语当中的外来词如 naïve、café、élite 等等时，所有重音符号都不得不去掉，即使这样做会违反拼写规则）。而 EASCII 虽然解决了部份西欧语言的显示问题，但对更多其他语言依然无能为力。因此现在的苹果电脑已经抛弃 ASCII 而转用 Unicode。

###  伟大的创想 Unicode

像天朝一样，当计算机传到世界各个国家时，为了适合当地语言和字符，设计和实现类似 GB232/GBK/GB18030/BIG5 的编码方案。这样各搞一套，在本地使用没有问题，一旦出现在网络中，由于不兼容，互相访问就出现了乱码现象。

为了解决这个问题，一个伟大的创想产生了——Unicode。Unicode 编码系统为表达任意语言的任意字符而设计。它使用 4 字节的数字来表达每个字母、符号，或者表意文字(ideograph)。每个数字代表唯一的至少在某种语言中使用的符号。（并不是所有的数字都用上了，但是总数已经超过了 65535，所以 2 个字节的数字是不够用的。）被几种语言共用的字符通常使用相同的数字来编码，除非存在一个在理的语源学(etymological)理由使不这样做。不考虑这种情况的话，每个字符对应一个数字，每个数字对应一个字符。即不存在二义性。不再需要记录"模式"了。U+0041 总是代表'A'，即使这种语言没有'A'这个字符。

在计算机科学领域中，Unicode（统一码、万国码、单一码、标准万国码）是业界的一种标准，它可以使电脑得以体现世界上数十种文字的系统。Unicode 是基于通用字符集（Universal Character Set）的标准来发展，并且同时也以书本的形式[1]对外发表。Unicode 还不断在扩增， 每个新版本插入更多新的字符。直至目前为止的第六版，Unicode 就已经包含了超过十万个字符（在 2005 年，Unicode 的第十万个字符被采纳且认可成为标准之一）、一组可用以作为视觉参考的代码图表、一套编码方法与一组标准字符编码、一套包含了上标字、下标字等字符特性的枚举等。Unicode 组织（The Unicode Consortium）是由一个非营利性的机构所运作，并主导 Unicode 的后续发展，其目标在于：将既有的字符编码方案以 Unicode 编码方案来加以取代，特别是既有的方案在多语环境下，皆仅有有限的空间以及不兼容的问题。

**可以这样理解：Unicode 是字符集，UTF-32/ UTF-16/ UTF-8 是三种字符编码方案**

#### UTF8

UTF-8（8-bit Unicode Transformation Format）是一种针对 Unicode 的可变长度字符编码（定长码），也是一种前缀码。它可以用来表示 Unicode 标准中的任何字符，且其编码中的第一个字节仍与 ASCII 兼容，这使得原来处理 ASCII 字符的软件无须或只须做少部份修改，即可继续使用。因此，它逐渐成为电子邮件、网页及其他存储或传送文字的应用中，优先采用的编码。互联网工程工作小组（IETF）要求所有互联网协议都必须支持 UTF-8 编码。
UTF-8 使用一至四个字节为每个字符编码：
128 个 US-ASCII 字符只需一个字节编码（Unicode 范围由 U+0000 至 U+007F）。
带有附加符号的拉丁文、希腊文、西里尔字母、亚美尼亚语、希伯来文、阿拉伯文、叙利亚文及它拿字母则需要二个字节编码（Unicode 范围由 U+0080 至 U+07FF）。
其他基本多文种平面（BMP）中的字符（这包含了大部分常用字）使用三个字节编码。
其他极少使用的 Unicode 辅助平面的字符使用四字节编码。
在处理经常会用到的 ASCII 字符方面非常有效。在处理扩展的拉丁字符集方面也不比 UTF-16 差。对于中文字符来说，比 UTF-32 要好。同时，（在这一条上你得相信我，因为我不打算给你展示它的数学原理。）由位操作的天性使然，使用 UTF-8 不再存在字节顺序的问题了。一份以 utf-8 编码的文档在不同的计算机之间是一样的比特流。
总体来说，在 Unicode 字符串中不可能由码点数量决定显示它所需要的长度，或者显示字符串之后在文本缓冲区中光标应该放置的位置；组合字符、变宽字体、不可打印字符和从右至左的文字都是其归因。所以尽管在 UTF-8 字符串中字符数量与码点数量的关系比 UTF-32 更为复杂，在实际中很少会遇到有不同的情形。

**优点**

UTF-8 是 ASCII 的一个超集。因为一个纯 ASCII 字符串也是一个合法的 UTF-8 字符串，所以现存的 ASCII 文本不需要转换。为传统的扩展 ASCII 字符集设计的软件通常可以不经修改或很少修改就能与 UTF-8 一起使用。
使用标准的面向字节的排序例程对 UTF-8 排序将产生与基于 Unicode 代码点排序相同的结果。（尽管这只有有限的有用性，因为在任何特定语言或文化下都不太可能有仍可接受的文字排列顺序。）
UTF-8 和 UTF-16 都是可扩展标记语言文档的标准编码。所有其它编码都必须通过显式或文本声明来指定。
任何面向字节的字符串搜索算法都可以用于 UTF-8 的数据（只要输入仅由完整的 UTF-8 字符组成）。但是，对于包含字符记数的正则表达式或其它结构必须小心。
UTF-8 字符串可以由一个简单的算法可靠地识别出来。就是，一个字符串在任何其它编码中表现为合法的 UTF-8 的可能性很低，并随字符串长度增长而减小。举例说，字符值 C0,C1,F5 至 FF 从来没有出现。为了更好的可靠性，可以使用正则表达式来统计非法过长和替代值（可以查看 W3 FAQ: Multilingual Forms 上的验证 UTF-8 字符串的正则表达式）。

**缺点**

因为每个字符使用不同数量的字节编码，所以寻找串中第 N 个字符是一个 O(N)复杂度的操作 — 即，串越长，则需要更多的时间来定位特定的字符。同时，还需要位变换来把字符编码成字节，把字节解码成字符。

