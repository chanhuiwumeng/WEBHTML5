# HTML表单标签
![](/82.png)

HTML 表单用于收集用户的输入信息。
HTML 表单表示文档中的一个区域，此区域包含交互控件，将用户收集到的信息发送到 Web 服务器。

**大麦网的注册**

![](/83.png)

**唯品会的登录页面**

![](/84.png)

**管理页面的信息提交**

![](/10.webp)

## Form表单的基础使用

```html
<!-- action 代表的是表单提交到后台的路径 交给谁去接收表单的数据去处理 
			method代表表单提交的方式,常规的方式有两种:
			GET: 不安全的提交方式 提交的信息会在浏览器的URL地址栏显示
			POST: 安全的提交方式 提交的信息在地址栏不会显示
			-->
		<form action="" method="GET">
			<label for="username">用户名:</label>
			<input type="text" name="username" id="username">
			<br>
			<label for="password">密&ensp;&ensp;码:</label>
			<input type="password" name="password" id="password">
			<br>
			<!-- submit 是提交 只有type为submit时表单才具有提交信息的功能 -->
			<input type="submit" value="登录">
			<input type="reset" value="重置">
		</form>
```
**页面展示的效果**

![](/85.png)

## 常用表单的控件
+ 文本框
+ 密码框
+ 单选按钮
+ 复选框
+ 下拉列表框
+ 按钮
+ 文本域
+ 文件域(文件上传使用)
+ 隐藏域
+ 只读与禁用
+ 标注

```html
<!-- action 代表的是表单提交到后台的路径 交给谁去接收表单的数据去处理 
			method代表表单提交的方式,常规的方式有两种:
			GET: 不安全的提交方式 提交的信息会在浏览器的URL地址栏显示
			POST: 安全的提交方式 提交的信息在地址栏不会显示
			-->
		<form action="" method="GET">
			<!-- label用于标注 label的for值必须和input的id值一致
				使用label增强鼠标的可用性 点击label的文字 光标可对输入框自动聚焦
			 -->
			<label for="username">&ensp;&ensp;用户名:</label>
			<!-- name 是给输入的值给定名称 确定输入的值那那一中类型
				value是输入框的值 在没有输入值的时候value显示的就是给定的默认值
				id 给每一个input 给定一个唯一的名称 id值不能重复 
			 -->
			<input type="text" name="username" id="username" value="李四">
			<br>
			<label for="phone">手机号码:</label>
			<!-- size 当input的类型是text/password时 size 规定的是输入框可输入的初始的宽度以字符为单位
				当其他类型时size 规定的是input的像素大小
			 -->
			<input type="text" name="phone" id="phone" size="50">
			<br>
			<label for="address">&ensp;&ensp;&ensp;&ensp;地址:</label>
			<!-- maxlength 规定输入框的可输入字符的最大个数 -->
			<input type="text" name="address" id="address" size="50" maxlength="2">
			<br>
			<label for="password">密&ensp;&ensp;&ensp;&ensp;码:</label>
			<!-- maxlength 限定输入的密码的最长度 -->
			<input type="password" name="password" id="password" maxlength="12">
			<br>
			<!-- 单选框的使用时 name值必须相同 radio使用的时候name和value属性必须添加 -->
			<input type="radio" name="gender" value="男" checked>男
			<input type="radio" name="gender" value="女">女
			<input type="radio" name="gender" value="保密">保密
			<br>
			<!-- 多选框 必须有name和value输入值 其他属性可选 checkbox的name值不一定全部相同 -->
			<input type="checkbox" name="books" value="红楼梦" checked> 红楼梦
			<input type="checkbox" name="books" value="西游记" checked> 西游记
			<input type="checkbox" name="books" value="水浒传"> 水浒传
			<input type="checkbox" name="books" value="三国演义"> 三国演义
			<input type="checkbox" name="books" value="活着"> 活着
			<input type="checkbox" name="books" value="三体"> 三体
			<br>
			<input type="button" value="只是按钮">
			<br>
			<!-- 文件上传 在使用文件上传功能的时候 必须给表单加属性:
			 enctype="multipart/form-data" 	不对字符编码。在使用包含文件上传控件的表单时，必须使用该值
				-->
			<input type="file" name="file" >
			<br>
			<!-- 文本域:
				cols: 默认每行可以写多少个字符 默认文本域的宽度
				rows:默认文本域的高度是多少行，超过默认高度出现滚动条
				默认文本域是可以拖拽改变宽度和高度的 可以使用css禁止拖拽文本域改变宽高
			 -->
			<textarea cols="120" rows="10"></textarea>
			<br>
			<!-- 下拉菜单 -->
			<select >
				<option value="">------请选择---</option>
				<option value="陕西省">陕西省</option>
				<option value="山东省" selected>山东省</option>
				<option value="河南省">河南省</option>
				<option value="广东省">广东省</option>
				<option value="湖南省">湖南省</option>
			</select>
			<br>
			<!-- 隐藏域 隐藏域的内容不会在页面显示 但是其Value值会在表单提交的时候一块进行提交 -->
			<input type="hidden" name="id" value="101">
			<br>
			<!-- 只读 readonly="readonly" 
				w3c新的规定 如果属性名和属性值相等 可以省略属性值不写
			-->
			<input type="text" name="error" id="" value="警告内容" readonly="readonly">
			<br>
			<!-- submit 是提交 只有type为submit时表单才具有提交信息的功能 -->
			<input type="submit" value="登录">
			<input type="reset" value="重置">
		</form>
```
**页面展示效果**

