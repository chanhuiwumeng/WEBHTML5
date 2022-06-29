# HTML表格标签
![](/77.png)
## HTML`<table>`标签
`<table>` 标签定义 HTML 表格

一个 HTML 表格包括 `<table>` 元素，一个或多个 `<tr>`、`<th>` 以及 `<td>` 元素。

`<tr>` 元素定义表格行，`<th>` 元素定义表头，`<td>` 元素定义表格单元。

更复杂的 HTML 表格也可能包括 `<caption>`、`<col>`、`<colgroup>`、`<thead>`、`<tfoot>` 以及 `<tbody>` 元素。

```html
<table  border="1">
  <caption>Color names and values</caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>
```
**页面显示的效果**

![](/78.png)

### table样式定义
```html
<!-- cellspcaing 取消单元格之间的间隙 单元格之间变成实线-->
<table border="1" cellspacing="0">
		  <caption>Color names and values</caption>
		  <tbody>
		    <tr>
		      <th scope="col">Name</th>
		      <th scope="col">HEX</th>
		      <th scope="col">HSLa</th>
		      <th scope="col">RGBa</th>
		    </tr>
		    <tr>
		      <th scope="row">Teal</th>
		      <td ><code>#51F6F6</code></td>
		      <td><code>hsla(180, 90%, 64%, 1)</code></td>
		      <td><code>rgba(81, 246, 246, 1)</code></td>
		    </tr>
		    <tr>
		      <th scope="row">Goldenrod</th>
		      <td><code>#F6BC57</code></td>
		      <td><code>hsla(38, 90%, 65%, 1)</code></td>
		      <td><code>rgba(246, 188, 87, 1)</code></td>
		    </tr>
		  </tbody>
		</table>
```
**页面展示效果**

![](/79.png)

### 表格的单元格合并效果
+ colspan 跨列合并
+ rowspa  跨行合并
![](/80.png)
```html
<table border="1" cellspacing="0">
		  <caption>Color names and values</caption>
		  <tbody>
		    <tr>
		      <th scope="col">Name</th>
		      <th scope="col">HEX</th>
		      <th scope="col">HSLa</th>
		      <th scope="col">RGBa</th>
		    </tr>
		    <tr>
		      <th scope="row">Teal</th>
		      <td colspan="2"><code>#51F6F6</code></td>
		      <!-- <td><code>hsla(180, 90%, 64%, 1)</code></td> -->
		      <td><code>rgba(81, 246, 246, 1)</code></td>
		    </tr>
		    <tr>
		      <th scope="row">Goldenrod</th>
		      <td rowspan="2"><code>#F6BC57</code></td>
		      <td><code>hsla(38, 90%, 65%, 1)</code></td>
		      <td><code>rgba(246, 188, 87, 1)</code></td>
		    </tr>
			<tr>
			  <th scope="row">Goldenrod</th>
			  <!-- <td><code>#F6BC57</code></td> -->
			  <td><code>hsla(38, 90%, 65%, 1)</code></td>
			  <td><code>rgba(246, 188, 87, 1)</code></td>
			</tr>
		  </tbody>
		</table>
```
![](/81.png)

### table布局
早期的网站使用Table布局的多，，现在几乎没有使用table作为网站布局的了
![](/9.webp)

**Table布局的缺点**

1. table 比其他html标签占更多的字节。造成下载时间延迟，占用服务器更多的流量资源（代码冗余）。
2. table 会阻挡浏览其渲染引擎的渲染顺序，会延迟页面的生成速度，让用户等待时间更久。
3. 灵活性差，一旦设计确定，后期很难通过CSS让它展现新的面貌。
4. 不利于搜索引擎抓取信息，直接影响到网站的排名。
