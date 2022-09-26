# css选择器

css选择器是我们在定义页面样式的时候,通过css的选择器获取页面HTML元素或者元素集合的方式
css 官方文档将css选择器分为了五大类:
 + 基本选择器
 + 组合选择器
 + 关系选择器
 + 属性选择器
 + 伪类选择器
 + 伪元素选择器

## 基本选择器

### 通配符选择器(*)

通配符使用`*`代表页面的任意类型的元素或者页面所有任意类型的元素集合

在 CSS3 中，星号 (*) 可以和命名空间组合使用：
+ ns|* - 会匹配ns命名空间下的所有元素
+ *|* - 会匹配所有命名空间下的所有元素
+ |* - 会匹配所有没有命名空间的元素
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			/*页面所有元元素*/
			*{
				font-family: Arial, Helvetica, sans-serif;
			}
			
			/*页面相同属性的元素*/
			*[lang=en_US]{
				color:pink
				}
				
				/*页面class选择器相同的元素*/
			*.main{
				color:green;
			}
				/*页面id选择器相同的元素*/
			*#content{
				color: #fff233;
			}
		</style>
	</head>
	<body>
		<p >CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.</p>
		<p id="content">CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.</p>
		<p class="main">CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.</p>
		<h3 lang="en_US">CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.</h3>
	</body>
</html>
```
### 类型选择器
 类型选择器是根据页面中元素的名称,获取页面中元素的集合
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			/*定义页面所的名称为p元素的样式*/
			p{
				color:red;
				font-size: 16px;
				font-weight: 600;
			}
		</style>
	</head>
	<body>
		<p >CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.</p>
		<p id="content">CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.</p>
		<p class="main">CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers.</p>
	</body>
</html>
```
### class选择器(.)

页面元素的属性匹配class名称的所有元素
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        /*class选择器*/
        .red {
            color: #f33;
        }

        .yellow-bg {
            background: #ffa;
        }

        .fancy {
            font-weight: bold;
            text-shadow: 4px 4px 3px #77f;
        }
    </style>
</head>
<body>
<p class="red">This paragraph has red text.</p>
<p class="red yellow-bg">This paragraph has red text and a yellow background.</p>
<p class="red fancy">This paragraph has red text and "fancy" styling.</p>
<p>This is just a regular paragraph.</p>
</body>
</html>
```

### ID选择器(#)
页面元素的属性匹配id名称的所有元素,id属性的名称在同一个页面中不能重复
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			#identified {
			  background-color: skyblue;
			}
		</style>
	</head>
	<body>
		<div id="identified">This div has a special ID on it!</div>
		<div>This is just a regular div.</div>
	</body>
</html>
```

### 属性选择器([])
通过给定的元素的属性名称和属性的值去获取匹配的元素或者元素的集合
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			a {
			  color: blue;
			}
			
			/* 链接的路径以 "#"开头 */
			a[href^="#"] {
			  background-color: gold;
			}
			
			/* 链接的路径只要包含 example */
			a[href*="example"] {
			  background-color: silver;
			}
			
			/*链接的路径只要包含 insensitive 忽略大小写 */
			a[href*="insensitive" i] {
			  color: cyan;
			}
			
			/* 链接的路径只要包含 cAsE 区分大小写 */ 
			a[href*="cAsE" s] { 
			  color: pink; 
			}
			
			/* 链接的路径以.org结尾 */
			a[href$=".org"] {
			  color: red;
			}
			
			/* 链接的路径既要以https开头 也要以.org结尾*/
			a[href^="https"][href$=".org"] {
			  color: green;
			}
		</style>
	</head>
	<body>
		<ul>
		  <li><a href="#internal">Internal link</a></li>
		  <li><a href="http://example.com">Example link</a></li>
		  <li><a href="#InSensitive">Insensitive internal link</a></li>
		  <li><a href="http://example.org">Example org link</a></li>
		  <li><a href="https://example.org">Example https org link</a></li>
		</ul>
	</body>
