# HTML行内标签

## HTML`<a>`标签
`<a>` 标签定义超链接，用于从一个页面链接到另一个页面。
`<a>` 元素最重要的属性是 href 属性，它指定链接的目标。

超链接的分类:
+ 页面间链接：A页到B页，网上常见链接+ 锚链接：跳至自身固定位置，或A页跳到B页固定位置，需锚标记+ 功能性链接：电子邮件、QQ、MSN等链接

在所有浏览器中，链接的默认外观如下：

+ 未被访问的链接带有下划线而且是蓝色的
+ 已被访问的链接带有下划线而且是紫色的
+ 活动链接带有下划线而且是红色的

### 页面连接

```html
<ul id="navitems-group1">
<li clstag="h|keycount|h|keycount|head|navi_01" class="fore1">
	<a class="navitems-lk" target="_blank" href="https://miaosha.jd.com/" aria-lable="秒杀">秒杀                                                            </a>
</li>
							<li clstag="h|keycount|h|keycount|head|navi_02" class="fore2">
	<a class="navitems-lk" target="_blank" href="https://a.jd.com/" aria-lable="优惠券">优惠券                                                            </a>
</li>
							<li clstag="h|keycount|h|keycount|head|navi_03" class="fore3">
	<a class="navitems-lk" target="_blank" href="https://plus.jd.com/index?flow_system=appicon&amp;flow_entrance=appicon11&amp;flow_channel=pc" aria-lable="PLUS会员">PLUS会员                                                            </a>
</li>
							<li clstag="h|keycount|h|keycount|head|navi_04" class="fore4">
	<a class="navitems-lk" target="_blank" href="https://red.jd.com/" aria-lable="品牌闪购">品牌闪购                                                            </a>
</li>
</ul>
```
**页面相关**

![](/68.png)

### 锚点连接
```html
<a href="#" name="top"></a>
		<p>半醒半醉日复日，花落花开年复年</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<p>半醒半醉日复日，花落花开年复年	</p>
		<a href="#top">回到顶部</a>
```
### 发送邮件
```html
<p>
这是一个电子邮件链接：
<a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">
发送邮件</a>
</p>
<b>注意：</b>单词之间的空格需要使用%20来表示，以确保浏览器能真正解析空格。</p>
```
### 超链接属性
+ href 规定链接的目标 URL。
+ download 指定下载链接
+ target 规定在何处打开目标 URL。仅在 href 属性存在时使用。
	 + _blank：新窗口打开。
	 + _parent：在父窗口中打开链接。
	 + _self：默认，当前页面跳转。
	 + _top：在当前窗体打开链接，并替换当前的整个窗体(框架页)。
```html
<div class="logo_extend" clstag="h|keycount|h|keycount|head|logo_02" style="display: block;">
	<a id="J_logo_extend" href="https://pro.jd.com/mall/active/zoBUiAZjippmcCfwmSxNbibGrLV/index.html" target="_blank" aria-label="大促LOGO位推广" style="display: block; width: 190px; height: 120px; background: rgb(255, 255, 255);">
		<img src="//img10.360buyimg.com/img/jfs/t1/199487/20/23852/33747/62862238E18f45301/a50ec1c60e6aad22.jpg" style="display: block; height: 120px; margin: 0px auto; width: 100%;">
	</a>
</div>
```

## HTML文字标签
+ `<del>`  标签定义文档中已删除的文本。
+ `<b>` 标签定义粗体的文本
+ `<i>`   定义与文本中其余部分不同的部分，并把这部分文本呈现为斜体文本。
	+ 在没有其他适当语义的元素可以使用时，请使用 `<i>` 元素。其他语义的元素如下：
		+  `<em>` （被强调的文本）
		+ `<strong>` （重要的文本）
		+ `<mark>` （被标记的/高亮显示的文本）
		+ `<cite>` （作品的标题）
		+ `<dfn>` （一个定义项目） 	
+ `<em>` 标签是一个短语标签，用来呈现为被强调的文本。
+ `<u>`  标签定义与常规文本风格不同的文本，像拼写错误的单词或者汉语中的专有名词。
	+ 	请尽量避免使用 `<u>` 为文本加下划线，用户会把它混淆为一个超链接。
+ `<sub>`  标签定义下标文本。下标文本将会显示在当前文本流中字符高度的一半为基准线的下方，但是与当前文本流中文字的字体和字号都是一样的。下标文本能用来表示化学公式，比如 H2O。
+ `<sup>`  标签定义下标文本。下标文本将会显示在当前文本流中字符高度的一半为基准线的下方，但是与当前文本流中文字的字体和字号都是一样的。下标文本能用来表示化学公式，比如 H2O。
+ `<code>` 标签是一个短语标签，用来定义计算机代码文本。
+ `<mark>` 标签定义带有记号的文本。请在需要突出显示文本时使用 `<mark>` 标签。
+ `<small>`   标签定义小型文本（和旁注）。
+ `<strong>` 标签是一个短语标签，用来定义计算机程序的样本重要的文本。
+ `<abbr>`   标签用来表示一个缩写词或者首字母缩略词，如"WWW"或者"NATO"。通过对缩写词语进行标记，您就能够为浏览器、拼写检查程序、翻译系统以及搜索引擎分度器提供有用的信息。
+ `<time>`  标签定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。 
```html
		<del>半醒半醉日复日,花开花落年复年</del>
		<br>
		<b>半醒半醉日复日,花开花落年复年</b>
		<br>
		<u>半醒半醉日复日,花开花落年复年</u>
		<br>
		<i>半醒半醉日复日,花开花落年复年</i>
		<br>
		<em>半醒半醉日复日,花开花落年复年</em>
		<br>
		<p>H<sub>2</sub>O</p>
		<p>2<sup>3</sup>次方</p>
		<p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>
		<p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr title="HyperText Markup Language">HTML</abbr>.</p>
		<p>我在 <time datetime="2016-02-14">情人节</time> 有个约会。</p>
```
**页面效果图**

![](/69.png)
