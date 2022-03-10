具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 何时使用

我们为 form 提供了以下三种排列方式：

* 水平排列：标签和表单控件水平排列；（默认）

* 垂直排列：标签和表单控件上下垂直排列；

## 代码演示
<div>
  <nc-example>
    <nc-example-showcase>
      <example-form-login></example-form-login>
    </nc-example-showcase>
    <nc-example-legend title="登录框">普通的登录框。</nc-example-legend>
    <nc-example-code [code]="loginCode"></nc-example-code>
  </nc-example>

  <nc-example>
    <nc-example-showcase>
      <example-form-inline></example-form-inline>
    </nc-example-showcase>
    <nc-example-legend title="登录框">普通的登录框。</nc-example-legend>
    <nc-example-code [code]="inlineCode"></nc-example-code>
  </nc-example>
</div>
<div>
  <nc-markdown [data]="api"></nc-markdown>
</div>