</html>
```
## 分组选择器
分组选择器使用逗号,`,`常被称为并集选择器或并集组合器，选择所有能被列表中的任意一个选择器选中的节点。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			/*集合选择器*/
			p span,a span,section em{
				color: #DB2777;
			}
		</style>
	</head>
	<body>
		<p><span>Grouping selectors in a single line using a comma-separated lists.</span></p>
		<a href="http://www.baidu.com"><span>Grouping selectors in a single line using a comma-separated lists.</span></a>
		<section>
			<em>Grouping selectors in a single line using a comma-separated lists.</em>
		</section>
	</body>
</html>
```
> 注意:以下两段 CSS 代码并不不等价

```html
h1 { font-family: sans-serif }
h2:maybe-unsupported { font-family: sans-serif }
h3 { font-family: sans-serif }
```
```html
h1, h2:maybe-unsupported, h3 { font-family: sans-serif }
```
这是因为，在选择器列表中如果有一个选择器不被支持，那么整条规则都会失效。

解决这个问题的一个方法是使用 :is() 选择器，它会忽视它的参数列表中失效的选择器，但是由于 :is() 会影响优先级的计算方式，这么做的代价是，其中的所有选择器都会拥有相同的优先级。

```html
:is(h1, h2:maybe-unsupported, h3) { font-family: sans-serif }
```
## 关系选择器

### 包含选择器

选择所有被父元素包含的子元素或者子孙元素,父元素和子孙元素之间使用空格隔开
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        /*选择所有的li元素*/
        li {
            list-style-type: disc;
        }
        /*选择所有的li 标签最终包含的子元素子孙元素()*/
        li li {
            list-style-type: square;
        }
    </style>
</head>
<body>
<ul>
    <li>
        <div>Item 1</div>
        <ul>
            <li>Subitem A</li>
            <li>Subitem B</li>
        </ul>
    </li>
    <li>
        <div>Item 2</div>
        <ul>
            <li>Subitem A</li>
            <li>Subitem B</li>
        </ul>
    </li>
</ul>
</body>
</html>
```
### 子选择器(>)

匹配第二个选择器的元素是第一个选择器的直接的子孙元素.
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			/*父元素的样式*/
			span {
			  background-color: white;
			}
			/*div 元素的自元素span的样式,包含的直接子元素*/
			div > span {
			  background-color: DodgerBlue;
			}
		</style>
	</head>
	<body>
		<div>
		  <span>Span #1, in the div.
		    <span>Span #2, in the span that's in the div.</span>
		  </span>
		</div>
		<span>Span #3, not in the div at all.</span>
	</body>
</html>
```

### 兄弟选择器(~)
第一个选择器的后边的所有的兄弟元素,第一个选择器和第二个选择器的所有的元素必须在同一个父级元素中
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			p ~ span {
			  color: #DB2777;
			}
		</style>
	</head>
	<body>
		<span>This is not red.</span>
		<p>Here is a paragraph.</p>
		<code>Here is some code.</code>
		<span>And here is a red span!</span>
		<span>And this is a red span!</span>
		<code>More code...</code>
		<div> How are you? </div>
		<p> Whatever it may be, keep smiling. </p>
		<h1> Dream big </h1>
		<h2> that's all. </h2> 
		<span>And yet again this is a red span!</span>
	</body>
</html>
```
### 相邻选择器(+)
紧挨着第一个选择器之后的那个选择器的元素,第一个选择器和挨着后边的元素必须在同一个父元素中
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			li:first-of-type + li {
			  color: red;
			}
		</style>
	</head>
	<body>
		<ul>
		  <li>One</li>
		  <li>Two!</li>
		  <li>Three</li>
		</ul>
	</body>
</html>
```
## 伪类