![](/86.png)

**GET方式提交表单信息**

提交的信息会展示在地址栏中所以是不安全的

![](/87.png)

## HTML5新增的表单控件类型
+ 邮箱输入框
+ tel手机号码输入框
+ url地址输入框
+ number输入框
+ 搜索框
+ 滑动条
+ 拾色器
+ 时间
+ 日期
+ 时间和日期
+ 月份
+ 星期

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>表单类型</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #F7F7F7;
        }

        form {
            max-width: 500px;
            width: 100%;
            margin: 32px auto 0;
            font-size: 16px;
        }

        label {
            display: block;
            margin: 10px 0;
        }

        input {
            width: 100%;
            height: 25px;
            margin-top: 2px;
            display: block;
        }

    </style>
</head>
<body>
<form action="">
    <fieldset>
        <legend>表单类型</legend>
        <label for="">
            email: <input type="email" name="email" required>
        </label>
        <label for="">
            color: <input type="color" name="color">
        </label>
        <label for="">
            url: <input type="url" name='url'>
        </label>
        <label for="">
            number: <input type="number" step="3" name="number">
        </label>
        <label for="">
            range: <input type="range" name="range" value="100">
        </label>
        <label for="">
            search: <input type="search" name="search">
        </label>
        <label for="">
            tel: <input type="tel" name="tel">
        </label>
        <label for="">
            time: <input type="time" name="time">
        </label>
        <label for="">
            date: <input type="date" name="date">
        </label>
        <label for="">
            datetime: <input type="datetime">
        </label>
        <label for="">
            week: <input type="week" name="month">
        </label>
        <label for="">
            month: <input type="month" name="month">
        </label>
        <label for="">
            datetime-local: <input type="datetime-local" name="datetime-local">
        </label>
        <input type="submit">
    </fieldset>
</form>
</body>
</html>
```

**页面展示效果**

![](/88.png)

## HTML5其他的表单属性

![](/89.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>表单类型</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #F7F7F7;
        }

        form {
            max-width: 500px;
            width: 100%;
            margin: 32px auto 0;
            font-size: 16px;
        }

        label {
            display: block;
            margin: 10px 0;
        }

        input {
            width: 100%;
            height: 25px;
            margin-top: 2px;
            display: block;
        }

    </style>
</head>
<body>
<form action="">
    <fieldset>
        <legend>表单类型</legend>
        <label for="">
			<!--required 输入框必须在表单提交的时候输入值 不然提示报错
			  autofocus 自动聚焦 用户在使用的时候就直接输入内容 而不需要在去点击一次
			  min 输入的最小字符数
			  max 输入的最大字符数
			  -->
            username: <input type="text" name="username" required autofocus min="10" max="15">
        </label>
		<label for="">
			<!--disabled 为禁用 不能输入信息 只能查看信息 如果是按钮使用disable就不能点击了 -->
		    address: <input type="text" name="address" disabled value="陕西省西安市">
		</label>
		<label for="">
			<!--自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项 -->
		    phone: <input type="text" name="phone" autocomplete="on" >
		</label>
		<label for="">
			<!--pattern 属性规定用于验证 <input> 元素的值的正则表达式。 -->
		    email: <input type="text" name="email" autocomplete="on" pattern="/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/">
		</label>
		<label for="">
			<!--placeholder 输入框默认的提示信息 -->
		    password: <input type="password" name="password" placeholder="请输入密码...">
		</label>
		
		
		<label for="" style="height: 50px;">
			<!--placeholder 输入框默认的提示信息 -->
			<datalist id="browsers">
			  <option value="Internet Explorer">Internet Explorer</option>
			  <option value="Firefox">Firefox</option>
			  <option value="Google Chrome">Google Chrome</option>
			  <option value="Opera">Opera</option>
			  <option value="Safari">Safari</option>
			</datalist>
		    list: <input type="text" name="browser" list="browsers">
		</label>
		<label for="">
			<!--multiple 属性规定允许用户输入到 <input> 元素的多个值。-->
		     选择图片: <input type="file" name="img" multiple>
		</label>
        <input type="submit">
    </fieldset>
</form>
</body>
</html>
```
**页面提示效果**

![](/93.png)
![](/90.png)
![](/91.png)
![](/92.png)