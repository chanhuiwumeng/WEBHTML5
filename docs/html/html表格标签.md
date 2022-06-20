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