### 伪类选择器
伪类选择器是一些被选中元素的状态 
> <span style="color:#10B981">状态选择器</span>
#### :active
:active 伪类匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			a:link { color: blue; }          /* 访问链接之前 */
			a:visited { color: purple; }     /* 访问链接之后 */
			a:hover { background: yellow; }  /* 鼠标悬浮链接 */
			a:active { color: red; }         /* 激活连接 */
			p:active { background: #eee; }   /* 激活段落*/
		</style>
	</head>
	<body>
		<p>This paragraph contains a link:
		  <a href="#">This link will turn red while you click on it.</a>
		  The paragraph will get a gray background while you click on it or the link.
		</p>
	</body>
</html>
```
#### :focus
表单的输入框获取焦点时的状态
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			.red-input:focus {
			  background: yellow;
			  color: red;
			}
			
			.blue-input:focus {
			  background: yellow;
			  color: blue;
			}
		</style>
	</head>
	<body>
		<input class="red-input" value="I'll be red when focused."><br>
		<input class="blue-input" value="I'll be blue when focused.">
	</body>
</html>
```
#### :target
:target CSS 伪类 代表一个唯一的页面元素 (目标元素)，其id 与当前 URL 片段匹配。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			p:target {
			  background-color: gold;
			}
			
			/* Add a pseudo-element inside the target element */
			p:target::before {
			  font: 70% sans-serif;
			  content: "►";
			  color: limegreen;
			  margin-right: .25em;
			}
			
			/* Style italic elements within the target element */
			p:target i {
			  color: red;
			}
		</style>
	</head>
	<body>
		<h3>Table of Contents</h3>
		<ol>
		 <li><a href="#p1">Jump to the first paragraph!</a></li>
		 <li><a href="#p2">Jump to the second paragraph!</a></li>
		 <li><a href="#nowhere">This link goes nowhere,
		   because the target doesn't exist.</a></li>
		</ol>
		
		<h3>My Fun Article</h3>
		<p id="p1">You can target <i>this paragraph</i> using a
		  URL fragment. Click on the link above to try out!</p>
		<p id="p2">This is <i>another paragraph</i>, also accessible
		  from the links above. Isn't that delightful?</p>
	</body>
</html>
```
#### :checked
:checked CSS 伪类选择器表示任何处于选中状态的radio(`<input type="radio">`), checkbox (`<input type="checkbox">`) 或 ("select") 元素中的option HTML 元素 ("option")。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			div,
			select {
			  margin: 8px;
			}
			
			/* 输入框被选中的label */
			input:checked + label {
			  color: red;
			}
			
			/*选中单选框 */
			input[type="radio"]:checked {
			  box-shadow: 0 0 0 3px orange;
			}
			
			/* 多选框选中 */
			input[type="checkbox"]:checked {
			  box-shadow: 0 0 0 3px hotpink;
			}
			
			/* select的option被选中 */
			option:checked {
			  box-shadow: 0 0 0 3px lime;
			  color: red;
			}
		</style>
	</head>
	<body>
		<div>
		  <input type="radio" name="my-input" id="yes">
		  <label for="yes">Yes</label>
		
		  <input type="radio" name="my-input" id="no">
		  <label for="no">No</label>
		</div>
		
		<div>
		  <input type="checkbox" name="my-checkbox" id="opt-in">
		  <label for="opt-in">Check me!</label>
		</div>
		
		<select name="my-select" id="fruit">
		  <option value="opt1">Apples</option>
		  <option value="opt2">Grapes</option>
		  <option value="opt3">Pears</option>
		</select>
	</body>
</html>
```
#### :hover
鼠标悬浮在元素之上的时候触发样式
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			a {
			  background-color: powderblue;
			  transition: background-color .5s;
			}
			
			a:hover {
			  background-color: gold;
			}
		</style>
	</head>
	<body>
		<a href="#">Try hovering over this link.</a>
	</body>
</html>
```
**使用:hover 伪类可以创建复杂的层叠机制**
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			div.menu-bar ul ul {
			  display: none;
			}
			
			div.menu-bar li:hover > ul {
			  display: block;
			}
		</style>
	</head>
	<body>
		<div class="menu-bar">
		  <ul>
		    <li>
		      <a href="example.html">Menu</a>
		      <ul>
		        <li>
		          <a href="example.html">Link</a>
		        </li>
		        <li>
		          <a class="menu-nav" href="example.html">Submenu</a>
		          <ul>
		            <li>
		              <a class="menu-nav" href="example.html">Submenu</a>
		              <ul>
		                <li><a href="example.html">Link</a></li>
		                <li><a href="example.html">Link</a></li>
		                <li><a href="example.html">Link</a></li>
		                <li><a href="example.html">Link</a></li>
		              </ul>
		            </li>
		            <li><a href="example.html">Link</a></li>
		          </ul>
		        </li>
		      </ul>
		    </li>
		  </ul>
		</div>
	</body>
</html>
```
#### :visited
:visited CSS伪类表示用户已访问过的链接。出于隐私原因，可以使用此选择器修改的样式非常有限。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			a {
			  /* 指定某些属性的默认值，允许他们使用：visited 状态进行样式设置 */
			  background-color: white;
			  border: 1px solid white;
			}
			
			a:visited {
			  background-color: yellow;
			  border-color: hotpink;
			  color: hotpink;
			}
		</style>
	</head>
	<body>
		<a href="#test-visited-link">你是否访问过此链接？</a>
		<a href="">你已经访问过此链接。</a>
	</body>
</html>
```
#### :link
:link伪类选择器是用来选中元素当中的链接。它将会选中所有尚未访问的链接，包括那些已经给定了其他伪类选择器的链接
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			a {
			  /* 指定某些属性的默认值，允许他们使用：visited 状态进行样式设置 */
			  background-color: white;
			  border: 1px solid white;
			}
			a:link {
			  background-color: gold;
			  color: green;
			}
			a:visited {
			  background-color: yellow;
			  border-color: hotpink;
			  color: hotpink;
			}
		</style>
	</head>
	<body>
		<a href="#ordinary-target">This is an ordinary link.</a><br>
		<a href="">You've already visited this link.</a><br>
		<a>Placeholder link (won't get styled)</a>
	</body>
</html>
```
> <span style="color:#10B981">结构选择器</span>
#### :first-child
在一组兄弟元素中的第一个元素
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			p:first-child {
			  color: lime;
			  background-color: black;
			  padding: 5px;
			}
		</style>
	</head>
	<body>
		<div>
		  <p>This text is selected!</p>
		  <p>This text isn't selected.</p>
		</div>
		
		<div>
		  <h2>This text isn't selected: it's not a `p`.</h2>
		  <p>This text isn't selected.</p>
		</div>
	</body>
</html>
```
#### :last-child
代表父元素的最后一个子元素
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			p:last-child {
			  color: lime;
			  background-color: black;
			  padding: 5px;
			}
		</style>
	</head>
	<body>
		<div>
		  <p>This text is selected!</p>
		  <p>This text isn't selected.</p>
		</div>
		
		<div>
		  <h2>This text isn't selected: it's not a `p`.</h2>
		  <p>This text isn't selected.</p>
		</div>
	</body>
</html>
```
#### :nth-child()
首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从 1 开始排序，选择的结果为 CSS 伪类:nth-child 括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3...）。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			html {
			  font-family: sans-serif;
			}
			
			span,
			div em {
			  padding: 5px;
			  border: 1px solid green;
			  display: inline-block;
			  margin-bottom: 3px;
			}
			
			.first span:nth-child(2n+1),
			.second span:nth-child(2n+1),
			.third span:nth-of-type(2n+1) {
			  background-color: lime;
			}
		</style>
	</head>
	<body>
		<h3><code>span:nth-child(2n+1)</code>, WITHOUT an
		   <code>&lt;em&gt;</code> among the child elements.</h3>
		<p>Children 1, 3, 5, and 7 are selected.</p>
		<div class="first">
		  <span>Span 1!</span>
		  <span>Span 2</span>
		  <span>Span 3!</span>
		  <span>Span 4</span>
		  <span>Span 5!</span>
		  <span>Span 6</span>
		  <span>Span 7!</span>
		</div>
		
		<br>
		
		<h3><code>span:nth-child(2n+1)</code>, WITH an
		   <code>&lt;em&gt;</code> among the child elements.</h3>
		<p>Children 1, 5, and 7 are selected.<br>
		   3 is used in the counting because it is a child, but it isn't
		   selected because it isn't a <code>&lt;span&gt;</code>.</p>
		<div class="second">
		  <span>Span!</span>
		  <span>Span</span>
		  <em>This is an `em`.</em>
		  <span>Span</span>
		  <span>Span!</span>
		  <span>Span</span>
		  <span>Span!</span>
		  <span>Span</span>
		</div>
		
		<br>
		
		<h3><code>span:nth-of-type(2n+1)</code>, WITH an
		   <code>&lt;em&gt;</code> among the child elements.</h3>
		<p>Children 1, 4, 6, and 8 are selected.<br>
		   3 isn't used in the counting or selected because it is an <code>&lt;em&gt;</code>, 
		   not a <code>&lt;span&gt;</code>, and <code>nth-of-type</code> only selects
		   children of that type. The <code>&lt;em&gt;</code> is completely skipped
		   over and ignored.</p>
		<div class="third">
		  <span>Span!</span>
		  <span>Span</span>
		  <em>This is an `em`.</em>
		  <span>Span!</span>
		  <span>Span</span>
		  <span>Span!</span>
		  <span>Span</span>
		  <span>Span!</span>
		</div>
	</body>
</html>
```
#### :first-of-type()
表示一组兄弟元素中其类型的第一个元素
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			p:first-of-type {
			  color: red;
			  font-style: italic;
			}
		</style>
	</head>
	<body>
		<h2>Heading</h2>
		<p>Paragraph 1</p>
		<p>Paragraph 2</p>
	</body>
</html>
```
#### last-of-type()
表示了在（它父元素的）子元素列表中，最后一个给定类型的元素。当代码类似 Parent tagName:last-of-type 的作用区域包含父元素的所有子元素中的最后一个选定元素，也包括子元素的最后一个子元素并以此类推。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
			p:last-of-type {
			  color: red;
			  font-style: italic;
			}
		</style>
	</head>
	<body>
		<h2>Heading</h2>
		<p>Paragraph 1</p>
		<p>Paragraph 2</p>
	</body>
</html>
```
#### :not()
用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为反选伪类（negation pseudo-class）

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		.fancy {
		  text-shadow: 2px 2px 3px gold;
		}
		
		/* 类名不是 `.fancy` 的 <p> 元素*/
		p:not(.fancy) {
		  color: green;
		}
		
		/* 非 <p> 元素 */
		body :not(p) {
		  text-decoration: underline;
		}
		
		/* 既不是 <div> 也不是 <span> 的元素 */
		body :not(div):not(span) {
		  font-weight: bold;
		}
		
		/* 不是 <div> 或 `.fancy` 的元素*/
		body :not(div, .fancy) {
		  text-decoration: overline underline;
		}
		
		/* <h2> 元素中不是有 `.foo` 类名的 <span> 元素 */
		h2 :not(span.foo) {
		  color: red;
		}

		</style>
	</head>
	<body>
		<p>I am a paragraph.</p>
		<p class="fancy">I am so very fancy!</p>
		<div>I am NOT a paragraph.</div>
		<h2>
		  <span class="foo">foo inside h2</span>
		  <span class="bar">bar inside h2</span>
		</h2>
	</body>
</html>
```
#### :nth-last-of-type()
`:nth-last-of-type(an+b)` 这个 CSS 伪类 匹配那些在它之后有 an+b-1 个相同类型兄弟节点的元素，其中 n 为正值或零值。它基本上和 `:nth-of-type 一样`，只是它从结尾处反序计数，而不是从开头处。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		span:nth-last-of-type(2) {
		  background-color: lime;
		}
		</style>
	</head>
	<body>
		<div>
		  <span>This is a span.</span>
		  <span>This is another span.</span>
		  <em>This is emphasized.</em>
		  <span>Wow, this span gets limed!!!</span>
		  <strike>This is struck through.</strike>
		  <span>Here is one last span.</span>
		</div>
	</body>
</html>
```
#### :root

`:root` 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，`:root` 表示 `<html>` 元素，除了优先级更高之外，与 html 选择器相同。

```html
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```
#### :is()
`:is()` 函数将选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。

伪元素在 :is() 的选择器列表中无效。
```html
/* Level 0 */
h1 {
  font-size: 30px;
}

/* Level 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}

/* Level 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}
```
**使用`is()变得更简单`**
```html
/* Level 0 */
h1 {
  font-size: 30px;
}
/* Level 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Level 2 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Level 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```
### 伪元素选择器

#### ::after
`::after`用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合content属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素
**基础语法**
```html
element:after  { style properties }  /* CSS2 语法 */

element::after { style properties }  /* CSS3 语法 */
```
##### 简单用法
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		.exciting-text::after {
		  content: "<- 让人兴兴兴奋！";
		  color: green;
		}
		
		.boring-text::after {
		  content: "<- 无聊！";
		  color: red;
			}
		</style>
	</head>
	<body>
		<p class="boring-text">这是些无聊的文字</p>
		<p>这是不无聊也不有趣的文字</p>
		<p class="exciting-text">在 MDN 上做贡献简单又轻松。
		按右上角的编辑按钮添加新示例或改进旧示例！</p>
	</body>
</html>
```
##### 装饰用法
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		.ribbon {
		 background-color: #5BC8F7;
		}
		
		.ribbon::after {
		 content: "Look at this orange box.";
		 background-color: #FFBA10;
		 border-color: black;
		 border-style: dotted;
		}
		</style>
	</head>
	<body>
	<span class="ribbon">Notice where the orange box is.</span>
	</body>
</html>
```
##### 提示用法
用`::after`伪元素，attr()CSS 表达式和一个自定义数据属性 `data-descr`创建一个纯 CSS，词汇表提示工具
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        span[data-descr] {
            position: relative;
            text-decoration: underline;
            color: #00F;
            cursor: help;
        }

        span[data-descr]:hover::after {
            content: attr(data-descr);
            position: absolute;
            left: 0;
            top: 24px;
            min-width: 200px;
            border: 1px #aaaaaa solid;
            border-radius: 10px;
            background-color: #ffffcc;
            padding: 12px;
            color: #000000;
            font-size: 14px;
            z-index: 1;
        }
    </style>
</head>
<body>
<p>这是上面代码的实现<br />
    我们有一些 <span data-descr="collection of words and punctuation">文字</span> 有一些
    <span data-descr="small popups which also hide again">提示</span>。<br />
    把鼠标放上去<span data-descr="not to be taken literally">看看</span>。
</p>
</body>
</html>
```
#### ::before
`::before` 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 `content` 属性来为一个元素添加修饰性的内容。此元素默认为行内元素
**基础语法**
```html
/* CSS3 语法 */
element::before { 样式 }

/*（单冒号）CSS2 过时语法 (仅用来支持 IE8) */
element:before  { 样式 }

/* 在每一个 p 元素前插入内容 */
p::before { content: "Hello world!"; }
```
##### 简单使用

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        q::before {
            content: "«";
            color: blue;
        }
        q::after {
            content: "»";
            color: red;
        }
    </style>
</head>
<body>
<q>一些引用</q>, 他说，<q>比没有好。</q>.
</body>
</html>
```
##### 修饰使用
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		.ribbon {
		   background-color: #5BC8F7;
		}
		
		.ribbon::before {
		   content:          "Look at this orange box.";
		   background-color: #FFBA10;
		   border-color:     black;
		   border-style:     dotted;
		}
		</style>
	</head>
	<body>
	<span class="ribbon">Notice where the orange box is.</span>
	</body>
</html
```
##### 待办列表
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		li {
		  list-style-type: none;
		  position: relative;
		  margin: 2px;
		  padding: 0.5em 0.5em 0.5em 2em;
		  background: lightgrey;
		  font-family: sans-serif;
		}
		
		li.done {
		  background: #CCFF99;
		}
		
		li.done::before {
		  content: '';
		  position: absolute;
		  border-color: #009933;
		  border-style: solid;
		  border-width: 0 0.3em 0.25em 0;
		  height: 1em;
		  top: 1.3em;
		  left: 0.6em;
		  margin-top: -1em;
		  transform: rotate(45deg);
		  width: 0.5em;
		}
		</style>
	
	</head>
	<body>
	<ul>
	  <li>Buy milk</li>
	  <li>Take the dog for a walk</li>
	  <li>Exercise</li>
	  <li>Write code</li>
	  <li>Play music</li>
	  <li>Relax</li>
	</ul>
	<script>
		var list = document.querySelector('ul');
		list.addEventListener('click', function(ev) {
		  if( ev.target.tagName === 'LI') {
		     ev.target.classList.toggle('done');
		  }
		}, false);
	</script>
	</body>
</html>
```

####  ::first-letter (:first-letter)
`::first-letter`会选中某 `block-level element`（块级元素）第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格）
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		/* 使每段开头的第一个字母变红变大 */
		p::first-letter {  /* 使用:first 来兼容 IE8- */
		  color: red;
		  font-size: 130%;
		}
		</style>
	</head>
	<body>
	<p>Punctuation that precedes or immediately follows the first letter is included in the match</p>
	</body>
</html>
```




