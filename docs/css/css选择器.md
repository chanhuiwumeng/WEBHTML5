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
#### :first
#### :last
#### :first-child
#### :last-child
#### :nth-child()
#### :type-of-child()
#### :not()
#### :root

### 伪元素选择器

#### ::after
#### ::before




